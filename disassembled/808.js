Ext.define(E.models.YA, {
  extend: "Ext.data.Model",
  fields: [{
    name: "conversationID",
    type: "string"
  }, {
    name: "interlocutorType",
    type: "int"
  }, {
    name: "interlocutorID",
    type: "string"
  }, {
    name: "beginTime",
    type: "int"
  }, {
    name: "endTime",
    type: "int"
  }, {
    name: "startedByUser",
    type: "boolean"
  }, {
    name: "contentPreview",
    type: "string"
  }, {
    name: "attachmentCount",
    type: "auto"
  }, {
    name: "messages",
    type: "auto"
  }],
  constructor: function () {
    this.callParent(arguments);
  },
  init: t()
});