/**
 * Kakao SDK for JavaScript - v1.43.5
 *
 * Copyright 2017 Kakao Corp.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * OSS Notice | KakaoSDK-Javascript
 *
 * This application is Copyright © Kakao Corp. All rights reserved.
 * The following sets forth attribution notices for third party software that may be contained in this application.
 * If you have any questions or concerns, please contact us at opensource@kakaocorp.com
 *
 *
 * crypto-js
 *
 * https://github.com/brix/crypto-js
 *
 * Copyright 2009-2013 Jeff Mott
 * Copyright 2013-2016 Evan Vosberg
 *
 * MIT License
 *
 *
 * easyXDM
 *
 * https://github.com/oyvindkinsey/easyXDM/
 *
 * Copyright 2009-2011 Øyvind Sean Kinsey, oyvind@kinsey.no
 *
 * MIT License
 *
 *
 * ES6-Promise
 *
 * https://github.com/stefanpenner/es6-promise
 *
 * Copyright 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 *
 * MIT License
 *
 *
 * Kakao Web2App Library
 *
 * https://github.com/kakao/web2app
 *
 * Copyright 2015 Kakao Corp. http://www.kakaocorp.com
 *
 * MIT License
 *
 *
 * lodash
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors
 *
 * MIT License
 *
 *
 * ua_parser
 *
 * https://github.com/html5crew/ua_parser
 *
 * Copyright HTML5 Tech. Team in Daum Communications Corp.
 *
 * MIT License
 *
 *
 * ``````````
 * MIT License
 *
 * Copyright (c)
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ``````````
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Kakao = e.Kakao || {})
}(this, (function(e) {
    "use strict";
    var t = "object" == typeof global && global && global.Object === Object && global
      , n = "object" == typeof self && self && self.Object === Object && self
      , r = t || n || Function("return this")()
      , o = r.Symbol
      , i = Object.prototype
      , a = i.hasOwnProperty
      , c = i.toString
      , s = o ? o.toStringTag : void 0;
    var u = Object.prototype.toString;
    var l = o ? o.toStringTag : void 0;
    function p(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : l && l in Object(e) ? function(e) {
            var t = a.call(e, s)
              , n = e[s];
            try {
                e[s] = void 0;
                var r = !0
            } catch (e) {}
            var o = c.call(e);
            return r && (t ? e[s] = n : delete e[s]),
            o
        }(e) : function(e) {
            return u.call(e)
        }(e)
    }
    function d(e) {
        return null != e && "object" == typeof e
    }
    var f = Array.isArray
      , h = /\s/;
    var m = /^\s+/;
    function v(e) {
        return e ? e.slice(0, function(e) {
            for (var t = e.length; t-- && h.test(e.charAt(t)); )
                ;
            return t
        }(e) + 1).replace(m, "") : e
    }
    function g(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    var y = /^[-+]0x[0-9a-f]+$/i
      , b = /^0b[01]+$/i
      , _ = /^0o[0-7]+$/i
      , k = parseInt;
    function w(e) {
        if ("number" == typeof e)
            return e;
        if (function(e) {
            return "symbol" == typeof e || d(e) && "[object Symbol]" == p(e)
        }(e))
            return NaN;
        if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t
        }
        if ("string" != typeof e)
            return 0 === e ? e : +e;
        e = v(e);
        var n = b.test(e);
        return n || _.test(e) ? k(e.slice(2), n ? 2 : 8) : y.test(e) ? NaN : +e
    }
    var S = 1 / 0;
    function x(e) {
        var t = function(e) {
            return e ? (e = w(e)) === S || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        }(e)
          , n = t % 1;
        return t == t ? n ? t - n : t : 0
    }
    function O(e) {
        return e
    }
    function j(e) {
        if (!g(e))
            return !1;
        var t = p(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
    var A, T = r["__core-js_shared__"], C = (A = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "")) ? "Symbol(src)_1." + A : "";
    var I = Function.prototype.toString;
    var P = /^\[object .+?Constructor\]$/
      , F = Function.prototype
      , B = Object.prototype
      , E = F.toString
      , U = B.hasOwnProperty
      , R = RegExp("^" + E.call(U).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function L(e) {
        return !(!g(e) || (t = e,
        C && C in t)) && (j(e) ? R : P).test(function(e) {
            if (null != e) {
                try {
                    return I.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var t
    }
    function M(e, t, n) {
        switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
    var z = Date.now;
    var D, q, N, K = function() {
        try {
            var e = L(t = function(e, t) {
                return null == e ? void 0 : e[t]
            }(Object, "defineProperty")) ? t : void 0;
            return e({}, "", {}),
            e
        } catch (e) {}
        var t
    }(), H = K, J = H ? function(e, t) {
        return H(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: (n = t,
            function() {
                return n
            }
            ),
            writable: !0
        });
        var n
    }
    : O, W = (D = J,
    q = 0,
    N = 0,
    function() {
        var e = z()
          , t = 16 - (e - N);
        if (N = e,
        t > 0) {
            if (++q >= 800)
                return arguments[0]
        } else
            q = 0;
        return D.apply(void 0, arguments)
    }
    ), X = W;
    function $(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); )
            ;
        return e
    }
    var G = /^(?:0|[1-9]\d*)$/;
    function V(e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && G.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    function Y(e, t, n) {
        "__proto__" == t && H ? H(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
    function Q(e, t) {
        return e === t || e != e && t != t
    }
    var Z = Object.prototype.hasOwnProperty;
    function ee(e, t, n) {
        var r = e[t];
        Z.call(e, t) && Q(r, n) && (void 0 !== n || t in e) || Y(e, t, n)
    }
    var te = Math.max;
    function ne(e, t) {
        return X(function(e, t, n) {
            return t = te(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, o = -1, i = te(r.length - t, 0), a = Array(i); ++o < i; )
                    a[o] = r[t + o];
                o = -1;
                for (var c = Array(t + 1); ++o < t; )
                    c[o] = r[o];
                return c[t] = n(a),
                M(e, this, c)
            }
        }(e, t, O), e + "")
    }
    function re(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }
    function oe(e) {
        return null != e && re(e.length) && !j(e)
    }
    function ie(e, t, n) {
        if (!g(n))
            return !1;
        var r = typeof t;
        return !!("number" == r ? oe(n) && V(t, n.length) : "string" == r && t in n) && Q(n[t], e)
    }
    var ae = Object.prototype;
    function ce(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || ae)
    }
    function se(e) {
        return d(e) && "[object Arguments]" == p(e)
    }
    var ue = Object.prototype
      , le = ue.hasOwnProperty
      , pe = ue.propertyIsEnumerable
      , de = se(function() {
        return arguments
    }()) ? se : function(e) {
        return d(e) && le.call(e, "callee") && !pe.call(e, "callee")
    }
      , fe = de;
    var he = "object" == typeof e && e && !e.nodeType && e
      , me = he && "object" == typeof module && module && !module.nodeType && module
      , ve = me && me.exports === he ? r.Buffer : void 0
      , ge = (ve ? ve.isBuffer : void 0) || function() {
        return !1
    }
      , ye = {};
    ye["[object Float32Array]"] = ye["[object Float64Array]"] = ye["[object Int8Array]"] = ye["[object Int16Array]"] = ye["[object Int32Array]"] = ye["[object Uint8Array]"] = ye["[object Uint8ClampedArray]"] = ye["[object Uint16Array]"] = ye["[object Uint32Array]"] = !0,
    ye["[object Arguments]"] = ye["[object Array]"] = ye["[object ArrayBuffer]"] = ye["[object Boolean]"] = ye["[object DataView]"] = ye["[object Date]"] = ye["[object Error]"] = ye["[object Function]"] = ye["[object Map]"] = ye["[object Number]"] = ye["[object Object]"] = ye["[object RegExp]"] = ye["[object Set]"] = ye["[object String]"] = ye["[object WeakMap]"] = !1;
    var be = "object" == typeof e && e && !e.nodeType && e
      , _e = be && "object" == typeof module && module && !module.nodeType && module
      , ke = _e && _e.exports === be && t.process
      , we = function() {
        try {
            var e = _e && _e.require && _e.require("util").types;
            return e || ke && ke.binding && ke.binding("util")
        } catch (e) {}
    }()
      , Se = we && we.isTypedArray
      , xe = Se ? function(e) {
        return function(t) {
            return e(t)
        }
    }(Se) : function(e) {
        return d(e) && re(e.length) && !!ye[p(e)]
    }
      , Oe = xe
      , je = Object.prototype.hasOwnProperty;
    function Ae(e, t) {
        var n = f(e)
          , r = !n && fe(e)
          , o = !n && !r && ge(e)
          , i = !n && !r && !o && Oe(e)
          , a = n || r || o || i
          , c = a ? function(e, t) {
            for (var n = -1, r = Array(e); ++n < e; )
                r[n] = t(n);
            return r
        }(e.length, String) : []
          , s = c.length;
        for (var u in e)
            !t && !je.call(e, u) || a && ("length" == u || o && ("offset" == u || "parent" == u) || i && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || V(u, s)) || c.push(u);
        return c
    }
    function Te(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
    var Ce = Te(Object.keys, Object)
      , Ie = Object.prototype.hasOwnProperty;
    function Pe(e) {
        return oe(e) ? Ae(e) : function(e) {
            if (!ce(e))
                return Ce(e);
            var t = [];
            for (var n in Object(e))
                Ie.call(e, n) && "constructor" != n && t.push(n);
            return t
        }(e)
    }
    var Fe = Object.prototype.hasOwnProperty;
    function Be(e) {
        if (!g(e))
            return function(e) {
                var t = [];
                if (null != e)
                    for (var n in Object(e))
                        t.push(n);
                return t
            }(e);
        var t = ce(e)
          , n = [];
        for (var r in e)
            ("constructor" != r || !t && Fe.call(e, r)) && n.push(r);
        return n
    }
    function Ee(e) {
        return oe(e) ? Ae(e, !0) : Be(e)
    }
    var Ue, Re = (Ue = function(e, t) {
        !function(e, t, n, r) {
            var o = !n;
            n || (n = {});
            for (var i = -1, a = t.length; ++i < a; ) {
                var c = t[i]
                  , s = r ? r(n[c], e[c], c, n, e) : void 0;
                void 0 === s && (s = e[c]),
                o ? Y(n, c, s) : ee(n, c, s)
            }
        }(t, Ee(t), e)
    }
    ,
    ne((function(e, t) {
        var n = -1
          , r = t.length
          , o = r > 1 ? t[r - 1] : void 0
          , i = r > 2 ? t[2] : void 0;
        for (o = Ue.length > 3 && "function" == typeof o ? (r--,
        o) : void 0,
        i && ie(t[0], t[1], i) && (o = r < 3 ? void 0 : o,
        r = 1),
        e = Object(e); ++n < r; ) {
            var a = t[n];
            a && Ue(e, a, n, o)
        }
        return e
    }
    ))), Le = Te(Object.getPrototypeOf, Object), Me = Function.prototype, ze = Object.prototype, De = Me.toString, qe = ze.hasOwnProperty, Ne = De.call(Object);
    var Ke, He = function(e, t, n) {
        for (var r = -1, o = Object(e), i = n(e), a = i.length; a--; ) {
            var c = i[Ke ? a : ++r];
            if (!1 === t(o[c], c, o))
                break
        }
        return e
    };
    var Je = function(e, t) {
        return function(n, r) {
            if (null == n)
                return n;
            if (!oe(n))
                return e(n, r);
            for (var o = n.length, i = t ? o : -1, a = Object(n); (t ? i-- : ++i < o) && !1 !== r(a[i], i, a); )
                ;
            return n
        }
    }((function(e, t) {
        return e && He(e, t, Pe)
    }
    ))
      , We = Je
      , Xe = Object.prototype
      , $e = Xe.hasOwnProperty
      , Ge = ne((function(e, t) {
        e = Object(e);
        var n = -1
          , r = t.length
          , o = r > 2 ? t[2] : void 0;
        for (o && ie(t[0], t[1], o) && (r = 1); ++n < r; )
            for (var i = t[n], a = Ee(i), c = -1, s = a.length; ++c < s; ) {
                var u = a[c]
                  , l = e[u];
                (void 0 === l || Q(l, Xe[u]) && !$e.call(e, u)) && (e[u] = i[u])
            }
        return e
    }
    ));
    function Ve(e, t) {
        var n;
        return (f(e) ? $ : We)(e, "function" == typeof (n = t) ? n : O)
    }
    function Ye(e) {
        return "string" == typeof e || !f(e) && d(e) && "[object String]" == p(e)
    }
    function Qe(e) {
        return !0 === e || !1 === e || d(e) && "[object Boolean]" == p(e)
    }
    function Ze(e) {
        return d(e) && 1 === e.nodeType && !function(e) {
            if (!d(e) || "[object Object]" != p(e))
                return !1;
            var t = Le(e);
            if (null === t)
                return !0;
            var n = qe.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && De.call(n) == Ne
        }(e)
    }
    function et(e) {
        return "number" == typeof e && e == x(e)
    }
    function tt(e) {
        return "number" == typeof e || d(e) && "[object Number]" == p(e)
    }
    function nt(e) {
        return function(t) {
            return Object.prototype.toString.call(t) === "[object ".concat(e, "]")
        }
    }
    function rt(e) {
        return nt("Blob")(e)
    }
    function ot(e) {
        return nt("File")(e)
    }
    function it(e) {
        return nt("FileList")(e)
    }
    function at(e, t) {
        return Array.prototype.slice.call(e).map(t)
    }
    function ct(e, t) {
        return Array.prototype.slice.call(e).every(t)
    }
    function st(e, t) {
        return [e, t].reduce((function(e, t) {
            return e.filter((function(e) {
                return -1 === t.indexOf(e)
            }
            ))
        }
        ))
    }
    function ut(e) {
        return Object.keys(e || {})
    }
    function lt() {}
    function pt() {
        return Math.random().toString(36).slice(2)
    }
    function dt(e) {
        return Ze(e) ? e : Ye(e) ? document.querySelector(e) : null
    }
    function ft(e, t, n) {
        e.addEventListener && e.addEventListener(t, n, !1)
    }
    function ht(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    function mt(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          , n = t ? encodeURIComponent : function(e) {
            return e
        }
          , r = at(ut(e), (function(t) {
            var r = e[t];
            return n(t) + "=" + n(d(r) ? JSON.stringify(r) : r)
        }
        ));
        return r.join("&")
    }
    function vt(e) {
        if (!f(e))
            throw new Error("elements should be an Array");
        return function(t) {
            return e.indexOf(t) > -1
        }
    }
    function gt(e) {
        if (!f(e))
            throw new Error("validators should be an Array");
        return function(t) {
            return e.some((function(e) {
                return e(t)
            }
            ))
        }
    }
    var yt = function() {
        var e = {
            _data: {},
            setItem: function(e, t) {
                return this._data[e] = String(t)
            },
            getItem: function(e) {
                return this._data.hasOwnProperty(e) ? this._data[e] : null
            },
            removeItem: function(e) {
                return delete this._data[e]
            },
            clear: function() {
                return this._data = {}
            }
        };
        try {
            return "localStorage"in window && null !== window.localStorage ? (window.localStorage.setItem("store", ""),
            window.localStorage.removeItem("store"),
            window.localStorage) : e
        } catch (t) {
            return e
        }
    }();
    function bt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function _t(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? bt(Object(n), !0).forEach((function(t) {
                Ot(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bt(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function kt(e) {
        return kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        kt(e)
    }
    function wt(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function St(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, Ut(r.key), r)
        }
    }
    function xt(e, t, n) {
        return t && St(e.prototype, t),
        n && St(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function Ot(e, t, n) {
        return (t = Ut(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function jt(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        t && Tt(e, t)
    }
    function At(e) {
        return At = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        At(e)
    }
    function Tt(e, t) {
        return Tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        Tt(e, t)
    }
    function Ct(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t))
            return t;
        if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e)
    }
    function It(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = At(e);
            if (t) {
                var o = At(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return Ct(this, n)
        }
    }
    function Pt(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i, a, c = [], s = !0, u = !1;
                try {
                    if (i = (n = n.call(e)).next,
                    0 === t) {
                        if (Object(n) !== n)
                            return;
                        s = !1
                    } else
                        for (; !(s = (r = i.call(n)).done) && (c.push(r.value),
                        c.length !== t); s = !0)
                            ;
                } catch (e) {
                    u = !0,
                    o = e
                } finally {
                    try {
                        if (!s && null != n.return && (a = n.return(),
                        Object(a) !== a))
                            return
                    } finally {
                        if (u)
                            throw o
                    }
                }
                return c
            }
        }(e, t) || Bt(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Ft(e) {
        return function(e) {
            if (Array.isArray(e))
                return Et(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || Bt(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Bt(e, t) {
        if (e) {
            if ("string" == typeof e)
                return Et(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Et(e, t) : void 0
        }
    }
    function Et(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function Ut(e) {
        var t = function(e, t) {
            if ("object" != typeof e || null === e)
                return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != typeof r)
                    return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
    }
    var Rt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
      , Lt = function() {
        function e(e) {
            var n = {}
              , r = /(dolfin)[ \/]([\w.]+)/.exec(e) || /(edge)[ \/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(tizen)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e) || ["", "unknown"];
            return "webkit" === r[1] ? r = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) || /(android)[ \/]([\w._\-]+);/.exec(e) || [r[0], "safari", r[2]] : "mozilla" === r[1] ? /trident/.test(e) ? r[1] = "msie" : r[1] = "firefox" : /polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e) && (r[1] = "polaris"),
            n[r[1]] = !0,
            n.name = r[1],
            n.version = t(r[2]),
            n
        }
        function t(e) {
            var t = {}
              , n = e ? e.split(/\.|-|_/) : ["0", "0", "0"];
            return t.info = n.join("."),
            t.major = n[0] || "0",
            t.minor = n[1] || "0",
            t.patch = n[2] || "0",
            t
        }
        function n(e) {
            return function(e) {
                if (e.match(/ipad/) || e.match(/android/) && !e.match(/mobi|mini|fennec/) || e.match(/macintosh/) && window.navigator.maxTouchPoints > 1)
                    return !0;
                return !1
            }(e) ? "tablet" : function(e) {
                if (e.match(/linux|windows (nt|98)|macintosh|cros/) && !e.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/))
                    return !0;
                return !1
            }(e) ? "pc" : function(e) {
                return !!e.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|tizen.+mobile|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)
            }(e) ? "mobile" : ""
        }
        function r(e) {
            var n = {}
              , r = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) || !!/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e) && ["", "polaris", "0.0.0"] || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(e) || /(android)[ \/]([\w._\-]+);/.exec(e) || !!/android/.test(e) && ["", "android", "0.0.0"] || !!/(windows)/.test(e) && ["", "windows", "0.0.0"] || /(mac) os x ([\w._\-]+)/.exec(e) || /(tizen)[ \/]([\w._\-]+);/.exec(e) || !!/(linux)/.test(e) && ["", "linux", "0.0.0"] || !!/webos/.test(e) && ["", "webos", "0.0.0"] || /(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(e) || /(bada)[ \/]([\w._\-]+)/.exec(e) || !!/bada/.test(e) && ["", "bada", "0.0.0"] || !!/(rim|blackberry|bb10)/.test(e) && ["", "blackberry", "0.0.0"] || ["", "unknown", "0.0.0"];
            return "iphone" === r[1] || "ipad" === r[1] || "ipod" === r[1] ? r[1] = "ios" : "windows" === r[1] && "98" === r[2] && (r[2] = "0.98.0"),
            "mac" === r[1] && "undefined" != typeof window && window.navigator.maxTouchPoints > 1 && (r[1] = "ios"),
            "cros" === r[1] && (r[1] = "chrome"),
            n[r[1]] = !0,
            n.name = r[1],
            n.version = t(r[2]),
            n
        }
        Array.isArray || (Array.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        );
        var o = ["crios", "fxios", "daumapps"];
        function i(e, n) {
            var r = {}
              , i = null
              , a = o;
            Array.isArray(n) ? a = o.concat(n) : "string" == typeof n && (a = o.concat([n]));
            for (var c = 0, s = a.length; c < s; c += 1) {
                var u = a[c];
                if (i = new RegExp("(" + u + ")[ \\/]([\\w._\\-]+)").exec(e))
                    break
            }
            return i || (i = ["", ""]),
            i[1] ? (r.isApp = !0,
            r.name = i[1],
            r.version = t(i[2])) : r.isApp = !1,
            r
        }
        return function(t, o) {
            var a = function(e) {
                return e ? e.toLowerCase() : "undefined" != typeof window && window.navigator && "string" == typeof window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : ""
            }(t);
            return {
                ua: a,
                browser: e(a),
                platform: n(a),
                os: r(a),
                app: i(a, o)
            }
        }
    }()
      , Mt = Lt();
    var zt, Dt, qt, Nt, Kt = "https://kauth.kakao.com", Ht = "https://story.kakao.com", Jt = "https://developers.kakao.com", Wt = (zt = location,
    Dt = zt.protocol,
    qt = zt.hostname,
    Nt = zt.port,
    "".concat(Dt, "//").concat(qt).concat(Nt ? ":" + Nt : "")), Xt = Mt, $t = /KAKAOTALK/i.test(Xt.ua), Gt = "1.43.5".concat(""), Vt = navigator, Yt = ["sdk/".concat(Gt), "os/javascript", "sdk_type/javascript", "lang/".concat(Vt.userLanguage || Vt.language), "device/".concat(Vt.platform.replace(/ /g, "_")), "origin/".concat(encodeURIComponent(Wt))].join(" "), Qt = {
        accountDomain: "https://accounts.kakao.com",
        authDomain: Kt,
        authorize: "".concat(Kt, "/oauth/authorize"),
        loginWidget: "".concat(Kt, "/public/widget/login/kakaoLoginWidget.html"),
        redirectUri: "JS-SDK",
        universalKakaoLink: "".concat("https://talk-apps.kakao.com", "/scheme/"),
        talkLoginScheme: "kakaokompassauth://authorize",
        talkLoginRedirectUri: "https://kapi.kakao.com/cors/afterlogin.html",
        talkInappScheme: "kakaotalk://inappbrowser",
        talkSyncpluginScheme: "kakaotalk://bizplugin?plugin_id=6011263b74fc2b49c73a7298",
        apiRemote: "".concat("https://kapi.kakao.com", "/cors/"),
        sharerDomain: "https://sharer.kakao.com",
        pickerDomain: "https://friend-picker.kakao.com",
        appsDomain: "https://apps.kakao.com",
        talkLinkScheme: "kakaolink://send",
        talkAndroidPackage: "com.kakao.talk",
        channel: "https://pf.kakao.com",
        channelIcon: "".concat(Jt, "/assets/img/about/logos"),
        storyShare: "".concat(Ht, "/s/share"),
        storyChannelFollow: "".concat(Ht, "/s/follow"),
        storyIcon: "".concat(Jt, "/sdk/js/resources/story/icon_small.png"),
        storyPostScheme: "storylink://posting",
        naviScheme: "kakaonavi-sdk://navigate",
        naviFallback: "https://kakaonavi.kakao.com/launch/index.do"
    }, Zt = null;
    function en() {
        return Zt
    }
    function tn(e) {
        Zt = e
    }
    var nn = null;
    function rn() {
        return nn
    }
    function on(e) {
        nn = e,
        Yt = Yt.split(" extra_app_key")[0] + " extra_app_key/".concat(nn)
    }
    function an(e) {
        Error.prototype.constructor.apply(this, arguments),
        this.name = "KakaoError",
        this.message = e
    }
    function cn(e) {
        return Re.apply(void 0, [{
            cleanup: function() {
                Ve(e, (function(e) {
                    return e.cleanup && e.cleanup()
                }
                ))
            }
        }].concat(Ft(e)))
    }
    function sn(e) {
        Ve(e, (function(e) {
            e()
        }
        )),
        e.length = 0
    }
    function un(e, t, n) {
        if (!1 === t(e))
            throw new an("Illegal argument for ".concat(n))
    }
    function ln() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = arguments.length > 1 ? arguments[1] : void 0
          , n = arguments.length > 2 ? arguments[2] : void 0;
        if (!d(e))
            throw new Error("params should be an Object");
        j(t.before) && t.before(e),
        j(t.defaults) ? Ge(e, t.defaults(e)) : Ge(e, t.defaults);
        var r = t.required
          , o = void 0 === r ? {} : r
          , i = t.optional
          , a = void 0 === i ? {} : i
          , c = st(ut(o), ut(e));
        if (c.length > 0)
            throw new an("Missing required keys: ".concat(c.join(","), " at ").concat(n));
        var s = Re({}, o, a)
          , u = st(ut(e), ut(s));
        if (u.length > 0)
            throw new an("Invalid parameter keys: ".concat(u.join(","), " at ").concat(n));
        return Ve(e, (function(e, t) {
            un(e, s[t], '"'.concat(t, '" in ').concat(n))
        }
        )),
        j(t.after) && t.after(e),
        e
    }
    function pn() {
        return (Math.random().toString(36).slice(2) + en() + Date.now().toString(36)).slice(0, 60)
    }
    function dn(e, t) {
        if (Xt.os.android) {
            var n = JSON.stringify({
                appKey: Zt,
                KA: Yt
            });
            return "market://details?id=".concat(e, "&referrer=").concat(n)
        }
        return Xt.os.ios ? "https://itunes.apple.com/app/id".concat(t) : location.href
    }
    function fn(e) {
        try {
            return e()
        } catch (e) {
            throw e instanceof TypeError ? new an("kakao.js should be loaded from a web server") : new an("EasyXDM - ".concat(e.message))
        }
    }
    an.prototype = new Error;
    var hn = {};
    function mn(e, t, n) {
        var r = hn[t];
        return r && r.close && !r.closed && r.close(),
        hn[t] = window.open(e, t, n),
        hn[t]
    }
    function vn(e, t, n) {
        Ve(n, (function(n, r) {
            var o = t.getAttribute(n);
            null !== o && (e[r] = "true" === o || "false" === o ? "true" === o : o)
        }
        ))
    }
    function gn(e, t, n) {
        var r = document.createElement("iframe");
        r.id = r.name = e,
        r.src = t,
        r.setAttribute("style", "border:none; width:0; height:0; display:none; overflow:hidden;"),
        document.body.appendChild(r),
        n.push((function() {
            document.body.removeChild(r)
        }
        ))
    }
    function yn(e, t, n) {
        var r = function n(r) {
            var o = r.data
              , i = r.origin;
            if (o && i === t) {
                var a = JSON.parse(o);
                a.code ? e.fail(a) : e.success(a),
                e.always(a),
                ht(window, "message", n)
            }
        };
        ft(window, "message", r),
        n.push((function() {
            ht(window, "message", r)
        }
        ))
    }
    function bn(e, t) {
        var n = t.url
          , r = t.popupName
          , o = t.popupFeatures
          , i = Xt.browser.msie ? {} : mn("", r, o);
        return i.focus && i.focus(),
        _n(e, n, r),
        i
    }
    function _n(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
          , r = document.createElement("form");
        r.setAttribute("accept-charset", "utf-8"),
        r.setAttribute("method", "post"),
        r.setAttribute("action", t),
        r.setAttribute("target", n),
        r.setAttribute("style", "display:none"),
        Ve(e, (function(e, t) {
            var n = document.createElement("input");
            n.type = "hidden",
            n.name = t,
            n.value = Ye(e) ? e : JSON.stringify(e),
            r.appendChild(n)
        }
        )),
        document.body.appendChild(r),
        r.submit(),
        document.body.removeChild(r)
    }
    var kn = {};
    var wn = {
        subscribe: function(e, t) {
            kn[e] = kn[e] || [],
            kn[e].push(t)
        },
        unsubscribe: function(e, t) {
            for (var n = kn[e], r = 0; r < n.length; r++)
                if (n[r] === t)
                    return void n.splice(r, 1)
        },
        dispatch: function(e) {
            Ve(kn[e], (function(e) {
                e()
            }
            ))
        }
    }
      , Sn = function() {
        function e(t, n) {
            wt(this, e),
            this._interval = t,
            this._maxCount = n,
            this._count = 0,
            this._stopped = !1,
            this._timeout = null
        }
        return xt(e, [{
            key: "start",
            value: function(e, t) {
                null !== this._timeout && this.stop(),
                this._count = 0,
                this._stopped = !1,
                this._doPolling(e, t)
            }
        }, {
            key: "_doPolling",
            value: function(e, t) {
                var n = this;
                this._stopped || (this._timeout = setTimeout((function() {
                    ++n._count > n._maxCount ? t() : (e(),
                    n._doPolling(e, t))
                }
                ), this._interval))
            }
        }, {
            key: "stop",
            value: function() {
                this._stopped = !0,
                clearTimeout(this._timeout),
                this._timeout = null
            }
        }]),
        e
    }()
      , xn = {
        success: lt,
        fail: lt,
        always: lt
    }
      , On = _t({
        throughTalk: !0,
        persistAccessToken: !0,
        persistRefreshToken: !1
    }, xn)
      , jn = {
        success: j,
        fail: j,
        always: j,
        persistAccessToken: Qe,
        persistRefreshToken: Qe,
        approvalType: vt(["project"]),
        scope: Ye,
        throughTalk: Qe,
        plusFriendPublicId: Ye,
        channelPublicId: Ye,
        serviceTerms: Ye,
        redirectUri: Ye,
        state: Ye,
        deviceType: vt(["watch", "tv"]),
        nonce: Ye
    }
      , An = {
        optional: {
            success: j,
            fail: j,
            always: j,
            close: j,
            returnUrl: Ye,
            forceMobileLayout: Qe,
            enableBackButton: Qe
        },
        defaults: _t(_t({}, xn), {}, {
            close: lt,
            forceMobileLayout: !1,
            enableBackButton: !0
        })
    }
      , Tn = {
        createLoginButton: {
            required: {
                container: gt([Ze, Ye])
            },
            optional: _t({
                lang: vt(["en", "kr"]),
                size: vt(["small", "medium", "large"])
            }, jn),
            defaults: _t({
                lang: "kr",
                size: "medium"
            }, On)
        },
        login: {
            optional: jn,
            defaults: On
        },
        authorize: {
            optional: {
                redirectUri: Ye,
                approvalType: vt(["project"]),
                scope: Ye,
                throughTalk: Qe,
                plusFriendPublicId: Ye,
                channelPublicId: Ye,
                serviceTerms: Ye,
                isPopup: Qe,
                state: Ye,
                autoLogin: Qe,
                deviceType: vt(["watch", "tv"]),
                prompts: Ye,
                reauthenticate: Qe,
                throughSyncplugin: Qe,
                loginHint: Ye,
                nonce: Ye,
                success: j,
                fail: j,
                always: j
            },
            defaults: _t({
                throughTalk: !0,
                isPopup: !1,
                reauthenticate: !1,
                throughSyncplugin: !0
            }, xn)
        },
        autoLogin: {
            optional: {
                success: j,
                fail: j,
                always: j
            },
            defaults: xn
        },
        issueAccessToken: {
            required: {
                code: Ye,
                redirectUri: Ye
            },
            optional: {
                success: j,
                fail: j,
                always: j
            },
            defaults: xn
        },
        selectShippingAddress: An,
        createShippingAddress: An,
        updateShippingAddress: _t({
            required: {
                addressId: et
            }
        }, An)
    };
    function Cn(e) {
        var t, n, r, o, i, a;
        return mn(e, "_blank", (t = 480,
        n = 700,
        r = window.screenLeft ? window.screenLeft : window.screenX ? window.screenX : 0,
        o = window.screenTop ? window.screenTop : window.screenY ? window.screenY : 0,
        i = screen.width / 2 - t / 2 + r,
        a = screen.height / 2 - n / 2 + o,
        ["width=".concat(t), "height=".concat(n), "left=".concat(i), "top=".concat(a), "scrollbars=yes", "resizable=1"].join(",")))
    }
    function In(e) {
        return "".concat(Qt.authorize, "?").concat(mt(e))
    }
    function Pn(e) {
        var t = {
            client_id: en()
        };
        return e.approvalType && (t.approval_type = e.approvalType),
        e.scope && (t.scope = e.scope),
        e.state && (t.state = e.state),
        t
    }
    function Fn(e) {
        var t = {};
        return e.plusFriendPublicId && (t["extra.plus_friend_public_id"] = e.plusFriendPublicId),
        e.channelPublicId && (t.channel_public_id = e.channelPublicId),
        e.serviceTerms && (t["extra.service_terms"] = e.serviceTerms),
        e.autoLogin && (t.prompt = "none"),
        e.reauthenticate && (t.prompt = "login"),
        e.prompts && (t.prompt = e.prompts),
        e.deviceType && (t.device_type = e.deviceType),
        e.loginHint && (t.login_hint = e.loginHint),
        e.nonce && (t.nonce = e.nonce),
        t
    }
    function Bn(e) {
        return _t(_t(_t({}, Pn(e)), Fn(e)), {}, {
            redirect_uri: e.redirectUri || Qt.redirectUri,
            response_type: "code",
            auth_tran_id: pn()
        })
    }
    function En(e, t) {
        return _t(_t({}, t), {}, {
            ka: Yt,
            is_popup: e.isPopup
        })
    }
    function Un(e, t) {
        t.error ? e.fail(t) : e.success(t),
        e.always(t)
    }
    function Rn(e, t) {
        !function(e, t) {
            var n = e.url
              , r = e.method
              , o = e.data
              , i = new XMLHttpRequest;
            if (void 0 !== i.withCredentials)
                i.open(r, n),
                i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                i.onreadystatechange = function() {
                    i.readyState === XMLHttpRequest.DONE && 200 === i.status && t(i)
                }
                ,
                i.send(o);
            else {
                var a = new XDomainRequest;
                a.open(r.toLowerCase(), n),
                a.onload = function() {
                    t({
                        status: a.responseText ? 200 : "error",
                        response: a.responseText
                    })
                }
                ,
                setTimeout((function() {
                    a.send(o)
                }
                ), 0)
            }
        }({
            method: "GET",
            url: e
        }, t)
    }
    var Ln = new Sn(1e3,600);
    function Mn(e) {
        var t, n, r = Bn(e), o = En(e, r), i = function(e) {
            var t = !(!Xt.os.ios && !Xt.os.android) && !$t
              , n = !0 === e.reauthenticate || zn(e.prompts, "login")
              , r = !0 === e.autoLogin || zn(e.prompts, "none");
            return !(Xt.os.android && /instagram|fb_iab/g.test(Xt.ua)) && t && !n && !0 === e.throughTalk && !r
        }(e), a = qn(e), c = In(o), s = i ? function(e, t, n) {
            var r = _t(_t({}, t), {}, {
                is_popup: !0
            })
              , o = function() {
                return ["intent:#Intent", "action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY", "launchFlags=0x08880000", "S.com.kakao.sdk.talk.appKey=".concat(en()), "S.com.kakao.sdk.talk.redirectUri=".concat(r.redirect_uri), "S.com.kakao.sdk.talk.kaHeader=".concat(Yt), "S.com.kakao.sdk.talk.extraparams=".concat(encodeURIComponent(JSON.stringify(r)))].concat(Ft(e.state ? ["S.com.kakao.sdk.talk.state=".concat(e.state)] : []), ["S.browser_fallback_url=".concat(encodeURIComponent(n)), "end;"]).join(";")
            }
              , i = function() {
                var t = In(r)
                  , o = e.isPopup ? t : n
                  , i = "".concat(t, "&ka=").concat(encodeURIComponent(Yt))
                  , a = "".concat(Qt.talkInappScheme, "?url=").concat(encodeURIComponent(i));
                return "".concat(Qt.universalKakaoLink).concat(encodeURIComponent(a), "&web=").concat(encodeURIComponent(o))
            };
            return Xt.os.android ? o() : i()
        }(e, r, c) : c, u = null;
        if (a ? function(e) {
            var t = _t(_t({}, e), {}, {
                is_popup: !0,
                approval_window_type: "v4_bizplugin"
            })
              , n = encodeURIComponent(mt(t));
            location.href = "".concat(Qt.talkSyncpluginScheme, "&query=").concat(n)
        }(o) : e.isPopup ? u = Cn(s) : location.href = s,
        i || a || e.isPopup) {
            var l = (t = r.auth_tran_id,
            n = mt({
                client_id: en(),
                auth_tran_id: t,
                ka: Yt
            }),
            "".concat(Qt.authDomain, "/apiweb/code.json?").concat(n));
            Ln.start((function() {
                Rn(l, (function(t) {
                    var n = function(e, t) {
                        if (200 === t.status && t.response) {
                            var n = JSON.parse(t.response);
                            if ("ok" === n.status && n.code)
                                return Dn(e, {
                                    code: n.code
                                }),
                                !0;
                            if ("error" === n.status && n.error_code && "300" !== n.error_code)
                                return "700" === n.error_code ? location.href = "".concat(Qt.authDomain, "/error/network") : Dn(e, {
                                    error: n.error,
                                    error_description: n.error_description
                                }),
                                !0
                        }
                        return !1
                    }(e, t);
                    n && (Ln.stop(),
                    u && u.close && u.close()),
                    !i && u && u.closed && Ln.stop()
                }
                ))
            }
            ), (function() {
                Dn(e, {
                    error: "timeout",
                    error_description: "LOGIN_TIMEOUT"
                })
            }
            ))
        }
    }
    function zn(e, t) {
        return !!(e && e.indexOf(t) > -1)
    }
    function Dn(e, t) {
        if (e.state && (t.state = e.state),
        e.redirectUri) {
            var n = e.redirectUri.indexOf("?") > -1 ? "&" : "?";
            location.href = e.redirectUri + n + mt(t)
        } else
            Un(e, t)
    }
    function qn(e) {
        return e.throughSyncplugin && $t && /ch-home/i.test(Xt.ua)
    }
    var Nn = Object.freeze({
        __proto__: null,
        authorize: function(e) {
            if (((e = ln(e, Tn.authorize, "Auth.authorize")).autoLogin || zn(e.prompts, "none")) && !$t)
                return Dn(e, {
                    error: "auto_login",
                    error_description: "NOT_SUPPORTED_BROWSER"
                }),
                !1;
            qn(e) && function(e) {
                return !1 === e.isPopup && !zn(e.prompts, "cert") && window.kakaoweb && "function" == typeof window.kakaoweb.reqSignInLocation
            }(e) ? function(e) {
                var t = Bn(e)
                  , n = En(e, t)
                  , r = mt(_t(_t({}, n), {}, {
                    is_popup: !1,
                    prompt: "none"
                }));
                return kakaoweb.reqSignInLocation(r).then((function(t) {
                    var n = Object.fromEntries(new window.URL(t).searchParams);
                    return "consent_required" === n.error && !zn(e.prompts, "none") || "interaction_required" === n.error || (Dn(e, _t(_t({}, n.code && {
                        code: n.code
                    }), n.error && {
                        error: n.error,
                        error_description: n.error_description
                    })),
                    !1)
                }
                )).catch((function(e) {
                    return !1
                }
                ))
            }(e).then((function(t) {
                t && Mn(e)
            }
            )) : Mn(e),
            wn.dispatch("LOGIN_START")
        }
    });
    function Kn() {
        return Xt.os.android && (2 == Xt.os.version.major && /Version\/\d+.\d+|/i.test(Xt.ua) || 4 == Xt.os.version.major && Xt.os.version.minor < 4 && /Version\/\d+.\d+|/i.test(Xt.ua) || /Version\/\d+\.\d+/i.test(Xt.ua) && (/Chrome\/\d+\.\d+\.\d+\.\d+ Mobile/i.test(Xt.ua) || /; wv\)/i.test(Xt.ua)))
    }
    function Hn() {
        return Xt.os.ios && $t
    }
    var Jn = {
        exports: {}
    };
    !function(e, t) {
        e.exports = function() {
            function e(e) {
                var t = typeof e;
                return null !== e && ("object" === t || "function" === t)
            }
            function t(e) {
                return "function" == typeof e
            }
            var n = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
              , r = 0
              , o = void 0
              , i = void 0
              , a = function(e, t) {
                b[r] = e,
                b[r + 1] = t,
                2 === (r += 2) && (i ? i(_) : w())
            };
            function c(e) {
                i = e
            }
            function s(e) {
                a = e
            }
            var u = "undefined" != typeof window ? window : void 0
              , l = u || {}
              , p = l.MutationObserver || l.WebKitMutationObserver
              , d = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process)
              , f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
            function h() {
                return function() {
                    return process.nextTick(_)
                }
            }
            function m() {
                return void 0 !== o ? function() {
                    o(_)
                }
                : y()
            }
            function v() {
                var e = 0
                  , t = new p(_)
                  , n = document.createTextNode("");
                return t.observe(n, {
                    characterData: !0
                }),
                function() {
                    n.data = e = ++e % 2
                }
            }
            function g() {
                var e = new MessageChannel;
                return e.port1.onmessage = _,
                function() {
                    return e.port2.postMessage(0)
                }
            }
            function y() {
                var e = setTimeout;
                return function() {
                    return e(_, 1)
                }
            }
            var b = new Array(1e3);
            function _() {
                for (var e = 0; e < r; e += 2)
                    (0,
                    b[e])(b[e + 1]),
                    b[e] = void 0,
                    b[e + 1] = void 0;
                r = 0
            }
            function k() {
                try {
                    var e = Function("return this")().require("vertx");
                    return o = e.runOnLoop || e.runOnContext,
                    m()
                } catch (e) {
                    return y()
                }
            }
            var w = void 0;
            function S(e, t) {
                var n = this
                  , r = new this.constructor(j);
                void 0 === r[O] && W(r);
                var o = n._state;
                if (o) {
                    var i = arguments[o - 1];
                    a((function() {
                        return N(o, r, i, n._result)
                    }
                    ))
                } else
                    D(n, r, e, t);
                return r
            }
            function x(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t)
                    return e;
                var n = new t(j);
                return R(n, e),
                n
            }
            w = d ? h() : p ? v() : f ? g() : void 0 === u ? k() : y();
            var O = Math.random().toString(36).substring(2);
            function j() {}
            var A = void 0
              , T = 1
              , C = 2;
            function I() {
                return new TypeError("You cannot resolve a promise with itself")
            }
            function P() {
                return new TypeError("A promises callback cannot return that same promise.")
            }
            function F(e, t, n, r) {
                try {
                    e.call(t, n, r)
                } catch (e) {
                    return e
                }
            }
            function B(e, t, n) {
                a((function(e) {
                    var r = !1
                      , o = F(n, t, (function(n) {
                        r || (r = !0,
                        t !== n ? R(e, n) : M(e, n))
                    }
                    ), (function(t) {
                        r || (r = !0,
                        z(e, t))
                    }
                    ), "Settle: " + (e._label || " unknown promise"));
                    !r && o && (r = !0,
                    z(e, o))
                }
                ), e)
            }
            function E(e, t) {
                t._state === T ? M(e, t._result) : t._state === C ? z(e, t._result) : D(t, void 0, (function(t) {
                    return R(e, t)
                }
                ), (function(t) {
                    return z(e, t)
                }
                ))
            }
            function U(e, n, r) {
                n.constructor === e.constructor && r === S && n.constructor.resolve === x ? E(e, n) : void 0 === r ? M(e, n) : t(r) ? B(e, n, r) : M(e, n)
            }
            function R(t, n) {
                if (t === n)
                    z(t, I());
                else if (e(n)) {
                    var r = void 0;
                    try {
                        r = n.then
                    } catch (e) {
                        return void z(t, e)
                    }
                    U(t, n, r)
                } else
                    M(t, n)
            }
            function L(e) {
                e._onerror && e._onerror(e._result),
                q(e)
            }
            function M(e, t) {
                e._state === A && (e._result = t,
                e._state = T,
                0 !== e._subscribers.length && a(q, e))
            }
            function z(e, t) {
                e._state === A && (e._state = C,
                e._result = t,
                a(L, e))
            }
            function D(e, t, n, r) {
                var o = e._subscribers
                  , i = o.length;
                e._onerror = null,
                o[i] = t,
                o[i + T] = n,
                o[i + C] = r,
                0 === i && e._state && a(q, e)
            }
            function q(e) {
                var t = e._subscribers
                  , n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3)
                        r = t[a],
                        o = t[a + n],
                        r ? N(n, r, o, i) : o(i);
                    e._subscribers.length = 0
                }
            }
            function N(e, n, r, o) {
                var i = t(r)
                  , a = void 0
                  , c = void 0
                  , s = !0;
                if (i) {
                    try {
                        a = r(o)
                    } catch (e) {
                        s = !1,
                        c = e
                    }
                    if (n === a)
                        return void z(n, P())
                } else
                    a = o;
                n._state !== A || (i && s ? R(n, a) : !1 === s ? z(n, c) : e === T ? M(n, a) : e === C && z(n, a))
            }
            function K(e, t) {
                try {
                    t((function(t) {
                        R(e, t)
                    }
                    ), (function(t) {
                        z(e, t)
                    }
                    ))
                } catch (t) {
                    z(e, t)
                }
            }
            var H = 0;
            function J() {
                return H++
            }
            function W(e) {
                e[O] = H++,
                e._state = void 0,
                e._result = void 0,
                e._subscribers = []
            }
            function X() {
                return new Error("Array Methods must be provided an Array")
            }
            var $ = function() {
                function e(e, t) {
                    this._instanceConstructor = e,
                    this.promise = new e(j),
                    this.promise[O] || W(this.promise),
                    n(t) ? (this.length = t.length,
                    this._remaining = t.length,
                    this._result = new Array(this.length),
                    0 === this.length ? M(this.promise, this._result) : (this.length = this.length || 0,
                    this._enumerate(t),
                    0 === this._remaining && M(this.promise, this._result))) : z(this.promise, X())
                }
                return e.prototype._enumerate = function(e) {
                    for (var t = 0; this._state === A && t < e.length; t++)
                        this._eachEntry(e[t], t)
                }
                ,
                e.prototype._eachEntry = function(e, t) {
                    var n = this._instanceConstructor
                      , r = n.resolve;
                    if (r === x) {
                        var o = void 0
                          , i = void 0
                          , a = !1;
                        try {
                            o = e.then
                        } catch (e) {
                            a = !0,
                            i = e
                        }
                        if (o === S && e._state !== A)
                            this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof o)
                            this._remaining--,
                            this._result[t] = e;
                        else if (n === ee) {
                            var c = new n(j);
                            a ? z(c, i) : U(c, e, o),
                            this._willSettleAt(c, t)
                        } else
                            this._willSettleAt(new n((function(t) {
                                return t(e)
                            }
                            )), t)
                    } else
                        this._willSettleAt(r(e), t)
                }
                ,
                e.prototype._settledAt = function(e, t, n) {
                    var r = this.promise;
                    r._state === A && (this._remaining--,
                    e === C ? z(r, n) : this._result[t] = n),
                    0 === this._remaining && M(r, this._result)
                }
                ,
                e.prototype._willSettleAt = function(e, t) {
                    var n = this;
                    D(e, void 0, (function(e) {
                        return n._settledAt(T, t, e)
                    }
                    ), (function(e) {
                        return n._settledAt(C, t, e)
                    }
                    ))
                }
                ,
                e
            }();
            function G(e) {
                return new $(this,e).promise
            }
            function V(e) {
                var t = this;
                return n(e) ? new t((function(n, r) {
                    for (var o = e.length, i = 0; i < o; i++)
                        t.resolve(e[i]).then(n, r)
                }
                )) : new t((function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                }
                ))
            }
            function Y(e) {
                var t = new this(j);
                return z(t, e),
                t
            }
            function Q() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }
            function Z() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }
            var ee = function() {
                function e(t) {
                    this[O] = J(),
                    this._result = this._state = void 0,
                    this._subscribers = [],
                    j !== t && ("function" != typeof t && Q(),
                    this instanceof e ? K(this, t) : Z())
                }
                return e.prototype.catch = function(e) {
                    return this.then(null, e)
                }
                ,
                e.prototype.finally = function(e) {
                    var n = this
                      , r = n.constructor;
                    return t(e) ? n.then((function(t) {
                        return r.resolve(e()).then((function() {
                            return t
                        }
                        ))
                    }
                    ), (function(t) {
                        return r.resolve(e()).then((function() {
                            throw t
                        }
                        ))
                    }
                    )) : n.then(e, e)
                }
                ,
                e
            }();
            function te() {
                var e = void 0;
                if (void 0 !== Rt)
                    e = Rt;
                else if ("undefined" != typeof self)
                    e = self;
                else
                    try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                var t = e.Promise;
                if (t) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === n && !t.cast)
                        return
                }
                e.Promise = ee
            }
            return ee.prototype.then = S,
            ee.all = G,
            ee.race = V,
            ee.resolve = x,
            ee.reject = Y,
            ee._setScheduler = c,
            ee._setAsap = s,
            ee._asap = a,
            ee.polyfill = te,
            ee.Promise = ee,
            ee
        }()
    }(Jn);
    var Wn = (function(e, t, n, r, o, i) {
        var a, c, s, u, l, p = this || e, d = Math.floor(1e4 * Math.random()), f = Function.prototype, h = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/, m = /[\-\w]+\/\.\.\//, v = /([^:])\/\//g, g = "", y = {}, b = e.easyXDM, _ = "easyXDM_", k = !1;
        function w(e, t) {
            var n = kt(e[t]);
            return "function" == n || !("object" != n || !e[t]) || "unknown" == n
        }
        function S() {
            var e, t = "Shockwave Flash", n = "application/x-shockwave-flash";
            if (!E(navigator.plugins) && "object" == kt(navigator.plugins[t])) {
                var r = navigator.plugins[t].description;
                r && !E(navigator.mimeTypes) && navigator.mimeTypes[n] && navigator.mimeTypes[n].enabledPlugin && (c = r.match(/\d+/g))
            }
            if (!c)
                try {
                    e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                    c = Array.prototype.slice.call(e.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1),
                    e = null
                } catch (e) {}
            if (!c)
                return !1;
            var o = parseInt(c[0], 10)
              , i = parseInt(c[1], 10);
            return s = o > 9 && i > 0,
            !0
        }
        if (w(e, "addEventListener"))
            u = function(e, t, n) {
                e.addEventListener(t, n, !1)
            }
            ,
            l = function(e, t, n) {
                e.removeEventListener(t, n, !1)
            }
            ;
        else {
            if (!w(e, "attachEvent"))
                throw new Error("Browser not supported");
            u = function(e, t, n) {
                e.attachEvent("on" + t, n)
            }
            ,
            l = function(e, t, n) {
                e.detachEvent("on" + t, n)
            }
        }
        var x, O = !1, j = [];
        function A() {
            if (!O) {
                O = !0;
                for (var e = 0; e < j.length; e++)
                    j[e]();
                j.length = 0
            }
        }
        function T(e, t) {
            O ? e.call(t) : j.push((function() {
                e.call(t)
            }
            ))
        }
        function C(e) {
            return e.match(h)[3]
        }
        function I(e) {
            if (e.indexOf("file://") >= 0)
                return "file://";
            var t = e.toLowerCase().match(h);
            if (!t)
                return "";
            var n = t[2]
              , r = t[3]
              , o = t[4] || "";
            return ("http:" == n && ":80" == o || "https:" == n && ":443" == o) && (o = ""),
            n + "//" + r + o
        }
        function P(e) {
            if (!(e = e.replace(v, "$1/")).match(/^(http||https):\/\//)) {
                var t = "/" === e.substring(0, 1) ? "" : n.pathname;
                "/" !== t.substring(t.length - 1) && (t = t.substring(0, t.lastIndexOf("/") + 1)),
                e = n.protocol + "//" + n.host + t + e
            }
            for (; m.test(e); )
                e = e.replace(m, "");
            return e
        }
        function F(e, t) {
            var n = ""
              , r = e.indexOf("#");
            -1 !== r && (n = e.substring(r),
            e = e.substring(0, r));
            var o = [];
            for (var a in t)
                t.hasOwnProperty(a) && o.push(a + "=" + i(t[a]));
            return e + (k ? "#" : -1 == e.indexOf("?") ? "?" : "&") + o.join("&") + n
        }
        "readyState"in t ? (x = t.readyState,
        O = "complete" == x || ~navigator.userAgent.indexOf("AppleWebKit/") && ("loaded" == x || "interactive" == x)) : O = !!t.body,
        O || (w(e, "addEventListener") ? u(t, "DOMContentLoaded", A) : (u(t, "readystatechange", (function() {
            "complete" == t.readyState && A()
        }
        )),
        t.documentElement.doScroll && e === top && function e() {
            if (!O) {
                try {
                    t.documentElement.doScroll("left")
                } catch (t) {
                    return void r(e, 1)
                }
                A()
            }
        }()),
        u(e, "load", A));
        var B = function(e) {
            for (var t, n = {}, r = (e = e.substring(1).split("&")).length; r--; )
                n[(t = e[r].split("="))[0]] = o(t[1]);
            return n
        }(/xdm_e=/.test(n.search) ? n.search : n.hash);
        function E(e) {
            return void 0 === e
        }
        var U, R = function() {
            var e = {}
              , t = {
                a: [1, 2, 3]
            }
              , n = '{"a":[1,2,3]}';
            return "undefined" != typeof JSON && "function" == typeof JSON.stringify && JSON.stringify(t).replace(/\s/g, "") === n ? JSON : (Object.toJSON && Object.toJSON(t).replace(/\s/g, "") === n && (e.stringify = Object.toJSON),
            "function" == typeof String.prototype.evalJSON && (t = n.evalJSON()).a && 3 === t.a.length && 3 === t.a[2] && (e.parse = function(e) {
                return e.evalJSON()
            }
            ),
            e.stringify && e.parse ? (R = function() {
                return e
            }
            ,
            e) : null)
        };
        function L(e, t, n) {
            var r;
            for (var o in t)
                t.hasOwnProperty(o) && (o in e ? "object" === kt(r = t[o]) ? L(e[o], r, n) : n || (e[o] = t[o]) : e[o] = t[o]);
            return e
        }
        function M(e) {
            var n;
            E(a) && function() {
                var e = t.body.appendChild(t.createElement("form"))
                  , n = e.appendChild(t.createElement("input"));
                n.name = _ + "TEST" + d,
                a = n !== e.elements[n.name],
                t.body.removeChild(e)
            }(),
            a ? n = t.createElement('<iframe name="' + e.props.name + '"/>') : (n = t.createElement("IFRAME")).name = e.props.name,
            n.id = n.name = e.props.name,
            delete e.props.name,
            "string" == typeof e.container && (e.container = t.getElementById(e.container)),
            e.container || (L(n.style, {
                position: "absolute",
                top: "-2000px",
                left: "0px"
            }),
            e.container = t.body);
            var r = e.props.src;
            if (e.props.src = "javascript:false",
            L(n, e.props),
            n.border = n.frameBorder = 0,
            n.allowTransparency = !0,
            e.container.appendChild(n),
            e.onLoad && u(n, "load", e.onLoad),
            e.usePost) {
                var o, i = e.container.appendChild(t.createElement("form"));
                if (i.target = n.name,
                i.action = r,
                i.method = "POST",
                "object" === kt(e.usePost))
                    for (var c in e.usePost)
                        e.usePost.hasOwnProperty(c) && (a ? o = t.createElement('<input name="' + c + '"/>') : (o = t.createElement("INPUT")).name = c,
                        o.value = e.usePost[c],
                        i.appendChild(o));
                i.submit(),
                i.parentNode.removeChild(i)
            } else
                n.src = r;
            return e.props.src = r,
            n
        }
        function z(e) {
            return e.replace(/[-[\]/{}()+.\^$|]/g, "\\$&").replace(/(\*)/g, ".$1").replace(/\?/g, ".")
        }
        function D(r) {
            var o, i = r.protocol;
            if (r.isHost = r.isHost || E(B.xdm_p),
            k = r.hash || !1,
            r.props || (r.props = {}),
            r.isHost)
                r.remote = P(r.remote),
                r.channel = r.channel || "default" + d++,
                r.secret = Math.random().toString(16).substring(2),
                E(i) && (i = I(n.href) == I(r.remote) ? "4" : w(e, "postMessage") || w(t, "postMessage") ? "1" : r.swf && w(e, "ActiveXObject") && S() ? "6" : "Gecko" === navigator.product && "frameElement"in e && -1 == navigator.userAgent.indexOf("WebKit") ? "5" : r.remoteHelper ? "2" : "0");
            else if (r.channel = B.xdm_c.replace(/["'<>\\]/g, ""),
            r.secret = B.xdm_s,
            r.remote = B.xdm_e.replace(/["'<>\\]/g, ""),
            i = B.xdm_p,
            r.acl && !function(e, t) {
                "string" == typeof e && (e = [e]);
                for (var n, r = e.length; r--; )
                    if (n = "^" === e[r].substr(0, 1) && "$" === e[r].substr(e[r].length - 1, 1) ? e[r] : "^" + z(e[r]) + "$",
                    (n = new RegExp(n)).test(t))
                        return !0;
                return !1
            }(r.acl, r.remote))
                throw new Error("Access denied for " + r.remote);
            switch (r.protocol = i,
            i) {
            case "0":
                if (L(r, {
                    interval: 100,
                    delay: 2e3,
                    useResize: !0,
                    useParent: !1,
                    usePolling: !1
                }, !0),
                r.isHost) {
                    if (!r.local) {
                        for (var a, s = n.protocol + "//" + n.host, u = t.body.getElementsByTagName("img"), l = u.length; l--; )
                            if ((a = u[l]).src.substring(0, s.length) === s) {
                                r.local = a.src;
                                break
                            }
                        r.local || (r.local = e)
                    }
                    var p = {
                        xdm_c: r.channel,
                        xdm_p: 0
                    };
                    r.local === e ? (r.usePolling = !0,
                    r.useParent = !0,
                    r.local = n.protocol + "//" + n.host + n.pathname + n.search,
                    p.xdm_e = r.local,
                    p.xdm_pa = 1) : p.xdm_e = P(r.local),
                    r.container && (r.useResize = !1,
                    p.xdm_po = 1),
                    r.remote = F(r.remote, p)
                } else
                    L(r, {
                        useParent: !E(B.xdm_pa),
                        usePolling: !E(B.xdm_po),
                        useResize: !r.useParent && r.useResize
                    });
                o = [new y.stack.HashTransport(r), new y.stack.ReliableBehavior({}), new y.stack.QueueBehavior({
                    encode: !0,
                    maxLength: 4e3 - r.remote.length
                }), new y.stack.VerifyBehavior({
                    initiate: r.isHost
                })];
                break;
            case "1":
                o = [new y.stack.PostMessageTransport(r)];
                break;
            case "2":
                r.isHost && (r.remoteHelper = P(r.remoteHelper)),
                o = [new y.stack.NameTransport(r), new y.stack.QueueBehavior, new y.stack.VerifyBehavior({
                    initiate: r.isHost
                })];
                break;
            case "3":
                o = [new y.stack.NixTransport(r)];
                break;
            case "4":
                o = [new y.stack.SameOriginTransport(r)];
                break;
            case "5":
                o = [new y.stack.FrameElementTransport(r)];
                break;
            case "6":
                c || S(),
                o = [new y.stack.FlashTransport(r)]
            }
            return o.push(new y.stack.QueueBehavior({
                lazy: r.lazy,
                remove: !0
            })),
            o
        }
        function q(e) {
            for (var t, n = {
                incoming: function(e, t) {
                    this.up.incoming(e, t)
                },
                outgoing: function(e, t) {
                    this.down.outgoing(e, t)
                },
                callback: function(e) {
                    this.up.callback(e)
                },
                init: function() {
                    this.down.init()
                },
                destroy: function() {
                    this.down.destroy()
                }
            }, r = 0, o = e.length; r < o; r++)
                L(t = e[r], n, !0),
                0 !== r && (t.down = e[r - 1]),
                r !== o - 1 && (t.up = e[r + 1]);
            return t
        }
        L(y, {
            version: "2.5.00.1",
            query: B,
            stack: {},
            apply: L,
            getJSONObject: R,
            whenReady: T,
            noConflict: function(t) {
                return e.easyXDM = b,
                (g = t) && (_ = "easyXDM_" + g.replace(".", "_") + "_"),
                y
            }
        }),
        y.DomHelper = {
            on: u,
            un: l,
            requiresJSON: function(n) {
                (function(e, t) {
                    return !("object" != kt(e[t]) || !e[t])
                }
                )(e, "JSON") || t.write('<script type="text/javascript" src="' + n + '"><\/script>')
            }
        },
        U = {},
        y.Fn = {
            set: function(e, t) {
                U[e] = t
            },
            get: function(e, t) {
                if (U.hasOwnProperty(e)) {
                    var n = U[e];
                    return t && delete U[e],
                    n
                }
            }
        },
        y.Socket = function(e) {
            var t = q(D(e).concat([{
                incoming: function(t, n) {
                    e.onMessage(t, n)
                },
                callback: function(t) {
                    e.onReady && e.onReady(t)
                }
            }]))
              , n = I(e.remote);
            this.origin = I(e.remote),
            this.destroy = function() {
                t.destroy()
            }
            ,
            this.postMessage = function(e) {
                t.outgoing(e, n)
            }
            ,
            t.init()
        }
        ,
        y.Rpc = function(e, t) {
            if (t.local)
                for (var n in t.local)
                    if (t.local.hasOwnProperty(n)) {
                        var r = t.local[n];
                        "function" == typeof r && (t.local[n] = {
                            method: r
                        })
                    }
            var o = q(D(e).concat([new y.stack.RpcBehavior(this,t), {
                callback: function(t) {
                    e.onReady && e.onReady(t)
                }
            }]));
            this.origin = I(e.remote),
            this.context = e.context || null,
            this.destroy = function() {
                o.destroy()
            }
            ,
            o.init()
        }
        ,
        y.stack.SameOriginTransport = function(e) {
            var t, o, i, a;
            return t = {
                outgoing: function(e, t, n) {
                    i(e),
                    n && n()
                },
                destroy: function() {
                    o && (o.parentNode.removeChild(o),
                    o = null)
                },
                onDOMReady: function() {
                    a = I(e.remote),
                    e.isHost ? (L(e.props, {
                        src: F(e.remote, {
                            xdm_e: n.protocol + "//" + n.host + n.pathname,
                            xdm_c: e.channel,
                            xdm_p: 4
                        }),
                        name: _ + e.channel + "_provider"
                    }),
                    o = M(e),
                    y.Fn.set(e.channel, (function(e) {
                        return i = e,
                        r((function() {
                            t.up.callback(!0)
                        }
                        ), 0),
                        function(e) {
                            t.up.incoming(e, a)
                        }
                    }
                    ))) : (i = function() {
                        var e = parent;
                        if ("" !== g)
                            for (var t = 0, n = g.split("."); t < n.length; t++)
                                e = e[n[t]];
                        return e.easyXDM
                    }().Fn.get(e.channel, !0)((function(e) {
                        t.up.incoming(e, a)
                    }
                    )),
                    r((function() {
                        t.up.callback(!0)
                    }
                    ), 0))
                },
                init: function() {
                    T(t.onDOMReady, t)
                }
            }
        }
        ,
        y.stack.FlashTransport = function(e) {
            var o, a, c, u, l;
            function d(e, t) {
                r((function() {
                    o.up.incoming(e, c)
                }
                ), 0)
            }
            function f(n) {
                var r = e.swf + "?host=" + e.isHost
                  , o = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
                y.Fn.set("flash_loaded" + n.replace(/[\-.]/g, "_"), (function() {
                    y.stack.FlashTransport[n].swf = u = l.firstChild;
                    for (var e = y.stack.FlashTransport[n].queue, t = 0; t < e.length; t++)
                        e[t]();
                    e.length = 0
                }
                )),
                e.swfContainer ? l = "string" == typeof e.swfContainer ? t.getElementById(e.swfContainer) : e.swfContainer : (L((l = t.createElement("div")).style, s && e.swfNoThrottle ? {
                    height: "20px",
                    width: "20px",
                    position: "fixed",
                    right: 0,
                    top: 0
                } : {
                    height: "1px",
                    width: "1px",
                    position: "absolute",
                    overflow: "hidden",
                    right: 0,
                    top: 0
                }),
                t.body.appendChild(l));
                var a = "callback=flash_loaded" + i(n.replace(/[\-.]/g, "_")) + "&proto=" + p.location.protocol + "&domain=" + i(C(p.location.href)) + "&port=" + i(function(e) {
                    return e.match(h)[4] || ""
                }(p.location.href)) + "&ns=" + i(g);
                l.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + o + "' data='" + r + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + r + "'></param><param name='flashvars' value='" + a + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + a + "' allowScriptAccess='always' wmode='transparent' src='" + r + "' height='1' width='1'></embed></object>"
            }
            return o = {
                outgoing: function(t, n, r) {
                    u.postMessage(e.channel, t.toString()),
                    r && r()
                },
                destroy: function() {
                    try {
                        u.destroyChannel(e.channel)
                    } catch (e) {}
                    u = null,
                    a && (a.parentNode.removeChild(a),
                    a = null)
                },
                onDOMReady: function() {
                    c = e.remote,
                    y.Fn.set("flash_" + e.channel + "_init", (function() {
                        r((function() {
                            o.up.callback(!0)
                        }
                        ))
                    }
                    )),
                    y.Fn.set("flash_" + e.channel + "_onMessage", d),
                    e.swf = P(e.swf);
                    var t = C(e.swf)
                      , i = function() {
                        y.stack.FlashTransport[t].init = !0,
                        (u = y.stack.FlashTransport[t].swf).createChannel(e.channel, e.secret, I(e.remote), e.isHost),
                        e.isHost && (s && e.swfNoThrottle && L(e.props, {
                            position: "fixed",
                            right: 0,
                            top: 0,
                            height: "20px",
                            width: "20px"
                        }),
                        L(e.props, {
                            src: F(e.remote, {
                                xdm_e: I(n.href),
                                xdm_c: e.channel,
                                xdm_p: 6,
                                xdm_s: e.secret
                            }),
                            name: _ + e.channel + "_provider"
                        }),
                        a = M(e))
                    };
                    y.stack.FlashTransport[t] && y.stack.FlashTransport[t].init ? i() : y.stack.FlashTransport[t] ? y.stack.FlashTransport[t].queue.push(i) : (y.stack.FlashTransport[t] = {
                        queue: [i]
                    },
                    f(t))
                },
                init: function() {
                    T(o.onDOMReady, o)
                }
            }
        }
        ,
        y.stack.PostMessageTransport = function(t) {
            var o, i, a, c;
            function s(e) {
                if ("string" == typeof e.data) {
                    var r = function(e) {
                        if (e.origin)
                            return I(e.origin);
                        if (e.uri)
                            return I(e.uri);
                        if (e.domain)
                            return n.protocol + "//" + e.domain;
                        throw "Unable to retrieve the origin of the event"
                    }(e);
                    r == c && "string" == typeof e.data && e.data.substring(0, t.channel.length + 1) == t.channel + " " && o.up.incoming(e.data.substring(t.channel.length + 1), r)
                }
            }
            function p(n) {
                n.data == t.channel + "-ready" && (a = "postMessage"in i.contentWindow ? i.contentWindow : i.contentWindow.document,
                l(e, "message", p),
                u(e, "message", s),
                r((function() {
                    o.up.callback(!0)
                }
                ), 0))
            }
            return o = {
                outgoing: function(e, n, r) {
                    a.postMessage(t.channel + " " + e, n || c),
                    r && r()
                },
                destroy: function() {
                    l(e, "message", p),
                    l(e, "message", s),
                    i && (a = null,
                    i.parentNode.removeChild(i),
                    i = null)
                },
                onDOMReady: function() {
                    "file://" === (c = I(t.remote)) && (c = "*"),
                    t.isHost ? (u(e, "message", p),
                    L(t.props, {
                        src: F(t.remote, {
                            xdm_e: I(n.href),
                            xdm_c: t.channel,
                            xdm_p: 1
                        }),
                        name: _ + t.channel + "_provider"
                    }),
                    i = M(t)) : (u(e, "message", s),
                    (a = "postMessage"in e.parent ? e.parent : e.parent.document).postMessage(t.channel + "-ready", c),
                    r((function() {
                        o.up.callback(!0)
                    }
                    ), 0))
                },
                init: function() {
                    T(o.onDOMReady, o)
                }
            }
        }
        ,
        y.stack.FrameElementTransport = function(o) {
            var i, a, c, s;
            return i = {
                outgoing: function(e, t, n) {
                    c.call(this, e),
                    n && n()
                },
                destroy: function() {
                    a && (a.parentNode.removeChild(a),
                    a = null)
                },
                onDOMReady: function() {
                    s = I(o.remote),
                    o.isHost ? (L(o.props, {
                        src: F(o.remote, {
                            xdm_e: I(n.href),
                            xdm_c: o.channel,
                            xdm_p: 5
                        }),
                        name: _ + o.channel + "_provider"
                    }),
                    (a = M(o)).fn = function(e) {
                        return delete a.fn,
                        c = e,
                        r((function() {
                            i.up.callback(!0)
                        }
                        ), 0),
                        function(e) {
                            i.up.incoming(e, s)
                        }
                    }
                    ) : (t.referrer && I(t.referrer) != B.xdm_e && (e.top.location = B.xdm_e),
                    c = e.frameElement.fn((function(e) {
                        i.up.incoming(e, s)
                    }
                    )),
                    i.up.callback(!0))
                },
                init: function() {
                    T(i.onDOMReady, i)
                }
            }
        }
        ,
        y.stack.NameTransport = function(e) {
            var t, n, o, i, a, c, s, u;
            function p(t) {
                var r = e.remoteHelper + (n ? "#_3" : "#_2") + e.channel;
                o.contentWindow.sendMessage(t, r)
            }
            function d() {
                n ? 2 != ++a && n || t.up.callback(!0) : (p("ready"),
                t.up.callback(!0))
            }
            function f(e) {
                t.up.incoming(e, s)
            }
            function h() {
                c && r((function() {
                    c(!0)
                }
                ), 0)
            }
            return t = {
                outgoing: function(e, t, n) {
                    c = n,
                    p(e)
                },
                destroy: function() {
                    o.parentNode.removeChild(o),
                    o = null,
                    n && (i.parentNode.removeChild(i),
                    i = null)
                },
                onDOMReady: function() {
                    n = e.isHost,
                    a = 0,
                    s = I(e.remote),
                    e.local = P(e.local),
                    n ? (y.Fn.set(e.channel, (function(t) {
                        n && "ready" === t && (y.Fn.set(e.channel, f),
                        d())
                    }
                    )),
                    u = F(e.remote, {
                        xdm_e: e.local,
                        xdm_c: e.channel,
                        xdm_p: 2
                    }),
                    L(e.props, {
                        src: u + "#" + e.channel,
                        name: _ + e.channel + "_provider"
                    }),
                    i = M(e)) : (e.remoteHelper = e.remote,
                    y.Fn.set(e.channel, f)),
                    o = M({
                        props: {
                            src: e.local + "#_4" + e.channel
                        },
                        onLoad: function t() {
                            var n = o || this;
                            l(n, "load", t),
                            y.Fn.set(e.channel + "_load", h),
                            function e() {
                                "function" == typeof n.contentWindow.sendMessage ? d() : r(e, 50)
                            }()
                        }
                    })
                },
                init: function() {
                    T(t.onDOMReady, t)
                }
            }
        }
        ,
        y.stack.HashTransport = function(t) {
            var n, o, i, a, c, s, u, l, p, d;
            function f() {
                if (u) {
                    var e = u.location.href
                      , t = ""
                      , r = e.indexOf("#");
                    -1 != r && (t = e.substring(r)),
                    t && t != c && function(e) {
                        c = e,
                        n.up.incoming(c.substring(c.indexOf("_") + 1), d)
                    }(t)
                }
            }
            function h() {
                i = setInterval(f, a)
            }
            return n = {
                outgoing: function(e, n) {
                    !function(e) {
                        if (l) {
                            var n = t.remote + "#" + s++ + "_" + e;
                            (o || !p ? l.contentWindow : l).location = n
                        }
                    }(e)
                },
                destroy: function() {
                    e.clearInterval(i),
                    !o && p || l.parentNode.removeChild(l),
                    l = null
                },
                onDOMReady: function() {
                    if (o = t.isHost,
                    a = t.interval,
                    c = "#" + t.channel,
                    s = 0,
                    p = t.useParent,
                    d = I(t.remote),
                    o) {
                        if (L(t.props, {
                            src: t.remote,
                            name: _ + t.channel + "_provider"
                        }),
                        p)
                            t.onLoad = function() {
                                u = e,
                                h(),
                                n.up.callback(!0)
                            }
                            ;
                        else {
                            var i = 0
                              , f = t.delay / 50;
                            !function e() {
                                if (++i > f)
                                    throw new Error("Unable to reference listenerwindow");
                                try {
                                    u = l.contentWindow.frames[_ + t.channel + "_consumer"]
                                } catch (e) {}
                                u ? (h(),
                                n.up.callback(!0)) : r(e, 50)
                            }()
                        }
                        l = M(t)
                    } else
                        u = e,
                        h(),
                        p ? (l = parent,
                        n.up.callback(!0)) : (L(t, {
                            props: {
                                src: t.remote + "#" + t.channel + new Date,
                                name: _ + t.channel + "_consumer"
                            },
                            onLoad: function() {
                                n.up.callback(!0)
                            }
                        }),
                        l = M(t))
                },
                init: function() {
                    T(n.onDOMReady, n)
                }
            }
        }
        ,
        y.stack.ReliableBehavior = function(e) {
            var t, n, r = 0, o = 0, i = "";
            return t = {
                incoming: function(e, a) {
                    var c = e.indexOf("_")
                      , s = e.substring(0, c).split(",");
                    e = e.substring(c + 1),
                    s[0] == r && (i = "",
                    n && n(!0)),
                    e.length > 0 && (t.down.outgoing(s[1] + "," + r + "_" + i, a),
                    o != s[1] && (o = s[1],
                    t.up.incoming(e, a)))
                },
                outgoing: function(e, a, c) {
                    i = e,
                    n = c,
                    t.down.outgoing(o + "," + ++r + "_" + e, a)
                }
            }
        }
        ,
        y.stack.QueueBehavior = function(e) {
            var t, n, a = [], c = !0, s = "", u = 0, l = !1, p = !1;
            function d() {
                if (e.remove && 0 === a.length)
                    !function(e) {
                        e.up.down = e.down,
                        e.down.up = e.up,
                        e.up = e.down = null
                    }(t);
                else if (!c && 0 !== a.length && !n) {
                    c = !0;
                    var o = a.shift();
                    t.down.outgoing(o.data, o.origin, (function(e) {
                        c = !1,
                        o.callback && r((function() {
                            o.callback(e)
                        }
                        ), 0),
                        d()
                    }
                    ))
                }
            }
            return t = {
                init: function() {
                    E(e) && (e = {}),
                    e.maxLength && (u = e.maxLength,
                    p = !0),
                    e.lazy ? l = !0 : t.down.init()
                },
                callback: function(e) {
                    c = !1;
                    var n = t.up;
                    d(),
                    n.callback(e)
                },
                incoming: function(n, r) {
                    if (p) {
                        var i = n.indexOf("_")
                          , a = parseInt(n.substring(0, i), 10);
                        s += n.substring(i + 1),
                        0 === a && (e.encode && (s = o(s)),
                        t.up.incoming(s, r),
                        s = "")
                    } else
                        t.up.incoming(n, r)
                },
                outgoing: function(n, r, o) {
                    e.encode && (n = i(n));
                    var c, s = [];
                    if (p) {
                        for (; 0 !== n.length; )
                            c = n.substring(0, u),
                            n = n.substring(c.length),
                            s.push(c);
                        for (; c = s.shift(); )
                            a.push({
                                data: s.length + "_" + c,
                                origin: r,
                                callback: 0 === s.length ? o : null
                            })
                    } else
                        a.push({
                            data: n,
                            origin: r,
                            callback: o
                        });
                    l ? t.down.init() : d()
                },
                destroy: function() {
                    n = !0,
                    t.down.destroy()
                }
            }
        }
        ,
        y.stack.VerifyBehavior = function(e) {
            var t, n, r;
            function o() {
                n = Math.random().toString(16).substring(2),
                t.down.outgoing(n)
            }
            return t = {
                incoming: function(i, a) {
                    var c = i.indexOf("_");
                    -1 === c ? i === n ? t.up.callback(!0) : r || (r = i,
                    e.initiate || o(),
                    t.down.outgoing(i)) : i.substring(0, c) === r && t.up.incoming(i.substring(c + 1), a)
                },
                outgoing: function(e, r, o) {
                    t.down.outgoing(n + "_" + e, r, o)
                },
                callback: function(t) {
                    e.initiate && o()
                }
            }
        }
        ,
        y.stack.RpcBehavior = function(e, t) {
            var n, r = t.serializer || R(), o = 0, i = {};
            function a(e) {
                e.jsonrpc = "2.0",
                n.down.outgoing(r.stringify(e))
            }
            function c(e, t) {
                var n = Array.prototype.slice;
                return function() {
                    var r, c = arguments.length, s = {
                        method: t
                    };
                    c > 0 && "function" == typeof arguments[c - 1] ? (c > 1 && "function" == typeof arguments[c - 2] ? (r = {
                        success: arguments[c - 2],
                        error: arguments[c - 1]
                    },
                    s.params = n.call(arguments, 0, c - 2)) : (r = {
                        success: arguments[c - 1]
                    },
                    s.params = n.call(arguments, 0, c - 1)),
                    i["" + ++o] = r,
                    s.id = o) : s.params = n.call(arguments, 0),
                    e.namedParams && 1 === s.params.length && (s.params = s.params[0]),
                    a(s)
                }
            }
            function s(t, n, r, o) {
                if (r) {
                    var i, c;
                    n ? (i = function(e) {
                        i = f,
                        a({
                            id: n,
                            result: e
                        })
                    }
                    ,
                    c = function(e, t) {
                        c = f;
                        var r = {
                            id: n,
                            error: {
                                code: -32099,
                                message: e
                            }
                        };
                        t && (r.error.data = t),
                        a(r)
                    }
                    ) : i = c = f,
                    function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }(o) || (o = [o]);
                    try {
                        var s = e.context || r.scope
                          , u = r.method.apply(s, o.concat([i, c]));
                        E(u) || i(u)
                    } catch (e) {
                        c(e.message)
                    }
                } else
                    n && a({
                        id: n,
                        error: {
                            code: -32601,
                            message: "Procedure not found."
                        }
                    })
            }
            return n = {
                incoming: function(e, n) {
                    var o = r.parse(e);
                    if (o.method)
                        t.handle ? t.handle(o, a) : s(o.method, o.id, t.local[o.method], o.params);
                    else {
                        var c = i[o.id];
                        o.error ? c.error && c.error(o.error) : c.success && c.success(o.result),
                        delete i[o.id]
                    }
                },
                init: function() {
                    if (t.remote)
                        for (var r in t.remote)
                            t.remote.hasOwnProperty(r) && (e[r] = c(t.remote[r], r));
                    n.down.init()
                },
                destroy: function() {
                    for (var r in t.remote)
                        t.remote.hasOwnProperty(r) && e.hasOwnProperty(r) && delete e[r];
                    n.down.destroy()
                }
            }
        }
        ,
        p.easyXDM = y
    }(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent),
    easyXDM.noConflict("Kakao"))
      , Xn = Wn
      , $n = function() {
        var e, t, n = n || function(e, t) {
            var n = {}
              , r = n.lib = {}
              , o = function() {}
              , i = r.Base = {
                extend: function(e) {
                    o.prototype = this;
                    var t = new o;
                    return e && t.mixIn(e),
                    t.hasOwnProperty("init") || (t.init = function() {
                        t.$super.init.apply(this, arguments)
                    }
                    ),
                    t.init.prototype = t,
                    t.$super = this,
                    t
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments),
                    e
                },
                init: function() {},
                mixIn: function(e) {
                    for (var t in e)
                        e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            }
              , a = r.WordArray = i.extend({
                init: function(e, t) {
                    e = this.words = e || [],
                    this.sigBytes = null != t ? t : 4 * e.length
                },
                toString: function(e) {
                    return (e || s).stringify(this)
                },
                concat: function(e) {
                    var t = this.words
                      , n = e.words
                      , r = this.sigBytes;
                    if (e = e.sigBytes,
                    this.clamp(),
                    r % 4)
                        for (var o = 0; o < e; o++)
                            t[r + o >>> 2] |= (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 24 - (r + o) % 4 * 8;
                    else if (65535 < n.length)
                        for (o = 0; o < e; o += 4)
                            t[r + o >>> 2] = n[o >>> 2];
                    else
                        t.push.apply(t, n);
                    return this.sigBytes += e,
                    this
                },
                clamp: function() {
                    var t = this.words
                      , n = this.sigBytes;
                    t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                    t.length = e.ceil(n / 4)
                },
                clone: function() {
                    var e = i.clone.call(this);
                    return e.words = this.words.slice(0),
                    e
                },
                random: function(t) {
                    for (var n = [], r = 0; r < t; r += 4)
                        n.push(4294967296 * e.random() | 0);
                    return new a.init(n,t)
                }
            })
              , c = n.enc = {}
              , s = c.Hex = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var n = [], r = 0; r < e; r++) {
                        var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        n.push((o >>> 4).toString(16)),
                        n.push((15 & o).toString(16))
                    }
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length, n = [], r = 0; r < t; r += 2)
                        n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                    return new a.init(n,t / 2)
                }
            }
              , u = c.Latin1 = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var n = [], r = 0; r < e; r++)
                        n.push(String.fromCharCode(t[r >>> 2] >>> 24 - r % 4 * 8 & 255));
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length, n = [], r = 0; r < t; r++)
                        n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                    return new a.init(n,t)
                }
            }
              , l = c.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(u.stringify(e)))
                    } catch (e) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return u.parse(unescape(encodeURIComponent(e)))
                }
            }
              , p = r.BufferedBlockAlgorithm = i.extend({
                reset: function() {
                    this._data = new a.init,
                    this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = l.parse(e)),
                    this._data.concat(e),
                    this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var n = this._data
                      , r = n.words
                      , o = n.sigBytes
                      , i = this.blockSize
                      , c = o / (4 * i);
                    if (t = (c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0)) * i,
                    o = e.min(4 * t, o),
                    t) {
                        for (var s = 0; s < t; s += i)
                            this._doProcessBlock(r, s);
                        s = r.splice(0, t),
                        n.sigBytes -= o
                    }
                    return new a.init(s,o)
                },
                clone: function() {
                    var e = i.clone.call(this);
                    return e._data = this._data.clone(),
                    e
                },
                _minBufferSize: 0
            });
            r.Hasher = p.extend({
                cfg: i.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e),
                    this.reset()
                },
                reset: function() {
                    p.reset.call(this),
                    this._doReset()
                },
                update: function(e) {
                    return this._append(e),
                    this._process(),
                    this
                },
                finalize: function(e) {
                    return e && this._append(e),
                    this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, n) {
                        return new e.init(n).finalize(t)
                    }
                },
                _createHmacHelper: function(e) {
                    return function(t, n) {
                        return new d.HMAC.init(e,n).finalize(t)
                    }
                }
            });
            var d = n.algo = {};
            return n
        }(Math);
        return t = (e = n).lib.WordArray,
        e.enc.Base64 = {
            stringify: function(e) {
                var t = e.words
                  , n = e.sigBytes
                  , r = this._map;
                e.clamp(),
                e = [];
                for (var o = 0; o < n; o += 3)
                    for (var i = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; 4 > a && o + .75 * a < n; a++)
                        e.push(r.charAt(i >>> 6 * (3 - a) & 63));
                if (t = r.charAt(64))
                    for (; e.length % 4; )
                        e.push(t);
                return e.join("")
            },
            parse: function(e) {
                var n = e.length
                  , r = this._map;
                (o = r.charAt(64)) && -1 != (o = e.indexOf(o)) && (n = o);
                for (var o = [], i = 0, a = 0; a < n; a++)
                    if (a % 4) {
                        var c = r.indexOf(e.charAt(a - 1)) << a % 4 * 2
                          , s = r.indexOf(e.charAt(a)) >>> 6 - a % 4 * 2;
                        o[i >>> 2] |= (c | s) << 24 - i % 4 * 8,
                        i++
                    }
                return t.create(o, i)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        },
        function(e) {
            function t(e, t, n, r, o, i, a) {
                return ((e = e + (t & n | ~t & r) + o + a) << i | e >>> 32 - i) + t
            }
            function r(e, t, n, r, o, i, a) {
                return ((e = e + (t & r | n & ~r) + o + a) << i | e >>> 32 - i) + t
            }
            function o(e, t, n, r, o, i, a) {
                return ((e = e + (t ^ n ^ r) + o + a) << i | e >>> 32 - i) + t
            }
            function i(e, t, n, r, o, i, a) {
                return ((e = e + (n ^ (t | ~r)) + o + a) << i | e >>> 32 - i) + t
            }
            for (var a = n, c = (u = a.lib).WordArray, s = u.Hasher, u = a.algo, l = [], p = 0; 64 > p; p++)
                l[p] = 4294967296 * e.abs(e.sin(p + 1)) | 0;
            u = u.MD5 = s.extend({
                _doReset: function() {
                    this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(e, n) {
                    for (var a = 0; 16 > a; a++) {
                        var c = e[s = n + a];
                        e[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                    }
                    a = this._hash.words;
                    var s = e[n + 0]
                      , u = (c = e[n + 1],
                    e[n + 2])
                      , p = e[n + 3]
                      , d = e[n + 4]
                      , f = e[n + 5]
                      , h = e[n + 6]
                      , m = e[n + 7]
                      , v = e[n + 8]
                      , g = e[n + 9]
                      , y = e[n + 10]
                      , b = e[n + 11]
                      , _ = e[n + 12]
                      , k = e[n + 13]
                      , w = e[n + 14]
                      , S = e[n + 15]
                      , x = t(x = a[0], A = a[1], j = a[2], O = a[3], s, 7, l[0])
                      , O = t(O, x, A, j, c, 12, l[1])
                      , j = t(j, O, x, A, u, 17, l[2])
                      , A = t(A, j, O, x, p, 22, l[3]);
                    x = t(x, A, j, O, d, 7, l[4]),
                    O = t(O, x, A, j, f, 12, l[5]),
                    j = t(j, O, x, A, h, 17, l[6]),
                    A = t(A, j, O, x, m, 22, l[7]),
                    x = t(x, A, j, O, v, 7, l[8]),
                    O = t(O, x, A, j, g, 12, l[9]),
                    j = t(j, O, x, A, y, 17, l[10]),
                    A = t(A, j, O, x, b, 22, l[11]),
                    x = t(x, A, j, O, _, 7, l[12]),
                    O = t(O, x, A, j, k, 12, l[13]),
                    j = t(j, O, x, A, w, 17, l[14]),
                    x = r(x, A = t(A, j, O, x, S, 22, l[15]), j, O, c, 5, l[16]),
                    O = r(O, x, A, j, h, 9, l[17]),
                    j = r(j, O, x, A, b, 14, l[18]),
                    A = r(A, j, O, x, s, 20, l[19]),
                    x = r(x, A, j, O, f, 5, l[20]),
                    O = r(O, x, A, j, y, 9, l[21]),
                    j = r(j, O, x, A, S, 14, l[22]),
                    A = r(A, j, O, x, d, 20, l[23]),
                    x = r(x, A, j, O, g, 5, l[24]),
                    O = r(O, x, A, j, w, 9, l[25]),
                    j = r(j, O, x, A, p, 14, l[26]),
                    A = r(A, j, O, x, v, 20, l[27]),
                    x = r(x, A, j, O, k, 5, l[28]),
                    O = r(O, x, A, j, u, 9, l[29]),
                    j = r(j, O, x, A, m, 14, l[30]),
                    x = o(x, A = r(A, j, O, x, _, 20, l[31]), j, O, f, 4, l[32]),
                    O = o(O, x, A, j, v, 11, l[33]),
                    j = o(j, O, x, A, b, 16, l[34]),
                    A = o(A, j, O, x, w, 23, l[35]),
                    x = o(x, A, j, O, c, 4, l[36]),
                    O = o(O, x, A, j, d, 11, l[37]),
                    j = o(j, O, x, A, m, 16, l[38]),
                    A = o(A, j, O, x, y, 23, l[39]),
                    x = o(x, A, j, O, k, 4, l[40]),
                    O = o(O, x, A, j, s, 11, l[41]),
                    j = o(j, O, x, A, p, 16, l[42]),
                    A = o(A, j, O, x, h, 23, l[43]),
                    x = o(x, A, j, O, g, 4, l[44]),
                    O = o(O, x, A, j, _, 11, l[45]),
                    j = o(j, O, x, A, S, 16, l[46]),
                    x = i(x, A = o(A, j, O, x, u, 23, l[47]), j, O, s, 6, l[48]),
                    O = i(O, x, A, j, m, 10, l[49]),
                    j = i(j, O, x, A, w, 15, l[50]),
                    A = i(A, j, O, x, f, 21, l[51]),
                    x = i(x, A, j, O, _, 6, l[52]),
                    O = i(O, x, A, j, p, 10, l[53]),
                    j = i(j, O, x, A, y, 15, l[54]),
                    A = i(A, j, O, x, c, 21, l[55]),
                    x = i(x, A, j, O, v, 6, l[56]),
                    O = i(O, x, A, j, S, 10, l[57]),
                    j = i(j, O, x, A, h, 15, l[58]),
                    A = i(A, j, O, x, k, 21, l[59]),
                    x = i(x, A, j, O, d, 6, l[60]),
                    O = i(O, x, A, j, b, 10, l[61]),
                    j = i(j, O, x, A, u, 15, l[62]),
                    A = i(A, j, O, x, g, 21, l[63]);
                    a[0] = a[0] + x | 0,
                    a[1] = a[1] + A | 0,
                    a[2] = a[2] + j | 0,
                    a[3] = a[3] + O | 0
                },
                _doFinalize: function() {
                    var t = this._data
                      , n = t.words
                      , r = 8 * this._nDataBytes
                      , o = 8 * t.sigBytes;
                    n[o >>> 5] |= 128 << 24 - o % 32;
                    var i = e.floor(r / 4294967296);
                    for (n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                    n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
                    t.sigBytes = 4 * (n.length + 1),
                    this._process(),
                    n = (t = this._hash).words,
                    r = 0; 4 > r; r++)
                        o = n[r],
                        n[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                    return t
                },
                clone: function() {
                    var e = s.clone.call(this);
                    return e._hash = this._hash.clone(),
                    e
                }
            }),
            a.MD5 = s._createHelper(u),
            a.HmacMD5 = s._createHmacHelper(u)
        }(Math),
        function() {
            var e, t = n, r = (e = t.lib).Base, o = e.WordArray, i = (e = t.algo).EvpKDF = r.extend({
                cfg: r.extend({
                    keySize: 4,
                    hasher: e.MD5,
                    iterations: 1
                }),
                init: function(e) {
                    this.cfg = this.cfg.extend(e)
                },
                compute: function(e, t) {
                    for (var n = (c = this.cfg).hasher.create(), r = o.create(), i = r.words, a = c.keySize, c = c.iterations; i.length < a; ) {
                        s && n.update(s);
                        var s = n.update(e).finalize(t);
                        n.reset();
                        for (var u = 1; u < c; u++)
                            s = n.finalize(s),
                            n.reset();
                        r.concat(s)
                    }
                    return r.sigBytes = 4 * a,
                    r
                }
            });
            t.EvpKDF = function(e, t, n) {
                return i.create(n).compute(e, t)
            }
        }(),
        n.lib.Cipher || function(e) {
            var t = (h = n).lib
              , r = t.Base
              , o = t.WordArray
              , i = t.BufferedBlockAlgorithm
              , a = h.enc.Base64
              , c = h.algo.EvpKDF
              , s = t.Cipher = i.extend({
                cfg: r.extend(),
                createEncryptor: function(e, t) {
                    return this.create(this._ENC_XFORM_MODE, e, t)
                },
                createDecryptor: function(e, t) {
                    return this.create(this._DEC_XFORM_MODE, e, t)
                },
                init: function(e, t, n) {
                    this.cfg = this.cfg.extend(n),
                    this._xformMode = e,
                    this._key = t,
                    this.reset()
                },
                reset: function() {
                    i.reset.call(this),
                    this._doReset()
                },
                process: function(e) {
                    return this._append(e),
                    this._process()
                },
                finalize: function(e) {
                    return e && this._append(e),
                    this._doFinalize()
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function(e) {
                    return {
                        encrypt: function(t, n, r) {
                            return ("string" == typeof n ? m : f).encrypt(e, t, n, r)
                        },
                        decrypt: function(t, n, r) {
                            return ("string" == typeof n ? m : f).decrypt(e, t, n, r)
                        }
                    }
                }
            });
            t.StreamCipher = s.extend({
                _doFinalize: function() {
                    return this._process(!0)
                },
                blockSize: 1
            });
            var u = h.mode = {}
              , l = function(e, t, n) {
                var r = this._iv;
                r ? this._iv = undefined : r = this._prevBlock;
                for (var o = 0; o < n; o++)
                    e[t + o] ^= r[o]
            }
              , p = (t.BlockCipherMode = r.extend({
                createEncryptor: function(e, t) {
                    return this.Encryptor.create(e, t)
                },
                createDecryptor: function(e, t) {
                    return this.Decryptor.create(e, t)
                },
                init: function(e, t) {
                    this._cipher = e,
                    this._iv = t
                }
            })).extend();
            p.Encryptor = p.extend({
                processBlock: function(e, t) {
                    var n = this._cipher
                      , r = n.blockSize;
                    l.call(this, e, t, r),
                    n.encryptBlock(e, t),
                    this._prevBlock = e.slice(t, t + r)
                }
            }),
            p.Decryptor = p.extend({
                processBlock: function(e, t) {
                    var n = this._cipher
                      , r = n.blockSize
                      , o = e.slice(t, t + r);
                    n.decryptBlock(e, t),
                    l.call(this, e, t, r),
                    this._prevBlock = o
                }
            }),
            u = u.CBC = p,
            p = (h.pad = {}).Pkcs7 = {
                pad: function(e, t) {
                    for (var n, r = (n = (n = 4 * t) - e.sigBytes % n) << 24 | n << 16 | n << 8 | n, i = [], a = 0; a < n; a += 4)
                        i.push(r);
                    n = o.create(i, n),
                    e.concat(n)
                },
                unpad: function(e) {
                    e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
                }
            },
            t.BlockCipher = s.extend({
                cfg: s.cfg.extend({
                    mode: u,
                    padding: p
                }),
                reset: function() {
                    s.reset.call(this);
                    var e = (t = this.cfg).iv
                      , t = t.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE)
                        var n = t.createEncryptor;
                    else
                        n = t.createDecryptor,
                        this._minBufferSize = 1;
                    this._mode = n.call(t, this, e && e.words)
                },
                _doProcessBlock: function(e, t) {
                    this._mode.processBlock(e, t)
                },
                _doFinalize: function() {
                    var e = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        e.pad(this._data, this.blockSize);
                        var t = this._process(!0)
                    } else
                        t = this._process(!0),
                        e.unpad(t);
                    return t
                },
                blockSize: 4
            });
            var d = t.CipherParams = r.extend({
                init: function(e) {
                    this.mixIn(e)
                },
                toString: function(e) {
                    return (e || this.formatter).stringify(this)
                }
            })
              , f = (u = (h.format = {}).OpenSSL = {
                stringify: function(e) {
                    var t = e.ciphertext;
                    return ((e = e.salt) ? o.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(a)
                },
                parse: function(e) {
                    var t = (e = a.parse(e)).words;
                    if (1398893684 == t[0] && 1701076831 == t[1]) {
                        var n = o.create(t.slice(2, 4));
                        t.splice(0, 4),
                        e.sigBytes -= 16
                    }
                    return d.create({
                        ciphertext: e,
                        salt: n
                    })
                }
            },
            t.SerializableCipher = r.extend({
                cfg: r.extend({
                    format: u
                }),
                encrypt: function(e, t, n, r) {
                    r = this.cfg.extend(r);
                    var o = e.createEncryptor(n, r);
                    return t = o.finalize(t),
                    o = o.cfg,
                    d.create({
                        ciphertext: t,
                        key: n,
                        iv: o.iv,
                        algorithm: e,
                        mode: o.mode,
                        padding: o.padding,
                        blockSize: e.blockSize,
                        formatter: r.format
                    })
                },
                decrypt: function(e, t, n, r) {
                    return r = this.cfg.extend(r),
                    t = this._parse(t, r.format),
                    e.createDecryptor(n, r).finalize(t.ciphertext)
                },
                _parse: function(e, t) {
                    return "string" == typeof e ? t.parse(e, this) : e
                }
            }))
              , h = (h.kdf = {}).OpenSSL = {
                execute: function(e, t, n, r) {
                    return r || (r = o.random(8)),
                    e = c.create({
                        keySize: t + n
                    }).compute(e, r),
                    n = o.create(e.words.slice(t), 4 * n),
                    e.sigBytes = 4 * t,
                    d.create({
                        key: e,
                        iv: n,
                        salt: r
                    })
                }
            }
              , m = t.PasswordBasedCipher = f.extend({
                cfg: f.cfg.extend({
                    kdf: h
                }),
                encrypt: function(e, t, n, r) {
                    return n = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize),
                    r.iv = n.iv,
                    (e = f.encrypt.call(this, e, t, n.key, r)).mixIn(n),
                    e
                },
                decrypt: function(e, t, n, r) {
                    return r = this.cfg.extend(r),
                    t = this._parse(t, r.format),
                    n = r.kdf.execute(n, e.keySize, e.ivSize, t.salt),
                    r.iv = n.iv,
                    f.decrypt.call(this, e, t, n.key, r)
                }
            })
        }(),
        function() {
            for (var e = n, t = e.lib.BlockCipher, r = e.algo, o = [], i = [], a = [], c = [], s = [], u = [], l = [], p = [], d = [], f = [], h = [], m = 0; 256 > m; m++)
                h[m] = 128 > m ? m << 1 : m << 1 ^ 283;
            var v = 0
              , g = 0;
            for (m = 0; 256 > m; m++) {
                var y = (y = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4) >>> 8 ^ 255 & y ^ 99;
                o[v] = y,
                i[y] = v;
                var b = h[v]
                  , _ = h[b]
                  , k = h[_]
                  , w = 257 * h[y] ^ 16843008 * y;
                a[v] = w << 24 | w >>> 8,
                c[v] = w << 16 | w >>> 16,
                s[v] = w << 8 | w >>> 24,
                u[v] = w,
                w = 16843009 * k ^ 65537 * _ ^ 257 * b ^ 16843008 * v,
                l[y] = w << 24 | w >>> 8,
                p[y] = w << 16 | w >>> 16,
                d[y] = w << 8 | w >>> 24,
                f[y] = w,
                v ? (v = b ^ h[h[h[k ^ b]]],
                g ^= h[h[g]]) : v = g = 1
            }
            var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            r = r.AES = t.extend({
                _doReset: function() {
                    for (var e = (n = this._key).words, t = n.sigBytes / 4, n = 4 * ((this._nRounds = t + 6) + 1), r = this._keySchedule = [], i = 0; i < n; i++)
                        if (i < t)
                            r[i] = e[i];
                        else {
                            var a = r[i - 1];
                            i % t ? 6 < t && 4 == i % t && (a = o[a >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a]) : (a = o[(a = a << 8 | a >>> 24) >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a],
                            a ^= S[i / t | 0] << 24),
                            r[i] = r[i - t] ^ a
                        }
                    for (e = this._invKeySchedule = [],
                    t = 0; t < n; t++)
                        i = n - t,
                        a = t % 4 ? r[i] : r[i - 4],
                        e[t] = 4 > t || 4 >= i ? a : l[o[a >>> 24]] ^ p[o[a >>> 16 & 255]] ^ d[o[a >>> 8 & 255]] ^ f[o[255 & a]]
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, a, c, s, u, o)
                },
                decryptBlock: function(e, t) {
                    var n = e[t + 1];
                    e[t + 1] = e[t + 3],
                    e[t + 3] = n,
                    this._doCryptBlock(e, t, this._invKeySchedule, l, p, d, f, i),
                    n = e[t + 1],
                    e[t + 1] = e[t + 3],
                    e[t + 3] = n
                },
                _doCryptBlock: function(e, t, n, r, o, i, a, c) {
                    for (var s = this._nRounds, u = e[t] ^ n[0], l = e[t + 1] ^ n[1], p = e[t + 2] ^ n[2], d = e[t + 3] ^ n[3], f = 4, h = 1; h < s; h++) {
                        var m = r[u >>> 24] ^ o[l >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[255 & d] ^ n[f++]
                          , v = r[l >>> 24] ^ o[p >>> 16 & 255] ^ i[d >>> 8 & 255] ^ a[255 & u] ^ n[f++]
                          , g = r[p >>> 24] ^ o[d >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & l] ^ n[f++];
                        d = r[d >>> 24] ^ o[u >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & p] ^ n[f++],
                        u = m,
                        l = v,
                        p = g
                    }
                    m = (c[u >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[255 & d]) ^ n[f++],
                    v = (c[l >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[255 & u]) ^ n[f++],
                    g = (c[p >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & l]) ^ n[f++],
                    d = (c[d >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & p]) ^ n[f++],
                    e[t] = m,
                    e[t + 1] = v,
                    e[t + 2] = g,
                    e[t + 3] = d
                },
                keySize: 8
            });
            e.AES = t._createHelper(r)
        }(),
        n
    }()
      , Gn = $n;
    function Vn() {
        return en()
    }
    var Yn = null;
    function Qn() {
        var e, t, n, r;
        return null === Yn && (e = rr(),
        t = yt.getItem(e),
        Yn = t ? (n = t,
        r = Vn(),
        Gn.AES.decrypt(n, r).toString(Gn.enc.Utf8)) : null),
        Yn
    }
    function Zn(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Yn = e,
        null === e || !1 === t ? tr(rr()) : er(rr(), e)
    }
    function er(e, t) {
        var n, r, o = (n = t,
        r = Vn(),
        Gn.AES.encrypt(n, r).toString());
        yt.setItem(e, o)
    }
    function tr(e) {
        yt.removeItem(e)
    }
    var nr = {};
    function rr() {
        var e;
        return nr.accessTokenKey || (nr.accessTokenKey = "kakao_" + (e = "kat" + Vn(),
        Gn.MD5(e).toString())),
        nr.accessTokenKey
    }
    var or = Object.freeze({
        __proto__: null,
        getAppKey: Vn,
        getAccessToken: Qn,
        setAccessToken: Zn,
        getRefreshToken: function() {
            return console.error("unsupported operation: Auth.getRefreshToken()"),
            ""
        },
        setRefreshToken: function(e) {
            console.error("unsupported operation: Auth.setRefreshToken()")
        }
    });
    function ir() {
        return "Bearer ".concat(Qn())
    }
    function ar() {
        return "KakaoAK ".concat(Vn())
    }
    var cr = {
        permission: vt(["A", "F", "M"]),
        enable_share: Qe,
        android_exec_param: Ye,
        ios_exec_param: Ye,
        android_market_param: Ye,
        ios_market_param: Ye
    }
      , sr = {
        secure_resource: Qe
    };
    function ur(e) {
        !1 === e.secure_resource && (console && console.warn("KakaoWarning: The secure_resource parameter is deprecated."),
        e.secure_resource = !0)
    }
    function lr(e) {
        if (!Ye(e))
            return !1;
        if (0 === e.length || e.length > 2048)
            throw new an("content length should be between 0 and 2048");
        return !0
    }
    function pr(e) {
        return (e.header_image_url || e.header_image_width || e.header_image_height) && (delete e.header_image_url,
        delete e.header_image_width,
        delete e.header_image_height,
        console && console.warn("KakaoWarning: The parameters (".concat(["header_image_url", "header_image_width", "header_image_height"].join(", "), ") for header background image are deprecated."))),
        !0
    }
    var dr = {
        "/v1/user/signup": {
            method: "post",
            data: {
                optional: {
                    properties: d
                }
            }
        },
        "/v1/user/unlink": {
            method: "post",
            data: {}
        },
        "/v2/user/me": {
            method: "get",
            data: {
                optional: _t({
                    property_keys: f
                }, sr)
            }
        },
        "/v1/user/logout": {
            method: "post",
            data: {}
        },
        "/v1/user/update_profile": {
            method: "post",
            data: {
                required: {
                    properties: d
                }
            }
        },
        "/v1/user/access_token_info": {
            method: "get",
            data: {}
        },
        "/v2/user/scopes": {
            method: "get",
            data: {
                optional: {
                    scopes: f
                }
            }
        },
        "/v2/user/revoke/scopes": {
            method: "post",
            data: {
                required: {
                    scopes: f
                }
            }
        },
        "/v1/user/service/terms": {
            method: "get",
            data: {
                optional: {
                    extra: Ye
                }
            }
        },
        "/v1/user/shipping_address": {
            method: "get",
            data: {
                optional: {
                    address_id: et,
                    from_updated_at: et,
                    page_size: et
                }
            }
        },
        "/v1/api/talk/profile": {
            method: "get",
            data: {
                optional: sr,
                after: ur
            }
        },
        "/v1/api/talk/friends": {
            method: "get",
            data: {
                optional: _t({
                    offset: et,
                    limit: et,
                    order: Ye,
                    friend_order: Ye
                }, sr),
                after: ur
            }
        },
        "/v1/friends": {
            method: "get",
            data: {
                optional: _t({
                    offset: et,
                    limit: et,
                    order: Ye,
                    friend_order: Ye
                }, sr),
                after: ur
            }
        },
        "/v2/api/talk/memo/send": {
            method: "post",
            data: {
                required: {
                    template_id: et
                },
                optional: {
                    template_args: d
                }
            }
        },
        "/v2/api/talk/memo/scrap/send": {
            method: "post",
            data: {
                required: {
                    request_url: Ye
                },
                optional: {
                    template_id: et,
                    template_args: d
                }
            }
        },
        "/v2/api/talk/memo/default/send": {
            method: "post",
            data: {
                required: {
                    template_object: function(e) {
                        return d(e) && pr(e)
                    }
                }
            }
        },
        "/v1/api/talk/friends/message/send": {
            method: "post",
            data: {
                required: {
                    template_id: et,
                    receiver_uuids: f,
                    receiver_id_type: Ye
                },
                optional: {
                    template_args: d
                },
                defaults: function() {
                    return {
                        receiver_id_type: "uuid"
                    }
                }
            }
        },
        "/v1/api/talk/friends/message/scrap/send": {
            method: "post",
            data: {
                required: {
                    request_url: Ye,
                    receiver_uuids: f,
                    receiver_id_type: Ye
                },
                optional: {
                    template_id: et,
                    template_args: d
                },
                defaults: function() {
                    return {
                        receiver_id_type: "uuid"
                    }
                }
            }
        },
        "/v1/api/talk/friends/message/default/send": {
            method: "post",
            data: {
                required: {
                    template_object: function(e) {
                        return d(e) && pr(e)
                    },
                    receiver_uuids: f,
                    receiver_id_type: Ye
                },
                defaults: function() {
                    return {
                        receiver_id_type: "uuid"
                    }
                }
            }
        },
        "/v2/api/kakaolink/talk/template/validate": {
            method: "get",
            data: {
                required: {
                    link_ver: Ye,
                    template_id: et
                },
                optional: {
                    template_args: d,
                    target_app_key: Ye
                }
            },
            authType: ar
        },
        "/v2/api/kakaolink/talk/template/scrap": {
            method: "get",
            data: {
                required: {
                    link_ver: Ye,
                    request_url: Ye
                },
                optional: {
                    template_id: et,
                    template_args: d,
                    target_app_key: Ye
                }
            },
            authType: ar
        },
        "/v2/api/kakaolink/talk/template/default": {
            method: "get",
            data: {
                required: {
                    link_ver: Ye,
                    template_object: d
                },
                optional: {
                    target_app_key: Ye
                }
            },
            authType: ar
        },
        "/v2/api/talk/message/image/upload": {
            method: "post",
            data: {
                required: {
                    file: d
                }
            },
            authType: ar
        },
        "/v2/api/talk/message/image/delete": {
            method: "delete",
            data: {
                required: {
                    image_url: Ye
                }
            },
            authType: ar
        },
        "/v2/api/talk/message/image/scrap": {
            method: "post",
            data: {
                required: {
                    image_url: Ye
                }
            },
            authType: ar
        },
        "/v1/api/story/profile": {
            method: "get",
            data: {
                optional: sr
            }
        },
        "/v1/api/story/isstoryuser": {
            method: "get",
            data: {}
        },
        "/v1/api/story/mystory": {
            method: "get",
            data: {
                required: {
                    id: Ye
                }
            }
        },
        "/v1/api/story/mystories": {
            method: "get",
            data: {
                optional: {
                    last_id: Ye
                }
            }
        },
        "/v1/api/story/linkinfo": {
            method: "get",
            data: {
                required: {
                    url: Ye
                }
            }
        },
        "/v1/api/story/post/note": {
            method: "post",
            data: {
                required: {
                    content: lr
                },
                optional: cr
            }
        },
        "/v1/api/story/post/photo": {
            method: "post",
            data: {
                required: {
                    image_url_list: function(e) {
                        return !!f(e) && ct(e, (function(e) {
                            if (!Ye(e))
                                return !1;
                            if (/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e))
                                throw new an("url in image_url_list should be a kage url, obtained from '/v1/api/story/upload/multi'.");
                            return !0
                        }
                        ))
                    }
                },
                optional: _t({
                    content: lr
                }, cr)
            }
        },
        "/v1/api/story/post/link": {
            method: "post",
            data: {
                required: {
                    link_info: d
                },
                optional: _t({
                    content: lr
                }, cr)
            }
        },
        "/v1/api/story/upload/multi": {
            method: "post",
            data: {}
        },
        "/v1/api/story/delete/mystory": {
            method: "delete",
            data: {
                required: {
                    id: Ye
                }
            }
        },
        "/v1/api/talk/channels": {
            method: "get",
            data: {
                optional: {
                    channel_public_ids: f
                }
            }
        },
        "/v1/api/talk/plusfriends": {
            method: "get",
            data: {
                optional: {
                    plus_friend_public_ids: f
                }
            }
        }
    }
      , fr = {
        request: {
            required: {
                url: vt(ut(dr))
            },
            optional: {
                data: d,
                files: function(e) {
                    return gt([f, it])(e) && ct(e, gt([ot, rt]))
                },
                file: ot,
                success: j,
                fail: j,
                always: j
            },
            defaults: {
                data: {},
                success: lt,
                fail: lt,
                always: lt
            }
        },
        api: dr
    }
      , hr = null;
    function mr(e) {
        var t = (e = ln(e, fr.request, "API.request")).url
          , n = fr.api[t].data;
        return n && (e.data = ln(e.data, n, "API.request - ".concat(t))),
        hr || (hr = fn((function() {
            return new Xn.Rpc({
                remote: Qt.apiRemote
            },{
                remote: {
                    request: {}
                }
            })
        }
        )),
        vr.push((function() {
            hr.destroy(),
            hr = null
        }
        ))),
        new Jn.exports.Promise((function(t, n) {
            (function(e) {
                var t = e.url
                  , n = fr.api[t]
                  , r = {};
                Ve(e.data, (function(e, t) {
                    r[t] = Ye(e) ? e : JSON.stringify(e)
                }
                ));
                var o = {
                    url: t,
                    method: n.method,
                    headers: {
                        KA: Yt,
                        Authorization: (n.authType || ir)(),
                        "Cache-Control": "no-cache",
                        Pragma: "no-cache"
                    },
                    data: r
                };
                return new Jn.exports.Promise((function(n, i) {
                    if (function(e) {
                        return "/v1/api/story/upload/multi" === e || "/v2/api/talk/message/image/upload" === e
                    }(t) || e.data.file) {
                        var a = e.files || e.data.file;
                        if (!a)
                            throw new an("'files' parameter should be set for ".concat(t));
                        (function(e) {
                            var t = at(e, (function(e) {
                                return function(e) {
                                    return new Jn.exports.Promise((function(t, n) {
                                        "undefined" == typeof FileReader && n(new an("File API is not supported for this browser."));
                                        var r = new FileReader;
                                        r.onload = function(e) {
                                            try {
                                                t((r = e.target.result,
                                                Array.prototype.slice.call(new Uint8Array(r)).reduce((function(e, t) {
                                                    return e + String.fromCharCode.apply(null, [t])
                                                }
                                                ), "")))
                                            } catch (e) {
                                                n(e)
                                            }
                                            var r
                                        }
                                        ,
                                        r.onerror = function(t) {
                                            n(new an("Cannot read file: ".concat(e.name)))
                                        }
                                        ,
                                        r.readAsArrayBuffer(e)
                                    }
                                    ))
                                }(e).then((function(t) {
                                    return {
                                        name: e.name,
                                        type: e.type,
                                        str: t
                                    }
                                }
                                ))
                            }
                            ));
                            return new Jn.exports.Promise((function(e, n) {
                                Jn.exports.Promise.all(t).then((function(t) {
                                    e({
                                        paramName: "file",
                                        data: t
                                    })
                                }
                                ), (function(e) {
                                    n(e)
                                }
                                ))
                            }
                            ))
                        }
                        )(a).then((function(e) {
                            var t = [];
                            for (var i in r)
                                "file" !== i && t.push("".concat(i, "=").concat(encodeURIComponent(r[i])));
                            t.length > 0 && (o.url += "?".concat(t.join("&"))),
                            o.file = e,
                            n(o)
                        }
                        ), (function(e) {
                            i(e)
                        }
                        ))
                    } else
                        n(o)
                }
                ))
            }
            )(e).then((function(r) {
                hr.request(r, (function(n) {
                    e.success(n),
                    e.always(n),
                    t(n)
                }
                ), (function(t) {
                    var r = function(e) {
                        try {
                            return JSON.parse(e.message.responseText)
                        } catch (e) {
                            return {
                                code: -777,
                                msg: "Unknown error"
                            }
                        }
                    }(t);
                    e.fail(r),
                    e.always(r),
                    n(r)
                }
                ))
            }
            ), (function(e) {
                n(e)
            }
            ))
        }
        ))
    }
    var vr = [];
    var gr = Object.freeze({
        __proto__: null,
        request: mr,
        cleanup: function() {
            sn(vr)
        }
    });
    function yr(e, t) {
        return Re(e, {
            remote: Qt.loginWidget,
            channel: pt()
        }),
        fn((function() {
            var n = new Xn.Rpc(e,{
                local: {
                    postResponse: t,
                    getKakaoAgent: function() {
                        return Yt
                    }
                },
                remote: {
                    getCode: {},
                    getAccessToken: {},
                    setClient: {},
                    setStateToken: {},
                    deleteAuthCookie: {}
                }
            });
            return n.channel = e.channel,
            n
        }
        ))
    }
    var br = "_blank"
      , _r = "width=380, height=520, scrollbars=yes"
      , kr = /Version\/4.0/i.test(Xt.ua) || /; wv\)/i.test(Xt.ua)
      , wr = /naver\(inapp|daumapps|ebay/g.test(Xt.ua) || "object" === ("undefined" == typeof daumApps ? "undefined" : kt(daumApps));
    function Sr() {
        if (Xt.os.ios) {
            if ($t && Number(Xt.os.version.major) >= 17 && Number(Xt.os.version.minor) >= 4) {
                var e = function() {
                    var e = Xt.ua.match(/KAKAOTALK\/(\d+(\.\d+)+)/gi);
                    if (!e)
                        return {
                            major: 0,
                            minor: 0,
                            patch: 0
                        };
                    var t = Pt(e[0].split("/")[1].split("."), 3);
                    return {
                        major: t[0],
                        minor: t[1],
                        patch: t[2]
                    }
                }();
                return !(Number(e.major) >= 10 && Number(e.minor) >= 7)
            }
            return /safari|FxiOS|CriOS/.test(Xt.ua) || !$t
        }
        return !!Xt.os.android && (Xt.browser.chrome && !/opr\//i.test(Xt.ua) && Xt.browser.version.major >= 30 && (!kr || kr && wr))
    }
    var xr = {
        login: function(e, t, n, r) {
            if (Sr()) {
                var o = null;
                if (Xt.os.ios) {
                    var i = function(e, t) {
                        t.state = e;
                        var n = {
                            client_id: en(),
                            redirect_uri: Qt.redirectUri,
                            params: JSON.stringify(t)
                        };
                        return "".concat(Qt.talkLoginScheme, "?").concat(mt(n))
                    }(e, n)
                      , a = "".concat(Qt.universalKakaoLink).concat(encodeURIComponent(i), "&web=").concat(encodeURIComponent(t));
                    r ? location.href = a : o = mn(a, br, _r)
                } else if (Xt.os.android) {
                    var c = function(e, t, n) {
                        return ["intent:#Intent", "action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY", "launchFlags=0x08880000", "S.com.kakao.sdk.talk.appKey=".concat(en()), "S.com.kakao.sdk.talk.redirectUri=".concat(Qt.talkLoginRedirectUri), "S.com.kakao.sdk.talk.state=".concat(e), "S.com.kakao.sdk.talk.kaHeader=".concat(Yt), "S.com.kakao.sdk.talk.extraparams=".concat(encodeURIComponent(JSON.stringify(n))), "S.browser_fallback_url=".concat(encodeURIComponent(t)), "end;"].join(";")
                    }(e, t, n);
                    r ? location.href = c : Xt.browser.version.major > 40 && (!kr || kr && wr) ? o = mn(c, br, _r) : (o = mn("", br, _r)) && (o.addEventListener("unload", (function() {
                        setTimeout((function() {
                            o && o.location && (o.location.href = t)
                        }
                        ), 10)
                    }
                    )),
                    o.location.href = c)
                }
                return o
            }
        },
        isSupport: Sr
    }
      , Or = new Sn(1e3,600);
    function jr(e) {
        var t = pt() + pt();
        if (xr.isSupport() && e.throughTalk)
            Pr(e, t);
        else if (e.redirectUri)
            location.href = Ur(e);
        else if (Xt.os.android && $t && Xt.browser.chrome && Xt.browser.version.major >= 71) {
            Pr(e, t, In(Re({}, Pn(e), Fn(e), {
                redirect_uri: Qt.talkLoginRedirectUri,
                response_type: "code",
                state: t,
                ka: Yt,
                origin: Wt
            })))
        } else {
            Xt.browser.msie && parseInt(Xt.browser.version.major) <= 9 || function(e) {
                var t = function t(n) {
                    var r = n.origin
                      , o = n.data;
                    if ((/\.kakao\.com$/.test(r) || r === Wt) && o && "string" == typeof o) {
                        var i = o.split(" ");
                        if ("postResponse" === i[1]) {
                            var a = JSON.parse(decodeURIComponent(i[2]));
                            Rr(e, a),
                            ht(window, "message", t)
                        }
                    }
                };
                ft(window, "message", t),
                Mr.push((function() {
                    ht(window, "message", t)
                }
                ))
            }(e),
            Cn(Er(e, t))
        }
        wn.dispatch("LOGIN_START")
    }
    var Ar = null
      , Tr = function() {
        Ar && Ar.close && Ar.close(),
        Ar = null
    }
      , Cr = null
      , Ir = null;
    function Pr(e, t, n) {
        Cr || (Cr = yr({}, (function(t) {
            if ("error" === t.status && t.error_code && "300" !== t.error_code && (Or.stop(),
            "700" === t.error_code ? location.href = "".concat(Qt.authDomain, "/error/network") : Rr(e, {
                error: t.error,
                error_description: t.error_description
            })),
            t.status)
                if ("ok" === t.status) {
                    if (Or.stop(),
                    Ir === t.code)
                        return;
                    Ir = t.code,
                    Cr.getAccessToken(t.code, en(), Xt.os.ios && !n ? Qt.redirectUri : Qt.talkLoginRedirectUri, e.approvalType),
                    Tr()
                } else
                    Xt.os.ios && "about:blank" === Ar.location.href && Tr();
            else
                Rr(e, t)
        }
        )),
        Mr.push((function() {
            Cr.destroy(),
            Cr = null
        }
        )));
        var r = "";
        if (n)
            e.redirectUri ? location.href = n : Cn(n);
        else {
            r = e.redirectUri ? Ur(e) : Er(e, t, Xt.os.ios ? Qt.redirectUri : Qt.talkLoginRedirectUri);
            var o = Re({}, Pn(e), Fn(e));
            setTimeout((function() {
                Ar = xr.login(t, r, o, e.redirectUri)
            }
            ), 500)
        }
        Or.start((function() {
            t && Cr.getCode(t, en(), Yt)
        }
        ), (function() {
            Rr(e, {
                error: "timeout",
                description: "Account login timed out. Please login again.",
                error_description: "Account login timed out. Please login again."
            }),
            e.redirectUri ? location.href = r : Cn(r)
        }
        ))
    }
    var Fr = null
      , Br = {};
    function Er(e, t, n) {
        Fr || (Fr = yr({}, (function(e) {
            var t = function(e, t) {
                if (!t[e.stateToken])
                    throw new an("security error: #CST2");
                var n = t[e.stateToken];
                return delete t[e.stateToken],
                delete e.stateToken,
                n
            }(e, Br);
            Rr(t, e)
        }
        )),
        Mr.push((function() {
            Fr.destroy(),
            Fr = null
        }
        ))),
        Br[t] = e;
        var r = e.redirectUri ? e.redirectUri : n || "kakaojs";
        return In(Re({}, Pn(e), Fn(e), {
            redirect_uri: r,
            response_type: "code",
            state: t,
            proxy: "easyXDM_Kakao_".concat(Fr.channel, "_provider"),
            ka: Yt,
            origin: Wt
        }))
    }
    function Ur(e) {
        return In(Re({}, Pn(e), Fn(e), {
            redirect_uri: e.redirectUri,
            response_type: "code",
            ka: Yt,
            origin: Wt
        }))
    }
    function Rr(e, t) {
        t.error ? "access_denied" !== t.error && Zn(null) : (Zn(t.access_token, e.persistAccessToken),
        wn.dispatch("LOGIN")),
        Un(e, t)
    }
    var Lr = null;
    var Mr = [];
    var zr = Object.freeze({
        __proto__: null,
        createLoginButton: function(e) {
            var t = dt((e = ln(e, Tn.createLoginButton, "Auth.createLoginButton")).container);
            if (!t)
                throw new an("container is required for Kakao login button: pass in element or id");
            var n = "medium" === e.size ? "02" : "small" === e.size ? "03" : "01"
              , r = "".concat(Qt.authDomain, "/public/widget/login/").concat(e.lang, "/").concat(e.lang, "_").concat(n, "_medium")
              , o = "".concat(r, ".png")
              , i = "".concat(r, "_press.png");
            t.innerHTML = '<img\n    id="kakao-login-btn"\n    src='.concat(o, "\n    onmouseover=this.src='").concat(i, "'\n    onmouseout=this.src='").concat(o, '\'\n    style="cursor: pointer"\n  />');
            var a = function() {
                jr(e)
            };
            ft(t, "click", a),
            Mr.push((function() {
                ht(t, "click", a)
            }
            ))
        },
        login: function(e) {
            jr(e = ln(e, Tn.login, "Auth.login"))
        },
        loginForm: function(e) {
            e = ln(e, Tn.login, "Auth.loginForm");
            var t = pt() + pt()
              , n = "&prompt=login";
            e.redirectUri ? location.href = "".concat(Ur(e)).concat(n) : Cn("".concat(Er(e, t)).concat(n))
        },
        autoLogin: function(e) {
            if (e = ln(e, Tn.autoLogin, "Auth.autoLogin"),
            Hn() || Xt.os.android && $t) {
                var t = pt() + pt();
                Pr(e, t, In(Re({}, Pn(e), {
                    redirect_uri: Qt.talkLoginRedirectUri,
                    response_type: "code",
                    state: t,
                    ka: Yt,
                    origin: Wt,
                    prompt: "none"
                })))
            } else
                Un(e, {
                    error: "auto_login",
                    error_description: "Kakao.Auth.autoLogin is only supported by KakaoTalk InAppBrowser",
                    error_code: "400",
                    status: "error"
                });
            wn.dispatch("LOGIN_START")
        },
        logout: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt;
            un(e, j, "Auth.logout"),
            mr({
                url: "/v1/user/logout",
                always: function() {
                    Zn(null),
                    wn.dispatch("LOGOUT"),
                    e(!0)
                }
            })
        },
        issueAccessToken: function(e) {
            e = ln(e, Tn.issueAccessToken, "Auth.issueAccessToken"),
            Lr || (Lr = yr({}, (function(t) {
                Rr(e, t)
            }
            )),
            Mr.push((function() {
                Lr.destroy(),
                Lr = null
            }
            ))),
            Lr.getAccessToken(e.code, en(), e.redirectUri)
        },
        cleanup: function() {
            sn(Mr)
        }
    });
    function Dr(e, t) {
        Nr();
        var n = pn()
          , r = _t({
            app_key: en(),
            access_token: Qn(),
            ka: Yt,
            trans_id: n,
            mobile_view: e.forceMobileLayout,
            enable_back_button: e.enableBackButton
        }, e.addressId && {
            address_id: e.addressId
        })
          , o = Qt.appsDomain + t;
        e.returnUrl ? (r.return_url = e.returnUrl,
        _n(r, o)) : (gn(n, "".concat(Qt.appsDomain, "/proxy?trans_id=").concat(n), qr),
        yn(e, Qt.appsDomain, qr),
        function(e) {
            var t = function t(n) {
                var r = n.data
                  , o = n.origin;
                o !== Qt.appsDomain && o !== Qt.accountDomain || "closed" !== r || (e.close(),
                ht(window, "message", t))
            };
            ft(window, "message", t)
        }(e),
        bn(r, {
            url: o,
            popupName: "shipping_address",
            popupFeatures: "location=no,resizable=no,status=no,scrollbars=no,width=460,height=608"
        }))
    }
    var qr = [];
    function Nr() {
        sn(qr)
    }
    var Kr = cn([Nn, zr, or, Object.freeze({
        __proto__: null,
        getStatusInfo: function(e) {
            un(e, j, "Auth.getStatusInfo"),
            Qn() ? mr({
                url: "/v2/user/me",
                success: function(t) {
                    e({
                        status: "connected",
                        user: t
                    })
                },
                fail: function() {
                    e({
                        status: "not_connected"
                    })
                }
            }) : e({
                status: "not_connected"
            })
        }
    }), Object.freeze({
        __proto__: null,
        selectShippingAddress: function(e) {
            Dr(e = ln(e, Tn.selectShippingAddress, "Auth.selectShippingAddress"), "/user/address")
        },
        createShippingAddress: function(e) {
            Dr(e = ln(e, Tn.createShippingAddress, "Auth.createShippingAddress"), "/user/create/address")
        },
        updateShippingAddress: function(e) {
            Dr(e = ln(e, Tn.updateShippingAddress, "Auth.updateShippingAddress"), "/user/edit/address")
        },
        cleanup: Nr
    })])
      , Hr = cn([gr]);
    function Jr(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    function Wr(e) {
        return e.replace(/[A-Z]/g, (function(e) {
            return "_".concat(e.toLowerCase())
        }
        ))
    }
    function Xr(e) {
        return d(e) ? JSON.stringify(e) : e
    }
    function $r(e, t) {
        return mr({
            url: e,
            data: t
        })
    }
    function Gr(e, t, n) {
        return ln(e, t, 'parameter "'.concat(n, '" in Share')),
        !0
    }
    function Vr(e) {
        return ut(e).reduce((function(t, n) {
            return t[Wr(n)] = e[n],
            t
        }
        ), {})
    }
    var Yr = {
        optional: {
            webUrl: Ye,
            mobileWebUrl: Ye,
            androidExecutionParams: Ye,
            androidExecParams: Ye,
            iosExecutionParams: Ye,
            iosExecParams: Ye
        },
        builder: Zr
    }
      , Qr = {
        required: {
            item: Ye,
            itemOp: Ye
        }
    };
    function Zr(e) {
        var t = Vr(e);
        return t.android_exec_params && (t.android_execution_params = t.android_exec_params,
        delete t.android_exec_params),
        t.ios_exec_params && (t.ios_execution_params = t.ios_exec_params,
        delete t.ios_exec_params),
        t
    }
    function eo(e) {
        return {
            title: e.title,
            link: Zr(e.link)
        }
    }
    function to(e) {
        var t = Vr(e);
        return t.link = Zr(t.link),
        t
    }
    var no = {
        headerLink: Yr,
        link: Yr,
        button: {
            required: {
                title: Ye,
                link: function(e) {
                    Gr(e, Yr, "link")
                }
            },
            builder: eo
        },
        buttons: {
            optional: {
                0: function(e) {
                    Gr(e, no.button, "button")
                },
                1: function(e) {
                    Gr(e, no.button, "button")
                }
            },
            builder: function(e) {
                return at(e, eo)
            }
        },
        content: {
            required: {
                title: Ye,
                imageUrl: Ye,
                link: function(e) {
                    Gr(e, Yr, "link")
                }
            },
            optional: {
                imageWidth: et,
                imageHeight: et,
                description: Ye
            },
            builder: to
        },
        contents: {
            optional: {
                0: function(e) {
                    Gr(e, no.content, "content")
                },
                1: function(e) {
                    Gr(e, no.content, "content")
                },
                2: function(e) {
                    Gr(e, no.content, "content")
                }
            },
            builder: function(e) {
                return at(e, to)
            }
        },
        commerce: {
            required: {
                regularPrice: et
            },
            optional: {
                discountPrice: et,
                discountRate: et,
                fixedDiscountPrice: et,
                currencyUnit: Ye,
                currencyUnitPosition: vt([0, 1]),
                productName: Ye
            },
            builder: Vr
        },
        social: {
            optional: {
                likeCount: et,
                commentCount: et,
                sharedCount: et,
                viewCount: et,
                subscriberCount: et
            },
            builder: Vr
        },
        itemContent: {
            optional: {
                profileText: Ye,
                profileImageUrl: Ye,
                titleImageUrl: Ye,
                titleImageText: Ye,
                titleImageCategory: Ye,
                items: function(e) {
                    return f(e) && e.length < 6 && ct(e, (function(e) {
                        return Gr(e, Qr, "items.item")
                    }
                    ))
                },
                sum: Ye,
                sumOp: Ye
            },
            builder: function(e) {
                var t = Vr(e);
                return t.items && (t.items = at(t.items, (function(e) {
                    return Vr(e)
                }
                ))),
                t
            }
        }
    };
    var ro = {
        create: function(e, t, n) {
            var r = no[t];
            if (r)
                return e = ln(e, r, 'parameter "'.concat(t, '" in ').concat(n || "Share")),
                r.builder(e)
        }
    }
      , oo = "4.0"
      , io = xt((function e(t, n) {
        wt(this, e),
        this.appkey = rn() ? rn() : en(),
        this.appver = "1.0",
        this.linkver = oo,
        this.extras = _t(_t({
            KA: Yt
        }, t.extras), t.serverCallbackArgs && {
            lcba: Xr(t.serverCallbackArgs)
        }),
        this.template_json = n.template_msg,
        this.template_args = n.template_args,
        this.template_id = n.template_id
    }
    ));
    var ao = xt((function e(t) {
        var n = this;
        wt(this, e),
        this.link_ver = oo,
        this.template_object = _t({
            object_type: t.objectType
        }, t.buttonTitle && {
            button_title: t.buttonTitle
        }),
        Ve(t, (function(e, t) {
            var r = ro.create(e, t, "defaultObject");
            r && (n.template_object[Wr(t)] = r)
        }
        ))
    }
    ))
      , co = {
        FeedLink: ao,
        CommerceLink: ao,
        ListLink: function(e) {
            jt(n, e);
            var t = It(n);
            function n(e) {
                var r;
                return wt(this, n),
                (r = t.call(this, e)).template_object.header_title = e.headerTitle,
                console && (e.headerImageUrl || e.headerImageWidth || e.headerImageHeight) && console.warn("KakaoWarning: The parameters (".concat(["headerImageUrl", "headerImageWidth", "headerImageHeight"].join(", "), ") for header background image are deprecated.")),
                r
            }
            return xt(n)
        }(ao),
        LocationLink: function(e) {
            jt(n, e);
            var t = It(n);
            function n(e) {
                var r;
                wt(this, n);
                var o = (r = t.call(this, e)).template_object;
                return o.address = e.address || "",
                o.address_title = e.addressTitle || "",
                r
            }
            return xt(n)
        }(ao),
        TextLink: function(e) {
            jt(n, e);
            var t = It(n);
            function n(e) {
                var r;
                return wt(this, n),
                (r = t.call(this, e)).template_object.text = e.text || "",
                r
            }
            return xt(n)
        }(ao)
    }
      , so = xt((function e(t) {
        wt(this, e),
        this.link_ver = oo,
        this.request_url = t.requestUrl,
        t.templateId && (this.template_id = t.templateId),
        t.templateArgs && (this.template_args = t.templateArgs)
    }
    ))
      , uo = xt((function e(t) {
        wt(this, e),
        this.link_ver = oo,
        this.template_id = t.templateId,
        this.template_args = t.templateArgs
    }
    ));
    var lo = {
        send: function(e, t, n) {
            var r = en()
              , o = rn()
              , i = bn(_t(_t({
                app_key: r,
                ka: Yt,
                validation_action: t,
                validation_params: JSON.stringify(n)
            }, e.serverCallbackArgs && {
                lcba: Xr(e.serverCallbackArgs)
            }), o && r !== o && {
                target_app_key: o
            }), {
                url: "".concat(Qt.sharerDomain, "/picker/link"),
                popupName: "kakao_link_web_sharer",
                popupFeatures: "location=no,resizable=no,status=no,scrollbars=no,width=460,height=608"
            });
            e.callback && function(e, t) {
                if (Xt.browser.msie)
                    return void (console && console.warn("KakaoWarning: The callback parameter does not support the IE browser."));
                var n = function(e) {
                    "sent" === e.data && e.origin === Qt.sharerDomain && t()
                };
                ft(window, "message", n);
                var r = setInterval((function() {
                    e.closed && (clearInterval(r),
                    ht(window, "message", n))
                }
                ), 1e3)
            }(i, e.callback)
        }
    }
      , po = function() {
        var e = Lt()
          , t = e.os
          , n = ["opr/"]
          , r = ["firefox", "KAKAOTALK"];
        function o(e) {
            window.top.location.href = e
        }
        function i(e, t, n) {
            var r = (new Date).getTime();
            return setTimeout((function() {
                var o = (new Date).getTime();
                a() && o - r < e + 100 && n(t)
            }
            ), e)
        }
        function a() {
            for (var e = ["hidden", "webkitHidden"], t = 0, n = e.length; t < n; t++)
                if (void 0 !== document[e[t]])
                    return !document[e[t]];
            return !0
        }
        function c(e) {
            setTimeout((function() {
                (function(e) {
                    var t = document.createElement("iframe");
                    return t.id = e,
                    t.style.border = "none",
                    t.style.width = "0",
                    t.style.height = "0",
                    t.style.display = "none",
                    t.style.overflow = "hidden",
                    document.body.appendChild(t),
                    t
                }("appLauncher")).src = e
            }
            ), 100)
        }
        return function(s) {
            var u, l, p, d, f = "function" == typeof s.willInvokeApp ? s.willInvokeApp : function() {}
            , h = "function" == typeof s.onAppMissing ? s.onAppMissing : o, m = "function" == typeof s.onUnsupportedEnvironment ? s.onUnsupportedEnvironment : function() {}
            ;
            f(),
            t.android ? (l = e.browser.chrome && +e.browser.version.major >= 25,
            p = new RegExp(n.join("|"),"i"),
            d = new RegExp(r.join("|"),"i"),
            (l && !p.test(e.ua) || d.test(e.ua)) && s.intentURI && !s.useUrlScheme ? function(t) {
                e.browser.chrome ? n() : setTimeout(n, 100);
                function n() {
                    top.location.href = t
                }
            }(s.intentURI) : s.storeURL && (u = s.urlScheme,
            i(300, s.storeURL, h),
            c(u))) : t.ios && s.storeURL ? function(t, n, r, o) {
                var s = i(5e3, n, r);
                parseInt(e.os.version.major, 10) < 8 ? function(e) {
                    window.addEventListener("pagehide", (function t() {
                        a() && (clearTimeout(e),
                        window.removeEventListener("pagehide", t))
                    }
                    ))
                }(s) : function(e) {
                    document.addEventListener("visibilitychange", (function t() {
                        a() && (clearTimeout(e),
                        document.removeEventListener("visibilitychange", t))
                    }
                    ))
                }(s);
                parseInt(e.os.version.major, 10) > 8 && e.os.ios ? (void 0 === o ? o = t : clearTimeout(s),
                function(e) {
                    window.top.location.href = e
                }(o)) : c(t)
            }(s.urlScheme, s.storeURL, h, s.universalLink) : setTimeout((function() {
                m()
            }
            ), 100)
        }
    }()
      , fo = new Sn(100,100)
      , ho = "362057947";
    function mo(e, t) {
        var n = function(e, t) {
            var n = new io(e,t);
            if (JSON.stringify(n).length > 1e4)
                throw new an("Failed to send message because it exceeds the message size limit. Please contact the app administrator.");
            return mt(n)
        }(t, e);
        !function(e, t, n) {
            var r = (Xt.os.ios ? Qt.talkLinkScheme : "") + "?" + e
              , o = "intent://link?".concat(e, "#Intent;scheme=kakaolink")
              , i = "intent:kakaolink://send?".concat(e, "#Intent")
              , a = [/instagram|fb_iab/g.test(Xt.ua) ? o : i, "launchFlags=0x14008000", "".concat(!0 === n ? "package=".concat(Qt.talkAndroidPackage, ";") : "", "end;")].join(";")
              , c = {
                urlScheme: r,
                intentURI: a,
                appName: "KakaoTalk",
                storeURL: dn(Qt.talkAndroidPackage, ho),
                onUnsupportedEnvironment: function() {
                    t(r)
                }
            };
            (!n || Hn() || Kn()) && (c.onAppMissing = lt);
            Hn() && (c.universalLink = void 0);
            try {
                po(c)
            } catch (e) {}
        }(n, t.fail, t.installTalk);
        var r = {
            template_msg: e.template_msg || {},
            warning_msg: e.warning_msg || {},
            argument_msg: e.argument_msg || {}
        };
        t.success(r),
        t.always(r)
    }
    var vo = {
        send: function(e, t, n) {
            var r = null;
            if (Xt.browser.iphone && /version/.test(Xt.ua.toLowerCase())) {
                var o = null;
                r = function(e) {
                    o = e
                }
                ,
                fo.start((function() {
                    null !== o && (fo.stop(),
                    mo(o, e))
                }
                ), (function() {
                    var t = {
                        error: "timeout",
                        error_description: "LINK_TIMEOUT"
                    };
                    e.fail(t),
                    e.always(t)
                }
                ))
            } else
                r = mo;
            return $r(t, n).then((function(t) {
                r(t, e)
            }
            ), (function(e) {
                var t, n = JSON.stringify(_t({
                    name: "KAPIError"
                }, e));
                location.href = "".concat(Qt.sharerDomain, "/picker/failed?app_key=").concat(en(), "&error=").concat((t = n,
                window.btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")))
            }
            ))
        }
    }
      , go = {
        success: j,
        fail: j,
        always: j,
        callback: j,
        installTalk: Qe,
        throughTalk: Qe,
        extras: d,
        serverCallbackArgs: gt([function(e) {
            try {
                JSON.parse(e)
            } catch (e) {
                return !1
            }
            return !0
        }
        , d])
    }
      , yo = {
        success: lt,
        fail: lt,
        always: lt,
        installTalk: !1,
        throughTalk: !0
    };
    function bo(e) {
        if (!f(e))
            return !1;
        if (e.length > 2)
            throw new an('Illegal argument for "buttons" in Share: size of buttons should be up to 2');
        return !0
    }
    var _o = {
        required: {
            objectType: function(e) {
                return "feed" === e
            },
            content: d
        },
        optional: Re({
            itemContent: d,
            social: d,
            buttonTitle: Ye,
            buttons: bo
        }, go),
        defaults: yo
    }
      , ko = {
        required: {
            objectType: function(e) {
                return "list" === e
            },
            headerTitle: Ye,
            headerLink: d,
            contents: function(e) {
                if (!f(e))
                    return !1;
                if (e.length < 2 || e.length > 3)
                    throw new an('Illegal argument for "contents" in Share: size of contents should be more than 1 and up to 3');
                return !0
            }
        },
        optional: Re({
            buttonTitle: Ye,
            buttons: bo,
            headerImageUrl: Ye,
            headerImageWidth: et,
            headerImageHeight: et
        }, go),
        defaults: yo
    }
      , wo = {
        required: {
            objectType: function(e) {
                return "commerce" === e
            },
            content: d,
            commerce: d
        },
        optional: Re({
            buttonTitle: Ye,
            buttons: bo
        }, go),
        defaults: yo
    }
      , So = {
        required: {
            objectType: function(e) {
                return "location" === e
            },
            content: d,
            address: Ye
        },
        optional: Re({
            addressTitle: Ye,
            social: d,
            buttonTitle: Ye,
            buttons: bo
        }, go),
        defaults: yo
    }
      , xo = {
        required: {
            objectType: function(e) {
                return "text" === e
            },
            text: Ye,
            link: d
        },
        optional: Re({
            buttonTitle: Ye,
            buttons: bo
        }, go),
        defaults: yo
    }
      , Oo = {
        required: {
            requestUrl: Ye
        },
        optional: Re({
            templateId: et,
            templateArgs: d
        }, go),
        defaults: Re({
            templateArgs: {}
        }, yo)
    }
      , jo = {
        required: {
            templateId: et
        },
        optional: Re({
            templateArgs: d
        }, go),
        defaults: Re({
            templateArgs: {}
        }, yo)
    };
    function Ao(e) {
        return Ge({
            required: Re({
                container: gt([Ze, Ye])
            }, e.required)
        }, e)
    }
    var To = {
        defaultObjectTypes: ["feed", "list", "commerce", "location", "text"],
        sendFeed: _o,
        createFeedButton: Ao(_o),
        sendList: ko,
        createListButton: Ao(ko),
        sendCommerce: wo,
        createCommerceButton: Ao(wo),
        sendLocation: So,
        createLocationButton: Ao(So),
        sendText: xo,
        createTextButton: Ao(xo),
        sendScrap: Oo,
        createScrapButton: Ao(Oo),
        sendCustom: jo,
        createCustomButton: Ao(jo),
        uploadImage: {
            required: {
                file: d
            }
        },
        deleteImage: {
            required: {
                imageUrl: Ye
            }
        },
        scrapImage: {
            required: {
                imageUrl: Ye
            }
        }
    };
    function Co(e, t) {
        var n = dt(e.container);
        if (!n)
            throw new an("container is required for KakaoTalk sharing: pass in element or id");
        var r = function(n) {
            n.preventDefault(),
            n.stopPropagation(),
            Po(e, t)
        };
        ft(n, "click", r),
        Fo.push((function() {
            ht(n, "click", r)
        }
        ))
    }
    var Io = {
        default: {
            makeLinkFunc: function(e) {
                return new (0,
                co["".concat(Jr(e.objectType), "Link")])(e)
            },
            requestUrl: "/v2/api/kakaolink/talk/template/default"
        },
        scrap: {
            makeLinkFunc: function(e) {
                return new so(e)
            },
            requestUrl: "/v2/api/kakaolink/talk/template/scrap"
        },
        custom: {
            makeLinkFunc: function(e) {
                return new uo(e)
            },
            requestUrl: "/v2/api/kakaolink/talk/template/validate"
        }
    };
    function Po(e, t) {
        var n = Io[t]
          , r = n.makeLinkFunc
          , o = n.requestUrl
          , i = r(e)
          , a = rn();
        a && en() !== a && (i.target_app_key = a);
        var c = /opr\/|opt\/|huawei/g.test(Xt.ua)
          , s = Xt.os.ios && "tablet" === Xt.platform;
        $t || !c && e.throughTalk && ("mobile" === Xt.platform || s) ? vo.send(e, o, i) : lo.send(e, t, i)
    }
    var Fo = [];
    var Bo = cn([Object.freeze({
        __proto__: null,
        createDefaultButton: function(e) {
            if (!e.objectType || !vt(To.defaultObjectTypes)(e.objectType))
                throw new an("objectType should be one of (".concat(To.defaultObjectTypes.join(", "), ")"));
            Co(e = ln(e, To["create".concat(Jr(e.objectType), "Button")], "Share.createDefaultButton"), "default")
        },
        sendDefault: function(e) {
            if (!e.objectType || !vt(To.defaultObjectTypes)(e.objectType))
                throw new an("objectType should be one of (".concat(To.defaultObjectTypes.join(", "), ")"));
            Po(e = ln(e, To["send".concat(Jr(e.objectType))], "Share.sendDefault"), "default")
        },
        createScrapButton: function(e) {
            Co(e = ln(e, To.createScrapButton, "Share.createScrapButton"), "scrap")
        },
        sendScrap: function(e) {
            Po(e = ln(e, To.sendScrap, "Share.sendScrap"), "scrap")
        },
        createCustomButton: function(e) {
            Co(e = ln(e, To.createCustomButton, "Share.createCustomButton"), "custom")
        },
        sendCustom: function(e) {
            Po(e = ln(e, To.sendCustom, "Share.sendCustom"), "custom")
        },
        cleanup: function() {
            sn(Fo)
        }
    }), Object.freeze({
        __proto__: null,
        uploadImage: function(e) {
            return $r("/v2/api/talk/message/image/upload", {
                file: (e = ln(e, To.uploadImage, "Share.uploadImage")).file
            })
        },
        deleteImage: function(e) {
            return $r("/v2/api/talk/message/image/delete", {
                image_url: (e = ln(e, To.deleteImage, "Share.deleteImage")).imageUrl
            })
        },
        scrapImage: function(e) {
            return $r("/v2/api/talk/message/image/scrap", {
                image_url: (e = ln(e, To.scrapImage, "Share.scrapImage")).imageUrl
            })
        }
    })])
      , Eo = "width=350, height=510";
    function Uo(e, t, n) {
        var r = document.createElement("a");
        r.setAttribute("href", "#");
        var o = document.createElement("img");
        return o.setAttribute("src", t),
        o.setAttribute("title", n),
        o.setAttribute("alt", n),
        e.supportMultipleDensities && o.setAttribute("srcset", [t.replace(".png", "_2X.png 2x"), t.replace(".png", "_3X.png 3x")].join(", ")),
        r.appendChild(o),
        r
    }
    function Ro(e, t) {
        return mt(_t({
            api_ver: e,
            kakao_agent: Yt,
            app_key: en(),
            referer: Wt + location.pathname + location.search
        }, t && {
            lang: t
        }))
    }
    var Lo = ["small", "large"]
      , Mo = ["yellow", "mono"]
      , zo = ["pc", "mobile"]
      , Do = ["consult", "question"]
      , qo = ["ko", "en", "ja"]
      , No = {
        createAddChannelButton: {
            required: {
                container: gt([Ze, Ye]),
                channelPublicId: Ye
            },
            optional: {
                size: vt(Lo),
                lang: vt(qo),
                supportMultipleDensities: Qe
            },
            defaults: {
                size: Lo[0],
                supportMultipleDensities: !1
            }
        },
        addChannel: {
            required: {
                channelPublicId: Ye
            },
            optional: {
                lang: vt(qo)
            }
        },
        createChatButton: {
            required: {
                container: gt([Ze, Ye]),
                channelPublicId: Ye
            },
            optional: {
                size: vt(Lo),
                color: vt(Mo),
                shape: vt(zo),
                title: vt(Do),
                lang: vt(qo),
                supportMultipleDensities: Qe
            },
            defaults: {
                size: Lo[0],
                color: Mo[0],
                shape: zo[0],
                title: Do[0],
                supportMultipleDensities: !1
            }
        },
        chat: {
            required: {
                channelPublicId: Ye
            },
            optional: {
                lang: vt(qo)
            }
        }
    };
    function Ko(e) {
        var t = "".concat(Qt.channel, "/").concat(e.channelPublicId, "/friend");
        null !== en() && (t += "?".concat(Ro("1.1", e.lang))),
        mn(t, "channel_add_social_plugin", Eo)
    }
    function Ho(e) {
        var t = "".concat(Qt.channel, "/").concat(e.channelPublicId, "/chat");
        null !== en() && (t += "?".concat(Ro("1.1", e.lang))),
        mn(t, "channel_chat_social_plugin", Eo)
    }
    var Jo = [];
    var Wo = cn([Object.freeze({
        __proto__: null,
        createAddChannelButton: function(e) {
            var t = dt(e.container);
            if (!t)
                throw new an("container is required for Channel.createAddChannelButton: pass in element or id");
            vn(e, t, {
                channelPublicId: "data-channel-public-id",
                size: "data-size",
                supportMultipleDensities: "data-support-multiple-densities"
            });
            var n = function(e) {
                var t = "friendadd_".concat(e.size, "_yellow_rect.png");
                return "".concat(Qt.channelIcon, "/channel/").concat(t)
            }(e = ln(e, No.createAddChannelButton, "Channel.createAddChannelButton"))
              , r = Uo(e, n, "카카오톡 채널 추가 버튼");
            t.appendChild(r);
            var o = function(t) {
                t.preventDefault(),
                Ko(e)
            };
            ft(r, "click", o),
            Jo.push((function() {
                ht(r, "click", o),
                t.removeChild(r)
            }
            ))
        },
        addChannel: function(e) {
            Ko(e = ln(e, No.addChannel, "Channel.addChannel"))
        },
        createChatButton: function(e) {
            var t = dt(e.container);
            if (!t)
                throw new an("container is required for Channel.createChatButton: pass in element or id");
            vn(e, t, {
                channelPublicId: "data-channel-public-id",
                size: "data-size",
                color: "data-color",
                shape: "data-shape",
                title: "data-title",
                supportMultipleDensities: "data-support-multiple-densities"
            });
            var n = function(e) {
                var t = "".concat(e.title, "_").concat(e.size, "_").concat(e.color, "_").concat(e.shape, ".png");
                return "".concat(Qt.channelIcon, "/channel/").concat(t)
            }(e = ln(e, No.createChatButton, "Channel.createChatButton"))
              , r = Uo(e, n, "카카오톡 채널 1:1 채팅 버튼");
            t.appendChild(r);
            var o = function(t) {
                t.preventDefault(),
                Ho(e)
            };
            ft(r, "click", o),
            Jo.push((function() {
                ht(r, "click", o),
                t.removeChild(r)
            }
            ))
        },
        chat: function(e) {
            Ho(e = ln(e, No.chat, "Channel.chat"))
        },
        cleanup: function() {
            sn(Jo)
        }
    })])
      , Xo = {
        createAddFriendButton: {
            required: {
                container: gt([Ze, Ye]),
                plusFriendId: Ye
            },
            optional: {
                size: vt(["small", "large"]),
                color: vt(["yellow", "black"]),
                shape: vt(["rect", "round"]),
                supportMultipleDensities: Qe
            },
            defaults: {
                size: "small",
                color: "yellow",
                shape: "rect",
                supportMultipleDensities: !1
            }
        },
        addFriend: {
            required: {
                plusFriendId: Ye
            }
        },
        createChatButton: {
            required: {
                container: gt([Ze, Ye]),
                plusFriendId: Ye
            },
            optional: {
                size: vt(["small", "large"]),
                color: vt(["yellow", "mono"]),
                shape: vt(["pc", "mobile"]),
                title: vt(["consult", "question"]),
                supportMultipleDensities: Qe
            },
            defaults: {
                size: "small",
                color: "yellow",
                shape: "pc",
                title: "consult",
                supportMultipleDensities: !1
            }
        },
        chat: {
            required: {
                plusFriendId: Ye
            }
        }
    };
    function $o() {
        console && console.warn("KakaoWarning: Kakao.PlusFriend is deprecated. Please use Kakao.Channel instead.")
    }
    function Go(e) {
        var t = "".concat(Qt.channel, "/").concat(e.plusFriendId, "/friend");
        null !== en() && (t += "?".concat(Ro("1.0"))),
        mn(t, "plus_friend_add_social_plugin", Eo)
    }
    function Vo(e) {
        var t = "".concat(Qt.channel, "/").concat(e.plusFriendId, "/chat");
        null !== en() && (t += "?".concat(Ro("1.0"))),
        mn(t, "plus_friend_chat_social_plugin", Eo)
    }
    var Yo = [];
    var Qo = cn([Object.freeze({
        __proto__: null,
        createAddFriendButton: function(e) {
            $o();
            var t = dt(e.container);
            if (!t)
                throw new an("container is required for PlusFriend.createAddFriendButton: pass in element or id");
            vn(e, t, {
                plusFriendId: "data-plusfriend-id",
                size: "data-size",
                color: "data-color",
                shape: "data-shape",
                supportMultipleDensities: "data-support-multiple-densities"
            });
            var n = function(e) {
                var t = "friendadd_".concat(e.size, "_").concat(e.color, "_").concat(e.shape, ".png");
                return "".concat(Qt.channelIcon, "/plusfriend/").concat(t)
            }(e = ln(e, Xo.createAddFriendButton, "PlusFriend.createAddFriendButton"))
              , r = Uo(e, n, "플러스친구 친구 추가 버튼");
            t.appendChild(r);
            var o = function(t) {
                t.preventDefault(),
                Go(e)
            };
            ft(r, "click", o),
            Yo.push((function() {
                ht(r, "click", o),
                t.removeChild(r)
            }
            ))
        },
        addFriend: function(e) {
            $o(),
            Go(e = ln(e, Xo.addFriend, "PlusFriend.addFriend"))
        },
        createChatButton: function(e) {
            $o();
            var t = dt(e.container);
            if (!t)
                throw new an("container is required for PlusFriend.createChatButton: pass in element or id");
            vn(e, t, {
                plusFriendId: "data-plusfriend-id",
                size: "data-size",
                color: "data-color",
                shape: "data-shape",
                title: "data-title",
                supportMultipleDensities: "data-support-multiple-densities"
            });
            var n = function(e) {
                var t = "".concat(e.title, "_").concat(e.size, "_").concat(e.color, "_").concat(e.shape, ".png");
                return "".concat(Qt.channelIcon, "/plusfriend/").concat(t)
            }(e = ln(e, Xo.createChatButton, "PlusFriend.createChatButton"))
              , r = Uo(e, n, "플러스친구 1:1 채팅 버튼");
            t.appendChild(r);
            var o = function(t) {
                t.preventDefault(),
                Vo(e)
            };
            ft(r, "click", o),
            Yo.push((function() {
                ht(r, "click", o),
                t.removeChild(r)
            }
            ))
        },
        chat: function(e) {
            $o(),
            Vo(e = ln(e, Xo.chat, "PlusFriend.chat"))
        },
        cleanup: function() {
            sn(Yo)
        }
    })])
      , Zo = {
        required: {
            title: Ye
        },
        optional: {
            desc: Ye,
            name: Ye,
            images: f,
            type: Ye
        },
        defaults: {
            type: "website"
        },
        after: function(e) {
            e.images && (e.imageurl = e.images,
            delete e.images)
        }
    }
      , ei = {
        createShareButton: {
            required: {
                container: gt([Ze, Ye])
            },
            optional: {
                url: Ye,
                text: Ye
            },
            defaults: {
                url: location.href
            }
        },
        share: {
            optional: {
                url: Ye,
                text: Ye
            },
            defaults: {
                url: location.href
            }
        },
        open: {
            optional: {
                url: Ye,
                text: Ye,
                urlInfo: function(e) {
                    return d(e) && !!ln(e, Zo, "Story.open")
                },
                install: Qe
            },
            defaults: {
                url: location.href,
                install: !1
            }
        },
        createFollowButton: {
            required: {
                container: gt([Ze, Ye]),
                id: Ye
            },
            optional: {
                showFollowerCount: Qe,
                type: vt(["horizontal", "vertical"])
            },
            defaults: {
                showFollowerCount: !0,
                type: "horizontal"
            },
            after: function(e) {
                "@" !== e.id[0] && (e.id = "@".concat(e.id))
            }
        }
    };
    function ti(e) {
        var t = Re({
            url: e.url
        }, ri());
        e.text && (t.text = e.text),
        mn("".concat(Qt.storyShare, "?").concat(mt(t)), "kakaostory_social_plugin", "width=670, height=800, scrollbars=yes")
    }
    var ni = 0;
    function ri() {
        var e = {
            kakao_agent: Yt
        };
        return null !== en() && (e.app_key = en()),
        e
    }
    var oi = [];
    var ii = cn([Object.freeze({
        __proto__: null,
        createShareButton: function(e) {
            var t = dt(e.container);
            if (!t)
                throw new an("container is required for Story.createShareButton: pass in element or id");
            vn(e, t, {
                url: "data-url"
            }),
            e = ln(e, ei.createShareButton, "Story.createShareButton");
            var n = function(e, t) {
                var n = document.createElement("a");
                n.setAttribute("href", "#");
                var r = document.createElement("img");
                return r.setAttribute("src", e),
                r.setAttribute("title", t),
                r.setAttribute("alt", t),
                n.appendChild(r),
                n
            }(Qt.storyIcon, "카카오스토리 웹 공유 버튼");
            t.appendChild(n);
            var r = function(t) {
                t.preventDefault(),
                ti(e)
            };
            ft(n, "click", r),
            oi.push((function() {
                ht(n, "click", r),
                t.removeChild(n)
            }
            ))
        },
        share: function(e) {
            ti(e = ln(e, ei.share, "Story.share"))
        },
        open: function(e) {
            var t = function(e) {
                var t = location.hostname || ""
                  , n = Re({
                    apiver: "1.0",
                    appver: Gt,
                    appid: t,
                    appname: t,
                    post: e.text ? "".concat(e.text, "\n").concat(e.url) : e.url
                }, ri());
                e.urlInfo && (n.urlinfo = JSON.stringify(e.urlInfo),
                n.appname = e.urlInfo.name || n.appname);
                return "".concat(Qt.storyPostScheme, "?").concat(mt(n))
            }(e = ln(e, ei.open, "Story.open"))
              , n = {
                urlScheme: t,
                intentURI: ["intent:".concat(t, "#Intent"), "".concat(e.install ? "package=com.kakao.story;" : "", "end;")].join(";"),
                appName: "KakaoStory",
                storeURL: dn("com.kakao.story", "486244601"),
                onUnsupportedEnvironment: function() {
                    e.fail && e.fail()
                }
            };
            try {
                po(n)
            } catch (e) {}
        },
        createFollowButton: function(e) {
            var t = dt(e.container);
            if (!t)
                throw new an("container is required for Story.createFollowButton: pass in element or id");
            vn(e, t, {
                id: "data-id",
                showFollowerCount: "data-show-follower-count",
                type: "data-type"
            });
            var n = function(e) {
                var t = ni++
                  , n = e.showFollowerCount && "horizontal" === e.type ? 85 : 59
                  , r = e.showFollowerCount && "vertical" === e.type ? 46 : 20
                  , o = document.createElement("iframe");
                o.src = function(e, t) {
                    var n = Re({
                        id: e.id,
                        type: e.type,
                        hideFollower: !e.showFollowerCount,
                        frameId: t
                    }, ri());
                    return "".concat(Qt.storyChannelFollow, "?").concat(mt(n))
                }(e, t),
                o.setAttribute("frameborder", "0"),
                o.setAttribute("marginwidth", "0"),
                o.setAttribute("marginheight", "0"),
                o.setAttribute("scrolling", "no"),
                o.setAttribute("style", "width:".concat(n, "px; height:").concat(r, "px;"));
                var i = function(e) {
                    if (e.data && /\.kakao\.com$/.test(e.origin) && "string" == typeof e.data) {
                        var i = Pt(at(e.data.split(","), (function(e) {
                            return parseInt(e, 10)
                        }
                        )), 3)
                          , a = i[0]
                          , c = i[1]
                          , s = i[2];
                        a === t && (n !== c && (o.style.width = "".concat(c, "px")),
                        r !== s && (o.style.height = "".concat(s, "px")))
                    }
                };
                return {
                    iframe$: o,
                    messageHandler: i
                }
            }(e = ln(e, ei.createFollowButton, "Story.createFollowButton"))
              , r = n.iframe$
              , o = n.messageHandler;
            t.appendChild(r),
            ft(window, "message", o),
            oi.push((function() {
                ht(window, "message", o),
                t.removeChild(r)
            }
            ))
        },
        cleanup: function() {
            sn(oi)
        }
    })])
      , ai = ["wgs84", "katec"]
      , ci = {
        required: {
            name: Ye,
            x: tt,
            y: tt
        },
        optional: {
            rpflag: Ye,
            cid: Ye
        }
    }
      , si = {
        start: {
            required: {
                name: Ye,
                x: tt,
                y: tt
            },
            optional: {
                coordType: vt(ai),
                vehicleType: vt([1, 2, 3, 4, 5, 6, 7]),
                rpOption: vt([1, 2, 3, 4, 5, 6, 8, 100]),
                routeInfo: Qe,
                sX: tt,
                sY: tt,
                sAngle: tt,
                returnUri: Ye,
                rpflag: Ye,
                cid: Ye,
                guideId: tt,
                viaPoints: function(e) {
                    if (f(e)) {
                        if (e.length > 3)
                            throw new an("Invalid parameter keys: via points should not be exceed 3. at Navi.start");
                        return Ve(e, (function(e) {
                            return ln(e, ci, "Navi.start")
                        }
                        )),
                        !0
                    }
                    return !1
                }
            },
            defaults: {
                coordType: "katec",
                vehicleType: 1,
                rpOption: 100,
                routeInfo: !1
            }
        },
        share: {
            required: {
                name: Ye,
                x: tt,
                y: tt
            },
            optional: {
                coordType: vt(ai),
                rpflag: Ye,
                cid: Ye,
                guideId: tt
            },
            defaults: {
                coordType: "katec"
            }
        }
    };
    function ui() {
        return {
            appkey: en(),
            apiver: "1.0",
            extras: {
                KA: Yt
            }
        }
    }
    function li(e, t) {
        var n = {
            urlScheme: e,
            intentURI: ["intent:".concat(e, "#Intent"), "S.browser_fallback_url=".concat(encodeURIComponent(t)), "end;"].join(";"),
            storeURL: t,
            universalLink: t
        };
        try {
            po(n)
        } catch (e) {}
    }
    var pi = cn([Object.freeze({
        __proto__: null,
        start: function(e) {
            var t = mt(function(e) {
                var t = {
                    name: e.name,
                    x: e.x,
                    y: e.y,
                    rpflag: e.rpflag,
                    cid: e.cid,
                    guide_id: e.guideId
                }
                  , n = {
                    coord_type: e.coordType,
                    vehicle_type: e.vehicleType,
                    rpoption: e.rpOption,
                    route_info: e.routeInfo,
                    s_x: e.sX,
                    s_y: e.sY,
                    s_angle: e.sAngle,
                    return_uri: e.returnUri
                };
                return _t(_t({}, ui()), {}, {
                    param: {
                        destination: t,
                        option: n,
                        via_list: e.viaPoints
                    }
                })
            }(e = ln(e, si.start, "Navi.start")));
            li("".concat(Qt.naviScheme, "?").concat(t), "".concat(Qt.naviFallback, "?").concat(t))
        },
        share: function(e) {
            var t = mt(function(e) {
                var t = {
                    name: e.name,
                    x: e.x,
                    y: e.y,
                    rpflag: e.rpflag,
                    cid: e.cid,
                    guide_id: e.guideId
                }
                  , n = {
                    route_info: !0,
                    coord_type: e.coordType
                };
                return _t(_t({}, ui()), {}, {
                    param: {
                        destination: t,
                        option: n
                    }
                })
            }(e = ln(e, si.share, "Navi.share")));
            li("".concat(Qt.naviScheme, "?").concat(t), "".concat(Qt.naviFallback, "?").concat(t))
        }
    })]);
    function di(e) {
        return et(e) && e > 0 && e < 101
    }
    function fi(e) {
        if (e.maxPickableCount < e.minPickableCount)
            throw new an('"minPickableCount" should not larger than "maxPickableCount"')
    }
    function hi(e) {
        var t = {
            required: {
                reason: vt(["msgBlocked", "registered", "unregistered", "notFriend", "custom"])
            },
            optional: {
                message: Ye,
                uuids: f
            },
            after: function(e) {
                if (!("custom" !== e.reason || e.message && e.uuids))
                    throw new an('"message" and "uuids" must be set for "custom" option in disableSelectOption')
            }
        };
        return f(e) && ct(e, (function(e) {
            return d(e) && !!ln(e, t, "disableSelectOption")
        }
        ))
    }
    function mi(e) {
        if ("chatMember" === e.selectionType) {
            var t = e.chatFilters;
            if (t.indexOf("open") > -1)
                throw new an('"open" is not allowed in "chatFilters"');
            if ((t.indexOf("direct") > -1 || t.indexOf("multi") > -1) && -1 === t.indexOf("regular"))
                throw new an('"regular" should be included in "chatFilters"')
        }
    }
    var vi = ["none", "invitable", "registered"]
      , gi = ["talk", "story", "talkstory"]
      , yi = ["chat", "chatMember"]
      , bi = ["regular", "direct", "multi", "open"]
      , _i = ["all", "ios", "android"]
      , ki = {
        returnUrl: Ye,
        success: j,
        fail: j,
        always: j,
        friendFilter: vt(vi),
        serviceTypeFilter: vt(gi),
        title: Ye,
        enableSearch: Qe,
        countryCodeFilters: f,
        usingOsFilter: vt(_i),
        showMyProfile: Qe,
        showFavorite: Qe,
        disableSelectOptions: hi,
        displayAllProfile: Qe,
        enableBackButton: Qe
    }
      , wi = {
        success: lt,
        fail: lt,
        always: lt
    }
      , Si = {
        optional: {
            friendFilter: vt(vi),
            serviceTypeFilter: vt(gi),
            countryCodeFilters: f,
            usingOsFilter: vt(_i),
            showMyProfile: Qe,
            showFavorite: Qe,
            showPickedFriend: Qe
        }
    }
      , xi = {
        optional: {
            selectionType: vt(yi),
            chatFilters: function(e) {
                return f(e) && ct(e, (function(e) {
                    return vt(bi)(e)
                }
                ))
            }
        },
        defaults: {
            selectionType: yi[0],
            chatFilters: [bi[0]]
        },
        after: mi
    }
      , Oi = {
        selectFriend: {
            optional: ki,
            defaults: wi
        },
        selectFriends: {
            optional: _t(_t({}, ki), {}, {
                showPickedFriend: Qe,
                maxPickableCount: di,
                minPickableCount: di
            }),
            defaults: wi,
            after: fi
        },
        selectChat: {
            optional: {
                returnUrl: Ye,
                success: j,
                fail: j,
                always: j,
                selectionType: vt(yi),
                chatFilters: function(e) {
                    return f(e) && ct(e, (function(e) {
                        return vt(bi)(e)
                    }
                    ))
                },
                title: Ye,
                enableSearch: Qe,
                disableSelectOptions: hi,
                displayAllProfile: Qe,
                maxPickableCount: di,
                minPickableCount: di,
                enableBackButton: Qe
            },
            defaults: {
                success: lt,
                fail: lt,
                always: lt,
                selectionType: yi[0],
                chatFilters: [bi[0]]
            },
            after: function(e) {
                fi(e),
                mi(e)
            }
        },
        select: {
            optional: {
                returnUrl: Ye,
                success: j,
                fail: j,
                always: j,
                title: Ye,
                enableSearch: Qe,
                disableSelectOptions: hi,
                displayAllProfile: Qe,
                maxPickableCount: di,
                minPickableCount: di,
                enableBackButton: Qe,
                friendsParams: function(e) {
                    return d(e) && !!ln(e, Si, "Picker.select")
                },
                chatParams: function(e) {
                    return d(e) && !!ln(e, xi, "Picker.select")
                }
            },
            defaults: {
                success: lt,
                fail: lt,
                always: lt
            },
            after: fi
        }
    };
    function ji(e, t, n) {
        Ci();
        var r = pn()
          , o = _t(_t({
            transId: r,
            appKey: en(),
            ka: Yt
        }, Qn() && {
            token: Qn()
        }), function(e) {
            ["countryCodeFilters", "chatFilters"].forEach((function(t) {
                void 0 !== e[t] && (e[t] = e[t].join(","))
            }
            )),
            e.disableSelectOptions && (e.disableSelectOptions = JSON.stringify(e.disableSelectOptions));
            return e
        }(t))
          , i = Qt.pickerDomain + n;
        e.returnUrl ? (o.returnUrl = e.returnUrl,
        _n(o, i)) : (gn(r, "".concat(Qt.pickerDomain, "/proxy?transId=").concat(r), Ti),
        yn(e, Qt.pickerDomain, Ti),
        bn(o, {
            url: i,
            popupName: "friend_picker",
            popupFeatures: "location=no,resizable=no,status=no,scrollbars=no,width=460,height=608"
        }))
    }
    function Ai(e) {
        var t = _t({}, e);
        return ["returnUrl", "success", "fail", "always", "friendsParams", "chatParams"].forEach((function(e) {
            t[e] && delete t[e]
        }
        )),
        t
    }
    var Ti = [];
    function Ci() {
        sn(Ti)
    }
    var Ii = cn([Object.freeze({
        __proto__: null,
        selectFriends: function(e) {
            ji(e = ln(e, Oi.selectFriends, "Picker.selectFriends"), Ai(e), "/select/multiple")
        },
        selectFriend: function(e) {
            ji(e = ln(e, Oi.selectFriend, "Picker.selectFriend"), Ai(e), "/select/single")
        },
        selectChat: function(e) {
            ji(e = ln(e, Oi.selectChat, "Picker.selectChat"), Ai(e), "/chat/select")
        },
        select: function(e) {
            ji(e = ln(e, Oi.select, "Picker.select"), _t(_t(_t({}, Ai(e)), e.friendsParams), e.chatParams), "/tab/select")
        },
        cleanup: Ci
    })]);
    function Pi() {
        return null !== en()
    }
    "function" == typeof define && define.amd && (window.Kakao = e),
    "function" == typeof window.kakaoAsyncInit && setTimeout((function() {
        window.kakaoAsyncInit()
    }
    ), 0),
    e.VERSION = Gt,
    e.cleanup = function() {
        var e = this;
        Object.keys(this).filter((function(t) {
            return d(e[t])
        }
        )).forEach((function(t) {
            return e[t].cleanup()
        }
        )),
        tn(null)
    }
    ,
    e.init = function(e, t) {
        if (Xt.browser.msie && Xt.browser.version.major < 9)
            throw new an("Kakao.init: Unsupported browser");
        if (Pi())
            throw new an("Kakao.init: Already initialized");
        if (!Ye(e))
            throw new an("Kakao.init: App key must be provided");
        tn(e),
        t && on(t),
        this.Auth = Kr,
        this.API = Hr,
        this.Share = Bo,
        this.Link = Bo,
        this.Channel = Wo,
        this.PlusFriend = Qo,
        this.Story = ii,
        this.Navi = pi,
        this.Picker = Ii
    }
    ,
    e.isInitialized = Pi,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
));
