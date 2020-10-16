Ext.define(E.models.CG, {
  extend: "Ext.data.Model",
  fields: [{
    name: "name",
    type: "string"
  }, {
    name: "type",
    type: "string"
  }, {
    name: "value",
    type: "auto"
  }, {
    name: "label",
    type: "string"
  }, {
    name: "extraData",
    type: "auto"
  }],
  constructor: function (c) {
    c.name = c.name || "";
    c.type = c.type || "";
    c.value = c.value || m;
    c.extraData = c.extraData || {};
    c.label = c.label || "";
    this.callParent([c]);
  }
});