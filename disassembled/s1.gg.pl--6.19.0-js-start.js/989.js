Ext.define(E.f.layout.va.al, {
  extend: C.f.pd,
  name: "inline-edit-widget",
  componentCls: "inline-edit-widget",
  Ub: m,
  Vp: m,
  tpl: m,
  multiline: !1,
  emptyText: "",
  text: "",
  Dp: !1,
  vAa: "",
  ae: 200,
  maxLength: 255,
  Pi: 0,
  rows: 1,
  eN: !1,
  data: {},
  Ce: !1,
  Ei: m,
  El: m,
  wi: m,
  si: m,
  NZ: !1,
  constructor: function (c) {
    c = c || {};
    this.st = c.st || m;
    this.callParent(arguments);
  },
  ka: {
    "a.sr-anchor": function (c, f) {
      c.stopEvent();
      C.k().sg(f.href, this);
    },
    ".inline-edit-text": function () {
      this.Ce || (this.Mj(), this.El.call(this.wi || this));
    }
  },
  initComponent: function () {
    var c = this.Dp ? C.ca.xa.wd(this.text, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]) : nl2br(eha(this.text));
    this.tpl = C.k().da.Wa("inline-edit-widget", {
      text: c != "" ? c : this.emptyText
    });
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.el.un("click", this.Nr, this);
    this.Ub && (this.si && this.Ub.un("blur", this.Cj, this), this.Ei && this.Ub.el.un("keydown", this.L_, this), this.Ub.el.un("keyup", this.P_, this), this.Ub.el.un("keydown", this.O_, this), this.Ub.el.un("keypress", this.Or, this));
    this.callParent();
  },
  nka: function () {
    if (this.Ub) {
      this.Ub.removeCls("d-none");
    } else {
      this.multiline ? (this.s2(!0), this.setText(this.text)) : this.s2();
      this.Ub.el.on("keypress", this.Or, this);

      if (this.Ei) {
        this.Ub.el.on("keydown", this.L_, this);
      }

      this.Ub.el.on("keyup", this.P_, this);
      this.Ub.el.on("keydown", this.O_, this);
    }

    this.addCls("edit");

    if (this.multiline && !this.Ce) {
      var c = this.Ub.getValue();
      this.Lt(c + " ");
      this.Lt(c);
    } else {
      this.Lt(m);
    }

    this.Ub.focus();
    !this.Ce && this.Ub && this.Xsa();
    this.Ce = !0;

    if (this.si && !this.NZ) {
      this.Ub.on("blur", this.Cj, this), this.NZ = !0;
    }
  },
  s2: function (c) {
    var f = {
      maxLength: this.maxLength,
      width: this.ae
    };

    if (c) {
      f.multiline = !0;
    }

    if (this.Pi) {
      f.Pi = this.Pi;
    }

    if (this.rows) {
      f.rows = this.rows;
    }

    this.Ub = Ext.create(E.f.layout.va.lE, f);
    this.Ub.render(this.el);
  },
  Lt: function (c) {
    if (typeof c === "undefined" || c === m) {
      c = this.text;
    }

    this.Ub.Rf(c);
  },
  getText: function () {
    return Ext.String.trim(this.text);
  },
  yy: function () {
    return Ext.String.trim(this.Ub.getValue());
  },
  setText: function (c) {
    if (typeof c !== "undefined" && c !== m) {
      this.text = typeof c !== "undefined" ? c : this.text;

      if (this.text.length) {
        this.text = this.text.substring(0, this.maxLength);
      }

      c = Ext.String.trim(this.text) != "" ? this.text : this.emptyText;
      this.Vp.dom.innerHTML = this.Dp ? C.ca.xa.wd(c, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]) : nl2br(eha(c));
      this.GN();
      this.Ub && this.Lt(m);
    }
  },
  na: function () {
    this.el.on("click", this.Nr, this);
    this.Vp = this.el.select(".inline-edit-text").first();
    this.GN();
  },
  Nr: function (c, h) {
    for (var f in this.ka) {
      if (c.getTarget(f)) {
        this.ka[f].call(this, c, h);
        break;
      }
    }
  },
  Cj: function () {
    this.Ce && this.si.call(this.wi || this);
  },
  oh: function () {
    if (this.Ub) {
      var c = this.Ub.getValue();

      if (c != this.text) {
        this.text = c;
      }
    }

    this.setText(this.text);
    this.close();
  },
  GN: function () {
    Ext.String.trim(this.text) ? this.Vp.removeCls("empty") : this.Vp.addCls("empty");
  },
  Xsa: function () {
    this.st && this.st.C3() == "edit" ? this.Ub.H7(this.getText().length, this.getText().length) : this.Ub.H7();
  },
  Mj: function () {
    this.Vp.addCls("d-none");
    this.nka();
  },
  close: function () {
    this.Ce = !1;
    this.Ub && (this.Ub.addCls("d-none"), this.Lt(m));
    this.GN();
    this.removeCls("edit");
    this.Vp.removeCls("d-none");
  },
  qCa: x("Ce"),
  Or: function (c) {
    c.getKey() != 8 && c.getKey() != 46 && this.Ub.getValue().length >= this.maxLength && c.stopEvent();
  },
  L_: function (c) {
    if (c.getKey() == 13 && !this.eN) {
      return c.stopEvent(), this.Ei.call(this.wi || this), !1;
    }
  },
  P_: function (c) {
    if (c.getKey() == 16) {
      this.eN = !1;
    }
  },
  O_: function (c) {
    if (c.getKey() == 16) {
      this.eN = !0;
    }
  }
});