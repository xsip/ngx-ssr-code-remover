var xv = Object.create;
var qa = Object.defineProperty, Av = Object.defineProperties, Nv = Object.getOwnPropertyDescriptor,
    kv = Object.getOwnPropertyDescriptors, Rv = Object.getOwnPropertyNames, Eo = Object.getOwnPropertySymbols,
    Ov = Object.getPrototypeOf, Za = Object.prototype.hasOwnProperty, af = Object.prototype.propertyIsEnumerable;
var sf = (t, e, n) => e in t ? qa(t, e, {enumerable: !0, configurable: !0, writable: !0, value: n}) : t[e] = n,
    S = (t, e) => {
        for (var n in e ||= {}) Za.call(e, n) && sf(t, n, e[n]);
        if (Eo) for (var n of Eo(e)) af.call(e, n) && sf(t, n, e[n]);
        return t
    }, fe = (t, e) => Av(t, kv(e));
var Io = (t, e) => {
    var n = {};
    for (var r in t) Za.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && Eo) for (var r of Eo(t)) e.indexOf(r) < 0 && af.call(t, r) && (n[r] = t[r]);
    return n
};
var cf = (t, e) => () => (e || t((e = {exports: {}}).exports, e), e.exports);
var Pv = (t, e, n, r) => {
    if (e && typeof e == "object" || typeof e == "function") for (let i of Rv(e)) !Za.call(t, i) && i !== n && qa(t, i, {
        get: () => e[i],
        enumerable: !(r = Nv(e, i)) || r.enumerable
    });
    return t
};
var Co = (t, e, n) => (n = t != null ? xv(Ov(t)) : {}, Pv(e || !t || !t.__esModule ? qa(n, "default", {
    value: t,
    enumerable: !0
}) : n, t));
var Fy = cf(() => {
    "use strict";
    var Py;
    (function (t) {
        (function (e) {
            var n = typeof globalThis == "object" ? globalThis : typeof global == "object" ? global : typeof self == "object" ? self : typeof this == "object" ? this : a(),
                r = i(t);
            typeof n.Reflect < "u" && (r = i(n.Reflect, r)), e(r, n), typeof n.Reflect > "u" && (n.Reflect = t);

            function i(c, l) {
                return function (u, d) {
                    Object.defineProperty(c, u, {configurable: !0, writable: !0, value: d}), l && l(u, d)
                }
            }

            function o() {
                try {
                    return Function("return this;")()
                } catch {
                }
            }

            function s() {
                try {
                    return (0, eval)("(function() { return this; })()")
                } catch {
                }
            }

            function a() {
                return o() || s()
            }
        })(function (e, n) {
            var r = Object.prototype.hasOwnProperty, i = typeof Symbol == "function",
                o = i && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive",
                s = i && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator",
                a = typeof Object.create == "function", c = {__proto__: []} instanceof Array, l = !a && !c, u = {
                    create: a ? function () {
                        return Ga(Object.create(null))
                    } : c ? function () {
                        return Ga({__proto__: null})
                    } : function () {
                        return Ga({})
                    }, has: l ? function (p, g) {
                        return r.call(p, g)
                    } : function (p, g) {
                        return g in p
                    }, get: l ? function (p, g) {
                        return r.call(p, g) ? p[g] : void 0
                    } : function (p, g) {
                        return p[g]
                    }
                }, d = Object.getPrototypeOf(Function),
                h = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Cv(),
                f = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : _v(),
                m = typeof WeakMap == "function" ? WeakMap : Sv(),
                v = i ? Symbol.for("@reflect-metadata:registry") : void 0, C = Dv(), N = Ev(C);

            function $(p, g, y, w) {
                if (M(y)) {
                    if (!nr(p)) throw new TypeError;
                    if (!Jd(g)) throw new TypeError;
                    return $t(p, g)
                } else {
                    if (!nr(p)) throw new TypeError;
                    if (!de(g)) throw new TypeError;
                    if (!de(w) && !M(w) && !Be(w)) throw new TypeError;
                    return Be(w) && (w = void 0), y = Ue(y), ri(p, g, y, w)
                }
            }

            e("decorate", $);

            function z(p, g) {
                function y(w, k) {
                    if (!de(w)) throw new TypeError;
                    if (!M(k) && !bv(k)) throw new TypeError;
                    R(p, g, w, k)
                }

                return y
            }

            e("metadata", z);

            function ee(p, g, y, w) {
                if (!de(y)) throw new TypeError;
                return M(w) || (w = Ue(w)), R(p, g, y, w)
            }

            e("defineMetadata", ee);

            function Ae(p, g, y) {
                if (!de(g)) throw new TypeError;
                return M(y) || (y = Ue(y)), ii(p, g, y)
            }

            e("hasMetadata", Ae);

            function le(p, g, y) {
                if (!de(g)) throw new TypeError;
                return M(y) || (y = Ue(y)), tr(p, g, y)
            }

            e("hasOwnMetadata", le);

            function ue(p, g, y) {
                if (!de(g)) throw new TypeError;
                return M(y) || (y = Ue(y)), _(p, g, y)
            }

            e("getMetadata", ue);

            function be(p, g, y) {
                if (!de(g)) throw new TypeError;
                return M(y) || (y = Ue(y)), A(p, g, y)
            }

            e("getOwnMetadata", be);

            function yt(p, g) {
                if (!de(p)) throw new TypeError;
                return M(g) || (g = Ue(g)), Q(p, g)
            }

            e("getMetadataKeys", yt);

            function Mt(p, g) {
                if (!de(p)) throw new TypeError;
                return M(g) || (g = Ue(g)), ge(p, g)
            }

            e("getOwnMetadataKeys", Mt);

            function Do(p, g, y) {
                if (!de(g)) throw new TypeError;
                if (M(y) || (y = Ue(y)), !de(g)) throw new TypeError;
                M(y) || (y = Ue(y));
                var w = oi(g, y, !1);
                return M(w) ? !1 : w.OrdinaryDeleteMetadata(p, g, y)
            }

            e("deleteMetadata", Do);

            function $t(p, g) {
                for (var y = p.length - 1; y >= 0; --y) {
                    var w = p[y], k = w(g);
                    if (!M(k) && !Be(k)) {
                        if (!Jd(k)) throw new TypeError;
                        g = k
                    }
                }
                return g
            }

            function ri(p, g, y, w) {
                for (var k = p.length - 1; k >= 0; --k) {
                    var me = p[k], De = me(g, y, w);
                    if (!M(De) && !Be(De)) {
                        if (!de(De)) throw new TypeError;
                        w = De
                    }
                }
                return w
            }

            function ii(p, g, y) {
                var w = tr(p, g, y);
                if (w) return !0;
                var k = Wa(g);
                return Be(k) ? !1 : ii(p, k, y)
            }

            function tr(p, g, y) {
                var w = oi(g, y, !1);
                return M(w) ? !1 : xt(w.OrdinaryHasOwnMetadata(p, g, y))
            }

            function _(p, g, y) {
                var w = tr(p, g, y);
                if (w) return A(p, g, y);
                var k = Wa(g);
                if (!Be(k)) return _(p, k, y)
            }

            function A(p, g, y) {
                var w = oi(g, y, !1);
                if (!M(w)) return w.OrdinaryGetOwnMetadata(p, g, y)
            }

            function R(p, g, y, w) {
                var k = oi(y, w, !0);
                k.OrdinaryDefineOwnMetadata(p, g, y, w)
            }

            function Q(p, g) {
                var y = ge(p, g), w = Wa(p);
                if (w === null) return y;
                var k = Q(w, g);
                if (k.length <= 0) return y;
                if (y.length <= 0) return k;
                for (var me = new f, De = [], Z = 0, E = y; Z < E.length; Z++) {
                    var I = E[Z], T = me.has(I);
                    T || (me.add(I), De.push(I))
                }
                for (var x = 0, K = k; x < K.length; x++) {
                    var I = K[x], T = me.has(I);
                    T || (me.add(I), De.push(I))
                }
                return De
            }

            function ge(p, g) {
                var y = oi(p, g, !1);
                return y ? y.OrdinaryOwnMetadataKeys(p, g) : []
            }

            function Qe(p) {
                if (p === null) return 1;
                switch (typeof p) {
                    case"undefined":
                        return 0;
                    case"boolean":
                        return 2;
                    case"string":
                        return 3;
                    case"symbol":
                        return 4;
                    case"number":
                        return 5;
                    case"object":
                        return p === null ? 1 : 6;
                    default:
                        return 6
                }
            }

            function M(p) {
                return p === void 0
            }

            function Be(p) {
                return p === null
            }

            function ae(p) {
                return typeof p == "symbol"
            }

            function de(p) {
                return typeof p == "object" ? p !== null : typeof p == "function"
            }

            function Ha(p, g) {
                switch (Qe(p)) {
                    case 0:
                        return p;
                    case 1:
                        return p;
                    case 2:
                        return p;
                    case 3:
                        return p;
                    case 4:
                        return p;
                    case 5:
                        return p
                }
                var y = g === 3 ? "string" : g === 5 ? "number" : "default", w = Xd(p, o);
                if (w !== void 0) {
                    var k = w.call(p, y);
                    if (de(k)) throw new TypeError;
                    return k
                }
                return Se(p, y === "default" ? "number" : y)
            }

            function Se(p, g) {
                if (g === "string") {
                    var y = p.toString;
                    if (rr(y)) {
                        var w = y.call(p);
                        if (!de(w)) return w
                    }
                    var k = p.valueOf;
                    if (rr(k)) {
                        var w = k.call(p);
                        if (!de(w)) return w
                    }
                } else {
                    var k = p.valueOf;
                    if (rr(k)) {
                        var w = k.call(p);
                        if (!de(w)) return w
                    }
                    var me = p.toString;
                    if (rr(me)) {
                        var w = me.call(p);
                        if (!de(w)) return w
                    }
                }
                throw new TypeError
            }

            function xt(p) {
                return !!p
            }

            function He(p) {
                return "" + p
            }

            function Ue(p) {
                var g = Ha(p, 3);
                return ae(g) ? g : He(g)
            }

            function nr(p) {
                return Array.isArray ? Array.isArray(p) : p instanceof Object ? p instanceof Array : Object.prototype.toString.call(p) === "[object Array]"
            }

            function rr(p) {
                return typeof p == "function"
            }

            function Jd(p) {
                return typeof p == "function"
            }

            function bv(p) {
                switch (Qe(p)) {
                    case 3:
                        return !0;
                    case 4:
                        return !0;
                    default:
                        return !1
                }
            }

            function za(p, g) {
                return p === g || p !== p && g !== g
            }

            function Xd(p, g) {
                var y = p[g];
                if (y != null) {
                    if (!rr(y)) throw new TypeError;
                    return y
                }
            }

            function ef(p) {
                var g = Xd(p, s);
                if (!rr(g)) throw new TypeError;
                var y = g.call(p);
                if (!de(y)) throw new TypeError;
                return y
            }

            function tf(p) {
                return p.value
            }

            function nf(p) {
                var g = p.next();
                return g.done ? !1 : g
            }

            function rf(p) {
                var g = p.return;
                g && g.call(p)
            }

            function Wa(p) {
                var g = Object.getPrototypeOf(p);
                if (typeof p != "function" || p === d || g !== d) return g;
                var y = p.prototype, w = y && Object.getPrototypeOf(y);
                if (w == null || w === Object.prototype) return g;
                var k = w.constructor;
                return typeof k != "function" || k === p ? g : k
            }

            function wv() {
                var p;
                !M(v) && typeof n.Reflect < "u" && !(v in n.Reflect) && typeof n.Reflect.defineMetadata == "function" && (p = Iv(n.Reflect));
                var g, y, w, k = new m, me = {registerProvider: De, getProvider: E, setProvider: T};
                return me;

                function De(x) {
                    if (!Object.isExtensible(me)) throw new Error("Cannot add provider to a frozen registry.");
                    switch (!0) {
                        case p === x:
                            break;
                        case M(g):
                            g = x;
                            break;
                        case g === x:
                            break;
                        case M(y):
                            y = x;
                            break;
                        case y === x:
                            break;
                        default:
                            w === void 0 && (w = new f), w.add(x);
                            break
                    }
                }

                function Z(x, K) {
                    if (!M(g)) {
                        if (g.isProviderFor(x, K)) return g;
                        if (!M(y)) {
                            if (y.isProviderFor(x, K)) return g;
                            if (!M(w)) for (var ce = ef(w); ;) {
                                var ye = nf(ce);
                                if (!ye) return;
                                var vt = tf(ye);
                                if (vt.isProviderFor(x, K)) return rf(ce), vt
                            }
                        }
                    }
                    if (!M(p) && p.isProviderFor(x, K)) return p
                }

                function E(x, K) {
                    var ce = k.get(x), ye;
                    return M(ce) || (ye = ce.get(K)), M(ye) && (ye = Z(x, K), M(ye) || (M(ce) && (ce = new h, k.set(x, ce)), ce.set(K, ye))), ye
                }

                function I(x) {
                    if (M(x)) throw new TypeError;
                    return g === x || y === x || !M(w) && w.has(x)
                }

                function T(x, K, ce) {
                    if (!I(ce)) throw new Error("Metadata provider not registered.");
                    var ye = E(x, K);
                    if (ye !== ce) {
                        if (!M(ye)) return !1;
                        var vt = k.get(x);
                        M(vt) && (vt = new h, k.set(x, vt)), vt.set(K, ce)
                    }
                    return !0
                }
            }

            function Dv() {
                var p;
                return !M(v) && de(n.Reflect) && Object.isExtensible(n.Reflect) && (p = n.Reflect[v]), M(p) && (p = wv()), !M(v) && de(n.Reflect) && Object.isExtensible(n.Reflect) && Object.defineProperty(n.Reflect, v, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: p
                }), p
            }

            function Ev(p) {
                var g = new m, y = {
                    isProviderFor: function (I, T) {
                        var x = g.get(I);
                        return M(x) ? !1 : x.has(T)
                    },
                    OrdinaryDefineOwnMetadata: De,
                    OrdinaryHasOwnMetadata: k,
                    OrdinaryGetOwnMetadata: me,
                    OrdinaryOwnMetadataKeys: Z,
                    OrdinaryDeleteMetadata: E
                };
                return C.registerProvider(y), y;

                function w(I, T, x) {
                    var K = g.get(I), ce = !1;
                    if (M(K)) {
                        if (!x) return;
                        K = new h, g.set(I, K), ce = !0
                    }
                    var ye = K.get(T);
                    if (M(ye)) {
                        if (!x) return;
                        if (ye = new h, K.set(T, ye), !p.setProvider(I, T, y)) throw K.delete(T), ce && g.delete(I), new Error("Wrong provider for target.")
                    }
                    return ye
                }

                function k(I, T, x) {
                    var K = w(T, x, !1);
                    return M(K) ? !1 : xt(K.has(I))
                }

                function me(I, T, x) {
                    var K = w(T, x, !1);
                    if (!M(K)) return K.get(I)
                }

                function De(I, T, x, K) {
                    var ce = w(x, K, !0);
                    ce.set(I, T)
                }

                function Z(I, T) {
                    var x = [], K = w(I, T, !1);
                    if (M(K)) return x;
                    for (var ce = K.keys(), ye = ef(ce), vt = 0; ;) {
                        var of = nf(ye);
                        if (!of) return x.length = vt, x;
                        var Tv = tf(of);
                        try {
                            x[vt] = Tv
                        } catch (Mv) {
                            try {
                                rf(ye)
                            } finally {
                                throw Mv
                            }
                        }
                        vt++
                    }
                }

                function E(I, T, x) {
                    var K = w(T, x, !1);
                    if (M(K) || !K.delete(I)) return !1;
                    if (K.size === 0) {
                        var ce = g.get(T);
                        M(ce) || (ce.delete(x), ce.size === 0 && g.delete(ce))
                    }
                    return !0
                }
            }

            function Iv(p) {
                var g = p.defineMetadata, y = p.hasOwnMetadata, w = p.getOwnMetadata, k = p.getOwnMetadataKeys,
                    me = p.deleteMetadata, De = new m, Z = {
                        isProviderFor: function (E, I) {
                            var T = De.get(E);
                            return !M(T) && T.has(I) ? !0 : k(E, I).length ? (M(T) && (T = new f, De.set(E, T)), T.add(I), !0) : !1
                        },
                        OrdinaryDefineOwnMetadata: g,
                        OrdinaryHasOwnMetadata: y,
                        OrdinaryGetOwnMetadata: w,
                        OrdinaryOwnMetadataKeys: k,
                        OrdinaryDeleteMetadata: me
                    };
                return Z
            }

            function oi(p, g, y) {
                var w = C.getProvider(p, g);
                if (!M(w)) return w;
                if (y) {
                    if (C.setProvider(p, g, N)) return N;
                    throw new Error("Illegal state.")
                }
            }

            function Cv() {
                var p = {}, g = [], y = function () {
                    function Z(E, I, T) {
                        this._index = 0, this._keys = E, this._values = I, this._selector = T
                    }

                    return Z.prototype["@@iterator"] = function () {
                        return this
                    }, Z.prototype[s] = function () {
                        return this
                    }, Z.prototype.next = function () {
                        var E = this._index;
                        if (E >= 0 && E < this._keys.length) {
                            var I = this._selector(this._keys[E], this._values[E]);
                            return E + 1 >= this._keys.length ? (this._index = -1, this._keys = g, this._values = g) : this._index++, {
                                value: I,
                                done: !1
                            }
                        }
                        return {value: void 0, done: !0}
                    }, Z.prototype.throw = function (E) {
                        throw this._index >= 0 && (this._index = -1, this._keys = g, this._values = g), E
                    }, Z.prototype.return = function (E) {
                        return this._index >= 0 && (this._index = -1, this._keys = g, this._values = g), {
                            value: E,
                            done: !0
                        }
                    }, Z
                }(), w = function () {
                    function Z() {
                        this._keys = [], this._values = [], this._cacheKey = p, this._cacheIndex = -2
                    }

                    return Object.defineProperty(Z.prototype, "size", {
                        get: function () {
                            return this._keys.length
                        }, enumerable: !0, configurable: !0
                    }), Z.prototype.has = function (E) {
                        return this._find(E, !1) >= 0
                    }, Z.prototype.get = function (E) {
                        var I = this._find(E, !1);
                        return I >= 0 ? this._values[I] : void 0
                    }, Z.prototype.set = function (E, I) {
                        var T = this._find(E, !0);
                        return this._values[T] = I, this
                    }, Z.prototype.delete = function (E) {
                        var I = this._find(E, !1);
                        if (I >= 0) {
                            for (var T = this._keys.length, x = I + 1; x < T; x++) this._keys[x - 1] = this._keys[x], this._values[x - 1] = this._values[x];
                            return this._keys.length--, this._values.length--, za(E, this._cacheKey) && (this._cacheKey = p, this._cacheIndex = -2), !0
                        }
                        return !1
                    }, Z.prototype.clear = function () {
                        this._keys.length = 0, this._values.length = 0, this._cacheKey = p, this._cacheIndex = -2
                    }, Z.prototype.keys = function () {
                        return new y(this._keys, this._values, k)
                    }, Z.prototype.values = function () {
                        return new y(this._keys, this._values, me)
                    }, Z.prototype.entries = function () {
                        return new y(this._keys, this._values, De)
                    }, Z.prototype["@@iterator"] = function () {
                        return this.entries()
                    }, Z.prototype[s] = function () {
                        return this.entries()
                    }, Z.prototype._find = function (E, I) {
                        if (!za(this._cacheKey, E)) {
                            this._cacheIndex = -1;
                            for (var T = 0; T < this._keys.length; T++) if (za(this._keys[T], E)) {
                                this._cacheIndex = T;
                                break
                            }
                        }
                        return this._cacheIndex < 0 && I && (this._cacheIndex = this._keys.length, this._keys.push(E), this._values.push(void 0)), this._cacheIndex
                    }, Z
                }();
                return w;

                function k(Z, E) {
                    return Z
                }

                function me(Z, E) {
                    return E
                }

                function De(Z, E) {
                    return [Z, E]
                }
            }

            function _v() {
                var p = function () {
                    function g() {
                        this._map = new h
                    }

                    return Object.defineProperty(g.prototype, "size", {
                        get: function () {
                            return this._map.size
                        }, enumerable: !0, configurable: !0
                    }), g.prototype.has = function (y) {
                        return this._map.has(y)
                    }, g.prototype.add = function (y) {
                        return this._map.set(y, y), this
                    }, g.prototype.delete = function (y) {
                        return this._map.delete(y)
                    }, g.prototype.clear = function () {
                        this._map.clear()
                    }, g.prototype.keys = function () {
                        return this._map.keys()
                    }, g.prototype.values = function () {
                        return this._map.keys()
                    }, g.prototype.entries = function () {
                        return this._map.entries()
                    }, g.prototype["@@iterator"] = function () {
                        return this.keys()
                    }, g.prototype[s] = function () {
                        return this.keys()
                    }, g
                }();
                return p
            }

            function Sv() {
                var p = 16, g = u.create(), y = w();
                return function () {
                    function E() {
                        this._key = w()
                    }

                    return E.prototype.has = function (I) {
                        var T = k(I, !1);
                        return T !== void 0 ? u.has(T, this._key) : !1
                    }, E.prototype.get = function (I) {
                        var T = k(I, !1);
                        return T !== void 0 ? u.get(T, this._key) : void 0
                    }, E.prototype.set = function (I, T) {
                        var x = k(I, !0);
                        return x[this._key] = T, this
                    }, E.prototype.delete = function (I) {
                        var T = k(I, !1);
                        return T !== void 0 ? delete T[this._key] : !1
                    }, E.prototype.clear = function () {
                        this._key = w()
                    }, E
                }();

                function w() {
                    var E;
                    do E = "@@WeakMap@@" + Z(); while (u.has(g, E));
                    return g[E] = !0, E
                }

                function k(E, I) {
                    if (!r.call(E, y)) {
                        if (!I) return;
                        Object.defineProperty(E, y, {value: u.create()})
                    }
                    return E[y]
                }

                function me(E, I) {
                    for (var T = 0; T < I; ++T) E[T] = Math.random() * 255 | 0;
                    return E
                }

                function De(E) {
                    if (typeof Uint8Array == "function") {
                        var I = new Uint8Array(E);
                        return typeof crypto < "u" ? crypto.getRandomValues(I) : typeof msCrypto < "u" ? msCrypto.getRandomValues(I) : me(I, E), I
                    }
                    return me(new Array(E), E)
                }

                function Z() {
                    var E = De(p);
                    E[6] = E[6] & 79 | 64, E[8] = E[8] & 191 | 128;
                    for (var I = "", T = 0; T < p; ++T) {
                        var x = E[T];
                        (T === 4 || T === 6 || T === 8) && (I += "-"), x < 16 && (I += "0"), I += x.toString(16).toLowerCase()
                    }
                    return I
                }
            }

            function Ga(p) {
                return p.__ = void 0, delete p.__, p
            }
        })
    })(Py || (Py = {}))
});
var fo = cf(wd => {
    "use strict";
    Object.defineProperty(wd, "__esModule", {value: !0});
    wd.RemoveOnServe = E1;
    Fy();

    function E1() {
        return (t, e, n) => {
            Reflect.defineMetadata("remove-on-serve", !0, t, e)
        }
    }
});

function Fv(t, e) {
    return Object.is(t, e)
}

var Ee = null, _o = !1, So = 1, Qa = Symbol("SIGNAL");

function Y(t) {
    let e = Ee;
    return Ee = t, e
}

function lf() {
    return Ee
}

var To = {
    version: 0,
    lastCleanEpoch: 0,
    dirty: !1,
    producerNode: void 0,
    producerLastReadVersion: void 0,
    producerIndexOfThis: void 0,
    nextProducerIndex: 0,
    liveConsumerNode: void 0,
    liveConsumerIndexOfThis: void 0,
    consumerAllowSignalWrites: !1,
    consumerIsAlwaysLive: !1,
    producerMustRecompute: () => !1,
    producerRecomputeValue: () => {
    },
    consumerMarkedDirty: () => {
    },
    consumerOnSignalRead: () => {
    }
};

function uf(t) {
    if (_o) throw new Error("");
    if (Ee === null) return;
    Ee.consumerOnSignalRead(t);
    let e = Ee.nextProducerIndex++;
    if (xo(Ee), e < Ee.producerNode.length && Ee.producerNode[e] !== t && si(Ee)) {
        let n = Ee.producerNode[e];
        Mo(n, Ee.producerIndexOfThis[e])
    }
    Ee.producerNode[e] !== t && (Ee.producerNode[e] = t, Ee.producerIndexOfThis[e] = si(Ee) ? hf(t, Ee, e) : 0), Ee.producerLastReadVersion[e] = t.version
}

function Lv() {
    So++
}

function jv(t) {
    if (!(si(t) && !t.dirty) && !(!t.dirty && t.lastCleanEpoch === So)) {
        if (!t.producerMustRecompute(t) && !Ya(t)) {
            t.dirty = !1, t.lastCleanEpoch = So;
            return
        }
        t.producerRecomputeValue(t), t.dirty = !1, t.lastCleanEpoch = So
    }
}

function df(t) {
    if (t.liveConsumerNode === void 0) return;
    let e = _o;
    _o = !0;
    try {
        for (let n of t.liveConsumerNode) n.dirty || Bv(n)
    } finally {
        _o = e
    }
}

function Vv() {
    return Ee?.consumerAllowSignalWrites !== !1
}

function Bv(t) {
    t.dirty = !0, df(t), t.consumerMarkedDirty?.(t)
}

function Ka(t) {
    return t && (t.nextProducerIndex = 0), Y(t)
}

function ff(t, e) {
    if (Y(e), !(!t || t.producerNode === void 0 || t.producerIndexOfThis === void 0 || t.producerLastReadVersion === void 0)) {
        if (si(t)) for (let n = t.nextProducerIndex; n < t.producerNode.length; n++) Mo(t.producerNode[n], t.producerIndexOfThis[n]);
        for (; t.producerNode.length > t.nextProducerIndex;) t.producerNode.pop(), t.producerLastReadVersion.pop(), t.producerIndexOfThis.pop()
    }
}

function Ya(t) {
    xo(t);
    for (let e = 0; e < t.producerNode.length; e++) {
        let n = t.producerNode[e], r = t.producerLastReadVersion[e];
        if (r !== n.version || (jv(n), r !== n.version)) return !0
    }
    return !1
}

function Ja(t) {
    if (xo(t), si(t)) for (let e = 0; e < t.producerNode.length; e++) Mo(t.producerNode[e], t.producerIndexOfThis[e]);
    t.producerNode.length = t.producerLastReadVersion.length = t.producerIndexOfThis.length = 0, t.liveConsumerNode && (t.liveConsumerNode.length = t.liveConsumerIndexOfThis.length = 0)
}

function hf(t, e, n) {
    if (pf(t), t.liveConsumerNode.length === 0 && gf(t)) for (let r = 0; r < t.producerNode.length; r++) t.producerIndexOfThis[r] = hf(t.producerNode[r], t, r);
    return t.liveConsumerIndexOfThis.push(n), t.liveConsumerNode.push(e) - 1
}

function Mo(t, e) {
    if (pf(t), t.liveConsumerNode.length === 1 && gf(t)) for (let r = 0; r < t.producerNode.length; r++) Mo(t.producerNode[r], t.producerIndexOfThis[r]);
    let n = t.liveConsumerNode.length - 1;
    if (t.liveConsumerNode[e] = t.liveConsumerNode[n], t.liveConsumerIndexOfThis[e] = t.liveConsumerIndexOfThis[n], t.liveConsumerNode.length--, t.liveConsumerIndexOfThis.length--, e < t.liveConsumerNode.length) {
        let r = t.liveConsumerIndexOfThis[e], i = t.liveConsumerNode[e];
        xo(i), i.producerIndexOfThis[r] = e
    }
}

function si(t) {
    return t.consumerIsAlwaysLive || (t?.liveConsumerNode?.length ?? 0) > 0
}

function xo(t) {
    t.producerNode ??= [], t.producerIndexOfThis ??= [], t.producerLastReadVersion ??= []
}

function pf(t) {
    t.liveConsumerNode ??= [], t.liveConsumerIndexOfThis ??= []
}

function gf(t) {
    return t.producerNode !== void 0
}

function Uv() {
    throw new Error
}

var mf = Uv;

function $v() {
    mf()
}

function yf(t) {
    mf = t
}

var Hv = null;

function vf(t, e) {
    Vv() || $v(), t.equal(t.value, e) || (t.value = e, zv(t))
}

var bf = fe(S({}, To), {equal: Fv, value: void 0});

function zv(t) {
    t.version++, Lv(), df(t), Hv?.()
}

function V(t) {
    return typeof t == "function"
}

function ir(t) {
    let n = t(r => {
        Error.call(r), r.stack = new Error().stack
    });
    return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n
}

var Ao = ir(t => function (n) {
    t(this), this.message = n ? `${n.length} errors occurred during unsubscription:
${n.map((r, i) => `${i + 1}) ${r.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = n
});

function ai(t, e) {
    if (t) {
        let n = t.indexOf(e);
        0 <= n && t.splice(n, 1)
    }
}

var we = class t {
    constructor(e) {
        this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
    }

    unsubscribe() {
        let e;
        if (!this.closed) {
            this.closed = !0;
            let {_parentage: n} = this;
            if (n) if (this._parentage = null, Array.isArray(n)) for (let o of n) o.remove(this); else n.remove(this);
            let {initialTeardown: r} = this;
            if (V(r)) try {
                r()
            } catch (o) {
                e = o instanceof Ao ? o.errors : [o]
            }
            let {_finalizers: i} = this;
            if (i) {
                this._finalizers = null;
                for (let o of i) try {
                    wf(o)
                } catch (s) {
                    e = e ?? [], s instanceof Ao ? e = [...e, ...s.errors] : e.push(s)
                }
            }
            if (e) throw new Ao(e)
        }
    }

    add(e) {
        var n;
        if (e && e !== this) if (this.closed) wf(e); else {
            if (e instanceof t) {
                if (e.closed || e._hasParent(this)) return;
                e._addParent(this)
            }
            (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e)
        }
    }

    _hasParent(e) {
        let {_parentage: n} = this;
        return n === e || Array.isArray(n) && n.includes(e)
    }

    _addParent(e) {
        let {_parentage: n} = this;
        this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e
    }

    _removeParent(e) {
        let {_parentage: n} = this;
        n === e ? this._parentage = null : Array.isArray(n) && ai(n, e)
    }

    remove(e) {
        let {_finalizers: n} = this;
        n && ai(n, e), e instanceof t && e._removeParent(this)
    }
};
we.EMPTY = (() => {
    let t = new we;
    return t.closed = !0, t
})();
var Xa = we.EMPTY;

function No(t) {
    return t instanceof we || t && "closed" in t && V(t.remove) && V(t.add) && V(t.unsubscribe)
}

function wf(t) {
    V(t) ? t() : t.unsubscribe()
}

var bt = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
};
var or = {
    setTimeout(t, e, ...n) {
        let {delegate: r} = or;
        return r?.setTimeout ? r.setTimeout(t, e, ...n) : setTimeout(t, e, ...n)
    }, clearTimeout(t) {
        let {delegate: e} = or;
        return (e?.clearTimeout || clearTimeout)(t)
    }, delegate: void 0
};

function ko(t) {
    or.setTimeout(() => {
        let {onUnhandledError: e} = bt;
        if (e) e(t); else throw t
    })
}

function ci() {
}

var Df = ec("C", void 0, void 0);

function Ef(t) {
    return ec("E", void 0, t)
}

function If(t) {
    return ec("N", t, void 0)
}

function ec(t, e, n) {
    return {kind: t, value: e, error: n}
}

var Mn = null;

function sr(t) {
    if (bt.useDeprecatedSynchronousErrorHandling) {
        let e = !Mn;
        if (e && (Mn = {errorThrown: !1, error: null}), t(), e) {
            let {errorThrown: n, error: r} = Mn;
            if (Mn = null, n) throw r
        }
    } else t()
}

function Cf(t) {
    bt.useDeprecatedSynchronousErrorHandling && Mn && (Mn.errorThrown = !0, Mn.error = t)
}

var xn = class extends we {
    constructor(e) {
        super(), this.isStopped = !1, e ? (this.destination = e, No(e) && e.add(this)) : this.destination = qv
    }

    static create(e, n, r) {
        return new ar(e, n, r)
    }

    next(e) {
        this.isStopped ? nc(If(e), this) : this._next(e)
    }

    error(e) {
        this.isStopped ? nc(Ef(e), this) : (this.isStopped = !0, this._error(e))
    }

    complete() {
        this.isStopped ? nc(Df, this) : (this.isStopped = !0, this._complete())
    }

    unsubscribe() {
        this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null)
    }

    _next(e) {
        this.destination.next(e)
    }

    _error(e) {
        try {
            this.destination.error(e)
        } finally {
            this.unsubscribe()
        }
    }

    _complete() {
        try {
            this.destination.complete()
        } finally {
            this.unsubscribe()
        }
    }
}, Wv = Function.prototype.bind;

function tc(t, e) {
    return Wv.call(t, e)
}

var rc = class {
    constructor(e) {
        this.partialObserver = e
    }

    next(e) {
        let {partialObserver: n} = this;
        if (n.next) try {
            n.next(e)
        } catch (r) {
            Ro(r)
        }
    }

    error(e) {
        let {partialObserver: n} = this;
        if (n.error) try {
            n.error(e)
        } catch (r) {
            Ro(r)
        } else Ro(e)
    }

    complete() {
        let {partialObserver: e} = this;
        if (e.complete) try {
            e.complete()
        } catch (n) {
            Ro(n)
        }
    }
}, ar = class extends xn {
    constructor(e, n, r) {
        super();
        let i;
        if (V(e) || !e) i = {next: e ?? void 0, error: n ?? void 0, complete: r ?? void 0}; else {
            let o;
            this && bt.useDeprecatedNextContext ? (o = Object.create(e), o.unsubscribe = () => this.unsubscribe(), i = {
                next: e.next && tc(e.next, o),
                error: e.error && tc(e.error, o),
                complete: e.complete && tc(e.complete, o)
            }) : i = e
        }
        this.destination = new rc(i)
    }
};

function Ro(t) {
    bt.useDeprecatedSynchronousErrorHandling ? Cf(t) : ko(t)
}

function Gv(t) {
    throw t
}

function nc(t, e) {
    let {onStoppedNotification: n} = bt;
    n && or.setTimeout(() => n(t, e))
}

var qv = {closed: !0, next: ci, error: Gv, complete: ci};
var cr = typeof Symbol == "function" && Symbol.observable || "@@observable";

function Ke(t) {
    return t
}

function ic(...t) {
    return oc(t)
}

function oc(t) {
    return t.length === 0 ? Ke : t.length === 1 ? t[0] : function (n) {
        return t.reduce((r, i) => i(r), n)
    }
}

var re = (() => {
    class t {
        constructor(n) {
            n && (this._subscribe = n)
        }

        lift(n) {
            let r = new t;
            return r.source = this, r.operator = n, r
        }

        subscribe(n, r, i) {
            let o = Qv(n) ? n : new ar(n, r, i);
            return sr(() => {
                let {operator: s, source: a} = this;
                o.add(s ? s.call(o, a) : a ? this._subscribe(o) : this._trySubscribe(o))
            }), o
        }

        _trySubscribe(n) {
            try {
                return this._subscribe(n)
            } catch (r) {
                n.error(r)
            }
        }

        forEach(n, r) {
            return r = _f(r), new r((i, o) => {
                let s = new ar({
                    next: a => {
                        try {
                            n(a)
                        } catch (c) {
                            o(c), s.unsubscribe()
                        }
                    }, error: o, complete: i
                });
                this.subscribe(s)
            })
        }

        _subscribe(n) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)
        }

        [cr]() {
            return this
        }

        pipe(...n) {
            return oc(n)(this)
        }

        toPromise(n) {
            return n = _f(n), new n((r, i) => {
                let o;
                this.subscribe(s => o = s, s => i(s), () => r(o))
            })
        }
    }

    return t.create = e => new t(e), t
})();

function _f(t) {
    var e;
    return (e = t ?? bt.Promise) !== null && e !== void 0 ? e : Promise
}

function Zv(t) {
    return t && V(t.next) && V(t.error) && V(t.complete)
}

function Qv(t) {
    return t && t instanceof xn || Zv(t) && No(t)
}

function sc(t) {
    return V(t?.lift)
}

function J(t) {
    return e => {
        if (sc(e)) return e.lift(function (n) {
            try {
                return t(n, this)
            } catch (r) {
                this.error(r)
            }
        });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}

function X(t, e, n, r, i) {
    return new ac(t, e, n, r, i)
}

var ac = class extends xn {
    constructor(e, n, r, i, o, s) {
        super(e), this.onFinalize = o, this.shouldUnsubscribe = s, this._next = n ? function (a) {
            try {
                n(a)
            } catch (c) {
                e.error(c)
            }
        } : super._next, this._error = i ? function (a) {
            try {
                i(a)
            } catch (c) {
                e.error(c)
            } finally {
                this.unsubscribe()
            }
        } : super._error, this._complete = r ? function () {
            try {
                r()
            } catch (a) {
                e.error(a)
            } finally {
                this.unsubscribe()
            }
        } : super._complete
    }

    unsubscribe() {
        var e;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            let {closed: n} = this;
            super.unsubscribe(), !n && ((e = this.onFinalize) === null || e === void 0 || e.call(this))
        }
    }
};

function lr() {
    return J((t, e) => {
        let n = null;
        t._refCount++;
        let r = X(e, void 0, void 0, void 0, () => {
            if (!t || t._refCount <= 0 || 0 < --t._refCount) {
                n = null;
                return
            }
            let i = t._connection, o = n;
            n = null, i && (!o || i === o) && i.unsubscribe(), e.unsubscribe()
        });
        t.subscribe(r), r.closed || (n = t.connect())
    })
}

var ur = class extends re {
    constructor(e, n) {
        super(), this.source = e, this.subjectFactory = n, this._subject = null, this._refCount = 0, this._connection = null, sc(e) && (this.lift = e.lift)
    }

    _subscribe(e) {
        return this.getSubject().subscribe(e)
    }

    getSubject() {
        let e = this._subject;
        return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject
    }

    _teardown() {
        this._refCount = 0;
        let {_connection: e} = this;
        this._subject = this._connection = null, e?.unsubscribe()
    }

    connect() {
        let e = this._connection;
        if (!e) {
            e = this._connection = new we;
            let n = this.getSubject();
            e.add(this.source.subscribe(X(n, void 0, () => {
                this._teardown(), n.complete()
            }, r => {
                this._teardown(), n.error(r)
            }, () => this._teardown()))), e.closed && (this._connection = null, e = we.EMPTY)
        }
        return e
    }

    refCount() {
        return lr()(this)
    }
};
var Sf = ir(t => function () {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
});
var Pe = (() => {
    class t extends re {
        constructor() {
            super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null
        }

        lift(n) {
            let r = new Oo(this, this);
            return r.operator = n, r
        }

        _throwIfClosed() {
            if (this.closed) throw new Sf
        }

        next(n) {
            sr(() => {
                if (this._throwIfClosed(), !this.isStopped) {
                    this.currentObservers || (this.currentObservers = Array.from(this.observers));
                    for (let r of this.currentObservers) r.next(n)
                }
            })
        }

        error(n) {
            sr(() => {
                if (this._throwIfClosed(), !this.isStopped) {
                    this.hasError = this.isStopped = !0, this.thrownError = n;
                    let {observers: r} = this;
                    for (; r.length;) r.shift().error(n)
                }
            })
        }

        complete() {
            sr(() => {
                if (this._throwIfClosed(), !this.isStopped) {
                    this.isStopped = !0;
                    let {observers: n} = this;
                    for (; n.length;) n.shift().complete()
                }
            })
        }

        unsubscribe() {
            this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
        }

        get observed() {
            var n;
            return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0
        }

        _trySubscribe(n) {
            return this._throwIfClosed(), super._trySubscribe(n)
        }

        _subscribe(n) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n)
        }

        _innerSubscribe(n) {
            let {hasError: r, isStopped: i, observers: o} = this;
            return r || i ? Xa : (this.currentObservers = null, o.push(n), new we(() => {
                this.currentObservers = null, ai(o, n)
            }))
        }

        _checkFinalizedStatuses(n) {
            let {hasError: r, thrownError: i, isStopped: o} = this;
            r ? n.error(i) : o && n.complete()
        }

        asObservable() {
            let n = new re;
            return n.source = this, n
        }
    }

    return t.create = (e, n) => new Oo(e, n), t
})(), Oo = class extends Pe {
    constructor(e, n) {
        super(), this.destination = e, this.source = n
    }

    next(e) {
        var n, r;
        (r = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || r === void 0 || r.call(n, e)
    }

    error(e) {
        var n, r;
        (r = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || r === void 0 || r.call(n, e)
    }

    complete() {
        var e, n;
        (n = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || n === void 0 || n.call(e)
    }

    _subscribe(e) {
        var n, r;
        return (r = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e)) !== null && r !== void 0 ? r : Xa
    }
};
var Ne = class extends Pe {
    constructor(e) {
        super(), this._value = e
    }

    get value() {
        return this.getValue()
    }

    _subscribe(e) {
        let n = super._subscribe(e);
        return !n.closed && e.next(this._value), n
    }

    getValue() {
        let {hasError: e, thrownError: n, _value: r} = this;
        if (e) throw n;
        return this._throwIfClosed(), r
    }

    next(e) {
        super.next(this._value = e)
    }
};
var Ye = new re(t => t.complete());

function Tf(t) {
    return t && V(t.schedule)
}

function Mf(t) {
    return t[t.length - 1]
}

function xf(t) {
    return V(Mf(t)) ? t.pop() : void 0
}

function un(t) {
    return Tf(Mf(t)) ? t.pop() : void 0
}

function Ht(t, e, n, r) {
    var i = arguments.length, o = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r, s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(t, e, n, r); else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(e, n, o) : s(e, n)) || o);
    return i > 3 && o && Object.defineProperty(e, n, o), o
}

function Nf(t, e, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function (s) {
            s(o)
        })
    }

    return new (n || (n = Promise))(function (o, s) {
        function a(u) {
            try {
                l(r.next(u))
            } catch (d) {
                s(d)
            }
        }

        function c(u) {
            try {
                l(r.throw(u))
            } catch (d) {
                s(d)
            }
        }

        function l(u) {
            u.done ? o(u.value) : i(u.value).then(a, c)
        }

        l((r = r.apply(t, e || [])).next())
    })
}

function Af(t) {
    var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
    if (n) return n.call(t);
    if (t && typeof t.length == "number") return {
        next: function () {
            return t && r >= t.length && (t = void 0), {value: t && t[r++], done: !t}
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function An(t) {
    return this instanceof An ? (this.v = t, this) : new An(t)
}

function kf(t, e, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(t, e || []), i, o = [];
    return i = {}, a("next"), a("throw"), a("return", s), i[Symbol.asyncIterator] = function () {
        return this
    }, i;

    function s(f) {
        return function (m) {
            return Promise.resolve(m).then(f, d)
        }
    }

    function a(f, m) {
        r[f] && (i[f] = function (v) {
            return new Promise(function (C, N) {
                o.push([f, v, C, N]) > 1 || c(f, v)
            })
        }, m && (i[f] = m(i[f])))
    }

    function c(f, m) {
        try {
            l(r[f](m))
        } catch (v) {
            h(o[0][3], v)
        }
    }

    function l(f) {
        f.value instanceof An ? Promise.resolve(f.value.v).then(u, d) : h(o[0][2], f)
    }

    function u(f) {
        c("next", f)
    }

    function d(f) {
        c("throw", f)
    }

    function h(f, m) {
        f(m), o.shift(), o.length && c(o[0][0], o[0][1])
    }
}

function Rf(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = t[Symbol.asyncIterator], n;
    return e ? e.call(t) : (t = typeof Af == "function" ? Af(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function () {
        return this
    }, n);

    function r(o) {
        n[o] = t[o] && function (s) {
            return new Promise(function (a, c) {
                s = t[o](s), i(a, c, s.done, s.value)
            })
        }
    }

    function i(o, s, a, c) {
        Promise.resolve(c).then(function (l) {
            o({value: l, done: a})
        }, s)
    }
}

var Po = t => t && typeof t.length == "number" && typeof t != "function";

function Fo(t) {
    return V(t?.then)
}

function Lo(t) {
    return V(t[cr])
}

function jo(t) {
    return Symbol.asyncIterator && V(t?.[Symbol.asyncIterator])
}

function Vo(t) {
    return new TypeError(`You provided ${t !== null && typeof t == "object" ? "an invalid object" : `'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
}

function Kv() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}

var Bo = Kv();

function Uo(t) {
    return V(t?.[Bo])
}

function $o(t) {
    return kf(this, arguments, function* () {
        let n = t.getReader();
        try {
            for (; ;) {
                let {value: r, done: i} = yield An(n.read());
                if (i) return yield An(void 0);
                yield yield An(r)
            }
        } finally {
            n.releaseLock()
        }
    })
}

function Ho(t) {
    return V(t?.getReader)
}

function Te(t) {
    if (t instanceof re) return t;
    if (t != null) {
        if (Lo(t)) return Yv(t);
        if (Po(t)) return Jv(t);
        if (Fo(t)) return Xv(t);
        if (jo(t)) return Of(t);
        if (Uo(t)) return e0(t);
        if (Ho(t)) return t0(t)
    }
    throw Vo(t)
}

function Yv(t) {
    return new re(e => {
        let n = t[cr]();
        if (V(n.subscribe)) return n.subscribe(e);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    })
}

function Jv(t) {
    return new re(e => {
        for (let n = 0; n < t.length && !e.closed; n++) e.next(t[n]);
        e.complete()
    })
}

function Xv(t) {
    return new re(e => {
        t.then(n => {
            e.closed || (e.next(n), e.complete())
        }, n => e.error(n)).then(null, ko)
    })
}

function e0(t) {
    return new re(e => {
        for (let n of t) if (e.next(n), e.closed) return;
        e.complete()
    })
}

function Of(t) {
    return new re(e => {
        n0(t, e).catch(n => e.error(n))
    })
}

function t0(t) {
    return Of($o(t))
}

function n0(t, e) {
    var n, r, i, o;
    return Nf(this, void 0, void 0, function* () {
        try {
            for (n = Rf(t); r = yield n.next(), !r.done;) {
                let s = r.value;
                if (e.next(s), e.closed) return
            }
        } catch (s) {
            i = {error: s}
        } finally {
            try {
                r && !r.done && (o = n.return) && (yield o.call(n))
            } finally {
                if (i) throw i.error
            }
        }
        e.complete()
    })
}

function ze(t, e, n, r = 0, i = !1) {
    let o = e.schedule(function () {
        n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe()
    }, r);
    if (t.add(o), !i) return o
}

function zo(t, e = 0) {
    return J((n, r) => {
        n.subscribe(X(r, i => ze(r, t, () => r.next(i), e), () => ze(r, t, () => r.complete(), e), i => ze(r, t, () => r.error(i), e)))
    })
}

function Wo(t, e = 0) {
    return J((n, r) => {
        r.add(t.schedule(() => n.subscribe(r), e))
    })
}

function Pf(t, e) {
    return Te(t).pipe(Wo(e), zo(e))
}

function Ff(t, e) {
    return Te(t).pipe(Wo(e), zo(e))
}

function Lf(t, e) {
    return new re(n => {
        let r = 0;
        return e.schedule(function () {
            r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule())
        })
    })
}

function jf(t, e) {
    return new re(n => {
        let r;
        return ze(n, e, () => {
            r = t[Bo](), ze(n, e, () => {
                let i, o;
                try {
                    ({value: i, done: o} = r.next())
                } catch (s) {
                    n.error(s);
                    return
                }
                o ? n.complete() : n.next(i)
            }, 0, !0)
        }), () => V(r?.return) && r.return()
    })
}

function Go(t, e) {
    if (!t) throw new Error("Iterable cannot be null");
    return new re(n => {
        ze(n, e, () => {
            let r = t[Symbol.asyncIterator]();
            ze(n, e, () => {
                r.next().then(i => {
                    i.done ? n.complete() : n.next(i.value)
                })
            }, 0, !0)
        })
    })
}

function Vf(t, e) {
    return Go($o(t), e)
}

function Bf(t, e) {
    if (t != null) {
        if (Lo(t)) return Pf(t, e);
        if (Po(t)) return Lf(t, e);
        if (Fo(t)) return Ff(t, e);
        if (jo(t)) return Go(t, e);
        if (Uo(t)) return jf(t, e);
        if (Ho(t)) return Vf(t, e)
    }
    throw Vo(t)
}

function ve(t, e) {
    return e ? Bf(t, e) : Te(t)
}

function P(...t) {
    let e = un(t);
    return ve(t, e)
}

function dr(t, e) {
    let n = V(t) ? t : () => t, r = i => i.error(n());
    return new re(e ? i => e.schedule(r, 0, i) : r)
}

function cc(t) {
    return !!t && (t instanceof re || V(t.lift) && V(t.subscribe))
}

var zt = ir(t => function () {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence"
});

function W(t, e) {
    return J((n, r) => {
        let i = 0;
        n.subscribe(X(r, o => {
            r.next(t.call(e, o, i++))
        }))
    })
}

var {isArray: r0} = Array;

function i0(t, e) {
    return r0(e) ? t(...e) : t(e)
}

function Uf(t) {
    return W(e => i0(t, e))
}

var {isArray: o0} = Array, {getPrototypeOf: s0, prototype: a0, keys: c0} = Object;

function $f(t) {
    if (t.length === 1) {
        let e = t[0];
        if (o0(e)) return {args: e, keys: null};
        if (l0(e)) {
            let n = c0(e);
            return {args: n.map(r => e[r]), keys: n}
        }
    }
    return {args: t, keys: null}
}

function l0(t) {
    return t && typeof t == "object" && s0(t) === a0
}

function Hf(t, e) {
    return t.reduce((n, r, i) => (n[r] = e[i], n), {})
}

function qo(...t) {
    let e = un(t), n = xf(t), {args: r, keys: i} = $f(t);
    if (r.length === 0) return ve([], e);
    let o = new re(u0(r, e, i ? s => Hf(i, s) : Ke));
    return n ? o.pipe(Uf(n)) : o
}

function u0(t, e, n = Ke) {
    return r => {
        zf(e, () => {
            let {length: i} = t, o = new Array(i), s = i, a = i;
            for (let c = 0; c < i; c++) zf(e, () => {
                let l = ve(t[c], e), u = !1;
                l.subscribe(X(r, d => {
                    o[c] = d, u || (u = !0, a--), a || r.next(n(o.slice()))
                }, () => {
                    --s || r.complete()
                }))
            }, r)
        }, r)
    }
}

function zf(t, e, n) {
    t ? ze(n, t, e) : e()
}

function Wf(t, e, n, r, i, o, s, a) {
    let c = [], l = 0, u = 0, d = !1, h = () => {
        d && !c.length && !l && e.complete()
    }, f = v => l < r ? m(v) : c.push(v), m = v => {
        o && e.next(v), l++;
        let C = !1;
        Te(n(v, u++)).subscribe(X(e, N => {
            i?.(N), o ? f(N) : e.next(N)
        }, () => {
            C = !0
        }, void 0, () => {
            if (C) try {
                for (l--; c.length && l < r;) {
                    let N = c.shift();
                    s ? ze(e, s, () => m(N)) : m(N)
                }
                h()
            } catch (N) {
                e.error(N)
            }
        }))
    };
    return t.subscribe(X(e, f, () => {
        d = !0, h()
    })), () => {
        a?.()
    }
}

function Ie(t, e, n = 1 / 0) {
    return V(e) ? Ie((r, i) => W((o, s) => e(r, o, i, s))(Te(t(r, i))), n) : (typeof e == "number" && (n = e), J((r, i) => Wf(r, i, t, n)))
}

function fr(t = 1 / 0) {
    return Ie(Ke, t)
}

function Gf() {
    return fr(1)
}

function hr(...t) {
    return Gf()(ve(t, un(t)))
}

function Zo(t) {
    return new re(e => {
        Te(t()).subscribe(e)
    })
}

function at(t, e) {
    return J((n, r) => {
        let i = 0;
        n.subscribe(X(r, o => t.call(e, o, i++) && r.next(o)))
    })
}

function dn(t) {
    return J((e, n) => {
        let r = null, i = !1, o;
        r = e.subscribe(X(n, void 0, void 0, s => {
            o = Te(t(s, dn(t)(e))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = !0
        })), i && (r.unsubscribe(), r = null, o.subscribe(n))
    })
}

function qf(t, e, n, r, i) {
    return (o, s) => {
        let a = n, c = e, l = 0;
        o.subscribe(X(s, u => {
            let d = l++;
            c = a ? t(c, u, d) : (a = !0, u), r && s.next(c)
        }, i && (() => {
            a && s.next(c), s.complete()
        })))
    }
}

function Nn(t, e) {
    return V(e) ? Ie(t, e, 1) : Ie(t, 1)
}

function fn(t) {
    return J((e, n) => {
        let r = !1;
        e.subscribe(X(n, i => {
            r = !0, n.next(i)
        }, () => {
            r || n.next(t), n.complete()
        }))
    })
}

function Wt(t) {
    return t <= 0 ? () => Ye : J((e, n) => {
        let r = 0;
        e.subscribe(X(n, i => {
            ++r <= t && (n.next(i), t <= r && n.complete())
        }))
    })
}

function lc(t) {
    return W(() => t)
}

function Qo(t = d0) {
    return J((e, n) => {
        let r = !1;
        e.subscribe(X(n, i => {
            r = !0, n.next(i)
        }, () => r ? n.complete() : n.error(t())))
    })
}

function d0() {
    return new zt
}

function pr(t) {
    return J((e, n) => {
        try {
            e.subscribe(n)
        } finally {
            n.add(t)
        }
    })
}

function wt(t, e) {
    let n = arguments.length >= 2;
    return r => r.pipe(t ? at((i, o) => t(i, o, r)) : Ke, Wt(1), n ? fn(e) : Qo(() => new zt))
}

function gr(t) {
    return t <= 0 ? () => Ye : J((e, n) => {
        let r = [];
        e.subscribe(X(n, i => {
            r.push(i), t < r.length && r.shift()
        }, () => {
            for (let i of r) n.next(i);
            n.complete()
        }, void 0, () => {
            r = null
        }))
    })
}

function uc(t, e) {
    let n = arguments.length >= 2;
    return r => r.pipe(t ? at((i, o) => t(i, o, r)) : Ke, gr(1), n ? fn(e) : Qo(() => new zt))
}

function dc(t, e) {
    return J(qf(t, e, arguments.length >= 2, !0))
}

function fc(...t) {
    let e = un(t);
    return J((n, r) => {
        (e ? hr(t, n, e) : hr(t, n)).subscribe(r)
    })
}

function ct(t, e) {
    return J((n, r) => {
        let i = null, o = 0, s = !1, a = () => s && !i && r.complete();
        n.subscribe(X(r, c => {
            i?.unsubscribe();
            let l = 0, u = o++;
            Te(t(c, u)).subscribe(i = X(r, d => r.next(e ? e(c, d, u, l++) : d), () => {
                i = null, a()
            }))
        }, () => {
            s = !0, a()
        }))
    })
}

function hc(t) {
    return J((e, n) => {
        Te(t).subscribe(X(n, () => n.complete(), ci)), !n.closed && e.subscribe(n)
    })
}

function Ce(t, e, n) {
    let r = V(t) || e || n ? {next: t, error: e, complete: n} : t;
    return r ? J((i, o) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        i.subscribe(X(o, c => {
            var l;
            (l = r.next) === null || l === void 0 || l.call(r, c), o.next(c)
        }, () => {
            var c;
            a = !1, (c = r.complete) === null || c === void 0 || c.call(r), o.complete()
        }, c => {
            var l;
            a = !1, (l = r.error) === null || l === void 0 || l.call(r, c), o.error(c)
        }, () => {
            var c, l;
            a && ((c = r.unsubscribe) === null || c === void 0 || c.call(r)), (l = r.finalize) === null || l === void 0 || l.call(r)
        }))
    }) : Ke
}

var Oh = "https://g.co/ng/security#xss", D = class extends Error {
    constructor(e, n) {
        super(As(e, n)), this.code = e
    }
};

function As(t, e) {
    return `${`NG0${Math.abs(t)}`}${e ? ": " + e : ""}`
}

var Ph = Symbol("InputSignalNode#UNSET"), f0 = fe(S({}, bf), {
    transformFn: void 0, applyValueToInputSignal(t, e) {
        vf(t, e)
    }
});

function Fh(t, e) {
    let n = Object.create(f0);
    n.value = t, n.transformFn = e?.transform;

    function r() {
        if (uf(n), n.value === Ph) throw new D(-950, !1);
        return n.value
    }

    return r[Qa] = n, r
}

function El(t) {
    return {toString: t}.toString()
}

var ui = globalThis;

function oe(t) {
    for (let e in t) if (t[e] === oe) return e;
    throw Error("Could not find renamed property on target object.")
}

function We(t) {
    if (typeof t == "string") return t;
    if (Array.isArray(t)) return "[" + t.map(We).join(", ") + "]";
    if (t == null) return "" + t;
    if (t.overriddenName) return `${t.overriddenName}`;
    if (t.name) return `${t.name}`;
    let e = t.toString();
    if (e == null) return "" + e;
    let n = e.indexOf(`
`);
    return n === -1 ? e : e.substring(0, n)
}

function Zf(t, e) {
    return t == null || t === "" ? e === null ? "" : e : e == null || e === "" ? t : t + " " + e
}

var h0 = oe({__forward_ref__: oe});

function Lh(t) {
    return t.__forward_ref__ = Lh, t.toString = function () {
        return We(this())
    }, t
}

function ut(t) {
    return jh(t) ? t() : t
}

function jh(t) {
    return typeof t == "function" && t.hasOwnProperty(h0) && t.__forward_ref__ === Lh
}

function O(t) {
    return {token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0}
}

function Ns(t) {
    return Qf(t, Bh) || Qf(t, Uh)
}

function Vh(t) {
    return Ns(t) !== null
}

function Qf(t, e) {
    return t.hasOwnProperty(e) ? t[e] : null
}

function p0(t) {
    let e = t && (t[Bh] || t[Uh]);
    return e || null
}

function Kf(t) {
    return t && (t.hasOwnProperty(Yf) || t.hasOwnProperty(g0)) ? t[Yf] : null
}

var Bh = oe({\u0275prov: oe}), Yf = oe({\u0275inj: oe}), Uh = oe({ngInjectableDef: oe}), g0 = oe({ngInjectorDef: oe}),
    L = class {
        constructor(e, n) {
            this._desc = e, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = O({
                token: this,
                providedIn: n.providedIn || "root",
                factory: n.factory
            }))
        }

        get multi() {
            return this
        }

        toString() {
            return `InjectionToken ${this._desc}`
        }
    };

function $h(t) {
    return t && !!t.\u0275providers
}

var m0 = oe({\u0275cmp: oe}), y0 = oe({\u0275dir: oe}), v0 = oe({\u0275pipe: oe}), b0 = oe({\u0275mod: oe}),
    as = oe({\u0275fac: oe}), li = oe({__NG_ELEMENT_ID__: oe}), Jf = oe({__NG_ENV_ID__: oe});

function ks(t) {
    return typeof t == "string" ? t : t == null ? "" : String(t)
}

function w0(t) {
    return typeof t == "function" ? t.name || t.toString() : typeof t == "object" && t != null && typeof t.type == "function" ? t.type.name || t.type.toString() : ks(t)
}

function D0(t, e) {
    let n = e ? `. Dependency path: ${e.join(" > ")} > ${t}` : "";
    throw new D(-200, t)
}

function Il(t, e) {
    throw new D(-201, !1)
}

var G = function (t) {
    return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
}(G || {}), xc;

function Hh() {
    return xc
}

function lt(t) {
    let e = xc;
    return xc = t, e
}

function zh(t, e, n) {
    let r = Ns(t);
    if (r && r.providedIn == "root") return r.value === void 0 ? r.value = r.factory() : r.value;
    if (n & G.Optional) return null;
    if (e !== void 0) return e;
    Il(t, "Injector")
}

var E0 = {}, di = E0, I0 = "__NG_DI_FLAG__", cs = "ngTempTokenPath", C0 = "ngTokenPath", _0 = /\n/gm, S0 = "\u0275",
    Xf = "__source", br;

function T0() {
    return br
}

function hn(t) {
    let e = br;
    return br = t, e
}

function M0(t, e = G.Default) {
    if (br === void 0) throw new D(-203, !1);
    return br === null ? zh(t, void 0, e) : br.get(t, e & G.Optional ? null : void 0, e)
}

function H(t, e = G.Default) {
    return (Hh() || M0)(ut(t), e)
}

function b(t, e = G.Default) {
    return H(t, Rs(e))
}

function Rs(t) {
    return typeof t > "u" || typeof t == "number" ? t : 0 | (t.optional && 8) | (t.host && 1) | (t.self && 2) | (t.skipSelf && 4)
}

function Ac(t) {
    let e = [];
    for (let n = 0; n < t.length; n++) {
        let r = ut(t[n]);
        if (Array.isArray(r)) {
            if (r.length === 0) throw new D(900, !1);
            let i, o = G.Default;
            for (let s = 0; s < r.length; s++) {
                let a = r[s], c = x0(a);
                typeof c == "number" ? c === -1 ? i = a.token : o |= c : i = a
            }
            e.push(H(i, o))
        } else e.push(H(r))
    }
    return e
}

function x0(t) {
    return t[I0]
}

function A0(t, e, n, r) {
    let i = t[cs];
    throw e[Xf] && i.unshift(e[Xf]), t.message = N0(`
` + t.message, i, n, r), t[C0] = i, t[cs] = null, t
}

function N0(t, e, n, r = null) {
    t = t && t.charAt(0) === `
` && t.charAt(1) == S0 ? t.slice(2) : t;
    let i = We(e);
    if (Array.isArray(e)) i = e.map(We).join(" -> "); else if (typeof e == "object") {
        let o = [];
        for (let s in e) if (e.hasOwnProperty(s)) {
            let a = e[s];
            o.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : We(a)))
        }
        i = `{${o.join(", ")}}`
    }
    return `${n}${r ? "(" + r + ")" : ""}[${i}]: ${t.replace(_0, `
  `)}`
}

function Dr(t, e) {
    let n = t.hasOwnProperty(as);
    return n ? t[as] : null
}

function k0(t, e, n) {
    if (t.length !== e.length) return !1;
    for (let r = 0; r < t.length; r++) {
        let i = t[r], o = e[r];
        if (n && (i = n(i), o = n(o)), o !== i) return !1
    }
    return !0
}

function R0(t) {
    return t.flat(Number.POSITIVE_INFINITY)
}

function Cl(t, e) {
    t.forEach(n => Array.isArray(n) ? Cl(n, e) : e(n))
}

function Wh(t, e, n) {
    e >= t.length ? t.push(n) : t.splice(e, 0, n)
}

function ls(t, e) {
    return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
}

function O0(t, e, n, r) {
    let i = t.length;
    if (i == e) t.push(n, r); else if (i === 1) t.push(r, t[0]), t[0] = n; else {
        for (i--, t.push(t[i - 1], t[i]); i > e;) {
            let o = i - 2;
            t[i] = t[o], i--
        }
        t[e] = n, t[e + 1] = r
    }
}

function P0(t, e, n) {
    let r = Si(t, e);
    return r >= 0 ? t[r | 1] = n : (r = ~r, O0(t, r, e, n)), r
}

function pc(t, e) {
    let n = Si(t, e);
    if (n >= 0) return t[n | 1]
}

function Si(t, e) {
    return F0(t, e, 1)
}

function F0(t, e, n) {
    let r = 0, i = t.length >> n;
    for (; i !== r;) {
        let o = r + (i - r >> 1), s = t[o << n];
        if (e === s) return o << n;
        s > e ? i = o : r = o + 1
    }
    return ~(i << n)
}

var fi = {}, gn = [], On = new L(""), Gh = new L("", -1), qh = new L(""), us = class {
    get(e, n = di) {
        if (n === di) {
            let r = new Error(`NullInjectorError: No provider for ${We(e)}!`);
            throw r.name = "NullInjectorError", r
        }
        return n
    }
}, Zh = function (t) {
    return t[t.OnPush = 0] = "OnPush", t[t.Default = 1] = "Default", t
}(Zh || {}), Rt = function (t) {
    return t[t.Emulated = 0] = "Emulated", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t
}(Rt || {}), mn = function (t) {
    return t[t.None = 0] = "None", t[t.SignalBased = 1] = "SignalBased", t[t.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", t
}(mn || {});

function L0(t, e, n) {
    let r = t.length;
    for (; ;) {
        let i = t.indexOf(e, n);
        if (i === -1) return i;
        if (i === 0 || t.charCodeAt(i - 1) <= 32) {
            let o = e.length;
            if (i + o === r || t.charCodeAt(i + o) <= 32) return i
        }
        n = i + 1
    }
}

function Nc(t, e, n) {
    let r = 0;
    for (; r < n.length;) {
        let i = n[r];
        if (typeof i == "number") {
            if (i !== 0) break;
            r++;
            let o = n[r++], s = n[r++], a = n[r++];
            t.setAttribute(e, s, a, o)
        } else {
            let o = i, s = n[++r];
            j0(o) ? t.setProperty(e, o, s) : t.setAttribute(e, o, s), r++
        }
    }
    return r
}

function Qh(t) {
    return t === 3 || t === 4 || t === 6
}

function j0(t) {
    return t.charCodeAt(0) === 64
}

function _l(t, e) {
    if (!(e === null || e.length === 0)) if (t === null || t.length === 0) t = e.slice(); else {
        let n = -1;
        for (let r = 0; r < e.length; r++) {
            let i = e[r];
            typeof i == "number" ? n = i : n === 0 || (n === -1 || n === 2 ? eh(t, n, i, null, e[++r]) : eh(t, n, i, null, null))
        }
    }
    return t
}

function eh(t, e, n, r, i) {
    let o = 0, s = t.length;
    if (e === -1) s = -1; else for (; o < t.length;) {
        let a = t[o++];
        if (typeof a == "number") {
            if (a === e) {
                s = -1;
                break
            } else if (a > e) {
                s = o - 1;
                break
            }
        }
    }
    for (; o < t.length;) {
        let a = t[o];
        if (typeof a == "number") break;
        if (a === n) {
            if (r === null) {
                i !== null && (t[o + 1] = i);
                return
            } else if (r === t[o + 1]) {
                t[o + 2] = i;
                return
            }
        }
        o++, r !== null && o++, i !== null && o++
    }
    s !== -1 && (t.splice(s, 0, e), o = s + 1), t.splice(o++, 0, n), r !== null && t.splice(o++, 0, r), i !== null && t.splice(o++, 0, i)
}

var Kh = "ng-template";

function V0(t, e, n, r) {
    let i = 0;
    if (r) {
        for (; i < e.length && typeof e[i] == "string"; i += 2) if (e[i] === "class" && L0(e[i + 1].toLowerCase(), n, 0) !== -1) return !0
    } else if (Sl(t)) return !1;
    if (i = e.indexOf(1, i), i > -1) {
        let o;
        for (; ++i < e.length && typeof (o = e[i]) == "string";) if (o.toLowerCase() === n) return !0
    }
    return !1
}

function Sl(t) {
    return t.type === 4 && t.value !== Kh
}

function B0(t, e, n) {
    let r = t.type === 4 && !n ? Kh : t.value;
    return e === r
}

function U0(t, e, n) {
    let r = 4, i = t.attrs, o = i !== null ? z0(i) : 0, s = !1;
    for (let a = 0; a < e.length; a++) {
        let c = e[a];
        if (typeof c == "number") {
            if (!s && !Dt(r) && !Dt(c)) return !1;
            if (s && Dt(c)) continue;
            s = !1, r = c | r & 1;
            continue
        }
        if (!s) if (r & 4) {
            if (r = 2 | r & 1, c !== "" && !B0(t, c, n) || c === "" && e.length === 1) {
                if (Dt(r)) return !1;
                s = !0
            }
        } else if (r & 8) {
            if (i === null || !V0(t, i, c, n)) {
                if (Dt(r)) return !1;
                s = !0
            }
        } else {
            let l = e[++a], u = $0(c, i, Sl(t), n);
            if (u === -1) {
                if (Dt(r)) return !1;
                s = !0;
                continue
            }
            if (l !== "") {
                let d;
                if (u > o ? d = "" : d = i[u + 1].toLowerCase(), r & 2 && l !== d) {
                    if (Dt(r)) return !1;
                    s = !0
                }
            }
        }
    }
    return Dt(r) || s
}

function Dt(t) {
    return (t & 1) === 0
}

function $0(t, e, n, r) {
    if (e === null) return -1;
    let i = 0;
    if (r || !n) {
        let o = !1;
        for (; i < e.length;) {
            let s = e[i];
            if (s === t) return i;
            if (s === 3 || s === 6) o = !0; else if (s === 1 || s === 2) {
                let a = e[++i];
                for (; typeof a == "string";) a = e[++i];
                continue
            } else {
                if (s === 4) break;
                if (s === 0) {
                    i += 4;
                    continue
                }
            }
            i += o ? 1 : 2
        }
        return -1
    } else return W0(e, t)
}

function H0(t, e, n = !1) {
    for (let r = 0; r < e.length; r++) if (U0(t, e[r], n)) return !0;
    return !1
}

function z0(t) {
    for (let e = 0; e < t.length; e++) {
        let n = t[e];
        if (Qh(n)) return e
    }
    return t.length
}

function W0(t, e) {
    let n = t.indexOf(4);
    if (n > -1) for (n++; n < t.length;) {
        let r = t[n];
        if (typeof r == "number") return -1;
        if (r === e) return n;
        n++
    }
    return -1
}

function th(t, e) {
    return t ? ":not(" + e.trim() + ")" : e
}

function G0(t) {
    let e = t[0], n = 1, r = 2, i = "", o = !1;
    for (; n < t.length;) {
        let s = t[n];
        if (typeof s == "string") if (r & 2) {
            let a = t[++n];
            i += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]"
        } else r & 8 ? i += "." + s : r & 4 && (i += " " + s); else i !== "" && !Dt(s) && (e += th(o, i), i = ""), r = s, o = o || !Dt(r);
        n++
    }
    return i !== "" && (e += th(o, i)), e
}

function q0(t) {
    return t.map(G0).join(",")
}

function Z0(t) {
    let e = [], n = [], r = 1, i = 2;
    for (; r < t.length;) {
        let o = t[r];
        if (typeof o == "string") i === 2 ? o !== "" && e.push(o, t[++r]) : i === 8 && n.push(o); else {
            if (!Dt(i)) break;
            i = o
        }
        r++
    }
    return {attrs: e, classes: n}
}

function Ge(t) {
    return El(() => {
        let e = tp(t), n = fe(S({}, e), {
            decls: t.decls,
            vars: t.vars,
            template: t.template,
            consts: t.consts || null,
            ngContentSelectors: t.ngContentSelectors,
            onPush: t.changeDetection === Zh.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            dependencies: e.standalone && t.dependencies || null,
            getStandaloneInjector: null,
            signals: t.signals ?? !1,
            data: t.data || {},
            encapsulation: t.encapsulation || Rt.Emulated,
            styles: t.styles || gn,
            _: null,
            schemas: t.schemas || null,
            tView: null,
            id: ""
        });
        np(n);
        let r = t.dependencies;
        return n.directiveDefs = rh(r, !1), n.pipeDefs = rh(r, !0), n.id = Y0(n), n
    })
}

function Q0(t) {
    return Pn(t) || Yh(t)
}

function K0(t) {
    return t !== null
}

function nh(t, e) {
    if (t == null) return fi;
    let n = {};
    for (let r in t) if (t.hasOwnProperty(r)) {
        let i = t[r], o, s, a = mn.None;
        Array.isArray(i) ? (a = i[0], o = i[1], s = i[2] ?? o) : (o = i, s = i), e ? (n[o] = a !== mn.None ? [r, a] : r, e[o] = s) : n[o] = r
    }
    return n
}

function Ti(t) {
    return El(() => {
        let e = tp(t);
        return np(e), e
    })
}

function Pn(t) {
    return t[m0] || null
}

function Yh(t) {
    return t[y0] || null
}

function Jh(t) {
    return t[v0] || null
}

function Xh(t) {
    let e = Pn(t) || Yh(t) || Jh(t);
    return e !== null ? e.standalone : !1
}

function ep(t, e) {
    let n = t[b0] || null;
    if (!n && e === !0) throw new Error(`Type ${We(t)} does not have '\u0275mod' property.`);
    return n
}

function tp(t) {
    let e = {};
    return {
        type: t.type,
        providersResolver: null,
        factory: null,
        hostBindings: t.hostBindings || null,
        hostVars: t.hostVars || 0,
        hostAttrs: t.hostAttrs || null,
        contentQueries: t.contentQueries || null,
        declaredInputs: e,
        inputTransforms: null,
        inputConfig: t.inputs || fi,
        exportAs: t.exportAs || null,
        standalone: t.standalone === !0,
        signals: t.signals === !0,
        selectors: t.selectors || gn,
        viewQuery: t.viewQuery || null,
        features: t.features || null,
        setInput: null,
        findHostDirectiveDefs: null,
        hostDirectives: null,
        inputs: nh(t.inputs, e),
        outputs: nh(t.outputs),
        debugInfo: null
    }
}

function np(t) {
    t.features?.forEach(e => e(t))
}

function rh(t, e) {
    if (!t) return null;
    let n = e ? Jh : Q0;
    return () => (typeof t == "function" ? t() : t).map(r => n(r)).filter(K0)
}

function Y0(t) {
    let e = 0,
        n = [t.selectors, t.ngContentSelectors, t.hostVars, t.hostAttrs, t.consts, t.vars, t.decls, t.encapsulation, t.standalone, t.signals, t.exportAs, JSON.stringify(t.inputs), JSON.stringify(t.outputs), Object.getOwnPropertyNames(t.type.prototype), !!t.contentQueries, !!t.viewQuery].join("|");
    for (let i of n) e = Math.imul(31, e) + i.charCodeAt(0) << 0;
    return e += 2147483648, "c" + e
}

function $n(t) {
    return {\u0275providers: t}
}

function J0(...t) {
    return {\u0275providers: rp(!0, t), \u0275fromNgModule: !0}
}

function rp(t, ...e) {
    let n = [], r = new Set, i, o = s => {
        n.push(s)
    };
    return Cl(e, s => {
        let a = s;
        kc(a, o, [], r) && (i ||= [], i.push(a))
    }), i !== void 0 && ip(i, o), n
}

function ip(t, e) {
    for (let n = 0; n < t.length; n++) {
        let {ngModule: r, providers: i} = t[n];
        Tl(i, o => {
            e(o, r)
        })
    }
}

function kc(t, e, n, r) {
    if (t = ut(t), !t) return !1;
    let i = null, o = Kf(t), s = !o && Pn(t);
    if (!o && !s) {
        let c = t.ngModule;
        if (o = Kf(c), o) i = c; else return !1
    } else {
        if (s && !s.standalone) return !1;
        i = t
    }
    let a = r.has(i);
    if (s) {
        if (a) return !1;
        if (r.add(i), s.dependencies) {
            let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
            for (let l of c) kc(l, e, n, r)
        }
    } else if (o) {
        if (o.imports != null && !a) {
            r.add(i);
            let l;
            try {
                Cl(o.imports, u => {
                    kc(u, e, n, r) && (l ||= [], l.push(u))
                })
            } finally {
            }
            l !== void 0 && ip(l, e)
        }
        if (!a) {
            let l = Dr(i) || (() => new i);
            e({provide: i, useFactory: l, deps: gn}, i), e({provide: qh, useValue: i, multi: !0}, i), e({
                provide: On,
                useValue: () => H(i),
                multi: !0
            }, i)
        }
        let c = o.providers;
        if (c != null && !a) {
            let l = t;
            Tl(c, u => {
                e(u, l)
            })
        }
    } else return !1;
    return i !== t && t.providers !== void 0
}

function Tl(t, e) {
    for (let n of t) $h(n) && (n = n.\u0275providers), Array.isArray(n) ? Tl(n, e) : e(n)
}

var X0 = oe({provide: String, useValue: oe});

function op(t) {
    return t !== null && typeof t == "object" && X0 in t
}

function eb(t) {
    return !!(t && t.useExisting)
}

function tb(t) {
    return !!(t && t.useFactory)
}

function Rc(t) {
    return typeof t == "function"
}

var Os = new L(""), ts = {}, nb = {}, gc;

function Ml() {
    return gc === void 0 && (gc = new us), gc
}

var ft = class {
}, hi = class extends ft {
    get destroyed() {
        return this._destroyed
    }

    constructor(e, n, r, i) {
        super(), this.parent = n, this.source = r, this.scopes = i, this.records = new Map, this._ngOnDestroyHooks = new Set, this._onDestroyHooks = [], this._destroyed = !1, Pc(e, s => this.processProvider(s)), this.records.set(Gh, mr(void 0, this)), i.has("environment") && this.records.set(ft, mr(void 0, this));
        let o = this.records.get(Os);
        o != null && typeof o.value == "string" && this.scopes.add(o.value), this.injectorDefTypes = new Set(this.get(qh, gn, G.Self))
    }

    destroy() {
        this.assertNotDestroyed(), this._destroyed = !0;
        let e = Y(null);
        try {
            for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
            let n = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (let r of n) r()
        } finally {
            this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), Y(e)
        }
    }

    onDestroy(e) {
        return this.assertNotDestroyed(), this._onDestroyHooks.push(e), () => this.removeOnDestroy(e)
    }

    runInContext(e) {
        this.assertNotDestroyed();
        let n = hn(this), r = lt(void 0), i;
        try {
            return e()
        } finally {
            hn(n), lt(r)
        }
    }

    get(e, n = di, r = G.Default) {
        if (this.assertNotDestroyed(), e.hasOwnProperty(Jf)) return e[Jf](this);
        r = Rs(r);
        let i, o = hn(this), s = lt(void 0);
        try {
            if (!(r & G.SkipSelf)) {
                let c = this.records.get(e);
                if (c === void 0) {
                    let l = cb(e) && Ns(e);
                    l && this.injectableDefInScope(l) ? c = mr(Oc(e), ts) : c = null, this.records.set(e, c)
                }
                if (c != null) return this.hydrate(e, c)
            }
            let a = r & G.Self ? Ml() : this.parent;
            return n = r & G.Optional && n === di ? null : n, a.get(e, n)
        } catch (a) {
            if (a.name === "NullInjectorError") {
                if ((a[cs] = a[cs] || []).unshift(We(e)), o) throw a;
                return A0(a, e, "R3InjectorError", this.source)
            } else throw a
        } finally {
            lt(s), hn(o)
        }
    }

    resolveInjectorInitializers() {
        let e = Y(null), n = hn(this), r = lt(void 0), i;
        try {
            let o = this.get(On, gn, G.Self);
            for (let s of o) s()
        } finally {
            hn(n), lt(r), Y(e)
        }
    }

    toString() {
        let e = [], n = this.records;
        for (let r of n.keys()) e.push(We(r));
        return `R3Injector[${e.join(", ")}]`
    }

    assertNotDestroyed() {
        if (this._destroyed) throw new D(205, !1)
    }

    processProvider(e) {
        e = ut(e);
        let n = Rc(e) ? e : ut(e && e.provide), r = ib(e);
        if (!Rc(e) && e.multi === !0) {
            let i = this.records.get(n);
            i || (i = mr(void 0, ts, !0), i.factory = () => Ac(i.multi), this.records.set(n, i)), n = e, i.multi.push(e)
        }
        this.records.set(n, r)
    }

    hydrate(e, n) {
        let r = Y(null);
        try {
            return n.value === ts && (n.value = nb, n.value = n.factory()), typeof n.value == "object" && n.value && ab(n.value) && this._ngOnDestroyHooks.add(n.value), n.value
        } finally {
            Y(r)
        }
    }

    injectableDefInScope(e) {
        if (!e.providedIn) return !1;
        let n = ut(e.providedIn);
        return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n)
    }

    removeOnDestroy(e) {
        let n = this._onDestroyHooks.indexOf(e);
        n !== -1 && this._onDestroyHooks.splice(n, 1)
    }
};

function Oc(t) {
    let e = Ns(t), n = e !== null ? e.factory : Dr(t);
    if (n !== null) return n;
    if (t instanceof L) throw new D(204, !1);
    if (t instanceof Function) return rb(t);
    throw new D(204, !1)
}

function rb(t) {
    if (t.length > 0) throw new D(204, !1);
    let n = p0(t);
    return n !== null ? () => n.factory(t) : () => new t
}

function ib(t) {
    if (op(t)) return mr(void 0, t.useValue);
    {
        let e = ob(t);
        return mr(e, ts)
    }
}

function ob(t, e, n) {
    let r;
    if (Rc(t)) {
        let i = ut(t);
        return Dr(i) || Oc(i)
    } else if (op(t)) r = () => ut(t.useValue); else if (tb(t)) r = () => t.useFactory(...Ac(t.deps || [])); else if (eb(t)) r = () => H(ut(t.useExisting)); else {
        let i = ut(t && (t.useClass || t.provide));
        if (sb(t)) r = () => new i(...Ac(t.deps)); else return Dr(i) || Oc(i)
    }
    return r
}

function mr(t, e, n = !1) {
    return {factory: t, value: e, multi: n ? [] : void 0}
}

function sb(t) {
    return !!t.deps
}

function ab(t) {
    return t !== null && typeof t == "object" && typeof t.ngOnDestroy == "function"
}

function cb(t) {
    return typeof t == "function" || typeof t == "object" && t instanceof L
}

function Pc(t, e) {
    for (let n of t) Array.isArray(n) ? Pc(n, e) : n && $h(n) ? Pc(n.\u0275providers, e) : e(n)
}

function Pt(t, e) {
    t instanceof hi && t.assertNotDestroyed();
    let n, r = hn(t), i = lt(void 0);
    try {
        return e()
    } finally {
        hn(r), lt(i)
    }
}

function lb() {
    return Hh() !== void 0 || T0() != null
}

function ub(t) {
    return typeof t == "function"
}

var Je = 0, j = 1, F = 2, Oe = 3, Et = 4, _t = 5, It = 6, ds = 7, Fe = 8, Er = 9, Ot = 10, pe = 11, pi = 12, ih = 13,
    Mr = 14, Xe = 15, Fn = 16, yr = 17, Gt = 18, Ps = 19, sp = 20, pn = 21, mc = 22, dt = 23, Me = 25, ap = 1, gi = 6,
    qt = 7, fs = 8, Ir = 9, Re = 10, hs = function (t) {
        return t[t.None = 0] = "None", t[t.HasTransplantedViews = 2] = "HasTransplantedViews", t
    }(hs || {});

function kt(t) {
    return Array.isArray(t) && typeof t[ap] == "object"
}

function Ft(t) {
    return Array.isArray(t) && t[ap] === !0
}

function cp(t) {
    return (t.flags & 4) !== 0
}

function Mi(t) {
    return t.componentOffset > -1
}

function xl(t) {
    return (t.flags & 1) === 1
}

function xi(t) {
    return !!t.template
}

function ps(t) {
    return (t[F] & 512) !== 0
}

var Fc = class {
    constructor(e, n, r) {
        this.previousValue = e, this.currentValue = n, this.firstChange = r
    }

    isFirstChange() {
        return this.firstChange
    }
};

function lp(t, e, n, r) {
    e !== null ? e.applyValueToInputSignal(e, r) : t[n] = r
}

function xr() {
    return up
}

function up(t) {
    return t.type.prototype.ngOnChanges && (t.setInput = fb), db
}

xr.ngInherit = !0;

function db() {
    let t = fp(this), e = t?.current;
    if (e) {
        let n = t.previous;
        if (n === fi) t.previous = e; else for (let r in e) n[r] = e[r];
        t.current = null, this.ngOnChanges(e)
    }
}

function fb(t, e, n, r, i) {
    let o = this.declaredInputs[r], s = fp(t) || hb(t, {previous: fi, current: null}),
        a = s.current || (s.current = {}), c = s.previous, l = c[o];
    a[o] = new Fc(l && l.currentValue, n, c === fi), lp(t, e, i, n)
}

var dp = "__ngSimpleChanges__";

function fp(t) {
    return t[dp] || null
}

function hb(t, e) {
    return t[dp] = e
}

var oh = null;
var At = function (t, e, n) {
    oh?.(t, e, n)
}, pb = "svg", gb = "math";

function Ct(t) {
    for (; Array.isArray(t);) t = t[Je];
    return t
}

function hp(t, e) {
    return Ct(e[t])
}

function et(t, e) {
    return Ct(e[t.index])
}

function Al(t, e) {
    return t.data[e]
}

function mb(t, e) {
    return t[e]
}

function bn(t, e) {
    let n = e[t];
    return kt(n) ? n : n[Je]
}

function yb(t) {
    return (t[F] & 4) === 4
}

function Nl(t) {
    return (t[F] & 128) === 128
}

function vb(t) {
    return Ft(t[Oe])
}

function Cr(t, e) {
    return e == null ? null : t[e]
}

function pp(t) {
    t[yr] = 0
}

function gp(t) {
    t[F] & 1024 || (t[F] |= 1024, Nl(t) && Fs(t))
}

function bb(t, e) {
    for (; t > 0;) e = e[Mr], t--;
    return e
}

function mi(t) {
    return !!(t[F] & 9216 || t[dt]?.dirty)
}

function Lc(t) {
    t[Ot].changeDetectionScheduler?.notify(7), t[F] & 64 && (t[F] |= 1024), mi(t) && Fs(t)
}

function Fs(t) {
    t[Ot].changeDetectionScheduler?.notify(0);
    let e = Ln(t);
    for (; e !== null && !(e[F] & 8192 || (e[F] |= 8192, !Nl(e)));) e = Ln(e)
}

function mp(t, e) {
    if ((t[F] & 256) === 256) throw new D(911, !1);
    t[pn] === null && (t[pn] = []), t[pn].push(e)
}

function wb(t, e) {
    if (t[pn] === null) return;
    let n = t[pn].indexOf(e);
    n !== -1 && t[pn].splice(n, 1)
}

function Ln(t) {
    let e = t[Oe];
    return Ft(e) ? e[Oe] : e
}

var q = {lFrame: _p(null), bindingsEnabled: !0, skipHydrationRootTNode: null};
var yp = !1;

function Db() {
    return q.lFrame.elementDepthCount
}

function Eb() {
    q.lFrame.elementDepthCount++
}

function Ib() {
    q.lFrame.elementDepthCount--
}

function vp() {
    return q.bindingsEnabled
}

function Ai() {
    return q.skipHydrationRootTNode !== null
}

function Cb(t) {
    return q.skipHydrationRootTNode === t
}

function _b(t) {
    q.skipHydrationRootTNode = t
}

function Sb() {
    q.skipHydrationRootTNode = null
}

function te() {
    return q.lFrame.lView
}

function tt() {
    return q.lFrame.tView
}

function Yt(t) {
    return q.lFrame.contextLView = t, t[Fe]
}

function Jt(t) {
    return q.lFrame.contextLView = null, t
}

function qe() {
    let t = bp();
    for (; t !== null && t.type === 64;) t = t.parent;
    return t
}

function bp() {
    return q.lFrame.currentTNode
}

function Tb() {
    let t = q.lFrame, e = t.currentTNode;
    return t.isParent ? e : e.parent
}

function Ni(t, e) {
    let n = q.lFrame;
    n.currentTNode = t, n.isParent = e
}

function wp() {
    return q.lFrame.isParent
}

function Mb() {
    q.lFrame.isParent = !1
}

function xb() {
    return q.lFrame.contextLView
}

function Dp() {
    return yp
}

function sh(t) {
    yp = t
}

function Ab(t) {
    return q.lFrame.bindingIndex = t
}

function ki() {
    return q.lFrame.bindingIndex++
}

function Nb(t) {
    let e = q.lFrame, n = e.bindingIndex;
    return e.bindingIndex = e.bindingIndex + t, n
}

function kb() {
    return q.lFrame.inI18n
}

function Rb(t, e) {
    let n = q.lFrame;
    n.bindingIndex = n.bindingRootIndex = t, jc(e)
}

function Ob() {
    return q.lFrame.currentDirectiveIndex
}

function jc(t) {
    q.lFrame.currentDirectiveIndex = t
}

function Pb(t) {
    let e = q.lFrame.currentDirectiveIndex;
    return e === -1 ? null : t[e]
}

function Ep() {
    return q.lFrame.currentQueryIndex
}

function kl(t) {
    q.lFrame.currentQueryIndex = t
}

function Fb(t) {
    let e = t[j];
    return e.type === 2 ? e.declTNode : e.type === 1 ? t[_t] : null
}

function Ip(t, e, n) {
    if (n & G.SkipSelf) {
        let i = e, o = t;
        for (; i = i.parent, i === null && !(n & G.Host);) if (i = Fb(o), i === null || (o = o[Mr], i.type & 10)) break;
        if (i === null) return !1;
        e = i, t = o
    }
    let r = q.lFrame = Cp();
    return r.currentTNode = e, r.lView = t, !0
}

function Rl(t) {
    let e = Cp(), n = t[j];
    q.lFrame = e, e.currentTNode = n.firstChild, e.lView = t, e.tView = n, e.contextLView = t, e.bindingIndex = n.bindingStartIndex, e.inI18n = !1
}

function Cp() {
    let t = q.lFrame, e = t === null ? null : t.child;
    return e === null ? _p(t) : e
}

function _p(t) {
    let e = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: t,
        child: null,
        inI18n: !1
    };
    return t !== null && (t.child = e), e
}

function Sp() {
    let t = q.lFrame;
    return q.lFrame = t.parent, t.currentTNode = null, t.lView = null, t
}

var Tp = Sp;

function Ol() {
    let t = Sp();
    t.isParent = !0, t.tView = null, t.selectedIndex = -1, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
}

function Lb(t) {
    return (q.lFrame.contextLView = bb(t, q.lFrame.contextLView))[Fe]
}

function Hn() {
    return q.lFrame.selectedIndex
}

function jn(t) {
    q.lFrame.selectedIndex = t
}

function Pl() {
    let t = q.lFrame;
    return Al(t.tView, t.selectedIndex)
}

function Mp() {
    return q.lFrame.currentNamespace
}

var xp = !0;

function Fl() {
    return xp
}

function wn(t) {
    xp = t
}

function jb(t, e, n) {
    let {ngOnChanges: r, ngOnInit: i, ngDoCheck: o} = e.type.prototype;
    if (r) {
        let s = up(e);
        (n.preOrderHooks ??= []).push(t, s), (n.preOrderCheckHooks ??= []).push(t, s)
    }
    i && (n.preOrderHooks ??= []).push(0 - t, i), o && ((n.preOrderHooks ??= []).push(t, o), (n.preOrderCheckHooks ??= []).push(t, o))
}

function Ll(t, e) {
    for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
        let o = t.data[n].type.prototype, {
            ngAfterContentInit: s,
            ngAfterContentChecked: a,
            ngAfterViewInit: c,
            ngAfterViewChecked: l,
            ngOnDestroy: u
        } = o;
        s && (t.contentHooks ??= []).push(-n, s), a && ((t.contentHooks ??= []).push(n, a), (t.contentCheckHooks ??= []).push(n, a)), c && (t.viewHooks ??= []).push(-n, c), l && ((t.viewHooks ??= []).push(n, l), (t.viewCheckHooks ??= []).push(n, l)), u != null && (t.destroyHooks ??= []).push(n, u)
    }
}

function ns(t, e, n) {
    Ap(t, e, 3, n)
}

function rs(t, e, n, r) {
    (t[F] & 3) === n && Ap(t, e, n, r)
}

function yc(t, e) {
    let n = t[F];
    (n & 3) === e && (n &= 16383, n += 1, t[F] = n)
}

function Ap(t, e, n, r) {
    let i = r !== void 0 ? t[yr] & 65535 : 0, o = r ?? -1, s = e.length - 1, a = 0;
    for (let c = i; c < s; c++) if (typeof e[c + 1] == "number") {
        if (a = e[c], r != null && a >= r) break
    } else e[c] < 0 && (t[yr] += 65536), (a < o || o == -1) && (Vb(t, n, e, c), t[yr] = (t[yr] & 4294901760) + c + 2), c++
}

function ah(t, e) {
    At(4, t, e);
    let n = Y(null);
    try {
        e.call(t)
    } finally {
        Y(n), At(5, t, e)
    }
}

function Vb(t, e, n, r) {
    let i = n[r] < 0, o = n[r + 1], s = i ? -n[r] : n[r], a = t[s];
    i ? t[F] >> 14 < t[yr] >> 16 && (t[F] & 3) === e && (t[F] += 16384, ah(a, o)) : ah(a, o)
}

var wr = -1, yi = class {
    constructor(e, n, r) {
        this.factory = e, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r
    }
};

function Bb(t) {
    return t instanceof yi
}

function Ub(t) {
    return (t.flags & 8) !== 0
}

function $b(t) {
    return (t.flags & 16) !== 0
}

var vc = {}, Vc = class {
    constructor(e, n) {
        this.injector = e, this.parentInjector = n
    }

    get(e, n, r) {
        r = Rs(r);
        let i = this.injector.get(e, vc, r);
        return i !== vc || n === vc ? i : this.parentInjector.get(e, n, r)
    }
};

function Np(t) {
    return t !== wr
}

function gs(t) {
    return t & 32767
}

function Hb(t) {
    return t >> 16
}

function ms(t, e) {
    let n = Hb(t), r = e;
    for (; n > 0;) r = r[Mr], n--;
    return r
}

var Bc = !0;

function ch(t) {
    let e = Bc;
    return Bc = t, e
}

var zb = 256, kp = zb - 1, Rp = 5, Wb = 0, Nt = {};

function Gb(t, e, n) {
    let r;
    typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(li) && (r = n[li]), r == null && (r = n[li] = Wb++);
    let i = r & kp, o = 1 << i;
    e.data[t + (i >> Rp)] |= o
}

function Op(t, e) {
    let n = Pp(t, e);
    if (n !== -1) return n;
    let r = e[j];
    r.firstCreatePass && (t.injectorIndex = e.length, bc(r.data, t), bc(e, null), bc(r.blueprint, null));
    let i = jl(t, e), o = t.injectorIndex;
    if (Np(i)) {
        let s = gs(i), a = ms(i, e), c = a[j].data;
        for (let l = 0; l < 8; l++) e[o + l] = a[s + l] | c[s + l]
    }
    return e[o + 8] = i, o
}

function bc(t, e) {
    t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
}

function Pp(t, e) {
    return t.injectorIndex === -1 || t.parent && t.parent.injectorIndex === t.injectorIndex || e[t.injectorIndex + 8] === null ? -1 : t.injectorIndex
}

function jl(t, e) {
    if (t.parent && t.parent.injectorIndex !== -1) return t.parent.injectorIndex;
    let n = 0, r = null, i = e;
    for (; i !== null;) {
        if (r = Bp(i), r === null) return wr;
        if (n++, i = i[Mr], r.injectorIndex !== -1) return r.injectorIndex | n << 16
    }
    return wr
}

function qb(t, e, n) {
    Gb(t, e, n)
}

function Zb(t, e) {
    if (e === "class") return t.classes;
    if (e === "style") return t.styles;
    let n = t.attrs;
    if (n) {
        let r = n.length, i = 0;
        for (; i < r;) {
            let o = n[i];
            if (Qh(o)) break;
            if (o === 0) i = i + 2; else if (typeof o == "number") for (i++; i < r && typeof n[i] == "string";) i++; else {
                if (o === e) return n[i + 1];
                i = i + 2
            }
        }
    }
    return null
}

function Fp(t, e, n) {
    if (n & G.Optional || t !== void 0) return t;
    Il(e, "NodeInjector")
}

function Lp(t, e, n, r) {
    if (n & G.Optional && r === void 0 && (r = null), !(n & (G.Self | G.Host))) {
        let i = t[Er], o = lt(void 0);
        try {
            return i ? i.get(e, r, n & G.Optional) : zh(e, r, n & G.Optional)
        } finally {
            lt(o)
        }
    }
    return Fp(r, e, n)
}

function jp(t, e, n, r = G.Default, i) {
    if (t !== null) {
        if (e[F] & 2048 && !(r & G.Self)) {
            let s = Jb(t, e, n, r, Nt);
            if (s !== Nt) return s
        }
        let o = Vp(t, e, n, r, Nt);
        if (o !== Nt) return o
    }
    return Lp(e, n, r, i)
}

function Vp(t, e, n, r, i) {
    let o = Kb(n);
    if (typeof o == "function") {
        if (!Ip(e, t, r)) return r & G.Host ? Fp(i, n, r) : Lp(e, n, r, i);
        try {
            let s;
            if (s = o(r), s == null && !(r & G.Optional)) Il(n); else return s
        } finally {
            Tp()
        }
    } else if (typeof o == "number") {
        let s = null, a = Pp(t, e), c = wr, l = r & G.Host ? e[Xe][_t] : null;
        for ((a === -1 || r & G.SkipSelf) && (c = a === -1 ? jl(t, e) : e[a + 8], c === wr || !uh(r, !1) ? a = -1 : (s = e[j], a = gs(c), e = ms(c, e))); a !== -1;) {
            let u = e[j];
            if (lh(o, a, u.data)) {
                let d = Qb(a, e, n, s, r, l);
                if (d !== Nt) return d
            }
            c = e[a + 8], c !== wr && uh(r, e[j].data[a + 8] === l) && lh(o, a, e) ? (s = u, a = gs(c), e = ms(c, e)) : a = -1
        }
    }
    return i
}

function Qb(t, e, n, r, i, o) {
    let s = e[j], a = s.data[t + 8], c = r == null ? Mi(a) && Bc : r != s && (a.type & 3) !== 0,
        l = i & G.Host && o === a, u = is(a, s, n, c, l);
    return u !== null ? _r(e, s, u, a) : Nt
}

function is(t, e, n, r, i) {
    let o = t.providerIndexes, s = e.data, a = o & 1048575, c = t.directiveStart, l = t.directiveEnd, u = o >> 20,
        d = r ? a : a + u, h = i ? a + u : l;
    for (let f = d; f < h; f++) {
        let m = s[f];
        if (f < c && n === m || f >= c && m.type === n) return f
    }
    if (i) {
        let f = s[c];
        if (f && xi(f) && f.type === n) return c
    }
    return null
}

function _r(t, e, n, r) {
    let i = t[n], o = e.data;
    if (Bb(i)) {
        let s = i;
        s.resolving && D0(w0(o[n]));
        let a = ch(s.canSeeViewProviders);
        s.resolving = !0;
        let c, l = s.injectImpl ? lt(s.injectImpl) : null, u = Ip(t, r, G.Default);
        try {
            i = t[n] = s.factory(void 0, o, t, r), e.firstCreatePass && n >= r.directiveStart && jb(n, o[n], e)
        } finally {
            l !== null && lt(l), ch(a), s.resolving = !1, Tp()
        }
    }
    return i
}

function Kb(t) {
    if (typeof t == "string") return t.charCodeAt(0) || 0;
    let e = t.hasOwnProperty(li) ? t[li] : void 0;
    return typeof e == "number" ? e >= 0 ? e & kp : Yb : e
}

function lh(t, e, n) {
    let r = 1 << t;
    return !!(n[e + (t >> Rp)] & r)
}

function uh(t, e) {
    return !(t & G.Self) && !(t & G.Host && e)
}

var Rn = class {
    constructor(e, n) {
        this._tNode = e, this._lView = n
    }

    get(e, n, r) {
        return jp(this._tNode, this._lView, e, Rs(r), n)
    }
};

function Yb() {
    return new Rn(qe(), te())
}

function Vl(t) {
    return El(() => {
        let e = t.prototype.constructor, n = e[as] || Uc(e), r = Object.prototype,
            i = Object.getPrototypeOf(t.prototype).constructor;
        for (; i && i !== r;) {
            let o = i[as] || Uc(i);
            if (o && o !== n) return o;
            i = Object.getPrototypeOf(i)
        }
        return o => new o
    })
}

function Uc(t) {
    return jh(t) ? () => {
        let e = Uc(ut(t));
        return e && e()
    } : Dr(t)
}

function Jb(t, e, n, r, i) {
    let o = t, s = e;
    for (; o !== null && s !== null && s[F] & 2048 && !(s[F] & 512);) {
        let a = Vp(o, s, n, r | G.Self, Nt);
        if (a !== Nt) return a;
        let c = o.parent;
        if (!c) {
            let l = s[sp];
            if (l) {
                let u = l.get(n, Nt, r);
                if (u !== Nt) return u
            }
            c = Bp(s), s = s[Mr]
        }
        o = c
    }
    return i
}

function Bp(t) {
    let e = t[j], n = e.type;
    return n === 2 ? e.declTNode : n === 1 ? t[_t] : null
}

function Bl(t) {
    return Zb(qe(), t)
}

function dh(t, e = null, n = null, r) {
    let i = Up(t, e, n, r);
    return i.resolveInjectorInitializers(), i
}

function Up(t, e = null, n = null, r, i = new Set) {
    let o = [n || gn, J0(t)];
    return r = r || (typeof t == "object" ? void 0 : We(t)), new hi(o, e || Ml(), r || null, i)
}

var kn = class kn {
    static create(e, n) {
        if (Array.isArray(e)) return dh({name: ""}, n, e, "");
        {
            let r = e.name ?? "";
            return dh({name: r}, e.parent, e.providers, r)
        }
    }
};
kn.THROW_IF_NOT_FOUND = di, kn.NULL = new us, kn.\u0275prov = O({
    token: kn,
    providedIn: "any",
    factory: () => H(Gh)
}), kn.__NG_ELEMENT_ID__ = -1;
var Zt = kn;
var Xb = new L("");
Xb.__NG_ELEMENT_ID__ = t => {
    let e = qe();
    if (e === null) throw new D(204, !1);
    if (e.type & 2) return e.value;
    if (t & G.Optional) return null;
    throw new D(204, !1)
};
var ew = "ngOriginalError";

function wc(t) {
    return t[ew]
}

var Qt = class {
    constructor() {
        this._console = console
    }

    handleError(e) {
        let n = this._findOriginalError(e);
        this._console.error("ERROR", e), n && this._console.error("ORIGINAL ERROR", n)
    }

    _findOriginalError(e) {
        let n = e && wc(e);
        for (; n && wc(n);) n = wc(n);
        return n || null
    }
}, $p = new L("", {providedIn: "root", factory: () => b(Qt).handleError.bind(void 0)}), Hp = (() => {
    let e = class e {
    };
    e.__NG_ELEMENT_ID__ = tw, e.__NG_ENV_ID__ = r => r;
    let t = e;
    return t
})(), $c = class extends Hp {
    constructor(e) {
        super(), this._lView = e
    }

    onDestroy(e) {
        return mp(this._lView, e), () => wb(this._lView, e)
    }
};

function tw() {
    return new $c(te())
}

function fh(t, e) {
    return Fh(t, e)
}

function nw(t) {
    return Fh(Ph, t)
}

var Xt = (fh.required = nw, fh);

function rw() {
    return Ar(qe(), te())
}

function Ar(t, e) {
    return new en(et(t, e))
}

var en = (() => {
    let e = class e {
        constructor(r) {
            this.nativeElement = r
        }
    };
    e.__NG_ELEMENT_ID__ = rw;
    let t = e;
    return t
})();

function iw(t) {
    return t instanceof en ? t.nativeElement : t
}

var zn = (() => {
    let e = class e {
        constructor() {
            this.taskId = 0, this.pendingTasks = new Set, this.hasPendingTasks = new Ne(!1)
        }

        get _hasPendingTasks() {
            return this.hasPendingTasks.value
        }

        add() {
            this._hasPendingTasks || this.hasPendingTasks.next(!0);
            let r = this.taskId++;
            return this.pendingTasks.add(r), r
        }

        remove(r) {
            this.pendingTasks.delete(r), this.pendingTasks.size === 0 && this._hasPendingTasks && this.hasPendingTasks.next(!1)
        }

        ngOnDestroy() {
            this.pendingTasks.clear(), this._hasPendingTasks && this.hasPendingTasks.next(!1)
        }
    };
    e.\u0275prov = O({token: e, providedIn: "root", factory: () => new e});
    let t = e;
    return t
})();
var Hc = class extends Pe {
    constructor(e = !1) {
        super(), this.destroyRef = void 0, this.pendingTasks = void 0, this.__isAsync = e, lb() && (this.destroyRef = b(Hp, {optional: !0}) ?? void 0, this.pendingTasks = b(zn, {optional: !0}) ?? void 0)
    }

    emit(e) {
        let n = Y(null);
        try {
            super.next(e)
        } finally {
            Y(n)
        }
    }

    subscribe(e, n, r) {
        let i = e, o = n || (() => null), s = r;
        if (e && typeof e == "object") {
            let c = e;
            i = c.next?.bind(c), o = c.error?.bind(c), s = c.complete?.bind(c)
        }
        this.__isAsync && (o = this.wrapInTimeout(o), i && (i = this.wrapInTimeout(i)), s && (s = this.wrapInTimeout(s)));
        let a = super.subscribe({next: i, error: o, complete: s});
        return e instanceof we && e.add(a), a
    }

    wrapInTimeout(e) {
        return n => {
            let r = this.pendingTasks?.add();
            setTimeout(() => {
                e(n), r !== void 0 && this.pendingTasks?.remove(r)
            })
        }
    }
}, ke = Hc;

function ow() {
    return this._results[Symbol.iterator]()
}

var zc = class t {
    get changes() {
        return this._changes ??= new ke
    }

    constructor(e = !1) {
        this._emitDistinctChangesOnly = e, this.dirty = !0, this._onDirty = void 0, this._results = [], this._changesDetected = !1, this._changes = void 0, this.length = 0, this.first = void 0, this.last = void 0;
        let n = t.prototype;
        n[Symbol.iterator] || (n[Symbol.iterator] = ow)
    }

    get(e) {
        return this._results[e]
    }

    map(e) {
        return this._results.map(e)
    }

    filter(e) {
        return this._results.filter(e)
    }

    find(e) {
        return this._results.find(e)
    }

    reduce(e, n) {
        return this._results.reduce(e, n)
    }

    forEach(e) {
        this._results.forEach(e)
    }

    some(e) {
        return this._results.some(e)
    }

    toArray() {
        return this._results.slice()
    }

    toString() {
        return this._results.toString()
    }

    reset(e, n) {
        this.dirty = !1;
        let r = R0(e);
        (this._changesDetected = !k0(this._results, r, n)) && (this._results = r, this.length = r.length, this.last = r[this.length - 1], this.first = r[0])
    }

    notifyOnChanges() {
        this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this)
    }

    onDirty(e) {
        this._onDirty = e
    }

    setDirty() {
        this.dirty = !0, this._onDirty?.()
    }

    destroy() {
        this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe())
    }
}, sw = "ngSkipHydration", aw = "ngskiphydration";

function zp(t) {
    let e = t.mergedAttrs;
    if (e === null) return !1;
    for (let n = 0; n < e.length; n += 2) {
        let r = e[n];
        if (typeof r == "number") return !1;
        if (typeof r == "string" && r.toLowerCase() === aw) return !0
    }
    return !1
}

function Wp(t) {
    return t.hasAttribute(sw)
}

function ys(t) {
    return (t.flags & 128) === 128
}

function cw(t) {
    if (ys(t)) return !0;
    let e = t.parent;
    for (; e;) {
        if (ys(t) || zp(e)) return !0;
        e = e.parent
    }
    return !1
}

var Gp = new Map, lw = 0;

function uw() {
    return lw++
}

function dw(t) {
    Gp.set(t[Ps], t)
}

function fw(t) {
    Gp.delete(t[Ps])
}

var hh = "__ngContext__";

function Vn(t, e) {
    kt(e) ? (t[hh] = e[Ps], dw(e)) : t[hh] = e
}

function qp(t) {
    return Qp(t[pi])
}

function Zp(t) {
    return Qp(t[Et])
}

function Qp(t) {
    for (; t !== null && !Ft(t);) t = t[Et];
    return t
}

var Wc;

function Kp(t) {
    Wc = t
}

function Ls() {
    if (Wc !== void 0) return Wc;
    if (typeof document < "u") return document;
    throw new D(210, !1)
}

var js = new L("", {providedIn: "root", factory: () => hw}), hw = "ng", Ul = new L(""),
    ht = new L("", {providedIn: "platform", factory: () => "unknown"});
var $l = new L(""), Hl = new L("", {
    providedIn: "root",
    factory: () => Ls().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null
});

function pw() {
    let t = new Nr;
    return b(ht) === "browser" && (t.store = gw(Ls(), b(js))), t
}

var Nr = (() => {
    let e = class e {
        constructor() {
            this.store = {}, this.onSerializeCallbacks = {}
        }

        get(r, i) {
            return this.store[r] !== void 0 ? this.store[r] : i
        }

        set(r, i) {
            this.store[r] = i
        }

        remove(r) {
            delete this.store[r]
        }

        hasKey(r) {
            return this.store.hasOwnProperty(r)
        }

        get isEmpty() {
            return Object.keys(this.store).length === 0
        }

        onSerialize(r, i) {
            this.onSerializeCallbacks[r] = i
        }

        toJson() {
            for (let r in this.onSerializeCallbacks) if (this.onSerializeCallbacks.hasOwnProperty(r)) try {
                this.store[r] = this.onSerializeCallbacks[r]()
            } catch (i) {
                console.warn("Exception in onSerialize callback: ", i)
            }
            return JSON.stringify(this.store).replace(/</g, "\\u003C")
        }
    };
    e.\u0275prov = O({token: e, providedIn: "root", factory: pw});
    let t = e;
    return t
})();

function gw(t, e) {
    let n = t.getElementById(e + "-state");
    if (n?.textContent) try {
        return JSON.parse(n.textContent)
    } catch (r) {
        console.warn("Exception while restoring TransferState for app " + e, r)
    }
    return {}
}

var Yp = "h", Jp = "b", Gc = function (t) {
    return t.FirstChild = "f", t.NextSibling = "n", t
}(Gc || {}), mw = "e", yw = "t", zl = "c", Xp = "x", vs = "r", vw = "i", bw = "n", eg = "d";
var ww = "__nghData__", tg = ww, Dc = "ngh", Dw = "nghm", ng = () => null;

function Ew(t, e, n = !1) {
    let r = t.getAttribute(Dc);
    if (r == null) return null;
    let [i, o] = r.split("|");
    if (r = n ? o : i, !r) return null;
    let s = o ? `|${o}` : "", a = n ? i : s, c = {};
    if (r !== "") {
        let u = e.get(Nr, null, {optional: !0});
        u !== null && (c = u.get(tg, [])[Number(r)])
    }
    let l = {data: c, firstChild: t.firstChild ?? null};
    return n && (l.firstChild = t, Vs(l, 0, t.nextSibling)), a ? t.setAttribute(Dc, a) : t.removeAttribute(Dc), l
}

function Iw() {
    ng = Ew
}

function Wl(t, e, n = !1) {
    return ng(t, e, n)
}

function Cw(t) {
    let e = t._lView;
    return e[j].type === 2 ? null : (ps(e) && (e = e[Me]), e)
}

function _w(t) {
    return t.textContent?.replace(/\s/gm, "")
}

function Sw(t) {
    let e = Ls(), n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, {
        acceptNode(o) {
            let s = _w(o);
            return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        }
    }), r, i = [];
    for (; r = n.nextNode();) i.push(r);
    for (let o of i) o.textContent === "ngetn" ? o.replaceWith(e.createTextNode("")) : o.remove()
}

function Vs(t, e, n) {
    t.segmentHeads ??= {}, t.segmentHeads[e] = n
}

function qc(t, e) {
    return t.segmentHeads?.[e] ?? null
}

function Tw(t, e) {
    let n = t.data, r = n[mw]?.[e] ?? null;
    return r === null && n[zl]?.[e] && (r = Gl(t, e)), r
}

function rg(t, e) {
    return t.data[zl]?.[e] ?? null
}

function Gl(t, e) {
    let n = rg(t, e) ?? [], r = 0;
    for (let i of n) r += i[vs] * (i[Xp] ?? 1);
    return r
}

function Mw(t) {
    if (typeof t.disconnectedNodes > "u") {
        let e = t.data[eg];
        t.disconnectedNodes = e ? new Set(e) : null
    }
    return t.disconnectedNodes
}

function Bs(t, e) {
    if (typeof t.disconnectedNodes > "u") {
        let n = t.data[eg];
        t.disconnectedNodes = n ? new Set(n) : null
    }
    return !!Mw(t)?.has(e)
}

var Ko = new L(""), ig = !1, og = new L("", {providedIn: "root", factory: () => ig});
var Yo;

function xw() {
    if (Yo === void 0 && (Yo = null, ui.trustedTypes)) try {
        Yo = ui.trustedTypes.createPolicy("angular#unsafe-bypass", {
            createHTML: t => t,
            createScript: t => t,
            createScriptURL: t => t
        })
    } catch {
    }
    return Yo
}

function ph(t) {
    return xw()?.createScriptURL(t) || t
}

var bs = class {
    constructor(e) {
        this.changingThisBreaksApplicationSecurity = e
    }

    toString() {
        return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Oh})`
    }
};

function Ri(t) {
    return t instanceof bs ? t.changingThisBreaksApplicationSecurity : t
}

function ql(t, e) {
    let n = Aw(t);
    if (n != null && n !== e) {
        if (n === "ResourceURL" && e === "URL") return !0;
        throw new Error(`Required a safe ${e}, got a ${n} (see ${Oh})`)
    }
    return n === e
}

function Aw(t) {
    return t instanceof bs && t.getTypeName() || null
}

var Nw = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

function sg(t) {
    return t = String(t), t.match(Nw) ? t : "unsafe:" + t
}

var Us = function (t) {
    return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
}(Us || {});

function Zl(t) {
    let e = cg();
    return e ? e.sanitize(Us.URL, t) || "" : ql(t, "URL") ? Ri(t) : sg(ks(t))
}

function kw(t) {
    let e = cg();
    if (e) return ph(e.sanitize(Us.RESOURCE_URL, t) || "");
    if (ql(t, "ResourceURL")) return ph(Ri(t));
    throw new D(904, !1)
}

function Rw(t, e) {
    return e === "src" && (t === "embed" || t === "frame" || t === "iframe" || t === "media" || t === "script") || e === "href" && (t === "base" || t === "link") ? kw : Zl
}

function ag(t, e, n) {
    return Rw(e, n)(t)
}

function cg() {
    let t = te();
    return t && t[Ot].sanitizer
}

var Ow = /^>|^->|<!--|-->|--!>|<!-$/g, Pw = /(<|>)/g, Fw = "\u200B$1\u200B";

function Lw(t) {
    return t.replace(Ow, e => e.replace(Pw, Fw))
}

function jw(t) {
    return t.ownerDocument.body
}

function lg(t) {
    return t instanceof Function ? t() : t
}

function Jo(t) {
    return (t ?? b(Zt)).get(ht) === "browser"
}

var Kt = function (t) {
    return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
}(Kt || {}), Vw;

function Ql(t, e) {
    return Vw(t, e)
}

function vr(t, e, n, r, i) {
    if (r != null) {
        let o, s = !1;
        Ft(r) ? o = r : kt(r) && (s = !0, r = r[Je]);
        let a = Ct(r);
        t === 0 && n !== null ? i == null ? pg(e, n, a) : ws(e, n, a, i || null, !0) : t === 1 && n !== null ? ws(e, n, a, i || null, !0) : t === 2 ? eu(e, a, s) : t === 3 && e.destroyNode(a), o != null && tD(e, t, o, n, i)
    }
}

function ug(t, e) {
    return t.createText(e)
}

function Bw(t, e, n) {
    t.setValue(e, n)
}

function dg(t, e) {
    return t.createComment(Lw(e))
}

function Kl(t, e, n) {
    return t.createElement(e, n)
}

function Uw(t, e) {
    fg(t, e), e[Je] = null, e[_t] = null
}

function $w(t, e, n, r, i, o) {
    r[Je] = i, r[_t] = e, Hs(t, r, n, 1, i, o)
}

function fg(t, e) {
    e[Ot].changeDetectionScheduler?.notify(8), Hs(t, e, e[pe], 2, null, null)
}

function Hw(t) {
    let e = t[pi];
    if (!e) return Ec(t[j], t);
    for (; e;) {
        let n = null;
        if (kt(e)) n = e[pi]; else {
            let r = e[Re];
            r && (n = r)
        }
        if (!n) {
            for (; e && !e[Et] && e !== t;) kt(e) && Ec(e[j], e), e = e[Oe];
            e === null && (e = t), kt(e) && Ec(e[j], e), n = e && e[Et]
        }
        e = n
    }
}

function zw(t, e, n, r) {
    let i = Re + r, o = n.length;
    r > 0 && (n[i - 1][Et] = e), r < o - Re ? (e[Et] = n[i], Wh(n, Re + r, e)) : (n.push(e), e[Et] = null), e[Oe] = n;
    let s = e[Fn];
    s !== null && n !== s && hg(s, e);
    let a = e[Gt];
    a !== null && a.insertView(t), Lc(e), e[F] |= 128
}

function hg(t, e) {
    let n = t[Ir], r = e[Oe];
    if (kt(r)) t[F] |= hs.HasTransplantedViews; else {
        let i = r[Oe][Xe];
        e[Xe] !== i && (t[F] |= hs.HasTransplantedViews)
    }
    n === null ? t[Ir] = [e] : n.push(e)
}

function Yl(t, e) {
    let n = t[Ir], r = n.indexOf(e);
    n.splice(r, 1)
}

function vi(t, e) {
    if (t.length <= Re) return;
    let n = Re + e, r = t[n];
    if (r) {
        let i = r[Fn];
        i !== null && i !== t && Yl(i, r), e > 0 && (t[n - 1][Et] = r[Et]);
        let o = ls(t, Re + e);
        Uw(r[j], r);
        let s = o[Gt];
        s !== null && s.detachView(o[j]), r[Oe] = null, r[Et] = null, r[F] &= -129
    }
    return r
}

function $s(t, e) {
    if (!(e[F] & 256)) {
        let n = e[pe];
        n.destroyNode && Hs(t, e, n, 3, null, null), Hw(e)
    }
}

function Ec(t, e) {
    if (e[F] & 256) return;
    let n = Y(null);
    try {
        e[F] &= -129, e[F] |= 256, e[dt] && Ja(e[dt]), Gw(t, e), Ww(t, e), e[j].type === 1 && e[pe].destroy();
        let r = e[Fn];
        if (r !== null && Ft(e[Oe])) {
            r !== e[Oe] && Yl(r, e);
            let i = e[Gt];
            i !== null && i.detachView(t)
        }
        fw(e)
    } finally {
        Y(n)
    }
}

function Ww(t, e) {
    let n = t.cleanup, r = e[ds];
    if (n !== null) for (let o = 0; o < n.length - 1; o += 2) if (typeof n[o] == "string") {
        let s = n[o + 3];
        s >= 0 ? r[s]() : r[-s].unsubscribe(), o += 2
    } else {
        let s = r[n[o + 1]];
        n[o].call(s)
    }
    r !== null && (e[ds] = null);
    let i = e[pn];
    if (i !== null) {
        e[pn] = null;
        for (let o = 0; o < i.length; o++) {
            let s = i[o];
            s()
        }
    }
}

function Gw(t, e) {
    let n;
    if (t != null && (n = t.destroyHooks) != null) for (let r = 0; r < n.length; r += 2) {
        let i = e[n[r]];
        if (!(i instanceof yi)) {
            let o = n[r + 1];
            if (Array.isArray(o)) for (let s = 0; s < o.length; s += 2) {
                let a = i[o[s]], c = o[s + 1];
                At(4, a, c);
                try {
                    c.call(a)
                } finally {
                    At(5, a, c)
                }
            } else {
                At(4, i, o);
                try {
                    o.call(i)
                } finally {
                    At(5, i, o)
                }
            }
        }
    }
}

function qw(t, e, n) {
    return Zw(t, e.parent, n)
}

function Zw(t, e, n) {
    let r = e;
    for (; r !== null && r.type & 168;) e = r, r = e.parent;
    if (r === null) return n[Je];
    {
        let {componentOffset: i} = r;
        if (i > -1) {
            let {encapsulation: o} = t.data[r.directiveStart + i];
            if (o === Rt.None || o === Rt.Emulated) return null
        }
        return et(r, n)
    }
}

function ws(t, e, n, r, i) {
    t.insertBefore(e, n, r, i)
}

function pg(t, e, n) {
    t.appendChild(e, n)
}

function gh(t, e, n, r, i) {
    r !== null ? ws(t, e, n, r, i) : pg(t, e, n)
}

function Qw(t, e, n, r) {
    t.removeChild(e, n, r)
}

function Jl(t, e) {
    return t.parentNode(e)
}

function Kw(t, e) {
    return t.nextSibling(e)
}

function Yw(t, e, n) {
    return Xw(t, e, n)
}

function Jw(t, e, n) {
    return t.type & 40 ? et(t, n) : null
}

var Xw = Jw, mh;

function Xl(t, e, n, r) {
    let i = qw(t, r, e), o = e[pe], s = r.parent || e[_t], a = Yw(s, r, e);
    if (i != null) if (Array.isArray(n)) for (let c = 0; c < n.length; c++) gh(o, i, n[c], a, !1); else gh(o, i, n, a, !1);
    mh !== void 0 && mh(o, r, e, n, i)
}

function os(t, e) {
    if (e !== null) {
        let n = e.type;
        if (n & 3) return et(e, t);
        if (n & 4) return Zc(-1, t[e.index]);
        if (n & 8) {
            let r = e.child;
            if (r !== null) return os(t, r);
            {
                let i = t[e.index];
                return Ft(i) ? Zc(-1, i) : Ct(i)
            }
        } else {
            if (n & 32) return Ql(e, t)() || Ct(t[e.index]);
            {
                let r = gg(t, e);
                if (r !== null) {
                    if (Array.isArray(r)) return r[0];
                    let i = Ln(t[Xe]);
                    return os(i, r)
                } else return os(t, e.next)
            }
        }
    }
    return null
}

function gg(t, e) {
    if (e !== null) {
        let r = t[Xe][_t], i = e.projection;
        return r.projection[i]
    }
    return null
}

function Zc(t, e) {
    let n = Re + t + 1;
    if (n < e.length) {
        let r = e[n], i = r[j].firstChild;
        if (i !== null) return os(r, i)
    }
    return e[qt]
}

function eu(t, e, n) {
    let r = Jl(t, e);
    r && Qw(t, r, e, n)
}

function mg(t) {
    t.textContent = ""
}

function tu(t, e, n, r, i, o, s) {
    for (; n != null;) {
        if (n.type === 128) {
            n = n.next;
            continue
        }
        let a = r[n.index], c = n.type;
        if (s && e === 0 && (a && Vn(Ct(a), r), n.flags |= 2), (n.flags & 32) !== 32) if (c & 8) tu(t, e, n.child, r, i, o, !1), vr(e, t, i, a, o); else if (c & 32) {
            let l = Ql(n, r), u;
            for (; u = l();) vr(e, t, i, u, o);
            vr(e, t, i, a, o)
        } else c & 16 ? eD(t, e, r, n, i, o) : vr(e, t, i, a, o);
        n = s ? n.projectionNext : n.next
    }
}

function Hs(t, e, n, r, i, o) {
    tu(n, r, t.firstChild, e, i, o, !1)
}

function eD(t, e, n, r, i, o) {
    let s = n[Xe], c = s[_t].projection[r.projection];
    if (Array.isArray(c)) for (let l = 0; l < c.length; l++) {
        let u = c[l];
        vr(e, t, i, u, o)
    } else {
        let l = c, u = s[Oe];
        ys(r) && (l.flags |= 128), tu(t, e, l, u, i, o, !0)
    }
}

function tD(t, e, n, r, i) {
    let o = n[qt], s = Ct(n);
    o !== s && vr(e, t, r, o, i);
    for (let a = Re; a < n.length; a++) {
        let c = n[a];
        Hs(c[j], c, t, e, r, o)
    }
}

function nD(t, e, n, r, i) {
    if (e) i ? t.addClass(n, r) : t.removeClass(n, r); else {
        let o = r.indexOf("-") === -1 ? void 0 : Kt.DashCase;
        i == null ? t.removeStyle(n, r, o) : (typeof i == "string" && i.endsWith("!important") && (i = i.slice(0, -10), o |= Kt.Important), t.setStyle(n, r, i, o))
    }
}

function rD(t, e, n) {
    t.setAttribute(e, "style", n)
}

function yg(t, e, n) {
    n === "" ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n)
}

function vg(t, e, n) {
    let {mergedAttrs: r, classes: i, styles: o} = n;
    r !== null && Nc(t, e, r), i !== null && yg(t, e, i), o !== null && rD(t, e, o)
}

var Dn = {};

function xe(t = 1) {
    bg(tt(), te(), Hn() + t, !1)
}

function bg(t, e, n, r) {
    if (!r) if ((e[F] & 3) === 3) {
        let o = t.preOrderCheckHooks;
        o !== null && ns(e, o, n)
    } else {
        let o = t.preOrderHooks;
        o !== null && rs(e, o, 0, n)
    }
    jn(n)
}

function nt(t, e = G.Default) {
    let n = te();
    if (n === null) return H(t, e);
    let r = qe();
    return jp(r, n, ut(t), e)
}

function wg(t, e, n, r, i, o) {
    let s = Y(null);
    try {
        let a = null;
        i & mn.SignalBased && (a = e[r][Qa]), a !== null && a.transformFn !== void 0 && (o = a.transformFn(o)), i & mn.HasDecoratorInputTransform && (o = t.inputTransforms[r].call(e, o)), t.setInput !== null ? t.setInput(e, a, o, n, r) : lp(e, a, r, o)
    } finally {
        Y(s)
    }
}

function iD(t, e) {
    let n = t.hostBindingOpCodes;
    if (n !== null) try {
        for (let r = 0; r < n.length; r++) {
            let i = n[r];
            if (i < 0) jn(~i); else {
                let o = i, s = n[++r], a = n[++r];
                Rb(s, o);
                let c = e[o];
                a(2, c)
            }
        }
    } finally {
        jn(-1)
    }
}

function zs(t, e, n, r, i, o, s, a, c, l, u) {
    let d = e.blueprint.slice();
    return d[Je] = i, d[F] = r | 4 | 128 | 8 | 64, (l !== null || t && t[F] & 2048) && (d[F] |= 2048), pp(d), d[Oe] = d[Mr] = t, d[Fe] = n, d[Ot] = s || t && t[Ot], d[pe] = a || t && t[pe], d[Er] = c || t && t[Er] || null, d[_t] = o, d[Ps] = uw(), d[It] = u, d[sp] = l, d[Xe] = e.type == 2 ? t[Xe] : d, d
}

function Ws(t, e, n, r, i) {
    let o = t.data[e];
    if (o === null) o = oD(t, e, n, r, i), kb() && (o.flags |= 32); else if (o.type & 64) {
        o.type = n, o.value = r, o.attrs = i;
        let s = Tb();
        o.injectorIndex = s === null ? -1 : s.injectorIndex
    }
    return Ni(o, !0), o
}

function oD(t, e, n, r, i) {
    let o = bp(), s = wp(), a = s ? o : o && o.parent, c = t.data[e] = fD(t, a, n, e, r, i);
    return t.firstChild === null && (t.firstChild = c), o !== null && (s ? o.child == null && c.parent !== null && (o.child = c) : o.next === null && (o.next = c, c.prev = o)), c
}

function Dg(t, e, n, r) {
    if (n === 0) return -1;
    let i = e.length;
    for (let o = 0; o < n; o++) e.push(r), t.blueprint.push(r), t.data.push(null);
    return i
}

function Eg(t, e, n, r, i) {
    let o = Hn(), s = r & 2;
    try {
        jn(-1), s && e.length > Me && bg(t, e, Me, !1), At(s ? 2 : 0, i), n(r, i)
    } finally {
        jn(o), At(s ? 3 : 1, i)
    }
}

function Ig(t, e, n) {
    if (cp(e)) {
        let r = Y(null);
        try {
            let i = e.directiveStart, o = e.directiveEnd;
            for (let s = i; s < o; s++) {
                let a = t.data[s];
                if (a.contentQueries) {
                    let c = n[s];
                    a.contentQueries(1, c, s)
                }
            }
        } finally {
            Y(r)
        }
    }
}

function Cg(t, e, n) {
    vp() && (vD(t, e, n, et(n, e)), (n.flags & 64) === 64 && Ng(t, e, n))
}

function _g(t, e, n = et) {
    let r = e.localNames;
    if (r !== null) {
        let i = e.index + 1;
        for (let o = 0; o < r.length; o += 2) {
            let s = r[o + 1], a = s === -1 ? n(e, t) : t[s];
            t[i++] = a
        }
    }
}

function Sg(t) {
    let e = t.tView;
    return e === null || e.incompleteFirstPass ? t.tView = nu(1, null, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts, t.id) : e
}

function nu(t, e, n, r, i, o, s, a, c, l, u) {
    let d = Me + r, h = d + i, f = sD(d, h), m = typeof l == "function" ? l() : l;
    return f[j] = {
        type: t,
        blueprint: f,
        template: n,
        queries: null,
        viewQuery: a,
        declTNode: e,
        data: f.slice().fill(null, d),
        bindingStartIndex: d,
        expandoStartIndex: h,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: typeof o == "function" ? o() : o,
        pipeRegistry: typeof s == "function" ? s() : s,
        firstChild: null,
        schemas: c,
        consts: m,
        incompleteFirstPass: !1,
        ssrId: u
    }
}

function sD(t, e) {
    let n = [];
    for (let r = 0; r < e; r++) n.push(r < t ? null : Dn);
    return n
}

function aD(t, e, n, r) {
    let o = r.get(og, ig) || n === Rt.ShadowDom, s = t.selectRootElement(e, o);
    return cD(s), s
}

function cD(t) {
    Tg(t)
}

var Tg = () => null;

function lD(t) {
    Wp(t) ? mg(t) : Sw(t)
}

function uD() {
    Tg = lD
}

function dD(t, e, n, r) {
    let i = Og(e);
    i.push(n), t.firstCreatePass && Pg(t).push(r, i.length - 1)
}

function fD(t, e, n, r, i, o) {
    let s = e ? e.injectorIndex : -1, a = 0;
    return Ai() && (a |= 128), {
        type: n,
        index: r,
        insertBeforeIndex: null,
        injectorIndex: s,
        directiveStart: -1,
        directiveEnd: -1,
        directiveStylingLast: -1,
        componentOffset: -1,
        propertyBindings: null,
        flags: a,
        providerIndexes: 0,
        value: i,
        attrs: o,
        mergedAttrs: null,
        localNames: null,
        initialInputs: void 0,
        inputs: null,
        outputs: null,
        tView: null,
        next: null,
        prev: null,
        projectionNext: null,
        child: null,
        parent: e,
        projection: null,
        styles: null,
        stylesWithoutHost: null,
        residualStyles: void 0,
        classes: null,
        classesWithoutHost: null,
        residualClasses: void 0,
        classBindings: 0,
        styleBindings: 0
    }
}

function yh(t, e, n, r, i) {
    for (let o in e) {
        if (!e.hasOwnProperty(o)) continue;
        let s = e[o];
        if (s === void 0) continue;
        r ??= {};
        let a, c = mn.None;
        Array.isArray(s) ? (a = s[0], c = s[1]) : a = s;
        let l = o;
        if (i !== null) {
            if (!i.hasOwnProperty(o)) continue;
            l = i[o]
        }
        t === 0 ? vh(r, n, l, a, c) : vh(r, n, l, a)
    }
    return r
}

function vh(t, e, n, r, i) {
    let o;
    t.hasOwnProperty(n) ? (o = t[n]).push(e, r) : o = t[n] = [e, r], i !== void 0 && o.push(i)
}

function hD(t, e, n) {
    let r = e.directiveStart, i = e.directiveEnd, o = t.data, s = e.attrs, a = [], c = null, l = null;
    for (let u = r; u < i; u++) {
        let d = o[u], h = n ? n.get(d) : null, f = h ? h.inputs : null, m = h ? h.outputs : null;
        c = yh(0, d.inputs, u, c, f), l = yh(1, d.outputs, u, l, m);
        let v = c !== null && s !== null && !Sl(e) ? xD(c, u, s) : null;
        a.push(v)
    }
    c !== null && (c.hasOwnProperty("class") && (e.flags |= 8), c.hasOwnProperty("style") && (e.flags |= 16)), e.initialInputs = a, e.inputs = c, e.outputs = l
}

function pD(t) {
    return t === "class" ? "className" : t === "for" ? "htmlFor" : t === "formaction" ? "formAction" : t === "innerHtml" ? "innerHTML" : t === "readonly" ? "readOnly" : t === "tabindex" ? "tabIndex" : t
}

function Mg(t, e, n, r, i, o, s, a) {
    let c = et(e, n), l = e.inputs, u;
    !a && l != null && (u = l[r]) ? (ru(t, n, u, r, i), Mi(e) && gD(n, e.index)) : e.type & 3 ? (r = pD(r), i = s != null ? s(i, e.value || "", r) : i, o.setProperty(c, r, i)) : e.type & 12
}

function gD(t, e) {
    let n = bn(e, t);
    n[F] & 16 || (n[F] |= 64)
}

function xg(t, e, n, r) {
    if (vp()) {
        let i = r === null ? null : {"": -1}, o = wD(t, n), s, a;
        o === null ? s = a = null : [s, a] = o, s !== null && Ag(t, e, n, s, i, a), i && DD(n, r, i)
    }
    n.mergedAttrs = _l(n.mergedAttrs, n.attrs)
}

function Ag(t, e, n, r, i, o) {
    for (let l = 0; l < r.length; l++) qb(Op(n, e), t, r[l].type);
    ID(n, t.data.length, r.length);
    for (let l = 0; l < r.length; l++) {
        let u = r[l];
        u.providersResolver && u.providersResolver(u)
    }
    let s = !1, a = !1, c = Dg(t, e, r.length, null);
    for (let l = 0; l < r.length; l++) {
        let u = r[l];
        n.mergedAttrs = _l(n.mergedAttrs, u.hostAttrs), CD(t, n, e, c, u), ED(c, u, i), u.contentQueries !== null && (n.flags |= 4), (u.hostBindings !== null || u.hostAttrs !== null || u.hostVars !== 0) && (n.flags |= 64);
        let d = u.type.prototype;
        !s && (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) && ((t.preOrderHooks ??= []).push(n.index), s = !0), !a && (d.ngOnChanges || d.ngDoCheck) && ((t.preOrderCheckHooks ??= []).push(n.index), a = !0), c++
    }
    hD(t, n, o)
}

function mD(t, e, n, r, i) {
    let o = i.hostBindings;
    if (o) {
        let s = t.hostBindingOpCodes;
        s === null && (s = t.hostBindingOpCodes = []);
        let a = ~e.index;
        yD(s) != a && s.push(a), s.push(n, r, o)
    }
}

function yD(t) {
    let e = t.length;
    for (; e > 0;) {
        let n = t[--e];
        if (typeof n == "number" && n < 0) return n
    }
    return 0
}

function vD(t, e, n, r) {
    let i = n.directiveStart, o = n.directiveEnd;
    Mi(n) && _D(e, n, t.data[i + n.componentOffset]), t.firstCreatePass || Op(n, e), Vn(r, e);
    let s = n.initialInputs;
    for (let a = i; a < o; a++) {
        let c = t.data[a], l = _r(e, t, a, n);
        if (Vn(l, e), s !== null && MD(e, a - i, l, c, n, s), xi(c)) {
            let u = bn(n.index, e);
            u[Fe] = _r(e, t, a, n)
        }
    }
}

function Ng(t, e, n) {
    let r = n.directiveStart, i = n.directiveEnd, o = n.index, s = Ob();
    try {
        jn(o);
        for (let a = r; a < i; a++) {
            let c = t.data[a], l = e[a];
            jc(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && bD(c, l)
        }
    } finally {
        jn(-1), jc(s)
    }
}

function bD(t, e) {
    t.hostBindings !== null && t.hostBindings(1, e)
}

function wD(t, e) {
    let n = t.directiveRegistry, r = null, i = null;
    if (n) for (let o = 0; o < n.length; o++) {
        let s = n[o];
        if (H0(e, s.selectors, !1)) if (r || (r = []), xi(s)) if (s.findHostDirectiveDefs !== null) {
            let a = [];
            i = i || new Map, s.findHostDirectiveDefs(s, a, i), r.unshift(...a, s);
            let c = a.length;
            Qc(t, e, c)
        } else r.unshift(s), Qc(t, e, 0); else i = i || new Map, s.findHostDirectiveDefs?.(s, r, i), r.push(s)
    }
    return r === null ? null : [r, i]
}

function Qc(t, e, n) {
    e.componentOffset = n, (t.components ??= []).push(e.index)
}

function DD(t, e, n) {
    if (e) {
        let r = t.localNames = [];
        for (let i = 0; i < e.length; i += 2) {
            let o = n[e[i + 1]];
            if (o == null) throw new D(-301, !1);
            r.push(e[i], o)
        }
    }
}

function ED(t, e, n) {
    if (n) {
        if (e.exportAs) for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
        xi(e) && (n[""] = t)
    }
}

function ID(t, e, n) {
    t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
}

function CD(t, e, n, r, i) {
    t.data[r] = i;
    let o = i.factory || (i.factory = Dr(i.type, !0)), s = new yi(o, xi(i), nt);
    t.blueprint[r] = s, n[r] = s, mD(t, e, r, Dg(t, n, i.hostVars, Dn), i)
}

function _D(t, e, n) {
    let r = et(e, t), i = Sg(n), o = t[Ot].rendererFactory, s = 16;
    n.signals ? s = 4096 : n.onPush && (s = 64);
    let a = Gs(t, zs(t, i, null, s, r, e, null, o.createRenderer(r, n), null, null, null));
    t[e.index] = a
}

function SD(t, e, n, r, i, o) {
    let s = et(t, e);
    TD(e[pe], s, o, t.value, n, r, i)
}

function TD(t, e, n, r, i, o, s) {
    if (o == null) t.removeAttribute(e, i, n); else {
        let a = s == null ? ks(o) : s(o, r || "", i);
        t.setAttribute(e, i, a, n)
    }
}

function MD(t, e, n, r, i, o) {
    let s = o[e];
    if (s !== null) for (let a = 0; a < s.length;) {
        let c = s[a++], l = s[a++], u = s[a++], d = s[a++];
        wg(r, n, c, l, u, d)
    }
}

function xD(t, e, n) {
    let r = null, i = 0;
    for (; i < n.length;) {
        let o = n[i];
        if (o === 0) {
            i += 4;
            continue
        } else if (o === 5) {
            i += 2;
            continue
        }
        if (typeof o == "number") break;
        if (t.hasOwnProperty(o)) {
            r === null && (r = []);
            let s = t[o];
            for (let a = 0; a < s.length; a += 3) if (s[a] === e) {
                r.push(o, s[a + 1], s[a + 2], n[i + 1]);
                break
            }
        }
        i += 2
    }
    return r
}

function kg(t, e, n, r) {
    return [t, !0, 0, e, null, r, null, n, null, null]
}

function Rg(t, e) {
    let n = t.contentQueries;
    if (n !== null) {
        let r = Y(null);
        try {
            for (let i = 0; i < n.length; i += 2) {
                let o = n[i], s = n[i + 1];
                if (s !== -1) {
                    let a = t.data[s];
                    kl(o), a.contentQueries(2, e[s], s)
                }
            }
        } finally {
            Y(r)
        }
    }
}

function Gs(t, e) {
    return t[pi] ? t[ih][Et] = e : t[pi] = e, t[ih] = e, e
}

function Kc(t, e, n) {
    kl(0);
    let r = Y(null);
    try {
        e(t, n)
    } finally {
        Y(r)
    }
}

function Og(t) {
    return t[ds] ??= []
}

function Pg(t) {
    return t.cleanup ??= []
}

function Fg(t, e) {
    let n = t[Er], r = n ? n.get(Qt, null) : null;
    r && r.handleError(e)
}

function ru(t, e, n, r, i) {
    for (let o = 0; o < n.length;) {
        let s = n[o++], a = n[o++], c = n[o++], l = e[s], u = t.data[s];
        wg(u, l, r, a, c, i)
    }
}

function AD(t, e, n) {
    let r = hp(e, t);
    Bw(t[pe], r, n)
}

function ND(t, e) {
    let n = bn(e, t), r = n[j];
    kD(r, n);
    let i = n[Je];
    i !== null && n[It] === null && (n[It] = Wl(i, n[Er])), iu(r, n, n[Fe])
}

function kD(t, e) {
    for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
}

function iu(t, e, n) {
    Rl(e);
    try {
        let r = t.viewQuery;
        r !== null && Kc(1, r, n);
        let i = t.template;
        i !== null && Eg(t, e, i, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), e[Gt]?.finishViewCreation(t), t.staticContentQueries && Rg(t, e), t.staticViewQueries && Kc(2, t.viewQuery, n);
        let o = t.components;
        o !== null && RD(e, o)
    } catch (r) {
        throw t.firstCreatePass && (t.incompleteFirstPass = !0, t.firstCreatePass = !1), r
    } finally {
        e[F] &= -5, Ol()
    }
}

function RD(t, e) {
    for (let n = 0; n < e.length; n++) ND(t, e[n])
}

function qs(t, e, n, r) {
    let i = Y(null);
    try {
        let o = e.tView, a = t[F] & 4096 ? 4096 : 16,
            c = zs(t, o, n, a, null, e, null, null, r?.injector ?? null, r?.embeddedViewInjector ?? null, r?.dehydratedView ?? null),
            l = t[e.index];
        c[Fn] = l;
        let u = t[Gt];
        return u !== null && (c[Gt] = u.createEmbeddedView(o)), iu(o, c, n), c
    } finally {
        Y(i)
    }
}

function Lg(t, e) {
    let n = Re + e;
    if (n < t.length) return t[n]
}

function bi(t, e) {
    return !e || e.firstChild === null || ys(t)
}

function Zs(t, e, n, r = !0) {
    let i = e[j];
    if (zw(i, e, t, n), r) {
        let s = Zc(n, t), a = e[pe], c = Jl(a, t[qt]);
        c !== null && $w(i, t[_t], a, e, c, s)
    }
    let o = e[It];
    o !== null && o.firstChild !== null && (o.firstChild = null)
}

function jg(t, e) {
    let n = vi(t, e);
    return n !== void 0 && $s(n[j], n), n
}

function Ds(t, e, n, r, i = !1) {
    for (; n !== null;) {
        if (n.type === 128) {
            n = i ? n.projectionNext : n.next;
            continue
        }
        let o = e[n.index];
        o !== null && r.push(Ct(o)), Ft(o) && OD(o, r);
        let s = n.type;
        if (s & 8) Ds(t, e, n.child, r); else if (s & 32) {
            let a = Ql(n, e), c;
            for (; c = a();) r.push(c)
        } else if (s & 16) {
            let a = gg(e, n);
            if (Array.isArray(a)) r.push(...a); else {
                let c = Ln(e[Xe]);
                Ds(c[j], c, a, r, !0)
            }
        }
        n = i ? n.projectionNext : n.next
    }
    return r
}

function OD(t, e) {
    for (let n = Re; n < t.length; n++) {
        let r = t[n], i = r[j].firstChild;
        i !== null && Ds(r[j], r, i, e)
    }
    t[qt] !== t[Je] && e.push(t[qt])
}

var Vg = [];

function PD(t) {
    return t[dt] ?? FD(t)
}

function FD(t) {
    let e = Vg.pop() ?? Object.create(jD);
    return e.lView = t, e
}

function LD(t) {
    t.lView[dt] !== t && (t.lView = null, Vg.push(t))
}

var jD = fe(S({}, To), {
    consumerIsAlwaysLive: !0, consumerMarkedDirty: t => {
        Fs(t.lView)
    }, consumerOnSignalRead() {
        this.lView[dt] = this
    }
});

function VD(t) {
    let e = t[dt] ?? Object.create(BD);
    return e.lView = t, e
}

var BD = fe(S({}, To), {
    consumerIsAlwaysLive: !0, consumerMarkedDirty: t => {
        let e = Ln(t.lView);
        for (; e && !Bg(e[j]);) e = Ln(e);
        e && gp(e)
    }, consumerOnSignalRead() {
        this.lView[dt] = this
    }
});

function Bg(t) {
    return t.type !== 2
}

var UD = 100;

function Ug(t, e = !0, n = 0) {
    let r = t[Ot], i = r.rendererFactory, o = !1;
    o || i.begin?.();
    try {
        $D(t, n)
    } catch (s) {
        throw e && Fg(t, s), s
    } finally {
        o || (i.end?.(), r.inlineEffectRunner?.flush())
    }
}

function $D(t, e) {
    let n = Dp();
    try {
        sh(!0), Yc(t, e);
        let r = 0;
        for (; mi(t);) {
            if (r === UD) throw new D(103, !1);
            r++, Yc(t, 1)
        }
    } finally {
        sh(n)
    }
}

function HD(t, e, n, r) {
    let i = e[F];
    if ((i & 256) === 256) return;
    let o = !1, s = !1;
    !o && e[Ot].inlineEffectRunner?.flush(), Rl(e);
    let a = !0, c = null, l = null;
    o || (Bg(t) ? (l = PD(e), c = Ka(l)) : lf() === null ? (a = !1, l = VD(e), c = Ka(l)) : e[dt] && (Ja(e[dt]), e[dt] = null));
    try {
        pp(e), Ab(t.bindingStartIndex), n !== null && Eg(t, e, n, 2, r);
        let u = (i & 3) === 3;
        if (!o) if (u) {
            let f = t.preOrderCheckHooks;
            f !== null && ns(e, f, null)
        } else {
            let f = t.preOrderHooks;
            f !== null && rs(e, f, 0, null), yc(e, 0)
        }
        if (s || zD(e), $g(e, 0), t.contentQueries !== null && Rg(t, e), !o) if (u) {
            let f = t.contentCheckHooks;
            f !== null && ns(e, f)
        } else {
            let f = t.contentHooks;
            f !== null && rs(e, f, 1), yc(e, 1)
        }
        iD(t, e);
        let d = t.components;
        d !== null && zg(e, d, 0);
        let h = t.viewQuery;
        if (h !== null && Kc(2, h, r), !o) if (u) {
            let f = t.viewCheckHooks;
            f !== null && ns(e, f)
        } else {
            let f = t.viewHooks;
            f !== null && rs(e, f, 2), yc(e, 2)
        }
        if (t.firstUpdatePass === !0 && (t.firstUpdatePass = !1), e[mc]) {
            for (let f of e[mc]) f();
            e[mc] = null
        }
        o || (e[F] &= -73)
    } catch (u) {
        throw o || Fs(e), u
    } finally {
        l !== null && (ff(l, c), a && LD(l)), Ol()
    }
}

function $g(t, e) {
    for (let n = qp(t); n !== null; n = Zp(n)) for (let r = Re; r < n.length; r++) {
        let i = n[r];
        Hg(i, e)
    }
}

function zD(t) {
    for (let e = qp(t); e !== null; e = Zp(e)) {
        if (!(e[F] & hs.HasTransplantedViews)) continue;
        let n = e[Ir];
        for (let r = 0; r < n.length; r++) {
            let i = n[r];
            gp(i)
        }
    }
}

function WD(t, e, n) {
    let r = bn(e, t);
    Hg(r, n)
}

function Hg(t, e) {
    Nl(t) && Yc(t, e)
}

function Yc(t, e) {
    let r = t[j], i = t[F], o = t[dt], s = !!(e === 0 && i & 16);
    if (s ||= !!(i & 64 && e === 0), s ||= !!(i & 1024), s ||= !!(o?.dirty && Ya(o)), s ||= !1, o && (o.dirty = !1), t[F] &= -9217, s) HD(r, t, r.template, t[Fe]); else if (i & 8192) {
        $g(t, 1);
        let a = r.components;
        a !== null && zg(t, a, 1)
    }
}

function zg(t, e, n) {
    for (let r = 0; r < e.length; r++) WD(t, e[r], n)
}

function ou(t, e) {
    let n = Dp() ? 64 : 1088;
    for (t[Ot].changeDetectionScheduler?.notify(e); t;) {
        t[F] |= n;
        let r = Ln(t);
        if (ps(t) && !r) return t;
        t = r
    }
    return null
}

var Bn = class {
    get rootNodes() {
        let e = this._lView, n = e[j];
        return Ds(n, e, n.firstChild, [])
    }

    constructor(e, n, r = !0) {
        this._lView = e, this._cdRefInjectingView = n, this.notifyErrorHandler = r, this._appRef = null, this._attachedToViewContainer = !1
    }

    get context() {
        return this._lView[Fe]
    }

    set context(e) {
        this._lView[Fe] = e
    }

    get destroyed() {
        return (this._lView[F] & 256) === 256
    }

    destroy() {
        if (this._appRef) this._appRef.detachView(this); else if (this._attachedToViewContainer) {
            let e = this._lView[Oe];
            if (Ft(e)) {
                let n = e[fs], r = n ? n.indexOf(this) : -1;
                r > -1 && (vi(e, r), ls(n, r))
            }
            this._attachedToViewContainer = !1
        }
        $s(this._lView[j], this._lView)
    }

    onDestroy(e) {
        mp(this._lView, e)
    }

    markForCheck() {
        ou(this._cdRefInjectingView || this._lView, 4)
    }

    detach() {
        this._lView[F] &= -129
    }

    reattach() {
        Lc(this._lView), this._lView[F] |= 128
    }

    detectChanges() {
        this._lView[F] |= 1024, Ug(this._lView, this.notifyErrorHandler)
    }

    checkNoChanges() {
    }

    attachToViewContainerRef() {
        if (this._appRef) throw new D(902, !1);
        this._attachedToViewContainer = !0
    }

    detachFromAppRef() {
        this._appRef = null;
        let e = ps(this._lView), n = this._lView[Fn];
        n !== null && !e && Yl(n, this._lView), fg(this._lView[j], this._lView)
    }

    attachToAppRef(e) {
        if (this._attachedToViewContainer) throw new D(902, !1);
        this._appRef = e;
        let n = ps(this._lView), r = this._lView[Fn];
        r !== null && !n && hg(r, this._lView), Lc(this._lView)
    }
}, wi = (() => {
    let e = class e {
    };
    e.__NG_ELEMENT_ID__ = ZD;
    let t = e;
    return t
})(), GD = wi, qD = class extends GD {
    constructor(e, n, r) {
        super(), this._declarationLView = e, this._declarationTContainer = n, this.elementRef = r
    }

    get ssrId() {
        return this._declarationTContainer.tView?.ssrId || null
    }

    createEmbeddedView(e, n) {
        return this.createEmbeddedViewImpl(e, n)
    }

    createEmbeddedViewImpl(e, n, r) {
        let i = qs(this._declarationLView, this._declarationTContainer, e, {
            embeddedViewInjector: n,
            dehydratedView: r
        });
        return new Bn(i)
    }
};

function ZD() {
    return su(qe(), te())
}

function su(t, e) {
    return t.type & 4 ? new qD(e, t, Ar(t, e)) : null
}

var QD = new RegExp(`^(\\d+)*(${Jp}|${Yp})*(.*)`);

function KD(t) {
    let e = t.match(QD), [n, r, i, o] = e, s = r ? parseInt(r, 10) : i, a = [];
    for (let [c, l, u] of o.matchAll(/(f|n)(\d*)/g)) {
        let d = parseInt(u, 10) || 1;
        a.push(l, d)
    }
    return [s, ...a]
}

function YD(t) {
    return !t.prev && t.parent?.type === 8
}

function Ic(t) {
    return t.index - Me
}

function JD(t, e) {
    let n = t.i18nNodes;
    if (n) return n.get(e)
}

function Qs(t, e, n, r) {
    let i = Ic(r), o = JD(t, i);
    if (o === void 0) {
        let s = t.data[bw];
        if (s?.[i]) o = eE(s[i], n); else if (e.firstChild === r) o = t.firstChild; else {
            let a = r.prev === null, c = r.prev ?? r.parent;
            if (YD(r)) {
                let l = Ic(r.parent);
                o = qc(t, l)
            } else {
                let l = et(c, n);
                if (a) o = l.firstChild; else {
                    let u = Ic(c), d = qc(t, u);
                    if (c.type === 2 && d) {
                        let f = Gl(t, u) + 1;
                        o = Ks(f, d)
                    } else o = l.nextSibling
                }
            }
        }
    }
    return o
}

function Ks(t, e) {
    let n = e;
    for (let r = 0; r < t; r++) n = n.nextSibling;
    return n
}

function XD(t, e) {
    let n = t;
    for (let r = 0; r < e.length; r += 2) {
        let i = e[r], o = e[r + 1];
        for (let s = 0; s < o; s++) switch (i) {
            case Gc.FirstChild:
                n = n.firstChild;
                break;
            case Gc.NextSibling:
                n = n.nextSibling;
                break
        }
    }
    return n
}

function eE(t, e) {
    let [n, ...r] = KD(t), i;
    if (n === Yp) i = e[Xe][Je]; else if (n === Jp) i = jw(e[Xe][Je]); else {
        let o = Number(n);
        i = Ct(e[o + Me])
    }
    return XD(i, r)
}

var tE = !1;

function nE(t) {
    tE = t
}

function rE(t) {
    let e = t[It];
    if (e) {
        let {i18nNodes: n, dehydratedIcuData: r} = e;
        if (n && r) {
            let i = t[pe];
            for (let o of r.values()) iE(i, n, o)
        }
        e.i18nNodes = void 0, e.dehydratedIcuData = void 0
    }
}

function iE(t, e, n) {
    for (let r of n.node.cases[n.case]) {
        let i = e.get(r.index - Me);
        i && eu(t, i, !1)
    }
}

function Wg(t) {
    let e = t[gi] ?? [], r = t[Oe][pe];
    for (let i of e) oE(i, r);
    t[gi] = gn
}

function oE(t, e) {
    let n = 0, r = t.firstChild;
    if (r) {
        let i = t.data[vs];
        for (; n < i;) {
            let o = r.nextSibling;
            eu(e, r, !1), r = o, n++
        }
    }
}

function Gg(t) {
    Wg(t);
    for (let e = Re; e < t.length; e++) Es(t[e])
}

function Es(t) {
    rE(t);
    let e = t[j];
    for (let n = Me; n < e.bindingStartIndex; n++) if (Ft(t[n])) {
        let r = t[n];
        Gg(r)
    } else kt(t[n]) && Es(t[n])
}

function sE(t) {
    let e = t._views;
    for (let n of e) {
        let r = Cw(n);
        if (r !== null && r[Je] !== null) if (kt(r)) Es(r); else {
            let i = r[Je];
            Es(i), Gg(r)
        }
    }
}

function aE(t, e) {
    let n = [];
    for (let r of e) for (let i = 0; i < (r[Xp] ?? 1); i++) {
        let o = {data: r, firstChild: null};
        r[vs] > 0 && (o.firstChild = t, t = Ks(r[vs], t)), n.push(o)
    }
    return [t, n]
}

var qg = () => null;

function cE(t, e) {
    let n = t[gi];
    return !e || n === null || n.length === 0 ? null : n[0].data[vw] === e ? n.shift() : (Wg(t), null)
}

function lE() {
    qg = cE
}

function Di(t, e) {
    return qg(t, e)
}

var Ei = class {
}, au = new L("", {providedIn: "root", factory: () => !1});
var Zg = new L(""), Jc = class {
}, Is = class {
};

function uE(t) {
    let e = Error(`No component factory found for ${We(t)}.`);
    return e[dE] = t, e
}

var dE = "ngComponent";
var Xc = class {
    resolveComponentFactory(e) {
        throw uE(e)
    }
}, bu = class bu {
};
bu.NULL = new Xc;
var Sr = bu, yn = class {
}, Oi = (() => {
    let e = class e {
        constructor() {
            this.destroyNode = null
        }
    };
    e.__NG_ELEMENT_ID__ = () => fE();
    let t = e;
    return t
})();

function fE() {
    let t = te(), e = qe(), n = bn(e.index, t);
    return (kt(n) ? n : t)[pe]
}

var hE = (() => {
    let e = class e {
    };
    e.\u0275prov = O({token: e, providedIn: "root", factory: () => null});
    let t = e;
    return t
})();
var bh = new Set;

function Lt(t) {
    bh.has(t) || (bh.add(t), performance?.mark?.("mark_feature_usage", {detail: {feature: t}}))
}

function Qg(t) {
    let e = !0;
    return setTimeout(() => {
        e && (e = !1, t())
    }), typeof ui.requestAnimationFrame == "function" && ui.requestAnimationFrame(() => {
        e && (e = !1, t())
    }), () => {
        e = !1
    }
}

function wh(t) {
    let e = !0;
    return queueMicrotask(() => {
        e && t()
    }), () => {
        e = !1
    }
}

function Dh(...t) {
}

var he = class t {
    constructor({
                    enableLongStackTrace: e = !1,
                    shouldCoalesceEventChangeDetection: n = !1,
                    shouldCoalesceRunChangeDetection: r = !1
                }) {
        if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ke(!1), this.onMicrotaskEmpty = new ke(!1), this.onStable = new ke(!1), this.onError = new ke(!1), typeof Zone > "u") throw new D(908, !1);
        Zone.assertZonePatched();
        let i = this;
        i._nesting = 0, i._outer = i._inner = Zone.current, Zone.TaskTrackingZoneSpec && (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec)), e && Zone.longStackTraceZoneSpec && (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)), i.shouldCoalesceEventChangeDetection = !r && n, i.shouldCoalesceRunChangeDetection = r, i.callbackScheduled = !1, mE(i)
    }

    static isInAngularZone() {
        return typeof Zone < "u" && Zone.current.get("isAngularZone") === !0
    }

    static assertInAngularZone() {
        if (!t.isInAngularZone()) throw new D(909, !1)
    }

    static assertNotInAngularZone() {
        if (t.isInAngularZone()) throw new D(909, !1)
    }

    run(e, n, r) {
        return this._inner.run(e, n, r)
    }

    runTask(e, n, r, i) {
        let o = this._inner, s = o.scheduleEventTask("NgZoneEvent: " + i, e, pE, Dh, Dh);
        try {
            return o.runTask(s, n, r)
        } finally {
            o.cancelTask(s)
        }
    }

    runGuarded(e, n, r) {
        return this._inner.runGuarded(e, n, r)
    }

    runOutsideAngular(e) {
        return this._outer.run(e)
    }
}, pE = {};

function cu(t) {
    if (t._nesting == 0 && !t.hasPendingMicrotasks && !t.isStable) try {
        t._nesting++, t.onMicrotaskEmpty.emit(null)
    } finally {
        if (t._nesting--, !t.hasPendingMicrotasks) try {
            t.runOutsideAngular(() => t.onStable.emit(null))
        } finally {
            t.isStable = !0
        }
    }
}

function gE(t) {
    t.isCheckStableRunning || t.callbackScheduled || (t.callbackScheduled = !0, Zone.root.run(() => {
        Qg(() => {
            t.callbackScheduled = !1, el(t), t.isCheckStableRunning = !0, cu(t), t.isCheckStableRunning = !1
        })
    }), el(t))
}

function mE(t) {
    let e = () => {
        gE(t)
    };
    t._inner = t._inner.fork({
        name: "angular", properties: {isAngularZone: !0}, onInvokeTask: (n, r, i, o, s, a) => {
            if (yE(a)) return n.invokeTask(i, o, s, a);
            try {
                return Eh(t), n.invokeTask(i, o, s, a)
            } finally {
                (t.shouldCoalesceEventChangeDetection && o.type === "eventTask" || t.shouldCoalesceRunChangeDetection) && e(), Ih(t)
            }
        }, onInvoke: (n, r, i, o, s, a, c) => {
            try {
                return Eh(t), n.invoke(i, o, s, a, c)
            } finally {
                t.shouldCoalesceRunChangeDetection && !t.callbackScheduled && !vE(a) && e(), Ih(t)
            }
        }, onHasTask: (n, r, i, o) => {
            n.hasTask(i, o), r === i && (o.change == "microTask" ? (t._hasPendingMicrotasks = o.microTask, el(t), cu(t)) : o.change == "macroTask" && (t.hasPendingMacrotasks = o.macroTask))
        }, onHandleError: (n, r, i, o) => (n.handleError(i, o), t.runOutsideAngular(() => t.onError.emit(o)), !1)
    })
}

function el(t) {
    t._hasPendingMicrotasks || (t.shouldCoalesceEventChangeDetection || t.shouldCoalesceRunChangeDetection) && t.callbackScheduled === !0 ? t.hasPendingMicrotasks = !0 : t.hasPendingMicrotasks = !1
}

function Eh(t) {
    t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
}

function Ih(t) {
    t._nesting--, cu(t)
}

var tl = class {
    constructor() {
        this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ke, this.onMicrotaskEmpty = new ke, this.onStable = new ke, this.onError = new ke
    }

    run(e, n, r) {
        return e.apply(n, r)
    }

    runGuarded(e, n, r) {
        return e.apply(n, r)
    }

    runOutsideAngular(e) {
        return e()
    }

    runTask(e, n, r, i) {
        return e.apply(n, r)
    }
};

function yE(t) {
    return Kg(t, "__ignore_ng_zone__")
}

function vE(t) {
    return Kg(t, "__scheduler_tick__")
}

function Kg(t, e) {
    return !Array.isArray(t) || t.length !== 1 ? !1 : t[0]?.data?.[e] === !0
}

var Yg = (() => {
    let e = class e {
        constructor() {
            this.handler = null, this.internalCallbacks = []
        }

        execute() {
            this.executeInternalCallbacks(), this.handler?.execute()
        }

        executeInternalCallbacks() {
            let r = [...this.internalCallbacks];
            this.internalCallbacks.length = 0;
            for (let i of r) i()
        }

        ngOnDestroy() {
            this.handler?.destroy(), this.handler = null, this.internalCallbacks.length = 0
        }
    };
    e.\u0275prov = O({token: e, providedIn: "root", factory: () => new e});
    let t = e;
    return t
})();

function nl(t, e, n) {
    let r = n ? t.styles : null, i = n ? t.classes : null, o = 0;
    if (e !== null) for (let s = 0; s < e.length; s++) {
        let a = e[s];
        if (typeof a == "number") o = a; else if (o == 1) i = Zf(i, a); else if (o == 2) {
            let c = a, l = e[++s];
            r = Zf(r, c + ": " + l + ";")
        }
    }
    n ? t.styles = r : t.stylesWithoutHost = r, n ? t.classes = i : t.classesWithoutHost = i
}

var Cs = class extends Sr {
    constructor(e) {
        super(), this.ngModule = e
    }

    resolveComponentFactory(e) {
        let n = Pn(e);
        return new Ii(n, this.ngModule)
    }
};

function Ch(t, e) {
    let n = [];
    for (let r in t) {
        if (!t.hasOwnProperty(r)) continue;
        let i = t[r];
        if (i === void 0) continue;
        let o = Array.isArray(i), s = o ? i[0] : i, a = o ? i[1] : mn.None;
        e ? n.push({propName: s, templateName: r, isSignal: (a & mn.SignalBased) !== 0}) : n.push({
            propName: s,
            templateName: r
        })
    }
    return n
}

function bE(t) {
    let e = t.toLowerCase();
    return e === "svg" ? pb : e === "math" ? gb : null
}

var Ii = class extends Is {
    get inputs() {
        let e = this.componentDef, n = e.inputTransforms, r = Ch(e.inputs, !0);
        if (n !== null) for (let i of r) n.hasOwnProperty(i.propName) && (i.transform = n[i.propName]);
        return r
    }

    get outputs() {
        return Ch(this.componentDef.outputs, !1)
    }

    constructor(e, n) {
        super(), this.componentDef = e, this.ngModule = n, this.componentType = e.type, this.selector = q0(e.selectors), this.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : [], this.isBoundToModule = !!n
    }

    create(e, n, r, i) {
        let o = Y(null);
        try {
            i = i || this.ngModule;
            let s = i instanceof ft ? i : i?.injector;
            s && this.componentDef.getStandaloneInjector !== null && (s = this.componentDef.getStandaloneInjector(s) || s);
            let a = s ? new Vc(e, s) : e, c = a.get(yn, null);
            if (c === null) throw new D(407, !1);
            let l = a.get(hE, null), u = a.get(Yg, null), d = a.get(Ei, null), h = {
                    rendererFactory: c,
                    sanitizer: l,
                    inlineEffectRunner: null,
                    afterRenderEventManager: u,
                    changeDetectionScheduler: d
                }, f = c.createRenderer(null, this.componentDef), m = this.componentDef.selectors[0][0] || "div",
                v = r ? aD(f, r, this.componentDef.encapsulation, a) : Kl(f, m, bE(m)), C = 512;
            this.componentDef.signals ? C |= 4096 : this.componentDef.onPush || (C |= 16);
            let N = null;
            v !== null && (N = Wl(v, a, !0));
            let $ = nu(0, null, null, 1, 0, null, null, null, null, null, null),
                z = zs(null, $, null, C, null, null, h, f, a, null, N);
            Rl(z);
            let ee, Ae;
            try {
                let le = this.componentDef, ue, be = null;
                le.findHostDirectiveDefs ? (ue = [], be = new Map, le.findHostDirectiveDefs(le, ue, be), ue.push(le)) : ue = [le];
                let yt = wE(z, v), Mt = DE(yt, v, le, ue, z, h, f);
                Ae = Al($, Me), v && CE(f, le, v, r), n !== void 0 && _E(Ae, this.ngContentSelectors, n), ee = IE(Mt, le, ue, be, z, [SE]), iu($, z, null)
            } finally {
                Ol()
            }
            return new rl(this.componentType, ee, Ar(Ae, z), z, Ae)
        } finally {
            Y(o)
        }
    }
}, rl = class extends Jc {
    constructor(e, n, r, i, o) {
        super(), this.location = r, this._rootLView = i, this._tNode = o, this.previousInputValues = null, this.instance = n, this.hostView = this.changeDetectorRef = new Bn(i, void 0, !1), this.componentType = e
    }

    setInput(e, n) {
        let r = this._tNode.inputs, i;
        if (r !== null && (i = r[e])) {
            if (this.previousInputValues ??= new Map, this.previousInputValues.has(e) && Object.is(this.previousInputValues.get(e), n)) return;
            let o = this._rootLView;
            ru(o[j], o, i, e, n), this.previousInputValues.set(e, n);
            let s = bn(this._tNode.index, o);
            ou(s, 1)
        }
    }

    get injector() {
        return new Rn(this._tNode, this._rootLView)
    }

    destroy() {
        this.hostView.destroy()
    }

    onDestroy(e) {
        this.hostView.onDestroy(e)
    }
};

function wE(t, e) {
    let n = t[j], r = Me;
    return t[r] = e, Ws(n, r, 2, "#host", null)
}

function DE(t, e, n, r, i, o, s) {
    let a = i[j];
    EE(r, t, e, s);
    let c = null;
    e !== null && (c = Wl(e, i[Er]));
    let l = o.rendererFactory.createRenderer(e, n), u = 16;
    n.signals ? u = 4096 : n.onPush && (u = 64);
    let d = zs(i, Sg(n), null, u, i[t.index], t, o, l, null, null, c);
    return a.firstCreatePass && Qc(a, t, r.length - 1), Gs(i, d), i[t.index] = d
}

function EE(t, e, n, r) {
    for (let i of t) e.mergedAttrs = _l(e.mergedAttrs, i.hostAttrs);
    e.mergedAttrs !== null && (nl(e, e.mergedAttrs, !0), n !== null && vg(r, n, e))
}

function IE(t, e, n, r, i, o) {
    let s = qe(), a = i[j], c = et(s, i);
    Ag(a, i, s, n, null, r);
    for (let u = 0; u < n.length; u++) {
        let d = s.directiveStart + u, h = _r(i, a, d, s);
        Vn(h, i)
    }
    Ng(a, i, s), c && Vn(c, i);
    let l = _r(i, a, s.directiveStart + s.componentOffset, s);
    if (t[Fe] = i[Fe] = l, o !== null) for (let u of o) u(l, e);
    return Ig(a, s, i), l
}

function CE(t, e, n, r) {
    if (r) Nc(t, n, ["ng-version", "18.1.0"]); else {
        let {attrs: i, classes: o} = Z0(e.selectors[0]);
        i && Nc(t, n, i), o && o.length > 0 && yg(t, n, o.join(" "))
    }
}

function _E(t, e, n) {
    let r = t.projection = [];
    for (let i = 0; i < e.length; i++) {
        let o = n[i];
        r.push(o != null ? Array.from(o) : null)
    }
}

function SE() {
    let t = qe();
    Ll(te()[j], t)
}

var kr = (() => {
    let e = class e {
    };
    e.__NG_ELEMENT_ID__ = TE;
    let t = e;
    return t
})();

function TE() {
    let t = qe();
    return Xg(t, te())
}

var ME = kr, Jg = class extends ME {
    constructor(e, n, r) {
        super(), this._lContainer = e, this._hostTNode = n, this._hostLView = r
    }

    get element() {
        return Ar(this._hostTNode, this._hostLView)
    }

    get injector() {
        return new Rn(this._hostTNode, this._hostLView)
    }

    get parentInjector() {
        let e = jl(this._hostTNode, this._hostLView);
        if (Np(e)) {
            let n = ms(e, this._hostLView), r = gs(e), i = n[j].data[r + 8];
            return new Rn(i, n)
        } else return new Rn(null, this._hostLView)
    }

    clear() {
        for (; this.length > 0;) this.remove(this.length - 1)
    }

    get(e) {
        let n = _h(this._lContainer);
        return n !== null && n[e] || null
    }

    get length() {
        return this._lContainer.length - Re
    }

    createEmbeddedView(e, n, r) {
        let i, o;
        typeof r == "number" ? i = r : r != null && (i = r.index, o = r.injector);
        let s = Di(this._lContainer, e.ssrId), a = e.createEmbeddedViewImpl(n || {}, o, s);
        return this.insertImpl(a, i, bi(this._hostTNode, s)), a
    }

    createComponent(e, n, r, i, o) {
        let s = e && !ub(e), a;
        if (s) a = n; else {
            let m = n || {};
            a = m.index, r = m.injector, i = m.projectableNodes, o = m.environmentInjector || m.ngModuleRef
        }
        let c = s ? e : new Ii(Pn(e)), l = r || this.parentInjector;
        if (!o && c.ngModule == null) {
            let v = (s ? l : this.parentInjector).get(ft, null);
            v && (o = v)
        }
        let u = Pn(c.componentType ?? {}), d = Di(this._lContainer, u?.id ?? null), h = d?.firstChild ?? null,
            f = c.create(l, i, h, o);
        return this.insertImpl(f.hostView, a, bi(this._hostTNode, d)), f
    }

    insert(e, n) {
        return this.insertImpl(e, n, !0)
    }

    insertImpl(e, n, r) {
        let i = e._lView;
        if (vb(i)) {
            let a = this.indexOf(e);
            if (a !== -1) this.detach(a); else {
                let c = i[Oe], l = new Jg(c, c[_t], c[Oe]);
                l.detach(l.indexOf(e))
            }
        }
        let o = this._adjustIndex(n), s = this._lContainer;
        return Zs(s, i, o, r), e.attachToViewContainerRef(), Wh(Cc(s), o, e), e
    }

    move(e, n) {
        return this.insert(e, n)
    }

    indexOf(e) {
        let n = _h(this._lContainer);
        return n !== null ? n.indexOf(e) : -1
    }

    remove(e) {
        let n = this._adjustIndex(e, -1), r = vi(this._lContainer, n);
        r && (ls(Cc(this._lContainer), n), $s(r[j], r))
    }

    detach(e) {
        let n = this._adjustIndex(e, -1), r = vi(this._lContainer, n);
        return r && ls(Cc(this._lContainer), n) != null ? new Bn(r) : null
    }

    _adjustIndex(e, n = 0) {
        return e ?? this.length + n
    }
};

function _h(t) {
    return t[fs]
}

function Cc(t) {
    return t[fs] || (t[fs] = [])
}

function Xg(t, e) {
    let n, r = e[t.index];
    return Ft(r) ? n = r : (n = kg(r, e, null, t), e[t.index] = n, Gs(e, n)), em(n, e, t, r), new Jg(n, t, e)
}

function xE(t, e) {
    let n = t[pe], r = n.createComment(""), i = et(e, t), o = Jl(n, i);
    return ws(n, o, r, Kw(n, i), !1), r
}

var em = tm, lu = () => !1;

function AE(t, e, n) {
    return lu(t, e, n)
}

function tm(t, e, n, r) {
    if (t[qt]) return;
    let i;
    n.type & 8 ? i = Ct(r) : i = xE(e, n), t[qt] = i
}

function NE(t, e, n) {
    if (t[qt] && t[gi]) return !0;
    let r = n[It], i = e.index - Me;
    if (!r || cw(e) || Bs(r, i)) return !1;
    let s = qc(r, i), a = r.data[zl]?.[i], [c, l] = aE(s, a);
    return t[qt] = c, t[gi] = l, !0
}

function kE(t, e, n, r) {
    lu(t, n, e) || tm(t, e, n, r)
}

function RE() {
    em = kE, lu = NE
}

var il = class t {
    constructor(e) {
        this.queryList = e, this.matches = null
    }

    clone() {
        return new t(this.queryList)
    }

    setDirty() {
        this.queryList.setDirty()
    }
}, ol = class t {
    constructor(e = []) {
        this.queries = e
    }

    createEmbeddedView(e) {
        let n = e.queries;
        if (n !== null) {
            let r = e.contentQueries !== null ? e.contentQueries[0] : n.length, i = [];
            for (let o = 0; o < r; o++) {
                let s = n.getByIndex(o), a = this.queries[s.indexInDeclarationView];
                i.push(a.clone())
            }
            return new t(i)
        }
        return null
    }

    insertView(e) {
        this.dirtyQueriesWithMatches(e)
    }

    detachView(e) {
        this.dirtyQueriesWithMatches(e)
    }

    finishViewCreation(e) {
        this.dirtyQueriesWithMatches(e)
    }

    dirtyQueriesWithMatches(e) {
        for (let n = 0; n < this.queries.length; n++) uu(e, n).matches !== null && this.queries[n].setDirty()
    }
}, sl = class {
    constructor(e, n, r = null) {
        this.flags = n, this.read = r, typeof e == "string" ? this.predicate = UE(e) : this.predicate = e
    }
}, al = class t {
    constructor(e = []) {
        this.queries = e
    }

    elementStart(e, n) {
        for (let r = 0; r < this.queries.length; r++) this.queries[r].elementStart(e, n)
    }

    elementEnd(e) {
        for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(e)
    }

    embeddedTView(e) {
        let n = null;
        for (let r = 0; r < this.length; r++) {
            let i = n !== null ? n.length : 0, o = this.getByIndex(r).embeddedTView(e, i);
            o && (o.indexInDeclarationView = r, n !== null ? n.push(o) : n = [o])
        }
        return n !== null ? new t(n) : null
    }

    template(e, n) {
        for (let r = 0; r < this.queries.length; r++) this.queries[r].template(e, n)
    }

    getByIndex(e) {
        return this.queries[e]
    }

    get length() {
        return this.queries.length
    }

    track(e) {
        this.queries.push(e)
    }
}, cl = class t {
    constructor(e, n = -1) {
        this.metadata = e, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n
    }

    elementStart(e, n) {
        this.isApplyingToNode(n) && this.matchTNode(e, n)
    }

    elementEnd(e) {
        this._declarationNodeIndex === e.index && (this._appliesToNextNode = !1)
    }

    template(e, n) {
        this.elementStart(e, n)
    }

    embeddedTView(e, n) {
        return this.isApplyingToNode(e) ? (this.crossesNgTemplate = !0, this.addMatch(-e.index, n), new t(this.metadata)) : null
    }

    isApplyingToNode(e) {
        if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
            let n = this._declarationNodeIndex, r = e.parent;
            for (; r !== null && r.type & 8 && r.index !== n;) r = r.parent;
            return n === (r !== null ? r.index : -1)
        }
        return this._appliesToNextNode
    }

    matchTNode(e, n) {
        let r = this.metadata.predicate;
        if (Array.isArray(r)) for (let i = 0; i < r.length; i++) {
            let o = r[i];
            this.matchTNodeWithReadOption(e, n, OE(n, o)), this.matchTNodeWithReadOption(e, n, is(n, e, o, !1, !1))
        } else r === wi ? n.type & 4 && this.matchTNodeWithReadOption(e, n, -1) : this.matchTNodeWithReadOption(e, n, is(n, e, r, !1, !1))
    }

    matchTNodeWithReadOption(e, n, r) {
        if (r !== null) {
            let i = this.metadata.read;
            if (i !== null) if (i === en || i === kr || i === wi && n.type & 4) this.addMatch(n.index, -2); else {
                let o = is(n, e, i, !1, !1);
                o !== null && this.addMatch(n.index, o)
            } else this.addMatch(n.index, r)
        }
    }

    addMatch(e, n) {
        this.matches === null ? this.matches = [e, n] : this.matches.push(e, n)
    }
};

function OE(t, e) {
    let n = t.localNames;
    if (n !== null) {
        for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1]
    }
    return null
}

function PE(t, e) {
    return t.type & 11 ? Ar(t, e) : t.type & 4 ? su(t, e) : null
}

function FE(t, e, n, r) {
    return n === -1 ? PE(e, t) : n === -2 ? LE(t, e, r) : _r(t, t[j], n, e)
}

function LE(t, e, n) {
    if (n === en) return Ar(e, t);
    if (n === wi) return su(e, t);
    if (n === kr) return Xg(e, t)
}

function nm(t, e, n, r) {
    let i = e[Gt].queries[r];
    if (i.matches === null) {
        let o = t.data, s = n.matches, a = [];
        for (let c = 0; s !== null && c < s.length; c += 2) {
            let l = s[c];
            if (l < 0) a.push(null); else {
                let u = o[l];
                a.push(FE(e, u, s[c + 1], n.metadata.read))
            }
        }
        i.matches = a
    }
    return i.matches
}

function ll(t, e, n, r) {
    let i = t.queries.getByIndex(n), o = i.matches;
    if (o !== null) {
        let s = nm(t, e, i, n);
        for (let a = 0; a < o.length; a += 2) {
            let c = o[a];
            if (c > 0) r.push(s[a / 2]); else {
                let l = o[a + 1], u = e[-c];
                for (let d = Re; d < u.length; d++) {
                    let h = u[d];
                    h[Fn] === h[Oe] && ll(h[j], h, l, r)
                }
                if (u[Ir] !== null) {
                    let d = u[Ir];
                    for (let h = 0; h < d.length; h++) {
                        let f = d[h];
                        ll(f[j], f, l, r)
                    }
                }
            }
        }
    }
    return r
}

function jE(t, e) {
    return t[Gt].queries[e].queryList
}

function VE(t, e, n) {
    let r = new zc((n & 4) === 4);
    return dD(t, e, r, r.destroy), (e[Gt] ??= new ol).queries.push(new il(r)) - 1
}

function BE(t, e, n, r) {
    let i = tt();
    if (i.firstCreatePass) {
        let o = qe();
        $E(i, new sl(e, n, r), o.index), HE(i, t), (n & 2) === 2 && (i.staticContentQueries = !0)
    }
    return VE(i, te(), n)
}

function UE(t) {
    return t.split(",").map(e => e.trim())
}

function $E(t, e, n) {
    t.queries === null && (t.queries = new al), t.queries.track(new cl(e, n))
}

function HE(t, e) {
    let n = t.contentQueries || (t.contentQueries = []), r = n.length ? n[n.length - 1] : -1;
    e !== r && n.push(t.queries.length - 1, e)
}

function uu(t, e) {
    return t.queries.getByIndex(e)
}

function zE(t, e) {
    let n = t[j], r = uu(n, e);
    return r.crossesNgTemplate ? ll(n, t, e, []) : nm(n, t, r, e)
}

function du(t) {
    let e = t.inputConfig, n = {};
    for (let r in e) if (e.hasOwnProperty(r)) {
        let i = e[r];
        Array.isArray(i) && i[3] && (n[r] = i[3])
    }
    t.inputTransforms = n
}

var vn = class {
}, Ci = class {
};
var ul = class extends vn {
    constructor(e, n, r) {
        super(), this._parent = n, this._bootstrapComponents = [], this.destroyCbs = [], this.componentFactoryResolver = new Cs(this);
        let i = ep(e);
        this._bootstrapComponents = lg(i.bootstrap), this._r3Injector = Up(e, n, [{
            provide: vn,
            useValue: this
        }, {
            provide: Sr,
            useValue: this.componentFactoryResolver
        }, ...r], We(e), new Set(["environment"])), this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(e)
    }

    get injector() {
        return this._r3Injector
    }

    destroy() {
        let e = this._r3Injector;
        !e.destroyed && e.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null
    }

    onDestroy(e) {
        this.destroyCbs.push(e)
    }
}, dl = class extends Ci {
    constructor(e) {
        super(), this.moduleType = e
    }

    create(e) {
        return new ul(this.moduleType, e, [])
    }
};
var _s = class extends vn {
    constructor(e) {
        super(), this.componentFactoryResolver = new Cs(this), this.instance = null;
        let n = new hi([...e.providers, {provide: vn, useValue: this}, {
            provide: Sr,
            useValue: this.componentFactoryResolver
        }], e.parent || Ml(), e.debugName, new Set(["environment"]));
        this.injector = n, e.runEnvironmentInitializers && n.resolveInjectorInitializers()
    }

    destroy() {
        this.injector.destroy()
    }

    onDestroy(e) {
        this.injector.onDestroy(e)
    }
};

function fu(t, e, n = null) {
    return new _s({providers: t, parent: e, debugName: n, runEnvironmentInitializers: !0}).injector
}

function Rr(t, e, n) {
    let r = t[e];
    return Object.is(r, n) ? !1 : (t[e] = n, !0)
}

function Pi(t) {
    return (t.flags & 32) === 32
}

function WE(t, e, n, r, i, o, s, a, c) {
    let l = e.consts, u = Ws(e, t, 4, s || null, a || null);
    xg(e, n, u, Cr(l, c)), Ll(e, u);
    let d = u.tView = nu(2, u, r, i, o, e.directiveRegistry, e.pipeRegistry, null, e.schemas, l, null);
    return e.queries !== null && (e.queries.template(e, u), d.queries = e.queries.embeddedTView(u)), u
}

function fl(t, e, n, r, i, o, s, a, c, l) {
    let u = n + Me, d = e.firstCreatePass ? WE(u, e, t, r, i, o, s, a, c) : e.data[u];
    Ni(d, !1);
    let h = rm(e, t, d, n);
    Fl() && Xl(e, t, h, d), Vn(h, t);
    let f = kg(h, t, h, d);
    return t[u] = f, Gs(t, f), AE(f, d, t), xl(d) && Cg(e, t, d), c != null && _g(t, d, l), d
}

function Fi(t, e, n, r, i, o, s, a) {
    let c = te(), l = tt(), u = Cr(l.consts, o);
    return fl(c, l, t, e, n, r, i, u, s, a), Fi
}

var rm = im;

function im(t, e, n, r) {
    return wn(!0), e[pe].createComment("")
}

function GE(t, e, n, r) {
    let i = e[It], o = !i || Ai() || Pi(n) || Bs(i, r);
    if (wn(o), o) return im(t, e, n, r);
    let s = i.data[yw]?.[r] ?? null;
    s !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = s);
    let a = Qs(i, t, e, n);
    Vs(i, r, a);
    let c = Gl(i, r);
    return Ks(c, a)
}

function qE() {
    rm = GE
}

function hu(t, e, n, r) {
    let i = te(), o = ki();
    if (Rr(i, o, e)) {
        let s = tt(), a = Pl();
        SD(a, i, t, e, n, r)
    }
    return hu
}

function om(t, e, n, r) {
    return Rr(t, ki(), n) ? e + ks(n) + r : Dn
}

function Xo(t, e) {
    return t << 17 | e << 2
}

function Un(t) {
    return t >> 17 & 32767
}

function ZE(t) {
    return (t & 2) == 2
}

function QE(t, e) {
    return t & 131071 | e << 17
}

function hl(t) {
    return t | 2
}

function Tr(t) {
    return (t & 131068) >> 2
}

function _c(t, e) {
    return t & -131069 | e << 2
}

function KE(t) {
    return (t & 1) === 1
}

function pl(t) {
    return t | 1
}

function YE(t, e, n, r, i, o) {
    let s = o ? e.classBindings : e.styleBindings, a = Un(s), c = Tr(s);
    t[r] = n;
    let l = !1, u;
    if (Array.isArray(n)) {
        let d = n;
        u = d[1], (u === null || Si(d, u) > 0) && (l = !0)
    } else u = n;
    if (i) if (c !== 0) {
        let h = Un(t[a + 1]);
        t[r + 1] = Xo(h, a), h !== 0 && (t[h + 1] = _c(t[h + 1], r)), t[a + 1] = QE(t[a + 1], r)
    } else t[r + 1] = Xo(a, 0), a !== 0 && (t[a + 1] = _c(t[a + 1], r)), a = r; else t[r + 1] = Xo(c, 0), a === 0 ? a = r : t[c + 1] = _c(t[c + 1], r), c = r;
    l && (t[r + 1] = hl(t[r + 1])), Sh(t, u, r, !0), Sh(t, u, r, !1), JE(e, u, t, r, o), s = Xo(a, c), o ? e.classBindings = s : e.styleBindings = s
}

function JE(t, e, n, r, i) {
    let o = i ? t.residualClasses : t.residualStyles;
    o != null && typeof e == "string" && Si(o, e) >= 0 && (n[r + 1] = pl(n[r + 1]))
}

function Sh(t, e, n, r) {
    let i = t[n + 1], o = e === null, s = r ? Un(i) : Tr(i), a = !1;
    for (; s !== 0 && (a === !1 || o);) {
        let c = t[s], l = t[s + 1];
        XE(c, e) && (a = !0, t[s + 1] = r ? pl(l) : hl(l)), s = r ? Un(l) : Tr(l)
    }
    a && (t[n + 1] = r ? hl(i) : pl(i))
}

function XE(t, e) {
    return t === null || e == null || (Array.isArray(t) ? t[1] : t) === e ? !0 : Array.isArray(t) && typeof e == "string" ? Si(t, e) >= 0 : !1
}

function Le(t, e, n) {
    let r = te(), i = ki();
    if (Rr(r, i, e)) {
        let o = tt(), s = Pl();
        Mg(o, s, r, t, e, r[pe], n, !1)
    }
    return Le
}

function Th(t, e, n, r, i) {
    let o = e.inputs, s = i ? "class" : "style";
    ru(t, n, o[s], s, r)
}

function pu(t, e) {
    return eI(t, e, null, !0), pu
}

function eI(t, e, n, r) {
    let i = te(), o = tt(), s = Nb(2);
    if (o.firstUpdatePass && nI(o, t, s, r), e !== Dn && Rr(i, s, e)) {
        let a = o.data[Hn()];
        aI(o, a, i, i[pe], t, i[s + 1] = cI(e, n), r, s)
    }
}

function tI(t, e) {
    return e >= t.expandoStartIndex
}

function nI(t, e, n, r) {
    let i = t.data;
    if (i[n + 1] === null) {
        let o = i[Hn()], s = tI(t, n);
        lI(o, r) && e === null && !s && (e = !1), e = rI(i, o, e, r), YE(i, o, e, n, s, r)
    }
}

function rI(t, e, n, r) {
    let i = Pb(t), o = r ? e.residualClasses : e.residualStyles;
    if (i === null) (r ? e.classBindings : e.styleBindings) === 0 && (n = Sc(null, t, e, n, r), n = _i(n, e.attrs, r), o = null); else {
        let s = e.directiveStylingLast;
        if (s === -1 || t[s] !== i) if (n = Sc(i, t, e, n, r), o === null) {
            let c = iI(t, e, r);
            c !== void 0 && Array.isArray(c) && (c = Sc(null, t, e, c[1], r), c = _i(c, e.attrs, r), oI(t, e, r, c))
        } else o = sI(t, e, r)
    }
    return o !== void 0 && (r ? e.residualClasses = o : e.residualStyles = o), n
}

function iI(t, e, n) {
    let r = n ? e.classBindings : e.styleBindings;
    if (Tr(r) !== 0) return t[Un(r)]
}

function oI(t, e, n, r) {
    let i = n ? e.classBindings : e.styleBindings;
    t[Un(i)] = r
}

function sI(t, e, n) {
    let r, i = e.directiveEnd;
    for (let o = 1 + e.directiveStylingLast; o < i; o++) {
        let s = t[o].hostAttrs;
        r = _i(r, s, n)
    }
    return _i(r, e.attrs, n)
}

function Sc(t, e, n, r, i) {
    let o = null, s = n.directiveEnd, a = n.directiveStylingLast;
    for (a === -1 ? a = n.directiveStart : a++; a < s && (o = e[a], r = _i(r, o.hostAttrs, i), o !== t);) a++;
    return t !== null && (n.directiveStylingLast = a), r
}

function _i(t, e, n) {
    let r = n ? 1 : 2, i = -1;
    if (e !== null) for (let o = 0; o < e.length; o++) {
        let s = e[o];
        typeof s == "number" ? i = s : i === r && (Array.isArray(t) || (t = t === void 0 ? [] : ["", t]), P0(t, s, n ? !0 : e[++o]))
    }
    return t === void 0 ? null : t
}

function aI(t, e, n, r, i, o, s, a) {
    if (!(e.type & 3)) return;
    let c = t.data, l = c[a + 1], u = KE(l) ? Mh(c, e, n, i, Tr(l), s) : void 0;
    if (!Ss(u)) {
        Ss(o) || ZE(l) && (o = Mh(c, null, n, i, a, s));
        let d = hp(Hn(), n);
        nD(r, s, d, i, o)
    }
}

function Mh(t, e, n, r, i, o) {
    let s = e === null, a;
    for (; i > 0;) {
        let c = t[i], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, h = n[i + 1];
        h === Dn && (h = d ? gn : void 0);
        let f = d ? pc(h, r) : u === r ? h : void 0;
        if (l && !Ss(f) && (f = pc(c, r)), Ss(f) && (a = f, s)) return a;
        let m = t[i + 1];
        i = s ? Un(m) : Tr(m)
    }
    if (e !== null) {
        let c = o ? e.residualClasses : e.residualStyles;
        c != null && (a = pc(c, r))
    }
    return a
}

function Ss(t) {
    return t !== void 0
}

function cI(t, e) {
    return t == null || t === "" || (typeof e == "string" ? t = t + e : typeof t == "object" && (t = We(Ri(t)))), t
}

function lI(t, e) {
    return (t.flags & (e ? 8 : 16)) !== 0
}

var gl = class {
    destroy(e) {
    }

    updateValue(e, n) {
    }

    swap(e, n) {
        let r = Math.min(e, n), i = Math.max(e, n), o = this.detach(i);
        if (i - r > 1) {
            let s = this.detach(r);
            this.attach(r, o), this.attach(i, s)
        } else this.attach(r, o)
    }

    move(e, n) {
        this.attach(n, this.detach(e))
    }
};

function Tc(t, e, n, r, i) {
    return t === n && Object.is(e, r) ? 1 : Object.is(i(t, e), i(n, r)) ? -1 : 0
}

function uI(t, e, n) {
    let r, i, o = 0, s = t.length - 1, a = void 0;
    if (Array.isArray(e)) {
        let c = e.length - 1;
        for (; o <= s && o <= c;) {
            let l = t.at(o), u = e[o], d = Tc(o, l, o, u, n);
            if (d !== 0) {
                d < 0 && t.updateValue(o, u), o++;
                continue
            }
            let h = t.at(s), f = e[c], m = Tc(s, h, c, f, n);
            if (m !== 0) {
                m < 0 && t.updateValue(s, f), s--, c--;
                continue
            }
            let v = n(o, l), C = n(s, h), N = n(o, u);
            if (Object.is(N, C)) {
                let $ = n(c, f);
                Object.is($, v) ? (t.swap(o, s), t.updateValue(s, f), c--, s--) : t.move(s, o), t.updateValue(o, u), o++;
                continue
            }
            if (r ??= new Ts, i ??= Ah(t, o, s, n), ml(t, r, o, N)) t.updateValue(o, u), o++, s++; else if (i.has(N)) r.set(v, t.detach(o)), s--; else {
                let $ = t.create(o, e[o]);
                t.attach(o, $), o++, s++
            }
        }
        for (; o <= c;) xh(t, r, n, o, e[o]), o++
    } else if (e != null) {
        let c = e[Symbol.iterator](), l = c.next();
        for (; !l.done && o <= s;) {
            let u = t.at(o), d = l.value, h = Tc(o, u, o, d, n);
            if (h !== 0) h < 0 && t.updateValue(o, d), o++, l = c.next(); else {
                r ??= new Ts, i ??= Ah(t, o, s, n);
                let f = n(o, d);
                if (ml(t, r, o, f)) t.updateValue(o, d), o++, s++, l = c.next(); else if (!i.has(f)) t.attach(o, t.create(o, d)), o++, s++, l = c.next(); else {
                    let m = n(o, u);
                    r.set(m, t.detach(o)), s--
                }
            }
        }
        for (; !l.done;) xh(t, r, n, t.length, l.value), l = c.next()
    }
    for (; o <= s;) t.destroy(t.detach(s--));
    r?.forEach(c => {
        t.destroy(c)
    })
}

function ml(t, e, n, r) {
    return e !== void 0 && e.has(r) ? (t.attach(n, e.get(r)), e.delete(r), !0) : !1
}

function xh(t, e, n, r, i) {
    if (ml(t, e, r, n(r, i))) t.updateValue(r, i); else {
        let o = t.create(r, i);
        t.attach(r, o)
    }
}

function Ah(t, e, n, r) {
    let i = new Set;
    for (let o = e; o <= n; o++) i.add(r(o, t.at(o)));
    return i
}

var Ts = class {
    constructor() {
        this.kvMap = new Map, this._vMap = void 0
    }

    has(e) {
        return this.kvMap.has(e)
    }

    delete(e) {
        if (!this.has(e)) return !1;
        let n = this.kvMap.get(e);
        return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(e, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(e), !0
    }

    get(e) {
        return this.kvMap.get(e)
    }

    set(e, n) {
        if (this.kvMap.has(e)) {
            let r = this.kvMap.get(e);
            this._vMap === void 0 && (this._vMap = new Map);
            let i = this._vMap;
            for (; i.has(r);) r = i.get(r);
            i.set(r, n)
        } else this.kvMap.set(e, n)
    }

    forEach(e) {
        for (let [n, r] of this.kvMap) if (e(r, n), this._vMap !== void 0) {
            let i = this._vMap;
            for (; i.has(r);) r = i.get(r), e(r, n)
        }
    }
};

function Or(t, e) {
    Lt("NgControlFlow");
    let n = te(), r = ki(), i = n[r] !== Dn ? n[r] : -1, o = i !== -1 ? Ms(n, Me + i) : void 0, s = 0;
    if (Rr(n, r, t)) {
        let a = Y(null);
        try {
            if (o !== void 0 && jg(o, s), t !== -1) {
                let c = Me + t, l = Ms(n, c), u = wl(n[j], c), d = Di(l, u.tView.ssrId),
                    h = qs(n, u, e, {dehydratedView: d});
                Zs(l, h, s, bi(u, d))
            }
        } finally {
            Y(a)
        }
    } else if (o !== void 0) {
        let a = Lg(o, s);
        a !== void 0 && (a[Fe] = e)
    }
}

var yl = class {
    constructor(e, n, r) {
        this.lContainer = e, this.$implicit = n, this.$index = r
    }

    get $count() {
        return this.lContainer.length - Re
    }
};
var vl = class {
    constructor(e, n, r) {
        this.hasEmptyBlock = e, this.trackByFn = n, this.liveCollection = r
    }
};

function Pr(t, e, n, r, i, o, s, a, c, l, u, d, h) {
    Lt("NgControlFlow");
    let f = te(), m = tt(), v = c !== void 0, C = te(), N = a ? s.bind(C[Xe][Fe]) : s, $ = new vl(v, N);
    C[Me + t] = $, fl(f, m, t + 1, e, n, r, i, Cr(m.consts, o)), v && fl(f, m, t + 2, c, l, u, d, Cr(m.consts, h))
}

var bl = class extends gl {
    constructor(e, n, r) {
        super(), this.lContainer = e, this.hostLView = n, this.templateTNode = r, this.operationsCounter = void 0, this.needsIndexUpdate = !1
    }

    get length() {
        return this.lContainer.length - Re
    }

    at(e) {
        return this.getLView(e)[Fe].$implicit
    }

    attach(e, n) {
        let r = n[It];
        this.needsIndexUpdate ||= e !== this.length, Zs(this.lContainer, n, e, bi(this.templateTNode, r))
    }

    detach(e) {
        return this.needsIndexUpdate ||= e !== this.length - 1, dI(this.lContainer, e)
    }

    create(e, n) {
        let r = Di(this.lContainer, this.templateTNode.tView.ssrId),
            i = qs(this.hostLView, this.templateTNode, new yl(this.lContainer, n, e), {dehydratedView: r});
        return this.operationsCounter?.recordCreate(), i
    }

    destroy(e) {
        $s(e[j], e), this.operationsCounter?.recordDestroy()
    }

    updateValue(e, n) {
        this.getLView(e)[Fe].$implicit = n
    }

    reset() {
        this.needsIndexUpdate = !1, this.operationsCounter?.reset()
    }

    updateIndexes() {
        if (this.needsIndexUpdate) for (let e = 0; e < this.length; e++) this.getLView(e)[Fe].$index = e
    }

    getLView(e) {
        return fI(this.lContainer, e)
    }
};

function Fr(t) {
    let e = Y(null), n = Hn();
    try {
        let r = te(), i = r[j], o = r[n], s = n + 1, a = Ms(r, s);
        if (o.liveCollection === void 0) {
            let l = wl(i, s);
            o.liveCollection = new bl(a, r, l)
        } else o.liveCollection.reset();
        let c = o.liveCollection;
        if (uI(c, t, o.trackByFn), c.updateIndexes(), o.hasEmptyBlock) {
            let l = ki(), u = c.length === 0;
            if (Rr(r, l, u)) {
                let d = n + 2, h = Ms(r, d);
                if (u) {
                    let f = wl(i, d), m = Di(h, f.tView.ssrId), v = qs(r, f, void 0, {dehydratedView: m});
                    Zs(h, v, 0, bi(f, m))
                } else jg(h, 0)
            }
        }
    } finally {
        Y(e)
    }
}

function Ms(t, e) {
    return t[e]
}

function dI(t, e) {
    return vi(t, e)
}

function fI(t, e) {
    return Lg(t, e)
}

function wl(t, e) {
    return Al(t, e)
}

function hI(t, e, n, r, i, o) {
    let s = e.consts, a = Cr(s, i), c = Ws(e, t, 2, r, a);
    return xg(e, n, c, Cr(s, o)), c.attrs !== null && nl(c, c.attrs, !1), c.mergedAttrs !== null && nl(c, c.mergedAttrs, !0), e.queries !== null && e.queries.elementStart(e, c), c
}

function ie(t, e, n, r) {
    let i = te(), o = tt(), s = Me + t, a = i[pe], c = o.firstCreatePass ? hI(s, o, i, e, n, r) : o.data[s],
        l = sm(o, i, c, a, e, t);
    i[s] = l;
    let u = xl(c);
    return Ni(c, !0), vg(a, l, c), !Pi(c) && Fl() && Xl(o, i, l, c), Db() === 0 && Vn(l, i), Eb(), u && (Cg(o, i, c), Ig(o, c, i)), r !== null && _g(i, c), ie
}

function se() {
    let t = qe();
    wp() ? Mb() : (t = t.parent, Ni(t, !1));
    let e = t;
    Cb(e) && Sb(), Ib();
    let n = tt();
    return n.firstCreatePass && (Ll(n, t), cp(t) && n.queries.elementEnd(t)), e.classesWithoutHost != null && Ub(e) && Th(n, e, te(), e.classesWithoutHost, !0), e.stylesWithoutHost != null && $b(e) && Th(n, e, te(), e.stylesWithoutHost, !1), se
}

function $e(t, e, n, r) {
    return ie(t, e, n, r), se(), $e
}

var sm = (t, e, n, r, i, o) => (wn(!0), Kl(r, i, Mp()));

function pI(t, e, n, r, i, o) {
    let s = e[It], a = !s || Ai() || Pi(n) || Bs(s, o);
    if (wn(a), a) return Kl(r, i, Mp());
    let c = Qs(s, t, e, n);
    return rg(s, o) && Vs(s, o, c.nextSibling), s && (zp(n) || Wp(c)) && Mi(n) && (_b(n), mg(c)), c
}

function gI() {
    sm = pI
}

var mI = (t, e, n, r) => (wn(!0), dg(e[pe], ""));

function yI(t, e, n, r) {
    let i, o = e[It], s = !o || Ai() || Pi(n);
    if (wn(s), s) return dg(e[pe], "");
    let a = Qs(o, t, e, n), c = Tw(o, r);
    return Vs(o, r, a), i = Ks(c, a), i
}

function vI() {
    mI = yI
}

function Li() {
    return te()
}

var xs = "en-US";
var bI = xs;

function wI(t) {
    typeof t == "string" && (bI = t.toLowerCase().replace(/_/g, "-"))
}

var DI = (t, e, n) => {
};

function jt(t, e, n, r) {
    let i = te(), o = tt(), s = qe();
    return II(o, i, i[pe], s, t, e, r), jt
}

function EI(t, e, n, r) {
    let i = t.cleanup;
    if (i != null) for (let o = 0; o < i.length - 1; o += 2) {
        let s = i[o];
        if (s === n && i[o + 1] === r) {
            let a = e[ds], c = i[o + 2];
            return a.length > c ? a[c] : null
        }
        typeof s == "string" && (o += 2)
    }
    return null
}

function II(t, e, n, r, i, o, s) {
    let a = xl(r), l = t.firstCreatePass && Pg(t), u = e[Fe], d = Og(e), h = !0;
    if (r.type & 3 || s) {
        let v = et(r, e), C = s ? s(v) : v, N = d.length, $ = s ? ee => s(Ct(ee[r.index])) : r.index, z = null;
        if (!s && a && (z = EI(t, e, i, r.index)), z !== null) {
            let ee = z.__ngLastListenerFn__ || z;
            ee.__ngNextListenerFn__ = o, z.__ngLastListenerFn__ = o, h = !1
        } else {
            o = kh(r, e, u, o), DI(v, i, o);
            let ee = n.listen(C, i, o);
            d.push(o, ee), l && l.push(i, $, N, N + 1)
        }
    } else o = kh(r, e, u, o);
    let f = r.outputs, m;
    if (h && f !== null && (m = f[i])) {
        let v = m.length;
        if (v) for (let C = 0; C < v; C += 2) {
            let N = m[C], $ = m[C + 1], Ae = e[N][$].subscribe(o), le = d.length;
            d.push(o, Ae), l && l.push(i, r.index, le, -(le + 1))
        }
    }
}

function Nh(t, e, n, r) {
    let i = Y(null);
    try {
        return At(6, e, n), n(r) !== !1
    } catch (o) {
        return Fg(t, o), !1
    } finally {
        At(7, e, n), Y(i)
    }
}

function kh(t, e, n, r) {
    return function i(o) {
        if (o === Function) return r;
        let s = t.componentOffset > -1 ? bn(t.index, e) : e;
        ou(s, 5);
        let a = Nh(e, n, r, o), c = i.__ngNextListenerFn__;
        for (; c;) a = Nh(e, n, c, o) && a, c = c.__ngNextListenerFn__;
        return a
    }
}

function tn(t = 1) {
    return Lb(t)
}

function gu(t, e, n) {
    return am(t, "", e, "", n), gu
}

function am(t, e, n, r, i) {
    let o = te(), s = om(o, e, n, r);
    if (s !== Dn) {
        let a = tt(), c = Pl();
        Mg(a, c, o, t, s, o[pe], i, !1)
    }
    return am
}

function cm(t, e, n, r) {
    BE(t, e, n, r)
}

function lm(t) {
    let e = te(), n = tt(), r = Ep();
    kl(r + 1);
    let i = uu(n, r);
    if (t.dirty && yb(e) === ((i.metadata.flags & 2) === 2)) {
        if (i.matches === null) t.reset([]); else {
            let o = zE(e, r);
            t.reset(o, iw), t.notifyOnChanges()
        }
        return !0
    }
    return !1
}

function um() {
    return jE(te(), Ep())
}

function mu(t) {
    let e = xb();
    return mb(e, Me + t)
}

function je(t, e = "") {
    let n = te(), r = tt(), i = t + Me, o = r.firstCreatePass ? Ws(r, i, 1, e, null) : r.data[i], s = dm(r, n, o, e, t);
    n[i] = s, Fl() && Xl(r, n, s, o), Ni(o, !1)
}

var dm = (t, e, n, r, i) => (wn(!0), ug(e[pe], r));

function CI(t, e, n, r, i) {
    let o = e[It], s = !o || Ai() || Pi(n) || Bs(o, i);
    return wn(s), s ? ug(e[pe], r) : Qs(o, t, e, n)
}

function _I() {
    dm = CI
}

function nn(t) {
    return Ys("", t, ""), nn
}

function Ys(t, e, n) {
    let r = te(), i = om(r, t, e, n);
    return i !== Dn && AD(r, Hn(), i), Ys
}

var SI = (() => {
    let e = class e {
        constructor(r) {
            this._injector = r, this.cachedInjectors = new Map
        }

        getOrCreateStandaloneInjector(r) {
            if (!r.standalone) return null;
            if (!this.cachedInjectors.has(r)) {
                let i = rp(!1, r.type), o = i.length > 0 ? fu([i], this._injector, `Standalone[${r.type.name}]`) : null;
                this.cachedInjectors.set(r, o)
            }
            return this.cachedInjectors.get(r)
        }

        ngOnDestroy() {
            try {
                for (let r of this.cachedInjectors.values()) r !== null && r.destroy()
            } finally {
                this.cachedInjectors.clear()
            }
        }
    };
    e.\u0275prov = O({token: e, providedIn: "environment", factory: () => new e(H(ft))});
    let t = e;
    return t
})();

function Ze(t) {
    Lt("NgStandalone"), t.getStandaloneInjector = e => e.get(SI).getOrCreateStandaloneInjector(t)
}

var Js = (() => {
    let e = class e {
        log(r) {
            console.log(r)
        }

        warn(r) {
            console.warn(r)
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "platform"});
    let t = e;
    return t
})();
var fm = new L("");

function ji(t) {
    return !!t && typeof t.then == "function"
}

function hm(t) {
    return !!t && typeof t.subscribe == "function"
}

var pm = new L(""), gm = (() => {
    let e = class e {
        constructor() {
            this.initialized = !1, this.done = !1, this.donePromise = new Promise((r, i) => {
                this.resolve = r, this.reject = i
            }), this.appInits = b(pm, {optional: !0}) ?? []
        }

        runInitializers() {
            if (this.initialized) return;
            let r = [];
            for (let o of this.appInits) {
                let s = o();
                if (ji(s)) r.push(s); else if (hm(s)) {
                    let a = new Promise((c, l) => {
                        s.subscribe({complete: c, error: l})
                    });
                    r.push(a)
                }
            }
            let i = () => {
                this.done = !0, this.resolve()
            };
            Promise.all(r).then(() => {
                i()
            }).catch(o => {
                this.reject(o)
            }), r.length === 0 && i(), this.initialized = !0
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})(), Lr = new L("");

function TI() {
    yf(() => {
        throw new D(600, !1)
    })
}

function MI(t) {
    return t.isBoundToModule
}

var xI = 10;

function AI(t, e, n) {
    try {
        let r = n();
        return ji(r) ? r.catch(i => {
            throw e.runOutsideAngular(() => t.handleError(i)), i
        }) : r
    } catch (r) {
        throw e.runOutsideAngular(() => t.handleError(r)), r
    }
}

var rn = (() => {
    let e = class e {
        constructor() {
            this._bootstrapListeners = [], this._runningTick = !1, this._destroyed = !1, this._destroyListeners = [], this._views = [], this.internalErrorHandler = b($p), this.afterRenderEffectManager = b(Yg), this.zonelessEnabled = b(au), this.externalTestViews = new Set, this.beforeRender = new Pe, this.afterTick = new Pe, this.componentTypes = [], this.components = [], this.isStable = b(zn).hasPendingTasks.pipe(W(r => !r)), this._injector = b(ft)
        }

        get allViews() {
            return [...this.externalTestViews.keys(), ...this._views]
        }

        get destroyed() {
            return this._destroyed
        }

        get injector() {
            return this._injector
        }

        bootstrap(r, i) {
            let o = r instanceof Is;
            if (!this._injector.get(gm).done) {
                let f = !o && Xh(r), m = !1;
                throw new D(405, m)
            }
            let a;
            o ? a = r : a = this._injector.get(Sr).resolveComponentFactory(r), this.componentTypes.push(a.componentType);
            let c = MI(a) ? void 0 : this._injector.get(vn), l = i || a.selector, u = a.create(Zt.NULL, [], l, c),
                d = u.location.nativeElement, h = u.injector.get(fm, null);
            return h?.registerApplication(d), u.onDestroy(() => {
                this.detachView(u.hostView), Mc(this.components, u), h?.unregisterApplication(d)
            }), this._loadComponent(u), u
        }

        tick() {
            this._tick(!0)
        }

        _tick(r) {
            if (this._runningTick) throw new D(101, !1);
            let i = Y(null);
            try {
                this._runningTick = !0, this.detectChangesInAttachedViews(r)
            } catch (o) {
                this.internalErrorHandler(o)
            } finally {
                this._runningTick = !1, Y(i), this.afterTick.next()
            }
        }

        detectChangesInAttachedViews(r) {
            let i = null;
            this._injector.destroyed || (i = this._injector.get(yn, null, {optional: !0}));
            let o = 0, s = this.afterRenderEffectManager;
            for (; o < xI;) {
                let a = o === 0;
                if (r || !a) {
                    this.beforeRender.next(a);
                    for (let {_lView: c, notifyErrorHandler: l} of this._views) NI(c, l, a, this.zonelessEnabled)
                } else i?.begin?.(), i?.end?.();
                if (o++, s.executeInternalCallbacks(), !this.allViews.some(({_lView: c}) => mi(c)) && (s.execute(), !this.allViews.some(({_lView: c}) => mi(c)))) break
            }
        }

        attachView(r) {
            let i = r;
            this._views.push(i), i.attachToAppRef(this)
        }

        detachView(r) {
            let i = r;
            Mc(this._views, i), i.detachFromAppRef()
        }

        _loadComponent(r) {
            this.attachView(r.hostView), this.tick(), this.components.push(r);
            let i = this._injector.get(Lr, []);
            [...this._bootstrapListeners, ...i].forEach(o => o(r))
        }

        ngOnDestroy() {
            if (!this._destroyed) try {
                this._destroyListeners.forEach(r => r()), this._views.slice().forEach(r => r.destroy())
            } finally {
                this._destroyed = !0, this._views = [], this._bootstrapListeners = [], this._destroyListeners = []
            }
        }

        onDestroy(r) {
            return this._destroyListeners.push(r), () => Mc(this._destroyListeners, r)
        }

        destroy() {
            if (this._destroyed) throw new D(406, !1);
            let r = this._injector;
            r.destroy && !r.destroyed && r.destroy()
        }

        get viewCount() {
            return this._views.length
        }

        warnIfDestroyed() {
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})();

function Mc(t, e) {
    let n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}

var es;

function Xs(t) {
    es ??= new WeakMap;
    let e = es.get(t);
    if (e) return e;
    let n = t.isStable.pipe(wt(r => r)).toPromise().then(() => {
    });
    return es.set(t, n), t.onDestroy(() => es?.delete(t)), n
}

function NI(t, e, n, r) {
    if (!n && !mi(t)) return;
    Ug(t, e, n && !r ? 0 : 1)
}

var Dl = class {
    constructor(e, n) {
        this.ngModuleFactory = e, this.componentFactories = n
    }
}, yu = (() => {
    let e = class e {
        compileModuleSync(r) {
            return new dl(r)
        }

        compileModuleAsync(r) {
            return Promise.resolve(this.compileModuleSync(r))
        }

        compileModuleAndAllComponentsSync(r) {
            let i = this.compileModuleSync(r), o = ep(r), s = lg(o.declarations).reduce((a, c) => {
                let l = Pn(c);
                return l && a.push(new Ii(l)), a
            }, []);
            return new Dl(i, s)
        }

        compileModuleAndAllComponentsAsync(r) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(r))
        }

        clearCache() {
        }

        clearCacheFor(r) {
        }

        getModuleId(r) {
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})();
var kI = (() => {
    let e = class e {
        constructor() {
            this.zone = b(he), this.changeDetectionScheduler = b(Ei), this.applicationRef = b(rn)
        }

        initialize() {
            this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
                next: () => {
                    this.changeDetectionScheduler.runningTick || this.zone.run(() => {
                        this.applicationRef.tick()
                    })
                }
            }))
        }

        ngOnDestroy() {
            this._onMicrotaskEmptySubscription?.unsubscribe()
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})(), RI = new L("", {factory: () => !1});

function mm({ngZoneFactory: t, ignoreChangesOutsideZone: e}) {
    return t ??= () => new he(vm()), [{provide: he, useFactory: t}, {
        provide: On, multi: !0, useFactory: () => {
            let n = b(kI, {optional: !0});
            return () => n.initialize()
        }
    }, {
        provide: On, multi: !0, useFactory: () => {
            let n = b(PI);
            return () => {
                n.initialize()
            }
        }
    }, {provide: $p, useFactory: OI}, e === !0 ? {provide: Zg, useValue: !0} : []]
}

function OI() {
    let t = b(he), e = b(Qt);
    return n => t.runOutsideAngular(() => e.handleError(n))
}

function ym(t) {
    let e = t?.ignoreChangesOutsideZone, n = mm({
        ngZoneFactory: () => {
            let r = vm(t);
            return r.shouldCoalesceEventChangeDetection && Lt("NgZone_CoalesceEvent"), new he(r)
        }, ignoreChangesOutsideZone: e
    });
    return $n([{provide: RI, useValue: !0}, {provide: au, useValue: !1}, n])
}

function vm(t) {
    return {
        enableLongStackTrace: !1,
        shouldCoalesceEventChangeDetection: t?.eventCoalescing ?? !1,
        shouldCoalesceRunChangeDetection: t?.runCoalescing ?? !1
    }
}

var PI = (() => {
    let e = class e {
        constructor() {
            this.subscription = new we, this.initialized = !1, this.zone = b(he), this.pendingTasks = b(zn)
        }

        initialize() {
            if (this.initialized) return;
            this.initialized = !0;
            let r = null;
            !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (r = this.pendingTasks.add()), this.zone.runOutsideAngular(() => {
                this.subscription.add(this.zone.onStable.subscribe(() => {
                    he.assertNotInAngularZone(), queueMicrotask(() => {
                        r !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(r), r = null)
                    })
                }))
            }), this.subscription.add(this.zone.onUnstable.subscribe(() => {
                he.assertInAngularZone(), r ??= this.pendingTasks.add()
            }))
        }

        ngOnDestroy() {
            this.subscription.unsubscribe()
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})();
var FI = (() => {
    let e = class e {
        constructor() {
            this.appRef = b(rn), this.taskService = b(zn), this.ngZone = b(he), this.zonelessEnabled = b(au), this.disableScheduling = b(Zg, {optional: !0}) ?? !1, this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run, this.schedulerTickApplyArgs = [{data: {__scheduler_tick__: !0}}], this.subscriptions = new we, this.cancelScheduledCallback = null, this.shouldRefreshViews = !1, this.useMicrotaskScheduler = !1, this.runningTick = !1, this.pendingRenderTaskId = null, this.subscriptions.add(this.appRef.afterTick.subscribe(() => {
                this.runningTick || this.cleanup()
            })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => {
                this.runningTick || this.cleanup()
            })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof tl || !this.zoneIsDefined)
        }

        notify(r) {
            if (!this.zonelessEnabled && r === 5) return;
            switch (r) {
                case 3:
                case 2:
                case 0:
                case 4:
                case 5:
                case 1: {
                    this.shouldRefreshViews = !0;
                    break
                }
                case 8:
                case 7:
                case 6:
                case 9:
                default:
            }
            if (!this.shouldScheduleTick()) return;
            let i = this.useMicrotaskScheduler ? wh : Qg;
            this.pendingRenderTaskId = this.taskService.add(), this.zoneIsDefined ? Zone.root.run(() => {
                this.cancelScheduledCallback = i(() => {
                    this.tick(this.shouldRefreshViews)
                })
            }) : this.cancelScheduledCallback = i(() => {
                this.tick(this.shouldRefreshViews)
            })
        }

        shouldScheduleTick() {
            return !(this.disableScheduling || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && he.isInAngularZone())
        }

        tick(r) {
            if (this.runningTick || this.appRef.destroyed) return;
            let i = this.taskService.add();
            try {
                this.ngZone.run(() => {
                    this.runningTick = !0, this.appRef._tick(r)
                }, void 0, this.schedulerTickApplyArgs)
            } catch (o) {
                throw this.taskService.remove(i), o
            } finally {
                this.cleanup()
            }
            this.useMicrotaskScheduler = !0, wh(() => {
                this.useMicrotaskScheduler = !1, this.taskService.remove(i)
            })
        }

        ngOnDestroy() {
            this.subscriptions.unsubscribe(), this.cleanup()
        }

        cleanup() {
            if (this.shouldRefreshViews = !1, this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
                let r = this.pendingRenderTaskId;
                this.pendingRenderTaskId = null, this.taskService.remove(r)
            }
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})();

function LI() {
    return typeof $localize < "u" && $localize.locale || xs
}

var vu = new L("", {providedIn: "root", factory: () => b(vu, G.Optional | G.SkipSelf) || LI()});
var bm = new L("");
var ss = null;

function jI(t = [], e) {
    return Zt.create({
        name: e,
        providers: [{provide: Os, useValue: "platform"}, {provide: bm, useValue: new Set([() => ss = null])}, ...t]
    })
}

function VI(t = []) {
    if (ss) return ss;
    let e = jI(t);
    return ss = e, TI(), BI(e), e
}

function BI(t) {
    t.get(Ul, null)?.forEach(n => n())
}

var En = (() => {
    let e = class e {
    };
    e.__NG_ELEMENT_ID__ = UI;
    let t = e;
    return t
})();

function UI(t) {
    return $I(qe(), te(), (t & 16) === 16)
}

function $I(t, e, n) {
    if (Mi(t) && !n) {
        let r = bn(t.index, e);
        return new Bn(r, r)
    } else if (t.type & 175) {
        let r = e[Xe];
        return new Bn(r, e)
    }
    return null
}

function wm(t) {
    try {
        let {rootComponent: e, appProviders: n, platformProviders: r} = t, i = VI(r),
            o = [mm({}), {provide: Ei, useExisting: FI}, ...n || []],
            a = new _s({providers: o, parent: i, debugName: "", runEnvironmentInitializers: !1}).injector,
            c = a.get(he);
        return c.run(() => {
            a.resolveInjectorInitializers();
            let l = a.get(Qt, null), u;
            c.runOutsideAngular(() => {
                u = c.onError.subscribe({
                    next: f => {
                        l.handleError(f)
                    }
                })
            });
            let d = () => a.destroy(), h = i.get(bm);
            return h.add(d), a.onDestroy(() => {
                u.unsubscribe(), h.delete(d)
            }), AI(l, c, () => {
                let f = a.get(gm);
                return f.runInitializers(), f.donePromise.then(() => {
                    let m = a.get(vu, xs);
                    wI(m || xs);
                    let v = a.get(rn);
                    return e !== void 0 && v.bootstrap(e), v
                })
            })
        })
    } catch (e) {
        return Promise.reject(e)
    }
}

var Dm = new L("");
var Rh = !1;

function HI() {
    Rh || (Rh = !0, Iw(), gI(), _I(), vI(), qE(), RE(), lE(), uD())
}

function zI(t, e) {
    return Xs(t)
}

function Em() {
    return $n([{
        provide: Ko, useFactory: () => {
            let t = !0;
            return Jo() && (t = !!b(Nr, {optional: !0})?.get(tg, null)), t && Lt("NgHydration"), t
        }
    }, {
        provide: On, useValue: () => {
            nE(!1), Jo() && b(Ko) && (WI(), HI())
        }, multi: !0
    }, {provide: og, useFactory: () => Jo() && b(Ko)}, {
        provide: Lr, useFactory: () => {
            if (Jo() && b(Ko)) {
                let t = b(rn), e = b(Zt);
                return () => {
                    zI(t, e).then(() => {
                        sE(t)
                    })
                }
            }
            return () => {
            }
        }, multi: !0
    }])
}

function WI() {
    let t = Ls(), e;
    for (let n of t.body.childNodes) if (n.nodeType === Node.COMMENT_NODE && n.textContent?.trim() === Dw) {
        e = n;
        break
    }
    if (!e) throw new D(-507, !1)
}

function Vi(t) {
    return typeof t == "boolean" ? t : t != null && t !== "false"
}

var Tm = null;

function jr() {
    return Tm
}

function Mm(t) {
    Tm ??= t
}

var ea = class {
};
var Ve = new L(""), xm = (() => {
    let e = class e {
        historyGo(r) {
            throw new Error("")
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: () => b(GI), providedIn: "platform"});
    let t = e;
    return t
})();
var GI = (() => {
    let e = class e extends xm {
        constructor() {
            super(), this._doc = b(Ve), this._location = window.location, this._history = window.history
        }

        getBaseHrefFromDOM() {
            return jr().getBaseHref(this._doc)
        }

        onPopState(r) {
            let i = jr().getGlobalEventTarget(this._doc, "window");
            return i.addEventListener("popstate", r, !1), () => i.removeEventListener("popstate", r)
        }

        onHashChange(r) {
            let i = jr().getGlobalEventTarget(this._doc, "window");
            return i.addEventListener("hashchange", r, !1), () => i.removeEventListener("hashchange", r)
        }

        get href() {
            return this._location.href
        }

        get protocol() {
            return this._location.protocol
        }

        get hostname() {
            return this._location.hostname
        }

        get port() {
            return this._location.port
        }

        get pathname() {
            return this._location.pathname
        }

        get search() {
            return this._location.search
        }

        get hash() {
            return this._location.hash
        }

        set pathname(r) {
            this._location.pathname = r
        }

        pushState(r, i, o) {
            this._history.pushState(r, i, o)
        }

        replaceState(r, i, o) {
            this._history.replaceState(r, i, o)
        }

        forward() {
            this._history.forward()
        }

        back() {
            this._history.back()
        }

        historyGo(r = 0) {
            this._history.go(r)
        }

        getState() {
            return this._history.state
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: () => new e, providedIn: "platform"});
    let t = e;
    return t
})();

function Am(t, e) {
    if (t.length == 0) return e;
    if (e.length == 0) return t;
    let n = 0;
    return t.endsWith("/") && n++, e.startsWith("/") && n++, n == 2 ? t + e.substring(1) : n == 1 ? t + e : t + "/" + e
}

function Im(t) {
    let e = t.match(/#|\?|$/), n = e && e.index || t.length, r = n - (t[n - 1] === "/" ? 1 : 0);
    return t.slice(0, r) + t.slice(n)
}

function Wn(t) {
    return t && t[0] !== "?" ? "?" + t : t
}

var Vr = (() => {
    let e = class e {
        historyGo(r) {
            throw new Error("")
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: () => b(Nm), providedIn: "root"});
    let t = e;
    return t
})(), qI = new L(""), Nm = (() => {
    let e = class e extends Vr {
        constructor(r, i) {
            super(), this._platformLocation = r, this._removeListenerFns = [], this._baseHref = i ?? this._platformLocation.getBaseHrefFromDOM() ?? b(Ve).location?.origin ?? ""
        }

        ngOnDestroy() {
            for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
        }

        onPopState(r) {
            this._removeListenerFns.push(this._platformLocation.onPopState(r), this._platformLocation.onHashChange(r))
        }

        getBaseHref() {
            return this._baseHref
        }

        prepareExternalUrl(r) {
            return Am(this._baseHref, r)
        }

        path(r = !1) {
            let i = this._platformLocation.pathname + Wn(this._platformLocation.search),
                o = this._platformLocation.hash;
            return o && r ? `${i}${o}` : i
        }

        pushState(r, i, o, s) {
            let a = this.prepareExternalUrl(o + Wn(s));
            this._platformLocation.pushState(r, i, a)
        }

        replaceState(r, i, o, s) {
            let a = this.prepareExternalUrl(o + Wn(s));
            this._platformLocation.replaceState(r, i, a)
        }

        forward() {
            this._platformLocation.forward()
        }

        back() {
            this._platformLocation.back()
        }

        getState() {
            return this._platformLocation.getState()
        }

        historyGo(r = 0) {
            this._platformLocation.historyGo?.(r)
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)(H(xm), H(qI, 8))
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})();
var Bi = (() => {
    let e = class e {
        constructor(r) {
            this._subject = new ke, this._urlChangeListeners = [], this._urlChangeSubscription = null, this._locationStrategy = r;
            let i = this._locationStrategy.getBaseHref();
            this._basePath = KI(Im(Cm(i))), this._locationStrategy.onPopState(o => {
                this._subject.emit({url: this.path(!0), pop: !0, state: o.state, type: o.type})
            })
        }

        ngOnDestroy() {
            this._urlChangeSubscription?.unsubscribe(), this._urlChangeListeners = []
        }

        path(r = !1) {
            return this.normalize(this._locationStrategy.path(r))
        }

        getState() {
            return this._locationStrategy.getState()
        }

        isCurrentPathEqualTo(r, i = "") {
            return this.path() == this.normalize(r + Wn(i))
        }

        normalize(r) {
            return e.stripTrailingSlash(QI(this._basePath, Cm(r)))
        }

        prepareExternalUrl(r) {
            return r && r[0] !== "/" && (r = "/" + r), this._locationStrategy.prepareExternalUrl(r)
        }

        go(r, i = "", o = null) {
            this._locationStrategy.pushState(o, "", r, i), this._notifyUrlChangeListeners(this.prepareExternalUrl(r + Wn(i)), o)
        }

        replaceState(r, i = "", o = null) {
            this._locationStrategy.replaceState(o, "", r, i), this._notifyUrlChangeListeners(this.prepareExternalUrl(r + Wn(i)), o)
        }

        forward() {
            this._locationStrategy.forward()
        }

        back() {
            this._locationStrategy.back()
        }

        historyGo(r = 0) {
            this._locationStrategy.historyGo?.(r)
        }

        onUrlChange(r) {
            return this._urlChangeListeners.push(r), this._urlChangeSubscription ??= this.subscribe(i => {
                this._notifyUrlChangeListeners(i.url, i.state)
            }), () => {
                let i = this._urlChangeListeners.indexOf(r);
                this._urlChangeListeners.splice(i, 1), this._urlChangeListeners.length === 0 && (this._urlChangeSubscription?.unsubscribe(), this._urlChangeSubscription = null)
            }
        }

        _notifyUrlChangeListeners(r = "", i) {
            this._urlChangeListeners.forEach(o => o(r, i))
        }

        subscribe(r, i, o) {
            return this._subject.subscribe({next: r, error: i, complete: o})
        }
    };
    e.normalizeQueryParams = Wn, e.joinWithSlash = Am, e.stripTrailingSlash = Im, e.\u0275fac = function (i) {
        return new (i || e)(H(Vr))
    }, e.\u0275prov = O({token: e, factory: () => ZI(), providedIn: "root"});
    let t = e;
    return t
})();

function ZI() {
    return new Bi(H(Vr))
}

function QI(t, e) {
    if (!t || !e.startsWith(t)) return e;
    let n = e.substring(t.length);
    return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : e
}

function Cm(t) {
    return t.replace(/\/index.html$/, "")
}

function KI(t) {
    if (new RegExp("^(https?:)?//").test(t)) {
        let [, n] = t.split(/\/\/[^\/]+/);
        return n
    }
    return t
}

function Eu(t, e) {
    e = encodeURIComponent(e);
    for (let n of t.split(";")) {
        let r = n.indexOf("="), [i, o] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
        if (i.trim() === e) return decodeURIComponent(o)
    }
    return null
}

var Iu = "browser", YI = "server";

function km(t) {
    return t === Iu
}

function Ui(t) {
    return t === YI
}

var ta = class {
};
var ra = class t {
    constructor(e) {
        this.normalizedNames = new Map, this.lazyUpdate = null, e ? typeof e == "string" ? this.lazyInit = () => {
            this.headers = new Map, e.split(`
`).forEach(n => {
                let r = n.indexOf(":");
                if (r > 0) {
                    let i = n.slice(0, r), o = i.toLowerCase(), s = n.slice(r + 1).trim();
                    this.maybeSetNormalizedName(i, o), this.headers.has(o) ? this.headers.get(o).push(s) : this.headers.set(o, [s])
                }
            })
        } : typeof Headers < "u" && e instanceof Headers ? (this.headers = new Map, e.forEach((n, r) => {
            this.setHeaderEntries(r, n)
        })) : this.lazyInit = () => {
            this.headers = new Map, Object.entries(e).forEach(([n, r]) => {
                this.setHeaderEntries(n, r)
            })
        } : this.headers = new Map
    }

    has(e) {
        return this.init(), this.headers.has(e.toLowerCase())
    }

    get(e) {
        this.init();
        let n = this.headers.get(e.toLowerCase());
        return n && n.length > 0 ? n[0] : null
    }

    keys() {
        return this.init(), Array.from(this.normalizedNames.values())
    }

    getAll(e) {
        return this.init(), this.headers.get(e.toLowerCase()) || null
    }

    append(e, n) {
        return this.clone({name: e, value: n, op: "a"})
    }

    set(e, n) {
        return this.clone({name: e, value: n, op: "s"})
    }

    delete(e, n) {
        return this.clone({name: e, value: n, op: "d"})
    }

    maybeSetNormalizedName(e, n) {
        this.normalizedNames.has(n) || this.normalizedNames.set(n, e)
    }

    init() {
        this.lazyInit && (this.lazyInit instanceof t ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(e => this.applyUpdate(e)), this.lazyUpdate = null))
    }

    copyFrom(e) {
        e.init(), Array.from(e.headers.keys()).forEach(n => {
            this.headers.set(n, e.headers.get(n)), this.normalizedNames.set(n, e.normalizedNames.get(n))
        })
    }

    clone(e) {
        let n = new t;
        return n.lazyInit = this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this, n.lazyUpdate = (this.lazyUpdate || []).concat([e]), n
    }

    applyUpdate(e) {
        let n = e.name.toLowerCase();
        switch (e.op) {
            case"a":
            case"s":
                let r = e.value;
                if (typeof r == "string" && (r = [r]), r.length === 0) return;
                this.maybeSetNormalizedName(e.name, n);
                let i = (e.op === "a" ? this.headers.get(n) : void 0) || [];
                i.push(...r), this.headers.set(n, i);
                break;
            case"d":
                let o = e.value;
                if (!o) this.headers.delete(n), this.normalizedNames.delete(n); else {
                    let s = this.headers.get(n);
                    if (!s) return;
                    s = s.filter(a => o.indexOf(a) === -1), s.length === 0 ? (this.headers.delete(n), this.normalizedNames.delete(n)) : this.headers.set(n, s)
                }
                break
        }
    }

    setHeaderEntries(e, n) {
        let r = (Array.isArray(n) ? n : [n]).map(o => o.toString()), i = e.toLowerCase();
        this.headers.set(i, r), this.maybeSetNormalizedName(e, i)
    }

    forEach(e) {
        this.init(), Array.from(this.normalizedNames.keys()).forEach(n => e(this.normalizedNames.get(n), this.headers.get(n)))
    }
};
var Bm = function (t) {
    return t[t.Sent = 0] = "Sent", t[t.UploadProgress = 1] = "UploadProgress", t[t.ResponseHeader = 2] = "ResponseHeader", t[t.DownloadProgress = 3] = "DownloadProgress", t[t.Response = 4] = "Response", t[t.User = 5] = "User", t
}(Bm || {}), Cu = class {
    constructor(e, n = 200, r = "OK") {
        this.headers = e.headers || new ra, this.status = e.status !== void 0 ? e.status : n, this.statusText = e.statusText || r, this.url = e.url || null, this.ok = this.status >= 200 && this.status < 300
    }
};
var ia = class t extends Cu {
    constructor(e = {}) {
        super(e), this.type = Bm.Response, this.body = e.body !== void 0 ? e.body : null
    }

    clone(e = {}) {
        return new t({
            body: e.body !== void 0 ? e.body : this.body,
            headers: e.headers || this.headers,
            status: e.status !== void 0 ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0
        })
    }
};
var XI = new L("");
var eC = new L(""), Rm = "b", Om = "h", Pm = "s", Fm = "st", Lm = "u", jm = "rt", na = new L(""), tC = ["GET", "HEAD"];

function nC(t, e) {
    let f = b(na), {isCacheActive: n} = f, r = Io(f, ["isCacheActive"]), {transferCache: i, method: o} = t;
    if (!n || i === !1 || o === "POST" && !r.includePostRequests && !i || o !== "POST" && !tC.includes(o) || !r.includeRequestsWithAuthHeaders && rC(t) || r.filter?.(t) === !1) return e(t);
    let s = b(Nr), a = b(eC, {optional: !0}), c = Ui(b(ht));
    if (a && !c) throw new D(2803, !1);
    let l = c && a ? aC(t.url, a) : t.url, u = oC(t, l), d = s.get(u, null), h = r.includeHeaders;
    if (typeof i == "object" && i.includeHeaders && (h = i.includeHeaders), d) {
        let {[Rm]: m, [jm]: v, [Om]: C, [Pm]: N, [Fm]: $, [Lm]: z} = d, ee = m;
        switch (v) {
            case"arraybuffer":
                ee = new TextEncoder().encode(m).buffer;
                break;
            case"blob":
                ee = new Blob([m]);
                break
        }
        let Ae = new ra(C);
        return P(new ia({body: ee, headers: Ae, status: N, statusText: $, url: z}))
    }
    return e(t).pipe(Ce(m => {
        m instanceof ia && c && s.set(u, {
            [Rm]: m.body,
            [Om]: iC(m.headers, h),
            [Pm]: m.status,
            [Fm]: m.statusText,
            [Lm]: l,
            [jm]: t.responseType
        })
    }))
}

function rC(t) {
    return t.headers.has("authorization") || t.headers.has("proxy-authorization")
}

function iC(t, e) {
    if (!e) return {};
    let n = {};
    for (let r of e) {
        let i = t.getAll(r);
        i !== null && (n[r] = i)
    }
    return n
}

function Vm(t) {
    return [...t.keys()].sort().map(e => `${e}=${t.getAll(e)}`).join("&")
}

function oC(t, e) {
    let {params: n, method: r, responseType: i} = t, o = Vm(n), s = t.serializeBody();
    s instanceof URLSearchParams ? s = Vm(s) : typeof s != "string" && (s = "");
    let a = [r, i, e, s, o].join("|"), c = sC(a);
    return c
}

function sC(t) {
    let e = 0;
    for (let n of t) e = Math.imul(31, e) + n.charCodeAt(0) << 0;
    return e += 2147483648, e.toString()
}

function Um(t) {
    return [{provide: na, useFactory: () => (Lt("NgHttpTransferCache"), S({isCacheActive: !0}, t))}, {
        provide: XI,
        useValue: nC,
        multi: !0,
        deps: [Nr, na]
    }, {
        provide: Lr, multi: !0, useFactory: () => {
            let e = b(rn), n = b(na);
            return () => {
                Xs(e).then(() => {
                    n.isCacheActive = !1
                })
            }
        }
    }]
}

function aC(t, e) {
    let n = new URL(t, "resolve://").origin, r = e[n];
    return r ? t.replace(n, r) : t
}

var Tu = class extends ea {
    constructor() {
        super(...arguments), this.supportsDOMEvents = !0
    }
}, Mu = class t extends Tu {
    static makeCurrent() {
        Mm(new t)
    }

    onAndCancel(e, n, r) {
        return e.addEventListener(n, r), () => {
            e.removeEventListener(n, r)
        }
    }

    dispatchEvent(e, n) {
        e.dispatchEvent(n)
    }

    remove(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    createElement(e, n) {
        return n = n || this.getDefaultDocument(), n.createElement(e)
    }

    createHtmlDocument() {
        return document.implementation.createHTMLDocument("fakeTitle")
    }

    getDefaultDocument() {
        return document
    }

    isElementNode(e) {
        return e.nodeType === Node.ELEMENT_NODE
    }

    isShadowRoot(e) {
        return e instanceof DocumentFragment
    }

    getGlobalEventTarget(e, n) {
        return n === "window" ? window : n === "document" ? e : n === "body" ? e.body : null
    }

    getBaseHref(e) {
        let n = lC();
        return n == null ? null : uC(n)
    }

    resetBaseElement() {
        $i = null
    }

    getUserAgent() {
        return window.navigator.userAgent
    }

    getCookie(e) {
        return Eu(document.cookie, e)
    }
}, $i = null;

function lC() {
    return $i = $i || document.querySelector("base"), $i ? $i.getAttribute("href") : null
}

function uC(t) {
    return new URL(t, document.baseURI).pathname
}

var dC = (() => {
        let e = class e {
            build() {
                return new XMLHttpRequest
            }
        };
        e.\u0275fac = function (i) {
            return new (i || e)
        }, e.\u0275prov = O({token: e, factory: e.\u0275fac});
        let t = e;
        return t
    })(), oa = new L(""), zm = (() => {
        let e = class e {
            constructor(r, i) {
                this._zone = i, this._eventNameToPlugin = new Map, r.forEach(o => {
                    o.manager = this
                }), this._plugins = r.slice().reverse()
            }

            addEventListener(r, i, o) {
                return this._findPluginFor(i).addEventListener(r, i, o)
            }

            getZone() {
                return this._zone
            }

            _findPluginFor(r) {
                let i = this._eventNameToPlugin.get(r);
                if (i) return i;
                if (i = this._plugins.find(s => s.supports(r)), !i) throw new D(5101, !1);
                return this._eventNameToPlugin.set(r, i), i
            }
        };
        e.\u0275fac = function (i) {
            return new (i || e)(H(oa), H(he))
        }, e.\u0275prov = O({token: e, factory: e.\u0275fac});
        let t = e;
        return t
    })(), Hi = class {
        constructor(e) {
            this._doc = e
        }
    }, _u = "ng-app-id", Wm = (() => {
        let e = class e {
            constructor(r, i, o, s = {}) {
                this.doc = r, this.appId = i, this.nonce = o, this.platformId = s, this.styleRef = new Map, this.hostNodes = new Set, this.styleNodesInDOM = this.collectServerRenderedStyles(), this.platformIsServer = Ui(s), this.resetHostNodes()
            }

            addStyles(r) {
                for (let i of r) this.changeUsageCount(i, 1) === 1 && this.onStyleAdded(i)
            }

            removeStyles(r) {
                for (let i of r) this.changeUsageCount(i, -1) <= 0 && this.onStyleRemoved(i)
            }

            ngOnDestroy() {
                let r = this.styleNodesInDOM;
                r && (r.forEach(i => i.remove()), r.clear());
                for (let i of this.getAllStyles()) this.onStyleRemoved(i);
                this.resetHostNodes()
            }

            addHost(r) {
                this.hostNodes.add(r);
                for (let i of this.getAllStyles()) this.addStyleToHost(r, i)
            }

            removeHost(r) {
                this.hostNodes.delete(r)
            }

            getAllStyles() {
                return this.styleRef.keys()
            }

            onStyleAdded(r) {
                for (let i of this.hostNodes) this.addStyleToHost(i, r)
            }

            onStyleRemoved(r) {
                let i = this.styleRef;
                i.get(r)?.elements?.forEach(o => o.remove()), i.delete(r)
            }

            collectServerRenderedStyles() {
                let r = this.doc.head?.querySelectorAll(`style[${_u}="${this.appId}"]`);
                if (r?.length) {
                    let i = new Map;
                    return r.forEach(o => {
                        o.textContent != null && i.set(o.textContent, o)
                    }), i
                }
                return null
            }

            changeUsageCount(r, i) {
                let o = this.styleRef;
                if (o.has(r)) {
                    let s = o.get(r);
                    return s.usage += i, s.usage
                }
                return o.set(r, {usage: i, elements: []}), i
            }

            getStyleElement(r, i) {
                let o = this.styleNodesInDOM, s = o?.get(i);
                if (s?.parentNode === r) return o.delete(i), s.removeAttribute(_u), s;
                {
                    let a = this.doc.createElement("style");
                    return this.nonce && a.setAttribute("nonce", this.nonce), a.textContent = i, this.platformIsServer && a.setAttribute(_u, this.appId), r.appendChild(a), a
                }
            }

            addStyleToHost(r, i) {
                let o = this.getStyleElement(r, i), s = this.styleRef, a = s.get(i)?.elements;
                a ? a.push(o) : s.set(i, {elements: [o], usage: 1})
            }

            resetHostNodes() {
                let r = this.hostNodes;
                r.clear(), r.add(this.doc.head)
            }
        };
        e.\u0275fac = function (i) {
            return new (i || e)(H(Ve), H(js), H(Hl, 8), H(ht))
        }, e.\u0275prov = O({token: e, factory: e.\u0275fac});
        let t = e;
        return t
    })(), Su = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
        math: "http://www.w3.org/1998/Math/MathML"
    }, Nu = /%COMP%/g, Gm = "%COMP%", fC = `_nghost-${Gm}`, hC = `_ngcontent-${Gm}`, pC = !0,
    gC = new L("", {providedIn: "root", factory: () => pC});

function mC(t) {
    return hC.replace(Nu, t)
}

function yC(t) {
    return fC.replace(Nu, t)
}

function qm(t, e) {
    return e.map(n => n.replace(Nu, t))
}

var sa = (() => {
    let e = class e {
        constructor(r, i, o, s, a, c, l, u = null) {
            this.eventManager = r, this.sharedStylesHost = i, this.appId = o, this.removeStylesOnCompDestroy = s, this.doc = a, this.platformId = c, this.ngZone = l, this.nonce = u, this.rendererByCompId = new Map, this.platformIsServer = Ui(c), this.defaultRenderer = new zi(r, a, l, this.platformIsServer)
        }

        createRenderer(r, i) {
            if (!r || !i) return this.defaultRenderer;
            this.platformIsServer && i.encapsulation === Rt.ShadowDom && (i = fe(S({}, i), {encapsulation: Rt.Emulated}));
            let o = this.getOrCreateRenderer(r, i);
            return o instanceof aa ? o.applyToHost(r) : o instanceof Wi && o.applyStyles(), o
        }

        getOrCreateRenderer(r, i) {
            let o = this.rendererByCompId, s = o.get(i.id);
            if (!s) {
                let a = this.doc, c = this.ngZone, l = this.eventManager, u = this.sharedStylesHost,
                    d = this.removeStylesOnCompDestroy, h = this.platformIsServer;
                switch (i.encapsulation) {
                    case Rt.Emulated:
                        s = new aa(l, u, i, this.appId, d, a, c, h);
                        break;
                    case Rt.ShadowDom:
                        return new xu(l, u, r, i, a, c, this.nonce, h);
                    default:
                        s = new Wi(l, u, i, d, a, c, h);
                        break
                }
                o.set(i.id, s)
            }
            return s
        }

        ngOnDestroy() {
            this.rendererByCompId.clear()
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)(H(zm), H(Wm), H(js), H(gC), H(Ve), H(ht), H(he), H(Hl))
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac});
    let t = e;
    return t
})(), zi = class {
    constructor(e, n, r, i) {
        this.eventManager = e, this.doc = n, this.ngZone = r, this.platformIsServer = i, this.data = Object.create(null), this.throwOnSyntheticProps = !0, this.destroyNode = null
    }

    destroy() {
    }

    createElement(e, n) {
        return n ? this.doc.createElementNS(Su[n] || n, e) : this.doc.createElement(e)
    }

    createComment(e) {
        return this.doc.createComment(e)
    }

    createText(e) {
        return this.doc.createTextNode(e)
    }

    appendChild(e, n) {
        ($m(e) ? e.content : e).appendChild(n)
    }

    insertBefore(e, n, r) {
        e && ($m(e) ? e.content : e).insertBefore(n, r)
    }

    removeChild(e, n) {
        e && e.removeChild(n)
    }

    selectRootElement(e, n) {
        let r = typeof e == "string" ? this.doc.querySelector(e) : e;
        if (!r) throw new D(-5104, !1);
        return n || (r.textContent = ""), r
    }

    parentNode(e) {
        return e.parentNode
    }

    nextSibling(e) {
        return e.nextSibling
    }

    setAttribute(e, n, r, i) {
        if (i) {
            n = i + ":" + n;
            let o = Su[i];
            o ? e.setAttributeNS(o, n, r) : e.setAttribute(n, r)
        } else e.setAttribute(n, r)
    }

    removeAttribute(e, n, r) {
        if (r) {
            let i = Su[r];
            i ? e.removeAttributeNS(i, n) : e.removeAttribute(`${r}:${n}`)
        } else e.removeAttribute(n)
    }

    addClass(e, n) {
        e.classList.add(n)
    }

    removeClass(e, n) {
        e.classList.remove(n)
    }

    setStyle(e, n, r, i) {
        i & (Kt.DashCase | Kt.Important) ? e.style.setProperty(n, r, i & Kt.Important ? "important" : "") : e.style[n] = r
    }

    removeStyle(e, n, r) {
        r & Kt.DashCase ? e.style.removeProperty(n) : e.style[n] = ""
    }

    setProperty(e, n, r) {
        e != null && (e[n] = r)
    }

    setValue(e, n) {
        e.nodeValue = n
    }

    listen(e, n, r) {
        if (typeof e == "string" && (e = jr().getGlobalEventTarget(this.doc, e), !e)) throw new Error(`Unsupported event target ${e} for event ${n}`);
        return this.eventManager.addEventListener(e, n, this.decoratePreventDefault(r))
    }

    decoratePreventDefault(e) {
        return n => {
            if (n === "__ngUnwrap__") return e;
            (this.platformIsServer ? this.ngZone.runGuarded(() => e(n)) : e(n)) === !1 && n.preventDefault()
        }
    }
};

function $m(t) {
    return t.tagName === "TEMPLATE" && t.content !== void 0
}

var xu = class extends zi {
    constructor(e, n, r, i, o, s, a, c) {
        super(e, o, s, c), this.sharedStylesHost = n, this.hostEl = r, this.shadowRoot = r.attachShadow({mode: "open"}), this.sharedStylesHost.addHost(this.shadowRoot);
        let l = qm(i.id, i.styles);
        for (let u of l) {
            let d = document.createElement("style");
            a && d.setAttribute("nonce", a), d.textContent = u, this.shadowRoot.appendChild(d)
        }
    }

    nodeOrShadowRoot(e) {
        return e === this.hostEl ? this.shadowRoot : e
    }

    appendChild(e, n) {
        return super.appendChild(this.nodeOrShadowRoot(e), n)
    }

    insertBefore(e, n, r) {
        return super.insertBefore(this.nodeOrShadowRoot(e), n, r)
    }

    removeChild(e, n) {
        return super.removeChild(this.nodeOrShadowRoot(e), n)
    }

    parentNode(e) {
        return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))
    }

    destroy() {
        this.sharedStylesHost.removeHost(this.shadowRoot)
    }
}, Wi = class extends zi {
    constructor(e, n, r, i, o, s, a, c) {
        super(e, o, s, a), this.sharedStylesHost = n, this.removeStylesOnCompDestroy = i, this.styles = c ? qm(c, r.styles) : r.styles
    }

    applyStyles() {
        this.sharedStylesHost.addStyles(this.styles)
    }

    destroy() {
        this.removeStylesOnCompDestroy && this.sharedStylesHost.removeStyles(this.styles)
    }
}, aa = class extends Wi {
    constructor(e, n, r, i, o, s, a, c) {
        let l = i + "-" + r.id;
        super(e, n, r, o, s, a, c, l), this.contentAttr = mC(l), this.hostAttr = yC(l)
    }

    applyToHost(e) {
        this.applyStyles(), this.setAttribute(e, this.hostAttr, "")
    }

    createElement(e, n) {
        let r = super.createElement(e, n);
        return super.setAttribute(r, this.contentAttr, ""), r
    }
}, vC = (() => {
    let e = class e extends Hi {
        constructor(r) {
            super(r)
        }

        supports(r) {
            return !0
        }

        addEventListener(r, i, o) {
            return r.addEventListener(i, o, !1), () => this.removeEventListener(r, i, o)
        }

        removeEventListener(r, i, o) {
            return r.removeEventListener(i, o)
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)(H(Ve))
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac});
    let t = e;
    return t
})(), bC = (() => {
    let e = class e extends Hi {
        constructor(r) {
            super(r), this.delegate = b(Dm, {optional: !0})
        }

        supports(r) {
            return this.delegate ? this.delegate.supports(r) : !1
        }

        addEventListener(r, i, o) {
            return this.delegate.addEventListener(r, i, o)
        }

        removeEventListener(r, i, o) {
            return this.delegate.removeEventListener(r, i, o)
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)(H(Ve))
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac});
    let t = e;
    return t
})(), Hm = ["alt", "control", "meta", "shift"], wC = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS"
}, DC = {alt: t => t.altKey, control: t => t.ctrlKey, meta: t => t.metaKey, shift: t => t.shiftKey}, EC = (() => {
    let e = class e extends Hi {
        constructor(r) {
            super(r)
        }

        supports(r) {
            return e.parseEventName(r) != null
        }

        addEventListener(r, i, o) {
            let s = e.parseEventName(i), a = e.eventCallback(s.fullKey, o, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(() => jr().onAndCancel(r, s.domEventName, a))
        }

        static parseEventName(r) {
            let i = r.toLowerCase().split("."), o = i.shift();
            if (i.length === 0 || !(o === "keydown" || o === "keyup")) return null;
            let s = e._normalizeKey(i.pop()), a = "", c = i.indexOf("code");
            if (c > -1 && (i.splice(c, 1), a = "code."), Hm.forEach(u => {
                let d = i.indexOf(u);
                d > -1 && (i.splice(d, 1), a += u + ".")
            }), a += s, i.length != 0 || s.length === 0) return null;
            let l = {};
            return l.domEventName = o, l.fullKey = a, l
        }

        static matchEventFullKeyCode(r, i) {
            let o = wC[r.key] || r.key, s = "";
            return i.indexOf("code.") > -1 && (o = r.code, s = "code."), o == null || !o ? !1 : (o = o.toLowerCase(), o === " " ? o = "space" : o === "." && (o = "dot"), Hm.forEach(a => {
                if (a !== o) {
                    let c = DC[a];
                    c(r) && (s += a + ".")
                }
            }), s += o, s === i)
        }

        static eventCallback(r, i, o) {
            return s => {
                e.matchEventFullKeyCode(s, r) && o.runGuarded(() => i(s))
            }
        }

        static _normalizeKey(r) {
            return r === "esc" ? "escape" : r
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)(H(Ve))
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac});
    let t = e;
    return t
})();

function Zm(t, e) {
    return wm(S({rootComponent: t}, IC(e)))
}

function IC(t) {
    return {appProviders: [...MC, ...t?.providers ?? []], platformProviders: TC}
}

function CC() {
    Mu.makeCurrent()
}

function _C() {
    return new Qt
}

function SC() {
    return Kp(document), document
}

var TC = [{provide: ht, useValue: Iu}, {provide: Ul, useValue: CC, multi: !0}, {provide: Ve, useFactory: SC, deps: []}];
var MC = [{provide: Os, useValue: "root"}, {provide: Qt, useFactory: _C, deps: []}, {
    provide: oa,
    useClass: vC,
    multi: !0,
    deps: [Ve, he, ht]
}, {provide: oa, useClass: EC, multi: !0, deps: [Ve]}, {provide: oa, useClass: bC, multi: !0}, sa, Wm, zm, {
    provide: yn,
    useExisting: sa
}, {provide: ta, useClass: dC, deps: []}, []];
var Qm = (() => {
    let e = class e {
        constructor(r) {
            this._doc = r
        }

        getTitle() {
            return this._doc.title
        }

        setTitle(r) {
            this._doc.title = r || ""
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)(H(Ve))
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})();
var Au = function (t) {
    return t[t.NoHttpTransferCache = 0] = "NoHttpTransferCache", t[t.HttpTransferCacheOptions = 1] = "HttpTransferCacheOptions", t[t.I18nSupport = 2] = "I18nSupport", t[t.EventReplay = 3] = "EventReplay", t
}(Au || {});

function Km(...t) {
    let e = [], n = new Set, r = n.has(Au.HttpTransferCacheOptions);
    for (let {\u0275providers: i, \u0275kind: o} of t) n.add(o), i.length && e.push(i);
    return $n([[], Em(), n.has(Au.NoHttpTransferCache) || r ? [] : Um({}), e])
}

var B = "primary", ao = Symbol("RouteTitle"), Fu = class {
    constructor(e) {
        this.params = e || {}
    }

    has(e) {
        return Object.prototype.hasOwnProperty.call(this.params, e)
    }

    get(e) {
        if (this.has(e)) {
            let n = this.params[e];
            return Array.isArray(n) ? n[0] : n
        }
        return null
    }

    getAll(e) {
        if (this.has(e)) {
            let n = this.params[e];
            return Array.isArray(n) ? n : [n]
        }
        return []
    }

    get keys() {
        return Object.keys(this.params)
    }
};

function Wr(t) {
    return new Fu(t)
}

function AC(t, e, n) {
    let r = n.path.split("/");
    if (r.length > t.length || n.pathMatch === "full" && (e.hasChildren() || r.length < t.length)) return null;
    let i = {};
    for (let o = 0; o < r.length; o++) {
        let s = r[o], a = t[o];
        if (s[0] === ":") i[s.substring(1)] = a; else if (s !== a.path) return null
    }
    return {consumed: t.slice(0, r.length), posParams: i}
}

function NC(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0; n < t.length; ++n) if (!Vt(t[n], e[n])) return !1;
    return !0
}

function Vt(t, e) {
    let n = t ? Lu(t) : void 0, r = e ? Lu(e) : void 0;
    if (!n || !r || n.length != r.length) return !1;
    let i;
    for (let o = 0; o < n.length; o++) if (i = n[o], !iy(t[i], e[i])) return !1;
    return !0
}

function Lu(t) {
    return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]
}

function iy(t, e) {
    if (Array.isArray(t) && Array.isArray(e)) {
        if (t.length !== e.length) return !1;
        let n = [...t].sort(), r = [...e].sort();
        return n.every((i, o) => r[o] === i)
    } else return t === e
}

function oy(t) {
    return t.length > 0 ? t[t.length - 1] : null
}

function In(t) {
    return cc(t) ? t : ji(t) ? ve(Promise.resolve(t)) : P(t)
}

var kC = {exact: ay, subset: cy}, sy = {exact: RC, subset: OC, ignored: () => !0};

function Ym(t, e, n) {
    return kC[n.paths](t.root, e.root, n.matrixParams) && sy[n.queryParams](t.queryParams, e.queryParams) && !(n.fragment === "exact" && t.fragment !== e.fragment)
}

function RC(t, e) {
    return Vt(t, e)
}

function ay(t, e, n) {
    if (!qn(t.segments, e.segments) || !ua(t.segments, e.segments, n) || t.numberOfChildren !== e.numberOfChildren) return !1;
    for (let r in e.children) if (!t.children[r] || !ay(t.children[r], e.children[r], n)) return !1;
    return !0
}

function OC(t, e) {
    return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => iy(t[n], e[n]))
}

function cy(t, e, n) {
    return ly(t, e, e.segments, n)
}

function ly(t, e, n, r) {
    if (t.segments.length > n.length) {
        let i = t.segments.slice(0, n.length);
        return !(!qn(i, n) || e.hasChildren() || !ua(i, n, r))
    } else if (t.segments.length === n.length) {
        if (!qn(t.segments, n) || !ua(t.segments, n, r)) return !1;
        for (let i in e.children) if (!t.children[i] || !cy(t.children[i], e.children[i], r)) return !1;
        return !0
    } else {
        let i = n.slice(0, t.segments.length), o = n.slice(t.segments.length);
        return !qn(t.segments, i) || !ua(t.segments, i, r) || !t.children[B] ? !1 : ly(t.children[B], e, o, r)
    }
}

function ua(t, e, n) {
    return e.every((r, i) => sy[n](t[i].parameters, r.parameters))
}

var sn = class {
    constructor(e = new ne([], {}), n = {}, r = null) {
        this.root = e, this.queryParams = n, this.fragment = r
    }

    get queryParamMap() {
        return this._queryParamMap ??= Wr(this.queryParams), this._queryParamMap
    }

    toString() {
        return LC.serialize(this)
    }
}, ne = class {
    constructor(e, n) {
        this.segments = e, this.children = n, this.parent = null, Object.values(n).forEach(r => r.parent = this)
    }

    hasChildren() {
        return this.numberOfChildren > 0
    }

    get numberOfChildren() {
        return Object.keys(this.children).length
    }

    toString() {
        return da(this)
    }
}, Gn = class {
    constructor(e, n) {
        this.path = e, this.parameters = n
    }

    get parameterMap() {
        return this._parameterMap ??= Wr(this.parameters), this._parameterMap
    }

    toString() {
        return dy(this)
    }
};

function PC(t, e) {
    return qn(t, e) && t.every((n, r) => Vt(n.parameters, e[r].parameters))
}

function qn(t, e) {
    return t.length !== e.length ? !1 : t.every((n, r) => n.path === e[r].path)
}

function FC(t, e) {
    let n = [];
    return Object.entries(t.children).forEach(([r, i]) => {
        r === B && (n = n.concat(e(i, r)))
    }), Object.entries(t.children).forEach(([r, i]) => {
        r !== B && (n = n.concat(e(i, r)))
    }), n
}

var ld = (() => {
    let e = class e {
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: () => new Ji, providedIn: "root"});
    let t = e;
    return t
})(), Ji = class {
    parse(e) {
        let n = new Vu(e);
        return new sn(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment())
    }

    serialize(e) {
        let n = `/${Gi(e.root, !0)}`, r = BC(e.queryParams),
            i = typeof e.fragment == "string" ? `#${jC(e.fragment)}` : "";
        return `${n}${r}${i}`
    }
}, LC = new Ji;

function da(t) {
    return t.segments.map(e => dy(e)).join("/")
}

function Gi(t, e) {
    if (!t.hasChildren()) return da(t);
    if (e) {
        let n = t.children[B] ? Gi(t.children[B], !1) : "", r = [];
        return Object.entries(t.children).forEach(([i, o]) => {
            i !== B && r.push(`${i}:${Gi(o, !1)}`)
        }), r.length > 0 ? `${n}(${r.join("//")})` : n
    } else {
        let n = FC(t, (r, i) => i === B ? [Gi(t.children[B], !1)] : [`${i}:${Gi(r, !1)}`]);
        return Object.keys(t.children).length === 1 && t.children[B] != null ? `${da(t)}/${n[0]}` : `${da(t)}/(${n.join("//")})`
    }
}

function uy(t) {
    return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
}

function ca(t) {
    return uy(t).replace(/%3B/gi, ";")
}

function jC(t) {
    return encodeURI(t)
}

function ju(t) {
    return uy(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
}

function fa(t) {
    return decodeURIComponent(t)
}

function Jm(t) {
    return fa(t.replace(/\+/g, "%20"))
}

function dy(t) {
    return `${ju(t.path)}${VC(t.parameters)}`
}

function VC(t) {
    return Object.entries(t).map(([e, n]) => `;${ju(e)}=${ju(n)}`).join("")
}

function BC(t) {
    let e = Object.entries(t).map(([n, r]) => Array.isArray(r) ? r.map(i => `${ca(n)}=${ca(i)}`).join("&") : `${ca(n)}=${ca(r)}`).filter(n => n);
    return e.length ? `?${e.join("&")}` : ""
}

var UC = /^[^\/()?;#]+/;

function ku(t) {
    let e = t.match(UC);
    return e ? e[0] : ""
}

var $C = /^[^\/()?;=#]+/;

function HC(t) {
    let e = t.match($C);
    return e ? e[0] : ""
}

var zC = /^[^=?&#]+/;

function WC(t) {
    let e = t.match(zC);
    return e ? e[0] : ""
}

var GC = /^[^&#]+/;

function qC(t) {
    let e = t.match(GC);
    return e ? e[0] : ""
}

var Vu = class {
    constructor(e) {
        this.url = e, this.remaining = e
    }

    parseRootSegment() {
        return this.consumeOptional("/"), this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new ne([], {}) : new ne([], this.parseChildren())
    }

    parseQueryParams() {
        let e = {};
        if (this.consumeOptional("?")) do this.parseQueryParam(e); while (this.consumeOptional("&"));
        return e
    }

    parseFragment() {
        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
    }

    parseChildren() {
        if (this.remaining === "") return {};
        this.consumeOptional("/");
        let e = [];
        for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), e.push(this.parseSegment());
        let n = {};
        this.peekStartsWith("/(") && (this.capture("/"), n = this.parseParens(!0));
        let r = {};
        return this.peekStartsWith("(") && (r = this.parseParens(!1)), (e.length > 0 || Object.keys(n).length > 0) && (r[B] = new ne(e, n)), r
    }

    parseSegment() {
        let e = ku(this.remaining);
        if (e === "" && this.peekStartsWith(";")) throw new D(4009, !1);
        return this.capture(e), new Gn(fa(e), this.parseMatrixParams())
    }

    parseMatrixParams() {
        let e = {};
        for (; this.consumeOptional(";");) this.parseParam(e);
        return e
    }

    parseParam(e) {
        let n = HC(this.remaining);
        if (!n) return;
        this.capture(n);
        let r = "";
        if (this.consumeOptional("=")) {
            let i = ku(this.remaining);
            i && (r = i, this.capture(r))
        }
        e[fa(n)] = fa(r)
    }

    parseQueryParam(e) {
        let n = WC(this.remaining);
        if (!n) return;
        this.capture(n);
        let r = "";
        if (this.consumeOptional("=")) {
            let s = qC(this.remaining);
            s && (r = s, this.capture(r))
        }
        let i = Jm(n), o = Jm(r);
        if (e.hasOwnProperty(i)) {
            let s = e[i];
            Array.isArray(s) || (s = [s], e[i] = s), s.push(o)
        } else e[i] = o
    }

    parseParens(e) {
        let n = {};
        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
            let r = ku(this.remaining), i = this.remaining[r.length];
            if (i !== "/" && i !== ")" && i !== ";") throw new D(4010, !1);
            let o;
            r.indexOf(":") > -1 ? (o = r.slice(0, r.indexOf(":")), this.capture(o), this.capture(":")) : e && (o = B);
            let s = this.parseChildren();
            n[o] = Object.keys(s).length === 1 ? s[B] : new ne([], s), this.consumeOptional("//")
        }
        return n
    }

    peekStartsWith(e) {
        return this.remaining.startsWith(e)
    }

    consumeOptional(e) {
        return this.peekStartsWith(e) ? (this.remaining = this.remaining.substring(e.length), !0) : !1
    }

    capture(e) {
        if (!this.consumeOptional(e)) throw new D(4011, !1)
    }
};

function fy(t) {
    return t.segments.length > 0 ? new ne([], {[B]: t}) : t
}

function hy(t) {
    let e = {};
    for (let [r, i] of Object.entries(t.children)) {
        let o = hy(i);
        if (r === B && o.segments.length === 0 && o.hasChildren()) for (let [s, a] of Object.entries(o.children)) e[s] = a; else (o.segments.length > 0 || o.hasChildren()) && (e[r] = o)
    }
    let n = new ne(t.segments, e);
    return ZC(n)
}

function ZC(t) {
    if (t.numberOfChildren === 1 && t.children[B]) {
        let e = t.children[B];
        return new ne(t.segments.concat(e.segments), e.children)
    }
    return t
}

function Zn(t) {
    return t instanceof sn
}

function QC(t, e, n = null, r = null) {
    let i = py(t);
    return gy(i, e, n, r)
}

function py(t) {
    let e;

    function n(o) {
        let s = {};
        for (let c of o.children) {
            let l = n(c);
            s[c.outlet] = l
        }
        let a = new ne(o.url, s);
        return o === t && (e = a), a
    }

    let r = n(t.root), i = fy(r);
    return e ?? i
}

function gy(t, e, n, r) {
    let i = t;
    for (; i.parent;) i = i.parent;
    if (e.length === 0) return Ru(i, i, i, n, r);
    let o = KC(e);
    if (o.toRoot()) return Ru(i, i, new ne([], {}), n, r);
    let s = YC(o, i, t),
        a = s.processChildren ? Qi(s.segmentGroup, s.index, o.commands) : yy(s.segmentGroup, s.index, o.commands);
    return Ru(i, s.segmentGroup, a, n, r)
}

function ha(t) {
    return typeof t == "object" && t != null && !t.outlets && !t.segmentPath
}

function Xi(t) {
    return typeof t == "object" && t != null && t.outlets
}

function Ru(t, e, n, r, i) {
    let o = {};
    r && Object.entries(r).forEach(([c, l]) => {
        o[c] = Array.isArray(l) ? l.map(u => `${u}`) : `${l}`
    });
    let s;
    t === e ? s = n : s = my(t, e, n);
    let a = fy(hy(s));
    return new sn(a, o, i)
}

function my(t, e, n) {
    let r = {};
    return Object.entries(t.children).forEach(([i, o]) => {
        o === e ? r[i] = n : r[i] = my(o, e, n)
    }), new ne(t.segments, r)
}

var pa = class {
    constructor(e, n, r) {
        if (this.isAbsolute = e, this.numberOfDoubleDots = n, this.commands = r, e && r.length > 0 && ha(r[0])) throw new D(4003, !1);
        let i = r.find(Xi);
        if (i && i !== oy(r)) throw new D(4004, !1)
    }

    toRoot() {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    }
};

function KC(t) {
    if (typeof t[0] == "string" && t.length === 1 && t[0] === "/") return new pa(!0, 0, t);
    let e = 0, n = !1, r = t.reduce((i, o, s) => {
        if (typeof o == "object" && o != null) {
            if (o.outlets) {
                let a = {};
                return Object.entries(o.outlets).forEach(([c, l]) => {
                    a[c] = typeof l == "string" ? l.split("/") : l
                }), [...i, {outlets: a}]
            }
            if (o.segmentPath) return [...i, o.segmentPath]
        }
        return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach((a, c) => {
            c == 0 && a === "." || (c == 0 && a === "" ? n = !0 : a === ".." ? e++ : a != "" && i.push(a))
        }), i) : [...i, o]
    }, []);
    return new pa(n, e, r)
}

var $r = class {
    constructor(e, n, r) {
        this.segmentGroup = e, this.processChildren = n, this.index = r
    }
};

function YC(t, e, n) {
    if (t.isAbsolute) return new $r(e, !0, 0);
    if (!n) return new $r(e, !1, NaN);
    if (n.parent === null) return new $r(n, !0, 0);
    let r = ha(t.commands[0]) ? 0 : 1, i = n.segments.length - 1 + r;
    return JC(n, i, t.numberOfDoubleDots)
}

function JC(t, e, n) {
    let r = t, i = e, o = n;
    for (; o > i;) {
        if (o -= i, r = r.parent, !r) throw new D(4005, !1);
        i = r.segments.length
    }
    return new $r(r, !1, i - o)
}

function XC(t) {
    return Xi(t[0]) ? t[0].outlets : {[B]: t}
}

function yy(t, e, n) {
    if (t ??= new ne([], {}), t.segments.length === 0 && t.hasChildren()) return Qi(t, e, n);
    let r = e_(t, e, n), i = n.slice(r.commandIndex);
    if (r.match && r.pathIndex < t.segments.length) {
        let o = new ne(t.segments.slice(0, r.pathIndex), {});
        return o.children[B] = new ne(t.segments.slice(r.pathIndex), t.children), Qi(o, 0, i)
    } else return r.match && i.length === 0 ? new ne(t.segments, {}) : r.match && !t.hasChildren() ? Bu(t, e, n) : r.match ? Qi(t, 0, i) : Bu(t, e, n)
}

function Qi(t, e, n) {
    if (n.length === 0) return new ne(t.segments, {});
    {
        let r = XC(n), i = {};
        if (Object.keys(r).some(o => o !== B) && t.children[B] && t.numberOfChildren === 1 && t.children[B].segments.length === 0) {
            let o = Qi(t.children[B], e, n);
            return new ne(t.segments, o.children)
        }
        return Object.entries(r).forEach(([o, s]) => {
            typeof s == "string" && (s = [s]), s !== null && (i[o] = yy(t.children[o], e, s))
        }), Object.entries(t.children).forEach(([o, s]) => {
            r[o] === void 0 && (i[o] = s)
        }), new ne(t.segments, i)
    }
}

function e_(t, e, n) {
    let r = 0, i = e, o = {match: !1, pathIndex: 0, commandIndex: 0};
    for (; i < t.segments.length;) {
        if (r >= n.length) return o;
        let s = t.segments[i], a = n[r];
        if (Xi(a)) break;
        let c = `${a}`, l = r < n.length - 1 ? n[r + 1] : null;
        if (i > 0 && c === void 0) break;
        if (c && l && typeof l == "object" && l.outlets === void 0) {
            if (!ey(c, l, s)) return o;
            r += 2
        } else {
            if (!ey(c, {}, s)) return o;
            r++
        }
        i++
    }
    return {match: !0, pathIndex: i, commandIndex: r}
}

function Bu(t, e, n) {
    let r = t.segments.slice(0, e), i = 0;
    for (; i < n.length;) {
        let o = n[i];
        if (Xi(o)) {
            let c = t_(o.outlets);
            return new ne(r, c)
        }
        if (i === 0 && ha(n[0])) {
            let c = t.segments[e];
            r.push(new Gn(c.path, Xm(n[0]))), i++;
            continue
        }
        let s = Xi(o) ? o.outlets[B] : `${o}`, a = i < n.length - 1 ? n[i + 1] : null;
        s && a && ha(a) ? (r.push(new Gn(s, Xm(a))), i += 2) : (r.push(new Gn(s, {})), i++)
    }
    return new ne(r, {})
}

function t_(t) {
    let e = {};
    return Object.entries(t).forEach(([n, r]) => {
        typeof r == "string" && (r = [r]), r !== null && (e[n] = Bu(new ne([], {}), 0, r))
    }), e
}

function Xm(t) {
    let e = {};
    return Object.entries(t).forEach(([n, r]) => e[n] = `${r}`), e
}

function ey(t, e, n) {
    return t == n.path && Vt(e, n.parameters)
}

var Ki = "imperative", _e = function (t) {
    return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t
}(_e || {}), gt = class {
    constructor(e, n) {
        this.id = e, this.url = n
    }
}, eo = class extends gt {
    constructor(e, n, r = "imperative", i = null) {
        super(e, n), this.type = _e.NavigationStart, this.navigationTrigger = r, this.restoredState = i
    }

    toString() {
        return `NavigationStart(id: ${this.id}, url: '${this.url}')`
    }
}, an = class extends gt {
    constructor(e, n, r) {
        super(e, n), this.urlAfterRedirects = r, this.type = _e.NavigationEnd
    }

    toString() {
        return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
    }
}, it = function (t) {
    return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t
}(it || {}), Uu = function (t) {
    return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t
}(Uu || {}), on = class extends gt {
    constructor(e, n, r, i) {
        super(e, n), this.reason = r, this.code = i, this.type = _e.NavigationCancel
    }

    toString() {
        return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
    }
}, Qn = class extends gt {
    constructor(e, n, r, i) {
        super(e, n), this.reason = r, this.code = i, this.type = _e.NavigationSkipped
    }
}, to = class extends gt {
    constructor(e, n, r, i) {
        super(e, n), this.error = r, this.target = i, this.type = _e.NavigationError
    }

    toString() {
        return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
    }
}, ga = class extends gt {
    constructor(e, n, r, i) {
        super(e, n), this.urlAfterRedirects = r, this.state = i, this.type = _e.RoutesRecognized
    }

    toString() {
        return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}, $u = class extends gt {
    constructor(e, n, r, i) {
        super(e, n), this.urlAfterRedirects = r, this.state = i, this.type = _e.GuardsCheckStart
    }

    toString() {
        return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}, Hu = class extends gt {
    constructor(e, n, r, i, o) {
        super(e, n), this.urlAfterRedirects = r, this.state = i, this.shouldActivate = o, this.type = _e.GuardsCheckEnd
    }

    toString() {
        return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
    }
}, zu = class extends gt {
    constructor(e, n, r, i) {
        super(e, n), this.urlAfterRedirects = r, this.state = i, this.type = _e.ResolveStart
    }

    toString() {
        return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}, Wu = class extends gt {
    constructor(e, n, r, i) {
        super(e, n), this.urlAfterRedirects = r, this.state = i, this.type = _e.ResolveEnd
    }

    toString() {
        return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}, Gu = class {
    constructor(e) {
        this.route = e, this.type = _e.RouteConfigLoadStart
    }

    toString() {
        return `RouteConfigLoadStart(path: ${this.route.path})`
    }
}, qu = class {
    constructor(e) {
        this.route = e, this.type = _e.RouteConfigLoadEnd
    }

    toString() {
        return `RouteConfigLoadEnd(path: ${this.route.path})`
    }
}, Zu = class {
    constructor(e) {
        this.snapshot = e, this.type = _e.ChildActivationStart
    }

    toString() {
        return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}, Qu = class {
    constructor(e) {
        this.snapshot = e, this.type = _e.ChildActivationEnd
    }

    toString() {
        return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}, Ku = class {
    constructor(e) {
        this.snapshot = e, this.type = _e.ActivationStart
    }

    toString() {
        return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}, Yu = class {
    constructor(e) {
        this.snapshot = e, this.type = _e.ActivationEnd
    }

    toString() {
        return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
};
var no = class {
}, Gr = class {
    constructor(e, n) {
        this.url = e, this.navigationBehaviorOptions = n
    }
};

function n_(t, e) {
    return t.providers && !t._injector && (t._injector = fu(t.providers, e, `Route: ${t.path}`)), t._injector ?? e
}

function St(t) {
    return t.outlet || B
}

function r_(t, e) {
    let n = t.filter(r => St(r) === e);
    return n.push(...t.filter(r => St(r) !== e)), n
}

function co(t) {
    if (!t) return null;
    if (t.routeConfig?._injector) return t.routeConfig._injector;
    for (let e = t.parent; e; e = e.parent) {
        let n = e.routeConfig;
        if (n?._loadedInjector) return n._loadedInjector;
        if (n?._injector) return n._injector
    }
    return null
}

var Ju = class {
    get injector() {
        return co(this.route?.snapshot) ?? this.rootInjector
    }

    set injector(e) {
    }

    constructor(e) {
        this.rootInjector = e, this.outlet = null, this.route = null, this.children = new Ia(this.rootInjector), this.attachRef = null
    }
}, Ia = (() => {
    let e = class e {
        constructor(r) {
            this.rootInjector = r, this.contexts = new Map
        }

        onChildOutletCreated(r, i) {
            let o = this.getOrCreateContext(r);
            o.outlet = i, this.contexts.set(r, o)
        }

        onChildOutletDestroyed(r) {
            let i = this.getContext(r);
            i && (i.outlet = null, i.attachRef = null)
        }

        onOutletDeactivated() {
            let r = this.contexts;
            return this.contexts = new Map, r
        }

        onOutletReAttached(r) {
            this.contexts = r
        }

        getOrCreateContext(r) {
            let i = this.getContext(r);
            return i || (i = new Ju(this.rootInjector), this.contexts.set(r, i)), i
        }

        getContext(r) {
            return this.contexts.get(r) || null
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)(H(ft))
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})(), ma = class {
    constructor(e) {
        this._root = e
    }

    get root() {
        return this._root.value
    }

    parent(e) {
        let n = this.pathFromRoot(e);
        return n.length > 1 ? n[n.length - 2] : null
    }

    children(e) {
        let n = Xu(e, this._root);
        return n ? n.children.map(r => r.value) : []
    }

    firstChild(e) {
        let n = Xu(e, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null
    }

    siblings(e) {
        let n = ed(e, this._root);
        return n.length < 2 ? [] : n[n.length - 2].children.map(i => i.value).filter(i => i !== e)
    }

    pathFromRoot(e) {
        return ed(e, this._root).map(n => n.value)
    }
};

function Xu(t, e) {
    if (t === e.value) return e;
    for (let n of e.children) {
        let r = Xu(t, n);
        if (r) return r
    }
    return null
}

function ed(t, e) {
    if (t === e.value) return [e];
    for (let n of e.children) {
        let r = ed(t, n);
        if (r.length) return r.unshift(e), r
    }
    return []
}

var rt = class {
    constructor(e, n) {
        this.value = e, this.children = n
    }

    toString() {
        return `TreeNode(${this.value})`
    }
};

function Ur(t) {
    let e = {};
    return t && t.children.forEach(n => e[n.value.outlet] = n), e
}

var ya = class extends ma {
    constructor(e, n) {
        super(e), this.snapshot = n, ud(this, e)
    }

    toString() {
        return this.snapshot.toString()
    }
};

function vy(t) {
    let e = i_(t), n = new Ne([new Gn("", {})]), r = new Ne({}), i = new Ne({}), o = new Ne({}), s = new Ne(""),
        a = new cn(n, r, o, s, i, B, t, e.root);
    return a.snapshot = e.root, new ya(new rt(a, []), e)
}

function i_(t) {
    let e = {}, n = {}, r = {}, i = "", o = new Hr([], e, r, i, n, B, t, null, {});
    return new ba("", new rt(o, []))
}

var cn = class {
    constructor(e, n, r, i, o, s, a, c) {
        this.urlSubject = e, this.paramsSubject = n, this.queryParamsSubject = r, this.fragmentSubject = i, this.dataSubject = o, this.outlet = s, this.component = a, this._futureSnapshot = c, this.title = this.dataSubject?.pipe(W(l => l[ao])) ?? P(void 0), this.url = e, this.params = n, this.queryParams = r, this.fragment = i, this.data = o
    }

    get routeConfig() {
        return this._futureSnapshot.routeConfig
    }

    get root() {
        return this._routerState.root
    }

    get parent() {
        return this._routerState.parent(this)
    }

    get firstChild() {
        return this._routerState.firstChild(this)
    }

    get children() {
        return this._routerState.children(this)
    }

    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }

    get paramMap() {
        return this._paramMap ??= this.params.pipe(W(e => Wr(e))), this._paramMap
    }

    get queryParamMap() {
        return this._queryParamMap ??= this.queryParams.pipe(W(e => Wr(e))), this._queryParamMap
    }

    toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
};

function va(t, e, n = "emptyOnly") {
    let r, {routeConfig: i} = t;
    return e !== null && (n === "always" || i?.path === "" || !e.component && !e.routeConfig?.loadComponent) ? r = {
        params: S(S({}, e.params), t.params),
        data: S(S({}, e.data), t.data),
        resolve: S(S(S(S({}, t.data), e.data), i?.data), t._resolvedData)
    } : r = {
        params: S({}, t.params),
        data: S({}, t.data),
        resolve: S(S({}, t.data), t._resolvedData ?? {})
    }, i && wy(i) && (r.resolve[ao] = i.title), r
}

var Hr = class {
    get title() {
        return this.data?.[ao]
    }

    constructor(e, n, r, i, o, s, a, c, l) {
        this.url = e, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = s, this.component = a, this.routeConfig = c, this._resolve = l
    }

    get root() {
        return this._routerState.root
    }

    get parent() {
        return this._routerState.parent(this)
    }

    get firstChild() {
        return this._routerState.firstChild(this)
    }

    get children() {
        return this._routerState.children(this)
    }

    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }

    get paramMap() {
        return this._paramMap ??= Wr(this.params), this._paramMap
    }

    get queryParamMap() {
        return this._queryParamMap ??= Wr(this.queryParams), this._queryParamMap
    }

    toString() {
        let e = this.url.map(r => r.toString()).join("/"), n = this.routeConfig ? this.routeConfig.path : "";
        return `Route(url:'${e}', path:'${n}')`
    }
}, ba = class extends ma {
    constructor(e, n) {
        super(n), this.url = e, ud(this, n)
    }

    toString() {
        return by(this._root)
    }
};

function ud(t, e) {
    e.value._routerState = t, e.children.forEach(n => ud(t, n))
}

function by(t) {
    let e = t.children.length > 0 ? ` { ${t.children.map(by).join(", ")} } ` : "";
    return `${t.value}${e}`
}

function Ou(t) {
    if (t.snapshot) {
        let e = t.snapshot, n = t._futureSnapshot;
        t.snapshot = n, Vt(e.queryParams, n.queryParams) || t.queryParamsSubject.next(n.queryParams), e.fragment !== n.fragment && t.fragmentSubject.next(n.fragment), Vt(e.params, n.params) || t.paramsSubject.next(n.params), NC(e.url, n.url) || t.urlSubject.next(n.url), Vt(e.data, n.data) || t.dataSubject.next(n.data)
    } else t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data)
}

function td(t, e) {
    let n = Vt(t.params, e.params) && PC(t.url, e.url), r = !t.parent != !e.parent;
    return n && !r && (!t.parent || td(t.parent, e.parent))
}

function wy(t) {
    return typeof t.title == "string" || t.title === null
}

var dd = (() => {
    let e = class e {
        constructor() {
            this.activated = null, this._activatedRoute = null, this.name = B, this.activateEvents = new ke, this.deactivateEvents = new ke, this.attachEvents = new ke, this.detachEvents = new ke, this.parentContexts = b(Ia), this.location = b(kr), this.changeDetector = b(En), this.inputBinder = b(fd, {optional: !0}), this.supportsBindingToComponentInputs = !0
        }

        get activatedComponentRef() {
            return this.activated
        }

        ngOnChanges(r) {
            if (r.name) {
                let {firstChange: i, previousValue: o} = r.name;
                if (i) return;
                this.isTrackedInParentContexts(o) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(o)), this.initializeOutletWithName()
            }
        }

        ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this)
        }

        isTrackedInParentContexts(r) {
            return this.parentContexts.getContext(r)?.outlet === this
        }

        ngOnInit() {
            this.initializeOutletWithName()
        }

        initializeOutletWithName() {
            if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated) return;
            let r = this.parentContexts.getContext(this.name);
            r?.route && (r.attachRef ? this.attach(r.attachRef, r.route) : this.activateWith(r.route, r.injector))
        }

        get isActivated() {
            return !!this.activated
        }

        get component() {
            if (!this.activated) throw new D(4012, !1);
            return this.activated.instance
        }

        get activatedRoute() {
            if (!this.activated) throw new D(4012, !1);
            return this._activatedRoute
        }

        get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
        }

        detach() {
            if (!this.activated) throw new D(4012, !1);
            this.location.detach();
            let r = this.activated;
            return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(r.instance), r
        }

        attach(r, i) {
            this.activated = r, this._activatedRoute = i, this.location.insert(r.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(r.instance)
        }

        deactivate() {
            if (this.activated) {
                let r = this.component;
                this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(r)
            }
        }

        activateWith(r, i) {
            if (this.isActivated) throw new D(4013, !1);
            this._activatedRoute = r;
            let o = this.location, a = r.snapshot.component,
                c = this.parentContexts.getOrCreateContext(this.name).children, l = new nd(r, c, o.injector);
            this.activated = o.createComponent(a, {
                index: o.length,
                injector: l,
                environmentInjector: i
            }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance)
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275dir = Ti({
        type: e,
        selectors: [["router-outlet"]],
        inputs: {name: "name"},
        outputs: {
            activateEvents: "activate",
            deactivateEvents: "deactivate",
            attachEvents: "attach",
            detachEvents: "detach"
        },
        exportAs: ["outlet"],
        standalone: !0,
        features: [xr]
    });
    let t = e;
    return t
})(), nd = class t {
    __ngOutletInjector(e) {
        return new t(this.route, this.childContexts, e)
    }

    constructor(e, n, r) {
        this.route = e, this.childContexts = n, this.parent = r
    }

    get(e, n) {
        return e === cn ? this.route : e === Ia ? this.childContexts : this.parent.get(e, n)
    }
}, fd = new L("");

function o_(t, e, n) {
    let r = ro(t, e._root, n ? n._root : void 0);
    return new ya(r, e)
}

function ro(t, e, n) {
    if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
        let r = n.value;
        r._futureSnapshot = e.value;
        let i = s_(t, e, n);
        return new rt(r, i)
    } else {
        if (t.shouldAttach(e.value)) {
            let o = t.retrieve(e.value);
            if (o !== null) {
                let s = o.route;
                return s.value._futureSnapshot = e.value, s.children = e.children.map(a => ro(t, a)), s
            }
        }
        let r = a_(e.value), i = e.children.map(o => ro(t, o));
        return new rt(r, i)
    }
}

function s_(t, e, n) {
    return e.children.map(r => {
        for (let i of n.children) if (t.shouldReuseRoute(r.value, i.value.snapshot)) return ro(t, r, i);
        return ro(t, r)
    })
}

function a_(t) {
    return new cn(new Ne(t.url), new Ne(t.params), new Ne(t.queryParams), new Ne(t.fragment), new Ne(t.data), t.outlet, t.component, t)
}

var io = class {
    constructor(e, n) {
        this.redirectTo = e, this.navigationBehaviorOptions = n
    }
}, Dy = "ngNavigationCancelingError";

function wa(t, e) {
    let {redirectTo: n, navigationBehaviorOptions: r} = Zn(e) ? {redirectTo: e, navigationBehaviorOptions: void 0} : e,
        i = Ey(!1, it.Redirect);
    return i.url = n, i.navigationBehaviorOptions = r, i
}

function Ey(t, e) {
    let n = new Error(`NavigationCancelingError: ${t || ""}`);
    return n[Dy] = !0, n.cancellationCode = e, n
}

function c_(t) {
    return Iy(t) && Zn(t.url)
}

function Iy(t) {
    return !!t && t[Dy]
}

var l_ = (t, e, n, r) => W(i => (new rd(e, i.targetRouterState, i.currentRouterState, n, r).activate(t), i)),
    rd = class {
        constructor(e, n, r, i, o) {
            this.routeReuseStrategy = e, this.futureState = n, this.currState = r, this.forwardEvent = i, this.inputBindingEnabled = o
        }

        activate(e) {
            let n = this.futureState._root, r = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(n, r, e), Ou(this.futureState.root), this.activateChildRoutes(n, r, e)
        }

        deactivateChildRoutes(e, n, r) {
            let i = Ur(n);
            e.children.forEach(o => {
                let s = o.value.outlet;
                this.deactivateRoutes(o, i[s], r), delete i[s]
            }), Object.values(i).forEach(o => {
                this.deactivateRouteAndItsChildren(o, r)
            })
        }

        deactivateRoutes(e, n, r) {
            let i = e.value, o = n ? n.value : null;
            if (i === o) if (i.component) {
                let s = r.getContext(i.outlet);
                s && this.deactivateChildRoutes(e, n, s.children)
            } else this.deactivateChildRoutes(e, n, r); else o && this.deactivateRouteAndItsChildren(n, r)
        }

        deactivateRouteAndItsChildren(e, n) {
            e.value.component && this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, n) : this.deactivateRouteAndOutlet(e, n)
        }

        detachAndStoreRouteSubtree(e, n) {
            let r = n.getContext(e.value.outlet), i = r && e.value.component ? r.children : n, o = Ur(e);
            for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
            if (r && r.outlet) {
                let s = r.outlet.detach(), a = r.children.onOutletDeactivated();
                this.routeReuseStrategy.store(e.value.snapshot, {componentRef: s, route: e, contexts: a})
            }
        }

        deactivateRouteAndOutlet(e, n) {
            let r = n.getContext(e.value.outlet), i = r && e.value.component ? r.children : n, o = Ur(e);
            for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
            r && (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), r.attachRef = null, r.route = null)
        }

        activateChildRoutes(e, n, r) {
            let i = Ur(n);
            e.children.forEach(o => {
                this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new Yu(o.value.snapshot))
            }), e.children.length && this.forwardEvent(new Qu(e.value.snapshot))
        }

        activateRoutes(e, n, r) {
            let i = e.value, o = n ? n.value : null;
            if (Ou(i), i === o) if (i.component) {
                let s = r.getOrCreateContext(i.outlet);
                this.activateChildRoutes(e, n, s.children)
            } else this.activateChildRoutes(e, n, r); else if (i.component) {
                let s = r.getOrCreateContext(i.outlet);
                if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
                    let a = this.routeReuseStrategy.retrieve(i.snapshot);
                    this.routeReuseStrategy.store(i.snapshot, null), s.children.onOutletReAttached(a.contexts), s.attachRef = a.componentRef, s.route = a.route.value, s.outlet && s.outlet.attach(a.componentRef, a.route.value), Ou(a.route.value), this.activateChildRoutes(e, null, s.children)
                } else s.attachRef = null, s.route = i, s.outlet && s.outlet.activateWith(i, s.injector), this.activateChildRoutes(e, null, s.children)
            } else this.activateChildRoutes(e, null, r)
        }
    }, Da = class {
        constructor(e) {
            this.path = e, this.route = this.path[this.path.length - 1]
        }
    }, zr = class {
        constructor(e, n) {
            this.component = e, this.route = n
        }
    };

function u_(t, e, n) {
    let r = t._root, i = e ? e._root : null;
    return qi(r, i, n, [r.value])
}

function d_(t) {
    let e = t.routeConfig ? t.routeConfig.canActivateChild : null;
    return !e || e.length === 0 ? null : {node: t, guards: e}
}

function Zr(t, e) {
    let n = Symbol(), r = e.get(t, n);
    return r === n ? typeof t == "function" && !Vh(t) ? t : e.get(t) : r
}

function qi(t, e, n, r, i = {canDeactivateChecks: [], canActivateChecks: []}) {
    let o = Ur(e);
    return t.children.forEach(s => {
        f_(s, o[s.value.outlet], n, r.concat([s.value]), i), delete o[s.value.outlet]
    }), Object.entries(o).forEach(([s, a]) => Yi(a, n.getContext(s), i)), i
}

function f_(t, e, n, r, i = {canDeactivateChecks: [], canActivateChecks: []}) {
    let o = t.value, s = e ? e.value : null, a = n ? n.getContext(t.value.outlet) : null;
    if (s && o.routeConfig === s.routeConfig) {
        let c = h_(s, o, o.routeConfig.runGuardsAndResolvers);
        c ? i.canActivateChecks.push(new Da(r)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? qi(t, e, a ? a.children : null, r, i) : qi(t, e, n, r, i), c && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new zr(a.outlet.component, s))
    } else s && Yi(e, a, i), i.canActivateChecks.push(new Da(r)), o.component ? qi(t, null, a ? a.children : null, r, i) : qi(t, null, n, r, i);
    return i
}

function h_(t, e, n) {
    if (typeof n == "function") return n(t, e);
    switch (n) {
        case"pathParamsChange":
            return !qn(t.url, e.url);
        case"pathParamsOrQueryParamsChange":
            return !qn(t.url, e.url) || !Vt(t.queryParams, e.queryParams);
        case"always":
            return !0;
        case"paramsOrQueryParamsChange":
            return !td(t, e) || !Vt(t.queryParams, e.queryParams);
        case"paramsChange":
        default:
            return !td(t, e)
    }
}

function Yi(t, e, n) {
    let r = Ur(t), i = t.value;
    Object.entries(r).forEach(([o, s]) => {
        i.component ? e ? Yi(s, e.children.getContext(o), n) : Yi(s, null, n) : Yi(s, e, n)
    }), i.component ? e && e.outlet && e.outlet.isActivated ? n.canDeactivateChecks.push(new zr(e.outlet.component, i)) : n.canDeactivateChecks.push(new zr(null, i)) : n.canDeactivateChecks.push(new zr(null, i))
}

function lo(t) {
    return typeof t == "function"
}

function p_(t) {
    return typeof t == "boolean"
}

function g_(t) {
    return t && lo(t.canLoad)
}

function m_(t) {
    return t && lo(t.canActivate)
}

function y_(t) {
    return t && lo(t.canActivateChild)
}

function v_(t) {
    return t && lo(t.canDeactivate)
}

function b_(t) {
    return t && lo(t.canMatch)
}

function Cy(t) {
    return t instanceof zt || t?.name === "EmptyError"
}

var la = Symbol("INITIAL_VALUE");

function qr() {
    return ct(t => qo(t.map(e => e.pipe(Wt(1), fc(la)))).pipe(W(e => {
        for (let n of e) if (n !== !0) {
            if (n === la) return la;
            if (n === !1 || w_(n)) return n
        }
        return !0
    }), at(e => e !== la), Wt(1)))
}

function w_(t) {
    return Zn(t) || t instanceof io
}

function D_(t, e) {
    return Ie(n => {
        let {targetSnapshot: r, currentSnapshot: i, guards: {canActivateChecks: o, canDeactivateChecks: s}} = n;
        return s.length === 0 && o.length === 0 ? P(fe(S({}, n), {guardsResult: !0})) : E_(s, r, i, t).pipe(Ie(a => a && p_(a) ? I_(r, o, t, e) : P(a)), W(a => fe(S({}, n), {guardsResult: a})))
    })
}

function E_(t, e, n, r) {
    return ve(t).pipe(Ie(i => M_(i.component, i.route, n, e, r)), wt(i => i !== !0, !0))
}

function I_(t, e, n, r) {
    return ve(e).pipe(Nn(i => hr(__(i.route.parent, r), C_(i.route, r), T_(t, i.path, n), S_(t, i.route, n))), wt(i => i !== !0, !0))
}

function C_(t, e) {
    return t !== null && e && e(new Ku(t)), P(!0)
}

function __(t, e) {
    return t !== null && e && e(new Zu(t)), P(!0)
}

function S_(t, e, n) {
    let r = e.routeConfig ? e.routeConfig.canActivate : null;
    if (!r || r.length === 0) return P(!0);
    let i = r.map(o => Zo(() => {
        let s = co(e) ?? n, a = Zr(o, s), c = m_(a) ? a.canActivate(e, t) : Pt(s, () => a(e, t));
        return In(c).pipe(wt())
    }));
    return P(i).pipe(qr())
}

function T_(t, e, n) {
    let r = e[e.length - 1],
        o = e.slice(0, e.length - 1).reverse().map(s => d_(s)).filter(s => s !== null).map(s => Zo(() => {
            let a = s.guards.map(c => {
                let l = co(s.node) ?? n, u = Zr(c, l), d = y_(u) ? u.canActivateChild(r, t) : Pt(l, () => u(r, t));
                return In(d).pipe(wt())
            });
            return P(a).pipe(qr())
        }));
    return P(o).pipe(qr())
}

function M_(t, e, n, r, i) {
    let o = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
    if (!o || o.length === 0) return P(!0);
    let s = o.map(a => {
        let c = co(e) ?? i, l = Zr(a, c), u = v_(l) ? l.canDeactivate(t, e, n, r) : Pt(c, () => l(t, e, n, r));
        return In(u).pipe(wt())
    });
    return P(s).pipe(qr())
}

function x_(t, e, n, r) {
    let i = e.canLoad;
    if (i === void 0 || i.length === 0) return P(!0);
    let o = i.map(s => {
        let a = Zr(s, t), c = g_(a) ? a.canLoad(e, n) : Pt(t, () => a(e, n));
        return In(c)
    });
    return P(o).pipe(qr(), _y(r))
}

function _y(t) {
    return ic(Ce(e => {
        if (typeof e != "boolean") throw wa(t, e)
    }), W(e => e === !0))
}

function A_(t, e, n, r) {
    let i = e.canMatch;
    if (!i || i.length === 0) return P(!0);
    let o = i.map(s => {
        let a = Zr(s, t), c = b_(a) ? a.canMatch(e, n) : Pt(t, () => a(e, n));
        return In(c)
    });
    return P(o).pipe(qr(), _y(r))
}

var oo = class {
    constructor(e) {
        this.segmentGroup = e || null
    }
}, so = class extends Error {
    constructor(e) {
        super(), this.urlTree = e
    }
};

function Br(t) {
    return dr(new oo(t))
}

function N_(t) {
    return dr(new D(4e3, !1))
}

function k_(t) {
    return dr(Ey(!1, it.GuardRejected))
}

var id = class {
    constructor(e, n) {
        this.urlSerializer = e, this.urlTree = n
    }

    lineralizeSegments(e, n) {
        let r = [], i = n.root;
        for (; ;) {
            if (r = r.concat(i.segments), i.numberOfChildren === 0) return P(r);
            if (i.numberOfChildren > 1 || !i.children[B]) return N_(`${e.redirectTo}`);
            i = i.children[B]
        }
    }

    applyRedirectCommands(e, n, r, i, o) {
        if (typeof n != "string") {
            let a = n, {
                queryParams: c,
                fragment: l,
                routeConfig: u,
                url: d,
                outlet: h,
                params: f,
                data: m,
                title: v
            } = i, C = Pt(o, () => a({
                params: f,
                data: m,
                queryParams: c,
                fragment: l,
                routeConfig: u,
                url: d,
                outlet: h,
                title: v
            }));
            if (C instanceof sn) throw new so(C);
            n = C
        }
        let s = this.applyRedirectCreateUrlTree(n, this.urlSerializer.parse(n), e, r);
        if (n[0] === "/") throw new so(s);
        return s
    }

    applyRedirectCreateUrlTree(e, n, r, i) {
        let o = this.createSegmentGroup(e, n.root, r, i);
        return new sn(o, this.createQueryParams(n.queryParams, this.urlTree.queryParams), n.fragment)
    }

    createQueryParams(e, n) {
        let r = {};
        return Object.entries(e).forEach(([i, o]) => {
            if (typeof o == "string" && o[0] === ":") {
                let a = o.substring(1);
                r[i] = n[a]
            } else r[i] = o
        }), r
    }

    createSegmentGroup(e, n, r, i) {
        let o = this.createSegments(e, n.segments, r, i), s = {};
        return Object.entries(n.children).forEach(([a, c]) => {
            s[a] = this.createSegmentGroup(e, c, r, i)
        }), new ne(o, s)
    }

    createSegments(e, n, r, i) {
        return n.map(o => o.path[0] === ":" ? this.findPosParam(e, o, i) : this.findOrReturn(o, r))
    }

    findPosParam(e, n, r) {
        let i = r[n.path.substring(1)];
        if (!i) throw new D(4001, !1);
        return i
    }

    findOrReturn(e, n) {
        let r = 0;
        for (let i of n) {
            if (i.path === e.path) return n.splice(r), i;
            r++
        }
        return e
    }
}, od = {matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {}};

function R_(t, e, n, r, i) {
    let o = hd(t, e, n);
    return o.matched ? (r = n_(e, r), A_(r, e, n, i).pipe(W(s => s === !0 ? o : S({}, od)))) : P(o)
}

function hd(t, e, n) {
    if (e.path === "**") return O_(n);
    if (e.path === "") return e.pathMatch === "full" && (t.hasChildren() || n.length > 0) ? S({}, od) : {
        matched: !0,
        consumedSegments: [],
        remainingSegments: n,
        parameters: {},
        positionalParamSegments: {}
    };
    let i = (e.matcher || AC)(n, t, e);
    if (!i) return S({}, od);
    let o = {};
    Object.entries(i.posParams ?? {}).forEach(([a, c]) => {
        o[a] = c.path
    });
    let s = i.consumed.length > 0 ? S(S({}, o), i.consumed[i.consumed.length - 1].parameters) : o;
    return {
        matched: !0,
        consumedSegments: i.consumed,
        remainingSegments: n.slice(i.consumed.length),
        parameters: s,
        positionalParamSegments: i.posParams ?? {}
    }
}

function O_(t) {
    return {
        matched: !0,
        parameters: t.length > 0 ? oy(t).parameters : {},
        consumedSegments: t,
        remainingSegments: [],
        positionalParamSegments: {}
    }
}

function ty(t, e, n, r) {
    return n.length > 0 && L_(t, n, r) ? {
        segmentGroup: new ne(e, F_(r, new ne(n, t.children))),
        slicedSegments: []
    } : n.length === 0 && j_(t, n, r) ? {
        segmentGroup: new ne(t.segments, P_(t, n, r, t.children)),
        slicedSegments: n
    } : {segmentGroup: new ne(t.segments, t.children), slicedSegments: n}
}

function P_(t, e, n, r) {
    let i = {};
    for (let o of n) if (Ca(t, e, o) && !r[St(o)]) {
        let s = new ne([], {});
        i[St(o)] = s
    }
    return S(S({}, r), i)
}

function F_(t, e) {
    let n = {};
    n[B] = e;
    for (let r of t) if (r.path === "" && St(r) !== B) {
        let i = new ne([], {});
        n[St(r)] = i
    }
    return n
}

function L_(t, e, n) {
    return n.some(r => Ca(t, e, r) && St(r) !== B)
}

function j_(t, e, n) {
    return n.some(r => Ca(t, e, r))
}

function Ca(t, e, n) {
    return (t.hasChildren() || e.length > 0) && n.pathMatch === "full" ? !1 : n.path === ""
}

function V_(t, e, n, r) {
    return St(t) !== r && (r === B || !Ca(e, n, t)) ? !1 : hd(e, t, n).matched
}

function B_(t, e, n) {
    return e.length === 0 && !t.children[n]
}

var sd = class {
};

function U_(t, e, n, r, i, o, s = "emptyOnly") {
    return new ad(t, e, n, r, i, s, o).recognize()
}

var $_ = 31, ad = class {
    constructor(e, n, r, i, o, s, a) {
        this.injector = e, this.configLoader = n, this.rootComponentType = r, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.applyRedirects = new id(this.urlSerializer, this.urlTree), this.absoluteRedirectCount = 0, this.allowRedirects = !0
    }

    noMatchError(e) {
        return new D(4002, `'${e.segmentGroup}'`)
    }

    recognize() {
        let e = ty(this.urlTree.root, [], [], this.config).segmentGroup;
        return this.match(e).pipe(W(({children: n, rootSnapshot: r}) => {
            let i = new rt(r, n), o = new ba("", i), s = QC(r, [], this.urlTree.queryParams, this.urlTree.fragment);
            return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), {
                state: o,
                tree: s
            }
        }))
    }

    match(e) {
        let n = new Hr([], Object.freeze({}), Object.freeze(S({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), B, this.rootComponentType, null, {});
        return this.processSegmentGroup(this.injector, this.config, e, B, n).pipe(W(r => ({
            children: r,
            rootSnapshot: n
        })), dn(r => {
            if (r instanceof so) return this.urlTree = r.urlTree, this.match(r.urlTree.root);
            throw r instanceof oo ? this.noMatchError(r) : r
        }))
    }

    processSegmentGroup(e, n, r, i, o) {
        return r.segments.length === 0 && r.hasChildren() ? this.processChildren(e, n, r, o) : this.processSegment(e, n, r, r.segments, i, !0, o).pipe(W(s => s instanceof rt ? [s] : []))
    }

    processChildren(e, n, r, i) {
        let o = [];
        for (let s of Object.keys(r.children)) s === "primary" ? o.unshift(s) : o.push(s);
        return ve(o).pipe(Nn(s => {
            let a = r.children[s], c = r_(n, s);
            return this.processSegmentGroup(e, c, a, s, i)
        }), dc((s, a) => (s.push(...a), s)), fn(null), uc(), Ie(s => {
            if (s === null) return Br(r);
            let a = Sy(s);
            return H_(a), P(a)
        }))
    }

    processSegment(e, n, r, i, o, s, a) {
        return ve(n).pipe(Nn(c => this.processSegmentAgainstRoute(c._injector ?? e, n, c, r, i, o, s, a).pipe(dn(l => {
            if (l instanceof oo) return P(null);
            throw l
        }))), wt(c => !!c), dn(c => {
            if (Cy(c)) return B_(r, i, o) ? P(new sd) : Br(r);
            throw c
        }))
    }

    processSegmentAgainstRoute(e, n, r, i, o, s, a, c) {
        return V_(r, i, o, s) ? r.redirectTo === void 0 ? this.matchSegmentAgainstRoute(e, i, r, o, s, c) : this.allowRedirects && a ? this.expandSegmentAgainstRouteUsingRedirect(e, i, n, r, o, s, c) : Br(i) : Br(i)
    }

    expandSegmentAgainstRouteUsingRedirect(e, n, r, i, o, s, a) {
        let {
            matched: c,
            parameters: l,
            consumedSegments: u,
            positionalParamSegments: d,
            remainingSegments: h
        } = hd(n, i, o);
        if (!c) return Br(n);
        typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > $_ && (this.allowRedirects = !1));
        let f = new Hr(o, l, Object.freeze(S({}, this.urlTree.queryParams)), this.urlTree.fragment, ny(i), St(i), i.component ?? i._loadedComponent ?? null, i, ry(i)),
            m = va(f, a, this.paramsInheritanceStrategy);
        f.params = Object.freeze(m.params), f.data = Object.freeze(m.data);
        let v = this.applyRedirects.applyRedirectCommands(u, i.redirectTo, d, f, e);
        return this.applyRedirects.lineralizeSegments(i, v).pipe(Ie(C => this.processSegment(e, r, n, C.concat(h), s, !1, a)))
    }

    matchSegmentAgainstRoute(e, n, r, i, o, s) {
        let a = R_(n, r, i, e, this.urlSerializer);
        return r.path === "**" && (n.children = {}), a.pipe(ct(c => c.matched ? (e = r._injector ?? e, this.getChildConfig(e, r, i).pipe(ct(({routes: l}) => {
            let u = r._loadedInjector ?? e, {parameters: d, consumedSegments: h, remainingSegments: f} = c,
                m = new Hr(h, d, Object.freeze(S({}, this.urlTree.queryParams)), this.urlTree.fragment, ny(r), St(r), r.component ?? r._loadedComponent ?? null, r, ry(r)),
                v = va(m, s, this.paramsInheritanceStrategy);
            m.params = Object.freeze(v.params), m.data = Object.freeze(v.data);
            let {segmentGroup: C, slicedSegments: N} = ty(n, h, f, l);
            if (N.length === 0 && C.hasChildren()) return this.processChildren(u, l, C, m).pipe(W(z => new rt(m, z)));
            if (l.length === 0 && N.length === 0) return P(new rt(m, []));
            let $ = St(r) === o;
            return this.processSegment(u, l, C, N, $ ? B : o, !0, m).pipe(W(z => new rt(m, z instanceof rt ? [z] : [])))
        }))) : Br(n)))
    }

    getChildConfig(e, n, r) {
        return n.children ? P({
            routes: n.children,
            injector: e
        }) : n.loadChildren ? n._loadedRoutes !== void 0 ? P({
            routes: n._loadedRoutes,
            injector: n._loadedInjector
        }) : x_(e, n, r, this.urlSerializer).pipe(Ie(i => i ? this.configLoader.loadChildren(e, n).pipe(Ce(o => {
            n._loadedRoutes = o.routes, n._loadedInjector = o.injector
        })) : k_(n))) : P({routes: [], injector: e})
    }
};

function H_(t) {
    t.sort((e, n) => e.value.outlet === B ? -1 : n.value.outlet === B ? 1 : e.value.outlet.localeCompare(n.value.outlet))
}

function z_(t) {
    let e = t.value.routeConfig;
    return e && e.path === ""
}

function Sy(t) {
    let e = [], n = new Set;
    for (let r of t) {
        if (!z_(r)) {
            e.push(r);
            continue
        }
        let i = e.find(o => r.value.routeConfig === o.value.routeConfig);
        i !== void 0 ? (i.children.push(...r.children), n.add(i)) : e.push(r)
    }
    for (let r of n) {
        let i = Sy(r.children);
        e.push(new rt(r.value, i))
    }
    return e.filter(r => !n.has(r))
}

function ny(t) {
    return t.data || {}
}

function ry(t) {
    return t.resolve || {}
}

function W_(t, e, n, r, i, o) {
    return Ie(s => U_(t, e, n, r, s.extractedUrl, i, o).pipe(W(({state: a, tree: c}) => fe(S({}, s), {
        targetSnapshot: a,
        urlAfterRedirects: c
    }))))
}

function G_(t, e) {
    return Ie(n => {
        let {targetSnapshot: r, guards: {canActivateChecks: i}} = n;
        if (!i.length) return P(n);
        let o = new Set(i.map(c => c.route)), s = new Set;
        for (let c of o) if (!s.has(c)) for (let l of Ty(c)) s.add(l);
        let a = 0;
        return ve(s).pipe(Nn(c => o.has(c) ? q_(c, r, t, e) : (c.data = va(c, c.parent, t).resolve, P(void 0))), Ce(() => a++), gr(1), Ie(c => a === s.size ? P(n) : Ye))
    })
}

function Ty(t) {
    let e = t.children.map(n => Ty(n)).flat();
    return [t, ...e]
}

function q_(t, e, n, r) {
    let i = t.routeConfig, o = t._resolve;
    return i?.title !== void 0 && !wy(i) && (o[ao] = i.title), Z_(o, t, e, r).pipe(W(s => (t._resolvedData = s, t.data = va(t, t.parent, n).resolve, null)))
}

function Z_(t, e, n, r) {
    let i = Lu(t);
    if (i.length === 0) return P({});
    let o = {};
    return ve(i).pipe(Ie(s => Q_(t[s], e, n, r).pipe(wt(), Ce(a => {
        if (a instanceof io) throw wa(new Ji, a);
        o[s] = a
    }))), gr(1), lc(o), dn(s => Cy(s) ? Ye : dr(s)))
}

function Q_(t, e, n, r) {
    let i = co(e) ?? r, o = Zr(t, i), s = o.resolve ? o.resolve(e, n) : Pt(i, () => o(e, n));
    return In(s)
}

function Pu(t) {
    return ct(e => {
        let n = t(e);
        return n ? ve(n).pipe(W(() => e)) : P(e)
    })
}

var My = (() => {
    let e = class e {
        buildTitle(r) {
            let i, o = r.root;
            for (; o !== void 0;) i = this.getResolvedTitleForRoute(o) ?? i, o = o.children.find(s => s.outlet === B);
            return i
        }

        getResolvedTitleForRoute(r) {
            return r.data[ao]
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: () => b(K_), providedIn: "root"});
    let t = e;
    return t
})(), K_ = (() => {
    let e = class e extends My {
        constructor(r) {
            super(), this.title = r
        }

        updateTitle(r) {
            let i = this.buildTitle(r);
            i !== void 0 && this.title.setTitle(i)
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)(H(Qm))
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})(), pd = new L("", {providedIn: "root", factory: () => ({})}), Y_ = (() => {
    let e = class e {
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275cmp = Ge({
        type: e,
        selectors: [["ng-component"]],
        standalone: !0,
        features: [Ze],
        decls: 1,
        vars: 0,
        template: function (i, o) {
            i & 1 && $e(0, "router-outlet")
        },
        dependencies: [dd],
        encapsulation: 2
    });
    let t = e;
    return t
})();

function gd(t) {
    let e = t.children && t.children.map(gd), n = e ? fe(S({}, t), {children: e}) : S({}, t);
    return !n.component && !n.loadComponent && (e || n.loadChildren) && n.outlet && n.outlet !== B && (n.component = Y_), n
}

var md = new L(""), J_ = (() => {
    let e = class e {
        constructor() {
            this.componentLoaders = new WeakMap, this.childrenLoaders = new WeakMap, this.compiler = b(yu)
        }

        loadComponent(r) {
            if (this.componentLoaders.get(r)) return this.componentLoaders.get(r);
            if (r._loadedComponent) return P(r._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(r);
            let i = In(r.loadComponent()).pipe(W(xy), Ce(s => {
                this.onLoadEndListener && this.onLoadEndListener(r), r._loadedComponent = s
            }), pr(() => {
                this.componentLoaders.delete(r)
            })), o = new ur(i, () => new Pe).pipe(lr());
            return this.componentLoaders.set(r, o), o
        }

        loadChildren(r, i) {
            if (this.childrenLoaders.get(i)) return this.childrenLoaders.get(i);
            if (i._loadedRoutes) return P({routes: i._loadedRoutes, injector: i._loadedInjector});
            this.onLoadStartListener && this.onLoadStartListener(i);
            let s = X_(i, this.compiler, r, this.onLoadEndListener).pipe(pr(() => {
                this.childrenLoaders.delete(i)
            })), a = new ur(s, () => new Pe).pipe(lr());
            return this.childrenLoaders.set(i, a), a
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})();

function X_(t, e, n, r) {
    return In(t.loadChildren()).pipe(W(xy), Ie(i => i instanceof Ci || Array.isArray(i) ? P(i) : ve(e.compileModuleAsync(i))), W(i => {
        r && r(t);
        let o, s, a = !1;
        return Array.isArray(i) ? (s = i, a = !0) : (o = i.create(n).injector, s = o.get(md, [], {
            optional: !0,
            self: !0
        }).flat()), {routes: s.map(gd), injector: o}
    }))
}

function e1(t) {
    return t && typeof t == "object" && "default" in t
}

function xy(t) {
    return e1(t) ? t.default : t
}

var yd = (() => {
    let e = class e {
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: () => b(t1), providedIn: "root"});
    let t = e;
    return t
})(), t1 = (() => {
    let e = class e {
        shouldProcessUrl(r) {
            return !0
        }

        extract(r) {
            return r
        }

        merge(r, i) {
            return r
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})(), n1 = new L("");
var r1 = new L(""), i1 = (() => {
    let e = class e {
        get hasRequestedNavigation() {
            return this.navigationId !== 0
        }

        constructor() {
            this.currentNavigation = null, this.currentTransition = null, this.lastSuccessfulNavigation = null, this.events = new Pe, this.transitionAbortSubject = new Pe, this.configLoader = b(J_), this.environmentInjector = b(ft), this.urlSerializer = b(ld), this.rootContexts = b(Ia), this.location = b(Bi), this.inputBindingEnabled = b(fd, {optional: !0}) !== null, this.titleStrategy = b(My), this.options = b(pd, {optional: !0}) || {}, this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly", this.urlHandlingStrategy = b(yd), this.createViewTransition = b(n1, {optional: !0}), this.navigationErrorHandler = b(r1, {optional: !0}), this.navigationId = 0, this.afterPreactivation = () => P(void 0), this.rootComponentType = null;
            let r = o => this.events.next(new Gu(o)), i = o => this.events.next(new qu(o));
            this.configLoader.onLoadEndListener = i, this.configLoader.onLoadStartListener = r
        }

        complete() {
            this.transitions?.complete()
        }

        handleNavigationRequest(r) {
            let i = ++this.navigationId;
            this.transitions?.next(fe(S(S({}, this.transitions.value), r), {id: i}))
        }

        setupNavigations(r, i, o) {
            return this.transitions = new Ne({
                id: 0,
                currentUrlTree: i,
                currentRawUrl: i,
                extractedUrl: this.urlHandlingStrategy.extract(i),
                urlAfterRedirects: this.urlHandlingStrategy.extract(i),
                rawUrl: i,
                extras: {},
                resolve: () => {
                },
                reject: () => {
                },
                promise: Promise.resolve(!0),
                source: Ki,
                restoredState: null,
                currentSnapshot: o.snapshot,
                targetSnapshot: null,
                currentRouterState: o,
                targetRouterState: null,
                guards: {canActivateChecks: [], canDeactivateChecks: []},
                guardsResult: null
            }), this.transitions.pipe(at(s => s.id !== 0), W(s => fe(S({}, s), {extractedUrl: this.urlHandlingStrategy.extract(s.rawUrl)})), ct(s => {
                let a = !1, c = !1;
                return P(s).pipe(ct(l => {
                    if (this.navigationId > s.id) return this.cancelNavigationTransition(s, "", it.SupersededByNewNavigation), Ye;
                    this.currentTransition = s, this.currentNavigation = {
                        id: l.id,
                        initialUrl: l.rawUrl,
                        extractedUrl: l.extractedUrl,
                        targetBrowserUrl: typeof l.extras.browserUrl == "string" ? this.urlSerializer.parse(l.extras.browserUrl) : l.extras.browserUrl,
                        trigger: l.source,
                        extras: l.extras,
                        previousNavigation: this.lastSuccessfulNavigation ? fe(S({}, this.lastSuccessfulNavigation), {previousNavigation: null}) : null
                    };
                    let u = !r.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(),
                        d = l.extras.onSameUrlNavigation ?? r.onSameUrlNavigation;
                    if (!u && d !== "reload") {
                        let h = "";
                        return this.events.next(new Qn(l.id, this.urlSerializer.serialize(l.rawUrl), h, Uu.IgnoredSameUrlNavigation)), l.resolve(!1), Ye
                    }
                    if (this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl)) return P(l).pipe(ct(h => {
                        let f = this.transitions?.getValue();
                        return this.events.next(new eo(h.id, this.urlSerializer.serialize(h.extractedUrl), h.source, h.restoredState)), f !== this.transitions?.getValue() ? Ye : Promise.resolve(h)
                    }), W_(this.environmentInjector, this.configLoader, this.rootComponentType, r.config, this.urlSerializer, this.paramsInheritanceStrategy), Ce(h => {
                        s.targetSnapshot = h.targetSnapshot, s.urlAfterRedirects = h.urlAfterRedirects, this.currentNavigation = fe(S({}, this.currentNavigation), {finalUrl: h.urlAfterRedirects});
                        let f = new ga(h.id, this.urlSerializer.serialize(h.extractedUrl), this.urlSerializer.serialize(h.urlAfterRedirects), h.targetSnapshot);
                        this.events.next(f)
                    }));
                    if (u && this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)) {
                        let {id: h, extractedUrl: f, source: m, restoredState: v, extras: C} = l,
                            N = new eo(h, this.urlSerializer.serialize(f), m, v);
                        this.events.next(N);
                        let $ = vy(this.rootComponentType).snapshot;
                        return this.currentTransition = s = fe(S({}, l), {
                            targetSnapshot: $,
                            urlAfterRedirects: f,
                            extras: fe(S({}, C), {skipLocationChange: !1, replaceUrl: !1})
                        }), this.currentNavigation.finalUrl = f, P(s)
                    } else {
                        let h = "";
                        return this.events.next(new Qn(l.id, this.urlSerializer.serialize(l.extractedUrl), h, Uu.IgnoredByUrlHandlingStrategy)), l.resolve(!1), Ye
                    }
                }), Ce(l => {
                    let u = new $u(l.id, this.urlSerializer.serialize(l.extractedUrl), this.urlSerializer.serialize(l.urlAfterRedirects), l.targetSnapshot);
                    this.events.next(u)
                }), W(l => (this.currentTransition = s = fe(S({}, l), {guards: u_(l.targetSnapshot, l.currentSnapshot, this.rootContexts)}), s)), D_(this.environmentInjector, l => this.events.next(l)), Ce(l => {
                    if (s.guardsResult = l.guardsResult, l.guardsResult && typeof l.guardsResult != "boolean") throw wa(this.urlSerializer, l.guardsResult);
                    let u = new Hu(l.id, this.urlSerializer.serialize(l.extractedUrl), this.urlSerializer.serialize(l.urlAfterRedirects), l.targetSnapshot, !!l.guardsResult);
                    this.events.next(u)
                }), at(l => l.guardsResult ? !0 : (this.cancelNavigationTransition(l, "", it.GuardRejected), !1)), Pu(l => {
                    if (l.guards.canActivateChecks.length) return P(l).pipe(Ce(u => {
                        let d = new zu(u.id, this.urlSerializer.serialize(u.extractedUrl), this.urlSerializer.serialize(u.urlAfterRedirects), u.targetSnapshot);
                        this.events.next(d)
                    }), ct(u => {
                        let d = !1;
                        return P(u).pipe(G_(this.paramsInheritanceStrategy, this.environmentInjector), Ce({
                            next: () => d = !0,
                            complete: () => {
                                d || this.cancelNavigationTransition(u, "", it.NoDataFromResolver)
                            }
                        }))
                    }), Ce(u => {
                        let d = new Wu(u.id, this.urlSerializer.serialize(u.extractedUrl), this.urlSerializer.serialize(u.urlAfterRedirects), u.targetSnapshot);
                        this.events.next(d)
                    }))
                }), Pu(l => {
                    let u = d => {
                        let h = [];
                        d.routeConfig?.loadComponent && !d.routeConfig._loadedComponent && h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Ce(f => {
                            d.component = f
                        }), W(() => {
                        })));
                        for (let f of d.children) h.push(...u(f));
                        return h
                    };
                    return qo(u(l.targetSnapshot.root)).pipe(fn(null), Wt(1))
                }), Pu(() => this.afterPreactivation()), ct(() => {
                    let {currentSnapshot: l, targetSnapshot: u} = s,
                        d = this.createViewTransition?.(this.environmentInjector, l.root, u.root);
                    return d ? ve(d).pipe(W(() => s)) : P(s)
                }), W(l => {
                    let u = o_(r.routeReuseStrategy, l.targetSnapshot, l.currentRouterState);
                    return this.currentTransition = s = fe(S({}, l), {targetRouterState: u}), this.currentNavigation.targetRouterState = u, s
                }), Ce(() => {
                    this.events.next(new no)
                }), l_(this.rootContexts, r.routeReuseStrategy, l => this.events.next(l), this.inputBindingEnabled), Wt(1), Ce({
                    next: l => {
                        a = !0, this.lastSuccessfulNavigation = this.currentNavigation, this.events.next(new an(l.id, this.urlSerializer.serialize(l.extractedUrl), this.urlSerializer.serialize(l.urlAfterRedirects))), this.titleStrategy?.updateTitle(l.targetRouterState.snapshot), l.resolve(!0)
                    }, complete: () => {
                        a = !0
                    }
                }), hc(this.transitionAbortSubject.pipe(Ce(l => {
                    throw l
                }))), pr(() => {
                    !a && !c && this.cancelNavigationTransition(s, "", it.SupersededByNewNavigation), this.currentTransition?.id === s.id && (this.currentNavigation = null, this.currentTransition = null)
                }), dn(l => {
                    if (c = !0, Iy(l)) this.events.next(new on(s.id, this.urlSerializer.serialize(s.extractedUrl), l.message, l.cancellationCode)), c_(l) ? this.events.next(new Gr(l.url, l.navigationBehaviorOptions)) : s.resolve(!1); else {
                        let u = new to(s.id, this.urlSerializer.serialize(s.extractedUrl), l, s.targetSnapshot ?? void 0);
                        try {
                            let d = Pt(this.environmentInjector, () => this.navigationErrorHandler?.(u));
                            if (d instanceof io) {
                                let {message: h, cancellationCode: f} = wa(this.urlSerializer, d);
                                this.events.next(new on(s.id, this.urlSerializer.serialize(s.extractedUrl), h, f)), this.events.next(new Gr(d.redirectTo, d.navigationBehaviorOptions))
                            } else {
                                this.events.next(u);
                                let h = r.errorHandler(l);
                                s.resolve(!!h)
                            }
                        } catch (d) {
                            this.options.resolveNavigationPromiseOnError ? s.resolve(!1) : s.reject(d)
                        }
                    }
                    return Ye
                }))
            }))
        }

        cancelNavigationTransition(r, i, o) {
            let s = new on(r.id, this.urlSerializer.serialize(r.extractedUrl), i, o);
            this.events.next(s), r.resolve(!1)
        }

        isUpdatingInternalState() {
            return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString()
        }

        isUpdatedBrowserUrl() {
            let r = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),
                i = this.currentNavigation?.targetBrowserUrl ?? this.currentNavigation?.extractedUrl;
            return r.toString() !== i?.toString() && !this.currentNavigation?.extras.skipLocationChange
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})();

function o1(t) {
    return t !== Ki
}

var s1 = (() => {
    let e = class e {
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: () => b(a1), providedIn: "root"});
    let t = e;
    return t
})(), cd = class {
    shouldDetach(e) {
        return !1
    }

    store(e, n) {
    }

    shouldAttach(e) {
        return !1
    }

    retrieve(e) {
        return null
    }

    shouldReuseRoute(e, n) {
        return e.routeConfig === n.routeConfig
    }
}, a1 = (() => {
    let e = class e extends cd {
    };
    e.\u0275fac = (() => {
        let r;
        return function (o) {
            return (r || (r = Vl(e)))(o || e)
        }
    })(), e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})(), Ay = (() => {
    let e = class e {
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: () => b(c1), providedIn: "root"});
    let t = e;
    return t
})(), c1 = (() => {
    let e = class e extends Ay {
        constructor() {
            super(...arguments), this.location = b(Bi), this.urlSerializer = b(ld), this.options = b(pd, {optional: !0}) || {}, this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace", this.urlHandlingStrategy = b(yd), this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred", this.currentUrlTree = new sn, this.rawUrlTree = this.currentUrlTree, this.currentPageId = 0, this.lastSuccessfulId = -1, this.routerState = vy(null), this.stateMemento = this.createStateMemento()
        }

        getCurrentUrlTree() {
            return this.currentUrlTree
        }

        getRawUrlTree() {
            return this.rawUrlTree
        }

        restoredState() {
            return this.location.getState()
        }

        get browserPageId() {
            return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId
        }

        getRouterState() {
            return this.routerState
        }

        createStateMemento() {
            return {rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState}
        }

        registerNonRouterCurrentEntryChangeListener(r) {
            return this.location.subscribe(i => {
                i.type === "popstate" && r(i.url, i.state)
            })
        }

        handleRouterEvent(r, i) {
            if (r instanceof eo) this.stateMemento = this.createStateMemento(); else if (r instanceof Qn) this.rawUrlTree = i.initialUrl; else if (r instanceof ga) {
                if (this.urlUpdateStrategy === "eager" && !i.extras.skipLocationChange) {
                    let o = this.urlHandlingStrategy.merge(i.finalUrl, i.initialUrl);
                    this.setBrowserUrl(i.targetBrowserUrl ?? o, i)
                }
            } else r instanceof no ? (this.currentUrlTree = i.finalUrl, this.rawUrlTree = this.urlHandlingStrategy.merge(i.finalUrl, i.initialUrl), this.routerState = i.targetRouterState, this.urlUpdateStrategy === "deferred" && !i.extras.skipLocationChange && this.setBrowserUrl(i.targetBrowserUrl ?? this.rawUrlTree, i)) : r instanceof on && (r.code === it.GuardRejected || r.code === it.NoDataFromResolver) ? this.restoreHistory(i) : r instanceof to ? this.restoreHistory(i, !0) : r instanceof an && (this.lastSuccessfulId = r.id, this.currentPageId = this.browserPageId)
        }

        setBrowserUrl(r, i) {
            let o = r instanceof sn ? this.urlSerializer.serialize(r) : r;
            if (this.location.isCurrentPathEqualTo(o) || i.extras.replaceUrl) {
                let s = this.browserPageId, a = S(S({}, i.extras.state), this.generateNgRouterState(i.id, s));
                this.location.replaceState(o, "", a)
            } else {
                let s = S(S({}, i.extras.state), this.generateNgRouterState(i.id, this.browserPageId + 1));
                this.location.go(o, "", s)
            }
        }

        restoreHistory(r, i = !1) {
            if (this.canceledNavigationResolution === "computed") {
                let o = this.browserPageId, s = this.currentPageId - o;
                s !== 0 ? this.location.historyGo(s) : this.currentUrlTree === r.finalUrl && s === 0 && (this.resetState(r), this.resetUrlToCurrentUrlTree())
            } else this.canceledNavigationResolution === "replace" && (i && this.resetState(r), this.resetUrlToCurrentUrlTree())
        }

        resetState(r) {
            this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, r.finalUrl ?? this.rawUrlTree)
        }

        resetUrlToCurrentUrlTree() {
            this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
        }

        generateNgRouterState(r, i) {
            return this.canceledNavigationResolution === "computed" ? {
                navigationId: r,
                \u0275routerPageId: i
            } : {navigationId: r}
        }
    };
    e.\u0275fac = (() => {
        let r;
        return function (o) {
            return (r || (r = Vl(e)))(o || e)
        }
    })(), e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
    let t = e;
    return t
})(), Zi = function (t) {
    return t[t.COMPLETE = 0] = "COMPLETE", t[t.FAILED = 1] = "FAILED", t[t.REDIRECTING = 2] = "REDIRECTING", t
}(Zi || {});

function l1(t, e) {
    t.events.pipe(at(n => n instanceof an || n instanceof on || n instanceof to || n instanceof Qn), W(n => n instanceof an || n instanceof Qn ? Zi.COMPLETE : (n instanceof on ? n.code === it.Redirect || n.code === it.SupersededByNewNavigation : !1) ? Zi.REDIRECTING : Zi.FAILED), at(n => n !== Zi.REDIRECTING), Wt(1)).subscribe(() => {
        e()
    })
}

function u1(t) {
    throw t
}

var d1 = {paths: "exact", fragment: "ignored", matrixParams: "ignored", queryParams: "exact"},
    f1 = {paths: "subset", fragment: "ignored", matrixParams: "ignored", queryParams: "subset"}, Qr = (() => {
        let e = class e {
            get currentUrlTree() {
                return this.stateManager.getCurrentUrlTree()
            }

            get rawUrlTree() {
                return this.stateManager.getRawUrlTree()
            }

            get events() {
                return this._events
            }

            get routerState() {
                return this.stateManager.getRouterState()
            }

            constructor() {
                this.disposed = !1, this.console = b(Js), this.stateManager = b(Ay), this.options = b(pd, {optional: !0}) || {}, this.pendingTasks = b(zn), this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred", this.navigationTransitions = b(i1), this.urlSerializer = b(ld), this.location = b(Bi), this.urlHandlingStrategy = b(yd), this._events = new Pe, this.errorHandler = this.options.errorHandler || u1, this.navigated = !1, this.routeReuseStrategy = b(s1), this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore", this.config = b(md, {optional: !0})?.flat() ?? [], this.componentInputBindingEnabled = !!b(fd, {optional: !0}), this.eventsSubscription = new we, this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe({
                    error: r => {
                        this.console.warn(r)
                    }
                }), this.subscribeToNavigationEvents()
            }

            subscribeToNavigationEvents() {
                let r = this.navigationTransitions.events.subscribe(i => {
                    try {
                        let o = this.navigationTransitions.currentTransition,
                            s = this.navigationTransitions.currentNavigation;
                        if (o !== null && s !== null) {
                            if (this.stateManager.handleRouterEvent(i, s), i instanceof on && i.code !== it.Redirect && i.code !== it.SupersededByNewNavigation) this.navigated = !0; else if (i instanceof an) this.navigated = !0; else if (i instanceof Gr) {
                                let a = i.navigationBehaviorOptions,
                                    c = this.urlHandlingStrategy.merge(i.url, o.currentRawUrl), l = S({
                                        browserUrl: o.extras.browserUrl,
                                        info: o.extras.info,
                                        skipLocationChange: o.extras.skipLocationChange,
                                        replaceUrl: o.extras.replaceUrl || this.urlUpdateStrategy === "eager" || o1(o.source)
                                    }, a);
                                this.scheduleNavigation(c, Ki, null, l, {
                                    resolve: o.resolve,
                                    reject: o.reject,
                                    promise: o.promise
                                })
                            }
                        }
                        p1(i) && this._events.next(i)
                    } catch (o) {
                        this.navigationTransitions.transitionAbortSubject.next(o)
                    }
                });
                this.eventsSubscription.add(r)
            }

            resetRootComponentType(r) {
                this.routerState.root.component = r, this.navigationTransitions.rootComponentType = r
            }

            initialNavigation() {
                this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), Ki, this.stateManager.restoredState())
            }

            setUpLocationChangeListener() {
                this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((r, i) => {
                    setTimeout(() => {
                        this.navigateToSyncWithBrowser(r, "popstate", i)
                    }, 0)
                })
            }

            navigateToSyncWithBrowser(r, i, o) {
                let s = {replaceUrl: !0}, a = o?.navigationId ? o : null;
                if (o) {
                    let l = S({}, o);
                    delete l.navigationId, delete l.\u0275routerPageId, Object.keys(l).length !== 0 && (s.state = l)
                }
                let c = this.parseUrl(r);
                this.scheduleNavigation(c, i, a, s)
            }

            get url() {
                return this.serializeUrl(this.currentUrlTree)
            }

            getCurrentNavigation() {
                return this.navigationTransitions.currentNavigation
            }

            get lastSuccessfulNavigation() {
                return this.navigationTransitions.lastSuccessfulNavigation
            }

            resetConfig(r) {
                this.config = r.map(gd), this.navigated = !1
            }

            ngOnDestroy() {
                this.dispose()
            }

            dispose() {
                this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription && (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0), this.disposed = !0, this.eventsSubscription.unsubscribe()
            }

            createUrlTree(r, i = {}) {
                let {relativeTo: o, queryParams: s, fragment: a, queryParamsHandling: c, preserveFragment: l} = i,
                    u = l ? this.currentUrlTree.fragment : a, d = null;
                switch (c) {
                    case"merge":
                        d = S(S({}, this.currentUrlTree.queryParams), s);
                        break;
                    case"preserve":
                        d = this.currentUrlTree.queryParams;
                        break;
                    default:
                        d = s || null
                }
                d !== null && (d = this.removeEmptyProps(d));
                let h;
                try {
                    let f = o ? o.snapshot : this.routerState.snapshot.root;
                    h = py(f)
                } catch {
                    (typeof r[0] != "string" || r[0][0] !== "/") && (r = []), h = this.currentUrlTree.root
                }
                return gy(h, r, d, u ?? null)
            }

            navigateByUrl(r, i = {skipLocationChange: !1}) {
                let o = Zn(r) ? r : this.parseUrl(r), s = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
                return this.scheduleNavigation(s, Ki, null, i)
            }

            navigate(r, i = {skipLocationChange: !1}) {
                return h1(r), this.navigateByUrl(this.createUrlTree(r, i), i)
            }

            serializeUrl(r) {
                return this.urlSerializer.serialize(r)
            }

            parseUrl(r) {
                try {
                    return this.urlSerializer.parse(r)
                } catch {
                    return this.urlSerializer.parse("/")
                }
            }

            isActive(r, i) {
                let o;
                if (i === !0 ? o = S({}, d1) : i === !1 ? o = S({}, f1) : o = i, Zn(r)) return Ym(this.currentUrlTree, r, o);
                let s = this.parseUrl(r);
                return Ym(this.currentUrlTree, s, o)
            }

            removeEmptyProps(r) {
                return Object.entries(r).reduce((i, [o, s]) => (s != null && (i[o] = s), i), {})
            }

            scheduleNavigation(r, i, o, s, a) {
                if (this.disposed) return Promise.resolve(!1);
                let c, l, u;
                a ? (c = a.resolve, l = a.reject, u = a.promise) : u = new Promise((h, f) => {
                    c = h, l = f
                });
                let d = this.pendingTasks.add();
                return l1(this, () => {
                    queueMicrotask(() => this.pendingTasks.remove(d))
                }), this.navigationTransitions.handleNavigationRequest({
                    source: i,
                    restoredState: o,
                    currentUrlTree: this.currentUrlTree,
                    currentRawUrl: this.currentUrlTree,
                    rawUrl: r,
                    extras: s,
                    resolve: c,
                    reject: l,
                    promise: u,
                    currentSnapshot: this.routerState.snapshot,
                    currentRouterState: this.routerState
                }), u.catch(h => Promise.reject(h))
            }
        };
        e.\u0275fac = function (i) {
            return new (i || e)
        }, e.\u0275prov = O({token: e, factory: e.\u0275fac, providedIn: "root"});
        let t = e;
        return t
    })();

function h1(t) {
    for (let e = 0; e < t.length; e++) if (t[e] == null) throw new D(4008, !1)
}

function p1(t) {
    return !(t instanceof no) && !(t instanceof Gr)
}

var Ea = (() => {
    let e = class e {
        constructor(r, i, o, s, a, c) {
            this.router = r, this.route = i, this.tabIndexAttribute = o, this.renderer = s, this.el = a, this.locationStrategy = c, this.href = null, this.onChanges = new Pe, this.preserveFragment = !1, this.skipLocationChange = !1, this.replaceUrl = !1, this.routerLinkInput = null;
            let l = a.nativeElement.tagName?.toLowerCase();
            this.isAnchorElement = l === "a" || l === "area", this.isAnchorElement ? this.subscription = r.events.subscribe(u => {
                u instanceof an && this.updateHref()
            }) : this.setTabIndexIfNotOnNativeEl("0")
        }

        setTabIndexIfNotOnNativeEl(r) {
            this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", r)
        }

        ngOnChanges(r) {
            this.isAnchorElement && this.updateHref(), this.onChanges.next(this)
        }

        set routerLink(r) {
            r == null ? (this.routerLinkInput = null, this.setTabIndexIfNotOnNativeEl(null)) : (Zn(r) ? this.routerLinkInput = r : this.routerLinkInput = Array.isArray(r) ? r : [r], this.setTabIndexIfNotOnNativeEl("0"))
        }

        onClick(r, i, o, s, a) {
            let c = this.urlTree;
            if (c === null || this.isAnchorElement && (r !== 0 || i || o || s || a || typeof this.target == "string" && this.target != "_self")) return !0;
            let l = {
                skipLocationChange: this.skipLocationChange,
                replaceUrl: this.replaceUrl,
                state: this.state,
                info: this.info
            };
            return this.router.navigateByUrl(c, l), !this.isAnchorElement
        }

        ngOnDestroy() {
            this.subscription?.unsubscribe()
        }

        updateHref() {
            let r = this.urlTree;
            this.href = r !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(r)) : null;
            let i = this.href === null ? null : ag(this.href, this.el.nativeElement.tagName.toLowerCase(), "href");
            this.applyAttributeValue("href", i)
        }

        applyAttributeValue(r, i) {
            let o = this.renderer, s = this.el.nativeElement;
            i !== null ? o.setAttribute(s, r, i) : o.removeAttribute(s, r)
        }

        get urlTree() {
            return this.routerLinkInput === null ? null : Zn(this.routerLinkInput) ? this.routerLinkInput : this.router.createUrlTree(this.routerLinkInput, {
                relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: this.preserveFragment
            })
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)(nt(Qr), nt(cn), Bl("tabindex"), nt(Oi), nt(en), nt(Vr))
    }, e.\u0275dir = Ti({
        type: e,
        selectors: [["", "routerLink", ""]],
        hostVars: 1,
        hostBindings: function (i, o) {
            i & 1 && jt("click", function (a) {
                return o.onClick(a.button, a.ctrlKey, a.shiftKey, a.altKey, a.metaKey)
            }), i & 2 && hu("target", o.target)
        },
        inputs: {
            target: "target",
            queryParams: "queryParams",
            fragment: "fragment",
            queryParamsHandling: "queryParamsHandling",
            state: "state",
            info: "info",
            relativeTo: "relativeTo",
            preserveFragment: [2, "preserveFragment", "preserveFragment", Vi],
            skipLocationChange: [2, "skipLocationChange", "skipLocationChange", Vi],
            replaceUrl: [2, "replaceUrl", "replaceUrl", Vi],
            routerLink: "routerLink"
        },
        standalone: !0,
        features: [du, xr]
    });
    let t = e;
    return t
})(), Ny = (() => {
    let e = class e {
        get isActive() {
            return this._isActive
        }

        constructor(r, i, o, s, a) {
            this.router = r, this.element = i, this.renderer = o, this.cdr = s, this.link = a, this.classes = [], this._isActive = !1, this.routerLinkActiveOptions = {exact: !1}, this.isActiveChange = new ke, this.routerEventsSubscription = r.events.subscribe(c => {
                c instanceof an && this.update()
            })
        }

        ngAfterContentInit() {
            P(this.links.changes, P(null)).pipe(fr()).subscribe(r => {
                this.update(), this.subscribeToEachLinkOnChanges()
            })
        }

        subscribeToEachLinkOnChanges() {
            this.linkInputChangesSubscription?.unsubscribe();
            let r = [...this.links.toArray(), this.link].filter(i => !!i).map(i => i.onChanges);
            this.linkInputChangesSubscription = ve(r).pipe(fr()).subscribe(i => {
                this._isActive !== this.isLinkActive(this.router)(i) && this.update()
            })
        }

        set routerLinkActive(r) {
            let i = Array.isArray(r) ? r : r.split(" ");
            this.classes = i.filter(o => !!o)
        }

        ngOnChanges(r) {
            this.update()
        }

        ngOnDestroy() {
            this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe()
        }

        update() {
            !this.links || !this.router.navigated || queueMicrotask(() => {
                let r = this.hasActiveLinks();
                this.classes.forEach(i => {
                    r ? this.renderer.addClass(this.element.nativeElement, i) : this.renderer.removeClass(this.element.nativeElement, i)
                }), r && this.ariaCurrentWhenActive !== void 0 ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this._isActive !== r && (this._isActive = r, this.cdr.markForCheck(), this.isActiveChange.emit(r))
            })
        }

        isLinkActive(r) {
            let i = g1(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact || !1;
            return o => {
                let s = o.urlTree;
                return s ? r.isActive(s, i) : !1
            }
        }

        hasActiveLinks() {
            let r = this.isLinkActive(this.router);
            return this.link && r(this.link) || this.links.some(r)
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)(nt(Qr), nt(en), nt(Oi), nt(En), nt(Ea, 8))
    }, e.\u0275dir = Ti({
        type: e,
        selectors: [["", "routerLinkActive", ""]],
        contentQueries: function (i, o, s) {
            if (i & 1 && cm(s, Ea, 5), i & 2) {
                let a;
                lm(a = um()) && (o.links = a)
            }
        },
        inputs: {
            routerLinkActiveOptions: "routerLinkActiveOptions",
            ariaCurrentWhenActive: "ariaCurrentWhenActive",
            routerLinkActive: "routerLinkActive"
        },
        outputs: {isActiveChange: "isActiveChange"},
        exportAs: ["routerLinkActive"],
        standalone: !0,
        features: [xr]
    });
    let t = e;
    return t
})();

function g1(t) {
    return !!t.paths
}

var m1 = new L("");

function ky(t, ...e) {
    return $n([{provide: md, multi: !0, useValue: t}, [], {provide: cn, useFactory: y1, deps: [Qr]}, {
        provide: Lr,
        multi: !0,
        useFactory: v1
    }, e.map(n => n.\u0275providers)])
}

function y1(t) {
    return t.routerState.root
}

function v1() {
    let t = b(Zt);
    return e => {
        let n = t.get(rn);
        if (e !== n.components[0]) return;
        let r = t.get(Qr), i = t.get(b1);
        t.get(w1) === 1 && r.initialNavigation(), t.get(D1, null, G.Optional)?.setUpPreloading(), t.get(m1, null, G.Optional)?.init(), r.resetRootComponentType(n.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe())
    }
}

var b1 = new L("", {factory: () => new Pe}), w1 = new L("", {providedIn: "root", factory: () => 1});
var D1 = new L("");
var Kr = [{
    settings: {
        autoClose: !1,
        timeoutInterval: 0,
        autoCloseInterval: 0,
        image: "",
        video: "",
        webUrl: "https://g.page/r/CT0NEj4VwQLCEB0/review",
        imageUrl: "",
        thumbnail: "iywojE5_I/93d5abfd-da51-426f-8be2-e0b84965f06a.png",
        entities: ["64d7b51b5be31c0014a6cc73"]
    },
    _id: "65b3fee847966c0015577eb6",
    published: !0,
    contentType: "web",
    triggerType: "entity",
    name: "Leave us a Google Review with 5 Stars",
    description: "15% Discount",
    shop: "iywojE5_I",
    createdAt: "2024-01-26T18:50:16.280Z",
    updatedAt: "2024-01-26T18:57:21.179Z",
    __v: 0,
    model: "ad",
    parentId: "64d7b51b5be31c0014a6cc73",
    menuId: "64d7b51b5be31c0014a6cc73",
    path: ",64d7b51b5be31c0014a6cc73",
    order: 0,
    index: 0,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d7bd9f5678970014de58ed",
    name: {en: "Signature Cocktails", de: "Signature Cocktails"},
    description: {en: "Let the Show Begin", de: "Let the Show begin"},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7b51b5be31c0014a6cc73",
    model: "entity",
    type: "section",
    order: 3,
    path: ",64d7b51b5be31c0014a6cc73",
    image: "iywojE5_I/2bb8590e-80ff-4ed0-99a5-d433fe04ff33.jpeg",
    published: !0,
    display: "grid",
    columns: 3,
    hideTitles: !1,
    properties: [],
    ingredientWarnings: ["hazelnut", "nuts", "sulfite", "sulfate"],
    index: 1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65f0b363f842310015aec7b4",
    name: {en: "tropical paradise", de: "Tropisches Paradies"},
    description: {
        en: "Cachaca, Pomegranate, Sumak, Citrus & Chilli Oleo  Noah built an improvised cocktail bar called \u201CNoah's Ark\u201D and created the unique \u201CTropical Paradise\u201D cocktail. Each sip was a journey through the elements of paradise, a mix of sweet  Memory and fiery passion. The legend spread, the bar became a magnet for cocktail enthusiasts from all over the world. ",
        de: "Cachaca, Granatapfel, Sumak, Citrus& Chili Oleo "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 0,
    index: 2,
    image: "iywojE5_I/8b26450a-d9c4-43de-aed1-ffc97c60dcbe.jpeg",
    video: null,
    published: !0,
    prices: [{value: 13, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d8d8969afddc0014a9abac",
    name: {en: "The Elephants", de: "The Elephants"},
    description: {
        en: "Hendricks gin, cucumber and ginger mix, St. Germain, lemon juice Natural cloudy apple juice  A wise elephant lived in the vast savannas of Africa, known for peace in the jungle. An imaginative bartender created \u201CThe Elephants\u201D cocktail with ginger and a touch of elderberry \u2014 a symbol of strength, grace and harmony between humans and animals. ",
        de: "Hendricks Gin , Gurken und Ingwer mix, St. Germain, Zitronensaft Nat\xFCrtr\xFCberapfelsaft  "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 1,
    index: 3,
    image: "iywojE5_I/d02f6f36-c4e0-400f-ab0b-3704e065e6b3.jpeg",
    video: null,
    published: !0,
    prices: [{value: 16, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65f0b75df8686a00152fdbfc",
    name: {en: "Mother Nature", de: "Mutter Natur"},
    description: {
        en: "Beluga Noble Citrus Vodka, Basil, Passion Fruit Puree, Cocotara  In a dreamy tropical garden, bartender Noah created the \u201CMother Nature\u201D cocktail as an homage to the diversity of nature. With clear vodka as a base, she blended basil for freshness, passion fruit for passion and coconut for exoticism. The icing on the cake was a lightweight, vegan foam that captured the texture and magic of nature like a natural mist. \u201CMother Nature\u201D became not just a taste experience, but a connection with the earth, a declaration of love for natural beauty in every sip. ",
        de: "Beluga Noble Citrus Vodka, Basilikum, Passionsfruchtp\xFCree, Cocotara "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 2,
    index: 4,
    image: "iywojE5_I/2dc69197-aad2-4c99-87ff-0a291479bc42.jpeg",
    video: null,
    published: !0,
    prices: [{value: 14, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "651a03217143970014ab368b",
    name: {en: "flamingos", de: "Flamingos"},
    description: {
        en: " Beluga Noble Vodka, Cream de Casis, raspberry, lychee, lime juice, rosewater ",
        de: " Beluga Noble Vodka, Cream de Casis, Himbeere, Lychee, Limettensaft, Rosewasser"
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 3,
    index: 5,
    image: "iywojE5_I/e1eb7f5a-7afc-4782-88cf-921e0fab5630.jpeg",
    video: null,
    published: !0,
    prices: [{value: 14, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "66334c9aae6f84bad8e0246a",
    name: {en: "jungles", de: "Dschungel"},
    description: {
        en: "Vodka, watermelon, sugar syrup, lemon juice, basil  In a small, hidden bar called Noah's Ark\u201D in a sleepy alley in a busy city, there was a very special cocktail known only as the \u201Cjungle\u201D by the locals. Everyone who tried it raved about its unique taste, but no one knew the secret of its composition.",
        de: "Vodka, Wassermelone, Zuckersirup, Zitronensaft, Basilikum "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 4,
    index: 6,
    image: "iywojE5_I/01853aed-1ef7-4453-aa3a-ba84f16a10b0.jpeg",
    video: null,
    published: !0,
    prices: [{value: 14, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64da5ef3a737c900141e2300",
    name: {en: "Jaguarete", de: "Jaguarete"},
    description: {
        en: "Beluga Noble Vodka, Aperol, Passion Fruit, Pineapple Juice, Lime Juice, Agave Syrup, Frizzante.  ",
        de: "Beluga Noble Vodka, Aperol, Passionfrucht, Ananassaft Limettensaft, Agave dicksaft, Frizzante. "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 8,
    index: 7,
    image: "iywojE5_I/97cc70d0-ffda-4656-a2c4-b9e14e25d6aa.jpeg",
    video: null,
    published: !0,
    prices: [{value: 16, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "66334d3105f290119e9164e3",
    name: {en: "botanist", de: "Botanist"},
    description: {
        en: "Botanist Gin, Skinos Mastiha, Pffff Liquor, Cranberry Juice, Lime Juice ",
        de: "Botanist Gin,Skinos Mastiha, Pffff Likor, Cranberrysaft, Limettensaft "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 10,
    index: 8,
    image: "iywojE5_I/ec91f604-a5dd-4af9-8449-6fbf56a78224.jpeg",
    video: null,
    published: !0,
    prices: [{value: 15, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6633e134a359c901019b408d",
    name: {en: "The Osborne Bull", de: "The Osborne Bull"},
    description: {
        en: "Tequialla, peach liqueur, agave syrup, lime juice, coriander, chili ",
        de: "Tequialla, Pfirsich Lik\xF6r, Agavesirup, Limettensaft, Koriander, Chili "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 11,
    index: 9,
    image: "iywojE5_I/800605d0-7d41-4247-968b-ce4f6085c7f9.jpeg",
    video: null,
    published: !0,
    prices: [{value: 14, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "66334dbaac800233551f83b7",
    name: {en: "Eden Garden", de: "Eden Garden"},
    description: {
        en: "vodka, apple puree, sage, lemon juice, demerara syrup ",
        de: "Vodka, Apfelp\xFCree, Salbei, Zitronensaft, Demerarasirup "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 12,
    index: 10,
    image: "iywojE5_I/c54469c2-a159-4cfc-b78f-71befd66ca8d.jpeg",
    video: null,
    published: !0,
    prices: [{value: 14, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d8d79d02ae690014a877e0",
    name: {en: "Save the Jungle", de: "Save the Jungle"},
    description: {
        en: "Rum, coconut syrup, coconut milk, mango puree, coco tara.  ",
        de: "Takamaka zepis Rum, kokossirup, Kokos Milk, Mango p\xFCree, Coco tara. "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 13,
    index: 11,
    image: "iywojE5_I/9053359c-0822-48fc-a3e3-bc339ef8f59f.jpeg",
    video: null,
    published: !0,
    prices: [{value: 13, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d8d81f9a93650014ea6b2d",
    name: {en: "Monkey Business 7`st", de: "Monkey Business 7`st"},
    description: {
        en: "Monkeyshoulder, mulberry puree, tatratea, lemon juice.  ",
        de: "Monkeyshoulder, Maulbeerenp\xFCree, Tatratea, Zitronensaft. "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 14,
    index: 12,
    image: "iywojE5_I/ef0eef9a-c8cf-4e6e-b392-a9ef500b08bb.jpeg",
    video: null,
    published: !0,
    prices: [{value: 14, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d7c34776bdb500147bd7b6",
    name: {en: "The Secret of Noah", de: "The Secret of Noah"},
    description: {
        en: "Fratello Hazelnus, Gazio Amaretto, Frattello Coffee Liqueur, Espresso.  ",
        de: "Fratello Hazelnus, Gazio Amaretto, Frattello Kaffeellik\xF6r, Espresso.  "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 15,
    index: 13,
    image: "iywojE5_I/6324df16-489c-45da-88e4-06f30132a6f6.jpeg",
    video: null,
    published: !0,
    prices: [{value: 13, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: ["hazelnut", "nuts"],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "656b82606690f20014312049",
    name: {en: "chameleon", de: "Cham\xE4leon"},
    description: {
        en: "Brockmans Orange Kiss, Green Chartreuse, Cocchi Vermut, Star Anise, Helga In a bar on the outskirts of town,  the talented bartender created a unique cocktail that he called a \u201Cchameleon.\u201D This special drink became a topic of conversation in the city, as it was not only appealing in terms of taste, but also visually fascinating. Guests from near and far flocked to the bar to enjoy the charming chameleon cocktail experience and experience the warm atmosphere of \u201CMix & More.\u201D",
        de: "Brockmans Orangen Kiss Gin, Green Chartreuse, Cocchi Vermut, Sternanis, Helga Algentrink "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 16,
    index: 14,
    image: "iywojE5_I/ab437716-7674-4f71-a2a1-6e878dd20481.jpeg",
    video: null,
    published: !0,
    prices: [{value: 13, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: ["sulfite", "sulfate"],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6569fbd8977a5e0014e07007",
    name: {en: "fox", de: "Fuchs"},
    description: {
        en: "Brockmans, Cochi Vermouth, Campari, Mulberry Cinamon In a small town,  a curious fox stumbled across the world of cocktails. Fascinated by the mysterious blends, he heard of a legendary drink called \u201CCocktail Fox.\u201D After a few adventures in various bars, he finally discovered a hidden bar on the outskirts of town. The bartender served him the legendary cocktail. On the first sip, the fox felt a whiff of magic sweep through it. Colors and aromas danced together, and he felt as though he was floating through an explosion of flavor. Enthusiastic, he returned to his friends and became known as the \u201CCocktail Fox.\u201D The legend spread quickly, and the city became a place of magic and joy.",
        de: "Brockmans Gin, Cochi Vermouth, Campari, Maulbeeren Zimt "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bd9f5678970014de58ed",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bd9f5678970014de58ed",
    order: 17,
    index: 15,
    image: "iywojE5_I/d74577da-6fc4-4bdc-94c3-9bb9aefa2686.jpeg",
    video: null,
    published: !0,
    prices: [{value: 13, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: ["special", "seasonal"],
    ingredientWarnings: ["sulfate"],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d7bc8615994e0014c44d5a",
    name: {en: "Classic Cocktail", de: "Classic Cocktail"},
    description: {en: "With a portion of Love", de: "With a portion of Love "},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7b51b5be31c0014a6cc73",
    model: "entity",
    type: "section",
    order: 4,
    path: ",64d7b51b5be31c0014a6cc73",
    image: "iywojE5_I/c9b47d11-995e-4f55-8fc7-8ab65454d271.jpeg",
    published: !0,
    display: "grid",
    columns: 3,
    hideTitles: !1,
    properties: [],
    ingredientWarnings: [],
    index: 16,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d7bebf76bdb50014797ad8",
    name: {en: "Pornstar Martini", de: "Pornstar Martini"},
    description: {
        en: "vodka, passoa, vanilla syrup, passion fruit puree, cava ",
        de: "Beluga Noble Vodka, Passoa, Vanilla sirup, Passionfrucht p\xFCree, Cava "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 0,
    index: 17,
    image: "iywojE5_I/24c3dd81-30be-48ad-bb2e-7b33fdf26828.webp",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 11, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d7bf565678970014df4764",
    name: {en: "Negroni", de: "Negroni"},
    description: {
        en: "Brockman's gin, Campari, Cocchi Vermouth de Torino ",
        de: "Brockmans Gin, Campari, Cocchi Vermouth de Torino "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 1,
    index: 18,
    image: "iywojE5_I/0212eb45-2165-4d23-9971-c491e0f8dce4.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 11, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d7bff515994e0014c613e8",
    name: {en: "Old Faschioned", de: "Old Faschioned"},
    description: {
        en: "Bourbon, Angustura, Simple Syrup, Orange Zest ",
        de: "Monkey Shoulders, Angustura Bitter, Zuckersirup, Orangen zeste "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 2,
    index: 19,
    image: "iywojE5_I/e8275c53-2093-4940-af1e-e103ea1a77af.webp",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6525821b38f3a700147a2882",
    name: {en: "Last Word", de: "Last Word"},
    description: {
        en: "Brockmans Gin, Green Chartreuse, Marashino Liqueur, Lime Juice ",
        de: "Brockmans Gin, Green Chartreuse, Marashino Lik\xF6r, Limettensaft "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 3,
    index: 20,
    image: "iywojE5_I/fd61a8dd-a7a9-4ad5-9c51-ff7806ec3c6b.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 11, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "652583011c1eb300141e153e",
    name: {en: "Aviation", de: "Aviation"},
    description: {
        en: "Brockmans Gin, Crem de Violet, Marschino Liqueur, Lemon Juice ",
        de: "Brockmans Gin, Crem de Violet, Marschino Lik\xF6r, Zitronensaft "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 4,
    index: 21,
    image: "iywojE5_I/10f98275-927c-4beb-90d6-d16f2e0d6fab.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 11, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d7c10876bdb500147aaf10",
    name: {en: "Espreso Martini", de: "Espreso Martini"},
    description: {
        en: "Vodka, Espresso, Kahlua, Simple syrup ",
        de: "Beluga Noble Vodka, Espresso, Kahlua, Salted Karamel sirup "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 5,
    index: 22,
    image: "iywojE5_I/40068515-f022-46f6-8296-a4202f1a3941.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "662958e271fea90015d453b1",
    name: {en: "", de: "Lychee Martini"},
    description: {en: "", de: "Vodka, Lycheep\xFCree, Lycheelikor, Zitronensaft, Rosensirup "},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 6,
    index: 23,
    image: "iywojE5_I/370f1635-ece8-4462-8b33-ae3d852db3be.png",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "662957de5328420015343daf",
    name: {en: "", de: "Apple Martini"},
    description: {en: "", de: "Vodka, Apple Likor, Apfelsaft, Zitronensaft, Zuckersirup "},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 7,
    index: 24,
    image: "iywojE5_I/623f3750-a1e8-444e-a4d2-1a60f2b75978.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d7c19e15994e0014c6f40c",
    name: {en: "Moscow Mule", de: "Moscow Mule"},
    description: {en: "vodka, lime, ginger beer ", de: "Beluga Noble Vodka, Limettensaft, Gingerbeer "},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 8,
    index: 25,
    image: "iywojE5_I/ab2e5f8a-5b6b-401b-8fbb-fa5003fbb649.webp",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64d7c27776bdb500147b70ef",
    name: {en: "Mojito", de: "Mojito"},
    description: {en: "Rum, Mint, Lime, Sugar, Soda ", de: "Rum, Minze, Limettensaft, Zuckersirup, Soda "},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 9,
    index: 26,
    image: "iywojE5_I/36d94542-7217-447b-912a-845b4cc43d69.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "66334dcaac800233551f866f",
    name: {en: "Mojito", de: "Passionsfrucht Mojito"},
    description: {
        en: "Rum, Mint, Lime, Sugar, Soda ",
        de: "Rum, Minze, Limettensaft, Zuckersirup, Passionsfruchtp\xFCree,Soda "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 10,
    index: 27,
    image: "iywojE5_I/dc076743-754d-4177-a7c4-1baeb63512e3.jpeg",
    video: null,
    published: !0,
    prices: [{value: 11, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "66334e1505f290119e9199c4",
    name: {en: "Mojito", de: "Lychee Mojito"},
    description: {
        en: "Rum, Mint, Lime, Sugar, Soda ",
        de: "Rum, Minze, Limettensaft, Zuckersirup, Lycheep\xFCree,Soda "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 11,
    index: 28,
    image: "iywojE5_I/36d94542-7217-447b-912a-845b4cc43d69.jpeg",
    video: null,
    published: !0,
    prices: [{value: 11, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6633dd3e6f6c3b4b52ea08f2",
    name: {en: "Mojito", de: "Raspberry Mojito"},
    description: {
        en: "Rum, Mint, Lime, Sugar, Soda ",
        de: "Rum, Minze, Limettensaft, Zuckersirup, Himbeerp\xFCree,Soda "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 12,
    index: 29,
    image: "iywojE5_I/81790511-89c8-4b6d-8bd8-aabe654202d3.jpeg",
    video: null,
    published: !0,
    prices: [{value: 11, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed2175daf9c2001416c668",
    name: {en: "Gin Basil Smash", de: "Gin Basil Smash"},
    description: {en: "Gin, lemon, simple syrup, basil ", de: "Brockmans Gin, Zitronensaft, Zuckersirup, Basilikum "},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 13,
    index: 30,
    image: "iywojE5_I/ecd05b60-46d1-414e-a1b2-778a8552f6d4.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed21bb011c8c00142f21f7",
    name: {en: "Cosmopolitan", de: "Cosmopolitan"},
    description: {
        en: "Vodka, Cointreu, Lime, Cranberry ",
        de: "Beluga Noble Vodka, Cointreu, Limettensaft, Cranberrysaft "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 14,
    index: 31,
    image: "iywojE5_I/6a17230f-19d7-487c-ab14-6b26906a46bb.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "651c6354382ee60014f66253",
    name: {en: "Manhattan perfect", de: "Manhattan perfekt"},
    description: {en: "Rye Whiskey, Vermouth, Angustura ", de: "Rye Whiskey, Vermouth, Angustura "},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 15,
    index: 32,
    image: "iywojE5_I/8496275e-594a-4e4d-9a90-8b85d243aae1.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "651c638a382ee60014f672c8",
    name: {en: "Bramble", de: "Bramble"},
    description: {
        en: "Brockmans Gin, Crem de Mure, Lemon, Simple Syrup ",
        de: "Brockmans Gin, Crem de Mure, Zitronensaft, Zuckersirup "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 16,
    index: 33,
    image: "iywojE5_I/af684ea9-0e26-4cce-91c4-917f98163ba6.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "652585c04f073e0014fe8d44",
    name: {en: "penicillin", de: "Penicillin"},
    description: {
        en: "Monkeyshoulders Blend Whiskey, Blackbottel Islay Whiskey, Honey Syrup, Lemon Juice, Ginger ",
        de: "Monkeyshoulders Blend Whiskey, Blackbottel Islay Whiskey, Honigsirup, Zitronensaft, Ingwer "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7bc8615994e0014c44d5a",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64d7bc8615994e0014c44d5a",
    order: 17,
    index: 34,
    image: "iywojE5_I/0a0de994-7227-40ac-ad59-11e5a2b9b9c4.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 11, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed0039daf9c200141346cd",
    name: {en: "Mocktails", de: "Mocktails"},
    description: {
        en: "Mocktails are non-alcoholic cocktails made from fruit juices, syrups and spices that offer delicious aromas without alcohol",
        de: "Mocktails sind alkoholfreie Cocktails aus Fruchts\xE4ften, Sirupen und Gew\xFCrzen, die leckere Aromen ohne Alkohol bieten"
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7b51b5be31c0014a6cc73",
    model: "entity",
    type: "section",
    order: 5,
    path: ",64d7b51b5be31c0014a6cc73",
    image: "iywojE5_I/8d00efbe-58a2-403c-a737-0bd0d005f40f.jpeg",
    published: !0,
    display: "grid",
    columns: 3,
    hideTitles: !1,
    properties: [],
    ingredientWarnings: [],
    index: 35,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed104adaf9c2001415b4dc",
    name: {en: "Botanical elegance", de: "Botanische Eleganz"},
    description: {
        en: "Apple Juice, Cinnamon, Lemon, Spicy Ginger Beer  In the deep woods of a forgotten valley, there lived a group of friendly fairies who were known for their connection to nature and their beauty. One day they decided to throw a special celebration to celebrate the beauty of nature. In doing so, they created a refreshing mocktail that they called \u201CBotanical Elegance.\u201D They collected the brightest petals, softly scented herbs and sparkling fruits from the forest and nearby meadows. With magical movements, they put the ingredients together and created a drink of breathtaking colors and delicious taste.",
        de: "Apfelsaft, Zimt, Zitronensaft, Spicy Ginger Beer "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0039daf9c200141346cd",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0039daf9c200141346cd",
    order: 0,
    index: 36,
    image: "iywojE5_I/f5a5ead5-ecc0-44cb-8857-9fba473afa81.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 7, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed1201daf9c2001415d906",
    name: {en: "Sahara Sunset", de: "Sahara Sunset"},
    description: {
        en: "Lychee, passion fruit, pomegranate  In the endless expanses of the Sahara, where golden sands dominate the landscape, traveling explorers discovered an oasis of unparalleled beauty. In the middle of the desert, they found a mysterious well that contained astonishingly refreshing fruits. These fruits were so exotic that their scent filled the air with a tempting aroma. Local people used this fruit to create a refreshing mocktail called \u201CSahara Sunset.\u201D They mixed the juicy sweetness of the fruit with a touch of mint and a squeeze of lime juice to alleviate the desert heat. The mocktail was like a sunset over the sand dunes \u2014 vivid and colorful.",
        de: "Lychee, Passionfrucht, Granatapfel "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0039daf9c200141346cd",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0039daf9c200141346cd",
    order: 1,
    index: 37,
    image: "iywojE5_I/7b607e12-acc5-4a42-bb2c-a90c577a6caf.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 7, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed13bcdaf9c2001415f9a8",
    name: {en: "The owl", de: "Die Eule"},
    description: {
        en: "Butterfly tea, coconut milk, blueberries, apple juice, Coco Tara  The Owl\u201D was a drink of deep, mysterious elegance. Each sip unfolded a story of the forest, from gentle winds to the quiet sounds of nocturnal animals. The mocktail was not only praised for its incredible mix of flavors, but also for the way it awakened the senses of those who enjoyed it. Orion's \u201CThe Owl\u201D quickly became a legend in the oak forest. People from neighboring villages and travelers from afar came to taste the mocktail and experience the wisdom of Orion. The legend of \u201CThe Owl\u201D reminded everyone that there was always something special to discover in the depths of the forest and in nature's creations.",
        de: "Butterfly Tee, Kokosmilch, Heidelbeeren, Apfelsaft, Coco Tara "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0039daf9c200141346cd",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0039daf9c200141346cd",
    order: 2,
    index: 38,
    image: "iywojE5_I/9bca3158-9382-4b4d-acb0-1d23065d071f.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 7, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed179f6becb60014373022",
    name: {en: "Sundevall mouse", de: "Sundevall Maus"},
    description: {
        en: "Passion fruit, vanilla, pineapple juice, soda  With her knowledge of alchemy and her passion for flavors, she began to create a special blend of juicy exotic fruits and a touch of magical syrup. As the sun set over the kingdom, she added the sparkling water and watched with fascination as tiny bubbles rose and combined with the fruity aromas. The mocktail was a harmonious union of sweetness and fizz, a journey for the palate and the senses. She called it \u201CSundevall Mouse\u201D, an homage to the perfect combination of fruit sweetness and sparkling refreshment.",
        de: "Passionsfrucht, Vanilla, Ananassaft, Soda "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0039daf9c200141346cd",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0039daf9c200141346cd",
    order: 3,
    index: 39,
    image: "iywojE5_I/c8f7c6f1-cf7d-45b0-8906-726fe5b6e829.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 7, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed152d853ca90014e14b7d",
    name: {en: "Virgin Colada", de: "Virgin Colada"},
    description: {
        en: "pineapple juice, orange juice, coconut milk, coco tara ",
        de: "Ananassaft, Orangensaft, Kokosmilch, Coco tara "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0039daf9c200141346cd",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0039daf9c200141346cd",
    order: 4,
    index: 40,
    image: "iywojE5_I/4c3ead37-41fe-4a9d-a12d-9b9214403533.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 6, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed154d853ca90014e14ec2",
    name: {en: "Virgin Mojito", de: "Virgin Mojito"},
    description: {en: "", de: "Minze, Limetten, Demerara sirup, Soda "},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0039daf9c200141346cd",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0039daf9c200141346cd",
    order: 5,
    index: 41,
    image: "iywojE5_I/527dbb27-a03d-4c1a-8a9d-5d10e7450bf9.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 6, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed0a97daf9c2001414b0b3",
    name: {en: "Spritzer", de: "Spritzer"},
    description: {en: "", de: ""},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7b51b5be31c0014a6cc73",
    model: "entity",
    type: "section",
    order: 6,
    path: ",64d7b51b5be31c0014a6cc73",
    image: "iywojE5_I/d93ae10b-0f70-48d6-8d07-a3de9b84c2ca.jpeg",
    published: !0,
    display: "grid",
    columns: 3,
    hideTitles: !1,
    properties: [],
    ingredientWarnings: ["sulfate"],
    index: 42,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64f37c6a1bb08d0014675363",
    name: {en: "Lillet Spritzer", de: "Lillet Spritzer"},
    description: {en: " ", de: "Lillet, Frizzante, Soda \u{1F466}\u{1F3FB} Jugenddrinks"},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0a97daf9c2001414b0b3",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0a97daf9c2001414b0b3",
    order: 0,
    index: 43,
    image: "iywojE5_I/d9bca4f6-ea93-4c7e-92e4-7d7413331eca.jpeg",
    video: null,
    published: !0,
    prices: [{value: 6, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: ["sulfate"],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64f37d2d748b260014a27be6",
    name: {en: "Passion fruit spritzer", de: "Passionsfrucht Spritzer"},
    description: {en: "", de: "Passoa, Passionsfrucht Purree, Frizzante, Soda \u{1F466}\u{1F3FB} Jugenddrinks"},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0a97daf9c2001414b0b3",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0a97daf9c2001414b0b3",
    order: 1,
    index: 44,
    image: "iywojE5_I/6cc49ece-a842-4137-9108-f995d25be1fd.jpeg",
    video: null,
    published: !0,
    prices: [{value: 6, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: ["sulfate"],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64f37d3e748b260014a2838d",
    name: {en: "Aperol Spritzer", de: "Aperol Spritzer"},
    description: {en: "", de: "Aperol, Frizzante, Soda \u{1F466}\u{1F3FB} Jugenddrinks"},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0a97daf9c2001414b0b3",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0a97daf9c2001414b0b3",
    order: 2,
    index: 45,
    image: "iywojE5_I/5b29a7dc-9624-426f-93a1-c754cd112a1c.jpeg",
    video: null,
    published: !0,
    prices: [{value: 6, calories: 0, currencies: [], definition: {en: "", de: ""}, id: null}],
    properties: [],
    ingredientWarnings: ["sulfate"],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed0b286becb6001435f87d",
    name: {en: "Spirits", de: "Spirits"},
    description: {en: "", de: "4 cl pro Shot"},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7b51b5be31c0014a6cc73",
    model: "entity",
    type: "section",
    order: 7,
    path: ",64d7b51b5be31c0014a6cc73",
    image: "iywojE5_I/09dd5924-9ea7-49ad-9757-0d2910c422c7.jpeg",
    published: !0,
    display: "grid",
    columns: 3,
    hideTitles: !1,
    properties: [],
    ingredientWarnings: ["gluten-free"],
    index: 46,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed0b66011c8c00142d8c24",
    name: {en: "whisky", de: "Whisky"},
    description: {en: "", de: ""},
    note: {en: "", de: "4cl"},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b286becb6001435f87d",
    model: "entity",
    type: "section",
    order: 0,
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d",
    image: "iywojE5_I/c295e3fe-c91a-4567-8fa4-578396d5cfba.png",
    published: !0,
    display: "grid",
    columns: 3,
    hideTitles: !1,
    properties: [],
    ingredientWarnings: [],
    index: 47,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "651f0037fde22100145ee4e5",
    name: {en: "Monkey Shoulder", de: "Monkey Shoulder"},
    description: {
        en: "The first triple malt Scotch whiskey worldwide!  The name is as  Reminiscence of understanding tradition: In the past, workers turned  The distillery the sprouting barley tons with shovels and hour  by hand by hour. Sometimes this hard work hurt them  the shoulders and her arms hung down low, almost like a  chimpanzees. These temporary complaints were described as  It was called \u201Cmonkey shoulder\u201D and this Scotch was  named after it.  ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b66011c8c00142d8c24",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b66011c8c00142d8c24",
    order: 0,
    index: 48,
    image: "iywojE5_I/4ce646b5-cb94-498b-b710-0d8af76041b4.jpeg",
    video: null,
    published: !0,
    prices: [{
        definition: {en: "", de: "4cl"},
        calories: 0,
        value: 8,
        currencies: [{
            _id: "6110ffd908b37a30c4e128bf",
            name: "Euro",
            symbol: "\u20AC",
            value: 8,
            code: "EUR",
            fraction: 2,
            id: "6110ffd908b37a30c4e128bf"
        }],
        id: null
    }],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "651f00b1fde22100145f2049",
    name: {en: "Tenjaku Pure Malt", de: "Tenjaku Pure Malt"},
    description: {
        en: "Tenjaku Blended  Whisky is a rich and balanced whiskey with a light  bitter, soft taste. The blend of malt whiskies  different ages result in a delicate yet complex  smooth taste experience . On the nose, aromas of nuts, greens  apple and fresh herbs. Round with light smoky notes. On the palate  fresh with alcoholic notes, yet delicate and soft in the mouth.  Refreshing, clear finish with vanilla notes and a bit of wood. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b66011c8c00142d8c24",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b66011c8c00142d8c24",
    order: 1,
    index: 49,
    image: "iywojE5_I/f15f6c15-8b5c-4fdf-a0bb-8074a402f58b.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "651f012d1696300014c6b4c6",
    name: {en: "Tenjaku Blend Whisky", de: "Tenjaku Blend Whisky"},
    description: {
        en: "Tenjaku Blended Whisky is a fresh and mild whiskey. Sein  full body harmonizes ideally with the grain flavor that is not too  is intense yet complex. A pure, timeless blend . In the   Slightly smoky nose with a sweet aroma of pear and dried  fruits. In the flavor edges that are mild, balanced  Make the taste experience interesting. A bit spicy and spicy in the finish  with notes of white oak and a bit of sweetness",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b66011c8c00142d8c24",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b66011c8c00142d8c24",
    order: 2,
    index: 50,
    image: "iywojE5_I/73a2f59e-2194-4b90-97a1-80ed958b38c4.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "651f01d3fde22100145fb385",
    name: {en: "Tomatin 12Y", de: "Tomatin 12Y"},
    description: {
        en: "Tomatin was the largest Scottish distillery in the 1970s. 198 The use of   Sherry barrels give rise to the amber color and smell  Sherry notes but also ripe apples and black currants in  foreground. Cinnamon, vanilla and a touch of peat smoke complete the  flavoring.   Tomatin - the first Scottish distillery - came into possession  Japanese owner (Takara Shuzo Co. Ltd and Okara & Co). From  In 2000, Tomatin was repositioned. Your own single malts - with  a very individual characteristic - received a corresponding  Significance. Their own blends Antiquary and Talisman received a  Relaunch. ",
        de: ""
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b66011c8c00142d8c24",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b66011c8c00142d8c24",
    order: 3,
    index: 51,
    image: "iywojE5_I/2e2cc322-9939-4a75-8258-61143dd12afb.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "651f0275d52f81001432d246",
    name: {en: "Tomatin 14Y", de: "Tomatin 14Y"},
    description: {
        en: "This is the new 14-year-old who has expanded the previous offer of a  expands further age group and replaces the previous 15-year-old. It  is the first tomato to be re-aged in port wine barrels. Im  At Tomatin, you work with an environmentally friendly steam boiler that   is fired with locally produced wood pellets. For every felled tree, two new ones are planted.  ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b66011c8c00142d8c24",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b66011c8c00142d8c24",
    order: 4,
    index: 52,
    image: "iywojE5_I/d586df90-466e-4896-9b00-32bf864e3267.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 17, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "651f052fd52f810014341613",
    name: {en: "Bunnahabhain 12Y", de: "Bunnahabhain 12Y"},
    description: {
        en: "At 46.3% by volume, Bunnahabhain 12 Years is a very full-bodied  Single malt Scotch whiskey. Due to the high alcohol content, it is good with  to break down some water. But whiskey can also be pure  enjoy and advance thanks to its rather discreet for Islay standards  Smokiness is a secret tip.  The 12-year-old Bunnahabhain appears from the very first sip  full-bodied and yet rather easy to put on the tongue. In the first   At the moment, fruits are showing up, in particular berries, but they are fast  give way to other flavors. They are replaced by those already in nosing  recognized nuts. These are marred on the palate with distinct  Malt notes and rather softly sweet vanilla. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b66011c8c00142d8c24",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b66011c8c00142d8c24",
    order: 6,
    index: 53,
    image: "iywojE5_I/827ae932-2bef-47d2-acfa-1287f6040feb.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 14, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "651f0580d52f810014343c83",
    name: {en: "Blanton's", de: "Blanton\xB4s"},
    description: {
        en: "Blanton's original whiskey was made for ambassadors, dignitaries  and developed friends from the Blanton family. Today he is the first  Single barrel bourbon, which is available worldwide.  In the nose  aromas of creamy vanilla and caramel, plus sweet spices such as cinnamon and  carnation. Sweet on the palate with notes of citrus and oak. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b66011c8c00142d8c24",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b66011c8c00142d8c24",
    order: 7,
    index: 54,
    image: "iywojE5_I/e8070726-a028-4cfe-808f-ad45c25e0b04.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 18, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed0b786becb600143603a4",
    name: {en: "Gin", de: "Gin"},
    description: {en: "", de: ""},
    note: {en: "", de: "4cl"},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b286becb6001435f87d",
    model: "entity",
    type: "section",
    order: 1,
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d",
    image: "iywojE5_I/cc8d2113-48f8-4f26-88b5-aafed681de5c.png",
    published: !0,
    display: "grid",
    columns: 3,
    hideTitles: !1,
    properties: [],
    ingredientWarnings: [],
    index: 55,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "652586c238f3a700147c035b",
    name: {en: "Aviation", de: "Aviation"},
    description: {
        en: "In the state of Oregon, gin was diverted from the traditional  Cocktail \u201CAviation\u201D, which also explains the name. While the  Product otherwise has little to do with aviation, does the  The use of a lot of heart and soul plays a much bigger role in this gin. With   a lot of manual work, a talented bartender and a professional   Distillery has succeeded in producing a crystal-clear premium product   which stands out from the competition in particular because of one thing: His  Flavor notes. In contrast to a London Dry Gin, this one has  \u201CAmerican Gin\u201D has much more subtle juniper notes and has  stronger lavender and cardamom notes. With its wonderfully balanced   Flavor spectrum of aviation gin embodies the creativity and freshness of  Northwest of the USA.  ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b786becb600143603a4",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b786becb600143603a4",
    order: 0,
    index: 56,
    image: "iywojE5_I/b252319b-518f-4014-a2a5-511e5a17f39b.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 9, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "652587461c1eb300141fc894",
    name: {en: "Brockmans", de: "Brockmans"},
    description: {
        en: "When you think of Brockman's Intensely Smooth Premium Gin, you get  Berries in mind. \u201CAnother gin\u201D or \u201CLike no other\u201D, like it  Founders Neil Everitt and Bob Fowkes like to say. Gentle healing and   Blackberry notes adorn the main aroma of the drink, which is the predicate  \u201CIntensely Smooth Premium Gin\u201D definitely deserves it. In the smell  There is still a scent of citrus, juniper and cinnamon. The lovely gin   which is also perfect for mixing cocktails ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b786becb600143603a4",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b786becb600143603a4",
    order: 1,
    index: 57,
    image: "iywojE5_I/60ce5109-cf56-458b-ad08-8225575c7e10.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 9, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "652587f538f3a700147c808c",
    name: {en: "Brockmans Orange Kiss", de: "Brockmans Orange Kiss"},
    description: {
        en: "Brockmans is a premium gin brand that stands for its unmistakable  The taste profile is well known. Brockman's gin was produced by a group of  Friends founded in the UK who have a common  They had a passion for gin. It was first launched in 2009  and has since been on various markets around the world   Gained popularity. The types of gin from this brand are used in  traditional copper stills distilled in small batches.  Brockmans uses a combination of maceration and  Steam infusion process to remove the aromas from the botanicals  extract. This careful process helps ensure that a  The result is a balanced and tasty gin.  The recipe of Brockmans Intensly Smooth Orange Kiss Gin is based on  the original Brockmans gin, which is made with sun-ripened oranges from  Valencia and a shot of Bols Triple Sec are added.    ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b786becb600143603a4",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b786becb600143603a4",
    order: 2,
    index: 58,
    image: "iywojE5_I/fa3576df-51d1-4ffb-86b6-0de009e459c6.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 9, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6525891638f3a700147cf5bc",
    name: {en: "Tanqueray No. 10", de: "Tanqueray no 10"},
    description: {
        en: "Tanqueray No. Ten Gin is the younger brother of Tanqueray London Dry  gin. On the market since 2000, it is the epitome of modern connoisseurs  of elegance and good taste. It is the only gin that is made from  fresh herbs and fruits are fired in small kettles so that  It achieves a particularly intense aroma. Its subtlety and that  It gets a fruity-fresh aroma from a hint of citrus and a  slight hint of malt. Its soft and gentle aftertaste  It is ideal for mixing, for example as a gin and tonic. Other than  Tanqueray Dry Gin comes in a sleek, nostalgic, decorative   bottle offered.  ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b786becb600143603a4",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b786becb600143603a4",
    order: 4,
    index: 59,
    image: "iywojE5_I/b2505222-bca2-4f70-9461-3ffb44524412.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 9, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6525898473028f0014a90d1e",
    name: {en: "The Botanist", de: "The Botanist"},
    description: {
        en: "The Botanist Islay Dry Gin comes from Scotland and impresses with 31  various botanicals, of which 22 are located. The juniper brandy,  from the Bruichladdich distillery, presents its complex  Flavor with coriander, cinnamon, cassia, licorice and lemon, among others.  Bruichladdich proves that they don't just produce good whiskey  but also a very tasty dry gin .",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b786becb600143603a4",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b786becb600143603a4",
    order: 5,
    index: 60,
    image: "iywojE5_I/472570a8-403e-4665-b02f-6f2f1509450b.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 9, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "652589d41c1eb3001420cfcc",
    name: {en: "Gin Mare", de: "Gin Mare"},
    description: {
        en: "Spain - dry, vivacious and warm: This is how Gin Mare embodies  its country of origin. Although gin is more commonly known from England, Spain is   with its climate and the fertility of its soils, also in  able to compete with other gin manufacturers. This gin brings  Mediterranean tastes and aromas with it and is reminiscent of the  typical spices of the Mediterranean region. The production of Gin Mare  takes place in Vilanova, which is on the border of Barcelona.  ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b786becb600143603a4",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b786becb600143603a4",
    order: 6,
    index: 61,
    image: "iywojE5_I/5f0ffefe-39a3-4323-a566-0c430baafe9c.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 8, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65258a184f073e00140051fe",
    name: {en: "Monkey 47", de: "Monkey 47"},
    description: {
        en: " Monkey   47 is a dry gin made in the Black Forest from the water of an in-house   Source produced and stored in earthenware barrels. Seine  The recipe goes back to the British Montgomery \u201CMonty\u201D Collins, who it  1945 when members of the Royal Air Force first moved to Berlin,   Where he was involved in the reconstruction of the Berlin Zoo and the  Sponsored a monkey named Max. After military service  Collins settled in the Black Forest and opened the country inn  \u201CTo the wild monkey.\u201D Here he developed a Black Forest gin whose  The recipe has formed the basis for Monkey 47 Dry Gin since 2008. The number in  Product name refers to a total of 47 ingredients that are used in the  manufacturing can be used. In addition to exotic herbs, you can also find  local herbs and berries make their way into gin. The convincing  The result is a harmoniously complex gin with a clear  juniper aroma with a fresh citrus note, light  Pepper aromas and subtly bitter fruit notes are wonderfully complemented. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b786becb600143603a4",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b786becb600143603a4",
    order: 7,
    index: 62,
    image: "iywojE5_I/11d17a3f-543c-4754-8145-0a22468cc2e6.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 12, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65258a9f4f073e0014008632",
    name: {en: "Gin Sul", de: "Gin Sul"},
    description: {
        en: "The Hamburg brand Gin Sul has long been at the top of  German gins can establish. Everything about this drink is just right:  Taste, look and concept. As far as taste is concerned, you can  Determine precisely right away: Gin Sul tastes like a vacation when you're done   Can buy bottled. The aromas responsible for this are made from  Ingredients grown as they are on the Portuguese west coast of  Happens more often. In addition to the usual suspects juniper berries,  Cardamom, lavender and lemon peel are also found here cinnamon,  Rose petals, allspice, rosemary and lacquer cistus again.  The latter in particular is very prominent in the Algarve.  Paired with the clear and soft water from the L\xFCneburg Heath, the  is used to make gin sul, the result is a perfect  balanced gin, which is wonderfully rich with 43% alcohol content.   Pure tasting is a must here, but you can gin sul  Of course, you can also mix in different gin & tonic variants",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b786becb600143603a4",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b786becb600143603a4",
    order: 8,
    index: 63,
    image: "iywojE5_I/4695fdc3-3e73-4e01-8818-9b78bb9bb244.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 11, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65258c3473028f0014aa136c",
    name: {en: "Hendricks", de: "Hendricks"},
    description: {
        en: " Hendrick's   Gin is a high-quality Scottish juniper brandy. With the  The gin is produced by two different distillers  uses: a Carter Head still from 1948 and a small still bladder  from 1860. The flavoring process produces high-quality botanicals   for use, including junipers, orange peels, elderflowers,  angelica root, coriander and lemons. The gin has a very multi-faceted character and scores particularly well with its freshness and floral notes. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b786becb600143603a4",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b786becb600143603a4",
    order: 10,
    index: 64,
    image: "iywojE5_I/12af7b02-6178-49cb-b577-07703c59126c.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 11, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed0b8c853ca90014e031f8",
    name: {en: "Vodka", de: "Vodka"},
    description: {en: "", de: ""},
    note: {en: "", de: "4cl"},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b286becb6001435f87d",
    model: "entity",
    type: "section",
    order: 2,
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d",
    image: "iywojE5_I/4172c753-a602-4663-9d9e-8cb4f6eeb97b.png",
    published: !0,
    display: "grid",
    columns: 3,
    hideTitles: !1,
    properties: [],
    ingredientWarnings: ["gluten-free"],
    index: 65,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6525909038f3a700147fd23f",
    name: {en: "Beluga Noble", de: "Beluga Noble"},
    description: {
        en: "Beluga Noble Vodka is produced through passionate handwork in  Montenegro produced what you can also taste. The Noble Vodka is   anything but a flat drink: It has a certain depth that  It will also allow you to easily enjoy it pure on ice  may. A small touch of malt and flowers turns the beluga into  unique taste experience!  Fans of the clear spirit are regularly coming up with new creations.  This also includes Beluga Noble Vodka, which is particularly highly regarded by  enjoyed by more demanding vodka lovers",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b8c853ca90014e031f8",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b8c853ca90014e031f8",
    order: 0,
    index: 66,
    image: "iywojE5_I/84c02e44-aa34-4e1d-8b60-6b9b9f473fd2.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 9, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "652591001c1eb30014238362",
    name: {en: "Beluga Transatlantic", de: "Beluga Transatlantic"},
    description: {
        en: "Beluga Transatlantic Vodka presents a special edition of the renowned   Beluga House The distillery is involved as a sponsor  in yachting, which is why Beluga Transatlantic was created.  It is named after the Transatlantic Race, one of the most important races in  yachting. The high-quality Transatlantic Edition includes  a particularly pure and very soft vodka, which honors the successes  impressed by the Russian sailing team with a certain twist.  The extremely mild and soft taste is created thanks to a  extra filtration due to the purest cotton, which disturbs the aroma or  captures adulterating substances. The rest period here is 45 days, around   To make flavors even more delicate. Fresh and floral notes  present themselves paired with a scent that is reminiscent of a gentle sea breeze   Reminds. There is also a hint of spice. Enjoy this  fabulous vodka, preferably pure or on the rocks. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b8c853ca90014e031f8",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b8c853ca90014e031f8",
    order: 1,
    index: 67,
    image: "iywojE5_I/434dda40-2120-49c1-904e-521c407f5160.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 11, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "652593a673028f0014ace3c7",
    name: {en: "Beluga Allure", de: "Beluga Allure"},
    description: {
        en: "Beluga Allure pays tribute to the Beluga Polo Team: The bottle is with  Leather-clad. Beluga Allure Vodka presents a special  This is a special edition, which is only available in limited quantities. The  Vodka is unique in its taste - maple syrup and  wheat.  The vodka is carefully handcrafted  manufactured. The premium product is based on high-quality barley, which   Distilled six times in combination with fresh spring water  will. As soon as you open the elegant bottles, you get an aroma  , which is reminiscent of freshly baked bread. Open on the palate  The vodka connoisseur has wonderful notes of freshly harvested grain  and traces of exotic spices. The elegant beluga appears in the aftertaste   Allure gentle and profound. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b8c853ca90014e031f8",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b8c853ca90014e031f8",
    order: 2,
    index: 68,
    image: "iywojE5_I/031f0fd8-ba7f-411a-a2c1-1d7beadb0649.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 16, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6525945b1c1eb3001424c2a6",
    name: {en: "Beluga Gold", de: "Beluga Gold"},
    description: {
        en: "This premium vodka is only for true connoisseurs! Beluga Vodka Gold Line - the vodka nation par excellence - is already very popular and is slowly making  The round in this country.  It is handmade using exceptional ingredients such as rhodiola extract and rice  come. The vodka is stored for three months, which guarantees you  Will taste it out. Because Beluga Vodka Gold Line is much more complex than conventional vodkas and will inspire you with floral notes. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b8c853ca90014e031f8",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b8c853ca90014e031f8",
    order: 3,
    index: 69,
    image: "iywojE5_I/7f4a19b4-b899-4374-a890-7aa8b21f65a1.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 25, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6525964573028f0014adc739",
    name: {en: "Grey Goose", de: "Grey Goose"},
    description: {
        en: "Created by French ma\xEEtre de chai (winemaker) Fran\xE7ois Thibault and introduced in 1997, Grey Goose Vodka is distilled five times using French wheat from the Picardy region in northern France.  The water comes from a natural spring in  close to the bottling plant in the Cognac region and is naturally filtered by limestone from Champagne. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b8c853ca90014e031f8",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b8c853ca90014e031f8",
    order: 4,
    index: 70,
    image: "iywojE5_I/fd4fbd96-e6bd-4fc8-915a-aa9f53b58111.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: ["gluten-free"],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "652597041c1eb30014259c61",
    name: {en: "belvedere", de: "Belvedere"},
    description: {
        en: "This top-class vodka is named after the Belvedere Palace in Warsaw, which has been home to all Polish presidents for over 100 years.  Belvedere Vodka is made from 100% rye. The quadruple distillation gives it an extremely soft and elegant texture.  ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b8c853ca90014e031f8",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b8c853ca90014e031f8",
    order: 5,
    index: 71,
    image: "iywojE5_I/b4613114-9ae5-4d71-a4d7-3d4359d68222.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed0b9a011c8c00142d93ff",
    name: {en: "Rum/ Cachaca", de: "Rum/ Cachaca"},
    description: {en: "", de: ""},
    note: {en: "", de: "4cl"},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b286becb6001435f87d",
    model: "entity",
    type: "section",
    order: 3,
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d",
    image: "iywojE5_I/5b577830-a82d-4952-9a49-3a5069b7dc5c.png",
    published: !0,
    display: "grid",
    columns: 3,
    hideTitles: !1,
    properties: [],
    ingredientWarnings: [],
    index: 72,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6525989b769e6d0014f04ab3",
    name: {en: "Diplomatico", de: "Diplomatico"},
    description: {
        en: "The traditional Diplomatico Reserva Exclusiva stands out due to its very special taste.  This is how he distances himself from numerous other offerings due to his pronounced sweetness. At the same time,  The Diplomatico rum also has a full body, which makes it reminiscent of the taste of Venezuela from the very first sip. Diplomatico  Reserva Exclusiva is a multi-award-winning blend from Venezuela.  This rum is ideal for an introduction to the world of rum, but connoisseurs also enjoy its balanced taste",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b9a011c8c00142d93ff",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b9a011c8c00142d93ff",
    order: 0,
    index: 73,
    image: "iywojE5_I/2894390b-c0ec-46c1-9370-a76521a45529.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 12, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6525993b90b4b40014393665",
    name: {en: "The Demons Share", de: "The Demons Share"},
    description: {
        en: "The sugar cane used in The Demon's Share Spirit Drink, which grows on nutrient-rich volcanic soil, is processed traditionally and with great care.  Aging takes place in barrels for 6 years  made from American white oak, which gives the excellent aroma of the spirit drink.  ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b9a011c8c00142d93ff",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b9a011c8c00142d93ff",
    order: 1,
    index: 74,
    image: "iywojE5_I/a7afc611-f740-4cfd-990a-93e77d6f0005.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "652599801c1eb30014264bb1",
    name: {en: "Takamaka", de: "Takamaka"},
    description: {
        en: "Blanc rum is the heart of all Takamaka rums. The creation is a molasses-based column still rum that has been refined with island spring water.  Native to the Seychelles, the rum has a colorful design and tropical aromas. Takamaka Blanc is the ideal basis for many cocktail creations. Try the sunny fellows at Pina Colada or Daiquiri. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b9a011c8c00142d93ff",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b9a011c8c00142d93ff",
    order: 2,
    index: 75,
    image: "iywojE5_I/92142135-4af2-4fae-b99b-e68b243fcb9d.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 7, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65259e76a039e1001440595e",
    name: {en: "Doorly's 5Y", de: "Doorly\xB4s 5Y"},
    description: {
        en: "Doorly's 5 years is a blend of pot  and Column-Still distillates from the Foursquare Distillery, one of the oldest still active distilleries with its own sugar cane plantation in Barbados.  The rum produced by R.L.Seale and Company Ltd. was stored in selected oak barrels for five years. Fresh, fruity aromas are mixed with fine sweetness and the vanilla notes typical of Barbados and a bit of ginger. Light and sweet on the finish. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b9a011c8c00142d93ff",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b9a011c8c00142d93ff",
    order: 3,
    index: 76,
    image: "iywojE5_I/fbd56def-de27-4783-8960-bd4a7adad98d.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 8, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65259ea540fc15001435ce3d",
    name: {en: "Doorly's 3Y", de: "Doorly\xB4s 3Y"},
    description: {
        en: "Doorly's Rum Blanco 3 Years Barbados 47% is a high quality  three-year-old rum from the Foursquare Distillery, one of the oldest  Distilleries in Barbados. Unlike unripened white rums, the  Distillate is stored in oak barrels for three years and then passed through  Filtration turned back into a blanco and by R.L.Seale and  Company Ltd. bottled.  Aromatically fruity, young and fresh with slightly sweet tones is suitable  this rum to mix.  ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b9a011c8c00142d93ff",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0b9a011c8c00142d93ff",
    order: 4,
    index: 77,
    image: "iywojE5_I/5357c81e-f274-4653-b214-44d8c588d01f.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 7, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed0bbc853ca90014e037f1",
    name: {en: "Tequila/ Mezcal", de: "Tequila/ Mezcal"},
    description: {en: "", de: ""},
    note: {en: "", de: "4cl"},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0b286becb6001435f87d",
    model: "entity",
    type: "section",
    order: 4,
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d",
    image: "iywojE5_I/303fc546-b4fb-4192-be45-5b3081218d72.png",
    published: !0,
    display: "grid",
    columns: 3,
    hideTitles: !1,
    properties: [],
    ingredientWarnings: [],
    index: 78,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65259fd990b4b400143b0505",
    name: {en: "Clas Azul Plata", de: "Clas Azul Plata"},
    description: {
        en: "A real eye-catcher, this Clase Azul Tequila Plata! It uses untreated agaves cooked for 72 hours.  The lush green plants are allowed to grow for more than nine years in \u201CLos Altos\u201D, a mountainous region in the Jalisco region of Mexico. ",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0bbc853ca90014e037f1",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0bbc853ca90014e037f1",
    order: 0,
    index: 79,
    image: "iywojE5_I/56b2df0c-b2fe-4e84-9ef7-6185566928d4.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 25, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "6525a0f840fc150014367410",
    name: {en: "San Cosme", de: "San Cosme"},
    description: {
        en: "San Cosme Mezcal is a wonderful candidate for all those who have been wanting to find out what the trendy agave spirit is about for a long time.  The cleanly designed bottle alone looks inviting: Man  It feels like being in a bar in Oaxaca, Mexico. This impression is continued with the content. Here, San Cosme Mezcal proves that it has a lot to offer at a terrific price and even for  Beginners are the perfect choice. It smells slightly smoky of earth and wood, and a hint of caramel is hidden away",
        de: " "
    },
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0bbc853ca90014e037f1",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0b286becb6001435f87d,64ed0bbc853ca90014e037f1",
    order: 1,
    index: 80,
    image: "iywojE5_I/e35263f0-4539-48a0-a516-21ad4d7b5a71.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: ""}, calories: 0, value: 10, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "64ed0c00853ca90014e03e80",
    name: {en: "Soft", de: "Softdrinks"},
    description: {en: "", de: ""},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64d7b51b5be31c0014a6cc73",
    model: "entity",
    type: "section",
    order: 9,
    path: ",64d7b51b5be31c0014a6cc73",
    image: "iywojE5_I/1484aaa4-badc-458e-bd00-f6b5a7499a96.png",
    published: !0,
    display: "grid",
    columns: 3,
    hideTitles: !1,
    properties: [],
    ingredientWarnings: [],
    index: 81,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65104ecba28e610014033a29",
    name: {en: "Fritz Kola", de: "Fritz Kola"},
    description: {en: "", de: ""},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0c00853ca90014e03e80",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0c00853ca90014e03e80",
    order: 0,
    index: 82,
    image: "iywojE5_I/37933973-b8af-4e27-9583-b3a64ba5fae8.webp",
    video: null,
    published: !0,
    prices: [{
        definition: {en: "", de: "0,33l"},
        calories: 0,
        value: 4.5,
        currencies: [{
            _id: "6110ffd908b37a30c4e128bf",
            name: "Euro",
            symbol: "\u20AC",
            value: 4.5,
            code: "EUR",
            fraction: 2,
            id: "6110ffd908b37a30c4e128bf"
        }],
        id: null
    }],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65104f061964ef0014661298",
    name: {en: "Fritz Orange", de: "Fritz Orange"},
    description: {en: "", de: ""},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0c00853ca90014e03e80",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0c00853ca90014e03e80",
    order: 1,
    index: 83,
    image: "iywojE5_I/453defad-bfb8-46ab-93bd-05bd8b3805af.webp",
    video: null,
    published: !0,
    prices: [{
        definition: {en: "", de: "0,33l"},
        calories: 0,
        value: 4.5,
        currencies: [{
            _id: "6110ffd908b37a30c4e128bf",
            name: "Euro",
            symbol: "\u20AC",
            value: 4.5,
            code: "EUR",
            fraction: 2,
            id: "6110ffd908b37a30c4e128bf"
        }],
        id: null
    }],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65104f2e5aab9200145ad53a",
    name: {en: "Fritz Supper Zero", de: "Fritz Supper Zero"},
    description: {en: "", de: ""},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0c00853ca90014e03e80",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0c00853ca90014e03e80",
    order: 2,
    index: 84,
    image: "iywojE5_I/f7928d39-a836-4ce3-adee-0786c177a8e0.jpeg",
    video: null,
    published: !0,
    prices: [{
        definition: {en: "", de: "0,33l"},
        calories: 0,
        value: 4.5,
        currencies: [{
            _id: "6110ffd908b37a30c4e128bf",
            name: "Euro",
            symbol: "\u20AC",
            value: 4.5,
            code: "EUR",
            fraction: 2,
            id: "6110ffd908b37a30c4e128bf"
        }],
        id: null
    }],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65104f574dc3d4001405646a",
    name: {en: "Fritz Limo", de: "Fritz Limo"},
    description: {en: "", de: ""},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0c00853ca90014e03e80",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0c00853ca90014e03e80",
    order: 3,
    index: 85,
    image: "iywojE5_I/9c015bf9-750b-4d38-81d8-414085f3a1f3.webp",
    video: null,
    published: !0,
    prices: [{
        definition: {en: "", de: "0,33l"},
        calories: 0,
        value: 4.5,
        currencies: [{
            _id: "6110ffd908b37a30c4e128bf",
            name: "Euro",
            symbol: "\u20AC",
            value: 4.5,
            code: "EUR",
            fraction: 2,
            id: "6110ffd908b37a30c4e128bf"
        }],
        id: null
    }],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65104f87a28e6100140380e1",
    name: {en: "Fritz Rhubarb", de: "Fritz Rhubarb"},
    description: {en: "", de: ""},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0c00853ca90014e03e80",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0c00853ca90014e03e80",
    order: 4,
    index: 86,
    image: "iywojE5_I/12a04618-7245-478c-b319-b208c01ea171.avif",
    video: null,
    published: !0,
    prices: [{
        definition: {en: "", de: "0,33l"},
        calories: 0,
        value: 4.5,
        currencies: [{
            _id: "6110ffd908b37a30c4e128bf",
            name: "Euro",
            symbol: "\u20AC",
            value: 4.5,
            code: "EUR",
            fraction: 2,
            id: "6110ffd908b37a30c4e128bf"
        }],
        id: null
    }],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65104fdc4dc3d40014059769",
    name: {en: "Fritz Kola Light", de: "Fritz kola Light"},
    description: {en: "", de: ""},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0c00853ca90014e03e80",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0c00853ca90014e03e80",
    order: 5,
    index: 87,
    image: "iywojE5_I/fe93db53-c31c-45ed-936c-49e192ae27b4.jpeg",
    video: null,
    published: !0,
    prices: [{
        definition: {en: "", de: "0,33l"},
        calories: 0,
        value: 4.5,
        currencies: [{
            _id: "6110ffd908b37a30c4e128bf",
            name: "Euro",
            symbol: "\u20AC",
            value: 4.5,
            code: "EUR",
            fraction: 2,
            id: "6110ffd908b37a30c4e128bf"
        }],
        id: null
    }],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65104fb81964ef0014665a1c",
    name: {en: "Thomas Henry Ginger Beer", de: "Thomas Henry Ginger Beer"},
    description: {en: "", de: ""},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0c00853ca90014e03e80",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0c00853ca90014e03e80",
    order: 6,
    index: 88,
    image: "iywojE5_I/c23bfb2b-7bf9-4f48-bcad-a6b2f4a10a35.jpeg",
    video: null,
    published: !0,
    prices: [{
        definition: {en: "", de: "200ml"},
        calories: 0,
        value: 4.2,
        currencies: [{
            _id: "6110ffd908b37a30c4e128bf",
            name: "Euro",
            symbol: "\u20AC",
            value: 4.2,
            code: "EUR",
            fraction: 2,
            id: "6110ffd908b37a30c4e128bf"
        }],
        id: null
    }],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "65104ffc5aab9200145b2845",
    name: {en: "Thomas Henry Mango", de: "Thomas Henry Mango"},
    description: {en: "", de: ""},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0c00853ca90014e03e80",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0c00853ca90014e03e80",
    order: 7,
    index: 89,
    image: "iywojE5_I/27f7387b-c7f5-421d-8d1f-252605f2dace.webp",
    video: null,
    published: !0,
    prices: [{
        definition: {en: "", de: "200ml"},
        calories: 0,
        value: 4.2,
        currencies: [{
            _id: "6110ffd908b37a30c4e128bf",
            name: "Euro",
            symbol: "\u20AC",
            value: 4.2,
            code: "EUR",
            fraction: 2,
            id: "6110ffd908b37a30c4e128bf"
        }],
        id: null
    }],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}, {
    _id: "653571158a4ab70014cf6807",
    name: {en: "Fentimans tonic", de: "Fentimans Tonic"},
    description: {en: "", de: ""},
    note: {en: "", de: ""},
    menuId: "64d7b51b5be31c0014a6cc73",
    parentId: "64ed0c00853ca90014e03e80",
    model: "entity",
    type: "item",
    path: ",64d7b51b5be31c0014a6cc73,64ed0c00853ca90014e03e80",
    order: 8,
    index: 90,
    image: "iywojE5_I/f57e68ad-65f9-4c96-a839-9534889d2b8a.jpeg",
    video: null,
    published: !0,
    prices: [{definition: {en: "", de: "200ml"}, calories: 0, value: 4.2, currencies: [], id: null}],
    properties: [],
    ingredientWarnings: [],
    soldout: !1,
    likes: {count: 0, user_liked: !1},
    reviews: {count: 0, average: 0}
}];
var _a = (() => {
    class t {
        platformId = b(ht);
        cart = {language: "de", items: []};

        constructor() {
            if (km(this.platformId)) try {
                this.cart = JSON.parse(localStorage.getItem("cart") ?? ""), this.cart || this.createEmptyCart()
            } catch {
                this.createEmptyCart()
            }
        }

        addToCart(n) {
            let r = this.cart.items.findIndex(i => i._id === n._id);
            r >= 0 ? this.cart.items[r].count++ : this.cart.items.push({
                _id: n._id,
                entity: n,
                count: 1
            }), localStorage.setItem("cart", JSON.stringify(this.cart, null, 2))
        }

        decreaseCount(n) {
            let r = this.cart.items.findIndex(i => i._id === n._id);
            r >= 0 && (this.cart.items[r].count === 1 ? this.cart.items = this.cart.items.filter(i => i._id !== n._id) : this.cart.items[r].count--, localStorage.setItem("cart", JSON.stringify(this.cart, null, 2)))
        }

        createEmptyCart() {
            this.cart = {language: "de", items: []}, localStorage.setItem("cart", JSON.stringify(this.cart, null, 2))
        }

        itemCountInCart(n) {
            return this.cart.items.find(r => r._id === n._id)?.count ?? 0
        }

        static \u0275fac = function (r) {
            return new (r || t)
        };
        static \u0275prov = O({token: t, factory: t.\u0275fac, providedIn: "root"})
    }

    return t
})();
var U = function (t) {
    return t[t.State = 0] = "State", t[t.Transition = 1] = "Transition", t[t.Sequence = 2] = "Sequence", t[t.Group = 3] = "Group", t[t.Animate = 4] = "Animate", t[t.Keyframes = 5] = "Keyframes", t[t.Style = 6] = "Style", t[t.Trigger = 7] = "Trigger", t[t.Reference = 8] = "Reference", t[t.AnimateChild = 9] = "AnimateChild", t[t.AnimateRef = 10] = "AnimateRef", t[t.Query = 11] = "Query", t[t.Stagger = 12] = "Stagger", t
}(U || {}), Bt = "*";

function Ry(t, e) {
    return {type: U.Trigger, name: t, definitions: e, options: {}}
}

function vd(t, e = null) {
    return {type: U.Animate, styles: e, timings: t}
}

function Oy(t, e = null) {
    return {type: U.Sequence, steps: t, options: e}
}

function _n(t) {
    return {type: U.Style, styles: t, offset: null}
}

function bd(t, e, n = null) {
    return {type: U.Transition, expr: t, animation: e, options: n}
}

var Cn = class {
    constructor(e = 0, n = 0) {
        this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._originalOnDoneFns = [], this._originalOnStartFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this._position = 0, this.parentPlayer = null, this.totalTime = e + n
    }

    _onFinish() {
        this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = [])
    }

    onStart(e) {
        this._originalOnStartFns.push(e), this._onStartFns.push(e)
    }

    onDone(e) {
        this._originalOnDoneFns.push(e), this._onDoneFns.push(e)
    }

    onDestroy(e) {
        this._onDestroyFns.push(e)
    }

    hasStarted() {
        return this._started
    }

    init() {
    }

    play() {
        this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
    }

    triggerMicrotask() {
        queueMicrotask(() => this._onFinish())
    }

    _onStart() {
        this._onStartFns.forEach(e => e()), this._onStartFns = []
    }

    pause() {
    }

    restart() {
    }

    finish() {
        this._onFinish()
    }

    destroy() {
        this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = [])
    }

    reset() {
        this._started = !1, this._finished = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns
    }

    setPosition(e) {
        this._position = this.totalTime ? e * this.totalTime : 1
    }

    getPosition() {
        return this.totalTime ? this._position / this.totalTime : 1
    }

    triggerCallback(e) {
        let n = e == "start" ? this._onStartFns : this._onDoneFns;
        n.forEach(r => r()), n.length = 0
    }
}, uo = class {
    constructor(e) {
        this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = e;
        let n = 0, r = 0, i = 0, o = this.players.length;
        o == 0 ? queueMicrotask(() => this._onFinish()) : this.players.forEach(s => {
            s.onDone(() => {
                ++n == o && this._onFinish()
            }), s.onDestroy(() => {
                ++r == o && this._onDestroy()
            }), s.onStart(() => {
                ++i == o && this._onStart()
            })
        }), this.totalTime = this.players.reduce((s, a) => Math.max(s, a.totalTime), 0)
    }

    _onFinish() {
        this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = [])
    }

    init() {
        this.players.forEach(e => e.init())
    }

    onStart(e) {
        this._onStartFns.push(e)
    }

    _onStart() {
        this.hasStarted() || (this._started = !0, this._onStartFns.forEach(e => e()), this._onStartFns = [])
    }

    onDone(e) {
        this._onDoneFns.push(e)
    }

    onDestroy(e) {
        this._onDestroyFns.push(e)
    }

    hasStarted() {
        return this._started
    }

    play() {
        this.parentPlayer || this.init(), this._onStart(), this.players.forEach(e => e.play())
    }

    pause() {
        this.players.forEach(e => e.pause())
    }

    restart() {
        this.players.forEach(e => e.restart())
    }

    finish() {
        this._onFinish(), this.players.forEach(e => e.finish())
    }

    destroy() {
        this._onDestroy()
    }

    _onDestroy() {
        this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(e => e.destroy()), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = [])
    }

    reset() {
        this.players.forEach(e => e.reset()), this._destroyed = !1, this._finished = !1, this._started = !1
    }

    setPosition(e) {
        let n = e * this.totalTime;
        this.players.forEach(r => {
            let i = r.totalTime ? Math.min(1, n / r.totalTime) : 1;
            r.setPosition(i)
        })
    }

    getPosition() {
        let e = this.players.reduce((n, r) => n === null || r.totalTime > n.totalTime ? r : n, null);
        return e != null ? e.getPosition() : 0
    }

    beforeDestroy() {
        this.players.forEach(e => {
            e.beforeDestroy && e.beforeDestroy()
        })
    }

    triggerCallback(e) {
        let n = e == "start" ? this._onStartFns : this._onDoneFns;
        n.forEach(r => r()), n.length = 0
    }
}, Sa = "!";

function Yr(t = "1.25s", e = "1.25s") {
    return Ry("fadeInOut", [bd(":enter", [_n({opacity: 0}), vd(e + " ease-out", _n({opacity: 1}))]), bd(":leave", [_n({opacity: 1}), vd(t + " ease-in", _n({opacity: 0}))])])
}

var Dd = Co(fo());

function I1(t, e) {
    if (t & 1) {
        let n = Li();
        ie(0, "div", 10), jt("click", function () {
            Yt(n);
            let i = tn();
            return Jt(i.addToCart())
        }), ie(1, "p"), je(2, "Add to cart"), se()()
    }
}

function C1(t, e) {
    if (t & 1) {
        let n = Li();
        ie(0, "div", 9)(1, "div", 11), jt("click", function () {
            Yt(n);
            let i = tn();
            return Jt(i.addToCart())
        }), ie(2, "p"), je(3, "+"), se()(), ie(4, "div", 11), jt("click", function () {
            Yt(n);
            let i = tn();
            return Jt(i.decreaseCountInCart())
        }), ie(5, "p"), je(6, "-"), se()()()
    }
}

function _1(t, e) {
    if (t & 1 && (ie(0, "div", 8)(1, "p"), je(2), se()()), t & 2) {
        let n = tn();
        xe(2), Ys("", n.cartService.itemCountInCart(n.entity()), "x in cart")
    }
}

var Sn = class t {
    removeFromCocktail() {
        console.log("HEHE")
    }

    removeFromCocktail3() {
        console.log("HEHE2")
    }

    entity = Xt.required({});
    canBeAdded = Xt(!0);
    canBeIncreasedDecreaed = Xt(!1);
    cartService = b(_a);

    get bgImageUrl() {
        return "/385x385/" + this.entity().image
    }

    getName(e = "de") {
        return typeof this.entity().name == "string" ? this.entity().name : this.entity().name[e]
    }

    getDescription(e = "de") {
        return typeof this.entity().description == "string" ? this.entity().description : this.entity().description[e]
    }

    addToCart() {
        this.cartService.addToCart(this.entity())
    }

    decreaseCountInCart() {
        this.cartService.decreaseCount(this.entity())
    }

    static \u0275fac = function (n) {
        return new (n || t)
    };
    static \u0275cmp = Ge({
        type: t,
        selectors: [["na-cocktail"]],
        inputs: {
            entity: [1, "entity"],
            canBeAdded: [1, "canBeAdded"],
            canBeIncreasedDecreaed: [1, "canBeIncreasedDecreaed"]
        },
        standalone: !0,
        features: [Ze],
        decls: 14,
        vars: 8,
        consts: [[1, "bg-cover", "relative", "bg-no-repeat", "md:w-[250px]", "md:min-h-[250px]", "h-full", "w-full", "bg-gray-200", "drop-shadow-2xl", "rounded-md"], [1, "scale-[104%]", "text-gray-600", "w-full", "h-full", "absolute", "left-0", "z-[-1]", "top-0", "blur-sm", "rounded-md", "bg-white", "bg-opacity-70"], [1, "scale-[104%]", "text-gray-600", "w-full", "h-full", "absolute", "left-0", "z-[-2]", "top-0", "rounded-md"], ["loading", "lazy", 1, "w-full", "h-full", 3, "alt", "src"], [1, "absolute", "flex", "flex-col", "justify-between", "h-full", "w-full", "z-[99999]", "py-2", "px-5"], [1, "text-gray-600", "text-xl"], [1, "mt-2", "ml-2", "text-gray-600"], [1, "flex", "gap-2", "justify-betweens"], [1, "text-gray-600", "text-center", "hover:scale-110", "transition-all", "ease-in-out", "duration-500", "cursor-pointer", "rounded-xl", "p-2", "bg-white", "bg-opacity-80"], [1, "flex", "gap-2"], [1, "text-gray-600", "text-center", "hover:scale-110", "transition-all", "ease-in-out", "duration-500", "cursor-pointer", "rounded-xl", "p-2", "bg-white", "bg-opacity-80", 3, "click"], [1, "px-5", "text-gray-600", "text-center", "hover:scale-110", "transition-all", "ease-in-out", "duration-500", "cursor-pointer", "rounded-xl", "p-2", "bg-white", 3, "click"]],
        template: function (n, r) {
            n & 1 && (ie(0, "div", 0), $e(1, "div", 1), ie(2, "div", 2), $e(3, "img", 3), se(), ie(4, "div", 4)(5, "div")(6, "h1", 5), je(7), se(), ie(8, "p", 6), je(9), se()(), ie(10, "div", 7), Fi(11, I1, 3, 0, "div", 8)(12, C1, 7, 0, "div", 9)(13, _1, 3, 1, "div", 8), se()()()), n & 2 && (Le("@fadeInOut", void 0), xe(3), Le("alt", r.getName("de"))("src", r.bgImageUrl, Zl), xe(4), nn(r.getName("de")), xe(2), nn(r.getDescription()), xe(2), Or(r.canBeAdded() ? 11 : -1), xe(), Or(r.canBeIncreasedDecreaed() ? 12 : -1), xe(), Or(r.cartService.itemCountInCart(r.entity()) ? 13 : -1))
        },
        styles: ["[_nghost-%COMP%]{height:250px;width:250px}@media (min-width: 768px){[_nghost-%COMP%]{height:auto}}"],
        data: {animation: [Yr()]}
    })
};
Ht([(0, Dd.RemoveOnServe)()], Sn.prototype, "removeFromCocktail", null);
Ht([(0, Dd.RemoveOnServe)()], Sn.prototype, "removeFromCocktail3", null);
var S1 = (t, e) => e._id;

function T1(t, e) {
    if (t & 1 && $e(0, "na-cocktail", 5), t & 2) {
        let n = e.$implicit;
        Le("entity", n)
    }
}

var Ly = (() => {
    class t {
        section = Xt.required();
        allData = Xt.required();

        getName(n = "de") {
            return typeof this.section().name == "string" ? this.section().name : this.section().name[n]
        }

        getDescription(n = "de") {
            return typeof this.section().description == "string" ? this.section().description : this.section().description[n]
        }

        get matchingEntities() {
            return this.allData().filter(n => n.parentId === this.section()._id)
        }

        static \u0275fac = function (r) {
            return new (r || t)
        };
        static \u0275cmp = Ge({
            type: t,
            selectors: [["na-section"]],
            inputs: {section: [1, "section"], allData: [1, "allData"]},
            standalone: !0,
            features: [Ze],
            decls: 9,
            vars: 4,
            consts: [[1, "w-full", "relative", "h-screen", 3, "id"], [1, "sticky", "z-[9999]", "bg-white", "top-0", "left-0", "px-5", "drop-shadow-2xl"], [1, "text-xl", "mt-2"], [1, "text-md", "ml-5", "pb-2"], [1, "w-full", "px-5", "mt-5", "grid", "py-2", "place-items-center", "md:grid-cols-3", "grid-cols-1", "gap-5"], [3, "entity"]],
            template: function (r, i) {
                r & 1 && (ie(0, "div", 0)(1, "div", 1)(2, "h1", 2), je(3), se(), ie(4, "p", 3), je(5), se()(), ie(6, "div", 4), Pr(7, T1, 1, 1, "na-cocktail", 5, S1), se()()), r & 2 && (gu("id", i.getName("de")), Le("@fadeInOut", void 0), xe(3), nn(i.getName()), xe(2), nn(i.getDescription()), xe(2), Fr(i.matchingEntities))
            },
            dependencies: [Sn],
            styles: ["[_nghost-%COMP%]{height:100%;width:100%}"],
            data: {animation: [Yr()]}
        })
    }

    return t
})();
var jy = Co(fo());

function M1(t, e) {
    if (t & 1 && $e(0, "na-section", 0), t & 2) {
        let n = tn();
        Le("section", n.section)("allData", n.data)
    }
}

var Jr = class t {
    cdr = b(En);
    data = Kr;
    randomId = "13371337";
    section;
    activatedRoute = b(cn);
    table$ = this.activatedRoute.queryParams.pipe(W(e => e.table));

    ngOnInit() {
        this.activatedRoute.params.subscribe(e => {
            this.cdr.markForCheck(), this.section = this.data.find(n => n._id === e.sectionId), this.cdr.detectChanges()
        }), this.activatedRoute.queryParams.subscribe(e => {
            console.log(e)
        }), this.test2()
    }

    test2() {
        console.log("SECRET")
    }

    static \u0275fac = function (n) {
        return new (n || t)
    };
    static \u0275cmp = Ge({
        type: t,
        selectors: [["na-category"]],
        standalone: !0,
        features: [Ze],
        decls: 1,
        vars: 1,
        consts: [[3, "section", "allData"]],
        template: function (n, r) {
            n & 1 && Fi(0, M1, 1, 2, "na-section", 0), n & 2 && Or(r.section ? 0 : -1)
        },
        dependencies: [Ly]
    })
};
Ht([(0, jy.RemoveOnServe)()], Jr.prototype, "test2", null);
var Vy = Co(fo());
var x1 = (t, e) => e._id;

function A1(t, e) {
    if (t & 1 && $e(0, "na-cocktail", 2), t & 2) {
        let n = e.$implicit;
        Le("canBeAdded", !1)("canBeIncreasedDecreaed", !0)("entity", n.entity)
    }
}

var ho = class t {
    cartService = b(_a);

    removeFromCart() {
        console.log("HUHU")
    }

    static \u0275fac = function (n) {
        return new (n || t)
    };
    static \u0275cmp = Ge({
        type: t,
        selectors: [["na-cart"]],
        standalone: !0,
        features: [Ze],
        decls: 4,
        vars: 0,
        consts: [[1, "w-full", "h-full"], [1, "w-full", "px-5", "mt-5", "grid", "py-2", "place-items-center", "md:grid-cols-3", "grid-cols-1", "gap-5"], [3, "canBeAdded", "canBeIncreasedDecreaed", "entity"]],
        template: function (n, r) {
            n & 1 && (ie(0, "div", 0)(1, "div", 1), Pr(2, A1, 1, 3, "na-cocktail", 2, x1), se()()), n & 2 && (xe(2), Fr(r.cartService.cart.items))
        },
        dependencies: [Sn]
    })
};
Ht([(0, Vy.RemoveOnServe)()], ho.prototype, "removeFromCart", null);
var By = [{path: "", pathMatch: "full", component: Jr}, {
    path: "cart",
    pathMatch: "full",
    component: ho
}, {path: ":sectionId", pathMatch: "full", component: Jr}];

function Uy(t) {
    return new D(3e3, !1)
}

function N1() {
    return new D(3100, !1)
}

function k1() {
    return new D(3101, !1)
}

function R1(t) {
    return new D(3001, !1)
}

function O1(t) {
    return new D(3003, !1)
}

function P1(t) {
    return new D(3004, !1)
}

function F1(t, e) {
    return new D(3005, !1)
}

function L1() {
    return new D(3006, !1)
}

function j1() {
    return new D(3007, !1)
}

function V1(t, e) {
    return new D(3008, !1)
}

function B1(t) {
    return new D(3002, !1)
}

function U1(t, e, n, r, i) {
    return new D(3010, !1)
}

function $1() {
    return new D(3011, !1)
}

function H1() {
    return new D(3012, !1)
}

function z1() {
    return new D(3200, !1)
}

function W1() {
    return new D(3202, !1)
}

function G1() {
    return new D(3013, !1)
}

function q1(t) {
    return new D(3014, !1)
}

function Z1(t) {
    return new D(3015, !1)
}

function Q1(t) {
    return new D(3016, !1)
}

function K1(t, e) {
    return new D(3404, !1)
}

function Y1(t) {
    return new D(3502, !1)
}

function J1(t) {
    return new D(3503, !1)
}

function X1() {
    return new D(3300, !1)
}

function eS(t) {
    return new D(3504, !1)
}

function tS(t) {
    return new D(3301, !1)
}

function nS(t, e) {
    return new D(3302, !1)
}

function rS(t) {
    return new D(3303, !1)
}

function iS(t, e) {
    return new D(3400, !1)
}

function oS(t) {
    return new D(3401, !1)
}

function sS(t) {
    return new D(3402, !1)
}

function aS(t, e) {
    return new D(3505, !1)
}

function Tn(t) {
    switch (t.length) {
        case 0:
            return new Cn;
        case 1:
            return t[0];
        default:
            return new uo(t)
    }
}

function tv(t, e, n = new Map, r = new Map) {
    let i = [], o = [], s = -1, a = null;
    if (e.forEach(c => {
        let l = c.get("offset"), u = l == s, d = u && a || new Map;
        c.forEach((h, f) => {
            let m = f, v = h;
            if (f !== "offset") switch (m = t.normalizePropertyName(m, i), v) {
                case Sa:
                    v = n.get(f);
                    break;
                case Bt:
                    v = r.get(f);
                    break;
                default:
                    v = t.normalizeStyleValue(f, m, v, i);
                    break
            }
            d.set(m, v)
        }), u || o.push(d), a = d, s = l
    }), i.length) throw Y1(i);
    return o
}

function zd(t, e, n, r) {
    switch (e) {
        case"start":
            t.onStart(() => r(n && Ed(n, "start", t)));
            break;
        case"done":
            t.onDone(() => r(n && Ed(n, "done", t)));
            break;
        case"destroy":
            t.onDestroy(() => r(n && Ed(n, "destroy", t)));
            break
    }
}

function Ed(t, e, n) {
    let r = n.totalTime, i = !!n.disabled,
        o = Wd(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, r ?? t.totalTime, i), s = t._data;
    return s != null && (o._data = s), o
}

function Wd(t, e, n, r, i = "", o = 0, s) {
    return {element: t, triggerName: e, fromState: n, toState: r, phaseName: i, totalTime: o, disabled: !!s}
}

function st(t, e, n) {
    let r = t.get(e);
    return r || t.set(e, r = n), r
}

function $y(t) {
    let e = t.indexOf(":"), n = t.substring(1, e), r = t.slice(e + 1);
    return [n, r]
}

var cS = typeof document > "u" ? null : document.documentElement;

function Gd(t) {
    let e = t.parentNode || t.host || null;
    return e === cS ? null : e
}

function lS(t) {
    return t.substring(1, 6) == "ebkit"
}

var Kn = null, Hy = !1;

function uS(t) {
    Kn || (Kn = dS() || {}, Hy = Kn.style ? "WebkitAppearance" in Kn.style : !1);
    let e = !0;
    return Kn.style && !lS(t) && (e = t in Kn.style, !e && Hy && (e = "Webkit" + t.charAt(0).toUpperCase() + t.slice(1) in Kn.style)), e
}

function dS() {
    return typeof document < "u" ? document.body : null
}

function nv(t, e) {
    for (; e;) {
        if (e === t) return !0;
        e = Gd(e)
    }
    return !1
}

function rv(t, e, n) {
    if (n) return Array.from(t.querySelectorAll(e));
    let r = t.querySelector(e);
    return r ? [r] : []
}

var qd = (() => {
    let e = class e {
        validateStyleProperty(r) {
            return uS(r)
        }

        containsElement(r, i) {
            return nv(r, i)
        }

        getParentElement(r) {
            return Gd(r)
        }

        query(r, i, o) {
            return rv(r, i, o)
        }

        computeStyle(r, i, o) {
            return o || ""
        }

        animate(r, i, o, s, a, c = [], l) {
            return new Cn(o, s)
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac});
    let t = e;
    return t
})(), Yd = class Yd {
};
Yd.NOOP = new qd;
var Xn = Yd, er = class {
};
var fS = 1e3, iv = "{{", hS = "}}", ov = "ng-enter", Md = "ng-leave", Ta = "ng-trigger", ka = ".ng-trigger",
    zy = "ng-animating", xd = ".ng-animating";

function ln(t) {
    if (typeof t == "number") return t;
    let e = t.match(/^(-?[\.\d]+)(m?s)/);
    return !e || e.length < 2 ? 0 : Ad(parseFloat(e[1]), e[2])
}

function Ad(t, e) {
    switch (e) {
        case"s":
            return t * fS;
        default:
            return t
    }
}

function Ra(t, e, n) {
    return t.hasOwnProperty("duration") ? t : pS(t, e, n)
}

function pS(t, e, n) {
    let r = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i, i, o = 0, s = "";
    if (typeof t == "string") {
        let a = t.match(r);
        if (a === null) return e.push(Uy(t)), {duration: 0, delay: 0, easing: ""};
        i = Ad(parseFloat(a[1]), a[2]);
        let c = a[3];
        c != null && (o = Ad(parseFloat(c), a[4]));
        let l = a[5];
        l && (s = l)
    } else i = t;
    if (!n) {
        let a = !1, c = e.length;
        i < 0 && (e.push(N1()), a = !0), o < 0 && (e.push(k1()), a = !0), a && e.splice(c, 0, Uy(t))
    }
    return {duration: i, delay: o, easing: s}
}

function gS(t) {
    return t.length ? t[0] instanceof Map ? t : t.map(e => new Map(Object.entries(e))) : []
}

function Ut(t, e, n) {
    e.forEach((r, i) => {
        let o = Zd(i);
        n && !n.has(i) && n.set(i, t.style[o]), t.style[o] = r
    })
}

function Jn(t, e) {
    e.forEach((n, r) => {
        let i = Zd(r);
        t.style[i] = ""
    })
}

function po(t) {
    return Array.isArray(t) ? t.length == 1 ? t[0] : Oy(t) : t
}

function mS(t, e, n) {
    let r = e.params || {}, i = sv(t);
    i.length && i.forEach(o => {
        r.hasOwnProperty(o) || n.push(R1(o))
    })
}

var Nd = new RegExp(`${iv}\\s*(.+?)\\s*${hS}`, "g");

function sv(t) {
    let e = [];
    if (typeof t == "string") {
        let n;
        for (; n = Nd.exec(t);) e.push(n[1]);
        Nd.lastIndex = 0
    }
    return e
}

function mo(t, e, n) {
    let r = `${t}`, i = r.replace(Nd, (o, s) => {
        let a = e[s];
        return a == null && (n.push(O1(s)), a = ""), a.toString()
    });
    return i == r ? t : i
}

var yS = /-+([a-z0-9])/g;

function Zd(t) {
    return t.replace(yS, (...e) => e[1].toUpperCase())
}

function vS(t, e) {
    return t === 0 || e === 0
}

function bS(t, e, n) {
    if (n.size && e.length) {
        let r = e[0], i = [];
        if (n.forEach((o, s) => {
            r.has(s) || i.push(s), r.set(s, o)
        }), i.length) for (let o = 1; o < e.length; o++) {
            let s = e[o];
            i.forEach(a => s.set(a, Qd(t, a)))
        }
    }
    return e
}

function ot(t, e, n) {
    switch (e.type) {
        case U.Trigger:
            return t.visitTrigger(e, n);
        case U.State:
            return t.visitState(e, n);
        case U.Transition:
            return t.visitTransition(e, n);
        case U.Sequence:
            return t.visitSequence(e, n);
        case U.Group:
            return t.visitGroup(e, n);
        case U.Animate:
            return t.visitAnimate(e, n);
        case U.Keyframes:
            return t.visitKeyframes(e, n);
        case U.Style:
            return t.visitStyle(e, n);
        case U.Reference:
            return t.visitReference(e, n);
        case U.AnimateChild:
            return t.visitAnimateChild(e, n);
        case U.AnimateRef:
            return t.visitAnimateRef(e, n);
        case U.Query:
            return t.visitQuery(e, n);
        case U.Stagger:
            return t.visitStagger(e, n);
        default:
            throw P1(e.type)
    }
}

function Qd(t, e) {
    return window.getComputedStyle(t)[e]
}

var wS = new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]),
    Oa = class extends er {
        normalizePropertyName(e, n) {
            return Zd(e)
        }

        normalizeStyleValue(e, n, r, i) {
            let o = "", s = r.toString().trim();
            if (wS.has(n) && r !== 0 && r !== "0") if (typeof r == "number") o = "px"; else {
                let a = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
                a && a[1].length == 0 && i.push(F1(e, r))
            }
            return s + o
        }
    };
var Pa = "*";

function DS(t, e) {
    let n = [];
    return typeof t == "string" ? t.split(/\s*,\s*/).forEach(r => ES(r, n, e)) : n.push(t), n
}

function ES(t, e, n) {
    if (t[0] == ":") {
        let c = IS(t, n);
        if (typeof c == "function") {
            e.push(c);
            return
        }
        t = c
    }
    let r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
    if (r == null || r.length < 4) return n.push(Z1(t)), e;
    let i = r[1], o = r[2], s = r[3];
    e.push(Wy(i, s));
    let a = i == Pa && s == Pa;
    o[0] == "<" && !a && e.push(Wy(s, i))
}

function IS(t, e) {
    switch (t) {
        case":enter":
            return "void => *";
        case":leave":
            return "* => void";
        case":increment":
            return (n, r) => parseFloat(r) > parseFloat(n);
        case":decrement":
            return (n, r) => parseFloat(r) < parseFloat(n);
        default:
            return e.push(Q1(t)), "* => *"
    }
}

var Ma = new Set(["true", "1"]), xa = new Set(["false", "0"]);

function Wy(t, e) {
    let n = Ma.has(t) || xa.has(t), r = Ma.has(e) || xa.has(e);
    return (i, o) => {
        let s = t == Pa || t == i, a = e == Pa || e == o;
        return !s && n && typeof i == "boolean" && (s = i ? Ma.has(t) : xa.has(t)), !a && r && typeof o == "boolean" && (a = o ? Ma.has(e) : xa.has(e)), s && a
    }
}

var av = ":self", CS = new RegExp(`s*${av}s*,?`, "g");

function cv(t, e, n, r) {
    return new kd(t).build(e, n, r)
}

var Gy = "", kd = class {
    constructor(e) {
        this._driver = e
    }

    build(e, n, r) {
        let i = new Rd(n);
        return this._resetContextStyleTimingState(i), ot(this, po(e), i)
    }

    _resetContextStyleTimingState(e) {
        e.currentQuerySelector = Gy, e.collectedStyles = new Map, e.collectedStyles.set(Gy, new Map), e.currentTime = 0
    }

    visitTrigger(e, n) {
        let r = n.queryCount = 0, i = n.depCount = 0, o = [], s = [];
        return e.name.charAt(0) == "@" && n.errors.push(L1()), e.definitions.forEach(a => {
            if (this._resetContextStyleTimingState(n), a.type == U.State) {
                let c = a, l = c.name;
                l.toString().split(/\s*,\s*/).forEach(u => {
                    c.name = u, o.push(this.visitState(c, n))
                }), c.name = l
            } else if (a.type == U.Transition) {
                let c = this.visitTransition(a, n);
                r += c.queryCount, i += c.depCount, s.push(c)
            } else n.errors.push(j1())
        }), {type: U.Trigger, name: e.name, states: o, transitions: s, queryCount: r, depCount: i, options: null}
    }

    visitState(e, n) {
        let r = this.visitStyle(e.styles, n), i = e.options && e.options.params || null;
        if (r.containsDynamicStyles) {
            let o = new Set, s = i || {};
            r.styles.forEach(a => {
                a instanceof Map && a.forEach(c => {
                    sv(c).forEach(l => {
                        s.hasOwnProperty(l) || o.add(l)
                    })
                })
            }), o.size && n.errors.push(V1(e.name, [...o.values()]))
        }
        return {type: U.State, name: e.name, style: r, options: i ? {params: i} : null}
    }

    visitTransition(e, n) {
        n.queryCount = 0, n.depCount = 0;
        let r = ot(this, po(e.animation), n), i = DS(e.expr, n.errors);
        return {
            type: U.Transition,
            matchers: i,
            animation: r,
            queryCount: n.queryCount,
            depCount: n.depCount,
            options: Yn(e.options)
        }
    }

    visitSequence(e, n) {
        return {type: U.Sequence, steps: e.steps.map(r => ot(this, r, n)), options: Yn(e.options)}
    }

    visitGroup(e, n) {
        let r = n.currentTime, i = 0, o = e.steps.map(s => {
            n.currentTime = r;
            let a = ot(this, s, n);
            return i = Math.max(i, n.currentTime), a
        });
        return n.currentTime = i, {type: U.Group, steps: o, options: Yn(e.options)}
    }

    visitAnimate(e, n) {
        let r = MS(e.timings, n.errors);
        n.currentAnimateTimings = r;
        let i, o = e.styles ? e.styles : _n({});
        if (o.type == U.Keyframes) i = this.visitKeyframes(o, n); else {
            let s = e.styles, a = !1;
            if (!s) {
                a = !0;
                let l = {};
                r.easing && (l.easing = r.easing), s = _n(l)
            }
            n.currentTime += r.duration + r.delay;
            let c = this.visitStyle(s, n);
            c.isEmptyStep = a, i = c
        }
        return n.currentAnimateTimings = null, {type: U.Animate, timings: r, style: i, options: null}
    }

    visitStyle(e, n) {
        let r = this._makeStyleAst(e, n);
        return this._validateStyleAst(r, n), r
    }

    _makeStyleAst(e, n) {
        let r = [], i = Array.isArray(e.styles) ? e.styles : [e.styles];
        for (let a of i) typeof a == "string" ? a === Bt ? r.push(a) : n.errors.push(B1(a)) : r.push(new Map(Object.entries(a)));
        let o = !1, s = null;
        return r.forEach(a => {
            if (a instanceof Map && (a.has("easing") && (s = a.get("easing"), a.delete("easing")), !o)) {
                for (let c of a.values()) if (c.toString().indexOf(iv) >= 0) {
                    o = !0;
                    break
                }
            }
        }), {type: U.Style, styles: r, easing: s, offset: e.offset, containsDynamicStyles: o, options: null}
    }

    _validateStyleAst(e, n) {
        let r = n.currentAnimateTimings, i = n.currentTime, o = n.currentTime;
        r && o > 0 && (o -= r.duration + r.delay), e.styles.forEach(s => {
            typeof s != "string" && s.forEach((a, c) => {
                let l = n.collectedStyles.get(n.currentQuerySelector), u = l.get(c), d = !0;
                u && (o != i && o >= u.startTime && i <= u.endTime && (n.errors.push(U1(c, u.startTime, u.endTime, o, i)), d = !1), o = u.startTime), d && l.set(c, {
                    startTime: o,
                    endTime: i
                }), n.options && mS(a, n.options, n.errors)
            })
        })
    }

    visitKeyframes(e, n) {
        let r = {type: U.Keyframes, styles: [], options: null};
        if (!n.currentAnimateTimings) return n.errors.push($1()), r;
        let i = 1, o = 0, s = [], a = !1, c = !1, l = 0, u = e.steps.map(N => {
            let $ = this._makeStyleAst(N, n), z = $.offset != null ? $.offset : TS($.styles), ee = 0;
            return z != null && (o++, ee = $.offset = z), c = c || ee < 0 || ee > 1, a = a || ee < l, l = ee, s.push(ee), $
        });
        c && n.errors.push(H1()), a && n.errors.push(z1());
        let d = e.steps.length, h = 0;
        o > 0 && o < d ? n.errors.push(W1()) : o == 0 && (h = i / (d - 1));
        let f = d - 1, m = n.currentTime, v = n.currentAnimateTimings, C = v.duration;
        return u.forEach((N, $) => {
            let z = h > 0 ? $ == f ? 1 : h * $ : s[$], ee = z * C;
            n.currentTime = m + v.delay + ee, v.duration = ee, this._validateStyleAst(N, n), N.offset = z, r.styles.push(N)
        }), r
    }

    visitReference(e, n) {
        return {type: U.Reference, animation: ot(this, po(e.animation), n), options: Yn(e.options)}
    }

    visitAnimateChild(e, n) {
        return n.depCount++, {type: U.AnimateChild, options: Yn(e.options)}
    }

    visitAnimateRef(e, n) {
        return {type: U.AnimateRef, animation: this.visitReference(e.animation, n), options: Yn(e.options)}
    }

    visitQuery(e, n) {
        let r = n.currentQuerySelector, i = e.options || {};
        n.queryCount++, n.currentQuery = e;
        let [o, s] = _S(e.selector);
        n.currentQuerySelector = r.length ? r + " " + o : o, st(n.collectedStyles, n.currentQuerySelector, new Map);
        let a = ot(this, po(e.animation), n);
        return n.currentQuery = null, n.currentQuerySelector = r, {
            type: U.Query,
            selector: o,
            limit: i.limit || 0,
            optional: !!i.optional,
            includeSelf: s,
            animation: a,
            originalSelector: e.selector,
            options: Yn(e.options)
        }
    }

    visitStagger(e, n) {
        n.currentQuery || n.errors.push(G1());
        let r = e.timings === "full" ? {duration: 0, delay: 0, easing: "full"} : Ra(e.timings, n.errors, !0);
        return {type: U.Stagger, animation: ot(this, po(e.animation), n), timings: r, options: null}
    }
};

function _S(t) {
    let e = !!t.split(/\s*,\s*/).find(n => n == av);
    return e && (t = t.replace(CS, "")), t = t.replace(/@\*/g, ka).replace(/@\w+/g, n => ka + "-" + n.slice(1)).replace(/:animating/g, xd), [t, e]
}

function SS(t) {
    return t ? S({}, t) : null
}

var Rd = class {
    constructor(e) {
        this.errors = e, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = new Map, this.options = null, this.unsupportedCSSPropertiesFound = new Set
    }
};

function TS(t) {
    if (typeof t == "string") return null;
    let e = null;
    if (Array.isArray(t)) t.forEach(n => {
        if (n instanceof Map && n.has("offset")) {
            let r = n;
            e = parseFloat(r.get("offset")), r.delete("offset")
        }
    }); else if (t instanceof Map && t.has("offset")) {
        let n = t;
        e = parseFloat(n.get("offset")), n.delete("offset")
    }
    return e
}

function MS(t, e) {
    if (t.hasOwnProperty("duration")) return t;
    if (typeof t == "number") {
        let o = Ra(t, e).duration;
        return Id(o, 0, "")
    }
    let n = t;
    if (n.split(/\s+/).some(o => o.charAt(0) == "{" && o.charAt(1) == "{")) {
        let o = Id(0, 0, "");
        return o.dynamic = !0, o.strValue = n, o
    }
    let i = Ra(n, e);
    return Id(i.duration, i.delay, i.easing)
}

function Yn(t) {
    return t ? (t = S({}, t), t.params && (t.params = SS(t.params))) : t = {}, t
}

function Id(t, e, n) {
    return {duration: t, delay: e, easing: n}
}

function Kd(t, e, n, r, i, o, s = null, a = !1) {
    return {
        type: 1,
        element: t,
        keyframes: e,
        preStyleProps: n,
        postStyleProps: r,
        duration: i,
        delay: o,
        totalTime: i + o,
        easing: s,
        subTimeline: a
    }
}

var yo = class {
    constructor() {
        this._map = new Map
    }

    get(e) {
        return this._map.get(e) || []
    }

    append(e, n) {
        let r = this._map.get(e);
        r || this._map.set(e, r = []), r.push(...n)
    }

    has(e) {
        return this._map.has(e)
    }

    clear() {
        this._map.clear()
    }
}, xS = 1, AS = ":enter", NS = new RegExp(AS, "g"), kS = ":leave", RS = new RegExp(kS, "g");

function lv(t, e, n, r, i, o = new Map, s = new Map, a, c, l = []) {
    return new Od().buildKeyframes(t, e, n, r, i, o, s, a, c, l)
}

var Od = class {
    buildKeyframes(e, n, r, i, o, s, a, c, l, u = []) {
        l = l || new yo;
        let d = new Pd(e, n, l, i, o, u, []);
        d.options = c;
        let h = c.delay ? ln(c.delay) : 0;
        d.currentTimeline.delayNextStep(h), d.currentTimeline.setStyles([s], null, d.errors, c), ot(this, r, d);
        let f = d.timelines.filter(m => m.containsAnimation());
        if (f.length && a.size) {
            let m;
            for (let v = f.length - 1; v >= 0; v--) {
                let C = f[v];
                if (C.element === n) {
                    m = C;
                    break
                }
            }
            m && !m.allowOnlyTimelineStyles() && m.setStyles([a], null, d.errors, c)
        }
        return f.length ? f.map(m => m.buildKeyframes()) : [Kd(n, [], [], [], 0, h, "", !1)]
    }

    visitTrigger(e, n) {
    }

    visitState(e, n) {
    }

    visitTransition(e, n) {
    }

    visitAnimateChild(e, n) {
        let r = n.subInstructions.get(n.element);
        if (r) {
            let i = n.createSubContext(e.options), o = n.currentTimeline.currentTime,
                s = this._visitSubInstructions(r, i, i.options);
            o != s && n.transformIntoNewTimeline(s)
        }
        n.previousNode = e
    }

    visitAnimateRef(e, n) {
        let r = n.createSubContext(e.options);
        r.transformIntoNewTimeline(), this._applyAnimationRefDelays([e.options, e.animation.options], n, r), this.visitReference(e.animation, r), n.transformIntoNewTimeline(r.currentTimeline.currentTime), n.previousNode = e
    }

    _applyAnimationRefDelays(e, n, r) {
        for (let i of e) {
            let o = i?.delay;
            if (o) {
                let s = typeof o == "number" ? o : ln(mo(o, i?.params ?? {}, n.errors));
                r.delayNextStep(s)
            }
        }
    }

    _visitSubInstructions(e, n, r) {
        let o = n.currentTimeline.currentTime, s = r.duration != null ? ln(r.duration) : null,
            a = r.delay != null ? ln(r.delay) : null;
        return s !== 0 && e.forEach(c => {
            let l = n.appendInstructionToTimeline(c, s, a);
            o = Math.max(o, l.duration + l.delay)
        }), o
    }

    visitReference(e, n) {
        n.updateOptions(e.options, !0), ot(this, e.animation, n), n.previousNode = e
    }

    visitSequence(e, n) {
        let r = n.subContextCount, i = n, o = e.options;
        if (o && (o.params || o.delay) && (i = n.createSubContext(o), i.transformIntoNewTimeline(), o.delay != null)) {
            i.previousNode.type == U.Style && (i.currentTimeline.snapshotCurrentStyles(), i.previousNode = Fa);
            let s = ln(o.delay);
            i.delayNextStep(s)
        }
        e.steps.length && (e.steps.forEach(s => ot(this, s, i)), i.currentTimeline.applyStylesToKeyframe(), i.subContextCount > r && i.transformIntoNewTimeline()), n.previousNode = e
    }

    visitGroup(e, n) {
        let r = [], i = n.currentTimeline.currentTime, o = e.options && e.options.delay ? ln(e.options.delay) : 0;
        e.steps.forEach(s => {
            let a = n.createSubContext(e.options);
            o && a.delayNextStep(o), ot(this, s, a), i = Math.max(i, a.currentTimeline.currentTime), r.push(a.currentTimeline)
        }), r.forEach(s => n.currentTimeline.mergeTimelineCollectedStyles(s)), n.transformIntoNewTimeline(i), n.previousNode = e
    }

    _visitTiming(e, n) {
        if (e.dynamic) {
            let r = e.strValue, i = n.params ? mo(r, n.params, n.errors) : r;
            return Ra(i, n.errors)
        } else return {duration: e.duration, delay: e.delay, easing: e.easing}
    }

    visitAnimate(e, n) {
        let r = n.currentAnimateTimings = this._visitTiming(e.timings, n), i = n.currentTimeline;
        r.delay && (n.incrementTime(r.delay), i.snapshotCurrentStyles());
        let o = e.style;
        o.type == U.Keyframes ? this.visitKeyframes(o, n) : (n.incrementTime(r.duration), this.visitStyle(o, n), i.applyStylesToKeyframe()), n.currentAnimateTimings = null, n.previousNode = e
    }

    visitStyle(e, n) {
        let r = n.currentTimeline, i = n.currentAnimateTimings;
        !i && r.hasCurrentStyleProperties() && r.forwardFrame();
        let o = i && i.easing || e.easing;
        e.isEmptyStep ? r.applyEmptyStep(o) : r.setStyles(e.styles, o, n.errors, n.options), n.previousNode = e
    }

    visitKeyframes(e, n) {
        let r = n.currentAnimateTimings, i = n.currentTimeline.duration, o = r.duration,
            a = n.createSubContext().currentTimeline;
        a.easing = r.easing, e.styles.forEach(c => {
            let l = c.offset || 0;
            a.forwardTime(l * o), a.setStyles(c.styles, c.easing, n.errors, n.options), a.applyStylesToKeyframe()
        }), n.currentTimeline.mergeTimelineCollectedStyles(a), n.transformIntoNewTimeline(i + o), n.previousNode = e
    }

    visitQuery(e, n) {
        let r = n.currentTimeline.currentTime, i = e.options || {}, o = i.delay ? ln(i.delay) : 0;
        o && (n.previousNode.type === U.Style || r == 0 && n.currentTimeline.hasCurrentStyleProperties()) && (n.currentTimeline.snapshotCurrentStyles(), n.previousNode = Fa);
        let s = r, a = n.invokeQuery(e.selector, e.originalSelector, e.limit, e.includeSelf, !!i.optional, n.errors);
        n.currentQueryTotal = a.length;
        let c = null;
        a.forEach((l, u) => {
            n.currentQueryIndex = u;
            let d = n.createSubContext(e.options, l);
            o && d.delayNextStep(o), l === n.element && (c = d.currentTimeline), ot(this, e.animation, d), d.currentTimeline.applyStylesToKeyframe();
            let h = d.currentTimeline.currentTime;
            s = Math.max(s, h)
        }), n.currentQueryIndex = 0, n.currentQueryTotal = 0, n.transformIntoNewTimeline(s), c && (n.currentTimeline.mergeTimelineCollectedStyles(c), n.currentTimeline.snapshotCurrentStyles()), n.previousNode = e
    }

    visitStagger(e, n) {
        let r = n.parentContext, i = n.currentTimeline, o = e.timings, s = Math.abs(o.duration),
            a = s * (n.currentQueryTotal - 1), c = s * n.currentQueryIndex;
        switch (o.duration < 0 ? "reverse" : o.easing) {
            case"reverse":
                c = a - c;
                break;
            case"full":
                c = r.currentStaggerTime;
                break
        }
        let u = n.currentTimeline;
        c && u.delayNextStep(c);
        let d = u.currentTime;
        ot(this, e.animation, n), n.previousNode = e, r.currentStaggerTime = i.currentTime - d + (i.startTime - r.currentTimeline.startTime)
    }
}, Fa = {}, Pd = class t {
    constructor(e, n, r, i, o, s, a, c) {
        this._driver = e, this.element = n, this.subInstructions = r, this._enterClassName = i, this._leaveClassName = o, this.errors = s, this.timelines = a, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = Fa, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = c || new La(this._driver, n, 0), a.push(this.currentTimeline)
    }

    get params() {
        return this.options.params
    }

    updateOptions(e, n) {
        if (!e) return;
        let r = e, i = this.options;
        r.duration != null && (i.duration = ln(r.duration)), r.delay != null && (i.delay = ln(r.delay));
        let o = r.params;
        if (o) {
            let s = i.params;
            s || (s = this.options.params = {}), Object.keys(o).forEach(a => {
                (!n || !s.hasOwnProperty(a)) && (s[a] = mo(o[a], s, this.errors))
            })
        }
    }

    _copyOptions() {
        let e = {};
        if (this.options) {
            let n = this.options.params;
            if (n) {
                let r = e.params = {};
                Object.keys(n).forEach(i => {
                    r[i] = n[i]
                })
            }
        }
        return e
    }

    createSubContext(e = null, n, r) {
        let i = n || this.element,
            o = new t(this._driver, i, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(i, r || 0));
        return o.previousNode = this.previousNode, o.currentAnimateTimings = this.currentAnimateTimings, o.options = this._copyOptions(), o.updateOptions(e), o.currentQueryIndex = this.currentQueryIndex, o.currentQueryTotal = this.currentQueryTotal, o.parentContext = this, this.subContextCount++, o
    }

    transformIntoNewTimeline(e) {
        return this.previousNode = Fa, this.currentTimeline = this.currentTimeline.fork(this.element, e), this.timelines.push(this.currentTimeline), this.currentTimeline
    }

    appendInstructionToTimeline(e, n, r) {
        let i = {duration: n ?? e.duration, delay: this.currentTimeline.currentTime + (r ?? 0) + e.delay, easing: ""},
            o = new Fd(this._driver, e.element, e.keyframes, e.preStyleProps, e.postStyleProps, i, e.stretchStartingKeyframe);
        return this.timelines.push(o), i
    }

    incrementTime(e) {
        this.currentTimeline.forwardTime(this.currentTimeline.duration + e)
    }

    delayNextStep(e) {
        e > 0 && this.currentTimeline.delayNextStep(e)
    }

    invokeQuery(e, n, r, i, o, s) {
        let a = [];
        if (i && a.push(this.element), e.length > 0) {
            e = e.replace(NS, "." + this._enterClassName), e = e.replace(RS, "." + this._leaveClassName);
            let c = r != 1, l = this._driver.query(this.element, e, c);
            r !== 0 && (l = r < 0 ? l.slice(l.length + r, l.length) : l.slice(0, r)), a.push(...l)
        }
        return !o && a.length == 0 && s.push(q1(n)), a
    }
}, La = class t {
    constructor(e, n, r, i) {
        this._driver = e, this.element = n, this.startTime = r, this._elementTimelineStylesLookup = i, this.duration = 0, this.easing = null, this._previousKeyframe = new Map, this._currentKeyframe = new Map, this._keyframes = new Map, this._styleSummary = new Map, this._localTimelineStyles = new Map, this._pendingStyles = new Map, this._backFill = new Map, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(n), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(n, this._localTimelineStyles)), this._loadKeyframe()
    }

    containsAnimation() {
        switch (this._keyframes.size) {
            case 0:
                return !1;
            case 1:
                return this.hasCurrentStyleProperties();
            default:
                return !0
        }
    }

    hasCurrentStyleProperties() {
        return this._currentKeyframe.size > 0
    }

    get currentTime() {
        return this.startTime + this.duration
    }

    delayNextStep(e) {
        let n = this._keyframes.size === 1 && this._pendingStyles.size;
        this.duration || n ? (this.forwardTime(this.currentTime + e), n && this.snapshotCurrentStyles()) : this.startTime += e
    }

    fork(e, n) {
        return this.applyStylesToKeyframe(), new t(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup)
    }

    _loadKeyframe() {
        this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = new Map, this._keyframes.set(this.duration, this._currentKeyframe))
    }

    forwardFrame() {
        this.duration += xS, this._loadKeyframe()
    }

    forwardTime(e) {
        this.applyStylesToKeyframe(), this.duration = e, this._loadKeyframe()
    }

    _updateStyle(e, n) {
        this._localTimelineStyles.set(e, n), this._globalTimelineStyles.set(e, n), this._styleSummary.set(e, {
            time: this.currentTime,
            value: n
        })
    }

    allowOnlyTimelineStyles() {
        return this._currentEmptyStepKeyframe !== this._currentKeyframe
    }

    applyEmptyStep(e) {
        e && this._previousKeyframe.set("easing", e);
        for (let [n, r] of this._globalTimelineStyles) this._backFill.set(n, r || Bt), this._currentKeyframe.set(n, Bt);
        this._currentEmptyStepKeyframe = this._currentKeyframe
    }

    setStyles(e, n, r, i) {
        n && this._previousKeyframe.set("easing", n);
        let o = i && i.params || {}, s = OS(e, this._globalTimelineStyles);
        for (let [a, c] of s) {
            let l = mo(c, o, r);
            this._pendingStyles.set(a, l), this._localTimelineStyles.has(a) || this._backFill.set(a, this._globalTimelineStyles.get(a) ?? Bt), this._updateStyle(a, l)
        }
    }

    applyStylesToKeyframe() {
        this._pendingStyles.size != 0 && (this._pendingStyles.forEach((e, n) => {
            this._currentKeyframe.set(n, e)
        }), this._pendingStyles.clear(), this._localTimelineStyles.forEach((e, n) => {
            this._currentKeyframe.has(n) || this._currentKeyframe.set(n, e)
        }))
    }

    snapshotCurrentStyles() {
        for (let [e, n] of this._localTimelineStyles) this._pendingStyles.set(e, n), this._updateStyle(e, n)
    }

    getFinalKeyframe() {
        return this._keyframes.get(this.duration)
    }

    get properties() {
        let e = [];
        for (let n in this._currentKeyframe) e.push(n);
        return e
    }

    mergeTimelineCollectedStyles(e) {
        e._styleSummary.forEach((n, r) => {
            let i = this._styleSummary.get(r);
            (!i || n.time > i.time) && this._updateStyle(r, n.value)
        })
    }

    buildKeyframes() {
        this.applyStylesToKeyframe();
        let e = new Set, n = new Set, r = this._keyframes.size === 1 && this.duration === 0, i = [];
        this._keyframes.forEach((a, c) => {
            let l = new Map([...this._backFill, ...a]);
            l.forEach((u, d) => {
                u === Sa ? e.add(d) : u === Bt && n.add(d)
            }), r || l.set("offset", c / this.duration), i.push(l)
        });
        let o = [...e.values()], s = [...n.values()];
        if (r) {
            let a = i[0], c = new Map(a);
            a.set("offset", 0), c.set("offset", 1), i = [a, c]
        }
        return Kd(this.element, i, o, s, this.duration, this.startTime, this.easing, !1)
    }
}, Fd = class extends La {
    constructor(e, n, r, i, o, s, a = !1) {
        super(e, n, s.delay), this.keyframes = r, this.preStyleProps = i, this.postStyleProps = o, this._stretchStartingKeyframe = a, this.timings = {
            duration: s.duration,
            delay: s.delay,
            easing: s.easing
        }
    }

    containsAnimation() {
        return this.keyframes.length > 1
    }

    buildKeyframes() {
        let e = this.keyframes, {delay: n, duration: r, easing: i} = this.timings;
        if (this._stretchStartingKeyframe && n) {
            let o = [], s = r + n, a = n / s, c = new Map(e[0]);
            c.set("offset", 0), o.push(c);
            let l = new Map(e[0]);
            l.set("offset", qy(a)), o.push(l);
            let u = e.length - 1;
            for (let d = 1; d <= u; d++) {
                let h = new Map(e[d]), f = h.get("offset"), m = n + f * r;
                h.set("offset", qy(m / s)), o.push(h)
            }
            r = s, n = 0, i = "", e = o
        }
        return Kd(this.element, e, this.preStyleProps, this.postStyleProps, r, n, i, !0)
    }
};

function qy(t, e = 3) {
    let n = Math.pow(10, e - 1);
    return Math.round(t * n) / n
}

function OS(t, e) {
    let n = new Map, r;
    return t.forEach(i => {
        if (i === "*") {
            r ??= e.keys();
            for (let o of r) n.set(o, Bt)
        } else for (let [o, s] of i) n.set(o, s)
    }), n
}

function Zy(t, e, n, r, i, o, s, a, c, l, u, d, h) {
    return {
        type: 0,
        element: t,
        triggerName: e,
        isRemovalTransition: i,
        fromState: n,
        fromStyles: o,
        toState: r,
        toStyles: s,
        timelines: a,
        queriedElements: c,
        preStyleProps: l,
        postStyleProps: u,
        totalTime: d,
        errors: h
    }
}

var Cd = {}, ja = class {
    constructor(e, n, r) {
        this._triggerName = e, this.ast = n, this._stateStyles = r
    }

    match(e, n, r, i) {
        return PS(this.ast.matchers, e, n, r, i)
    }

    buildStyles(e, n, r) {
        let i = this._stateStyles.get("*");
        return e !== void 0 && (i = this._stateStyles.get(e?.toString()) || i), i ? i.buildStyles(n, r) : new Map
    }

    build(e, n, r, i, o, s, a, c, l, u) {
        let d = [], h = this.ast.options && this.ast.options.params || Cd, f = a && a.params || Cd,
            m = this.buildStyles(r, f, d), v = c && c.params || Cd, C = this.buildStyles(i, v, d), N = new Set,
            $ = new Map, z = new Map, ee = i === "void", Ae = {params: uv(v, h), delay: this.ast.options?.delay},
            le = u ? [] : lv(e, n, this.ast.animation, o, s, m, C, Ae, l, d), ue = 0;
        return le.forEach(be => {
            ue = Math.max(be.duration + be.delay, ue)
        }), d.length ? Zy(n, this._triggerName, r, i, ee, m, C, [], [], $, z, ue, d) : (le.forEach(be => {
            let yt = be.element, Mt = st($, yt, new Set);
            be.preStyleProps.forEach($t => Mt.add($t));
            let Do = st(z, yt, new Set);
            be.postStyleProps.forEach($t => Do.add($t)), yt !== n && N.add(yt)
        }), Zy(n, this._triggerName, r, i, ee, m, C, le, [...N.values()], $, z, ue))
    }
};

function PS(t, e, n, r, i) {
    return t.some(o => o(e, n, r, i))
}

function uv(t, e) {
    let n = S({}, e);
    return Object.entries(t).forEach(([r, i]) => {
        i != null && (n[r] = i)
    }), n
}

var Ld = class {
    constructor(e, n, r) {
        this.styles = e, this.defaultParams = n, this.normalizer = r
    }

    buildStyles(e, n) {
        let r = new Map, i = uv(e, this.defaultParams);
        return this.styles.styles.forEach(o => {
            typeof o != "string" && o.forEach((s, a) => {
                s && (s = mo(s, i, n));
                let c = this.normalizer.normalizePropertyName(a, n);
                s = this.normalizer.normalizeStyleValue(a, c, s, n), r.set(a, s)
            })
        }), r
    }
};

function FS(t, e, n) {
    return new jd(t, e, n)
}

var jd = class {
    constructor(e, n, r) {
        this.name = e, this.ast = n, this._normalizer = r, this.transitionFactories = [], this.states = new Map, n.states.forEach(i => {
            let o = i.options && i.options.params || {};
            this.states.set(i.name, new Ld(i.style, o, r))
        }), Qy(this.states, "true", "1"), Qy(this.states, "false", "0"), n.transitions.forEach(i => {
            this.transitionFactories.push(new ja(e, i, this.states))
        }), this.fallbackTransition = LS(e, this.states, this._normalizer)
    }

    get containsQueries() {
        return this.ast.queryCount > 0
    }

    matchTransition(e, n, r, i) {
        return this.transitionFactories.find(s => s.match(e, n, r, i)) || null
    }

    matchStyles(e, n, r) {
        return this.fallbackTransition.buildStyles(e, n, r)
    }
};

function LS(t, e, n) {
    let r = [(s, a) => !0], i = {type: U.Sequence, steps: [], options: null},
        o = {type: U.Transition, animation: i, matchers: r, options: null, queryCount: 0, depCount: 0};
    return new ja(t, o, e)
}

function Qy(t, e, n) {
    t.has(e) ? t.has(n) || t.set(n, t.get(e)) : t.has(n) && t.set(e, t.get(n))
}

var jS = new yo, Vd = class {
        constructor(e, n, r) {
            this.bodyNode = e, this._driver = n, this._normalizer = r, this._animations = new Map, this._playersById = new Map, this.players = []
        }

        register(e, n) {
            let r = [], i = [], o = cv(this._driver, n, r, i);
            if (r.length) throw J1(r);
            i.length && void 0, this._animations.set(e, o)
        }

        _buildPlayer(e, n, r) {
            let i = e.element, o = tv(this._normalizer, e.keyframes, n, r);
            return this._driver.animate(i, o, e.duration, e.delay, e.easing, [], !0)
        }

        create(e, n, r = {}) {
            let i = [], o = this._animations.get(e), s, a = new Map;
            if (o ? (s = lv(this._driver, n, o, ov, Md, new Map, new Map, r, jS, i), s.forEach(u => {
                let d = st(a, u.element, new Map);
                u.postStyleProps.forEach(h => d.set(h, null))
            })) : (i.push(X1()), s = []), i.length) throw eS(i);
            a.forEach((u, d) => {
                u.forEach((h, f) => {
                    u.set(f, this._driver.computeStyle(d, f, Bt))
                })
            });
            let c = s.map(u => {
                let d = a.get(u.element);
                return this._buildPlayer(u, new Map, d)
            }), l = Tn(c);
            return this._playersById.set(e, l), l.onDestroy(() => this.destroy(e)), this.players.push(l), l
        }

        destroy(e) {
            let n = this._getPlayer(e);
            n.destroy(), this._playersById.delete(e);
            let r = this.players.indexOf(n);
            r >= 0 && this.players.splice(r, 1)
        }

        _getPlayer(e) {
            let n = this._playersById.get(e);
            if (!n) throw tS(e);
            return n
        }

        listen(e, n, r, i) {
            let o = Wd(n, "", "", "");
            return zd(this._getPlayer(e), r, o, i), () => {
            }
        }

        command(e, n, r, i) {
            if (r == "register") {
                this.register(e, i[0]);
                return
            }
            if (r == "create") {
                let s = i[0] || {};
                this.create(e, n, s);
                return
            }
            let o = this._getPlayer(e);
            switch (r) {
                case"play":
                    o.play();
                    break;
                case"pause":
                    o.pause();
                    break;
                case"reset":
                    o.reset();
                    break;
                case"restart":
                    o.restart();
                    break;
                case"finish":
                    o.finish();
                    break;
                case"init":
                    o.init();
                    break;
                case"setPosition":
                    o.setPosition(parseFloat(i[0]));
                    break;
                case"destroy":
                    this.destroy(e);
                    break
            }
        }
    }, Ky = "ng-animate-queued", VS = ".ng-animate-queued", _d = "ng-animate-disabled", BS = ".ng-animate-disabled",
    US = "ng-star-inserted", $S = ".ng-star-inserted", HS = [],
    dv = {namespaceId: "", setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1},
    zS = {namespaceId: "", setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0},
    Tt = "__ng_removed", vo = class {
        get params() {
            return this.options.params
        }

        constructor(e, n = "") {
            this.namespaceId = n;
            let r = e && e.hasOwnProperty("value"), i = r ? e.value : e;
            if (this.value = GS(i), r) {
                let o = e, {value: s} = o, a = Io(o, ["value"]);
                this.options = a
            } else this.options = {};
            this.options.params || (this.options.params = {})
        }

        absorbOptions(e) {
            let n = e.params;
            if (n) {
                let r = this.options.params;
                Object.keys(n).forEach(i => {
                    r[i] == null && (r[i] = n[i])
                })
            }
        }
    }, go = "void", Sd = new vo(go), Bd = class {
        constructor(e, n, r) {
            this.id = e, this.hostElement = n, this._engine = r, this.players = [], this._triggers = new Map, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + e, mt(n, this._hostClassName)
        }

        listen(e, n, r, i) {
            if (!this._triggers.has(n)) throw nS(r, n);
            if (r == null || r.length == 0) throw rS(n);
            if (!qS(r)) throw iS(r, n);
            let o = st(this._elementListeners, e, []), s = {name: n, phase: r, callback: i};
            o.push(s);
            let a = st(this._engine.statesByElement, e, new Map);
            return a.has(n) || (mt(e, Ta), mt(e, Ta + "-" + n), a.set(n, Sd)), () => {
                this._engine.afterFlush(() => {
                    let c = o.indexOf(s);
                    c >= 0 && o.splice(c, 1), this._triggers.has(n) || a.delete(n)
                })
            }
        }

        register(e, n) {
            return this._triggers.has(e) ? !1 : (this._triggers.set(e, n), !0)
        }

        _getTrigger(e) {
            let n = this._triggers.get(e);
            if (!n) throw oS(e);
            return n
        }

        trigger(e, n, r, i = !0) {
            let o = this._getTrigger(n), s = new bo(this.id, n, e), a = this._engine.statesByElement.get(e);
            a || (mt(e, Ta), mt(e, Ta + "-" + n), this._engine.statesByElement.set(e, a = new Map));
            let c = a.get(n), l = new vo(r, this.id);
            if (!(r && r.hasOwnProperty("value")) && c && l.absorbOptions(c.options), a.set(n, l), c || (c = Sd), !(l.value === go) && c.value === l.value) {
                if (!KS(c.params, l.params)) {
                    let v = [], C = o.matchStyles(c.value, c.params, v), N = o.matchStyles(l.value, l.params, v);
                    v.length ? this._engine.reportError(v) : this._engine.afterFlush(() => {
                        Jn(e, C), Ut(e, N)
                    })
                }
                return
            }
            let h = st(this._engine.playersByElement, e, []);
            h.forEach(v => {
                v.namespaceId == this.id && v.triggerName == n && v.queued && v.destroy()
            });
            let f = o.matchTransition(c.value, l.value, e, l.params), m = !1;
            if (!f) {
                if (!i) return;
                f = o.fallbackTransition, m = !0
            }
            return this._engine.totalQueuedPlayers++, this._queue.push({
                element: e,
                triggerName: n,
                transition: f,
                fromState: c,
                toState: l,
                player: s,
                isFallbackTransition: m
            }), m || (mt(e, Ky), s.onStart(() => {
                Xr(e, Ky)
            })), s.onDone(() => {
                let v = this.players.indexOf(s);
                v >= 0 && this.players.splice(v, 1);
                let C = this._engine.playersByElement.get(e);
                if (C) {
                    let N = C.indexOf(s);
                    N >= 0 && C.splice(N, 1)
                }
            }), this.players.push(s), h.push(s), s
        }

        deregister(e) {
            this._triggers.delete(e), this._engine.statesByElement.forEach(n => n.delete(e)), this._elementListeners.forEach((n, r) => {
                this._elementListeners.set(r, n.filter(i => i.name != e))
            })
        }

        clearElementCache(e) {
            this._engine.statesByElement.delete(e), this._elementListeners.delete(e);
            let n = this._engine.playersByElement.get(e);
            n && (n.forEach(r => r.destroy()), this._engine.playersByElement.delete(e))
        }

        _signalRemovalForInnerTriggers(e, n) {
            let r = this._engine.driver.query(e, ka, !0);
            r.forEach(i => {
                if (i[Tt]) return;
                let o = this._engine.fetchNamespacesByElement(i);
                o.size ? o.forEach(s => s.triggerLeaveAnimation(i, n, !1, !0)) : this.clearElementCache(i)
            }), this._engine.afterFlushAnimationsDone(() => r.forEach(i => this.clearElementCache(i)))
        }

        triggerLeaveAnimation(e, n, r, i) {
            let o = this._engine.statesByElement.get(e), s = new Map;
            if (o) {
                let a = [];
                if (o.forEach((c, l) => {
                    if (s.set(l, c.value), this._triggers.has(l)) {
                        let u = this.trigger(e, l, go, i);
                        u && a.push(u)
                    }
                }), a.length) return this._engine.markElementAsRemoved(this.id, e, !0, n, s), r && Tn(a).onDone(() => this._engine.processLeaveNode(e)), !0
            }
            return !1
        }

        prepareLeaveAnimationListeners(e) {
            let n = this._elementListeners.get(e), r = this._engine.statesByElement.get(e);
            if (n && r) {
                let i = new Set;
                n.forEach(o => {
                    let s = o.name;
                    if (i.has(s)) return;
                    i.add(s);
                    let c = this._triggers.get(s).fallbackTransition, l = r.get(s) || Sd, u = new vo(go),
                        d = new bo(this.id, s, e);
                    this._engine.totalQueuedPlayers++, this._queue.push({
                        element: e,
                        triggerName: s,
                        transition: c,
                        fromState: l,
                        toState: u,
                        player: d,
                        isFallbackTransition: !0
                    })
                })
            }
        }

        removeNode(e, n) {
            let r = this._engine;
            if (e.childElementCount && this._signalRemovalForInnerTriggers(e, n), this.triggerLeaveAnimation(e, n, !0)) return;
            let i = !1;
            if (r.totalAnimations) {
                let o = r.players.length ? r.playersByQueriedElement.get(e) : [];
                if (o && o.length) i = !0; else {
                    let s = e;
                    for (; s = s.parentNode;) if (r.statesByElement.get(s)) {
                        i = !0;
                        break
                    }
                }
            }
            if (this.prepareLeaveAnimationListeners(e), i) r.markElementAsRemoved(this.id, e, !1, n); else {
                let o = e[Tt];
                (!o || o === dv) && (r.afterFlush(() => this.clearElementCache(e)), r.destroyInnerAnimations(e), r._onRemovalComplete(e, n))
            }
        }

        insertNode(e, n) {
            mt(e, this._hostClassName)
        }

        drainQueuedTransitions(e) {
            let n = [];
            return this._queue.forEach(r => {
                let i = r.player;
                if (i.destroyed) return;
                let o = r.element, s = this._elementListeners.get(o);
                s && s.forEach(a => {
                    if (a.name == r.triggerName) {
                        let c = Wd(o, r.triggerName, r.fromState.value, r.toState.value);
                        c._data = e, zd(r.player, a.phase, c, a.callback)
                    }
                }), i.markedForDestroy ? this._engine.afterFlush(() => {
                    i.destroy()
                }) : n.push(r)
            }), this._queue = [], n.sort((r, i) => {
                let o = r.transition.ast.depCount, s = i.transition.ast.depCount;
                return o == 0 || s == 0 ? o - s : this._engine.driver.containsElement(r.element, i.element) ? 1 : -1
            })
        }

        destroy(e) {
            this.players.forEach(n => n.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, e)
        }
    }, Ud = class {
        _onRemovalComplete(e, n) {
            this.onRemovalComplete(e, n)
        }

        constructor(e, n, r) {
            this.bodyNode = e, this.driver = n, this._normalizer = r, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = (i, o) => {
            }
        }

        get queuedPlayers() {
            let e = [];
            return this._namespaceList.forEach(n => {
                n.players.forEach(r => {
                    r.queued && e.push(r)
                })
            }), e
        }

        createNamespace(e, n) {
            let r = new Bd(e, n, this);
            return this.bodyNode && this.driver.containsElement(this.bodyNode, n) ? this._balanceNamespaceList(r, n) : (this.newHostElements.set(n, r), this.collectEnterElement(n)), this._namespaceLookup[e] = r
        }

        _balanceNamespaceList(e, n) {
            let r = this._namespaceList, i = this.namespacesByHostElement;
            if (r.length - 1 >= 0) {
                let s = !1, a = this.driver.getParentElement(n);
                for (; a;) {
                    let c = i.get(a);
                    if (c) {
                        let l = r.indexOf(c);
                        r.splice(l + 1, 0, e), s = !0;
                        break
                    }
                    a = this.driver.getParentElement(a)
                }
                s || r.unshift(e)
            } else r.push(e);
            return i.set(n, e), e
        }

        register(e, n) {
            let r = this._namespaceLookup[e];
            return r || (r = this.createNamespace(e, n)), r
        }

        registerTrigger(e, n, r) {
            let i = this._namespaceLookup[e];
            i && i.register(n, r) && this.totalAnimations++
        }

        destroy(e, n) {
            e && (this.afterFlush(() => {
            }), this.afterFlushAnimationsDone(() => {
                let r = this._fetchNamespace(e);
                this.namespacesByHostElement.delete(r.hostElement);
                let i = this._namespaceList.indexOf(r);
                i >= 0 && this._namespaceList.splice(i, 1), r.destroy(n), delete this._namespaceLookup[e]
            }))
        }

        _fetchNamespace(e) {
            return this._namespaceLookup[e]
        }

        fetchNamespacesByElement(e) {
            let n = new Set, r = this.statesByElement.get(e);
            if (r) {
                for (let i of r.values()) if (i.namespaceId) {
                    let o = this._fetchNamespace(i.namespaceId);
                    o && n.add(o)
                }
            }
            return n
        }

        trigger(e, n, r, i) {
            if (Aa(n)) {
                let o = this._fetchNamespace(e);
                if (o) return o.trigger(n, r, i), !0
            }
            return !1
        }

        insertNode(e, n, r, i) {
            if (!Aa(n)) return;
            let o = n[Tt];
            if (o && o.setForRemoval) {
                o.setForRemoval = !1, o.setForMove = !0;
                let s = this.collectedLeaveElements.indexOf(n);
                s >= 0 && this.collectedLeaveElements.splice(s, 1)
            }
            if (e) {
                let s = this._fetchNamespace(e);
                s && s.insertNode(n, r)
            }
            i && this.collectEnterElement(n)
        }

        collectEnterElement(e) {
            this.collectedEnterElements.push(e)
        }

        markElementAsDisabled(e, n) {
            n ? this.disabledNodes.has(e) || (this.disabledNodes.add(e), mt(e, _d)) : this.disabledNodes.has(e) && (this.disabledNodes.delete(e), Xr(e, _d))
        }

        removeNode(e, n, r) {
            if (Aa(n)) {
                let i = e ? this._fetchNamespace(e) : null;
                i ? i.removeNode(n, r) : this.markElementAsRemoved(e, n, !1, r);
                let o = this.namespacesByHostElement.get(n);
                o && o.id !== e && o.removeNode(n, r)
            } else this._onRemovalComplete(n, r)
        }

        markElementAsRemoved(e, n, r, i, o) {
            this.collectedLeaveElements.push(n), n[Tt] = {
                namespaceId: e,
                setForRemoval: i,
                hasAnimation: r,
                removedBeforeQueried: !1,
                previousTriggersValues: o
            }
        }

        listen(e, n, r, i, o) {
            return Aa(n) ? this._fetchNamespace(e).listen(n, r, i, o) : () => {
            }
        }

        _buildInstruction(e, n, r, i, o) {
            return e.transition.build(this.driver, e.element, e.fromState.value, e.toState.value, r, i, e.fromState.options, e.toState.options, n, o)
        }

        destroyInnerAnimations(e) {
            let n = this.driver.query(e, ka, !0);
            n.forEach(r => this.destroyActiveAnimationsForElement(r)), this.playersByQueriedElement.size != 0 && (n = this.driver.query(e, xd, !0), n.forEach(r => this.finishActiveQueriedAnimationOnElement(r)))
        }

        destroyActiveAnimationsForElement(e) {
            let n = this.playersByElement.get(e);
            n && n.forEach(r => {
                r.queued ? r.markedForDestroy = !0 : r.destroy()
            })
        }

        finishActiveQueriedAnimationOnElement(e) {
            let n = this.playersByQueriedElement.get(e);
            n && n.forEach(r => r.finish())
        }

        whenRenderingDone() {
            return new Promise(e => {
                if (this.players.length) return Tn(this.players).onDone(() => e());
                e()
            })
        }

        processLeaveNode(e) {
            let n = e[Tt];
            if (n && n.setForRemoval) {
                if (e[Tt] = dv, n.namespaceId) {
                    this.destroyInnerAnimations(e);
                    let r = this._fetchNamespace(n.namespaceId);
                    r && r.clearElementCache(e)
                }
                this._onRemovalComplete(e, n.setForRemoval)
            }
            e.classList?.contains(_d) && this.markElementAsDisabled(e, !1), this.driver.query(e, BS, !0).forEach(r => {
                this.markElementAsDisabled(r, !1)
            })
        }

        flush(e = -1) {
            let n = [];
            if (this.newHostElements.size && (this.newHostElements.forEach((r, i) => this._balanceNamespaceList(r, i)), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length) for (let r = 0; r < this.collectedEnterElements.length; r++) {
                let i = this.collectedEnterElements[r];
                mt(i, US)
            }
            if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                let r = [];
                try {
                    n = this._flushAnimations(r, e)
                } finally {
                    for (let i = 0; i < r.length; i++) r[i]()
                }
            } else for (let r = 0; r < this.collectedLeaveElements.length; r++) {
                let i = this.collectedLeaveElements[r];
                this.processLeaveNode(i)
            }
            if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(r => r()), this._flushFns = [], this._whenQuietFns.length) {
                let r = this._whenQuietFns;
                this._whenQuietFns = [], n.length ? Tn(n).onDone(() => {
                    r.forEach(i => i())
                }) : r.forEach(i => i())
            }
        }

        reportError(e) {
            throw sS(e)
        }

        _flushAnimations(e, n) {
            let r = new yo, i = [], o = new Map, s = [], a = new Map, c = new Map, l = new Map, u = new Set;
            this.disabledNodes.forEach(_ => {
                u.add(_);
                let A = this.driver.query(_, VS, !0);
                for (let R = 0; R < A.length; R++) u.add(A[R])
            });
            let d = this.bodyNode, h = Array.from(this.statesByElement.keys()), f = Xy(h, this.collectedEnterElements),
                m = new Map, v = 0;
            f.forEach((_, A) => {
                let R = ov + v++;
                m.set(A, R), _.forEach(Q => mt(Q, R))
            });
            let C = [], N = new Set, $ = new Set;
            for (let _ = 0; _ < this.collectedLeaveElements.length; _++) {
                let A = this.collectedLeaveElements[_], R = A[Tt];
                R && R.setForRemoval && (C.push(A), N.add(A), R.hasAnimation ? this.driver.query(A, $S, !0).forEach(Q => N.add(Q)) : $.add(A))
            }
            let z = new Map, ee = Xy(h, Array.from(N));
            ee.forEach((_, A) => {
                let R = Md + v++;
                z.set(A, R), _.forEach(Q => mt(Q, R))
            }), e.push(() => {
                f.forEach((_, A) => {
                    let R = m.get(A);
                    _.forEach(Q => Xr(Q, R))
                }), ee.forEach((_, A) => {
                    let R = z.get(A);
                    _.forEach(Q => Xr(Q, R))
                }), C.forEach(_ => {
                    this.processLeaveNode(_)
                })
            });
            let Ae = [], le = [];
            for (let _ = this._namespaceList.length - 1; _ >= 0; _--) this._namespaceList[_].drainQueuedTransitions(n).forEach(R => {
                let Q = R.player, ge = R.element;
                if (Ae.push(Q), this.collectedEnterElements.length) {
                    let Se = ge[Tt];
                    if (Se && Se.setForMove) {
                        if (Se.previousTriggersValues && Se.previousTriggersValues.has(R.triggerName)) {
                            let xt = Se.previousTriggersValues.get(R.triggerName), He = this.statesByElement.get(R.element);
                            if (He && He.has(R.triggerName)) {
                                let Ue = He.get(R.triggerName);
                                Ue.value = xt, He.set(R.triggerName, Ue)
                            }
                        }
                        Q.destroy();
                        return
                    }
                }
                let Qe = !d || !this.driver.containsElement(d, ge), M = z.get(ge), Be = m.get(ge),
                    ae = this._buildInstruction(R, r, Be, M, Qe);
                if (ae.errors && ae.errors.length) {
                    le.push(ae);
                    return
                }
                if (Qe) {
                    Q.onStart(() => Jn(ge, ae.fromStyles)), Q.onDestroy(() => Ut(ge, ae.toStyles)), i.push(Q);
                    return
                }
                if (R.isFallbackTransition) {
                    Q.onStart(() => Jn(ge, ae.fromStyles)), Q.onDestroy(() => Ut(ge, ae.toStyles)), i.push(Q);
                    return
                }
                let de = [];
                ae.timelines.forEach(Se => {
                    Se.stretchStartingKeyframe = !0, this.disabledNodes.has(Se.element) || de.push(Se)
                }), ae.timelines = de, r.append(ge, ae.timelines);
                let Ha = {instruction: ae, player: Q, element: ge};
                s.push(Ha), ae.queriedElements.forEach(Se => st(a, Se, []).push(Q)), ae.preStyleProps.forEach((Se, xt) => {
                    if (Se.size) {
                        let He = c.get(xt);
                        He || c.set(xt, He = new Set), Se.forEach((Ue, nr) => He.add(nr))
                    }
                }), ae.postStyleProps.forEach((Se, xt) => {
                    let He = l.get(xt);
                    He || l.set(xt, He = new Set), Se.forEach((Ue, nr) => He.add(nr))
                })
            });
            if (le.length) {
                let _ = [];
                le.forEach(A => {
                    _.push(aS(A.triggerName, A.errors))
                }), Ae.forEach(A => A.destroy()), this.reportError(_)
            }
            let ue = new Map, be = new Map;
            s.forEach(_ => {
                let A = _.element;
                r.has(A) && (be.set(A, A), this._beforeAnimationBuild(_.player.namespaceId, _.instruction, ue))
            }), i.forEach(_ => {
                let A = _.element;
                this._getPreviousPlayers(A, !1, _.namespaceId, _.triggerName, null).forEach(Q => {
                    st(ue, A, []).push(Q), Q.destroy()
                })
            });
            let yt = C.filter(_ => ev(_, c, l)), Mt = new Map;
            Jy(Mt, this.driver, $, l, Bt).forEach(_ => {
                ev(_, c, l) && yt.push(_)
            });
            let $t = new Map;
            f.forEach((_, A) => {
                Jy($t, this.driver, new Set(_), c, Sa)
            }), yt.forEach(_ => {
                let A = Mt.get(_), R = $t.get(_);
                Mt.set(_, new Map([...A?.entries() ?? [], ...R?.entries() ?? []]))
            });
            let ri = [], ii = [], tr = {};
            s.forEach(_ => {
                let {element: A, player: R, instruction: Q} = _;
                if (r.has(A)) {
                    if (u.has(A)) {
                        R.onDestroy(() => Ut(A, Q.toStyles)), R.disabled = !0, R.overrideTotalTime(Q.totalTime), i.push(R);
                        return
                    }
                    let ge = tr;
                    if (be.size > 1) {
                        let M = A, Be = [];
                        for (; M = M.parentNode;) {
                            let ae = be.get(M);
                            if (ae) {
                                ge = ae;
                                break
                            }
                            Be.push(M)
                        }
                        Be.forEach(ae => be.set(ae, ge))
                    }
                    let Qe = this._buildAnimation(R.namespaceId, Q, ue, o, $t, Mt);
                    if (R.setRealPlayer(Qe), ge === tr) ri.push(R); else {
                        let M = this.playersByElement.get(ge);
                        M && M.length && (R.parentPlayer = Tn(M)), i.push(R)
                    }
                } else Jn(A, Q.fromStyles), R.onDestroy(() => Ut(A, Q.toStyles)), ii.push(R), u.has(A) && i.push(R)
            }), ii.forEach(_ => {
                let A = o.get(_.element);
                if (A && A.length) {
                    let R = Tn(A);
                    _.setRealPlayer(R)
                }
            }), i.forEach(_ => {
                _.parentPlayer ? _.syncPlayerEvents(_.parentPlayer) : _.destroy()
            });
            for (let _ = 0; _ < C.length; _++) {
                let A = C[_], R = A[Tt];
                if (Xr(A, Md), R && R.hasAnimation) continue;
                let Q = [];
                if (a.size) {
                    let Qe = a.get(A);
                    Qe && Qe.length && Q.push(...Qe);
                    let M = this.driver.query(A, xd, !0);
                    for (let Be = 0; Be < M.length; Be++) {
                        let ae = a.get(M[Be]);
                        ae && ae.length && Q.push(...ae)
                    }
                }
                let ge = Q.filter(Qe => !Qe.destroyed);
                ge.length ? ZS(this, A, ge) : this.processLeaveNode(A)
            }
            return C.length = 0, ri.forEach(_ => {
                this.players.push(_), _.onDone(() => {
                    _.destroy();
                    let A = this.players.indexOf(_);
                    this.players.splice(A, 1)
                }), _.play()
            }), ri
        }

        afterFlush(e) {
            this._flushFns.push(e)
        }

        afterFlushAnimationsDone(e) {
            this._whenQuietFns.push(e)
        }

        _getPreviousPlayers(e, n, r, i, o) {
            let s = [];
            if (n) {
                let a = this.playersByQueriedElement.get(e);
                a && (s = a)
            } else {
                let a = this.playersByElement.get(e);
                if (a) {
                    let c = !o || o == go;
                    a.forEach(l => {
                        l.queued || !c && l.triggerName != i || s.push(l)
                    })
                }
            }
            return (r || i) && (s = s.filter(a => !(r && r != a.namespaceId || i && i != a.triggerName))), s
        }

        _beforeAnimationBuild(e, n, r) {
            let i = n.triggerName, o = n.element, s = n.isRemovalTransition ? void 0 : e,
                a = n.isRemovalTransition ? void 0 : i;
            for (let c of n.timelines) {
                let l = c.element, u = l !== o, d = st(r, l, []);
                this._getPreviousPlayers(l, u, s, a, n.toState).forEach(f => {
                    let m = f.getRealPlayer();
                    m.beforeDestroy && m.beforeDestroy(), f.destroy(), d.push(f)
                })
            }
            Jn(o, n.fromStyles)
        }

        _buildAnimation(e, n, r, i, o, s) {
            let a = n.triggerName, c = n.element, l = [], u = new Set, d = new Set, h = n.timelines.map(m => {
                let v = m.element;
                u.add(v);
                let C = v[Tt];
                if (C && C.removedBeforeQueried) return new Cn(m.duration, m.delay);
                let N = v !== c, $ = QS((r.get(v) || HS).map(ue => ue.getRealPlayer())).filter(ue => {
                        let be = ue;
                        return be.element ? be.element === v : !1
                    }), z = o.get(v), ee = s.get(v), Ae = tv(this._normalizer, m.keyframes, z, ee),
                    le = this._buildPlayer(m, Ae, $);
                if (m.subTimeline && i && d.add(v), N) {
                    let ue = new bo(e, a, v);
                    ue.setRealPlayer(le), l.push(ue)
                }
                return le
            });
            l.forEach(m => {
                st(this.playersByQueriedElement, m.element, []).push(m), m.onDone(() => WS(this.playersByQueriedElement, m.element, m))
            }), u.forEach(m => mt(m, zy));
            let f = Tn(h);
            return f.onDestroy(() => {
                u.forEach(m => Xr(m, zy)), Ut(c, n.toStyles)
            }), d.forEach(m => {
                st(i, m, []).push(f)
            }), f
        }

        _buildPlayer(e, n, r) {
            return n.length > 0 ? this.driver.animate(e.element, n, e.duration, e.delay, e.easing, r) : new Cn(e.duration, e.delay)
        }
    }, bo = class {
        constructor(e, n, r) {
            this.namespaceId = e, this.triggerName = n, this.element = r, this._player = new Cn, this._containsRealPlayer = !1, this._queuedCallbacks = new Map, this.destroyed = !1, this.parentPlayer = null, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
        }

        setRealPlayer(e) {
            this._containsRealPlayer || (this._player = e, this._queuedCallbacks.forEach((n, r) => {
                n.forEach(i => zd(e, r, void 0, i))
            }), this._queuedCallbacks.clear(), this._containsRealPlayer = !0, this.overrideTotalTime(e.totalTime), this.queued = !1)
        }

        getRealPlayer() {
            return this._player
        }

        overrideTotalTime(e) {
            this.totalTime = e
        }

        syncPlayerEvents(e) {
            let n = this._player;
            n.triggerCallback && e.onStart(() => n.triggerCallback("start")), e.onDone(() => this.finish()), e.onDestroy(() => this.destroy())
        }

        _queueEvent(e, n) {
            st(this._queuedCallbacks, e, []).push(n)
        }

        onDone(e) {
            this.queued && this._queueEvent("done", e), this._player.onDone(e)
        }

        onStart(e) {
            this.queued && this._queueEvent("start", e), this._player.onStart(e)
        }

        onDestroy(e) {
            this.queued && this._queueEvent("destroy", e), this._player.onDestroy(e)
        }

        init() {
            this._player.init()
        }

        hasStarted() {
            return this.queued ? !1 : this._player.hasStarted()
        }

        play() {
            !this.queued && this._player.play()
        }

        pause() {
            !this.queued && this._player.pause()
        }

        restart() {
            !this.queued && this._player.restart()
        }

        finish() {
            this._player.finish()
        }

        destroy() {
            this.destroyed = !0, this._player.destroy()
        }

        reset() {
            !this.queued && this._player.reset()
        }

        setPosition(e) {
            this.queued || this._player.setPosition(e)
        }

        getPosition() {
            return this.queued ? 0 : this._player.getPosition()
        }

        triggerCallback(e) {
            let n = this._player;
            n.triggerCallback && n.triggerCallback(e)
        }
    };

function WS(t, e, n) {
    let r = t.get(e);
    if (r) {
        if (r.length) {
            let i = r.indexOf(n);
            r.splice(i, 1)
        }
        r.length == 0 && t.delete(e)
    }
    return r
}

function GS(t) {
    return t ?? null
}

function Aa(t) {
    return t && t.nodeType === 1
}

function qS(t) {
    return t == "start" || t == "done"
}

function Yy(t, e) {
    let n = t.style.display;
    return t.style.display = e ?? "none", n
}

function Jy(t, e, n, r, i) {
    let o = [];
    n.forEach(c => o.push(Yy(c)));
    let s = [];
    r.forEach((c, l) => {
        let u = new Map;
        c.forEach(d => {
            let h = e.computeStyle(l, d, i);
            u.set(d, h), (!h || h.length == 0) && (l[Tt] = zS, s.push(l))
        }), t.set(l, u)
    });
    let a = 0;
    return n.forEach(c => Yy(c, o[a++])), s
}

function Xy(t, e) {
    let n = new Map;
    if (t.forEach(a => n.set(a, [])), e.length == 0) return n;
    let r = 1, i = new Set(e), o = new Map;

    function s(a) {
        if (!a) return r;
        let c = o.get(a);
        if (c) return c;
        let l = a.parentNode;
        return n.has(l) ? c = l : i.has(l) ? c = r : c = s(l), o.set(a, c), c
    }

    return e.forEach(a => {
        let c = s(a);
        c !== r && n.get(c).push(a)
    }), n
}

function mt(t, e) {
    t.classList?.add(e)
}

function Xr(t, e) {
    t.classList?.remove(e)
}

function ZS(t, e, n) {
    Tn(n).onDone(() => t.processLeaveNode(e))
}

function QS(t) {
    let e = [];
    return fv(t, e), e
}

function fv(t, e) {
    for (let n = 0; n < t.length; n++) {
        let r = t[n];
        r instanceof uo ? fv(r.players, e) : e.push(r)
    }
}

function KS(t, e) {
    let n = Object.keys(t), r = Object.keys(e);
    if (n.length != r.length) return !1;
    for (let i = 0; i < n.length; i++) {
        let o = n[i];
        if (!e.hasOwnProperty(o) || t[o] !== e[o]) return !1
    }
    return !0
}

function ev(t, e, n) {
    let r = n.get(t);
    if (!r) return !1;
    let i = e.get(t);
    return i ? r.forEach(o => i.add(o)) : e.set(t, r), n.delete(t), !0
}

var ti = class {
    constructor(e, n, r) {
        this._driver = n, this._normalizer = r, this._triggerCache = {}, this.onRemovalComplete = (i, o) => {
        }, this._transitionEngine = new Ud(e.body, n, r), this._timelineEngine = new Vd(e.body, n, r), this._transitionEngine.onRemovalComplete = (i, o) => this.onRemovalComplete(i, o)
    }

    registerTrigger(e, n, r, i, o) {
        let s = e + "-" + i, a = this._triggerCache[s];
        if (!a) {
            let c = [], l = [], u = cv(this._driver, o, c, l);
            if (c.length) throw K1(i, c);
            l.length && void 0, a = FS(i, u, this._normalizer), this._triggerCache[s] = a
        }
        this._transitionEngine.registerTrigger(n, i, a)
    }

    register(e, n) {
        this._transitionEngine.register(e, n)
    }

    destroy(e, n) {
        this._transitionEngine.destroy(e, n)
    }

    onInsert(e, n, r, i) {
        this._transitionEngine.insertNode(e, n, r, i)
    }

    onRemove(e, n, r) {
        this._transitionEngine.removeNode(e, n, r)
    }

    disableAnimations(e, n) {
        this._transitionEngine.markElementAsDisabled(e, n)
    }

    process(e, n, r, i) {
        if (r.charAt(0) == "@") {
            let [o, s] = $y(r), a = i;
            this._timelineEngine.command(o, n, s, a)
        } else this._transitionEngine.trigger(e, n, r, i)
    }

    listen(e, n, r, i, o) {
        if (r.charAt(0) == "@") {
            let [s, a] = $y(r);
            return this._timelineEngine.listen(s, n, a, o)
        }
        return this._transitionEngine.listen(e, n, r, i, o)
    }

    flush(e = -1) {
        this._transitionEngine.flush(e)
    }

    get players() {
        return [...this._transitionEngine.players, ...this._timelineEngine.players]
    }

    whenRenderingDone() {
        return this._transitionEngine.whenRenderingDone()
    }

    afterFlushAnimationsDone(e) {
        this._transitionEngine.afterFlushAnimationsDone(e)
    }
};

function YS(t, e) {
    let n = null, r = null;
    return Array.isArray(e) && e.length ? (n = Td(e[0]), e.length > 1 && (r = Td(e[e.length - 1]))) : e instanceof Map && (n = Td(e)), n || r ? new $d(t, n, r) : null
}

var ei = class ei {
    constructor(e, n, r) {
        this._element = e, this._startStyles = n, this._endStyles = r, this._state = 0;
        let i = ei.initialStylesByElement.get(e);
        i || ei.initialStylesByElement.set(e, i = new Map), this._initialStyles = i
    }

    start() {
        this._state < 1 && (this._startStyles && Ut(this._element, this._startStyles, this._initialStyles), this._state = 1)
    }

    finish() {
        this.start(), this._state < 2 && (Ut(this._element, this._initialStyles), this._endStyles && (Ut(this._element, this._endStyles), this._endStyles = null), this._state = 1)
    }

    destroy() {
        this.finish(), this._state < 3 && (ei.initialStylesByElement.delete(this._element), this._startStyles && (Jn(this._element, this._startStyles), this._endStyles = null), this._endStyles && (Jn(this._element, this._endStyles), this._endStyles = null), Ut(this._element, this._initialStyles), this._state = 3)
    }
};
ei.initialStylesByElement = new WeakMap;
var $d = ei;

function Td(t) {
    let e = null;
    return t.forEach((n, r) => {
        JS(r) && (e = e || new Map, e.set(r, n))
    }), e
}

function JS(t) {
    return t === "display" || t === "position"
}

var Va = class {
    constructor(e, n, r, i) {
        this.element = e, this.keyframes = n, this.options = r, this._specialStyles = i, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this._originalOnDoneFns = [], this._originalOnStartFns = [], this.time = 0, this.parentPlayer = null, this.currentSnapshot = new Map, this._duration = r.duration, this._delay = r.delay || 0, this.time = this._duration + this._delay
    }

    _onFinish() {
        this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = [])
    }

    init() {
        this._buildPlayer(), this._preparePlayerBeforeStart()
    }

    _buildPlayer() {
        if (this._initialized) return;
        this._initialized = !0;
        let e = this.keyframes;
        this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : new Map;
        let n = () => this._onFinish();
        this.domPlayer.addEventListener("finish", n), this.onDestroy(() => {
            this.domPlayer.removeEventListener("finish", n)
        })
    }

    _preparePlayerBeforeStart() {
        this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
    }

    _convertKeyframesToObject(e) {
        let n = [];
        return e.forEach(r => {
            n.push(Object.fromEntries(r))
        }), n
    }

    _triggerWebAnimation(e, n, r) {
        return e.animate(this._convertKeyframesToObject(n), r)
    }

    onStart(e) {
        this._originalOnStartFns.push(e), this._onStartFns.push(e)
    }

    onDone(e) {
        this._originalOnDoneFns.push(e), this._onDoneFns.push(e)
    }

    onDestroy(e) {
        this._onDestroyFns.push(e)
    }

    play() {
        this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(e => e()), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
    }

    pause() {
        this.init(), this.domPlayer.pause()
    }

    finish() {
        this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
    }

    reset() {
        this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns
    }

    _resetDomPlayerState() {
        this.domPlayer && this.domPlayer.cancel()
    }

    restart() {
        this.reset(), this.play()
    }

    hasStarted() {
        return this._started
    }

    destroy() {
        this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = [])
    }

    setPosition(e) {
        this.domPlayer === void 0 && this.init(), this.domPlayer.currentTime = e * this.time
    }

    getPosition() {
        return +(this.domPlayer.currentTime ?? 0) / this.time
    }

    get totalTime() {
        return this._delay + this._duration
    }

    beforeDestroy() {
        let e = new Map;
        this.hasStarted() && this._finalKeyframe.forEach((r, i) => {
            i !== "offset" && e.set(i, this._finished ? r : Qd(this.element, i))
        }), this.currentSnapshot = e
    }

    triggerCallback(e) {
        let n = e === "start" ? this._onStartFns : this._onDoneFns;
        n.forEach(r => r()), n.length = 0
    }
}, Ba = class {
    validateStyleProperty(e) {
        return !0
    }

    validateAnimatableStyleProperty(e) {
        return !0
    }

    containsElement(e, n) {
        return nv(e, n)
    }

    getParentElement(e) {
        return Gd(e)
    }

    query(e, n, r) {
        return rv(e, n, r)
    }

    computeStyle(e, n, r) {
        return Qd(e, n)
    }

    animate(e, n, r, i, o, s = []) {
        let a = i == 0 ? "both" : "forwards", c = {duration: r, delay: i, fill: a};
        o && (c.easing = o);
        let l = new Map, u = s.filter(f => f instanceof Va);
        vS(r, i) && u.forEach(f => {
            f.currentSnapshot.forEach((m, v) => l.set(v, m))
        });
        let d = gS(n).map(f => new Map(f));
        d = bS(e, d, l);
        let h = YS(e, d);
        return new Va(e, d, c, h)
    }
};
var Na = "@", hv = "@.disabled", Ua = class {
    constructor(e, n, r, i) {
        this.namespaceId = e, this.delegate = n, this.engine = r, this._onDestroy = i, this.\u0275type = 0
    }

    get data() {
        return this.delegate.data
    }

    destroyNode(e) {
        this.delegate.destroyNode?.(e)
    }

    destroy() {
        this.engine.destroy(this.namespaceId, this.delegate), this.engine.afterFlushAnimationsDone(() => {
            queueMicrotask(() => {
                this.delegate.destroy()
            })
        }), this._onDestroy?.()
    }

    createElement(e, n) {
        return this.delegate.createElement(e, n)
    }

    createComment(e) {
        return this.delegate.createComment(e)
    }

    createText(e) {
        return this.delegate.createText(e)
    }

    appendChild(e, n) {
        this.delegate.appendChild(e, n), this.engine.onInsert(this.namespaceId, n, e, !1)
    }

    insertBefore(e, n, r, i = !0) {
        this.delegate.insertBefore(e, n, r), this.engine.onInsert(this.namespaceId, n, e, i)
    }

    removeChild(e, n, r) {
        this.engine.onRemove(this.namespaceId, n, this.delegate)
    }

    selectRootElement(e, n) {
        return this.delegate.selectRootElement(e, n)
    }

    parentNode(e) {
        return this.delegate.parentNode(e)
    }

    nextSibling(e) {
        return this.delegate.nextSibling(e)
    }

    setAttribute(e, n, r, i) {
        this.delegate.setAttribute(e, n, r, i)
    }

    removeAttribute(e, n, r) {
        this.delegate.removeAttribute(e, n, r)
    }

    addClass(e, n) {
        this.delegate.addClass(e, n)
    }

    removeClass(e, n) {
        this.delegate.removeClass(e, n)
    }

    setStyle(e, n, r, i) {
        this.delegate.setStyle(e, n, r, i)
    }

    removeStyle(e, n, r) {
        this.delegate.removeStyle(e, n, r)
    }

    setProperty(e, n, r) {
        n.charAt(0) == Na && n == hv ? this.disableAnimations(e, !!r) : this.delegate.setProperty(e, n, r)
    }

    setValue(e, n) {
        this.delegate.setValue(e, n)
    }

    listen(e, n, r) {
        return this.delegate.listen(e, n, r)
    }

    disableAnimations(e, n) {
        this.engine.disableAnimations(e, n)
    }
}, Hd = class extends Ua {
    constructor(e, n, r, i, o) {
        super(n, r, i, o), this.factory = e, this.namespaceId = n
    }

    setProperty(e, n, r) {
        n.charAt(0) == Na ? n.charAt(1) == "." && n == hv ? (r = r === void 0 ? !0 : !!r, this.disableAnimations(e, r)) : this.engine.process(this.namespaceId, e, n.slice(1), r) : this.delegate.setProperty(e, n, r)
    }

    listen(e, n, r) {
        if (n.charAt(0) == Na) {
            let i = XS(e), o = n.slice(1), s = "";
            return o.charAt(0) != Na && ([o, s] = eT(o)), this.engine.listen(this.namespaceId, i, o, s, a => {
                let c = a._data || -1;
                this.factory.scheduleListenerCallback(c, r, a)
            })
        }
        return this.delegate.listen(e, n, r)
    }
};

function XS(t) {
    switch (t) {
        case"body":
            return document.body;
        case"document":
            return document;
        case"window":
            return window;
        default:
            return t
    }
}

function eT(t) {
    let e = t.indexOf("."), n = t.substring(0, e), r = t.slice(e + 1);
    return [n, r]
}

var $a = class {
    constructor(e, n, r) {
        this.delegate = e, this.engine = n, this._zone = r, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, n.onRemovalComplete = (i, o) => {
            let s = o?.parentNode(i);
            s && o.removeChild(s, i)
        }
    }

    createRenderer(e, n) {
        let r = "", i = this.delegate.createRenderer(e, n);
        if (!e || !n?.data?.animation) {
            let l = this._rendererCache, u = l.get(i);
            if (!u) {
                let d = () => l.delete(i);
                u = new Ua(r, i, this.engine, d), l.set(i, u)
            }
            return u
        }
        let o = n.id, s = n.id + "-" + this._currentId;
        this._currentId++, this.engine.register(s, e);
        let a = l => {
            Array.isArray(l) ? l.forEach(a) : this.engine.registerTrigger(o, s, e, l.name, l)
        };
        return n.data.animation.forEach(a), new Hd(this, s, i, this.engine)
    }

    begin() {
        this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
    }

    _scheduleCountTask() {
        queueMicrotask(() => {
            this._microtaskId++
        })
    }

    scheduleListenerCallback(e, n, r) {
        if (e >= 0 && e < this._microtaskId) {
            this._zone.run(() => n(r));
            return
        }
        let i = this._animationCallbacksBuffer;
        i.length == 0 && queueMicrotask(() => {
            this._zone.run(() => {
                i.forEach(o => {
                    let [s, a] = o;
                    s(a)
                }), this._animationCallbacksBuffer = []
            })
        }), i.push([n, r])
    }

    end() {
        this._cdRecurDepth--, this._cdRecurDepth == 0 && this._zone.runOutsideAngular(() => {
            this._scheduleCountTask(), this.engine.flush(this._microtaskId)
        }), this.delegate.end && this.delegate.end()
    }

    whenRenderingDone() {
        return this.engine.whenRenderingDone()
    }
};
var nT = (() => {
    let e = class e extends ti {
        constructor(r, i, o) {
            super(r, i, o)
        }

        ngOnDestroy() {
            this.flush()
        }
    };
    e.\u0275fac = function (i) {
        return new (i || e)(H(Ve), H(Xn), H(er))
    }, e.\u0275prov = O({token: e, factory: e.\u0275fac});
    let t = e;
    return t
})();

function rT() {
    return new Oa
}

function iT(t, e, n) {
    return new $a(t, e, n)
}

var pv = [{provide: er, useFactory: rT}, {provide: ti, useClass: nT}, {
        provide: yn,
        useFactory: iT,
        deps: [sa, ti, he]
    }], oT = [{provide: Xn, useFactory: () => new Ba}, {provide: $l, useValue: "BrowserAnimations"}, ...pv],
    SP = [{provide: Xn, useClass: qd}, {provide: $l, useValue: "NoopAnimations"}, ...pv];

function gv() {
    return Lt("NgEagerAnimations"), [...oT]
}

var mv = {providers: [ym({eventCoalescing: !0}), ky(By), Km(), gv()]};
var ni = function (t) {
    return t.Item = "item", t.Section = "section", t
}(ni || {});
var sT = (t, e) => e._id;

function aT(t, e) {
    if (t & 1 && (ie(0, "p", 9), je(1), se()), t & 2) {
        let n = e.$implicit, r = e.$index, i = tn();
        pu("border-r-2", r !== i.menuItems().length - 1), Le("routerLink", n._id)("routerLinkActive", "underline"), xe(), nn(i.getName(n, "de"))
    }
}

var yv = (() => {
    class t {
        title = "<cdln/>";
        menuItems = Xt([{route: "/home", title: "home"}, {route: "/about", title: "about"}, {
            route: "/service",
            title: "service"
        }, {route: "/connect", title: "connect"}]);
        data = Kr;

        get sections() {
            return this.data.filter(n => n.type === ni.Section && n.model === "entity")
        }

        getName(n, r = "de") {
            return typeof n.name == "string" ? n.name : n.name[r]
        }

        scrollInterval;

        scroll(n, r) {
            this.scrollInterval = setInterval(() => {
                n.scrollBy({left: r, behavior: "smooth"})
            }, 1)
        }

        stopScroll() {
            this.scrollInterval && clearInterval(this.scrollInterval)
        }

        static \u0275fac = function (r) {
            return new (r || t)
        };
        static \u0275cmp = Ge({
            type: t,
            selectors: [["na-menu"]],
            inputs: {menuItems: [1, "menuItems"]},
            standalone: !0,
            features: [Ze],
            decls: 16,
            vars: 1,
            consts: [["el", ""], [1, "flex", "flex-col", "px-5", "gap-2", "justify-between", "w-full", "items-center", "text-shadow-xs", "dark:shadow-blue-500", "shadow-blue-600/10"], [1, "flex", "items-center", "justify-between", "w-full", "gap-2", "overflow-x-scroll", "overflow-y-hidden", "scrollbar", "no-scrollbar"], ["routerLinkActive", "underline", 1, "text-gray-600", "text-center", "hover:scale-110", "transition-all", "ease-in-out", "duration-500", "cursor-pointer", "rounded-xl", "p-2", "bg-white", "bg-opacity-80", 3, "routerLink"], [1, "text-gray-600", "text-center", "hover:scale-110", "transition-all", "ease-in-out", "duration-500", "cursor-pointer", "rounded-xl", "p-2", "bg-white", "bg-opacity-80"], [1, "px-2", "flex", "items-center", "py-2", "w-full", "gap-3", "relative", "overflow-x-scroll", "overflow-y-hidden", "scrollbar", "no-scrollbar"], [1, "fixed", "left-0", 3, "mouseenter", "mouseleave"], [1, "pr-2", "transition-all", "min-w-[170px]", "text-center", "ease-in-out", "duration-500", "hover:scale-110", "cursor-pointer", "h-full", "text-gray-600", "rounded-xl", "p-2", "bg-white", "bg-opacity-80", 3, "routerLink", "border-r-2", "routerLinkActive"], [1, "fixed", "right-0", 3, "mouseenter", "mouseleave"], [1, "pr-2", "transition-all", "min-w-[170px]", "text-center", "ease-in-out", "duration-500", "hover:scale-110", "cursor-pointer", "h-full", "text-gray-600", "rounded-xl", "p-2", "bg-white", "bg-opacity-80", 3, "routerLink", "routerLinkActive"]],
            template: function (r, i) {
                if (r & 1) {
                    let o = Li();
                    ie(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "p"), je(4, "View cart"), se()(), ie(5, "div", 4)(6, "p"), je(7, "Order"), se()()(), ie(8, "div", 5, 0)(10, "div", 6), jt("mouseenter", function () {
                        Yt(o);
                        let a = mu(9);
                        return Jt(i.scroll(a, -300))
                    })("mouseleave", function () {
                        return Yt(o), Jt(i.stopScroll())
                    }), je(11, "<"), se(), Pr(12, aT, 2, 5, "p", 7, sT), ie(14, "div", 8), jt("mouseenter", function () {
                        Yt(o);
                        let a = mu(9);
                        return Jt(i.scroll(a, 300))
                    })("mouseleave", function () {
                        return Yt(o), Jt(i.stopScroll())
                    }), je(15, ">"), se()()()
                }
                r & 2 && (xe(2), Le("routerLink", "cart"), xe(10), Fr(i.sections))
            },
            dependencies: [Ea, Ny],
            styles: ["[_nghost-%COMP%]{width:100%}"]
        })
    }

    return t
})();
var vv = Co(fo());
var wo = class t {
    title = "noahsarc-v2";
    data = Kr;
    router = b(Qr);

    ngOnInit() {
        this.router.events.subscribe(e => {
            e.type === _e.NavigationEnd && console.log(e.urlAfterRedirects)
        }), this.test()
    }

    test() {
        console.log("HI")
    }

    get entities() {
        return this.data.filter(e => e.type === ni.Item && e.model === "entity")
    }

    get sections() {
        return this.data.filter(e => e.type === ni.Section && e.model === "entity")
    }

    static \u0275fac = function (n) {
        return new (n || t)
    };
    static \u0275cmp = Ge({
        type: t,
        selectors: [["na-root"]],
        standalone: !0,
        features: [Ze],
        decls: 6,
        vars: 1,
        consts: [[1, "w-full", "h-full", "relative"], [1, "w-full", "h-full", "relative", "max-w-4xl", "mx-auto", "overflow-x-hidden", "overflow-y-auto", "no-scrollbar"], [1, "w-full", "z-[999999]", "bg-gray-100", "drop-shadow-2xl", "sticky", "top-0", "left-0", "initial", "pt-5"], [1, "w-full", "flex", "justify-between", "items-center"]],
        template: function (n, r) {
            n & 1 && (ie(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3), $e(4, "na-menu"), se()(), $e(5, "router-outlet"), se()()), n & 2 && Le("@fadeInOut", !0)
        },
        dependencies: [dd, yv],
        encapsulation: 2,
        data: {animation: [Yr()]}
    })
};
Ht([(0, vv.RemoveOnServe)()], wo.prototype, "test", null);
Zm(wo, mv).catch(t => console.error(t));
