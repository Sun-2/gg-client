Ext.define(E.f.layout.va.nz.YS, {
  extend: "Ext.Component",
  Yn: "volume",
  Zq: "last-volume",
  autoEl: {
    tag: "div",
    cls: "volume-control"
  },
  statics: {
    instances: []
  },
  Sf: m,
  ln: m,
  vt: m,
  constructor: function (c) {
    this.vt = c.preferences || m;
    this.self.instances.push(this);
    this.callParent(arguments);
  },
  initComponent: function () {
    this.addEvents("change");
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.Sf.un("change", this.I1, this);
    this.ln.un("click", this.Q8, this);
    this.mun(this.getEl(), "mousewheel", this.Sf.Gx, this.Sf);

    for (var c = 0, f = this.self.instances.length; c < f; c++) {
      if (this.self.instances[c] === this) {
        this.self.instances.splice(c, 1);
        break;
      }
    }

    this.callParent(arguments);
  },
  Q8: function () {
    var c = this.Sf.getValue(!0);
    c > 0 ? (this.rz = c, this.Sf.Rf(0, !0)) : (this.Sf.Rf(this.rz || 100, !0), delete this.rz);
  },
  Pp: function (c) {
    this.Sf.Rf(c, !0);
  },
  sm: function () {
    return this.Sf.getValue(!0);
  },
  na: function () {
    this.ln = Ext.get(document.createElement("div"));
    this.ln.addCls("speaker state-0");
    this.ln.appendTo(this.el);
    this.Sf = Ext.create(E.f.layout.va.IG, {
      renderTo: this.el
    });
    this.Sf.on("change", this.I1, this);
    this.ln.on("click", this.Q8, this);
    this.rz = this.vt.get(this.Zq);
    this.Pp(this.vt.get(this.Yn, 100));
    this.mon(this.getEl(), "mousewheel", this.Sf.Gx, this.Sf);
  },
  I1: function () {
    var c = this.Sf.getValue(!0),
        h = 0,
        h = c == 0 ? 0 : c == 100 ? 3 : Math.ceil(c / 33);
    this.ln.dom.className = this.ln.dom.className.replace(/state-\d/, "state-" + h);
    this.vt.set(this.Yn, c);
    this.vt.set(this.Zq, this.rz);

    for (var h = 0, f = this.self.instances.length; h < f; h++) {
      this.self.instances[h] !== this && (this.self.instances[h].suspendEvents(), this.self.instances[h].Pp(c), this.self.instances[h].resumeEvents());
    }

    this.fireEvent("change", c);
  }
});