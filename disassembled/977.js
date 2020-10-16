Ext.define(E.f.layout.va.hb.xC, {
  extend: "Ext.view.View",
  qR: 3,
  jc: 0,
  tpl: m,
  itemSelector: "li.list-item.contact",
  multiSelect: !0,
  simpleSelect: !0,
  $o: m,
  It: 0,
  initComponent: function () {
    this.tpl = C.k().da.ma("contacts-picker-start-view");
    this.tpl.limitMax = this.jc;
    this.callParent(arguments);
    this.$o = [];
    this.getSelectionModel().deselectOnContainerClick = !1;
    this.on("beforeselect", this.Il, this);
    this.on("selectionchange", this.hg, this);
    this.on("containerclick", this.Dj, this);
  },
  onUpdate: function (c, f) {
    ("" + f.get("uin").indexOf(this.ownerCt.Sg) === 0 || "" + f.get("ShowName").toLowerCase().indexOf(this.ownerCt.Sg.toLowerCase()) > -1) && this.callParent(arguments);
  },
  prepareData: function (c, h, f) {
    this.ZK(f) && f.get("gid") == this.qR && this.$o.push(f);
    return this.callParent([c, h, f]);
  },
  ZK: function (c) {
    return !c.get("duplicated") && c.get("visible");
  },
  lK: function () {
    var c = [];
    Ext.each(this.getSelectionModel().getSelection(), function (b) {
      this.ZK(b) && c.indexOf(b.get("cid")) == -1 && c.push(b.get("cid"));
    }, this);
    return c;
  },
  hg: function (c, h) {
    var f = 0;
    Ext.each(h, function (e) {
      this.ZK(e) && e.get("gid") == this.qR && f++;
    }, this);
    this.It = f;
    this.hpa();
  },
  hpa: function () {
    var c = Ext.select(".select-all-stars", !0);
    c.removeCls("x-item-selected").removeCls("partchecked");
    this.It > 0 && (this.It < this.$o.length ? c.addCls("partchecked") : this.It == this.$o.length && c.addCls("x-item-selected"));
  },
  Dj: function (c, f) {
    f.getTarget(".select-all-stars") && (this.It > 0 ? this.getSelectionModel().deselect(this.$o) : this.getSelectionModel().select(this.$o, !0));
  },
  Il: function (c, f) {
    if (this.jc > 0 && this.jc - this.lK().length == -1) {
      return this.getSelectionModel().deselect(f), !1;
    }
  },
  nta: function (c, h) {
    var f = this.getNode(c);
    f && (f = Ext.fly(f), h && !c.get("duplicated") ? f.removeCls("d-none") : f.addCls("d-none"));
  },
  destroy: function () {
    this.un("beforeselect", this.Il, this);
    this.un("selectionchange", this.hg, this);
    this.un("containerclick", this.Dj, this);
    this.callParent();
  },
  fA: function () {
    this.getEl().select(".select-all-stars").addCls("d-none");
  },
  Fy: function () {
    this.getEl().select(".select-all-stars").removeCls("d-none");
  }
});