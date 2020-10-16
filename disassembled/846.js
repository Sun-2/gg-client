Ext.define(E.stores.Ma.MG, {
  extend: C.stores.Store,
  model: E.models.Ma.Event,
  api: m,
  id: "LifeStreamSubStoreStore",
  Em: m,
  Jd: m,
  Cl: m,
  filter: m,
  refs: m,
  groups: {},
  dt: !1,
  eg: m,
  Nf: m,
  constructor: function (c) {
    c = c || {};
    this.id = c.id || "LifeStreamSubStoreStore";
    this.refs = {};
    this.Nf = [];
    this.eg = c.eg || [];
    this.Jd = c.Jd || m;
    this.efa = this.config.efa || "mainChannel";
    this.Em = c.owner || Ext.getStore("LifeStreamEventsStore");
    this.Em.on("remove", this.jia, this);
    this.Em.on("update", this.ig, this);
    this.Em.on("incomingevent", this.h1, this);
    this.addEvents("loaderror", "databuffered", "requestingrecords", "requestingrecordssuccess", "requestingrecordsfailure");
    this.on("databuffered", this.W_, this);
    this.callParent(arguments);
  },
  ig: t(),
  W_: function (c) {
    var f;
    (f = this.eg.indexOf(c)) != -1 && this.eg.splice(f, 1);

    if (this.eg.length == 0 && this.Nf.length) {
      this.mp(this.getCount(), this.Nf), this.Nf = [], this.fireEvent("databufferflushed");
    }
  },
  h1: function (c, f) {
    f = Ext.isArray(f) ? f : [f];
    Ext.each(f, function (e) {
      this.Xy(e) && this.mp(0, f);
    }, this);
  },
  jia: function (c, f) {
    f = Ext.isArray(f) ? f : [f];
    Ext.each(f, function (e) {
      delete this.refs[e.get("id")];
      this.remove(e);
    }, this);
  },
  mp: function (c, n) {
    var l,
        f,
        n = [].concat(n);
    l = 0;

    for (f = n.length; l < f; l++) {
      this.refs[n[l].get("id")] || (this.data.insert(c + l, n[l]), n[l].join(this)), this.refs[n[l].get("id")] = n[l];
    }

    this.snapshot && this.snapshot.addAll(n);
    this.fireEvent("add", this, n, c);
    this.fireEvent("datachanged", this);
  },
  Xy: function (c) {
    if (this.Jd && this.Jd.Cl && c.get("channels").indexOf(this.Jd.Cl) == -1) {
      return !1;
    }

    if (this.Jd && this.Jd.owner && (c.get("owner").type != "user" || c.get("owner").id != this.Jd.owner)) {
      return !1;
    }

    if (this.Jd && this.Jd.family && c.get("family") != this.Jd.family) {
      return !1;
    }

    if (this.Jd && this.Jd.link && c.xh() != this.Jd.link) {
      return !1;
    }

    return !0;
  },
  Hra: function (c, h) {
    if (!this.dt) {
      c && this.eg.push("lifestream");
      this.pta();
      var f = this.Jd,
          h = h || {};
      this.getCount() && this.removeAll();
      this.Em.Hra(f, h, {
        fn: function (e) {
          this.eg.indexOf("lifestream") != -1 ? (this.Nf = this.Nf.concat(e), this.fireEvent("databuffered", "lifestream", this.Nf)) : this.mp(this.getCount(), e);
          this.ota();
        },
        scope: this
      }, {
        fn: function () {
          this.qta();
          this.fireEvent("loaderror");
        },
        scope: this
      });
    }
  },
  ama: function () {
    return this.last().get("id");
  },
  pta: function () {
    this.dt = !0;
    this.fireEvent("requestingrecords", this);
  },
  ota: function () {
    this.dt = !1;
    this.fireEvent("requestingrecordssuccess", this);
  },
  qta: function () {
    this.dt = !1;
    this.fireEvent("requestingrecordsfailure", this);
  },
  removeAll: function (c) {
    this.refs = {};
    this.callParent(c || !1);
  }
});