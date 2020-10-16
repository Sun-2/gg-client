Ext.define(E.f.layout.va.CO, {
  extend: C.f.ai,
  title: m,
  Jh: m,
  Q6: m,
  hideOnClick: !1,
  To: function () {
    var c = this.Jh || {},
        f = Ext.get(document.createElement("div"));
    c.renderTo = f;
    this.qb = Ext.create(E.f.layout.va.pB, c);
    return f;
  },
  tfa: t(),
  Wt: t(),
  show: function () {
    this.callParent();
  },
  destroy: function () {
    this.Wt();
    this.qb && this.qb.destroy();
    delete this.qb;
    this.callParent();
  }
});