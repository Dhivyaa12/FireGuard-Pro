if (!window._bubble_page_load_data) {
    window._bubble_page_load_data = {}
}
if (!window._bubble_page_load_data.js_execution_timings) {
    window._bubble_page_load_data.js_execution_timings = {}
}
window._bubble_page_load_data.js_execution_timings.early_js_start_execution = Date.now();
/*
 * Copyright 2015 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/* Web Font Loader v1.5.10 - (c) Adobe Systems, Google. License: Apache 2.0 */
;(function(window, document, undefined) {
    var k = this;
    function l(a, b) {
        var c = a.split(".")
          , d = k;
        c[0]in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift()); )
            c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }
    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ba(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function n(a, b, c) {
        n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return n.apply(null, arguments)
    }
    var q = Date.now || function() {
        return +new Date
    }
    ;
    function s(a, b) {
        this.K = a;
        this.w = b || a;
        this.D = this.w.document
    }
    s.prototype.createElement = function(a, b, c) {
        a = this.D.createElement(a);
        if (b)
            for (var d in b)
                b.hasOwnProperty(d) && ("style" == d ? a.style.cssText = b[d] : a.setAttribute(d, b[d]));
        c && a.appendChild(this.D.createTextNode(c));
        return a
    }
    ;
    function t(a, b, c) {
        a = a.D.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(c, a.lastChild)
    }
    function ca(a, b) {
        function c() {
            a.D.body ? b() : setTimeout(c, 0)
        }
        c()
    }
    function u(a, b, c) {
        b = b || [];
        c = c || [];
        for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
            for (var f = !1, g = 0; g < d.length; g += 1)
                if (b[e] === d[g]) {
                    f = !0;
                    break
                }
            f || d.push(b[e])
        }
        b = [];
        for (e = 0; e < d.length; e += 1) {
            f = !1;
            for (g = 0; g < c.length; g += 1)
                if (d[e] === c[g]) {
                    f = !0;
                    break
                }
            f || b.push(d[e])
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }
    function v(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b)
                return !0;
        return !1
    }
    function w(a) {
        var b = a.w.location.protocol;
        "about:" == b && (b = a.K.location.protocol);
        return "https:" == b ? "https:" : "http:"
    }
    function x(a, b) {
        var c = a.createElement("link", {
            rel: "stylesheet",
            href: b
        })
          , d = !1;
        c.onload = function() {
            d || (d = !0)
        }
        ;
        c.onerror = function() {
            d || (d = !0)
        }
        ;
        t(a, "head", c)
    }
    function y(a, b, c, d) {
        var e = a.D.getElementsByTagName("head")[0];
        if (e) {
            var f = a.createElement("script", {
                src: b
            })
              , g = !1;
            f.onload = f.onreadystatechange = function() {
                g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0,
                c && c(null),
                f.onload = f.onreadystatechange = null,
                "HEAD" == f.parentNode.tagName && e.removeChild(f))
            }
            ;
            e.appendChild(f);
            window.setTimeout(function() {
                g || (g = !0,
                c && c(Error("Script load timeout")))
            }, d || 5E3);
            return f
        }
        return null
    }
    ;function z(a, b, c, d) {
        this.R = a;
        this.Z = b;
        this.Ba = c;
        this.ra = d
    }
    l("webfont.BrowserInfo", z);
    z.prototype.sa = function() {
        return this.R
    }
    ;
    z.prototype.hasWebFontSupport = z.prototype.sa;
    z.prototype.ta = function() {
        return this.Z
    }
    ;
    z.prototype.hasWebKitFallbackBug = z.prototype.ta;
    z.prototype.ua = function() {
        return this.Ba
    }
    ;
    z.prototype.hasWebKitMetricsBug = z.prototype.ua;
    z.prototype.qa = function() {
        return this.ra
    }
    ;
    z.prototype.hasNativeFontLoading = z.prototype.qa;
    function A(a, b, c, d) {
        this.c = null != a ? a : null;
        this.g = null != b ? b : null;
        this.B = null != c ? c : null;
        this.e = null != d ? d : null
    }
    var da = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    A.prototype.compare = function(a) {
        return this.c > a.c || this.c === a.c && this.g > a.g || this.c === a.c && this.g === a.g && this.B > a.B ? 1 : this.c < a.c || this.c === a.c && this.g < a.g || this.c === a.c && this.g === a.g && this.B < a.B ? -1 : 0
    }
    ;
    A.prototype.toString = function() {
        return [this.c, this.g || "", this.B || "", this.e || ""].join("")
    }
    ;
    function B(a) {
        a = da.exec(a);
        var b = null
          , c = null
          , d = null
          , e = null;
        a && (null !== a[1] && a[1] && (b = parseInt(a[1], 10)),
        null !== a[2] && a[2] && (c = parseInt(a[2], 10)),
        null !== a[3] && a[3] && (d = parseInt(a[3], 10)),
        null !== a[4] && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4]));
        return new A(b,c,d,e)
    }
    ;function C(a, b, c, d, e, f, g, h) {
        this.P = a;
        this.ja = c;
        this.ya = e;
        this.ia = g;
        this.m = h
    }
    l("webfont.UserAgent", C);
    C.prototype.getName = function() {
        return this.P
    }
    ;
    C.prototype.getName = C.prototype.getName;
    C.prototype.oa = function() {
        return this.ja
    }
    ;
    C.prototype.getEngine = C.prototype.oa;
    C.prototype.pa = function() {
        return this.ya
    }
    ;
    C.prototype.getPlatform = C.prototype.pa;
    C.prototype.na = function() {
        return this.ia
    }
    ;
    C.prototype.getDocumentMode = C.prototype.na;
    C.prototype.ma = function() {
        return this.m
    }
    ;
    C.prototype.getBrowserInfo = C.prototype.ma;
    function D(a, b) {
        this.a = a;
        this.k = b
    }
    var ea = new C("Unknown",0,"Unknown",0,"Unknown",0,void 0,new z(!1,!1,!1,!1));
    D.prototype.parse = function() {
        var a;
        if (-1 != this.a.indexOf("MSIE") || -1 != this.a.indexOf("Trident/")) {
            a = E(this);
            var b = B(F(this))
              , c = null
              , d = null
              , e = G(this.a, /Trident\/([\d\w\.]+)/, 1)
              , f = H(this.k)
              , c = -1 != this.a.indexOf("MSIE") ? B(G(this.a, /MSIE ([\d\w\.]+)/, 1)) : B(G(this.a, /rv:([\d\w\.]+)/, 1));
            "" != e ? (d = "Trident",
            B(e)) : d = "Unknown";
            a = new C("MSIE",0,d,0,a,0,f,new z("Windows" == a && 6 <= c.c || "Windows Phone" == a && 8 <= b.c,!1,!1,!!this.k.fonts))
        } else if (-1 != this.a.indexOf("Opera"))
            a: if (a = "Unknown",
            c = B(G(this.a, /Presto\/([\d\w\.]+)/, 1)),
            B(F(this)),
            b = H(this.k),
            null !== c.c ? a = "Presto" : (-1 != this.a.indexOf("Gecko") && (a = "Gecko"),
            B(G(this.a, /rv:([^\)]+)/, 1))),
            -1 != this.a.indexOf("Opera Mini/"))
                c = B(G(this.a, /Opera Mini\/([\d\.]+)/, 1)),
                a = new C("OperaMini",0,a,0,E(this),0,b,new z(!1,!1,!1,!!this.k.fonts));
            else {
                if (-1 != this.a.indexOf("Version/") && (c = B(G(this.a, /Version\/([\d\.]+)/, 1)),
                null !== c.c)) {
                    a = new C("Opera",0,a,0,E(this),0,b,new z(10 <= c.c,!1,!1,!!this.k.fonts));
                    break a
                }
                c = B(G(this.a, /Opera[\/ ]([\d\.]+)/, 1));
                a = null !== c.c ? new C("Opera",0,a,0,E(this),0,b,new z(10 <= c.c,!1,!1,!!this.k.fonts)) : new C("Opera",0,a,0,E(this),0,b,new z(!1,!1,!1,!!this.k.fonts))
            }
        else
            /OPR\/[\d.]+/.test(this.a) ? a = I(this) : /AppleWeb(K|k)it/.test(this.a) ? a = I(this) : -1 != this.a.indexOf("Gecko") ? (a = "Unknown",
            b = new A,
            B(F(this)),
            b = !1,
            -1 != this.a.indexOf("Firefox") ? (a = "Firefox",
            b = B(G(this.a, /Firefox\/([\d\w\.]+)/, 1)),
            b = 3 <= b.c && 5 <= b.g) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"),
            c = B(G(this.a, /rv:([^\)]+)/, 1)),
            b || (b = 1 < c.c || 1 == c.c && 9 < c.g || 1 == c.c && 9 == c.g && 2 <= c.B),
            a = new C(a,0,"Gecko",0,E(this),0,H(this.k),new z(b,!1,!1,!!this.k.fonts))) : a = ea;
        return a
    }
    ;
    function E(a) {
        var b = G(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != b)
            return /BB\d{2}/.test(b) && (b = "BlackBerry"),
            b;
        a = G(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1);
        return "" != a ? ("Mac_PowerPC" == a ? a = "Macintosh" : "PlayStation" == a && (a = "Linux"),
        a) : "Unknown"
    }
    function F(a) {
        var b = G(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (b || (b = G(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = G(a.a, /(iPhone )?OS ([\d_]+)/, 2)))
            return b;
        if (b = G(a.a, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
            for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)
                if (/^[\d\._]+$/.test(b[c]))
                    return b[c];
        return (a = G(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }
    function I(a) {
        var b = E(a)
          , c = B(F(a))
          , d = B(G(a.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1))
          , e = "Unknown"
          , f = new A
          , f = "Unknown"
          , g = !1;
        /OPR\/[\d.]+/.test(a.a) ? e = "Opera" : -1 != a.a.indexOf("Chrome") || -1 != a.a.indexOf("CrMo") || -1 != a.a.indexOf("CriOS") ? e = "Chrome" : /Silk\/\d/.test(a.a) ? e = "Silk" : "BlackBerry" == b || "Android" == b ? e = "BuiltinBrowser" : -1 != a.a.indexOf("PhantomJS") ? e = "PhantomJS" : -1 != a.a.indexOf("Safari") ? e = "Safari" : -1 != a.a.indexOf("AdobeAIR") ? e = "AdobeAIR" : -1 != a.a.indexOf("PlayStation") && (e = "BuiltinBrowser");
        "BuiltinBrowser" == e ? f = "Unknown" : "Silk" == e ? f = G(a.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == e ? f = G(a.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != a.a.indexOf("Version/") ? f = G(a.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == e ? f = G(a.a, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == e ? f = G(a.a, /OPR\/([\d.]+)/, 1) : "PhantomJS" == e && (f = G(a.a, /PhantomJS\/([\d.]+)/, 1));
        f = B(f);
        g = "AdobeAIR" == e ? 2 < f.c || 2 == f.c && 5 <= f.g : "BlackBerry" == b ? 10 <= c.c : "Android" == b ? 2 < c.c || 2 == c.c && 1 < c.g : 526 <= d.c || 525 <= d.c && 13 <= d.g;
        return new C(e,0,"AppleWebKit",0,b,0,H(a.k),new z(g,536 > d.c || 536 == d.c && 11 > d.g,"iPhone" == b || "iPad" == b || "iPod" == b || "Macintosh" == b,!!a.k.fonts))
    }
    function G(a, b, c) {
        return (a = a.match(b)) && a[c] ? a[c] : ""
    }
    function H(a) {
        if (a.documentMode)
            return a.documentMode
    }
    ;function J(a) {
        this.xa = a || "-"
    }
    J.prototype.e = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++)
            b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.xa)
    }
    ;
    function K(a, b) {
        this.P = a;
        this.$ = 4;
        this.Q = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.Q = c[1],
        this.$ = parseInt(c[2], 10))
    }
    K.prototype.getName = function() {
        return this.P
    }
    ;
    function L(a) {
        return a.Q + a.$
    }
    function fa(a) {
        var b = 4
          , c = "n"
          , d = null;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()),
        (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b
    }
    ;function ga(a, b, c, d, e) {
        this.d = a;
        this.p = b;
        this.T = c;
        this.j = "wf";
        this.h = new J("-");
        this.ha = !1 !== d;
        this.C = !1 !== e
    }
    function M(a) {
        if (a.C) {
            var b = v(a.p, a.h.e(a.j, "active"))
              , c = []
              , d = [a.h.e(a.j, "loading")];
            b || c.push(a.h.e(a.j, "inactive"));
            u(a.p, c, d)
        }
        N(a, "inactive")
    }
    function N(a, b, c) {
        if (a.ha && a.T[b])
            if (c)
                a.T[b](c.getName(), L(c));
            else
                a.T[b]()
    }
    ;function ha() {
        this.A = {}
    }
    ;function O(a, b) {
        this.d = a;
        this.H = b;
        this.t = this.d.createElement("span", {
            "aria-hidden": "true"
        }, this.H)
    }
    function P(a, b) {
        var c = a.t, d;
        d = [];
        for (var e = b.P.split(/,\s*/), f = 0; f < e.length; f++) {
            var g = e[f].replace(/['"]/g, "");
            -1 == g.indexOf(" ") ? d.push(g) : d.push("'" + g + "'")
        }
        d = d.join(",");
        e = "normal";
        "o" === b.Q ? e = "oblique" : "i" === b.Q && (e = "italic");
        c.style.cssText = "display:block;position:absolute;top:0px;left:0px;visibility:hidden;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + d + ";" + ("font-style:" + e + ";font-weight:" + (b.$ + "00") + ";")
    }
    function Q(a) {
        t(a.d, "body", a.t)
    }
    O.prototype.remove = function() {
        var a = this.t;
        a.parentNode && a.parentNode.removeChild(a)
    }
    ;
    function ja(a, b, c, d, e, f, g, h) {
        this.aa = a;
        this.va = b;
        this.d = c;
        this.s = d;
        this.H = h || "BESbswy";
        this.m = e;
        this.J = {};
        this.Y = f || 3E3;
        this.da = g || null;
        this.G = this.F = null;
        a = new O(this.d,this.H);
        Q(a);
        for (var p in R)
            R.hasOwnProperty(p) && (P(a, new K(R[p],L(this.s))),
            this.J[R[p]] = a.t.offsetWidth);
        a.remove()
    }
    var R = {
        Ea: "serif",
        Da: "sans-serif",
        Ca: "monospace"
    };
    ja.prototype.start = function() {
        this.F = new O(this.d,this.H);
        Q(this.F);
        this.G = new O(this.d,this.H);
        Q(this.G);
        this.za = q();
        P(this.F, new K(this.s.getName() + ",serif",L(this.s)));
        P(this.G, new K(this.s.getName() + ",sans-serif",L(this.s)));
        ka(this)
    }
    ;
    function la(a, b, c) {
        for (var d in R)
            if (R.hasOwnProperty(d) && b === a.J[R[d]] && c === a.J[R[d]])
                return !0;
        return !1
    }
    function ka(a) {
        var b = a.F.t.offsetWidth
          , c = a.G.t.offsetWidth;
        b === a.J.serif && c === a.J["sans-serif"] || a.m.Z && la(a, b, c) ? q() - a.za >= a.Y ? a.m.Z && la(a, b, c) && (null === a.da || a.da.hasOwnProperty(a.s.getName())) ? S(a, a.aa) : S(a, a.va) : ma(a) : S(a, a.aa)
    }
    function ma(a) {
        setTimeout(n(function() {
            ka(this)
        }, a), 25)
    }
    function S(a, b) {
        a.F.remove();
        a.G.remove();
        b(a.s)
    }
    ;function T(a, b, c, d) {
        this.d = b;
        this.u = c;
        this.U = 0;
        this.fa = this.ca = !1;
        this.Y = d;
        this.m = a.m
    }
    function na(a, b, c, d, e) {
        c = c || {};
        if (0 === b.length && e)
            M(a.u);
        else
            for (a.U += b.length,
            e && (a.ca = e),
            e = 0; e < b.length; e++) {
                var f = b[e]
                  , g = c[f.getName()]
                  , h = a.u
                  , p = f;
                h.C && u(h.p, [h.h.e(h.j, p.getName(), L(p).toString(), "loading")]);
                N(h, "fontloading", p);
                h = null;
                h = new ja(n(a.ka, a),n(a.la, a),a.d,f,a.m,a.Y,d,g);
                h.start()
            }
    }
    T.prototype.ka = function(a) {
        var b = this.u;
        b.C && u(b.p, [b.h.e(b.j, a.getName(), L(a).toString(), "active")], [b.h.e(b.j, a.getName(), L(a).toString(), "loading"), b.h.e(b.j, a.getName(), L(a).toString(), "inactive")]);
        N(b, "fontactive", a);
        this.fa = !0;
        oa(this)
    }
    ;
    T.prototype.la = function(a) {
        var b = this.u;
        if (b.C) {
            var c = v(b.p, b.h.e(b.j, a.getName(), L(a).toString(), "active"))
              , d = []
              , e = [b.h.e(b.j, a.getName(), L(a).toString(), "loading")];
            c || d.push(b.h.e(b.j, a.getName(), L(a).toString(), "inactive"));
            u(b.p, d, e)
        }
        N(b, "fontinactive", a);
        oa(this)
    }
    ;
    function oa(a) {
        0 == --a.U && a.ca && (a.fa ? (a = a.u,
        a.C && u(a.p, [a.h.e(a.j, "active")], [a.h.e(a.j, "loading"), a.h.e(a.j, "inactive")]),
        N(a, "active")) : M(a.u))
    }
    ;function U(a) {
        this.K = a;
        this.v = new ha;
        this.Aa = new D(a.navigator.userAgent,a.document);
        this.a = this.Aa.parse();
        this.V = this.W = 0;
        this.M = this.N = !0
    }
    U.prototype.load = function(a) {
        var b = a.context || this.K;
        this.d = new s(this.K,b);
        this.N = !1 !== a.events;
        this.M = !1 !== a.classes;
        var b = new ga(this.d,b.document.documentElement,a,this.N,this.M)
          , c = []
          , d = a.timeout;
        b.C && u(b.p, [b.h.e(b.j, "loading")]);
        N(b, "loading");
        var c = this.v, e = this.d, f = [], g;
        for (g in a)
            if (a.hasOwnProperty(g)) {
                var h = c.A[g];
                h && f.push(h(a[g], e))
            }
        c = f;
        this.V = this.W = c.length;
        a = new T(this.a,this.d,b,d);
        g = 0;
        for (d = c.length; g < d; g++)
            e = c[g],
            e.L(this.a, n(this.wa, this, e, b, a))
    }
    ;
    U.prototype.wa = function(a, b, c, d) {
        var e = this;
        d ? a.load(function(a, b, d) {
            pa(e, c, a, b, d)
        }) : (a = 0 == --this.W,
        this.V--,
        a && 0 == this.V ? M(b) : (this.M || this.N) && na(c, [], {}, null, a))
    }
    ;
    function pa(a, b, c, d, e) {
        var f = 0 == --a.W;
        (a.M || a.N) && setTimeout(function() {
            na(b, c, d || null, e || null, f)
        }, 0)
    }
    ;function qa(a, b, c) {
        this.S = a ? a : b + ra;
        this.q = [];
        this.X = [];
        this.ga = c || ""
    }
    var ra = "//fonts.googleapis.com/css";
    qa.prototype.e = function() {
        if (0 == this.q.length)
            throw Error("No fonts to load!");
        if (-1 != this.S.indexOf("kit="))
            return this.S;
        for (var a = this.q.length, b = [], c = 0; c < a; c++)
            b.push(this.q[c].replace(/ /g, "+"));
        a = this.S + "?family=" + b.join("%7C");
        0 < this.X.length && (a += "&subset=" + this.X.join(","));
        0 < this.ga.length && (a += "&text=" + encodeURIComponent(this.ga));
        return a
    }
    ;
    function sa(a) {
        this.q = a;
        this.ea = [];
        this.O = {}
    }
    var ta = {
        latin: "BESbswy",
        cyrillic: "&#1081;&#1103;&#1046;",
        greek: "&#945;&#946;&#931;",
        khmer: "&#x1780;&#x1781;&#x1782;",
        Hanuman: "&#x1780;&#x1781;&#x1782;"
    }
      , ua = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
    }
      , va = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
    }
      , wa = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    sa.prototype.parse = function() {
        for (var a = this.q.length, b = 0; b < a; b++) {
            var c = this.q[b].split(":")
              , d = c[0].replace(/\+/g, " ")
              , e = ["n4"];
            if (2 <= c.length) {
                var f;
                var g = c[1];
                f = [];
                if (g)
                    for (var g = g.split(","), h = g.length, p = 0; p < h; p++) {
                        var m;
                        m = g[p];
                        if (m.match(/^[\w-]+$/)) {
                            m = wa.exec(m.toLowerCase());
                            var r = void 0;
                            if (null == m)
                                r = "";
                            else {
                                r = void 0;
                                r = m[1];
                                if (null == r || "" == r)
                                    r = "4";
                                else
                                    var ia = ua[r]
                                      , r = ia ? ia : isNaN(r) ? "4" : r.substr(0, 1);
                                m = m[2];
                                r = [null == m || "" == m ? "n" : va[m], r].join("")
                            }
                            m = r
                        } else
                            m = "";
                        m && f.push(m)
                    }
                0 < f.length && (e = f);
                3 == c.length && (c = c[2],
                f = [],
                c = c ? c.split(",") : f,
                0 < c.length && (c = ta[c[0]]) && (this.O[d] = c))
            }
            this.O[d] || (c = ta[d]) && (this.O[d] = c);
            for (c = 0; c < e.length; c += 1)
                this.ea.push(new K(d,e[c]))
        }
    }
    ;
    function V(a, b) {
        this.a = (new D(navigator.userAgent,document)).parse();
        this.d = a;
        this.f = b
    }
    var xa = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
    };
    V.prototype.L = function(a, b) {
        b(a.m.R)
    }
    ;
    V.prototype.load = function(a) {
        var b = this.d;
        "MSIE" == this.a.getName() && 1 != this.f.blocking ? ca(b, n(this.ba, this, a)) : this.ba(a)
    }
    ;
    V.prototype.ba = function(a) {
        for (var b = this.d, c = new qa(this.f.api,w(b),this.f.text), d = this.f.families, e = d.length, f = 0; f < e; f++) {
            var g = d[f].split(":");
            3 == g.length && c.X.push(g.pop());
            var h = "";
            2 == g.length && "" != g[1] && (h = ":");
            c.q.push(g.join(h))
        }
        d = new sa(d);
        d.parse();
        x(b, c.e());
        a(d.ea, d.O, xa)
    }
    ;
    function W(a, b) {
        this.d = a;
        this.f = b;
        this.o = []
    }
    W.prototype.I = function(a) {
        var b = this.d;
        return w(this.d) + (this.f.api || "//f.fontdeck.com/s/css/js/") + (b.w.location.hostname || b.K.location.hostname) + "/" + a + ".js"
    }
    ;
    W.prototype.L = function(a, b) {
        var c = this.f.id
          , d = this.d.w
          , e = this;
        c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}),
        d.__webfontfontdeckmodule__[c] = function(a, c) {
            for (var d = 0, p = c.fonts.length; d < p; ++d) {
                var m = c.fonts[d];
                e.o.push(new K(m.name,fa("font-weight:" + m.weight + ";font-style:" + m.style)))
            }
            b(a)
        }
        ,
        y(this.d, this.I(c), function(a) {
            a && b(!1)
        })) : b(!1)
    }
    ;
    W.prototype.load = function(a) {
        a(this.o)
    }
    ;
    function X(a, b) {
        this.d = a;
        this.f = b;
        this.o = []
    }
    X.prototype.I = function(a) {
        var b = w(this.d);
        return (this.f.api || b + "//use.typekit.net") + "/" + a + ".js"
    }
    ;
    X.prototype.L = function(a, b) {
        var c = this.f.id
          , d = this.d.w
          , e = this;
        c ? y(this.d, this.I(c), function(a) {
            if (a)
                b(!1);
            else {
                if (d.Typekit && d.Typekit.config && d.Typekit.config.fn) {
                    a = d.Typekit.config.fn;
                    for (var c = 0; c < a.length; c += 2)
                        for (var h = a[c], p = a[c + 1], m = 0; m < p.length; m++)
                            e.o.push(new K(h,p[m]));
                    try {
                        d.Typekit.load({
                            events: !1,
                            classes: !1
                        })
                    } catch (r) {}
                }
                b(!0)
            }
        }, 2E3) : b(!1)
    }
    ;
    X.prototype.load = function(a) {
        a(this.o)
    }
    ;
    function Y(a, b) {
        this.d = a;
        this.f = b;
        this.o = []
    }
    Y.prototype.L = function(a, b) {
        var c = this
          , d = c.f.projectId
          , e = c.f.version;
        if (d) {
            var f = c.d.w;
            y(this.d, c.I(d, e), function(e) {
                if (e)
                    b(!1);
                else {
                    if (f["__mti_fntLst" + d] && (e = f["__mti_fntLst" + d]()))
                        for (var h = 0; h < e.length; h++)
                            c.o.push(new K(e[h].fontfamily));
                    b(a.m.R)
                }
            }).id = "__MonotypeAPIScript__" + d
        } else
            b(!1)
    }
    ;
    Y.prototype.I = function(a, b) {
        var c = w(this.d)
          , d = (this.f.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "")
    }
    ;
    Y.prototype.load = function(a) {
        a(this.o)
    }
    ;
    function Z(a, b) {
        this.d = a;
        this.f = b
    }
    Z.prototype.load = function(a) {
        var b, c, d = this.f.urls || [], e = this.f.families || [], f = this.f.testStrings || {};
        b = 0;
        for (c = d.length; b < c; b++)
            x(this.d, d[b]);
        d = [];
        b = 0;
        for (c = e.length; b < c; b++) {
            var g = e[b].split(":");
            if (g[1])
                for (var h = g[1].split(","), p = 0; p < h.length; p += 1)
                    d.push(new K(g[0],h[p]));
            else
                d.push(new K(g[0]))
        }
        a(d, f)
    }
    ;
    Z.prototype.L = function(a, b) {
        return b(a.m.R)
    }
    ;
    var $ = new U(k);
    $.v.A.custom = function(a, b) {
        return new Z(b,a)
    }
    ;
    $.v.A.fontdeck = function(a, b) {
        return new W(b,a)
    }
    ;
    $.v.A.monotype = function(a, b) {
        return new Y(b,a)
    }
    ;
    $.v.A.typekit = function(a, b) {
        return new X(b,a)
    }
    ;
    $.v.A.google = function(a, b) {
        return new V(b,a)
    }
    ;
    k.WebFont || (k.WebFont = {},
    k.WebFont.load = n($.load, $),
    k.WebFontConfig && $.load(k.WebFontConfig));
}
)(this, document);

