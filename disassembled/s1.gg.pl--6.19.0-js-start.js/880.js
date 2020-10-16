Ext.define(E.f.notifications.pF, {
  extend: E.f.notifications.Yq,
  itemSelector: "li.item-body",
  ka: {
    ".sr-notifications-close": function (c, h, f) {
      this.fireEvent("notificationClose", c, h, f);
    },
    ".item-body": function (c, h, f) {
      this.fireEvent("notificationOpen", c, h, f);
    }
  },
  constructor: function () {
    this.tpl = C.k().da.ma("notification-list");
    this.Yj = C.k().da.ma("notification-list-group");
    this.callParent(arguments);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.on("notificationClose", this.b1, this);
    this.on("notificationOpen", this.e1, this);
  },
  b1: function (c) {
    c.Op("NS_DELETED");
    c.vg();
  },
  e1: function (c) {
    c.ms();
  },
  destroy: function () {
    this.callParent(arguments);
    this.un("itemclick", this.mb, this);
    this.un("notificationClose", this.b1, this);
    this.un("notificationOpen", this.e1, this);
  }
});