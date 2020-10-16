Ext.define(E.f.conference.iC, {
  extend: C.f.pd,
  cls: "conference-header",
  ka: {
    ".title": t(),
    ".show-star": function (c) {
      c.preventDefault();
      this.t0(c);
    },
    ".user-data-links": function (c) {
      c.preventDefault();
      this.A6(c);
    },
    ".toolset-btn": function (c) {
      c.preventDefault();
      this.gqa(c);
    },
    ".change-avatar-btn": function (c) {
      c.preventDefault();
      this.Ot();
    }
  },
  Oa: m,
  Ha: m,
  ef: m,
  KEa: ".conference-title-input",
  npa: ".members-list",
  G5: m,
  iz: m,
  data: {},
  mixins: {
    ea: C.core.mixins.kb
  },
  constructor: function (c) {
    c = c || {};
    this.tpl = C.k().da.ma("conference-header");
    this.Ha = c.Ha || Ext.getStore("UsersStore");
    this.ef = c.ef || Ext.create(C.stores.Store, {
      model: E.models.Ya
    });
    this.Oa = c.Oa || m;
    this.hc(this.Oa);
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd
    }]];
    this.callParent([c]);
    this.addEvents("conferencenamechange");
    this.mixins.ea.constructor.call(this, c);
  },
  initComponent: function () {
    this.callParent();
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.el.un("click", this.Ia, this);
    this.un("afterrender", this.na, this);
    this.callParent();
  },
  Mc: function () {
    if (this.Oa) {
      var c = this.getEl().query(".sr-user-avatar")[0];
      return {
        uin: this.Oa.get("uin"),
        zb: [{
          user: this.Oa,
          avatar: c,
          size: 80,
          status: ""
        }]
      };
    }
  },
  vd: t(),
  na: function () {
    this.el.on("click", this.Ia, this);
    var c;
    this.fq = this.el.select(".user-data-links-menu.share-links").first();
    this.Oa && this.Oa.get("uin") && (c = this.Oa.get("uin"));
    this.yc = Ext.create(E.f.conference.kj, {
      renderTo: this.el.select(".conference-title").first(),
      ae: 440,
      conferenceId: c
    });

    if (this.fq) {
      this.ea = [[C.core.ea.sf, {
        fe: [this.fq]
      }]], this.mixins.ea.constructor.call(this, {});
    }

    this.Hr = Ext.create(E.f.conference.av, {
      renderTo: this.el.select(".user-data-btns").first(),
      Oa: this.Oa
    });
    this.qoa();
  },
  hc: function (c) {
    if (c) {
      this.Oa = c, this.data = this.Oa.data, this.rendered && (this.el.un("click", this.Ia, this), this.tpl.overwrite(this.el, this.data), this.fireEvent("afterrender", !0), this.Oa.Js(3) ? this.el.select(".show-star").first().replaceCls("star-inact", "star-act") : this.el.select(".show-star").first().replaceCls("star-act", "star-inact"), this.yc.LM(this.settings.$d), this.yc.Np(c), this.Hr.hc(this.Oa));
    }
  },
  qoa: function () {
    this.G5 = this.el.select(this.npa).first();
    this.iz = Ext.create(E.f.conference.Rwa, {
      store: this.ef,
      renderTo: this.G5
    });
  },
  Ia: function (c, n, l) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        this.ka[f].call(this, c, n, l);
        break;
      }
    }
  },
  t0: function () {
    this.fireEvent("consumefavors", this);
  },
  A6: function (c) {
    this.fq.hasCls("d-none") ? (this.fq.removeCls("d-none"), this.fireEvent("show", {
      event: c,
      target: c.getTarget(),
      el: this.fq
    })) : this.fq.addCls("d-none");
  },
  gqa: function (c) {
    c = Ext.get(c.getTarget());
    c.hasCls("edit-btn") ? this.Yo() : c.hasCls("delete-btn") && this.fireEvent("removeconference", this);
  },
  Yo: function () {
    C.k().Ti({
      conferenceId: this.Oa.get("uin")
    });
  },
  Ot: function () {
    var c = this.Oa.get("uin");
    this.wf = Ext.create(E.f.windows.wq, {
      conferenceId: c
    });
    this.Er();
  },
  Er: function () {
    this.wf.on("changeavatarsuccess", this.Ig, this);
    this.wf.on("destroy", this.Vt, this);
  },
  Vt: function () {
    this.wf.un("changeavatarsuccess", this.Ig, this);
  },
  Ig: function (c, h) {
    if (this.Oa && this.Oa.get("protoInfo")) {
      var f = this.Ha.De(params.conferenceID).qe().get("protoInfo");
      f.avatar = 1;
      Ext.getStore("ContactsStore").Ek([{
        uin: h,
        protoInfo: f,
        type: 4
      }]);
    }
  }
});