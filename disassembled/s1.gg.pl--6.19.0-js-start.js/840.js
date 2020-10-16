Ext.define(E.stores.Ev, {
  extend: "Ext.data.Store",
  model: E.models.cl,
  Km: m,
  NK: m,
  type: m,
  constructor: function () {
    this.callParent(arguments);
    this.on("remove", this.onRemove, this);
  },
  Tf: function () {
    this.sort("createdAt", "DESC");
  },
  add: function () {
    this.callParent(arguments);
    typeof this.Km == "function" && this.Km.call(this);
    this.Tf();
  },
  afterEdit: function () {
    this.suspendEvents(!0);
    this.callParent(arguments);
    typeof this.Km == "function" && this.Km.call(this);
    this.Tf();
    this.resumeEvents();
  },
  onRemove: function (c, f) {
    f.vg();
  }
});