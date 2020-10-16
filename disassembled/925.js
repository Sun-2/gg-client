Ext.define(E.controllers.vF, {
  extend: E.controllers.nc,
  name: "notifications-controller",
  store: m,
  Jk: m,
  Sh: m,
  constructor: function () {
    this.callParent(arguments);
  },
  init: function () {
    this.store = Ext.data.StoreManager.lookup("InvitationsTheirsStore");
    this.store.on("add", this.yf, this);
    this.store.on("datachanged", this.Nl, this);
    this.Jk = Ext.create(E.stores.Ev, {
      Km: function () {
        this.filterBy(function (c) {
          if (c.get("status") == "waiting" && Ext.Array.indexOf(["invite2contacts", "invite2contactsByEmail", "invite2contactsByCid"], c.get("subtype")) !== -1) {
            return !0;
          }

          return !1;
        });
      }
    });
    this.Sh = Ext.create(E.stores.Ev, {
      Km: function () {
        this.filterBy(function (c) {
          if (c.get("status") == "hidden" && Ext.Array.indexOf(["invite2contacts", "invite2contactsByEmail", "invite2contactsByCid"], c.get("subtype")) !== -1) {
            return !0;
          }

          return !1;
        });
      }
    });
    this.Jk.add(this.store.getRange());
    this.Sh.add(this.store.getRange());
    this.callParent(arguments);
  },
  execute: function () {
    C.k().mf(C.k().config.ab.ph);
    C.k().fireEvent("latest:load");
    this.view.fireEvent("afterexecute");
  },
  kd: function () {
    this.view = Ext.create(E.f.notifications.uF, {
      Jk: this.Jk,
      Sh: this.Sh
    });
  },
  yf: function (c, f) {
    this.Jk.add(f);
    this.Sh.add(f);
  },
  Nl: function (c, f) {
    f && Ext.isArray(f) && !(f.length < 1) && (this.Jk.removeAll(), this.Jk.add(f), this.Sh.removeAll(), this.Sh.add(f));
  }
});