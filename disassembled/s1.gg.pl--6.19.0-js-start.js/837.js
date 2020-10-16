Ext.define(E.stores.uE, {
  extend: C.stores.Store,
  model: E.models.cl,
  la: m,
  sorters: [{
    property: "sorter",
    direction: "ASC"
  }],
  mixins: {
    Ik: C.core.mixins.jr
  },
  id: "InvitationsTheirsStore",
  constructor: function (c) {
    c = c || {};
    this.callParent([c]);
    c.Nj = "expirationDate";
    this.mixins.Ik.constructor.call(this, c);
    this.la = Ext.getStore("ContactsStore");
    this.on("datachanged", this.p3, this);
    this.on("datachanged", this.Ii, this);
    this.on("update", this.ig, this);
    this.addEvents("invitations2contactloaded");
    this.on("add", this.onAdd, this);
    this.on("remove", this.onRemove, this);
  },
  destroy: function () {
    this.mixins.Ik.destroy.call(this);
    this.un("datachanged", this.p3, this);
    this.un("datachanged", this.Ii, this);
    this.un("update", this.ig, this);
    this.un("add", this.onAdd, this);
    this.un("remove", this.onRemove, this);
    this.callParent();
  },
  ig: function (c, w) {
    var q = {
      waiting: 0,
      hidden: 0
    },
        o = this.getRange(),
        f = Ext.getStore("NotificationsStore").nb;
    w.get("status") == "accepted" && this.hI(w);

    for (var y = 0; y < o.length; y++) {
      q[o[y].get("status")] || (q[o[y].get("status")] = 0), q[o[y].get("status")] += 1;
    }

    for (var u in q) {
      f.set("_invitations_" + u, q[u]);
    }
  },
  hI: function (c) {
    Ext.Function.defer(function (e) {
      this.remove(e);
    }, 100, this, [c]);
  },
  p3: function () {
    this.senders = {};
    Ext.Array.each(this.data.items, function (c) {
      typeof this.senders[c.get("sender").id] === "undefined" && (this.senders[c.get("sender").id] = []);
      this.senders[c.get("sender").id].push(c);
    }, this);
  },
  Ii: function () {
    this.Om = {};
    Ext.Array.each(this.data.items, function (c) {
      this.Om[c.get("id")] = c;
    }, this);
  },
  sla: function (c) {
    var f = m;
    Ext.Array.each(this.senders[c], function (e) {
      if (Ext.Array.indexOf(["invite2contacts", "invite2contactsByEmail", "invite2contactsByCid"], e.get("subtype")) !== -1) {
        return f = e, !1;
      }
    }, this);
    return f;
  },
  S3: function () {
    E.api.Ob.SJ({
      uin: C.k().fa.get("uin"),
      type: ["invite2contacts", "invite2contactsByEmail", "invite2contactsByCid"]
    }, {
      fn: function (c) {
        try {
          this.loadData(c.result.invitations);
        } catch (f) {}

        this.fireEvent("invitations2contactloaded");
      },
      scope: this
    }, {
      fn: t(),
      scope: this
    });
  },
  loadData: function (c, q) {
    var p = Ext.getStore("NotificationsStore").nb,
        o = {};
    q ? p.change("_invitations", c.length) : p.set("_invitations", c.length);

    for (var f = 0; f < c.length; f++) {
      o[c[f].status] || (o[c[f].status] = 0), o[c[f].status] += 1;
    }

    for (var u in o) {
      q ? p.change("_invitations_" + u, o[u]) : p.set("_invitations_" + u, o[u]);
    }

    return this.callParent(arguments);
  },
  onAdd: function (c, n) {
    for (var l = Ext.getStore("NotificationsStore").nb, f = 0; f < n.length; f++) {
      Ext.Array.indexOf(["invite2contacts", "invite2contactsByEmail", "invite2contactsByCid"], n[f].get("subtype")) !== -1 && (l.increment("_invitations"), l.increment("_invitations_" + n[f].get("status")));
    }
  },
  onRemove: function (c, h) {
    var f = Ext.getStore("NotificationsStore").nb;
    Ext.Array.indexOf(["invite2contacts", "invite2contactsByEmail", "invite2contactsByCid"], h.get("subtype")) !== -1 && (f.ds("_invitations"), f.ds("_invitations_" + h.get("status")));
    h.vg();
  },
  tz: function (c) {
    this.Mm = !0;
    c.vg();
    this.Mm = !1;
  }
});