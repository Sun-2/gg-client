Ext.define(E.f.notifications.CC, {
  extend: E.f.notifications.Yq,
  itemId: "LatestsConversationsView",
  emptyText: '<div class="sr-conversations-empty"></div>',
  deferEmptyText: !1,
  ka: {
    ".sr-notifications-close": function (c) {
      this.Gha(c);
    },
    ".item-body": function (c, h, f) {
      this.fireEvent("itemOpen", c, h, f);
    }
  },
  constructor: function () {
    this.tpl = C.k().da.ma("conversations-list");
    this.Yj = C.k().da.ma("conversations-list-group");
    this.callParent(arguments);
  },
  initComponent: function () {
    this.on("itemClose", this.I0, this);
    this.on("itemOpen", this.J0, this);
    this.callParent(arguments);
  },
  Kg: function () {
    var c = [],
        f = this.store.getRange();
    Ext.each(f, function (n) {
      var g = n.get("interlocutorID"),
          b = {
        avatar: m,
        size: 50
      };

      switch (n.get("interlocutorType")) {
        case E.api.ub.ic.Nd.of:
          b.status = Ext.get(this.getNode(n)).query(".sr-status")[0];
          b.name = Ext.get(this.getNode(n)).query(".name")[0];
          break;

        case E.api.ub.ic.Nd.Hc:
          b.status = m, g = n.get("interlocutorIDNumber"), b.name = Ext.get(this.getNode(n)).query(".name")[0];
      }

      c.push({
        uin: g,
        zb: [b]
      });
    }, this);
    this.Oy || this.fireEvent("removeAllAvatars");
    this.fireEvent("addedavatars", {
      object: c
    });
    this.Oy = !0;
  },
  J0: function (c) {
    c = Ext.getStore("UsersStore").xb(c.get("interlocutorIDNumber")).Hb();
    C.k().fc(c);
  },
  I0: function (c) {
    this.store.remove(c);
  },
  Gha: function (c) {
    var h = {
      fn: function () {
        this.store.remove(c);
      },
      scope: this
    },
        f = {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.Lca
        });
      },
      scope: this
    };
    E.api.hv.Gja({
      interlocutorType: c.get("interlocutorType"),
      interlocutorID: c.get("interlocutorID")
    }, h, f);
  },
  destroy: function () {
    this.callParent(arguments);
    this.un("itemclick", this.mb, this);
    this.un("itemClose", this.I0, this);
    this.un("itemOpen", this.J0, this);
  }
});