Ext.define(E.models.yC, {
  extend: "Ext.data.Model",
  fields: [{
    name: "conversationID",
    type: "string"
  }, {
    name: "interlocutorID",
    type: "string"
  }, {
    name: "interlocutorType",
    type: "int"
  }, {
    name: "lastMessageTime",
    type: "int"
  }, {
    name: "unreadCount",
    type: "int"
  }, {
    name: "message",
    type: "string"
  }, {
    name: "interlocutorIDNumber",
    type: "string"
  }, {
    name: "groupDate",
    type: "int",
    defaultValue: 19700101
  }, {
    name: "highlight",
    type: "boolean",
    defaultValue: !1
  }],
  constructor: function () {
    this.callParent(arguments);
    this.T7(this.get("lastMessageTime"));
    this.get("interlocutorType") == E.api.ub.ic.Nd.Hc ? this.set("interlocutorIDNumber", Int64.u4(this.get("interlocutorID"))) : this.set("interlocutorIDNumber", this.get("interlocutorID"));
  },
  init: t(),
  T7: function (c) {
    if (c) {
      var f = !this.editing;
      f && this.beginEdit();
      this.set("groupDate", parseInt(Ext.Date.format(new Date(c * 1000), "Ymd")));
      f && this.endEdit(!0);
    }
  },
  set: function (c, f) {
    c == "lastMessageTime" && this.T7(f);
    this.callParent(arguments);
  }
});