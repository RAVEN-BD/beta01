import {
  r as Ta,
  i as ru,
  d as iu,
  c as Gi,
  t as Sa,
  S as Ca,
  R as nu,
  a as As,
  C as su,
  M as ou,
  b as au,
  e as jn,
  g as lu,
} from "./lazyload-78f7fe97.js";
const uu = "modulepreload",
  cu = function (o, t) {
    return new URL(o, t).href;
  },
  Ro = {},
  vt = function (t, r, e) {
    if (!r || r.length === 0) return t();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      r.map((n) => {
        if (((n = cu(n, e)), n in Ro)) return;
        Ro[n] = !0;
        const s = n.endsWith(".css"),
          a = s ? '[rel="stylesheet"]' : "";
        if (!!e)
          for (let f = i.length - 1; f >= 0; f--) {
            const _ = i[f];
            if (_.href === n && (!s || _.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${n}"]${a}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = s ? "stylesheet" : uu),
          s || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = n),
          document.head.appendChild(u),
          s)
        )
          return new Promise((f, _) => {
            u.addEventListener("load", f),
              u.addEventListener("error", () =>
                _(new Error(`Unable to preload CSS for ${n}`))
              );
          });
      })
    )
      .then(() => t())
      .catch((n) => {
        const s = new Event("vite:preloadError", { cancelable: !0 });
        if (((s.payload = n), window.dispatchEvent(s), !s.defaultPrevented))
          throw n;
      });
  };
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) e(i);
  new MutationObserver((i) => {
    for (const n of i)
      if (n.type === "childList")
        for (const s of n.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && e(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const n = {};
    return (
      i.integrity && (n.integrity = i.integrity),
      i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function e(i) {
    if (i.ep) return;
    i.ep = !0;
    const n = r(i);
    fetch(i.href, n);
  }
})();
(() => {
  let o = !1;
  const t =
      "https://1e45cdeaea7c4aa48f0c50a46629ab61@o194086.ingest.sentry.io/4505505458356224",
    r = (n) => {
      const s = n.match(/^(https?:\/\/)?([^:@/]+)(:[^@/]+)?@([^/]+)/);
      return s && s.length >= 4 ? s[2] : null;
    },
    e = () => {
      if (o) {
        const n = { dsn: t, environment: "production", release: "release:19" };
        Sentry.init(n),
          document.body.classList.contains("error404") &&
            Sentry.captureException(new Error("404 Not Found"));
      }
    },
    i = () => {
      if (!o || window.Sentry) {
        console.log("[sentry.js]: Loading Sentry.js");
        const n = window.document.createElement("script");
        (n.type = "text/javascript"),
          (n.async = !0),
          (n.onload = () => {
            (o = !0), console.log("[sentry.js]: Sentry.js is loaded"), e();
          });
        const s = r(t);
        n.src = `//js.sentry-cdn.com/${s}.min.js`;
        const a = window.document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(n, a);
      } else console.log("[sentry.js]: Sentry is already loaded");
    };
  document.documentElement.classList.contains("limited-rendering")
    ? Ta(i)
    : i();
})();
let Rs;
try {
  const o = "built-in-test";
  window.customElements.define(
    o,
    class extends window.HTMLParagraphElement {},
    { extends: "p" }
  ),
    document.createElement("p", { is: o }).outerHTML.includes(o) || (Rs = !0);
} catch {
  Rs = !0;
}
Rs && vt(() => import("./index-1a7eb22f.js"), [], import.meta.url);
function pr(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return o;
}
function ka(o, t) {
  (o.prototype = Object.create(t.prototype)),
    (o.prototype.constructor = o),
    (o.__proto__ = t);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ze = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Ci = { duration: 0.5, overwrite: !1, delay: 0 },
  oo,
  ae,
  bt,
  $e = 1e8,
  yt = 1 / $e,
  Ls = Math.PI * 2,
  fu = Ls / 4,
  du = 0,
  Ea = Math.sqrt,
  hu = Math.cos,
  pu = Math.sin,
  Ut = function (t) {
    return typeof t == "string";
  },
  Ot = function (t) {
    return typeof t == "function";
  },
  vr = function (t) {
    return typeof t == "number";
  },
  ao = function (t) {
    return typeof t > "u";
  },
  fr = function (t) {
    return typeof t == "object";
  },
  Te = function (t) {
    return t !== !1;
  },
  lo = function () {
    return typeof window < "u";
  },
  Tn = function (t) {
    return Ot(t) || Ut(t);
  },
  Pa =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  le = Array.isArray,
  Is = /(?:-?\.?\d|\.)+/gi,
  Oa = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  _i = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  ps = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Ma = /[+-]=-?[.\d]+/,
  Da = /[^,'"\[\]\s]+/gi,
  _u = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  kt,
  nr,
  zs,
  uo,
  Ne = {},
  Qn = {},
  Aa,
  Ra = function (t) {
    return (Qn = ei(t, Ne)) && Ee;
  },
  co = function (t, r) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      r,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  cn = function (t, r) {
    return !r && console.warn(t);
  },
  La = function (t, r) {
    return (t && (Ne[t] = r) && Qn && (Qn[t] = r)) || Ne;
  },
  fn = function () {
    return 0;
  },
  gu = { suppressEvents: !0, isStart: !0, kill: !1 },
  Bn = { suppressEvents: !0, kill: !1 },
  mu = { suppressEvents: !0 },
  fo = {},
  Mr = [],
  Ns = {},
  Ia,
  Ae = {},
  _s = {},
  Lo = 30,
  Vn = [],
  ho = "",
  po = function (t) {
    var r = t[0],
      e,
      i;
    if ((fr(r) || Ot(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
      for (i = Vn.length; i-- && !Vn[i].targetTest(r); );
      e = Vn[i];
    }
    for (i = t.length; i--; )
      (t[i] && (t[i]._gsap || (t[i]._gsap = new sl(t[i], e)))) ||
        t.splice(i, 1);
    return t;
  },
  Gr = function (t) {
    return t._gsap || po(He(t))[0]._gsap;
  },
  za = function (t, r, e) {
    return (e = t[r]) && Ot(e)
      ? t[r]()
      : (ao(e) && t.getAttribute && t.getAttribute(r)) || e;
  },
  Se = function (t, r) {
    return (t = t.split(",")).forEach(r) || t;
  },
  Lt = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  qt = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  vi = function (t, r) {
    var e = r.charAt(0),
      i = parseFloat(r.substr(2));
    return (
      (t = parseFloat(t)),
      e === "+" ? t + i : e === "-" ? t - i : e === "*" ? t * i : t / i
    );
  },
  yu = function (t, r) {
    for (var e = r.length, i = 0; t.indexOf(r[i]) < 0 && ++i < e; );
    return i < e;
  },
  Kn = function () {
    var t = Mr.length,
      r = Mr.slice(0),
      e,
      i;
    for (Ns = {}, Mr.length = 0, e = 0; e < t; e++)
      (i = r[e]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  Na = function (t, r, e, i) {
    Mr.length && !ae && Kn(),
      t.render(r, e, i || (ae && r < 0 && (t._initted || t._startAt))),
      Mr.length && !ae && Kn();
  },
  Fa = function (t) {
    var r = parseFloat(t);
    return (r || r === 0) && (t + "").match(Da).length < 2
      ? r
      : Ut(t)
      ? t.trim()
      : t;
  },
  Ba = function (t) {
    return t;
  },
  qe = function (t, r) {
    for (var e in r) e in t || (t[e] = r[e]);
    return t;
  },
  vu = function (t) {
    return function (r, e) {
      for (var i in e)
        i in r || (i === "duration" && t) || i === "ease" || (r[i] = e[i]);
    };
  },
  ei = function (t, r) {
    for (var e in r) t[e] = r[e];
    return t;
  },
  Io = function o(t, r) {
    for (var e in r)
      e !== "__proto__" &&
        e !== "constructor" &&
        e !== "prototype" &&
        (t[e] = fr(r[e]) ? o(t[e] || (t[e] = {}), r[e]) : r[e]);
    return t;
  },
  Zn = function (t, r) {
    var e = {},
      i;
    for (i in t) i in r || (e[i] = t[i]);
    return e;
  },
  ji = function (t) {
    var r = t.parent || kt,
      e = t.keyframes ? vu(le(t.keyframes)) : qe;
    if (Te(t.inherit))
      for (; r; ) e(t, r.vars.defaults), (r = r.parent || r._dp);
    return t;
  },
  xu = function (t, r) {
    for (var e = t.length, i = e === r.length; i && e-- && t[e] === r[e]; );
    return e < 0;
  },
  Va = function (t, r, e, i, n) {
    e === void 0 && (e = "_first"), i === void 0 && (i = "_last");
    var s = t[i],
      a;
    if (n) for (a = r[n]; s && s[n] > a; ) s = s._prev;
    return (
      s ? ((r._next = s._next), (s._next = r)) : ((r._next = t[e]), (t[e] = r)),
      r._next ? (r._next._prev = r) : (t[i] = r),
      (r._prev = s),
      (r.parent = r._dp = t),
      r
    );
  },
  us = function (t, r, e, i) {
    e === void 0 && (e = "_first"), i === void 0 && (i = "_last");
    var n = r._prev,
      s = r._next;
    n ? (n._next = s) : t[e] === r && (t[e] = s),
      s ? (s._prev = n) : t[i] === r && (t[i] = n),
      (r._next = r._prev = r.parent = null);
  },
  Rr = function (t, r) {
    t.parent &&
      (!r || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0);
  },
  jr = function (t, r) {
    if (t && (!r || r._end > t._dur || r._start < 0))
      for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
    return t;
  },
  wu = function (t) {
    for (var r = t.parent; r && r.parent; )
      (r._dirty = 1), r.totalDuration(), (r = r.parent);
    return t;
  },
  Fs = function (t, r, e, i) {
    return (
      t._startAt &&
      (ae
        ? t._startAt.revert(Bn)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(r, !0, i))
    );
  },
  bu = function o(t) {
    return !t || (t._ts && o(t.parent));
  },
  zo = function (t) {
    return t._repeat ? ki(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  ki = function (t, r) {
    var e = Math.floor((t /= r));
    return t && e === t ? e - 1 : e;
  },
  Jn = function (t, r) {
    return (
      (t - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    );
  },
  cs = function (t) {
    return (t._end = qt(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || yt) || 0)
    ));
  },
  fs = function (t, r) {
    var e = t._dp;
    return (
      e &&
        e.smoothChildTiming &&
        t._ts &&
        ((t._start = qt(
          e._time -
            (t._ts > 0
              ? r / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - r) / -t._ts)
        )),
        cs(t),
        e._dirty || jr(e, t)),
      t
    );
  },
  Wa = function (t, r) {
    var e;
    if (
      ((r._time ||
        (!r._dur && r._initted) ||
        (r._start < t._time && (r._dur || !r.add))) &&
        ((e = Jn(t.rawTime(), r)),
        (!r._dur || vn(0, r.totalDuration(), e) - r._tTime > yt) &&
          r.render(e, !0)),
      jr(t, r)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (e = t; e._dp; )
          e.rawTime() >= 0 && e.totalTime(e._tTime), (e = e._dp);
      t._zTime = -yt;
    }
  },
  or = function (t, r, e, i) {
    return (
      r.parent && Rr(r),
      (r._start = qt(
        (vr(e) ? e : e || t !== kt ? Ve(t, e, r) : t._time) + r._delay
      )),
      (r._end = qt(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
      )),
      Va(t, r, "_first", "_last", t._sort ? "_start" : 0),
      Bs(r) || (t._recent = r),
      i || Wa(t, r),
      t._ts < 0 && fs(t, t._tTime),
      t
    );
  },
  Ya = function (t, r) {
    return (
      (Ne.ScrollTrigger || co("scrollTrigger", r)) &&
      Ne.ScrollTrigger.create(r, t)
    );
  },
  $a = function (t, r, e, i, n) {
    if ((go(t, r, n), !t._initted)) return 1;
    if (
      !e &&
      t._pt &&
      !ae &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      Ia !== Re.frame
    )
      return Mr.push(t), (t._lazy = [n, i]), 1;
  },
  Tu = function o(t) {
    var r = t.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || o(r));
  },
  Bs = function (t) {
    var r = t.data;
    return r === "isFromStart" || r === "isStart";
  },
  Su = function (t, r, e, i) {
    var n = t.ratio,
      s =
        r < 0 ||
        (!r &&
          ((!t._start && Tu(t) && !(!t._initted && Bs(t))) ||
            ((t._ts < 0 || t._dp._ts < 0) && !Bs(t))))
          ? 0
          : 1,
      a = t._rDelay,
      l = 0,
      u,
      f,
      _;
    if (
      (a &&
        t._repeat &&
        ((l = vn(0, t._tDur, r)),
        (f = ki(l, a)),
        t._yoyo && f & 1 && (s = 1 - s),
        f !== ki(t._tTime, a) &&
          ((n = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
      s !== n || ae || i || t._zTime === yt || (!r && t._zTime))
    ) {
      if (!t._initted && $a(t, r, i, e, l)) return;
      for (
        _ = t._zTime,
          t._zTime = r || (e ? yt : 0),
          e || (e = r && !_),
          t.ratio = s,
          t._from && (s = 1 - s),
          t._time = 0,
          t._tTime = l,
          u = t._pt;
        u;

      )
        u.r(s, u.d), (u = u._next);
      r < 0 && Fs(t, r, e, !0),
        t._onUpdate && !e && Ie(t, "onUpdate"),
        l && t._repeat && !e && t.parent && Ie(t, "onRepeat"),
        (r >= t._tDur || r < 0) &&
          t.ratio === s &&
          (s && Rr(t, 1),
          !e &&
            !ae &&
            (Ie(t, s ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()));
    } else t._zTime || (t._zTime = r);
  },
  Cu = function (t, r, e) {
    var i;
    if (e > r)
      for (i = t._first; i && i._start <= e; ) {
        if (i.data === "isPause" && i._start > r) return i;
        i = i._next;
      }
    else
      for (i = t._last; i && i._start >= e; ) {
        if (i.data === "isPause" && i._start < r) return i;
        i = i._prev;
      }
  },
  Ei = function (t, r, e, i) {
    var n = t._repeat,
      s = qt(r) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !i && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : qt(s * (n + 1) + t._rDelay * n)) : s),
      a > 0 && !i && fs(t, (t._tTime = t._tDur * a)),
      t.parent && cs(t),
      e || jr(t.parent, t),
      t
    );
  },
  No = function (t) {
    return t instanceof me ? jr(t) : Ei(t, t._dur);
  },
  ku = { _start: 0, endTime: fn, totalDuration: fn },
  Ve = function o(t, r, e) {
    var i = t.labels,
      n = t._recent || ku,
      s = t.duration() >= $e ? n.endTime(!1) : t._dur,
      a,
      l,
      u;
    return Ut(r) && (isNaN(r) || r in i)
      ? ((l = r.charAt(0)),
        (u = r.substr(-1) === "%"),
        (a = r.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (r = r.replace(/=/, "")),
            (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (u ? (a < 0 ? n : e).totalDuration() / 100 : 1))
          : a < 0
          ? (r in i || (i[r] = s), i[r])
          : ((l = parseFloat(r.charAt(a - 1) + r.substr(a + 1))),
            u && e && (l = (l / 100) * (le(e) ? e[0] : e).totalDuration()),
            a > 1 ? o(t, r.substr(0, a - 1), e) + l : s + l))
      : r == null
      ? s
      : +r;
  },
  Qi = function (t, r, e) {
    var i = vr(r[1]),
      n = (i ? 2 : 1) + (t < 2 ? 0 : 1),
      s = r[n],
      a,
      l;
    if ((i && (s.duration = r[1]), (s.parent = e), t)) {
      for (a = s, l = e; l && !("immediateRender" in a); )
        (a = l.vars.defaults || {}), (l = Te(l.vars.inherit) && l.parent);
      (s.immediateRender = Te(a.immediateRender)),
        t < 2 ? (s.runBackwards = 1) : (s.startAt = r[n - 1]);
    }
    return new Ft(r[0], s, r[n + 1]);
  },
  zr = function (t, r) {
    return t || t === 0 ? r(t) : r;
  },
  vn = function (t, r, e) {
    return e < t ? t : e > r ? r : e;
  },
  oe = function (t, r) {
    return !Ut(t) || !(r = _u.exec(t)) ? "" : r[1];
  },
  Eu = function (t, r, e) {
    return zr(e, function (i) {
      return vn(t, r, i);
    });
  },
  Vs = [].slice,
  Ha = function (t, r) {
    return (
      t &&
      fr(t) &&
      "length" in t &&
      ((!r && !t.length) || (t.length - 1 in t && fr(t[0]))) &&
      !t.nodeType &&
      t !== nr
    );
  },
  Pu = function (t, r, e) {
    return (
      e === void 0 && (e = []),
      t.forEach(function (i) {
        var n;
        return (Ut(i) && !r) || Ha(i, 1)
          ? (n = e).push.apply(n, He(i))
          : e.push(i);
      }) || e
    );
  },
  He = function (t, r, e) {
    return bt && !r && bt.selector
      ? bt.selector(t)
      : Ut(t) && !e && (zs || !Pi())
      ? Vs.call((r || uo).querySelectorAll(t), 0)
      : le(t)
      ? Pu(t, e)
      : Ha(t)
      ? Vs.call(t, 0)
      : t
      ? [t]
      : [];
  },
  Ws = function (t) {
    return (
      (t = He(t)[0] || cn("Invalid scope") || {}),
      function (r) {
        var e = t.current || t.nativeElement || t;
        return He(
          r,
          e.querySelectorAll
            ? e
            : e === t
            ? cn("Invalid scope") || uo.createElement("div")
            : t
        );
      }
    );
  },
  Xa = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  qa = function (t) {
    if (Ot(t)) return t;
    var r = fr(t) ? t : { each: t },
      e = Qr(r.ease),
      i = r.from || 0,
      n = parseFloat(r.base) || 0,
      s = {},
      a = i > 0 && i < 1,
      l = isNaN(i) || a,
      u = r.axis,
      f = i,
      _ = i;
    return (
      Ut(i)
        ? (f = _ = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !a && l && ((f = i[0]), (_ = i[1])),
      function (d, c, p) {
        var h = (p || r).length,
          g = s[h],
          v,
          x,
          w,
          T,
          C,
          P,
          b,
          O,
          M;
        if (!g) {
          if (((M = r.grid === "auto" ? 0 : (r.grid || [1, $e])[1]), !M)) {
            for (
              b = -$e;
              b < (b = p[M++].getBoundingClientRect().left) && M < h;

            );
            M < h && M--;
          }
          for (
            g = s[h] = [],
              v = l ? Math.min(M, h) * f - 0.5 : i % M,
              x = M === $e ? 0 : l ? (h * _) / M - 0.5 : (i / M) | 0,
              b = 0,
              O = $e,
              P = 0;
            P < h;
            P++
          )
            (w = (P % M) - v),
              (T = x - ((P / M) | 0)),
              (g[P] = C = u ? Math.abs(u === "y" ? T : w) : Ea(w * w + T * T)),
              C > b && (b = C),
              C < O && (O = C);
          i === "random" && Xa(g),
            (g.max = b - O),
            (g.min = O),
            (g.v = h =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (M > h
                    ? h - 1
                    : u
                    ? u === "y"
                      ? h / M
                      : M
                    : Math.max(M, h / M)) ||
                0) * (i === "edges" ? -1 : 1)),
            (g.b = h < 0 ? n - h : n),
            (g.u = oe(r.amount || r.each) || 0),
            (e = e && h < 0 ? rl(e) : e);
        }
        return (
          (h = (g[d] - g.min) / g.max || 0),
          qt(g.b + (e ? e(h) : h) * g.v) + g.u
        );
      }
    );
  },
  Ys = function (t) {
    var r = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (e) {
      var i = qt(Math.round(parseFloat(e) / t) * t * r);
      return (i - (i % 1)) / r + (vr(e) ? 0 : oe(e));
    };
  },
  Ua = function (t, r) {
    var e = le(t),
      i,
      n;
    return (
      !e &&
        fr(t) &&
        ((i = e = t.radius || $e),
        t.values
          ? ((t = He(t.values)), (n = !vr(t[0])) && (i *= i))
          : (t = Ys(t.increment))),
      zr(
        r,
        e
          ? Ot(t)
            ? function (s) {
                return (n = t(s)), Math.abs(n - s) <= i ? n : s;
              }
            : function (s) {
                for (
                  var a = parseFloat(n ? s.x : s),
                    l = parseFloat(n ? s.y : 0),
                    u = $e,
                    f = 0,
                    _ = t.length,
                    d,
                    c;
                  _--;

                )
                  n
                    ? ((d = t[_].x - a), (c = t[_].y - l), (d = d * d + c * c))
                    : (d = Math.abs(t[_] - a)),
                    d < u && ((u = d), (f = _));
                return (
                  (f = !i || u <= i ? t[f] : s),
                  n || f === s || vr(s) ? f : f + oe(s)
                );
              }
          : Ys(t)
      )
    );
  },
  Ga = function (t, r, e, i) {
    return zr(le(t) ? !r : e === !0 ? !!(e = 0) : !i, function () {
      return le(t)
        ? t[~~(Math.random() * t.length)]
        : (e = e || 1e-5) &&
            (i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - e / 2 + Math.random() * (r - t + e * 0.99)) / e) *
                e *
                i
            ) / i;
    });
  },
  Ou = function () {
    for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
      r[e] = arguments[e];
    return function (i) {
      return r.reduce(function (n, s) {
        return s(n);
      }, i);
    };
  },
  Mu = function (t, r) {
    return function (e) {
      return t(parseFloat(e)) + (r || oe(e));
    };
  },
  Du = function (t, r, e) {
    return Qa(t, r, 0, 1, e);
  },
  ja = function (t, r, e) {
    return zr(e, function (i) {
      return t[~~r(i)];
    });
  },
  Au = function o(t, r, e) {
    var i = r - t;
    return le(t)
      ? ja(t, o(0, t.length), r)
      : zr(e, function (n) {
          return ((i + ((n - t) % i)) % i) + t;
        });
  },
  Ru = function o(t, r, e) {
    var i = r - t,
      n = i * 2;
    return le(t)
      ? ja(t, o(0, t.length - 1), r)
      : zr(e, function (s) {
          return (s = (n + ((s - t) % n)) % n || 0), t + (s > i ? n - s : s);
        });
  },
  dn = function (t) {
    for (var r = 0, e = "", i, n, s, a; ~(i = t.indexOf("random(", r)); )
      (s = t.indexOf(")", i)),
        (a = t.charAt(i + 7) === "["),
        (n = t.substr(i + 7, s - i - 7).match(a ? Da : Is)),
        (e +=
          t.substr(r, i - r) + Ga(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
        (r = s + 1);
    return e + t.substr(r, t.length - r);
  },
  Qa = function (t, r, e, i, n) {
    var s = r - t,
      a = i - e;
    return zr(n, function (l) {
      return e + (((l - t) / s) * a || 0);
    });
  },
  Lu = function o(t, r, e, i) {
    var n = isNaN(t + r)
      ? 0
      : function (c) {
          return (1 - c) * t + c * r;
        };
    if (!n) {
      var s = Ut(t),
        a = {},
        l,
        u,
        f,
        _,
        d;
      if ((e === !0 && (i = 1) && (e = null), s))
        (t = { p: t }), (r = { p: r });
      else if (le(t) && !le(r)) {
        for (f = [], _ = t.length, d = _ - 2, u = 1; u < _; u++)
          f.push(o(t[u - 1], t[u]));
        _--,
          (n = function (p) {
            p *= _;
            var h = Math.min(d, ~~p);
            return f[h](p - h);
          }),
          (e = r);
      } else i || (t = ei(le(t) ? [] : {}, t));
      if (!f) {
        for (l in r) _o.call(a, t, l, "get", r[l]);
        n = function (p) {
          return vo(p, a) || (s ? t.p : t);
        };
      }
    }
    return zr(e, n);
  },
  Fo = function (t, r, e) {
    var i = t.labels,
      n = $e,
      s,
      a,
      l;
    for (s in i)
      (a = i[s] - r),
        a < 0 == !!e && a && n > (a = Math.abs(a)) && ((l = s), (n = a));
    return l;
  },
  Ie = function (t, r, e) {
    var i = t.vars,
      n = i[r],
      s = bt,
      a = t._ctx,
      l,
      u,
      f;
    if (n)
      return (
        (l = i[r + "Params"]),
        (u = i.callbackScope || t),
        e && Mr.length && Kn(),
        a && (bt = a),
        (f = l ? n.apply(u, l) : n.call(u)),
        (bt = s),
        f
      );
  },
  Wi = function (t) {
    return (
      Rr(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!ae),
      t.progress() < 1 && Ie(t, "onInterrupt"),
      t
    );
  },
  gi,
  Ka = [],
  Za = function (t) {
    if (t)
      if (((t = (!t.name && t.default) || t), lo() || t.headless)) {
        var r = t.name,
          e = Ot(t),
          i =
            r && !e && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: fn,
            render: vo,
            add: _o,
            kill: Qu,
            modifier: ju,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: yo,
            aliases: {},
            register: 0,
          };
        if ((Pi(), t !== i)) {
          if (Ae[r]) return;
          qe(i, qe(Zn(t, n), s)),
            ei(i.prototype, ei(n, Zn(t, s))),
            (Ae[(i.prop = r)] = i),
            t.targetTest && (Vn.push(i), (fo[r] = 1)),
            (r =
              (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) +
              "Plugin");
        }
        La(r, i), t.register && t.register(Ee, i, Ce);
      } else Ka.push(t);
  },
  mt = 255,
  Yi = {
    aqua: [0, mt, mt],
    lime: [0, mt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, mt],
    navy: [0, 0, 128],
    white: [mt, mt, mt],
    olive: [128, 128, 0],
    yellow: [mt, mt, 0],
    orange: [mt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [mt, 0, 0],
    pink: [mt, 192, 203],
    cyan: [0, mt, mt],
    transparent: [mt, mt, mt, 0],
  },
  gs = function (t, r, e) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? r + (e - r) * t * 6
        : t < 0.5
        ? e
        : t * 3 < 2
        ? r + (e - r) * (2 / 3 - t) * 6
        : r) *
        mt +
        0.5) |
        0
    );
  },
  Ja = function (t, r, e) {
    var i = t ? (vr(t) ? [t >> 16, (t >> 8) & mt, t & mt] : 0) : Yi.black,
      n,
      s,
      a,
      l,
      u,
      f,
      _,
      d,
      c,
      p;
    if (!i) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Yi[t]))
        i = Yi[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((n = t.charAt(1)),
            (s = t.charAt(2)),
            (a = t.charAt(3)),
            (t =
              "#" +
              n +
              n +
              s +
              s +
              a +
              a +
              (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
          t.length === 9)
        )
          return (
            (i = parseInt(t.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & mt, i & mt, parseInt(t.substr(7), 16) / 255]
          );
        (t = parseInt(t.substr(1), 16)), (i = [t >> 16, (t >> 8) & mt, t & mt]);
      } else if (t.substr(0, 3) === "hsl") {
        if (((i = p = t.match(Is)), !r))
          (l = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (f = +i[2] / 100),
            (s = f <= 0.5 ? f * (u + 1) : f + u - f * u),
            (n = f * 2 - s),
            i.length > 3 && (i[3] *= 1),
            (i[0] = gs(l + 1 / 3, n, s)),
            (i[1] = gs(l, n, s)),
            (i[2] = gs(l - 1 / 3, n, s));
        else if (~t.indexOf("="))
          return (i = t.match(Oa)), e && i.length < 4 && (i[3] = 1), i;
      } else i = t.match(Is) || Yi.transparent;
      i = i.map(Number);
    }
    return (
      r &&
        !p &&
        ((n = i[0] / mt),
        (s = i[1] / mt),
        (a = i[2] / mt),
        (_ = Math.max(n, s, a)),
        (d = Math.min(n, s, a)),
        (f = (_ + d) / 2),
        _ === d
          ? (l = u = 0)
          : ((c = _ - d),
            (u = f > 0.5 ? c / (2 - _ - d) : c / (_ + d)),
            (l =
              _ === n
                ? (s - a) / c + (s < a ? 6 : 0)
                : _ === s
                ? (a - n) / c + 2
                : (n - s) / c + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(f * 100 + 0.5))),
      e && i.length < 4 && (i[3] = 1),
      i
    );
  },
  tl = function (t) {
    var r = [],
      e = [],
      i = -1;
    return (
      t.split(Dr).forEach(function (n) {
        var s = n.match(_i) || [];
        r.push.apply(r, s), e.push((i += s.length + 1));
      }),
      (r.c = e),
      r
    );
  },
  Bo = function (t, r, e) {
    var i = "",
      n = (t + i).match(Dr),
      s = r ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      f,
      _;
    if (!n) return t;
    if (
      ((n = n.map(function (d) {
        return (
          (d = Ja(d, r, 1)) &&
          s +
            (r ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) +
            ")"
        );
      })),
      e && ((f = tl(t)), (l = e.c), l.join(i) !== f.c.join(i)))
    )
      for (u = t.replace(Dr, "1").split(_i), _ = u.length - 1; a < _; a++)
        i +=
          u[a] +
          (~l.indexOf(a)
            ? n.shift() || s + "0,0,0,0)"
            : (f.length ? f : n.length ? n : e).shift());
    if (!u)
      for (u = t.split(Dr), _ = u.length - 1; a < _; a++) i += u[a] + n[a];
    return i + u[_];
  },
  Dr = (function () {
    var o =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in Yi) o += "|" + t + "\\b";
    return new RegExp(o + ")", "gi");
  })(),
  Iu = /hsl[a]?\(/,
  el = function (t) {
    var r = t.join(" "),
      e;
    if (((Dr.lastIndex = 0), Dr.test(r)))
      return (
        (e = Iu.test(r)),
        (t[1] = Bo(t[1], e)),
        (t[0] = Bo(t[0], e, tl(t[1]))),
        !0
      );
  },
  hn,
  Re = (function () {
    var o = Date.now,
      t = 500,
      r = 33,
      e = o(),
      i = e,
      n = 1e3 / 240,
      s = n,
      a = [],
      l,
      u,
      f,
      _,
      d,
      c,
      p = function h(g) {
        var v = o() - i,
          x = g === !0,
          w,
          T,
          C,
          P;
        if (
          ((v > t || v < 0) && (e += v - r),
          (i += v),
          (C = i - e),
          (w = C - s),
          (w > 0 || x) &&
            ((P = ++_.frame),
            (d = C - _.time * 1e3),
            (_.time = C = C / 1e3),
            (s += w + (w >= n ? 4 : n - w)),
            (T = 1)),
          x || (l = u(h)),
          T)
        )
          for (c = 0; c < a.length; c++) a[c](C, d, P, g);
      };
    return (
      (_ = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (g) {
          return d / (1e3 / (g || 60));
        },
        wake: function () {
          Aa &&
            (!zs &&
              lo() &&
              ((nr = zs = window),
              (uo = nr.document || {}),
              (Ne.gsap = Ee),
              (nr.gsapVersions || (nr.gsapVersions = [])).push(Ee.version),
              Ra(Qn || nr.GreenSockGlobals || (!nr.gsap && nr) || {}),
              Ka.forEach(Za)),
            (f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && _.sleep(),
            (u =
              f ||
              function (g) {
                return setTimeout(g, (s - _.time * 1e3 + 1) | 0);
              }),
            (hn = 1),
            p(2));
        },
        sleep: function () {
          (f ? cancelAnimationFrame : clearTimeout)(l), (hn = 0), (u = fn);
        },
        lagSmoothing: function (g, v) {
          (t = g || 1 / 0), (r = Math.min(v || 33, t));
        },
        fps: function (g) {
          (n = 1e3 / (g || 240)), (s = _.time * 1e3 + n);
        },
        add: function (g, v, x) {
          var w = v
            ? function (T, C, P, b) {
                g(T, C, P, b), _.remove(w);
              }
            : g;
          return _.remove(g), a[x ? "unshift" : "push"](w), Pi(), w;
        },
        remove: function (g, v) {
          ~(v = a.indexOf(g)) && a.splice(v, 1) && c >= v && c--;
        },
        _listeners: a,
      }),
      _
    );
  })(),
  Pi = function () {
    return !hn && Re.wake();
  },
  lt = {},
  zu = /^[\d.\-M][\d.\-,\s]/,
  Nu = /["']/g,
  Fu = function (t) {
    for (
      var r = {},
        e = t.substr(1, t.length - 3).split(":"),
        i = e[0],
        n = 1,
        s = e.length,
        a,
        l,
        u;
      n < s;
      n++
    )
      (l = e[n]),
        (a = n !== s - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, a)),
        (r[i] = isNaN(u) ? u.replace(Nu, "").trim() : +u),
        (i = l.substr(a + 1).trim());
    return r;
  },
  Bu = function (t) {
    var r = t.indexOf("(") + 1,
      e = t.indexOf(")"),
      i = t.indexOf("(", r);
    return t.substring(r, ~i && i < e ? t.indexOf(")", e + 1) : e);
  },
  Vu = function (t) {
    var r = (t + "").split("("),
      e = lt[r[0]];
    return e && r.length > 1 && e.config
      ? e.config.apply(
          null,
          ~t.indexOf("{") ? [Fu(r[1])] : Bu(t).split(",").map(Fa)
        )
      : lt._CE && zu.test(t)
      ? lt._CE("", t)
      : e;
  },
  rl = function (t) {
    return function (r) {
      return 1 - t(1 - r);
    };
  },
  il = function o(t, r) {
    for (var e = t._first, i; e; )
      e instanceof me
        ? o(e, r)
        : e.vars.yoyoEase &&
          (!e._yoyo || !e._repeat) &&
          e._yoyo !== r &&
          (e.timeline
            ? o(e.timeline, r)
            : ((i = e._ease),
              (e._ease = e._yEase),
              (e._yEase = i),
              (e._yoyo = r))),
        (e = e._next);
  },
  Qr = function (t, r) {
    return (t && (Ot(t) ? t : lt[t] || Vu(t))) || r;
  },
  oi = function (t, r, e, i) {
    e === void 0 &&
      (e = function (l) {
        return 1 - r(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? r(l * 2) / 2 : 1 - r((1 - l) * 2) / 2;
        });
    var n = { easeIn: r, easeOut: e, easeInOut: i },
      s;
    return (
      Se(t, function (a) {
        (lt[a] = Ne[a] = n), (lt[(s = a.toLowerCase())] = e);
        for (var l in n)
          lt[
            s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = lt[a + "." + l] = n[l];
      }),
      n
    );
  },
  nl = function (t) {
    return function (r) {
      return r < 0.5 ? (1 - t(1 - r * 2)) / 2 : 0.5 + t((r - 0.5) * 2) / 2;
    };
  },
  ms = function o(t, r, e) {
    var i = r >= 1 ? r : 1,
      n = (e || (t ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      s = (n / Ls) * (Math.asin(1 / i) || 0),
      a = function (f) {
        return f === 1 ? 1 : i * Math.pow(2, -10 * f) * pu((f - s) * n) + 1;
      },
      l =
        t === "out"
          ? a
          : t === "in"
          ? function (u) {
              return 1 - a(1 - u);
            }
          : nl(a);
    return (
      (n = Ls / n),
      (l.config = function (u, f) {
        return o(t, u, f);
      }),
      l
    );
  },
  ys = function o(t, r) {
    r === void 0 && (r = 1.70158);
    var e = function (s) {
        return s ? --s * s * ((r + 1) * s + r) + 1 : 0;
      },
      i =
        t === "out"
          ? e
          : t === "in"
          ? function (n) {
              return 1 - e(1 - n);
            }
          : nl(e);
    return (
      (i.config = function (n) {
        return o(t, n);
      }),
      i
    );
  };
Se("Linear,Quad,Cubic,Quart,Quint,Strong", function (o, t) {
  var r = t < 5 ? t + 1 : t;
  oi(
    o + ",Power" + (r - 1),
    t
      ? function (e) {
          return Math.pow(e, r);
        }
      : function (e) {
          return e;
        },
    function (e) {
      return 1 - Math.pow(1 - e, r);
    },
    function (e) {
      return e < 0.5
        ? Math.pow(e * 2, r) / 2
        : 1 - Math.pow((1 - e) * 2, r) / 2;
    }
  );
});
lt.Linear.easeNone = lt.none = lt.Linear.easeIn;
oi("Elastic", ms("in"), ms("out"), ms());
(function (o, t) {
  var r = 1 / t,
    e = 2 * r,
    i = 2.5 * r,
    n = function (a) {
      return a < r
        ? o * a * a
        : a < e
        ? o * Math.pow(a - 1.5 / t, 2) + 0.75
        : a < i
        ? o * (a -= 2.25 / t) * a + 0.9375
        : o * Math.pow(a - 2.625 / t, 2) + 0.984375;
    };
  oi(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n
  );
})(7.5625, 2.75);
oi("Expo", function (o) {
  return o ? Math.pow(2, 10 * (o - 1)) : 0;
});
oi("Circ", function (o) {
  return -(Ea(1 - o * o) - 1);
});
oi("Sine", function (o) {
  return o === 1 ? 1 : -hu(o * fu) + 1;
});
oi("Back", ys("in"), ys("out"), ys());
lt.SteppedEase =
  lt.steps =
  Ne.SteppedEase =
    {
      config: function (t, r) {
        t === void 0 && (t = 1);
        var e = 1 / t,
          i = t + (r ? 0 : 1),
          n = r ? 1 : 0,
          s = 1 - yt;
        return function (a) {
          return (((i * vn(0, s, a)) | 0) + n) * e;
        };
      },
    };
Ci.ease = lt["quad.out"];
Se(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (o) {
    return (ho += o + "," + o + "Params,");
  }
);
var sl = function (t, r) {
    (this.id = du++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = r),
      (this.get = r ? r.get : za),
      (this.set = r ? r.getSetter : yo);
  },
  pn = (function () {
    function o(r) {
      (this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        Ei(this, +r.duration, 1, 1),
        (this.data = r.data),
        bt && ((this._ctx = bt), bt.data.push(this)),
        hn || Re.wake();
    }
    var t = o.prototype;
    return (
      (t.delay = function (e) {
        return e || e === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (t.duration = function (e) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            Ei(
              this,
              this._repeat < 0
                ? e
                : (e - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (e, i) {
        if ((Pi(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (fs(this, e), !n._dp || n.parent || Wa(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && e < this._tDur) ||
              (this._ts < 0 && e > 0) ||
              (!this._tDur && !e)) &&
            or(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === yt) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = e), Na(this, e, i)),
          this
        );
      }),
      (t.time = function (e, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), e + zo(this)) %
                (this._dur + this._rDelay) || (e ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (t.totalProgress = function (e, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (t.progress = function (e, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
                zo(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (t.iteration = function (e, i) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * n, i)
          : this._repeat
          ? ki(this._tTime, n) + 1
          : 1;
      }),
      (t.timeScale = function (e, i) {
        if (!arguments.length) return this._rts === -yt ? 0 : this._rts;
        if (this._rts === e) return this;
        var n =
          this.parent && this._ts ? Jn(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || e === -yt ? 0 : this._rts),
          this.totalTime(vn(-Math.abs(this._delay), this._tDur, n), i !== !1),
          cs(this),
          wu(this)
        );
      }),
      (t.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
              ((this._ps = e),
              e
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Pi(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== yt &&
                      (this._tTime -= yt)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (e) {
        if (arguments.length) {
          this._start = e;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && or(i, this, e - this._delay), this
          );
        }
        return this._start;
      }),
      (t.endTime = function (e) {
        return (
          this._start +
          (Te(e) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (e) {
        var i = this.parent || this._dp;
        return i
          ? e &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Jn(i.rawTime(e), this)
            : this._tTime
          : this._tTime;
      }),
      (t.revert = function (e) {
        e === void 0 && (e = mu);
        var i = ae;
        return (
          (ae = e),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(e),
            this.totalTime(-0.01, e.suppressEvents)),
          this.data !== "nested" && e.kill !== !1 && this.kill(),
          (ae = i),
          this
        );
      }),
      (t.globalTime = function (e) {
        for (var i = this, n = arguments.length ? e : i.rawTime(); i; )
          (n = i._start + n / (Math.abs(i._ts) || 1)), (i = i._dp);
        return !this.parent && this._sat ? this._sat.globalTime(e) : n;
      }),
      (t.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), No(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (t.repeatDelay = function (e) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = e), No(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (t.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (t.seek = function (e, i) {
        return this.totalTime(Ve(this, e), Te(i));
      }),
      (t.restart = function (e, i) {
        return this.play().totalTime(e ? -this._delay : 0, Te(i));
      }),
      (t.play = function (e, i) {
        return e != null && this.seek(e, i), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (e, i) {
        return (
          e != null && this.seek(e || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (e, i) {
        return e != null && this.seek(e, i), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() &&
              this.timeScale(-this._rts || (e ? -yt : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -yt), this;
      }),
      (t.isActive = function () {
        var e = this.parent || this._dp,
          i = this._start,
          n;
        return !!(
          !e ||
          (this._ts &&
            this._initted &&
            e.isActive() &&
            (n = e.rawTime(!0)) >= i &&
            n < this.endTime(!0) - yt)
        );
      }),
      (t.eventCallback = function (e, i, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (i
              ? ((s[e] = i),
                n && (s[e + "Params"] = n),
                e === "onUpdate" && (this._onUpdate = i))
              : delete s[e],
            this)
          : s[e];
      }),
      (t.then = function (e) {
        var i = this;
        return new Promise(function (n) {
          var s = Ot(e) ? e : Ba,
            a = function () {
              var u = i.then;
              (i.then = null),
                Ot(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
                n(s),
                (i.then = u);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? a()
            : (i._prom = a);
        });
      }),
      (t.kill = function () {
        Wi(this);
      }),
      o
    );
  })();
qe(pn.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -yt,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var me = (function (o) {
  ka(t, o);
  function t(e, i) {
    var n;
    return (
      e === void 0 && (e = {}),
      (n = o.call(this, e) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!e.smoothChildTiming),
      (n.autoRemoveChildren = !!e.autoRemoveChildren),
      (n._sort = Te(e.sortChildren)),
      kt && or(e.parent || kt, pr(n), i),
      e.reversed && n.reverse(),
      e.paused && n.paused(!0),
      e.scrollTrigger && Ya(pr(n), e.scrollTrigger),
      n
    );
  }
  var r = t.prototype;
  return (
    (r.to = function (i, n, s) {
      return Qi(0, arguments, this), this;
    }),
    (r.from = function (i, n, s) {
      return Qi(1, arguments, this), this;
    }),
    (r.fromTo = function (i, n, s, a) {
      return Qi(2, arguments, this), this;
    }),
    (r.set = function (i, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        ji(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new Ft(i, n, Ve(this, s), 1),
        this
      );
    }),
    (r.call = function (i, n, s) {
      return or(this, Ft.delayedCall(0, i, n), s);
    }),
    (r.staggerTo = function (i, n, s, a, l, u, f) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || a),
        (s.onComplete = u),
        (s.onCompleteParams = f),
        (s.parent = this),
        new Ft(i, s, Ve(this, l)),
        this
      );
    }),
    (r.staggerFrom = function (i, n, s, a, l, u, f) {
      return (
        (s.runBackwards = 1),
        (ji(s).immediateRender = Te(s.immediateRender)),
        this.staggerTo(i, n, s, a, l, u, f)
      );
    }),
    (r.staggerFromTo = function (i, n, s, a, l, u, f, _) {
      return (
        (a.startAt = s),
        (ji(a).immediateRender = Te(a.immediateRender)),
        this.staggerTo(i, n, a, l, u, f, _)
      );
    }),
    (r.render = function (i, n, s) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        f = i <= 0 ? 0 : qt(i),
        _ = this._zTime < 0 != i < 0 && (this._initted || !u),
        d,
        c,
        p,
        h,
        g,
        v,
        x,
        w,
        T,
        C,
        P,
        b;
      if (
        (this !== kt && f > l && i >= 0 && (f = l), f !== this._tTime || s || _)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((f += this._time - a), (i += this._time - a)),
          (d = f),
          (T = this._start),
          (w = this._ts),
          (v = !w),
          _ && (u || (a = this._zTime), (i || !n) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((P = this._yoyo),
            (g = u + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(g * 100 + i, n, s);
          if (
            ((d = qt(f % g)),
            f === l
              ? ((h = this._repeat), (d = u))
              : ((h = ~~(f / g)),
                h && h === f / g && ((d = u), h--),
                d > u && (d = u)),
            (C = ki(this._tTime, g)),
            !a &&
              this._tTime &&
              C !== h &&
              this._tTime - C * g - this._dur <= 0 &&
              (C = h),
            P && h & 1 && ((d = u - d), (b = 1)),
            h !== C && !this._lock)
          ) {
            var O = P && C & 1,
              M = O === (P && h & 1);
            if (
              (h < C && (O = !O),
              (a = O ? 0 : f % u ? u : f),
              (this._lock = 1),
              (this.render(a || (b ? 0 : qt(h * g)), n, !u)._lock = 0),
              (this._tTime = f),
              !n && this.parent && Ie(this, "onRepeat"),
              this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                v !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              M &&
                ((this._lock = 2),
                (a = O ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !b && this.invalidate()),
              (this._lock = 0),
              !this._ts && !v)
            )
              return this;
            il(this, b);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((x = Cu(this, qt(a), qt(d))), x && (f -= d - (d = x._start))),
          (this._tTime = f),
          (this._time = d),
          (this._act = !w),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (a = 0)),
          !a && d && !n && !h && (Ie(this, "onStart"), this._tTime !== f))
        )
          return this;
        if (d >= a && i >= 0)
          for (c = this._first; c; ) {
            if (
              ((p = c._next), (c._act || d >= c._start) && c._ts && x !== c)
            ) {
              if (c.parent !== this) return this.render(i, n, s);
              if (
                (c.render(
                  c._ts > 0
                    ? (d - c._start) * c._ts
                    : (c._dirty ? c.totalDuration() : c._tDur) +
                        (d - c._start) * c._ts,
                  n,
                  s
                ),
                d !== this._time || (!this._ts && !v))
              ) {
                (x = 0), p && (f += this._zTime = -yt);
                break;
              }
            }
            c = p;
          }
        else {
          c = this._last;
          for (var L = i < 0 ? i : d; c; ) {
            if (((p = c._prev), (c._act || L <= c._end) && c._ts && x !== c)) {
              if (c.parent !== this) return this.render(i, n, s);
              if (
                (c.render(
                  c._ts > 0
                    ? (L - c._start) * c._ts
                    : (c._dirty ? c.totalDuration() : c._tDur) +
                        (L - c._start) * c._ts,
                  n,
                  s || (ae && (c._initted || c._startAt))
                ),
                d !== this._time || (!this._ts && !v))
              ) {
                (x = 0), p && (f += this._zTime = L ? -yt : yt);
                break;
              }
            }
            c = p;
          }
        }
        if (
          x &&
          !n &&
          (this.pause(),
          (x.render(d >= a ? 0 : -yt)._zTime = d >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = T), cs(this), this.render(i, n, s);
        this._onUpdate && !n && Ie(this, "onUpdate", !0),
          ((f === l && this._tTime >= this.totalDuration()) || (!f && a)) &&
            (T === this._start || Math.abs(w) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !u) &&
                ((f === l && this._ts > 0) || (!f && this._ts < 0)) &&
                Rr(this, 1),
              !n &&
                !(i < 0 && !a) &&
                (f || a || !l) &&
                (Ie(
                  this,
                  f === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(f < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (r.add = function (i, n) {
      var s = this;
      if ((vr(n) || (n = Ve(this, n, i)), !(i instanceof pn))) {
        if (le(i))
          return (
            i.forEach(function (a) {
              return s.add(a, n);
            }),
            this
          );
        if (Ut(i)) return this.addLabel(i, n);
        if (Ot(i)) i = Ft.delayedCall(0, i);
        else return this;
      }
      return this !== i ? or(this, i, n) : this;
    }),
    (r.getChildren = function (i, n, s, a) {
      i === void 0 && (i = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -$e);
      for (var l = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof Ft
            ? n && l.push(u)
            : (s && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, s)))),
          (u = u._next);
      return l;
    }),
    (r.getById = function (i) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === i) return n[s];
    }),
    (r.remove = function (i) {
      return Ut(i)
        ? this.removeLabel(i)
        : Ot(i)
        ? this.killTweensOf(i)
        : (us(this, i),
          i === this._recent && (this._recent = this._last),
          jr(this));
    }),
    (r.totalTime = function (i, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = qt(
              Re.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          o.prototype.totalTime.call(this, i, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (i, n) {
      return (this.labels[i] = Ve(this, n)), this;
    }),
    (r.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (r.addPause = function (i, n, s) {
      var a = Ft.delayedCall(0, n || fn, s);
      return (
        (a.data = "isPause"), (this._hasPause = 1), or(this, a, Ve(this, i))
      );
    }),
    (r.removePause = function (i) {
      var n = this._first;
      for (i = Ve(this, i); n; )
        n._start === i && n.data === "isPause" && Rr(n), (n = n._next);
    }),
    (r.killTweensOf = function (i, n, s) {
      for (var a = this.getTweensOf(i, s), l = a.length; l--; )
        Cr !== a[l] && a[l].kill(i, n);
      return this;
    }),
    (r.getTweensOf = function (i, n) {
      for (var s = [], a = He(i), l = this._first, u = vr(n), f; l; )
        l instanceof Ft
          ? yu(l._targets, a) &&
            (u
              ? (!Cr || (l._initted && l._ts)) &&
                l.globalTime(0) <= n &&
                l.globalTime(l.totalDuration()) > n
              : !n || l.isActive()) &&
            s.push(l)
          : (f = l.getTweensOf(a, n)).length && s.push.apply(s, f),
          (l = l._next);
      return s;
    }),
    (r.tweenTo = function (i, n) {
      n = n || {};
      var s = this,
        a = Ve(s, i),
        l = n,
        u = l.startAt,
        f = l.onStart,
        _ = l.onStartParams,
        d = l.immediateRender,
        c,
        p = Ft.to(
          s,
          qe(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : s._time)) / s.timeScale()
                ) ||
                yt,
              onStart: function () {
                if ((s.pause(), !c)) {
                  var g =
                    n.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : s._time)) /
                        s.timeScale()
                    );
                  p._dur !== g && Ei(p, g, 0, 1).render(p._time, !0, !0),
                    (c = 1);
                }
                f && f.apply(p, _ || []);
              },
            },
            n
          )
        );
      return d ? p.render(0) : p;
    }),
    (r.tweenFromTo = function (i, n, s) {
      return this.tweenTo(n, qe({ startAt: { time: Ve(this, i) } }, s));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (i) {
      return i === void 0 && (i = this._time), Fo(this, Ve(this, i));
    }),
    (r.previousLabel = function (i) {
      return i === void 0 && (i = this._time), Fo(this, Ve(this, i), 1);
    }),
    (r.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + yt);
    }),
    (r.shiftChildren = function (i, n, s) {
      s === void 0 && (s = 0);
      for (var a = this._first, l = this.labels, u; a; )
        a._start >= s && ((a._start += i), (a._end += i)), (a = a._next);
      if (n) for (u in l) l[u] >= s && (l[u] += i);
      return jr(this);
    }),
    (r.invalidate = function (i) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(i), (n = n._next);
      return o.prototype.invalidate.call(this, i);
    }),
    (r.clear = function (i) {
      i === void 0 && (i = !0);
      for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        jr(this)
      );
    }),
    (r.totalDuration = function (i) {
      var n = 0,
        s = this,
        a = s._last,
        l = $e,
        u,
        f,
        _;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -i : i)
        );
      if (s._dirty) {
        for (_ = s.parent; a; )
          (u = a._prev),
            a._dirty && a.totalDuration(),
            (f = a._start),
            f > l && s._sort && a._ts && !s._lock
              ? ((s._lock = 1), (or(s, a, f - a._delay, 1)._lock = 0))
              : (l = f),
            f < 0 &&
              a._ts &&
              ((n -= f),
              ((!_ && !s._dp) || (_ && _.smoothChildTiming)) &&
                ((s._start += f / s._ts), (s._time -= f), (s._tTime -= f)),
              s.shiftChildren(-f, !1, -1 / 0),
              (l = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = u);
        Ei(s, s === kt && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (t.updateRoot = function (i) {
      if ((kt._ts && (Na(kt, Jn(i, kt)), (Ia = Re.frame)), Re.frame >= Lo)) {
        Lo += ze.autoSleep || 120;
        var n = kt._first;
        if ((!n || !n._ts) && ze.autoSleep && Re._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || Re.sleep();
        }
      }
    }),
    t
  );
})(pn);
qe(me.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Wu = function (t, r, e, i, n, s, a) {
    var l = new Ce(this._pt, t, r, 0, 1, fl, null, n),
      u = 0,
      f = 0,
      _,
      d,
      c,
      p,
      h,
      g,
      v,
      x;
    for (
      l.b = e,
        l.e = i,
        e += "",
        i += "",
        (v = ~i.indexOf("random(")) && (i = dn(i)),
        s && ((x = [e, i]), s(x, t, r), (e = x[0]), (i = x[1])),
        d = e.match(ps) || [];
      (_ = ps.exec(i));

    )
      (p = _[0]),
        (h = i.substring(u, _.index)),
        c ? (c = (c + 1) % 5) : h.substr(-5) === "rgba(" && (c = 1),
        p !== d[f++] &&
          ((g = parseFloat(d[f - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: h || f === 1 ? h : ",",
            s: g,
            c: p.charAt(1) === "=" ? vi(g, p) - g : parseFloat(p) - g,
            m: c && c < 4 ? Math.round : 0,
          }),
          (u = ps.lastIndex));
    return (
      (l.c = u < i.length ? i.substring(u, i.length) : ""),
      (l.fp = a),
      (Ma.test(i) || v) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  _o = function (t, r, e, i, n, s, a, l, u, f) {
    Ot(i) && (i = i(n || 0, t, s));
    var _ = t[r],
      d =
        e !== "get"
          ? e
          : Ot(_)
          ? u
            ? t[
                r.indexOf("set") || !Ot(t["get" + r.substr(3)])
                  ? r
                  : "get" + r.substr(3)
              ](u)
            : t[r]()
          : _,
      c = Ot(_) ? (u ? qu : ul) : mo,
      p;
    if (
      (Ut(i) &&
        (~i.indexOf("random(") && (i = dn(i)),
        i.charAt(1) === "=" &&
          ((p = vi(d, i) + (oe(d) || 0)), (p || p === 0) && (i = p))),
      !f || d !== i || $s)
    )
      return !isNaN(d * i) && i !== ""
        ? ((p = new Ce(
            this._pt,
            t,
            r,
            +d || 0,
            i - (d || 0),
            typeof _ == "boolean" ? Gu : cl,
            0,
            c
          )),
          u && (p.fp = u),
          a && p.modifier(a, this, t),
          (this._pt = p))
        : (!_ && !(r in t) && co(r, i),
          Wu.call(this, t, r, d, i, c, l || ze.stringFilter, u));
  },
  Yu = function (t, r, e, i, n) {
    if (
      (Ot(t) && (t = Ki(t, n, r, e, i)),
      !fr(t) || (t.style && t.nodeType) || le(t) || Pa(t))
    )
      return Ut(t) ? Ki(t, n, r, e, i) : t;
    var s = {},
      a;
    for (a in t) s[a] = Ki(t[a], n, r, e, i);
    return s;
  },
  ol = function (t, r, e, i, n, s) {
    var a, l, u, f;
    if (
      Ae[t] &&
      (a = new Ae[t]()).init(
        n,
        a.rawVars ? r[t] : Yu(r[t], i, n, s, e),
        e,
        i,
        s
      ) !== !1 &&
      ((e._pt = l = new Ce(e._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
      e !== gi)
    )
      for (u = e._ptLookup[e._targets.indexOf(n)], f = a._props.length; f--; )
        u[a._props[f]] = l;
    return a;
  },
  Cr,
  $s,
  go = function o(t, r, e) {
    var i = t.vars,
      n = i.ease,
      s = i.startAt,
      a = i.immediateRender,
      l = i.lazy,
      u = i.onUpdate,
      f = i.runBackwards,
      _ = i.yoyoEase,
      d = i.keyframes,
      c = i.autoRevert,
      p = t._dur,
      h = t._startAt,
      g = t._targets,
      v = t.parent,
      x = v && v.data === "nested" ? v.vars.targets : g,
      w = t._overwrite === "auto" && !oo,
      T = t.timeline,
      C,
      P,
      b,
      O,
      M,
      L,
      V,
      z,
      y,
      k,
      E,
      S,
      R;
    if (
      (T && (!d || !n) && (n = "none"),
      (t._ease = Qr(n, Ci.ease)),
      (t._yEase = _ ? rl(Qr(_ === !0 ? n : _, Ci.ease)) : 0),
      _ &&
        t._yoyo &&
        !t._repeat &&
        ((_ = t._yEase), (t._yEase = t._ease), (t._ease = _)),
      (t._from = !T && !!i.runBackwards),
      !T || (d && !i.stagger))
    ) {
      if (
        ((z = g[0] ? Gr(g[0]).harness : 0),
        (S = z && i[z.prop]),
        (C = Zn(i, fo)),
        h &&
          (h._zTime < 0 && h.progress(1),
          r < 0 && f && a && !c ? h.render(-1, !0) : h.revert(f && p ? Bn : gu),
          (h._lazy = 0)),
        s)
      ) {
        if (
          (Rr(
            (t._startAt = Ft.set(
              g,
              qe(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: v,
                  immediateRender: !0,
                  lazy: !h && Te(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return Ie(t, "onUpdate");
                    },
                  stagger: 0,
                },
                s
              )
            ))
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          r < 0 && (ae || (!a && !c)) && t._startAt.revert(Bn),
          a && p && r <= 0 && e <= 0)
        ) {
          r && (t._zTime = r);
          return;
        }
      } else if (f && p && !h) {
        if (
          (r && (a = !1),
          (b = qe(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !h && Te(l),
              immediateRender: a,
              stagger: 0,
              parent: v,
            },
            C
          )),
          S && (b[z.prop] = S),
          Rr((t._startAt = Ft.set(g, b))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          r < 0 && (ae ? t._startAt.revert(Bn) : t._startAt.render(-1, !0)),
          (t._zTime = r),
          !a)
        )
          o(t._startAt, yt, yt);
        else if (!r) return;
      }
      for (
        t._pt = t._ptCache = 0, l = (p && Te(l)) || (l && !p), P = 0;
        P < g.length;
        P++
      ) {
        if (
          ((M = g[P]),
          (V = M._gsap || po(g)[P]._gsap),
          (t._ptLookup[P] = k = {}),
          Ns[V.id] && Mr.length && Kn(),
          (E = x === g ? P : x.indexOf(M)),
          z &&
            (y = new z()).init(M, S || C, t, E, x) !== !1 &&
            ((t._pt = O =
              new Ce(t._pt, M, y.name, 0, 1, y.render, y, 0, y.priority)),
            y._props.forEach(function (I) {
              k[I] = O;
            }),
            y.priority && (L = 1)),
          !z || S)
        )
          for (b in C)
            Ae[b] && (y = ol(b, C, t, E, M, x))
              ? y.priority && (L = 1)
              : (k[b] = O =
                  _o.call(t, M, b, "get", C[b], E, x, 0, i.stringFilter));
        t._op && t._op[P] && t.kill(M, t._op[P]),
          w &&
            t._pt &&
            ((Cr = t),
            kt.killTweensOf(M, k, t.globalTime(r)),
            (R = !t.parent),
            (Cr = 0)),
          t._pt && l && (Ns[V.id] = 1);
      }
      L && dl(t), t._onInit && t._onInit(t);
    }
    (t._onUpdate = u),
      (t._initted = (!t._op || t._pt) && !R),
      d && r <= 0 && T.render($e, !0, !0);
  },
  $u = function (t, r, e, i, n, s, a, l) {
    var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[r],
      f,
      _,
      d,
      c;
    if (!u)
      for (
        u = t._ptCache[r] = [], d = t._ptLookup, c = t._targets.length;
        c--;

      ) {
        if (((f = d[c][r]), f && f.d && f.d._pt))
          for (f = f.d._pt; f && f.p !== r && f.fp !== r; ) f = f._next;
        if (!f)
          return (
            ($s = 1),
            (t.vars[r] = "+=0"),
            go(t, a),
            ($s = 0),
            l ? cn(r + " not eligible for reset") : 1
          );
        u.push(f);
      }
    for (c = u.length; c--; )
      (_ = u[c]),
        (f = _._pt || _),
        (f.s = (i || i === 0) && !n ? i : f.s + (i || 0) + s * f.c),
        (f.c = e - f.s),
        _.e && (_.e = Lt(e) + oe(_.e)),
        _.b && (_.b = f.s + oe(_.b));
  },
  Hu = function (t, r) {
    var e = t[0] ? Gr(t[0]).harness : 0,
      i = e && e.aliases,
      n,
      s,
      a,
      l;
    if (!i) return r;
    n = ei({}, r);
    for (s in i)
      if (s in n) for (l = i[s].split(","), a = l.length; a--; ) n[l[a]] = n[s];
    return n;
  },
  Xu = function (t, r, e, i) {
    var n = r.ease || i || "power1.inOut",
      s,
      a;
    if (le(r))
      (a = e[t] || (e[t] = [])),
        r.forEach(function (l, u) {
          return a.push({ t: (u / (r.length - 1)) * 100, v: l, e: n });
        });
    else
      for (s in r)
        (a = e[s] || (e[s] = [])),
          s === "ease" || a.push({ t: parseFloat(t), v: r[s], e: n });
  },
  Ki = function (t, r, e, i, n) {
    return Ot(t)
      ? t.call(r, e, i, n)
      : Ut(t) && ~t.indexOf("random(")
      ? dn(t)
      : t;
  },
  al = ho + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  ll = {};
Se(al + ",id,stagger,delay,duration,paused,scrollTrigger", function (o) {
  return (ll[o] = 1);
});
var Ft = (function (o) {
  ka(t, o);
  function t(e, i, n, s) {
    var a;
    typeof i == "number" && ((n.duration = i), (i = n), (n = null)),
      (a = o.call(this, s ? i : ji(i)) || this);
    var l = a.vars,
      u = l.duration,
      f = l.delay,
      _ = l.immediateRender,
      d = l.stagger,
      c = l.overwrite,
      p = l.keyframes,
      h = l.defaults,
      g = l.scrollTrigger,
      v = l.yoyoEase,
      x = i.parent || kt,
      w = (le(e) || Pa(e) ? vr(e[0]) : "length" in i) ? [e] : He(e),
      T,
      C,
      P,
      b,
      O,
      M,
      L,
      V;
    if (
      ((a._targets = w.length
        ? po(w)
        : cn(
            "GSAP target " + e + " not found. https://gsap.com",
            !ze.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = c),
      p || d || Tn(u) || Tn(f))
    ) {
      if (
        ((i = a.vars),
        (T = a.timeline =
          new me({
            data: "nested",
            defaults: h || {},
            targets: x && x.data === "nested" ? x.vars.targets : w,
          })),
        T.kill(),
        (T.parent = T._dp = pr(a)),
        (T._start = 0),
        d || Tn(u) || Tn(f))
      ) {
        if (((b = w.length), (L = d && qa(d)), fr(d)))
          for (O in d) ~al.indexOf(O) && (V || (V = {}), (V[O] = d[O]));
        for (C = 0; C < b; C++)
          (P = Zn(i, ll)),
            (P.stagger = 0),
            v && (P.yoyoEase = v),
            V && ei(P, V),
            (M = w[C]),
            (P.duration = +Ki(u, pr(a), C, M, w)),
            (P.delay = (+Ki(f, pr(a), C, M, w) || 0) - a._delay),
            !d &&
              b === 1 &&
              P.delay &&
              ((a._delay = f = P.delay), (a._start += f), (P.delay = 0)),
            T.to(M, P, L ? L(C, M, w) : 0),
            (T._ease = lt.none);
        T.duration() ? (u = f = 0) : (a.timeline = 0);
      } else if (p) {
        ji(qe(T.vars.defaults, { ease: "none" })),
          (T._ease = Qr(p.ease || i.ease || "none"));
        var z = 0,
          y,
          k,
          E;
        if (le(p))
          p.forEach(function (S) {
            return T.to(w, S, ">");
          }),
            T.duration();
        else {
          P = {};
          for (O in p)
            O === "ease" || O === "easeEach" || Xu(O, p[O], P, p.easeEach);
          for (O in P)
            for (
              y = P[O].sort(function (S, R) {
                return S.t - R.t;
              }),
                z = 0,
                C = 0;
              C < y.length;
              C++
            )
              (k = y[C]),
                (E = {
                  ease: k.e,
                  duration: ((k.t - (C ? y[C - 1].t : 0)) / 100) * u,
                }),
                (E[O] = k.v),
                T.to(w, E, z),
                (z += E.duration);
          T.duration() < u && T.to({}, { duration: u - T.duration() });
        }
      }
      u || a.duration((u = T.duration()));
    } else a.timeline = 0;
    return (
      c === !0 && !oo && ((Cr = pr(a)), kt.killTweensOf(w), (Cr = 0)),
      or(x, pr(a), n),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (_ ||
        (!u &&
          !p &&
          a._start === qt(x._time) &&
          Te(_) &&
          bu(pr(a)) &&
          x.data !== "nested")) &&
        ((a._tTime = -yt), a.render(Math.max(0, -f) || 0)),
      g && Ya(pr(a), g),
      a
    );
  }
  var r = t.prototype;
  return (
    (r.render = function (i, n, s) {
      var a = this._time,
        l = this._tDur,
        u = this._dur,
        f = i < 0,
        _ = i > l - yt && !f ? l : i < yt ? 0 : i,
        d,
        c,
        p,
        h,
        g,
        v,
        x,
        w,
        T;
      if (!u) Su(this, i, n, s);
      else if (
        _ !== this._tTime ||
        !i ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== f)
      ) {
        if (((d = _), (w = this.timeline), this._repeat)) {
          if (((h = u + this._rDelay), this._repeat < -1 && f))
            return this.totalTime(h * 100 + i, n, s);
          if (
            ((d = qt(_ % h)),
            _ === l
              ? ((p = this._repeat), (d = u))
              : ((p = ~~(_ / h)),
                p && p === qt(_ / h) && ((d = u), p--),
                d > u && (d = u)),
            (v = this._yoyo && p & 1),
            v && ((T = this._yEase), (d = u - d)),
            (g = ki(this._tTime, h)),
            d === a && !s && this._initted && p === g)
          )
            return (this._tTime = _), this;
          p !== g &&
            (w && this._yEase && il(w, v),
            this.vars.repeatRefresh &&
              !v &&
              !this._lock &&
              this._time !== h &&
              this._initted &&
              ((this._lock = s = 1),
              (this.render(qt(h * p), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if ($a(this, f ? i : d, s, n, _)) return (this._tTime = 0), this;
          if (a !== this._time && !(s && this.vars.repeatRefresh && p !== g))
            return this;
          if (u !== this._dur) return this.render(i, n, s);
        }
        if (
          ((this._tTime = _),
          (this._time = d),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = x = (T || this._ease)(d / u)),
          this._from && (this.ratio = x = 1 - x),
          d && !a && !n && !p && (Ie(this, "onStart"), this._tTime !== _))
        )
          return this;
        for (c = this._pt; c; ) c.r(x, c.d), (c = c._next);
        (w && w.render(i < 0 ? i : w._dur * w._ease(d / this._dur), n, s)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !n &&
            (f && Fs(this, i, n, s), Ie(this, "onUpdate")),
          this._repeat &&
            p !== g &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            Ie(this, "onRepeat"),
          (_ === this._tDur || !_) &&
            this._tTime === _ &&
            (f && !this._onUpdate && Fs(this, i, !0, !0),
            (i || !u) &&
              ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) &&
              Rr(this, 1),
            !n &&
              !(f && !a) &&
              (_ || a || v) &&
              (Ie(this, _ === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(_ < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        o.prototype.invalidate.call(this, i)
      );
    }),
    (r.resetTo = function (i, n, s, a, l) {
      hn || Re.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        f;
      return (
        this._initted || go(this, u),
        (f = this._ease(u / this._dur)),
        $u(this, i, n, s, a, f, u, l)
          ? this.resetTo(i, n, s, a, 1)
          : (fs(this, 0),
            this.parent ||
              Va(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (r.kill = function (i, n) {
      if ((n === void 0 && (n = "all"), !i && (!n || n === "all")))
        return (this._lazy = this._pt = 0), this.parent ? Wi(this) : this;
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, n, Cr && Cr.vars.overwrite !== !0)
            ._first || Wi(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            Ei(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = i ? He(i) : a,
        u = this._ptLookup,
        f = this._pt,
        _,
        d,
        c,
        p,
        h,
        g,
        v;
      if ((!n || n === "all") && xu(a, l))
        return n === "all" && (this._pt = 0), Wi(this);
      for (
        _ = this._op = this._op || [],
          n !== "all" &&
            (Ut(n) &&
              ((h = {}),
              Se(n, function (x) {
                return (h[x] = 1);
              }),
              (n = h)),
            (n = Hu(a, n))),
          v = a.length;
        v--;

      )
        if (~l.indexOf(a[v])) {
          (d = u[v]),
            n === "all"
              ? ((_[v] = n), (p = d), (c = {}))
              : ((c = _[v] = _[v] || {}), (p = n));
          for (h in p)
            (g = d && d[h]),
              g &&
                ((!("kill" in g.d) || g.d.kill(h) === !0) && us(this, g, "_pt"),
                delete d[h]),
              c !== "all" && (c[h] = 1);
        }
      return this._initted && !this._pt && f && Wi(this), this;
    }),
    (t.to = function (i, n) {
      return new t(i, n, arguments[2]);
    }),
    (t.from = function (i, n) {
      return Qi(1, arguments);
    }),
    (t.delayedCall = function (i, n, s, a) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: a,
      });
    }),
    (t.fromTo = function (i, n, s) {
      return Qi(2, arguments);
    }),
    (t.set = function (i, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(i, n);
    }),
    (t.killTweensOf = function (i, n, s) {
      return kt.killTweensOf(i, n, s);
    }),
    t
  );
})(pn);
qe(Ft.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Se("staggerTo,staggerFrom,staggerFromTo", function (o) {
  Ft[o] = function () {
    var t = new me(),
      r = Vs.call(arguments, 0);
    return r.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, r);
  };
});
var mo = function (t, r, e) {
    return (t[r] = e);
  },
  ul = function (t, r, e) {
    return t[r](e);
  },
  qu = function (t, r, e, i) {
    return t[r](i.fp, e);
  },
  Uu = function (t, r, e) {
    return t.setAttribute(r, e);
  },
  yo = function (t, r) {
    return Ot(t[r]) ? ul : ao(t[r]) && t.setAttribute ? Uu : mo;
  },
  cl = function (t, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * t) * 1e6) / 1e6, r);
  },
  Gu = function (t, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * t), r);
  },
  fl = function (t, r) {
    var e = r._pt,
      i = "";
    if (!t && r.b) i = r.b;
    else if (t === 1 && r.e) i = r.e;
    else {
      for (; e; )
        (i =
          e.p +
          (e.m ? e.m(e.s + e.c * t) : Math.round((e.s + e.c * t) * 1e4) / 1e4) +
          i),
          (e = e._next);
      i += r.c;
    }
    r.set(r.t, r.p, i, r);
  },
  vo = function (t, r) {
    for (var e = r._pt; e; ) e.r(t, e.d), (e = e._next);
  },
  ju = function (t, r, e, i) {
    for (var n = this._pt, s; n; )
      (s = n._next), n.p === i && n.modifier(t, r, e), (n = s);
  },
  Qu = function (t) {
    for (var r = this._pt, e, i; r; )
      (i = r._next),
        (r.p === t && !r.op) || r.op === t
          ? us(this, r, "_pt")
          : r.dep || (e = 1),
        (r = i);
    return !e;
  },
  Ku = function (t, r, e, i) {
    i.mSet(t, r, i.m.call(i.tween, e, i.mt), i);
  },
  dl = function (t) {
    for (var r = t._pt, e, i, n, s; r; ) {
      for (e = r._next, i = n; i && i.pr > r.pr; ) i = i._next;
      (r._prev = i ? i._prev : s) ? (r._prev._next = r) : (n = r),
        (r._next = i) ? (i._prev = r) : (s = r),
        (r = e);
    }
    t._pt = n;
  },
  Ce = (function () {
    function o(r, e, i, n, s, a, l, u, f) {
      (this.t = e),
        (this.s = n),
        (this.c = s),
        (this.p = i),
        (this.r = a || cl),
        (this.d = l || this),
        (this.set = u || mo),
        (this.pr = f || 0),
        (this._next = r),
        r && (r._prev = this);
    }
    var t = o.prototype;
    return (
      (t.modifier = function (e, i, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = Ku),
          (this.m = e),
          (this.mt = n),
          (this.tween = i);
      }),
      o
    );
  })();
Se(
  ho +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (o) {
    return (fo[o] = 1);
  }
);
Ne.TweenMax = Ne.TweenLite = Ft;
Ne.TimelineLite = Ne.TimelineMax = me;
kt = new me({
  sortChildren: !1,
  defaults: Ci,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
ze.stringFilter = el;
var Kr = [],
  Wn = {},
  Zu = [],
  Vo = 0,
  Ju = 0,
  vs = function (t) {
    return (Wn[t] || Zu).map(function (r) {
      return r();
    });
  },
  Hs = function () {
    var t = Date.now(),
      r = [];
    t - Vo > 2 &&
      (vs("matchMediaInit"),
      Kr.forEach(function (e) {
        var i = e.queries,
          n = e.conditions,
          s,
          a,
          l,
          u;
        for (a in i)
          (s = nr.matchMedia(i[a]).matches),
            s && (l = 1),
            s !== n[a] && ((n[a] = s), (u = 1));
        u && (e.revert(), l && r.push(e));
      }),
      vs("matchMediaRevert"),
      r.forEach(function (e) {
        return e.onMatch(e, function (i) {
          return e.add(null, i);
        });
      }),
      (Vo = t),
      vs("matchMedia"));
  },
  hl = (function () {
    function o(r, e) {
      (this.selector = e && Ws(e)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Ju++),
        r && this.add(r);
    }
    var t = o.prototype;
    return (
      (t.add = function (e, i, n) {
        Ot(e) && ((n = i), (i = e), (e = Ot));
        var s = this,
          a = function () {
            var u = bt,
              f = s.selector,
              _;
            return (
              u && u !== s && u.data.push(s),
              n && (s.selector = Ws(n)),
              (bt = s),
              (_ = i.apply(s, arguments)),
              Ot(_) && s._r.push(_),
              (bt = u),
              (s.selector = f),
              (s.isReverted = !1),
              _
            );
          };
        return (
          (s.last = a),
          e === Ot
            ? a(s, function (l) {
                return s.add(null, l);
              })
            : e
            ? (s[e] = a)
            : a
        );
      }),
      (t.ignore = function (e) {
        var i = bt;
        (bt = null), e(this), (bt = i);
      }),
      (t.getTweens = function () {
        var e = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof o
              ? e.push.apply(e, i.getTweens())
              : i instanceof Ft &&
                  !(i.parent && i.parent.data === "nested") &&
                  e.push(i);
          }),
          e
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, i) {
        var n = this;
        if (
          (e
            ? (function () {
                for (var a = n.getTweens(), l = n.data.length, u; l--; )
                  (u = n.data[l]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (f) {
                        return a.splice(a.indexOf(f), 1);
                      }));
                for (
                  a
                    .map(function (f) {
                      return {
                        g:
                          f._dur ||
                          f._delay ||
                          (f._sat && !f._sat.vars.immediateRender)
                            ? f.globalTime(0)
                            : -1 / 0,
                        t: f,
                      };
                    })
                    .sort(function (f, _) {
                      return _.g - f.g || -1 / 0;
                    })
                    .forEach(function (f) {
                      return f.t.revert(e);
                    }),
                    l = n.data.length;
                  l--;

                )
                  (u = n.data[l]),
                    u instanceof me
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof Ft) && u.revert && u.revert(e);
                n._r.forEach(function (f) {
                  return f(e, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          i)
        )
          for (var s = Kr.length; s--; )
            Kr[s].id === this.id && Kr.splice(s, 1);
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      o
    );
  })(),
  tc = (function () {
    function o(r) {
      (this.contexts = []), (this.scope = r), bt && bt.data.push(this);
    }
    var t = o.prototype;
    return (
      (t.add = function (e, i, n) {
        fr(e) || (e = { matches: e });
        var s = new hl(0, n || this.scope),
          a = (s.conditions = {}),
          l,
          u,
          f;
        bt && !s.selector && (s.selector = bt.selector),
          this.contexts.push(s),
          (i = s.add("onMatch", i)),
          (s.queries = e);
        for (u in e)
          u === "all"
            ? (f = 1)
            : ((l = nr.matchMedia(e[u])),
              l &&
                (Kr.indexOf(s) < 0 && Kr.push(s),
                (a[u] = l.matches) && (f = 1),
                l.addListener
                  ? l.addListener(Hs)
                  : l.addEventListener("change", Hs)));
        return (
          f &&
            i(s, function (_) {
              return s.add(null, _);
            }),
          this
        );
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (e) {
        this.contexts.forEach(function (i) {
          return i.kill(e, !0);
        });
      }),
      o
    );
  })(),
  ts = {
    registerPlugin: function () {
      for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
        r[e] = arguments[e];
      r.forEach(function (i) {
        return Za(i);
      });
    },
    timeline: function (t) {
      return new me(t);
    },
    getTweensOf: function (t, r) {
      return kt.getTweensOf(t, r);
    },
    getProperty: function (t, r, e, i) {
      Ut(t) && (t = He(t)[0]);
      var n = Gr(t || {}).get,
        s = e ? Ba : Fa;
      return (
        e === "native" && (e = ""),
        t &&
          (r
            ? s(((Ae[r] && Ae[r].get) || n)(t, r, e, i))
            : function (a, l, u) {
                return s(((Ae[a] && Ae[a].get) || n)(t, a, l, u));
              })
      );
    },
    quickSetter: function (t, r, e) {
      if (((t = He(t)), t.length > 1)) {
        var i = t.map(function (f) {
            return Ee.quickSetter(f, r, e);
          }),
          n = i.length;
        return function (f) {
          for (var _ = n; _--; ) i[_](f);
        };
      }
      t = t[0] || {};
      var s = Ae[r],
        a = Gr(t),
        l = (a.harness && (a.harness.aliases || {})[r]) || r,
        u = s
          ? function (f) {
              var _ = new s();
              (gi._pt = 0),
                _.init(t, e ? f + e : f, gi, 0, [t]),
                _.render(1, _),
                gi._pt && vo(1, gi);
            }
          : a.set(t, l);
      return s
        ? u
        : function (f) {
            return u(t, l, e ? f + e : f, a, 1);
          };
    },
    quickTo: function (t, r, e) {
      var i,
        n = Ee.to(
          t,
          ei(((i = {}), (i[r] = "+=0.1"), (i.paused = !0), i), e || {})
        ),
        s = function (l, u, f) {
          return n.resetTo(r, l, u, f);
        };
      return (s.tween = n), s;
    },
    isTweening: function (t) {
      return kt.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = Qr(t.ease, Ci.ease)), Io(Ci, t || {});
    },
    config: function (t) {
      return Io(ze, t || {});
    },
    registerEffect: function (t) {
      var r = t.name,
        e = t.effect,
        i = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      (i || "").split(",").forEach(function (a) {
        return (
          a && !Ae[a] && !Ne[a] && cn(r + " effect requires " + a + " plugin.")
        );
      }),
        (_s[r] = function (a, l, u) {
          return e(He(a), qe(l || {}, n), u);
        }),
        s &&
          (me.prototype[r] = function (a, l, u) {
            return this.add(_s[r](a, fr(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (t, r) {
      lt[t] = Qr(r);
    },
    parseEase: function (t, r) {
      return arguments.length ? Qr(t, r) : lt;
    },
    getById: function (t) {
      return kt.getById(t);
    },
    exportRoot: function (t, r) {
      t === void 0 && (t = {});
      var e = new me(t),
        i,
        n;
      for (
        e.smoothChildTiming = Te(t.smoothChildTiming),
          kt.remove(e),
          e._dp = 0,
          e._time = e._tTime = kt._time,
          i = kt._first;
        i;

      )
        (n = i._next),
          (r ||
            !(
              !i._dur &&
              i instanceof Ft &&
              i.vars.onComplete === i._targets[0]
            )) &&
            or(e, i, i._start - i._delay),
          (i = n);
      return or(kt, e, 0), e;
    },
    context: function (t, r) {
      return t ? new hl(t, r) : bt;
    },
    matchMedia: function (t) {
      return new tc(t);
    },
    matchMediaRefresh: function () {
      return (
        Kr.forEach(function (t) {
          var r = t.conditions,
            e,
            i;
          for (i in r) r[i] && ((r[i] = !1), (e = 1));
          e && t.revert();
        }) || Hs()
      );
    },
    addEventListener: function (t, r) {
      var e = Wn[t] || (Wn[t] = []);
      ~e.indexOf(r) || e.push(r);
    },
    removeEventListener: function (t, r) {
      var e = Wn[t],
        i = e && e.indexOf(r);
      i >= 0 && e.splice(i, 1);
    },
    utils: {
      wrap: Au,
      wrapYoyo: Ru,
      distribute: qa,
      random: Ga,
      snap: Ua,
      normalize: Du,
      getUnit: oe,
      clamp: Eu,
      splitColor: Ja,
      toArray: He,
      selector: Ws,
      mapRange: Qa,
      pipe: Ou,
      unitize: Mu,
      interpolate: Lu,
      shuffle: Xa,
    },
    install: Ra,
    effects: _s,
    ticker: Re,
    updateRoot: me.updateRoot,
    plugins: Ae,
    globalTimeline: kt,
    core: {
      PropTween: Ce,
      globals: La,
      Tween: Ft,
      Timeline: me,
      Animation: pn,
      getCache: Gr,
      _removeLinkedListItem: us,
      reverting: function () {
        return ae;
      },
      context: function (t) {
        return t && bt && (bt.data.push(t), (t._ctx = bt)), bt;
      },
      suppressOverwrites: function (t) {
        return (oo = t);
      },
    },
  };
Se("to,from,fromTo,delayedCall,set,killTweensOf", function (o) {
  return (ts[o] = Ft[o]);
});
Re.add(me.updateRoot);
gi = ts.to({}, { duration: 0 });
var ec = function (t, r) {
    for (var e = t._pt; e && e.p !== r && e.op !== r && e.fp !== r; )
      e = e._next;
    return e;
  },
  rc = function (t, r) {
    var e = t._targets,
      i,
      n,
      s;
    for (i in r)
      for (n = e.length; n--; )
        (s = t._ptLookup[n][i]),
          s &&
            (s = s.d) &&
            (s._pt && (s = ec(s, i)),
            s && s.modifier && s.modifier(r[i], t, e[n], i));
  },
  xs = function (t, r) {
    return {
      name: t,
      rawVars: 1,
      init: function (i, n, s) {
        s._onInit = function (a) {
          var l, u;
          if (
            (Ut(n) &&
              ((l = {}),
              Se(n, function (f) {
                return (l[f] = 1);
              }),
              (n = l)),
            r)
          ) {
            l = {};
            for (u in n) l[u] = r(n[u]);
            n = l;
          }
          rc(a, n);
        };
      },
    };
  },
  Ee =
    ts.registerPlugin(
      {
        name: "attr",
        init: function (t, r, e, i, n) {
          var s, a, l;
          this.tween = e;
          for (s in r)
            (l = t.getAttribute(s) || ""),
              (a = this.add(
                t,
                "setAttribute",
                (l || 0) + "",
                r[s],
                i,
                n,
                0,
                0,
                s
              )),
              (a.op = s),
              (a.b = l),
              this._props.push(s);
        },
        render: function (t, r) {
          for (var e = r._pt; e; )
            ae ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), (e = e._next);
        },
      },
      {
        name: "endArray",
        init: function (t, r) {
          for (var e = r.length; e--; )
            this.add(t, e, t[e] || 0, r[e], 0, 0, 0, 0, 0, 1);
        },
      },
      xs("roundProps", Ys),
      xs("modifiers"),
      xs("snap", Ua)
    ) || ts;
Ft.version = me.version = Ee.version = "3.12.5";
Aa = 1;
lo() && Pi();
lt.Power0;
lt.Power1;
lt.Power2;
lt.Power3;
lt.Power4;
lt.Linear;
lt.Quad;
lt.Cubic;
lt.Quart;
lt.Quint;
lt.Strong;
lt.Elastic;
lt.Back;
lt.SteppedEase;
lt.Bounce;
lt.Sine;
lt.Expo;
lt.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Wo,
  kr,
  xi,
  xo,
  qr,
  Yo,
  wo,
  ic = function () {
    return typeof window < "u";
  },
  xr = {},
  $r = 180 / Math.PI,
  wi = Math.PI / 180,
  ci = Math.atan2,
  $o = 1e8,
  bo = /([A-Z])/g,
  nc = /(left|right|width|margin|padding|x)/i,
  sc = /[\s,\(]\S/,
  ar = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Xs = function (t, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u, r);
  },
  oc = function (t, r) {
    return r.set(
      r.t,
      r.p,
      t === 1 ? r.e : Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u,
      r
    );
  },
  ac = function (t, r) {
    return r.set(
      r.t,
      r.p,
      t ? Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u : r.b,
      r
    );
  },
  lc = function (t, r) {
    var e = r.s + r.c * t;
    r.set(r.t, r.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + r.u, r);
  },
  pl = function (t, r) {
    return r.set(r.t, r.p, t ? r.e : r.b, r);
  },
  _l = function (t, r) {
    return r.set(r.t, r.p, t !== 1 ? r.b : r.e, r);
  },
  uc = function (t, r, e) {
    return (t.style[r] = e);
  },
  cc = function (t, r, e) {
    return t.style.setProperty(r, e);
  },
  fc = function (t, r, e) {
    return (t._gsap[r] = e);
  },
  dc = function (t, r, e) {
    return (t._gsap.scaleX = t._gsap.scaleY = e);
  },
  hc = function (t, r, e, i, n) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = e), s.renderTransform(n, s);
  },
  pc = function (t, r, e, i, n) {
    var s = t._gsap;
    (s[r] = e), s.renderTransform(n, s);
  },
  Et = "transform",
  ke = Et + "Origin",
  _c = function o(t, r) {
    var e = this,
      i = this.target,
      n = i.style,
      s = i._gsap;
    if (t in xr && n) {
      if (((this.tfm = this.tfm || {}), t !== "transform"))
        (t = ar[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (a) {
                return (e.tfm[a] = _r(i, a));
              })
            : (this.tfm[t] = s.x ? s[t] : _r(i, t)),
          t === ke && (this.tfm.zOrigin = s.zOrigin);
      else
        return ar.transform.split(",").forEach(function (a) {
          return o.call(e, a, r);
        });
      if (this.props.indexOf(Et) >= 0) return;
      s.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(ke, r, "")),
        (t = Et);
    }
    (n || r) && this.props.push(t, r, n[t]);
  },
  gl = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  gc = function () {
    var t = this.props,
      r = this.target,
      e = r.style,
      i = r._gsap,
      n,
      s;
    for (n = 0; n < t.length; n += 3)
      t[n + 1]
        ? (r[t[n]] = t[n + 2])
        : t[n + 2]
        ? (e[t[n]] = t[n + 2])
        : e.removeProperty(
            t[n].substr(0, 2) === "--"
              ? t[n]
              : t[n].replace(bo, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) i[s] = this.tfm[s];
      i.svg &&
        (i.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        (n = wo()),
        (!n || !n.isStart) &&
          !e[Et] &&
          (gl(e),
          i.zOrigin &&
            e[ke] &&
            ((e[ke] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  },
  ml = function (t, r) {
    var e = { target: t, props: [], revert: gc, save: _c };
    return (
      t._gsap || Ee.core.getCache(t),
      r &&
        r.split(",").forEach(function (i) {
          return e.save(i);
        }),
      e
    );
  },
  yl,
  qs = function (t, r) {
    var e = kr.createElementNS
      ? kr.createElementNS(
          (r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : kr.createElement(t);
    return e && e.style ? e : kr.createElement(t);
  },
  ur = function o(t, r, e) {
    var i = getComputedStyle(t);
    return (
      i[r] ||
      i.getPropertyValue(r.replace(bo, "-$1").toLowerCase()) ||
      i.getPropertyValue(r) ||
      (!e && o(t, Oi(r) || r, 1)) ||
      ""
    );
  },
  Ho = "O,Moz,ms,Ms,Webkit".split(","),
  Oi = function (t, r, e) {
    var i = r || qr,
      n = i.style,
      s = 5;
    if (t in n && !e) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      s-- && !(Ho[s] + t in n);

    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Ho[s] : "") + t;
  },
  Us = function () {
    ic() &&
      window.document &&
      ((Wo = window),
      (kr = Wo.document),
      (xi = kr.documentElement),
      (qr = qs("div") || { style: {} }),
      qs("div"),
      (Et = Oi(Et)),
      (ke = Et + "Origin"),
      (qr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (yl = !!Oi("perspective")),
      (wo = Ee.core.reverting),
      (xo = 1));
  },
  ws = function o(t) {
    var r = qs(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      e = this.parentNode,
      i = this.nextSibling,
      n = this.style.cssText,
      s;
    if (
      (xi.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (s = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = o);
      } catch {}
    else this._gsapBBox && (s = this._gsapBBox());
    return (
      e && (i ? e.insertBefore(this, i) : e.appendChild(this)),
      xi.removeChild(r),
      (this.style.cssText = n),
      s
    );
  },
  Xo = function (t, r) {
    for (var e = r.length; e--; )
      if (t.hasAttribute(r[e])) return t.getAttribute(r[e]);
  },
  vl = function (t) {
    var r;
    try {
      r = t.getBBox();
    } catch {
      r = ws.call(t, !0);
    }
    return (
      (r && (r.width || r.height)) || t.getBBox === ws || (r = ws.call(t, !0)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +Xo(t, ["x", "cx", "x1"]) || 0,
            y: +Xo(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : r
    );
  },
  xl = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && vl(t));
  },
  ri = function (t, r) {
    if (r) {
      var e = t.style,
        i;
      r in xr && r !== ke && (r = Et),
        e.removeProperty
          ? ((i = r.substr(0, 2)),
            (i === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
            e.removeProperty(
              i === "--" ? r : r.replace(bo, "-$1").toLowerCase()
            ))
          : e.removeAttribute(r);
    }
  },
  Er = function (t, r, e, i, n, s) {
    var a = new Ce(t._pt, r, e, 0, 1, s ? _l : pl);
    return (t._pt = a), (a.b = i), (a.e = n), t._props.push(e), a;
  },
  qo = { deg: 1, rad: 1, turn: 1 },
  mc = { grid: 1, flex: 1 },
  Lr = function o(t, r, e, i) {
    var n = parseFloat(e) || 0,
      s = (e + "").trim().substr((n + "").length) || "px",
      a = qr.style,
      l = nc.test(r),
      u = t.tagName.toLowerCase() === "svg",
      f = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      _ = 100,
      d = i === "px",
      c = i === "%",
      p,
      h,
      g,
      v;
    if (i === s || !n || qo[i] || qo[s]) return n;
    if (
      (s !== "px" && !d && (n = o(t, r, e, "px")),
      (v = t.getCTM && xl(t)),
      (c || s === "%") && (xr[r] || ~r.indexOf("adius")))
    )
      return (
        (p = v ? t.getBBox()[l ? "width" : "height"] : t[f]),
        Lt(c ? (n / p) * _ : (n / 100) * p)
      );
    if (
      ((a[l ? "width" : "height"] = _ + (d ? s : i)),
      (h =
        ~r.indexOf("adius") || (i === "em" && t.appendChild && !u)
          ? t
          : t.parentNode),
      v && (h = (t.ownerSVGElement || {}).parentNode),
      (!h || h === kr || !h.appendChild) && (h = kr.body),
      (g = h._gsap),
      g && c && g.width && l && g.time === Re.time && !g.uncache)
    )
      return Lt((n / g.width) * _);
    if (c && (r === "height" || r === "width")) {
      var x = t.style[r];
      (t.style[r] = _ + i), (p = t[f]), x ? (t.style[r] = x) : ri(t, r);
    } else
      (c || s === "%") &&
        !mc[ur(h, "display")] &&
        (a.position = ur(t, "position")),
        h === t && (a.position = "static"),
        h.appendChild(qr),
        (p = qr[f]),
        h.removeChild(qr),
        (a.position = "absolute");
    return (
      l && c && ((g = Gr(h)), (g.time = Re.time), (g.width = h[f])),
      Lt(d ? (p * n) / _ : p && n ? (_ / p) * n : 0)
    );
  },
  _r = function (t, r, e, i) {
    var n;
    return (
      xo || Us(),
      r in ar &&
        r !== "transform" &&
        ((r = ar[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
      xr[r] && r !== "transform"
        ? ((n = gn(t, i)),
          (n =
            r !== "transformOrigin"
              ? n[r]
              : n.svg
              ? n.origin
              : rs(ur(t, ke)) + " " + n.zOrigin + "px"))
        : ((n = t.style[r]),
          (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) &&
            (n =
              (es[r] && es[r](t, r, e)) ||
              ur(t, r) ||
              za(t, r) ||
              (r === "opacity" ? 1 : 0))),
      e && !~(n + "").trim().indexOf(" ") ? Lr(t, r, n, e) + e : n
    );
  },
  yc = function (t, r, e, i) {
    if (!e || e === "none") {
      var n = Oi(r, t, 1),
        s = n && ur(t, n, 1);
      s && s !== e
        ? ((r = n), (e = s))
        : r === "borderColor" && (e = ur(t, "borderTopColor"));
    }
    var a = new Ce(this._pt, t.style, r, 0, 1, fl),
      l = 0,
      u = 0,
      f,
      _,
      d,
      c,
      p,
      h,
      g,
      v,
      x,
      w,
      T,
      C;
    if (
      ((a.b = e),
      (a.e = i),
      (e += ""),
      (i += ""),
      i === "auto" &&
        ((h = t.style[r]),
        (t.style[r] = i),
        (i = ur(t, r) || i),
        h ? (t.style[r] = h) : ri(t, r)),
      (f = [e, i]),
      el(f),
      (e = f[0]),
      (i = f[1]),
      (d = e.match(_i) || []),
      (C = i.match(_i) || []),
      C.length)
    ) {
      for (; (_ = _i.exec(i)); )
        (g = _[0]),
          (x = i.substring(l, _.index)),
          p
            ? (p = (p + 1) % 5)
            : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (p = 1),
          g !== (h = d[u++] || "") &&
            ((c = parseFloat(h) || 0),
            (T = h.substr((c + "").length)),
            g.charAt(1) === "=" && (g = vi(c, g) + T),
            (v = parseFloat(g)),
            (w = g.substr((v + "").length)),
            (l = _i.lastIndex - w.length),
            w ||
              ((w = w || ze.units[r] || T),
              l === i.length && ((i += w), (a.e += w))),
            T !== w && (c = Lr(t, r, h, w) || 0),
            (a._pt = {
              _next: a._pt,
              p: x || u === 1 ? x : ",",
              s: c,
              c: v - c,
              m: (p && p < 4) || r === "zIndex" ? Math.round : 0,
            }));
      a.c = l < i.length ? i.substring(l, i.length) : "";
    } else a.r = r === "display" && i === "none" ? _l : pl;
    return Ma.test(i) && (a.e = 0), (this._pt = a), a;
  },
  Uo = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  vc = function (t) {
    var r = t.split(" "),
      e = r[0],
      i = r[1] || "50%";
    return (
      (e === "top" || e === "bottom" || i === "left" || i === "right") &&
        ((t = e), (e = i), (i = t)),
      (r[0] = Uo[e] || e),
      (r[1] = Uo[i] || i),
      r.join(" ")
    );
  },
  xc = function (t, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var e = r.t,
        i = e.style,
        n = r.u,
        s = e._gsap,
        a,
        l,
        u;
      if (n === "all" || n === !0) (i.cssText = ""), (l = 1);
      else
        for (n = n.split(","), u = n.length; --u > -1; )
          (a = n[u]),
            xr[a] && ((l = 1), (a = a === "transformOrigin" ? ke : Et)),
            ri(e, a);
      l &&
        (ri(e, Et),
        s &&
          (s.svg && e.removeAttribute("transform"),
          gn(e, 1),
          (s.uncache = 1),
          gl(i)));
    }
  },
  es = {
    clearProps: function (t, r, e, i, n) {
      if (n.data !== "isFromStart") {
        var s = (t._pt = new Ce(t._pt, r, e, 0, 0, xc));
        return (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(e), 1;
      }
    },
  },
  _n = [1, 0, 0, 1, 0, 0],
  wl = {},
  bl = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  Go = function (t) {
    var r = ur(t, Et);
    return bl(r) ? _n : r.substr(7).match(Oa).map(Lt);
  },
  To = function (t, r) {
    var e = t._gsap || Gr(t),
      i = t.style,
      n = Go(t),
      s,
      a,
      l,
      u;
    return e.svg && t.getAttribute("transform")
      ? ((l = t.transform.baseVal.consolidate().matrix),
        (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
        n.join(",") === "1,0,0,1,0,0" ? _n : n)
      : (n === _n &&
          !t.offsetParent &&
          t !== xi &&
          !e.svg &&
          ((l = i.display),
          (i.display = "block"),
          (s = t.parentNode),
          (!s || !t.offsetParent) &&
            ((u = 1), (a = t.nextElementSibling), xi.appendChild(t)),
          (n = Go(t)),
          l ? (i.display = l) : ri(t, "display"),
          u &&
            (a
              ? s.insertBefore(t, a)
              : s
              ? s.appendChild(t)
              : xi.removeChild(t))),
        r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  Gs = function (t, r, e, i, n, s) {
    var a = t._gsap,
      l = n || To(t, !0),
      u = a.xOrigin || 0,
      f = a.yOrigin || 0,
      _ = a.xOffset || 0,
      d = a.yOffset || 0,
      c = l[0],
      p = l[1],
      h = l[2],
      g = l[3],
      v = l[4],
      x = l[5],
      w = r.split(" "),
      T = parseFloat(w[0]) || 0,
      C = parseFloat(w[1]) || 0,
      P,
      b,
      O,
      M;
    e
      ? l !== _n &&
        (b = c * g - p * h) &&
        ((O = T * (g / b) + C * (-h / b) + (h * x - g * v) / b),
        (M = T * (-p / b) + C * (c / b) - (c * x - p * v) / b),
        (T = O),
        (C = M))
      : ((P = vl(t)),
        (T = P.x + (~w[0].indexOf("%") ? (T / 100) * P.width : T)),
        (C = P.y + (~(w[1] || w[0]).indexOf("%") ? (C / 100) * P.height : C))),
      i || (i !== !1 && a.smooth)
        ? ((v = T - u),
          (x = C - f),
          (a.xOffset = _ + (v * c + x * h) - v),
          (a.yOffset = d + (v * p + x * g) - x))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = T),
      (a.yOrigin = C),
      (a.smooth = !!i),
      (a.origin = r),
      (a.originIsAbsolute = !!e),
      (t.style[ke] = "0px 0px"),
      s &&
        (Er(s, a, "xOrigin", u, T),
        Er(s, a, "yOrigin", f, C),
        Er(s, a, "xOffset", _, a.xOffset),
        Er(s, a, "yOffset", d, a.yOffset)),
      t.setAttribute("data-svg-origin", T + " " + C);
  },
  gn = function (t, r) {
    var e = t._gsap || new sl(t);
    if ("x" in e && !r && !e.uncache) return e;
    var i = t.style,
      n = e.scaleX < 0,
      s = "px",
      a = "deg",
      l = getComputedStyle(t),
      u = ur(t, ke) || "0",
      f,
      _,
      d,
      c,
      p,
      h,
      g,
      v,
      x,
      w,
      T,
      C,
      P,
      b,
      O,
      M,
      L,
      V,
      z,
      y,
      k,
      E,
      S,
      R,
      I,
      N,
      m,
      F,
      H,
      A,
      Q,
      tt;
    return (
      (f = _ = d = h = g = v = x = w = T = 0),
      (c = p = 1),
      (e.svg = !!(t.getCTM && xl(t))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[Et] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[Et] !== "none" ? l[Et] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (b = To(t, e.svg)),
      e.svg &&
        (e.uncache
          ? ((I = t.getBBox()),
            (u = e.xOrigin - I.x + "px " + (e.yOrigin - I.y) + "px"),
            (R = ""))
          : (R = !r && t.getAttribute("data-svg-origin")),
        Gs(t, R || u, !!R || e.originIsAbsolute, e.smooth !== !1, b)),
      (C = e.xOrigin || 0),
      (P = e.yOrigin || 0),
      b !== _n &&
        ((V = b[0]),
        (z = b[1]),
        (y = b[2]),
        (k = b[3]),
        (f = E = b[4]),
        (_ = S = b[5]),
        b.length === 6
          ? ((c = Math.sqrt(V * V + z * z)),
            (p = Math.sqrt(k * k + y * y)),
            (h = V || z ? ci(z, V) * $r : 0),
            (x = y || k ? ci(y, k) * $r + h : 0),
            x && (p *= Math.abs(Math.cos(x * wi))),
            e.svg && ((f -= C - (C * V + P * y)), (_ -= P - (C * z + P * k))))
          : ((tt = b[6]),
            (A = b[7]),
            (m = b[8]),
            (F = b[9]),
            (H = b[10]),
            (Q = b[11]),
            (f = b[12]),
            (_ = b[13]),
            (d = b[14]),
            (O = ci(tt, H)),
            (g = O * $r),
            O &&
              ((M = Math.cos(-O)),
              (L = Math.sin(-O)),
              (R = E * M + m * L),
              (I = S * M + F * L),
              (N = tt * M + H * L),
              (m = E * -L + m * M),
              (F = S * -L + F * M),
              (H = tt * -L + H * M),
              (Q = A * -L + Q * M),
              (E = R),
              (S = I),
              (tt = N)),
            (O = ci(-y, H)),
            (v = O * $r),
            O &&
              ((M = Math.cos(-O)),
              (L = Math.sin(-O)),
              (R = V * M - m * L),
              (I = z * M - F * L),
              (N = y * M - H * L),
              (Q = k * L + Q * M),
              (V = R),
              (z = I),
              (y = N)),
            (O = ci(z, V)),
            (h = O * $r),
            O &&
              ((M = Math.cos(O)),
              (L = Math.sin(O)),
              (R = V * M + z * L),
              (I = E * M + S * L),
              (z = z * M - V * L),
              (S = S * M - E * L),
              (V = R),
              (E = I)),
            g &&
              Math.abs(g) + Math.abs(h) > 359.9 &&
              ((g = h = 0), (v = 180 - v)),
            (c = Lt(Math.sqrt(V * V + z * z + y * y))),
            (p = Lt(Math.sqrt(S * S + tt * tt))),
            (O = ci(E, S)),
            (x = Math.abs(O) > 2e-4 ? O * $r : 0),
            (T = Q ? 1 / (Q < 0 ? -Q : Q) : 0)),
        e.svg &&
          ((R = t.getAttribute("transform")),
          (e.forceCSS = t.setAttribute("transform", "") || !bl(ur(t, Et))),
          R && t.setAttribute("transform", R))),
      Math.abs(x) > 90 &&
        Math.abs(x) < 270 &&
        (n
          ? ((c *= -1), (x += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
          : ((p *= -1), (x += x <= 0 ? 180 : -180))),
      (r = r || e.uncache),
      (e.x =
        f -
        ((e.xPercent =
          f &&
          ((!r && e.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
          ? (t.offsetWidth * e.xPercent) / 100
          : 0) +
        s),
      (e.y =
        _ -
        ((e.yPercent =
          _ &&
          ((!r && e.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0)))
          ? (t.offsetHeight * e.yPercent) / 100
          : 0) +
        s),
      (e.z = d + s),
      (e.scaleX = Lt(c)),
      (e.scaleY = Lt(p)),
      (e.rotation = Lt(h) + a),
      (e.rotationX = Lt(g) + a),
      (e.rotationY = Lt(v) + a),
      (e.skewX = x + a),
      (e.skewY = w + a),
      (e.transformPerspective = T + s),
      (e.zOrigin = parseFloat(u.split(" ")[2]) || (!r && e.zOrigin) || 0) &&
        (i[ke] = rs(u)),
      (e.xOffset = e.yOffset = 0),
      (e.force3D = ze.force3D),
      (e.renderTransform = e.svg ? bc : yl ? Tl : wc),
      (e.uncache = 0),
      e
    );
  },
  rs = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  bs = function (t, r, e) {
    var i = oe(r);
    return Lt(parseFloat(r) + parseFloat(Lr(t, "x", e + "px", i))) + i;
  },
  wc = function (t, r) {
    (r.z = "0px"),
      (r.rotationY = r.rotationX = "0deg"),
      (r.force3D = 0),
      Tl(t, r);
  },
  Wr = "0deg",
  Ii = "0px",
  Yr = ") ",
  Tl = function (t, r) {
    var e = r || this,
      i = e.xPercent,
      n = e.yPercent,
      s = e.x,
      a = e.y,
      l = e.z,
      u = e.rotation,
      f = e.rotationY,
      _ = e.rotationX,
      d = e.skewX,
      c = e.skewY,
      p = e.scaleX,
      h = e.scaleY,
      g = e.transformPerspective,
      v = e.force3D,
      x = e.target,
      w = e.zOrigin,
      T = "",
      C = (v === "auto" && t && t !== 1) || v === !0;
    if (w && (_ !== Wr || f !== Wr)) {
      var P = parseFloat(f) * wi,
        b = Math.sin(P),
        O = Math.cos(P),
        M;
      (P = parseFloat(_) * wi),
        (M = Math.cos(P)),
        (s = bs(x, s, b * M * -w)),
        (a = bs(x, a, -Math.sin(P) * -w)),
        (l = bs(x, l, O * M * -w + w));
    }
    g !== Ii && (T += "perspective(" + g + Yr),
      (i || n) && (T += "translate(" + i + "%, " + n + "%) "),
      (C || s !== Ii || a !== Ii || l !== Ii) &&
        (T +=
          l !== Ii || C
            ? "translate3d(" + s + ", " + a + ", " + l + ") "
            : "translate(" + s + ", " + a + Yr),
      u !== Wr && (T += "rotate(" + u + Yr),
      f !== Wr && (T += "rotateY(" + f + Yr),
      _ !== Wr && (T += "rotateX(" + _ + Yr),
      (d !== Wr || c !== Wr) && (T += "skew(" + d + ", " + c + Yr),
      (p !== 1 || h !== 1) && (T += "scale(" + p + ", " + h + Yr),
      (x.style[Et] = T || "translate(0, 0)");
  },
  bc = function (t, r) {
    var e = r || this,
      i = e.xPercent,
      n = e.yPercent,
      s = e.x,
      a = e.y,
      l = e.rotation,
      u = e.skewX,
      f = e.skewY,
      _ = e.scaleX,
      d = e.scaleY,
      c = e.target,
      p = e.xOrigin,
      h = e.yOrigin,
      g = e.xOffset,
      v = e.yOffset,
      x = e.forceCSS,
      w = parseFloat(s),
      T = parseFloat(a),
      C,
      P,
      b,
      O,
      M;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (f = parseFloat(f)),
      f && ((f = parseFloat(f)), (u += f), (l += f)),
      l || u
        ? ((l *= wi),
          (u *= wi),
          (C = Math.cos(l) * _),
          (P = Math.sin(l) * _),
          (b = Math.sin(l - u) * -d),
          (O = Math.cos(l - u) * d),
          u &&
            ((f *= wi),
            (M = Math.tan(u - f)),
            (M = Math.sqrt(1 + M * M)),
            (b *= M),
            (O *= M),
            f &&
              ((M = Math.tan(f)),
              (M = Math.sqrt(1 + M * M)),
              (C *= M),
              (P *= M))),
          (C = Lt(C)),
          (P = Lt(P)),
          (b = Lt(b)),
          (O = Lt(O)))
        : ((C = _), (O = d), (P = b = 0)),
      ((w && !~(s + "").indexOf("px")) || (T && !~(a + "").indexOf("px"))) &&
        ((w = Lr(c, "x", s, "px")), (T = Lr(c, "y", a, "px"))),
      (p || h || g || v) &&
        ((w = Lt(w + p - (p * C + h * b) + g)),
        (T = Lt(T + h - (p * P + h * O) + v))),
      (i || n) &&
        ((M = c.getBBox()),
        (w = Lt(w + (i / 100) * M.width)),
        (T = Lt(T + (n / 100) * M.height))),
      (M =
        "matrix(" + C + "," + P + "," + b + "," + O + "," + w + "," + T + ")"),
      c.setAttribute("transform", M),
      x && (c.style[Et] = M);
  },
  Tc = function (t, r, e, i, n) {
    var s = 360,
      a = Ut(n),
      l = parseFloat(n) * (a && ~n.indexOf("rad") ? $r : 1),
      u = l - i,
      f = i + u + "deg",
      _,
      d;
    return (
      a &&
        ((_ = n.split("_")[1]),
        _ === "short" && ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -s)),
        _ === "cw" && u < 0
          ? (u = ((u + s * $o) % s) - ~~(u / s) * s)
          : _ === "ccw" && u > 0 && (u = ((u - s * $o) % s) - ~~(u / s) * s)),
      (t._pt = d = new Ce(t._pt, r, e, i, u, oc)),
      (d.e = f),
      (d.u = "deg"),
      t._props.push(e),
      d
    );
  },
  jo = function (t, r) {
    for (var e in r) t[e] = r[e];
    return t;
  },
  Sc = function (t, r, e) {
    var i = jo({}, e._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = e.style,
      a,
      l,
      u,
      f,
      _,
      d,
      c,
      p;
    i.svg
      ? ((u = e.getAttribute("transform")),
        e.setAttribute("transform", ""),
        (s[Et] = r),
        (a = gn(e, 1)),
        ri(e, Et),
        e.setAttribute("transform", u))
      : ((u = getComputedStyle(e)[Et]),
        (s[Et] = r),
        (a = gn(e, 1)),
        (s[Et] = u));
    for (l in xr)
      (u = i[l]),
        (f = a[l]),
        u !== f &&
          n.indexOf(l) < 0 &&
          ((c = oe(u)),
          (p = oe(f)),
          (_ = c !== p ? Lr(e, l, u, p) : parseFloat(u)),
          (d = parseFloat(f)),
          (t._pt = new Ce(t._pt, a, l, _, d - _, Xs)),
          (t._pt.u = p || 0),
          t._props.push(l));
    jo(a, i);
  };
Se("padding,margin,Width,Radius", function (o, t) {
  var r = "Top",
    e = "Right",
    i = "Bottom",
    n = "Left",
    s = (t < 3 ? [r, e, i, n] : [r + n, r + e, i + e, i + n]).map(function (a) {
      return t < 2 ? o + a : "border" + a + o;
    });
  es[t > 1 ? "border" + o : o] = function (a, l, u, f, _) {
    var d, c;
    if (arguments.length < 4)
      return (
        (d = s.map(function (p) {
          return _r(a, p, u);
        })),
        (c = d.join(" ")),
        c.split(d[0]).length === 5 ? d[0] : c
      );
    (d = (f + "").split(" ")),
      (c = {}),
      s.forEach(function (p, h) {
        return (c[p] = d[h] = d[h] || d[((h - 1) / 2) | 0]);
      }),
      a.init(l, c, _);
  };
});
var Sl = {
  name: "css",
  register: Us,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, r, e, i, n) {
    var s = this._props,
      a = t.style,
      l = e.vars.startAt,
      u,
      f,
      _,
      d,
      c,
      p,
      h,
      g,
      v,
      x,
      w,
      T,
      C,
      P,
      b,
      O;
    xo || Us(),
      (this.styles = this.styles || ml(t)),
      (O = this.styles.props),
      (this.tween = e);
    for (h in r)
      if (h !== "autoRound" && ((f = r[h]), !(Ae[h] && ol(h, r, e, i, t, n)))) {
        if (
          ((c = typeof f),
          (p = es[h]),
          c === "function" && ((f = f.call(e, i, t, n)), (c = typeof f)),
          c === "string" && ~f.indexOf("random(") && (f = dn(f)),
          p)
        )
          p(this, t, h, f, e) && (b = 1);
        else if (h.substr(0, 2) === "--")
          (u = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
            (f += ""),
            (Dr.lastIndex = 0),
            Dr.test(u) || ((g = oe(u)), (v = oe(f))),
            v ? g !== v && (u = Lr(t, h, u, v) + v) : g && (f += g),
            this.add(a, "setProperty", u, f, i, n, 0, 0, h),
            s.push(h),
            O.push(h, 0, a[h]);
        else if (c !== "undefined") {
          if (
            (l && h in l
              ? ((u = typeof l[h] == "function" ? l[h].call(e, i, t, n) : l[h]),
                Ut(u) && ~u.indexOf("random(") && (u = dn(u)),
                oe(u + "") ||
                  u === "auto" ||
                  (u += ze.units[h] || oe(_r(t, h)) || ""),
                (u + "").charAt(1) === "=" && (u = _r(t, h)))
              : (u = _r(t, h)),
            (d = parseFloat(u)),
            (x = c === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
            x && (f = f.substr(2)),
            (_ = parseFloat(f)),
            h in ar &&
              (h === "autoAlpha" &&
                (d === 1 && _r(t, "visibility") === "hidden" && _ && (d = 0),
                O.push("visibility", 0, a.visibility),
                Er(
                  this,
                  a,
                  "visibility",
                  d ? "inherit" : "hidden",
                  _ ? "inherit" : "hidden",
                  !_
                )),
              h !== "scale" &&
                h !== "transform" &&
                ((h = ar[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
            (w = h in xr),
            w)
          ) {
            if (
              (this.styles.save(h),
              T ||
                ((C = t._gsap),
                (C.renderTransform && !r.parseTransform) ||
                  gn(t, r.parseTransform),
                (P = r.smoothOrigin !== !1 && C.smooth),
                (T = this._pt =
                  new Ce(this._pt, a, Et, 0, 1, C.renderTransform, C, 0, -1)),
                (T.dep = 1)),
              h === "scale")
            )
              (this._pt = new Ce(
                this._pt,
                C,
                "scaleY",
                C.scaleY,
                (x ? vi(C.scaleY, x + _) : _) - C.scaleY || 0,
                Xs
              )),
                (this._pt.u = 0),
                s.push("scaleY", h),
                (h += "X");
            else if (h === "transformOrigin") {
              O.push(ke, 0, a[ke]),
                (f = vc(f)),
                C.svg
                  ? Gs(t, f, 0, P, 0, this)
                  : ((v = parseFloat(f.split(" ")[2]) || 0),
                    v !== C.zOrigin && Er(this, C, "zOrigin", C.zOrigin, v),
                    Er(this, a, h, rs(u), rs(f)));
              continue;
            } else if (h === "svgOrigin") {
              Gs(t, f, 1, P, 0, this);
              continue;
            } else if (h in wl) {
              Tc(this, C, h, d, x ? vi(d, x + f) : f);
              continue;
            } else if (h === "smoothOrigin") {
              Er(this, C, "smooth", C.smooth, f);
              continue;
            } else if (h === "force3D") {
              C[h] = f;
              continue;
            } else if (h === "transform") {
              Sc(this, f, t);
              continue;
            }
          } else h in a || (h = Oi(h) || h);
          if (w || ((_ || _ === 0) && (d || d === 0) && !sc.test(f) && h in a))
            (g = (u + "").substr((d + "").length)),
              _ || (_ = 0),
              (v = oe(f) || (h in ze.units ? ze.units[h] : g)),
              g !== v && (d = Lr(t, h, u, v)),
              (this._pt = new Ce(
                this._pt,
                w ? C : a,
                h,
                d,
                (x ? vi(d, x + _) : _) - d,
                !w && (v === "px" || h === "zIndex") && r.autoRound !== !1
                  ? lc
                  : Xs
              )),
              (this._pt.u = v || 0),
              g !== v && v !== "%" && ((this._pt.b = u), (this._pt.r = ac));
          else if (h in a) yc.call(this, t, h, u, x ? x + f : f);
          else if (h in t) this.add(t, h, u || t[h], x ? x + f : f, i, n);
          else if (h !== "parseTransform") {
            co(h, f);
            continue;
          }
          w || (h in a ? O.push(h, 0, a[h]) : O.push(h, 1, u || t[h])),
            s.push(h);
        }
      }
    b && dl(this);
  },
  render: function (t, r) {
    if (r.tween._time || !wo())
      for (var e = r._pt; e; ) e.r(t, e.d), (e = e._next);
    else r.styles.revert();
  },
  get: _r,
  aliases: ar,
  getSetter: function (t, r, e) {
    var i = ar[r];
    return (
      i && i.indexOf(",") < 0 && (r = i),
      r in xr && r !== ke && (t._gsap.x || _r(t, "x"))
        ? e && Yo === e
          ? r === "scale"
            ? dc
            : fc
          : (Yo = e || {}) && (r === "scale" ? hc : pc)
        : t.style && !ao(t.style[r])
        ? uc
        : ~r.indexOf("-")
        ? cc
        : yo(t, r)
    );
  },
  core: { _removeProperty: ri, _getMatrix: To },
};
Ee.utils.checkPrefix = Oi;
Ee.core.getStyleSaver = ml;
(function (o, t, r, e) {
  var i = Se(o + "," + t + "," + r, function (n) {
    xr[n] = 1;
  });
  Se(t, function (n) {
    (ze.units[n] = "deg"), (wl[n] = 1);
  }),
    (ar[i[13]] = o + "," + t),
    Se(e, function (n) {
      var s = n.split(":");
      ar[s[1]] = i[s[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Se(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (o) {
    ze.units[o] = "px";
  }
);
Ee.registerPlugin(Sl);
var Kt = Ee.registerPlugin(Sl) || Ee;
Kt.core.Tween;
function Qo(o, t) {
  for (var r = 0; r < t.length; r++) {
    var e = t[r];
    (e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      "value" in e && (e.writable = !0),
      Object.defineProperty(o, e.key, e);
  }
}
function Cc(o, t, r) {
  return t && Qo(o.prototype, t), r && Qo(o, r), o;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Zt,
  Yn,
  Le,
  Pr,
  Or,
  bi,
  Cl,
  Hr,
  Zi,
  kl,
  mr,
  Ze,
  El,
  Pl = function () {
    return (
      Zt ||
      (typeof window < "u" && (Zt = window.gsap) && Zt.registerPlugin && Zt)
    );
  },
  Ol = 1,
  mi = [],
  st = [],
  cr = [],
  Ji = Date.now,
  js = function (t, r) {
    return r;
  },
  kc = function () {
    var t = Zi.core,
      r = t.bridge || {},
      e = t._scrollers,
      i = t._proxies;
    e.push.apply(e, st),
      i.push.apply(i, cr),
      (st = e),
      (cr = i),
      (js = function (s, a) {
        return r[s](a);
      });
  },
  Ar = function (t, r) {
    return ~cr.indexOf(t) && cr[cr.indexOf(t) + 1][r];
  },
  tn = function (t) {
    return !!~kl.indexOf(t);
  },
  fe = function (t, r, e, i, n) {
    return t.addEventListener(r, e, { passive: i !== !1, capture: !!n });
  },
  ce = function (t, r, e, i) {
    return t.removeEventListener(r, e, !!i);
  },
  Sn = "scrollLeft",
  Cn = "scrollTop",
  Qs = function () {
    return (mr && mr.isPressed) || st.cache++;
  },
  is = function (t, r) {
    var e = function i(n) {
      if (n || n === 0) {
        Ol && (Le.history.scrollRestoration = "manual");
        var s = mr && mr.isPressed;
        (n = i.v = Math.round(n) || (mr && mr.iOS ? 1 : 0)),
          t(n),
          (i.cacheID = st.cache),
          s && js("ss", n);
      } else
        (r || st.cache !== i.cacheID || js("ref")) &&
          ((i.cacheID = st.cache), (i.v = t()));
      return i.v + i.offset;
    };
    return (e.offset = 0), t && e;
  },
  ye = {
    s: Sn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: is(function (o) {
      return arguments.length
        ? Le.scrollTo(o, Yt.sc())
        : Le.pageXOffset || Pr[Sn] || Or[Sn] || bi[Sn] || 0;
    }),
  },
  Yt = {
    s: Cn,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: ye,
    sc: is(function (o) {
      return arguments.length
        ? Le.scrollTo(ye.sc(), o)
        : Le.pageYOffset || Pr[Cn] || Or[Cn] || bi[Cn] || 0;
    }),
  },
  we = function (t, r) {
    return (
      ((r && r._ctx && r._ctx.selector) || Zt.utils.toArray)(t)[0] ||
      (typeof t == "string" && Zt.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", t)
        : null)
    );
  },
  Ir = function (t, r) {
    var e = r.s,
      i = r.sc;
    tn(t) && (t = Pr.scrollingElement || Or);
    var n = st.indexOf(t),
      s = i === Yt.sc ? 1 : 2;
    !~n && (n = st.push(t) - 1), st[n + s] || fe(t, "scroll", Qs);
    var a = st[n + s],
      l =
        a ||
        (st[n + s] =
          is(Ar(t, e), !0) ||
          (tn(t)
            ? i
            : is(function (u) {
                return arguments.length ? (t[e] = u) : t[e];
              })));
    return (
      (l.target = t),
      a || (l.smooth = Zt.getProperty(t, "scrollBehavior") === "smooth"),
      l
    );
  },
  Ks = function (t, r, e) {
    var i = t,
      n = t,
      s = Ji(),
      a = s,
      l = r || 50,
      u = Math.max(500, l * 3),
      f = function (p, h) {
        var g = Ji();
        h || g - s > l
          ? ((n = i), (i = p), (a = s), (s = g))
          : e
          ? (i += p)
          : (i = n + ((p - n) / (g - a)) * (s - a));
      },
      _ = function () {
        (n = i = e ? 0 : i), (a = s = 0);
      },
      d = function (p) {
        var h = a,
          g = n,
          v = Ji();
        return (
          (p || p === 0) && p !== i && f(p),
          s === a || v - a > u
            ? 0
            : ((i + (e ? g : -g)) / ((e ? v : s) - h)) * 1e3
        );
      };
    return { update: f, reset: _, getVelocity: d };
  },
  zi = function (t, r) {
    return (
      r && !t._gsapAllow && t.preventDefault(),
      t.changedTouches ? t.changedTouches[0] : t
    );
  },
  Ko = function (t) {
    var r = Math.max.apply(Math, t),
      e = Math.min.apply(Math, t);
    return Math.abs(r) >= Math.abs(e) ? r : e;
  },
  Ml = function () {
    (Zi = Zt.core.globals().ScrollTrigger), Zi && Zi.core && kc();
  },
  Dl = function (t) {
    return (
      (Zt = t || Pl()),
      !Yn &&
        Zt &&
        typeof document < "u" &&
        document.body &&
        ((Le = window),
        (Pr = document),
        (Or = Pr.documentElement),
        (bi = Pr.body),
        (kl = [Le, Pr, Or, bi]),
        Zt.utils.clamp,
        (El = Zt.core.context || function () {}),
        (Hr = "onpointerenter" in bi ? "pointer" : "mouse"),
        (Cl = It.isTouch =
          Le.matchMedia &&
          Le.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Le ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Ze = It.eventTypes =
          (
            "ontouchstart" in Or
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Or
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Ol = 0);
        }, 500),
        Ml(),
        (Yn = 1)),
      Yn
    );
  };
ye.op = Yt;
st.cache = 0;
var It = (function () {
  function o(r) {
    this.init(r);
  }
  var t = o.prototype;
  return (
    (t.init = function (e) {
      Yn || Dl(Zt) || console.warn("Please gsap.registerPlugin(Observer)"),
        Zi || Ml();
      var i = e.tolerance,
        n = e.dragMinimum,
        s = e.type,
        a = e.target,
        l = e.lineHeight,
        u = e.debounce,
        f = e.preventDefault,
        _ = e.onStop,
        d = e.onStopDelay,
        c = e.ignore,
        p = e.wheelSpeed,
        h = e.event,
        g = e.onDragStart,
        v = e.onDragEnd,
        x = e.onDrag,
        w = e.onPress,
        T = e.onRelease,
        C = e.onRight,
        P = e.onLeft,
        b = e.onUp,
        O = e.onDown,
        M = e.onChangeX,
        L = e.onChangeY,
        V = e.onChange,
        z = e.onToggleX,
        y = e.onToggleY,
        k = e.onHover,
        E = e.onHoverEnd,
        S = e.onMove,
        R = e.ignoreCheck,
        I = e.isNormalizer,
        N = e.onGestureStart,
        m = e.onGestureEnd,
        F = e.onWheel,
        H = e.onEnable,
        A = e.onDisable,
        Q = e.onClick,
        tt = e.scrollSpeed,
        $ = e.capture,
        rt = e.allowClicks,
        W = e.lockAxis,
        G = e.onLockAxis;
      (this.target = a = we(a) || Or),
        (this.vars = e),
        c && (c = Zt.utils.toArray(c)),
        (i = i || 1e-9),
        (n = n || 0),
        (p = p || 1),
        (tt = tt || 1),
        (s = s || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(Le.getComputedStyle(bi).lineHeight) || 22);
      var ut,
        U,
        ht,
        et,
        dt,
        zt,
        Mt,
        D = this,
        Gt = 0,
        Jt = 0,
        ue = e.passive || !f,
        pt = Ir(a, ye),
        te = Ir(a, Yt),
        Pe = pt(),
        xe = te(),
        _t =
          ~s.indexOf("touch") &&
          !~s.indexOf("pointer") &&
          Ze[0] === "pointerdown",
        Fe = tn(a),
        ct = a.ownerDocument || Pr,
        Dt = [0, 0, 0],
        Bt = [0, 0, 0],
        At = 0,
        Ue = function () {
          return (At = Ji());
        },
        Tt = function (q, ft) {
          return (
            ((D.event = q) && c && ~c.indexOf(q.target)) ||
            (ft && _t && q.pointerType !== "touch") ||
            (R && R(q, ft))
          );
        },
        dr = function () {
          D._vx.reset(), D._vy.reset(), U.pause(), _ && _(D);
        },
        wr = function () {
          var q = (D.deltaX = Ko(Dt)),
            ft = (D.deltaY = Ko(Bt)),
            B = Math.abs(q) >= i,
            Z = Math.abs(ft) >= i;
          V && (B || Z) && V(D, q, ft, Dt, Bt),
            B &&
              (C && D.deltaX > 0 && C(D),
              P && D.deltaX < 0 && P(D),
              M && M(D),
              z && D.deltaX < 0 != Gt < 0 && z(D),
              (Gt = D.deltaX),
              (Dt[0] = Dt[1] = Dt[2] = 0)),
            Z &&
              (O && D.deltaY > 0 && O(D),
              b && D.deltaY < 0 && b(D),
              L && L(D),
              y && D.deltaY < 0 != Jt < 0 && y(D),
              (Jt = D.deltaY),
              (Bt[0] = Bt[1] = Bt[2] = 0)),
            (et || ht) && (S && S(D), ht && (x(D), (ht = !1)), (et = !1)),
            zt && !(zt = !1) && G && G(D),
            dt && (F(D), (dt = !1)),
            (ut = 0);
        },
        ai = function (q, ft, B) {
          (Dt[B] += q),
            (Bt[B] += ft),
            D._vx.update(q),
            D._vy.update(ft),
            u ? ut || (ut = requestAnimationFrame(wr)) : wr();
        },
        li = function (q, ft) {
          W &&
            !Mt &&
            ((D.axis = Mt = Math.abs(q) > Math.abs(ft) ? "x" : "y"), (zt = !0)),
            Mt !== "y" && ((Dt[2] += q), D._vx.update(q, !0)),
            Mt !== "x" && ((Bt[2] += ft), D._vy.update(ft, !0)),
            u ? ut || (ut = requestAnimationFrame(wr)) : wr();
        },
        br = function (q) {
          if (!Tt(q, 1)) {
            q = zi(q, f);
            var ft = q.clientX,
              B = q.clientY,
              Z = ft - D.x,
              X = B - D.y,
              j = D.isDragging;
            (D.x = ft),
              (D.y = B),
              (j ||
                Math.abs(D.startX - ft) >= n ||
                Math.abs(D.startY - B) >= n) &&
                (x && (ht = !0),
                j || (D.isDragging = !0),
                li(Z, X),
                j || (g && g(D)));
          }
        },
        Nr = (D.onPress = function (K) {
          Tt(K, 1) ||
            (K && K.button) ||
            ((D.axis = Mt = null),
            U.pause(),
            (D.isPressed = !0),
            (K = zi(K)),
            (Gt = Jt = 0),
            (D.startX = D.x = K.clientX),
            (D.startY = D.y = K.clientY),
            D._vx.reset(),
            D._vy.reset(),
            fe(I ? a : ct, Ze[1], br, ue, !0),
            (D.deltaX = D.deltaY = 0),
            w && w(D));
        }),
        nt = (D.onRelease = function (K) {
          if (!Tt(K, 1)) {
            ce(I ? a : ct, Ze[1], br, !0);
            var q = !isNaN(D.y - D.startY),
              ft = D.isDragging,
              B =
                ft &&
                (Math.abs(D.x - D.startX) > 3 || Math.abs(D.y - D.startY) > 3),
              Z = zi(K);
            !B &&
              q &&
              (D._vx.reset(),
              D._vy.reset(),
              f &&
                rt &&
                Zt.delayedCall(0.08, function () {
                  if (Ji() - At > 300 && !K.defaultPrevented) {
                    if (K.target.click) K.target.click();
                    else if (ct.createEvent) {
                      var X = ct.createEvent("MouseEvents");
                      X.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Le,
                        1,
                        Z.screenX,
                        Z.screenY,
                        Z.clientX,
                        Z.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        K.target.dispatchEvent(X);
                    }
                  }
                })),
              (D.isDragging = D.isGesturing = D.isPressed = !1),
              _ && ft && !I && U.restart(!0),
              v && ft && v(D),
              T && T(D, B);
          }
        }),
        Fr = function (q) {
          return (
            q.touches &&
            q.touches.length > 1 &&
            (D.isGesturing = !0) &&
            N(q, D.isDragging)
          );
        },
        Ge = function () {
          return (D.isGesturing = !1) || m(D);
        },
        je = function (q) {
          if (!Tt(q)) {
            var ft = pt(),
              B = te();
            ai((ft - Pe) * tt, (B - xe) * tt, 1),
              (Pe = ft),
              (xe = B),
              _ && U.restart(!0);
          }
        },
        Qe = function (q) {
          if (!Tt(q)) {
            (q = zi(q, f)), F && (dt = !0);
            var ft =
              (q.deltaMode === 1 ? l : q.deltaMode === 2 ? Le.innerHeight : 1) *
              p;
            ai(q.deltaX * ft, q.deltaY * ft, 0), _ && !I && U.restart(!0);
          }
        },
        Br = function (q) {
          if (!Tt(q)) {
            var ft = q.clientX,
              B = q.clientY,
              Z = ft - D.x,
              X = B - D.y;
            (D.x = ft),
              (D.y = B),
              (et = !0),
              _ && U.restart(!0),
              (Z || X) && li(Z, X);
          }
        },
        ui = function (q) {
          (D.event = q), k(D);
        },
        hr = function (q) {
          (D.event = q), E(D);
        },
        Di = function (q) {
          return Tt(q) || (zi(q, f) && Q(D));
        };
      (U = D._dc = Zt.delayedCall(d || 0.25, dr).pause()),
        (D.deltaX = D.deltaY = 0),
        (D._vx = Ks(0, 50, !0)),
        (D._vy = Ks(0, 50, !0)),
        (D.scrollX = pt),
        (D.scrollY = te),
        (D.isDragging = D.isGesturing = D.isPressed = !1),
        El(this),
        (D.enable = function (K) {
          return (
            D.isEnabled ||
              (fe(Fe ? ct : a, "scroll", Qs),
              s.indexOf("scroll") >= 0 && fe(Fe ? ct : a, "scroll", je, ue, $),
              s.indexOf("wheel") >= 0 && fe(a, "wheel", Qe, ue, $),
              ((s.indexOf("touch") >= 0 && Cl) || s.indexOf("pointer") >= 0) &&
                (fe(a, Ze[0], Nr, ue, $),
                fe(ct, Ze[2], nt),
                fe(ct, Ze[3], nt),
                rt && fe(a, "click", Ue, !0, !0),
                Q && fe(a, "click", Di),
                N && fe(ct, "gesturestart", Fr),
                m && fe(ct, "gestureend", Ge),
                k && fe(a, Hr + "enter", ui),
                E && fe(a, Hr + "leave", hr),
                S && fe(a, Hr + "move", Br)),
              (D.isEnabled = !0),
              K && K.type && Nr(K),
              H && H(D)),
            D
          );
        }),
        (D.disable = function () {
          D.isEnabled &&
            (mi.filter(function (K) {
              return K !== D && tn(K.target);
            }).length || ce(Fe ? ct : a, "scroll", Qs),
            D.isPressed &&
              (D._vx.reset(), D._vy.reset(), ce(I ? a : ct, Ze[1], br, !0)),
            ce(Fe ? ct : a, "scroll", je, $),
            ce(a, "wheel", Qe, $),
            ce(a, Ze[0], Nr, $),
            ce(ct, Ze[2], nt),
            ce(ct, Ze[3], nt),
            ce(a, "click", Ue, !0),
            ce(a, "click", Di),
            ce(ct, "gesturestart", Fr),
            ce(ct, "gestureend", Ge),
            ce(a, Hr + "enter", ui),
            ce(a, Hr + "leave", hr),
            ce(a, Hr + "move", Br),
            (D.isEnabled = D.isPressed = D.isDragging = !1),
            A && A(D));
        }),
        (D.kill = D.revert =
          function () {
            D.disable();
            var K = mi.indexOf(D);
            K >= 0 && mi.splice(K, 1), mr === D && (mr = 0);
          }),
        mi.push(D),
        I && tn(a) && (mr = D),
        D.enable(h);
    }),
    Cc(o, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    o
  );
})();
It.version = "3.12.5";
It.create = function (o) {
  return new It(o);
};
It.register = Dl;
It.getAll = function () {
  return mi.slice();
};
It.getById = function (o) {
  return mi.filter(function (t) {
    return t.vars.id === o;
  })[0];
};
Pl() && Zt.registerPlugin(It);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Y,
  hi,
  at,
  Ct,
  Je,
  xt,
  Al,
  ns,
  mn,
  en,
  $i,
  kn,
  ne,
  ds,
  Zs,
  pe,
  Zo,
  Jo,
  pi,
  Rl,
  Ts,
  Ll,
  he,
  Js,
  Il,
  zl,
  Sr,
  to,
  So,
  Ti,
  Co,
  ss,
  eo,
  Ss,
  En = 1,
  se = Date.now,
  Cs = se(),
  Xe = 0,
  Hi = 0,
  ta = function (t, r, e) {
    var i = De(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
    return (e["_" + r + "Clamp"] = i), i ? t.substr(6, t.length - 7) : t;
  },
  ea = function (t, r) {
    return r && (!De(t) || t.substr(0, 6) !== "clamp(")
      ? "clamp(" + t + ")"
      : t;
  },
  Ec = function o() {
    return Hi && requestAnimationFrame(o);
  },
  ra = function () {
    return (ds = 1);
  },
  ia = function () {
    return (ds = 0);
  },
  sr = function (t) {
    return t;
  },
  Xi = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  Nl = function () {
    return typeof window < "u";
  },
  Fl = function () {
    return Y || (Nl() && (Y = window.gsap) && Y.registerPlugin && Y);
  },
  ii = function (t) {
    return !!~Al.indexOf(t);
  },
  Bl = function (t) {
    return (
      (t === "Height" ? Co : at["inner" + t]) ||
      Je["client" + t] ||
      xt["client" + t]
    );
  },
  Vl = function (t) {
    return (
      Ar(t, "getBoundingClientRect") ||
      (ii(t)
        ? function () {
            return (Un.width = at.innerWidth), (Un.height = Co), Un;
          }
        : function () {
            return gr(t);
          })
    );
  },
  Pc = function (t, r, e) {
    var i = e.d,
      n = e.d2,
      s = e.a;
    return (s = Ar(t, "getBoundingClientRect"))
      ? function () {
          return s()[i];
        }
      : function () {
          return (r ? Bl(n) : t["client" + n]) || 0;
        };
  },
  Oc = function (t, r) {
    return !r || ~cr.indexOf(t)
      ? Vl(t)
      : function () {
          return Un;
        };
  },
  lr = function (t, r) {
    var e = r.s,
      i = r.d2,
      n = r.d,
      s = r.a;
    return Math.max(
      0,
      (e = "scroll" + i) && (s = Ar(t, e))
        ? s() - Vl(t)()[n]
        : ii(t)
        ? (Je[e] || xt[e]) - Bl(i)
        : t[e] - t["offset" + i]
    );
  },
  Pn = function (t, r) {
    for (var e = 0; e < pi.length; e += 3)
      (!r || ~r.indexOf(pi[e + 1])) && t(pi[e], pi[e + 1], pi[e + 2]);
  },
  De = function (t) {
    return typeof t == "string";
  },
  ve = function (t) {
    return typeof t == "function";
  },
  qi = function (t) {
    return typeof t == "number";
  },
  Xr = function (t) {
    return typeof t == "object";
  },
  Ni = function (t, r, e) {
    return t && t.progress(r ? 0 : 1) && e && t.pause();
  },
  ks = function (t, r) {
    if (t.enabled) {
      var e = t._ctx
        ? t._ctx.add(function () {
            return r(t);
          })
        : r(t);
      e && e.totalTime && (t.callbackAnimation = e);
    }
  },
  fi = Math.abs,
  Wl = "left",
  Yl = "top",
  ko = "right",
  Eo = "bottom",
  Zr = "width",
  Jr = "height",
  rn = "Right",
  nn = "Left",
  sn = "Top",
  on = "Bottom",
  Nt = "padding",
  We = "margin",
  Mi = "Width",
  Po = "Height",
  Wt = "px",
  Ye = function (t) {
    return at.getComputedStyle(t);
  },
  Mc = function (t) {
    var r = Ye(t).position;
    t.style.position = r === "absolute" || r === "fixed" ? r : "relative";
  },
  na = function (t, r) {
    for (var e in r) e in t || (t[e] = r[e]);
    return t;
  },
  gr = function (t, r) {
    var e =
        r &&
        Ye(t)[Zs] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        Y.to(t, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      i = t.getBoundingClientRect();
    return e && e.progress(0).kill(), i;
  },
  os = function (t, r) {
    var e = r.d2;
    return t["offset" + e] || t["client" + e] || 0;
  },
  $l = function (t) {
    var r = [],
      e = t.labels,
      i = t.duration(),
      n;
    for (n in e) r.push(e[n] / i);
    return r;
  },
  Dc = function (t) {
    return function (r) {
      return Y.utils.snap($l(t), r);
    };
  },
  Oo = function (t) {
    var r = Y.utils.snap(t),
      e =
        Array.isArray(t) &&
        t.slice(0).sort(function (i, n) {
          return i - n;
        });
    return e
      ? function (i, n, s) {
          s === void 0 && (s = 0.001);
          var a;
          if (!n) return r(i);
          if (n > 0) {
            for (i -= s, a = 0; a < e.length; a++) if (e[a] >= i) return e[a];
            return e[a - 1];
          } else for (a = e.length, i += s; a--; ) if (e[a] <= i) return e[a];
          return e[0];
        }
      : function (i, n, s) {
          s === void 0 && (s = 0.001);
          var a = r(i);
          return !n || Math.abs(a - i) < s || a - i < 0 == n < 0
            ? a
            : r(n < 0 ? i - t : i + t);
        };
  },
  Ac = function (t) {
    return function (r, e) {
      return Oo($l(t))(r, e.direction);
    };
  },
  On = function (t, r, e, i) {
    return e.split(",").forEach(function (n) {
      return t(r, n, i);
    });
  },
  Xt = function (t, r, e, i, n) {
    return t.addEventListener(r, e, { passive: !i, capture: !!n });
  },
  Ht = function (t, r, e, i) {
    return t.removeEventListener(r, e, !!i);
  },
  Mn = function (t, r, e) {
    (e = e && e.wheelHandler), e && (t(r, "wheel", e), t(r, "touchmove", e));
  },
  sa = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Dn = { toggleActions: "play", anticipatePin: 0 },
  as = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  $n = function (t, r) {
    if (De(t)) {
      var e = t.indexOf("="),
        i = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
      ~e && (t.indexOf("%") > e && (i *= r / 100), (t = t.substr(0, e - 1))),
        (t =
          i +
          (t in as
            ? as[t] * r
            : ~t.indexOf("%")
            ? (parseFloat(t) * r) / 100
            : parseFloat(t) || 0));
    }
    return t;
  },
  An = function (t, r, e, i, n, s, a, l) {
    var u = n.startColor,
      f = n.endColor,
      _ = n.fontSize,
      d = n.indent,
      c = n.fontWeight,
      p = Ct.createElement("div"),
      h = ii(e) || Ar(e, "pinType") === "fixed",
      g = t.indexOf("scroller") !== -1,
      v = h ? xt : e,
      x = t.indexOf("start") !== -1,
      w = x ? u : f,
      T =
        "border-color:" +
        w +
        ";font-size:" +
        _ +
        ";color:" +
        w +
        ";font-weight:" +
        c +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (T += "position:" + ((g || l) && h ? "fixed;" : "absolute;")),
      (g || l || !h) &&
        (T += (i === Yt ? ko : Eo) + ":" + (s + parseFloat(d)) + "px;"),
      a &&
        (T +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = x),
      p.setAttribute("class", "gsap-marker-" + t + (r ? " marker-" + r : "")),
      (p.style.cssText = T),
      (p.innerText = r || r === 0 ? t + "-" + r : t),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p["offset" + i.op.d2]),
      Hn(p, 0, i, x),
      p
    );
  },
  Hn = function (t, r, e, i) {
    var n = { display: "block" },
      s = e[i ? "os2" : "p2"],
      a = e[i ? "p2" : "os2"];
    (t._isFlipped = i),
      (n[e.a + "Percent"] = i ? -100 : 0),
      (n[e.a] = i ? "1px" : 0),
      (n["border" + s + Mi] = 1),
      (n["border" + a + Mi] = 0),
      (n[e.p] = r + "px"),
      Y.set(t, n);
  },
  it = [],
  ro = {},
  yn,
  oa = function () {
    return se() - Xe > 34 && (yn || (yn = requestAnimationFrame(yr)));
  },
  di = function () {
    (!he || !he.isPressed || he.startX > xt.clientWidth) &&
      (st.cache++,
      he ? yn || (yn = requestAnimationFrame(yr)) : yr(),
      Xe || si("scrollStart"),
      (Xe = se()));
  },
  Es = function () {
    (zl = at.innerWidth), (Il = at.innerHeight);
  },
  Ui = function () {
    st.cache++,
      !ne &&
        !Ll &&
        !Ct.fullscreenElement &&
        !Ct.webkitFullscreenElement &&
        (!Js ||
          zl !== at.innerWidth ||
          Math.abs(at.innerHeight - Il) > at.innerHeight * 0.25) &&
        ns.restart(!0);
  },
  ni = {},
  Rc = [],
  Hl = function o() {
    return Ht(J, "scrollEnd", o) || Ur(!0);
  },
  si = function (t) {
    return (
      (ni[t] &&
        ni[t].map(function (r) {
          return r();
        })) ||
      Rc
    );
  },
  Me = [],
  Xl = function (t) {
    for (var r = 0; r < Me.length; r += 5)
      (!t || (Me[r + 4] && Me[r + 4].query === t)) &&
        ((Me[r].style.cssText = Me[r + 1]),
        Me[r].getBBox && Me[r].setAttribute("transform", Me[r + 2] || ""),
        (Me[r + 3].uncache = 1));
  },
  Mo = function (t, r) {
    var e;
    for (pe = 0; pe < it.length; pe++)
      (e = it[pe]),
        e && (!r || e._ctx === r) && (t ? e.kill(1) : e.revert(!0, !0));
    (ss = !0), r && Xl(r), r || si("revert");
  },
  ql = function (t, r) {
    st.cache++,
      (r || !_e) &&
        st.forEach(function (e) {
          return ve(e) && e.cacheID++ && (e.rec = 0);
        }),
      De(t) && (at.history.scrollRestoration = So = t);
  },
  _e,
  ti = 0,
  aa,
  Lc = function () {
    if (aa !== ti) {
      var t = (aa = ti);
      requestAnimationFrame(function () {
        return t === ti && Ur(!0);
      });
    }
  },
  Ul = function () {
    xt.appendChild(Ti),
      (Co = (!he && Ti.offsetHeight) || at.innerHeight),
      xt.removeChild(Ti);
  },
  la = function (t) {
    return mn(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (r) {
      return (r.style.display = t ? "none" : "block");
    });
  },
  Ur = function (t, r) {
    if (Xe && !t && !ss) {
      Xt(J, "scrollEnd", Hl);
      return;
    }
    Ul(),
      (_e = J.isRefreshing = !0),
      st.forEach(function (i) {
        return ve(i) && ++i.cacheID && (i.rec = i());
      });
    var e = si("refreshInit");
    Rl && J.sort(),
      r || Mo(),
      st.forEach(function (i) {
        ve(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
      }),
      it.slice(0).forEach(function (i) {
        return i.refresh();
      }),
      (ss = !1),
      it.forEach(function (i) {
        if (i._subPinOffset && i.pin) {
          var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
            s = i.pin[n];
          i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - s), i.refresh();
        }
      }),
      (eo = 1),
      la(!0),
      it.forEach(function (i) {
        var n = lr(i.scroller, i._dir),
          s = i.vars.end === "max" || (i._endClamp && i.end > n),
          a = i._startClamp && i.start >= n;
        (s || a) &&
          i.setPositions(
            a ? n - 1 : i.start,
            s ? Math.max(a ? n : i.start + 1, n) : i.end,
            !0
          );
      }),
      la(!1),
      (eo = 0),
      e.forEach(function (i) {
        return i && i.render && i.render(-1);
      }),
      st.forEach(function (i) {
        ve(i) &&
          (i.smooth &&
            requestAnimationFrame(function () {
              return (i.target.style.scrollBehavior = "smooth");
            }),
          i.rec && i(i.rec));
      }),
      ql(So, 1),
      ns.pause(),
      ti++,
      (_e = 2),
      yr(2),
      it.forEach(function (i) {
        return ve(i.vars.onRefresh) && i.vars.onRefresh(i);
      }),
      (_e = J.isRefreshing = !1),
      si("refresh");
  },
  io = 0,
  Xn = 1,
  an,
  yr = function (t) {
    if (t === 2 || (!_e && !ss)) {
      (J.isUpdating = !0), an && an.update(0);
      var r = it.length,
        e = se(),
        i = e - Cs >= 50,
        n = r && it[0].scroll();
      if (
        ((Xn = io > n ? -1 : 1),
        _e || (io = n),
        i &&
          (Xe && !ds && e - Xe > 200 && ((Xe = 0), si("scrollEnd")),
          ($i = Cs),
          (Cs = e)),
        Xn < 0)
      ) {
        for (pe = r; pe-- > 0; ) it[pe] && it[pe].update(0, i);
        Xn = 1;
      } else for (pe = 0; pe < r; pe++) it[pe] && it[pe].update(0, i);
      J.isUpdating = !1;
    }
    yn = 0;
  },
  no = [
    Wl,
    Yl,
    Eo,
    ko,
    We + on,
    We + rn,
    We + sn,
    We + nn,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  qn = no.concat([
    Zr,
    Jr,
    "boxSizing",
    "max" + Mi,
    "max" + Po,
    "position",
    We,
    Nt,
    Nt + sn,
    Nt + rn,
    Nt + on,
    Nt + nn,
  ]),
  Ic = function (t, r, e) {
    Si(e);
    var i = t._gsap;
    if (i.spacerIsNative) Si(i.spacerState);
    else if (t._gsap.swappedIn) {
      var n = r.parentNode;
      n && (n.insertBefore(t, r), n.removeChild(r));
    }
    t._gsap.swappedIn = !1;
  },
  Ps = function (t, r, e, i) {
    if (!t._gsap.swappedIn) {
      for (var n = no.length, s = r.style, a = t.style, l; n--; )
        (l = no[n]), (s[l] = e[l]);
      (s.position = e.position === "absolute" ? "absolute" : "relative"),
        e.display === "inline" && (s.display = "inline-block"),
        (a[Eo] = a[ko] = "auto"),
        (s.flexBasis = e.flexBasis || "auto"),
        (s.overflow = "visible"),
        (s.boxSizing = "border-box"),
        (s[Zr] = os(t, ye) + Wt),
        (s[Jr] = os(t, Yt) + Wt),
        (s[Nt] = a[We] = a[Yl] = a[Wl] = "0"),
        Si(i),
        (a[Zr] = a["max" + Mi] = e[Zr]),
        (a[Jr] = a["max" + Po] = e[Jr]),
        (a[Nt] = e[Nt]),
        t.parentNode !== r &&
          (t.parentNode.insertBefore(r, t), r.appendChild(t)),
        (t._gsap.swappedIn = !0);
    }
  },
  zc = /([A-Z])/g,
  Si = function (t) {
    if (t) {
      var r = t.t.style,
        e = t.length,
        i = 0,
        n,
        s;
      for ((t.t._gsap || Y.core.getCache(t.t)).uncache = 1; i < e; i += 2)
        (s = t[i + 1]),
          (n = t[i]),
          s
            ? (r[n] = s)
            : r[n] && r.removeProperty(n.replace(zc, "-$1").toLowerCase());
    }
  },
  Rn = function (t) {
    for (var r = qn.length, e = t.style, i = [], n = 0; n < r; n++)
      i.push(qn[n], e[qn[n]]);
    return (i.t = t), i;
  },
  Nc = function (t, r, e) {
    for (var i = [], n = t.length, s = e ? 8 : 0, a; s < n; s += 2)
      (a = t[s]), i.push(a, a in r ? r[a] : t[s + 1]);
    return (i.t = t.t), i;
  },
  Un = { left: 0, top: 0 },
  ua = function (t, r, e, i, n, s, a, l, u, f, _, d, c, p) {
    ve(t) && (t = t(l)),
      De(t) &&
        t.substr(0, 3) === "max" &&
        (t = d + (t.charAt(4) === "=" ? $n("0" + t.substr(3), e) : 0));
    var h = c ? c.time() : 0,
      g,
      v,
      x;
    if ((c && c.seek(0), isNaN(t) || (t = +t), qi(t)))
      c &&
        (t = Y.utils.mapRange(
          c.scrollTrigger.start,
          c.scrollTrigger.end,
          0,
          d,
          t
        )),
        a && Hn(a, e, i, !0);
    else {
      ve(r) && (r = r(l));
      var w = (t || "0").split(" "),
        T,
        C,
        P,
        b;
      (x = we(r, l) || xt),
        (T = gr(x) || {}),
        (!T || (!T.left && !T.top)) &&
          Ye(x).display === "none" &&
          ((b = x.style.display),
          (x.style.display = "block"),
          (T = gr(x)),
          b ? (x.style.display = b) : x.style.removeProperty("display")),
        (C = $n(w[0], T[i.d])),
        (P = $n(w[1] || "0", e)),
        (t = T[i.p] - u[i.p] - f + C + n - P),
        a && Hn(a, P, i, e - P < 20 || (a._isStart && P > 20)),
        (e -= e - P);
    }
    if ((p && ((l[p] = t || -0.001), t < 0 && (t = 0)), s)) {
      var O = t + e,
        M = s._isStart;
      (g = "scroll" + i.d2),
        Hn(
          s,
          O,
          i,
          (M && O > 20) ||
            (!M && (_ ? Math.max(xt[g], Je[g]) : s.parentNode[g]) <= O + 1)
        ),
        _ &&
          ((u = gr(a)),
          _ && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + Wt));
    }
    return (
      c &&
        x &&
        ((g = gr(x)),
        c.seek(d),
        (v = gr(x)),
        (c._caScrollDist = g[i.p] - v[i.p]),
        (t = (t / c._caScrollDist) * d)),
      c && c.seek(h),
      c ? t : Math.round(t)
    );
  },
  Fc = /(webkit|moz|length|cssText|inset)/i,
  ca = function (t, r, e, i) {
    if (t.parentNode !== r) {
      var n = t.style,
        s,
        a;
      if (r === xt) {
        (t._stOrig = n.cssText), (a = Ye(t));
        for (s in a)
          !+s &&
            !Fc.test(s) &&
            a[s] &&
            typeof n[s] == "string" &&
            s !== "0" &&
            (n[s] = a[s]);
        (n.top = e), (n.left = i);
      } else n.cssText = t._stOrig;
      (Y.core.getCache(t).uncache = 1), r.appendChild(t);
    }
  },
  Gl = function (t, r, e) {
    var i = r,
      n = i;
    return function (s) {
      var a = Math.round(t());
      return (
        a !== i &&
          a !== n &&
          Math.abs(a - i) > 3 &&
          Math.abs(a - n) > 3 &&
          ((s = a), e && e()),
        (n = i),
        (i = s),
        s
      );
    };
  },
  Ln = function (t, r, e) {
    var i = {};
    (i[r.p] = "+=" + e), Y.set(t, i);
  },
  fa = function (t, r) {
    var e = Ir(t, r),
      i = "_scroll" + r.p2,
      n = function s(a, l, u, f, _) {
        var d = s.tween,
          c = l.onComplete,
          p = {};
        u = u || e();
        var h = Gl(e, u, function () {
          d.kill(), (s.tween = 0);
        });
        return (
          (_ = (f && _) || 0),
          (f = f || a - u),
          d && d.kill(),
          (l[i] = a),
          (l.inherit = !1),
          (l.modifiers = p),
          (p[i] = function () {
            return h(u + f * d.ratio + _ * d.ratio * d.ratio);
          }),
          (l.onUpdate = function () {
            st.cache++, s.tween && yr();
          }),
          (l.onComplete = function () {
            (s.tween = 0), c && c.call(d);
          }),
          (d = s.tween = Y.to(t, l)),
          d
        );
      };
    return (
      (t[i] = e),
      (e.wheelHandler = function () {
        return n.tween && n.tween.kill() && (n.tween = 0);
      }),
      Xt(t, "wheel", e.wheelHandler),
      J.isTouch && Xt(t, "touchmove", e.wheelHandler),
      n
    );
  },
  J = (function () {
    function o(r, e) {
      hi ||
        o.register(Y) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        to(this),
        this.init(r, e);
    }
    var t = o.prototype;
    return (
      (t.init = function (e, i) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Hi)
        ) {
          this.update = this.refresh = this.kill = sr;
          return;
        }
        e = na(De(e) || qi(e) || e.nodeType ? { trigger: e } : e, Dn);
        var n = e,
          s = n.onUpdate,
          a = n.toggleClass,
          l = n.id,
          u = n.onToggle,
          f = n.onRefresh,
          _ = n.scrub,
          d = n.trigger,
          c = n.pin,
          p = n.pinSpacing,
          h = n.invalidateOnRefresh,
          g = n.anticipatePin,
          v = n.onScrubComplete,
          x = n.onSnapComplete,
          w = n.once,
          T = n.snap,
          C = n.pinReparent,
          P = n.pinSpacer,
          b = n.containerAnimation,
          O = n.fastScrollEnd,
          M = n.preventOverlaps,
          L =
            e.horizontal || (e.containerAnimation && e.horizontal !== !1)
              ? ye
              : Yt,
          V = !_ && _ !== 0,
          z = we(e.scroller || at),
          y = Y.core.getCache(z),
          k = ii(z),
          E =
            ("pinType" in e
              ? e.pinType
              : Ar(z, "pinType") || (k && "fixed")) === "fixed",
          S = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
          R = V && e.toggleActions.split(" "),
          I = "markers" in e ? e.markers : Dn.markers,
          N = k ? 0 : parseFloat(Ye(z)["border" + L.p2 + Mi]) || 0,
          m = this,
          F =
            e.onRefreshInit &&
            function () {
              return e.onRefreshInit(m);
            },
          H = Pc(z, k, L),
          A = Oc(z, k),
          Q = 0,
          tt = 0,
          $ = 0,
          rt = Ir(z, L),
          W,
          G,
          ut,
          U,
          ht,
          et,
          dt,
          zt,
          Mt,
          D,
          Gt,
          Jt,
          ue,
          pt,
          te,
          Pe,
          xe,
          _t,
          Fe,
          ct,
          Dt,
          Bt,
          At,
          Ue,
          Tt,
          dr,
          wr,
          ai,
          li,
          br,
          Nr,
          nt,
          Fr,
          Ge,
          je,
          Qe,
          Br,
          ui,
          hr;
        if (
          ((m._startClamp = m._endClamp = !1),
          (m._dir = L),
          (g *= 45),
          (m.scroller = z),
          (m.scroll = b ? b.time.bind(b) : rt),
          (U = rt()),
          (m.vars = e),
          (i = i || e.animation),
          "refreshPriority" in e &&
            ((Rl = 1), e.refreshPriority === -9999 && (an = m)),
          (y.tweenScroll = y.tweenScroll || {
            top: fa(z, Yt),
            left: fa(z, ye),
          }),
          (m.tweenTo = W = y.tweenScroll[L.p]),
          (m.scrubDuration = function (B) {
            (Fr = qi(B) && B),
              Fr
                ? nt
                  ? nt.duration(B)
                  : (nt = Y.to(i, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Fr,
                      paused: !0,
                      onComplete: function () {
                        return v && v(m);
                      },
                    }))
                : (nt && nt.progress(1).kill(), (nt = 0));
          }),
          i &&
            ((i.vars.lazy = !1),
            (i._initted && !m.isReverted) ||
              (i.vars.immediateRender !== !1 &&
                e.immediateRender !== !1 &&
                i.duration() &&
                i.render(0, !0, !0)),
            (m.animation = i.pause()),
            (i.scrollTrigger = m),
            m.scrubDuration(_),
            (br = 0),
            l || (l = i.vars.id)),
          T &&
            ((!Xr(T) || T.push) && (T = { snapTo: T }),
            "scrollBehavior" in xt.style &&
              Y.set(k ? [xt, Je] : z, { scrollBehavior: "auto" }),
            st.forEach(function (B) {
              return (
                ve(B) &&
                B.target === (k ? Ct.scrollingElement || Je : z) &&
                (B.smooth = !1)
              );
            }),
            (ut = ve(T.snapTo)
              ? T.snapTo
              : T.snapTo === "labels"
              ? Dc(i)
              : T.snapTo === "labelsDirectional"
              ? Ac(i)
              : T.directional !== !1
              ? function (B, Z) {
                  return Oo(T.snapTo)(B, se() - tt < 500 ? 0 : Z.direction);
                }
              : Y.utils.snap(T.snapTo)),
            (Ge = T.duration || { min: 0.1, max: 2 }),
            (Ge = Xr(Ge) ? en(Ge.min, Ge.max) : en(Ge, Ge)),
            (je = Y.delayedCall(T.delay || Fr / 2 || 0.1, function () {
              var B = rt(),
                Z = se() - tt < 500,
                X = W.tween;
              if (
                (Z || Math.abs(m.getVelocity()) < 10) &&
                !X &&
                !ds &&
                Q !== B
              ) {
                var j = (B - et) / pt,
                  $t = i && !V ? i.totalProgress() : j,
                  ot = Z ? 0 : (($t - Nr) / (se() - $i)) * 1e3 || 0,
                  Rt = Y.utils.clamp(-j, 1 - j, (fi(ot / 2) * ot) / 0.185),
                  ee = j + (T.inertia === !1 ? 0 : Rt),
                  Pt,
                  wt,
                  gt = T,
                  Ke = gt.onStart,
                  St = gt.onInterrupt,
                  Oe = gt.onComplete;
                if (
                  ((Pt = ut(ee, m)),
                  qi(Pt) || (Pt = ee),
                  (wt = Math.round(et + Pt * pt)),
                  B <= dt && B >= et && wt !== B)
                ) {
                  if (X && !X._initted && X.data <= fi(wt - B)) return;
                  T.inertia === !1 && (Rt = Pt - j),
                    W(
                      wt,
                      {
                        duration: Ge(
                          fi(
                            (Math.max(fi(ee - $t), fi(Pt - $t)) * 0.185) /
                              ot /
                              0.05 || 0
                          )
                        ),
                        ease: T.ease || "power3",
                        data: fi(wt - B),
                        onInterrupt: function () {
                          return je.restart(!0) && St && St(m);
                        },
                        onComplete: function () {
                          m.update(),
                            (Q = rt()),
                            i &&
                              (nt
                                ? nt.resetTo(
                                    "totalProgress",
                                    Pt,
                                    i._tTime / i._tDur
                                  )
                                : i.progress(Pt)),
                            (br = Nr =
                              i && !V ? i.totalProgress() : m.progress),
                            x && x(m),
                            Oe && Oe(m);
                        },
                      },
                      B,
                      Rt * pt,
                      wt - B - Rt * pt
                    ),
                    Ke && Ke(m, W.tween);
                }
              } else m.isActive && Q !== B && je.restart(!0);
            }).pause())),
          l && (ro[l] = m),
          (d = m.trigger = we(d || (c !== !0 && c))),
          (hr = d && d._gsap && d._gsap.stRevert),
          hr && (hr = hr(m)),
          (c = c === !0 ? d : we(c)),
          De(a) && (a = { targets: d, className: a }),
          c &&
            (p === !1 ||
              p === We ||
              (p =
                !p &&
                c.parentNode &&
                c.parentNode.style &&
                Ye(c.parentNode).display === "flex"
                  ? !1
                  : Nt),
            (m.pin = c),
            (G = Y.core.getCache(c)),
            G.spacer
              ? (te = G.pinState)
              : (P &&
                  ((P = we(P)),
                  P && !P.nodeType && (P = P.current || P.nativeElement),
                  (G.spacerIsNative = !!P),
                  P && (G.spacerState = Rn(P))),
                (G.spacer = _t = P || Ct.createElement("div")),
                _t.classList.add("pin-spacer"),
                l && _t.classList.add("pin-spacer-" + l),
                (G.pinState = te = Rn(c))),
            e.force3D !== !1 && Y.set(c, { force3D: !0 }),
            (m.spacer = _t = G.spacer),
            (li = Ye(c)),
            (Ue = li[p + L.os2]),
            (ct = Y.getProperty(c)),
            (Dt = Y.quickSetter(c, L.a, Wt)),
            Ps(c, _t, li),
            (xe = Rn(c))),
          I)
        ) {
          (Jt = Xr(I) ? na(I, sa) : sa),
            (D = An("scroller-start", l, z, L, Jt, 0)),
            (Gt = An("scroller-end", l, z, L, Jt, 0, D)),
            (Fe = D["offset" + L.op.d2]);
          var Di = we(Ar(z, "content") || z);
          (zt = this.markerStart = An("start", l, Di, L, Jt, Fe, 0, b)),
            (Mt = this.markerEnd = An("end", l, Di, L, Jt, Fe, 0, b)),
            b && (ui = Y.quickSetter([zt, Mt], L.a, Wt)),
            !E &&
              !(cr.length && Ar(z, "fixedMarkers") === !0) &&
              (Mc(k ? xt : z),
              Y.set([D, Gt], { force3D: !0 }),
              (dr = Y.quickSetter(D, L.a, Wt)),
              (ai = Y.quickSetter(Gt, L.a, Wt)));
        }
        if (b) {
          var K = b.vars.onUpdate,
            q = b.vars.onUpdateParams;
          b.eventCallback("onUpdate", function () {
            m.update(0, 0, 1), K && K.apply(b, q || []);
          });
        }
        if (
          ((m.previous = function () {
            return it[it.indexOf(m) - 1];
          }),
          (m.next = function () {
            return it[it.indexOf(m) + 1];
          }),
          (m.revert = function (B, Z) {
            if (!Z) return m.kill(!0);
            var X = B !== !1 || !m.enabled,
              j = ne;
            X !== m.isReverted &&
              (X &&
                ((Qe = Math.max(rt(), m.scroll.rec || 0)),
                ($ = m.progress),
                (Br = i && i.progress())),
              zt &&
                [zt, Mt, D, Gt].forEach(function ($t) {
                  return ($t.style.display = X ? "none" : "block");
                }),
              X && ((ne = m), m.update(X)),
              c &&
                (!C || !m.isActive) &&
                (X ? Ic(c, _t, te) : Ps(c, _t, Ye(c), Tt)),
              X || m.update(X),
              (ne = j),
              (m.isReverted = X));
          }),
          (m.refresh = function (B, Z, X, j) {
            if (!((ne || !m.enabled) && !Z)) {
              if (c && B && Xe) {
                Xt(o, "scrollEnd", Hl);
                return;
              }
              !_e && F && F(m),
                (ne = m),
                W.tween && !X && (W.tween.kill(), (W.tween = 0)),
                nt && nt.pause(),
                h && i && i.revert({ kill: !1 }).invalidate(),
                m.isReverted || m.revert(!0, !0),
                (m._subPinOffset = !1);
              var $t = H(),
                ot = A(),
                Rt = b ? b.duration() : lr(z, L),
                ee = pt <= 0.01,
                Pt = 0,
                wt = j || 0,
                gt = Xr(X) ? X.end : e.end,
                Ke = e.endTrigger || d,
                St = Xr(X)
                  ? X.start
                  : e.start || (e.start === 0 || !d ? 0 : c ? "0 0" : "0 100%"),
                Oe = (m.pinnedContainer =
                  e.pinnedContainer && we(e.pinnedContainer, m)),
                er = (d && Math.max(0, it.indexOf(m))) || 0,
                jt = er,
                Qt,
                re,
                Vr,
                wn,
                ie,
                Vt,
                rr,
                hs,
                Ao,
                Ai,
                ir,
                Ri,
                bn;
              for (
                I &&
                Xr(X) &&
                ((Ri = Y.getProperty(D, L.p)), (bn = Y.getProperty(Gt, L.p)));
                jt--;

              )
                (Vt = it[jt]),
                  Vt.end || Vt.refresh(0, 1) || (ne = m),
                  (rr = Vt.pin),
                  rr &&
                    (rr === d || rr === c || rr === Oe) &&
                    !Vt.isReverted &&
                    (Ai || (Ai = []), Ai.unshift(Vt), Vt.revert(!0, !0)),
                  Vt !== it[jt] && (er--, jt--);
              for (
                ve(St) && (St = St(m)),
                  St = ta(St, "start", m),
                  et =
                    ua(
                      St,
                      d,
                      $t,
                      L,
                      rt(),
                      zt,
                      D,
                      m,
                      ot,
                      N,
                      E,
                      Rt,
                      b,
                      m._startClamp && "_startClamp"
                    ) || (c ? -0.001 : 0),
                  ve(gt) && (gt = gt(m)),
                  De(gt) &&
                    !gt.indexOf("+=") &&
                    (~gt.indexOf(" ")
                      ? (gt = (De(St) ? St.split(" ")[0] : "") + gt)
                      : ((Pt = $n(gt.substr(2), $t)),
                        (gt = De(St)
                          ? St
                          : (b
                              ? Y.utils.mapRange(
                                  0,
                                  b.duration(),
                                  b.scrollTrigger.start,
                                  b.scrollTrigger.end,
                                  et
                                )
                              : et) + Pt),
                        (Ke = d))),
                  gt = ta(gt, "end", m),
                  dt =
                    Math.max(
                      et,
                      ua(
                        gt || (Ke ? "100% 0" : Rt),
                        Ke,
                        $t,
                        L,
                        rt() + Pt,
                        Mt,
                        Gt,
                        m,
                        ot,
                        N,
                        E,
                        Rt,
                        b,
                        m._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Pt = 0,
                  jt = er;
                jt--;

              )
                (Vt = it[jt]),
                  (rr = Vt.pin),
                  rr &&
                    Vt.start - Vt._pinPush <= et &&
                    !b &&
                    Vt.end > 0 &&
                    ((Qt =
                      Vt.end -
                      (m._startClamp ? Math.max(0, Vt.start) : Vt.start)),
                    ((rr === d && Vt.start - Vt._pinPush < et) || rr === Oe) &&
                      isNaN(St) &&
                      (Pt += Qt * (1 - Vt.progress)),
                    rr === c && (wt += Qt));
              if (
                ((et += Pt),
                (dt += Pt),
                m._startClamp && (m._startClamp += Pt),
                m._endClamp &&
                  !_e &&
                  ((m._endClamp = dt || -0.001), (dt = Math.min(dt, lr(z, L)))),
                (pt = dt - et || ((et -= 0.01) && 0.001)),
                ee && ($ = Y.utils.clamp(0, 1, Y.utils.normalize(et, dt, Qe))),
                (m._pinPush = wt),
                zt &&
                  Pt &&
                  ((Qt = {}),
                  (Qt[L.a] = "+=" + Pt),
                  Oe && (Qt[L.p] = "-=" + rt()),
                  Y.set([zt, Mt], Qt)),
                c && !(eo && m.end >= lr(z, L)))
              )
                (Qt = Ye(c)),
                  (wn = L === Yt),
                  (Vr = rt()),
                  (Bt = parseFloat(ct(L.a)) + wt),
                  !Rt &&
                    dt > 1 &&
                    ((ir = (k ? Ct.scrollingElement || Je : z).style),
                    (ir = {
                      style: ir,
                      value: ir["overflow" + L.a.toUpperCase()],
                    }),
                    k &&
                      Ye(xt)["overflow" + L.a.toUpperCase()] !== "scroll" &&
                      (ir.style["overflow" + L.a.toUpperCase()] = "scroll")),
                  Ps(c, _t, Qt),
                  (xe = Rn(c)),
                  (re = gr(c, !0)),
                  (hs = E && Ir(z, wn ? ye : Yt)()),
                  p
                    ? ((Tt = [p + L.os2, pt + wt + Wt]),
                      (Tt.t = _t),
                      (jt = p === Nt ? os(c, L) + pt + wt : 0),
                      jt &&
                        (Tt.push(L.d, jt + Wt),
                        _t.style.flexBasis !== "auto" &&
                          (_t.style.flexBasis = jt + Wt)),
                      Si(Tt),
                      Oe &&
                        it.forEach(function (Li) {
                          Li.pin === Oe &&
                            Li.vars.pinSpacing !== !1 &&
                            (Li._subPinOffset = !0);
                        }),
                      E && rt(Qe))
                    : ((jt = os(c, L)),
                      jt &&
                        _t.style.flexBasis !== "auto" &&
                        (_t.style.flexBasis = jt + Wt)),
                  E &&
                    ((ie = {
                      top: re.top + (wn ? Vr - et : hs) + Wt,
                      left: re.left + (wn ? hs : Vr - et) + Wt,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (ie[Zr] = ie["max" + Mi] = Math.ceil(re.width) + Wt),
                    (ie[Jr] = ie["max" + Po] = Math.ceil(re.height) + Wt),
                    (ie[We] =
                      ie[We + sn] =
                      ie[We + rn] =
                      ie[We + on] =
                      ie[We + nn] =
                        "0"),
                    (ie[Nt] = Qt[Nt]),
                    (ie[Nt + sn] = Qt[Nt + sn]),
                    (ie[Nt + rn] = Qt[Nt + rn]),
                    (ie[Nt + on] = Qt[Nt + on]),
                    (ie[Nt + nn] = Qt[Nt + nn]),
                    (Pe = Nc(te, ie, C)),
                    _e && rt(0)),
                  i
                    ? ((Ao = i._initted),
                      Ts(1),
                      i.render(i.duration(), !0, !0),
                      (At = ct(L.a) - Bt + pt + wt),
                      (wr = Math.abs(pt - At) > 1),
                      E && wr && Pe.splice(Pe.length - 2, 2),
                      i.render(0, !0, !0),
                      Ao || i.invalidate(!0),
                      i.parent || i.totalTime(i.totalTime()),
                      Ts(0))
                    : (At = pt),
                  ir &&
                    (ir.value
                      ? (ir.style["overflow" + L.a.toUpperCase()] = ir.value)
                      : ir.style.removeProperty("overflow-" + L.a));
              else if (d && rt() && !b)
                for (re = d.parentNode; re && re !== xt; )
                  re._pinOffset &&
                    ((et -= re._pinOffset), (dt -= re._pinOffset)),
                    (re = re.parentNode);
              Ai &&
                Ai.forEach(function (Li) {
                  return Li.revert(!1, !0);
                }),
                (m.start = et),
                (m.end = dt),
                (U = ht = _e ? Qe : rt()),
                !b && !_e && (U < Qe && rt(Qe), (m.scroll.rec = 0)),
                m.revert(!1, !0),
                (tt = se()),
                je && ((Q = -1), je.restart(!0)),
                (ne = 0),
                i &&
                  V &&
                  (i._initted || Br) &&
                  i.progress() !== Br &&
                  i.progress(Br || 0, !0).render(i.time(), !0, !0),
                (ee || $ !== m.progress || b || h) &&
                  (i &&
                    !V &&
                    i.totalProgress(
                      b && et < -0.001 && !$ ? Y.utils.normalize(et, dt, 0) : $,
                      !0
                    ),
                  (m.progress = ee || (U - et) / pt === $ ? 0 : $)),
                c && p && (_t._pinOffset = Math.round(m.progress * At)),
                nt && nt.invalidate(),
                isNaN(Ri) ||
                  ((Ri -= Y.getProperty(D, L.p)),
                  (bn -= Y.getProperty(Gt, L.p)),
                  Ln(D, L, Ri),
                  Ln(zt, L, Ri - (j || 0)),
                  Ln(Gt, L, bn),
                  Ln(Mt, L, bn - (j || 0))),
                ee && !_e && m.update(),
                f && !_e && !ue && ((ue = !0), f(m), (ue = !1));
            }
          }),
          (m.getVelocity = function () {
            return ((rt() - ht) / (se() - $i)) * 1e3 || 0;
          }),
          (m.endAnimation = function () {
            Ni(m.callbackAnimation),
              i &&
                (nt
                  ? nt.progress(1)
                  : i.paused()
                  ? V || Ni(i, m.direction < 0, 1)
                  : Ni(i, i.reversed()));
          }),
          (m.labelToScroll = function (B) {
            return (
              (i &&
                i.labels &&
                (et || m.refresh() || et) +
                  (i.labels[B] / i.duration()) * pt) ||
              0
            );
          }),
          (m.getTrailing = function (B) {
            var Z = it.indexOf(m),
              X = m.direction > 0 ? it.slice(0, Z).reverse() : it.slice(Z + 1);
            return (
              De(B)
                ? X.filter(function (j) {
                    return j.vars.preventOverlaps === B;
                  })
                : X
            ).filter(function (j) {
              return m.direction > 0 ? j.end <= et : j.start >= dt;
            });
          }),
          (m.update = function (B, Z, X) {
            if (!(b && !X && !B)) {
              var j = _e === !0 ? Qe : m.scroll(),
                $t = B ? 0 : (j - et) / pt,
                ot = $t < 0 ? 0 : $t > 1 ? 1 : $t || 0,
                Rt = m.progress,
                ee,
                Pt,
                wt,
                gt,
                Ke,
                St,
                Oe,
                er;
              if (
                (Z &&
                  ((ht = U),
                  (U = b ? rt() : j),
                  T && ((Nr = br), (br = i && !V ? i.totalProgress() : ot))),
                g &&
                  c &&
                  !ne &&
                  !En &&
                  Xe &&
                  (!ot && et < j + ((j - ht) / (se() - $i)) * g
                    ? (ot = 1e-4)
                    : ot === 1 &&
                      dt > j + ((j - ht) / (se() - $i)) * g &&
                      (ot = 0.9999)),
                ot !== Rt && m.enabled)
              ) {
                if (
                  ((ee = m.isActive = !!ot && ot < 1),
                  (Pt = !!Rt && Rt < 1),
                  (St = ee !== Pt),
                  (Ke = St || !!ot != !!Rt),
                  (m.direction = ot > Rt ? 1 : -1),
                  (m.progress = ot),
                  Ke &&
                    !ne &&
                    ((wt = ot && !Rt ? 0 : ot === 1 ? 1 : Rt === 1 ? 2 : 3),
                    V &&
                      ((gt =
                        (!St && R[wt + 1] !== "none" && R[wt + 1]) || R[wt]),
                      (er =
                        i &&
                        (gt === "complete" || gt === "reset" || gt in i)))),
                  M &&
                    (St || er) &&
                    (er || _ || !i) &&
                    (ve(M)
                      ? M(m)
                      : m.getTrailing(M).forEach(function (Vr) {
                          return Vr.endAnimation();
                        })),
                  V ||
                    (nt && !ne && !En
                      ? (nt._dp._time - nt._start !== nt._time &&
                          nt.render(nt._dp._time - nt._start),
                        nt.resetTo
                          ? nt.resetTo("totalProgress", ot, i._tTime / i._tDur)
                          : ((nt.vars.totalProgress = ot),
                            nt.invalidate().restart()))
                      : i && i.totalProgress(ot, !!(ne && (tt || B)))),
                  c)
                ) {
                  if ((B && p && (_t.style[p + L.os2] = Ue), !E))
                    Dt(Xi(Bt + At * ot));
                  else if (Ke) {
                    if (
                      ((Oe = !B && ot > Rt && dt + 1 > j && j + 1 >= lr(z, L)),
                      C)
                    )
                      if (!B && (ee || Oe)) {
                        var jt = gr(c, !0),
                          Qt = j - et;
                        ca(
                          c,
                          xt,
                          jt.top + (L === Yt ? Qt : 0) + Wt,
                          jt.left + (L === Yt ? 0 : Qt) + Wt
                        );
                      } else ca(c, _t);
                    Si(ee || Oe ? Pe : xe),
                      (wr && ot < 1 && ee) ||
                        Dt(Bt + (ot === 1 && !Oe ? At : 0));
                  }
                }
                T && !W.tween && !ne && !En && je.restart(!0),
                  a &&
                    (St || (w && ot && (ot < 1 || !Ss))) &&
                    mn(a.targets).forEach(function (Vr) {
                      return Vr.classList[ee || w ? "add" : "remove"](
                        a.className
                      );
                    }),
                  s && !V && !B && s(m),
                  Ke && !ne
                    ? (V &&
                        (er &&
                          (gt === "complete"
                            ? i.pause().totalProgress(1)
                            : gt === "reset"
                            ? i.restart(!0).pause()
                            : gt === "restart"
                            ? i.restart(!0)
                            : i[gt]()),
                        s && s(m)),
                      (St || !Ss) &&
                        (u && St && ks(m, u),
                        S[wt] && ks(m, S[wt]),
                        w && (ot === 1 ? m.kill(!1, 1) : (S[wt] = 0)),
                        St || ((wt = ot === 1 ? 1 : 3), S[wt] && ks(m, S[wt]))),
                      O &&
                        !ee &&
                        Math.abs(m.getVelocity()) > (qi(O) ? O : 2500) &&
                        (Ni(m.callbackAnimation),
                        nt
                          ? nt.progress(1)
                          : Ni(i, gt === "reverse" ? 1 : !ot, 1)))
                    : V && s && !ne && s(m);
              }
              if (ai) {
                var re = b ? (j / b.duration()) * (b._caScrollDist || 0) : j;
                dr(re + (D._isFlipped ? 1 : 0)), ai(re);
              }
              ui && ui((-j / b.duration()) * (b._caScrollDist || 0));
            }
          }),
          (m.enable = function (B, Z) {
            m.enabled ||
              ((m.enabled = !0),
              Xt(z, "resize", Ui),
              k || Xt(z, "scroll", di),
              F && Xt(o, "refreshInit", F),
              B !== !1 && ((m.progress = $ = 0), (U = ht = Q = rt())),
              Z !== !1 && m.refresh());
          }),
          (m.getTween = function (B) {
            return B && W ? W.tween : nt;
          }),
          (m.setPositions = function (B, Z, X, j) {
            if (b) {
              var $t = b.scrollTrigger,
                ot = b.duration(),
                Rt = $t.end - $t.start;
              (B = $t.start + (Rt * B) / ot), (Z = $t.start + (Rt * Z) / ot);
            }
            m.refresh(
              !1,
              !1,
              {
                start: ea(B, X && !!m._startClamp),
                end: ea(Z, X && !!m._endClamp),
              },
              j
            ),
              m.update();
          }),
          (m.adjustPinSpacing = function (B) {
            if (Tt && B) {
              var Z = Tt.indexOf(L.d) + 1;
              (Tt[Z] = parseFloat(Tt[Z]) + B + Wt),
                (Tt[1] = parseFloat(Tt[1]) + B + Wt),
                Si(Tt);
            }
          }),
          (m.disable = function (B, Z) {
            if (
              m.enabled &&
              (B !== !1 && m.revert(!0, !0),
              (m.enabled = m.isActive = !1),
              Z || (nt && nt.pause()),
              (Qe = 0),
              G && (G.uncache = 1),
              F && Ht(o, "refreshInit", F),
              je && (je.pause(), W.tween && W.tween.kill() && (W.tween = 0)),
              !k)
            ) {
              for (var X = it.length; X--; )
                if (it[X].scroller === z && it[X] !== m) return;
              Ht(z, "resize", Ui), k || Ht(z, "scroll", di);
            }
          }),
          (m.kill = function (B, Z) {
            m.disable(B, Z), nt && !Z && nt.kill(), l && delete ro[l];
            var X = it.indexOf(m);
            X >= 0 && it.splice(X, 1),
              X === pe && Xn > 0 && pe--,
              (X = 0),
              it.forEach(function (j) {
                return j.scroller === m.scroller && (X = 1);
              }),
              X || _e || (m.scroll.rec = 0),
              i &&
                ((i.scrollTrigger = null),
                B && i.revert({ kill: !1 }),
                Z || i.kill()),
              zt &&
                [zt, Mt, D, Gt].forEach(function (j) {
                  return j.parentNode && j.parentNode.removeChild(j);
                }),
              an === m && (an = 0),
              c &&
                (G && (G.uncache = 1),
                (X = 0),
                it.forEach(function (j) {
                  return j.pin === c && X++;
                }),
                X || (G.spacer = 0)),
              e.onKill && e.onKill(m);
          }),
          it.push(m),
          m.enable(!1, !1),
          hr && hr(m),
          i && i.add && !pt)
        ) {
          var ft = m.update;
          (m.update = function () {
            (m.update = ft), et || dt || m.refresh();
          }),
            Y.delayedCall(0.01, m.update),
            (pt = 0.01),
            (et = dt = 0);
        } else m.refresh();
        c && Lc();
      }),
      (o.register = function (e) {
        return (
          hi ||
            ((Y = e || Fl()), Nl() && window.document && o.enable(), (hi = Hi)),
          hi
        );
      }),
      (o.defaults = function (e) {
        if (e) for (var i in e) Dn[i] = e[i];
        return Dn;
      }),
      (o.disable = function (e, i) {
        (Hi = 0),
          it.forEach(function (s) {
            return s[i ? "kill" : "disable"](e);
          }),
          Ht(at, "wheel", di),
          Ht(Ct, "scroll", di),
          clearInterval(kn),
          Ht(Ct, "touchcancel", sr),
          Ht(xt, "touchstart", sr),
          On(Ht, Ct, "pointerdown,touchstart,mousedown", ra),
          On(Ht, Ct, "pointerup,touchend,mouseup", ia),
          ns.kill(),
          Pn(Ht);
        for (var n = 0; n < st.length; n += 3)
          Mn(Ht, st[n], st[n + 1]), Mn(Ht, st[n], st[n + 2]);
      }),
      (o.enable = function () {
        if (
          ((at = window),
          (Ct = document),
          (Je = Ct.documentElement),
          (xt = Ct.body),
          Y &&
            ((mn = Y.utils.toArray),
            (en = Y.utils.clamp),
            (to = Y.core.context || sr),
            (Ts = Y.core.suppressOverwrites || sr),
            (So = at.history.scrollRestoration || "auto"),
            (io = at.pageYOffset),
            Y.core.globals("ScrollTrigger", o),
            xt))
        ) {
          (Hi = 1),
            (Ti = document.createElement("div")),
            (Ti.style.height = "100vh"),
            (Ti.style.position = "absolute"),
            Ul(),
            Ec(),
            It.register(Y),
            (o.isTouch = It.isTouch),
            (Sr =
              It.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Js = It.isTouch === 1),
            Xt(at, "wheel", di),
            (Al = [at, Ct, Je, xt]),
            Y.matchMedia
              ? ((o.matchMedia = function (l) {
                  var u = Y.matchMedia(),
                    f;
                  for (f in l) u.add(f, l[f]);
                  return u;
                }),
                Y.addEventListener("matchMediaInit", function () {
                  return Mo();
                }),
                Y.addEventListener("matchMediaRevert", function () {
                  return Xl();
                }),
                Y.addEventListener("matchMedia", function () {
                  Ur(0, 1), si("matchMedia");
                }),
                Y.matchMedia("(orientation: portrait)", function () {
                  return Es(), Es;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Es(),
            Xt(Ct, "scroll", di);
          var e = xt.style,
            i = e.borderTopStyle,
            n = Y.core.Animation.prototype,
            s,
            a;
          for (
            n.revert ||
              Object.defineProperty(n, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              e.borderTopStyle = "solid",
              s = gr(xt),
              Yt.m = Math.round(s.top + Yt.sc()) || 0,
              ye.m = Math.round(s.left + ye.sc()) || 0,
              i ? (e.borderTopStyle = i) : e.removeProperty("border-top-style"),
              kn = setInterval(oa, 250),
              Y.delayedCall(0.5, function () {
                return (En = 0);
              }),
              Xt(Ct, "touchcancel", sr),
              Xt(xt, "touchstart", sr),
              On(Xt, Ct, "pointerdown,touchstart,mousedown", ra),
              On(Xt, Ct, "pointerup,touchend,mouseup", ia),
              Zs = Y.utils.checkPrefix("transform"),
              qn.push(Zs),
              hi = se(),
              ns = Y.delayedCall(0.2, Ur).pause(),
              pi = [
                Ct,
                "visibilitychange",
                function () {
                  var l = at.innerWidth,
                    u = at.innerHeight;
                  Ct.hidden
                    ? ((Zo = l), (Jo = u))
                    : (Zo !== l || Jo !== u) && Ui();
                },
                Ct,
                "DOMContentLoaded",
                Ur,
                at,
                "load",
                Ur,
                at,
                "resize",
                Ui,
              ],
              Pn(Xt),
              it.forEach(function (l) {
                return l.enable(0, 1);
              }),
              a = 0;
            a < st.length;
            a += 3
          )
            Mn(Ht, st[a], st[a + 1]), Mn(Ht, st[a], st[a + 2]);
        }
      }),
      (o.config = function (e) {
        "limitCallbacks" in e && (Ss = !!e.limitCallbacks);
        var i = e.syncInterval;
        (i && clearInterval(kn)) || ((kn = i) && setInterval(oa, i)),
          "ignoreMobileResize" in e &&
            (Js = o.isTouch === 1 && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Pn(Ht) || Pn(Xt, e.autoRefreshEvents || "none"),
            (Ll = (e.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (o.scrollerProxy = function (e, i) {
        var n = we(e),
          s = st.indexOf(n),
          a = ii(n);
        ~s && st.splice(s, a ? 6 : 2),
          i && (a ? cr.unshift(at, i, xt, i, Je, i) : cr.unshift(n, i));
      }),
      (o.clearMatchMedia = function (e) {
        it.forEach(function (i) {
          return i._ctx && i._ctx.query === e && i._ctx.kill(!0, !0);
        });
      }),
      (o.isInViewport = function (e, i, n) {
        var s = (De(e) ? we(e) : e).getBoundingClientRect(),
          a = s[n ? Zr : Jr] * i || 0;
        return n
          ? s.right - a > 0 && s.left + a < at.innerWidth
          : s.bottom - a > 0 && s.top + a < at.innerHeight;
      }),
      (o.positionInViewport = function (e, i, n) {
        De(e) && (e = we(e));
        var s = e.getBoundingClientRect(),
          a = s[n ? Zr : Jr],
          l =
            i == null
              ? a / 2
              : i in as
              ? as[i] * a
              : ~i.indexOf("%")
              ? (parseFloat(i) * a) / 100
              : parseFloat(i) || 0;
        return n ? (s.left + l) / at.innerWidth : (s.top + l) / at.innerHeight;
      }),
      (o.killAll = function (e) {
        if (
          (it.slice(0).forEach(function (n) {
            return n.vars.id !== "ScrollSmoother" && n.kill();
          }),
          e !== !0)
        ) {
          var i = ni.killAll || [];
          (ni = {}),
            i.forEach(function (n) {
              return n();
            });
        }
      }),
      o
    );
  })();
J.version = "3.12.5";
J.saveStyles = function (o) {
  return o
    ? mn(o).forEach(function (t) {
        if (t && t.style) {
          var r = Me.indexOf(t);
          r >= 0 && Me.splice(r, 5),
            Me.push(
              t,
              t.style.cssText,
              t.getBBox && t.getAttribute("transform"),
              Y.core.getCache(t),
              to()
            );
        }
      })
    : Me;
};
J.revert = function (o, t) {
  return Mo(!o, t);
};
J.create = function (o, t) {
  return new J(o, t);
};
J.refresh = function (o) {
  return o ? Ui() : (hi || J.register()) && Ur(!0);
};
J.update = function (o) {
  return ++st.cache && yr(o === !0 ? 2 : 0);
};
J.clearScrollMemory = ql;
J.maxScroll = function (o, t) {
  return lr(o, t ? ye : Yt);
};
J.getScrollFunc = function (o, t) {
  return Ir(we(o), t ? ye : Yt);
};
J.getById = function (o) {
  return ro[o];
};
J.getAll = function () {
  return it.filter(function (o) {
    return o.vars.id !== "ScrollSmoother";
  });
};
J.isScrolling = function () {
  return !!Xe;
};
J.snapDirectional = Oo;
J.addEventListener = function (o, t) {
  var r = ni[o] || (ni[o] = []);
  ~r.indexOf(t) || r.push(t);
};
J.removeEventListener = function (o, t) {
  var r = ni[o],
    e = r && r.indexOf(t);
  e >= 0 && r.splice(e, 1);
};
J.batch = function (o, t) {
  var r = [],
    e = {},
    i = t.interval || 0.016,
    n = t.batchMax || 1e9,
    s = function (u, f) {
      var _ = [],
        d = [],
        c = Y.delayedCall(i, function () {
          f(_, d), (_ = []), (d = []);
        }).pause();
      return function (p) {
        _.length || c.restart(!0),
          _.push(p.trigger),
          d.push(p),
          n <= _.length && c.progress(1);
      };
    },
    a;
  for (a in t)
    e[a] =
      a.substr(0, 2) === "on" && ve(t[a]) && a !== "onRefreshInit"
        ? s(a, t[a])
        : t[a];
  return (
    ve(n) &&
      ((n = n()),
      Xt(J, "refresh", function () {
        return (n = t.batchMax());
      })),
    mn(o).forEach(function (l) {
      var u = {};
      for (a in e) u[a] = e[a];
      (u.trigger = l), r.push(J.create(u));
    }),
    r
  );
};
var da = function (t, r, e, i) {
    return (
      r > i ? t(i) : r < 0 && t(0),
      e > i ? (i - r) / (e - r) : e < 0 ? r / (r - e) : 1
    );
  },
  Os = function o(t, r) {
    r === !0
      ? t.style.removeProperty("touch-action")
      : (t.style.touchAction =
          r === !0
            ? "auto"
            : r
            ? "pan-" + r + (It.isTouch ? " pinch-zoom" : "")
            : "none"),
      t === Je && o(xt, r);
  },
  In = { auto: 1, scroll: 1 },
  Bc = function (t) {
    var r = t.event,
      e = t.target,
      i = t.axis,
      n = (r.changedTouches ? r.changedTouches[0] : r).target,
      s = n._gsap || Y.core.getCache(n),
      a = se(),
      l;
    if (!s._isScrollT || a - s._isScrollT > 2e3) {
      for (
        ;
        n &&
        n !== xt &&
        ((n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth) ||
          !(In[(l = Ye(n)).overflowY] || In[l.overflowX]));

      )
        n = n.parentNode;
      (s._isScroll =
        n &&
        n !== e &&
        !ii(n) &&
        (In[(l = Ye(n)).overflowY] || In[l.overflowX])),
        (s._isScrollT = a);
    }
    (s._isScroll || i === "x") && (r.stopPropagation(), (r._gsapAllow = !0));
  },
  jl = function (t, r, e, i) {
    return It.create({
      target: t,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: r,
      onWheel: (i = i && Bc),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return e && Xt(Ct, It.eventTypes[0], pa, !1, !0);
      },
      onDisable: function () {
        return Ht(Ct, It.eventTypes[0], pa, !0);
      },
    });
  },
  Vc = /(input|label|select|textarea)/i,
  ha,
  pa = function (t) {
    var r = Vc.test(t.target.tagName);
    (r || ha) && ((t._gsapAllow = !0), (ha = r));
  },
  Wc = function (t) {
    Xr(t) || (t = {}),
      (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
      t.type || (t.type = "wheel,touch"),
      (t.debounce = !!t.debounce),
      (t.id = t.id || "normalizer");
    var r = t,
      e = r.normalizeScrollX,
      i = r.momentum,
      n = r.allowNestedScroll,
      s = r.onRelease,
      a,
      l,
      u = we(t.target) || Je,
      f = Y.core.globals().ScrollSmoother,
      _ = f && f.get(),
      d =
        Sr &&
        ((t.content && we(t.content)) ||
          (_ && t.content !== !1 && !_.smooth() && _.content())),
      c = Ir(u, Yt),
      p = Ir(u, ye),
      h = 1,
      g =
        (It.isTouch && at.visualViewport
          ? at.visualViewport.scale * at.visualViewport.width
          : at.outerWidth) / at.innerWidth,
      v = 0,
      x = ve(i)
        ? function () {
            return i(a);
          }
        : function () {
            return i || 2.8;
          },
      w,
      T,
      C = jl(u, t.type, !0, n),
      P = function () {
        return (T = !1);
      },
      b = sr,
      O = sr,
      M = function () {
        (l = lr(u, Yt)),
          (O = en(Sr ? 1 : 0, l)),
          e && (b = en(0, lr(u, ye))),
          (w = ti);
      },
      L = function () {
        (d._gsap.y = Xi(parseFloat(d._gsap.y) + c.offset) + "px"),
          (d.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(d._gsap.y) +
            ", 0, 1)"),
          (c.offset = c.cacheID = 0);
      },
      V = function () {
        if (T) {
          requestAnimationFrame(P);
          var I = Xi(a.deltaY / 2),
            N = O(c.v - I);
          if (d && N !== c.v + c.offset) {
            c.offset = N - c.v;
            var m = Xi((parseFloat(d && d._gsap.y) || 0) - c.offset);
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              m +
              ", 0, 1)"),
              (d._gsap.y = m + "px"),
              (c.cacheID = st.cache),
              yr();
          }
          return !0;
        }
        c.offset && L(), (T = !0);
      },
      z,
      y,
      k,
      E,
      S = function () {
        M(),
          z.isActive() &&
            z.vars.scrollY > l &&
            (c() > l ? z.progress(1) && c(l) : z.resetTo("scrollY", l));
      };
    return (
      d && Y.set(d, { y: "+=0" }),
      (t.ignoreCheck = function (R) {
        return (
          (Sr && R.type === "touchmove" && V()) ||
          (h > 1.05 && R.type !== "touchstart") ||
          a.isGesturing ||
          (R.touches && R.touches.length > 1)
        );
      }),
      (t.onPress = function () {
        T = !1;
        var R = h;
        (h = Xi(((at.visualViewport && at.visualViewport.scale) || 1) / g)),
          z.pause(),
          R !== h && Os(u, h > 1.01 ? !0 : e ? !1 : "x"),
          (y = p()),
          (k = c()),
          M(),
          (w = ti);
      }),
      (t.onRelease = t.onGestureStart =
        function (R, I) {
          if ((c.offset && L(), !I)) E.restart(!0);
          else {
            st.cache++;
            var N = x(),
              m,
              F;
            e &&
              ((m = p()),
              (F = m + (N * 0.05 * -R.velocityX) / 0.227),
              (N *= da(p, m, F, lr(u, ye))),
              (z.vars.scrollX = b(F))),
              (m = c()),
              (F = m + (N * 0.05 * -R.velocityY) / 0.227),
              (N *= da(c, m, F, lr(u, Yt))),
              (z.vars.scrollY = O(F)),
              z.invalidate().duration(N).play(0.01),
              ((Sr && z.vars.scrollY >= l) || m >= l - 1) &&
                Y.to({}, { onUpdate: S, duration: N });
          }
          s && s(R);
        }),
      (t.onWheel = function () {
        z._ts && z.pause(), se() - v > 1e3 && ((w = 0), (v = se()));
      }),
      (t.onChange = function (R, I, N, m, F) {
        if (
          (ti !== w && M(),
          I && e && p(b(m[2] === I ? y + (R.startX - R.x) : p() + I - m[1])),
          N)
        ) {
          c.offset && L();
          var H = F[2] === N,
            A = H ? k + R.startY - R.y : c() + N - F[1],
            Q = O(A);
          H && A !== Q && (k += Q - A), c(Q);
        }
        (N || I) && yr();
      }),
      (t.onEnable = function () {
        Os(u, e ? !1 : "x"),
          J.addEventListener("refresh", S),
          Xt(at, "resize", S),
          c.smooth &&
            ((c.target.style.scrollBehavior = "auto"),
            (c.smooth = p.smooth = !1)),
          C.enable();
      }),
      (t.onDisable = function () {
        Os(u, !0),
          Ht(at, "resize", S),
          J.removeEventListener("refresh", S),
          C.kill();
      }),
      (t.lockAxis = t.lockAxis !== !1),
      (a = new It(t)),
      (a.iOS = Sr),
      Sr && !c() && c(1),
      Sr && Y.ticker.add(sr),
      (E = a._dc),
      (z = Y.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: e ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Gl(c, c(), function () {
            return z.pause();
          }),
        },
        onUpdate: yr,
        onComplete: E.vars.onComplete,
      })),
      a
    );
  };
J.sort = function (o) {
  return it.sort(
    o ||
      function (t, r) {
        return (
          (t.vars.refreshPriority || 0) * -1e6 +
          t.start -
          (r.start + (r.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
J.observe = function (o) {
  return new It(o);
};
J.normalizeScroll = function (o) {
  if (typeof o > "u") return he;
  if (o === !0 && he) return he.enable();
  if (o === !1) {
    he && he.kill(), (he = o);
    return;
  }
  var t = o instanceof It ? o : Wc(o);
  return he && he.target === t.target && he.kill(), ii(t.target) && (he = t), t;
};
J.core = {
  _getVelocityProp: Ks,
  _inputObserver: jl,
  _scrollers: st,
  _proxies: cr,
  bridge: {
    ss: function () {
      Xe || si("scrollStart"), (Xe = se());
    },
    ref: function () {
      return ne;
    },
  },
};
Fl() && Y.registerPlugin(J);
/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Yc = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  $c = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
  Hc = Math.PI / 180,
  zn = Math.sin,
  Nn = Math.cos,
  ln = Math.abs,
  Fi = Math.sqrt,
  Xc = function (t) {
    return typeof t == "number";
  },
  _a = 1e5,
  Tr = function (t) {
    return Math.round(t * _a) / _a || 0;
  };
function qc(o, t, r, e, i, n, s) {
  for (var a = o.length, l, u, f, _, d; --a > -1; )
    for (l = o[a], u = l.length, f = 0; f < u; f += 2)
      (_ = l[f]),
        (d = l[f + 1]),
        (l[f] = _ * t + d * e + n),
        (l[f + 1] = _ * r + d * i + s);
  return (o._dirty = 1), o;
}
function Uc(o, t, r, e, i, n, s, a, l) {
  if (!(o === a && t === l)) {
    (r = ln(r)), (e = ln(e));
    var u = (i % 360) * Hc,
      f = Nn(u),
      _ = zn(u),
      d = Math.PI,
      c = d * 2,
      p = (o - a) / 2,
      h = (t - l) / 2,
      g = f * p + _ * h,
      v = -_ * p + f * h,
      x = g * g,
      w = v * v,
      T = x / (r * r) + w / (e * e);
    T > 1 && ((r = Fi(T) * r), (e = Fi(T) * e));
    var C = r * r,
      P = e * e,
      b = (C * P - C * w - P * x) / (C * w + P * x);
    b < 0 && (b = 0);
    var O = (n === s ? -1 : 1) * Fi(b),
      M = O * ((r * v) / e),
      L = O * -((e * g) / r),
      V = (o + a) / 2,
      z = (t + l) / 2,
      y = V + (f * M - _ * L),
      k = z + (_ * M + f * L),
      E = (g - M) / r,
      S = (v - L) / e,
      R = (-g - M) / r,
      I = (-v - L) / e,
      N = E * E + S * S,
      m = (S < 0 ? -1 : 1) * Math.acos(E / Fi(N)),
      F =
        (E * I - S * R < 0 ? -1 : 1) *
        Math.acos((E * R + S * I) / Fi(N * (R * R + I * I)));
    isNaN(F) && (F = d),
      !s && F > 0 ? (F -= c) : s && F < 0 && (F += c),
      (m %= c),
      (F %= c);
    var H = Math.ceil(ln(F) / (c / 4)),
      A = [],
      Q = F / H,
      tt = ((4 / 3) * zn(Q / 2)) / (1 + Nn(Q / 2)),
      $ = f * r,
      rt = _ * r,
      W = _ * -e,
      G = f * e,
      ut;
    for (ut = 0; ut < H; ut++)
      (i = m + ut * Q),
        (g = Nn(i)),
        (v = zn(i)),
        (E = Nn((i += Q))),
        (S = zn(i)),
        A.push(g - tt * v, v + tt * g, E + tt * S, S - tt * E, E, S);
    for (ut = 0; ut < A.length; ut += 2)
      (g = A[ut]),
        (v = A[ut + 1]),
        (A[ut] = g * $ + v * W + y),
        (A[ut + 1] = g * rt + v * G + k);
    return (A[ut - 2] = a), (A[ut - 1] = l), A;
  }
}
function Gc(o) {
  var t =
      (o + "")
        .replace($c, function (M) {
          var L = +M;
          return L < 1e-4 && L > -1e-4 ? 0 : L;
        })
        .match(Yc) || [],
    r = [],
    e = 0,
    i = 0,
    n = 2 / 3,
    s = t.length,
    a = 0,
    l = "ERROR: malformed path: " + o,
    u,
    f,
    _,
    d,
    c,
    p,
    h,
    g,
    v,
    x,
    w,
    T,
    C,
    P,
    b,
    O = function (L, V, z, y) {
      (x = (z - L) / 3),
        (w = (y - V) / 3),
        h.push(L + x, V + w, z - x, y - w, z, y);
    };
  if (!o || !isNaN(t[0]) || isNaN(t[1])) return console.log(l), r;
  for (u = 0; u < s; u++)
    if (
      ((C = c),
      isNaN(t[u]) ? ((c = t[u].toUpperCase()), (p = c !== t[u])) : u--,
      (_ = +t[u + 1]),
      (d = +t[u + 2]),
      p && ((_ += e), (d += i)),
      u || ((g = _), (v = d)),
      c === "M")
    )
      h && (h.length < 8 ? (r.length -= 1) : (a += h.length)),
        (e = g = _),
        (i = v = d),
        (h = [_, d]),
        r.push(h),
        (u += 2),
        (c = "L");
    else if (c === "C")
      h || (h = [0, 0]),
        p || (e = i = 0),
        h.push(
          _,
          d,
          e + t[u + 3] * 1,
          i + t[u + 4] * 1,
          (e += t[u + 5] * 1),
          (i += t[u + 6] * 1)
        ),
        (u += 6);
    else if (c === "S")
      (x = e),
        (w = i),
        (C === "C" || C === "S") &&
          ((x += e - h[h.length - 4]), (w += i - h[h.length - 3])),
        p || (e = i = 0),
        h.push(x, w, _, d, (e += t[u + 3] * 1), (i += t[u + 4] * 1)),
        (u += 4);
    else if (c === "Q")
      (x = e + (_ - e) * n),
        (w = i + (d - i) * n),
        p || (e = i = 0),
        (e += t[u + 3] * 1),
        (i += t[u + 4] * 1),
        h.push(x, w, e + (_ - e) * n, i + (d - i) * n, e, i),
        (u += 4);
    else if (c === "T")
      (x = e - h[h.length - 4]),
        (w = i - h[h.length - 3]),
        h.push(
          e + x,
          i + w,
          _ + (e + x * 1.5 - _) * n,
          d + (i + w * 1.5 - d) * n,
          (e = _),
          (i = d)
        ),
        (u += 2);
    else if (c === "H") O(e, i, (e = _), i), (u += 1);
    else if (c === "V") O(e, i, e, (i = _ + (p ? i - e : 0))), (u += 1);
    else if (c === "L" || c === "Z")
      c === "Z" && ((_ = g), (d = v), (h.closed = !0)),
        (c === "L" || ln(e - _) > 0.5 || ln(i - d) > 0.5) &&
          (O(e, i, _, d), c === "L" && (u += 2)),
        (e = _),
        (i = d);
    else if (c === "A") {
      if (
        ((P = t[u + 4]),
        (b = t[u + 5]),
        (x = t[u + 6]),
        (w = t[u + 7]),
        (f = 7),
        P.length > 1 &&
          (P.length < 3
            ? ((w = x), (x = b), f--)
            : ((w = b), (x = P.substr(2)), (f -= 2)),
          (b = P.charAt(1)),
          (P = P.charAt(0))),
        (T = Uc(
          e,
          i,
          +t[u + 1],
          +t[u + 2],
          +t[u + 3],
          +P,
          +b,
          (p ? e : 0) + x * 1,
          (p ? i : 0) + w * 1
        )),
        (u += f),
        T)
      )
        for (f = 0; f < T.length; f++) h.push(T[f]);
      (e = h[h.length - 2]), (i = h[h.length - 1]);
    } else console.log(l);
  return (
    (u = h.length),
    u < 6
      ? (r.pop(), (u = 0))
      : h[0] === h[u - 2] && h[1] === h[u - 1] && (h.closed = !0),
    (r.totalPoints = a + u),
    r
  );
}
function jc(o) {
  Xc(o[0]) && (o = [o]);
  var t = "",
    r = o.length,
    e,
    i,
    n,
    s;
  for (i = 0; i < r; i++) {
    for (
      s = o[i],
        t += "M" + Tr(s[0]) + "," + Tr(s[1]) + " C",
        e = s.length,
        n = 2;
      n < e;
      n++
    )
      t +=
        Tr(s[n++]) +
        "," +
        Tr(s[n++]) +
        " " +
        Tr(s[n++]) +
        "," +
        Tr(s[n++]) +
        " " +
        Tr(s[n++]) +
        "," +
        Tr(s[n]) +
        " ";
    s.closed && (t += "z");
  }
  return t;
}
/*!
 * CustomEase 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var be,
  Ql,
  Kl = function () {
    return (
      be ||
      (typeof window < "u" && (be = window.gsap) && be.registerPlugin && be)
    );
  },
  ga = function () {
    (be = Kl()),
      be
        ? (be.registerEase("_CE", xn.create), (Ql = 1))
        : console.warn("Please gsap.registerPlugin(CustomEase)");
  },
  Qc = 1e20,
  Fn = function (t) {
    return ~~(t * 1e3 + (t < 0 ? -0.5 : 0.5)) / 1e3;
  },
  Kc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
  Zc = /[cLlsSaAhHvVtTqQ]/g,
  Jc = function (t) {
    var r = t.length,
      e = Qc,
      i;
    for (i = 1; i < r; i += 6) +t[i] < e && (e = +t[i]);
    return e;
  },
  tf = function (t, r, e) {
    !e && e !== 0 && (e = Math.max(+t[t.length - 1], +t[1]));
    var i = +t[0] * -1,
      n = -e,
      s = t.length,
      a = 1 / (+t[s - 2] + i),
      l =
        -r ||
        (Math.abs(+t[s - 1] - +t[1]) < 0.01 * (+t[s - 2] - +t[0])
          ? Jc(t) + n
          : +t[s - 1] + n),
      u;
    for (l ? (l = 1 / l) : (l = -a), u = 0; u < s; u += 2)
      (t[u] = (+t[u] + i) * a), (t[u + 1] = (+t[u + 1] + n) * l);
  },
  ef = function o(t, r, e, i, n, s, a, l, u, f, _) {
    var d = (t + e) / 2,
      c = (r + i) / 2,
      p = (e + n) / 2,
      h = (i + s) / 2,
      g = (n + a) / 2,
      v = (s + l) / 2,
      x = (d + p) / 2,
      w = (c + h) / 2,
      T = (p + g) / 2,
      C = (h + v) / 2,
      P = (x + T) / 2,
      b = (w + C) / 2,
      O = a - t,
      M = l - r,
      L = Math.abs((e - a) * M - (i - l) * O),
      V = Math.abs((n - a) * M - (s - l) * O),
      z;
    return (
      f ||
        ((f = [
          { x: t, y: r },
          { x: a, y: l },
        ]),
        (_ = 1)),
      f.splice(_ || f.length - 1, 0, { x: P, y: b }),
      (L + V) * (L + V) > u * (O * O + M * M) &&
        ((z = f.length),
        o(t, r, d, c, x, w, P, b, u, f, _),
        o(P, b, T, C, g, v, a, l, u, f, _ + 1 + (f.length - z))),
      f
    );
  },
  xn = (function () {
    function o(r, e, i) {
      Ql || ga(), (this.id = r), this.setData(e, i);
    }
    var t = o.prototype;
    return (
      (t.setData = function (e, i) {
        (i = i || {}), (e = e || "0,0,1,1");
        var n = e.match(Kc),
          s = 1,
          a = [],
          l = [],
          u = i.precision || 1,
          f = u <= 1,
          _,
          d,
          c,
          p,
          h,
          g,
          v,
          x,
          w;
        if (
          ((this.data = e),
          (Zc.test(e) || (~e.indexOf("M") && e.indexOf("C") < 0)) &&
            (n = Gc(e)[0]),
          (_ = n.length),
          _ === 4)
        )
          n.unshift(0, 0), n.push(1, 1), (_ = 8);
        else if ((_ - 2) % 6) throw "Invalid CustomEase";
        for (
          (+n[0] != 0 || +n[_ - 2] != 1) && tf(n, i.height, i.originY),
            this.segment = n,
            p = 2;
          p < _;
          p += 6
        )
          (d = { x: +n[p - 2], y: +n[p - 1] }),
            (c = { x: +n[p + 4], y: +n[p + 5] }),
            a.push(d, c),
            ef(
              d.x,
              d.y,
              +n[p],
              +n[p + 1],
              +n[p + 2],
              +n[p + 3],
              c.x,
              c.y,
              1 / (u * 2e5),
              a,
              a.length - 1
            );
        for (_ = a.length, p = 0; p < _; p++)
          (v = a[p]),
            (x = a[p - 1] || v),
            (v.x > x.x || (x.y !== v.y && x.x === v.x) || v === x) && v.x <= 1
              ? ((x.cx = v.x - x.x),
                (x.cy = v.y - x.y),
                (x.n = v),
                (x.nx = v.x),
                f &&
                  p > 1 &&
                  Math.abs(x.cy / x.cx - a[p - 2].cy / a[p - 2].cx) > 2 &&
                  (f = 0),
                x.cx < s &&
                  (x.cx
                    ? (s = x.cx)
                    : ((x.cx = 0.001),
                      p === _ - 1 &&
                        ((x.x -= 0.001), (s = Math.min(s, 0.001)), (f = 0)))))
              : (a.splice(p--, 1), _--);
        if (((_ = (1 / s + 1) | 0), (h = 1 / _), (g = 0), (v = a[0]), f)) {
          for (p = 0; p < _; p++)
            (w = p * h),
              v.nx < w && (v = a[++g]),
              (d = v.y + ((w - v.x) / v.cx) * v.cy),
              (l[p] = { x: w, cx: h, y: d, cy: 0, nx: 9 }),
              p && (l[p - 1].cy = d - l[p - 1].y);
          l[_ - 1].cy = a[a.length - 1].y - d;
        } else {
          for (p = 0; p < _; p++) v.nx < p * h && (v = a[++g]), (l[p] = v);
          g < a.length - 1 && (l[p - 1] = a[a.length - 2]);
        }
        return (
          (this.ease = function (T) {
            var C = l[(T * _) | 0] || l[_ - 1];
            return C.nx < T && (C = C.n), C.y + ((T - C.x) / C.cx) * C.cy;
          }),
          (this.ease.custom = this),
          this.id && be && be.registerEase(this.id, this.ease),
          this
        );
      }),
      (t.getSVGData = function (e) {
        return o.getSVGData(this, e);
      }),
      (o.create = function (e, i, n) {
        return new o(e, i, n).ease;
      }),
      (o.register = function (e) {
        (be = e), ga();
      }),
      (o.get = function (e) {
        return be.parseEase(e);
      }),
      (o.getSVGData = function (e, i) {
        i = i || {};
        var n = i.width || 100,
          s = i.height || 100,
          a = i.x || 0,
          l = (i.y || 0) + s,
          u = be.utils.toArray(i.path)[0],
          f,
          _,
          d,
          c,
          p,
          h,
          g,
          v,
          x,
          w;
        if (
          (i.invert && ((s = -s), (l = 0)),
          typeof e == "string" && (e = be.parseEase(e)),
          e.custom && (e = e.custom),
          e instanceof o)
        )
          f = jc(qc([e.segment], n, 0, 0, -s, a, l));
        else {
          for (
            f = [a, l],
              g = Math.max(5, (i.precision || 1) * 200),
              c = 1 / g,
              g += 2,
              v = 5 / g,
              x = Fn(a + c * n),
              w = Fn(l + e(c) * -s),
              _ = (w - l) / (x - a),
              d = 2;
            d < g;
            d++
          )
            (p = Fn(a + d * c * n)),
              (h = Fn(l + e(d * c) * -s)),
              (Math.abs((h - w) / (p - x) - _) > v || d === g - 1) &&
                (f.push(x, w), (_ = (h - w) / (p - x))),
              (x = p),
              (w = h);
          f = "M" + f.join(",");
        }
        return u && u.setAttribute("d", f), f;
      }),
      o
    );
  })();
Kl() && be.registerPlugin(xn);
xn.version = "3.12.5";
var yi = function () {
  return (
    (yi =
      Object.assign ||
      function (o) {
        for (var t, r = 1, e = arguments.length; r < e; r++)
          for (var i in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i]);
        return o;
      }),
    yi.apply(this, arguments)
  );
};
function Zl(o, t, r) {
  if (r || arguments.length === 2)
    for (var e, i = 0, n = t.length; i < n; i++)
      (!e && i in t) ||
        (e || (e = Array.prototype.slice.call(t, 0, i)), (e[i] = t[i]));
  return o.concat(e || Array.prototype.slice.call(t));
}
function ma(o) {
  return Array.prototype.slice.call(o);
}
function ya(o, t) {
  var r = Math.floor(o);
  return r === t || r + 1 === t ? o : t;
}
function va() {
  return Date.now();
}
function Ms(o, t, r) {
  if (((t = "data-keen-slider-" + t), r === null)) return o.removeAttribute(t);
  o.setAttribute(t, r || "");
}
function ls(o, t) {
  return (
    (t = t || document),
    typeof o == "function" && (o = o(t)),
    Array.isArray(o)
      ? o
      : typeof o == "string"
      ? ma(t.querySelectorAll(o))
      : o instanceof HTMLElement
      ? [o]
      : o instanceof NodeList
      ? ma(o)
      : []
  );
}
function Bi(o) {
  o.raw && (o = o.raw),
    o.cancelable && !o.defaultPrevented && o.preventDefault();
}
function Vi(o) {
  o.raw && (o = o.raw), o.stopPropagation && o.stopPropagation();
}
function Jl() {
  var o = [];
  return {
    add: function (t, r, e, i) {
      t.addListener ? t.addListener(e) : t.addEventListener(r, e, i),
        o.push([t, r, e, i]);
    },
    input: function (t, r, e, i) {
      this.add(
        t,
        r,
        (function (n) {
          return function (s) {
            s.nativeEvent && (s = s.nativeEvent);
            var a = s.changedTouches || [],
              l = s.targetTouches || [],
              u = s.detail && s.detail.x ? s.detail : null;
            return n({
              id: u
                ? u.identifier
                  ? u.identifier
                  : "i"
                : l[0]
                ? l[0]
                  ? l[0].identifier
                  : "e"
                : "d",
              idChanged: u
                ? u.identifier
                  ? u.identifier
                  : "i"
                : a[0]
                ? a[0]
                  ? a[0].identifier
                  : "e"
                : "d",
              raw: s,
              x: u && u.x ? u.x : l[0] ? l[0].screenX : u ? u.x : s.pageX,
              y: u && u.y ? u.y : l[0] ? l[0].screenY : u ? u.y : s.pageY,
            });
          };
        })(e),
        i
      );
    },
    purge: function () {
      o.forEach(function (t) {
        t[0].removeListener
          ? t[0].removeListener(t[2])
          : t[0].removeEventListener(t[1], t[2], t[3]);
      }),
        (o = []);
    },
  };
}
function Do(o, t, r) {
  return Math.min(Math.max(o, t), r);
}
function tr(o) {
  return (o > 0 ? 1 : 0) - (o < 0 ? 1 : 0) || +o;
}
function xa(o) {
  var t = o.getBoundingClientRect();
  return {
    height: ya(t.height, o.offsetHeight),
    width: ya(t.width, o.offsetWidth),
  };
}
function ge(o, t, r, e) {
  var i = o && o[t];
  return i == null ? r : e && typeof i == "function" ? i() : i;
}
function Be(o) {
  return Math.round(1e6 * o) / 1e6;
}
function rf(o) {
  var t, r, e, i, n, s;
  function a(d) {
    s || (s = d), l(!0);
    var c = d - s;
    c > e && (c = e);
    var p = i[r];
    if (p[3] < c) return r++, a(d);
    var h = p[2],
      g = p[4],
      v = p[0],
      x = p[1] * (0, p[5])(g === 0 ? 1 : (c - h) / g);
    if ((x && o.track.to(v + x), c < e)) return f();
    (s = null), l(!1), u(null), o.emit("animationEnded");
  }
  function l(d) {
    t.active = d;
  }
  function u(d) {
    t.targetIdx = d;
  }
  function f() {
    var d;
    (d = a), (n = window.requestAnimationFrame(d));
  }
  function _() {
    var d;
    (d = n),
      window.cancelAnimationFrame(d),
      l(!1),
      u(null),
      s && o.emit("animationStopped"),
      (s = null);
  }
  return (t = {
    active: !1,
    start: function (d) {
      if ((_(), o.track.details)) {
        var c = 0,
          p = o.track.details.position;
        (r = 0),
          (e = 0),
          (i = d.map(function (h) {
            var g,
              v = Number(p),
              x = (g = h.earlyExit) !== null && g !== void 0 ? g : h.duration,
              w = h.easing,
              T = h.distance * w(x / h.duration) || 0;
            p += T;
            var C = e;
            return (e += x), (c += T), [v, h.distance, C, e, h.duration, w];
          })),
          u(o.track.distToIdx(c)),
          f(),
          o.emit("animationStarted");
      }
    },
    stop: _,
    targetIdx: null,
  });
}
function nf(o) {
  var t,
    r,
    e,
    i,
    n,
    s,
    a,
    l,
    u,
    f,
    _,
    d,
    c,
    p,
    h = 1 / 0,
    g = [],
    v = null,
    x = 0;
  function w(k) {
    z(x + k);
  }
  function T(k) {
    var E = C(x + k).abs;
    return O(E) ? E : null;
  }
  function C(k) {
    var E = Math.floor(Math.abs(Be(k / r))),
      S = Be(((k % r) + r) % r);
    S === r && (S = 0);
    var R = tr(k),
      I = a.indexOf(
        Zl([], a, !0).reduce(function (m, F) {
          return Math.abs(F - S) < Math.abs(m - S) ? F : m;
        })
      ),
      N = I;
    return (
      R < 0 && E++,
      I === s && ((N = 0), (E += R > 0 ? 1 : -1)),
      { abs: N + E * s * R, origin: I, rel: N }
    );
  }
  function P(k, E, S) {
    var R;
    if (E || !L()) return b(k, S);
    if (!O(k)) return null;
    var I = C(S ?? x),
      N = I.abs,
      m = k - I.rel,
      F = N + m;
    R = b(F);
    var H = b(F - s * tr(m));
    return (
      ((H !== null && Math.abs(H) < Math.abs(R)) || R === null) && (R = H),
      Be(R)
    );
  }
  function b(k, E) {
    if ((E == null && (E = Be(x)), !O(k) || k === null)) return null;
    k = Math.round(k);
    var S = C(E),
      R = S.abs,
      I = S.rel,
      N = S.origin,
      m = V(k),
      F = ((E % r) + r) % r,
      H = a[N],
      A = Math.floor((k - (R - I)) / s) * r;
    return Be(H - F - H + a[m] + A + (N === s ? r : 0));
  }
  function O(k) {
    return M(k) === k;
  }
  function M(k) {
    return Do(k, u, f);
  }
  function L() {
    return i.loop;
  }
  function V(k) {
    return ((k % s) + s) % s;
  }
  function z(k) {
    var E;
    (E = k - x),
      g.push({ distance: E, timestamp: va() }),
      g.length > 6 && (g = g.slice(-6)),
      (x = Be(k));
    var S = y().abs;
    if (S !== v) {
      var R = v !== null;
      (v = S), R && o.emit("slideChanged");
    }
  }
  function y(k) {
    var E = k
      ? null
      : (function () {
          if (s) {
            var S = L(),
              R = S ? ((x % r) + r) % r : x,
              I = (S ? x % r : x) - n[0][2],
              N = 0 - (I < 0 && S ? r - Math.abs(I) : I),
              m = 0,
              F = C(x),
              H = F.abs,
              A = F.rel,
              Q = n[A][2],
              tt = n.map(function ($, rt) {
                var W = N + m;
                (W < 0 - $[0] || W > 1) &&
                  (W += (Math.abs(W) > r - 1 && S ? r : 0) * tr(-W));
                var G = rt - A,
                  ut = tr(G),
                  U = G + H;
                S &&
                  (ut === -1 && W > Q && (U += s),
                  ut === 1 && W < Q && (U -= s),
                  _ !== null && U < _ && (W += r),
                  d !== null && U > d && (W -= r));
                var ht = W + $[0] + $[1],
                  et = Math.max(
                    W >= 0 && ht <= 1
                      ? 1
                      : ht < 0 || W > 1
                      ? 0
                      : W < 0
                      ? Math.min(1, ($[0] + W) / $[0])
                      : (1 - W) / $[0],
                    0
                  );
                return (
                  (m += $[0] + $[1]),
                  {
                    abs: U,
                    distance: i.rtl ? -1 * W + 1 - $[0] : W,
                    portion: et,
                    size: $[0],
                  }
                );
              });
            return (
              (H = M(H)),
              (A = V(H)),
              {
                abs: M(H),
                length: e,
                max: p,
                maxIdx: f,
                min: c,
                minIdx: u,
                position: x,
                progress: S ? R / r : x / e,
                rel: A,
                slides: tt,
                slidesLength: r,
              }
            );
          }
        })();
    return (t.details = E), o.emit("detailsChanged"), E;
  }
  return (t = {
    absToRel: V,
    add: w,
    details: null,
    distToIdx: T,
    idxToDist: P,
    init: function (k) {
      if (
        ((function () {
          if (
            ((i = o.options),
            (n = (i.trackConfig || []).map(function (I) {
              return [
                ge(I, "size", 1),
                ge(I, "spacing", 0),
                ge(I, "origin", 0),
              ];
            })),
            (s = n.length))
          ) {
            r = Be(
              n.reduce(function (I, N) {
                return I + N[0] + N[1];
              }, 0)
            );
            var S,
              R = s - 1;
            (e = Be(r + n[0][2] - n[R][0] - n[R][2] - n[R][1])),
              (a = n.reduce(function (I, N) {
                if (!I) return [0];
                var m = n[I.length - 1],
                  F = I[I.length - 1] + (m[0] + m[2]) + m[1];
                return (
                  (F -= N[2]),
                  I[I.length - 1] > F && (F = I[I.length - 1]),
                  (F = Be(F)),
                  I.push(F),
                  (!S || S < F) && (l = I.length - 1),
                  (S = F),
                  I
                );
              }, null)),
              e === 0 && (l = 0),
              a.push(Be(r));
          }
        })(),
        !s)
      )
        return y(!0);
      var E;
      (function () {
        var S = o.options.range,
          R = o.options.loop;
        (_ = u = R ? ge(R, "min", -1 / 0) : 0),
          (d = f = R ? ge(R, "max", h) : l);
        var I = ge(S, "min", null),
          N = ge(S, "max", null);
        I !== null && (u = I),
          N !== null && (f = N),
          (c = u === -1 / 0 ? u : o.track.idxToDist(u || 0, !0, 0)),
          (p = f === h ? f : P(f, !0, 0)),
          N === null && (d = f),
          ge(S, "align", !1) &&
            f !== h &&
            n[V(f)][2] === 0 &&
            ((p -= 1 - n[V(f)][0]), (f = T(p - x))),
          (c = Be(c)),
          (p = Be(p));
      })(),
        (E = k),
        Number(E) === E ? w(b(M(k))) : y();
    },
    to: z,
    velocity: function () {
      var k = va(),
        E = g.reduce(
          function (S, R) {
            var I = R.distance,
              N = R.timestamp;
            return (
              k - N > 200 ||
                (tr(I) !== tr(S.distance) &&
                  S.distance &&
                  (S = { distance: 0, lastTimestamp: 0, time: 0 }),
                S.time && (S.distance += I),
                S.lastTimestamp && (S.time += N - S.lastTimestamp),
                (S.lastTimestamp = N)),
              S
            );
          },
          { distance: 0, lastTimestamp: 0, time: 0 }
        );
      return E.distance / E.time || 0;
    },
  });
}
function sf(o) {
  var t, r, e, i, n, s, a, l;
  function u(v) {
    return 2 * v;
  }
  function f(v) {
    return Do(v, a, l);
  }
  function _(v) {
    return 1 - Math.pow(1 - v, 3);
  }
  function d() {
    return e ? o.track.velocity() : 0;
  }
  function c() {
    g();
    var v = o.options.mode === "free-snap",
      x = o.track,
      w = d();
    i = tr(w);
    var T = o.track.details,
      C = [];
    if (w || !v) {
      var P = p(w),
        b = P.dist,
        O = P.dur;
      if (((O = u(O)), (b *= i), v)) {
        var M = x.idxToDist(x.distToIdx(b), !0);
        M && (b = M);
      }
      C.push({ distance: b, duration: O, easing: _ });
      var L = T.position,
        V = L + b;
      if (V < n || V > s) {
        var z = V < n ? n - L : s - L,
          y = 0,
          k = w;
        if (tr(z) === i) {
          var E = Math.min(Math.abs(z) / Math.abs(b), 1),
            S =
              (function (N) {
                return 1 - Math.pow(1 - N, 1 / 3);
              })(E) * O;
          (C[0].earlyExit = S), (k = w * (1 - E));
        } else (C[0].earlyExit = 0), (y += z);
        var R = p(k, 100),
          I = R.dist * i;
        o.options.rubberband &&
          (C.push({ distance: I, duration: u(R.dur), easing: _ }),
          C.push({ distance: -I + y, duration: 500, easing: _ }));
      }
      o.animator.start(C);
    } else
      o.moveToIdx(f(T.abs), !0, {
        duration: 500,
        easing: function (N) {
          return 1 + --N * N * N * N * N;
        },
      });
  }
  function p(v, x) {
    x === void 0 && (x = 1e3);
    var w = 147e-9 + (v = Math.abs(v)) / x;
    return { dist: Math.pow(v, 2) / w, dur: v / w };
  }
  function h() {
    var v = o.track.details;
    v && ((n = v.min), (s = v.max), (a = v.minIdx), (l = v.maxIdx));
  }
  function g() {
    o.animator.stop();
  }
  o.on("updated", h),
    o.on("optionsChanged", h),
    o.on("created", h),
    o.on("dragStarted", function () {
      (e = !1), g(), (t = r = o.track.details.abs);
    }),
    o.on("dragChecked", function () {
      e = !0;
    }),
    o.on("dragEnded", function () {
      var v = o.options.mode;
      v === "snap" &&
        (function () {
          var x = o.track,
            w = o.track.details,
            T = w.position,
            C = tr(d());
          (T > s || T < n) && (C = 0);
          var P = t + C;
          w.slides[x.absToRel(P)].portion === 0 && (P -= C),
            t !== r && (P = r),
            tr(x.idxToDist(P, !0)) !== C && (P += C),
            (P = f(P));
          var b = x.idxToDist(P, !0);
          o.animator.start([
            {
              distance: b,
              duration: 500,
              easing: function (O) {
                return 1 + --O * O * O * O * O;
              },
            },
          ]);
        })(),
        (v !== "free" && v !== "free-snap") || c();
    }),
    o.on("dragged", function () {
      r = o.track.details.abs;
    });
}
function of(o) {
  var t,
    r,
    e,
    i,
    n,
    s,
    a,
    l,
    u,
    f,
    _,
    d,
    c,
    p,
    h,
    g,
    v,
    x,
    w = Jl();
  function T(y) {
    if (s && l === y.id) {
      var k = O(y);
      if (u) {
        if (!b(y)) return P(y);
        (f = k), (u = !1), o.emit("dragChecked");
      }
      if (g) return (f = k);
      Bi(y);
      var E = (function (R) {
        if (v === -1 / 0 && x === 1 / 0) return R;
        var I = o.track.details,
          N = I.length,
          m = I.position,
          F = Do(R, v - m, x - m);
        if (N === 0) return 0;
        if (!o.options.rubberband) return F;
        if ((m <= x && m >= v) || (m < v && r > 0) || (m > x && r < 0))
          return R;
        var H = (m < v ? m - v : m - x) / N,
          A = i * N,
          Q = Math.abs(H * A),
          tt = Math.max(0, 1 - (Q / n) * 2);
        return tt * tt * R;
      })((a(f - k) / i) * e);
      r = tr(E);
      var S = o.track.details.position;
      ((S > v && S < x) || (S === v && r > 0) || (S === x && r < 0)) && Vi(y),
        (_ += E),
        !d && Math.abs(_ * i) > 5 && (d = !0),
        o.track.add(E),
        (f = k),
        o.emit("dragged");
    }
  }
  function C(y) {
    !s &&
      o.track.details &&
      o.track.details.length &&
      ((_ = 0),
      (s = !0),
      (d = !1),
      (u = !0),
      (l = y.id),
      b(y),
      (f = O(y)),
      o.emit("dragStarted"));
  }
  function P(y) {
    s && l === y.idChanged && ((s = !1), o.emit("dragEnded"));
  }
  function b(y) {
    var k = M(),
      E = k ? y.y : y.x,
      S = k ? y.x : y.y,
      R = c !== void 0 && p !== void 0 && Math.abs(p - S) <= Math.abs(c - E);
    return (c = E), (p = S), R;
  }
  function O(y) {
    return M() ? y.y : y.x;
  }
  function M() {
    return o.options.vertical;
  }
  function L() {
    (i = o.size), (n = M() ? window.innerHeight : window.innerWidth);
    var y = o.track.details;
    y && ((v = y.min), (x = y.max));
  }
  function V(y) {
    d && (Vi(y), Bi(y));
  }
  function z() {
    if ((w.purge(), o.options.drag && !o.options.disabled)) {
      var y;
      (y = o.options.dragSpeed || 1),
        (a =
          typeof y == "function"
            ? y
            : function (E) {
                return E * y;
              }),
        (e = o.options.rtl ? -1 : 1),
        L(),
        (t = o.container),
        (function () {
          var E = "data-keen-slider-clickable";
          ls("[".concat(E, "]:not([").concat(E, "=false])"), t).map(function (
            S
          ) {
            w.add(S, "dragstart", Vi),
              w.add(S, "mousedown", Vi),
              w.add(S, "touchstart", Vi);
          });
        })(),
        w.add(t, "dragstart", function (E) {
          Bi(E);
        }),
        w.add(t, "click", V, { capture: !0 }),
        w.input(t, "ksDragStart", C),
        w.input(t, "ksDrag", T),
        w.input(t, "ksDragEnd", P),
        w.input(t, "mousedown", C),
        w.input(t, "mousemove", T),
        w.input(t, "mouseleave", P),
        w.input(t, "mouseup", P),
        w.input(t, "touchstart", C, { passive: !0 }),
        w.input(t, "touchmove", T, { passive: !1 }),
        w.input(t, "touchend", P),
        w.input(t, "touchcancel", P),
        w.add(window, "wheel", function (E) {
          s && Bi(E);
        });
      var k = "data-keen-slider-scrollable";
      ls("[".concat(k, "]:not([").concat(k, "=false])"), o.container).map(
        function (E) {
          return (function (S) {
            var R;
            w.input(
              S,
              "touchstart",
              function (I) {
                (R = O(I)), (g = !0), (h = !0);
              },
              { passive: !0 }
            ),
              w.input(S, "touchmove", function (I) {
                var N = M(),
                  m = N
                    ? S.scrollHeight - S.clientHeight
                    : S.scrollWidth - S.clientWidth,
                  F = R - O(I),
                  H = N ? S.scrollTop : S.scrollLeft,
                  A =
                    (N && S.style.overflowY === "scroll") ||
                    (!N && S.style.overflowX === "scroll");
                if (
                  ((R = O(I)), ((F < 0 && H > 0) || (F > 0 && H < m)) && h && A)
                )
                  return (g = !0);
                (h = !1), Bi(I), (g = !1);
              }),
              w.input(S, "touchend", function () {
                g = !1;
              });
          })(E);
        }
      );
    }
  }
  o.on("updated", L),
    o.on("optionsChanged", z),
    o.on("created", z),
    o.on("destroyed", w.purge);
}
function af(o) {
  var t,
    r,
    e = null;
  function i(c, p, h) {
    o.animator.active
      ? s(c, p, h)
      : requestAnimationFrame(function () {
          return s(c, p, h);
        });
  }
  function n() {
    i(!1, !1, r);
  }
  function s(c, p, h) {
    var g = 0,
      v = o.size,
      x = o.track.details;
    if (x && t) {
      var w = x.slides;
      t.forEach(function (T, C) {
        if (c) !e && p && l(T, null, h), u(T, null, h);
        else {
          if (!w[C]) return;
          var P = w[C].size * v;
          !e && p && l(T, P, h), u(T, w[C].distance * v - g, h), (g += P);
        }
      });
    }
  }
  function a(c) {
    return o.options.renderMode === "performance" ? Math.round(c) : c;
  }
  function l(c, p, h) {
    var g = h ? "height" : "width";
    p !== null && (p = a(p) + "px"),
      (c.style["min-" + g] = p),
      (c.style["max-" + g] = p);
  }
  function u(c, p, h) {
    if (p !== null) {
      p = a(p);
      var g = h ? p : 0;
      p = "translate3d(".concat(h ? 0 : p, "px, ").concat(g, "px, 0)");
    }
    (c.style.transform = p), (c.style["-webkit-transform"] = p);
  }
  function f() {
    t && (s(!0, !0, r), (t = null)), o.on("detailsChanged", n, !0);
  }
  function _() {
    i(!1, !0, r);
  }
  function d() {
    f(),
      (r = o.options.vertical),
      o.options.disabled ||
        o.options.renderMode === "custom" ||
        ((e = ge(o.options.slides, "perView", null) === "auto"),
        o.on("detailsChanged", n),
        (t = o.slides).length && _());
  }
  o.on("created", d),
    o.on("optionsChanged", d),
    o.on("beforeOptionsChanged", function () {
      f();
    }),
    o.on("updated", _),
    o.on("destroyed", f);
}
function lf(o, t) {
  return function (r) {
    var e,
      i,
      n,
      s,
      a,
      l = Jl();
    function u(b) {
      var O;
      Ms(
        r.container,
        "reverse",
        ((O = r.container),
        window.getComputedStyle(O, null).getPropertyValue("direction") !==
          "rtl" || b
          ? null
          : "")
      ),
        Ms(r.container, "v", r.options.vertical && !b ? "" : null),
        Ms(r.container, "disabled", r.options.disabled && !b ? "" : null);
    }
    function f() {
      _() && g();
    }
    function _() {
      var b = null;
      if (
        (s.forEach(function (M) {
          M.matches && (b = M.__media);
        }),
        b === e)
      )
        return !1;
      e || r.emit("beforeOptionsChanged"), (e = b);
      var O = b ? n.breakpoints[b] : n;
      return (r.options = yi(yi({}, n), O)), u(), C(), P(), x(), !0;
    }
    function d(b) {
      var O = xa(b);
      return (r.options.vertical ? O.height : O.width) / r.size || 1;
    }
    function c() {
      return r.options.trackConfig.length;
    }
    function p(b) {
      for (var O in ((e = !1),
      (n = yi(yi({}, t), b)),
      l.purge(),
      (i = r.size),
      (s = []),
      n.breakpoints || [])) {
        var M = window.matchMedia(O);
        (M.__media = O), s.push(M), l.add(M, "change", f);
      }
      l.add(window, "orientationchange", T), l.add(window, "resize", w), _();
    }
    function h(b) {
      r.animator.stop();
      var O = r.track.details;
      r.track.init(b ?? (O ? O.abs : 0));
    }
    function g(b) {
      h(b), r.emit("optionsChanged");
    }
    function v(b, O) {
      if (b) return p(b), void g(O);
      C(), P();
      var M = c();
      x(), c() !== M ? g(O) : h(O), r.emit("updated");
    }
    function x() {
      var b = r.options.slides;
      if (typeof b == "function")
        return (r.options.trackConfig = b(r.size, r.slides));
      for (
        var O = r.slides,
          M = O.length,
          L = typeof b == "number" ? b : ge(b, "number", M, !0),
          V = [],
          z = ge(b, "perView", 1, !0),
          y = ge(b, "spacing", 0, !0) / r.size || 0,
          k = z === "auto" ? y : y / z,
          E = ge(b, "origin", "auto"),
          S = 0,
          R = 0;
        R < L;
        R++
      ) {
        var I = z === "auto" ? d(O[R]) : 1 / z - y + k,
          N = E === "center" ? 0.5 - I / 2 : E === "auto" ? 0 : E;
        V.push({ origin: N, size: I, spacing: y }), (S += I);
      }
      if (((S += y * (L - 1)), E === "auto" && !r.options.loop && z !== 1)) {
        var m = 0;
        V.map(function (F) {
          var H = S - m;
          return (
            (m += F.size + y),
            H >= 1 || (F.origin = 1 - H - (S > 1 ? 0 : 1 - S)),
            F
          );
        });
      }
      r.options.trackConfig = V;
    }
    function w() {
      C();
      var b = r.size;
      r.options.disabled || b === i || ((i = b), v());
    }
    function T() {
      w(), setTimeout(w, 500), setTimeout(w, 2e3);
    }
    function C() {
      var b = xa(r.container);
      r.size = (r.options.vertical ? b.height : b.width) || 1;
    }
    function P() {
      r.slides = ls(r.options.selector, r.container);
    }
    (r.container = (a = ls(o, document)).length ? a[0] : null),
      (r.destroy = function () {
        l.purge(), r.emit("destroyed"), u(!0);
      }),
      (r.prev = function () {
        r.moveToIdx(r.track.details.abs - 1, !0);
      }),
      (r.next = function () {
        r.moveToIdx(r.track.details.abs + 1, !0);
      }),
      (r.update = v),
      p(r.options);
  };
}
var uf = function (o, t, r) {
    try {
      return (function (e, i) {
        var n,
          s = {};
        return (
          (n = {
            emit: function (a) {
              s[a] &&
                s[a].forEach(function (u) {
                  u(n);
                });
              var l = n.options && n.options[a];
              l && l(n);
            },
            moveToIdx: function (a, l, u) {
              var f = n.track.idxToDist(a, l);
              if (f) {
                var _ = n.options.defaultAnimation;
                n.animator.start([
                  {
                    distance: f,
                    duration: ge(u || _, "duration", 500),
                    easing: ge(u || _, "easing", function (d) {
                      return 1 + --d * d * d * d * d;
                    }),
                  },
                ]);
              }
            },
            on: function (a, l, u) {
              u === void 0 && (u = !1), s[a] || (s[a] = []);
              var f = s[a].indexOf(l);
              f > -1 ? u && delete s[a][f] : u || s[a].push(l);
            },
            options: e,
          }),
          (function () {
            if (((n.track = nf(n)), (n.animator = rf(n)), i))
              for (var a = 0, l = i; a < l.length; a++) (0, l[a])(n);
            n.track.init(n.options.initial || 0), n.emit("created");
          })(),
          n
        );
      })(
        t,
        Zl(
          [
            lf(o, {
              drag: !0,
              mode: "snap",
              renderMode: "precision",
              rubberband: !0,
              selector: ".keen-slider__slide",
            }),
            af,
            of,
            sf,
          ],
          r || [],
          !0
        )
      );
    } catch (e) {
      console.error(e);
    }
  },
  Ds =
    typeof module < "u" && module.exports && typeof global < "u"
      ? global
      : globalThis || window;
(function (o) {
  var t = o.GreenSockGlobals || o,
    r = (function (y) {
      var k,
        E = y.split("."),
        S = t;
      for (k = 0; k < E.length; k++) S[E[k]] = S = S[E[k]] || {};
      return S;
    })("com.greensock.utils"),
    e = "SplitText",
    i = String.fromCharCode(
      103,
      114,
      101,
      101,
      110,
      115,
      111,
      99,
      107,
      46,
      99,
      111,
      109
    );
  (function (y) {
    for (
      var k =
          (o ? o.location.href : "").indexOf(
            String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)
          ) !== -1 &&
          y.indexOf(
            String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)
          ) !== -1,
        E = [
          i,
          String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
          String.fromCharCode(
            99,
            111,
            100,
            101,
            112,
            101,
            110,
            46,
            112,
            108,
            117,
            109,
            98,
            105,
            110,
            103
          ),
          String.fromCharCode(
            99,
            111,
            100,
            101,
            112,
            101,
            110,
            46,
            100,
            101,
            118
          ),
          String.fromCharCode(
            99,
            115,
            115,
            45,
            116,
            114,
            105,
            99,
            107,
            115,
            46,
            99,
            111,
            109
          ),
          String.fromCharCode(99, 100, 112, 110, 46, 105, 111),
          String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118),
          String.fromCharCode(
            99,
            111,
            100,
            101,
            99,
            97,
            110,
            121,
            111,
            110,
            46,
            110,
            101,
            116
          ),
          String.fromCharCode(
            116,
            104,
            101,
            109,
            101,
            102,
            111,
            114,
            101,
            115,
            116,
            46,
            110,
            101,
            116
          ),
          String.fromCharCode(
            99,
            101,
            114,
            101,
            98,
            114,
            97,
            120,
            46,
            99,
            111,
            46,
            117,
            107
          ),
          String.fromCharCode(
            116,
            121,
            109,
            112,
            97,
            110,
            117,
            115,
            46,
            110,
            101,
            116
          ),
          String.fromCharCode(
            116,
            119,
            101,
            101,
            110,
            109,
            97,
            120,
            46,
            99,
            111,
            109
          ),
          String.fromCharCode(
            116,
            119,
            101,
            101,
            110,
            108,
            105,
            116,
            101,
            46,
            99,
            111,
            109
          ),
          String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111),
          String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
          String.fromCharCode(
            119,
            101,
            98,
            112,
            97,
            99,
            107,
            98,
            105,
            110,
            46,
            99,
            111,
            109
          ),
          String.fromCharCode(
            97,
            114,
            99,
            104,
            105,
            118,
            101,
            46,
            111,
            114,
            103
          ),
          String.fromCharCode(
            99,
            111,
            100,
            101,
            115,
            97,
            110,
            100,
            98,
            111,
            120,
            46,
            105,
            111
          ),
          String.fromCharCode(
            115,
            116,
            97,
            99,
            107,
            98,
            108,
            105,
            116,
            122,
            46,
            99,
            111,
            109
          ),
          String.fromCharCode(99, 111, 100, 105, 101, 114, 46, 105, 111),
          String.fromCharCode(
            106,
            115,
            102,
            105,
            100,
            100,
            108,
            101,
            46,
            110,
            101,
            116
          ),
        ],
        S = E.length;
      -1 < --S;

    )
      if (y.indexOf(E[S]) !== -1) return !0;
    return (
      k &&
        o &&
        o.console &&
        console.log(
          String.fromCharCode(
            87,
            65,
            82,
            78,
            73,
            78,
            71,
            58,
            32,
            97,
            32,
            115,
            112,
            101,
            99,
            105,
            97,
            108,
            32,
            118,
            101,
            114,
            115,
            105,
            111,
            110,
            32,
            111,
            102,
            32
          ) +
            e +
            String.fromCharCode(
              32,
              105,
              115,
              32,
              114,
              117,
              110,
              110,
              105,
              110,
              103,
              32,
              108,
              111,
              99,
              97,
              108,
              108,
              121,
              44,
              32,
              98,
              117,
              116,
              32,
              105,
              116,
              32,
              119,
              105,
              108,
              108,
              32,
              110,
              111,
              116,
              32,
              119,
              111,
              114,
              107,
              32,
              111,
              110,
              32,
              97,
              32,
              108,
              105,
              118,
              101,
              32,
              100,
              111,
              109,
              97,
              105,
              110,
              32,
              98,
              101,
              99,
              97,
              117,
              115,
              101,
              32,
              105,
              116,
              32,
              105,
              115,
              32,
              97,
              32,
              109,
              101,
              109,
              98,
              101,
              114,
              115,
              104,
              105,
              112,
              32,
              98,
              101,
              110,
              101,
              102,
              105,
              116,
              32,
              111,
              102,
              32,
              67,
              108,
              117,
              98,
              32,
              71,
              114,
              101,
              101,
              110,
              83,
              111,
              99,
              107,
              46,
              32,
              80,
              108,
              101,
              97,
              115,
              101,
              32,
              115,
              105,
              103,
              110,
              32,
              117,
              112,
              32,
              97,
              116,
              32,
              104,
              116,
              116,
              112,
              58,
              47,
              47,
              103,
              114,
              101,
              101,
              110,
              115,
              111,
              99,
              107,
              46,
              99,
              111,
              109,
              47,
              99,
              108,
              117,
              98,
              47,
              32,
              97,
              110,
              100,
              32,
              116,
              104,
              101,
              110,
              32,
              100,
              111,
              119,
              110,
              108,
              111,
              97,
              100,
              32,
              116,
              104,
              101,
              32,
              39,
              114,
              101,
              97,
              108,
              39,
              32,
              118,
              101,
              114,
              115,
              105,
              111,
              110,
              32,
              102,
              114,
              111,
              109,
              32,
              121,
              111,
              117,
              114,
              32,
              71,
              114,
              101,
              101,
              110,
              83,
              111,
              99,
              107,
              32,
              97,
              99,
              99,
              111,
              117,
              110,
              116,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              104,
              97,
              115,
              32,
              110,
              111,
              32,
              115,
              117,
              99,
              104,
              32,
              108,
              105,
              109,
              105,
              116,
              97,
              116,
              105,
              111,
              110,
              115,
              46,
              32,
              84,
              104,
              101,
              32,
              102,
              105,
              108,
              101,
              32,
              121,
              111,
              117,
              39,
              114,
              101,
              32,
              117,
              115,
              105,
              110,
              103,
              32,
              119,
              97,
              115,
              32,
              108,
              105,
              107,
              101,
              108,
              121,
              32,
              100,
              111,
              119,
              110,
              108,
              111,
              97,
              100,
              101,
              100,
              32,
              102,
              114,
              111,
              109,
              32,
              101,
              108,
              115,
              101,
              119,
              104,
              101,
              114,
              101,
              32,
              111,
              110,
              32,
              116,
              104,
              101,
              32,
              119,
              101,
              98,
              32,
              97,
              110,
              100,
              32,
              105,
              115,
              32,
              114,
              101,
              115,
              116,
              114,
              105,
              99,
              116,
              101,
              100,
              32,
              116,
              111,
              32,
              108,
              111,
              99,
              97,
              108,
              32,
              117,
              115,
              101,
              32,
              111,
              114,
              32,
              111,
              110,
              32,
              115,
              105,
              116,
              101,
              115,
              32,
              108,
              105,
              107,
              101,
              32,
              99,
              111,
              100,
              101,
              112,
              101,
              110,
              46,
              105,
              111,
              46
            )
        ),
      k
    );
  })(o ? o.location.host : "");
  var n = function (y) {
      var k = y.nodeType,
        E = "";
      if (k === 1 || k === 9 || k === 11) {
        if (typeof y.textContent == "string") return y.textContent;
        for (y = y.firstChild; y; y = y.nextSibling) E += n(y);
      } else if (k === 3 || k === 4) return y.nodeValue;
      return E;
    },
    s = document,
    a =
      o !== void 0 ? o : s.defaultView || { getComputedStyle: function () {} },
    l = function (y) {
      return a.getComputedStyle(y);
    },
    u = /([A-Z])/g,
    f = function (y, k, E, S) {
      var R;
      return (
        (E = E || l(y))
          ? (R =
              (y = E.getPropertyValue(k.replace(u, "-$1").toLowerCase())) ||
              E.length
                ? y
                : E[k])
          : y.currentStyle && (R = (E = y.currentStyle)[k]),
        S ? R : parseInt(R, 10) || 0
      );
    },
    _ = function (y) {
      return !!(
        y.length &&
        y[0] &&
        ((y[0].nodeType && y[0].style && !y.nodeType) ||
          (y[0].length && y[0][0]))
      );
    },
    d = function (y, k) {
      for (var E, S = k.length; -1 < --S; )
        if (((E = k[S]), y.substr(0, E.length) === E)) return E.length;
    },
    c = /(?:\r|\n|\t\t)/g,
    p = /(?:\s\s+)/g,
    h = 127462,
    g = 127487,
    v = function (y) {
      return (
        ((y.charCodeAt(0) - 55296) << 10) + (y.charCodeAt(1) - 56320) + 65536
      );
    },
    x =
      " style='position:relative;display:inline-block;" +
      (s.all && !s.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
    w = function (y, k) {
      var E = (y = y || "").indexOf("++") !== -1,
        S = 1;
      return (
        E && (y = y.split("++").join("")),
        function () {
          return (
            "<" + k + x + (y ? " class='" + y + (E ? S++ : "") + "'>" : ">")
          );
        }
      );
    },
    T =
      (r.SplitText =
      t.SplitText =
        function (y, k) {
          if (!y) throw "cannot split a null element.";
          (this.elements = _(y)
            ? (function (E) {
                var S,
                  R,
                  I,
                  N = [],
                  m = E.length;
                for (S = 0; S < m; S++)
                  if (((R = E[S]), _(R)))
                    for (I = R.length, I = 0; I < R.length; I++) N.push(R[I]);
                  else N.push(R);
                return N;
              })(y)
            : [y]),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = k || {}),
            this.split(k);
        }),
    C = function (y, k, E) {
      var S = y.nodeType;
      if (S === 1 || S === 9 || S === 11)
        for (y = y.firstChild; y; y = y.nextSibling) C(y, k, E);
      else (S !== 3 && S !== 4) || (y.nodeValue = y.nodeValue.split(k).join(E));
    },
    P = function (y, k) {
      for (var E = k.length; -1 < --E; ) y.push(k[E]);
    },
    b = function (y) {
      var k,
        E = [],
        S = y.length;
      for (k = 0; k !== S; E.push(y[k++]));
      return E;
    },
    O = function (y, k, E) {
      for (var S; y && y !== k; ) {
        if ((S = y._next || y.nextSibling))
          return S.textContent.charAt(0) === E;
        y = y.parentNode || y._parent;
      }
      return !1;
    },
    M = function (y) {
      var k,
        E,
        S = b(y.childNodes),
        R = S.length;
      for (k = 0; k < R; k++)
        (E = S[k])._isSplit
          ? M(E)
          : (k && E.previousSibling.nodeType === 3
              ? (E.previousSibling.nodeValue +=
                  E.nodeType === 3 ? E.nodeValue : E.firstChild.nodeValue)
              : E.nodeType !== 3 && y.insertBefore(E.firstChild, E),
            y.removeChild(E));
    },
    L = function (y, k, E, S, R, I, N) {
      var m,
        F,
        H,
        A,
        Q,
        tt,
        $,
        rt,
        W,
        G,
        ut,
        U,
        ht = l(y),
        et = f(y, "paddingLeft", ht),
        dt = -999,
        zt = f(y, "borderBottomWidth", ht) + f(y, "borderTopWidth", ht),
        Mt = f(y, "borderLeftWidth", ht) + f(y, "borderRightWidth", ht),
        D = f(y, "paddingTop", ht) + f(y, "paddingBottom", ht),
        Gt = f(y, "paddingLeft", ht) + f(y, "paddingRight", ht),
        Jt = 0.2 * f(y, "fontSize"),
        ue = f(y, "textAlign", ht, !0),
        pt = [],
        te = [],
        Pe = [],
        xe = k.wordDelimiter || " ",
        _t = k.tag ? k.tag : k.span ? "span" : "div",
        Fe = k.type || k.split || "chars,words,lines",
        ct = R && Fe.indexOf("lines") !== -1 ? [] : null,
        Dt = Fe.indexOf("words") !== -1,
        Bt = Fe.indexOf("chars") !== -1,
        At = k.position === "absolute" || k.absolute === !0,
        Ue = k.linesClass,
        Tt = (Ue || "").indexOf("++") !== -1,
        dr = [];
      for (
        Tt && (Ue = Ue.split("++").join("")),
          H = (F = y.getElementsByTagName("*")).length,
          Q = [],
          m = 0;
        m < H;
        m++
      )
        Q[m] = F[m];
      if (ct || At)
        for (m = 0; m < H; m++)
          ((tt = (A = Q[m]).parentNode === y) || At || (Bt && !Dt)) &&
            ((U = A.offsetTop),
            ct &&
              tt &&
              Math.abs(U - dt) > Jt &&
              (A.nodeName !== "BR" || m === 0) &&
              (($ = []), ct.push($), (dt = U)),
            At &&
              ((A._x = A.offsetLeft),
              (A._y = U),
              (A._w = A.offsetWidth),
              (A._h = A.offsetHeight)),
            ct &&
              (((A._isSplit && tt) ||
                (!Bt && tt) ||
                (Dt && tt) ||
                (!Dt &&
                  A.parentNode.parentNode === y &&
                  !A.parentNode._isSplit)) &&
                ($.push(A), (A._x -= et), O(A, y, xe) && (A._wordEnd = !0)),
              A.nodeName === "BR" &&
                ((A.nextSibling && A.nextSibling.nodeName === "BR") ||
                  m === 0) &&
                ct.push([])));
      for (m = 0; m < H; m++)
        (tt = (A = Q[m]).parentNode === y),
          A.nodeName !== "BR"
            ? (At &&
                ((W = A.style),
                Dt ||
                  tt ||
                  ((A._x += A.parentNode._x), (A._y += A.parentNode._y)),
                (W.left = A._x + "px"),
                (W.top = A._y + "px"),
                (W.position = "absolute"),
                (W.display = "block"),
                (W.width = A._w + 1 + "px"),
                (W.height = A._h + "px")),
              !Dt && Bt
                ? A._isSplit
                  ? ((A._next = A.nextSibling), A.parentNode.appendChild(A))
                  : A.parentNode._isSplit
                  ? ((A._parent = A.parentNode),
                    !A.previousSibling &&
                      A.firstChild &&
                      (A.firstChild._isFirst = !0),
                    A.nextSibling &&
                      A.nextSibling.textContent === " " &&
                      !A.nextSibling.nextSibling &&
                      dr.push(A.nextSibling),
                    (A._next =
                      A.nextSibling && A.nextSibling._isFirst
                        ? null
                        : A.nextSibling),
                    A.parentNode.removeChild(A),
                    Q.splice(m--, 1),
                    H--)
                  : tt ||
                    ((U = !A.nextSibling && O(A.parentNode, y, xe)),
                    A.parentNode._parent && A.parentNode._parent.appendChild(A),
                    U && A.parentNode.appendChild(s.createTextNode(" ")),
                    _t === "span" && (A.style.display = "inline"),
                    pt.push(A))
                : A.parentNode._isSplit && !A._isSplit && A.innerHTML !== ""
                ? te.push(A)
                : Bt &&
                  !A._isSplit &&
                  (_t === "span" && (A.style.display = "inline"), pt.push(A)))
            : ct || At
            ? (A.parentNode && A.parentNode.removeChild(A),
              Q.splice(m--, 1),
              H--)
            : Dt || y.appendChild(A);
      for (m = dr.length; -1 < --m; ) dr[m].parentNode.removeChild(dr[m]);
      if (ct) {
        for (
          At &&
            ((G = s.createElement(_t)),
            y.appendChild(G),
            (ut = G.offsetWidth + "px"),
            (U = G.offsetParent === y ? 0 : y.offsetLeft),
            y.removeChild(G)),
            W = y.style.cssText,
            y.style.cssText = "display:none;";
          y.firstChild;

        )
          y.removeChild(y.firstChild);
        for (
          rt = xe === " " && (!At || (!Dt && !Bt)), m = 0;
          m < ct.length;
          m++
        ) {
          for (
            $ = ct[m],
              (G = s.createElement(_t)).style.cssText =
                "display:block;text-align:" +
                ue +
                ";position:" +
                (At ? "absolute;" : "relative;"),
              Ue && (G.className = Ue + (Tt ? m + 1 : "")),
              Pe.push(G),
              H = $.length,
              F = 0;
            F < H;
            F++
          )
            $[F].nodeName !== "BR" &&
              ((A = $[F]),
              G.appendChild(A),
              rt && A._wordEnd && G.appendChild(s.createTextNode(" ")),
              At &&
                (F === 0 &&
                  ((G.style.top = A._y + "px"), (G.style.left = et + U + "px")),
                (A.style.top = "0px"),
                U && (A.style.left = A._x - U + "px")));
          H === 0
            ? (G.innerHTML = "&nbsp;")
            : Dt || Bt || (M(G), C(G, String.fromCharCode(160), " ")),
            At && ((G.style.width = ut), (G.style.height = A._h + "px")),
            y.appendChild(G);
        }
        y.style.cssText = W;
      }
      At &&
        (N > y.clientHeight &&
          ((y.style.height = N - D + "px"),
          y.clientHeight < N && (y.style.height = N + zt + "px")),
        I > y.clientWidth &&
          ((y.style.width = I - Gt + "px"),
          y.clientWidth < I && (y.style.width = I + Mt + "px"))),
        P(E, pt),
        Dt && P(S, te),
        P(R, Pe);
    },
    V = function (y, k, E, S) {
      var R,
        I,
        N = b(y.childNodes),
        m = N.length,
        F = k.position === "absolute" || k.absolute === !0;
      if (y.nodeType !== 3 || 1 < m) {
        for (k.absolute = !1, R = 0; R < m; R++)
          ((I = N[R]).nodeType !== 3 || /\S+/.test(I.nodeValue)) &&
            (F &&
              I.nodeType !== 3 &&
              f(I, "display", null, !0) === "inline" &&
              ((I.style.display = "inline-block"),
              (I.style.position = "relative")),
            (I._isSplit = !0),
            V(I, k, E, S));
        return (k.absolute = F), void (y._isSplit = !0);
      }
      (function (H, A, Q, tt) {
        var $,
          rt,
          W,
          G,
          ut,
          U,
          ht,
          et,
          dt,
          zt,
          Mt = A.tag ? A.tag : A.span ? "span" : "div",
          D =
            (A.type || A.split || "chars,words,lines").indexOf("chars") !== -1,
          Gt = A.position === "absolute" || A.absolute === !0,
          Jt = A.wordDelimiter || " ",
          ue = Jt !== " " ? "" : Gt ? "&#173; " : " ",
          pt = "</" + Mt + ">",
          te = !0,
          Pe = A.specialChars
            ? typeof A.specialChars == "function"
              ? A.specialChars
              : d
            : null,
          xe = s.createElement("div"),
          _t = H.parentNode;
        for (
          _t.insertBefore(xe, H),
            xe.textContent = H.nodeValue,
            _t.removeChild(H),
            ht = ($ = n((H = xe))).indexOf("<") !== -1,
            A.reduceWhiteSpace !== !1 && ($ = $.replace(p, " ").replace(c, "")),
            ht && ($ = $.split("<").join("{{LT}}")),
            ut = $.length,
            rt = ($.charAt(0) === " " ? ue : "") + Q(),
            W = 0;
          W < ut;
          W++
        )
          if (((U = $.charAt(W)), Pe && (zt = Pe($.substr(W), A.specialChars))))
            (U = $.substr(W, zt || 1)),
              (rt += D && U !== " " ? tt() + U + "</" + Mt + ">" : U),
              (W += zt - 1);
          else if (U === Jt && $.charAt(W - 1) !== Jt && W) {
            for (rt += te ? pt : "", te = !1; $.charAt(W + 1) === Jt; )
              (rt += ue), W++;
            W === ut - 1
              ? (rt += ue)
              : $.charAt(W + 1) !== ")" && ((rt += ue + Q()), (te = !0));
          } else
            U === "{" && $.substr(W, 6) === "{{LT}}"
              ? ((rt += D ? tt() + "{{LT}}</" + Mt + ">" : "{{LT}}"), (W += 5))
              : (55296 <= U.charCodeAt(0) && U.charCodeAt(0) <= 56319) ||
                (65024 <= $.charCodeAt(W + 1) && $.charCodeAt(W + 1) <= 65039)
              ? ((et = v($.substr(W, 2))),
                (dt = v($.substr(W + 2, 2))),
                (G =
                  (h <= et && et <= g && h <= dt && dt <= g) ||
                  (127995 <= dt && dt <= 127999)
                    ? 4
                    : 2),
                (rt +=
                  D && U !== " "
                    ? tt() + $.substr(W, G) + "</" + Mt + ">"
                    : $.substr(W, G)),
                (W += G - 1))
              : (rt += D && U !== " " ? tt() + U + "</" + Mt + ">" : U);
        (H.outerHTML = rt + (te ? pt : "")), ht && C(_t, "{{LT}}", "<");
      })(y, k, E, S);
    },
    z = T.prototype;
  (z.split = function (y) {
    this.isSplit && this.revert(),
      (this.vars = y = y || this.vars),
      (this._originals.length =
        this.chars.length =
        this.words.length =
        this.lines.length =
          0);
    for (
      var k,
        E,
        S,
        R = this.elements.length,
        I = y.tag ? y.tag : y.span ? "span" : "div",
        N = w(y.wordsClass, I),
        m = w(y.charsClass, I);
      -1 < --R;

    )
      (S = this.elements[R]),
        (this._originals[R] = S.innerHTML),
        (k = S.clientHeight),
        (E = S.clientWidth),
        V(S, y, N, m),
        L(S, y, this.chars, this.words, this.lines, E, k);
    return (
      this.chars.reverse(),
      this.words.reverse(),
      this.lines.reverse(),
      (this.isSplit = !0),
      this
    );
  }),
    (z.revert = function () {
      if (!this._originals) throw "revert() call wasn't scoped properly.";
      for (var y = this._originals.length; -1 < --y; )
        this.elements[y].innerHTML = this._originals[y];
      return (
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.isSplit = !1),
        this
      );
    }),
    (T.selector =
      o.$ ||
      o.jQuery ||
      function (y) {
        var k = o.$ || o.jQuery;
        return k
          ? (T.selector = k)(y)
          : typeof document > "u"
          ? y
          : document.querySelectorAll
          ? document.querySelectorAll(y)
          : document.getElementById(y.charAt(0) === "#" ? y.substr(1) : y);
      }),
    (T.version = "0.7.0");
})(Ds),
  (function (o) {
    var t = function () {
      return (Ds.GreenSockGlobals || Ds).SplitText;
    };
    typeof module < "u" && module.exports
      ? (module.exports = t())
      : typeof define == "function" && define.amd && define([], t);
  })();
function cf(o = Gi(".js-appear-by-word"), t = !1) {
  if (window.matchMedia("(max-width: 767px)").matches) {
    o.forEach((i) => {
      i.style.opacity = 1;
    });
    return;
  }
  const r = (i) => {
      i.words.forEach((n) => {
        const s = n.querySelector(".gsap__word-inner");
        n.innerHTML = s.innerHTML;
      }),
        i.revert();
    },
    e = (i) => {
      const n = new SplitText(i, {
        type: "words",
        wordsClass: "gsap__word-outer",
        span: !0,
      });
      return (
        n.words.forEach((s, a) => {
          (s.innerHTML = `<span class="gsap__word-inner">${s.innerHTML}</span>`),
            s.style.setProperty("--anim-delay", `${a * 0.015}s`),
            (s.style.display = null);
        }),
        n
      );
    };
  o.forEach((i) => {
    let n = e(i),
      s = n.words[n.words.length - 1];
    (i.style.opacity = 1),
      J.create({
        trigger: i,
        start: "top bottom-=10%",
        onEnter() {
          ru(i) && i.classList.add("is-appeared");
        },
        onLeave() {
          i.classList.add("is-appeared");
        },
      }),
      t &&
        s.children[0].addEventListener("transitionend", () => {
          r(n);
        }),
      window.addEventListener(
        "resize",
        iu(() => {
          (t && i.classList.contains("is-appeared")) ||
            (r(n),
            (n = e(i)),
            (s = n.words[n.words.length - 1]),
            t &&
              !i.classList.contains("is-appeared") &&
              s.children[0].addEventListener("transitionend", () => {
                r(n);
              }));
        }, 200)
      );
  });
}
Kt.registerPlugin(J);
Kt.registerPlugin(xn);
J.defaults({ toggleActions: "play none none none" });
Kt.config({ nullTargetWarn: !1 });
(() => {
  Kt.registerEffect({
    name: "counter",
    extendTimeline: !0,
    defaults: { end: 0, duration: 0.5, ease: "power1", increment: 1 },
    effect: (d, c) => {
      const p = Kt.timeline(),
        h = d[0].innerText.replace(/,/g, ""),
        g = d[0].dataset.counterReset === "true";
      return (
        (d[0].innerText = g ? 0 : h),
        p.to(
          d,
          {
            duration: c.duration,
            innerText: c.end,
            modifiers: {
              innerText: (v) =>
                Kt.utils
                  .snap(c.increment, v)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            },
            ease: c.ease,
          },
          0
        ),
        p
      );
    },
  });
  let o;
  const t = () => {
      let d = "top bottom-=30%";
      return window.mstClient.windowH > 800 && (d = "top bottom-=120"), d;
    },
    r = (d) => {
      const c = d.dataset.aTrigger || t();
      return Kt.timeline({
        paused: !0,
        scrollTrigger: {
          trigger: d,
          toggleClass: "animations-onStart",
          start: c,
        },
        onComplete: () => {
          d.classList.add("animations-onComplete");
        },
      });
    },
    e = (d, c) => d.dataset.aLabel || c,
    i = {
      wordsIn: (d, c) => {
        const p = e(c, 0.05),
          h = new SplitText(c, { type: "words", wordsClass: "gsap__word" });
        Kt.utils
          .toArray(h.words)
          .map((v) => new SplitText(v, { type: "chars" }))
          .forEach((v) => {
            d.from(
              v.chars,
              {
                duration: 0.675,
                opacity: 0,
                ease: "back",
                delay: 0.3375,
                stagger: 0.05,
              },
              p
            );
          });
      },
      linesIn: (d, c) => {
        const p = e(c, 0.05),
          h = new SplitText(c, {
            type: "lines",
            linesClass: "gsap__line-outer",
          });
        Kt.utils
          .toArray(h.lines)
          .map(
            (v) =>
              new SplitText(v, {
                type: "lines",
                linesClass: "gsap__line-inner",
              })
          )
          .forEach((v) => {
            d.fromTo(
              v.lines,
              1,
              { rotation: 16, yPercent: 100, transformOrigin: "left center" },
              {
                duration: 1.1,
                rotation: 0,
                yPercent: 0,
                transformOrigin: "left center",
                ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                delay: 0,
              },
              p
            );
          });
      },
      slideInUp: (d, c) => {
        const p = e(c, "-=0.1");
        d.fromTo(
          c,
          1,
          { opacity: 0, yPercent: 80 },
          { opacity: 1, yPercent: 0, duration: 1, ease: "power2.out" },
          p
        );
      },
      slideUp: (d, c) => {
        const p = e(c, "-=0.1");
        d.to(c, 1, { y: 0, duration: 1.6, ease: "sine.out" }, p);
      },
      fadeIn: (d, c) => {
        const p = e(c, "-=0.1");
        d.fromTo(
          c,
          1,
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: "power2.out" },
          p
        );
      },
      fadeInUp: (d, c) => {
        const p = e(c, "-=0.1");
        d.to(c, 1, { opacity: 1, y: 0, ease: "power2.out" }, p);
      },
      fadeInDown: (d, c) => {
        const p = e(c, "-=0.1");
        d.fromTo(
          c,
          1,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, ease: "power2.out" },
          p
        );
      },
      fadeInLeft: (d, c) => {
        const p = e(c, "-=0.1");
        d.to(c, 1, { opacity: 1, x: 0, ease: "power2.out" }, p);
      },
      fadeInRight: (d, c) => {
        const p = e(c, "-=0.1");
        d.to(c, 1, { opacity: 1, x: 0, ease: "power2.out" }, p);
      },
      slideLeft: (d, c) => {
        const p = e(c, "-=0.1");
        d.to(c, 1.65, { x: -50, ease: "power2.out" }, p);
      },
      slideRight: (d, c) => {
        const p = e(c, "-=0.1");
        d.to(c, 1.65, { x: 0, ease: "power2.out" }, p);
      },
      xToZero: (d, c) => {
        const p = e(c, "-=0.1");
        d.to(c, 1.65, { x: 0, ease: "power2.out" }, p);
      },
      yToZero: (d, c) => {
        const p = e(c, "-=0.1");
        d.to(c, 1.65, { y: 0, ease: "power2.out" }, p);
      },
      showMapDottes: (d, c) => {
        const p = e(c, "-=0.1"),
          h = c.querySelectorAll("li");
        Kt.utils.shuffle(h),
          d.fromTo(
            h,
            { opacity: 0 },
            {
              duration: 0.675,
              opacity: 1,
              ease: "back",
              delay: 0.3375,
              stagger: 0.5 / h.length,
            },
            p
          );
      },
      childrenFadeIn: (d, c) => {
        const p = e(c, "-=0.1"),
          h = Kt.utils.toArray(c.children);
        d.fromTo(
          h,
          { opacity: 0 },
          { duration: 0.9, opacity: 1, delay: 0.1375, stagger: 0.25 },
          p
        );
      },
      childrenFadeInUp: (d, c) => {
        const p = e(c, "-=0.1"),
          h = Kt.utils.toArray(c.children);
        d.fromTo(
          h,
          { opacity: 0, y: 30 },
          { duration: 0.675, opacity: 1, y: 0, delay: 0.3375, stagger: 0.07 },
          p
        );
      },
      childrenFadeInDown: (d, c) => {
        const p = e(c, "-=0.1"),
          h = Kt.utils.toArray(c.children);
        d.fromTo(
          h,
          { opacity: 0, y: -30 },
          {
            duration: 0.675,
            opacity: 1,
            y: 0,
            ease: "back",
            delay: 0.3375,
            stagger: 0.07,
          },
          p
        );
      },
      imageOverlayIn: (d, c) => {
        const p = e(c, "-=0.1"),
          h = c.querySelector("img"),
          g = c.querySelector(".image-overlay");
        d.to(g, { opacity: 0, duration: 0.25 }, p).fromTo(
          h,
          1,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.25"
        );
      },
      imageOverlaySlideToRight: (d, c) => {
        const p = e(c, "-=0.1"),
          h = c.querySelector("img"),
          g = c.querySelector(".image-overlay");
        d.fromTo(
          g,
          { scaleX: "0" },
          {
            scaleX: "1",
            force3D: "auto",
            duration: 0.6,
            ease: "expo.easeInOut",
          },
          p
        ).fromTo(
          h,
          { x: "-10%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            delay: 0.3,
            duration: 0.4,
            force3D: "auto",
            ease: "expo.easeOut",
          },
          p
        );
      },
      imageOverlaySlideToLeft: (d, c) => {
        const p = e(c, "-=0.1"),
          h = c.querySelector("img"),
          g = c.querySelector(".image-overlay");
        d.fromTo(
          g,
          { scaleX: "0" },
          {
            scaleX: "1",
            force3D: "auto",
            duration: 0.6,
            ease: "expo.easeInOut",
          },
          p
        ).fromTo(
          h,
          { x: "10%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            delay: 0.3,
            duration: 0.4,
            force3D: "auto",
            ease: "expo.easeOut",
          },
          p
        );
      },
      imageZoomOut: (d, c) => {
        const p = e(c, "-=0.1"),
          h = c.querySelector("img");
        d.fromTo(
          h,
          { scale: "1.25" },
          {
            scale: "1",
            duration: 2,
            ease: xn.create("easeName", ".19,1,.22,1"),
          },
          p
        );
      },
      counter: (d, c) => {
        const p = e(c, "-=0.1"),
          h = c.dataset.counterStart || 0,
          g = c.dataset.counterEnd || 0,
          v = c.dataset.counterIncrement || 1;
        d.counter(
          c,
          { start: h, end: g, increment: v, duration: 1, ease: "linear" },
          p
        );
      },
      imageClipToLeft: (d, c) => {
        const p = c.dataset.aLabel;
        d.fromTo(
          c,
          { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
          {
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            ease: "Power2.easeInOut",
            duration: 1.35,
          },
          p
        );
      },
      imageClipToRight: (d, c) => {
        d.fromTo(
          c,
          { clipPath: "polygon(0 100%, 0 100%, 0 0, 0 0)" },
          {
            clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)",
            ease: "Power2.easeInOut",
            duration: 1.35,
          }
        );
      },
      imageClipToTop: (d, c) => {
        d.fromTo(
          c,
          { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            ease: "Power2.easeInOut",
            duration: 1.35,
          }
        );
      },
      imageClipToBottom: (d, c) => {
        d.fromTo(
          c,
          { clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)" },
          {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            ease: "Power2.easeInOut",
            duration: 1.35,
          }
        );
      },
    },
    n = () => {
      o = {
        sections: document.querySelectorAll(".js-a-section"),
        sectionsByRow: document.querySelectorAll(".js-a-byrow"),
      };
    },
    s = () => {
      o.sections.forEach((d) => {
        const c = d.querySelectorAll(".js-a-element"),
          p = r(d);
        c.forEach((h) => {
          const g = h.dataset.aType || "fadeInUp";
          Object.prototype.hasOwnProperty.call(i, g) && i[g](p, h);
        });
      });
    },
    a = () => {
      Gi(".js-parallax-wrapper").forEach((c) => {
        Kt.matchMedia().add(
          "(min-width: 768px)",
          () => (
            Kt.to("[data-speed]", {
              y: (h, g) =>
                -1 *
                parseFloat(g.getAttribute("data-speed")) *
                (c.offsetHeight / 3),
              ease: "none",
              scrollTrigger: {
                trigger: c,
                invalidateOnRefresh: !0,
                scrub: 0.5,
                start: "center-=20% bottom",
              },
            }),
            () => {}
          )
        );
      });
    },
    l = () => {
      Gi(".js-spin-text").forEach((c) => {
        const p = c.dataset.aInterval || 3e3;
        return (
          c.querySelectorAll("span"),
          new uf(
            c,
            {
              loop: !0,
              drag: !1,
              defaultAnimation: {
                duration: 350,
                ease(h) {
                  return h * h * h;
                },
              },
              selector: "span",
              slides: { origin: "center", perView: 1 },
              vertical: !0,
            },
            [
              (h) => {
                let g;
                function v() {
                  clearTimeout(g);
                }
                function x() {
                  clearTimeout(g),
                    (g = setTimeout(() => {
                      h.next();
                    }, p));
                }
                h.on("created", () => {
                  x();
                }),
                  h.on("dragStarted", v),
                  h.on("animationEnded", x),
                  h.on("updated", x);
              },
            ]
          )
        );
      });
    },
    u = () => {
      const d = Gi(".js-appear-by-row");
      if (
        window.matchMedia("(max-width: 767px)").matches ||
        document.documentElement.classList.contains("limited-rendering")
      ) {
        d.forEach((p) => {
          p.style.transform = "translate(0px, 0px)";
        });
        return;
      }
      const c = (p) => {
        const h = document.defaultView
          .getComputedStyle(p, null)
          .getPropertyValue("line-height");
        return parseInt(h, 10);
      };
      d.forEach((p) => {
        const h = c(p),
          g = Math.round(p.offsetHeight / h);
        Kt.to(p, {
          yPercent: 0,
          y: 0,
          ease: `steps(${g})`,
          duration: 0.5 * g,
          scrollTrigger: { trigger: p, start: "top bottom-=10%" },
          onStart() {
            setTimeout(() => {
              jn("byrowstart");
            }, 500 * (g - 1));
          },
          onComplete() {
            jn("byrowcomplete");
          },
        });
      });
    },
    f = Sa(() => {
      J.getAll().forEach((d) => {
        ("vars" in d &&
          "disableRefreshCheck" in d.vars &&
          d.vars.disableRefreshCheck) ||
          d.refresh();
      });
    }, 700);
  window.ST = J;
  const _ = () => {
    document.body.classList.add("animations-enabled"),
      n(),
      window.addEventListener("load", () => {
        s(), l(), a(), u(), cf();
      });
  };
  document.addEventListener(Ca, _),
    [nu, As, su].forEach((d) => {
      document.addEventListener(d, f);
    }),
    document.addEventListener(ou, () => {
      J.disable(!1, !1);
    }),
    document.addEventListener(au, () => {
      J.enable(!1), f();
    });
})();
Ta(() => {
  if (document.querySelector(".ginput_recaptcha")) {
    console.log("load reCaptcha script");
    const t = document.createElement("script");
    (t.src = "https://www.google.com/recaptcha/api.js"),
      document.body.appendChild(t);
  }
});
class de {
  constructor() {
    (this.document = document.documentElement),
      (this.browserName = de.detectBrowser()),
      document.body.classList.add(`is${this.browserName}`),
      this.get(),
      this.events();
  }
  async get() {
    (this.windowW = window.innerWidth),
      (this.windowH = window.innerHeight),
      (this.isFullWidth = this.windowW >= 1920),
      (this.isLaptop = this.windowW > 1280 && this.windowW < 1920),
      (this.isTablet = this.windowW <= 1279 && this.windowW > 767),
      (this.isMobile = this.windowW <= 767),
      (this.isDesktop = this.windowW > 1280),
      (this.scrollW = de.getScrollWidth()),
      (this.isRetina = de.checkRetina()),
      (this.isTouchDevice = de.checkTouchDevice()),
      this.document.style.setProperty(
        "--client-height",
        `${this.document.clientHeight}px`
      ),
      this.document.style.setProperty("--client-vh", `${this.windowH / 100}px`);
    const t = de.calculateContainerInlineOffset(),
      r = de.calculateContainerInlineOffset(!0);
    this.document.style.setProperty("--inline-offset", `${t}px`),
      this.document.style.setProperty(
        "--inline-offset-with-container",
        `${r}px`
      ),
      this.document.style.setProperty("--header-height", `${lu()}px`);
    const e = de.calculateScrollbarWidth();
    this.document.style.setProperty("--scrollbar-width", `${e}px`);
  }
  static checkTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  static getScrollWidth() {
    const t = document.createElement("div");
    (t.style.visibility = "hidden"),
      (t.style.width = "100px"),
      (t.style.msOverflowStyle = "scrollbar"),
      document.body.appendChild(t);
    const r = t.offsetWidth;
    t.style.overflow = "scroll";
    const e = document.createElement("div");
    (e.style.width = "100%"), t.appendChild(e);
    const i = e.offsetWidth;
    return t.parentNode.removeChild(t), r - i;
  }
  static checkRetina() {
    return (
      window.matchMedia &&
      (window.matchMedia(
        "only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)"
      ).matches ||
        window.devicePixelRatio > 1)
    );
  }
  static calculateScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  static calculateContainerInlineOffset(t = !1) {
    const r = document.querySelector(".site-main .container");
    if (!r) return 0;
    const e = r.offsetWidth,
      i = parseInt(window.getComputedStyle(r).paddingLeft, 10),
      s = (window.innerWidth - e - de.calculateScrollbarWidth()) / 2;
    return t ? s + i : s;
  }
  events() {
    let t;
    window.addEventListener("resize", () => {
      clearTimeout(t),
        (t = setTimeout(() => {
          const r = this.windowW >= 1920,
            e = this.windowW > 1280 && this.windowW < 1920,
            i = this.windowW <= 1279 && this.windowW > 767,
            n = this.windowW <= 767,
            s = this.windowW > 1280;
          jn(As, {
            isFullWidth: r,
            isLaptop: e,
            isTablet: i,
            isMobile: n,
            isDesktop: s,
          });
        }, 250));
    }),
      document.addEventListener(As, () => {
        this.get();
      });
  }
  static detectBrowser() {
    return de.isChrome()
      ? "Chrome"
      : de.isFirefox()
      ? "Firefox"
      : de.isSafari()
      ? "Safari"
      : de.isEdge()
      ? "Edge"
      : de.isIE()
      ? "IE"
      : "unknown";
  }
  static isChrome() {
    return (
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    );
  }
  static isFirefox() {
    return /firefox/i.test(navigator.userAgent);
  }
  static isOpera() {
    return /OPR\/\d+/.test(navigator.userAgent);
  }
  static isSafari() {
    return /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
  }
  static isEdge() {
    return /Edg\//.test(navigator.userAgent);
  }
  static isIE() {
    return /Trident\/|MSIE /.test(navigator.userAgent);
  }
}
/*!
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */ window.requestIdleCallback =
  window.requestIdleCallback ||
  function (t) {
    return setTimeout(() => {
      const r = Date.now();
      t({
        didTimeout: !1,
        timeRemaining() {
          return Math.max(0, 50 - (Date.now() - r));
        },
      });
    }, 1);
  };
window.cancelIdleCallback =
  window.cancelIdleCallback ||
  function (t) {
    clearTimeout(t);
  };
const wa = Object.assign({
    "/Views/Blocks/CareerTestimonials/script.js": () =>
      vt(
        () => import("./script-0848150f.js"),
        [
          "./script-0848150f.js",
          "./lazyload-78f7fe97.js",
          "./keen-slider-834edd93.css",
        ],
        import.meta.url
      ),
    "/Views/Blocks/Caring/script.js": () =>
      vt(
        () => import("./script-77ee30bc.js"),
        ["./script-77ee30bc.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Blocks/CasesGalleryCarousel/script.js": () =>
      vt(
        () => import("./script-7dca89a5.js"),
        [
          "./script-7dca89a5.js",
          "./lazyload-78f7fe97.js",
          "./keen-slider-834edd93.css",
        ],
        import.meta.url
      ),
    "/Views/Blocks/CasesGrid/script.js": () =>
      vt(
        () => import("./script-caf164de.js"),
        [
          "./script-caf164de.js",
          "./index-2a8ce3c2.js",
          "./lazyload-78f7fe97.js",
          "./fetchWP-02c7a551.js",
          "./loader-3f395835.js",
        ],
        import.meta.url
      ),
    "/Views/Blocks/ClientQuotes/script.js": () =>
      vt(
        () => import("./script-09f82391.js"),
        [
          "./script-09f82391.js",
          "./lazyload-78f7fe97.js",
          "./keen-slider-834edd93.css",
        ],
        import.meta.url
      ),
    "/Views/Blocks/ContactUs/script.js": () =>
      vt(
        () => import("./script-08dccc0b.js"),
        ["./script-08dccc0b.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Blocks/DraggableGallery/script.js": () =>
      vt(
        () => import("./script-d69ea375.js"),
        ["./script-d69ea375.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Blocks/FeaturedCases/script.js": () =>
      vt(
        () => import("./script-8f513f70.js"),
        ["./script-8f513f70.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Blocks/OurPartners/script.js": () =>
      vt(
        () => import("./script-13c1f4a2.js"),
        ["./script-13c1f4a2.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Blocks/OurTeam/script.js": () =>
      vt(
        () => import("./script-648b5e61.js"),
        [
          "./script-648b5e61.js",
          "./index-2a8ce3c2.js",
          "./lazyload-78f7fe97.js",
        ],
        import.meta.url
      ),
    "/Views/Blocks/PageHero/script.js": () =>
      vt(
        () => import("./script-578a457c.js"),
        ["./script-578a457c.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Blocks/Tabs/script.js": () =>
      vt(
        () => import("./script-3cbb9a66.js"),
        ["./script-3cbb9a66.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Blocks/Testimonials/script.js": () =>
      vt(
        () => import("./script-0067d461.js"),
        [
          "./script-0067d461.js",
          "./lazyload-78f7fe97.js",
          "./keen-slider-834edd93.css",
        ],
        import.meta.url
      ),
    "/Views/Blocks/Values/script.js": () =>
      vt(
        () => import("./script-80ed2ced.js"),
        ["./script-80ed2ced.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Blocks/VideoOembed/script.js": () =>
      vt(
        () => import("./script-8fcd31b6.js"),
        ["./script-8fcd31b6.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Blocks/_GutenbergBlockWithScriptExample/script.js": () =>
      vt(() => import("./script-21f5f33e.js"), [], import.meta.url),
    "/Views/Components/Footer/script.js": () =>
      vt(
        () => import("./script-ac26f53d.js"),
        ["./script-ac26f53d.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Components/Header/script.js": () =>
      vt(
        () => import("./script-a960db24.js"),
        ["./script-a960db24.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Components/PlyrVideo/script.js": () =>
      vt(
        () => import("./script-7f6d35c0.js"),
        ["./script-7f6d35c0.js", "./lazyload-78f7fe97.js"],
        import.meta.url
      ),
    "/Views/Components/PointsList/script.js": () =>
      vt(() => import("./script-319502aa.js"), [], import.meta.url),
    "/Views/Components/PostsGrid/script.js": () =>
      vt(
        () => import("./script-f1e9a6fc.js"),
        [
          "./script-f1e9a6fc.js",
          "./index-2a8ce3c2.js",
          "./lazyload-78f7fe97.js",
          "./fetchWP-02c7a551.js",
        ],
        import.meta.url
      ),
    "/Views/Pages/Blog/script.js": () =>
      vt(
        () => import("./script-6a3fa2f0.js"),
        [
          "./script-6a3fa2f0.js",
          "./index-2a8ce3c2.js",
          "./lazyload-78f7fe97.js",
          "./fetchWP-02c7a551.js",
          "./loader-3f395835.js",
          "./inputClearBtn-4f171b7e.js",
        ],
        import.meta.url
      ),
    "/Views/Pages/SearchPage/script.js": () =>
      vt(
        () => import("./script-60c1e56b.js"),
        [
          "./script-60c1e56b.js",
          "./inputClearBtn-4f171b7e.js",
          "./lazyload-78f7fe97.js",
        ],
        import.meta.url
      ),
    "/Views/Pages/SinglePost/script.js": () =>
      vt(() => import("./script-c18029f2.js"), [], import.meta.url),
  }),
  ba = new Set(["pointerdown", "scroll"]),
  un = new WeakMap(),
  so = new WeakMap(),
  Gn = new WeakMap(),
  ff = (o) => {
    if (un.has(o)) {
      const t = un.get(o);
      typeof t == "function" && t(o), un.delete(o);
    }
  },
  df = (o, t = "Component") => {
    const r = Object.keys(wa),
      e = `${t}s/${o}`,
      i = r.find((n) => n.includes(e));
    return i ? wa[i] : null;
  },
  tu = (o) => {
    const t = o.getAttribute("name"),
      r = o.getAttribute("type") || "Block";
    return df(t, r);
  },
  hf = (o) => !!tu(o),
  pf = (o) => {
    if (!Gn.has(o)) {
      const t = o.parentElement.closest("mst-element");
      return Gn.set(o, t), !!t;
    }
    return !!Gn.get(o);
  },
  eu = (o) => {
    const t = so.get(o)[1];
    t();
  },
  _f = (o) =>
    new Promise((t) => {
      const r = new IntersectionObserver((e) => {
        for (const i of e) i.isIntersecting && (r.disconnect(), t(!0));
      });
      r.observe(o), (o.observer = r);
    }),
  gf = (o, t) =>
    new Promise((r) => {
      const e = window.matchMedia(o);
      e.matches
        ? r(!0)
        : e.addEventListener("change", () => r(!0), { once: !0 }),
        (t.mediaQueryList = e);
    }),
  mf = (o) => {
    const t = "load";
    return (
      {
        load: "load",
        idle: "idle",
        visible: "visible",
        interaction: "interaction",
      }[o.getAttribute("load:on")] ?? t
    );
  },
  yf = (o, t) => {
    const r = {
        load: (i) => i(),
        idle: (i) => requestIdleCallback(i, { timeout: 2e3 }),
        visible: async (i) => {
          await _f(t), i();
        },
        interaction: (i) => {
          const n = () => {
            ba.forEach((s) => document.removeEventListener(s, n)), i();
          };
          ba.forEach((s) => document.addEventListener(s, n, { once: !0 }));
        },
      },
      e = r.load;
    return r[o] ?? e;
  },
  vf = (o) =>
    o.hasAttribute("load:on:media") ? o.getAttribute("load:on:media") : null,
  xf = (o) => async () => {
    const r = await tu(o)();
    if (typeof r.default == "function" && !un.has(o)) {
      const e = r.default(o);
      un.set(o, e);
    }
    eu(o);
  };
class wf extends window.HTMLElement {
  constructor() {
    super();
    let t;
    const r = new Promise((e) => {
      t = e;
    });
    so.set(this, [r, t]);
  }
  async connectedCallback() {
    if (hf(this)) {
      const t = mf(this),
        r = yf(t, this),
        e = vf(this),
        i = xf(this);
      if ((e && (await gf(e, this)), pf(this))) {
        const [n] = so.get(Gn.get(this));
        await n;
      }
      r(i);
    } else eu(this);
  }
  disconnectedCallback() {
    var t, r;
    (t = this.observer) == null || t.disconnect(),
      (r = this.mediaQueryList) == null || r.removeEventListener("change"),
      ff(this);
  }
}
(() => {
  const o = Gi(".js-fit-text"),
    t = (r) => {
      const e = r.parentNode,
        i = document.createElement("div");
      return (
        (i.innerHTML = e.innerHTML),
        (i.style.opacity = 0),
        (i.style.width = "auto"),
        (i.style.minWidth = "100%"),
        (i.style.position = "absolute"),
        (i.style.left = "-9999px"),
        e.append(i),
        i
      );
    };
  o.forEach((r) => {
    const e = t(r),
      i = () => {
        if (matchMedia("(max-width: 767px)").matches) {
          const n = r.parentNode;
          e.clientWidth > n.clientWidth
            ? r.style.setProperty("--h1-mod", n.clientWidth / e.clientWidth)
            : r.style.setProperty("--h1-mod", 1);
        }
      };
    i(), window.addEventListener("resize", Sa(i, 400));
  });
})();
window.mstClient = new de();
window.customElements.get("mst-element") ||
  window.customElements.define("mst-element", wf);
const bf = () => {
  jn(Ca), document.body.classList.add("is-loaded");
};
document.addEventListener("DOMContentLoaded", bf);
var Tf =
  typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
Tf.SENTRY_RELEASE = { id: "release:19" };
export { J as S, cf as a, Kt as g, uf as y };
//# sourceMappingURL=main-662d33d8.js.map
