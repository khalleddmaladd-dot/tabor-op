# -*- coding: utf-8 -*-
"""طابور — حزمة التطوير: مهامي + تخصيص القوائم + زيارات الفروع"""
import io, os, sys, shutil

SRC = "/home/claude/work/tabor-op-main/public/assets/index-cdpfaoqm.js"
s = io.open(SRC, encoding="utf-8").read()
orig_len = len(s)


def rep(old, new, tag):
    global s
    n = s.count(old)
    assert n == 1, "ANCHOR %s count=%d" % (tag, n)
    s = s.replace(old, new, 1)
    print("  ok  %s" % tag)


def cut(start_marker, end_marker, new, tag):
    """يستبدل ما بين بداية علامة وبداية علامة أخرى"""
    global s
    i = s.index(start_marker)
    j = s.index(end_marker, i)
    s = s[:i] + new + s[j:]
    print("  ok  %s" % tag)


# ════════════════════════════════════════════════════════════════
# 1) دوال ومساعدات على مستوى الموديول (قبل المكوّن الرئيسي)
# ════════════════════════════════════════════════════════════════
HELPERS = r'''
const TXLS = k => {
    try {
      const r = localStorage.getItem(k);
      return r ? JSON.parse(r) : null
    } catch {
      return null
    }
  },
  TXSS = (k, val) => {
    try {
      localStorage.setItem(k, JSON.stringify(val))
    } catch {}
  },
  TXROLES = ["ops_manager", "area_manager", "branch_manager", "cashier"],
  TXe = (tag, props, kids) => kids === void 0 ? l.jsx(tag, props || {}) : l.jsxs(tag, {
    ...(props || {}),
    children: Array.isArray(kids) ? kids : [kids]
  }),
  TXCSV = (name, rows) => {
    const body = rows.map(r => (r || []).map(c => `"${String(c==null?"":c).replace(/"/g,'""')}"`).join(",")).join("\r\n"),
      blob = new Blob(["\uFEFF" + body], {
        type: "text/csv;charset=utf-8;"
      }),
      el = document.createElement("a");
    el.href = URL.createObjectURL(blob), el.download = name, el.click(), URL.revokeObjectURL(el.href)
  },
  NVAPPLY = (base, cfg, role) => base.map((it, i) => {
    const c = cfg[it.id] || {};
    return {
      ...it,
      label: c.label || it.label,
      _o: typeof c.order == "number" ? c.order : i
    }
  }).filter(it => it.id === "admin" && role === "ops_manager" ? !0 : !(cfg[it.id] && cfg[it.id].roles && cfg[it.id].roles[role] === !1)).sort((x, y) => x._o - y._o),
  VZPARSE = iso => {
    if (!iso) return null;
    const parts = String(iso).split("-").map(Number);
    return parts.length < 3 || parts.some(n => !Number.isFinite(n)) ? null : new Date(parts[0], parts[1] - 1, parts[2])
  },
  VZWEEK = () => {
    const n = new Date,
      st = new Date(n.getFullYear(), n.getMonth(), n.getDate());
    return st.setDate(st.getDate() - st.getDay()), st
  },
  VZINWEEK = iso => {
    const d = VZPARSE(iso);
    if (!d) return !1;
    const st = VZWEEK(),
      en = new Date(st);
    return en.setDate(en.getDate() + 7), d >= st && d < en
  },
  VZTARGET = 4;

function cf() {'''

rep("    return T\n  };\n\nfunction cf() {",
    "    return T\n  };\n" + HELPERS,
    "helpers")

# ════════════════════════════════════════════════════════════════
# 2) حالات جديدة (state)
# ════════════════════════════════════════════════════════════════
rep(
    "[rqDraft, rqSetDraft] = me.useState(null), er = (Y, q, Se) => {",
    '[rqDraft, rqSetDraft] = me.useState(null), '
    '[txCustom, txSetCustom] = me.useState(() => TXLS("tabor_tx_tasks") || []), '
    '[txFilter, txSetFilter] = me.useState("all"), '
    '[txDraft, txSetDraft] = me.useState(null), '
    '[nvCfg, nvSetCfg] = me.useState(() => TXLS("tabor_nv_cfg") || {}), '
    "er = (Y, q, Se) => {",
    "state")

# ════════════════════════════════════════════════════════════════
# 3) حفظ تلقائي
# ════════════════════════════════════════════════════════════════
rep(
    "      Y = !1\n    }\n  }, []);",
    "      Y = !1\n    }\n  }, []);\n"
    '  me.useEffect(() => {\n    TXSS("tabor_tx_tasks", txCustom)\n  }, [txCustom]);\n'
    '  me.useEffect(() => {\n    TXSS("tabor_nv_cfg", nvCfg)\n  }, [nvCfg]);',
    "persist")

