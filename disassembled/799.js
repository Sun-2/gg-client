Ext.define(E.models.KC, {
  extend: "Ext.data.Model",
  fields: [{
    name: "id",
    type: "string"
  }, {
    name: "file_name",
    type: "string"
  }, {
    name: "file_size",
    type: "number"
  }, {
    name: "file_send_size",
    type: "number"
  }, {
    name: "error",
    type: "string"
  }],
  constructor: function (c) {
    this.callParent();
    this.t9(c);
  },
  t9: function (c) {
    this.set("id", c.id || "");
    this.set("file_name", c.fileName || "");
    this.set("file_size", c.fileSize || 0);
    this.set("file_send_size", c.fileSendSize || 0);
    this.set("error", c.error || "");
  }
});