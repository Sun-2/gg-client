Ext.define(E.f.profile.conference.av, {
  extend: C.f.Jb,
  ka: {
    ".talk-button": function (c) {
      c.preventDefault();
      C.k().fc(this.Oa);
    },
    ".add-button": function (c) {
      c.preventDefault();
      C.k().Ti({
        conferenceId: this.Oa.get("uin")
      });
    }
  },
  constructor: function () {
    this.data = {};
    this.tpl = C.k().da.ma("conference-buttons");
    this.callParent(arguments);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.el.un("click", this.Ia, this);
    this.callParent();
  },
  hc: v("Oa"),
  na: function () {
    this.el.on("click", this.Ia, this);
  },
  Ia: function (c, h, f) {
    c.preventDefault();
    Ext.iterate(this.ka, function (e, b) {
      c.getTarget(e) && b.call(this, c, h, f);
    }, this);
  }
});