# ════════════════════════════════════════════════════════════════
# 4) قائمة المهام = الافتراضية + المضافة من الإدارة
# ════════════════════════════════════════════════════════════════
rep(
    '    ft = hn[O.role] || [],\n    yn = O.branch || "hq",',
    '    txFor = R => [...(hn[R] || []), ...txCustom.filter(x => x.role === R).map(x => ({\n'
    '      ...x,\n      custom: !0\n    }))],\n'
    "    ft = txFor(O.role),\n"
    '    yn = O.branch || "hq",',
    "tasks-source")

rep(
    "Object.entries(hn).forEach(([X, be]) => {\n        be.forEach(wt => {",
    "Object.keys(hn).forEach(X => {\n        txFor(X).forEach(wt => {",
    "csv-tasks")

# ════════════════════════════════════════════════════════════════
# 5) القوائم الجانبية القابلة للتخصيص
# ════════════════════════════════════════════════════════════════
rep('    An = [{\n      id: "dashboard",', '    nvBase = [{\n      id: "dashboard",', "nav-base")

NAV_HELPERS = r'''    }] : []],
    An = NVAPPLY(nvBase, nvCfg, O.role),
    nvAll = nvBase.map((it, i) => ({
      ...it,
      _o: typeof (nvCfg[it.id] || {}).order == "number" ? nvCfg[it.id].order : i
    })).sort((x, y) => x._o - y._o),
    nvLabel = it => (nvCfg[it.id] || {}).label || it.label,
    nvCan = (id, R) => !((nvCfg[id] || {}).roles && nvCfg[id].roles[R] === !1),
    nvRename = (id, val) => nvSetCfg(prev => ({
      ...prev,
      [id]: {
        ...(prev[id] || {}),
        label: val
      }
    })),
    nvToggle = (id, R) => nvSetCfg(prev => {
      const cur = prev[id] || {},
        roles = {
          ...(cur.roles || {})
        };
      return roles[R] = roles[R] === !1, {
        ...prev,
        [id]: {
          ...cur,
          roles
        }
      }
    }),
    nvMove = (i, dir) => {
      const ids = nvAll.map(x => x.id),
        j = i + dir;
      if (j < 0 || j >= ids.length) return;
      const tmp = ids[i];
      ids[i] = ids[j], ids[j] = tmp, nvSetCfg(prev => {
        const nx = {
          ...prev
        };
        return ids.forEach((id, k) => {
          nx[id] = {
            ...(nx[id] || {}),
            order: k
          }
        }), nx
      })
    },
    Nl = () => {'''

rep("    }] : []],\n    Nl = () => {", NAV_HELPERS, "nav-apply")

# ════════════════════════════════════════════════════════════════
# 6) صفحة "مهامي" — بطاقات إحصائيات ملوّنة
# ════════════════════════════════════════════════════════════════
STAT_CARDS = r'''l.jsx("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: 10,
              marginBottom: 14
            },
            children: [
              ["\u2705", "\u0645\u0646\u062C\u0632", Mt, "\u0645\u0647\u0645\u0629 \u0645\u0643\u062A\u0645\u0644\u0629 \u0627\u0644\u064A\u0648\u0645", "#22c55e", "#15803d"],
              ["\u23F3", "\u0645\u062A\u0628\u0642\u064A", ft.length - Mt, "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0625\u0646\u062C\u0627\u0632", "#f59e0b", "#c2760c"],
              ["\uD83D\uDCC5", "\u0627\u0644\u0623\u0633\u0628\u0648\u0639", Z + "%", "\u0645\u062A\u0648\u0633\u0637 \u0622\u062E\u0631 7 \u0623\u064A\u0627\u0645", "#6366f1", "#4338ca"],
              ["\uD83D\uDDD3\uFE0F", "\u0627\u0644\u0634\u0647\u0631", se + "%", "\u0645\u062A\u0648\u0633\u0637 \u0622\u062E\u0631 30 \u064A\u0648\u0645", "#8b5cf6", "#6d28d9"]
            ].map(([ic, ttl, val, sub, c1, c2]) => TXe("div", {
              key: ttl,
              style: {
                background: `linear-gradient(135deg,${c1} 0%,${c2} 100%)`,
                borderRadius: 14,
                padding: "13px 15px",
                color: "#fff",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 5px 16px ${c1}38`
              }
            }, [TXe("div", {
              key: "b",
              style: {
                position: "absolute",
                left: -16,
                top: -16,
                width: 70,
                height: 70,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.13)"
              }
            }), TXe("div", {
              key: "i",
              style: {
                fontSize: 19,
                position: "relative",
                lineHeight: 1.1
              }
            }, ic), TXe("div", {
              key: "v",
              style: {
                fontSize: 27,
                fontWeight: 800,
                lineHeight: 1.15,
                position: "relative",
                marginTop: 2
              }
            }, String(val)), TXe("div", {
              key: "t",
              style: {
                fontSize: 12,
                fontWeight: 700,
                position: "relative",
                marginTop: 2
              }
            }, ttl), TXe("div", {
              key: "s",
              style: {
                fontSize: 10,
                opacity: .85,
                position: "relative"
              }
            }, sub)]))
          }), '''

