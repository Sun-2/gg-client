Ext.define(E.stores.FC, {
  extend: "Ext.data.Store",
  model: E.models.Jv,
  autoLoad: !0,
  autoSync: !0,
  sorters: [{
    property: "id",
    direction: "DESC"
  }],
  id: "DescriptionsListStore",
  proxy: {
    type: "localstorage"
  },
  limit: 10,
  constructor: function (c) {
    if (c.uin) {
      this.proxy.id = c.uin + "LAST_DESCRIPTION";
    }

    this.callParent(arguments);
  },
  add: function (c) {
    Ext.isArray(c) || (c = Array.prototype.slice.apply(arguments));

    for (var n = 0, l = c.length, f; n < l; n++) {
      f = this.createModel(c[n]), c[n] = f;
    }

    for (n = 0; n < c.length; n++) {
      l = this.findExact("description", c[n].get("description")), l >= -1 && this.removeAt(l);
    }

    this.insert(0, c);
    this.getCount() > this.limit && this.removeAt(this.getCount() - 1);
    return c;
  }
});