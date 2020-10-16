Ext.define(C.core.ea.bH, {
  extend: C.core.ea.Qk,
  X9: 5,
  Y9: 1,
  fs: "GG",
  locked: !1,
  Uh: [],
  Vh: {},
  constructor: function (c) {
    Ext.apply(this, c || {});
    this.callParent(arguments);
    Tinycon.setOptions({
      width: 7,
      height: 9,
      font: "10px arial",
      colour: "#ffffff",
      background: "#C8323A",
      fallback: !0
    });
    Tinycon.setBubble();
    this.setTitle(this.fs, !1);
  },
  initEvents: function () {
    this.callParent(arguments);
    this.owner.on("windowtitlechange", this.set, this);
    this.owner.on("windowtitleremove", this.VN, this);
  },
  onRemove: function () {
    this.owner.un("windowtitlechange", this.set, this);
    this.owner.un("windowtitleremove", this.VN, this);
    this.callParent(arguments);
  },
  set: function (c) {
    this.VN({
      type: c.type,
      uin: c.uin,
      hka: !0
    });

    if (c.EAa) {
      return this.Zka(c);
    }

    this.Uh.push(c);
    typeof this.Vh[c.uin] === "undefined" ? this.Vh[c.uin] = [c] : this.Vh[c.uin].push(c);
    this.bO();
    this.Wh();
  },
  Zka: function (c) {
    c.title ? (this.locked = c.title, this.setTitle(c.title, !1)) : (this.locked = !1, this.bO());
    this.Wh();
  },
  VN: function (c) {
    if (typeof this.Vh[c.uin] !== "undefined") {
      for (var h = 0; h < this.Vh[c.uin].length; h++) {
        var f = this.Vh[c.uin][h];
        f.type === c.type && (this.yra(f), this.Vh[c.uin].splice(h--, 1));
      }

      this.Vh[c.uin].length == 0 && delete this.Vh[c.uin];
    }

    c.hka || (this.bO(), this.Wh());
  },
  yra: function (c) {
    for (var h = 0, f = this.Uh.length; h < f; h++) {
      if (c === this.Uh[h]) {
        this.Uh.splice(h, 1);
        break;
      }
    }
  },
  bO: function () {
    this.locked ? this.setTitle(this.locked, !1) : typeof this.Uh[this.Uh.length - 1] !== "undefined" && this.Uh[this.Uh.length - 1].title ? this.setTitle(this.Uh[this.Uh.length - 1].title, !0) : this.setTitle(this.fs, !1);
  },
  Wh: function () {
    var c = Ext.Object.getSize(this.Vh);
    c > 99 && (c = 99);

    if (Ext.isIE) {
      document.title = document.title.replace(/^(\(\d+\)\s+)?/, c > 0 ? "(" + c + ") " : "");
    } else {
      if (c != this.pja) {
        try {
          Tinycon.reset(), Tinycon.setBubble(c);
        } catch (f) {}
      }
    }

    this.pja = c;
  },
  setTitle: function (c, w) {
    this.vj && clearTimeout(this.vj);

    if (w) {
      var q = this,
          o = this.X9 * 2,
          f = [c, this.fs],
          y = 0,
          u = function () {
        document.title = f[y++ % 2];
        o-- > 0 ? q.vj = setTimeout(u, q.Y9 * 1000) : document.title = q.fs;
        Ext.isIE && q.Wh();
      };

      u();
    } else {
      document.title = c, Ext.isIE && this.Wh();
    }
  }
});