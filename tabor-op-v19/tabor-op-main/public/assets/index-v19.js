(function() {
  const Q = document.createElement("link").relList;
  if (Q && Q.supports && Q.supports("modulepreload")) return;
  for (const T of document.querySelectorAll('link[rel="modulepreload"]')) H(T);
  new MutationObserver(T => {
    for (const L of T)
      if (L.type === "childList")
        for (const ie of L.addedNodes) ie.tagName === "LINK" && ie.rel === "modulepreload" && H(ie)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function p(T) {
    const L = {};
    return T.integrity && (L.integrity = T.integrity), T.referrerPolicy && (L.referrerPolicy = T.referrerPolicy), T.crossOrigin === "use-credentials" ? L.credentials = "include" : T.crossOrigin === "anonymous" ? L.credentials = "omit" : L.credentials = "same-origin", L
  }

  function H(T) {
    if (T.ep) return;
    T.ep = !0;
    const L = p(T);
    fetch(T.href, L)
  }
})();

function pd(W) {
  return W && W.__esModule && Object.prototype.hasOwnProperty.call(W, "default") ? W.default : W
}
var Cs = {
    exports: {}
  },
  Pl = {},
  zs = {
    exports: {}
  },
  ge = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var td;

function Xc() {
  if (td) return ge;
  td = 1;
  var W = Symbol.for("react.element"),
    Q = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    T = Symbol.for("react.profiler"),
    L = Symbol.for("react.provider"),
    ie = Symbol.for("react.context"),
    $ = Symbol.for("react.forward_ref"),
    z = Symbol.for("react.suspense"),
    oe = Symbol.for("react.memo"),
    Ae = Symbol.for("react.lazy"),
    D = Symbol.iterator;

  function B(h) {
    return h === null || typeof h != "object" ? null : (h = D && h[D] || h["@@iterator"], typeof h == "function" ? h : null)
  }
  var De = {
      isMounted: function() {
        return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
    },
    We = Object.assign,
    ke = {};

  function we(h, k, ce) {
    this.props = h, this.context = k, this.refs = ke, this.updater = ce || De
  }
  we.prototype.isReactComponent = {}, we.prototype.setState = function(h, k) {
    if (typeof h != "object" && typeof h != "function" && h != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, h, k, "setState")
  }, we.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate")
  };

  function bt() {}
  bt.prototype = we.prototype;

  function nt(h, k, ce) {
    this.props = h, this.context = k, this.refs = ke, this.updater = ce || De
  }
  var jt = nt.prototype = new bt;
  jt.constructor = nt, We(jt, we.prototype), jt.isPureReactComponent = !0;
  var qe = Array.isArray,
    Nt = Object.prototype.hasOwnProperty,
    et = {
      current: null
    },
    ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

  function It(h, k, ce) {
    var ne, ye = {},
      ve = null,
      Pe = null;
    if (k != null)
      for (ne in k.ref !== void 0 && (Pe = k.ref), k.key !== void 0 && (ve = "" + k.key), k) Nt.call(k, ne) && !ct.hasOwnProperty(ne) && (ye[ne] = k[ne]);
    var Ee = arguments.length - 2;
    if (Ee === 1) ye.children = ce;
    else if (1 < Ee) {
      for (var Me = Array(Ee), _t = 0; _t < Ee; _t++) Me[_t] = arguments[_t + 2];
      ye.children = Me
    }
    if (h && h.defaultProps)
      for (ne in Ee = h.defaultProps, Ee) ye[ne] === void 0 && (ye[ne] = Ee[ne]);
    return {
      $$typeof: W,
      type: h,
      key: ve,
      ref: Pe,
      props: ye,
      _owner: et.current
    }
  }

  function on(h, k) {
    return {
      $$typeof: W,
      type: h.type,
      key: k,
      ref: h.ref,
      props: h.props,
      _owner: h._owner
    }
  }

  function St(h) {
    return typeof h == "object" && h !== null && h.$$typeof === W
  }

  function sn(h) {
    var k = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + h.replace(/[=:]/g, function(ce) {
      return k[ce]
    })
  }
  var Lt = /\/+/g;

  function kt(h, k) {
    return typeof h == "object" && h !== null && h.key != null ? sn("" + h.key) : k.toString(36)
  }

  function Ie(h, k, ce, ne, ye) {
    var ve = typeof h;
    (ve === "undefined" || ve === "boolean") && (h = null);
    var Pe = !1;
    if (h === null) Pe = !0;
    else switch (ve) {
      case "string":
      case "number":
        Pe = !0;
        break;
      case "object":
        switch (h.$$typeof) {
          case W:
          case Q:
            Pe = !0
        }
    }
    if (Pe) return Pe = h, ye = ye(Pe), h = ne === "" ? "." + kt(Pe, 0) : ne, qe(ye) ? (ce = "", h != null && (ce = h.replace(Lt, "$&/") + "/"), Ie(ye, k, ce, "", function(_t) {
      return _t
    })) : ye != null && (St(ye) && (ye = on(ye, ce + (!ye.key || Pe && Pe.key === ye.key ? "" : ("" + ye.key).replace(Lt, "$&/") + "/") + h)), k.push(ye)), 1;
    if (Pe = 0, ne = ne === "" ? "." : ne + ":", qe(h))
      for (var Ee = 0; Ee < h.length; Ee++) {
        ve = h[Ee];
        var Me = ne + kt(ve, Ee);
        Pe += Ie(ve, k, ce, Me, ye)
      } else if (Me = B(h), typeof Me == "function")
        for (h = Me.call(h), Ee = 0; !(ve = h.next()).done;) ve = ve.value, Me = ne + kt(ve, Ee++), Pe += Ie(ve, k, ce, Me, ye);
      else if (ve === "object") throw k = String(h), Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.");
    return Pe
  }

  function pe(h, k, ce) {
    if (h == null) return h;
    var ne = [],
      ye = 0;
    return Ie(h, ne, "", "", function(ve) {
      return k.call(ce, ve, ye++)
    }), ne
  }

  function it(h) {
    if (h._status === -1) {
      var k = h._result;
      k = k(), k.then(function(ce) {
        (h._status === 0 || h._status === -1) && (h._status = 1, h._result = ce)
      }, function(ce) {
        (h._status === 0 || h._status === -1) && (h._status = 2, h._result = ce)
      }), h._status === -1 && (h._status = 0, h._result = k)
    }
    if (h._status === 1) return h._result.default;
    throw h._result
  }
  var Le = {
      current: null
    },
    A = {
      transition: null
    },
    te = {
      ReactCurrentDispatcher: Le,
      ReactCurrentBatchConfig: A,
      ReactCurrentOwner: et
    };

  function b() {
    throw Error("act(...) is not supported in production builds of React.")
  }
  return ge.Children = {
    map: pe,
    forEach: function(h, k, ce) {
      pe(h, function() {
        k.apply(this, arguments)
      }, ce)
    },
    count: function(h) {
      var k = 0;
      return pe(h, function() {
        k++
      }), k
    },
    toArray: function(h) {
      return pe(h, function(k) {
        return k
      }) || []
    },
    only: function(h) {
      if (!St(h)) throw Error("React.Children.only expected to receive a single React element child.");
      return h
    }
  }, ge.Component = we, ge.Fragment = p, ge.Profiler = T, ge.PureComponent = nt, ge.StrictMode = H, ge.Suspense = z, ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te, ge.act = b, ge.cloneElement = function(h, k, ce) {
    if (h == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
    var ne = We({}, h.props),
      ye = h.key,
      ve = h.ref,
      Pe = h._owner;
    if (k != null) {
      if (k.ref !== void 0 && (ve = k.ref, Pe = et.current), k.key !== void 0 && (ye = "" + k.key), h.type && h.type.defaultProps) var Ee = h.type.defaultProps;
      for (Me in k) Nt.call(k, Me) && !ct.hasOwnProperty(Me) && (ne[Me] = k[Me] === void 0 && Ee !== void 0 ? Ee[Me] : k[Me])
    }
    var Me = arguments.length - 2;
    if (Me === 1) ne.children = ce;
    else if (1 < Me) {
      Ee = Array(Me);
      for (var _t = 0; _t < Me; _t++) Ee[_t] = arguments[_t + 2];
      ne.children = Ee
    }
    return {
      $$typeof: W,
      type: h.type,
      key: ye,
      ref: ve,
      props: ne,
      _owner: Pe
    }
  }, ge.createContext = function(h) {
    return h = {
      $$typeof: ie,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, h.Provider = {
      $$typeof: L,
      _context: h
    }, h.Consumer = h
  }, ge.createElement = It, ge.createFactory = function(h) {
    var k = It.bind(null, h);
    return k.type = h, k
  }, ge.createRef = function() {
    return {
      current: null
    }
  }, ge.forwardRef = function(h) {
    return {
      $$typeof: $,
      render: h
    }
  }, ge.isValidElement = St, ge.lazy = function(h) {
    return {
      $$typeof: Ae,
      _payload: {
        _status: -1,
        _result: h
      },
      _init: it
    }
  }, ge.memo = function(h, k) {
    return {
      $$typeof: oe,
      type: h,
      compare: k === void 0 ? null : k
    }
  }, ge.startTransition = function(h) {
    var k = A.transition;
    A.transition = {};
    try {
      h()
    } finally {
      A.transition = k
    }
  }, ge.unstable_act = b, ge.useCallback = function(h, k) {
    return Le.current.useCallback(h, k)
  }, ge.useContext = function(h) {
    return Le.current.useContext(h)
  }, ge.useDebugValue = function() {}, ge.useDeferredValue = function(h) {
    return Le.current.useDeferredValue(h)
  }, ge.useEffect = function(h, k) {
    return Le.current.useEffect(h, k)
  }, ge.useId = function() {
    return Le.current.useId()
  }, ge.useImperativeHandle = function(h, k, ce) {
    return Le.current.useImperativeHandle(h, k, ce)
  }, ge.useInsertionEffect = function(h, k) {
    return Le.current.useInsertionEffect(h, k)
  }, ge.useLayoutEffect = function(h, k) {
    return Le.current.useLayoutEffect(h, k)
  }, ge.useMemo = function(h, k) {
    return Le.current.useMemo(h, k)
  }, ge.useReducer = function(h, k, ce) {
    return Le.current.useReducer(h, k, ce)
  }, ge.useRef = function(h) {
    return Le.current.useRef(h)
  }, ge.useState = function(h) {
    return Le.current.useState(h)
  }, ge.useSyncExternalStore = function(h, k, ce) {
    return Le.current.useSyncExternalStore(h, k, ce)
  }, ge.useTransition = function() {
    return Le.current.useTransition()
  }, ge.version = "18.3.1", ge
}
var nd;

function Ws() {
  return nd || (nd = 1, zs.exports = Xc()), zs.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rd;

function Gc() {
  if (rd) return Pl;
  rd = 1;
  var W = Ws(),
    Q = Symbol.for("react.element"),
    p = Symbol.for("react.fragment"),
    H = Object.prototype.hasOwnProperty,
    T = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    L = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

  function ie($, z, oe) {
    var Ae, D = {},
      B = null,
      De = null;
    oe !== void 0 && (B = "" + oe), z.key !== void 0 && (B = "" + z.key), z.ref !== void 0 && (De = z.ref);
    for (Ae in z) H.call(z, Ae) && !L.hasOwnProperty(Ae) && (D[Ae] = z[Ae]);
    if ($ && $.defaultProps)
      for (Ae in z = $.defaultProps, z) D[Ae] === void 0 && (D[Ae] = z[Ae]);
    return {
      $$typeof: Q,
      type: $,
      key: B,
      ref: De,
      props: D,
      _owner: T.current
    }
  }
  return Pl.Fragment = p, Pl.jsx = ie, Pl.jsxs = ie, Pl
}
var ld;

function Zc() {
  return ld || (ld = 1, Cs.exports = Gc()), Cs.exports
}
var l = Zc(),
  me = Ws();
const Jc = pd(me);
var Mi = {},
  Es = {
    exports: {}
  },
  Dt = {},
  _s = {
    exports: {}
  },
  $s = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var id;

function qc() {
  return id || (id = 1, (function(W) {
    function Q(A, te) {
      var b = A.length;
      A.push(te);
      e: for (; 0 < b;) {
        var h = b - 1 >>> 1,
          k = A[h];
        if (0 < T(k, te)) A[h] = te, A[b] = k, b = h;
        else break e
      }
    }

    function p(A) {
      return A.length === 0 ? null : A[0]
    }

    function H(A) {
      if (A.length === 0) return null;
      var te = A[0],
        b = A.pop();
      if (b !== te) {
        A[0] = b;
        e: for (var h = 0, k = A.length, ce = k >>> 1; h < ce;) {
          var ne = 2 * (h + 1) - 1,
            ye = A[ne],
            ve = ne + 1,
            Pe = A[ve];
          if (0 > T(ye, b)) ve < k && 0 > T(Pe, ye) ? (A[h] = Pe, A[ve] = b, h = ve) : (A[h] = ye, A[ne] = b, h = ne);
          else if (ve < k && 0 > T(Pe, b)) A[h] = Pe, A[ve] = b, h = ve;
          else break e
        }
      }
      return te
    }

    function T(A, te) {
      var b = A.sortIndex - te.sortIndex;
      return b !== 0 ? b : A.id - te.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var L = performance;
      W.unstable_now = function() {
        return L.now()
      }
    } else {
      var ie = Date,
        $ = ie.now();
      W.unstable_now = function() {
        return ie.now() - $
      }
    }
    var z = [],
      oe = [],
      Ae = 1,
      D = null,
      B = 3,
      De = !1,
      We = !1,
      ke = !1,
      we = typeof setTimeout == "function" ? setTimeout : null,
      bt = typeof clearTimeout == "function" ? clearTimeout : null,
      nt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function jt(A) {
      for (var te = p(oe); te !== null;) {
        if (te.callback === null) H(oe);
        else if (te.startTime <= A) H(oe), te.sortIndex = te.expirationTime, Q(z, te);
        else break;
        te = p(oe)
      }
    }

    function qe(A) {
      if (ke = !1, jt(A), !We)
        if (p(z) !== null) We = !0, it(Nt);
        else {
          var te = p(oe);
          te !== null && Le(qe, te.startTime - A)
        }
    }

    function Nt(A, te) {
      We = !1, ke && (ke = !1, bt(It), It = -1), De = !0;
      var b = B;
      try {
        for (jt(te), D = p(z); D !== null && (!(D.expirationTime > te) || A && !sn());) {
          var h = D.callback;
          if (typeof h == "function") {
            D.callback = null, B = D.priorityLevel;
            var k = h(D.expirationTime <= te);
            te = W.unstable_now(), typeof k == "function" ? D.callback = k : D === p(z) && H(z), jt(te)
          } else H(z);
          D = p(z)
        }
        if (D !== null) var ce = !0;
        else {
          var ne = p(oe);
          ne !== null && Le(qe, ne.startTime - te), ce = !1
        }
        return ce
      } finally {
        D = null, B = b, De = !1
      }
    }
    var et = !1,
      ct = null,
      It = -1,
      on = 5,
      St = -1;

    function sn() {
      return !(W.unstable_now() - St < on)
    }

    function Lt() {
      if (ct !== null) {
        var A = W.unstable_now();
        St = A;
        var te = !0;
        try {
          te = ct(!0, A)
        } finally {
          te ? kt() : (et = !1, ct = null)
        }
      } else et = !1
    }
    var kt;
    if (typeof nt == "function") kt = function() {
      nt(Lt)
    };
    else if (typeof MessageChannel < "u") {
      var Ie = new MessageChannel,
        pe = Ie.port2;
      Ie.port1.onmessage = Lt, kt = function() {
        pe.postMessage(null)
      }
    } else kt = function() {
      we(Lt, 0)
    };

    function it(A) {
      ct = A, et || (et = !0, kt())
    }

    function Le(A, te) {
      It = we(function() {
        A(W.unstable_now())
      }, te)
    }
    W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(A) {
      A.callback = null
    }, W.unstable_continueExecution = function() {
      We || De || (We = !0, it(Nt))
    }, W.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : on = 0 < A ? Math.floor(1e3 / A) : 5
    }, W.unstable_getCurrentPriorityLevel = function() {
      return B
    }, W.unstable_getFirstCallbackNode = function() {
      return p(z)
    }, W.unstable_next = function(A) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = B
      }
      var b = B;
      B = te;
      try {
        return A()
      } finally {
        B = b
      }
    }, W.unstable_pauseExecution = function() {}, W.unstable_requestPaint = function() {}, W.unstable_runWithPriority = function(A, te) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3
      }
      var b = B;
      B = A;
      try {
        return te()
      } finally {
        B = b
      }
    }, W.unstable_scheduleCallback = function(A, te, b) {
      var h = W.unstable_now();
      switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? h + b : h) : b = h, A) {
        case 1:
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3
      }
      return k = b + k, A = {
        id: Ae++,
        callback: te,
        priorityLevel: A,
        startTime: b,
        expirationTime: k,
        sortIndex: -1
      }, b > h ? (A.sortIndex = b, Q(oe, A), p(z) === null && A === p(oe) && (ke ? (bt(It), It = -1) : ke = !0, Le(qe, b - h))) : (A.sortIndex = k, Q(z, A), We || De || (We = !0, it(Nt))), A
    }, W.unstable_shouldYield = sn, W.unstable_wrapCallback = function(A) {
      var te = B;
      return function() {
        var b = B;
        B = te;
        try {
          return A.apply(this, arguments)
        } finally {
          B = b
        }
      }
    }
  })($s)), $s
}
var od;

function ef() {
  return od || (od = 1, _s.exports = qc()), _s.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;

function tf() {
  if (sd) return Dt;
  sd = 1;
  var W = Ws(),
    Q = ef();

  function p(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  var H = new Set,
    T = {};

  function L(e, t) {
    ie(e, t), ie(e + "Capture", t)
  }

  function ie(e, t) {
    for (T[e] = t, e = 0; e < t.length; e++) H.add(t[e])
  }
  var $ = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    z = Object.prototype.hasOwnProperty,
    oe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ae = {},
    D = {};

  function B(e) {
    return z.call(D, e) ? !0 : z.call(Ae, e) ? !1 : oe.test(e) ? D[e] = !0 : (Ae[e] = !0, !1)
  }

  function De(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1
    }
  }

  function We(e, t, n, r) {
    if (t === null || typeof t > "u" || De(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t
    }
    return !1
  }

  function ke(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
  }
  var we = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    we[e] = new ke(e, 0, !1, e, null, !1, !1)
  }), [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
  ].forEach(function(e) {
    var t = e[0];
    we[t] = new ke(t, 1, !1, e[1], null, !1, !1)
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    we[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1)
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    we[e] = new ke(e, 2, !1, e, null, !1, !1)
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    we[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1)
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    we[e] = new ke(e, 3, !0, e, null, !1, !1)
  }), ["capture", "download"].forEach(function(e) {
    we[e] = new ke(e, 4, !1, e, null, !1, !1)
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    we[e] = new ke(e, 6, !1, e, null, !1, !1)
  }), ["rowSpan", "start"].forEach(function(e) {
    we[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1)
  });
  var bt = /[\-:]([a-z])/g;

  function nt(e) {
    return e[1].toUpperCase()
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(bt, nt);
    we[t] = new ke(t, 1, !1, e, null, !1, !1)
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(bt, nt);
    we[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(bt, nt);
    we[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    we[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1)
  }), we.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    we[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0)
  });

  function jt(e, t, n, r) {
    var i = we.hasOwnProperty(t) ? we[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (We(t, n, i, r) && (n = null), r || i === null ? B(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
  }
  var qe = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Nt = Symbol.for("react.element"),
    et = Symbol.for("react.portal"),
    ct = Symbol.for("react.fragment"),
    It = Symbol.for("react.strict_mode"),
    on = Symbol.for("react.profiler"),
    St = Symbol.for("react.provider"),
    sn = Symbol.for("react.context"),
    Lt = Symbol.for("react.forward_ref"),
    kt = Symbol.for("react.suspense"),
    Ie = Symbol.for("react.suspense_list"),
    pe = Symbol.for("react.memo"),
    it = Symbol.for("react.lazy"),
    Le = Symbol.for("react.offscreen"),
    A = Symbol.iterator;

  function te(e) {
    return e === null || typeof e != "object" ? null : (e = A && e[A] || e["@@iterator"], typeof e == "function" ? e : null)
  }
  var b = Object.assign,
    h;

  function k(e) {
    if (h === void 0) try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      h = t && t[1] || ""
    }
    return `
` + h + e
  }
  var ce = !1;

  function ne(e, t) {
    if (!e || ce) return "";
    ce = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
            throw Error()
          }, Object.defineProperty(t.prototype, "props", {
            set: function() {
              throw Error()
            }
          }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, [])
          } catch (x) {
            var r = x
          }
          Reflect.construct(e, [], t)
        } else {
          try {
            t.call()
          } catch (x) {
            r = x
          }
          e.call(t.prototype)
        }
      else {
        try {
          throw Error()
        } catch (x) {
          r = x
        }
        e()
      }
    } catch (x) {
      if (x && r && typeof x.stack == "string") {
        for (var i = x.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, u = o.length - 1; 1 <= s && 0 <= u && i[s] !== o[u];) u--;
        for (; 1 <= s && 0 <= u; s--, u--)
          if (i[s] !== o[u]) {
            if (s !== 1 || u !== 1)
              do
                if (s--, u--, 0 > u || i[s] !== o[u]) {
                  var d = `
` + i[s].replace(" at new ", " at ");
                  return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d
                } while (1 <= s && 0 <= u);
            break
          }
      }
    } finally {
      ce = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? k(e) : ""
  }

  function ye(e) {
    switch (e.tag) {
      case 5:
        return k(e.type);
      case 16:
        return k("Lazy");
      case 13:
        return k("Suspense");
      case 19:
        return k("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ne(e.type, !1), e;
      case 11:
        return e = ne(e.type.render, !1), e;
      case 1:
        return e = ne(e.type, !0), e;
      default:
        return ""
    }
  }

  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ct:
        return "Fragment";
      case et:
        return "Portal";
      case on:
        return "Profiler";
      case It:
        return "StrictMode";
      case kt:
        return "Suspense";
      case Ie:
        return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case sn:
        return (e.displayName || "Context") + ".Consumer";
      case St:
        return (e._context.displayName || "Context") + ".Provider";
      case Lt:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case pe:
        return t = e.displayName || null, t !== null ? t : ve(e.type) || "Memo";
      case it:
        t = e._payload, e = e._init;
        try {
          return ve(e(t))
        } catch {}
    }
    return null
  }

  function Pe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ve(t);
      case 8:
        return t === It ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t
    }
    return null
  }

  function Ee(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return ""
    }
  }

  function Me(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
  }

  function _t(e) {
    var t = Me(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get,
        o = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this)
        },
        set: function(s) {
          r = "" + s, o.call(this, s)
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return r
        },
        setValue: function(s) {
          r = "" + s
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t]
        }
      }
    }
  }

  function Vr(e) {
    e._valueTracker || (e._valueTracker = _t(e))
  }

  function Qr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return e && (r = Me(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
  }

  function $n(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }

  function Kr(e, t) {
    var n = t.checked;
    return b({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
    })
  }

  function bl(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ee(t.value != null ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
  }

  function Rn(e, t) {
    t = t.checked, t != null && jt(e, "checked", t, !1)
  }

  function mr(e, t) {
    Rn(e, t);
    var n = Ee(t.value),
      r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return
    }
    t.hasOwnProperty("value") ? yr(e, t.type, n) : t.hasOwnProperty("defaultValue") && yr(e, t.type, Ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
  }

  function Yr(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
  }

  function yr(e, t, n) {
    (t !== "number" || $n(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
  }
  var er = Array.isArray;

  function an(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
      for (n = "" + Ee(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return
        }
        t !== null || e[i].disabled || (t = e[i])
      }
      t !== null && (t.selected = !0)
    }
  }

  function O(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return b({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
    })
  }

  function _e(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(p(92));
        if (er(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0]
        }
        t = n
      }
      t == null && (t = ""), n = t
    }
    e._wrapperState = {
      initialValue: Ee(n)
    }
  }

  function Ht(e, t) {
    var n = Ee(t.value),
      r = Ee(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
  }

  function un(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
  }

  function tr(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml"
    }
  }

  function ot(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? tr(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
  }
  var ft, yn = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i)
      })
    } : e
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (ft = ft || document.createElement("div"), ft.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ft.firstChild; e.firstChild;) e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild)
    }
  });

  function Mt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return
      }
    }
    e.textContent = t
  }
  var $e = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    },
    Tn = ["Webkit", "ms", "Moz", "O"];
  Object.keys($e).forEach(function(e) {
    Tn.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), $e[t] = $e[e]
    })
  });

  function Wn(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || $e.hasOwnProperty(e) && $e[e] ? ("" + t).trim() : t + "px"
  }

  function Pn(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = Wn(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
      }
  }
  var Fi = b({
    menuitem: !0
  }, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  });

  function xr(e, t) {
    if (t) {
      if (Fi[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(p(61))
      }
      if (t.style != null && typeof t.style != "object") throw Error(p(62))
    }
  }

  function Xr(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0
    }
  }
  var vr = null;

  function Gr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
  }
  var jr = null,
    pt = null,
    An = null;

  function Nl(e) {
    if (e = yl(e)) {
      if (typeof jr != "function") throw Error(p(280));
      var t = e.stateNode;
      t && (t = ei(t), jr(e.stateNode, e.type, t))
    }
  }

  function Zr(e) {
    pt ? An ? An.push(e) : An = [e] : pt = e
  }

  function Jr() {
    if (pt) {
      var e = pt,
        t = An;
      if (An = pt = null, Nl(e), t)
        for (e = 0; e < t.length; e++) Nl(t[e])
    }
  }

  function Y(e, t) {
    return e(t)
  }

  function q() {}
  var Se = !1;

  function Be(e, t, n) {
    if (Se) return e(t, n);
    Se = !0;
    try {
      return Y(e, t, n)
    } finally {
      Se = !1, (pt !== null || An !== null) && (q(), Jr())
    }
  }

  function Ge(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ei(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(p(231, t, typeof n));
    return n
  }
  var X = !1;
  if ($) try {
    var be = {};
    Object.defineProperty(be, "passive", {
      get: function() {
        X = !0
      }
    }), window.addEventListener("test", be, be), window.removeEventListener("test", be, be)
  } catch {
    X = !1
  }

  function wt(e, t, n, r, i, o, s, u, d) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, x)
    } catch (C) {
      this.onError(C)
    }
  }
  var Zt = !1,
    c = null,
    y = !1,
    j = null,
    S = {
      onError: function(e) {
        Zt = !0, c = e
      }
    };

  function _(e, t, n, r, i, o, s, u, d) {
    Zt = !1, c = null, wt.apply(S, arguments)
  }

  function Z(e, t, n, r, i, o, s, u, d) {
    if (_.apply(this, arguments), Zt) {
      if (Zt) {
        var x = c;
        Zt = !1, c = null
      } else throw Error(p(198));
      y || (y = !0, j = x)
    }
  }

  function se(e) {
    var t = e,
      n = e;
    if (e.alternate)
      for (; t.return;) t = t.return;
    else {
      e = t;
      do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
  }

  function P(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
  }

  function ee(e) {
    if (se(e) !== e) throw Error(p(188))
  }

  function de(e) {
    var t = e.alternate;
    if (!t) {
      if (t = se(e), t === null) throw Error(p(188));
      return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
      var i = n.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue
        }
        break
      }
      if (i.child === o.child) {
        for (o = i.child; o;) {
          if (o === n) return ee(i), e;
          if (o === r) return ee(i), t;
          o = o.sibling
        }
        throw Error(p(188))
      }
      if (n.return !== r.return) n = i, r = o;
      else {
        for (var s = !1, u = i.child; u;) {
          if (u === n) {
            s = !0, n = i, r = o;
            break
          }
          if (u === r) {
            s = !0, r = i, n = o;
            break
          }
          u = u.sibling
        }
        if (!s) {
          for (u = o.child; u;) {
            if (u === n) {
              s = !0, n = o, r = i;
              break
            }
            if (u === r) {
              s = !0, r = o, n = i;
              break
            }
            u = u.sibling
          }
          if (!s) throw Error(p(189))
        }
      }
      if (n.alternate !== r) throw Error(p(190))
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t
  }

  function Oe(e) {
    return e = de(e), e !== null ? Fe(e) : null
  }

  function Fe(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Fe(e);
      if (t !== null) return t;
      e = e.sibling
    }
    return null
  }
  var Ct = Q.unstable_scheduleCallback,
    nr = Q.unstable_cancelCallback,
    Sr = Q.unstable_shouldYield,
    J = Q.unstable_requestPaint,
    G = Q.unstable_now,
    ue = Q.unstable_getCurrentPriorityLevel,
    he = Q.unstable_ImmediatePriority,
    $t = Q.unstable_UserBlockingPriority,
    I = Q.unstable_NormalPriority,
    je = Q.unstable_LowPriority,
    fe = Q.unstable_IdlePriority,
    Ue = null,
    Re = null;

  function st(e) {
    if (Re && typeof Re.onCommitFiberRoot == "function") try {
      Re.onCommitFiberRoot(Ue, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
  }
  var Ze = Math.clz32 ? Math.clz32 : Ui,
    Jt = Math.log,
    rr = Math.LN2;

  function Ui(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Jt(e) / rr | 0) | 0
  }
  var kr = 64,
    Il = 4194304;

  function qr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e
    }
  }

  function Ll(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var u = s & ~i;
      u !== 0 ? r = qr(u) : (o &= s, o !== 0 && (r = qr(o)))
    } else s = n & ~i, s !== 0 ? r = qr(s) : o !== 0 && (r = qr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ze(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
  }

  function hd(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1
    }
  }

  function gd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
      var s = 31 - Ze(o),
        u = 1 << s,
        d = i[s];
      d === -1 ? ((u & n) === 0 || (u & r) !== 0) && (i[s] = hd(u, t)) : d <= t && (e.expiredLanes |= u), o &= ~u
    }
  }

  function Hi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  }

  function Ps() {
    var e = kr;
    return kr <<= 1, (kr & 4194240) === 0 && (kr = 64), e
  }

  function Vi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
  }

  function el(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n
  }

  function md(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
      var i = 31 - Ze(n),
        o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
  }

  function Qi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
      var r = 31 - Ze(n),
        i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
  }
  var Te = 0;

  function As(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
  }
  var Ds, Ki, bs, Ns, Is, Yi = !1,
    Ml = [],
    Dn = null,
    bn = null,
    Nn = null,
    tl = new Map,
    nl = new Map,
    In = [],
    yd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

  function Ls(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dn = null;
        break;
      case "dragenter":
      case "dragleave":
        bn = null;
        break;
      case "mouseover":
      case "mouseout":
        Nn = null;
        break;
      case "pointerover":
      case "pointerout":
        tl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        nl.delete(t.pointerId)
    }
  }

  function rl(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [i]
    }, t !== null && (t = yl(t), t !== null && Ki(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
  }

  function xd(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return Dn = rl(Dn, e, t, n, r, i), !0;
      case "dragenter":
        return bn = rl(bn, e, t, n, r, i), !0;
      case "mouseover":
        return Nn = rl(Nn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return tl.set(o, rl(tl.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, nl.set(o, rl(nl.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
  }

  function Ms(e) {
    var t = lr(e.target);
    if (t !== null) {
      var n = se(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = P(n), t !== null) {
            e.blockedOn = t, Is(e.priority, function() {
              bs(n)
            });
            return
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return
        }
      }
    }
    e.blockedOn = null
  }

  function Bl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = Gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        vr = r, n.target.dispatchEvent(r), vr = null
      } else return t = yl(n), t !== null && Ki(t), e.blockedOn = n, !1;
      t.shift()
    }
    return !0
  }

  function Bs(e, t, n) {
    Bl(e) && n.delete(t)
  }

  function vd() {
    Yi = !1, Dn !== null && Bl(Dn) && (Dn = null), bn !== null && Bl(bn) && (bn = null), Nn !== null && Bl(Nn) && (Nn = null), tl.forEach(Bs), nl.forEach(Bs)
  }

  function ll(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Yi || (Yi = !0, Q.unstable_scheduleCallback(Q.unstable_NormalPriority, vd)))
  }

  function il(e) {
    function t(i) {
      return ll(i, e)
    }
    if (0 < Ml.length) {
      ll(Ml[0], e);
      for (var n = 1; n < Ml.length; n++) {
        var r = Ml[n];
        r.blockedOn === e && (r.blockedOn = null)
      }
    }
    for (Dn !== null && ll(Dn, e), bn !== null && ll(bn, e), Nn !== null && ll(Nn, e), tl.forEach(t), nl.forEach(t), n = 0; n < In.length; n++) r = In[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < In.length && (n = In[0], n.blockedOn === null);) Ms(n), n.blockedOn === null && In.shift()
  }
  var wr = qe.ReactCurrentBatchConfig,
    Ol = !0;

  function jd(e, t, n, r) {
    var i = Te,
      o = wr.transition;
    wr.transition = null;
    try {
      Te = 1, Xi(e, t, n, r)
    } finally {
      Te = i, wr.transition = o
    }
  }

  function Sd(e, t, n, r) {
    var i = Te,
      o = wr.transition;
    wr.transition = null;
    try {
      Te = 4, Xi(e, t, n, r)
    } finally {
      Te = i, wr.transition = o
    }
  }

  function Xi(e, t, n, r) {
    if (Ol) {
      var i = Gi(e, t, n, r);
      if (i === null) ho(e, t, r, Fl, n), Ls(e, r);
      else if (xd(i, e, t, n, r)) r.stopPropagation();
      else if (Ls(e, r), t & 4 && -1 < yd.indexOf(e)) {
        for (; i !== null;) {
          var o = yl(i);
          if (o !== null && Ds(o), o = Gi(e, t, n, r), o === null && ho(e, t, r, Fl, n), o === i) break;
          i = o
        }
        i !== null && r.stopPropagation()
      } else ho(e, t, r, null, n)
    }
  }
  var Fl = null;

  function Gi(e, t, n, r) {
    if (Fl = null, e = Gr(r), e = lr(e), e !== null)
      if (t = se(e), t === null) e = null;
      else if (n = t.tag, n === 13) {
      if (e = P(t), e !== null) return e;
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null
    } else t !== e && (e = null);
    return Fl = e, null
  }

  function Os(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ue()) {
          case he:
            return 1;
          case $t:
            return 4;
          case I:
          case je:
            return 16;
          case fe:
            return 536870912;
          default:
            return 16
        }
      default:
        return 16
    }
  }
  var Ln = null,
    Zi = null,
    Ul = null;

  function Fs() {
    if (Ul) return Ul;
    var e, t = Zi,
      n = t.length,
      r, i = "value" in Ln ? Ln.value : Ln.textContent,
      o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return Ul = i.slice(e, 1 < r ? 1 - r : void 0)
  }

  function Hl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
  }

  function Vl() {
    return !0
  }

  function Us() {
    return !1
  }

  function Bt(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Vl : Us, this.isPropagationStopped = Us, this
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Vl)
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Vl)
      },
      persist: function() {},
      isPersistent: Vl
    }), t
  }
  var Cr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Ji = Bt(Cr),
    ol = b({}, Cr, {
      view: 0,
      detail: 0
    }),
    kd = Bt(ol),
    qi, eo, sl, Ql = b({}, ol, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: no,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== sl && (sl && e.type === "mousemove" ? (qi = e.screenX - sl.screenX, eo = e.screenY - sl.screenY) : eo = qi = 0, sl = e), qi)
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : eo
      }
    }),
    Hs = Bt(Ql),
    wd = b({}, Ql, {
      dataTransfer: 0
    }),
    Cd = Bt(wd),
    zd = b({}, ol, {
      relatedTarget: 0
    }),
    to = Bt(zd),
    Ed = b({}, Cr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    _d = Bt(Ed),
    $d = b({}, Cr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      }
    }),
    Rd = Bt($d),
    Td = b({}, Cr, {
      data: 0
    }),
    Vs = Bt(Td),
    Wd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    },
    Pd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    },
    Ad = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

  function Dd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ad[e]) ? !!t[e] : !1
  }

  function no() {
    return Dd
  }
  var bd = b({}, ol, {
      key: function(e) {
        if (e.key) {
          var t = Wd[e.key] || e.key;
          if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = Hl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pd[e.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: no,
      charCode: function(e) {
        return e.type === "keypress" ? Hl(e) : 0
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function(e) {
        return e.type === "keypress" ? Hl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      }
    }),
    Nd = Bt(bd),
    Id = b({}, Ql, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    Qs = Bt(Id),
    Ld = b({}, ol, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: no
    }),
    Md = Bt(Ld),
    Bd = b({}, Cr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Od = Bt(Bd),
    Fd = b({}, Ql, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    Ud = Bt(Fd),
    Hd = [9, 13, 27, 32],
    ro = $ && "CompositionEvent" in window,
    al = null;
  $ && "documentMode" in document && (al = document.documentMode);
  var Vd = $ && "TextEvent" in window && !al,
    Ks = $ && (!ro || al && 8 < al && 11 >= al),
    Ys = " ",
    Xs = !1;

  function Gs(e, t) {
    switch (e) {
      case "keyup":
        return Hd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1
    }
  }

  function Zs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
  }
  var zr = !1;

  function Qd(e, t) {
    switch (e) {
      case "compositionend":
        return Zs(t);
      case "keypress":
        return t.which !== 32 ? null : (Xs = !0, Ys);
      case "textInput":
        return e = t.data, e === Ys && Xs ? null : e;
      default:
        return null
    }
  }

  function Kd(e, t) {
    if (zr) return e === "compositionend" || !ro && Gs(e, t) ? (e = Fs(), Ul = Zi = Ln = null, zr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which)
        }
        return null;
      case "compositionend":
        return Ks && t.locale !== "ko" ? null : t.data;
      default:
        return null
    }
  }
  var Yd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };

  function Js(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yd[e.type] : t === "textarea"
  }

  function qs(e, t, n, r) {
    Zr(r), t = Zl(t, "onChange"), 0 < t.length && (n = new Ji("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
    }))
  }
  var ul = null,
    dl = null;

  function Xd(e) {
    ya(e, 0)
  }

  function Kl(e) {
    var t = Tr(e);
    if (Qr(t)) return e
  }

  function Gd(e, t) {
    if (e === "change") return t
  }
  var ea = !1;
  if ($) {
    var lo;
    if ($) {
      var io = "oninput" in document;
      if (!io) {
        var ta = document.createElement("div");
        ta.setAttribute("oninput", "return;"), io = typeof ta.oninput == "function"
      }
      lo = io
    } else lo = !1;
    ea = lo && (!document.documentMode || 9 < document.documentMode)
  }

  function na() {
    ul && (ul.detachEvent("onpropertychange", ra), dl = ul = null)
  }

  function ra(e) {
    if (e.propertyName === "value" && Kl(dl)) {
      var t = [];
      qs(t, dl, e, Gr(e)), Be(Xd, t)
    }
  }

  function Zd(e, t, n) {
    e === "focusin" ? (na(), ul = t, dl = n, ul.attachEvent("onpropertychange", ra)) : e === "focusout" && na()
  }

  function Jd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Kl(dl)
  }

  function qd(e, t) {
    if (e === "click") return Kl(t)
  }

  function ec(e, t) {
    if (e === "input" || e === "change") return Kl(t)
  }

  function tc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
  }
  var qt = typeof Object.is == "function" ? Object.is : tc;

  function cl(e, t) {
    if (qt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!z.call(t, i) || !qt(e[i], t[i])) return !1
    }
    return !0
  }

  function la(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
  }

  function ia(e, t) {
    var n = la(e);
    e = 0;
    for (var r; n;) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return {
          node: n,
          offset: t - e
        };
        e = r
      }
      e: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e
          }
          n = n.parentNode
        }
        n = void 0
      }
      n = la(n)
    }
  }

  function oa(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? oa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
  }

  function sa() {
    for (var e = window, t = $n(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string"
      } catch {
        n = !1
      }
      if (n) e = t.contentWindow;
      else break;
      t = $n(e.document)
    }
    return t
  }

  function oo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
  }

  function nc(e) {
    var t = sa(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && oa(n.ownerDocument.documentElement, n)) {
      if (r !== null && oo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length,
            o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ia(n, o);
          var s = ia(n, r);
          i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
        }
      }
      for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
        element: e,
        left: e.scrollLeft,
        top: e.scrollTop
      });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
  }
  var rc = $ && "documentMode" in document && 11 >= document.documentMode,
    Er = null,
    so = null,
    fl = null,
    ao = !1;

  function aa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ao || Er == null || Er !== $n(r) || (r = Er, "selectionStart" in r && oo(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), fl && cl(fl, r) || (fl = r, r = Zl(so, "onSelect"), 0 < r.length && (t = new Ji("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
    }), t.target = Er)))
  }

  function Yl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
  }
  var _r = {
      animationend: Yl("Animation", "AnimationEnd"),
      animationiteration: Yl("Animation", "AnimationIteration"),
      animationstart: Yl("Animation", "AnimationStart"),
      transitionend: Yl("Transition", "TransitionEnd")
    },
    uo = {},
    ua = {};
  $ && (ua = document.createElement("div").style, "AnimationEvent" in window || (delete _r.animationend.animation, delete _r.animationiteration.animation, delete _r.animationstart.animation), "TransitionEvent" in window || delete _r.transitionend.transition);

  function Xl(e) {
    if (uo[e]) return uo[e];
    if (!_r[e]) return e;
    var t = _r[e],
      n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in ua) return uo[e] = t[n];
    return e
  }
  var da = Xl("animationend"),
    ca = Xl("animationiteration"),
    fa = Xl("animationstart"),
    pa = Xl("transitionend"),
    ha = new Map,
    ga = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

  function Mn(e, t) {
    ha.set(e, t), L(t, [e])
  }
  for (var co = 0; co < ga.length; co++) {
    var fo = ga[co],
      lc = fo.toLowerCase(),
      ic = fo[0].toUpperCase() + fo.slice(1);
    Mn(lc, "on" + ic)
  }
  Mn(da, "onAnimationEnd"), Mn(ca, "onAnimationIteration"), Mn(fa, "onAnimationStart"), Mn("dblclick", "onDoubleClick"), Mn("focusin", "onFocus"), Mn("focusout", "onBlur"), Mn(pa, "onTransitionEnd"), ie("onMouseEnter", ["mouseout", "mouseover"]), ie("onMouseLeave", ["mouseout", "mouseover"]), ie("onPointerEnter", ["pointerout", "pointerover"]), ie("onPointerLeave", ["pointerout", "pointerover"]), L("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), L("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), L("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), L("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), L("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), L("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var pl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    oc = new Set("cancel close invalid load scroll toggle".split(" ").concat(pl));

  function ma(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Z(r, t, void 0, e), e.currentTarget = null
  }

  function ya(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var u = r[s],
              d = u.instance,
              x = u.currentTarget;
            if (u = u.listener, d !== o && i.isPropagationStopped()) break e;
            ma(i, u, x), o = d
          } else
            for (s = 0; s < r.length; s++) {
              if (u = r[s], d = u.instance, x = u.currentTarget, u = u.listener, d !== o && i.isPropagationStopped()) break e;
              ma(i, u, x), o = d
            }
      }
    }
    if (y) throw e = j, y = !1, j = null, e
  }

  function He(e, t) {
    var n = t[jo];
    n === void 0 && (n = t[jo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (xa(t, e, 2, !1), n.add(r))
  }

  function po(e, t, n) {
    var r = 0;
    t && (r |= 4), xa(n, e, r, t)
  }
  var Gl = "_reactListening" + Math.random().toString(36).slice(2);

  function hl(e) {
    if (!e[Gl]) {
      e[Gl] = !0, H.forEach(function(n) {
        n !== "selectionchange" && (oc.has(n) || po(n, !1, e), po(n, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gl] || (t[Gl] = !0, po("selectionchange", !1, t))
    }
  }

  function xa(e, t, n, r) {
    switch (Os(t)) {
      case 1:
        var i = jd;
        break;
      case 4:
        i = Sd;
        break;
      default:
        i = Xi
    }
    n = i.bind(null, t, n, e), i = void 0, !X || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1)
  }

  function ho(e, t, n, r, i) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var u = r.stateNode.containerInfo;
        if (u === i || u.nodeType === 8 && u.parentNode === i) break;
        if (s === 4)
          for (s = r.return; s !== null;) {
            var d = s.tag;
            if ((d === 3 || d === 4) && (d = s.stateNode.containerInfo, d === i || d.nodeType === 8 && d.parentNode === i)) return;
            s = s.return
          }
        for (; u !== null;) {
          if (s = lr(u), s === null) return;
          if (d = s.tag, d === 5 || d === 6) {
            r = o = s;
            continue e
          }
          u = u.parentNode
        }
      }
      r = r.return
    }
    Be(function() {
      var x = o,
        C = Gr(n),
        E = [];
      e: {
        var w = ha.get(e);
        if (w !== void 0) {
          var N = Ji,
            F = e;
          switch (e) {
            case "keypress":
              if (Hl(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = Nd;
              break;
            case "focusin":
              F = "focus", N = to;
              break;
            case "focusout":
              F = "blur", N = to;
              break;
            case "beforeblur":
            case "afterblur":
              N = to;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Hs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Cd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Md;
              break;
            case da:
            case ca:
            case fa:
              N = _d;
              break;
            case pa:
              N = Od;
              break;
            case "scroll":
              N = kd;
              break;
            case "wheel":
              N = Ud;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Rd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Qs
          }
          var V = (t & 4) !== 0,
            Je = !V && e === "scroll",
            g = V ? w !== null ? w + "Capture" : null : w;
          V = [];
          for (var f = x, m; f !== null;) {
            m = f;
            var R = m.stateNode;
            if (m.tag === 5 && R !== null && (m = R, g !== null && (R = Ge(f, g), R != null && V.push(gl(f, R, m)))), Je) break;
            f = f.return
          }
          0 < V.length && (w = new N(w, F, null, n, C), E.push({
            event: w,
            listeners: V
          }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (w = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", w && n !== vr && (F = n.relatedTarget || n.fromElement) && (lr(F) || F[xn])) break e;
          if ((N || w) && (w = C.window === C ? C : (w = C.ownerDocument) ? w.defaultView || w.parentWindow : window, N ? (F = n.relatedTarget || n.toElement, N = x, F = F ? lr(F) : null, F !== null && (Je = se(F), F !== Je || F.tag !== 5 && F.tag !== 6) && (F = null)) : (N = null, F = x), N !== F)) {
            if (V = Hs, R = "onMouseLeave", g = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (V = Qs, R = "onPointerLeave", g = "onPointerEnter", f = "pointer"), Je = N == null ? w : Tr(N), m = F == null ? w : Tr(F), w = new V(R, f + "leave", N, n, C), w.target = Je, w.relatedTarget = m, R = null, lr(C) === x && (V = new V(g, f + "enter", F, n, C), V.target = m, V.relatedTarget = Je, R = V), Je = R, N && F) t: {
              for (V = N, g = F, f = 0, m = V; m; m = $r(m)) f++;
              for (m = 0, R = g; R; R = $r(R)) m++;
              for (; 0 < f - m;) V = $r(V),
              f--;
              for (; 0 < m - f;) g = $r(g),
              m--;
              for (; f--;) {
                if (V === g || g !== null && V === g.alternate) break t;
                V = $r(V), g = $r(g)
              }
              V = null
            }
            else V = null;
            N !== null && va(E, w, N, V, !1), F !== null && Je !== null && va(E, Je, F, V, !0)
          }
        }
        e: {
          if (w = x ? Tr(x) : window, N = w.nodeName && w.nodeName.toLowerCase(), N === "select" || N === "input" && w.type === "file") var K = Gd;
          else if (Js(w))
            if (ea) K = ec;
            else {
              K = Jd;
              var re = Zd
            }
          else(N = w.nodeName) && N.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (K = qd);
          if (K && (K = K(e, x))) {
            qs(E, K, n, C);
            break e
          }
          re && re(e, w, x),
          e === "focusout" && (re = w._wrapperState) && re.controlled && w.type === "number" && yr(w, "number", w.value)
        }
        switch (re = x ? Tr(x) : window, e) {
          case "focusin":
            (Js(re) || re.contentEditable === "true") && (Er = re, so = x, fl = null);
            break;
          case "focusout":
            fl = so = Er = null;
            break;
          case "mousedown":
            ao = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ao = !1, aa(E, n, C);
            break;
          case "selectionchange":
            if (rc) break;
          case "keydown":
          case "keyup":
            aa(E, n, C)
        }
        var le;
        if (ro) e: {
          switch (e) {
            case "compositionstart":
              var ae = "onCompositionStart";
              break e;
            case "compositionend":
              ae = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ae = "onCompositionUpdate";
              break e
          }
          ae = void 0
        }
        else zr ? Gs(e, n) && (ae = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ae = "onCompositionStart");ae && (Ks && n.locale !== "ko" && (zr || ae !== "onCompositionStart" ? ae === "onCompositionEnd" && zr && (le = Fs()) : (Ln = C, Zi = "value" in Ln ? Ln.value : Ln.textContent, zr = !0)), re = Zl(x, ae), 0 < re.length && (ae = new Vs(ae, e, null, n, C), E.push({
          event: ae,
          listeners: re
        }), le ? ae.data = le : (le = Zs(n), le !== null && (ae.data = le)))),
        (le = Vd ? Qd(e, n) : Kd(e, n)) && (x = Zl(x, "onBeforeInput"), 0 < x.length && (C = new Vs("onBeforeInput", "beforeinput", null, n, C), E.push({
          event: C,
          listeners: x
        }), C.data = le))
      }
      ya(E, t)
    })
  }

  function gl(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    }
  }

  function Zl(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var i = e,
        o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = Ge(e, n), o != null && r.unshift(gl(e, o, i)), o = Ge(e, t), o != null && r.push(gl(e, o, i))), e = e.return
    }
    return r
  }

  function $r(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
  }

  function va(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
      var u = n,
        d = u.alternate,
        x = u.stateNode;
      if (d !== null && d === r) break;
      u.tag === 5 && x !== null && (u = x, i ? (d = Ge(n, o), d != null && s.unshift(gl(n, d, u))) : i || (d = Ge(n, o), d != null && s.push(gl(n, d, u)))), n = n.return
    }
    s.length !== 0 && e.push({
      event: t,
      listeners: s
    })
  }
  var sc = /\r\n?/g,
    ac = /\u0000|\uFFFD/g;

  function ja(e) {
    return (typeof e == "string" ? e : "" + e).replace(sc, `
`).replace(ac, "")
  }

  function Jl(e, t, n) {
    if (t = ja(t), ja(e) !== t && n) throw Error(p(425))
  }

  function ql() {}
  var go = null,
    mo = null;

  function yo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
  }
  var xo = typeof setTimeout == "function" ? setTimeout : void 0,
    uc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Sa = typeof Promise == "function" ? Promise : void 0,
    dc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sa < "u" ? function(e) {
      return Sa.resolve(null).then(e).catch(cc)
    } : xo;

  function cc(e) {
    setTimeout(function() {
      throw e
    })
  }

  function vo(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), il(t);
            return
          }
          r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i
    } while (n);
    il(t)
  }

  function Bn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null
      }
    }
    return e
  }

  function ka(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--
        } else n === "/$" && t++
      }
      e = e.previousSibling
    }
    return null
  }
  var Rr = Math.random().toString(36).slice(2),
    dn = "__reactFiber$" + Rr,
    ml = "__reactProps$" + Rr,
    xn = "__reactContainer$" + Rr,
    jo = "__reactEvents$" + Rr,
    fc = "__reactListeners$" + Rr,
    pc = "__reactHandles$" + Rr;

  function lr(e) {
    var t = e[dn];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if (t = n[xn] || n[dn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = ka(e); e !== null;) {
            if (n = e[dn]) return n;
            e = ka(e)
          }
        return t
      }
      e = n, n = e.parentNode
    }
    return null
  }

  function yl(e) {
    return e = e[dn] || e[xn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
  }

  function Tr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33))
  }

  function ei(e) {
    return e[ml] || null
  }
  var So = [],
    Wr = -1;

  function On(e) {
    return {
      current: e
    }
  }

  function Ve(e) {
    0 > Wr || (e.current = So[Wr], So[Wr] = null, Wr--)
  }

  function Ne(e, t) {
    Wr++, So[Wr] = e.current, e.current = t
  }
  var Fn = {},
    mt = On(Fn),
    Rt = On(!1),
    ir = Fn;

  function Pr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
  }

  function Tt(e) {
    return e = e.childContextTypes, e != null
  }

  function ti() {
    Ve(Rt), Ve(mt)
  }

  function wa(e, t, n) {
    if (mt.current !== Fn) throw Error(p(168));
    Ne(mt, t), Ne(Rt, n)
  }

  function Ca(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in t)) throw Error(p(108, Pe(e) || "Unknown", i));
    return b({}, n, r)
  }

  function ni(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, ir = mt.current, Ne(mt, e), Ne(Rt, Rt.current), !0
  }

  function za(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    n ? (e = Ca(e, t, ir), r.__reactInternalMemoizedMergedChildContext = e, Ve(Rt), Ve(mt), Ne(mt, e)) : Ve(Rt), Ne(Rt, n)
  }
  var vn = null,
    ri = !1,
    ko = !1;

  function Ea(e) {
    vn === null ? vn = [e] : vn.push(e)
  }

  function hc(e) {
    ri = !0, Ea(e)
  }

  function Un() {
    if (!ko && vn !== null) {
      ko = !0;
      var e = 0,
        t = Te;
      try {
        var n = vn;
        for (Te = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0); while (r !== null)
        }
        vn = null, ri = !1
      } catch (i) {
        throw vn !== null && (vn = vn.slice(e + 1)), Ct(he, Un), i
      } finally {
        Te = t, ko = !1
      }
    }
    return null
  }
  var Ar = [],
    Dr = 0,
    li = null,
    ii = 0,
    Vt = [],
    Qt = 0,
    or = null,
    jn = 1,
    Sn = "";

  function sr(e, t) {
    Ar[Dr++] = ii, Ar[Dr++] = li, li = e, ii = t
  }

  function _a(e, t, n) {
    Vt[Qt++] = jn, Vt[Qt++] = Sn, Vt[Qt++] = or, or = e;
    var r = jn;
    e = Sn;
    var i = 32 - Ze(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - Ze(t) + i;
    if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, jn = 1 << 32 - Ze(t) + i | n << i | r, Sn = o + e
    } else jn = 1 << o | n << i | r, Sn = e
  }

  function wo(e) {
    e.return !== null && (sr(e, 1), _a(e, 1, 0))
  }

  function Co(e) {
    for (; e === li;) li = Ar[--Dr], Ar[Dr] = null, ii = Ar[--Dr], Ar[Dr] = null;
    for (; e === or;) or = Vt[--Qt], Vt[Qt] = null, Sn = Vt[--Qt], Vt[Qt] = null, jn = Vt[--Qt], Vt[Qt] = null
  }
  var Ot = null,
    Ft = null,
    Qe = !1,
    en = null;

  function $a(e, t) {
    var n = Gt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
  }

  function Ra(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ot = e, Ft = Bn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ot = e, Ft = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = or !== null ? {
          id: jn,
          overflow: Sn
        } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = Gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ot = e, Ft = null, !0) : !1;
      default:
        return !1
    }
  }

  function zo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
  }

  function Eo(e) {
    if (Qe) {
      var t = Ft;
      if (t) {
        var n = t;
        if (!Ra(e, t)) {
          if (zo(e)) throw Error(p(418));
          t = Bn(n.nextSibling);
          var r = Ot;
          t && Ra(e, t) ? $a(r, n) : (e.flags = e.flags & -4097 | 2, Qe = !1, Ot = e)
        }
      } else {
        if (zo(e)) throw Error(p(418));
        e.flags = e.flags & -4097 | 2, Qe = !1, Ot = e
      }
    }
  }

  function Ta(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ot = e
  }

  function oi(e) {
    if (e !== Ot) return !1;
    if (!Qe) return Ta(e), Qe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !yo(e.type, e.memoizedProps)), t && (t = Ft)) {
      if (zo(e)) throw Wa(), Error(p(418));
      for (; t;) $a(e, t), t = Bn(t.nextSibling)
    }
    if (Ta(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ft = Bn(e.nextSibling);
                break e
              }
              t--
            } else n !== "$" && n !== "$!" && n !== "$?" || t++
          }
          e = e.nextSibling
        }
        Ft = null
      }
    } else Ft = Ot ? Bn(e.stateNode.nextSibling) : null;
    return !0
  }

  function Wa() {
    for (var e = Ft; e;) e = Bn(e.nextSibling)
  }

  function br() {
    Ft = Ot = null, Qe = !1
  }

  function _o(e) {
    en === null ? en = [e] : en.push(e)
  }
  var gc = qe.ReactCurrentBatchConfig;

  function xl(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode
        }
        if (!r) throw Error(p(147, e));
        var i = r,
          o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
          var u = i.refs;
          s === null ? delete u[o] : u[o] = s
        }, t._stringRef = o, t)
      }
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e))
    }
    return e
  }

  function si(e, t) {
    throw e = Object.prototype.toString.call(t), Error(p(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
  }

  function Pa(e) {
    var t = e._init;
    return t(e._payload)
  }

  function Aa(e) {
    function t(g, f) {
      if (e) {
        var m = g.deletions;
        m === null ? (g.deletions = [f], g.flags |= 16) : m.push(f)
      }
    }

    function n(g, f) {
      if (!e) return null;
      for (; f !== null;) t(g, f), f = f.sibling;
      return null
    }

    function r(g, f) {
      for (g = new Map; f !== null;) f.key !== null ? g.set(f.key, f) : g.set(f.index, f), f = f.sibling;
      return g
    }

    function i(g, f) {
      return g = Zn(g, f), g.index = 0, g.sibling = null, g
    }

    function o(g, f, m) {
      return g.index = m, e ? (m = g.alternate, m !== null ? (m = m.index, m < f ? (g.flags |= 2, f) : m) : (g.flags |= 2, f)) : (g.flags |= 1048576, f)
    }

    function s(g) {
      return e && g.alternate === null && (g.flags |= 2), g
    }

    function u(g, f, m, R) {
      return f === null || f.tag !== 6 ? (f = xs(m, g.mode, R), f.return = g, f) : (f = i(f, m), f.return = g, f)
    }

    function d(g, f, m, R) {
      var K = m.type;
      return K === ct ? C(g, f, m.props.children, R, m.key) : f !== null && (f.elementType === K || typeof K == "object" && K !== null && K.$$typeof === it && Pa(K) === f.type) ? (R = i(f, m.props), R.ref = xl(g, f, m), R.return = g, R) : (R = Wi(m.type, m.key, m.props, null, g.mode, R), R.ref = xl(g, f, m), R.return = g, R)
    }

    function x(g, f, m, R) {
      return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = vs(m, g.mode, R), f.return = g, f) : (f = i(f, m.children || []), f.return = g, f)
    }

    function C(g, f, m, R, K) {
      return f === null || f.tag !== 7 ? (f = gr(m, g.mode, R, K), f.return = g, f) : (f = i(f, m), f.return = g, f)
    }

    function E(g, f, m) {
      if (typeof f == "string" && f !== "" || typeof f == "number") return f = xs("" + f, g.mode, m), f.return = g, f;
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case Nt:
            return m = Wi(f.type, f.key, f.props, null, g.mode, m), m.ref = xl(g, null, f), m.return = g, m;
          case et:
            return f = vs(f, g.mode, m), f.return = g, f;
          case it:
            var R = f._init;
            return E(g, R(f._payload), m)
        }
        if (er(f) || te(f)) return f = gr(f, g.mode, m, null), f.return = g, f;
        si(g, f)
      }
      return null
    }

    function w(g, f, m, R) {
      var K = f !== null ? f.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number") return K !== null ? null : u(g, f, "" + m, R);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Nt:
            return m.key === K ? d(g, f, m, R) : null;
          case et:
            return m.key === K ? x(g, f, m, R) : null;
          case it:
            return K = m._init, w(g, f, K(m._payload), R)
        }
        if (er(m) || te(m)) return K !== null ? null : C(g, f, m, R, null);
        si(g, m)
      }
      return null
    }

    function N(g, f, m, R, K) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return g = g.get(m) || null, u(f, g, "" + R, K);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Nt:
            return g = g.get(R.key === null ? m : R.key) || null, d(f, g, R, K);
          case et:
            return g = g.get(R.key === null ? m : R.key) || null, x(f, g, R, K);
          case it:
            var re = R._init;
            return N(g, f, m, re(R._payload), K)
        }
        if (er(R) || te(R)) return g = g.get(m) || null, C(f, g, R, K, null);
        si(f, R)
      }
      return null
    }

    function F(g, f, m, R) {
      for (var K = null, re = null, le = f, ae = f = 0, dt = null; le !== null && ae < m.length; ae++) {
        le.index > ae ? (dt = le, le = null) : dt = le.sibling;
        var ze = w(g, le, m[ae], R);
        if (ze === null) {
          le === null && (le = dt);
          break
        }
        e && le && ze.alternate === null && t(g, le), f = o(ze, f, ae), re === null ? K = ze : re.sibling = ze, re = ze, le = dt
      }
      if (ae === m.length) return n(g, le), Qe && sr(g, ae), K;
      if (le === null) {
        for (; ae < m.length; ae++) le = E(g, m[ae], R), le !== null && (f = o(le, f, ae), re === null ? K = le : re.sibling = le, re = le);
        return Qe && sr(g, ae), K
      }
      for (le = r(g, le); ae < m.length; ae++) dt = N(le, g, ae, m[ae], R), dt !== null && (e && dt.alternate !== null && le.delete(dt.key === null ? ae : dt.key), f = o(dt, f, ae), re === null ? K = dt : re.sibling = dt, re = dt);
      return e && le.forEach(function(Jn) {
        return t(g, Jn)
      }), Qe && sr(g, ae), K
    }

    function V(g, f, m, R) {
      var K = te(m);
      if (typeof K != "function") throw Error(p(150));
      if (m = K.call(m), m == null) throw Error(p(151));
      for (var re = K = null, le = f, ae = f = 0, dt = null, ze = m.next(); le !== null && !ze.done; ae++, ze = m.next()) {
        le.index > ae ? (dt = le, le = null) : dt = le.sibling;
        var Jn = w(g, le, ze.value, R);
        if (Jn === null) {
          le === null && (le = dt);
          break
        }
        e && le && Jn.alternate === null && t(g, le), f = o(Jn, f, ae), re === null ? K = Jn : re.sibling = Jn, re = Jn, le = dt
      }
      if (ze.done) return n(g, le), Qe && sr(g, ae), K;
      if (le === null) {
        for (; !ze.done; ae++, ze = m.next()) ze = E(g, ze.value, R), ze !== null && (f = o(ze, f, ae), re === null ? K = ze : re.sibling = ze, re = ze);
        return Qe && sr(g, ae), K
      }
      for (le = r(g, le); !ze.done; ae++, ze = m.next()) ze = N(le, g, ae, ze.value, R), ze !== null && (e && ze.alternate !== null && le.delete(ze.key === null ? ae : ze.key), f = o(ze, f, ae), re === null ? K = ze : re.sibling = ze, re = ze);
      return e && le.forEach(function(Yc) {
        return t(g, Yc)
      }), Qe && sr(g, ae), K
    }

    function Je(g, f, m, R) {
      if (typeof m == "object" && m !== null && m.type === ct && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Nt:
            e: {
              for (var K = m.key, re = f; re !== null;) {
                if (re.key === K) {
                  if (K = m.type, K === ct) {
                    if (re.tag === 7) {
                      n(g, re.sibling), f = i(re, m.props.children), f.return = g, g = f;
                      break e
                    }
                  } else if (re.elementType === K || typeof K == "object" && K !== null && K.$$typeof === it && Pa(K) === re.type) {
                    n(g, re.sibling), f = i(re, m.props), f.ref = xl(g, re, m), f.return = g, g = f;
                    break e
                  }
                  n(g, re);
                  break
                } else t(g, re);
                re = re.sibling
              }
              m.type === ct ? (f = gr(m.props.children, g.mode, R, m.key), f.return = g, g = f) : (R = Wi(m.type, m.key, m.props, null, g.mode, R), R.ref = xl(g, f, m), R.return = g, g = R)
            }
            return s(g);
          case et:
            e: {
              for (re = m.key; f !== null;) {
                if (f.key === re)
                  if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                    n(g, f.sibling), f = i(f, m.children || []), f.return = g, g = f;
                    break e
                  } else {
                    n(g, f);
                    break
                  }
                else t(g, f);
                f = f.sibling
              }
              f = vs(m, g.mode, R),
              f.return = g,
              g = f
            }
            return s(g);
          case it:
            return re = m._init, Je(g, f, re(m._payload), R)
        }
        if (er(m)) return F(g, f, m, R);
        if (te(m)) return V(g, f, m, R);
        si(g, m)
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(g, f.sibling), f = i(f, m), f.return = g, g = f) : (n(g, f), f = xs(m, g.mode, R), f.return = g, g = f), s(g)) : n(g, f)
    }
    return Je
  }
  var Nr = Aa(!0),
    Da = Aa(!1),
    ai = On(null),
    ui = null,
    Ir = null,
    $o = null;

  function Ro() {
    $o = Ir = ui = null
  }

  function To(e) {
    var t = ai.current;
    Ve(ai), e._currentValue = t
  }

  function Wo(e, t, n) {
    for (; e !== null;) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return
    }
  }

  function Lr(e, t) {
    ui = e, $o = Ir = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Wt = !0), e.firstContext = null)
  }

  function Kt(e) {
    var t = e._currentValue;
    if ($o !== e)
      if (e = {
          context: e,
          memoizedValue: t,
          next: null
        }, Ir === null) {
        if (ui === null) throw Error(p(308));
        Ir = e, ui.dependencies = {
          lanes: 0,
          firstContext: e
        }
      } else Ir = Ir.next = e;
    return t
  }
  var ar = null;

  function Po(e) {
    ar === null ? ar = [e] : ar.push(e)
  }

  function ba(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Po(t)) : (n.next = i.next, i.next = n), t.interleaved = n, kn(e, r)
  }

  function kn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
  }
  var Hn = !1;

  function Ao(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    }
  }

  function Na(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    })
  }

  function wn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }

  function Vn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Ce & 2) !== 0) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, kn(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Po(r)) : (t.next = i.next, i.next = t), r.interleaved = t, kn(e, n)
  }

  function di(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Qi(e, n)
    }
  }

  function Ia(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null,
        o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null
          };
          o === null ? i = o = s : o = o.next = s, n = n.next
        } while (n !== null);
        o === null ? i = o = t : o = o.next = t
      } else i = o = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects
      }, e.updateQueue = n;
      return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
  }

  function ci(e, t, n, r) {
    var i = e.updateQueue;
    Hn = !1;
    var o = i.firstBaseUpdate,
      s = i.lastBaseUpdate,
      u = i.shared.pending;
    if (u !== null) {
      i.shared.pending = null;
      var d = u,
        x = d.next;
      d.next = null, s === null ? o = x : s.next = x, s = d;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, u = C.lastBaseUpdate, u !== s && (u === null ? C.firstBaseUpdate = x : u.next = x, C.lastBaseUpdate = d))
    }
    if (o !== null) {
      var E = i.baseState;
      s = 0, C = x = d = null, u = o;
      do {
        var w = u.lane,
          N = u.eventTime;
        if ((r & w) === w) {
          C !== null && (C = C.next = {
            eventTime: N,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var F = e,
              V = u;
            switch (w = t, N = n, V.tag) {
              case 1:
                if (F = V.payload, typeof F == "function") {
                  E = F.call(N, E, w);
                  break e
                }
                E = F;
                break e;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = V.payload, w = typeof F == "function" ? F.call(N, E, w) : F, w == null) break e;
                E = b({}, E, w);
                break e;
              case 2:
                Hn = !0
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, w = i.effects, w === null ? i.effects = [u] : w.push(u))
        } else N = {
          eventTime: N,
          lane: w,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        }, C === null ? (x = C = N, d = E) : C = C.next = N, s |= w;
        if (u = u.next, u === null) {
          if (u = i.shared.pending, u === null) break;
          w = u, u = w.next, w.next = null, i.lastBaseUpdate = w, i.shared.pending = null
        }
      } while (!0);
      if (C === null && (d = E), i.baseState = d, i.firstBaseUpdate = x, i.lastBaseUpdate = C, t = i.shared.interleaved, t !== null) {
        i = t;
        do s |= i.lane, i = i.next; while (i !== t)
      } else o === null && (i.shared.lanes = 0);
      cr |= s, e.lanes = s, e.memoizedState = E
    }
  }

  function La(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (r.callback = null, r = n, typeof i != "function") throw Error(p(191, i));
          i.call(r)
        }
      }
  }
  var vl = {},
    cn = On(vl),
    jl = On(vl),
    Sl = On(vl);

  function ur(e) {
    if (e === vl) throw Error(p(174));
    return e
  }

  function Do(e, t) {
    switch (Ne(Sl, t), Ne(jl, e), Ne(cn, vl), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ot(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ot(t, e)
    }
    Ve(cn), Ne(cn, t)
  }

  function Mr() {
    Ve(cn), Ve(jl), Ve(Sl)
  }

  function Ma(e) {
    ur(Sl.current);
    var t = ur(cn.current),
      n = ot(t, e.type);
    t !== n && (Ne(jl, e), Ne(cn, n))
  }

  function bo(e) {
    jl.current === e && (Ve(cn), Ve(jl))
  }
  var Ke = On(0);

  function fi(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
    return null
  }
  var No = [];

  function Io() {
    for (var e = 0; e < No.length; e++) No[e]._workInProgressVersionPrimary = null;
    No.length = 0
  }
  var pi = qe.ReactCurrentDispatcher,
    Lo = qe.ReactCurrentBatchConfig,
    dr = 0,
    Ye = null,
    rt = null,
    at = null,
    hi = !1,
    kl = !1,
    wl = 0,
    mc = 0;

  function yt() {
    throw Error(p(321))
  }

  function Mo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!qt(e[n], t[n])) return !1;
    return !0
  }

  function Bo(e, t, n, r, i, o) {
    if (dr = o, Ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, pi.current = e === null || e.memoizedState === null ? jc : Sc, e = n(r, i), kl) {
      o = 0;
      do {
        if (kl = !1, wl = 0, 25 <= o) throw Error(p(301));
        o += 1, at = rt = null, t.updateQueue = null, pi.current = kc, e = n(r, i)
      } while (kl)
    }
    if (pi.current = yi, t = rt !== null && rt.next !== null, dr = 0, at = rt = Ye = null, hi = !1, t) throw Error(p(300));
    return e
  }

  function Oo() {
    var e = wl !== 0;
    return wl = 0, e
  }

  function fn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return at === null ? Ye.memoizedState = at = e : at = at.next = e, at
  }

  function Yt() {
    if (rt === null) {
      var e = Ye.alternate;
      e = e !== null ? e.memoizedState : null
    } else e = rt.next;
    var t = at === null ? Ye.memoizedState : at.next;
    if (t !== null) at = t, rt = e;
    else {
      if (e === null) throw Error(p(310));
      rt = e, e = {
        memoizedState: rt.memoizedState,
        baseState: rt.baseState,
        baseQueue: rt.baseQueue,
        queue: rt.queue,
        next: null
      }, at === null ? Ye.memoizedState = at = e : at = at.next = e
    }
    return at
  }

  function Cl(e, t) {
    return typeof t == "function" ? t(e) : t
  }

  function Fo(e) {
    var t = Yt(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = rt,
      i = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (i !== null) {
        var s = i.next;
        i.next = o.next, o.next = s
      }
      r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
      o = i.next, r = r.baseState;
      var u = s = null,
        d = null,
        x = o;
      do {
        var C = x.lane;
        if ((dr & C) === C) d !== null && (d = d.next = {
          lane: 0,
          action: x.action,
          hasEagerState: x.hasEagerState,
          eagerState: x.eagerState,
          next: null
        }), r = x.hasEagerState ? x.eagerState : e(r, x.action);
        else {
          var E = {
            lane: C,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          };
          d === null ? (u = d = E, s = r) : d = d.next = E, Ye.lanes |= C, cr |= C
        }
        x = x.next
      } while (x !== null && x !== o);
      d === null ? s = r : d.next = u, qt(r, t.memoizedState) || (Wt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = d, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do o = i.lane, Ye.lanes |= o, cr |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
  }

  function Uo(e) {
    var t = Yt(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do o = e(o, s.action), s = s.next; while (s !== i);
      qt(o, t.memoizedState) || (Wt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
  }

  function Ba() {}

  function Oa(e, t) {
    var n = Ye,
      r = Yt(),
      i = t(),
      o = !qt(r.memoizedState, i);
    if (o && (r.memoizedState = i, Wt = !0), r = r.queue, Ho(Ha.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || at !== null && at.memoizedState.tag & 1) {
      if (n.flags |= 2048, zl(9, Ua.bind(null, n, r, i, t), void 0, null), ut === null) throw Error(p(349));
      (dr & 30) !== 0 || Fa(n, t, i)
    }
    return i
  }

  function Fa(e, t, n) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: n
    }, t = Ye.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, Ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
  }

  function Ua(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Va(t) && Qa(e)
  }

  function Ha(e, t, n) {
    return n(function() {
      Va(t) && Qa(e)
    })
  }

  function Va(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !qt(e, n)
    } catch {
      return !0
    }
  }

  function Qa(e) {
    var t = kn(e, 1);
    t !== null && ln(t, e, 1, -1)
  }

  function Ka(e) {
    var t = fn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cl,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = vc.bind(null, Ye, e), [t.memoizedState, e]
  }

  function zl(e, t, n, r) {
    return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
    }, t = Ye.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, Ye.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
  }

  function Ya() {
    return Yt().memoizedState
  }

  function gi(e, t, n, r) {
    var i = fn();
    Ye.flags |= e, i.memoizedState = zl(1 | t, n, void 0, r === void 0 ? null : r)
  }

  function mi(e, t, n, r) {
    var i = Yt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (rt !== null) {
      var s = rt.memoizedState;
      if (o = s.destroy, r !== null && Mo(r, s.deps)) {
        i.memoizedState = zl(t, n, o, r);
        return
      }
    }
    Ye.flags |= e, i.memoizedState = zl(1 | t, n, o, r)
  }

  function Xa(e, t) {
    return gi(8390656, 8, e, t)
  }

  function Ho(e, t) {
    return mi(2048, 8, e, t)
  }

  function Ga(e, t) {
    return mi(4, 2, e, t)
  }

  function Za(e, t) {
    return mi(4, 4, e, t)
  }

  function Ja(e, t) {
    if (typeof t == "function") return e = e(), t(e),
      function() {
        t(null)
      };
    if (t != null) return e = e(), t.current = e,
      function() {
        t.current = null
      }
  }

  function qa(e, t, n) {
    return n = n != null ? n.concat([e]) : null, mi(4, 4, Ja.bind(null, t, e), n)
  }

  function Vo() {}

  function eu(e, t) {
    var n = Yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
  }

  function tu(e, t) {
    var n = Yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
  }

  function nu(e, t, n) {
    return (dr & 21) === 0 ? (e.baseState && (e.baseState = !1, Wt = !0), e.memoizedState = n) : (qt(n, t) || (n = Ps(), Ye.lanes |= n, cr |= n, e.baseState = !0), t)
  }

  function yc(e, t) {
    var n = Te;
    Te = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Lo.transition;
    Lo.transition = {};
    try {
      e(!1), t()
    } finally {
      Te = n, Lo.transition = r
    }
  }

  function ru() {
    return Yt().memoizedState
  }

  function xc(e, t, n) {
    var r = Xn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, lu(e)) iu(t, n);
    else if (n = ba(e, t, n, r), n !== null) {
      var i = Et();
      ln(n, e, r, i), ou(n, t, r)
    }
  }

  function vc(e, t, n) {
    var r = Xn(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
    if (lu(e)) iu(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var s = t.lastRenderedState,
          u = o(s, n);
        if (i.hasEagerState = !0, i.eagerState = u, qt(u, s)) {
          var d = t.interleaved;
          d === null ? (i.next = i, Po(t)) : (i.next = d.next, d.next = i), t.interleaved = i;
          return
        }
      } catch {} finally {}
      n = ba(e, t, i, r), n !== null && (i = Et(), ln(n, e, r, i), ou(n, t, r))
    }
  }

  function lu(e) {
    var t = e.alternate;
    return e === Ye || t !== null && t === Ye
  }

  function iu(e, t) {
    kl = hi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
  }

  function ou(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Qi(e, n)
    }
  }
  var yi = {
      readContext: Kt,
      useCallback: yt,
      useContext: yt,
      useEffect: yt,
      useImperativeHandle: yt,
      useInsertionEffect: yt,
      useLayoutEffect: yt,
      useMemo: yt,
      useReducer: yt,
      useRef: yt,
      useState: yt,
      useDebugValue: yt,
      useDeferredValue: yt,
      useTransition: yt,
      useMutableSource: yt,
      useSyncExternalStore: yt,
      useId: yt,
      unstable_isNewReconciler: !1
    },
    jc = {
      readContext: Kt,
      useCallback: function(e, t) {
        return fn().memoizedState = [e, t === void 0 ? null : t], e
      },
      useContext: Kt,
      useEffect: Xa,
      useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null, gi(4194308, 4, Ja.bind(null, t, e), n)
      },
      useLayoutEffect: function(e, t) {
        return gi(4194308, 4, e, t)
      },
      useInsertionEffect: function(e, t) {
        return gi(4, 2, e, t)
      },
      useMemo: function(e, t) {
        var n = fn();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
      },
      useReducer: function(e, t, n) {
        var r = fn();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }, r.queue = e, e = e.dispatch = xc.bind(null, Ye, e), [r.memoizedState, e]
      },
      useRef: function(e) {
        var t = fn();
        return e = {
          current: e
        }, t.memoizedState = e
      },
      useState: Ka,
      useDebugValue: Vo,
      useDeferredValue: function(e) {
        return fn().memoizedState = e
      },
      useTransition: function() {
        var e = Ka(!1),
          t = e[0];
        return e = yc.bind(null, e[1]), fn().memoizedState = e, [t, e]
      },
      useMutableSource: function() {},
      useSyncExternalStore: function(e, t, n) {
        var r = Ye,
          i = fn();
        if (Qe) {
          if (n === void 0) throw Error(p(407));
          n = n()
        } else {
          if (n = t(), ut === null) throw Error(p(349));
          (dr & 30) !== 0 || Fa(r, t, n)
        }
        i.memoizedState = n;
        var o = {
          value: n,
          getSnapshot: t
        };
        return i.queue = o, Xa(Ha.bind(null, r, o, e), [e]), r.flags |= 2048, zl(9, Ua.bind(null, r, o, n, t), void 0, null), n
      },
      useId: function() {
        var e = fn(),
          t = ut.identifierPrefix;
        if (Qe) {
          var n = Sn,
            r = jn;
          n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wl++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = mc++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
      },
      unstable_isNewReconciler: !1
    },
    Sc = {
      readContext: Kt,
      useCallback: eu,
      useContext: Kt,
      useEffect: Ho,
      useImperativeHandle: qa,
      useInsertionEffect: Ga,
      useLayoutEffect: Za,
      useMemo: tu,
      useReducer: Fo,
      useRef: Ya,
      useState: function() {
        return Fo(Cl)
      },
      useDebugValue: Vo,
      useDeferredValue: function(e) {
        var t = Yt();
        return nu(t, rt.memoizedState, e)
      },
      useTransition: function() {
        var e = Fo(Cl)[0],
          t = Yt().memoizedState;
        return [e, t]
      },
      useMutableSource: Ba,
      useSyncExternalStore: Oa,
      useId: ru,
      unstable_isNewReconciler: !1
    },
    kc = {
      readContext: Kt,
      useCallback: eu,
      useContext: Kt,
      useEffect: Ho,
      useImperativeHandle: qa,
      useInsertionEffect: Ga,
      useLayoutEffect: Za,
      useMemo: tu,
      useReducer: Uo,
      useRef: Ya,
      useState: function() {
        return Uo(Cl)
      },
      useDebugValue: Vo,
      useDeferredValue: function(e) {
        var t = Yt();
        return rt === null ? t.memoizedState = e : nu(t, rt.memoizedState, e)
      },
      useTransition: function() {
        var e = Uo(Cl)[0],
          t = Yt().memoizedState;
        return [e, t]
      },
      useMutableSource: Ba,
      useSyncExternalStore: Oa,
      useId: ru,
      unstable_isNewReconciler: !1
    };

  function tn(e, t) {
    if (e && e.defaultProps) {
      t = b({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t
    }
    return t
  }

  function Qo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
  }
  var xi = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? se(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = Et(),
        i = Xn(e),
        o = wn(r, i);
      o.payload = t, n != null && (o.callback = n), t = Vn(e, o, i), t !== null && (ln(t, e, i, r), di(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = Et(),
        i = Xn(e),
        o = wn(r, i);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Vn(e, o, i), t !== null && (ln(t, e, i, r), di(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Et(),
        r = Xn(e),
        i = wn(n, r);
      i.tag = 2, t != null && (i.callback = t), t = Vn(e, i, r), t !== null && (ln(t, e, r, n), di(t, e, r))
    }
  };

  function su(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !cl(n, r) || !cl(i, o) : !0
  }

  function au(e, t, n) {
    var r = !1,
      i = Fn,
      o = t.contextType;
    return typeof o == "object" && o !== null ? o = Kt(o) : (i = Tt(t) ? ir : mt.current, r = t.contextTypes, o = (r = r != null) ? Pr(e, i) : Fn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = xi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
  }

  function uu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && xi.enqueueReplaceState(t, t.state, null)
  }

  function Ko(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Ao(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Kt(o) : (o = Tt(t) ? ir : mt.current, i.context = Pr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Qo(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && xi.enqueueReplaceState(i, i.state, null), ci(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
  }

  function Br(e, t) {
    try {
      var n = "",
        r = t;
      do n += ye(r), r = r.return; while (r);
      var i = n
    } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
      value: e,
      source: t,
      stack: i,
      digest: null
    }
  }

  function Yo(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    }
  }

  function Xo(e, t) {
    try {
      console.error(t.value)
    } catch (n) {
      setTimeout(function() {
        throw n
      })
    }
  }
  var wc = typeof WeakMap == "function" ? WeakMap : Map;

  function du(e, t, n) {
    n = wn(-1, n), n.tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function() {
      zi || (zi = !0, ds = r), Xo(e, t)
    }, n
  }

  function cu(e, t, n) {
    n = wn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i)
      }, n.callback = function() {
        Xo(e, t)
      }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Xo(e, t), typeof r != "function" && (Kn === null ? Kn = new Set([this]) : Kn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: s !== null ? s : ""
      })
    }), n
  }

  function fu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new wc;
      var i = new Set;
      r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = Ic.bind(null, e, t, n), t.then(e, e))
  }

  function pu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return
    } while (e !== null);
    return null
  }

  function hu(e, t, n, r, i) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = wn(-1, 1), t.tag = 2, Vn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e)
  }
  var Cc = qe.ReactCurrentOwner,
    Wt = !1;

  function zt(e, t, n, r) {
    t.child = e === null ? Da(t, null, n, r) : Nr(t, e.child, n, r)
  }

  function gu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Lr(t, i), r = Bo(e, t, n, r, o, i), n = Oo(), e !== null && !Wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Cn(e, t, i)) : (Qe && n && wo(t), t.flags |= 1, zt(e, t, r, i), t.child)
  }

  function mu(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !ys(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, yu(e, t, o, r, i)) : (e = Wi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, (e.lanes & i) === 0) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : cl, n(s, r) && e.ref === t.ref) return Cn(e, t, i)
    }
    return t.flags |= 1, e = Zn(o, r), e.ref = t.ref, e.return = t, t.child = e
  }

  function yu(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (cl(o, r) && e.ref === t.ref)
        if (Wt = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)(e.flags & 131072) !== 0 && (Wt = !0);
        else return t.lanes = e.lanes, Cn(e, t, i)
    }
    return Go(e, t, n, r, i)
  }

  function xu(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, Ne(Fr, Ut), Ut |= n;
      else {
        if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }, t.updateQueue = null, Ne(Fr, Ut), Ut |= e, null;
        t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, r = o !== null ? o.baseLanes : n, Ne(Fr, Ut), Ut |= r
      }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ne(Fr, Ut), Ut |= r;
    return zt(e, t, i, n), t.child
  }

  function vu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
  }

  function Go(e, t, n, r, i) {
    var o = Tt(n) ? ir : mt.current;
    return o = Pr(t, o), Lr(t, i), n = Bo(e, t, n, r, o, i), r = Oo(), e !== null && !Wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Cn(e, t, i)) : (Qe && r && wo(t), t.flags |= 1, zt(e, t, n, i), t.child)
  }

  function ju(e, t, n, r, i) {
    if (Tt(n)) {
      var o = !0;
      ni(t)
    } else o = !1;
    if (Lr(t, i), t.stateNode === null) ji(e, t), au(t, n, r), Ko(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode,
        u = t.memoizedProps;
      s.props = u;
      var d = s.context,
        x = n.contextType;
      typeof x == "object" && x !== null ? x = Kt(x) : (x = Tt(n) ? ir : mt.current, x = Pr(t, x));
      var C = n.getDerivedStateFromProps,
        E = typeof C == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      E || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== r || d !== x) && uu(t, s, r, x), Hn = !1;
      var w = t.memoizedState;
      s.state = w, ci(t, r, s, i), d = t.memoizedState, u !== r || w !== d || Rt.current || Hn ? (typeof C == "function" && (Qo(t, n, C, r), d = t.memoizedState), (u = Hn || su(t, n, u, r, w, d, x)) ? (E || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = d), s.props = r, s.state = d, s.context = x, r = u) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
      s = t.stateNode, Na(e, t), u = t.memoizedProps, x = t.type === t.elementType ? u : tn(t.type, u), s.props = x, E = t.pendingProps, w = s.context, d = n.contextType, typeof d == "object" && d !== null ? d = Kt(d) : (d = Tt(n) ? ir : mt.current, d = Pr(t, d));
      var N = n.getDerivedStateFromProps;
      (C = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== E || w !== d) && uu(t, s, r, d), Hn = !1, w = t.memoizedState, s.state = w, ci(t, r, s, i);
      var F = t.memoizedState;
      u !== E || w !== F || Rt.current || Hn ? (typeof N == "function" && (Qo(t, n, N, r), F = t.memoizedState), (x = Hn || su(t, n, x, r, w, F, d) || !1) ? (C || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, F, d), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, F, d)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = F), s.props = r, s.state = F, s.context = d, r = x) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Zo(e, t, n, r, o, i)
  }

  function Zo(e, t, n, r, i, o) {
    vu(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && za(t, n, !1), Cn(e, t, o);
    r = t.stateNode, Cc.current = t;
    var u = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Nr(t, e.child, null, o), t.child = Nr(t, null, u, o)) : zt(e, t, u, o), t.memoizedState = r.state, i && za(t, n, !0), t.child
  }

  function Su(e) {
    var t = e.stateNode;
    t.pendingContext ? wa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wa(e, t.context, !1), Do(e, t.containerInfo)
  }

  function ku(e, t, n, r, i) {
    return br(), _o(i), t.flags |= 256, zt(e, t, n, r), t.child
  }
  var Jo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };

  function qo(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    }
  }

  function wu(e, t, n) {
    var r = t.pendingProps,
      i = Ke.current,
      o = !1,
      s = (t.flags & 128) !== 0,
      u;
    if ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ne(Ke, i & 1), e === null) return Eo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
      mode: "hidden",
      children: s
    }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Pi(s, r, 0, null), e = gr(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = qo(n), t.memoizedState = Jo, e) : es(t, s));
    if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return zc(e, t, s, r, u, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, u = i.sibling;
      var d = {
        mode: "hidden",
        children: r.children
      };
      return (s & 1) === 0 && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = d, t.deletions = null) : (r = Zn(i, d), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = Zn(u, o) : (o = gr(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? qo(n) : {
        baseLanes: s.baseLanes | n,
        cachePool: null,
        transitions: s.transitions
      }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Jo, r
    }
    return o = e.child, e = o.sibling, r = Zn(o, {
      mode: "visible",
      children: r.children
    }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
  }

  function es(e, t) {
    return t = Pi({
      mode: "visible",
      children: t
    }, e.mode, 0, null), t.return = e, e.child = t
  }

  function vi(e, t, n, r) {
    return r !== null && _o(r), Nr(t, e.child, null, n), e = es(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
  }

  function zc(e, t, n, r, i, o, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Yo(Error(p(422))), vi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Pi({
      mode: "visible",
      children: r.children
    }, i, 0, null), o = gr(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Nr(t, e.child, null, s), t.child.memoizedState = qo(s), t.memoizedState = Jo, o);
    if ((t.mode & 1) === 0) return vi(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var u = r.dgst;
      return r = u, o = Error(p(419)), r = Yo(o, r, void 0), vi(e, t, s, r)
    }
    if (u = (s & e.childLanes) !== 0, Wt || u) {
      if (r = ut, r !== null) {
        switch (s & -s) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0
        }
        i = (i & (r.suspendedLanes | s)) !== 0 ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, kn(e, i), ln(r, e, i, -1))
      }
      return ms(), r = Yo(Error(p(421))), vi(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Lc.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ft = Bn(i.nextSibling), Ot = t, Qe = !0, en = null, e !== null && (Vt[Qt++] = jn, Vt[Qt++] = Sn, Vt[Qt++] = or, jn = e.id, Sn = e.overflow, or = t), t = es(t, r.children), t.flags |= 4096, t)
  }

  function Cu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Wo(e.return, t, n)
  }

  function ts(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
  }

  function zu(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      o = r.tail;
    if (zt(e, t, r.children, n), r = Ke.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && Cu(e, n, t);
        else if (e.tag === 19) Cu(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
      }
      r &= 1
    }
    if (Ne(Ke, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && fi(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ts(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null;) {
          if (e = i.alternate, e !== null && fi(e) === null) {
            t.child = i;
            break
          }
          e = i.sibling, i.sibling = n, n = i, i = e
        }
        ts(t, !0, n, null, o);
        break;
      case "together":
        ts(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null
    }
    return t.child
  }

  function ji(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
  }

  function Cn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), cr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (e = t.child, n = Zn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Zn(e, e.pendingProps), n.return = t;
      n.sibling = null
    }
    return t.child
  }

  function Ec(e, t, n) {
    switch (t.tag) {
      case 3:
        Su(t), br();
        break;
      case 5:
        Ma(t);
        break;
      case 1:
        Tt(t.type) && ni(t);
        break;
      case 4:
        Do(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        Ne(ai, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Ne(Ke, Ke.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? wu(e, t, n) : (Ne(Ke, Ke.current & 1), e = Cn(e, t, n), e !== null ? e.sibling : null);
        Ne(Ke, Ke.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return zu(e, t, n);
          t.flags |= 128
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ne(Ke, Ke.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, xu(e, t, n)
    }
    return Cn(e, t, n)
  }
  var Eu, ns, _u, $u;
  Eu = function(e, t) {
    for (var n = t.child; n !== null;) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue
      }
      if (n === t) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === t) return;
        n = n.return
      }
      n.sibling.return = n.return, n = n.sibling
    }
  }, ns = function() {}, _u = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, ur(cn.current);
      var o = null;
      switch (n) {
        case "input":
          i = Kr(e, i), r = Kr(e, r), o = [];
          break;
        case "select":
          i = b({}, i, {
            value: void 0
          }), r = b({}, r, {
            value: void 0
          }), o = [];
          break;
        case "textarea":
          i = O(e, i), r = O(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ql)
      }
      xr(n, r);
      var s;
      n = null;
      for (x in i)
        if (!r.hasOwnProperty(x) && i.hasOwnProperty(x) && i[x] != null)
          if (x === "style") {
            var u = i[x];
            for (s in u) u.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
          } else x !== "dangerouslySetInnerHTML" && x !== "children" && x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && x !== "autoFocus" && (T.hasOwnProperty(x) ? o || (o = []) : (o = o || []).push(x, null));
      for (x in r) {
        var d = r[x];
        if (u = i != null ? i[x] : void 0, r.hasOwnProperty(x) && d !== u && (d != null || u != null))
          if (x === "style")
            if (u) {
              for (s in u) !u.hasOwnProperty(s) || d && d.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
              for (s in d) d.hasOwnProperty(s) && u[s] !== d[s] && (n || (n = {}), n[s] = d[s])
            } else n || (o || (o = []), o.push(x, n)), n = d;
        else x === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, u = u ? u.__html : void 0, d != null && u !== d && (o = o || []).push(x, d)) : x === "children" ? typeof d != "string" && typeof d != "number" || (o = o || []).push(x, "" + d) : x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && (T.hasOwnProperty(x) ? (d != null && x === "onScroll" && He("scroll", e), o || u === d || (o = [])) : (o = o || []).push(x, d))
      }
      n && (o = o || []).push("style", n);
      var x = o;
      (t.updateQueue = x) && (t.flags |= 4)
    }
  }, $u = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
  };

  function El(e, t) {
    if (!Qe) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
  }

  function xt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
  }

  function _c(e, t, n) {
    var r = t.pendingProps;
    switch (Co(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xt(t), null;
      case 1:
        return Tt(t.type) && ti(), xt(t), null;
      case 3:
        return r = t.stateNode, Mr(), Ve(Rt), Ve(mt), Io(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (oi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, en !== null && (ps(en), en = null))), ns(e, t), xt(t), null;
      case 5:
        bo(t);
        var i = ur(Sl.current);
        if (n = t.type, e !== null && t.stateNode != null) _u(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return xt(t), null
          }
          if (e = ur(cn.current), oi(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[dn] = t, r[ml] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                He("cancel", r), He("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                He("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < pl.length; i++) He(pl[i], r);
                break;
              case "source":
                He("error", r);
                break;
              case "img":
              case "image":
              case "link":
                He("error", r), He("load", r);
                break;
              case "details":
                He("toggle", r);
                break;
              case "input":
                bl(r, o), He("invalid", r);
                break;
              case "select":
                r._wrapperState = {
                  wasMultiple: !!o.multiple
                }, He("invalid", r);
                break;
              case "textarea":
                _e(r, o), He("invalid", r)
            }
            xr(n, o), i = null;
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var u = o[s];
                s === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Jl(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Jl(r.textContent, u, e), i = ["children", "" + u]) : T.hasOwnProperty(s) && u != null && s === "onScroll" && He("scroll", r)
              } switch (n) {
              case "input":
                Vr(r), Yr(r, o, !0);
                break;
              case "textarea":
                Vr(r), un(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ql)
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = tr(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
              is: r.is
            }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[dn] = t, e[ml] = r, Eu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Xr(n, r), n) {
                case "dialog":
                  He("cancel", e), He("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  He("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < pl.length; i++) He(pl[i], e);
                  i = r;
                  break;
                case "source":
                  He("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  He("error", e), He("load", e), i = r;
                  break;
                case "details":
                  He("toggle", e), i = r;
                  break;
                case "input":
                  bl(e, r), i = Kr(e, r), He("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = {
                    wasMultiple: !!r.multiple
                  }, i = b({}, r, {
                    value: void 0
                  }), He("invalid", e);
                  break;
                case "textarea":
                  _e(e, r), i = O(e, r), He("invalid", e);
                  break;
                default:
                  i = r
              }
              xr(n, i),
              u = i;
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var d = u[o];
                  o === "style" ? Pn(e, d) : o === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && yn(e, d)) : o === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && Mt(e, d) : typeof d == "number" && Mt(e, "" + d) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (T.hasOwnProperty(o) ? d != null && o === "onScroll" && He("scroll", e) : d != null && jt(e, o, d, s))
                } switch (n) {
                case "input":
                  Vr(e), Yr(e, r, !1);
                  break;
                case "textarea":
                  Vr(e), un(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Ee(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? an(e, !!r.multiple, o, !1) : r.defaultValue != null && an(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = ql)
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1
              }
            }
            r && (t.flags |= 4)
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
        }
        return xt(t), null;
      case 6:
        if (e && t.stateNode != null) $u(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (n = ur(Sl.current), ur(cn.current), oi(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[dn] = t, (o = r.nodeValue !== n) && (e = Ot, e !== null)) switch (e.tag) {
              case 3:
                Jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Jl(r.nodeValue, n, (e.mode & 1) !== 0)
            }
            o && (t.flags |= 4)
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[dn] = t, t.stateNode = r
        }
        return xt(t), null;
      case 13:
        if (Ve(Ke), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Qe && Ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Wa(), br(), t.flags |= 98560, o = !1;
          else if (o = oi(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(p(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(p(317));
              o[dn] = t
            } else br(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            xt(t), o = !1
          } else en !== null && (ps(en), en = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ke.current & 1) !== 0 ? lt === 0 && (lt = 3) : ms())), t.updateQueue !== null && (t.flags |= 4), xt(t), null);
      case 4:
        return Mr(), ns(e, t), e === null && hl(t.stateNode.containerInfo), xt(t), null;
      case 10:
        return To(t.type._context), xt(t), null;
      case 17:
        return Tt(t.type) && ti(), xt(t), null;
      case 19:
        if (Ve(Ke), o = t.memoizedState, o === null) return xt(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
          if (r) El(o, !1);
          else {
            if (lt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null;) {
                if (s = fi(e), s !== null) {
                  for (t.flags |= 128, El(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                    lanes: e.lanes,
                    firstContext: e.firstContext
                  }), n = n.sibling;
                  return Ne(Ke, Ke.current & 1 | 2), t.child
                }
                e = e.sibling
              }
            o.tail !== null && G() > Ur && (t.flags |= 128, r = !0, El(o, !1), t.lanes = 4194304)
          }
        else {
          if (!r)
            if (e = fi(s), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), El(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Qe) return xt(t), null
            } else 2 * G() - o.renderingStartTime > Ur && n !== 1073741824 && (t.flags |= 128, r = !0, El(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = G(), t.sibling = null, n = Ke.current, Ne(Ke, r ? n & 1 | 2 : n & 1), t) : (xt(t), null);
      case 22:
      case 23:
        return gs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Ut & 1073741824) !== 0 && (xt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xt(t), null;
      case 24:
        return null;
      case 25:
        return null
    }
    throw Error(p(156, t.tag))
  }

  function $c(e, t) {
    switch (Co(t), t.tag) {
      case 1:
        return Tt(t.type) && ti(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Mr(), Ve(Rt), Ve(mt), Io(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return bo(t), null;
      case 13:
        if (Ve(Ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(p(340));
          br()
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ve(Ke), null;
      case 4:
        return Mr(), null;
      case 10:
        return To(t.type._context), null;
      case 22:
      case 23:
        return gs(), null;
      case 24:
        return null;
      default:
        return null
    }
  }
  var Si = !1,
    vt = !1,
    Rc = typeof WeakSet == "function" ? WeakSet : Set,
    M = null;

  function Or(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function") try {
        n(null)
      } catch (r) {
        Xe(e, t, r)
      } else n.current = null
  }

  function rs(e, t, n) {
    try {
      n()
    } catch (r) {
      Xe(e, t, r)
    }
  }
  var Ru = !1;

  function Tc(e, t) {
    if (go = Ol, e = sa(), oo(e)) {
      if ("selectionStart" in e) var n = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null;
            break e
          }
          var s = 0,
            u = -1,
            d = -1,
            x = 0,
            C = 0,
            E = e,
            w = null;
          t: for (;;) {
            for (var N; E !== n || i !== 0 && E.nodeType !== 3 || (u = s + i), E !== o || r !== 0 && E.nodeType !== 3 || (d = s + r), E.nodeType === 3 && (s += E.nodeValue.length), (N = E.firstChild) !== null;) w = E, E = N;
            for (;;) {
              if (E === e) break t;
              if (w === n && ++x === i && (u = s), w === o && ++C === r && (d = s), (N = E.nextSibling) !== null) break;
              E = w, w = E.parentNode
            }
            E = N
          }
          n = u === -1 || d === -1 ? null : {
            start: u,
            end: d
          }
        } else n = null
      }
      n = n || {
        start: 0,
        end: 0
      }
    } else n = null;
    for (mo = {
        focusedElem: e,
        selectionRange: n
      }, Ol = !1, M = t; M !== null;)
      if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
      else
        for (; M !== null;) {
          t = M;
          try {
            var F = t.alternate;
            if ((t.flags & 1024) !== 0) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (F !== null) {
                  var V = F.memoizedProps,
                    Je = F.memoizedState,
                    g = t.stateNode,
                    f = g.getSnapshotBeforeUpdate(t.elementType === t.type ? V : tn(t.type, V), Je);
                  g.__reactInternalSnapshotBeforeUpdate = f
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163))
            }
          } catch (R) {
            Xe(t, t.return, R)
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, M = e;
            break
          }
          M = t.return
        }
    return F = Ru, Ru = !1, F
  }

  function _l(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          i.destroy = void 0, o !== void 0 && rs(t, n, o)
        }
        i = i.next
      } while (i !== r)
    }
  }

  function ki(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r()
        }
        n = n.next
      } while (n !== t)
    }
  }

  function ls(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n
      }
      typeof t == "function" ? t(e) : t.current = e
    }
  }

  function Tu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Tu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dn], delete t[ml], delete t[jo], delete t[fc], delete t[pc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
  }

  function Wu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
  }

  function Pu(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Wu(e.return)) return null;
        e = e.return
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }

  function is(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ql));
    else if (r !== 4 && (e = e.child, e !== null))
      for (is(e, t, n), e = e.sibling; e !== null;) is(e, t, n), e = e.sibling
  }

  function os(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (os(e, t, n), e = e.sibling; e !== null;) os(e, t, n), e = e.sibling
  }
  var ht = null,
    nn = !1;

  function Qn(e, t, n) {
    for (n = n.child; n !== null;) Au(e, t, n), n = n.sibling
  }

  function Au(e, t, n) {
    if (Re && typeof Re.onCommitFiberUnmount == "function") try {
      Re.onCommitFiberUnmount(Ue, n)
    } catch {}
    switch (n.tag) {
      case 5:
        vt || Or(n, t);
      case 6:
        var r = ht,
          i = nn;
        ht = null, Qn(e, t, n), ht = r, nn = i, ht !== null && (nn ? (e = ht, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ht.removeChild(n.stateNode));
        break;
      case 18:
        ht !== null && (nn ? (e = ht, n = n.stateNode, e.nodeType === 8 ? vo(e.parentNode, n) : e.nodeType === 1 && vo(e, n), il(e)) : vo(ht, n.stateNode));
        break;
      case 4:
        r = ht, i = nn, ht = n.stateNode.containerInfo, nn = !0, Qn(e, t, n), ht = r, nn = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var o = i,
              s = o.destroy;
            o = o.tag, s !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && rs(n, t, s), i = i.next
          } while (i !== r)
        }
        Qn(e, t, n);
        break;
      case 1:
        if (!vt && (Or(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
        } catch (u) {
          Xe(n, t, u)
        }
        Qn(e, t, n);
        break;
      case 21:
        Qn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (vt = (r = vt) || n.memoizedState !== null, Qn(e, t, n), vt = r) : Qn(e, t, n);
        break;
      default:
        Qn(e, t, n)
    }
  }

  function Du(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Rc), t.forEach(function(r) {
        var i = Mc.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i))
      })
    }
  }

  function rn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var o = e,
            s = t,
            u = s;
          e: for (; u !== null;) {
            switch (u.tag) {
              case 5:
                ht = u.stateNode, nn = !1;
                break e;
              case 3:
                ht = u.stateNode.containerInfo, nn = !0;
                break e;
              case 4:
                ht = u.stateNode.containerInfo, nn = !0;
                break e
            }
            u = u.return
          }
          if (ht === null) throw Error(p(160));
          Au(o, s, i), ht = null, nn = !1;
          var d = i.alternate;
          d !== null && (d.return = null), i.return = null
        } catch (x) {
          Xe(i, t, x)
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null;) bu(t, e), t = t.sibling
  }

  function bu(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (rn(t, e), pn(e), r & 4) {
          try {
            _l(3, e, e.return), ki(3, e)
          } catch (V) {
            Xe(e, e.return, V)
          }
          try {
            _l(5, e, e.return)
          } catch (V) {
            Xe(e, e.return, V)
          }
        }
        break;
      case 1:
        rn(t, e), pn(e), r & 512 && n !== null && Or(n, n.return);
        break;
      case 5:
        if (rn(t, e), pn(e), r & 512 && n !== null && Or(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Mt(i, "")
          } catch (V) {
            Xe(e, e.return, V)
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps,
            s = n !== null ? n.memoizedProps : o,
            u = e.type,
            d = e.updateQueue;
          if (e.updateQueue = null, d !== null) try {
            u === "input" && o.type === "radio" && o.name != null && Rn(i, o), Xr(u, s);
            var x = Xr(u, o);
            for (s = 0; s < d.length; s += 2) {
              var C = d[s],
                E = d[s + 1];
              C === "style" ? Pn(i, E) : C === "dangerouslySetInnerHTML" ? yn(i, E) : C === "children" ? Mt(i, E) : jt(i, C, E, x)
            }
            switch (u) {
              case "input":
                mr(i, o);
                break;
              case "textarea":
                Ht(i, o);
                break;
              case "select":
                var w = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var N = o.value;
                N != null ? an(i, !!o.multiple, N, !1) : w !== !!o.multiple && (o.defaultValue != null ? an(i, !!o.multiple, o.defaultValue, !0) : an(i, !!o.multiple, o.multiple ? [] : "", !1))
            }
            i[ml] = o
          } catch (V) {
            Xe(e, e.return, V)
          }
        }
        break;
      case 6:
        if (rn(t, e), pn(e), r & 4) {
          if (e.stateNode === null) throw Error(p(162));
          i = e.stateNode, o = e.memoizedProps;
          try {
            i.nodeValue = o
          } catch (V) {
            Xe(e, e.return, V)
          }
        }
        break;
      case 3:
        if (rn(t, e), pn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          il(t.containerInfo)
        } catch (V) {
          Xe(e, e.return, V)
        }
        break;
      case 4:
        rn(t, e), pn(e);
        break;
      case 13:
        rn(t, e), pn(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (us = G())), r & 4 && Du(e);
        break;
      case 22:
        if (C = n !== null && n.memoizedState !== null, e.mode & 1 ? (vt = (x = vt) || C, rn(t, e), vt = x) : rn(t, e), pn(e), r & 8192) {
          if (x = e.memoizedState !== null, (e.stateNode.isHidden = x) && !C && (e.mode & 1) !== 0)
            for (M = e, C = e.child; C !== null;) {
              for (E = M = C; M !== null;) {
                switch (w = M, N = w.child, w.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _l(4, w, w.return);
                    break;
                  case 1:
                    Or(w, w.return);
                    var F = w.stateNode;
                    if (typeof F.componentWillUnmount == "function") {
                      r = w, n = w.return;
                      try {
                        t = r, F.props = t.memoizedProps, F.state = t.memoizedState, F.componentWillUnmount()
                      } catch (V) {
                        Xe(r, n, V)
                      }
                    }
                    break;
                  case 5:
                    Or(w, w.return);
                    break;
                  case 22:
                    if (w.memoizedState !== null) {
                      Lu(E);
                      continue
                    }
                }
                N !== null ? (N.return = w, M = N) : Lu(E)
              }
              C = C.sibling
            }
          e: for (C = null, E = e;;) {
            if (E.tag === 5) {
              if (C === null) {
                C = E;
                try {
                  i = E.stateNode, x ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = E.stateNode, d = E.memoizedProps.style, s = d != null && d.hasOwnProperty("display") ? d.display : null, u.style.display = Wn("display", s))
                } catch (V) {
                  Xe(e, e.return, V)
                }
              }
            } else if (E.tag === 6) {
              if (C === null) try {
                E.stateNode.nodeValue = x ? "" : E.memoizedProps
              } catch (V) {
                Xe(e, e.return, V)
              }
            } else if ((E.tag !== 22 && E.tag !== 23 || E.memoizedState === null || E === e) && E.child !== null) {
              E.child.return = E, E = E.child;
              continue
            }
            if (E === e) break e;
            for (; E.sibling === null;) {
              if (E.return === null || E.return === e) break e;
              C === E && (C = null), E = E.return
            }
            C === E && (C = null), E.sibling.return = E.return, E = E.sibling
          }
        }
        break;
      case 19:
        rn(t, e), pn(e), r & 4 && Du(e);
        break;
      case 21:
        break;
      default:
        rn(t, e), pn(e)
    }
  }

  function pn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (Wu(n)) {
              var r = n;
              break e
            }
            n = n.return
          }
          throw Error(p(160))
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Mt(i, ""), r.flags &= -33);
            var o = Pu(e);
            os(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              u = Pu(e);
            is(e, u, s);
            break;
          default:
            throw Error(p(161))
        }
      }
      catch (d) {
        Xe(e, e.return, d)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }

  function Wc(e, t, n) {
    M = e, Nu(e)
  }

  function Nu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null;) {
      var i = M,
        o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || Si;
        if (!s) {
          var u = i.alternate,
            d = u !== null && u.memoizedState !== null || vt;
          u = Si;
          var x = vt;
          if (Si = s, (vt = d) && !x)
            for (M = i; M !== null;) s = M, d = s.child, s.tag === 22 && s.memoizedState !== null ? Mu(i) : d !== null ? (d.return = s, M = d) : Mu(i);
          for (; o !== null;) M = o, Nu(o), o = o.sibling;
          M = i, Si = u, vt = x
        }
        Iu(e)
      } else(i.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = i, M = o) : Iu(e)
    }
  }

  function Iu(e) {
    for (; M !== null;) {
      var t = M;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              vt || ki(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !vt)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                } var o = t.updateQueue;
              o !== null && La(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode
                }
                La(t, s, n)
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var d = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d.autoFocus && n.focus();
                    break;
                  case "img":
                    d.src && (n.src = d.src)
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var x = t.alternate;
                if (x !== null) {
                  var C = x.memoizedState;
                  if (C !== null) {
                    var E = C.dehydrated;
                    E !== null && il(E)
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163))
          }
          vt || t.flags & 512 && ls(t)
        } catch (w) {
          Xe(t, t.return, w)
        }
      }
      if (t === e) {
        M = null;
        break
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, M = n;
        break
      }
      M = t.return
    }
  }

  function Lu(e) {
    for (; M !== null;) {
      var t = M;
      if (t === e) {
        M = null;
        break
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, M = n;
        break
      }
      M = t.return
    }
  }

  function Mu(e) {
    for (; M !== null;) {
      var t = M;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ki(4, t)
            } catch (d) {
              Xe(t, n, d)
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount()
              } catch (d) {
                Xe(t, i, d)
              }
            }
            var o = t.return;
            try {
              ls(t)
            } catch (d) {
              Xe(t, o, d)
            }
            break;
          case 5:
            var s = t.return;
            try {
              ls(t)
            } catch (d) {
              Xe(t, s, d)
            }
        }
      } catch (d) {
        Xe(t, t.return, d)
      }
      if (t === e) {
        M = null;
        break
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, M = u;
        break
      }
      M = t.return
    }
  }
  var Pc = Math.ceil,
    wi = qe.ReactCurrentDispatcher,
    ss = qe.ReactCurrentOwner,
    Xt = qe.ReactCurrentBatchConfig,
    Ce = 0,
    ut = null,
    tt = null,
    gt = 0,
    Ut = 0,
    Fr = On(0),
    lt = 0,
    $l = null,
    cr = 0,
    Ci = 0,
    as = 0,
    Rl = null,
    Pt = null,
    us = 0,
    Ur = 1 / 0,
    zn = null,
    zi = !1,
    ds = null,
    Kn = null,
    Ei = !1,
    Yn = null,
    _i = 0,
    Tl = 0,
    cs = null,
    $i = -1,
    Ri = 0;

  function Et() {
    return (Ce & 6) !== 0 ? G() : $i !== -1 ? $i : $i = G()
  }

  function Xn(e) {
    return (e.mode & 1) === 0 ? 1 : (Ce & 2) !== 0 && gt !== 0 ? gt & -gt : gc.transition !== null ? (Ri === 0 && (Ri = Ps()), Ri) : (e = Te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Os(e.type)), e)
  }

  function ln(e, t, n, r) {
    if (50 < Tl) throw Tl = 0, cs = null, Error(p(185));
    el(e, n, r), ((Ce & 2) === 0 || e !== ut) && (e === ut && ((Ce & 2) === 0 && (Ci |= n), lt === 4 && Gn(e, gt)), At(e, r), n === 1 && Ce === 0 && (t.mode & 1) === 0 && (Ur = G() + 500, ri && Un()))
  }

  function At(e, t) {
    var n = e.callbackNode;
    gd(e, t);
    var r = Ll(e, e === ut ? gt : 0);
    if (r === 0) n !== null && nr(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && nr(n), t === 1) e.tag === 0 ? hc(Ou.bind(null, e)) : Ea(Ou.bind(null, e)), dc(function() {
        (Ce & 6) === 0 && Un()
      }), n = null;
      else {
        switch (As(r)) {
          case 1:
            n = he;
            break;
          case 4:
            n = $t;
            break;
          case 16:
            n = I;
            break;
          case 536870912:
            n = fe;
            break;
          default:
            n = I
        }
        n = Xu(n, Bu.bind(null, e))
      }
      e.callbackPriority = t, e.callbackNode = n
    }
  }

  function Bu(e, t) {
    if ($i = -1, Ri = 0, (Ce & 6) !== 0) throw Error(p(327));
    var n = e.callbackNode;
    if (Hr() && e.callbackNode !== n) return null;
    var r = Ll(e, e === ut ? gt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Ti(e, r);
    else {
      t = r;
      var i = Ce;
      Ce |= 2;
      var o = Uu();
      (ut !== e || gt !== t) && (zn = null, Ur = G() + 500, pr(e, t));
      do try {
        bc();
        break
      } catch (u) {
        Fu(e, u)
      }
      while (!0);
      Ro(), wi.current = o, Ce = i, tt !== null ? t = 0 : (ut = null, gt = 0, t = lt)
    }
    if (t !== 0) {
      if (t === 2 && (i = Hi(e), i !== 0 && (r = i, t = fs(e, i))), t === 1) throw n = $l, pr(e, 0), Gn(e, r), At(e, G()), n;
      if (t === 6) Gn(e, r);
      else {
        if (i = e.current.alternate, (r & 30) === 0 && !Ac(i) && (t = Ti(e, r), t === 2 && (o = Hi(e), o !== 0 && (r = o, t = fs(e, o))), t === 1)) throw n = $l, pr(e, 0), Gn(e, r), At(e, G()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            hr(e, Pt, zn);
            break;
          case 3:
            if (Gn(e, r), (r & 130023424) === r && (t = us + 500 - G(), 10 < t)) {
              if (Ll(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                Et(), e.pingedLanes |= e.suspendedLanes & i;
                break
              }
              e.timeoutHandle = xo(hr.bind(null, e, Pt, zn), t);
              break
            }
            hr(e, Pt, zn);
            break;
          case 4:
            if (Gn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r;) {
              var s = 31 - Ze(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
            }
            if (r = i, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pc(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = xo(hr.bind(null, e, Pt, zn), r);
              break
            }
            hr(e, Pt, zn);
            break;
          case 5:
            hr(e, Pt, zn);
            break;
          default:
            throw Error(p(329))
        }
      }
    }
    return At(e, G()), e.callbackNode === n ? Bu.bind(null, e) : null
  }

  function fs(e, t) {
    var n = Rl;
    return e.current.memoizedState.isDehydrated && (pr(e, t).flags |= 256), e = Ti(e, t), e !== 2 && (t = Pt, Pt = n, t !== null && ps(t)), e
  }

  function ps(e) {
    Pt === null ? Pt = e : Pt.push.apply(Pt, e)
  }

  function Ac(e) {
    for (var t = e;;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              o = i.getSnapshot;
            i = i.value;
            try {
              if (!qt(o(), i)) return !1
            } catch {
              return !1
            }
          }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
      }
    }
    return !0
  }

  function Gn(e, t) {
    for (t &= ~as, t &= ~Ci, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
      var n = 31 - Ze(t),
        r = 1 << n;
      e[n] = -1, t &= ~r
    }
  }

  function Ou(e) {
    if ((Ce & 6) !== 0) throw Error(p(327));
    Hr();
    var t = Ll(e, 0);
    if ((t & 1) === 0) return At(e, G()), null;
    var n = Ti(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Hi(e);
      r !== 0 && (t = r, n = fs(e, r))
    }
    if (n === 1) throw n = $l, pr(e, 0), Gn(e, t), At(e, G()), n;
    if (n === 6) throw Error(p(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, hr(e, Pt, zn), At(e, G()), null
  }

  function hs(e, t) {
    var n = Ce;
    Ce |= 1;
    try {
      return e(t)
    } finally {
      Ce = n, Ce === 0 && (Ur = G() + 500, ri && Un())
    }
  }

  function fr(e) {
    Yn !== null && Yn.tag === 0 && (Ce & 6) === 0 && Hr();
    var t = Ce;
    Ce |= 1;
    var n = Xt.transition,
      r = Te;
    try {
      if (Xt.transition = null, Te = 1, e) return e()
    } finally {
      Te = r, Xt.transition = n, Ce = t, (Ce & 6) === 0 && Un()
    }
  }

  function gs() {
    Ut = Fr.current, Ve(Fr)
  }

  function pr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, uc(n)), tt !== null)
      for (n = tt.return; n !== null;) {
        var r = n;
        switch (Co(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && ti();
            break;
          case 3:
            Mr(), Ve(Rt), Ve(mt), Io();
            break;
          case 5:
            bo(r);
            break;
          case 4:
            Mr();
            break;
          case 13:
            Ve(Ke);
            break;
          case 19:
            Ve(Ke);
            break;
          case 10:
            To(r.type._context);
            break;
          case 22:
          case 23:
            gs()
        }
        n = n.return
      }
    if (ut = e, tt = e = Zn(e.current, null), gt = Ut = t, lt = 0, $l = null, as = Ci = cr = 0, Pt = Rl = null, ar !== null) {
      for (t = 0; t < ar.length; t++)
        if (n = ar[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var i = r.next,
            o = n.pending;
          if (o !== null) {
            var s = o.next;
            o.next = i, r.next = s
          }
          n.pending = r
        } ar = null
    }
    return e
  }

  function Fu(e, t) {
    do {
      var n = tt;
      try {
        if (Ro(), pi.current = yi, hi) {
          for (var r = Ye.memoizedState; r !== null;) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next
          }
          hi = !1
        }
        if (dr = 0, at = rt = Ye = null, kl = !1, wl = 0, ss.current = null, n === null || n.return === null) {
          lt = 1, $l = t, tt = null;
          break
        }
        e: {
          var o = e,
            s = n.return,
            u = n,
            d = t;
          if (t = gt, u.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
            var x = d,
              C = u,
              E = C.tag;
            if ((C.mode & 1) === 0 && (E === 0 || E === 11 || E === 15)) {
              var w = C.alternate;
              w ? (C.updateQueue = w.updateQueue, C.memoizedState = w.memoizedState, C.lanes = w.lanes) : (C.updateQueue = null, C.memoizedState = null)
            }
            var N = pu(s);
            if (N !== null) {
              N.flags &= -257, hu(N, s, u, o, t), N.mode & 1 && fu(o, x, t), t = N, d = x;
              var F = t.updateQueue;
              if (F === null) {
                var V = new Set;
                V.add(d), t.updateQueue = V
              } else F.add(d);
              break e
            } else {
              if ((t & 1) === 0) {
                fu(o, x, t), ms();
                break e
              }
              d = Error(p(426))
            }
          } else if (Qe && u.mode & 1) {
            var Je = pu(s);
            if (Je !== null) {
              (Je.flags & 65536) === 0 && (Je.flags |= 256), hu(Je, s, u, o, t), _o(Br(d, u));
              break e
            }
          }
          o = d = Br(d, u),
          lt !== 4 && (lt = 2),
          Rl === null ? Rl = [o] : Rl.push(o),
          o = s;do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = du(o, d, t);
                Ia(o, g);
                break e;
              case 1:
                u = d;
                var f = o.type,
                  m = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Kn === null || !Kn.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var R = cu(o, u, t);
                  Ia(o, R);
                  break e
                }
            }
            o = o.return
          } while (o !== null)
        }
        Vu(n)
      } catch (K) {
        t = K, tt === n && n !== null && (tt = n = n.return);
        continue
      }
      break
    } while (!0)
  }

  function Uu() {
    var e = wi.current;
    return wi.current = yi, e === null ? yi : e
  }

  function ms() {
    (lt === 0 || lt === 3 || lt === 2) && (lt = 4), ut === null || (cr & 268435455) === 0 && (Ci & 268435455) === 0 || Gn(ut, gt)
  }

  function Ti(e, t) {
    var n = Ce;
    Ce |= 2;
    var r = Uu();
    (ut !== e || gt !== t) && (zn = null, pr(e, t));
    do try {
      Dc();
      break
    } catch (i) {
      Fu(e, i)
    }
    while (!0);
    if (Ro(), Ce = n, wi.current = r, tt !== null) throw Error(p(261));
    return ut = null, gt = 0, lt
  }

  function Dc() {
    for (; tt !== null;) Hu(tt)
  }

  function bc() {
    for (; tt !== null && !Sr();) Hu(tt)
  }

  function Hu(e) {
    var t = Yu(e.alternate, e, Ut);
    e.memoizedProps = e.pendingProps, t === null ? Vu(e) : tt = t, ss.current = null
  }

  function Vu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = _c(n, t, Ut), n !== null) {
          tt = n;
          return
        }
      } else {
        if (n = $c(n, t), n !== null) {
          n.flags &= 32767, tt = n;
          return
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          lt = 6, tt = null;
          return
        }
      }
      if (t = t.sibling, t !== null) {
        tt = t;
        return
      }
      tt = t = e
    } while (t !== null);
    lt === 0 && (lt = 5)
  }

  function hr(e, t, n) {
    var r = Te,
      i = Xt.transition;
    try {
      Xt.transition = null, Te = 1, Nc(e, t, n, r)
    } finally {
      Xt.transition = i, Te = r
    }
    return null
  }

  function Nc(e, t, n, r) {
    do Hr(); while (Yn !== null);
    if ((Ce & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(p(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (md(e, o), e === ut && (tt = ut = null, gt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ei || (Ei = !0, Xu(I, function() {
        return Hr(), null
      })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = Xt.transition, Xt.transition = null;
      var s = Te;
      Te = 1;
      var u = Ce;
      Ce |= 4, ss.current = null, Tc(e, n), bu(n, e), nc(mo), Ol = !!go, mo = go = null, e.current = n, Wc(n), J(), Ce = u, Te = s, Xt.transition = o
    } else e.current = n;
    if (Ei && (Ei = !1, Yn = e, _i = i), o = e.pendingLanes, o === 0 && (Kn = null), st(n.stateNode), At(e, G()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
        componentStack: i.stack,
        digest: i.digest
      });
    if (zi) throw zi = !1, e = ds, ds = null, e;
    return (_i & 1) !== 0 && e.tag !== 0 && Hr(), o = e.pendingLanes, (o & 1) !== 0 ? e === cs ? Tl++ : (Tl = 0, cs = e) : Tl = 0, Un(), null
  }

  function Hr() {
    if (Yn !== null) {
      var e = As(_i),
        t = Xt.transition,
        n = Te;
      try {
        if (Xt.transition = null, Te = 16 > e ? 16 : e, Yn === null) var r = !1;
        else {
          if (e = Yn, Yn = null, _i = 0, (Ce & 6) !== 0) throw Error(p(331));
          var i = Ce;
          for (Ce |= 4, M = e.current; M !== null;) {
            var o = M,
              s = o.child;
            if ((M.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var d = 0; d < u.length; d++) {
                  var x = u[d];
                  for (M = x; M !== null;) {
                    var C = M;
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _l(8, C, o)
                    }
                    var E = C.child;
                    if (E !== null) E.return = C, M = E;
                    else
                      for (; M !== null;) {
                        C = M;
                        var w = C.sibling,
                          N = C.return;
                        if (Tu(C), C === x) {
                          M = null;
                          break
                        }
                        if (w !== null) {
                          w.return = N, M = w;
                          break
                        }
                        M = N
                      }
                  }
                }
                var F = o.alternate;
                if (F !== null) {
                  var V = F.child;
                  if (V !== null) {
                    F.child = null;
                    do {
                      var Je = V.sibling;
                      V.sibling = null, V = Je
                    } while (V !== null)
                  }
                }
                M = o
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && s !== null) s.return = o, M = s;
            else e: for (; M !== null;) {
              if (o = M, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  _l(9, o, o.return)
              }
              var g = o.sibling;
              if (g !== null) {
                g.return = o.return, M = g;
                break e
              }
              M = o.return
            }
          }
          var f = e.current;
          for (M = f; M !== null;) {
            s = M;
            var m = s.child;
            if ((s.subtreeFlags & 2064) !== 0 && m !== null) m.return = s, M = m;
            else e: for (s = f; M !== null;) {
              if (u = M, (u.flags & 2048) !== 0) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ki(9, u)
                }
              } catch (K) {
                Xe(u, u.return, K)
              }
              if (u === s) {
                M = null;
                break e
              }
              var R = u.sibling;
              if (R !== null) {
                R.return = u.return, M = R;
                break e
              }
              M = u.return
            }
          }
          if (Ce = i, Un(), Re && typeof Re.onPostCommitFiberRoot == "function") try {
            Re.onPostCommitFiberRoot(Ue, e)
          } catch {}
          r = !0
        }
        return r
      } finally {
        Te = n, Xt.transition = t
      }
    }
    return !1
  }

  function Qu(e, t, n) {
    t = Br(n, t), t = du(e, t, 1), e = Vn(e, t, 1), t = Et(), e !== null && (el(e, 1, t), At(e, t))
  }

  function Xe(e, t, n) {
    if (e.tag === 3) Qu(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Qu(t, e, n);
          break
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kn === null || !Kn.has(r))) {
            e = Br(n, e), e = cu(t, e, 1), t = Vn(t, e, 1), e = Et(), t !== null && (el(t, 1, e), At(t, e));
            break
          }
        }
        t = t.return
      }
  }

  function Ic(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Et(), e.pingedLanes |= e.suspendedLanes & n, ut === e && (gt & n) === n && (lt === 4 || lt === 3 && (gt & 130023424) === gt && 500 > G() - us ? pr(e, 0) : as |= n), At(e, t)
  }

  function Ku(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Il, Il <<= 1, (Il & 130023424) === 0 && (Il = 4194304)));
    var n = Et();
    e = kn(e, t), e !== null && (el(e, t, n), At(e, n))
  }

  function Lc(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Ku(e, n)
  }

  function Mc(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(p(314))
    }
    r !== null && r.delete(t), Ku(e, n)
  }
  var Yu;
  Yu = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Rt.current) Wt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Wt = !1, Ec(e, t, n);
        Wt = (e.flags & 131072) !== 0
      }
    else Wt = !1, Qe && (t.flags & 1048576) !== 0 && _a(t, ii, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ji(e, t), e = t.pendingProps;
        var i = Pr(t, mt.current);
        Lr(t, n), i = Bo(null, t, r, e, i, n);
        var o = Oo();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Tt(r) ? (o = !0, ni(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ao(t), i.updater = xi, t.stateNode = i, i._reactInternals = t, Ko(t, r, e, n), t = Zo(null, t, r, !0, o, n)) : (t.tag = 0, Qe && o && wo(t), zt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ji(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Oc(r), e = tn(r, e), i) {
            case 0:
              t = Go(null, t, r, e, n);
              break e;
            case 1:
              t = ju(null, t, r, e, n);
              break e;
            case 11:
              t = gu(null, t, r, e, n);
              break e;
            case 14:
              t = mu(null, t, r, tn(r.type, e), n);
              break e
          }
          throw Error(p(306, r, ""))
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : tn(r, i), Go(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : tn(r, i), ju(e, t, r, i, n);
      case 3:
        e: {
          if (Su(t), e === null) throw Error(p(387));r = t.pendingProps,
          o = t.memoizedState,
          i = o.element,
          Na(e, t),
          ci(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated)
            if (o = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions
              }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
              i = Br(Error(p(423)), t), t = ku(e, t, r, n, i);
              break e
            } else if (r !== i) {
            i = Br(Error(p(424)), t), t = ku(e, t, r, n, i);
            break e
          } else
            for (Ft = Bn(t.stateNode.containerInfo.firstChild), Ot = t, Qe = !0, en = null, n = Da(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (br(), r === i) {
              t = Cn(e, t, n);
              break e
            }
            zt(e, t, r, n)
          }
          t = t.child
        }
        return t;
      case 5:
        return Ma(t), e === null && Eo(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, yo(r, i) ? s = null : o !== null && yo(r, o) && (t.flags |= 32), vu(e, t), zt(e, t, s, n), t.child;
      case 6:
        return e === null && Eo(t), null;
      case 13:
        return wu(e, t, n);
      case 4:
        return Do(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Nr(t, null, r, n) : zt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : tn(r, i), gu(e, t, r, i, n);
      case 7:
        return zt(e, t, t.pendingProps, n), t.child;
      case 8:
        return zt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return zt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, Ne(ai, r._currentValue), r._currentValue = s, o !== null)
            if (qt(o.value, s)) {
              if (o.children === i.children && !Rt.current) {
                t = Cn(e, t, n);
                break e
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null;) {
                var u = o.dependencies;
                if (u !== null) {
                  s = o.child;
                  for (var d = u.firstContext; d !== null;) {
                    if (d.context === r) {
                      if (o.tag === 1) {
                        d = wn(-1, n & -n), d.tag = 2;
                        var x = o.updateQueue;
                        if (x !== null) {
                          x = x.shared;
                          var C = x.pending;
                          C === null ? d.next = d : (d.next = C.next, C.next = d), x.pending = d
                        }
                      }
                      o.lanes |= n, d = o.alternate, d !== null && (d.lanes |= n), Wo(o.return, n, t), u.lanes |= n;
                      break
                    }
                    d = d.next
                  }
                } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (s = o.return, s === null) throw Error(p(341));
                  s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), Wo(s, n, t), s = o.sibling
                } else s = o.child;
                if (s !== null) s.return = o;
                else
                  for (s = o; s !== null;) {
                    if (s === t) {
                      s = null;
                      break
                    }
                    if (o = s.sibling, o !== null) {
                      o.return = s.return, s = o;
                      break
                    }
                    s = s.return
                  }
                o = s
              }
          zt(e, t, i.children, n),
          t = t.child
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, Lr(t, n), i = Kt(i), r = r(i), t.flags |= 1, zt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = tn(r, t.pendingProps), i = tn(r.type, i), mu(e, t, r, i, n);
      case 15:
        return yu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : tn(r, i), ji(e, t), t.tag = 1, Tt(r) ? (e = !0, ni(t)) : e = !1, Lr(t, n), au(t, r, i), Ko(t, r, i, n), Zo(null, t, r, !0, e, n);
      case 19:
        return zu(e, t, n);
      case 22:
        return xu(e, t, n)
    }
    throw Error(p(156, t.tag))
  };

  function Xu(e, t) {
    return Ct(e, t)
  }

  function Bc(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function Gt(e, t, n, r) {
    return new Bc(e, t, n, r)
  }

  function ys(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
  }

  function Oc(e) {
    if (typeof e == "function") return ys(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Lt) return 11;
      if (e === pe) return 14
    }
    return 2
  }

  function Zn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
  }

  function Wi(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") ys(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
      case ct:
        return gr(n.children, i, o, t);
      case It:
        s = 8, i |= 8;
        break;
      case on:
        return e = Gt(12, n, t, i | 2), e.elementType = on, e.lanes = o, e;
      case kt:
        return e = Gt(13, n, t, i), e.elementType = kt, e.lanes = o, e;
      case Ie:
        return e = Gt(19, n, t, i), e.elementType = Ie, e.lanes = o, e;
      case Le:
        return Pi(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case St:
            s = 10;
            break e;
          case sn:
            s = 9;
            break e;
          case Lt:
            s = 11;
            break e;
          case pe:
            s = 14;
            break e;
          case it:
            s = 16, r = null;
            break e
        }
        throw Error(p(130, e == null ? e : typeof e, ""))
    }
    return t = Gt(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
  }

  function gr(e, t, n, r) {
    return e = Gt(7, e, r, t), e.lanes = n, e
  }

  function Pi(e, t, n, r) {
    return e = Gt(22, e, r, t), e.elementType = Le, e.lanes = n, e.stateNode = {
      isHidden: !1
    }, e
  }

  function xs(e, t, n) {
    return e = Gt(6, e, null, t), e.lanes = n, e
  }

  function vs(e, t, n) {
    return t = Gt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t
  }

  function Fc(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vi(0), this.expirationTimes = Vi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vi(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
  }

  function js(e, t, n, r, i, o, s, u, d) {
    return e = new Fc(e, t, n, u, d), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Gt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Ao(o), e
  }

  function Uc(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: et,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    }
  }

  function Gu(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (se(e) !== e || e.tag !== 1) throw Error(p(170));
      var t = e;do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Tt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e
            }
        }
        t = t.return
      } while (t !== null);
      throw Error(p(171))
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Tt(n)) return Ca(e, n, t)
    }
    return t
  }

  function Zu(e, t, n, r, i, o, s, u, d) {
    return e = js(n, r, !0, e, i, o, s, u, d), e.context = Gu(null), n = e.current, r = Et(), i = Xn(n), o = wn(r, i), o.callback = t ?? null, Vn(n, o, i), e.current.lanes = i, el(e, i, r), At(e, r), e
  }

  function Ai(e, t, n, r) {
    var i = t.current,
      o = Et(),
      s = Xn(i);
    return n = Gu(n), t.context === null ? t.context = n : t.pendingContext = n, t = wn(o, s), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vn(i, t, s), e !== null && (ln(e, i, s, o), di(e, i, s)), s
  }

  function Di(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode
    }
  }

  function Ju(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t
    }
  }

  function Ss(e, t) {
    Ju(e, t), (e = e.alternate) && Ju(e, t)
  }

  function Hc() {
    return null
  }
  var qu = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
  };

  function ks(e) {
    this._internalRoot = e
  }
  bi.prototype.render = ks.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(p(409));
    Ai(e, t, null, null)
  }, bi.prototype.unmount = ks.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      fr(function() {
        Ai(null, e, null, null)
      }), t[xn] = null
    }
  };

  function bi(e) {
    this._internalRoot = e
  }
  bi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ns();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++);
      In.splice(n, 0, e), n === 0 && Ms(e)
    }
  };

  function ws(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
  }

  function Ni(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  }

  function ed() {}

  function Vc(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var x = Di(s);
          o.call(x)
        }
      }
      var s = Zu(t, r, e, 0, null, !1, !1, "", ed);
      return e._reactRootContainer = s, e[xn] = s.current, hl(e.nodeType === 8 ? e.parentNode : e), fr(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var x = Di(d);
        u.call(x)
      }
    }
    var d = js(e, 0, !1, null, null, !1, !1, "", ed);
    return e._reactRootContainer = d, e[xn] = d.current, hl(e.nodeType === 8 ? e.parentNode : e), fr(function() {
      Ai(t, d, n, r)
    }), d
  }

  function Ii(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var d = Di(s);
          u.call(d)
        }
      }
      Ai(t, s, e, i)
    } else s = Vc(n, t, e, i, r);
    return Di(s)
  }
  Ds = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = qr(t.pendingLanes);
          n !== 0 && (Qi(t, n | 1), At(t, G()), (Ce & 6) === 0 && (Ur = G() + 500, Un()))
        }
        break;
      case 13:
        fr(function() {
          var r = kn(e, 1);
          if (r !== null) {
            var i = Et();
            ln(r, e, 1, i)
          }
        }), Ss(e, 1)
    }
  }, Ki = function(e) {
    if (e.tag === 13) {
      var t = kn(e, 134217728);
      if (t !== null) {
        var n = Et();
        ln(t, e, 134217728, n)
      }
      Ss(e, 134217728)
    }
  }, bs = function(e) {
    if (e.tag === 13) {
      var t = Xn(e),
        n = kn(e, t);
      if (n !== null) {
        var r = Et();
        ln(n, e, t, r)
      }
      Ss(e, t)
    }
  }, Ns = function() {
    return Te
  }, Is = function(e, t) {
    var n = Te;
    try {
      return Te = e, t()
    } finally {
      Te = n
    }
  }, jr = function(e, t, n) {
    switch (t) {
      case "input":
        if (mr(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode;) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = ei(r);
              if (!i) throw Error(p(90));
              Qr(r), mr(r, i)
            }
          }
        }
        break;
      case "textarea":
        Ht(e, n);
        break;
      case "select":
        t = n.value, t != null && an(e, !!n.multiple, t, !1)
    }
  }, Y = hs, q = fr;
  var Qc = {
      usingClientEntryPoint: !1,
      Events: [yl, Tr, ei, Zr, Jr, hs]
    },
    Wl = {
      findFiberByHostInstance: lr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom"
    },
    Kc = {
      bundleType: Wl.bundleType,
      version: Wl.version,
      rendererPackageName: Wl.rendererPackageName,
      rendererConfig: Wl.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: qe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(e) {
        return e = Oe(e), e === null ? null : e.stateNode
      },
      findFiberByHostInstance: Wl.findFiberByHostInstance || Hc,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Li.isDisabled && Li.supportsFiber) try {
      Ue = Li.inject(Kc), Re = Li
    } catch {}
  }
  return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qc, Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ws(t)) throw Error(p(200));
    return Uc(e, t, null, n)
  }, Dt.createRoot = function(e, t) {
    if (!ws(e)) throw Error(p(299));
    var n = !1,
      r = "",
      i = qu;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = js(e, 1, !1, null, null, n, !1, r, i), e[xn] = t.current, hl(e.nodeType === 8 ? e.parentNode : e), new ks(t)
  }, Dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(p(188)) : (e = Object.keys(e).join(","), Error(p(268, e)));
    return e = Oe(t), e = e === null ? null : e.stateNode, e
  }, Dt.flushSync = function(e) {
    return fr(e)
  }, Dt.hydrate = function(e, t, n) {
    if (!Ni(t)) throw Error(p(200));
    return Ii(null, e, t, !0, n)
  }, Dt.hydrateRoot = function(e, t, n) {
    if (!ws(e)) throw Error(p(405));
    var r = n != null && n.hydratedSources || null,
      i = !1,
      o = "",
      s = qu;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Zu(t, null, e, 1, n ?? null, i, !1, o, s), e[xn] = t.current, hl(e), r)
      for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new bi(t)
  }, Dt.render = function(e, t, n) {
    if (!Ni(t)) throw Error(p(200));
    return Ii(null, e, t, !1, n)
  }, Dt.unmountComponentAtNode = function(e) {
    if (!Ni(e)) throw Error(p(40));
    return e._reactRootContainer ? (fr(function() {
      Ii(null, null, e, !1, function() {
        e._reactRootContainer = null, e[xn] = null
      })
    }), !0) : !1
  }, Dt.unstable_batchedUpdates = hs, Dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ni(n)) throw Error(p(200));
    if (e == null || e._reactInternals === void 0) throw Error(p(38));
    return Ii(e, t, n, !1, r)
  }, Dt.version = "18.3.1-next-f1338f8080-20240426", Dt
}
var ad;

function nf() {
  if (ad) return Es.exports;
  ad = 1;

  function W() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W)
    } catch (Q) {
      console.error(Q)
    }
  }
  return W(), Es.exports = tf(), Es.exports
}
var ud;

function rf() {
  if (ud) return Mi;
  ud = 1;
  var W = nf();
  return Mi.createRoot = W.createRoot, Mi.hydrateRoot = W.hydrateRoot, Mi
}
var lf = rf();
const of = pd(lf), v = {
  t: "#80AFB2",
  p: "#FDCABC",
  l: "#D0E0E0",
  d: "#3D3D3D"
}, qn = {
  ops_manager: "مدير التشغيل",
  area_manager: "مدير المنطقة",
  branch_manager: "مشرف فرع",
  cashier: "كاشير"
}, dd = {
  ops_manager: v.t,
  area_manager: v.p,
  branch_manager: v.l,
  cashier: v.d
}, sf = [{
  id: "u1",
  username: "khalid",
  password: "123456",
  name: "KHALID",
  nameAr: "خالد",
  role: "ops_manager",
  region: null,
  branch: null
}, {
  id: "u2",
  username: "mohammadali",
  password: "123456",
  name: "MOHAMMAD ALI",
  nameAr: "محمد علي",
  role: "area_manager",
  region: "yanbu",
  branch: null
}, {
  id: "u3",
  username: "nasser",
  password: "123456",
  name: "NASSER",
  nameAr: "ناصر",
  role: "area_manager",
  region: "jeddah",
  branch: null
}, {
  id: "u4",
  username: "mahmoud",
  password: "123456",
  name: "MAHMOUD",
  nameAr: "محمود",
  role: "area_manager",
  region: "riyadh",
  branch: null
}, {
  id: "u10",
  username: "hasboo",
  password: "123456",
  name: "HASBOO",
  nameAr: "حسبو",
  role: "branch_manager",
  region: "yanbu",
  branch: "y1"
}, {
  id: "u11",
  username: "ibrahim",
  password: "123456",
  name: "IBRAHIM",
  nameAr: "إبراهيم",
  role: "branch_manager",
  region: "yanbu",
  branch: "y2"
}, {
  id: "u20",
  username: "nader",
  password: "123456",
  name: "NADER",
  nameAr: "نادر",
  role: "branch_manager",
  region: "jeddah",
  branch: "j1"
}, {
  id: "u21",
  username: "ahmad_s",
  password: "123456",
  name: "AHMAD",
  nameAr: "أحمد (السنابل)",
  role: "branch_manager",
  region: "jeddah",
  branch: "j2"
}, {
  id: "u22",
  username: "mahmoud_a",
  password: "123456",
  name: "MAHMOUD",
  nameAr: "محمود (أبحر)",
  role: "branch_manager",
  region: "jeddah",
  branch: "j3"
}, {
  id: "u23",
  username: "ahmad_r",
  password: "123456",
  name: "AHMAD",
  nameAr: "أحمد (الروضة)",
  role: "branch_manager",
  region: "jeddah",
  branch: "j4"
}, {
  id: "u30",
  username: "abdelwahed",
  password: "123456",
  name: "ABD EL WAHED",
  nameAr: "عبدالواحد",
  role: "branch_manager",
  region: "riyadh",
  branch: "r1"
}, {
  id: "u31",
  username: "ahmad_m",
  password: "123456",
  name: "AHMAD",
  nameAr: "أحمد (المصيف)",
  role: "branch_manager",
  region: "riyadh",
  branch: "r2"
}, {
  id: "u32",
  username: "ehab",
  password: "123456",
  name: "EHAB",
  nameAr: "إيهاب",
  role: "branch_manager",
  region: "riyadh",
  branch: "r3"
}, {
  id: "u33",
  username: "mohammademad",
  password: "123456",
  name: "MOHAMMAD EMAD",
  nameAr: "محمد عماد",
  role: "branch_manager",
  region: "riyadh",
  branch: "r4"
}], af = {
  y1: {
    lat: 24.0889,
    lng: 38.0636,
    radius: 1000
  },
  y2: {
    lat: 24.0753,
    lng: 38.0517,
    radius: 1000
  },
  j1: {
    lat: 21.54,
    lng: 39.19,
    radius: 1000
  },
  j2: {
    lat: 21.4858,
    lng: 39.1923,
    radius: 1000
  },
  j3: {
    lat: 21.6207,
    lng: 39.1088,
    radius: 1000
  },
  j4: {
    lat: 21.5169,
    lng: 39.2183,
    radius: 1000
  },
  r1: {
    lat: 24.78,
    lng: 46.73,
    radius: 1000
  },
  r2: {
    lat: 24.7136,
    lng: 46.6753,
    radius: 1000
  },
  r3: {
    lat: 24.81,
    lng: 46.77,
    radius: 1000
  },
  r4: {
    lat: 24.75,
    lng: 46.7,
    radius: 1000
  }
}, uf = {
  yanbu: {
    name: "ينبع",
    icon: "⚓",
    manager: "MOHAMMAD ALI",
    managerAr: "محمد علي",
    branches: [{
      id: "y1",
      name: "ينبع البلد",
      supervisor: "HASBOO"
    }, {
      id: "y2",
      name: "ينبع الهيئة",
      supervisor: "IBRAHIM"
    }]
  },
  jeddah: {
    name: "جدة",
    icon: "🏙️",
    manager: "NASSER",
    managerAr: "ناصر",
    branches: [{
      id: "j1",
      name: "النهضة",
      supervisor: "NADER"
    }, {
      id: "j2",
      name: "السنابل",
      supervisor: "AHMAD"
    }, {
      id: "j3",
      name: "أبحر",
      supervisor: "MAHMOUD"
    }, {
      id: "j4",
      name: "الروضة",
      supervisor: "AHMAD"
    }]
  },
  riyadh: {
    name: "الرياض",
    icon: "🏛️",
    manager: "MAHMOUD",
    managerAr: "محمود",
    branches: [{
      id: "r1",
      name: "العارض",
      supervisor: "ABD EL WAHED"
    }, {
      id: "r2",
      name: "المصيف",
      supervisor: "AHMAD"
    }, {
      id: "r3",
      name: "اليرموك",
      supervisor: "EHAB"
    }, {
      id: "r4",
      name: "الفلاح",
      supervisor: "MOHAMMAD EMAD"
    }]
  }
}, df = {
  branch_manager: {
    weekly: [{
      id: "rw1",
      title: "الهدر",
      icon: "🗑️"
    }, {
      id: "rw2",
      title: "درجات الحرارة (صورة يومية)",
      icon: "🌡️"
    }],
    monthly: [{
      id: "rm1",
      title: "المبيعات اليومية",
      icon: "💰"
    }, {
      id: "rm2",
      title: "مبيعات الأصناف",
      icon: "📦"
    }]
  },
  area_manager: {
    weekly: [{
      id: "aw1",
      title: "تقرير التعويضات",
      icon: "💸"
    }, {
      id: "aw2",
      title: "تقرير الزيارات وتقييم الفروع",
      icon: "📍"
    }, {
      id: "aw3",
      title: "شيت الطلبات الملغية أو المعدّلة",
      icon: "❌"
    }],
    monthly: [{
      id: "am1",
      title: "المبيعات لكامل المنطقة مع تحليل",
      icon: "📊"
    }, {
      id: "am2",
      title: "الأصناف لكامل المنطقة مع تحليل",
      icon: "📦"
    }, {
      id: "am3",
      title: "تقييم المشرف",
      icon: "👔"
    }, {
      id: "am4",
      title: "تقييم الكاشير",
      icon: "💳"
    }, {
      id: "am5",
      title: "التحديات والمشاكل والاقتراحات",
      icon: "💡"
    }, {
      id: "am6",
      title: "إنتاجية العمالة",
      icon: "👷"
    }, {
      id: "am7",
      title: "تقرير التعويضات (فروع + منطقة)",
      icon: "💸"
    }, {
      id: "am8",
      title: "تقرير الزيارات وتقييم الفروع",
      icon: "📍"
    }, {
      id: "am9",
      title: "جدول الدوام",
      icon: "📅",
      dueDay: 20
    }, {
      id: "am10",
      title: "شيت الطلبات الملغية",
      icon: "❌"
    }]
  },
  ops_manager: {
    weekly: [{
      id: "ow1",
      title: "تقرير الجوجل ماب",
      icon: "⭐"
    }, {
      id: "ow2",
      title: "تقرير المبيعات",
      icon: "💰"
    }, {
      id: "ow3",
      title: "تقرير تطبيق طابور",
      icon: "📱"
    }, {
      id: "ow4",
      title: "متابعة النظافة والجودة",
      icon: "🧹"
    }, {
      id: "ow5",
      title: "تقرير تطبيقات كيتا وهنقر",
      icon: "🛵"
    }, {
      id: "ow6",
      title: "تقرير اليوزر",
      icon: "👥"
    }],
    monthly: [{
      id: "om1",
      title: "تقرير الجوجل ماب",
      icon: "⭐"
    }, {
      id: "om2",
      title: "تقرير المبيعات الشامل",
      icon: "💰"
    }, {
      id: "om3",
      title: "تقرير الأصناف",
      icon: "📦"
    }, {
      id: "om4",
      title: "تقرير تطبيق طابور",
      icon: "📱"
    }, {
      id: "om5",
      title: "متابعة النظافة والجودة",
      icon: "🧹"
    }, {
      id: "om6",
      title: "تقرير تطبيقات كيتا وهنقر",
      icon: "🛵"
    }, {
      id: "om7",
      title: "تقرير اليوزر",
      icon: "👥"
    }]
  }
}, cd = {
  "محمد علي": {
    count: 12,
    special: ["تقرير الأصناف الشركة", "تقرير تطبيق طابور"]
  },
  محمود: {
    count: 11,
    special: ["تقرير تطبيقات كيتا وهنقر"]
  },
  ناصر: {
    count: 11,
    special: ["تقرير اليوزر"]
  }
}, hn = {
  cashier: [{
    id: "dc1",
    title: "تشيك تطبيقات التوصيل كل ساعتين"
  }, {
    id: "dc2",
    title: "استقبال العميل والترحيب"
  }, {
    id: "dc3",
    title: "رفع قيمة الطلب — Upselling"
  }, {
    id: "dc4",
    title: "نظافة منطقة العميل والكاونتر"
  }, {
    id: "dc5",
    title: "رفع الملاحظات والشكاوى للمدير"
  }, {
    id: "dc6",
    title: "تقييم جوجل ماب"
  }, {
    id: "dc7",
    title: "التأكد من صلاحيات المنتجات"
  }, {
    id: "dc8",
    title: "التأكد من كميات الطبخ"
  }, {
    id: "dc9",
    title: "قياس سرعة تحضير الطلب"
  }, {
    id: "dc10",
    title: "التأكد من التغليف السليم"
  }, {
    id: "dc11",
    title: "تسجيل الطلبات المرتجعة"
  }, {
    id: "dc12",
    title: "فحص نظافة الحمامات"
  }, {
    id: "dc13",
    title: "ترتيب منطقة العرض"
  }, {
    id: "dc14",
    title: "تسجيل عدد طلبات تقييم جوجل"
  }],
  branch_manager: [{
    id: "db1",
    title: "تشيك تطبيقات التوصيل"
  }, {
    id: "db2",
    title: "تشيك تطبيقات التواصل"
  }, {
    id: "db3",
    title: "متابعة مهام أسانا"
  }, {
    id: "db4",
    title: "تشيك قائمة الأصناف"
  }, {
    id: "db5",
    title: "التشيك على جوجل ماب"
  }, {
    id: "db6",
    title: "التأكد من سير العملية"
  }, {
    id: "db7",
    title: "إرسال إغلاق اليوم"
  }, {
    id: "db8",
    title: "متابعة شكاوى العملاء"
  }, {
    id: "db9",
    title: "فحص صلاحية المنتجات"
  }, {
    id: "db10",
    title: "فحص درجات حرارة التخزين"
  }, {
    id: "db11",
    title: "شيت التالف والمبيعات"
  }, {
    id: "db12",
    title: "السلامة الغذائية"
  }, {
    id: "db13",
    title: "فحص نظافة المطبخ"
  }, {
    id: "db14",
    title: "فحص مظهر العاملين"
  }, {
    id: "db15",
    title: "تقرير P&L يومي"
  }, {
    id: "db16",
    title: "متابعة نسبة قبول التوصيل"
  }, {
    id: "db17",
    title: "نموذج HACCP اليومي"
  }, {
    id: "db18",
    title: "خطة عمالة الشيفت القادم"
  }, {
    id: "db19",
    title: "تسجيل التالف بالصور"
  }, {
    id: "db20",
    title: "متابعة وقت تسليم التوصيل"
  }, {
    id: "db21",
    title: "فحص كاميرات المراقبة"
  }, {
    id: "db22",
    title: "تحديث الأسعار في التطبيقات"
  }, {
    id: "db23",
    title: "تقرير المصاريف النثرية"
  }, {
    id: "db24",
    title: "متابعة حالة المعدات"
  }],
  area_manager: [{
    id: "da1",
    title: "تشيك مبيعات الفروع"
  }, {
    id: "da2",
    title: "متابعة المخزون المركزي"
  }, {
    id: "da3",
    title: "متابعة تقارير الجودة"
  }, {
    id: "da4",
    title: "متابعة إنجاز المشرفين"
  }, {
    id: "da5",
    title: "مقارنة أداء الفروع"
  }, {
    id: "da6",
    title: "مراجعة شكاوى العملاء"
  }, {
    id: "da7",
    title: "متابعة نسبة الهدر"
  }, {
    id: "da8",
    title: "التأكد من التزام HACCP"
  }, {
    id: "da9",
    title: "أداء تطبيقات التوصيل"
  }, {
    id: "da10",
    title: "تجديد الرخص والشهادات"
  }, {
    id: "da11",
    title: "تقرير أداء الموردين"
  }, {
    id: "da12",
    title: "تدريب ميداني"
  }],
  ops_manager: [{
    id: "do1",
    title: "مراجعة أداء المناطق"
  }, {
    id: "do2",
    title: "متابعة التقارير المالية"
  }, {
    id: "do3",
    title: "متابعة الصيانة العاجلة"
  }, {
    id: "do4",
    title: "تحليل ربحية الفروع"
  }, {
    id: "do5",
    title: "مؤشرات رضا العملاء"
  }, {
    id: "do6",
    title: "متابعة خطط التوسع"
  }, {
    id: "do7",
    title: "أداء الموردين"
  }, {
    id: "do8",
    title: "تحليل المنافسين"
  }, {
    id: "do9",
    title: "KPIs الاستراتيجية"
  }, {
    id: "do10",
    title: "مراجعة سياسات HR"
  }]
}, Oi = [{
  id: "h1",
  title: "ثلاجة اللحوم",
  range: "1-4°م",
  icon: "🥩"
}, {
  id: "h2",
  title: "ثلاجة الخضار",
  range: "1-4°م",
  icon: "🥬"
}, {
  id: "h3",
  title: "الفريزر",
  range: "-18°م↓",
  icon: "🧊"
}, {
  id: "h4",
  title: "حرارة الطبخ",
  range: "74°م↑",
  icon: "🍳"
}, {
  id: "h5",
  title: "العرض الساخن",
  range: "63°م↑",
  icon: "🔥"
}, {
  id: "h6",
  title: "نظافة الأسطح",
  range: "✓/✗",
  icon: "🧹"
}, {
  id: "h7",
  title: "تعقيم الأدوات",
  range: "✓/✗",
  icon: "🧴"
}, {
  id: "h8",
  title: "غسل اليدين",
  range: "✓/✗",
  icon: "🧤"
}], Bi = {
  cashier_guide: {
    id: "g1",
    title: "دليل تدريب الكاشير",
    icon: "💳",
    color: "#22c55e",
    roles: ["cashier", "branch_manager", "area_manager", "ops_manager"],
    stats: "25 يوم تدريب • 36+ فرع • 100% احترافية",
    sections: [{
      title: "المهام الأساسية للكاشير",
      items: ["الترحيب بالعملاء بابتسامة وتواصل بصري", "إدخال الطلبات بدقة في نظام POS", "تقديم مقترحات Upselling ذكية لزيادة المبيعات", "معالجة الدفع نقداً أو عبر الشبكة باحترافية", "ضمان تسليم الطلب بشكل صحيح وفي الوقت المناسب"]
    }, {
      title: "سكريبت استقبال العميل — وجهاً لوجه",
      items: ["عند الدخول: أهلاً وسهلاً حياك الله — تفضل طابور (ابتسامة + تواصل بصري)", "أخذ الطلب: ترشيح 4 أصناف فقط: دجاج بزبدة / حلوم / بيض ترفل / دافور (يمنع ذكر كل شي)", "أثناء الطلب: تحديد نوع الخبز + تحب أضيف لك مشروب كرك؟ أو حلا نيوتيلا/مربى جبن؟ (يمنع ذكر بدك شي)", "تأكيد الطلب: طلبك هو [إعادة الطلب] صحيح؟ — أهم خطوة للدقة", "عند الدفع: كاش ولا شبكة؟ — واضح ومختصر", "الإنهاء: نهارك سعيد — طلبك جاهز خلال (...) دقيقة"]
    }, {
      title: "ترتيب الأولويات",
      items: ["الأولى: خدمة العميل الحاضر — الأولوية الكاملة دائماً", "الأولى: الرد على المكالمات (في حال انشغل الكاشير يرد المشرف)", "الثانية: طلبات تطبيق طابور", "الثالثة: طلبات التطبيقات الأخرى (هنقر/كريم/جاهز)"]
    }, {
      title: "الأصناف الأكثر مبيعاً — يجب معرفتها",
      items: ["#1 دجاج بزبدة: شباتي دجاج مع صوص الزبدة الكريمي — الأعلى مبيعاً", "#2 حلوم: شباتي بجبن الحلوم المشوي الطازج مع الطماط والزعتر", "#3 دافور: برجر دجاج في صامولي مع صوص خاص وبصل مكرمل وجبن وهلبينو", "#4 بيض ترفل: بيض مع الترفل الفاخر — الأبرز في وجبة الإفطار"]
    }, {
      title: "فن الاقتراح — Upselling",
      items: ["أنصحك بالدجاج بزبدة — هو الأكثر طلباً عندنا", "الحلوم مشوي طازج اليوم — ما تفوتك", "الدافور من أطيب الأصناف", "بيض الترفل خيار خفيف لوجبة الإفطار", "اذكر الصنف بثقة ومودة دون ضغط", "إذا رفض العميل اقبل باحترام ولا تلح أبداً"]
    }, {
      title: "خطوات الطلب عبر الجوال (6 خطوات)",
      items: ["1. الاستقبال: السلام عليكم مطعم طابور...", "2. أخذ الطلب: اسمع + ركز + حدد الكمية", "3. اقتراح إضافة: تحب حلا أو مشروب؟", "4. تأكيد الطلب: أأكد طلبك...", "5. طريقة الدفع: كاش ولا شبكة؟", "6. تحديد الوقت: جاهز خلال 5-10 دقائق", "القاعدة الذهبية: اسمع — اكتب — أكد — اقترح — أنهِ باحتراف"]
    }, {
      title: "التعامل مع الشكاوى",
      items: ["اسمع بدون مقاطعة — خلّ العميل يعبّر", "اعتذر بلباقة: نعتذر منك", "قدم حل فوري: خلينا نصلح لك الموضوع", "ابلغ المشرف فوراً بأي شكوى", "لا ترفع صوتك أبداً مهما كان الموقف"]
    }, {
      title: "جدول التدريب — 25 يوماً",
      items: ["اليوم 1-7: الأساسيات — التعريف بطابور + المنيو + سكريبت الاستقبال + POS", "اليوم 8-16: التعامل الحقيقي — استقبال عملاء بإشراف + سرعة + تقييم", "اليوم 17-20: رفع الأداء — Upselling + عملاء صعبين + إدارة وقت", "اليوم 21-25: الاستقلالية — تشغيل مستقل + أوقات ذروة + اختبار نهائي"]
    }, {
      title: "معايير الاعتماد النهائي",
      items: ["دقة الطلبات: 95% أو أعلى", "رضا العملاء: 98% أو أعلى", "سرعة الخدمة: أقل من 3 دقائق", "نسبة Upselling: 20% أو أعلى", "عدم تحقيق المعايير = تمديد التدريب أسبوع"]
    }, {
      title: "نموذج تقييم الكاشير الأسبوعي",
      items: ["الالتزام بالزي الرسمي والنظافة الشخصية", "استقبال العميل بطريقة مناسبة", "سرعة التعامل مع الطلبات", "دقة إدخال وتسجيل الطلبات", "تقديم اقتراحات الإضافات Upselling", "التأكيد على تفاصيل الطلب", "التعامل المحترف مع الدفع", "معالجة الشكاوى بكفاءة", "القدرة على العمل تحت الضغط", "الالتزام بمواعيد الدوام"]
    }]
  },
  supervisor_guide: {
    id: "g2",
    title: "دليل المشرفين (مدير الفرع)",
    icon: "👔",
    color: "#f59e0b",
    roles: ["branch_manager", "area_manager", "ops_manager"],
    stats: "دليل عام للجودة والسلامة الغذائية والكفاءة التشغيلية",
    sections: [{
      title: "مهام مدير الفرع اليومية",
      items: ["الاستلام: الوصول قبل 30 دقيقة + مراجعة تقرير أمس + توزيع المهام + فحص المعدات", "إدارة الفريق: متابعة حضور + توجيه وتحفيز + حل مشكلات + تقييم أداء", "جودة الغذاء: فحص حرارة + صلاحية + معايير تقديم + جودة وجبات", "خدمة العملاء: إشراف على التجربة + شكاوى فورية + سرعة خدمة + تقييمات", "المتابعة المالية: مبيعات يومية + كاشير وعهدة + تقليل هدر + مطابقة إيرادات", "الإغلاق: تقرير نهاية اليوم + نظافة للغد + تقرير للإدارة + خطة اليوم التالي"]
    }, {
      title: "طريقة التشيك اليومي (5 مراحل)",
      items: ["5:00ص — الوصول: فحص نظافة المطبخ + حرارة التبريد + مخزون وصلاحية + جاهزية الفريق + إرسال التقفيلة", "الافتتاح: فحص منطقة الانتظار + قائمة الأسعار + نظام الطلبات + توجيه الفريق", "أثناء الذروة: سرعة تنفيذ + جودة وجبات + تنظيم سير العمل + حل شكاوى فوراً", "منتصف اليوم: مراجعة مخزون + نظافة أثناء العمل + تقييم أداء + تحديث ملاحظات", "الإغلاق: مطابقة كاشير + إغلاق معدات + تسليم عهدة + مراجعة مخزون"]
    }, {
      title: "التشييك العام اليومي (10 بنود)",
      items: ["🧹 النظافة والتعقيم: تعقيم أسطح + مطهرات معتمدة + أدوات نظيفة", "🥗 سلامة الغذاء: تواريخ صلاحية + تخلص فوري + حفظ سليم", "🌡️ درجات الحرارة: ثلاجات + تجميد + قريل + سخانات + حافظات", "👔 مظهر العاملين: نظافة + زي موحد + قفازات + قص شعر وأظافر", "📦 الإنتاج والمخزون: مطابقة كميات + تقليل هدر + احتياج الذروة", "⭐ الجودة الغذائية: طعم + رائحة + شكل + تذوق دوري", "📱 تطبيقات التوصيل: فحص كل ساعتين + أكياس خاصة + إغلاق محكم", "🔧 المعدات والصيانة: فحص يومي + رفع الأعطال + سلامة التشغيل", "🕐 إغلاق الكبدة: إيقاف البيع كحد أقصى الساعة 1 ظهراً", "🧽 تنظيف القريلات: تنظيف دوري يومي + إزالة الزيوت والترسبات"]
    }, {
      title: "سلامة الغذاء والتخزين",
      items: ["المستودع: منظفات مفصولة + لا شيء على الأرض + بهارات رف مستقل + زيت أسفل", "الثلاجة العلوي: الصوصات والمنتجات الجاهزة", "الثلاجة الأوسط: الخضار والجبن والمواد اليومية", "الثلاجة السفلي: الدجاج المقطع والنيئة في حافظات مغلقة", "الفريزر: شباتي + صامولي + زبدة ومجمدات + FIFO دائماً", "فك التجميد: داخل الثلاجة فقط — ممنوع بدرجة الغرفة — ممنوع إعادة التجميد"]
    }, {
      title: "نظام التايمر وحفظ المنتجات",
      items: ["1. طباعة استيكر للمنتج", "2. تفعيل التايمر بشكل صحيح", "3. ضبط المدة حسب المنتج", "4. مراقبة دورية مستمرة", "5. تخلص عند انتهاء المدة", "الكبدة والبيض: حساسية عالية — رقابة أشد"]
    }, {
      title: "معايير الجودة والملاعق المعيارية",
      items: ["توفير 16 معلقة معيارية 1/3", "المعيار الأساسي: 1/3 لجميع الأصناف", "معيار استثنائي: 1/2 للكبدة", "غسل/تغيير الأواني مع كل طبخة جديدة", "يمنع استخدام أدوات غير مخصصة للقياس", "تذوق المنتجات دورياً من قبل المشرف", "مراقبة جودة الزيت: فحص بالجهاز + لون + رائحة + ممنوع خلط جديد بقديم"]
    }, {
      title: "بروتوكول التوصيل",
      items: ["1. الكاشير: تظليل المشروبات في الطلب", "2. محضر السندوش: مراجعة الطلب بالقلم", "3. محضر السندوش: وضع الطلب في كنتينر استيل مع الفاتورة", "4. التسليم: التشييك النهائي مع التوقيع", "5. التعبئة: إحكام إغلاق بالاستكر", "الأكياس: ورقي (5 سندويشات حد أعلى) + شفاف (تطبيقات فقط)", "فحص التطبيقات كل ساعتين بفتحها مثل العميل"]
    }, {
      title: "الرخص والوثائق الإلزامية",
      items: ["🏛️ الرخصة البلدية — تعليق ظاهر", "📱 QR Code — تحديث دوري", "🛡️ شهادة السلامة/الدفاع المدني — تجديد سنوي", "🥩 مصدر اللحوم — تعليق واضح", "🍽️ السعرات الحرارية — بجانب المنتج", "👔 الشهادات الصحية للعاملين — تجديد سنوي", "📄 السجل التجاري — تعليق واضح", "🚨 أرقام التواصل والطوارئ — مكان بارز"]
    }]
  },
  area_manager_guide: {
    id: "g3",
    title: "دليل مدير المنطقة التشغيلي",
    icon: "🏢",
    color: v.t,
    roles: ["area_manager", "ops_manager"],
    stats: "القيادة التشغيلية • الرقابة والجودة • تطوير الكوادر",
    sections: [{
      title: "رؤية الدليل وفلسفته",
      items: ["القيادة التشغيلية: إتقان عمليات الفرع من الداخل قبل الإشراف من الخارج", "الرقابة والجودة: بناء ثقافة الاتساق في تطبيق المعايير في كل فرع", "تطوير الكوادر: تحويل كل زيارة إلى فرصة تدريبية حقيقية للفريق"]
    }, {
      title: "الكفاءات التشغيلية المطلوبة",
      items: ["⚙️ إدارة العمليات: تتبع مخزون يومياً + استمرارية سير العمل + إدارة مناوبات", "📊 التقارير والتحليل: تقارير يومية وأسبوعية + تحليل KPIs + تقارير زيارات", "✅ الرقابة والجودة: قوائم فحص + صلاحية منتجات + التزام بالمعايير", "👥 قيادة الفريق: تطوير مشرفين + تدريب على رأس العمل + إدارة أداء", "🛒 تجربة العميل: معايير استقبال + جودة وسرعة + رضا العملاء", "🔧 التصحيح: تحديد انحرافات فوراً + خطط تصحيح + متابعة الحلول"]
    }, {
      title: "بروتوكول الزيارة الميدانية (6ص - 1م)",
      items: ["6:00-6:30 — الوصول والجولة الأولى: فحص النظافة العامة + الاستعداد للافتتاح + حضور الفريق", "6:30-7:15 — فحص الصلاحيات والمخزون: تواريخ الصلاحية + الكميات + المخزون الأمامي والخلفي", "7:15-11:15 — مراقبة سير العمل: الاستقبال + تدفق العمل + سرعة الخدمة في الذروة + كتابة الملاحظات", "8:30-9:15 — تدريب فردي للكاشير: جلسة لتعزيز نقاط القوة ومعالجة الضعف", "11:15-12:00 — تقييم الكاشير والاستقبال: تقييم دقيق للأداء", "12:00-12:30 — الاجتماع الختامي: مناقشة النتائج مع المشرف والفريق + إجراءات التصحيح", "+ زيارة مسائية: 8م - 10م"]
    }, {
      title: "تقرير زيارة الفرع — المحتوى",
      items: ["1. بيانات أساسية: اسم الفرع + التاريخ والوقت + اسم المدير والمشرف + عدد الحاضرين", "2. فحص الصلاحيات: كميات متاحة + صلاحية منتهية + نسبة امتثال + كميات ناقصة", "3. الامتثال للمعايير: معايير العرض + النظافة + التعامل مع العميل + الزي الموحد"]
    }, {
      title: "فحص الصلاحية والكميات — التشيك الميداني",
      items: ["📅 الصلاحية: فحص يدوي لكل المنتجات + إزالة منتهي فوراً + FIFO + توثيق + فحص المستودع", "📦 الكميات: مقارنة بالحد الأدنى + فحص العرض الأمامي + تحديد نواقص + طلبيات معلقة", "📋 الستاندر: أماكن عرض محددة + خريطة معتمدة + أسعار ولافتات + نظافة واجهات + إضاءة"]
    }, {
      title: "تقييم المشرف — معايير ميدانية",
      items: ["🧹 نظافة الفرع (30 درجة): استقبال/5 + تحضير/5 + حمامات/5 + واجهة/5 + أرفف/5 + ملابس/5", "⚡ سير العمل (60 درجة): سرعة تحضير/10 + توزيع مهام/10 + إدارة ذروة/10 + استجابة/10 + تنسيق/10 + إجراءات/10"]
    }, {
      title: "تقييم الكاشير — الاستقبال والخدمة",
      items: ["🤝 الاستقبال (20 درجة): ترحيب فوري/5 + تواصل بصري وابتسامة/5 + مظهر لائق/5 + سرعة استجابة/5", "📝 أخذ الطلب (20 درجة): وضوح استفسار/5 + عرض إضافات/5 + تأكيد صحة/5 + دقة إدخال/5", "🚀 التسليم (10 درجة): تنسيق مع التحضير/5 + تواجد عند التسليم/5"]
    }, {
      title: "توزيع العمالة — الفترة الصباحية",
      items: ["كاشير: التسليم مع المشرف 6-11 + نظافة المنطقة الأمامية", "لف السندوش: مسؤول عن لف وتجهيز السندويشات", "مساعد شيف + جريل: دعم الشيف وتشغيل الجريل", "الشيف: الصوصات 2-5 + التقطيع 12-3 (يمنع 5-12) + تحضير آيس كرك 3-5", "النظافة: كل شخص ينظف مكانه + الأرضية على الجميع", "إجمالي العمالة: 8 أشخاص (6 للفروع الجديدة بدوام 12 ساعة 3-3)"]
    }]
  }
}, gn = () => Math.random().toString(36).substr(2, 9), U = () => new Date().toISOString().split("T")[0], En = W => W ? new Date(W).toLocaleDateString("ar-SA", {
  year: "numeric",
  month: "short",
  day: "numeric"
}) : "", xe = W => W >= 90 ? "#22c55e" : W >= 75 ? v.t : W >= 60 ? "#f59e0b" : "#ef4444", Dl = W => W >= 90 ? "ممتاز" : W >= 75 ? "جيد" : W >= 60 ? "مقبول" : "ضعيف", Rs = () => new Date().getHours();
const RQ_WD = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  RQ_WD_BARE = ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  RQ_SAT = 6,
  RQ_MDAY = 5,
  RQ_SCHED_DAY = 20,
  RQ_FREQ_AR = {
    weekly: "أسبوعي",
    monthly: "شهري"
  },
  rqInt = (W, Q, p, H) => {
    const T = Number(W);
    return Number.isFinite(T) ? Math.min(p, Math.max(Q, Math.trunc(T))) : H
  },
  rqNorm = (W, Q) => ({
    id: W.id != null ? String(W.id) : gn(),
    dbId: typeof W.id == "number" ? W.id : null,
    title: W.title || "",
    icon: W.icon || "📄",
    role: W.role || Q || null,
    frequency: W.frequency === "monthly" ? "monthly" : "weekly",
    dueWeekday: rqInt(W.dueWeekday, 0, 6, RQ_SAT),
    dueDay: rqInt(W.dueDay, 1, 31, RQ_MDAY),
    notes: W.notes || "",
    sortOrder: rqInt(W.sortOrder, 0, 9999, 0),
    active: W.active !== !1
  }),
  rqDim = (W, Q) => new Date(W, Q + 1, 0).getDate(),
  rqIso = W => `${W.getFullYear()}-${String(W.getMonth()+1).padStart(2,"0")}-${String(W.getDate()).padStart(2,"0")}`,
  rqToday = () => {
    const W = new Date();
    return new Date(W.getFullYear(), W.getMonth(), W.getDate())
  },
  rqNextWeekly = (W, Q) => {
    const p = new Date(Q.getFullYear(), Q.getMonth(), Q.getDate());
    return p.setDate(p.getDate() + (W - p.getDay() + 7) % 7), p
  },
  rqNextMonthly = (W, Q) => {
    const p = Q.getFullYear(), H = Q.getMonth(), T = Math.min(W, rqDim(p, H));
    return Q.getDate() <= T ? new Date(p, H, T) : new Date(p, H + 1, Math.min(W, rqDim(p, H + 1)))
  },
  rqDaysTxt = W => W === 0 ? "اليوم" : W === 1 ? "غداً" : W === 2 ? "بعد يومين" : W <= 10 ? `بعد ${W} أيام` : `بعد ${W} يوماً`,
  rqCountTxt = W => W === 1 ? "تقرير واحد" : W === 2 ? "تقريران" : W <= 10 ? `${W} تقارير` : `${W} تقريراً`,
  rqDue = (W, Q) => {
    const p = Q || rqToday(),
      H = W.frequency === "weekly" ? rqNextWeekly(W.dueWeekday, p) : rqNextMonthly(W.dueDay, p),
      T = Math.round((H - p) / 864e5);
    return {
      date: H,
      iso: rqIso(H),
      days: T,
      rule: W.frequency === "weekly" ? `كل يوم ${RQ_WD_BARE[W.dueWeekday]}` : `يوم ${W.dueDay} من كل شهر`,
      pretty: `${RQ_WD[H.getDay()]} ${rqIso(H)}`
    }
  },
  rqState = (W, Q) => Q ? {
    k: "done",
    t: "تم التسليم",
    c: "#22c55e"
  } : W.days === 0 ? {
    k: "today",
    t: "مستحق اليوم",
    c: "#ef4444"
  } : W.days <= 3 ? {
    k: "soon",
    t: rqDaysTxt(W.days),
    c: "#f59e0b"
  } : {
    k: "later",
    t: rqDaysTxt(W.days),
    c: "#64748b"
  },
  rqApi = async (W, Q, p) => {
    const H = await fetch(W, {
        method: Q,
        headers: {
          "content-type": "application/json",
          "x-tabor-role": "ops_manager"
        },
        body: p ? JSON.stringify(p) : void 0
      }),
      T = await H.json().catch(() => ({}));
    if (!H.ok) throw new Error(T.error || "تعذّر تنفيذ الطلب");
    return T
  };

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

function cf() {
  var Zr, Jr;
  const [W, Q] = me.useState(sf), [p, H] = me.useState(uf), [T, L] = me.useState(null), [ie, $] = me.useState({
    username: "",
    password: "",
    error: ""
  }), [z, oe] = me.useState("dashboard"), [Ae, D] = me.useState(!1), [B, De] = me.useState({}), [We, ke] = me.useState([]), [we, bt] = me.useState([]), [nt, jt] = me.useState([]), [qe, Nt] = me.useState([]), [et, ct] = me.useState([]), [It, on] = me.useState([]), [St, sn] = me.useState({}), [Lt, kt] = me.useState({}), [Ie, pe] = me.useState(null), [it, Le] = me.useState([]), [A, te] = me.useState(null), [b, h] = me.useState(null), [k, ce] = me.useState({}), [ne, ye] = me.useState({}), [ve, Pe] = me.useState({}), [Ee, Me] = me.useState("users"), [_t, Vr] = me.useState(null), [Qr, $n] = me.useState(null), [Kr, bl] = me.useState({}), [Rn, mr] = me.useState("ar"), [Yr, yr] = me.useState({}), [rqRows, rqSetRows] = me.useState(null), [rqOnline, rqSetOnline] = me.useState(!1), [rqBusy, rqSetBusy] = me.useState(!1), [rqMsg, rqSetMsg] = me.useState(""), [rqRoleView, rqSetRoleView] = me.useState(null), [rqFilter, rqSetFilter] = me.useState("all"), [rqDraft, rqSetDraft] = me.useState(null), [txCustom, txSetCustom] = me.useState(() => TXLS("tabor_tx_tasks") || []), [txFilter, txSetFilter] = me.useState("all"), [txDraft, txSetDraft] = me.useState(null), [nvCfg, nvSetCfg] = me.useState(() => TXLS("tabor_nv_cfg") || {}), er = (Y, q, Se) => {
    const Be = af[Y];
    if (!Be) {
      Se("حاضر", {
        branchId: Y,
        inRange: null,
        dist: null
      });
      return
    }
    if (!navigator.geolocation) {
      Se("حاضر", {
        branchId: Y,
        inRange: null,
        dist: null
      });
      return
    }
    navigator.geolocation.getCurrentPosition(Ge => {
      const X = Math.sqrt(Math.pow((Ge.coords.latitude - Be.lat) * 111e3, 2) + Math.pow((Ge.coords.longitude - Be.lng) * 111e3 * Math.cos(Be.lat * Math.PI / 180), 2));
      X <= Be.radius ? (yr(be => ({
        ...be,
        [`${q}|${U()}`]: {
          status: "inside",
          dist: Math.round(X)
        }
      })), Se("حاضر", {
        branchId: Y,
        inRange: !0,
        dist: Math.round(X)
      })) : (yr(be => ({
        ...be,
        [`${q}|${U()}`]: {
          status: "outside",
          dist: Math.round(X)
        }
      })), Se("خارج النطاق", {
        branchId: Y,
        inRange: !1,
        dist: Math.round(X)
      }))
    }, () => {
      Se("حاضر", {
        branchId: Y,
        inRange: null,
        dist: null
      })
    }, {
      enableHighAccuracy: !0,
      timeout: 1e4
    })
  }, an = () => {
    const Y = W.find(q => q.username === ie.username && q.password === ie.password && q.active !== !1);
    Y ? (L(Y), $({
      username: "",
      password: "",
      error: ""
    })) : $(q => ({
      ...q,
      error: "بيانات الدخول غير صحيحة"
    }))
  };
  const rqLoad = async () => {
    try {
      const Y = await rqApi("/api/required-reports", "GET");
      return rqSetRows((Y.reports || []).map(q => rqNorm(q))), rqSetOnline(!0), !0
    } catch {
      return rqSetOnline(!1), !1
    }
  }, rqMutate = async (Y, q, Se) => {
    rqSetBusy(!0), rqSetMsg("");
    try {
      await rqApi(Y, q, Se), await rqLoad(), rqSetDraft(null)
    } catch (Be) {
      rqSetMsg((Be && Be.message) || "تعذّر تنفيذ الطلب")
    } finally {
      rqSetBusy(!1)
    }
  };
  me.useEffect(() => {
    let Y = !0;
    return rqApi("/api/required-reports", "GET").then(q => {
      Y && (rqSetRows((q.reports || []).map(Se => rqNorm(Se))), rqSetOnline(!0))
    }).catch(() => {
      Y && rqSetOnline(!1)
    }), () => {
      Y = !1
    }
  }, []);
  me.useEffect(() => {
    TXSS("tabor_tx_tasks", txCustom)
  }, [txCustom]);
  me.useEffect(() => {
    TXSS("tabor_nv_cfg", nvCfg)
  }, [nvCfg]);
  if (!T) return l.jsx("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(135deg,${v.t} 0%,${v.l} 50%,${v.p} 100%)`,
      padding: 16
    },
    children: l.jsxs("div", {
      style: {
        background: "#fff",
        borderRadius: 20,
        padding: "36px 28px",
        maxWidth: 420,
        width: "100%",
        textAlign: "center"
      },
      children: [l.jsx("div", {
        style: {
          fontSize: 48,
          fontWeight: 800,
          color: v.t,
          marginBottom: 4
        },
        children: "طابور"
      }), l.jsx("div", {
        style: {
          fontSize: 14,
          color: "#888",
          marginBottom: 24
        },
        children: "نظام إدارة التشغيل المتكامل"
      }), ie.error && l.jsx("div", {
        style: {
          background: "#ef444415",
          color: "#ef4444",
          padding: "8px 12px",
          borderRadius: 8,
          fontSize: 13,
          marginBottom: 12
        },
        children: ie.error
      }), l.jsxs("div", {
        style: {
          marginBottom: 12,
          textAlign: "right"
        },
        children: [l.jsx("label", {
          style: a.fl,
          children: "اسم المستخدم"
        }), l.jsx("input", {
          value: ie.username,
          onChange: Y => $(q => ({
            ...q,
            username: Y.target.value,
            error: ""
          })),
          onKeyDown: Y => Y.key === "Enter" && an(),
          style: a.fi,
          placeholder: "admin"
        })]
      }), l.jsxs("div", {
        style: {
          marginBottom: 16,
          textAlign: "right"
        },
        children: [l.jsx("label", {
          style: a.fl,
          children: "كلمة المرور"
        }), l.jsx("input", {
          type: "password",
          value: ie.password,
          onChange: Y => $(q => ({
            ...q,
            password: Y.target.value,
            error: ""
          })),
          onKeyDown: Y => Y.key === "Enter" && an(),
          style: a.fi,
          placeholder: "••••••"
        })]
      }), l.jsx("button", {
        onClick: an,
        style: a.submitBtn,
        children: "تسجيل الدخول"
      }), l.jsx("div", {
        style: {
          marginTop: 16,
          fontSize: 11,
          color: "#bbb"
        },
        children: "khalid / 123456"
      })]
    })
  });
  const O = T,
    _e = O.role === "ops_manager",
    Ht = O.role === "area_manager",
    un = O.role === "branch_manager",
    tr = O.role === "cashier",
    ot = _e ? Object.values(p).flatMap(Y => Y.branches) : Ht ? ((Zr = p[O.region]) == null ? void 0 : Zr.branches) || [] : [(Jr = p[O.region]) == null ? void 0 : Jr.branches.find(Y => Y.id === O.branch)].filter(Boolean),
    txFor = R => [...(hn[R] || []), ...txCustom.filter(x => x.role === R).map(x => ({
      ...x,
      custom: !0
    }))],
    ft = txFor(O.role),
    yn = O.branch || "hq",
    Mt = ft.filter(Y => B[`${yn}-${Y.id}`] === U()).length,
    $e = ft.length ? Math.round(Mt / ft.length * 100) : 0,
    Tn = We.filter(Y => Y.status !== "مكتمل").length,
    Wn = we.filter(Y => Y.status !== "مكتمل").length,
    Pn = nt.filter(Y => Y.status !== "محلول").length,
    Fi = Rs() < 12 ? "صباح الخير ☀️" : Rs() < 18 ? "مساء الخير 🌤️" : "مساء النور 🌙",
    xr = ot.reduce((Y, q) => Y + (St[`${q.id}|${U()}`] || 0), 0),
    Xr = `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,
    vr = ot.reduce((Y, q) => Y + Object.entries(St).filter(([Se]) => Se.startsWith(`${q.id}|${Xr}`)).reduce((Se, [, Be]) => Se + Be, 0), 0),
    Gr = Y => {
      const q = `${yn}-${Y}`;
      De(Se => {
        const Be = {
          ...Se
        };
        Be[q] === U() ? delete Be[q] : Be[q] = U();
        const Ge = `${yn}|${O.role}|${U()}`,
          X = ft.filter(wt => Be[`${yn}-${wt.id}`] === U()).length,
          be = ft.length ? Math.round(X / ft.length * 100) : 0;
        return bl(wt => ({
          ...wt,
          [Ge]: be
        })), Be
      })
    },
    jr = (Y, q) => {
      const Se = `${Y}-${q}`;
      kt(Be => {
        if (Be[Se] === U()) {
          const Ge = {
            ...Be
          };
          return delete Ge[Se], Ge
        }
        return {
          ...Be,
          [Se]: U()
        }
      })
    },
    pt = Y => {
      let q = "\uFEFF";
      const Se = U();
      Y === "tasks" ? (q += `المنصب,المهمة,الفرع,الحالة,التاريخ
`, Object.keys(hn).forEach(X => {
        txFor(X).forEach(wt => {
          ot.forEach(Zt => {
            q += `"${qn[X]}","${wt.title}","${Zt.name}","${B[`${Zt.id}-${wt.id}`]===Se?"✓ منجز":"✗ لم ينجز"}","${Se}"
`
          })
        })
      })) : Y === "attendance" ? (q += `الفرع,الموظف,المنصب,الفترة,التاريخ,الحالة
`, ot.forEach(X => {
        (k[X.id] || []).forEach(be => {
          const wt = ne[`${X.id}|${be.id}|${Se}`] || "لم يسجل";
          q += `"${X.name}","${be.name}","${be.position}","${be.shift}","${Se}","${wt}"
`
        })
      })) : Y === "urgent" ? (q += `العنوان,الأولوية,الحالة,التاريخ,المُنشئ,المُكلّف
`, We.forEach(X => {
        q += `"${X.title}","${X.priority}","${X.status}","${X.date}","${X.by||""}","${X.assignee||""}"
`
      })) : Y === "maintenance" ? (q += `العنوان,الفرع,الأولوية,الحالة,التاريخ,المُنشئ
`, we.forEach(X => {
        q += `"${X.title}","${X.branch||""}","${X.priority}","${X.status}","${X.date}","${X.by||""}"
`
      })) : Y === "complaints" ? (q += `النوع,التفاصيل,الحالة,التاريخ,المُسجل
`, nt.forEach(X => {
        q += `"${X.type}","${X.desc}","${X.status}","${X.date}","${X.by||""}"
`
      })) : Y === "haccp" ? (q += "التاريخ,الوقت,المُسجل", Oi.forEach(X => {
        q += `,"${X.title}"`
      }), q += `
`, qe.forEach(X => {
        q += `"${X.date}","${X.time}","${X.by}"`, Oi.forEach(be => {
          q += `,"${X[be.id]||""}"`
        }), q += `
`
      })) : Y === "visits" ? (q += `الفرع,التاريخ,المفتش,المشرف,الموظفين,النظافة/30,سير العمل/30,الكاشير/40,الإجمالي/100,التقييم,إجراءات التصحيح
`, et.forEach(X => {
        const be = X.cleanliness + X.operations + X.cashierScore;
        q += `"${X.branch}","${X.date}","${X.inspector}","${X.supervisor||""}","${X.employeeCount||""}",${X.cleanliness},${X.operations},${X.cashierScore},${be},"${Dl(be)}","${(X.corrections||[]).map(wt=>wt.issue).join(" | ")}"
`
      })) : Y === "all" && (q += `القسم,البيان,القيمة,التاريخ
`, q += `"المهام","إجمالي المهام اليومية","${ft.length}","${Se}"
`, q += `"المهام","المنجز","${Mt}","${Se}"
`, q += `"المهام","النسبة","${$e}%","${Se}"
`, q += `"مستعجلة","معلقة","${Tn}","${Se}"
`, q += `"صيانة","معلقة","${Wn}","${Se}"
`, q += `"شكاوى","مفتوحة","${Pn}","${Se}"
`);
      const Be = new Blob([q], {
          type: "text/csv;charset=utf-8;"
        }),
        Ge = document.createElement("a");
      Ge.href = URL.createObjectURL(Be), Ge.download = `tabor_${Y}_${Se}.csv`, Ge.click(), URL.revokeObjectURL(Ge.href)
    },
    nvBase = [{
      id: "dashboard",
      label: "📊 لوحة التحكم"
    }, {
      id: "tasks",
      label: "✅ مهامي"
    }, {
      id: "reports_req",
      label: "📑 التقارير المطلوبة"
    }, {
      id: "urgent",
      label: "⚡ مهام مستعجلة",
      badge: Tn
    }, ...tr ? [] : [{
      id: "tracking",
      label: "👥 متابعة المرؤوسين"
    }, {
      id: "visits",
      label: "📍 زيارات الفروع"
    }, {
      id: "attendance",
      label: "📅 حضور الموظفين"
    }, {
      id: "am_schedule",
      label: "🗓️ جدول مدراء المناطق"
    }, {
      id: "haccp",
      label: "🧪 سلامة الغذاء"
    }, {
      id: "delivery",
      label: "💰 المبيعات"
    }, {
      id: "customers",
      label: "⭐ تجربة العميل"
    }, {
      id: "maintenance",
      label: "🔧 طلبات الصيانة"
    }], {
      id: "op_guides",
      label: "📖 الدليل التشغيلي"
    }, {
      id: "circulars",
      label: "📢 التعاميم",
      badge: it.filter(Y => Y.date === U()).length
    }, {
      id: "export_reports",
      label: "⬇️ تصدير التقارير"
    }, ..._e ? [{
      id: "admin",
      label: "⚙️ إدارة النظام"
    }] : []],
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
    Nl = () => {
      var Y, q, Se, Be, Ge, X, be, wt, Zt;
      if (z === "dashboard") {
        const c = [];
        return Tn > 0 && c.push({
          t: `${Tn} مهام مستعجلة`,
          c: "#ef4444",
          p: "urgent"
        }), Wn > 0 && c.push({
          t: `${Wn} صيانة معلقة`,
          c: "#f59e0b",
          p: "maintenance"
        }), Pn > 0 && c.push({
          t: `${Pn} شكوى مفتوحة`,
          c: "#ef4444",
          p: "customers"
        }), $e < 50 && Rs() > 14 && c.push({
          t: `إنجاز ${$e}% فقط!`,
          c: "#ef4444",
          p: "tasks"
        }), l.jsxs(l.Fragment, {
          children: [l.jsxs("h1", {
            style: a.pt,
            children: [Fi, " ", O.name]
          }), l.jsxs("p", {
            style: a.ps,
            children: [En(U()), " — ", qn[O.role], O.region ? ` • ${(Y=p[O.region])==null?void 0:Y.name}` : ""]
          }), c.length > 0 && l.jsx("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 4,
              marginBottom: 14
            },
            children: c.map((y, j) => l.jsxs("button", {
              onClick: () => oe(y.p),
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 12px",
                background: `${y.c}10`,
                border: `1px solid ${y.c}25`,
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                color: y.c,
                fontWeight: 600,
                textAlign: "right",
                width: "100%"
              },
              children: ["⚠️ ", y.t]
            }, j))
          }), l.jsxs("div", {
            style: a.kpig,
            children: [l.jsx(_n, {
              t: "إنجاز المهام",
              v: `${$e}%`,
              s: `${Mt}/${ft.length}`,
              c: xe($e),
              onClick: () => oe("tasks"),
              bar: $e
            }), l.jsx(_n, {
              t: "مهام مستعجلة",
              v: Tn,
              s: "معلقة",
              c: Tn > 0 ? "#ef4444" : "#22c55e",
              onClick: () => oe("urgent")
            }), !tr && l.jsxs(l.Fragment, {
              children: [l.jsx(_n, {
                t: "صيانة معلقة",
                v: Wn,
                s: "طلب",
                c: Wn > 0 ? "#f59e0b" : "#22c55e",
                onClick: () => oe("maintenance")
              }), l.jsx(_n, {
                t: "شكاوى مفتوحة",
                v: Pn,
                s: "شكوى",
                c: Pn > 0 ? "#ef4444" : "#22c55e",
                onClick: () => oe("customers")
              }), l.jsx(_n, {
                t: "HACCP اليوم",
                v: qe.filter(y => y.date === U()).length,
                s: "فحص",
                c: v.t,
                onClick: () => oe("haccp")
              }), l.jsx(_n, {
                t: "زيارات الشهر",
                v: et.length,
                s: "زيارة",
                c: "#8b5cf6",
                onClick: () => oe("visits")
              }), l.jsx(_n, {
                t: "مبيعات اليوم",
                v: xr > 0 ? xr.toLocaleString() : "—",
                s: "ريال",
                c: "#22c55e",
                onClick: () => oe("delivery")
              }), l.jsx(_n, {
                t: "مبيعات الشهر",
                v: vr > 0 ? vr.toLocaleString() : "—",
                s: "من بداية الشهر",
                c: "#8b5cf6",
                onClick: () => oe("delivery")
              }), l.jsx(_n, {
                t: "الفروع",
                v: ot.length,
                s: "فرع",
                c: v.p,
                onClick: () => oe("tracking")
              })]
            })]
          }), !tr && l.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 12,
              marginBottom: 16
            },
            children: [l.jsxs("div", {
              style: a.card,
              children: [l.jsx("h3", {
                style: {
                  fontSize: 14,
                  fontWeight: 600,
                  margin: "0 0 12px"
                },
                children: "📊 نسبة إنجاز المهام"
              }), l.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16
                },
                children: [l.jsxs("svg", {
                  width: "110",
                  height: "110",
                  viewBox: "0 0 110 110",
                  children: [l.jsx("circle", {
                    cx: "55",
                    cy: "55",
                    r: "45",
                    fill: "none",
                    stroke: "#f0f0f0",
                    strokeWidth: "10"
                  }), l.jsx("circle", {
                    cx: "55",
                    cy: "55",
                    r: "45",
                    fill: "none",
                    stroke: xe($e),
                    strokeWidth: "10",
                    strokeDasharray: `${$e*2.83} ${283-$e*2.83}`,
                    strokeDashoffset: "70",
                    strokeLinecap: "round",
                    style: {
                      transition: "all 0.6s"
                    }
                  }), l.jsxs("text", {
                    x: "55",
                    y: "52",
                    textAnchor: "middle",
                    fontSize: "20",
                    fontWeight: "800",
                    fill: xe($e),
                    children: [$e, "%"]
                  }), l.jsx("text", {
                    x: "55",
                    y: "67",
                    textAnchor: "middle",
                    fontSize: "9",
                    fill: "#999",
                    children: Dl($e)
                  })]
                }), l.jsxs("div", {
                  children: [l.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      marginBottom: 4
                    },
                    children: [l.jsx("div", {
                      style: {
                        width: 8,
                        height: 8,
                        borderRadius: 2,
                        background: "#22c55e"
                      }
                    }), l.jsxs("span", {
                      style: {
                        fontSize: 11
                      },
                      children: ["منجز: ", Mt]
                    })]
                  }), l.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 4
                    },
                    children: [l.jsx("div", {
                      style: {
                        width: 8,
                        height: 8,
                        borderRadius: 2,
                        background: "#f0f0f0"
                      }
                    }), l.jsxs("span", {
                      style: {
                        fontSize: 11
                      },
                      children: ["متبقي: ", ft.length - Mt]
                    })]
                  })]
                })]
              })]
            }), l.jsxs("div", {
              style: a.card,
              children: [l.jsx("h3", {
                style: {
                  fontSize: 14,
                  fontWeight: 600,
                  margin: "0 0 12px"
                },
                children: "📈 توزيع الحالات"
              }), [{
                l: "مهام مستعجلة",
                done: We.filter(y => y.status === "مكتمل").length,
                total: We.length,
                c: "#ef4444"
              }, {
                l: "طلبات صيانة",
                done: we.filter(y => y.status === "مكتمل").length,
                total: we.length,
                c: "#f59e0b"
              }, {
                l: "شكاوى عملاء",
                done: nt.filter(y => y.status === "محلول").length,
                total: nt.length,
                c: v.t
              }].map((y, j) => {
                const S = y.total ? Math.round(y.done / y.total * 100) : 0;
                return l.jsxs("div", {
                  style: {
                    marginBottom: 8
                  },
                  children: [l.jsxs("div", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 11,
                      marginBottom: 2
                    },
                    children: [l.jsx("span", {
                      children: y.l
                    }), l.jsxs("span", {
                      style: {
                        fontWeight: 700,
                        color: y.c
                      },
                      children: [y.done, "/", y.total]
                    })]
                  }), l.jsxs("div", {
                    style: {
                      height: 14,
                      background: "#f0f0f0",
                      borderRadius: 7,
                      overflow: "hidden",
                      position: "relative"
                    },
                    children: [l.jsx("div", {
                      style: {
                        height: "100%",
                        borderRadius: 7,
                        width: `${S}%`,
                        background: y.c,
                        transition: "width 0.5s"
                      }
                    }), l.jsxs("span", {
                      style: {
                        position: "absolute",
                        right: 6,
                        top: 0,
                        fontSize: 9,
                        lineHeight: "14px",
                        color: S > 30 ? "#fff" : "#888"
                      },
                      children: [S, "%"]
                    })]
                  })]
                }, j)
              })]
            })]
          }), (Ht || _e) && l.jsxs("div", {
            style: a.card,
            children: [l.jsx("h3", {
              style: {
                fontSize: 14,
                fontWeight: 600,
                margin: "0 0 8px"
              },
              children: "📑 ملخص التقارير المطلوبة"
            }), _e && l.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 8
              },
              children: Object.entries(cd).map(([y, j]) => l.jsxs("div", {
                style: {
                  background: "#fafafa",
                  borderRadius: 8,
                  padding: 10,
                  textAlign: "center"
                },
                children: [l.jsx("p", {
                  style: {
                    fontSize: 13,
                    fontWeight: 700,
                    margin: "0 0 4px"
                  },
                  children: y
                }), l.jsx("p", {
                  style: {
                    fontSize: 20,
                    fontWeight: 800,
                    color: v.t,
                    margin: 0
                  },
                  children: j.count
                }), l.jsx("p", {
                  style: {
                    fontSize: 10,
                    color: "#888",
                    margin: 0
                  },
                  children: "تقرير مطلوب"
                })]
              }, y))
            }), Ht && l.jsxs("p", {
              style: {
                fontSize: 13,
                color: "#555"
              },
              children: ["عدد تقاريرك: ", l.jsx("strong", {
                style: {
                  color: v.t
                },
                children: ((q = cd[O.name]) == null ? void 0 : q.count) || 0
              }), " تقرير"]
            }), l.jsxs("div", {
              style: {
                marginTop: 10,
                paddingTop: 10,
                borderTop: "1px solid #f0f0f0",
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                fontSize: 11,
                color: "#8a9797"
              },
              children: [l.jsxs("span", {
                children: ["🔵 الأسبوعية (السبت): ", rqDue({
                  frequency: "weekly",
                  dueWeekday: RQ_SAT
                }).pretty]
              }), l.jsxs("span", {
                children: ["🟠 الشهرية (يوم ", RQ_MDAY, "): ", rqDue({
                  frequency: "monthly",
                  dueDay: RQ_MDAY
                }).pretty]
              }), l.jsxs("span", {
                children: ["📅 جدول الدوام (يوم ", RQ_SCHED_DAY, "): ", rqDue({
                  frequency: "monthly",
                  dueDay: RQ_SCHED_DAY
                }).pretty]
              })]
            })]
          }), !tr && l.jsxs("div", {
            style: {
              ...a.card,
              marginTop: 12
            },
            children: [l.jsx("h3", {
              style: {
                fontSize: 14,
                fontWeight: 600,
                margin: "0 0 12px"
              },
              children: "👥 نسب إنجاز المرؤوسين"
            }), (_e ? Object.entries(p) : O.region ? [
              [O.region, p[O.region]]
            ] : []).map(([y, j]) => {
              var S;
              return j ? l.jsxs("div", {
                style: {
                  marginBottom: 12
                },
                children: [l.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 6
                  },
                  children: [l.jsx("span", {
                    style: {
                      fontSize: 16
                    },
                    children: j.icon
                  }), l.jsx("span", {
                    style: {
                      fontSize: 13,
                      fontWeight: 700
                    },
                    children: j.name
                  })]
                }), (S = j.branches) == null ? void 0 : S.slice(0, 5).map(_ => {
                  const Z = hn.branch_manager,
                    se = Z.filter(Ct => B[`${_.id}-${Ct.id}`] === U()).length,
                    P = Z.length ? Math.round(se / Z.length * 100) : 0,
                    ee = hn.cashier,
                    de = ee.filter(Ct => B[`${_.id}-${Ct.id}`] === U()).length,
                    Oe = ee.length ? Math.round(de / ee.length * 100) : 0,
                    Fe = Math.round((P + Oe) / 2);
                  return l.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "4px 0",
                      borderBottom: `1px solid ${v.l}15`
                    },
                    children: [l.jsxs("span", {
                      style: {
                        fontSize: 11,
                        width: 90,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      },
                      children: ["🏪 ", _.name]
                    }), l.jsx("div", {
                      style: {
                        flex: 1,
                        height: 8,
                        background: "#f0f0f0",
                        borderRadius: 4,
                        overflow: "hidden"
                      },
                      children: l.jsx("div", {
                        style: {
                          height: "100%",
                          borderRadius: 4,
                          width: `${Fe}%`,
                          background: xe(Fe),
                          transition: "width 0.5s"
                        }
                      })
                    }), l.jsxs("span", {
                      style: {
                        fontSize: 12,
                        fontWeight: 700,
                        color: xe(Fe),
                        width: 36,
                        textAlign: "left"
                      },
                      children: [Fe, "%"]
                    })]
                  }, _.id)
                })]
              }, y) : null
            })]
          }), l.jsxs("div", {
            style: {
              ...a.card,
              marginTop: 12
            },
            children: [l.jsx("h3", {
              style: {
                fontSize: 14,
                fontWeight: 600,
                margin: "0 0 8px"
              },
              children: "⬇️ تصدير سريع"
            }), l.jsxs("div", {
              style: {
                display: "flex",
                gap: 6,
                flexWrap: "wrap"
              },
              children: [l.jsx("button", {
                onClick: () => pt("tasks"),
                style: {
                  ...a.stBtn,
                  fontSize: 11
                },
                children: "📋 مهام اليوم"
              }), l.jsx("button", {
                onClick: () => pt("attendance"),
                style: {
                  ...a.stBtn,
                  fontSize: 11
                },
                children: "📅 الحضور"
              }), l.jsx("button", {
                onClick: () => pt("urgent"),
                style: {
                  ...a.stBtn,
                  fontSize: 11
                },
                children: "⚡ المستعجلة"
              }), l.jsx("button", {
                onClick: () => pt("maintenance"),
                style: {
                  ...a.stBtn,
                  fontSize: 11
                },
                children: "🔧 الصيانة"
              }), l.jsx("button", {
                onClick: () => pt("complaints"),
                style: {
                  ...a.stBtn,
                  fontSize: 11
                },
                children: "⭐ الشكاوى"
              }), l.jsx("button", {
                onClick: () => pt("visits"),
                style: {
                  ...a.stBtn,
                  fontSize: 11
                },
                children: "📍 الزيارات"
              })]
            })]
          })]
        })
      }
      if (z === "tasks") {
        const c = P => {
            const ee = [];
            for (let de = P - 1; de >= 0; de--) {
              const Oe = new Date;
              Oe.setDate(Oe.getDate() - de), ee.push(Oe.toISOString().split("T")[0])
            }
            return ee
          },
          y = c(7),
          j = c(30),
          S = ["أحد", "إثن", "ثلا", "أرب", "خمي", "جمع", "سبت"],
          _ = P => Kr[`${yn}|${O.role}|${P}`] || 0,
          Z = y.length ? Math.round(y.reduce((P, ee) => P + _(ee), 0) / y.length) : 0,
          se = j.length ? Math.round(j.reduce((P, ee) => P + _(ee), 0) / j.length) : 0,
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
          };
        return l.jsxs(l.Fragment, {
          children: [l.jsxs("div", {
            style: {
              background: `linear-gradient(135deg,${v.t} 0%,#5d9a9d 100%)`,
              borderRadius: 16,
              padding: "20px 24px",
              marginBottom: 16,
              color: "#fff",
              position: "relative",
              overflow: "hidden"
            },
            children: [l.jsx("div", {
              style: {
                position: "absolute",
                left: -20,
                top: -20,
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)"
              }
            }), l.jsx("div", {
              style: {
                position: "absolute",
                left: 40,
                bottom: -30,
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)"
              }
            }), l.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
                zIndex: 1
              },
              children: [l.jsxs("div", {
                children: [l.jsx("h1", {
                  style: {
                    fontSize: 22,
                    fontWeight: 800,
                    margin: "0 0 4px"
                  },
                  children: "✅ مهامي"
                }), l.jsxs("p", {
                  style: {
                    fontSize: 12,
                    opacity: .8,
                    margin: 0
                  },
                  children: [qn[O.role], " — ", En(U())]
                })]
              }), l.jsx("div", {
                style: {
                  textAlign: "center"
                },
                children: l.jsxs("svg", {
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
                })
              })]
            })]
          }), l.jsx("div", {
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
          }), l.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 12,
              marginBottom: 16
            },
            children: [l.jsxs("div", {
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
                    fontSize: 13,
                    fontWeight: 700,
                    margin: 0,
                    color: v.d
                  },
                  children: "📊 الأداء الأسبوعي"
                }), l.jsxs("span", {
                  style: {
                    fontSize: 10,
                    color: "#999",
                    background: "#f5f5f5",
                    padding: "2px 8px",
                    borderRadius: 10
                  },
                  children: [Z, "% متوسط"]
                })]
              }), l.jsx("div", {
                style: {
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 4,
                  height: 100
                },
                children: y.map((P, ee) => {
                  const de = _(P),
                    Oe = P === U(),
                    Fe = new Date(P).getDay();
                  return l.jsxs("div", {
                    style: {
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2
                    },
                    children: [l.jsx("span", {
                      style: {
                        fontSize: 9,
                        fontWeight: 700,
                        color: de > 0 ? xe(de) : "#ddd"
                      },
                      children: de || "—"
                    }), l.jsx("div", {
                      style: {
                        width: "100%",
                        borderRadius: "6px 6px 2px 2px",
                        background: Oe ? `linear-gradient(180deg,${xe($e)},${xe($e)}90)` : `${de>0?xe(de):"#f0f0f0"}${de>0?"40":""}`,
                        height: `${Math.max(de,4)}%`,
                        minHeight: 4,
                        maxHeight: 85,
                        transition: "height 0.5s",
                        border: Oe ? `2px solid ${xe($e)}` : "none"
                      }
                    }), l.jsx("span", {
                      style: {
                        fontSize: 9,
                        color: Oe ? v.t : "#aaa",
                        fontWeight: Oe ? 800 : 400
                      },
                      children: S[Fe]
                    })]
                  }, P)
                })
              })]
            }), l.jsxs("div", {
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
                  marginBottom: 10
                },
                children: [l.jsx("h3", {
                  style: {
                    fontSize: 13,
                    fontWeight: 700,
                    margin: 0,
                    color: v.d
                  },
                  children: "🗓️ السجل الشهري"
                }), l.jsxs("span", {
                  style: {
                    fontSize: 10,
                    color: "#999",
                    background: "#f5f5f5",
                    padding: "2px 8px",
                    borderRadius: 10
                  },
                  children: [se, "% متوسط"]
                })]
              }), l.jsxs("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(7,1fr)",
                  gap: 3
                },
                children: [S.map(P => l.jsx("div", {
                  style: {
                    textAlign: "center",
                    fontSize: 8,
                    color: "#bbb",
                    fontWeight: 700,
                    paddingBottom: 2
                  },
                  children: P
                }, P)), j.map(P => {
                  const ee = _(P),
                    de = P === U(),
                    Oe = ee >= 90 ? "#22c55e" : ee >= 75 ? v.t : ee >= 60 ? "#f59e0b" : ee > 0 ? "#ef4444" : "#f5f5f5";
                  return l.jsx("div", {
                    style: {
                      aspectRatio: "1",
                      borderRadius: 5,
                      background: Oe,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 8,
                      color: ee > 0 ? "#fff" : "#ddd",
                      fontWeight: 700,
                      border: de ? `2px solid ${v.d}` : "1px solid transparent",
                      cursor: "default",
                      transition: "all 0.2s"
                    },
                    title: `${En(P)}: ${ee}%`,
                    children: new Date(P).getDate()
                  }, P)
                })]
              }), l.jsx("div", {
                style: {
                  display: "flex",
                  gap: 6,
                  marginTop: 8,
                  justifyContent: "center"
                },
                children: [
                  ["🟢", 90, "#22c55e"],
                  ["🔵", 75, v.t],
                  ["🟡", 60, "#f59e0b"],
                  ["🔴", 0, "#ef4444"]
                ].map(([P, ee, de]) => l.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    fontSize: 9,
                    color: "#888"
                  },
                  children: [l.jsx("div", {
                    style: {
                      width: 10,
                      height: 10,
                      borderRadius: 3,
                      background: de
                    }
                  }), ee > 0 ? `${ee}%+` : "<60%"]
                }, ee))
              })]
            })]
          }), TXe("div", {
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
          })]
        })
      }
      if (z === "reports_req") {
        const rqViewRole = _e && rqRoleView ? rqRoleView : O.role,
          rqDefaults = () => Object.entries(df).flatMap(([rqRoleKey, rqGroup]) => [...(rqGroup.weekly || []).map(rqItem => rqNorm({
            ...rqItem,
            role: rqRoleKey,
            frequency: "weekly"
          })), ...(rqGroup.monthly || []).map(rqItem => rqNorm({
            ...rqItem,
            role: rqRoleKey,
            frequency: "monthly"
          }))]),
          rqBase = rqRows || rqDefaults(),
          rqCanEdit = !!(_e && rqOnline && rqRows),
          rqToggle = (rqId, rqFreq, rqCycle) => kt(rqPrev => {
            const rqKey = `${rqId}-${rqFreq}`,
              rqNextMap = {
                ...rqPrev
              };
            return rqNextMap[rqKey] === rqCycle ? delete rqNextMap[rqKey] : rqNextMap[rqKey] = rqCycle, rqNextMap
          }),
          rqList = rqBase.filter(rqItem => rqItem.role === rqViewRole && rqItem.active).map(rqItem => {
            const rqInfo = rqDue(rqItem),
              rqDoneFlag = Lt[`${rqItem.id}-${rqItem.frequency}`] === rqInfo.iso;
            return {
              ...rqItem,
              due: rqInfo,
              done: rqDoneFlag,
              st: rqState(rqInfo, rqDoneFlag)
            }
          }).sort((rqA, rqB) => rqA.due.days - rqB.due.days || rqA.sortOrder - rqB.sortOrder),
          rqTotal = rqList.length,
          rqDoneN = rqList.filter(rqItem => rqItem.done).length,
          rqTodayN = rqList.filter(rqItem => !rqItem.done && rqItem.due.days === 0).length,
          rqSoonN = rqList.filter(rqItem => !rqItem.done && rqItem.due.days > 0 && rqItem.due.days <= 3).length,
          rqPct = rqTotal ? Math.round(rqDoneN / rqTotal * 100) : 0,
          rqNextItem = rqList.find(rqItem => !rqItem.done) || null,
          rqPass = rqItem => rqFilter === "weekly" ? rqItem.frequency === "weekly" : rqFilter === "monthly" ? rqItem.frequency === "monthly" : rqFilter === "soon" ? !rqItem.done && rqItem.due.days <= 3 : rqFilter === "pending" ? !rqItem.done : !0,
          rqShown = rqList.filter(rqPass),
          rqWeekly = rqShown.filter(rqItem => rqItem.frequency === "weekly"),
          rqMonthly = rqShown.filter(rqItem => rqItem.frequency === "monthly"),
          rqChipStyle = (rqActive, rqColor) => ({
            padding: "6px 12px",
            borderRadius: 20,
            border: `1px solid ${rqActive?rqColor:"#e8eded"}`,
            background: rqActive ? rqColor : "#fff",
            color: rqActive ? "#fff" : "#666",
            cursor: "pointer",
            fontSize: 11.5,
            fontWeight: 600,
            whiteSpace: "nowrap"
          }),
          rqIconBtn = {
            border: "1px solid #e8eded",
            background: "#fff",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 12,
            padding: "3px 7px",
            lineHeight: 1.6,
            flexShrink: 0
          },
          rqKpiCard = (rqLabel, rqValue, rqColor, rqKey) => l.jsxs("div", {
            style: {
              ...a.kpi,
              cursor: "default",
              borderColor: rqColor + "40"
            },
            children: [l.jsx("div", {
              style: {
                fontSize: 20,
                fontWeight: 800,
                color: rqColor
              },
              children: rqValue
            }), l.jsx("div", {
              style: {
                fontSize: 11,
                color: "#8a9797",
                marginTop: 2
              },
              children: rqLabel
            })]
          }, rqKey),
          rqRowEl = rqItem => l.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 12px",
              background: rqItem.done ? "#f0faf0" : "#fff",
              border: `1px solid ${rqItem.done?"#22c55e30":rqItem.st.k==="today"?"#ef444440":"#e8eded"}`,
              borderRight: `4px solid ${rqItem.st.c}`,
              borderRadius: 8
            },
            children: [l.jsx("button", {
              onClick: () => rqToggle(rqItem.id, rqItem.frequency, rqItem.due.iso),
              title: rqItem.done ? "إلغاء تأكيد التسليم" : "تأكيد التسليم لهذه الدورة",
              style: {
                ...a.tc,
                ...rqItem.done ? a.tcd : {},
                cursor: "pointer",
                padding: 0
              },
              children: rqItem.done ? "✓" : ""
            }), l.jsx("span", {
              style: {
                fontSize: 18,
                flexShrink: 0
              },
              children: rqItem.icon
            }), l.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [l.jsx("div", {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: v.d,
                  ...rqItem.done ? {
                    textDecoration: "line-through",
                    opacity: .55
                  } : {}
                },
                children: rqItem.title
              }), l.jsxs("div", {
                style: {
                  fontSize: 10.5,
                  color: "#8a9797",
                  marginTop: 3,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8
                },
                children: [l.jsxs("span", {
                  children: ["🗓️ ", rqItem.due.rule]
                }), l.jsxs("span", {
                  children: ["📌 الموعد القادم: ", rqItem.due.pretty]
                }), rqItem.notes ? l.jsxs("span", {
                  children: ["📝 ", rqItem.notes]
                }) : null]
              })]
            }), l.jsx("span", {
              style: {
                ...a.bdg,
                background: rqItem.st.c + "1f",
                color: rqItem.st.c,
                whiteSpace: "nowrap",
                flexShrink: 0
              },
              children: rqItem.st.t
            }), ...rqCanEdit ? [l.jsx("button", {
              onClick: () => {
                rqSetMsg(""), rqSetDraft({
                  mode: "edit",
                  report: rqItem
                }), pe("rq_form")
              },
              style: rqIconBtn,
              title: "تعديل التقرير",
              children: "✏️"
            }), l.jsx("button", {
              onClick: () => {
                rqSetMsg(""), rqSetDraft({
                  mode: "delete",
                  report: rqItem
                }), pe("rq_delete")
              },
              style: {
                ...rqIconBtn,
                color: "#ef4444"
              },
              title: "حذف التقرير",
              children: "🗑"
            })] : []]
          }, `${rqItem.id}-${rqItem.frequency}`),
          rqSection = (rqTitle, rqSub, rqColor, rqItems) => rqItems.length === 0 ? null : l.jsxs("div", {
            style: {
              marginBottom: 16
            },
            children: [l.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "baseline",
                gap: 8,
                margin: "0 0 8px",
                flexWrap: "wrap"
              },
              children: [l.jsx("h3", {
                style: {
                  fontSize: 15,
                  fontWeight: 700,
                  margin: 0,
                  color: rqColor
                },
                children: rqTitle
              }), l.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#8a9797"
                },
                children: rqSub
              }), l.jsx("span", {
                style: {
                  ...a.bdg,
                  background: rqColor + "1f",
                  color: rqColor
                },
                children: rqCountTxt(rqItems.length)
              })]
            }), l.jsx("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 5
              },
              children: rqItems.map(rqRowEl)
            })]
          });
        return l.jsxs(l.Fragment, {
          children: [l.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 8,
              flexWrap: "wrap"
            },
            children: [l.jsxs("div", {
              children: [l.jsx("h1", {
                style: a.pt,
                children: "📑 التقارير المطلوبة"
              }), l.jsx("p", {
                style: a.ps,
                children: "التقارير الأسبوعية تُسلَّم كل يوم سبت، والشهرية يوم 5 من كل شهر، وجدول الدوام يوم 20 من كل شهر"
              })]
            }), rqCanEdit && l.jsx("button", {
              style: a.addBtn,
              onClick: () => {
                rqSetMsg(""), rqSetDraft({
                  mode: "add",
                  report: {
                    role: rqViewRole
                  }
                }), pe("rq_form")
              },
              children: "+ تقرير جديد"
            })]
          }), l.jsxs("div", {
            style: {
              ...a.card,
              background: `${v.t}12`,
              borderColor: `${v.t}40`,
              marginBottom: 12,
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              fontSize: 11.5,
              color: v.d
            },
            children: [l.jsx("span", {
              children: "🔵 أسبوعي — كل يوم سبت"
            }), l.jsxs("span", {
              children: ["🟠 شهري — يوم ", RQ_MDAY, " من كل شهر"]
            }), l.jsxs("span", {
              children: ["📅 استثناء: جدول الدوام — يوم ", RQ_SCHED_DAY, " من كل شهر"]
            })]
          }), _e && !rqOnline && l.jsx("div", {
            style: {
              background: "#f59e0b15",
              color: "#b45309",
              padding: "9px 12px",
              borderRadius: 8,
              fontSize: 11.5,
              marginBottom: 12,
              fontWeight: 600
            },
            children: "⚠️ تعذّر الاتصال بخادم كتالوج التقارير — يتم العرض من الإعدادات الافتراضية، وخيارات التعديل والإضافة معطّلة مؤقتاً."
          }), rqMsg && l.jsx("div", {
            style: {
              background: "#ef444415",
              color: "#ef4444",
              padding: "9px 12px",
              borderRadius: 8,
              fontSize: 11.5,
              marginBottom: 12,
              fontWeight: 600
            },
            children: rqMsg
          }), l.jsxs("div", {
            style: a.kpig,
            children: [rqKpiCard("إجمالي التقارير", rqTotal, v.t, "k1"), rqKpiCard("مستحق اليوم", rqTodayN, "#ef4444", "k2"), rqKpiCard("خلال 3 أيام", rqSoonN, "#f59e0b", "k3"), rqKpiCard("مُسلَّم لهذه الدورة", `${rqDoneN}/${rqTotal}`, "#22c55e", "k4")]
          }), l.jsxs("div", {
            style: {
              ...a.card,
              marginBottom: 12
            },
            children: [l.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 6,
                color: v.d
              },
              children: [l.jsx("span", {
                children: "نسبة الالتزام بالتسليم"
              }), l.jsxs("span", {
                children: [rqPct, "%"]
              })]
            }), l.jsx("div", {
              style: {
                height: 8,
                background: "#eef3f3",
                borderRadius: 6,
                overflow: "hidden"
              },
              children: l.jsx("div", {
                style: {
                  width: `${rqPct}%`,
                  height: "100%",
                  background: rqPct >= 80 ? "#22c55e" : rqPct >= 50 ? "#f59e0b" : "#ef4444",
                  transition: "width .3s"
                }
              })
            }), rqNextItem && l.jsxs("div", {
              style: {
                fontSize: 11.5,
                color: "#8a9797",
                marginTop: 8
              },
              children: ["⏭️ أقرب تسليم: ", l.jsx("strong", {
                style: {
                  color: v.d
                },
                children: rqNextItem.title
              }), " — ", rqNextItem.due.pretty, " (", rqDaysTxt(rqNextItem.due.days), ")"]
            })]
          }), _e && l.jsxs("div", {
            style: {
              marginBottom: 10
            },
            children: [l.jsx("div", {
              style: {
                fontSize: 11,
                fontWeight: 600,
                color: "#8a9797",
                marginBottom: 5
              },
              children: "عرض وإدارة تقارير المنصب"
            }), l.jsx("div", {
              style: {
                display: "flex",
                gap: 6,
                flexWrap: "wrap"
              },
              children: Object.keys(qn).map(rqRoleKey => l.jsx("button", {
                onClick: () => rqSetRoleView(rqRoleKey),
                style: rqChipStyle(rqViewRole === rqRoleKey, v.t),
                children: qn[rqRoleKey]
              }, rqRoleKey))
            })]
          }), l.jsx("div", {
            style: {
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              marginBottom: 14
            },
            children: [{
              k: "all",
              l: "الكل"
            }, {
              k: "weekly",
              l: "🔵 الأسبوعية"
            }, {
              k: "monthly",
              l: "🟠 الشهرية"
            }, {
              k: "soon",
              l: "⏱️ تُسلَّم قريباً"
            }, {
              k: "pending",
              l: "◻️ غير مُسلَّمة"
            }].map(rqOpt => l.jsx("button", {
              onClick: () => rqSetFilter(rqOpt.k),
              style: rqChipStyle(rqFilter === rqOpt.k, "#64748b"),
              children: rqOpt.l
            }, rqOpt.k))
          }), rqTotal === 0 ? l.jsx("p", {
            style: {
              textAlign: "center",
              color: "#999",
              padding: 30,
              fontSize: 13
            },
            children: "لا توجد تقارير مطلوبة لهذا المنصب"
          }) : rqShown.length === 0 ? l.jsx("p", {
            style: {
              textAlign: "center",
              color: "#999",
              padding: 30,
              fontSize: 13
            },
            children: "لا توجد تقارير مطابقة للتصفية المحددة"
          }) : l.jsxs(l.Fragment, {
            children: [rqSection("🔵 التقارير الأسبوعية", "كل يوم سبت", "#3b82f6", rqWeekly), rqSection("🟠 التقارير الشهرية", `يوم ${RQ_MDAY} من كل شهر — عدا جدول الدوام يوم ${RQ_SCHED_DAY}`, "#f59e0b", rqMonthly)]
          }), _e && l.jsxs("div", {
            style: {
              ...a.card,
              marginTop: 16
            },
            children: [l.jsx("h3", {
              style: {
                fontSize: 14,
                fontWeight: 600,
                margin: "0 0 4px",
                color: v.t
              },
              children: "📊 توزيع التقارير على مدراء المناطق"
            }), l.jsx("p", {
              style: {
                fontSize: 11,
                color: "#8a9797",
                margin: "0 0 10px"
              },
              children: "الرقم بين قوسين هو يوم التسليم — أسبوعي (السبت) وشهري (يوم 5) وجدول الدوام (يوم 20)"
            }), l.jsx("div", {
              style: {
                overflowX: "auto"
              },
              children: l.jsxs("table", {
                style: {
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 12
                },
                children: [l.jsx("thead", {
                  children: l.jsxs("tr", {
                    style: {
                      background: v.t,
                      color: "#fff"
                    },
                    children: [l.jsx("th", {
                      style: a.th,
                      children: "#"
                    }), l.jsx("th", {
                      style: a.th,
                      children: "التقرير"
                    }), l.jsx("th", {
                      style: a.th,
                      children: "التكرار وموعد التسليم"
                    }), l.jsx("th", {
                      style: a.th,
                      children: "محمد علي"
                    }), l.jsx("th", {
                      style: a.th,
                      children: "محمود"
                    }), l.jsx("th", {
                      style: a.th,
                      children: "ناصر"
                    }), l.jsx("th", {
                      style: a.th,
                      children: "مشرف الفرع"
                    })]
                  })
                }), l.jsxs("tbody", {
                  children: [l.jsx("tr", {
                    style: {
                      background: `${v.t}10`
                    },
                    children: l.jsx("td", {
                      colSpan: 7,
                      style: {
                        ...a.td,
                        fontWeight: 700,
                        color: v.t
                      },
                      children: "▌ تقارير الفروع"
                    })
                  }), [
                    ["المبيعات اليومية", "شهري (5) + أسبوعي (السبت)", "", "", "", "✅"],
                    ["مبيعات الأصناف", "شهري (5)", "", "", "", "✅"],
                    ["الهدر", "أسبوعي (السبت)", "", "", "", "✅"],
                    ["درجات الحرارة", "أسبوعي (السبت)", "", "", "", "✅"]
                  ].map(([rqT, rqFq, rqC1, rqC2, rqC3, rqC4], rqIdx) => l.jsxs("tr", {
                    style: {
                      borderBottom: "1px solid #f0f0f0"
                    },
                    children: [l.jsx("td", {
                      style: a.td,
                      children: rqIdx + 1
                    }), l.jsx("td", {
                      style: a.td,
                      children: rqT
                    }), l.jsx("td", {
                      style: a.td,
                      children: rqFq
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC1
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC2
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC3
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC4
                    })]
                  }, rqIdx)), l.jsx("tr", {
                    style: {
                      background: `${v.p}30`
                    },
                    children: l.jsx("td", {
                      colSpan: 7,
                      style: {
                        ...a.td,
                        fontWeight: 700,
                        color: v.d
                      },
                      children: "▌ تقارير مدير المنطقة"
                    })
                  }), [
                    ["المبيعات لكامل المنطقة", "شهري (5)", "✅", "✅", "✅", ""],
                    ["الأصناف لكامل المنطقة", "شهري (5)", "✅", "✅", "✅", ""],
                    ["تقييم المشرف", "شهري (5)", "✅", "✅", "✅", ""],
                    ["تقييم الكاشير", "شهري (5)", "✅", "✅", "✅", ""],
                    ["التحديات والاقتراحات", "شهري (5)", "✅", "✅", "✅", ""],
                    ["إنتاجية العمالة", "شهري (5)", "✅", "✅", "✅", ""],
                    ["التعويضات", "شهري (5) + أسبوعي (السبت)", "✅", "✅", "✅", ""],
                    ["الزيارات والتقييم", "شهري (5) + أسبوعي (السبت)", "✅", "✅", "✅", ""],
                    ["جدول الدوام", "شهري (20)", "✅", "✅", "✅", ""],
                    ["الطلبات الملغية", "شهري (5) + أسبوعي (السبت)", "✅", "✅", "✅", ""]
                  ].map(([rqT, rqFq, rqC1, rqC2, rqC3, rqC4], rqIdx) => l.jsxs("tr", {
                    style: {
                      borderBottom: "1px solid #f0f0f0"
                    },
                    children: [l.jsx("td", {
                      style: a.td,
                      children: rqIdx + 5
                    }), l.jsx("td", {
                      style: a.td,
                      children: rqT
                    }), l.jsx("td", {
                      style: a.td,
                      children: rqFq
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC1
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC2
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC3
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC4
                    })]
                  }, rqIdx)), l.jsx("tr", {
                    style: {
                      background: `${v.t}10`
                    },
                    children: l.jsx("td", {
                      colSpan: 7,
                      style: {
                        ...a.td,
                        fontWeight: 700,
                        color: v.t
                      },
                      children: "▌ تقارير الشركة"
                    })
                  }), [
                    ["تقرير الجوجل ماب", "شهري (5) + أسبوعي (السبت)", "", "", "", ""],
                    ["تقرير المبيعات", "شهري (5) + أسبوعي (السبت)", "", "", "", ""],
                    ["تقرير الأصناف", "شهري (5)", "✅", "", "", ""],
                    ["تقرير تطبيق طابور", "شهري (5) + أسبوعي (السبت)", "✅", "", "", ""],
                    ["متابعة النظافة والجودة", "شهري (5) + أسبوعي (السبت)", "", "", "", ""],
                    ["تقرير كيتا وهنقر", "شهري (5) + أسبوعي (السبت)", "", "✅", "", ""],
                    ["تقرير اليوزر", "شهري (5) + أسبوعي (السبت)", "", "", "✅", ""]
                  ].map(([rqT, rqFq, rqC1, rqC2, rqC3, rqC4], rqIdx) => l.jsxs("tr", {
                    style: {
                      borderBottom: "1px solid #f0f0f0"
                    },
                    children: [l.jsx("td", {
                      style: a.td,
                      children: rqIdx + 15
                    }), l.jsx("td", {
                      style: a.td,
                      children: rqT
                    }), l.jsx("td", {
                      style: a.td,
                      children: rqFq
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC1
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC2
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC3
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center"
                      },
                      children: rqC4
                    })]
                  }, rqIdx))]
                })]
              })
            })]
          }), Ie === "rq_form" && rqDraft && l.jsx(mn, {
            close: () => {
              pe(null), rqSetDraft(null)
            },
            title: rqDraft.mode === "edit" ? "تعديل تقرير مطلوب" : "تقرير مطلوب جديد",
            children: l.jsx(vf, {
              initial: rqDraft.report,
              busy: rqBusy,
              error: rqMsg,
              onSubmit: rqValues => {
                rqDraft.mode === "edit" && rqDraft.report.dbId != null ? rqMutate(`/api/required-reports/${rqDraft.report.dbId}`, "PUT", rqValues) : rqMutate("/api/required-reports", "POST", rqValues)
              }
            })
          }), Ie === "rq_delete" && rqDraft && l.jsx(mn, {
            close: () => {
              pe(null), rqSetDraft(null)
            },
            title: "حذف تقرير مطلوب",
            children: l.jsxs("div", {
              children: [l.jsxs("p", {
                style: {
                  fontSize: 13,
                  color: v.d,
                  margin: "0 0 6px"
                },
                children: ["سيتم حذف التقرير ", l.jsxs("strong", {
                  children: ["«", rqDraft.report.title, "»"]
                }), " نهائياً من كتالوج التقارير المطلوبة."]
              }), l.jsx("p", {
                style: {
                  fontSize: 11.5,
                  color: "#8a9797",
                  margin: "0 0 12px"
                },
                children: "لن يظهر بعد ذلك لأي مستخدم في هذا المنصب."
              }), rqMsg && l.jsx("div", {
                style: {
                  background: "#ef444415",
                  color: "#ef4444",
                  padding: "8px 12px",
                  borderRadius: 8,
                  fontSize: 11.5,
                  marginBottom: 10,
                  fontWeight: 600
                },
                children: rqMsg
              }), l.jsxs("div", {
                style: {
                  display: "flex",
                  gap: 8
                },
                children: [l.jsx("button", {
                  disabled: rqBusy,
                  onClick: () => rqMutate(`/api/required-reports/${rqDraft.report.dbId}`, "DELETE"),
                  style: {
                    ...a.submitBtn,
                    background: "#ef4444",
                    opacity: rqBusy ? .6 : 1
                  },
                  children: rqBusy ? "جارٍ الحذف…" : "تأكيد الحذف"
                }), l.jsx("button", {
                  onClick: () => {
                    pe(null), rqSetDraft(null)
                  },
                  style: {
                    ...a.submitBtn,
                    background: "#eef3f3",
                    color: v.d
                  },
                  children: "إلغاء"
                })]
              })]
            })
          })]
        })
      }
      if (z === "urgent") return l.jsxs(l.Fragment, {
        children: [l.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
            flexWrap: "wrap",
            gap: 8
          },
          children: [l.jsx("h1", {
            style: a.pt,
            children: "⚡ المهام المستعجلة"
          }), l.jsx("button", {
            style: a.addBtn,
            onClick: () => pe("urgent"),
            children: "+ مهمة جديدة"
          })]
        }), We.length === 0 ? l.jsx("p", {
          style: {
            textAlign: "center",
            color: "#999",
            padding: 30
          },
          children: "لا توجد مهام مستعجلة"
        }) : l.jsx("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 6
          },
          children: We.map(c => l.jsxs("div", {
            style: {
              ...a.card,
              borderRight: `4px solid ${c.priority==="عالي"?"#ef4444":"#f59e0b"}`
            },
            children: [l.jsxs("div", {
              style: {
                display: "flex",
                gap: 4,
                marginBottom: 4
              },
              children: [l.jsx("span", {
                style: {
                  ...a.bdg,
                  background: c.priority === "عالي" ? "#ef444415" : "#f59e0b15",
                  color: c.priority === "عالي" ? "#ef4444" : "#f59e0b"
                },
                children: c.priority
              }), l.jsx("span", {
                style: {
                  ...a.bdg,
                  background: c.status === "مكتمل" ? "#22c55e15" : `${v.t}15`,
                  color: c.status === "مكتمل" ? "#22c55e" : v.t
                },
                children: c.status
              })]
            }), l.jsx("h3", {
              style: {
                fontSize: 14,
                fontWeight: 600,
                margin: "0 0 4px"
              },
              children: c.title
            }), l.jsxs("p", {
              style: {
                fontSize: 10,
                color: "#aaa"
              },
              children: ["📅 ", En(c.date), " • ", c.by]
            }), c.status !== "مكتمل" && l.jsxs("div", {
              style: {
                display: "flex",
                gap: 4,
                marginTop: 6
              },
              children: [l.jsx("button", {
                onClick: () => ke(y => y.map(j => j.id === c.id ? {
                  ...j,
                  status: "قيد التنفيذ"
                } : j)),
                style: {
                  ...a.stBtn,
                  color: "#f59e0b"
                },
                children: "⏳ قيد التنفيذ"
              }), l.jsx("button", {
                onClick: () => ke(y => y.map(j => j.id === c.id ? {
                  ...j,
                  status: "مكتمل"
                } : j)),
                style: {
                  ...a.stBtn,
                  color: "#22c55e"
                },
                children: "✓ إنجاز"
              }), _e && l.jsx("button", {
                onClick: () => ke(y => y.filter(j => j.id !== c.id)),
                style: {
                  ...a.stBtn,
                  color: "#ef4444"
                },
                children: "🗑 حذف"
              })]
            })]
          }, c.id))
        }), Ie === "urgent" && l.jsx(mn, {
          close: () => pe(null),
          title: "مهمة مستعجلة جديدة",
          children: l.jsx(Al, {
            fields: [{
              k: "title",
              l: "العنوان *",
              type: "text"
            }, {
              k: "desc",
              l: "التفاصيل",
              type: "textarea"
            }, {
              k: "priority",
              l: "الأولوية",
              type: "select",
              opts: ["عالي", "متوسط", "منخفض"]
            }, {
              k: "assignee",
              l: "تعيين إلى",
              type: "select",
              opts: ["", ...W.filter(c => c.id !== O.id && c.active !== !1).map(c => `${c.name} — ${qn[c.role]}`)]
            }],
            onSubmit: c => {
              c.title && (ke(y => [{
                id: gn(),
                ...c,
                status: "جديد",
                date: U(),
                by: O.name
              }, ...y]), pe(null))
            }
          })
        })]
      });
      if (z === "tracking") {
        const c = _e ? Object.entries(p) : O.region ? [
          [O.region, p[O.region]]
        ] : [];
        return l.jsxs(l.Fragment, {
          children: [l.jsx("h1", {
            style: a.pt,
            children: "👥 متابعة المرؤوسين"
          }), l.jsx("p", {
            style: a.ps,
            children: "متابعة إنجاز المهام لحظياً"
          }), c.map(([y, j]) => j && l.jsxs("div", {
            style: {
              ...a.card,
              marginBottom: 12
            },
            children: [l.jsxs("h3", {
              style: {
                fontSize: 16,
                fontWeight: 700,
                margin: "0 0 4px"
              },
              children: [j.icon, " ", j.name]
            }), l.jsxs("p", {
              style: {
                fontSize: 12,
                color: v.t,
                margin: "0 0 10px"
              },
              children: ["مدير المنطقة: ", j.manager]
            }), _e && l.jsx(Ts, {
              label: `مهام ${j.manager} (مدير المنطقة)`,
              done: hn.area_manager.filter(S => B[`${y}-${S.id}`] === U()).length,
              total: hn.area_manager.length
            }), j.branches.map(S => l.jsxs("div", {
              style: {
                marginRight: _e ? 10 : 0,
                padding: "4px 0",
                borderBottom: `1px solid ${v.l}20`
              },
              children: [l.jsx(Ts, {
                label: `🏪 ${S.name} — المشرف`,
                done: hn.branch_manager.filter(_ => B[`${S.id}-${_.id}`] === U()).length,
                total: hn.branch_manager.length
              }), l.jsx("div", {
                style: {
                  marginRight: 14
                },
                children: l.jsx(Ts, {
                  label: `${S.name} — الكاشير`,
                  done: hn.cashier.filter(_ => B[`${S.id}-${_.id}`] === U()).length,
                  total: hn.cashier.length
                })
              })]
            }, S.id))]
          }, y))]
        })
      }
      if (z === "haccp") return l.jsxs(l.Fragment, {
        children: [l.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14
          },
          children: [l.jsx("h1", {
            style: a.pt,
            children: "🧪 سلامة الغذاء"
          }), l.jsx("button", {
            style: a.addBtn,
            onClick: () => pe("haccp"),
            children: "+ فحص جديد"
          })]
        }), l.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))",
            gap: 8,
            marginBottom: 14
          },
          children: Oi.map(c => {
            const y = qe.filter(j => j.date === U()).find(j => j[c.id]);
            return l.jsxs("div", {
              style: {
                ...a.card,
                padding: 10,
                textAlign: "center",
                borderTop: `3px solid ${y?"#22c55e":"#ddd"}`
              },
              children: [l.jsx("span", {
                style: {
                  fontSize: 24
                },
                children: c.icon
              }), l.jsx("p", {
                style: {
                  fontSize: 11,
                  fontWeight: 600,
                  margin: "4px 0 2px"
                },
                children: c.title
              }), l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#999"
                },
                children: c.range
              }), l.jsx("p", {
                style: {
                  fontSize: 14,
                  fontWeight: 700,
                  color: y ? "#22c55e" : "#ccc",
                  marginTop: 4
                },
                children: (y == null ? void 0 : y[c.id]) || "—"
              })]
            }, c.id)
          })
        }), Ie === "haccp" && l.jsx(mn, {
          close: () => pe(null),
          title: "فحص HACCP",
          children: l.jsx(ff, {
            onSubmit: c => {
              Nt(y => [{
                id: gn(),
                ...c,
                date: U(),
                time: new Date().toLocaleTimeString("ar-SA", {
                  hour: "2-digit",
                  minute: "2-digit"
                }),
                by: O.name
              }, ...y]), pe(null)
            }
          })
        })]
      });
      if (z === "delivery") {
        const c = J => {
            const G = [],
              ue = new Date;
            ue.setDate(ue.getDate() - J * 7);
            const he = new Date(ue);
            he.setDate(ue.getDate() - ue.getDay());
            for (let $t = 0; $t < 7; $t++) {
              const I = new Date(he);
              I.setDate(he.getDate() + $t), G.push(I.toISOString().split("T")[0])
            }
            return G
          },
          y = c(0),
          j = c(1),
          S = ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
          _ = new Date,
          Z = `${_.getFullYear()}-${String(_.getMonth()+1).padStart(2,"0")}`,
          se = `${_.getMonth()===0?_.getFullYear()-1:_.getFullYear()}-${String(_.getMonth()===0?12:_.getMonth()).padStart(2,"0")}`,
          P = (J, G) => St[`${J}|${G}`] || 0,
          ee = (J, G) => G.reduce((ue, he) => ue + P(J, he), 0),
          de = (J, G) => Object.entries(St).filter(([ue]) => ue.startsWith(`${J}|${G}`)).reduce((ue, [, he]) => ue + he, 0),
          Oe = (J, G) => Object.entries(St).filter(([ue]) => {
            const he = ue.split("|")[1];
            return (he == null ? void 0 : he.startsWith(G)) && parseInt(he == null ? void 0 : he.split("-")[2]) <= 15
          }).reduce((ue, [, he]) => ue + he, 0),
          Fe = un ? ot.filter(J => J.id === O.branch) : ot,
          Ct = un || _e,
          nr = Fe.reduce((J, G) => J + P(G.id, U()), 0),
          Sr = Fe.reduce((J, G) => J + de(G.id, Z), 0);
        return l.jsxs(l.Fragment, {
          children: [l.jsx("h1", {
            style: a.pt,
            children: "💰 المبيعات اليومية"
          }), l.jsxs("p", {
            style: a.ps,
            children: [un ? `إدخال مبيعات ${((Ge=ot.find(J=>J.id===O.branch))==null?void 0:Ge.name)||"فرعك"}` : Ht ? `مبيعات منطقة ${(X=p[O.region])==null?void 0:X.name}` : "مبيعات جميع الفروع", " — الأسبوع: الأحد → السبت"]
          }), l.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: 10,
              marginBottom: 16
            },
            children: [l.jsxs("div", {
              style: {
                ...a.card,
                textAlign: "center",
                borderTop: `3px solid ${v.t}`,
                padding: 12
              },
              children: [l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#888",
                  margin: "0 0 4px"
                },
                children: "💰 مبيعات اليوم"
              }), l.jsx("p", {
                style: {
                  fontSize: 28,
                  fontWeight: 800,
                  color: v.t,
                  margin: 0
                },
                children: nr > 0 ? nr.toLocaleString() : "—"
              }), l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#999",
                  margin: 0
                },
                children: "ريال سعودي"
              })]
            }), l.jsxs("div", {
              style: {
                ...a.card,
                textAlign: "center",
                borderTop: "3px solid #8b5cf6",
                padding: 12
              },
              children: [l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#888",
                  margin: "0 0 4px"
                },
                children: "📅 من بداية الشهر حتى اليوم"
              }), l.jsx("p", {
                style: {
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#8b5cf6",
                  margin: 0
                },
                children: Sr > 0 ? Sr.toLocaleString() : "—"
              }), l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#999",
                  margin: 0
                },
                children: "ريال سعودي"
              })]
            })]
          }), l.jsxs("div", {
            style: {
              ...a.card,
              marginBottom: 14
            },
            children: [l.jsxs("h3", {
              style: {
                fontSize: 14,
                fontWeight: 600,
                margin: "0 0 10px",
                color: v.t
              },
              children: ["📝 ", un ? "سجّل مبيعات فرعك اليوم" : "مبيعات اليوم", " — ", En(U())]
            }), l.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
                gap: 8
              },
              children: Fe.map(J => l.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 10px",
                  background: "#fafafa",
                  borderRadius: 8
                },
                children: [l.jsx("span", {
                  style: {
                    fontSize: 12,
                    fontWeight: 600,
                    width: 90,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: J.name
                }), Ct ? l.jsx("input", {
                  type: "number",
                  value: P(J.id, U()) || "",
                  onChange: G => sn(ue => ({
                    ...ue,
                    [`${J.id}|${U()}`]: Number(G.target.value) || 0
                  })),
                  style: {
                    ...a.fi,
                    width: 100,
                    textAlign: "center",
                    fontWeight: 700,
                    padding: "5px 8px"
                  },
                  placeholder: "المبلغ"
                }) : l.jsx("span", {
                  style: {
                    fontSize: 14,
                    fontWeight: 700,
                    color: v.t
                  },
                  children: P(J.id, U()) > 0 ? P(J.id, U()).toLocaleString() : "—"
                }), l.jsx("span", {
                  style: {
                    fontSize: 10,
                    color: "#999"
                  },
                  children: "ر.س"
                })]
              }, J.id))
            })]
          }), l.jsxs("div", {
            style: {
              ...a.card,
              marginBottom: 14
            },
            children: [l.jsx("h3", {
              style: {
                fontSize: 14,
                fontWeight: 600,
                margin: "0 0 10px"
              },
              children: "📊 مقارنة أسبوعية — هذا الأسبوع vs الماضي"
            }), l.jsx("div", {
              style: {
                overflowX: "auto"
              },
              children: l.jsxs("table", {
                style: {
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 12
                },
                children: [l.jsx("thead", {
                  children: l.jsxs("tr", {
                    style: {
                      background: v.t,
                      color: "#fff"
                    },
                    children: [l.jsx("th", {
                      style: a.th,
                      children: "الفرع"
                    }), S.map(J => l.jsx("th", {
                      style: a.th,
                      children: J
                    }, J)), l.jsx("th", {
                      style: {
                        ...a.th,
                        background: "#0d7377"
                      },
                      children: "المجموع"
                    }), l.jsx("th", {
                      style: {
                        ...a.th,
                        background: "#0d7377"
                      },
                      children: "الماضي"
                    }), l.jsx("th", {
                      style: {
                        ...a.th,
                        background: "#0d7377"
                      },
                      children: "%"
                    })]
                  })
                }), l.jsxs("tbody", {
                  children: [Fe.map(J => {
                    const G = ee(J.id, y),
                      ue = ee(J.id, j),
                      he = ue > 0 ? Math.round((G - ue) / ue * 100) : 0;
                    return l.jsxs("tr", {
                      style: {
                        borderBottom: "1px solid #f0f0f0"
                      },
                      children: [l.jsx("td", {
                        style: {
                          ...a.td,
                          fontWeight: 600,
                          fontSize: 11
                        },
                        children: J.name
                      }), y.map($t => l.jsx("td", {
                        style: {
                          ...a.td,
                          textAlign: "center"
                        },
                        children: Ct ? l.jsx("input", {
                          type: "number",
                          value: P(J.id, $t) || "",
                          onChange: I => sn(je => ({
                            ...je,
                            [`${J.id}|${$t}`]: Number(I.target.value) || 0
                          })),
                          style: {
                            border: "1px solid #eee",
                            borderRadius: 4,
                            padding: "2px 4px",
                            width: 55,
                            textAlign: "center",
                            fontSize: 11
                          }
                        }) : l.jsx("span", {
                          style: {
                            fontSize: 11
                          },
                          children: P(J.id, $t) || "—"
                        })
                      }, $t)), l.jsx("td", {
                        style: {
                          ...a.td,
                          textAlign: "center",
                          fontWeight: 800,
                          color: v.t
                        },
                        children: G > 0 ? G.toLocaleString() : "-"
                      }), l.jsx("td", {
                        style: {
                          ...a.td,
                          textAlign: "center",
                          color: "#888"
                        },
                        children: ue > 0 ? ue.toLocaleString() : "-"
                      }), l.jsx("td", {
                        style: {
                          ...a.td,
                          textAlign: "center",
                          fontWeight: 700,
                          color: he > 0 ? "#22c55e" : he < 0 ? "#ef4444" : "#888"
                        },
                        children: ue > 0 ? (he > 0 ? "+" : "") + he + "%" : "—"
                      })]
                    }, J.id)
                  }), Fe.length > 1 && l.jsxs("tr", {
                    style: {
                      background: `${v.t}10`
                    },
                    children: [l.jsx("td", {
                      style: {
                        ...a.td,
                        fontWeight: 800
                      },
                      children: "الإجمالي"
                    }), y.map(J => l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center",
                        fontWeight: 700
                      },
                      children: Fe.reduce((G, ue) => G + P(ue.id, J), 0) || "—"
                    }, J)), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center",
                        fontWeight: 800,
                        color: v.t
                      },
                      children: Fe.reduce((J, G) => J + ee(G.id, y), 0).toLocaleString()
                    }), l.jsx("td", {
                      style: {
                        ...a.td,
                        textAlign: "center",
                        fontWeight: 700,
                        color: "#888"
                      },
                      children: Fe.reduce((J, G) => J + ee(G.id, j), 0).toLocaleString()
                    }), l.jsx("td", {
                      style: a.td
                    })]
                  })]
                })]
              })
            })]
          }), l.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 12
            },
            children: [l.jsxs("div", {
              style: a.card,
              children: [l.jsx("h3", {
                style: {
                  fontSize: 14,
                  fontWeight: 600,
                  margin: "0 0 10px"
                },
                children: "📅 مقارنة شهرية"
              }), Fe.map(J => {
                const G = de(J.id, Z),
                  ue = de(J.id, se),
                  he = ue > 0 ? Math.round((G - ue) / ue * 100) : 0;
                return l.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "4px 0",
                    borderBottom: `1px solid ${v.l}15`,
                    fontSize: 12
                  },
                  children: [l.jsx("span", {
                    style: {
                      fontWeight: 600
                    },
                    children: J.name
                  }), l.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 10,
                      alignItems: "center"
                    },
                    children: [l.jsx("span", {
                      style: {
                        color: v.t,
                        fontWeight: 700
                      },
                      children: G > 0 ? G.toLocaleString() : "-"
                    }), l.jsx("span", {
                      style: {
                        color: "#ccc"
                      },
                      children: "|"
                    }), l.jsx("span", {
                      style: {
                        color: "#888"
                      },
                      children: ue > 0 ? ue.toLocaleString() : "-"
                    }), l.jsx("span", {
                      style: {
                        fontWeight: 700,
                        fontSize: 11,
                        color: he > 0 ? "#22c55e" : he < 0 ? "#ef4444" : "#888"
                      },
                      children: ue > 0 ? (he > 0 ? "↑" : "↓") + Math.abs(he) + "%" : "—"
                    })]
                  })]
                }, J.id)
              })]
            }), l.jsxs("div", {
              style: a.card,
              children: [l.jsx("h3", {
                style: {
                  fontSize: 14,
                  fontWeight: 600,
                  margin: "0 0 10px"
                },
                children: "📊 أول 15 يوم"
              }), Fe.map(J => {
                const G = Oe(J.id, Z),
                  ue = Oe(J.id, se),
                  he = ue > 0 ? Math.round((G - ue) / ue * 100) : 0;
                return l.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "4px 0",
                    borderBottom: `1px solid ${v.l}15`,
                    fontSize: 12
                  },
                  children: [l.jsx("span", {
                    style: {
                      fontWeight: 600
                    },
                    children: J.name
                  }), l.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 10,
                      alignItems: "center"
                    },
                    children: [l.jsx("span", {
                      style: {
                        color: "#8b5cf6",
                        fontWeight: 700
                      },
                      children: G > 0 ? G.toLocaleString() : "-"
                    }), l.jsx("span", {
                      style: {
                        color: "#ccc"
                      },
                      children: "|"
                    }), l.jsx("span", {
                      style: {
                        color: "#888"
                      },
                      children: ue > 0 ? ue.toLocaleString() : "-"
                    }), l.jsx("span", {
                      style: {
                        fontWeight: 700,
                        fontSize: 11,
                        color: he > 0 ? "#22c55e" : he < 0 ? "#ef4444" : "#888"
                      },
                      children: ue > 0 ? (he > 0 ? "↑" : "↓") + Math.abs(he) + "%" : "—"
                    })]
                  })]
                }, J.id)
              })]
            })]
          }), l.jsx("button", {
            onClick: () => pt("all"),
            style: {
              ...a.addBtn,
              marginTop: 14
            },
            children: "⬇️ تصدير المبيعات Excel"
          })]
        })
      }
      if (z === "customers") return l.jsxs(l.Fragment, {
        children: [l.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14
          },
          children: [l.jsx("h1", {
            style: a.pt,
            children: "⭐ تجربة العميل"
          }), l.jsx("button", {
            style: a.addBtn,
            onClick: () => pe("complaint"),
            children: "+ شكوى"
          })]
        }), l.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(100px,1fr))",
            gap: 8,
            marginBottom: 14
          },
          children: [
            ["مفتوح", nt.filter(c => c.status === "مفتوح").length, "#ef4444"],
            ["قيد المعالجة", nt.filter(c => c.status === "قيد المعالجة").length, v.t],
            ["محلول", nt.filter(c => c.status === "محلول").length, "#22c55e"]
          ].map(([c, y, j], S) => l.jsxs("div", {
            style: {
              ...a.card,
              textAlign: "center",
              borderTop: `3px solid ${j}`,
              padding: 10
            },
            children: [l.jsx("p", {
              style: {
                fontSize: 20,
                fontWeight: 800,
                color: j,
                margin: 0
              },
              children: y
            }), l.jsx("p", {
              style: {
                fontSize: 10,
                color: "#888",
                margin: 0
              },
              children: c
            })]
          }, S))
        }), l.jsx("div", {
          style: a.cg,
          children: nt.map(c => l.jsxs("div", {
            style: a.card,
            children: [l.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 6
              },
              children: [l.jsx("span", {
                style: {
                  ...a.bdg,
                  background: `${v.p}60`
                },
                children: c.type
              }), l.jsx("span", {
                style: {
                  ...a.bdg,
                  background: c.status === "محلول" ? "#22c55e20" : "#ef444420",
                  color: c.status === "محلول" ? "#22c55e" : "#ef4444"
                },
                children: c.status
              })]
            }), l.jsx("p", {
              style: {
                fontSize: 12,
                color: "#555",
                margin: "0 0 4px"
              },
              children: c.desc
            }), l.jsxs("p", {
              style: {
                fontSize: 10,
                color: "#aaa"
              },
              children: ["📅 ", En(c.date)]
            }), (_e || Ht) && l.jsxs("select", {
              value: c.status,
              onChange: y => jt(j => j.map(S => S.id === c.id ? {
                ...S,
                status: y.target.value
              } : S)),
              style: {
                ...a.sel,
                marginTop: 6,
                fontSize: 11
              },
              children: [l.jsx("option", {
                children: "مفتوح"
              }), l.jsx("option", {
                children: "قيد المعالجة"
              }), l.jsx("option", {
                children: "محلول"
              })]
            }), _e && l.jsx("button", {
              onClick: () => jt(y => y.filter(j => j.id !== c.id)),
              style: {
                ...a.stBtn,
                color: "#ef4444",
                marginTop: 4,
                fontSize: 11
              },
              children: "🗑 حذف"
            })]
          }, c.id))
        }), Ie === "complaint" && l.jsx(mn, {
          close: () => pe(null),
          title: "تسجيل شكوى",
          children: l.jsx(Al, {
            fields: [{
              k: "type",
              l: "نوع الشكوى",
              type: "select",
              opts: ["خدمة", "جودة", "نظافة", "وقت انتظار", "طلب خاطئ", "أخرى"]
            }, {
              k: "desc",
              l: "التفاصيل *",
              type: "textarea"
            }],
            onSubmit: c => {
              c.desc && (jt(y => [{
                id: gn(),
                ...c,
                status: "مفتوح",
                date: U(),
                by: O.name
              }, ...y]), pe(null))
            }
          })
        })]
      });
      if (z === "maintenance") return l.jsxs(l.Fragment, {
        children: [l.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14
          },
          children: [l.jsx("h1", {
            style: a.pt,
            children: "🔧 طلبات الصيانة"
          }), l.jsx("button", {
            style: a.addBtn,
            onClick: () => pe("maint"),
            children: "+ طلب جديد"
          })]
        }), l.jsx("div", {
          style: a.cg,
          children: we.map(c => l.jsxs("div", {
            style: a.card,
            children: [l.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 6
              },
              children: [l.jsx("span", {
                style: {
                  ...a.bdg,
                  background: c.priority === "عالي" ? "#ef444420" : "#f59e0b20",
                  color: c.priority === "عالي" ? "#ef4444" : "#f59e0b"
                },
                children: c.priority
              }), l.jsx("span", {
                style: {
                  ...a.bdg,
                  background: c.status === "مكتمل" ? "#22c55e20" : `${v.t}20`,
                  color: c.status === "مكتمل" ? "#22c55e" : v.t
                },
                children: c.status
              })]
            }), l.jsx("h3", {
              style: {
                fontSize: 14,
                fontWeight: 600,
                margin: "0 0 4px"
              },
              children: c.title
            }), c.branch && l.jsxs("p", {
              style: {
                fontSize: 12,
                color: v.t,
                margin: 0
              },
              children: ["📍 ", c.branch]
            }), l.jsxs("p", {
              style: {
                fontSize: 10,
                color: "#aaa",
                marginTop: 4
              },
              children: ["📅 ", En(c.date)]
            }), (_e || Ht) && l.jsxs("select", {
              value: c.status,
              onChange: y => bt(j => j.map(S => S.id === c.id ? {
                ...S,
                status: y.target.value
              } : S)),
              style: {
                ...a.sel,
                marginTop: 6,
                fontSize: 11
              },
              children: [l.jsx("option", {
                children: "جديد"
              }), l.jsx("option", {
                children: "قيد المعالجة"
              }), l.jsx("option", {
                children: "مكتمل"
              })]
            }), _e && l.jsx("button", {
              onClick: () => bt(y => y.filter(j => j.id !== c.id)),
              style: {
                ...a.stBtn,
                color: "#ef4444",
                marginTop: 4,
                fontSize: 11
              },
              children: "🗑 حذف"
            })]
          }, c.id))
        }), Ie === "maint" && l.jsx(mn, {
          close: () => pe(null),
          title: "طلب صيانة",
          children: l.jsx(mf, {
            branches: ot,
            onSubmit: c => {
              c.title && (bt(y => [{
                id: gn(),
                ...c,
                status: "جديد",
                date: U(),
                by: O.name
              }, ...y]), pe(null))
            }
          })
        })]
      });
      if (z === "visits") {
        const c = _e ? et : et.filter(j => j.region === O.region),
          y = c.length ? Math.round(c.reduce((j, S) => j + S.cleanliness + S.operations + S.cashierScore, 0) / c.length) : 0;
        return l.jsxs(l.Fragment, {
          children: [l.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
              flexWrap: "wrap",
              gap: 8
            },
            children: [l.jsxs("div", {
              children: [l.jsx("h1", {
                style: a.pt,
                children: "📍 زيارات الفروع"
              }), l.jsx("p", {
                style: a.ps,
                children: "تقييم شامل: نظافة (30) + سير العمل (30) + كاشير (40) = 100"
              })]
            }), (Ht || _e) && l.jsx("button", {
              style: a.addBtn,
              onClick: () => pe("visit"),
              children: "+ زيارة جديدة"
            })]
          }), l.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
              gap: 8,
              marginBottom: 16
            },
            children: [l.jsxs("div", {
              style: {
                ...a.card,
                textAlign: "center",
                borderTop: "3px solid #8b5cf6",
                padding: 10
              },
              children: [l.jsx("p", {
                style: {
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#8b5cf6",
                  margin: 0
                },
                children: c.length
              }), l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#888",
                  margin: 0
                },
                children: "إجمالي الزيارات"
              })]
            }), l.jsxs("div", {
              style: {
                ...a.card,
                textAlign: "center",
                borderTop: `3px solid ${xe(y)}`,
                padding: 10
              },
              children: [l.jsxs("p", {
                style: {
                  fontSize: 22,
                  fontWeight: 800,
                  color: xe(y),
                  margin: 0
                },
                children: [y, "/100"]
              }), l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#888",
                  margin: 0
                },
                children: "متوسط التقييم"
              })]
            }), l.jsxs("div", {
              style: {
                ...a.card,
                textAlign: "center",
                borderTop: "3px solid #22c55e",
                padding: 10
              },
              children: [l.jsx("p", {
                style: {
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#22c55e",
                  margin: 0
                },
                children: c.filter(j => j.cleanliness + j.operations + j.cashierScore >= 75).length
              }), l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#888",
                  margin: 0
                },
                children: "فروع جيدة+"
              })]
            }), l.jsxs("div", {
              style: {
                ...a.card,
                textAlign: "center",
                borderTop: "3px solid #ef4444",
                padding: 10
              },
              children: [l.jsx("p", {
                style: {
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#ef4444",
                  margin: 0
                },
                children: c.filter(j => j.cleanliness + j.operations + j.cashierScore < 60).length
              }), l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#888",
                  margin: 0
                },
                children: "تحتاج تدخل"
              })]
            })]
          }), l.jsx("button", {
            onClick: () => pt("visits"),
            style: {
              ...a.stBtn,
              marginBottom: 12,
              fontSize: 11
            },
            children: "⬇️ تصدير تقرير الزيارات Excel"
          }), (Ht || _e) && (() => {
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
              var _;
              const S = j.cleanliness + j.operations + j.cashierScore;
              return l.jsxs("div", {
                style: {
                  ...a.card,
                  borderRight: `4px solid ${xe(S)}`
                },
                children: [l.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 8
                  },
                  children: [l.jsxs("div", {
                    children: [l.jsxs("h3", {
                      style: {
                        fontSize: 15,
                        fontWeight: 700,
                        margin: 0
                      },
                      children: ["🏪 ", j.branch, VZINWEEK(j.date) ? l.jsx("span", {
                        style: {
                          fontSize: 9,
                          fontWeight: 700,
                          color: v.t,
                          background: `${v.t}1a`,
                          padding: "3px 9px",
                          borderRadius: 12,
                          marginRight: 7,
                          verticalAlign: "middle",
                          whiteSpace: "nowrap"
                        },
                        children: "📅 هذا الأسبوع"
                      }) : null]
                    }), l.jsxs("p", {
                      style: {
                        fontSize: 11,
                        color: "#888",
                        margin: "2px 0"
                      },
                      children: ["📅 ", En(j.date), " ", j.startTime ? `• ⏰ ${j.startTime}${j.endTime?` - ${j.endTime}`:""}` : "", " ", j.visitType ? `• ${j.visitType}` : ""]
                    }), j.supervisor && l.jsxs("p", {
                      style: {
                        fontSize: 11,
                        color: v.t,
                        margin: 0
                      },
                      children: ["👔 المشرف: ", j.supervisor, " ", j.employeeCount ? `• 👥 ${j.employeeCount} موظف` : ""]
                    })]
                  }), l.jsxs("div", {
                    style: {
                      textAlign: "center",
                      padding: "6px 14px",
                      borderRadius: 10,
                      background: `${xe(S)}15`
                    },
                    children: [l.jsx("span", {
                      style: {
                        fontSize: 24,
                        fontWeight: 800,
                        color: xe(S),
                        display: "block"
                      },
                      children: S
                    }), l.jsx("span", {
                      style: {
                        fontSize: 10,
                        fontWeight: 600,
                        color: xe(S)
                      },
                      children: Dl(S)
                    })]
                  })]
                }), [
                  ["🧹 النظافة", j.cleanliness, 30],
                  ["⚡ سير العمل", j.operations, 30],
                  ["💳 الكاشير", j.cashierScore, 40]
                ].map(([Z, se, P]) => {
                  const ee = Math.round(se / P * 100);
                  return l.jsxs("div", {
                    style: {
                      marginBottom: 9
                    },
                    children: [l.jsxs("div", {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 11,
                        marginBottom: 2
                      },
                      children: [l.jsx("span", {
                        children: Z
                      }), l.jsxs("span", {
                        style: {
                          fontWeight: 700,
                          color: xe(ee)
                        },
                        children: [se, "/", P]
                      })]
                    }), l.jsx("div", {
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
                          borderRadius: 8,
                          width: `${ee}%`,
                          background: xe(ee),
                          transition: "width 0.4s"
                        }
                      })
                    })]
                  }, Z)
                }), ((_ = j.corrections) == null ? void 0 : _.length) > 0 && l.jsxs("div", {
                  style: {
                    marginTop: 8,
                    padding: "6px 10px",
                    background: "#fef2f2",
                    borderRadius: 6,
                    borderRight: "3px solid #ef4444"
                  },
                  children: [l.jsx("p", {
                    style: {
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#ef4444",
                      margin: "0 0 4px"
                    },
                    children: "🔧 إجراءات تصحيحية:"
                  }), j.corrections.map((Z, se) => l.jsxs("p", {
                    style: {
                      fontSize: 11,
                      color: "#555",
                      margin: "2px 0"
                    },
                    children: ["• ", Z.issue, " → ", Z.action]
                  }, se))]
                }), j.sendWarning && l.jsxs("div", {
                  style: {
                    marginTop: 6,
                    padding: "8px 12px",
                    background: "#fef2f2",
                    borderRadius: 8,
                    border: "1px solid #ef444430"
                  },
                  children: [l.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: 4
                    },
                    children: [l.jsx("span", {
                      style: {
                        fontSize: 16
                      },
                      children: "⚠️"
                    }), l.jsx("span", {
                      style: {
                        fontSize: 12,
                        fontWeight: 800,
                        color: "#ef4444"
                      },
                      children: j.warningType || "إنذار"
                    }), l.jsxs("span", {
                      style: {
                        fontSize: 10,
                        padding: "1px 6px",
                        background: "#ef444415",
                        borderRadius: 4,
                        color: "#ef4444"
                      },
                      children: ["موجه لـ ", j.supervisor]
                    })]
                  }), l.jsx("p", {
                    style: {
                      fontSize: 12,
                      color: "#555",
                      margin: 0
                    },
                    children: j.warningText
                  })]
                }), _e && l.jsx("button", {
                  onClick: () => ct(Z => Z.filter(se => se.id !== j.id)),
                  style: {
                    ...a.stBtn,
                    color: "#ef4444",
                    marginTop: 6,
                    fontSize: 11
                  },
                  children: "🗑 حذف"
                })]
              }, j.id)
            })
          }), Ie === "visit" && l.jsx(mn, {
            close: () => pe(null),
            title: "📍 تقرير زيارة ميدانية جديدة",
            children: l.jsx(gf, {
              branches: ot,
              userName: O.name,
              onSubmit: j => {
                ct(S => [{
                  id: gn(),
                  ...j,
                  region: O.region || ""
                }, ...S]), pe(null)
              }
            })
          })]
        })
      }
      if (z === "attendance") {
        const c = Qr || (un ? O.branch : (be = ot[0]) == null ? void 0 : be.id),
          y = k[c] || [],
          j = ["كاشير", "شيف", "مساعد شيف", "جريل", "لف سندوش", "تحضير", "تسليم", "نظافة"],
          S = un || _e,
          _ = Rn === "ar",
          Z = new Date,
          se = Z.getDate() >= 20 ? new Date(Z.getFullYear(), Z.getMonth(), 20) : new Date(Z.getFullYear(), Z.getMonth() - 1, 20),
          P = new Date(se);
        P.setMonth(P.getMonth() + 1), P.setDate(19);
        const ee = [];
        for (let I = new Date(se); I <= P; I.setDate(I.getDate() + 1)) ee.push(new Date(I).toISOString().split("T")[0]);
        const de = `${se.getDate()}/${se.getMonth()+1} → ${P.getDate()}/${P.getMonth()+1}`,
          Oe = ["أحد", "إثن", "ثلا", "أرب", "خمي", "جمع", "سبت"],
          Fe = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          Ct = (I, je) => ne[`${c}|${I}|${je}`] || "",
          nr = (I, je) => ne[`${c}|${I}|${je}|ot`] || 0,
          Sr = (I, je) => ne[`${c}|${I}|${je}|pen`] || 0,
          J = I => {
            let je = 0,
              fe = 0,
              Ue = 0,
              Re = 0,
              st = 0;
            return ee.forEach(Ze => {
              const Jt = Ct(I.id, Ze);
              Jt === "حاضر" && je++, Jt === "غائب" && fe++, Jt === "إجازة" && Ue++, Re += nr(I.id, Ze), st += Sr(I.id, Ze)
            }), {
              p2: je,
              a2: fe,
              lv: Ue,
              ot2: Re,
              pn: st
            }
          },
          G = y.filter(I => Ct(I.id, U()) === "حاضر").length,
          ue = y.filter(I => Ct(I.id, U()) === "غائب").length,
          he = {
            حاضر: "#22c55e",
            غائب: "#ef4444",
            إجازة: "#f59e0b",
            "خارج النطاق": "#dc2626"
          },
          $t = {
            حاضر: "✓",
            غائب: "✗",
            إجازة: "⊘",
            "خارج النطاق": "⊘"
          };
        return _e && !Qr ? l.jsxs(l.Fragment, {
          children: [l.jsx("div", {
            style: {
              background: `linear-gradient(135deg,${v.t},#4d8a8d,#5d9a9d)`,
              borderRadius: 18,
              padding: "20px 24px",
              marginBottom: 16,
              color: "#fff",
              boxShadow: `0 4px 20px ${v.t}30`
            },
            children: l.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [l.jsxs("div", {
                children: [l.jsx("h1", {
                  style: {
                    fontSize: 22,
                    fontWeight: 800,
                    margin: "0 0 6px",
                    letterSpacing: "0.3px"
                  },
                  children: _ ? "📅 متابعة الحضور — جميع الفروع" : "📅 Attendance — All Branches"
                }), l.jsxs("p", {
                  style: {
                    fontSize: 12,
                    opacity: .85,
                    margin: 0
                  },
                  children: [_ ? "الدورة" : "Cycle", ": ", de]
                })]
              }), l.jsx("button", {
                onClick: () => mr(Rn === "ar" ? "en" : "ar"),
                style: {
                  padding: "4px 10px",
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 600
                },
                children: Rn === "ar" ? "EN" : "عربي"
              })]
            })
          }), Object.entries(p).map(([I, je]) => l.jsxs("div", {
            style: {
              background: "#fff",
              borderRadius: 14,
              border: `1px solid ${v.l}30`,
              marginBottom: 14,
              overflow: "hidden"
            },
            children: [l.jsx("div", {
              style: {
                padding: "10px 16px",
                background: `${v.t}08`,
                borderBottom: `1px solid ${v.l}20`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: l.jsxs("div", {
                children: [l.jsxs("h3", {
                  style: {
                    fontSize: 15,
                    fontWeight: 700,
                    margin: 0
                  },
                  children: [je.icon, " ", je.name]
                }), l.jsxs("p", {
                  style: {
                    fontSize: 11,
                    color: v.t,
                    margin: 0
                  },
                  children: [_ ? "مدير المنطقة" : "AM", ": ", je.manager]
                })]
              })
            }), l.jsx("div", {
              style: {
                padding: 12
              },
              children: l.jsx("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
                  gap: 8
                },
                children: je.branches.map(fe => {
                  const Ue = k[fe.id] || [],
                    Re = Ue.filter(rr => ne[`${fe.id}|${rr.id}|${U()}`] === "حاضر").length,
                    st = Ue.filter(rr => ne[`${fe.id}|${rr.id}|${U()}`] === "غائب").length,
                    Ze = Ue.length,
                    Jt = Ze ? Math.round(Re / Ze * 100) : 0;
                  return l.jsxs("button", {
                    onClick: () => $n(fe.id),
                    style: {
                      background: "#fafafa",
                      borderRadius: 10,
                      padding: 12,
                      border: `1px solid ${v.l}20`,
                      cursor: "pointer",
                      textAlign: "right",
                      width: "100%",
                      transition: "all 0.2s"
                    },
                    children: [l.jsxs("div", {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6
                      },
                      children: [l.jsxs("span", {
                        style: {
                          fontSize: 13,
                          fontWeight: 700
                        },
                        children: ["🏪 ", fe.name]
                      }), l.jsxs("span", {
                        style: {
                          fontSize: 16,
                          fontWeight: 800,
                          color: xe(Jt)
                        },
                        children: [Jt, "%"]
                      })]
                    }), l.jsx("div", {
                      style: {
                        height: 5,
                        background: "#eee",
                        borderRadius: 3,
                        overflow: "hidden",
                        marginBottom: 6
                      },
                      children: l.jsx("div", {
                        style: {
                          height: "100%",
                          borderRadius: 3,
                          width: `${Jt}%`,
                          background: xe(Jt),
                          transition: "width 0.4s"
                        }
                      })
                    }), l.jsxs("div", {
                      style: {
                        display: "flex",
                        gap: 8,
                        fontSize: 10
                      },
                      children: [l.jsxs("span", {
                        style: {
                          color: "#22c55e",
                          fontWeight: 700
                        },
                        children: ["✓", Re]
                      }), l.jsxs("span", {
                        style: {
                          color: "#ef4444",
                          fontWeight: 700
                        },
                        children: ["✗", st]
                      }), l.jsxs("span", {
                        style: {
                          color: "#888"
                        },
                        children: ["👥", Ze]
                      })]
                    })]
                  }, fe.id)
                })
              })
            })]
          }, I))]
        }) : l.jsxs(l.Fragment, {
          children: [l.jsx("div", {
            style: {
              background: `linear-gradient(135deg,${v.t},#4d8a8d,#5d9a9d)`,
              borderRadius: 18,
              padding: "20px 24px",
              marginBottom: 16,
              color: "#fff",
              boxShadow: `0 4px 20px ${v.t}30`
            },
            children: l.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [l.jsxs("div", {
                children: [l.jsxs("h1", {
                  style: {
                    fontSize: 22,
                    fontWeight: 800,
                    margin: "0 0 6px",
                    letterSpacing: "0.3px"
                  },
                  children: [_ ? "📅 الدوام والحضور" : "📅 Attendance", " — ", ((wt = ot.find(I => I.id === c)) == null ? void 0 : wt.name) || ""]
                }), l.jsxs("p", {
                  style: {
                    fontSize: 12,
                    opacity: .85,
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                  },
                  children: [_ ? "🗓️ الدورة" : "🗓️ Cycle", ": ", de, " ", "(20 → 20)"]
                })]
              }), l.jsxs("div", {
                style: {
                  display: "flex",
                  gap: 6
                },
                children: [_e && l.jsxs("button", {
                  onClick: () => $n(null),
                  style: {
                    padding: "6px 14px",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.35)",
                    background: "rgba(255,255,255,0.18)",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: 600,
                    backdropFilter: "blur(4px)",
                    transition: "all 0.2s"
                  },
                  children: ["← ", _ ? "كل الفروع" : "All"]
                }), l.jsx("button", {
                  onClick: () => mr(Rn === "ar" ? "en" : "ar"),
                  style: {
                    padding: "6px 14px",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.35)",
                    background: "rgba(255,255,255,0.18)",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: 600,
                    backdropFilter: "blur(4px)",
                    transition: "all 0.2s"
                  },
                  children: Rn === "ar" ? "EN" : "عربي"
                })]
              })]
            })
          }), ot.length > 1 && !_e && l.jsx("select", {
            value: c,
            onChange: I => $n(I.target.value),
            style: a.sel,
            children: ot.map(I => l.jsx("option", {
              value: I.id,
              children: I.name
            }, I.id))
          }), l.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 10,
              marginBottom: 16
            },
            children: [l.jsxs("div", {
              style: {
                ...a.card,
                textAlign: "center",
                borderRadius: 14,
                padding: "14px 8px",
                background: "#f0fdf4",
                border: "1px solid #bbf7d040",
                boxShadow: "0 2px 8px rgba(34,197,94,0.08)"
              },
              children: [l.jsx("div", {
                style: { fontSize: 20, marginBottom: 4 },
                children: "✅"
              }), l.jsx("p", {
                style: {
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#22c55e",
                  margin: 0
                },
                children: G
              }), l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#15803d",
                  margin: "2px 0 0",
                  fontWeight: 600
                },
                children: _ ? "حاضر" : "Present"
              })]
            }), l.jsxs("div", {
              style: {
                ...a.card,
                textAlign: "center",
                borderRadius: 14,
                padding: "14px 8px",
                background: "#fef2f2",
                border: "1px solid #fecaca40",
                boxShadow: "0 2px 8px rgba(239,68,68,0.08)"
              },
              children: [l.jsx("div", {
                style: { fontSize: 20, marginBottom: 4 },
                children: "❌"
              }), l.jsx("p", {
                style: {
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#ef4444",
                  margin: 0
                },
                children: ue
              }), l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#b91c1c",
                  margin: "2px 0 0",
                  fontWeight: 600
                },
                children: _ ? "غائب" : "Absent"
              })]
            }), l.jsxs("div", {
              style: {
                ...a.card,
                textAlign: "center",
                borderRadius: 14,
                padding: "14px 8px",
                background: "#fffbeb",
                border: "1px solid #fde68a40",
                boxShadow: "0 2px 8px rgba(245,158,11,0.08)"
              },
              children: [l.jsx("div", {
                style: { fontSize: 20, marginBottom: 4 },
                children: "🏖️"
              }), l.jsx("p", {
                style: {
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#f59e0b",
                  margin: 0
                },
                children: y.filter(I => Ct(I.id, U()) === "إجازة").length
              }), l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: "#92400e",
                  margin: "2px 0 0",
                  fontWeight: 600
                },
                children: _ ? "إجازة" : "Leave"
              })]
            }), l.jsxs("div", {
              style: {
                ...a.card,
                textAlign: "center",
                borderRadius: 14,
                padding: "14px 8px",
                background: `${v.t}08`,
                border: `1px solid ${v.t}20`,
                boxShadow: `0 2px 8px ${v.t}10`
              },
              children: [l.jsx("div", {
                style: { fontSize: 20, marginBottom: 4 },
                children: "👥"
              }), l.jsx("p", {
                style: {
                  fontSize: 26,
                  fontWeight: 800,
                  color: v.t,
                  margin: 0
                },
                children: y.length
              }), l.jsx("p", {
                style: {
                  fontSize: 10,
                  color: v.d,
                  margin: "2px 0 0",
                  fontWeight: 600
                },
                children: _ ? "إجمالي" : "Total"
              })]
            })]
          }),
          /* === AREA MANAGER DASHBOARD BANNER === */
          Ht && l.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 16px",
              borderRadius: 12,
              background: `linear-gradient(135deg, ${v.t}08, ${v.p}08)`,
              border: `1px dashed ${v.t}30`,
              marginBottom: 14,
              fontSize: 12,
              color: v.d
            },
            children: [
              l.jsx("span", { style: { fontSize: 18 }, children: "👁️" }),
              l.jsxs("div", {
                children: [
                  l.jsx("span", {
                    style: { fontWeight: 700, display: "block", fontSize: 13 },
                    children: _ ? "وضع العرض — داشبورد" : "View Mode — Dashboard"
                  }),
                  l.jsx("span", {
                    style: { fontSize: 11, color: "#888" },
                    children: _ ? "يمكنك الاطلاع على حضور الموظفين فقط بدون تعديل" : "You can view employee attendance only — no editing allowed"
                  })
                ]
              })
            ]
          }),
          l.jsxs("div", {
            style: {
              display: "flex",
              gap: 8,
              marginBottom: 16,
              flexWrap: "wrap"
            },
            children: [S && l.jsxs("button", {
              onClick: () => pe("add_emp"),
              style: {
                ...a.addBtn,
                borderRadius: 10,
                padding: "8px 16px",
                fontSize: 12,
                fontWeight: 700,
                boxShadow: `0 2px 8px ${v.t}20`
              },
              children: ["+ ", _ ? "إضافة موظف" : "Add Employee"]
            }), l.jsxs("button", {
              onClick: () => pt("attendance"),
              style: {
                ...a.stBtn,
                fontSize: 12,
                borderRadius: 10,
                padding: "8px 16px",
                fontWeight: 600
              },
              children: ["⬇️ ", _ ? "تصدير البيانات" : "Export Data"]
            })]
          }),
          /* === REDESIGNED CHECK-IN SECTION v18 === */
          (un || Ht) && l.jsxs("div", {
            style: {
              background: "#fff",
              borderRadius: 16,
              border: `2px solid ${v.t}25`,
              marginBottom: 16,
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(128,175,178,0.10)"
            },
            children: [
              /* Header */
              l.jsx("div", {
                style: {
                  background: `linear-gradient(135deg, ${v.t}15, ${v.p}15)`,
                  padding: "14px 18px",
                  borderBottom: `1px solid ${v.t}20`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10
                },
                children: l.jsxs("div", {
                  children: [
                    l.jsx("h3", {
                      style: { fontSize: 15, fontWeight: 800, margin: 0, color: v.d },
                      children: _ ? "📍 تسجيل الحضور والانصراف" : "📍 Attendance Check-in"
                    }),
                    l.jsx("p", {
                      style: { fontSize: 11, color: "#888", margin: "2px 0 0" },
                      children: _ ? `${O.nameAr || O.name} • ${O.role === "branch_manager" ? "مشرف فرع" : O.role === "area_manager" ? "مدير منطقة" : "مدير التشغيل"}` : `${O.name} • ${O.role.replace("_"," ")}`
                    })
                  ]
                })
              }),

              /* === Supervisor Check-in Box === */
              un && l.jsxs("div", {
                style: {
                  margin: "12px 14px",
                  padding: 16,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #f0fdf4, #ecfdf5)",
                  border: "1px solid #bbf7d040"
                },
                children: [
                  l.jsxs("div", {
                    style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 12 },
                    children: [
                      l.jsx("span", { style: { fontSize: 20 }, children: "👔" }),
                      l.jsxs("div", {
                        children: [
                          l.jsx("span", {
                            style: { fontSize: 13, fontWeight: 700, color: "#166534", display: "block" },
                            children: _ ? "تسجيل المشرف" : "Supervisor Check-in"
                          }),
                          l.jsx("span", {
                            style: { fontSize: 10, color: "#15803d" },
                            children: _ ? `الفرع: ${((wt = ot.find(I => I.id === c)) == null ? void 0 : wt.name) || ""}` : `Branch: ${((wt = ot.find(I => I.id === c)) == null ? void 0 : wt.name) || ""}`
                          })
                        ]
                      })
                    ]
                  }),
                  l.jsxs("div", {
                    style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },
                    children: [
                      l.jsxs("button", {
                        onClick: () => {
                          er(c, O.id, I => {
                            ye(je => ({
                              ...je,
                              [`self|${O.id}|${U()}`]: I,
                              [`self|${O.id}|${U()}|time`]: new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" }),
                              [`self|${O.id}|${U()}|role`]: "supervisor"
                            }))
                          })
                        },
                        style: {
                          padding: "10px 22px",
                          borderRadius: 12,
                          border: "none",
                          background: "linear-gradient(135deg, #22c55e, #16a34a)",
                          color: "#fff",
                          cursor: "pointer",
                          fontSize: 13,
                          fontWeight: 700,
                          boxShadow: "0 2px 8px rgba(34,197,94,0.3)",
                          transition: "all 0.2s"
                        },
                        children: ["📍 ", _ ? "تسجيل حضور" : "Check In"]
                      }),
                      l.jsxs("button", {
                        onClick: () => {
                          ye(I => ({
                            ...I,
                            [`self|${O.id}|${U()}|out`]: new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })
                          }))
                        },
                        style: {
                          padding: "10px 18px",
                          borderRadius: 12,
                          border: "1px solid #fca5a5",
                          background: "#fef2f2",
                          color: "#dc2626",
                          cursor: "pointer",
                          fontSize: 13,
                          fontWeight: 600,
                          transition: "all 0.2s"
                        },
                        children: ["🚪 ", _ ? "تسجيل انصراف" : "Check Out"]
                      })
                    ]
                  }),
                  /* Status display for supervisor */
                  ne[`self|${O.id}|${U()}`] && l.jsxs("div", {
                    style: {
                      marginTop: 10,
                      padding: "10px 14px",
                      borderRadius: 10,
                      background: ne[`self|${O.id}|${U()}`] === "حاضر" ? "#dcfce7" : "#fef2f2",
                      border: `1px solid ${ne[`self|${O.id}|${U()}`] === "حاضر" ? "#86efac" : "#fca5a5"}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 10
                    },
                    children: [
                      l.jsx("span", {
                        style: { fontSize: 24 },
                        children: ne[`self|${O.id}|${U()}`] === "حاضر" ? "✅" : "⚠️"
                      }),
                      l.jsxs("div", {
                        style: { flex: 1 },
                        children: [
                          l.jsx("span", {
                            style: { fontSize: 13, fontWeight: 700, color: ne[`self|${O.id}|${U()}`] === "حاضر" ? "#166534" : "#dc2626", display: "block" },
                            children: ne[`self|${O.id}|${U()}`] === "حاضر" ? (_ ? "✓ تم تسجيل الحضور — داخل النطاق" : "✓ Checked In — In Range") : (_ ? "⚠️ خارج نطاق الفرع" : "⚠️ Out of Range")
                          }),
                          l.jsxs("div", {
                            style: { display: "flex", gap: 12, marginTop: 4, fontSize: 11, color: "#666" },
                            children: [
                              ne[`self|${O.id}|${U()}|time`] && l.jsxs("span", { children: [_ ? "⏰ الحضور: " : "⏰ In: ", ne[`self|${O.id}|${U()}|time`]] }),
                              ne[`self|${O.id}|${U()}|out`] && l.jsxs("span", { children: [_ ? "🚪 الانصراف: " : "🚪 Out: ", ne[`self|${O.id}|${U()}|out`]] }),
                              Yr[`${O.id}|${U()}`] && l.jsxs("span", { children: ["📏 ", Yr[`${O.id}|${U()}`].dist, _ ? " متر" : "m"] })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),

              /* === Area Manager Check-in Box === */
              Ht && l.jsxs("div", {
                style: {
                  margin: "12px 14px",
                  padding: 16,
                  borderRadius: 14,
                  background: `linear-gradient(135deg, ${v.t}08, ${v.p}10)`,
                  border: `1px solid ${v.t}20`
                },
                children: [
                  l.jsxs("div", {
                    style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 12 },
                    children: [
                      l.jsx("span", { style: { fontSize: 20 }, children: "🏢" }),
                      l.jsxs("div", {
                        children: [
                          l.jsx("span", {
                            style: { fontSize: 13, fontWeight: 700, color: v.d, display: "block" },
                            children: _ ? "تسجيل مدير المنطقة" : "Area Manager Check-in"
                          }),
                          l.jsx("span", {
                            style: { fontSize: 10, color: v.t },
                            children: _ ? `الفرع المحدد: ${((wt = ot.find(I => I.id === c)) == null ? void 0 : wt.name) || ""}` : `Selected: ${((wt = ot.find(I => I.id === c)) == null ? void 0 : wt.name) || ""}`
                          })
                        ]
                      })
                    ]
                  }),
                  l.jsxs("div", {
                    style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },
                    children: [
                      l.jsxs("button", {
                        onClick: () => {
                          const amBranchName = ((wt = ot.find(I => I.id === c)) == null ? void 0 : wt.name) || "";
                          const amTimeNow = new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" });
                          er(c, O.id, (I, Ct) => {
                            ye(je => ({
                              ...je,
                              [`self|${O.id}|${U()}`]: I,
                              [`self|${O.id}|${U()}|time`]: amTimeNow,
                              [`self|${O.id}|${U()}|role`]: "area_manager"
                            }));
                            /* === LINK TO AM SCHEDULE === */
                            Pe(je => {
                              const zr = je[`${O.region}|${U()}`] || {};
                              return {
                                ...je,
                                [`${O.region}|${U()}`]: {
                                  ...zr,
                                  branch: amBranchName,
                                  branchId: c,
                                  rangeBranch: amBranchName,
                                  from: amTimeNow,
                                  to: zr.to || "",
                                  notes: zr.notes || "",
                                  checkedIn: !0,
                                  status: I,
                                  inRange: Ct ? Ct.inRange : null,
                                  dist: Ct ? Ct.dist : null,
                                  source: "attendance"
                                }
                              }
                            });
                          })
                        },
                        style: {
                          padding: "10px 22px",
                          borderRadius: 12,
                          border: "none",
                          background: `linear-gradient(135deg, ${v.t}, #5d9a9d)`,
                          color: "#fff",
                          cursor: "pointer",
                          fontSize: 13,
                          fontWeight: 700,
                          boxShadow: `0 2px 8px ${v.t}40`,
                          transition: "all 0.2s"
                        },
                        children: ["📍 ", _ ? "تسجيل حضور" : "Check In"]
                      }),
                      l.jsxs("button", {
                        onClick: () => {
                          const amOutTime = new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" });
                          ye(I => ({
                            ...I,
                            [`self|${O.id}|${U()}|out`]: amOutTime
                          }));
                          /* === LINK CHECK-OUT TO AM SCHEDULE === */
                          Pe(I => ({
                            ...I,
                            [`${O.region}|${U()}`]: {
                              ...(I[`${O.region}|${U()}`] || {}),
                              to: amOutTime
                            }
                          }));
                        },
                        style: {
                          padding: "10px 18px",
                          borderRadius: 12,
                          border: `1px solid ${v.p}`,
                          background: `${v.p}15`,
                          color: v.d,
                          cursor: "pointer",
                          fontSize: 13,
                          fontWeight: 600,
                          transition: "all 0.2s"
                        },
                        children: ["🚪 ", _ ? "تسجيل انصراف" : "Check Out"]
                      })
                    ]
                  }),
                  /* Status display for area manager */
                  ne[`self|${O.id}|${U()}`] && l.jsxs("div", {
                    style: {
                      marginTop: 10,
                      padding: "10px 14px",
                      borderRadius: 10,
                      background: ne[`self|${O.id}|${U()}`] === "حاضر" ? `${v.t}12` : "#fef2f2",
                      border: `1px solid ${ne[`self|${O.id}|${U()}`] === "حاضر" ? v.t + "30" : "#fca5a5"}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 10
                    },
                    children: [
                      l.jsx("span", {
                        style: { fontSize: 24 },
                        children: ne[`self|${O.id}|${U()}`] === "حاضر" ? "✅" : "⚠️"
                      }),
                      l.jsxs("div", {
                        style: { flex: 1 },
                        children: [
                          l.jsx("span", {
                            style: { fontSize: 13, fontWeight: 700, color: ne[`self|${O.id}|${U()}`] === "حاضر" ? v.t : "#dc2626", display: "block" },
                            children: ne[`self|${O.id}|${U()}`] === "حاضر" ? (_ ? "✓ تم تسجيل الحضور — داخل النطاق" : "✓ Checked In — In Range") : (_ ? "⚠️ خارج نطاق الفرع" : "⚠️ Out of Range")
                          }),
                          l.jsxs("div", {
                            style: { display: "flex", gap: 12, marginTop: 4, fontSize: 11, color: "#666" },
                            children: [
                              ne[`self|${O.id}|${U()}|time`] && l.jsxs("span", { children: [_ ? "⏰ الحضور: " : "⏰ In: ", ne[`self|${O.id}|${U()}|time`]] }),
                              ne[`self|${O.id}|${U()}|out`] && l.jsxs("span", { children: [_ ? "🚪 الانصراف: " : "🚪 Out: ", ne[`self|${O.id}|${U()}|out`]] }),
                              Yr[`${O.id}|${U()}`] && l.jsxs("span", { children: ["📏 ", Yr[`${O.id}|${U()}`].dist, _ ? " متر" : "m"] })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          /* === END REDESIGNED CHECK-IN === */ y.length === 0 ? l.jsx("p", {
            style: {
              textAlign: "center",
              color: "#999",
              padding: 30
            },
            children: _ ? "اضغط إضافة موظف" : "Add employees first"
          }) : l.jsxs(l.Fragment, {
            children: [l.jsxs("div", {
              style: {
                background: "#fff",
                borderRadius: 14,
                border: `1px solid ${v.l}30`,
                marginBottom: 14,
                overflow: "hidden"
              },
              children: [l.jsxs("div", {
                style: {
                  padding: "12px 16px",
                  background: `linear-gradient(135deg, ${v.t}06, ${v.p}06)`,
                  borderBottom: `2px solid ${v.t}15`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [l.jsxs("h3", {
                  style: {
                    fontSize: 14,
                    fontWeight: 700,
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                  },
                  children: [_ ? "📋 جدول الدورة الكامل" : "📋 Full Cycle Grid"]
                }), l.jsxs("span", {
                  style: {
                    fontSize: 11,
                    color: v.t,
                    fontWeight: 600,
                    background: `${v.t}10`,
                    padding: "2px 8px",
                    borderRadius: 6
                  },
                  children: [ee.length, " ", _ ? "يوم" : "days"]
                })]
              }), l.jsx("div", {
                style: {
                  overflowX: "auto",
                  padding: 8
                },
                children: l.jsxs("div", {
                  style: {
                    minWidth: Math.max(900, ee.length * 32 + 180)
                  },
                  children: [l.jsxs("div", {
                    style: {
                      display: "flex",
                      position: "sticky",
                      top: 0,
                      background: "#fff",
                      zIndex: 2,
                      borderBottom: `2px solid ${v.t}20`,
                      paddingBottom: 4
                    },
                    children: [l.jsx("div", {
                      style: {
                        minWidth: 120,
                        padding: "4px 6px",
                        fontSize: 10,
                        fontWeight: 700,
                        color: v.d
                      },
                      children: _ ? "الموظف" : "Employee"
                    }), l.jsx("div", {
                      style: {
                        minWidth: 50,
                        padding: "4px 3px",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#888"
                      },
                      children: _ ? "المنصب" : "Pos"
                    }), ee.map(I => {
                      const je = new Date(I),
                        fe = I === U(),
                        Ue = je.getDay() === 5,
                        Re = je.getDay();
                      return l.jsxs("div", {
                        style: {
                          minWidth: 28,
                          padding: "2px 1px",
                          textAlign: "center",
                          fontSize: 8,
                          borderRadius: 4,
                          ...fe ? {
                            background: v.t,
                            color: "#fff"
                          } : Ue ? {
                            background: "#fef2f2"
                          } : {}
                        },
                        children: [l.jsx("div", {
                          style: {
                            fontWeight: 600
                          },
                          children: _ ? Oe[Re] : Fe[Re]
                        }), l.jsx("div", {
                          style: {
                            fontWeight: 800,
                            fontSize: 10
                          },
                          children: je.getDate()
                        })]
                      }, I)
                    }), l.jsx("div", {
                      style: {
                        minWidth: 30,
                        textAlign: "center",
                        fontSize: 8,
                        fontWeight: 700,
                        color: "#22c55e"
                      },
                      children: "✓"
                    }), l.jsx("div", {
                      style: {
                        minWidth: 30,
                        textAlign: "center",
                        fontSize: 8,
                        fontWeight: 700,
                        color: "#ef4444"
                      },
                      children: "✗"
                    }), l.jsx("div", {
                      style: {
                        minWidth: 30,
                        textAlign: "center",
                        fontSize: 8,
                        fontWeight: 700,
                        color: "#8b5cf6"
                      },
                      children: "OT"
                    })]
                  }), ["صباحي", "مسائي"].map(I => {
                    const je = y.filter(fe => fe.shift === I);
                    return je.length ? l.jsxs("div", {
                      children: [l.jsx("div", {
                        style: {
                          padding: "4px 6px",
                          background: I === "صباحي" ? `${v.t}08` : `${v.p}20`,
                          borderRadius: 4,
                          margin: "4px 0 2px",
                          fontWeight: 700,
                          fontSize: 10,
                          color: v.t
                        },
                        children: I === "صباحي" ? _ ? "☀️ صباحي" : "☀️ AM" : _ ? "🌙 مسائي" : "🌙 PM"
                      }), je.map(fe => {
                        const Ue = J(fe);
                        return l.jsxs("div", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            borderBottom: `1px solid ${v.l}10`
                          },
                          children: [l.jsxs("div", {
                            style: {
                              minWidth: 120,
                              padding: "4px 6px",
                              fontSize: 11,
                              fontWeight: 600,
                              display: "flex",
                              alignItems: "center",
                              gap: 4
                            },
                            children: [l.jsx("div", {
                              style: {
                                width: 22,
                                height: 22,
                                borderRadius: 6,
                                background: `${v.t}15`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 10,
                                fontWeight: 800,
                                color: v.t,
                                flexShrink: 0
                              },
                              children: fe.name[0]
                            }), l.jsx("span", {
                              style: {
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                              },
                              children: fe.name
                            })]
                          }), l.jsx("div", {
                            style: {
                              minWidth: 50,
                              padding: "4px 3px",
                              fontSize: 9,
                              color: "#999"
                            },
                            children: fe.position
                          }), ee.map(Re => {
                            const st = Ct(fe.id, Re),
                              Ze = Re === U(),
                              rr = new Date(Re).getDay() === 5;
                            return l.jsx("div", {
                              style: {
                                minWidth: 28,
                                padding: "2px 1px",
                                textAlign: "center",
                                ...Ze ? {
                                  background: "#f0fafa"
                                } : rr ? {
                                  background: "#fef8f8"
                                } : {}
                              },
                              children: S ? l.jsx("button", {
                                onClick: () => {
                                  const Ui = st === "" ? "حاضر" : st === "حاضر" ? "غائب" : st === "غائب" ? "إجازة" : "";
                                  ye(kr => ({
                                    ...kr,
                                    [`${c}|${fe.id}|${Re}`]: Ui
                                  }))
                                },
                                style: {
                                  width: 24,
                                  height: 22,
                                  borderRadius: 4,
                                  border: "none",
                                  background: st ? `${he[st]}20` : "#f5f5f5",
                                  color: he[st] || "#ddd",
                                  cursor: "pointer",
                                  fontSize: 11,
                                  fontWeight: 800,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  margin: "0 auto"
                                },
                                children: st ? $t[st] : "·"
                              }) : l.jsx("span", {
                                style: {
                                  fontSize: 11,
                                  fontWeight: 700,
                                  color: he[st] || "#eee"
                                },
                                children: st ? $t[st] : "·"
                              })
                            }, Re)
                          }), l.jsx("div", {
                            style: {
                              minWidth: 30,
                              textAlign: "center",
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#22c55e"
                            },
                            children: Ue.p2
                          }), l.jsx("div", {
                            style: {
                              minWidth: 30,
                              textAlign: "center",
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#ef4444"
                            },
                            children: Ue.a2
                          }), l.jsx("div", {
                            style: {
                              minWidth: 30,
                              textAlign: "center",
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#8b5cf6"
                            },
                            children: Ue.ot2 || "—"
                          })]
                        }, fe.id)
                      })]
                    }, I) : null
                  })]
                })
              }), l.jsxs("div", {
                style: {
                  display: "flex",
                  gap: 10,
                  padding: "8px 14px",
                  borderTop: `1px solid ${v.l}20`,
                  fontSize: 10,
                  color: "#888",
                  flexWrap: "wrap"
                },
                children: [l.jsxs("span", {
                  children: [l.jsx("span", {
                    style: {
                      display: "inline-block",
                      width: 14,
                      height: 14,
                      borderRadius: 3,
                      background: "#22c55e20",
                      color: "#22c55e",
                      textAlign: "center",
                      fontWeight: 800,
                      lineHeight: "14px",
                      fontSize: 9,
                      marginLeft: 3
                    },
                    children: "✓"
                  }), " ", _ ? "حاضر" : "Present"]
                }), l.jsxs("span", {
                  children: [l.jsx("span", {
                    style: {
                      display: "inline-block",
                      width: 14,
                      height: 14,
                      borderRadius: 3,
                      background: "#ef444420",
                      color: "#ef4444",
                      textAlign: "center",
                      fontWeight: 800,
                      lineHeight: "14px",
                      fontSize: 9,
                      marginLeft: 3
                    },
                    children: "✗"
                  }), " ", _ ? "غائب" : "Absent"]
                }), l.jsxs("span", {
                  children: [l.jsx("span", {
                    style: {
                      display: "inline-block",
                      width: 14,
                      height: 14,
                      borderRadius: 3,
                      background: "#f59e0b20",
                      color: "#f59e0b",
                      textAlign: "center",
                      fontWeight: 800,
                      lineHeight: "14px",
                      fontSize: 9,
                      marginLeft: 3
                    },
                    children: "⊘"
                  }), " ", _ ? "إجازة" : "Leave"]
                }), l.jsx("span", {
                  style: {
                    marginRight: 8
                  },
                  children: _ ? "اضغط الخلية للتبديل" : "Click cell to toggle"
                })]
              })]
            }), l.jsxs("div", {
              style: {
                background: "#fff",
                borderRadius: 14,
                border: `1px solid ${v.l}30`,
                overflow: "hidden"
              },
              children: [l.jsx("div", {
                style: {
                  padding: "10px 14px",
                  background: `${v.t}08`,
                  borderBottom: `1px solid ${v.l}20`
                },
                children: l.jsx("h3", {
                  style: {
                    fontSize: 13,
                    fontWeight: 700,
                    margin: 0
                  },
                  children: _ ? "📊 ملخص الدورة" : "📊 Summary"
                })
              }), l.jsx("div", {
                style: {
                  overflowX: "auto"
                },
                children: l.jsxs("table", {
                  style: {
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: 12
                  },
                  children: [l.jsx("thead", {
                    children: l.jsxs("tr", {
                      style: {
                        background: v.t,
                        color: "#fff"
                      },
                      children: [l.jsx("th", {
                        style: a.th,
                        children: "#"
                      }), l.jsx("th", {
                        style: a.th,
                        children: _ ? "الموظف" : "Name"
                      }), l.jsx("th", {
                        style: a.th,
                        children: _ ? "المنصب" : "Role"
                      }), l.jsx("th", {
                        style: {
                          ...a.th,
                          textAlign: "center"
                        },
                        children: "✓"
                      }), l.jsx("th", {
                        style: {
                          ...a.th,
                          textAlign: "center"
                        },
                        children: "✗"
                      }), l.jsx("th", {
                        style: {
                          ...a.th,
                          textAlign: "center"
                        },
                        children: "⊘"
                      }), l.jsx("th", {
                        style: {
                          ...a.th,
                          textAlign: "center"
                        },
                        children: "OT"
                      }), l.jsx("th", {
                        style: {
                          ...a.th,
                          textAlign: "center"
                        },
                        children: _ ? "خصم" : "Ded"
                      }), l.jsx("th", {
                        style: {
                          ...a.th,
                          textAlign: "center"
                        },
                        children: "%"
                      })]
                    })
                  }), l.jsx("tbody", {
                    children: y.map((I, je) => {
                      const fe = J(I),
                        Ue = fe.p2 + fe.a2 + fe.lv,
                        Re = Ue ? Math.round(fe.p2 / Ue * 100) : 0;
                      return l.jsxs("tr", {
                        style: {
                          borderBottom: "1px solid #f0f0f0",
                          ...je % 2 === 0 ? {
                            background: "#fafafa"
                          } : {}
                        },
                        children: [l.jsx("td", {
                          style: {
                            ...a.td,
                            color: "#ccc",
                            fontWeight: 700
                          },
                          children: je + 1
                        }), l.jsx("td", {
                          style: {
                            ...a.td,
                            fontWeight: 600
                          },
                          children: I.name
                        }), l.jsx("td", {
                          style: {
                            ...a.td,
                            color: "#888"
                          },
                          children: I.position
                        }), l.jsx("td", {
                          style: {
                            ...a.td,
                            textAlign: "center",
                            color: "#22c55e",
                            fontWeight: 700
                          },
                          children: fe.p2
                        }), l.jsx("td", {
                          style: {
                            ...a.td,
                            textAlign: "center",
                            color: "#ef4444",
                            fontWeight: 700
                          },
                          children: fe.a2
                        }), l.jsx("td", {
                          style: {
                            ...a.td,
                            textAlign: "center",
                            color: "#f59e0b",
                            fontWeight: 700
                          },
                          children: fe.lv
                        }), l.jsx("td", {
                          style: {
                            ...a.td,
                            textAlign: "center",
                            color: "#8b5cf6",
                            fontWeight: 700
                          },
                          children: fe.ot2 > 0 ? fe.ot2 + "h" : "—"
                        }), l.jsx("td", {
                          style: {
                            ...a.td,
                            textAlign: "center",
                            color: fe.pn > 0 ? "#ef4444" : "#ccc",
                            fontWeight: 700
                          },
                          children: fe.pn > 0 ? fe.pn : "—"
                        }), l.jsx("td", {
                          style: {
                            ...a.td,
                            textAlign: "center"
                          },
                          children: l.jsxs("span", {
                            style: {
                              padding: "2px 8px",
                              borderRadius: 10,
                              background: `${xe(Re)}15`,
                              color: xe(Re),
                              fontWeight: 700,
                              fontSize: 11
                            },
                            children: [Re, "%"]
                          })
                        })]
                      }, I.id)
                    })
                  })]
                })
              })]
            })]
          }), Ie === "add_emp" && l.jsx(mn, {
            close: () => pe(null),
            title: _ ? "إضافة موظف" : "Add Employee",
            children: l.jsx(Al, {
              fields: [{
                k: "name",
                l: _ ? "اسم الموظف *" : "Name *",
                type: "text"
              }, {
                k: "position",
                l: _ ? "المنصب" : "Position",
                type: "select",
                opts: j
              }, {
                k: "shift",
                l: _ ? "الفترة" : "Shift",
                type: "select",
                opts: ["صباحي", "مسائي"]
              }],
              onSubmit: I => {
                I.name && (ce(je => ({
                  ...je,
                  [c]: [...je[c] || [], {
                    id: gn(),
                    name: I.name,
                    position: I.position,
                    shift: I.shift
                  }]
                })), pe(null))
              }
            })
          }), (Ie == null ? void 0 : Ie.startsWith("pen_")) && l.jsx(mn, {
            close: () => pe(null),
            title: "⚠️ عقوبة",
            children: l.jsx(Al, {
              fields: [{
                k: "type",
                l: "النوع",
                type: "select",
                opts: ["إنذار شفهي", "إنذار كتابي", "خصم مالي", "إيقاف"]
              }, {
                k: "amount",
                l: "المبلغ",
                type: "text"
              }, {
                k: "reason",
                l: "السبب",
                type: "textarea"
              }],
              onSubmit: I => {
                const je = Ie.replace("pen_", ""),
                  fe = Number(I.amount) || 0;
                fe > 0 && ye(Ue => ({
                  ...Ue,
                  [`${c}|${je}|${U()}|pen`]: (Ue[`${c}|${je}|${U()}|pen`] || 0) + fe
                })), on(Ue => [{
                  id: gn(),
                  empId: je,
                  type: I.type,
                  amount: fe,
                  reason: I.reason,
                  date: U(),
                  by: O.name
                }, ...Ue]), pe(null)
              }
            })
          })]
        })
      }
      if (z === "am_schedule") {
        const c = ["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
          j = (() => {
            const S = [],
              _ = new Date,
              Z = new Date(_);
            Z.setDate(_.getDate() - (_.getDay() + 1) % 7);
            for (let se = 0; se < 7; se++) {
              const P = new Date(Z);
              P.setDate(Z.getDate() + se), S.push(P)
            }
            return S
          })();
        if (Ht) {
          const S = p[O.region],
            _ = `${O.region}|${U()}`,
            Z = ve[_] || {
              branch: ((Zt = S == null ? void 0 : S.branches[0]) == null ? void 0 : Zt.name) || "",
              from: "06:00",
              to: "13:00",
              notes: ""
            },
            se = (P, ee) => Pe(de => ({
              ...de,
              [_]: {
                ...Z,
                [P]: ee
              }
            })),
            /* === SELECTED BRANCH → GEOFENCE LINK === */
            amRec = ve[_],
            amBranch = (S == null ? void 0 : S.branches.find(P => P.name === Z.branch)) || (S == null ? void 0 : S.branches[0]),
            amBranchId = amBranch ? amBranch.id : null,
            amNow = () => new Date().toLocaleTimeString("ar-SA", {
              hour: "2-digit",
              minute: "2-digit"
            }),
            amMerge = P => Pe(ee => ({
              ...ee,
              [_]: {
                ...(ee[_] || Z),
                ...P
              }
            })),
            amCheckIn = () => {
              const P = amNow();
              er(amBranchId, O.id, (ee, de) => {
                ye(Oe => ({
                  ...Oe,
                  [`self|${O.id}|${U()}`]: ee,
                  [`self|${O.id}|${U()}|time`]: P,
                  [`self|${O.id}|${U()}|role`]: "area_manager"
                })), amMerge({
                  branch: Z.branch,
                  branchId: amBranchId,
                  rangeBranch: Z.branch,
                  from: P,
                  checkedIn: !0,
                  status: ee,
                  inRange: de ? de.inRange : null,
                  dist: de ? de.dist : null,
                  source: "schedule"
                })
              })
            },
            amCheckOut = () => {
              const P = amNow();
              ye(ee => ({
                ...ee,
                [`self|${O.id}|${U()}|out`]: P
              })), amMerge({
                to: P
              })
            },
            amRecheck = () => er(amBranchId, O.id, (P, ee) => {
              ye(de => ({
                ...de,
                [`self|${O.id}|${U()}`]: P
              })), amMerge({
                branch: Z.branch,
                branchId: amBranchId,
                rangeBranch: Z.branch,
                status: P,
                inRange: ee ? ee.inRange : null,
                dist: ee ? ee.dist : null
              })
            });
          return l.jsxs(l.Fragment, {
            children: [l.jsx("h1", {
              style: a.pt,
              children: "🗓️ تسجيل دوامي اليومي"
            }), l.jsx("p", {
              style: a.ps,
              children: "توثيق مكان وفترة تواجدك"
            }), l.jsxs("div", {
              style: a.card,
              children: [l.jsxs("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 8
                },
                children: [l.jsxs("div", {
                  style: a.fg,
                  children: [l.jsx("label", {
                    style: a.fl,
                    children: "الفرع"
                  }), l.jsx("select", {
                    value: Z.branch,
                    onChange: P => se("branch", P.target.value),
                    style: a.fi,
                    children: S == null ? void 0 : S.branches.map(P => l.jsx("option", {
                      children: P.name
                    }, P.id))
                  })]
                }), l.jsxs("div", {
                  style: a.fg,
                  children: [l.jsx("label", {
                    style: a.fl,
                    children: "من"
                  }), l.jsx("input", {
                    type: "time",
                    value: Z.from,
                    onChange: P => se("from", P.target.value),
                    style: a.fi
                  })]
                }), l.jsxs("div", {
                  style: a.fg,
                  children: [l.jsx("label", {
                    style: a.fl,
                    children: "إلى"
                  }), l.jsx("input", {
                    type: "time",
                    value: Z.to,
                    onChange: P => se("to", P.target.value),
                    style: a.fi
                  })]
                })]
              }), l.jsxs("div", {
                style: a.fg,
                children: [l.jsx("label", {
                  style: a.fl,
                  children: "ملاحظات"
                }), l.jsx("input", {
                  value: Z.notes,
                  onChange: P => se("notes", P.target.value),
                  style: a.fi
                })]
              })]
            }),
            /* === AREA MANAGER CHECK-IN LINKED TO SELECTED BRANCH === */
            l.jsxs("div", {
              style: {
                background: "#fff",
                borderRadius: 14,
                border: `2px solid ${v.t}25`,
                padding: 14,
                marginTop: 12,
                boxShadow: "0 2px 12px rgba(128,175,178,0.10)"
              },
              children: [l.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12
                },
                children: [l.jsx("span", {
                  style: {
                    fontSize: 20
                  },
                  children: "🏢"
                }), l.jsxs("div", {
                  children: [l.jsx("span", {
                    style: {
                      fontSize: 13,
                      fontWeight: 700,
                      color: v.d,
                      display: "block"
                    },
                    children: "تسجيل مدير المنطقة"
                  }), l.jsxs("span", {
                    style: {
                      fontSize: 10,
                      color: v.t
                    },
                    children: ["الفرع المحدد: ", Z.branch || "—", amBranchId && af[amBranchId] ? ` • نطاق ${af[amBranchId].radius} متر` : " • لا توجد إحداثيات للفرع"]
                  })]
                })]
              }), l.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap"
                },
                children: [l.jsxs("button", {
                  onClick: amCheckIn,
                  style: {
                    padding: "10px 22px",
                    borderRadius: 12,
                    border: "none",
                    background: `linear-gradient(135deg, ${v.t}, #5d9a9d)`,
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 700,
                    boxShadow: `0 2px 8px ${v.t}40`
                  },
                  children: ["📍 ", "تسجيل حضور"]
                }), l.jsxs("button", {
                  onClick: amCheckOut,
                  style: {
                    padding: "10px 18px",
                    borderRadius: 12,
                    border: `1px solid ${v.p}`,
                    background: `${v.p}15`,
                    color: v.d,
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 600
                  },
                  children: ["🚪 ", "تسجيل انصراف"]
                }), amRec && amRec.checkedIn && l.jsxs("button", {
                  onClick: amRecheck,
                  style: {
                    padding: "10px 16px",
                    borderRadius: 12,
                    border: "1px solid #e2e8f0",
                    background: "#f8fafc",
                    color: "#475569",
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: 600
                  },
                  children: ["🔄 ", "تحقق من النطاق"]
                })]
              }), amRec && amRec.checkedIn && l.jsxs("div", {
                style: {
                  marginTop: 10,
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: amRec.inRange === !1 ? "#fef2f2" : amRec.inRange === !0 ? "#dcfce7" : "#f8fafc",
                  border: `1px solid ${amRec.inRange===!1?"#fca5a5":amRec.inRange===!0?"#86efac":"#e2e8f0"}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10
                },
                children: [l.jsx("span", {
                  style: {
                    fontSize: 24
                  },
                  children: amRec.inRange === !1 ? "⚠️" : amRec.inRange === !0 ? "✅" : "ℹ️"
                }), l.jsxs("div", {
                  style: {
                    flex: 1
                  },
                  children: [l.jsxs("span", {
                    style: {
                      fontSize: 13,
                      fontWeight: 700,
                      color: amRec.inRange === !1 ? "#dc2626" : amRec.inRange === !0 ? "#166534" : "#475569",
                      display: "block"
                    },
                    children: [amRec.inRange === !1 ? "⚠️ خارج نطاق الفرع" : amRec.inRange === !0 ? "✓ داخل نطاق الفرع" : "تم تسجيل الحضور — تعذّر تحديد الموقع", " — ", amRec.rangeBranch || amRec.branch]
                  }), l.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 12,
                      marginTop: 4,
                      fontSize: 11,
                      color: "#666",
                      flexWrap: "wrap"
                    },
                    children: [amRec.from && l.jsxs("span", {
                      children: ["⏰ الحضور: ", amRec.from]
                    }), amRec.to && l.jsxs("span", {
                      children: ["🚪 الانصراف: ", amRec.to]
                    }), amRec.dist != null && l.jsxs("span", {
                      children: ["📏 ", amRec.dist, " متر عن الفرع"]
                    }), amRec.source === "attendance" && l.jsx("span", {
                      children: "📲 من صفحة الموظفين"
                    })]
                  })]
                })]
              }), amRec && amRec.checkedIn && amRec.rangeBranch && amRec.rangeBranch !== Z.branch && l.jsxs("div", {
                style: {
                  marginTop: 8,
                  padding: "8px 12px",
                  borderRadius: 10,
                  background: "#fffbeb",
                  border: "1px solid #fde68a",
                  fontSize: 11,
                  color: "#92400e"
                },
                children: ["⚠️ تم تغيير الفرع إلى ", Z.branch, " — اضغط «تحقق من النطاق» لإعادة احتساب داخل/خارج النطاق."]
              })]
            }), l.jsx("h3", {
              style: {
                fontSize: 14,
                fontWeight: 600,
                margin: "14px 0 8px"
              },
              children: "📅 جدولي هذا الأسبوع"
            }),
            l.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(7,1fr)",
                gap: 4
              },
              children: j.map((P, ee) => {
                const de = P.toISOString().split("T")[0],
                  Oe = ve[`${O.region}|${de}`],
                  Fe = de === U();
                return l.jsxs("div", {
                  style: {
                    padding: 8,
                    borderRadius: 8,
                    background: Fe ? `${v.t}15` : "#fafafa",
                    border: Fe ? `2px solid ${v.t}` : "1px solid #eee",
                    textAlign: "center"
                  },
                  children: [l.jsx("div", {
                    style: {
                      fontSize: 10,
                      color: "#999"
                    },
                    children: c[ee]
                  }), l.jsxs("div", {
                    style: {
                      fontSize: 12,
                      fontWeight: 700
                    },
                    children: [P.getDate(), "/", P.getMonth() + 1]
                  }), Oe ? l.jsxs(l.Fragment, {
                    children: [l.jsxs("div", {
                      style: {
                        fontSize: 10,
                        color: v.t,
                        fontWeight: 600
                      },
                      children: ["📍", Oe.branch]
                    }), l.jsxs("div", {
                      style: {
                        fontSize: 10,
                        color: "#666"
                      },
                      children: [Oe.from, "-", Oe.to]
                    }), Oe.checkedIn && l.jsx("div", {
                      style: {
                        marginTop: 3,
                        fontSize: 9,
                        fontWeight: 700,
                        padding: "2px 3px",
                        borderRadius: 5,
                        background: Oe.inRange === !1 ? "#fef2f2" : Oe.inRange === !0 ? "#dcfce7" : "#f1f5f9",
                        color: Oe.inRange === !1 ? "#dc2626" : Oe.inRange === !0 ? "#166534" : "#64748b"
                      },
                      children: Oe.inRange === !1 ? "⊘ خارج النطاق" : Oe.inRange === !0 ? "✓ داخل النطاق" : "• بدون موقع"
                    })]
                  }) : l.jsx("div", {
                    style: {
                      fontSize: 10,
                      color: "#ccc"
                    },
                    children: "—"
                  })]
                }, ee)
              })
            })]
          })
        }
        return _e ? l.jsxs(l.Fragment, {
          children: [l.jsx("h1", {
            style: a.pt,
            children: "🗓️ جدول مدراء المناطق"
          }), l.jsx("p", {
            style: a.ps,
            children: "متابعة مكان دوام كل مدير منطقة"
          }), Object.entries(p).map(([S, _]) => l.jsxs("div", {
            style: {
              ...a.card,
              marginBottom: 12
            },
            children: [l.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 10
              },
              children: [l.jsx("span", {
                style: {
                  fontSize: 22
                },
                children: _.icon
              }), l.jsxs("div", {
                children: [l.jsx("h3", {
                  style: {
                    fontSize: 15,
                    fontWeight: 700,
                    margin: 0
                  },
                  children: _.name
                }), l.jsxs("p", {
                  style: {
                    fontSize: 11,
                    color: v.t,
                    margin: 0
                  },
                  children: ["مدير: ", _.manager]
                })]
              })]
            }), l.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(7,1fr)",
                gap: 3
              },
              children: j.map((Z, se) => {
                const P = Z.toISOString().split("T")[0],
                  ee = ve[`${S}|${P}`],
                  de = P === U();
                return l.jsxs("div", {
                  style: {
                    padding: 6,
                    borderRadius: 6,
                    background: de ? `${v.t}15` : "#fafafa",
                    border: de ? `2px solid ${v.t}` : "1px solid #eee",
                    textAlign: "center"
                  },
                  children: [l.jsx("div", {
                    style: {
                      fontSize: 9,
                      color: "#999"
                    },
                    children: c[se]
                  }), l.jsxs("div", {
                    style: {
                      fontSize: 11,
                      fontWeight: 700
                    },
                    children: [Z.getDate(), "/", Z.getMonth() + 1]
                  }), ee ? l.jsxs(l.Fragment, {
                    children: [l.jsxs("div", {
                      style: {
                        fontSize: 10,
                        color: "#22c55e",
                        fontWeight: 700
                      },
                      children: ["📍", ee.branch]
                    }), l.jsxs("div", {
                      style: {
                        fontSize: 10
                      },
                      children: [ee.from, "-", ee.to]
                    }), ee.checkedIn && l.jsxs("div", {
                      style: {
                        marginTop: 3,
                        fontSize: 9,
                        fontWeight: 700,
                        padding: "2px 3px",
                        borderRadius: 5,
                        background: ee.inRange === !1 ? "#fef2f2" : ee.inRange === !0 ? "#dcfce7" : "#f1f5f9",
                        color: ee.inRange === !1 ? "#dc2626" : ee.inRange === !0 ? "#166534" : "#64748b"
                      },
                      children: [ee.inRange === !1 ? "⊘ خارج النطاق" : ee.inRange === !0 ? "✓ داخل النطاق" : "• بدون موقع", ee.dist != null ? ` ${ee.dist}م` : ""]
                    })]
                  }) : l.jsx("div", {
                    style: {
                      fontSize: 10,
                      color: "#ef4444"
                    },
                    children: "⚠️"
                  })]
                }, se)
              })
            })]
          }, S))]
        }) : null
      }
      if (z === "admin") return l.jsxs(l.Fragment, {
        children: [l.jsx("h1", {
          style: a.pt,
          children: "⚙️ إدارة النظام — تحكم كامل"
        }), l.jsx("p", {
          style: a.ps,
          children: "إضافة وتعديل وحذف المستخدمين والمناطق والفروع"
        }), l.jsxs("div", {
          style: {
            marginBottom: 16
          },
          children: [l.jsx("button", {
            style: {
              ...a.addBtn,
              marginBottom: 10
            },
            onClick: () => pe("add_user"),
            children: "+ مستخدم جديد"
          }), l.jsx("div", {
            style: {
              overflowX: "auto"
            },
            children: l.jsxs("table", {
              style: {
                width: "100%",
                borderCollapse: "collapse",
                background: "#fff",
                borderRadius: 10,
                overflow: "hidden",
                fontSize: 12
              },
              children: [l.jsx("thead", {
                children: l.jsxs("tr", {
                  style: {
                    background: v.t,
                    color: "#fff"
                  },
                  children: [l.jsx("th", {
                    style: a.th,
                    children: "المستخدم"
                  }), l.jsx("th", {
                    style: a.th,
                    children: "الاسم"
                  }), l.jsx("th", {
                    style: a.th,
                    children: "المنصب"
                  }), l.jsx("th", {
                    style: a.th,
                    children: "المنطقة"
                  }), l.jsx("th", {
                    style: a.th,
                    children: "الحالة"
                  }), l.jsx("th", {
                    style: a.th,
                    children: "إجراء"
                  })]
                })
              }), l.jsx("tbody", {
                children: W.map(c => {
                  var y;
                  return l.jsxs("tr", {
                    style: {
                      borderBottom: "1px solid #f0f0f0",
                      ...c.active === !1 ? {
                        opacity: .5
                      } : {}
                    },
                    children: [l.jsx("td", {
                      style: a.td,
                      children: c.username
                    }), l.jsx("td", {
                      style: a.td,
                      children: c.name
                    }), l.jsx("td", {
                      style: a.td,
                      children: l.jsx("span", {
                        style: {
                          ...a.bdg,
                          background: dd[c.role] + "30"
                        },
                        children: qn[c.role]
                      })
                    }), l.jsx("td", {
                      style: a.td,
                      children: c.region ? (y = p[c.region]) == null ? void 0 : y.name : "الكل"
                    }), l.jsx("td", {
                      style: a.td,
                      children: l.jsx("span", {
                        style: {
                          color: c.active !== !1 ? "#22c55e" : "#ef4444",
                          fontWeight: 700
                        },
                        children: c.active !== !1 ? "فعال" : "معطل"
                      })
                    }), l.jsxs("td", {
                      style: a.td,
                      children: [l.jsx("button", {
                        onClick: () => Q(j => j.map(S => S.id === c.id ? {
                          ...S,
                          active: S.active === !1
                        } : S)),
                        style: {
                          ...a.stBtn,
                          fontSize: 10,
                          padding: "2px 8px"
                        },
                        children: c.active !== !1 ? "تعطيل" : "تفعيل"
                      }), " ", c.id !== "u1" && l.jsx("button", {
                        onClick: () => Q(j => j.filter(S => S.id !== c.id)),
                        style: {
                          ...a.stBtn,
                          fontSize: 10,
                          padding: "2px 8px",
                          color: "#ef4444"
                        },
                        children: "حذف"
                      })]
                    })]
                  }, c.id)
                })
              })]
            })
          })]
        }), l.jsx("h3", {
          style: {
            fontSize: 15,
            fontWeight: 700,
            marginBottom: 8
          },
          children: "🗺️ المناطق والفروع"
        }), l.jsx("button", {
          style: {
            ...a.addBtn,
            marginBottom: 10
          },
          onClick: () => pe("add_branch"),
          children: "+ فرع جديد"
        }), Object.entries(p).map(([c, y]) => l.jsxs("div", {
          style: {
            ...a.card,
            marginBottom: 10
          },
          children: [l.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8
            },
            children: [l.jsx("span", {
              style: {
                fontSize: 20
              },
              children: y.icon
            }), l.jsx("input", {
              value: y.name,
              onChange: j => H(S => ({
                ...S,
                [c]: {
                  ...S[c],
                  name: j.target.value
                }
              })),
              style: {
                ...a.fi,
                fontSize: 16,
                fontWeight: 700,
                padding: "4px 8px",
                border: "1px solid transparent",
                flex: 1
              },
              onFocus: j => j.target.style.borderColor = v.t,
              onBlur: j => j.target.style.borderColor = "transparent"
            })]
          }), y.branches.map(j => l.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "3px 0",
              borderBottom: `1px solid ${v.l}20`
            },
            children: [l.jsx("span", {
              style: {
                fontSize: 12
              },
              children: "🏪"
            }), l.jsx("input", {
              value: j.name,
              onChange: S => H(_ => ({
                ..._,
                [c]: {
                  ..._[c],
                  branches: _[c].branches.map(Z => Z.id === j.id ? {
                    ...Z,
                    name: S.target.value
                  } : Z)
                }
              })),
              style: {
                ...a.fi,
                flex: 1,
                padding: "3px 6px",
                fontSize: 12,
                border: "1px solid transparent"
              },
              onFocus: S => S.target.style.borderColor = v.t,
              onBlur: S => S.target.style.borderColor = "transparent"
            }), l.jsx("button", {
              onClick: () => H(S => ({
                ...S,
                [c]: {
                  ...S[c],
                  branches: S[c].branches.filter(_ => _.id !== j.id)
                }
              })),
              style: {
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#ef4444",
                fontSize: 12
              },
              children: "🗑"
            })]
          }, j.id))]
        }, c)), Ie === "add_user" && l.jsx(mn, {
          close: () => pe(null),
          title: "مستخدم جديد",
          children: l.jsx(hf, {
            regions: p,
            onSubmit: c => {
              !c.username || !c.name || (Q(y => [...y, {
                id: gn(),
                ...c,
                active: !0
              }]), pe(null))
            }
          })
        }), Ie === "add_branch" && l.jsx(mn, {
          close: () => pe(null),
          title: "فرع جديد",
          children: l.jsx(Al, {
            fields: [{
              k: "region",
              l: "المنطقة",
              type: "select",
              opts: Object.keys(p)
            }, {
              k: "name",
              l: "اسم الفرع *",
              type: "text"
            }],
            onSubmit: c => {
              c.name && (H(y => ({
                ...y,
                [c.region]: {
                  ...y[c.region],
                  branches: [...y[c.region].branches, {
                    id: gn(),
                    name: c.name
                  }]
                }
              })), pe(null))
            }
          })
        }), TXe("div", {
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
      if (z === "export_reports") return l.jsxs(l.Fragment, {
        children: [l.jsx("h1", {
          style: a.pt,
          children: "⬇️ تصدير التقارير"
        }), l.jsx("p", {
          style: a.ps,
          children: "تصدير البيانات إلى ملف Excel (CSV) — يومي / أسبوعي / شهري"
        }), l.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: 12
          },
          children: [{
            k: "tasks",
            icon: "📋",
            t: "تقرير المهام اليومية",
            d: "إنجاز جميع المناصب لجميع الفروع",
            c: "#22c55e"
          }, {
            k: "attendance",
            icon: "📅",
            t: "تقرير الحضور والدوام",
            d: "حضور وغياب جميع الموظفين",
            c: v.t
          }, {
            k: "urgent",
            icon: "⚡",
            t: "تقرير المهام المستعجلة",
            d: "جميع المهام العاجلة وحالاتها",
            c: "#ef4444"
          }, {
            k: "maintenance",
            icon: "🔧",
            t: "تقرير طلبات الصيانة",
            d: "جميع طلبات الصيانة والحالات",
            c: "#f59e0b"
          }, {
            k: "complaints",
            icon: "⭐",
            t: "تقرير شكاوى العملاء",
            d: "جميع الشكاوى وتصنيفاتها",
            c: "#8b5cf6"
          }, {
            k: "haccp",
            icon: "🧪",
            t: "تقرير فحوصات HACCP",
            d: "سجل درجات الحرارة والسلامة",
            c: "#06b6d4"
          }, {
            k: "visits",
            icon: "📍",
            t: "تقرير زيارات الفروع",
            d: "تقييمات النظافة وسير العمل والكاشير",
            c: "#8b5cf6"
          }, {
            k: "all",
            icon: "📊",
            t: "ملخص شامل",
            d: "ملخص جميع مؤشرات الأداء",
            c: v.d
          }].map(c => l.jsx("button", {
            onClick: () => pt(c.k),
            style: {
              ...a.card,
              cursor: "pointer",
              textAlign: "right",
              width: "100%",
              borderTop: `3px solid ${c.c}`,
              transition: "all 0.2s"
            },
            children: l.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12
              },
              children: [l.jsx("div", {
                style: {
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  background: `${c.c}10`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24
                },
                children: c.icon
              }), l.jsxs("div", {
                style: {
                  flex: 1
                },
                children: [l.jsx("h3", {
                  style: {
                    fontSize: 14,
                    fontWeight: 700,
                    margin: "0 0 2px"
                  },
                  children: c.t
                }), l.jsx("p", {
                  style: {
                    fontSize: 11,
                    color: "#888",
                    margin: 0
                  },
                  children: c.d
                })]
              }), l.jsx("div", {
                style: {
                  padding: "6px 12px",
                  background: `${c.c}10`,
                  borderRadius: 8,
                  color: c.c,
                  fontSize: 12,
                  fontWeight: 700
                },
                children: "⬇️ CSV"
              })]
            })
          }, c.k))
        }), l.jsxs("div", {
          style: {
            ...a.card,
            marginTop: 16
          },
          children: [l.jsx("h3", {
            style: {
              fontSize: 14,
              fontWeight: 600,
              margin: "0 0 8px"
            },
            children: "💡 ملاحظات"
          }), l.jsx("p", {
            style: {
              fontSize: 12,
              color: "#666",
              lineHeight: 1.7,
              margin: 0
            },
            children: "الملفات المصدّرة بصيغة CSV متوافقة مع Excel و Google Sheets. البيانات تُحفظ في التطبيق لمدة شهرين كحد أدنى. يمكنك تصدير التقارير يومياً أو أسبوعياً أو شهرياً حسب احتياجك."
          })]
        })]
      });
      if (z === "op_guides") {
        const c = Object.values(Bi).filter(y => y.roles.includes(O.role));
        if (A) {
          const y = Bi[A];
          return l.jsxs(l.Fragment, {
            children: [l.jsx("button", {
              onClick: () => {
                te(null), h(null)
              },
              style: {
                background: "none",
                border: "none",
                color: v.t,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 10
              },
              children: "→ العودة للأدلة"
            }), l.jsx("div", {
              style: {
                background: `${y.color}10`,
                borderRadius: 14,
                padding: "16px 20px",
                marginBottom: 16,
                borderRight: `4px solid ${y.color}`
              },
              children: l.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 12
                },
                children: [l.jsx("span", {
                  style: {
                    fontSize: 40
                  },
                  children: y.icon
                }), l.jsxs("div", {
                  children: [l.jsx("h1", {
                    style: {
                      fontSize: 22,
                      fontWeight: 800,
                      margin: 0,
                      color: v.d
                    },
                    children: y.title
                  }), l.jsx("p", {
                    style: {
                      fontSize: 12,
                      color: "#888",
                      margin: "2px 0 0"
                    },
                    children: y.stats
                  })]
                })]
              })
            }), l.jsx("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 8
              },
              children: y.sections.map((j, S) => l.jsxs("div", {
                style: {
                  background: "#fff",
                  borderRadius: 12,
                  border: `1px solid ${v.l}30`,
                  overflow: "hidden"
                },
                children: [l.jsxs("button", {
                  onClick: () => h(b === S ? null : S),
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    background: b === S ? `${y.color}08` : "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "right",
                    padding: "12px 16px"
                  },
                  children: [l.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 8
                    },
                    children: [l.jsx("span", {
                      style: {
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: `${y.color}20`,
                        color: y.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 800
                      },
                      children: S + 1
                    }), l.jsx("h3", {
                      style: {
                        fontSize: 14,
                        fontWeight: 700,
                        color: v.d,
                        margin: 0
                      },
                      children: j.title
                    })]
                  }), l.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 6
                    },
                    children: [l.jsxs("span", {
                      style: {
                        fontSize: 10,
                        color: "#999",
                        background: "#f5f5f5",
                        padding: "2px 8px",
                        borderRadius: 10
                      },
                      children: [j.items.length, " بند"]
                    }), l.jsx("span", {
                      style: {
                        fontSize: 14,
                        color: "#ccc"
                      },
                      children: b === S ? "▲" : "▼"
                    })]
                  })]
                }), b === S && l.jsx("div", {
                  style: {
                    padding: "0 16px 14px"
                  },
                  children: j.items.map((_, Z) => l.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 10,
                      padding: "8px 10px",
                      background: Z % 2 === 0 ? "#fafafa" : "#fff",
                      borderRadius: 8,
                      marginBottom: 3,
                      borderRight: `3px solid ${y.color}${Z%2===0?"30":"15"}`
                    },
                    children: [l.jsx("span", {
                      style: {
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        background: `${y.color}15`,
                        color: y.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: 2
                      },
                      children: Z + 1
                    }), l.jsx("span", {
                      style: {
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "#444"
                      },
                      children: _
                    })]
                  }, Z))
                })]
              }, S))
            })]
          })
        }
        return l.jsxs(l.Fragment, {
          children: [l.jsx("h1", {
            style: a.pt,
            children: "📖 الدليل التشغيلي"
          }), l.jsxs("p", {
            style: a.ps,
            children: ["الأدلة التشغيلية الشاملة حسب المنصب — ", _e ? "جميع الأدلة" : "أدلتك المخصصة"]
          }), l.jsx("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
              gap: 14
            },
            children: c.map(y => l.jsxs("button", {
              onClick: () => te(Object.keys(Bi).find(j => Bi[j].id === y.id)),
              style: {
                background: "#fff",
                borderRadius: 14,
                border: `1px solid ${v.l}30`,
                cursor: "pointer",
                textAlign: "right",
                width: "100%",
                overflow: "hidden",
                transition: "all 0.2s"
              },
              children: [l.jsx("div", {
                style: {
                  background: `${y.color}10`,
                  padding: "16px 18px",
                  borderBottom: `2px solid ${y.color}20`
                },
                children: l.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12
                  },
                  children: [l.jsx("span", {
                    style: {
                      fontSize: 40
                    },
                    children: y.icon
                  }), l.jsxs("div", {
                    children: [l.jsx("h3", {
                      style: {
                        fontSize: 17,
                        fontWeight: 800,
                        margin: 0,
                        color: v.d
                      },
                      children: y.title
                    }), l.jsx("p", {
                      style: {
                        fontSize: 11,
                        color: "#888",
                        margin: "3px 0 0"
                      },
                      children: y.stats
                    })]
                  })]
                })
              }), l.jsxs("div", {
                style: {
                  padding: "12px 18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [l.jsxs("div", {
                  style: {
                    display: "flex",
                    gap: 4
                  },
                  children: [y.sections.slice(0, 3).map((j, S) => l.jsx("span", {
                    style: {
                      fontSize: 9,
                      padding: "2px 6px",
                      background: `${y.color}10`,
                      borderRadius: 4,
                      color: y.color
                    },
                    children: j.title.substring(0, 15)
                  }, S)), y.sections.length > 3 && l.jsxs("span", {
                    style: {
                      fontSize: 9,
                      padding: "2px 6px",
                      background: "#f5f5f5",
                      borderRadius: 4,
                      color: "#999"
                    },
                    children: ["+", y.sections.length - 3]
                  })]
                }), l.jsxs("span", {
                  style: {
                    fontSize: 12,
                    color: y.color,
                    fontWeight: 700
                  },
                  children: [y.sections.length, " قسم →"]
                })]
              })]
            }, y.id))
          })]
        })
      }
      return z === "circulars" ? l.jsxs(l.Fragment, {
        children: [l.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
            flexWrap: "wrap",
            gap: 8
          },
          children: [l.jsxs("div", {
            children: [l.jsx("h1", {
              style: a.pt,
              children: "📢 التعاميم"
            }), l.jsx("p", {
              style: a.ps,
              children: "التعاميم والقرارات الإدارية"
            })]
          }), _e && l.jsx("button", {
            style: a.addBtn,
            onClick: () => pe("circular"),
            children: "+ تعميم جديد"
          })]
        }), it.length === 0 ? l.jsxs("div", {
          style: {
            textAlign: "center",
            padding: 40,
            color: "#999"
          },
          children: [l.jsx("span", {
            style: {
              fontSize: 48
            },
            children: "📢"
          }), l.jsx("p", {
            style: {
              marginTop: 8,
              fontSize: 14
            },
            children: "لا توجد تعاميم حالياً"
          }), _e && l.jsx("p", {
            style: {
              fontSize: 12,
              color: "#bbb"
            },
            children: 'اضغط "تعميم جديد" لإصدار أول تعميم'
          })]
        }) : l.jsx("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 12
          },
          children: it.map(c => {
            const y = c.priority === "عاجل" ? "#ef4444" : c.priority === "مهم" ? "#f59e0b" : v.t,
              j = c.priority === "عاجل" ? "#fef2f2" : c.priority === "مهم" ? "#fffbeb" : "#f0f9fa";
            return l.jsxs("div", {
              style: {
                background: "#fff",
                borderRadius: 14,
                border: `1px solid ${y}25`,
                overflow: "hidden"
              },
              children: [l.jsxs("div", {
                style: {
                  background: j,
                  padding: "10px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: `2px solid ${y}20`
                },
                children: [l.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                  },
                  children: [l.jsx("span", {
                    style: {
                      fontSize: 20
                    },
                    children: c.priority === "عاجل" ? "🔴" : c.priority === "مهم" ? "🟡" : "🟢"
                  }), l.jsxs("div", {
                    children: [l.jsx("span", {
                      style: {
                        fontSize: 11,
                        fontWeight: 700,
                        color: y,
                        textTransform: "uppercase"
                      },
                      children: c.priority
                    }), l.jsxs("span", {
                      style: {
                        fontSize: 11,
                        color: "#888",
                        marginRight: 8
                      },
                      children: ["• ", c.target === "all" ? "📢 للجميع" : "👤 " + qn[c.target]]
                    })]
                  })]
                }), l.jsxs("span", {
                  style: {
                    fontSize: 11,
                    color: "#999",
                    background: "#fff",
                    padding: "2px 8px",
                    borderRadius: 12
                  },
                  children: ["📅 ", En(c.date)]
                })]
              }), l.jsxs("div", {
                style: {
                  padding: "14px 16px"
                },
                children: [l.jsx("h3", {
                  style: {
                    fontSize: 17,
                    fontWeight: 800,
                    margin: "0 0 8px",
                    color: v.d
                  },
                  children: c.title
                }), l.jsx("p", {
                  style: {
                    fontSize: 13,
                    color: "#555",
                    lineHeight: 1.8,
                    margin: 0,
                    whiteSpace: "pre-wrap"
                  },
                  children: c.content
                }), c.files && c.files.length > 0 && l.jsxs("div", {
                  style: {
                    marginTop: 12,
                    padding: 10,
                    background: "#fafafa",
                    borderRadius: 10,
                    border: `1px solid ${v.l}30`
                  },
                  children: [l.jsxs("p", {
                    style: {
                      fontSize: 11,
                      fontWeight: 700,
                      color: v.d,
                      margin: "0 0 8px"
                    },
                    children: ["📎 المرفقات (", c.files.length, ")"]
                  }), l.jsx("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: 6
                    },
                    children: c.files.map((S, _) => l.jsxs("a", {
                      href: S.url || "#",
                      download: S.name,
                      target: "_blank",
                      rel: "noreferrer",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 12px",
                        background: "#fff",
                        borderRadius: 8,
                        border: `1px solid ${v.l}40`,
                        textDecoration: "none",
                        color: v.d,
                        cursor: "pointer",
                        transition: "all 0.2s"
                      },
                      children: [S.type === "صورة" && S.url ? l.jsx("img", {
                        src: S.url,
                        style: {
                          width: 44,
                          height: 44,
                          borderRadius: 6,
                          objectFit: "cover",
                          border: `1px solid ${v.l}`
                        },
                        alt: S.name
                      }) : l.jsx("div", {
                        style: {
                          width: 44,
                          height: 44,
                          borderRadius: 6,
                          background: `${v.t}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 22
                        },
                        children: S.type === "PDF" ? "📄" : "📎"
                      }), l.jsxs("div", {
                        style: {
                          flex: 1
                        },
                        children: [l.jsx("span", {
                          style: {
                            fontSize: 13,
                            fontWeight: 600,
                            display: "block"
                          },
                          children: S.name
                        }), l.jsxs("span", {
                          style: {
                            fontSize: 10,
                            color: "#999"
                          },
                          children: [S.size, " • ", S.type]
                        })]
                      }), l.jsx("span", {
                        style: {
                          fontSize: 12,
                          color: v.t,
                          fontWeight: 600,
                          padding: "4px 10px",
                          background: `${v.t}10`,
                          borderRadius: 6
                        },
                        children: "⬇️ تحميل"
                      })]
                    }, _))
                  })]
                }), l.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 12,
                    paddingTop: 8,
                    borderTop: `1px solid ${v.l}20`
                  },
                  children: [l.jsxs("span", {
                    style: {
                      fontSize: 11,
                      color: "#999"
                    },
                    children: ["✍️ صادر من: ", l.jsx("strong", {
                      children: c.by
                    })]
                  }), _e && l.jsx("button", {
                    onClick: () => Le(S => S.filter(_ => _.id !== c.id)),
                    style: {
                      padding: "4px 12px",
                      borderRadius: 6,
                      border: "1px solid #ef444430",
                      background: "#fef2f2",
                      cursor: "pointer",
                      fontSize: 11,
                      color: "#ef4444",
                      fontWeight: 600
                    },
                    children: "🗑 حذف التعميم"
                  })]
                })]
              })]
            }, c.id)
          })
        }), Ie === "circular" && l.jsx(mn, {
          close: () => pe(null),
          title: "تعميم جديد",
          children: l.jsx(pf, {
            onSubmit: c => {
              !c.title || !c.content || (Le(y => [{
                id: gn(),
                ...c,
                date: U(),
                by: O.name
              }, ...y]), pe(null))
            }
          })
        })]
      }) : null
    };
  return l.jsxs("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "'Tajawal',sans-serif",
      direction: "rtl",
      background: "#f8fafa",
      color: v.d
    },
    children: [l.jsxs("div", {
      style: {
        display: "none",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        height: 54,
        background: v.t,
        color: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 14px",
        zIndex: 1001
      },
      className: "mob-head",
      children: [l.jsx("button", {
        onClick: () => D(!Ae),
        style: {
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          fontSize: 20
        },
        children: Ae ? "✕" : "☰"
      }), l.jsx("span", {
        style: {
          fontSize: 18,
          fontWeight: 700
        },
        children: "طابور"
      }), l.jsx("button", {
        onClick: () => {
          L(null), D(!1)
        },
        style: {
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          fontSize: 16
        },
        children: "🚪"
      })]
    }), l.jsxs("div", {
      style: {
        width: 240,
        background: "#fff",
        borderLeft: `1px solid ${v.l}`,
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 1e3,
        overflowY: "auto",
        transition: "transform 0.3s",
        ...Ae ? {
          transform: "translateX(0)"
        } : {}
      },
      children: [l.jsxs("div", {
        style: {
          padding: "16px 14px 4px"
        },
        children: [l.jsx("span", {
          style: {
            fontSize: 32,
            fontWeight: 800,
            color: v.t
          },
          children: "طابور"
        }), l.jsx("br", {}), l.jsx("span", {
          style: {
            fontSize: 10,
            color: "#999"
          },
          children: "نظام إدارة التشغيل"
        })]
      }), l.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 14px",
          borderBottom: `1px solid ${v.l}30`
        },
        children: [l.jsx("div", {
          style: {
            width: 34,
            height: 34,
            borderRadius: 9,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: 13,
            background: dd[O.role]
          },
          children: O.name[0]
        }), l.jsxs("div", {
          children: [l.jsx("div", {
            style: {
              fontWeight: 600,
              fontSize: 12
            },
            children: O.name
          }), l.jsx("div", {
            style: {
              fontSize: 10,
              color: "#999"
            },
            children: qn[O.role]
          })]
        })]
      }), l.jsx("nav", {
        style: {
          flex: 1,
          padding: "6px 4px",
          overflowY: "auto"
        },
        children: An.map(Y => l.jsxs("button", {
          onClick: () => {
            oe(Y.id), D(!1)
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            width: "100%",
            padding: "7px 10px",
            border: "none",
            background: z === Y.id ? `${v.t}15` : "none",
            borderRadius: 7,
            cursor: "pointer",
            fontSize: 12,
            color: z === Y.id ? v.t : "#666",
            fontWeight: z === Y.id ? 600 : 400,
            textAlign: "right",
            position: "relative"
          },
          children: [l.jsx("span", {
            children: Y.label
          }), Y.badge > 0 && l.jsx("span", {
            style: {
              position: "absolute",
              left: 8,
              top: 3,
              background: "#ef4444",
              color: "#fff",
              fontSize: 9,
              fontWeight: 700,
              padding: "1px 5px",
              borderRadius: 8
            },
            children: Y.badge
          })]
        }, Y.id))
      }), l.jsx("button", {
        onClick: () => L(null),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 14px",
          border: "none",
          background: "none",
          borderTop: `1px solid ${v.l}30`,
          cursor: "pointer",
          color: "#999",
          fontSize: 12
        },
        children: "🚪 تسجيل خروج"
      })]
    }), Ae && l.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.3)",
        zIndex: 999
      },
      onClick: () => D(!1)
    }), l.jsx("div", {
      style: {
        flex: 1,
        marginRight: 240,
        padding: "16px 22px",
        minHeight: "100vh"
      },
      children: l.jsx("div", {
        style: {
          maxWidth: 1100,
          margin: "0 auto"
        },
        children: Nl()
      })
    })]
  })
}

function _n({
  t: W,
  v: Q,
  s: p,
  c: H,
  onClick: T,
  bar: L
}) {
  return l.jsxs("button", {
    onClick: T,
    style: {
      ...a.kpi,
      borderTop: `3px solid ${H}`
    },
    children: [l.jsx("p", {
      style: {
        fontSize: 11,
        color: "#888",
        margin: "0 0 4px"
      },
      children: W
    }), l.jsx("p", {
      style: {
        fontSize: 24,
        fontWeight: 800,
        color: H,
        margin: "0 0 2px"
      },
      children: Q
    }), l.jsx("p", {
      style: {
        fontSize: 10,
        color: "#aaa",
        margin: 0
      },
      children: p
    }), L !== void 0 && l.jsx("div", {
      style: {
        height: 4,
        background: "#f0f0f0",
        borderRadius: 2,
        marginTop: 6,
        overflow: "hidden"
      },
      children: l.jsx("div", {
        style: {
          height: "100%",
          borderRadius: 2,
          width: `${L}%`,
          background: H,
          transition: "width 0.4s"
        }
      })
    })]
  })
}

function Ts({
  label: W,
  done: Q,
  total: p
}) {
  const H = p ? Math.round(Q / p * 100) : 0;
  return l.jsxs("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "3px 0"
    },
    children: [l.jsx("span", {
      style: {
        fontSize: 11,
        width: 180,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      children: W
    }), l.jsx("div", {
      style: {
        flex: 1,
        height: 4,
        background: "#f0f0f0",
        borderRadius: 2,
        overflow: "hidden"
      },
      children: l.jsx("div", {
        style: {
          height: "100%",
          borderRadius: 2,
          width: `${H}%`,
          background: xe(H)
        }
      })
    }), l.jsxs("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: xe(H),
        width: 40,
        textAlign: "left"
      },
      children: [Q, "/", p]
    })]
  })
}

function mn({
  close: W,
  title: Q,
  children: p
}) {
  return l.jsx("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2e3,
      padding: 14
    },
    onClick: W,
    children: l.jsxs("div", {
      style: {
        background: "#fff",
        borderRadius: 14,
        maxWidth: 650,
        width: "100%",
        maxHeight: "90vh",
        overflow: "auto",
        direction: "rtl"
      },
      onClick: H => H.stopPropagation(),
      children: [l.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 16px",
          borderBottom: "1px solid #f0f0f0",
          position: "sticky",
          top: 0,
          background: "#fff",
          borderRadius: "14px 14px 0 0",
          zIndex: 1
        },
        children: [l.jsx("h2", {
          style: {
            fontSize: 16,
            fontWeight: 700,
            margin: 0
          },
          children: Q
        }), l.jsx("button", {
          onClick: W,
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#999",
            fontSize: 18
          },
          children: "✕"
        })]
      }), l.jsx("div", {
        style: {
          padding: 18
        },
        children: p
      })]
    })
  })
}

function Al({
  fields: W,
  onSubmit: Q
}) {
  const [p, H] = me.useState(Object.fromEntries(W.map(T => [T.k, T.type === "select" && T.opts[0] || ""])));
  return l.jsxs(l.Fragment, {
    children: [W.map(T => l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: T.l
      }), T.type === "textarea" ? l.jsx("textarea", {
        value: p[T.k],
        onChange: L => H(ie => ({
          ...ie,
          [T.k]: L.target.value
        })),
        style: {
          ...a.fi,
          minHeight: 60
        }
      }) : T.type === "select" ? l.jsx("select", {
        value: p[T.k],
        onChange: L => H(ie => ({
          ...ie,
          [T.k]: L.target.value
        })),
        style: a.fi,
        children: T.opts.map(L => l.jsx("option", {
          value: L,
          children: L
        }, L))
      }) : l.jsx("input", {
        value: p[T.k],
        onChange: L => H(ie => ({
          ...ie,
          [T.k]: L.target.value
        })),
        style: a.fi
      })]
    }, T.k)), l.jsx("button", {
      onClick: () => Q(p),
      style: a.submitBtn,
      children: "حفظ"
    })]
  })
}

function vf({
  initial: W,
  busy: Q,
  error: p,
  onSubmit: H
}) {
  const T = W || {}, [L, ie] = me.useState({
      title: T.title || "",
      icon: T.icon || "📄",
      role: T.role || "branch_manager",
      frequency: T.frequency || "weekly",
      dueWeekday: T.dueWeekday != null ? T.dueWeekday : RQ_SAT,
      dueDay: T.dueDay != null ? T.dueDay : RQ_MDAY,
      notes: T.notes || "",
      sortOrder: T.sortOrder != null ? T.sortOrder : 0
    }),
    $ = (D, B) => ie(De => ({
      ...De,
      [D]: B
    })),
    z = rqNorm({
      ...L,
      id: "preview"
    }),
    oe = rqDue(z),
    Ae = !L.title.trim();
  return l.jsxs(l.Fragment, {
    children: [l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: "عنوان التقرير *"
      }), l.jsx("input", {
        value: L.title,
        onChange: D => $("title", D.target.value),
        style: a.fi,
        placeholder: "مثال: تقرير المبيعات الشامل"
      })]
    }), l.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8
      },
      children: [l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "الأيقونة"
        }), l.jsx("input", {
          value: L.icon,
          onChange: D => $("icon", D.target.value.slice(0, 4)),
          style: {
            ...a.fi,
            textAlign: "center",
            fontSize: 18
          }
        })]
      }), l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "المنصب المسؤول"
        }), l.jsx("select", {
          value: L.role,
          onChange: D => $("role", D.target.value),
          style: a.fi,
          children: Object.keys(qn).map(D => l.jsx("option", {
            value: D,
            children: qn[D]
          }, D))
        })]
      })]
    }), l.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8
      },
      children: [l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "التكرار"
        }), l.jsx("select", {
          value: L.frequency,
          onChange: D => $("frequency", D.target.value),
          style: a.fi,
          children: ["weekly", "monthly"].map(D => l.jsx("option", {
            value: D,
            children: RQ_FREQ_AR[D]
          }, D))
        })]
      }), L.frequency === "weekly" ? l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "يوم التسليم الأسبوعي"
        }), l.jsx("select", {
          value: String(L.dueWeekday),
          onChange: D => $("dueWeekday", Number(D.target.value)),
          style: a.fi,
          children: RQ_WD.map((D, B) => l.jsx("option", {
            value: String(B),
            children: D
          }, B))
        })]
      }) : l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "يوم التسليم من الشهر (1 - 31)"
        }), l.jsx("input", {
          type: "number",
          min: 1,
          max: 31,
          value: L.dueDay,
          onChange: D => $("dueDay", rqInt(D.target.value, 1, 31, RQ_MDAY)),
          style: a.fi
        })]
      })]
    }), l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: "ملاحظات (اختياري)"
      }), l.jsx("textarea", {
        value: L.notes,
        onChange: D => $("notes", D.target.value.slice(0, 500)),
        style: {
          ...a.fi,
          minHeight: 54
        },
        placeholder: "تفاصيل أو جهة الاستلام"
      })]
    }), l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: "ترتيب العرض"
      }), l.jsx("input", {
        type: "number",
        min: 0,
        value: L.sortOrder,
        onChange: D => $("sortOrder", rqInt(D.target.value, 0, 9999, 0)),
        style: a.fi
      })]
    }), l.jsxs("div", {
      style: {
        background: `${v.t}12`,
        border: `1px solid ${v.t}35`,
        borderRadius: 8,
        padding: "9px 12px",
        fontSize: 11.5,
        color: v.d,
        display: "flex",
        flexDirection: "column",
        gap: 3
      },
      children: [l.jsxs("span", {
        children: ["🗓️ القاعدة: ", oe.rule]
      }), l.jsxs("span", {
        children: ["📌 أقرب موعد تسليم: ", oe.pretty, " (", rqDaysTxt(oe.days), ")"]
      })]
    }), p && l.jsx("div", {
      style: {
        background: "#ef444415",
        color: "#ef4444",
        padding: "8px 12px",
        borderRadius: 8,
        fontSize: 11.5,
        marginTop: 10,
        fontWeight: 600
      },
      children: p
    }), l.jsx("button", {
      disabled: Q || Ae,
      onClick: () => H({
        ...L,
        title: L.title.trim()
      }),
      style: {
        ...a.submitBtn,
        opacity: Q || Ae ? .6 : 1,
        cursor: Q || Ae ? "not-allowed" : "pointer"
      },
      children: Q ? "جارٍ الحفظ…" : "حفظ التقرير"
    })]
  })
}

function ff({
  onSubmit: W
}) {
  const [Q, p] = me.useState({});
  return l.jsxs(l.Fragment, {
    children: [Oi.map(H => l.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 8
      },
      children: [l.jsx("span", {
        style: {
          fontSize: 20
        },
        children: H.icon
      }), l.jsxs("div", {
        style: {
          flex: 1
        },
        children: [l.jsxs("label", {
          style: a.fl,
          children: [H.title, " (", H.range, ")"]
        }), H.range.includes("°م") ? l.jsx("input", {
          type: "number",
          value: Q[H.id] || "",
          onChange: T => p(L => ({
            ...L,
            [H.id]: T.target.value
          })),
          style: a.fi,
          placeholder: H.range
        }) : l.jsxs("select", {
          value: Q[H.id] || "",
          onChange: T => p(L => ({
            ...L,
            [H.id]: T.target.value
          })),
          style: a.fi,
          children: [l.jsx("option", {
            value: "",
            children: "—"
          }), l.jsx("option", {
            children: "نظيف"
          }), l.jsx("option", {
            children: "تم"
          }), l.jsx("option", {
            children: "ملتزم"
          }), l.jsx("option", {
            children: "غير نظيف"
          }), l.jsx("option", {
            children: "لم يتم"
          }), l.jsx("option", {
            children: "غير ملتزم"
          })]
        })]
      })]
    }, H.id)), l.jsx("button", {
      onClick: () => W(Q),
      style: a.submitBtn,
      children: "حفظ الفحص"
    })]
  })
}

function pf({
  onSubmit: W
}) {
  const [Q, p] = me.useState({
    title: "",
    content: "",
    priority: "عاجل",
    target: "all",
    files: []
  }), [H, T] = me.useState(!1), L = me.useRef(), ie = async $ => {
    T(!0);
    const z = [];
    for (const oe of Array.from($.target.files || [])) {
      const Ae = await new Promise(D => {
        const B = new FileReader;
        B.onload = () => D(B.result), B.readAsDataURL(oe)
      });
      z.push({
        name: oe.name,
        size: `${(oe.size/1024).toFixed(0)} KB`,
        type: oe.type.startsWith("image") ? "صورة" : oe.type.includes("pdf") ? "PDF" : "ملف",
        url: Ae
      })
    }
    p(oe => ({
      ...oe,
      files: [...oe.files, ...z]
    })), T(!1)
  };
  return l.jsxs(l.Fragment, {
    children: [l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: "عنوان التعميم *"
      }), l.jsx("input", {
        value: Q.title,
        onChange: $ => p(z => ({
          ...z,
          title: $.target.value
        })),
        style: a.fi
      })]
    }), l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: "محتوى التعميم *"
      }), l.jsx("textarea", {
        value: Q.content,
        onChange: $ => p(z => ({
          ...z,
          content: $.target.value
        })),
        style: {
          ...a.fi,
          minHeight: 80
        }
      })]
    }), l.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8
      },
      children: [l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "الأهمية"
        }), l.jsxs("select", {
          value: Q.priority,
          onChange: $ => p(z => ({
            ...z,
            priority: $.target.value
          })),
          style: a.fi,
          children: [l.jsx("option", {
            children: "عاجل"
          }), l.jsx("option", {
            children: "مهم"
          }), l.jsx("option", {
            children: "عادي"
          })]
        })]
      }), l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "موجه إلى"
        }), l.jsxs("select", {
          value: Q.target,
          onChange: $ => p(z => ({
            ...z,
            target: $.target.value
          })),
          style: a.fi,
          children: [l.jsx("option", {
            value: "all",
            children: "الجميع"
          }), l.jsx("option", {
            value: "area_manager",
            children: "مدراء المناطق"
          }), l.jsx("option", {
            value: "branch_manager",
            children: "مشرفي الفروع"
          }), l.jsx("option", {
            value: "cashier",
            children: "الكاشير"
          })]
        })]
      })]
    }), l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: "إرفاق ملف"
      }), l.jsx("input", {
        ref: L,
        type: "file",
        multiple: !0,
        accept: "image/*,.pdf,.doc,.docx,.xls,.xlsx,.pptx",
        style: {
          display: "none"
        },
        onChange: ie
      }), l.jsx("button", {
        onClick: () => {
          var $;
          return ($ = L.current) == null ? void 0 : $.click()
        },
        disabled: H,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 14px",
          border: `2px dashed ${v.t}`,
          borderRadius: 8,
          background: `${v.t}08`,
          cursor: "pointer",
          fontSize: 12,
          color: v.t,
          fontWeight: 600,
          width: "100%",
          justifyContent: "center"
        },
        children: H ? "⏳ جاري الرفع..." : "📎 إرفاق ملفات / صور"
      }), Q.files.length > 0 && l.jsx("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginTop: 8
        },
        children: Q.files.map(($, z) => l.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 10px",
            background: `${v.t}08`,
            borderRadius: 8,
            border: `1px solid ${v.t}20`
          },
          children: [$.type === "صورة" && $.url ? l.jsx("img", {
            src: $.url,
            style: {
              width: 40,
              height: 40,
              borderRadius: 6,
              objectFit: "cover"
            },
            alt: ""
          }) : l.jsx("span", {
            style: {
              fontSize: 20
            },
            children: $.type === "PDF" ? "📄" : "📎"
          }), l.jsxs("div", {
            style: {
              flex: 1
            },
            children: [l.jsx("span", {
              style: {
                fontSize: 12,
                fontWeight: 600
              },
              children: $.name
            }), l.jsx("br", {}), l.jsx("span", {
              style: {
                fontSize: 10,
                color: "#999"
              },
              children: $.size
            })]
          }), l.jsx("button", {
            onClick: () => p(oe => ({
              ...oe,
              files: oe.files.filter((Ae, D) => D !== z)
            })),
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#ef4444",
              fontSize: 14
            },
            children: "✕"
          })]
        }, z))
      })]
    }), l.jsx("button", {
      onClick: () => Q.title && Q.content && W(Q),
      style: a.submitBtn,
      children: "إصدار التعميم"
    })]
  })
}

function hf({
  regions: W,
  onSubmit: Q
}) {
  var ie;
  const [p, H] = me.useState({
    username: "",
    password: "1234",
    name: "",
    role: "cashier",
    region: "jeddah",
    branch: ""
  }), T = p.role === "branch_manager" || p.role === "cashier", L = ((ie = W[p.region]) == null ? void 0 : ie.branches) || [];
  return l.jsxs(l.Fragment, {
    children: [l.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8
      },
      children: [l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "اسم المستخدم *"
        }), l.jsx("input", {
          value: p.username,
          onChange: $ => H(z => ({
            ...z,
            username: $.target.value
          })),
          style: a.fi,
          placeholder: "مثال: ahmed"
        })]
      }), l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "كلمة المرور"
        }), l.jsx("input", {
          value: p.password,
          onChange: $ => H(z => ({
            ...z,
            password: $.target.value
          })),
          style: a.fi
        })]
      })]
    }), l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: "الاسم الكامل *"
      }), l.jsx("input", {
        value: p.name,
        onChange: $ => H(z => ({
          ...z,
          name: $.target.value
        })),
        style: a.fi
      })]
    }), l.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8
      },
      children: [l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "المنصب"
        }), l.jsx("select", {
          value: p.role,
          onChange: $ => H(z => ({
            ...z,
            role: $.target.value,
            branch: ""
          })),
          style: a.fi,
          children: Object.entries(qn).map(([$, z]) => l.jsx("option", {
            value: $,
            children: z
          }, $))
        })]
      }), l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "المنطقة"
        }), l.jsx("select", {
          value: p.region,
          onChange: $ => H(z => ({
            ...z,
            region: $.target.value,
            branch: ""
          })),
          style: a.fi,
          children: Object.entries(W).map(([$, z]) => l.jsx("option", {
            value: $,
            children: z.name
          }, $))
        })]
      })]
    }), T && l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: {
          ...a.fl,
          color: "#ef4444"
        },
        children: "الفرع * (مطلوب لمشرف الفرع والكاشير)"
      }), l.jsxs("select", {
        value: p.branch,
        onChange: $ => H(z => ({
          ...z,
          branch: $.target.value
        })),
        style: {
          ...a.fi,
          borderColor: p.branch ? "#D0E0E0" : "#ef4444"
        },
        children: [l.jsx("option", {
          value: "",
          children: "— اختر الفرع —"
        }), L.map($ => l.jsx("option", {
          value: $.id,
          children: $.name
        }, $.id))]
      }), !p.branch && l.jsx("span", {
        style: {
          fontSize: 10,
          color: "#ef4444"
        },
        children: "⚠️ يجب اختيار الفرع"
      })]
    }), l.jsx("button", {
      onClick: () => {
        !p.username || !p.name || T && !p.branch || Q(p)
      },
      style: {
        ...a.submitBtn,
        opacity: !p.username || !p.name || T && !p.branch ? .5 : 1
      },
      children: "إنشاء المستخدم"
    })]
  })
}

function gf({
  branches: W,
  userName: Q,
  onSubmit: p
}) {
  var Ae;
  const H = new Date().toLocaleTimeString("ar-SA", {
      hour: "2-digit",
      minute: "2-digit"
    }),
    [T, L] = me.useState({
      branch: ((Ae = W[0]) == null ? void 0 : Ae.name) || "",
      date: U(),
      startTime: H,
      inspector: Q,
      supervisor: "",
      employeeCount: "",
      visitType: "دورية",
      scores: {},
      notes: "",
      corrections: [{
        issue: "",
        action: "",
        responsible: "",
        deadline: ""
      }],
      sendWarning: !1,
      warningText: ""
    }),
    ie = {
      cleanliness: [{
        id: "vc1",
        label: "نظافة الاستقبال",
        max: 5
      }, {
        id: "vc2",
        label: "نظافة المطبخ",
        max: 5
      }, {
        id: "vc3",
        label: "نظافة الحمامات",
        max: 5
      }, {
        id: "vc4",
        label: "واجهة الفرع",
        max: 5
      }, {
        id: "vc5",
        label: "أرفف وثلاجات",
        max: 5
      }, {
        id: "vc6",
        label: "ملابس الموظفين",
        max: 5
      }],
      operations: [{
        id: "vo1",
        label: "سرعة التحضير",
        max: 5
      }, {
        id: "vo2",
        label: "توزيع المهام",
        max: 5
      }, {
        id: "vo3",
        label: "إدارة الذروة",
        max: 5
      }, {
        id: "vo4",
        label: "استجابة العملاء",
        max: 5
      }, {
        id: "vo5",
        label: "تنسيق الأقسام",
        max: 5
      }, {
        id: "vo6",
        label: "إجراءات العمل",
        max: 5
      }],
      cashierEval: [{
        id: "vk1",
        label: "ترحيب فوري",
        max: 5
      }, {
        id: "vk2",
        label: "ابتسامة وتواصل",
        max: 5
      }, {
        id: "vk3",
        label: "المظهر",
        max: 5
      }, {
        id: "vk4",
        label: "وضوح الاستفسار",
        max: 5
      }, {
        id: "vk5",
        label: "عرض الإضافات",
        max: 5
      }, {
        id: "vk6",
        label: "تأكيد الطلب",
        max: 5
      }, {
        id: "vk7",
        label: "تسليم احترافي",
        max: 5
      }, {
        id: "vk8",
        label: "متابعة الرضا",
        max: 5
      }]
    },
    $ = D => D.reduce((B, De) => B + (T.scores[De.id] || 0), 0),
    z = $(ie.cleanliness) + $(ie.operations) + $(ie.cashierEval),
    oe = () => L(D => ({
      ...D,
      corrections: [...D.corrections, {
        issue: "",
        action: "",
        responsible: "",
        deadline: ""
      }]
    }));
  return l.jsxs(l.Fragment, {
    children: [l.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 8
      },
      children: [l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "الفرع"
        }), l.jsx("select", {
          value: T.branch,
          onChange: D => L(B => ({
            ...B,
            branch: D.target.value
          })),
          style: a.fi,
          children: W.map(D => l.jsx("option", {
            children: D.name
          }, D.id))
        })]
      }), l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "المشرف"
        }), l.jsx("input", {
          value: T.supervisor,
          onChange: D => L(B => ({
            ...B,
            supervisor: D.target.value
          })),
          style: a.fi
        })]
      }), l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "عدد الموظفين"
        }), l.jsx("input", {
          type: "number",
          value: T.employeeCount,
          onChange: D => L(B => ({
            ...B,
            employeeCount: D.target.value
          })),
          style: a.fi
        })]
      })]
    }), l.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 8
      },
      children: [l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "⏰ وقت البدء (تلقائي)"
        }), l.jsx("input", {
          value: T.startTime,
          readOnly: !0,
          style: {
            ...a.fi,
            background: "#f0fafa",
            fontWeight: 700,
            color: v.t
          }
        })]
      }), l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "نوع الزيارة"
        }), l.jsxs("select", {
          value: T.visitType,
          onChange: D => L(B => ({
            ...B,
            visitType: D.target.value
          })),
          style: a.fi,
          children: [l.jsx("option", {
            children: "دورية"
          }), l.jsx("option", {
            children: "مفاجئة"
          }), l.jsx("option", {
            children: "متابعة"
          })]
        })]
      }), l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "📅 التاريخ"
        }), l.jsx("input", {
          value: T.date,
          readOnly: !0,
          style: {
            ...a.fi,
            background: "#f0fafa"
          }
        })]
      })]
    }), [{
      t: "🧹 النظافة (30 درجة)",
      cr: ie.cleanliness,
      mx: 30,
      c: "#22c55e"
    }, {
      t: "⚡ سير العمل والمشرف (30 درجة)",
      cr: ie.operations,
      mx: 30,
      c: "#f59e0b"
    }, {
      t: "💳 تقييم الكاشير (40 درجة)",
      cr: ie.cashierEval,
      mx: 40,
      c: "#3b82f6"
    }].map(D => l.jsxs("div", {
      style: {
        background: "#fafafa",
        borderRadius: 10,
        padding: 12,
        marginBottom: 8,
        borderRight: `3px solid ${D.c}`
      },
      children: [l.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8
        },
        children: [l.jsx("h4", {
          style: {
            margin: 0,
            fontSize: 13,
            color: D.c
          },
          children: D.t
        }), l.jsxs("span", {
          style: {
            fontWeight: 800,
            fontSize: 15,
            color: xe(D.mx > 0 ? $(D.cr) / D.mx * 100 : 0)
          },
          children: [$(D.cr), "/", D.mx]
        })]
      }), D.cr.map(B => l.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "3px 0",
          borderBottom: "1px solid #eee"
        },
        children: [l.jsx("span", {
          style: {
            fontSize: 12,
            flex: 1
          },
          children: B.label
        }), l.jsx("div", {
          style: {
            display: "flex",
            gap: 2
          },
          children: [0, 1, 2, 3, 4, 5].map(De => l.jsx("button", {
            onClick: () => L(We => ({
              ...We,
              scores: {
                ...We.scores,
                [B.id]: De
              }
            })),
            style: {
              width: 24,
              height: 24,
              borderRadius: 5,
              border: "1px solid #ddd",
              background: T.scores[B.id] === De ? v.t : "#fff",
              color: T.scores[B.id] === De ? "#fff" : v.d,
              cursor: "pointer",
              fontSize: 11,
              fontWeight: 700
            },
            children: De
          }, De))
        })]
      }, B.id))]
    }, D.t)), l.jsxs("div", {
      style: {
        textAlign: "center",
        padding: 12,
        background: `${xe(z)}10`,
        borderRadius: 10,
        marginBottom: 10,
        border: `2px solid ${xe(z)}30`
      },
      children: [l.jsxs("span", {
        style: {
          fontSize: 28,
          fontWeight: 800,
          color: xe(z)
        },
        children: [z, "/100"]
      }), l.jsx("span", {
        style: {
          display: "block",
          fontSize: 12,
          fontWeight: 600,
          color: xe(z)
        },
        children: Dl(z)
      })]
    }), l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: {
          ...a.fl,
          color: "#ef4444"
        },
        children: "🔧 إجراءات التصحيح"
      }), T.corrections.map((D, B) => l.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 6,
          marginBottom: 6,
          padding: 8,
          background: "#fef2f2",
          borderRadius: 6
        },
        children: [l.jsx("input", {
          value: D.issue,
          onChange: De => {
            const We = [...T.corrections];
            We[B].issue = De.target.value, L(ke => ({
              ...ke,
              corrections: We
            }))
          },
          style: a.fi,
          placeholder: "المشكلة"
        }), l.jsx("input", {
          value: D.action,
          onChange: De => {
            const We = [...T.corrections];
            We[B].action = De.target.value, L(ke => ({
              ...ke,
              corrections: We
            }))
          },
          style: a.fi,
          placeholder: "الإجراء التصحيحي"
        })]
      }, B)), l.jsx("button", {
        onClick: oe,
        style: {
          ...a.stBtn,
          fontSize: 11,
          color: v.t
        },
        children: "+ إضافة إجراء"
      })]
    }), l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: "ملاحظات"
      }), l.jsx("textarea", {
        value: T.notes,
        onChange: D => L(B => ({
          ...B,
          notes: D.target.value
        })),
        style: {
          ...a.fi,
          minHeight: 40
        }
      })]
    }), l.jsxs("div", {
      style: {
        background: "#fef2f2",
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        border: "1px solid #ef444420"
      },
      children: [l.jsxs("label", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
          marginBottom: T.sendWarning ? 10 : 0
        },
        children: [l.jsx("input", {
          type: "checkbox",
          checked: T.sendWarning,
          onChange: D => L(B => ({
            ...B,
            sendWarning: D.target.checked
          })),
          style: {
            width: 18,
            height: 18,
            accentColor: "#ef4444"
          }
        }), l.jsx("span", {
          style: {
            fontSize: 13,
            fontWeight: 700,
            color: "#ef4444"
          },
          children: "⚠️ إرسال إنذار / عقوبة للمشرف"
        })]
      }), T.sendWarning && l.jsxs(l.Fragment, {
        children: [l.jsxs("div", {
          style: a.fg,
          children: [l.jsx("label", {
            style: a.fl,
            children: "نوع الإجراء"
          }), l.jsxs("select", {
            value: T.warningType || "إنذار شفهي",
            onChange: D => L(B => ({
              ...B,
              warningType: D.target.value
            })),
            style: a.fi,
            children: [l.jsx("option", {
              children: "إنذار شفهي"
            }), l.jsx("option", {
              children: "إنذار كتابي أول"
            }), l.jsx("option", {
              children: "إنذار كتابي ثاني"
            }), l.jsx("option", {
              children: "إنذار نهائي"
            }), l.jsx("option", {
              children: "خصم من الراتب"
            }), l.jsx("option", {
              children: "إيقاف مؤقت"
            })]
          })]
        }), l.jsxs("div", {
          style: a.fg,
          children: [l.jsx("label", {
            style: a.fl,
            children: "سبب الإنذار"
          }), l.jsx("textarea", {
            value: T.warningText || "",
            onChange: D => L(B => ({
              ...B,
              warningText: D.target.value
            })),
            style: {
              ...a.fi,
              minHeight: 50
            },
            placeholder: "اكتب سبب الإنذار بالتفصيل..."
          })]
        })]
      })]
    }), l.jsx("button", {
      onClick: () => {
        T.branch && p({
          ...T,
          cleanliness: $(ie.cleanliness),
          operations: $(ie.operations),
          cashierScore: $(ie.cashierEval),
          corrections: T.corrections.filter(D => D.issue),
          endTime: new Date().toLocaleTimeString("ar-SA", {
            hour: "2-digit",
            minute: "2-digit"
          })
        })
      },
      style: a.submitBtn,
      children: "حفظ تقرير الزيارة وإرسال"
    })]
  })
}

function mf({
  branches: W,
  onSubmit: Q
}) {
  var ie;
  const [p, H] = me.useState({
    title: "",
    branch: ((ie = W[0]) == null ? void 0 : ie.name) || "",
    priority: "متوسط",
    desc: "",
    photos: []
  }), T = me.useRef(), L = $ => {
    const z = Array.from($.target.files || []).map(oe => ({
      name: oe.name,
      size: `${(oe.size/1024).toFixed(0)} KB`
    }));
    H(oe => ({
      ...oe,
      photos: [...oe.photos, ...z]
    }))
  };
  return l.jsxs(l.Fragment, {
    children: [l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: "العنوان *"
      }), l.jsx("input", {
        value: p.title,
        onChange: $ => H(z => ({
          ...z,
          title: $.target.value
        })),
        style: a.fi
      })]
    }), l.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8
      },
      children: [l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "الفرع"
        }), l.jsx("select", {
          value: p.branch,
          onChange: $ => H(z => ({
            ...z,
            branch: $.target.value
          })),
          style: a.fi,
          children: W.map($ => l.jsx("option", {
            children: $.name
          }, $.id))
        })]
      }), l.jsxs("div", {
        style: a.fg,
        children: [l.jsx("label", {
          style: a.fl,
          children: "الأولوية"
        }), l.jsxs("select", {
          value: p.priority,
          onChange: $ => H(z => ({
            ...z,
            priority: $.target.value
          })),
          style: a.fi,
          children: [l.jsx("option", {
            children: "عالي"
          }), l.jsx("option", {
            children: "متوسط"
          }), l.jsx("option", {
            children: "منخفض"
          })]
        })]
      })]
    }), l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: "التفاصيل"
      }), l.jsx("textarea", {
        value: p.desc,
        onChange: $ => H(z => ({
          ...z,
          desc: $.target.value
        })),
        style: {
          ...a.fi,
          minHeight: 50
        }
      })]
    }), l.jsxs("div", {
      style: a.fg,
      children: [l.jsx("label", {
        style: a.fl,
        children: "إرفاق صور"
      }), l.jsx("input", {
        ref: T,
        type: "file",
        multiple: !0,
        accept: "image/*",
        style: {
          display: "none"
        },
        onChange: L
      }), l.jsx("button", {
        onClick: () => {
          var $;
          return ($ = T.current) == null ? void 0 : $.click()
        },
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 14px",
          border: `2px dashed ${v.t}`,
          borderRadius: 8,
          background: `${v.t}08`,
          cursor: "pointer",
          fontSize: 12,
          color: v.t,
          fontWeight: 600,
          width: "100%",
          justifyContent: "center"
        },
        children: "📷 إرفاق صور للمشكلة"
      }), p.photos.length > 0 && l.jsx("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          marginTop: 6
        },
        children: p.photos.map(($, z) => l.jsxs("span", {
          style: {
            fontSize: 10,
            padding: "3px 8px",
            background: `${v.t}15`,
            borderRadius: 5
          },
          children: ["🖼️ ", $.name]
        }, z))
      })]
    }), l.jsx("button", {
      onClick: () => p.title && Q(p),
      style: a.submitBtn,
      children: "إرسال الطلب"
    })]
  })
}
const fd = "#80AFB2",
  a = {
    pt: {
      fontSize: 22,
      fontWeight: 700,
      margin: "0 0 3px"
    },
    ps: {
      fontSize: 12,
      color: "#999",
      margin: "0 0 14px"
    },
    kpig: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
      gap: 10,
      marginBottom: 16
    },
    kpi: {
      background: "#fff",
      borderRadius: 10,
      padding: "12px 10px",
      textAlign: "right",
      border: "1px solid #e8eded",
      cursor: "pointer",
      width: "100%"
    },
    card: {
      background: "#fff",
      borderRadius: 10,
      padding: 14,
      border: "1px solid #e8eded"
    },
    cg: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
      gap: 10
    },
    bdg: {
      fontSize: 10,
      padding: "2px 8px",
      borderRadius: 14,
      fontWeight: 600
    },
    addBtn: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      padding: "7px 16px",
      background: fd,
      color: "#fff",
      border: "none",
      borderRadius: 7,
      cursor: "pointer",
      fontSize: 12,
      fontWeight: 600
    },
    stBtn: {
      padding: "5px 12px",
      borderRadius: 6,
      border: "1px solid #e8eded",
      background: "#fff",
      cursor: "pointer",
      fontSize: 12,
      fontWeight: 600
    },
    ti: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "9px 12px",
      background: "#fff",
      border: "1px solid #e8eded",
      borderRadius: 8,
      cursor: "pointer",
      textAlign: "right",
      width: "100%"
    },
    tid: {
      background: "#f0faf0",
      borderColor: "#22c55e30"
    },
    tc: {
      width: 20,
      height: 20,
      borderRadius: 5,
      border: "2px solid #D0E0E0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      fontSize: 11,
      fontWeight: 700,
      color: "#fff"
    },
    tcd: {
      background: "#22c55e",
      borderColor: "#22c55e"
    },
    sel: {
      padding: "7px 12px",
      borderRadius: 7,
      border: "1px solid #D0E0E0",
      fontSize: 12,
      background: "#fff",
      direction: "rtl",
      width: "100%"
    },
    fg: {
      marginBottom: 10
    },
    fl: {
      display: "block",
      fontSize: 11,
      fontWeight: 600,
      marginBottom: 3,
      color: "#555"
    },
    fi: {
      width: "100%",
      padding: "7px 10px",
      borderRadius: 7,
      border: "1px solid #D0E0E0",
      fontSize: 12,
      background: "#fafafa",
      boxSizing: "border-box",
      direction: "rtl"
    },
    submitBtn: {
      width: "100%",
      padding: 9,
      background: fd,
      color: "#fff",
      border: "none",
      borderRadius: 7,
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 600,
      marginTop: 8
    },
    th: {
      padding: "8px 6px",
      textAlign: "right",
      fontSize: 12,
      fontWeight: 600
    },
    td: {
      padding: "8px 6px",
      textAlign: "right",
      fontSize: 12
    }
  };
of.createRoot(document.getElementById("root")).render(l.jsx(Jc.StrictMode, {
  children: l.jsx(cf, {})
}));