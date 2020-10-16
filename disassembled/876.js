Ext.define(E.f.notifications.Xq, {
  extend: C.f.Jb,
  mixins: {
    Qd: E.core.mixins.ei
  },
  cls: "sr-notifications",
  html: "",
  data: {},
  header: m,
  tj: m,
  constructor: function () {
    this.addEvents("afterexecute");
    this.header = Ext.create(E.f.notifications.tF, {
      parent: this,
      iI: this.iI || !1
    });
    this.items = [this.header];
    this.callParent(arguments);
    this.mixins.Qd.constructor.call(this);
    this.header.on("afterrender", this.EI, this);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.mixins.Qd.initComponent.call(this);
  },
  EI: function () {
    this.header.IM(this.tj);
  }
});