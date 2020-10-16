Ext.define(C.core.Yb.JG, {
  extend: "Ext.Component",
  cls: "base-component",
  yH: m,
  EZ: "sound-mgr-ct",
  Zea: "audio-sound-{0}",
  volume: 100,
  oDa: !1,
  qi: {},
  cua: 0,
  bza: 1000,
  Yn: "sound-volume",
  Zq: "sound-last-volume",
  tT: "sound-prefered-volume",
  ica: 100,
  constructor: function (c) {
    this.ia = C.k().ia;
    c = c || {};
    c.data = c.data || {};
    c.tpl = c.tpl || '<div id="' + this.EZ + '"></div>';
    this.sounds = c.sounds || {};
    this.volume = this.sm();
    this.t8 = this.ia.ob("notifications").sounds.soundSet;
    this.kta();
    this.callParent([c]);
  },
  initComponent: function () {
    this.callParent();
  },
  destroy: function () {
    this.callParent();
  },
  na: t(),
  cja: function (c, q, p) {
    this.np++;

    if (this.yH === m) {
      this.yH = Ext.get(this.EZ);
    }

    var o = new Ext.core.DomHelper.createTemplate('<audio id="{id}" preload="metadata"><source src="{src}" type="{type}"></audio>'),
        f = Ext.String.format(this.Zea, this.getNextId());
    this.e3();
    var u = o.append(this.yH, {
      id: f,
      type: "audio/mpeg",
      src: c
    }, !0),
        c = q > 1;
    u.dom.volume = this.sm();
    c ? (u.dom.loop = !0, setTimeout(Ext.bind(this.dua, this), 120000, u, p), this.qi[f] = u.dom.play()) : (this.qi[f] = u.dom.play(), this.qi[f].then(function () {
      u.on("ended", this.fha, this);
    }.bind(this), t()));
  },
  dua: function (c, f) {
    typeof c.dom !== "undefined" && (c.dom.pause(), delete this.qi[c.id], f === "dialing" && C.k().vf.l_());
  },
  fha: function (c) {
    if (c.currentTarget) {
      var f = Ext.get(c.currentTarget);
      Ext.get(c.currentTarget).remove();
      delete this.qi[f.id];
    }
  },
  rA: v("t8"),
  pma: function () {
    return {
      preset: this.t8,
      available: {
        playNow: "1",
        loop: "1"
      },
      message: {
        playNow: "1",
        loop: "1"
      },
      notify: {
        playNow: "1",
        loop: "1"
      },
      error: {
        playNow: "1",
        loop: "1"
      },
      filetransferend: {
        playNow: "1",
        loop: "1"
      },
      avcall: {
        playNow: "1",
        loop: "1"
      },
      avchat: {
        playNow: "1",
        loop: "1"
      },
      dialing: {
        playNow: "1",
        loop: "1"
      },
      busy: {
        playNow: "1",
        loop: "1"
      },
      ringing: {
        playNow: "1",
        loop: "1"
      },
      avcallend: {
        playNow: "1",
        loop: "1"
      }
    };
  },
  Dz: function (c, f) {
    return this.play("ringing", c, f);
  },
  RL: function (c, f) {
    this.play("dialing", c, f);
  },
  T6: function (c, f) {
    return this.play("busy", c, f);
  },
  R6: function (c, f) {
    return this.play("avcall", c, f);
  },
  S6: function (c, f) {
    return this.play("avchat", c, f);
  },
  yz: function (c, f) {
    return this.play("avcallend", c, f);
  },
  Bz: function (c, f) {
    return this.play("message", c, f);
  },
  Cz: function (c, f) {
    return this.play("notify", c, f);
  },
  zz: function (c, f) {
    return this.play("available", c, f);
  },
  Az: function (c, f) {
    return this.play("error", c, f);
  },
  stopAll: function () {
    this.e3();
  },
  play: function (c, p, o) {
    var n = this.pma(),
        f = n.preset;

    if (!p || p == "" || "undefined" === typeof p) {
      p = n["" + c + ""].playNow;
    }

    if (!o || o == "" || "undefined" === typeof o) {
      o = n["" + c + ""].loop;
    }

    console.warn("soundmgr plays: ", {
      path: this.sounds[[f, ""].join("")][[c, ""].join("")],
      playNow: [p, ""].join(""),
      loop: [o, ""].join("")
    });
    this.cja(this.sounds[[f, ""].join("")][[c, ""].join("")], o, c);
  },
  kta: function () {
    C.k().setCookie(this.tT, this.ica);
  },
  Pp: function (c) {
    try {
      C.k().setCookie(this.Yn, parseInt(c * 100));
    } catch (f) {}
  },
  sm: function () {
    if (C.k().lm(this.Yn) === m) {
      return C.k().lm(this.tT) / 100;
    }

    return (C.k().lm(this.Yn) || this.volume) / 100;
  },
  RM: function (c) {
    C.k().setCookie(this.Zq, parseInt(c * 100));
  },
  UJ: function () {
    return (C.k().lm(this.Zq) || this.volume) / 100;
  },
  getNextId: function () {
    return this.cua++;
  },
  e3: function () {
    var c = !!window.Promise;

    if (Ext.Object.getSize(this.qi)) {
      var f = this;
      Ext.Object.each(this.qi, function (n, e) {
        var b = Ext.get(n);
        c ? b !== m && e !== k && e.then(function () {
          b.dom && b.dom.pause();
          b.remove();
          delete f.qi[n];
        }, t()) : (b.remove(), delete f.qi[n]);
      });
    }
  }
});