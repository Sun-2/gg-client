Ext.define(E.f.layout.va.cB, {
  extend: C.f.An,
  name: "account-widget",
  id: "account-widget",
  cls: "account-widget d-none",
  itemSelector: "account-item",
  sna: 250,
  mixins: {
    ea: C.core.mixins.kb
  },
  tpl: m,
  $t: ["nick", "email", "name", "surname"],
  ka: {
    ".account-profile": function () {
      C.Ca("profile");
    },
    ".account-settings": function () {
      C.Ca("settings/profile");
    },
    ".account-ggwidget": function () {
      C.Ca("settings/widget");
    },
    ".account-privacy": function () {
      C.Ca("");
    },
    ".account-logout": function () {
      this.logout();
    },
    ".account-widget-top": function () {
      C.Ca("profile");
    },
    ".account-aol": function () {
      C.Ca("aol");
    },
    ".account-help": function () {
      this.Yga();
    }
  },
  Yga: function () {
    this.Ha = this.Ha || Ext.getStore("UsersStore");
    var c = this.Ha.xb(this.sna).Hb();
    C.k().fc(c);
  },
  constructor: function (c) {
    C.k().Eya = this;
    this.ta = C.k().ta;
    c = c || {};
    this.ea = c.ea || [[C.core.ea.sf, {
      Ge: function (e) {
        C.k().ff.wr.removeCls("active");
        e.addCls("d-none");
      },
      ug: [0]
    }]];
    this.da = C.k().da;
    this.fa = c.fa || C.k().fa;
    this.data = {
      user: this.fa
    };
    this.tpl = this.da.ma("account");
    this.callParent(arguments);
    this.mixins.ea.constructor.call(this, c);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.fa.on("datachanged", this.cO, this);
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.callParent(arguments);
    this.un("afterrender", this.na, this);
    this.fa.un("datachanged", this.cO, this);
  },
  na: function () {
    this.el.on("click", this.Ia, this);
  },
  Ia: function (c, h, f) {
    c.preventDefault();
    Ext.iterate(this.ka, function (e, b) {
      c.getTarget(e) && b.call(this, c, h, f);
    }, this);
  },
  cO: function (c, f) {
    Ext.isObject(f) ? Ext.Object.each(f, function (e) {
      if (this.$t.indexOf(e)) {
        return this.tpl.overwrite(this.el, {
          user: this.fa
        }), !1;
      }
    }, this) : this.$t.indexOf(f) !== -1 && this.tpl.overwrite(this.el, {
      user: this.fa
    });
  },
  TL: function (c, h, f) {
    this.container.child("#account-widget").hasCls("d-none") && (this.container.child("#account-widget").removeCls("d-none"), this.fireEvent("show", {
      event: c,
      target: h,
      caller: f
    }));
  },
  logout: function () {
    C.k().logout();
  }
});