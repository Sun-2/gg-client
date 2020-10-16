Ext.define(E.models.pE, {
  extend: C.models.Model,
  fields: [{
    name: "createdAt",
    type: "string"
  }, {
    name: "expirationDate",
    type: "string"
  }, {
    name: "id",
    type: "string"
  }, {
    name: "status",
    type: "string"
  }, {
    name: "subtype",
    type: "string"
  }, {
    name: "type",
    type: "string"
  }, {
    name: "additionalStatus",
    type: "string"
  }, {
    name: "recipient",
    type: "auto"
  }],
  Gca: {
    wda: "waiting",
    K9: "accepted"
  },
  constructor: function (c, f) {
    this.callParent([c, f]);
    this.addEvents("datachanged", "statuschanged");
  },
  set: function (c, f) {
    this.callParent(arguments);
    this.fireEvent("datachanged", this, c, f);
    c === "status" && this.fireEvent("statuschanged", this, c, f, this.get("field"));
  }
});