cut('l.jsxs("div", {\n            style: {\n              display: "grid",\n              gridTemplateColumns: "repeat(3,1fr)",',
    'l.jsxs("div", {\n            style: {\n              display: "grid",\n              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",\n              gap: 12,',
    STAT_CARDS, "stat-cards")

# ════════════════════════════════════════════════════════════════
# 7) شريط الفلاتر + أزرار التقارير + قائمة المهام + نموذج الإضافة
# ════════════════════════════════════════════════════════════════
TASK_BLOCK = r'''TXe("div", {
            style: {
              background: "#fff",
              borderRadius: 14,
              padding: "12px 14px",
              border: `1px solid ${v.l}30`,
              marginBottom: 12
            }
          }, [TXe("div", {
            key: "row1",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              alignItems: "center",
              justifyContent: "space-between"
            }
          }, [TXe("div", {
            key: "f",
            style: {
              display: "flex",
              gap: 4,
              background: "#f5f8f8",
              padding: 4,
              borderRadius: 11
            }
          }, [
            ["all", `\u0627\u0644\u0643\u0644 (${ft.length})`],
            ["done", `\u2705 \u0645\u0646\u062C\u0632 (${Mt})`],
            ["pending", `\u23F3 \u0645\u062A\u0628\u0642\u064A (${ft.length-Mt})`]
          ].map(([fk, flb]) => TXe("button", {
            key: fk,
            onClick: () => txSetFilter(fk),
            style: {
              padding: "6px 15px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "inherit",
              background: txFilter === fk ? v.t : "transparent",
              color: txFilter === fk ? "#fff" : "#7a8686",
              boxShadow: txFilter === fk ? `0 2px 8px ${v.t}45` : "none",
              transition: "all .2s"
            }
          }, flb))), _e && TXe("button", {
            key: "add",
            onClick: () => txSetDraft({
              id: "",
              role: O.role,
              title: ""
            }),
            style: {
              ...a.addBtn,
              fontFamily: "inherit"
            }
          }, "\u2795 \u0645\u0647\u0645\u0629 \u062C\u062F\u064A\u062F\u0629")]), TXe("div", {
            key: "row2",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginTop: 10,
              paddingTop: 10,
              borderTop: "1px dashed #edefef"
            }
          }, [
            ["\uD83D\uDCCA \u062A\u0642\u0631\u064A\u0631 \u0634\u0627\u0645\u0644", "#0ea5e9", "all"],
            ["\u2705 \u0627\u0644\u0645\u0646\u062C\u0632\u0629 \u0641\u0642\u0637", "#22c55e", "done"],
            ["\u26A0\uFE0F \u0627\u0644\u0645\u062A\u0623\u062E\u0631\u0629 \u0641\u0642\u0637", "#ef4444", "late"]
          ].map(([lbl, col, kind]) => TXe("button", {
            key: kind,
            onClick: () => txReport(kind),
            style: {
              flex: "1 1 150px",
              padding: "9px 10px",
              borderRadius: 10,
              border: `1px solid ${col}38`,
              background: `${col}12`,
              color: col,
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "inherit"
            }
          }, lbl)))]), TXe("div", {
            style: {
              background: "#fff",
              borderRadius: 14,
              padding: "14px 16px",
              border: `1px solid ${v.l}30`
            }
          }, [TXe("div", {
            key: "h",
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12
            }
          }, [TXe("h3", {
            key: "t",
            style: {
              fontSize: 14,
              fontWeight: 700,
              margin: 0
            }
          }, txFilter === "done" ? "\u2705 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0646\u062C\u0632\u0629" : txFilter === "pending" ? "\u23F3 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629" : "\uD83D\uDCCB \u0642\u0627\u0626\u0645\u0629 \u0645\u0647\u0627\u0645 \u0627\u0644\u064A\u0648\u0645"), TXe("span", {
            key: "c",
            style: {
              fontSize: 11,
              padding: "3px 10px",
              borderRadius: 12,
              background: `${xe($e)}15`,
              color: xe($e),
              fontWeight: 700
            }
          }, `${Mt}/${ft.length}`)]), txList.length === 0 ? TXe("div", {
            key: "empty",
            style: {
              textAlign: "center",
              padding: "30px 10px",
              color: "#bbb",
              fontSize: 13
            }
          }, txFilter === "done" ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0645\u0646\u062C\u0632\u0629 \u0628\u0639\u062F" : txFilter === "pending" ? "\uD83C\uDF89 \u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0645\u062A\u0628\u0642\u064A\u0629 \u2014 \u0623\u062D\u0633\u0646\u062A!" : "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645") : TXe("div", {
            key: "list",
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 5
            }
          }, txList.map((P, ee) => {
            const de = txDone(P);
            return TXe("div", {
              key: P.id,
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 12px",
                background: de ? "#f2fdf5" : "#fff",
                border: `1px solid ${de?"#22c55e28":`${v.l}30`}`,
                borderRadius: 10,
                transition: "all .2s"
              }
            }, [TXe("button", {
              key: "b",
              onClick: () => Gr(P.id),
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10,
                flex: 1,
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                textAlign: "right",
                fontFamily: "inherit"
              }
            }, [TXe("div", {
              key: "cb",
              style: {
                width: 24,
                height: 24,
                borderRadius: 7,
                border: `2px solid ${de?"#22c55e":v.l}`,
                background: de ? "#22c55e" : "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "#fff",
                fontSize: 13,
                fontWeight: 800,
                transition: "all .2s"
              }
            }, de ? "\u2713" : ""), TXe("div", {
              key: "tx",
              style: {
                flex: 1
              }
            }, [TXe("span", {
              key: "t",
              style: {
                fontSize: 13,
                fontWeight: de ? 400 : 500,
                color: de ? "#9aa4a4" : v.d,
                textDecoration: de ? "line-through" : "none",
                display: "block"
              }
            }, P.title), P.custom ? TXe("span", {
              key: "bd",
              style: {
                fontSize: 9,
                fontWeight: 700,
                color: "#7c3aed",
                background: "#8b5cf618",
                padding: "2px 8px",
                borderRadius: 7,
                display: "inline-block",
                marginTop: 4
              }
            }, "\uD83D\uDCCC \u0645\u0647\u0645\u0629 \u0645\u0636\u0627\u0641\u0629 \u0645\u0646 \u0627\u0644\u0625\u062F\u0627\u0631\u0629") : null])]), P.custom && _e ? TXe("button", {
              key: "e",
              title: "\u062A\u0639\u062F\u064A\u0644",
              onClick: () => txSetDraft({
                id: P.id,
                role: P.role,
                title: P.title
              }),
              style: {
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                padding: "2px 4px"
              }
            }, "\u270F\uFE0F") : null, P.custom && _e ? TXe("button", {
              key: "d",
              title: "\u062D\u0630\u0641",
              onClick: () => txSetCustom(prev => prev.filter(x => x.id !== P.id)),
              style: {
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                padding: "2px 4px",
                color: "#ef4444"
              }
            }, "\uD83D\uDDD1") : null, TXe("span", {
              key: "n",
              style: {
                fontSize: 9,
                color: "#ccc",
                fontWeight: 600,
                padding: "2px 6px",
                background: "#fafafa",
                borderRadius: 4
              }
            }, String(ee + 1))])
          }))]), txDraft && l.jsx(mn, {
            close: () => txSetDraft(null),
            title: txDraft.id ? "\u270F\uFE0F \u062A\u0639\u062F\u064A\u0644 \u0645\u0647\u0645\u0629" : "\u2795 \u0625\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629 \u062C\u062F\u064A\u062F\u0629",
            children: TXe("div", {}, [TXe("div", {
              key: "r",
              style: a.fg
            }, [TXe("label", {
              key: "l",
              style: a.fl
            }, "\u0627\u0644\u062F\u0648\u0631 \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646 \u0627\u0644\u0645\u0647\u0645\u0629"), TXe("select", {
              key: "s",
              value: txDraft.role,
              onChange: ev => txSetDraft(prev => ({
                ...prev,
                role: ev.target.value
              })),
              style: a.fi
            }, TXROLES.map(R => TXe("option", {
              key: R,
              value: R
            }, qn[R])))]), TXe("div", {
              key: "t",
              style: a.fg
            }, [TXe("label", {
              key: "l",
              style: a.fl
            }, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 *"), TXe("input", {
              key: "i",
              value: txDraft.title,
              autoFocus: !0,
              placeholder: "\u0645\u062B\u0627\u0644: \u0645\u062A\u0627\u0628\u0639\u0629 \u062A\u0642\u064A\u064A\u0645\u0627\u062A \u062C\u0648\u062C\u0644 \u0645\u0627\u0628",
              onChange: ev => txSetDraft(prev => ({
                ...prev,
                title: ev.target.value
              })),
              style: a.fi
            })]), TXe("p", {
              key: "hint",
              style: {
                fontSize: 11,
                color: "#999",
                margin: "0 0 6px"
              }
            }, "\u0633\u062A\u0638\u0647\u0631 \u0627\u0644\u0645\u0647\u0645\u0629 \u0644\u062F\u0649 \u0643\u0644 \u0645\u0646 \u064A\u0634\u063A\u0644 \u0647\u0630\u0627 \u0627\u0644\u062F\u0648\u0631 \u0645\u0639 \u0639\u0644\u0627\u0645\u0629 \u0645\u0647\u0645\u0629 \u0645\u0636\u0627\u0641\u0629 \u0645\u0646 \u0627\u0644\u0625\u062F\u0627\u0631\u0629."), TXe("button", {
              key: "s",
              style: a.submitBtn,
              onClick: () => {
                const tt = (txDraft.title || "").trim();
                tt && (txDraft.id ? txSetCustom(prev => prev.map(x => x.id === txDraft.id ? {
                  ...x,
                  title: tt,
                  role: txDraft.role
                } : x)) : txSetCustom(prev => [...prev, {
                  id: "cx" + gn(),
                  title: tt,
                  role: txDraft.role,
                  by: O.name,
                  createdAt: U()
                }]), txSetDraft(null))
              }
            }, txDraft.id ? "\uD83D\uDCBE \u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644" : "\u2795 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0647\u0645\u0629")])
          })]'''

