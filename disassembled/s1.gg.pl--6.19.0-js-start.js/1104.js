Ext.define(E.f.profile.pu, {
  extend: C.f.Jb,
  mixins: {
    ea: C.core.mixins.kb
  },
  data: m,
  html: "",
  d7: 0,
  constructor: function (c) {
    this.ea = [[C.core.ea.oj, {}]];
    this.mixins.ea.constructor.call(this, c);
    this.callParent(arguments);
    this.addEvents("ready");
  },
  initComponent: function () {
    this.callParent();
    this.on("afterrender", this.b7, this);
  },
  destroy: function () {
    for (var c = 0, f = this.items.length; c < f; c++) {
      this.items[c].un("ready", this.c7, this);
    }

    this.un("afterrender", this.b7, this);
    this.callParent(arguments);
  },
  Sd: function (c, h, f) {
    this.d7 = 0;
    this.fireEvent("showpreloader");
    this.items.each(function (b) {
      b.Sd(c, h, f);
    });
  },
  Zg: function () {
    this.items.each(function (c) {
      c.Zg();
    });
  },
  add: function (c) {
    c.constructor !== Array && (c instanceof E.f.profile.$h || j(Error("View component " + c.$className + " must be an instance of ggpl.gui.profile.AbstractProfileComponent")), c.on("ready", this.c7, this));
    return this.callParent([c]);
  },
  b7: function () {
    this.fireEvent("showpreloader");
  },
  c7: function () {
    ++this.d7 == this.items.length && (this.fireEvent("hidepreloader"), this.fireEvent("ready"));
  }
});