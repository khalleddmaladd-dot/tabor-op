# -*- coding: utf-8 -*-
"""طابور v20 — تحكم كامل بالمهام + إسناد مهام مستعجلة حسب التسلسل الوظيفي"""
import io

SRC = "/home/claude/work/tabor-op-main/public/assets/index-v19.js"
s = io.open(SRC, encoding="utf-8").read()
n0 = len(s)


def rep(old, new, tag):
    global s
    assert s.count(old) == 1, "ANCHOR %s = %d" % (tag, s.count(old))
    s = s.replace(old, new, 1)
    print("  ok  %s" % tag)


# ── 1) حالات جديدة ──────────────────────────────────────────────
rep(
    '[nvCfg, nvSetCfg] = me.useState(() => TXLS("tabor_nv_cfg") || {}), er = (Y, q, Se) => {',
    '[nvCfg, nvSetCfg] = me.useState(() => TXLS("tabor_nv_cfg") || {}), '
    '[txOv, txSetOv] = me.useState(() => TXLS("tabor_tx_ov") || {}), '
    '[txEdit, txSetEdit] = me.useState(!1), '
    '[txUrg, txSetUrg] = me.useState(null), '
    "er = (Y, q, Se) => {",
    "state")

rep(
    '  me.useEffect(() => {\n    TXSS("tabor_nv_cfg", nvCfg)\n  }, [nvCfg]);',
    '  me.useEffect(() => {\n    TXSS("tabor_nv_cfg", nvCfg)\n  }, [nvCfg]);\n'
    '  me.useEffect(() => {\n    TXSS("tabor_tx_ov", txOv)\n  }, [txOv]);',
    "persist")

# ── 2) طبقة التحكم بالمهام (تعديل/إخفاء/ترتيب) + التسلسل الوظيفي ──
rep(
    r'''    txFor = R => [...(hn[R] || []), ...txCustom.filter(x => x.role === R).map(x => ({
      ...x,
      custom: !0
    }))],''',
    r'''    txOvGet = id => txOv[id] || {},
    txFor = R => {
      const base = [...(hn[R] || []).map(x => ({
        ...x,
        role: R,
        custom: !1
      })), ...txCustom.filter(x => x.role === R).map(x => ({
        ...x,
        custom: !0
      }))];
      return base.filter(x => !txOvGet(x.id).hidden).map((x, i) => ({
        ...x,
        title: txOvGet(x.id).title || x.title,
        edited: !!txOvGet(x.id).title,
        _o: typeof txOvGet(x.id).order == "number" ? txOvGet(x.id).order : i
      })).sort((A, B) => A._o - B._o)
    },
    txMove = (list, i, dir) => {
      const ids = list.map(x => x.id),
        j = i + dir;
      if (j < 0 || j >= ids.length) return;
      const t = ids[i];
      ids[i] = ids[j], ids[j] = t, txSetOv(prev => {
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
    txDrop = x => x.custom ? txSetCustom(prev => prev.filter(q => q.id !== x.id)) : txSetOv(prev => ({
      ...prev,
      [x.id]: {
        ...(prev[x.id] || {}),
        hidden: !0
      }
    })),
    txRestore = id => txSetOv(prev => {
      const nx = {
        ...prev
      };
      return nx[id] = {
        ...(nx[id] || {}),
        hidden: !1
      }, nx
    }),
    txRank = {
      ops_manager: 0,
      area_manager: 1,
      branch_manager: 2,
      cashier: 3
    },
    txSubs = W.filter(u => u.id !== O.id && u.active !== !1 && txRank[u.role] > txRank[O.role] && (_e ? !0 : Ht ? u.region === O.region : un ? u.branch === O.branch : !1)).sort((A, B) => txRank[A.role] - txRank[B.role] || (A.nameAr || A.name).localeCompare(B.nameAr || B.name)),''',
    "task-layer")

