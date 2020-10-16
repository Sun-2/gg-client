Ext.define(E.stores.BC, {
  extend: "Ext.data.Store",
  model: E.models.yC,
  id: "ConversationsStore",
  proxy: {
    type: "memory",
    reader: {
      type: "ggpl.conversations.json"
    }
  },
  wo: !1,
  nb: m,
  loading: !1,
  constructor: function () {
    this.callParent(arguments);
    this.addEvents("loading", "loaded");
    this.nb = Ext.getStore("NotificationsStore").nb;
  },
  Tf: function () {
    this.sort("lastMessageTime", "DESC");
  },
  afterEdit: function () {
    this.suspendEvents(!0);
    this.callParent(arguments);
    this.Tf();
    this.resumeEvents();
  },
  add: function () {
    this.suspendEvents(!0);
    this.callParent(arguments);
    this.Tf();
    this.resumeEvents();
  },
  loadData: function (c) {
    for (var n = [], l, f = 0; f < c.length; f++) {
      l = this.findExact("interlocutorID", c[f].interlocutorID), l == -1 && n.push(c[f]);
    }

    this.loading = !1;
    n.length > 0 && this.add(n);
  },
  init: function () {
    var c = this;

    if (!this.wo) {
      this.loading = !0, this.fireEvent("loading"), E.api.hv.$la({}, {
        fn: function (b) {
          c.suspendEvents(!1);
          c.loadData(c.proxy.reader.extractData(b), !0);
          c.resumeEvents();
          this.fireEvent("loaded");
          c.wo = !1;
        },
        scope: this
      });
    }
  },
  xea: function (c, n, l, f) {
    this.Sw(c, E.api.ub.ic.Nd.of, n, l, f);
  },
  wea: function (c, n, l, f) {
    this.Sw(c, E.api.ub.ic.Nd.Hc, n, l, f);
  },
  Sw: function (c, q, p, o, f) {
    var u = this.findExact("interlocutorID", "" + c),
        c = u == -1 ? Ext.create(this.model, {
      interlocutorID: c,
      interlocutorType: q
    }) : this.getAt(u);
    c.beginEdit();
    c.set("lastMessageTime", p);
    c.set("message", o);
    c.set("unreadCount", f);
    f > 0 && c.get("highlight") == !1 && (c.set("highlight", !0), this.nb.increment("_unread_conversation"));
    c.endEdit();
    u == -1 && this.add([c]);
  },
  lpa: function (c, h) {
    var f = this.findExact("interlocutorIDNumber", "" + c);
    f > -1 && (f = this.getAt(f), f.set("unreadCount", h), h == 0 && f.get("highlight") == !0 && (f.set("highlight", !1), this.nb.ds("_unread_conversation")));
  }
});