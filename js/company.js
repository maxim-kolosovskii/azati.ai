!(function (e, r) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = r();
    else if ("function" == typeof define && define.amd) define([], r);
    else {
        var t = r();
        for (var o in t) ("object" == typeof exports ? exports : e)[o] = t[o];
    }
})(self, function () {
    return (function () {
        "use strict";
        var e,
            r = {
                4386: function (e, r, t) {
                    t.r(r);
                    var o = t(6358),
                        n = t(6546);
                    r.default = !(function () {
                        o.p8.registerPlugin(n.ScrollTrigger);
                        const e = (e, r) => {
                            const t = r ? "25%" : "-25%";
                            return o.p8.to(e, { scrollTrigger: { trigger: ".section_company", start: "-400px bottom", end: "bottom -400px", scrub: !0, toggleActions: "restart pause reverse pause" }, x: t, ease: "none", duration: 4e3 });
                        };
                        e(".company__list_top"),
                            e(".company__list_mid", !0),
                            e(".company__list_bottom"),
                            new ResizeObserver(() => {
                                n.ScrollTrigger.refresh();
                            }).observe(document.body);
                    })();
                },
            },
            t = {};
        function o(e) {
            var n = t[e];
            if (void 0 !== n) return n.exports;
            var i = (t[e] = { id: e, loaded: !1, exports: {} });
            return r[e].call(i.exports, i, i.exports, o), (i.loaded = !0), i.exports;
        }
        (o.m = r),
            (e = []),
            (o.O = function (r, t, n, i) {
                if (!t) {
                    var u = 1 / 0;
                    for (a = 0; a < e.length; a++) {
                        (t = e[a][0]), (n = e[a][1]), (i = e[a][2]);
                        for (var f = !0, s = 0; s < t.length; s++)
                            (!1 & i || u >= i) &&
                            Object.keys(o.O).every(function (e) {
                                return o.O[e](t[s]);
                            })
                                ? t.splice(s--, 1)
                                : ((f = !1), i < u && (u = i));
                        if (f) {
                            e.splice(a--, 1);
                            var c = n();
                            void 0 !== c && (r = c);
                        }
                    }
                    return r;
                }
                i = i || 0;
                for (var a = e.length; a > 0 && e[a - 1][2] > i; a--) e[a] = e[a - 1];
                e[a] = [t, n, i];
            }),
            (o.n = function (e) {
                var r =
                    e && e.__esModule
                        ? function () {
                            return e.default;
                        }
                        : function () {
                            return e;
                        };
                return o.d(r, { a: r }), r;
            }),
            (o.d = function (e, r) {
                for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
            }),
            (o.g = (function () {
                if ("object" == typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")();
                } catch (e) {
                    if ("object" == typeof window) return window;
                }
            })()),
            (o.hmd = function (e) {
                return (
                    (e = Object.create(e)).children || (e.children = []),
                        Object.defineProperty(e, "exports", {
                            enumerable: !0,
                            set: function () {
                                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
                            },
                        }),
                        e
                );
            }),
            (o.o = function (e, r) {
                return Object.prototype.hasOwnProperty.call(e, r);
            }),
            (o.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (o.j = 6768),
            (function () {
                var e = { 6768: 0 };
                o.O.j = function (r) {
                    return 0 === e[r];
                };
                var r = function (r, t) {
                        var n,
                            i,
                            u = t[0],
                            f = t[1],
                            s = t[2],
                            c = 0;
                        if (
                            u.some(function (r) {
                                return 0 !== e[r];
                            })
                        ) {
                            for (n in f) o.o(f, n) && (o.m[n] = f[n]);
                            if (s) var a = s(o);
                        }
                        for (r && r(t); c < u.length; c++) (i = u[c]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                        return o.O(a);
                    },
                    t = (self.webpackChunkstartproject = self.webpackChunkstartproject || []);
                t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
            })();
        var n = o.O(void 0, [1216], function () {
            return o(4386);
        });
        return o.O(n);
    })();
});