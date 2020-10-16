Ext.define(E.f.notifications.tF, {
  extend: C.f.Jb,
  cls: "sr-notifications-header",
  html: "&nbsp;",
  data: {},
  Zma: !1,
  statics: {
    Zj: !0
  },
  Lg: m,
  ka: {
    ".sr-notifications-clear-btn": function (c, h, f) {
      if (!this.Q2) {
        this.Q2 = Ext.create(E.f.notifications.sF, {
          renderTo: "sr-notifications-clear-dropdown",
          store: this.Bla()
        });
      }

      this.Q2.open(c, h, f);
      c.preventDefault();
      return !1;
    },
    ".sr-notifications-cal-wrap": function (c) {
      var f = this.el.select(".sr-notifications-cal-wrap").first();
      f.hasCls("active") ? (f.removeCls("active"), this.fireEvent("group", !1), this.self.Zj = !1) : (f.addCls("active"), this.fireEvent("group", !0), this.self.Zj = !0);
      c.preventDefault();
      return !1;
    }
  },
  constructor: function () {
    this.callParent(arguments);
    this.tpl = C.k().da.ma("notifications-header");
    this.data = {
      clearBtn: this.parent.iI
    };
    this.addEvents("group");
  },
  initComponent: function () {
    this.on("afterRender", this.na, this);
    this.parent.on("afterexecute", this.M_, this);
    this.callParent(arguments);
  },
  IM: function (c) {
    this.el.select(".sr-notifications-header li").removeCls("active");
    (c = this.el.select("." + c)) && c.addCls("active");
  },
  Zj: function () {
    this.Zma = !0;
    this.rendered && this.el.select(".sr-notifications-cal-wrap").show();
  },
  na: function () {
    this.el.on("click", this.Ia, this);
    this.el.select(".sr-notifications-cal-wrap").first();
    this.self.Zj && this.fireEvent("group", !0);
    this.GA();
    Ext.getStore("NotificationsStore").nb.onChange("_allnew", this.GA, this);
    Ext.getStore("NotificationsStore").nb.onChange("_invitations_waiting", this.GA, this);
    Ext.getStore("NotificationsStore").nb.onChange("_unread_conversation", this.GA, this);
  },
  Ia: function (c, h, f) {
    Ext.iterate(this.ka, function (e, b) {
      c.getTarget(e) && (c.preventDefault(), b.call(this, c, h, f));
    }, this);
  },
  M_: t(),
  GA: function (c, h) {
    if (typeof c === "undefined") {
      var f = Ext.getStore("NotificationsStore").nb;
      this.el.select(".notifications-all-tab .counter").first().dom.innerHTML = " " + (f.get("_allnew") ? "(" + f.get("_allnew") + ")" : "");
      this.el.select(".notifications-invitation-tab .counter").first().dom.innerHTML = " " + (f.get("_invitations_waiting") ? "(" + f.get("_invitations_waiting") + ")" : "");
      this.el.select(".notifications-conversation-tab .counter").first().dom.innerHTML = " " + (f.get("_unread_conversation") ? "(" + f.get("_unread_conversation") + ")" : "");
    } else {
      switch (c) {
        case "_allnew":
          this.el.select(".notifications-all-tab .counter").first().dom.innerHTML = " " + (h ? "(" + h + ")" : "");
          break;

        case "_invitations_waiting":
          this.el.select(".notifications-invitation-tab .counter").first().dom.innerHTML = " " + (h ? "(" + h + ")" : "");
          break;

        case "_unread_conversation":
          this.el.select(".notifications-conversation-tab .counter").first().dom.innerHTML = " " + (h ? "(" + h + ")" : "");
      }
    }
  },
  Bla: function () {
    if (!this.Lg) {
      var c = Ext.getStore("NotificationsStore");
      this.Lg = Ext.create(E.stores.DE);
      this.Lg.add([Ext.create(E.models.Tn, {
        name: E.lang.aT
      }).GK(function () {
        Ext.getStore("NotificationsStore").clearAll();
      })]);
      var f = this;
      c.each(function (e) {
        var g = e.get("subtype");
        f.Lg.findExact("subtype", g) == -1 && e.get("args").appTitle && f.Lg.add(Ext.create(E.models.Tn, {
          name: e.get("args").appTitle,
          subtype: g
        }).GK(function () {
          Ext.getStore("NotificationsStore").g_(this.get("subtype"));
        }));
      });
      c.on("add", this.aqa, this);
      c.on("remove", this.bqa, this);
    }

    return this.Lg;
  },
  aqa: function (c, q) {
    for (var p = {}, o = 0, f = q.length; o < f; o++) {
      /^extapps.*/.test(q[o].get("subtype")) && (p[q[o].get("subtype")] = q[o]);
    }

    for (var u in p) {
      p.hasOwnProperty(u) && this.Lg.findExact("subtype", u) == -1 && (o = p[u], this.Lg.add(Ext.create(E.models.Tn, {
        name: o.get("args").appTitle || o.get("appName"),
        subtype: u
      }).GK(function () {
        Ext.getStore("NotificationsStore").g_(this.get("subtype"));
      })));
    }
  },
  bqa: function (c, h) {
    if (!(c.findExact("subtype", h.get("subtype")) > -1)) {
      var f = this.Lg.findExact("subtype", h.get("subtype"));
      f > -1 && this.Lg.remove(this.Lg.getAt(f));
    }
  },
  destroy: function () {
    this.un("afterRender", this.na, this);
    this.parent.un("afterexecute", this.M_, this);
    this.el && this.el.un("click", this.Ia, this);
  }
});