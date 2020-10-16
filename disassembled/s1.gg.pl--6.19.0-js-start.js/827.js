Ext.define(E.stores.Lh.MQ, {
  extend: "Ext.data.reader.Json",
  alias: "reader.ggpl.conversations.json",
  Oj: m,
  extractData: function (c) {
    if (c.result && c.result.status == 0) {
      return c.result.conversations;
    }

    return [];
  }
});