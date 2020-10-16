Ext.define(E.f.Ma.Zf, {
  extend: C.f.pd,
  cls: "lifestream-event",
  X2: m,
  Zya: m,
  Qya: m,
  Rp: !0,
  Yg: m,
  ODa: m,
  mixins: {
    ea: C.core.mixins.kb
  },
  constructor: function (c) {
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd,
      uf: ["addedavatars"],
      Fk: !0
    }]];
    this.da = C.k().da;
    this.$b = c.$b;
    this.X2 = c.X2 || Ext.getStore("LifeStreamEventsStore");
    this.zb = [];
    this.data = c.data || this.data || {};
    this.tpl = c.nf ? this.da.ma(c.nf) : this.da.ma("lifestream-event-status");
    this.Rp = c.Rp || this.Rp;
    this.callParent(arguments);
    this.mixins.ea.constructor.call(this);
  },
  initComponent: function () {
    this.data = this.prepareData();
    this.callParent(arguments);
    this.on("afterrender", this.na, this);
    this.$b.on("datachanged", this.Hd, this);
  },
  destroy: function () {
    this.callParent();
    this.eb();
  },
  Hd: t(),
  na: function () {
    this.fb();
    this.Nw();
    this.fireEvent("addedavatars", {
      object: this.zb
    });
    this.M4();
  },
  fb: function () {
    this.el.on("click", this.Ia, this);
  },
  eb: function () {
    this.un("afterrender", this.na, this);
    this.el.un("click", this.Ia, this);
  },
  yL: function (c) {
    if (c > 0) {
      var f = "profile";
      c != C.k().fa.get("uin") && (f += "/" + c);
      C.Ca(f);
    }
  },
  ka: {
    ".sender": function () {
      this.yL(this.$b.data.sender.id);
      this.fireEvent("redirect");
    },
    ".app-sender": function () {
      this.WCa();
    },
    ".owner": function () {
      this.yL(this.$b.data.owner.id);
      this.fireEvent("redirect");
    },
    ".sender-origin": function () {
      this.yL(this.$b.data.params["@originEvent"].sender.id);
      this.fireEvent("redirect");
    },
    ".title": function (c, f) {
      c.stopEvent();
      f.nodeName.toLowerCase() === "a" && C.k().sg(f.href, this);
    },
    ".preview": function (c, h) {
      c.stopEvent();

      if (h.parentNode && h.parentNode.nodeName.toLowerCase() === "a") {
        var f = h.parentNode.attributes;
        f && f.href && f.href.value && C.k().sg(f.href.value, this);
      }
    },
    "a.sr-anchor": function (c, f) {
      c.stopEvent();
      C.k().sg(f.href, this);
    }
  },
  Ia: function (c, n, l) {
    c.preventDefault();

    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        this.ka[f].call(this, c, n, l);
        break;
      }
    }
  },
  Nw: function () {
    var c = [];
    this.$b.get("params") && this.$b.get("params")["@originEvent"] && c.push(this.$b.get("params")["@originEvent"].sender.id);
    var n = this.$b.get("sender").id,
        l = this.$b.get("owner").id;
    c.push(n);
    l != n && c.push(l);

    for (n = 0; n < c.length; n++) {
      var f = this.getEl().select(".sender-" + c[n]).first();
      f && (l = f.query(".avatar")[0], f = f.query(".name")[0], this.zb.push({
        uin: c[n],
        zb: [{
          avatar: l,
          name: f,
          size: 30
        }]
      }));
    }
  },
  Mc: A(m),
  vd: t(),
  prepareData: function (c) {
    var c = c || this.$b.data,
        n = {};
    Ext.iterate(c, function (e, h) {
      n[e] = h;
    }, this);

    for (var c = [], l = 0; l < n.attachments.length; l++) {
      var f = {};
      Ext.each(n.attachments[l], function (e) {
        typeof f[e.type] === "undefined" && (f[e.type] = []);
        f[e.type].push(e);
      }, this);
      c.push(f);
    }

    if (c.length) {
      n.attachments = c;
    }

    n.Rp = this.Rp;
    return n;
  },
  M4: function () {
    Ext.create(E.services.$q, {
      Jp: this.el,
      lp: ".share-links-item-thumbnail",
      Ep: ".peeks"
    }).ez();
  }
});