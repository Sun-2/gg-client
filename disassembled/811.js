Ext.define(E.models.oB, {
  extend: C.models.Model,
  fields: [{
    name: "id",
    type: "string"
  }, {
    name: "src",
    type: "string"
  }, {
    name: "label",
    type: "string"
  }],
  constructor: function () {
    this.callParent(arguments);
  }
});