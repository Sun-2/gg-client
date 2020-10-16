Ext.define(E.f.search.vG, {
  extend: C.f.mq,
  cls: "search-result-list",
  Pt: !0,
  overItemCls: "active",
  trackOver: !0,
  itemSelector: "div.search-result-contact-row",
  constructor: function (c) {
    c = c || {};
    this.tpl = C.k().da.ma("search-result-contact");
    this.emptyText = C.k().da.Wa("search-result-contact-noresult");
    this.total = c.total;
    this.limit = c.limit;
    this.Ri = c.Ri;
    this.ik = c.ik;
    this.callParent(arguments);
  },
  initComponent: function () {
    this.callParent(arguments);
  },
  destroy: function () {
    this.callParent(arguments);
  },
  pA: function () {
    return this.total > this.limit && this.ik > 0;
  },
  mA: function () {
    return this.Ri != 0;
  },
  collectData: function (c) {
    c = this.callParent(arguments);
    return {
      persons: c,
      count: c.length,
      pA: this.pA(),
      mA: this.mA()
    };
  }
});