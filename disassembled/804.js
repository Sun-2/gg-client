Ext.define(E.models.mE, {
  extend: C.models.Model,
  fields: [{
    name: "instanceID",
    type: "string"
  }, {
    name: "loginDate",
    type: "string"
  }, {
    name: "loginTime",
    type: "string"
  }, {
    name: "ip",
    type: "string"
  }, {
    name: "name",
    type: "string"
  }, {
    name: "userAgent",
    type: "string"
  }],
  constructor: function () {
    this.callParent(arguments);
  }
});