/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */
(function() {
    'use strict';
    var f, g = [];
    function l(a) {
        g.push(a);
        1 == g.length && f()
    }
    function m() {
        for (; g.length; )
            g[0](),
            g.shift()
    }
    f = function() {
        setTimeout(m)
    }
    ;
    function n(a) {
        this.a = p;
        this.b = void 0;
        this.f = [];
        var b = this;
        try {
            a(function(a) {
                q(b, a)
            }, function(a) {
                r(b, a)
            })
        } catch (c) {
            r(b, c)
        }
    }
    var p = 2;
    function t(a) {
        return new n(function(b, c) {
            c(a)
        }
        )
    }
    function u(a) {
        return new n(function(b) {
            b(a)
        }
        )
    }
    function q(a, b) {
        if (a.a == p) {
            if (b == a)
                throw new TypeError;
            var c = !1;
            try {
                var d = b && b.then;
                if (null != b && "object" == typeof b && "function" == typeof d) {
                    d.call(b, function(b) {
                        c || q(a, b);
                        c = !0
                    }, function(b) {
                        c || r(a, b);
                        c = !0
                    });
                    return
                }
            } catch (e) {
                c || r(a, e);
                return
            }
            a.a = 0;
            a.b = b;
            v(a)
        }
    }
    function r(a, b) {
        if (a.a == p) {
            if (b == a)
                throw new TypeError;
            a.a = 1;
            a.b = b;
            v(a)
        }
    }
    function v(a) {
        l(function() {
            if (a.a != p)
                for (; a.f.length; ) {
                    var b = a.f.shift()
                      , c = b[0]
                      , d = b[1]
                      , e = b[2]
                      , b = b[3];
                    try {
                        0 == a.a ? "function" == typeof c ? e(c.call(void 0, a.b)) : e(a.b) : 1 == a.a && ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b))
                    } catch (h) {
                        b(h)
                    }
                }
        })
    }
    n.prototype.g = function(a) {
        return this.c(void 0, a)
    }
    ;
    n.prototype.c = function(a, b) {
        var c = this;
        return new n(function(d, e) {
            c.f.push([a, b, d, e]);
            v(c)
        }
        )
    }
    ;

    function w(a) {
        return new n(function(b, c) {
            function d(c) {
                return function(d) {
                    h[c] = d;
                    e += 1;
                    e == a.length && b(h)
                }
            }
            var e = 0
              , h = [];
            0 == a.length && b(h);
            for (var k = 0; k < a.length; k += 1)
                u(a[k]).c(d(k), c)
        }
        )
    }
    function x(a) {
        return new n(function(b, c) {
            for (var d = 0; d < a.length; d += 1)
                u(a[d]).c(b, c)
        }
        )
    }
    ;window.Promise || (window.Promise = n,
    window.Promise.resolve = u,
    window.Promise.reject = t,
    window.Promise.race = x,
    window.Promise.all = w,
    window.Promise.prototype.then = n.prototype.c,
    window.Promise.prototype["catch"] = n.prototype.g);
}());