_ls = '''l.jsxs("div", {
            style: {
              background: "#fff",
              borderRadius: 14,
              padding: "14px 16px",
              border: `1px solid ${v.l}30`
            },
            children: [l.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12
              },
              children: [l.jsx("h3", {
                style: {
                  fontSize: 14,
                  fontWeight: 700,
                  margin: 0
                },
                children: "\U0001F4CB \u0642\u0627\u0626\u0645\u0629 \u0645\u0647\u0627\u0645 \u0627\u0644\u064A\u0648\u0645"'''

_le = '          })]\n        })\n      }\n      if (z === "reports_req") {'

i0 = s.index(_ls)
i1 = s.index(_le) + len("          })]")
s = s[:i0] + TASK_BLOCK + s[i1:]
print("  ok  task-list")

# مساعدات صفحة المهام (تُعرّف داخل نطاق الصفحة)
rep(
    '''          se = j.length ? Math.round(j.reduce((P, ee) => P + _(ee), 0) / j.length) : 0;''',
    r'''          se = j.length ? Math.round(j.reduce((P, ee) => P + _(ee), 0) / j.length) : 0,
          txDone = P => B[`${yn}-${P.id}`] === U(),
          txList = txFilter === "done" ? ft.filter(txDone) : txFilter === "pending" ? ft.filter(P => !txDone(P)) : ft,
          txBranchName = (ot.find(x => x.id === O.branch) || {}).name || "\u0627\u0644\u0625\u062F\u0627\u0631\u0629",
          txReport = kind => {
            const src = kind === "done" ? ft.filter(txDone) : kind === "late" ? ft.filter(P => !txDone(P)) : ft,
              ttl = kind === "done" ? "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0646\u062C\u0632\u0629" : kind === "late" ? "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u062A\u0623\u062E\u0631\u0629" : "\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0634\u0627\u0645\u0644 \u0644\u0644\u0645\u0647\u0627\u0645",
              rows = [
                ["\u0637\u0627\u0628\u0648\u0631 \u2014 " + ttl],
                ["\u0627\u0644\u0645\u0646\u0635\u0628", qn[O.role], "\u0627\u0644\u0645\u0648\u0638\u0641", O.nameAr || O.name, "\u0627\u0644\u0641\u0631\u0639", txBranchName, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E", U()],
                [],
                ["#", "\u0627\u0644\u0645\u0647\u0645\u0629", "\u0627\u0644\u062D\u0627\u0644\u0629", "\u0627\u0644\u0645\u0635\u062F\u0631", "\u0627\u0644\u0645\u0646\u0635\u0628", "\u0627\u0644\u0641\u0631\u0639", "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"]
              ];
            src.forEach((P, i2) => rows.push([i2 + 1, P.title, txDone(P) ? "\u2713 \u0645\u0646\u062C\u0632" : "\u2717 \u0644\u0645 \u064A\u0646\u062C\u0632", P.custom ? "\u0645\u0636\u0627\u0641\u0629 \u0645\u0646 \u0627\u0644\u0625\u062F\u0627\u0631\u0629" : "\u0623\u0633\u0627\u0633\u064A\u0629", qn[O.role], txBranchName, U()])), rows.push([]), rows.push(["\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A", ft.length, "\u0627\u0644\u0645\u0646\u062C\u0632", Mt, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A", ft.length - Mt, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0625\u0646\u062C\u0627\u0632", $e + "%"]), rows.push(["\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0623\u0633\u0628\u0648\u0639", Z + "%", "\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0634\u0647\u0631", se + "%"]), TXCSV(`tabor_tasks_${kind}_${U()}.csv`, rows)
          };''',
    "task-helpers")

