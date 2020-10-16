Ext.define(E.models.SQ, {
  extend: E.models.xc,
  fields: [{
    name: "ticketId",
    type: "string"
  }, {
    name: "file_name",
    type: "string"
  }, {
    name: "file_size",
    type: "number"
  }, {
    name: "currentFileSize",
    type: "number"
  }, {
    name: "progress",
    type: "number"
  }, {
    name: "error",
    type: "string"
  }],
  constructor: function () {
    this.callParent(arguments);
  },
  eEa: function (c) {
    this.set("currentFileSize", c);
    var f = this.get("file_size");
    this.set("progress", ~~(c / f) * 100);
  }
});