(function() {
    function l(a, b) {
        document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b)
    }
    function m(a) {
        document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
            document.removeEventListener("DOMContentLoaded", c);
            a()
        }) : document.attachEvent("onreadystatechange", function k() {
            if ("interactive" == document.readyState || "complete" == document.readyState)
                document.detachEvent("onreadystatechange", k),
                a()
        })
    }
    ;function t(a) {
        this.a = document.createElement("div");
        this.a.setAttribute("aria-hidden", "true");
        this.a.appendChild(document.createTextNode(a));
        this.b = document.createElement("span");
        this.c = document.createElement("span");
        this.h = document.createElement("span");
        this.f = document.createElement("span");
        this.g = -1;
        this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size: 16px;";
        this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
        this.b.appendChild(this.h);
        this.c.appendChild(this.f);
        this.a.appendChild(this.b);
        this.a.appendChild(this.c)
    }
    function u(a, b) {
        a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";"
    }
    function z(a) {
        var b = a.a.offsetWidth
          , c = b + 100;
        a.f.style.width = c + "px";
        a.c.scrollLeft = c;
        a.b.scrollLeft = a.b.scrollWidth + 100;
        return a.g !== b ? (a.g = b,
        !0) : !1
    }
    function A(a, b) {
        function c() {
            var a = k;
            z(a) && a.a.parentNode && b(a.g)
        }
        var k = a;
        l(a.b, c);
        l(a.c, c);
        z(a)
    }
    ;function B(a, b) {
        var c = b || {};
        this.family = a;
        this.style = c.style || "normal";
        this.weight = c.weight || "normal";
        this.stretch = c.stretch || "normal"
    }
    var C = null
      , D = null
      , E = null
      , F = null;
    function G() {
        if (null === D)
            if (J() && /Apple/.test(window.navigator.vendor)) {
                var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                D = !!a && 603 > parseInt(a[1], 10)
            } else
                D = !1;
        return D
    }
    function J() {
        null === F && (F = !!document.fonts);
        return F
    }
    function K() {
        if (null === E) {
            var a = document.createElement("div");
            try {
                a.style.font = "condensed 100px sans-serif"
            } catch (b) {}
            E = "" !== a.style.font
        }
        return E
    }
    function L(a, b) {
        return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ")
    }
    B.prototype.load = function(a, b) {
        var c = this
          , k = a || "BESbswy"
          , r = 0
          , n = b || 3E3
          , H = (new Date).getTime();
        return new Promise(function(a, b) {
            if (J() && !G()) {
                var M = new Promise(function(a, b) {
                    function e() {
                        (new Date).getTime() - H >= n ? b(Error("" + n + "ms timeout exceeded")) : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function(c) {
                            1 <= c.length ? a() : setTimeout(e, 25)
                        }, b)
                    }
                    e()
                }
                )
                  , N = new Promise(function(a, c) {
                    r = setTimeout(function() {
                        c(Error("" + n + "ms timeout exceeded"))
                    }, n)
                }
                );
                Promise.race([N, M]).then(function() {
                    clearTimeout(r);
                    a(c)
                }, b)
            } else
                m(function() {
                    function v() {
                        var b;
                        if (b = -1 != f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h)
                            (b = f != g && f != h && g != h) || (null === C && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),
                            C = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))),
                            b = C && (f == w && g == w && h == w || f == x && g == x && h == x || f == y && g == y && h == y)),
                            b = !b;
                        b && (d.parentNode && d.parentNode.removeChild(d),
                        clearTimeout(r),
                        a(c))
                    }
                    function I() {
                        if ((new Date).getTime() - H >= n)
                            d.parentNode && d.parentNode.removeChild(d),
                            b(Error("" + n + "ms timeout exceeded"));
                        else {
                            var a = document.hidden;
                            if (!0 === a || void 0 === a)
                                f = e.a.offsetWidth,
                                g = p.a.offsetWidth,
                                h = q.a.offsetWidth,
                                v();
                            r = setTimeout(I, 50)
                        }
                    }
                    var e = new t(k)
                      , p = new t(k)
                      , q = new t(k)
                      , f = -1
                      , g = -1
                      , h = -1
                      , w = -1
                      , x = -1
                      , y = -1
                      , d = document.createElement("div");
                    d.dir = "ltr";
                    u(e, L(c, "sans-serif"));
                    u(p, L(c, "serif"));
                    u(q, L(c, "monospace"));
                    d.appendChild(e.a);
                    d.appendChild(p.a);
                    d.appendChild(q.a);
                    document.body.appendChild(d);
                    w = e.a.offsetWidth;
                    x = p.a.offsetWidth;
                    y = q.a.offsetWidth;
                    I();
                    A(e, function(a) {
                        f = a;
                        v()
                    });
                    u(e, L(c, '"' + c.family + '",sans-serif'));
                    A(p, function(a) {
                        g = a;
                        v()
                    });
                    u(p, L(c, '"' + c.family + '",serif'));
                    A(q, function(a) {
                        h = a;
                        v()
                    });
                    u(q, L(c, '"' + c.family + '",monospace'))
                })
        }
        )
    }
    ;
    "object" === typeof module ? module.exports = B : (window.FontFaceObserver = B,
    window.FontFaceObserver.prototype.load = B.prototype.load);
}());

window._bubble_page_load_data.js_execution_timings.early_js_end_execution = Date.now();
