Ext.define(E.f.profile.vc.bF, {
  extend: "Ext.view.View",
  itemSelector: "li.item",
  cls: "my-profile-description-view d-none",
  mixins: {
    ea: C.core.mixins.kb
  },
  ka: {
    ".item-body": function (c) {
      this.parent.Zm(c.get("description"));
      this.el.addCls("d-none");
    },
    ".item-remove": function (c) {
      this.store.remove(c);
    }
  },
  constructor: function (c) {
    this.tpl = C.k().da.ma("my-profile-description-view");
    this.ea = [[C.core.ea.sf, {
      Ge: function (e) {
        e.addCls("d-none");
      }
    }]];
    c = c || {};
    c.disableSelection = !0;
    this.callParent(arguments);
    this.mixins.ea.constructor.call(this, c);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.on("itemclick", this.mb, this);
  },
  mb: function (c, q, p, o, f) {
    for (var u in this.ka) {
      if (f.getTarget(u)) {
        this.ka[u].call(c, q, p, o, f);
        break;
      }
    }
  },
  open: function (c, h, f) {
    this.el.hasCls("d-none") && (this.el.removeCls("d-none"), this.fireEvent("show", {
      event: c,
      target: h,
      caller: f
    }));
  },
  destroy: function () {
    this.callParent(arguments);
    this.un("itemclick", this.mb, this);
  }
});