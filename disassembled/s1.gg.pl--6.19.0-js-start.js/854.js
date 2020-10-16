Ext.define(C.f.Us.kE, {
  extend: "Ext.Component",
  cls: "base-component",
  statics: {
    U4: 0
  },
  xA: m,
  RZ: "a23ghsd746_",
  yua: ".image-uploader",
  DEa: m,
  imageQuality: 80,
  viewPort: "200,200",
  albumMenu: !1,
  createJPG: "always",
  multiuploader: !1,
  NA: ["imageQuality", "viewPort", "albumMenu", "createJPG", "multiuploader"],
  hO: {
    saveImage: function (c, z, u, o, f, B, y) {
      B === 1 && this.fireEvent("uploadstart", this, c, y);
      this.fireEvent("uploadsuccess", this, z, u, o, f, B);

      try {
        this.Kma().TDa({
          result: 0
        });
      } catch (w) {}

      B === y && this.fireEvent("uploadend", this, c, y);
    },
    getAlbums: function () {
      this.kla();
    },
    createAlbum: function () {
      this.bja();
    },
    cancel: function () {
      this.fireEvent("uploadcancel", this);
    }
  },
  ts: m,
  Aua: 645,
  wua: 479,
  xua: {
    base: "swf",
    menu: "false"
  },
  zua: C.ca.Da.yh("/images/avatarcreator.swf?"),
  vua: {},
  np: m,
  constructor: function (c) {
    c = c || {};
    c.tpl = c.tpl || '<div class="image-uploader"></div>';
    c.data = c.data || {};
    this.addEvents("uploadstart", "uploadsuccess", "uploadimagefailure", "uploadend", "uploadcancel");
    this.self.U4++;
    this.np = this.self.U4;
    this.callParent([c]);
  },
  initComponent: function () {
    this.callParent();
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.Mja();
    this.un("afterrender", this.na, this);
    this.xA = m;
    this.callParent();
  },
  na: function () {
    this.pka();
    window.el = this.el;
  },
  pka: function () {
    this.Kqa();
    var c = this.el.select(this.yua).first();

    if (!c.dom.id) {
      c.dom.id = "img-uploader-" + this.np;
    }

    swfobject.embedSWF(this.zua, c.dom.id, this.Aua, this.wua, "10.0.0", C.ca.Da.yh("/images/expressInstall.swf?"), this.ts, this.xua, this.vua);
  },
  Mja: function () {
    this.Nja();
  },
  Kqa: function (c) {
    c = c || this;
    this.ts = {};
    this.eja();

    for (var h = 0, f = this.NA.length; h < f; h++) {
      c[this.NA[h]] && (this.ts[this.NA[h]] = "" + c[this.NA[h]]);
    }
  },
  eja: function () {
    Ext.iterate(this.hO, function (c) {
      this.ts[c] = this.dja(c);
    }, this);
  },
  dja: function (c) {
    var f = "" + this.RZ + this.np + c;
    window[f] = this.hO[c].bind(this);
    return f;
  },
  Nja: function () {
    Ext.iterate(this.hO, function (c) {
      this.ts[c] = destroyCallback(c);
    }, this);
  },
  fAa: function (c) {
    delete window["" + this.RZ + this.np + c];
  },
  Kma: function () {
    if (!this.xA) {
      var c = this.el.select("#img-uploader-" + this.np).first();
      c && (this.xA = c.dom);
    }

    return this.xA;
  },
  kla: Ext.emptyFn,
  bja: Ext.emptyFn
});