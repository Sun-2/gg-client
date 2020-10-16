Ext.define(E.f.start.IY, {
  extend: "Ext.Container",
  cls: "start-container",
  id: "start-container",
  mixins: {
    view: E.core.mixins.ei,
    ea: C.core.mixins.kb
  },
  constructor: function (c) {
    c = c || {};
    this.ea = c.ea || [[C.core.ea.Yc, {
      uc: C.k().sd
    }]];
    this.da = C.k().da;
    this.tpl = this.da.ma("start-panel");
    this.data = {};
    this.data.zi = [];
    this.EL = {
      conversations: m
    };
    this.Ze = this.Ze || Ext.data.StoreManager.lookup("ContactsStore");
    this.callParent(arguments);
    this.mixins.view.constructor.call(this);
    this.mixins.ea.constructor.call(this, c);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.mixins.view.initComponent.call(this);
    this.dI = C.k().Ja;
    this.dI.on("chatadded", this.Y_, this);
  },
  destroy: function () {
    this.dI.un("chatadded", this.Y_, this);
  },
  Y_: function () {
    var c = [];
    Ext.each(this.dI.yj, function (g, b) {
      c.push({
        index: b,
        ownerId: g.Aa,
        name: this.Ze.Ba(g.Aa) ? this.Ze.Ba(g.Aa).get("ShowName") : g.Aa,
        avatar: C.ca.Da.yh("/images/avatar.png")
      });
    }, this);
    this.EL.zi = c;
    delete c;
    this.tpl.overwrite(this.el, this.EL);
    this.As({}, this.EL.zi);

    try {
      this.getEl().down(".chat-unread").on("click", function () {
        C.Ca("");
      }, this);
    } catch (f) {}
  },
  Mc: A(m),
  As: function (c, n) {
    var l = this.getEl().query(".sr-user-unreaded-avatar"),
        f = [];
    Ext.each(n, function (g, h) {
      if (h > 2) {
        return !1;
      }

      f.push({
        uin: g.ownerId || "",
        zb: [{
          avatar: l[h],
          status: m,
          size: 30
        }]
      });
    });
    Ext.Function.defer(this.fireEvent, 1000, this, ["addedavatars", {
      object: f
    }]);
  },
  vd: t()
});