# ════════════════════════════════════════════════════════════════
# 8) لوحة تخصيص القوائم في صفحة الإدارة
# ════════════════════════════════════════════════════════════════
NAV_PANEL = r''', TXe("div", {
          key: "nvpanel",
          style: {
            marginTop: 24,
            background: "#fff",
            borderRadius: 16,
            padding: "16px 18px",
            border: `1px solid ${v.l}45`
          }
        }, [TXe("div", {
          key: "hd",
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8
          }
        }, [TXe("h2", {
          key: "t",
          style: {
            fontSize: 16,
            fontWeight: 800,
            margin: 0,
            color: v.d
          }
        }, "\uD83D\uDD27 \u062A\u062E\u0635\u064A\u0635 \u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"), TXe("button", {
          key: "r",
          onClick: () => nvSetCfg({}),
          style: {
            ...a.stBtn,
            color: "#ef4444",
            fontFamily: "inherit"
          }
        }, "\u21BA \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A")]), TXe("p", {
          key: "sub",
          style: {
            fontSize: 11,
            color: "#999",
            margin: "4px 0 14px"
          }
        }, "\u0639\u062F\u0651\u0644 \u0627\u0644\u0645\u0633\u0645\u0651\u0649 \u0645\u0628\u0627\u0634\u0631\u0629 \u2022 \u0631\u062A\u0651\u0628 \u0628\u0627\u0644\u0623\u0633\u0647\u0645 \u25B2\u25BC \u2022 \u062D\u062F\u0651\u062F \u0645\u0646 \u064A\u0631\u0649 \u0643\u0644 \u062E\u0627\u0646\u0629 (\u0623\u062E\u0636\u0631 = \u064A\u0634\u0648\u0641\u0647\u0627 \u060C \u0623\u062D\u0645\u0631 = \u0645\u062E\u0641\u064A\u0629 \u0639\u0646\u0647)"), TXe("div", {
          key: "list",
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 8
          }
        }, nvAll.map((it, i) => TXe("div", {
          key: it.id,
          style: {
            border: `1px solid ${v.l}48`,
            borderRadius: 12,
            padding: "10px 12px",
            background: "#fcfdfd"
          }
        }, [TXe("div", {
          key: "top",
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 9
          }
        }, [TXe("div", {
          key: "ar",
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 2
          }
        }, [TXe("button", {
          key: "u",
          onClick: () => nvMove(i, -1),
          disabled: i === 0,
          style: {
            width: 26,
            height: 18,
            lineHeight: 1,
            borderRadius: 5,
            border: `1px solid ${v.l}`,
            background: i === 0 ? "#f6f7f7" : "#fff",
            color: i === 0 ? "#ccc" : v.t,
            cursor: i === 0 ? "not-allowed" : "pointer",
            fontSize: 10,
            fontFamily: "inherit"
          }
        }, "\u25B2"), TXe("button", {
          key: "d",
          onClick: () => nvMove(i, 1),
          disabled: i === nvAll.length - 1,
          style: {
            width: 26,
            height: 18,
            lineHeight: 1,
            borderRadius: 5,
            border: `1px solid ${v.l}`,
            background: i === nvAll.length - 1 ? "#f6f7f7" : "#fff",
            color: i === nvAll.length - 1 ? "#ccc" : v.t,
            cursor: i === nvAll.length - 1 ? "not-allowed" : "pointer",
            fontSize: 10,
            fontFamily: "inherit"
          }
        }, "\u25BC")]), TXe("span", {
          key: "ord",
          style: {
            fontSize: 11,
            fontWeight: 800,
            color: "#c3cccc",
            width: 18,
            textAlign: "center"
          }
        }, String(i + 1)), TXe("input", {
          key: "in",
          value: nvLabel(it),
          onChange: ev => nvRename(it.id, ev.target.value),
          style: {
            ...a.fi,
            flex: 1,
            fontWeight: 700,
            background: "#fff"
          }
        }), TXe("span", {
          key: "id",
          style: {
            fontSize: 9,
            color: "#c7cfcf",
            fontFamily: "monospace",
            direction: "ltr"
          }
        }, it.id)]), TXe("div", {
          key: "roles",
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 6
          }
        }, TXROLES.map(R => {
          const vis = nvCan(it.id, R),
            lock = it.id === "admin" && R === "ops_manager";
          return TXe("button", {
            key: R,
            onClick: () => {
              lock || nvToggle(it.id, R)
            },
            title: lock ? "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u062E\u0641\u0627\u0621 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0646\u0638\u0627\u0645 \u0639\u0646 \u0645\u062F\u064A\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644" : "",
            style: {
              padding: "5px 12px",
              borderRadius: 20,
              border: `1px solid ${vis?"#22c55e55":"#ef444455"}`,
              background: vis ? "#22c55e15" : "#ef444410",
              color: vis ? "#16a34a" : "#ef4444",
              fontSize: 11,
              fontWeight: 700,
              cursor: lock ? "not-allowed" : "pointer",
              opacity: lock ? .55 : 1,
              fontFamily: "inherit"
            }
          }, `${vis?"\u2705":"\uD83D\uDEAB"} ${qn[R]}`)
        }))])))])]
      });
      if (z === "export_reports") return l.jsxs(l.Fragment, {'''

