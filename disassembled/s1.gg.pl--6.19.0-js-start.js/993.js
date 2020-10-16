Ext.define(E.f.layout.gd.yY, {
  extend: C.f.Rk,
  cls: "sr-selected-contact-list",
  zsa: "SelectedContactsStore",
  itemSelector: ".sr-contact",
  disableSelection: !0,
  blockRefresh: !0,
  constructor: function (c) {
    c = c || {};
    this.tpl = C.k().da.ma("selected-contact-list");
    this.store = c.store || Ext.data.StoreManager.lookup(this.zsa);
    this.callParent([c]);
  },
  initComponent: function () {
    this.callParent();
    this.on("itemclick", this.mb, this);
  },
  destroy: function () {
    this.un("itemclick", this.mb, this);
    this.callParent();
  },
  prepareData: function (c, h, f) {
    c = this.callParent(arguments);

    if (f) {
      c.Ida = this.store.YK(f);
    }

    return c;
  },
  mb: function (c, p, o, n, f) {
    m !== f.getTarget(".remove") && this.store.remove(p, !0);
  },
  x3: function (c) {
    return c ? this.store.collect("uin") : this.store.getRange();
  }
});