Ext.define(E.stores.sE, {
  extend: C.stores.Store,
  mixins: {
    Ik: C.core.mixins.jr
  },
  model: E.models.pE,
  sorters: [{
    property: "sorter",
    direction: "ASC"
  }],
  Yg: m,
  Om: m,
  la: m,
  id: "InvitationsMineStore",
  constructor: function (c) {
    c = c || {};
    this.callParent([c]);
    c.Nj = "expirationDate";
    this.mixins.Ik.constructor.call(this, c);
    this.la = Ext.getStore("ContactsStore");
    this.addEvents("mineinvitationsloaded", "invitationexpired");
    this.on("add", this.Ii, this);
    this.on("add", this.NM, this);
    this.on("update", this.ig, this);
    this.Yg = {};
  },
  destroy: function () {
    this.un("add", this.Ii, this);
    this.un("add", this.NM, this);
    this.un("update", this.ig, this);
    this.mixins.Ik.destroy.call(this);
    this.callParent();
  },
  NM: function (c, f) {
    Ext.Array.each(f, function (g) {
      if (Ext.Array.indexOf(["invite2contacts", "invite2contactsByEmail", "invite2contactsByCid"], g.get("subtype")) === -1) {
        var h = (~~g.get("expirationDate") - C.k().pg.getTime()) * 1000;
        this.$wa = Ext.Function.defer(function () {
          g.get("status") !== "deleted" && g.set("status", "expired");
          this.fireEvent("invitationexpired", g);
          this.remove(g);
        }, h, this);
      }
    }, this);
  },
  ig: function (c, f) {
    Ext.Array.indexOf(["invite2contacts", "invite2contactsByEmail", "invite2contactsByCid"], f.get("subtype")) !== -1 && f.get("status") == "accepted" && Ext.Array.each(this.la.wh(f.get("recipient").id), function (e) {
      e.set("protoInfo", {
        friend: 1
      });
    }, this);
    f.get("status") == "accepted" && this.hI(f);
  },
  hI: function (c) {
    Ext.Function.defer(function (e) {
      this.remove(e);
    }, 100, this, [c]);
  },
  Ii: function () {
    this.Yg = {};
    this.Om = {};
    Ext.Array.each(this.data.items, function (c) {
      this.Yg[c.get("recipient").id] ? this.Yg[c.get("recipient").id].push(c) : this.Yg[c.get("recipient").id] = [c];
      this.Om[c.get("id")] = c;
    }, this);
  },
  Uoa: function (c) {
    this.loadData(c);
    this.Ii();
    this.NM(this, this.data.items, 0, m);
    this.fireEvent("mineinvitationsloaded");
  }
});