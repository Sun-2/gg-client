Ext.define(E.f.layout.va.Sc.jB, {
  extend: "Ext.view.View",
  itemSelector: "li.item",
  cls: "profile-last-messages-attachements",
  data: m,
  mixins: {
    ea: C.core.mixins.kb
  },
  constructor: function () {
    this.da = C.k().da;
    this.callParent(arguments);
  },
  initComponent: function () {
    this.tpl = this.da.ma("profile-last-messages-attachements");
    this.on("afterrender", this.gb, this);
    this.callParent(arguments);
  },
  refresh: function () {
    var c, f;

    if (this.rendered) {
      this.fireEvent("beforerefresh", this), c = this.getTargetEl(), f = this.store.getRange(0, 2), c.update(""), f.length < 1 ? ((!this.deferEmptyText || this.hasSkippedEmptyText) && c.update(this.emptyText), this.all.clear()) : (this.tpl.overwrite(c, this.collectData(f, 0)), this.all.fill(Ext.query(this.getItemSelector(), c.dom)), this.updateIndexes(0)), this.selModel.refresh(), this.hasSkippedEmptyText = !0, this.fireEvent("refresh", this);
    }
  },
  prepareData: function (c, h, f) {
    f && Ext.apply(c, f.getAssociatedData());
    c.url = c.content;
    /^http:\/\//.test(c.content) == !1 && (c.url = "http://" + c.content);
    return c;
  },
  gb: function () {
    this.el.on("click", this.ed, this);
  },
  ed: t(),
  destroy: function () {
    this.mixins.ea.destroy.call(this);
    this.un("afterrender", this.gb, this);
    this.el && this.el.un("click", this.ed, this);
    this.callParent(arguments);
  }
});