rep('        })]\n      });\n      if (z === "export_reports") return l.jsxs(l.Fragment, {',
    "        })" + NAV_PANEL, "nav-panel")

# ════════════════════════════════════════════════════════════════
# 9) صفحة الزيارات — متتبع الزيارات الأسبوعية
# ════════════════════════════════════════════════════════════════
VZ_TRACKER = r'''}), (Ht || _e) && (() => {
            const vzVisits = c.filter(x => VZINWEEK(x.date)),
              vzNames = vzVisits.map(x => x.branch),
              vzDone = ot.filter(x => vzNames.indexOf(x.name) > -1),
              vzLeft = ot.filter(x => vzNames.indexOf(x.name) === -1),
              vzN = vzVisits.length,
              vzPct = Math.min(100, Math.round(vzN / VZTARGET * 100)),
              vzOk = vzN >= VZTARGET;
            return TXe(l.Fragment, {}, [TXe("div", {
              key: "trk",
              style: {
                background: vzOk ? "linear-gradient(135deg,#22c55e 0%,#15803d 100%)" : `linear-gradient(135deg,${v.t} 0%,#5d9a9d 100%)`,
                borderRadius: 16,
                padding: "16px 18px",
                marginBottom: 12,
                color: "#fff",
                position: "relative",
                overflow: "hidden",
                boxShadow: vzOk ? "0 6px 20px #22c55e40" : `0 6px 20px ${v.t}40`
              }
            }, [TXe("div", {
              key: "bg",
              style: {
                position: "absolute",
                left: -25,
                top: -25,
                width: 130,
                height: 130,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)"
              }
            }), TXe("div", {
              key: "hd",
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 8,
                position: "relative"
              }
            }, [TXe("div", {
              key: "l"
            }, [TXe("h3", {
              key: "t",
              style: {
                fontSize: 15,
                fontWeight: 800,
                margin: 0
              }
            }, "\uD83C\uDFAF \u0645\u062A\u062A\u0628\u0639 \u0627\u0644\u0632\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629"), TXe("p", {
              key: "s",
              style: {
                fontSize: 11,
                opacity: .85,
                margin: "3px 0 0"
              }
            }, "\u0627\u0644\u0645\u0637\u0644\u0648\u0628 4 \u0632\u064A\u0627\u0631\u0627\u062A \u0645\u064A\u062F\u0627\u0646\u064A\u0629 \u0625\u0644\u0632\u0627\u0645\u064A\u0629 \u0643\u0644 \u0623\u0633\u0628\u0648\u0639")]), TXe("div", {
              key: "n",
              style: {
                textAlign: "center"
              }
            }, [TXe("div", {
              key: "v",
              style: {
                fontSize: 28,
                fontWeight: 800,
                lineHeight: 1
              }
            }, `${vzN}/${VZTARGET}`), TXe("div", {
              key: "p",
              style: {
                fontSize: 10,
                opacity: .85
              }
            }, `${vzPct}%`)])]), TXe("div", {
              key: "dots",
              style: {
                display: "flex",
                gap: 6,
                margin: "13px 0 8px",
                position: "relative"
              }
            }, [0, 1, 2, 3].map(ix => TXe("div", {
              key: ix,
              style: {
                flex: 1,
                height: 14,
                borderRadius: 9,
                background: ix < vzN ? "#fff" : "rgba(255,255,255,0.22)",
                boxShadow: ix < vzN ? "0 2px 6px rgba(0,0,0,0.12)" : "none",
                transition: "background .4s"
              }
            }))), TXe("div", {
              key: "msg",
              style: {
                fontSize: 12,
                fontWeight: 700,
                position: "relative"
              }
            }, vzOk ? "\uD83C\uDFC6 \u0623\u062D\u0633\u0646\u062A! \u0623\u0643\u0645\u0644\u062A \u0627\u0644\u0640 4 \u0632\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0625\u0644\u0632\u0627\u0645\u064A\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639" : `\u0645\u062A\u0628\u0642\u064A ${VZTARGET-vzN} \u0632\u064A\u0627\u0631\u0629 \u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639`)]), TXe("div", {
              key: "cols",
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: 10,
                marginBottom: 14
              }
            }, [
              [`\u2705 \u0641\u0631\u0648\u0639 \u062A\u0645\u062A \u0632\u064A\u0627\u0631\u062A\u0647\u0627 (${vzDone.length})`, vzDone, "#22c55e", "#16a34a", "\u0644\u0645 \u062A\u064F\u0633\u062C\u0651\u0644 \u0623\u064A \u0632\u064A\u0627\u0631\u0629 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639"],
              [`\u23F3 \u0644\u0645 \u062A\u064F\u0632\u064E\u0631 \u0628\u0639\u062F (${vzLeft.length})`, vzLeft, "#f59e0b", "#d97706", "\uD83C\uDF89 \u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0631\u0648\u0639 \u062A\u0645\u062A \u0632\u064A\u0627\u0631\u062A\u0647\u0627"]
            ].map(([ttl, arr, col, dark, empty]) => TXe("div", {
              key: ttl,
              style: {
                ...a.card,
                borderRight: `4px solid ${col}`
              }
            }, [TXe("p", {
              key: "t",
              style: {
                fontSize: 12,
                fontWeight: 800,
                margin: "0 0 8px",
                color: dark
              }
            }, ttl), arr.length ? TXe("div", {
              key: "l",
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: 5
              }
            }, arr.map(bx => TXe("span", {
              key: bx.id,
              style: {
                fontSize: 11,
                fontWeight: 600,
                background: `${col}16`,
                color: dark,
                padding: "4px 11px",
                borderRadius: 14
              }
            }, `\uD83C\uDFEA ${bx.name}`))) : TXe("p", {
              key: "e",
              style: {
                fontSize: 11,
                color: "#b6bebe",
                margin: 0
              }
            }, empty)])))])
          })(), l.jsx("div", {
            style: a.cg,
            children: c.map(j => {
              var _;'''

