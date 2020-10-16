Ext.define(E.ea.YC, {
  extend: E.ea.mv,
  name: "OpenChatContactAppBehavior",
  eventName: "CONTACT_OPEN_CHAT_CONTACT",
  N2: function (c) {
    c && (c = this.la.findRecord("cid", c)) && C.k().fc(c);
  }
});