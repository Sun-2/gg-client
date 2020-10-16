Ext.define(E.models.WA, {
  extend: "Ext.data.Model",
  fields: [{
    name: "attachmentID",
    type: "string"
  }, {
    name: "ggMessageID",
    type: "string"
  }, {
    name: "conversationID",
    type: "string"
  }, {
    name: "sentTime",
    type: "int"
  }, {
    name: "attachmentType",
    type: "string"
  }, {
    name: "interlocutorType",
    type: "int"
  }, {
    name: "interlocutorID",
    type: "string"
  }, {
    name: "senderType",
    type: "int"
  }, {
    name: "senderID",
    type: "string"
  }, {
    name: "content",
    type: "string"
  }, {
    name: "title",
    type: "string"
  }, {
    name: "description",
    type: "string"
  }, {
    name: "thumbnail",
    type: "string"
  }, {
    name: "contentType",
    type: "string"
  }, {
    name: "fileName",
    type: "string"
  }, {
    name: "fileSize",
    type: "int"
  }, {
    name: "deleted",
    type: "boolean"
  }],
  constructor: function () {
    this.callParent(arguments);
  },
  init: t()
});