rep('}), l.jsx("div", {\n            style: a.cg,\n            children: c.map(j => {\n              var _;',
    VZ_TRACKER, "vz-tracker")

# شارة "هذا الأسبوع"
rep('children: ["\U0001F3EA ", j.branch]',
    'children: ["\U0001F3EA ", j.branch, VZINWEEK(j.date) ? l.jsx("span", {\n'
    '                        style: {\n'
    '                          fontSize: 9,\n'
    '                          fontWeight: 700,\n'
    '                          color: v.t,\n'
    '                          background: `${v.t}1a`,\n'
    '                          padding: "3px 9px",\n'
    '                          borderRadius: 12,\n'
    '                          marginRight: 7,\n'
    '                          verticalAlign: "middle",\n'
    '                          whiteSpace: "nowrap"\n'
    '                        },\n'
    '                        children: "\U0001F4C5 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639"\n'
    "                      }) : null]",
    "vz-badge")

# أشرطة تقدم أعرض
rep('''                    }), l.jsx("div", {
                      style: {
                        height: 6,
                        background: "#f0f0f0",
                        borderRadius: 3,
                        overflow: "hidden"
                      },
                      children: l.jsx("div", {
                        style: {
                          height: "100%",
                          borderRadius: 3,''',
    '''                    }), l.jsx("div", {
                      style: {
                        height: 12,
                        background: "#eef1f1",
                        borderRadius: 8,
                        overflow: "hidden",
                        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)"
                      },
                      children: l.jsx("div", {
                        style: {
                          height: "100%",
                          borderRadius: 8,''',
    "vz-bars")

rep('''                  return l.jsxs("div", {
                    style: {
                      marginBottom: 4
                    },''',
    '''                  return l.jsxs("div", {
                    style: {
                      marginBottom: 9
                    },''',
    "vz-bar-gap")

io.open(SRC, "w", encoding="utf-8").write(s)
print("\nDONE  %d -> %d chars (+%d)" % (orig_len, len(s), len(s) - orig_len))
