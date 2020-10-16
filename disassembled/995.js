Ext.define(E.f.layout.va.Sc.iB, {
  extend: C.f.Jb,
  cls: "profile-last-messages",
  data: {},
  mixins: {
    ea: C.core.mixins.kb,
    ka: C.core.mixins.Td
  },
  ka: {
    "a.sr-anchor": function (c) {
      c.stopEvent();
      C.k().sg(c.getTarget("a.sr-anchor").href, this);
    }
  },
  Hf: m,
  constructor: function () {
    this.da = C.k().da;
    this.callParent(arguments);
    this.mixins.ka.constructor.call(this, {
      preventDefault: !1
    });
  },
  initComponent: function () {
    var c = this;
    this.tpl = this.da.ma("profile-last-messages");
    this.list = Ext.create(E.f.layout.va.Sc.kB, {
      store: this.ul,
      Hf: this.Hf,
      Nd: this.Nd
    });
    this.Fg && (this.Fg.on("datachanged", function () {
      c.Fg.getCount() > 0 && c.list.S8();
    }), this.Fg.getCount() > 0 && this.list.S8());
    this.attachments = Ext.create(E.f.layout.va.Sc.jB, {
      store: this.Fg,
      Hf: this.Hf
    });
    this.items = [this.list, this.attachments];
    this.callParent(arguments);
  },
  i9: function (c, f) {
    this.Hf = c;
    this.list.Hf = this.Hf;
    this.list.uin = f;
  },
  destroy: function () {
    this.mixins.ea.destroy.call(this);
    this.callParent(arguments);
  }
});