Ext.define(C.core.ea.sf, {
  extend: C.core.ea.Qk,
  Gz: {
    PL: [],
    J6: 0
  },
  ti: m,
  dn: ["showpopup", "show"],
  vm: ["hidepopup"],
  Ge: function (c) {
    c.addCls("d-none");
  },
  Ez: "_popup-clicker",
  um: function (c) {
    return c.hasCls("d-none") ? !1 : !0;
  },
  constructor: function (c) {
    c = c || {};
    c.dn = [].concat(this.dn).concat(c.dn || []);
    c.vm = [].concat(this.vm).concat(c.vm || []);
    this.ug = c.ug || m;
    this.Ge = c.Ge || this.Ge;
    this.fe = c.fe || [];
    this.ti = c.ti || Ext.getBody();
    this.callParent([c]);
  },
  onAdd: function () {
    this.callParent(arguments);

    if (this.fe.length) {
      this.IA();
    } else {
      if (this.owner.getEl()) {
        this.fe.push(this.owner.getEl()), this.IA();
      } else {
        this.owner.on("afterrender", this.zfa, this);
      }
    }

    Ext.each(this.fe, function (c, f) {
      c instanceof Ext.Element || (this.fe[f] = new Ext.Element(c));
    }, this);
    this.addEvents();
  },
  onRemove: function () {
    this.IA();
    this.Ct();
    this.callParent(arguments);
  },
  addEvents: function (c, n) {
    this.callParent(arguments);

    if (c) {
      for (var l = 0, f = c.length; l < f; l += 1) {
        this.dn.push(c[l]);
      }
    }

    if (n) {
      l = 0;

      for (f = n.length; l < f; l += 1) {
        this.vm.push(n[l]);
      }
    }

    this.foa();
    this.Rna();
  },
  Ct: function () {
    this.callParent(arguments);

    for (var c = this.dn, n = this.vm, l = 0, f = c.length; l < f; l += 1) {
      this.owner.un(c[l]);
    }

    l = 0;

    for (f = n.length; l < f; l += 1) {
      this.owner.un(n[l]);
    }
  },
  jfa: function (c) {
    for (var n = this.Gz.PL, l = 0, f = n.length; l < f; l += 1) {
      n[l] !== this.owner ? n[l].fireEvent("hidepopup", {
        caller: n[l]
      }) : n[l] === this.owner && this.fe.length >= 2 && (c.el ? n[l].fireEvent("hidepopup", {
        caller: n[l],
        el: c.el
      }) : n[l].fireEvent("hidepopup", {
        caller: n[l]
      }));
    }

    c.event && (window.postMessage(2525, "*"), c.event.type == "click" && c.event.stopEvent(), this.ti.on("click", this.xK, this, {
      caller: this.ti
    }));
  },
  gva: function (c) {
    Ext.each(this.fe, function (b) {
      this.um(b) && this.xK(c);
    }, this);
    this.ti.un("click", this.xK, this, {
      caller: this.ti
    });
  },
  xK: function (c, n) {
    if (this.ug) {
      var l, f;
      n && (l = Ext.get(n), l.addCls(this.Ez));
      Ext.each(this.fe, function (b, g) {
        this.ug[g] ? (f = b.query("." + this.Ez), f.length ? l && l.removeCls(this.Ez) : (b != c.el && this.Ge.call(this.owner, b), this.um(b) && !c.el && this.owner.fireEvent("hidepopup", {
          caller: this.ti
        }))) : (b != c.el && this.Ge.call(this.owner, b), this.um(b) && !c.el && this.owner.fireEvent("hidepopup", {
          caller: this.ti
        }), l && l.removeCls(this.Ez));
      }, this);
    } else {
      Ext.each(this.fe, function (b) {
        b != c.el && this.Ge.call(this.owner, b);
        this.um(b) && !c.el && this.owner.fireEvent("hidepopup", {
          caller: this.ti
        });
      }, this);
    }
  },
  zfa: function () {
    this.fe.push(this.owner.getEl());
    this.IA();
  },
  IA: function () {
    for (var c = this.Gz.PL, h = 0, f = c.length; h < f; h += 1) {
      if (c[h] === this.owner) {
        c.splice(h, 1);
        this.J6 -= 1;
        return;
      }
    }

    this.Gz.PL.push(this.owner);
    this.Gz.J6 += 1;

    if (!this.ug) {
      c = this.fe.length;
      this.ug = [];

      for (h = 0; h < c; h += 1) {
        this.ug[h] = 0;
      }
    }
  },
  foa: function () {
    for (var c = 0, f = this.dn.length; c < f; c += 1) {
      this.owner.on(this.dn[c], this.jfa, this);
    }
  },
  Rna: function () {
    for (var c = 0, f = this.vm.length; c < f; c += 1) {
      this.owner.on(this.vm[c], this.gva, this);
    }
  }
});