# ── 3) إعادة بناء صفحة "مهامي" بالكامل ──────────────────────────
PAGE = r'''if (z === "tasks") {
        const txDays = n => {
            const arr = [];
            for (let i = n - 1; i >= 0; i--) {
              const d = new Date;
              d.setDate(d.getDate() - i), arr.push(d.toISOString().split("T")[0])
            }
            return arr
          },
          txW = txDays(7),
          txM = txDays(30),
          txWD = ["\u0623\u062D\u062F", "\u0625\u062B\u0646", "\u062B\u0644\u0627", "\u0623\u0631\u0628", "\u062E\u0645\u064A", "\u062C\u0645\u0639", "\u0633\u0628\u062A"],
          txHist = d => Kr[`${yn}|${O.role}|${d}`] || 0,
          txAvgW = txW.length ? Math.round(txW.reduce((t, d) => t + txHist(d), 0) / txW.length) : 0,
          txAvgM = txM.length ? Math.round(txM.reduce((t, d) => t + txHist(d), 0) / txM.length) : 0,
          txDone = P => B[`${yn}-${P.id}`] === U(),
          txList = txFilter === "done" ? ft.filter(txDone) : txFilter === "pending" ? ft.filter(P => !txDone(P)) : ft,
          txHidden = [...(hn[O.role] || []), ...txCustom.filter(x => x.role === O.role)].filter(x => txOvGet(x.id).hidden),
          txMine = We.filter(x => x.assigneeId === O.id),
          txSent = We.filter(x => x.byId === O.id),
          txBranch = (ot.find(x => x.id === O.branch) || {}).name || "\u0627\u0644\u0625\u062F\u0627\u0631\u0629",
          txPr = pr => pr === "\u0639\u0627\u0644\u064A" ? "#ef4444" : pr === "\u0645\u062A\u0648\u0633\u0637" ? "#f59e0b" : "#0ea5e9",
          txSt = st => st === "\u0645\u0643\u062A\u0645\u0644" ? "#22c55e" : st === "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630" ? "#f59e0b" : v.t,
          txSec = (icon, title, extra) => TXe("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              margin: "0 0 10px"
            }
          }, [TXe("span", {
            key: "i",
            style: {
              fontSize: 15
            }
          }, icon), TXe("h3", {
            key: "t",
            style: {
              fontSize: 14,
              fontWeight: 800,
              margin: 0,
              color: v.d
            }
          }, title), extra || null]),
          txPill = (txt, col) => TXe("span", {
            style: {
              fontSize: 10,
              fontWeight: 700,
              color: col,
              background: `${col}15`,
              padding: "2px 9px",
              borderRadius: 12,
              whiteSpace: "nowrap"
            }
          }, txt),
          txCard = {
            background: "#fff",
            borderRadius: 14,
            padding: "14px 16px",
            border: `1px solid ${v.l}45`,
            marginBottom: 12
          },
          txReport = kind => {
            const src = kind === "done" ? ft.filter(txDone) : kind === "late" ? ft.filter(P => !txDone(P)) : ft,
              ttl = kind === "done" ? "\u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0646\u062C\u0632\u0629" : kind === "late" ? "\u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u062A\u0623\u062E\u0631\u0629" : "\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0634\u0627\u0645\u0644 \u0644\u0644\u0645\u0647\u0627\u0645",
              rows = [
                ["\u0637\u0627\u0628\u0648\u0631 \u2014 " + ttl],
                ["\u0627\u0644\u0645\u0646\u0635\u0628", qn[O.role], "\u0627\u0644\u0645\u0648\u0638\u0641", O.nameAr || O.name, "\u0627\u0644\u0641\u0631\u0639", txBranch, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E", U()],
                [],
                ["#", "\u0627\u0644\u0645\u0647\u0645\u0629", "\u0627\u0644\u062D\u0627\u0644\u0629", "\u0627\u0644\u0645\u0635\u062F\u0631"]
              ];
            src.forEach((P, i) => rows.push([i + 1, P.title, txDone(P) ? "\u2713 \u0645\u0646\u062C\u0632" : "\u2717 \u0644\u0645 \u064A\u0646\u062C\u0632", P.custom ? "\u0645\u0636\u0627\u0641\u0629 \u0645\u0646 \u0627\u0644\u0625\u062F\u0627\u0631\u0629" : P.edited ? "\u0623\u0633\u0627\u0633\u064A\u0629 (\u0645\u0639\u062F\u0651\u0644\u0629)" : "\u0623\u0633\u0627\u0633\u064A\u0629"]));
            if (rows.push([]), rows.push(["\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A", ft.length, "\u0627\u0644\u0645\u0646\u062C\u0632", Mt, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A", ft.length - Mt, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0625\u0646\u062C\u0627\u0632", $e + "%"]), rows.push(["\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0623\u0633\u0628\u0648\u0639", txAvgW + "%", "\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0634\u0647\u0631", txAvgM + "%"]), txMine.length) {
              rows.push([]), rows.push(["\u26A1 \u0645\u0647\u0627\u0645 \u0645\u0633\u062A\u0639\u062C\u0644\u0629 \u0645\u0648\u062C\u0647\u0629 \u0644\u064A"]), rows.push(["#", "\u0627\u0644\u0645\u0647\u0645\u0629", "\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629", "\u0627\u0644\u062D\u0627\u0644\u0629", "\u0645\u0646", "\u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642"]);
              txMine.forEach((x, i) => rows.push([i + 1, x.title, x.priority, x.status, x.by, x.dueDate || "\u2014"]))
            }
            TXCSV(`tabor_tasks_${kind}_${U()}.csv`, rows)
          };
        return TXe(l.Fragment, {}, [TXe("div", {
          key: "hero",
          style: {
            background: `linear-gradient(135deg,${v.t} 0%,#5d9a9d 100%)`,
            borderRadius: 16,
            padding: "20px 24px",
            marginBottom: 14,
            color: "#fff",
            position: "relative",
            overflow: "hidden"
          }
        }, [TXe("div", {
          key: "d1",
          style: {
            position: "absolute",
            left: -20,
            top: -20,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)"
          }
        }), TXe("div", {
          key: "d2",
          style: {
            position: "absolute",
            left: 40,
            bottom: -30,
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)"
          }
        }), TXe("div", {
          key: "in",
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            gap: 12,
            flexWrap: "wrap"
          }
        }, [TXe("div", {
          key: "l"
        }, [TXe("h1", {
          key: "t",
          style: {
            fontSize: 22,
            fontWeight: 800,
            margin: "0 0 4px"
          }
        }, "\u2705 \u0645\u0647\u0627\u0645\u064A"), TXe("p", {
          key: "s",
          style: {
            fontSize: 12,
            opacity: .82,
            margin: 0
          }
        }, `${qn[O.role]} \u2014 ${En(U())}`), TXe("p", {
          key: "b",
          style: {
            fontSize: 11,
            opacity: .68,
            margin: "3px 0 0"
          }
        }, `\uD83C\uDFEA ${txBranch}`)]), l.jsxs("svg", {
          width: "80",
          height: "80",
          viewBox: "0 0 80 80",
          children: [l.jsx("circle", {
            cx: "40",
            cy: "40",
            r: "34",
            fill: "none",
            stroke: "rgba(255,255,255,0.2)",
            strokeWidth: "6"
          }), l.jsx("circle", {
            cx: "40",
            cy: "40",
            r: "34",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "6",
            strokeDasharray: `${$e*2.14} ${214-$e*2.14}`,
            strokeDashoffset: "53",
            strokeLinecap: "round",
            style: {
              transition: "all 0.6s"
            }
          }), l.jsxs("text", {
            x: "40",
            y: "37",
            textAnchor: "middle",
            fontSize: "18",
            fontWeight: "800",
            fill: "#fff",
            children: [$e, "%"]
          }), l.jsxs("text", {
            x: "40",
            y: "50",
            textAnchor: "middle",
            fontSize: "8",
            fill: "rgba(255,255,255,0.7)",
            children: [Mt, "/", ft.length]
          })]
        })])]), TXe("div", {
          key: "stats",
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: 10,
            marginBottom: 12
          }
        }, [
          ["\u2705", "\u0645\u0646\u062C\u0632", Mt, "\u0645\u0647\u0645\u0629 \u0645\u0643\u062A\u0645\u0644\u0629 \u0627\u0644\u064A\u0648\u0645", "#22c55e", "#15803d"],
          ["\u23F3", "\u0645\u062A\u0628\u0642\u064A", ft.length - Mt, "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0625\u0646\u062C\u0627\u0632", "#f59e0b", "#c2760c"],
          ["\uD83D\uDCC5", "\u0627\u0644\u0623\u0633\u0628\u0648\u0639", txAvgW + "%", "\u0645\u062A\u0648\u0633\u0637 \u0622\u062E\u0631 7 \u0623\u064A\u0627\u0645", "#6366f1", "#4338ca"],
          ["\uD83D\uDDD3\uFE0F", "\u0627\u0644\u0634\u0647\u0631", txAvgM + "%", "\u0645\u062A\u0648\u0633\u0637 \u0622\u062E\u0631 30 \u064A\u0648\u0645", "#8b5cf6", "#6d28d9"]
        ].map(([ic, ttl, val, sub, c1, c2]) => TXe("div", {
          key: ttl,
          style: {
            background: `linear-gradient(135deg,${c1} 0%,${c2} 100%)`,
            borderRadius: 14,
            padding: "13px 15px",
            color: "#fff",
            position: "relative",
            overflow: "hidden"
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
        }, sub)]))), TXe("div", {
          key: "bar",
          style: txCard
        }, [TXe("div", {
          key: "r1",
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
            transition: "all .2s"
          }
        }, flb))), TXe("div", {
          key: "acts",
          style: {
            display: "flex",
            gap: 6,
            flexWrap: "wrap"
          }
        }, [txSubs.length > 0 ? TXe("button", {
          key: "u",
          onClick: () => txSetUrg({
            toId: txSubs[0].id,
            title: "",
            desc: "",
            priority: "\u0639\u0627\u0644\u064A",
            due: U()
          }),
          style: {
            padding: "7px 14px",
            borderRadius: 8,
            border: "none",
            background: "#ef4444",
            color: "#fff",
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit"
          }
        }, "\u26A1 \u0645\u0647\u0645\u0629 \u0645\u0633\u062A\u0639\u062C\u0644\u0629") : null, _e ? TXe("button", {
          key: "a",
          onClick: () => txSetDraft({
            id: "",
            role: O.role,
            title: "",
            custom: !0
          }),
          style: {
            ...a.addBtn,
            fontFamily: "inherit"
          }
        }, "\u2795 \u0645\u0647\u0645\u0629 \u064A\u0648\u0645\u064A\u0629") : null, _e ? TXe("button", {
          key: "e",
          onClick: () => txSetEdit(!txEdit),
          style: {
            padding: "7px 14px",
            borderRadius: 8,
            border: `1px solid ${txEdit?v.t:v.l}`,
            background: txEdit ? `${v.t}18` : "#fff",
            color: txEdit ? v.t : "#7a8686",
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit"
          }
        }, txEdit ? "\u2713 \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u062A\u062D\u0631\u064A\u0631" : "\u2699\uFE0F \u0648\u0636\u0639 \u0627\u0644\u062A\u062D\u0631\u064A\u0631") : null])]), TXe("div", {
          key: "r2",
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
        }, lbl)))]), txMine.length > 0 ? TXe("div", {
          key: "mine",
          style: {
            ...txCard,
            borderRight: "4px solid #ef4444"
          }
        }, [txSec("\u26A1", "\u0645\u0647\u0627\u0645 \u0645\u0633\u062A\u0639\u062C\u0644\u0629 \u0645\u0648\u062C\u0647\u0629 \u0644\u064A", txPill(`${txMine.filter(x=>x.status!=="\u0645\u0643\u062A\u0645\u0644").length} \u0645\u0639\u0644\u0642\u0629`, "#ef4444")), TXe("div", {
          key: "l",
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 6
          }
        }, txMine.map(x => TXe("div", {
          key: x.id,
          style: {
            border: `1px solid ${v.l}45`,
            borderRadius: 10,
            padding: "10px 12px",
            background: x.status === "\u0645\u0643\u062A\u0645\u0644" ? "#f6fdf8" : "#fff"
          }
        }, [TXe("div", {
          key: "h",
          style: {
            display: "flex",
            gap: 5,
            flexWrap: "wrap",
            marginBottom: 5
          }
        }, [txPill(x.priority, txPr(x.priority)), txPill(x.status, txSt(x.status)), x.dueDate ? txPill(`\uD83D\uDCC5 ${x.dueDate}`, "#64748b") : null]), TXe("p", {
          key: "t",
          style: {
            fontSize: 13,
            fontWeight: 700,
            margin: 0,
            color: v.d
          }
        }, x.title), x.desc ? TXe("p", {
          key: "d",
          style: {
            fontSize: 11,
            color: "#8a9494",
            margin: "3px 0 0"
          }
        }, x.desc) : null, TXe("p", {
          key: "b",
          style: {
            fontSize: 10,
            color: "#b3bbbb",
            margin: "4px 0 0"
          }
        }, `\uD83D\uDC64 \u0645\u0646: ${x.by}`), x.status !== "\u0645\u0643\u062A\u0645\u0644" ? TXe("div", {
          key: "ac",
          style: {
            display: "flex",
            gap: 5,
            marginTop: 7
          }
        }, [TXe("button", {
          key: "p",
          onClick: () => ke(prev => prev.map(q => q.id === x.id ? {
            ...q,
            status: "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630"
          } : q)),
          style: {
            ...a.stBtn,
            color: "#f59e0b",
            fontFamily: "inherit"
          }
        }, "\u23F3 \u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630"), TXe("button", {
          key: "c",
          onClick: () => ke(prev => prev.map(q => q.id === x.id ? {
            ...q,
            status: "\u0645\u0643\u062A\u0645\u0644"
          } : q)),
          style: {
            ...a.stBtn,
            color: "#22c55e",
            fontFamily: "inherit"
          }
        }, "\u2713 \u0625\u0646\u062C\u0627\u0632")]) : null])))]) : null, txSent.length > 0 ? TXe("div", {
          key: "sent",
          style: {
            ...txCard,
            borderRight: `4px solid ${v.t}`
          }
        }, [txSec("\uD83D\uDCE4", "\u0645\u0647\u0627\u0645 \u0623\u0633\u0646\u062F\u062A\u0647\u0627 \u0644\u0644\u0641\u0631\u064A\u0642", txPill(`${txSent.filter(x=>x.status==="\u0645\u0643\u062A\u0645\u0644").length}/${txSent.length} \u0645\u0646\u062C\u0632`, v.t)), TXe("div", {
          key: "l",
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 5
          }
        }, txSent.map(x => TXe("div", {
          key: x.id,
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 11px",
            border: `1px solid ${v.l}40`,
            borderRadius: 9,
            flexWrap: "wrap"
          }
        }, [TXe("span", {
          key: "d",
          style: {
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: txSt(x.status),
            flexShrink: 0
          }
        }), TXe("span", {
          key: "t",
          style: {
            fontSize: 12,
            fontWeight: 600,
            flex: 1,
            color: v.d
          }
        }, x.title), TXe("span", {
          key: "a",
          style: {
            fontSize: 10,
            color: "#8a9494"
          }
        }, `\u2190 ${x.assignee||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F"}`), txPill(x.status, txSt(x.status)), _e ? TXe("button", {
          key: "x",
          onClick: () => ke(prev => prev.filter(q => q.id !== x.id)),
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#ef4444",
            fontSize: 12
          }
        }, "\uD83D\uDDD1") : null])))]) : null, TXe("div", {
          key: "list",
          style: txCard
        }, [TXe("div", {
          key: "h",
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
            gap: 8,
            flexWrap: "wrap"
          }
        }, [TXe("h3", {
          key: "t",
          style: {
            fontSize: 14,
            fontWeight: 800,
            margin: 0,
            color: v.d
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
        }, `${Mt}/${ft.length}`)]), txEdit ? TXe("p", {
          key: "hint",
          style: {
            fontSize: 11,
            color: "#8a9494",
            background: `${v.t}0e`,
            padding: "8px 11px",
            borderRadius: 8,
            margin: "0 0 10px"
          }
        }, "\u2699\uFE0F \u0648\u0636\u0639 \u0627\u0644\u062A\u062D\u0631\u064A\u0631 \u0645\u0641\u0639\u0651\u0644 \u2014 \u0631\u062A\u0651\u0628 \u0628\u0640 \u25B2\u25BC \u060C \u0639\u062F\u0651\u0644 \u0628\u0640 \u270F\uFE0F \u060C \u0623\u062E\u0641\u0650 \u0628\u0640 \uD83D\uDDD1 \u0644\u0623\u064A \u0645\u0647\u0645\u0629 \u0623\u0633\u0627\u0633\u064A\u0629 \u0623\u0648 \u0645\u0636\u0627\u0641\u0629") : null, txList.length === 0 ? TXe("div", {
          key: "e",
          style: {
            textAlign: "center",
            padding: "30px 10px",
            color: "#bbb",
            fontSize: 13
          }
        }, txFilter === "done" ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0645\u0646\u062C\u0632\u0629 \u0628\u0639\u062F" : txFilter === "pending" ? "\uD83C\uDF89 \u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0645\u062A\u0628\u0642\u064A\u0629 \u2014 \u0623\u062D\u0633\u0646\u062A!" : "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645") : TXe("div", {
          key: "l",
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
              border: `1px solid ${de?"#22c55e28":`${v.l}38`}`,
              borderRadius: 10,
              transition: "all .2s"
            }
          }, [txEdit && _e ? TXe("div", {
            key: "mv",
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 2
            }
          }, [TXe("button", {
            key: "u",
            onClick: () => txMove(ft, ft.indexOf(P), -1),
            style: {
              width: 22,
              height: 15,
              lineHeight: 1,
              borderRadius: 4,
              border: `1px solid ${v.l}`,
              background: "#fff",
              color: v.t,
              cursor: "pointer",
              fontSize: 8,
              fontFamily: "inherit",
              padding: 0
            }
          }, "\u25B2"), TXe("button", {
            key: "d",
            onClick: () => txMove(ft, ft.indexOf(P), 1),
            style: {
              width: 22,
              height: 15,
              lineHeight: 1,
              borderRadius: 4,
              border: `1px solid ${v.l}`,
              background: "#fff",
              color: v.t,
              cursor: "pointer",
              fontSize: 8,
              fontFamily: "inherit",
              padding: 0
            }
          }, "\u25BC")]) : null, TXe("button", {
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
          }, P.title), P.custom || P.edited ? TXe("span", {
            key: "bd",
            style: {
              fontSize: 9,
              fontWeight: 700,
              color: P.custom ? "#7c3aed" : "#0284c7",
              background: P.custom ? "#8b5cf618" : "#0ea5e918",
              padding: "2px 8px",
              borderRadius: 7,
              display: "inline-block",
              marginTop: 4
            }
          }, P.custom ? "\uD83D\uDCCC \u0645\u0647\u0645\u0629 \u0645\u0636\u0627\u0641\u0629 \u0645\u0646 \u0627\u0644\u0625\u062F\u0627\u0631\u0629" : "\u270F\uFE0F \u0645\u0639\u062F\u0651\u0644\u0629 \u0645\u0646 \u0627\u0644\u0625\u062F\u0627\u0631\u0629") : null])]), txEdit && _e ? TXe("button", {
            key: "e",
            title: "\u062A\u0639\u062F\u064A\u0644",
            onClick: () => txSetDraft({
              id: P.id,
              role: P.role || O.role,
              title: P.title,
              custom: P.custom
            }),
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              padding: "2px 4px"
            }
          }, "\u270F\uFE0F") : null, txEdit && _e ? TXe("button", {
            key: "d",
            title: P.custom ? "\u062D\u0630\u0641" : "\u0625\u062E\u0641\u0627\u0621",
            onClick: () => txDrop(P),
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
        })), txEdit && _e && txHidden.length > 0 ? TXe("div", {
          key: "hid",
          style: {
            marginTop: 12,
            paddingTop: 10,
            borderTop: "1px dashed #edefef"
          }
        }, [TXe("p", {
          key: "t",
          style: {
            fontSize: 11,
            fontWeight: 700,
            color: "#8a9494",
            margin: "0 0 7px"
          }
        }, `\uD83D\uDC41\uFE0F \u0645\u0647\u0627\u0645 \u0645\u062E\u0641\u064A\u0629 (${txHidden.length})`), TXe("div", {
          key: "l",
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 5
          }
        }, txHidden.map(x => TXe("button", {
          key: x.id,
          onClick: () => txRestore(x.id),
          style: {
            fontSize: 11,
            fontWeight: 600,
            background: "#f7f9f9",
            color: "#7a8686",
            border: `1px dashed ${v.l}`,
            padding: "4px 11px",
            borderRadius: 14,
            cursor: "pointer",
            fontFamily: "inherit"
          }
        }, `\u21BA ${x.title}`)))]) : null]), TXe("div", {
          key: "charts",
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 12
          }
        }, [TXe("div", {
          key: "w",
          style: {
            ...txCard,
            marginBottom: 0
          }
        }, [txSec("\uD83D\uDCCA", "\u0627\u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A", txPill(`${txAvgW}% \u0645\u062A\u0648\u0633\u0637`, v.t)), TXe("div", {
          key: "b",
          style: {
            display: "flex",
            alignItems: "flex-end",
            gap: 4,
            height: 100
          }
        }, txW.map(d => {
          const val = txHist(d),
            isToday = d === U();
          return TXe("div", {
            key: d,
            style: {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2
            }
          }, [TXe("span", {
            key: "v",
            style: {
              fontSize: 9,
              fontWeight: 700,
              color: val > 0 ? xe(val) : "#ddd"
            }
          }, val || "\u2014"), TXe("div", {
            key: "r",
            style: {
              width: "100%",
              borderRadius: "6px 6px 2px 2px",
              background: isToday ? xe($e) : val > 0 ? `${xe(val)}45` : "#f0f0f0",
              height: `${Math.max(isToday?$e:val,4)}%`,
              minHeight: 4,
              maxHeight: 85,
              transition: "height 0.5s",
              border: isToday ? `2px solid ${xe($e)}` : "none"
            }
          }), TXe("span", {
            key: "l",
            style: {
              fontSize: 9,
              color: isToday ? v.t : "#aaa",
              fontWeight: isToday ? 800 : 400
            }
          }, txWD[new Date(d).getDay()])])
        }))]), TXe("div", {
          key: "m",
          style: {
            ...txCard,
            marginBottom: 0
          }
        }, [txSec("\uD83D\uDDD3\uFE0F", "\u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u0634\u0647\u0631\u064A", txPill(`${txAvgM}% \u0645\u062A\u0648\u0633\u0637`, "#8b5cf6")), TXe("div", {
          key: "g",
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(7,1fr)",
            gap: 3
          }
        }, [...txWD.map(w => TXe("div", {
          key: "h" + w,
          style: {
            textAlign: "center",
            fontSize: 8,
            color: "#bbb",
            fontWeight: 700,
            paddingBottom: 2
          }
        }, w)), ...txM.map(d => {
          const val = txHist(d);
          return TXe("div", {
            key: d,
            title: `${En(d)}: ${val}%`,
            style: {
              aspectRatio: "1",
              borderRadius: 5,
              background: val > 0 ? xe(val) : "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 8,
              color: val > 0 ? "#fff" : "#ddd",
              fontWeight: 700,
              border: d === U() ? `2px solid ${v.d}` : "1px solid transparent"
            }
          }, String(new Date(d).getDate()))
        })])])]), txDraft ? l.jsx(mn, {
          close: () => txSetDraft(null),
          title: txDraft.id ? "\u270F\uFE0F \u062A\u0639\u062F\u064A\u0644 \u0645\u0647\u0645\u0629" : "\u2795 \u0625\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629 \u064A\u0648\u0645\u064A\u0629",
          children: TXe("div", {}, [!txDraft.id || txDraft.custom ? TXe("div", {
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
          }, qn[R])))]) : TXe("p", {
            key: "ro",
            style: {
              fontSize: 11,
              color: "#8a9494",
              background: "#f7f9f9",
              padding: "8px 11px",
              borderRadius: 8,
              margin: "0 0 10px"
            }
          }, `\u0645\u0647\u0645\u0629 \u0623\u0633\u0627\u0633\u064A\u0629 \u0644\u0640 ${qn[txDraft.role]} \u2014 \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0641\u0642\u0637`), TXe("div", {
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
          })]), TXe("button", {
            key: "s",
            style: a.submitBtn,
            onClick: () => {
              const tt = (txDraft.title || "").trim();
              tt && (txDraft.id ? txDraft.custom ? txSetCustom(prev => prev.map(x => x.id === txDraft.id ? {
                ...x,
                title: tt,
                role: txDraft.role
              } : x)) : txSetOv(prev => ({
                ...prev,
                [txDraft.id]: {
                  ...(prev[txDraft.id] || {}),
                  title: tt
                }
              })) : txSetCustom(prev => [...prev, {
                id: "cx" + gn(),
                title: tt,
                role: txDraft.role,
                by: O.name,
                createdAt: U()
              }]), txSetDraft(null))
            }
          }, txDraft.id ? "\uD83D\uDCBE \u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644" : "\u2795 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0647\u0645\u0629")])
        }) : null, txUrg ? l.jsx(mn, {
          close: () => txSetUrg(null),
          title: "\u26A1 \u0625\u0633\u0646\u0627\u062F \u0645\u0647\u0645\u0629 \u0645\u0633\u062A\u0639\u062C\u0644\u0629",
          children: TXe("div", {}, [TXe("p", {
            key: "hint",
            style: {
              fontSize: 11,
              color: "#8a9494",
              background: `${v.t}0e`,
              padding: "9px 12px",
              borderRadius: 8,
              margin: "0 0 12px"
            }
          }, `\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0625\u0633\u0646\u0627\u062F \u0644\u0640 ${txSubs.length} \u0634\u062E\u0635 \u0623\u062F\u0646\u0649 \u0645\u0646\u0643 \u0641\u064A \u0627\u0644\u062A\u0633\u0644\u0633\u0644 \u0627\u0644\u0648\u0638\u064A\u0641\u064A`), TXe("div", {
            key: "to",
            style: a.fg
          }, [TXe("label", {
            key: "l",
            style: a.fl
          }, "\u0625\u0633\u0646\u0627\u062F \u0625\u0644\u0649 *"), TXe("select", {
            key: "s",
            value: txUrg.toId,
            onChange: ev => txSetUrg(prev => ({
              ...prev,
              toId: ev.target.value
            })),
            style: a.fi
          }, TXROLES.filter(R => txSubs.some(u => u.role === R)).map(R => TXe("optgroup", {
            key: R,
            label: qn[R]
          }, txSubs.filter(u => u.role === R).map(u => TXe("option", {
            key: u.id,
            value: u.id
          }, `${u.nameAr||u.name}${u.branch?" \u2014 "+((ot.find(bb=>bb.id===u.branch)||{}).name||u.branch):u.region?" \u2014 "+((p[u.region]||{}).name||u.region):""}`)))))]), TXe("div", {
            key: "t",
            style: a.fg
          }, [TXe("label", {
            key: "l",
            style: a.fl
          }, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 *"), TXe("input", {
            key: "i",
            value: txUrg.title,
            autoFocus: !0,
            placeholder: "\u0645\u062B\u0627\u0644: \u0645\u0639\u0627\u0644\u062C\u0629 \u0634\u0643\u0648\u0649 \u0639\u0645\u064A\u0644 \u0641\u0648\u0631\u0627\u064B",
            onChange: ev => txSetUrg(prev => ({
              ...prev,
              title: ev.target.value
            })),
            style: a.fi
          })]), TXe("div", {
            key: "d",
            style: a.fg
          }, [TXe("label", {
            key: "l",
            style: a.fl
          }, "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"), TXe("textarea", {
            key: "i",
            value: txUrg.desc,
            onChange: ev => txSetUrg(prev => ({
              ...prev,
              desc: ev.target.value
            })),
            style: {
              ...a.fi,
              minHeight: 62
            }
          })]), TXe("div", {
            key: "row",
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10
            }
          }, [TXe("div", {
            key: "p",
            style: a.fg
          }, [TXe("label", {
            key: "l",
            style: a.fl
          }, "\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629"), TXe("select", {
            key: "s",
            value: txUrg.priority,
            onChange: ev => txSetUrg(prev => ({
              ...prev,
              priority: ev.target.value
            })),
            style: a.fi
          }, ["\u0639\u0627\u0644\u064A", "\u0645\u062A\u0648\u0633\u0637", "\u0645\u0646\u062E\u0641\u0636"].map(pv => TXe("option", {
            key: pv,
            value: pv
          }, pv)))]), TXe("div", {
            key: "u",
            style: a.fg
          }, [TXe("label", {
            key: "l",
            style: a.fl
          }, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642"), TXe("input", {
            key: "i",
            type: "date",
            value: txUrg.due,
            onChange: ev => txSetUrg(prev => ({
              ...prev,
              due: ev.target.value
            })),
            style: a.fi
          })])]), TXe("button", {
            key: "s",
            style: {
              ...a.submitBtn,
              background: "#ef4444"
            },
            onClick: () => {
              const tt = (txUrg.title || "").trim(),
                u = W.find(x => x.id === txUrg.toId);
              tt && u && (ke(prev => [{
                id: gn(),
                title: tt,
                desc: txUrg.desc,
                priority: txUrg.priority,
                dueDate: txUrg.due,
                assignee: `${u.nameAr||u.name} \u2014 ${qn[u.role]}`,
                assigneeId: u.id,
                assigneeRole: u.role,
                status: "\u062C\u062F\u064A\u062F",
                date: U(),
                by: O.nameAr || O.name,
                byId: O.id
              }, ...prev]), txSetUrg(null))
            }
          }, "\u26A1 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0645\u0647\u0645\u0629")])
        }) : null])
      }
      '''

i = s.index('if (z === "tasks") {')
j = s.index('if (z === "reports_req") {')
s = s[:i] + PAGE + s[j:]
print("  ok  tasks-page-rebuild")

# ── 4) عرض المُسنَد إليه في صفحة المهام المستعجلة ────────────────
rep(
    '''              children: ["📅 ", En(c.date), " • ", c.by]
            }),''',
    '''              children: ["📅 ", En(c.date), " • ", c.by, c.assignee ? ` → ${c.assignee}` : "", c.dueDate ? ` • استحقاق ${c.dueDate}` : ""]
            }),''',
    "urgent-assignee")

io.open(SRC, "w", encoding="utf-8").write(s)
print("\nDONE %d -> %d (%+d)" % (n0, len(s), len(s) - n0))
