Ext.define(E.f.profile.vc.Vq, {
  extend: C.f.ai,
  title: m,
  Jh: m,
  Q6: m,
  record: m,
  hideOnClick: !1,
  To: function () {
    var c = this.Jh || {},
        f = Ext.get(document.createElement("div"));
    c.renderTo = f;
    c.record = this.record;
    this.qb = Ext.create(E.f.profile.vc.ZS, c);
    this.html = "";
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