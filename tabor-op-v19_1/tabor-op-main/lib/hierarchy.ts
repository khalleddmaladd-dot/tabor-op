/**
 * التسلسل الوظيفي في طابور — مصدر واحد للحقيقة يستخدمه الخادم والواجهة.
 *
 * مدير التشغيل (0) → مدير المنطقة (1) → مشرف الفرع (2) → الكاشير (3)
 * كلما صغر الرقم علا المنصب.
 */
export const ROLE_LEVEL: Record<string, number> = {
  ops_manager: 0,
  area_manager: 1,
  branch_manager: 2,
  cashier: 3,
};

export const ROLES = Object.keys(ROLE_LEVEL);

export const ROLE_AR: Record<string, string> = {
  ops_manager: "مدير التشغيل",
  area_manager: "مدير المنطقة",
  branch_manager: "مشرف فرع",
  cashier: "كاشير",
};

export type Identity = {
  role: string;
  region: string;
  branch: string;
  name: string;
};

/** هوية المستخدم كما ترسلها الواجهة في الترويسات */
export function identityOf(req: Request): Identity {
  const role = String(req.headers.get("x-tabor-role") || "");
  return {
    role: ROLES.includes(role) ? role : "",
    region: decodeHeader(req.headers.get("x-tabor-region")),
    branch: decodeHeader(req.headers.get("x-tabor-branch")),
    name: decodeHeader(req.headers.get("x-tabor-user")),
  };
}

/** الترويسات لا تقبل العربية مباشرة، لذا تُرسل مُرمَّزة بـ encodeURIComponent */
function decodeHeader(value: string | null) {
  if (!value) return "";
  try {
    return decodeURIComponent(value).slice(0, 120);
  } catch {
    return value.slice(0, 120);
  }
}

export function isAdmin(identity: Identity) {
  return identity.role === "ops_manager";
}

/** هل يستطيع منصب `actor` إسناد مهمة إلى منصب `target`؟ (المستهدف أدنى منه فقط) */
export function canAssign(actorRole: string, targetRole: string) {
  const actor = ROLE_LEVEL[actorRole];
  const target = ROLE_LEVEL[targetRole];
  if (actor === undefined || target === undefined) return false;
  return target > actor;
}

/** المناصب التي يحق للمستخدم الإسناد إليها */
export function assignableRoles(actorRole: string) {
  return ROLES.filter((role) => canAssign(actorRole, role));
}

/**
 * نطاق التكليف المسموح: مدير المنطقة لا يتجاوز منطقته، ومشرف الفرع لا يتجاوز فرعه.
 * يُعيد النطاق بعد التصحيح، أو رسالة خطأ عند تجاوز الصلاحية.
 */
export function scopeFor(identity: Identity, region: string, branch: string) {
  if (identity.role === "ops_manager") return { region, branch };

  if (identity.role === "area_manager") {
    if (region && identity.region && region !== identity.region) {
      return { error: "لا يمكن إسناد مهمة خارج منطقتك" as const };
    }
    return { region: identity.region || region, branch };
  }

  if (identity.role === "branch_manager") {
    if (branch && identity.branch && branch !== identity.branch) {
      return { error: "لا يمكن إسناد مهمة خارج فرعك" as const };
    }
    return { region: identity.region || region, branch: identity.branch || branch };
  }

  return { error: "منصبك لا يسمح بإسناد مهام مستعجلة" as const };
}
