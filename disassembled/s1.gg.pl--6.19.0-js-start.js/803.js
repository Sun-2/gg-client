Ext.define(E.models.cl, {
  extend: E.models.Xn,
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
    name: "body",
    type: "auto"
  }, {
    name: "recipient",
    type: "auto"
  }, {
    name: "sender",
    type: "auto"
  }, {
    name: "object",
    type: "auto"
  }, {
    name: "groupDate",
    type: "int",
    defaultValue: 19700101
  }],
  Gca: {
    wda: "waiting",
    K9: "accepted"
  },
  constructor: function (c, h) {
    this.callParent([c, h]);
    this.addEvents("datachanged", "statuschanged");

    if (this.get("createdAt")) {
      var f = new Date(this.get("createdAt") * 1000);
      this.set("groupDate", parseInt(Ext.Date.format(f, "Ymd")));
    }
  },
  set: function (c, f) {
    this.callParent(arguments);
    c === "status" && this.fireEvent("statuschanged", this, c, f);
    this.fireEvent("datachanged", this, c, f);
  }
});