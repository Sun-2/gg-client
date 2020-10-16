Ext.define(E.f.profile.vc.ZS, {
  extend: C.f.Jb,
  cls: "profile-default-avatars",
  qn: !1,
  data: m,
  ka: {
    ".my-profile-change-avatar-device": function () {
      this.fireEvent("openavataruploader", this);
    },
    ".my-profile-delete-avatar": function () {
      this.fireEvent("removeavatar", this);
    },
    ".item-image": function (c) {
      this.tt(c);
    },
    ".item": function (c) {
      this.tt(c);
    }
  },
  constructor: function (c) {
    c = c || {};
    this.da = C.k().da;
    this.data = {};
    this.data.record = c.record;
    this.ri = C.k().C2;
    this.callParent(arguments);
  },
  initComponent: function () {
    this.lL = this.da.ma("default-avatars-items-list");
    this.tpl = this.da.ma("default-avatars-list");
    this.callParent(arguments);
    this.on("afterrender", this.gb, this);
  },
  destroy: function () {
    this.callParent(arguments);
    this.el.un("click", this.ed, this);
    this.un("afterrender", this.gb, this);
  },
  gb: function () {
    this.AH = this.el.select(".list").first();
    this.open();
    this.el.on("click", this.ed, this);
  },
  open: function () {
    this.qn || this.load();
  },
  hn: function () {
    this.el && this.el.select(".preloader").first() && this.el.select(".preloader").first().removeCls("d-none");
  },
  Mi: function () {
    this.el && this.el.select(".preloader").first() && this.el.select(".preloader").first().addCls("d-none");
  },
  load: function () {
    this.hn();
    var c = {};
    this.ri.getCount() == 0 ? E.api.Re.B3(c, {
      fn: function (e) {
        this.qn = !0;
        this.ri.loadData(e.result.items);
        this.bt();
      },
      scope: this
    }, {
      fn: function () {
        this.qn = !1;
        Ext.defer(this.mL, 100, this);
      },
      scope: this
    }) : this.bt();
  },
  ed: function (c) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        c.preventDefault();
        this.ka[f].call(this, c);
        break;
      }
    }
  },
  bt: function () {
    this.AH.update(this.lL.apply(this.ri.data.items));
    this.bN();
    Ext.defer(this.Mi, 300, this);
  },
  bN: function () {
    this.el.select(".item-image").each(function (c, h, f) {
      c.dom.viewIndex = f;

      if (c.dom.parentNode) {
        Ext.get(c.dom.parentNode).dom.viewIndex = f;
      }
    }, this);
  },
  tt: function (c) {
    this.fireEvent("avatarpicked", this, this.ri.getAt(Ext.get(c.getTarget()).dom.viewIndex));
  },
  mL: function () {
    this.Mi();
    this.fireEvent("openavataruploader", this);
  }
});