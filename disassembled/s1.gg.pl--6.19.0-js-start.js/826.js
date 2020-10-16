Ext.define(E.stores.Lh.pT, {
  extend: "Ext.data.reader.Json",
  alias: "reader.ggpl.notifications.json",
  Oj: m,
  extractData: function (c) {
    if (c.result) {
      return c.result;
    }

    return [];
  }
});