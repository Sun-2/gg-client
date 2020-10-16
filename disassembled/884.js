Ext.define(E.f.notifications.tE, {
  extend: C.f.Jb,
  html: "&nbsp;",
  data: {},
  cls: "invitations-show-hidden",
  constructor: function () {
    this.callParent(arguments);
    this.on("afterrender", this.gb, this);
    this.tpl = C.k().da.ma("invitations-hide-bar");
  },
  gb: function () {
    this.el.on("click", this.Ia, this);
  },
  Ia: function () {
    this.Li.isHidden() ? (this.Li.show(), this.addCls("active")) : (this.Li.hide(), this.removeCls("active"));
    this.tpl.overwrite(this.el, {
      hidden: this.Li.isHidden()
    });
  },
  destroy: function () {
    this.un("afterrender", this.gb, this);
    this.el.un("click", this.Ia, this);
  }
});