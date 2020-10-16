Ext.define(E.f.profile.conference.kj, {
  extend: C.f.pd,
  cls: "conference-name",
  name: "",
  tpl: m,
  data: {},
  $d: !1,
  ae: m,
  Ra: m,
  settings: m,
  vb: m,
  ka: {
    ".save-name": function () {
      this.Ir();
    }
  },
  constructor: function (c) {
    c = c || {};
    this.la = Ext.getStore("ContactsStore");
    this.Ha = Ext.getStore("UsersStore");
    this.tpl = C.k().da.Wa("conference-name");
    this.api = E.api.bb;
    this.conferenceId = c.conferenceId || "";
    this.callParent(arguments);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.el.un("click", this.Ia, this);
    this.Ra.destroy();
    this.callParent();
  },
  setText: function (c) {
    this.name = c;
    this.Ra.setText(c);
  },
  na: function () {
    this.el.on("click", this.Ia, this);
    this.jf = this.el.select(".save-name").first();
    this.Md();
    this.Ra = Ext.create(E.f.layout.va.al, {
      cls: "conference-name-edit",
      ae: this.ae,
      maxLength: 127,
      renderTo: this.el,
      si: function () {
        this.cancelEdit(!0);
      },
      El: this.jn,
      Ei: this.Ir,
      wi: this,
      st: this
    });
    this.LM(this.$d);
  },
  C3: function () {
    try {
      var c = this.Ha.De(this.conferenceId).qe().get("cid") == 0 ? "insert" : "edit";
    } catch (f) {
      c = "insert";
    }

    return c;
  },
  jn: function () {
    clearTimeout(this.vb);
    this.jf.removeCls("d-none");
  },
  Md: function () {
    this.jf.addCls("d-none");
  },
  LM: function (c) {
    (this.$d = c) ? this.jn() : this.Md();
  },
  cancelEdit: function (c) {
    clearTimeout(this.vb);

    if (c) {
      var f = this;
      this.vb = setTimeout(function () {
        f.Md();
        f.Ra.close();
      }, 300);
    } else {
      this.Md(), this.Ra.close();
    }
  },
  Np: function (c) {
    this.Oa = c;
    c.get("visible") === !0 ? (this.name = this.Oa.get("ShowName"), this.removeCls("not-saved"), this.Ra.setText(this.name), this.Ra !== m && this.Ra.Ce && this.Ra.close()) : (this.addCls("not-saved"), this.name = this.Oa.get("ShowName"), this.Ra.setText(this.name), this.$d && this.Ra.Mj());
  },
  TM: function () {
    this.Ra.oh();
    this.vb = m;
    this.name = this.Ra.getText();
    this.Oa.set("ShowName", this.Ra.getText());
  },
  Ir: function () {
    Ext.String.trim(this.Ra.yy()) === "" ? (C.k().qa.sa({
      msg: E.oa.SP,
      timeout: 2000
    }), clearTimeout(this.vb), this.Ra.Ub.focus()) : this.name == Ext.String.trim(this.Ra.yy()) && this.Oa.get("visible") == !0 ? this.cancelEdit() : (this.TM(), this.Oa.get("visible") == !1 ? this.ql() : this.YN());
  },
  ql: function () {
    this.la.rZ({
      conferenceID: this.Oa.get("uin"),
      name: this.name
    }, {
      Ea: this.vI,
      ya: this.uI,
      scope: this
    });
  },
  YN: function () {
    var c = this.name;
    this.api.oy({
      conferenceId: this.Oa.get("uin"),
      cid: this.Oa.get("cid")
    }, {
      fn: function (b) {
        b.ShowName.value = c;
        this.XN(b);
      },
      scope: this
    }, {
      fn: this.v3,
      scope: this
    });
  },
  XN: function (c) {
    this.Md();
    this.Ra.oh();
    this.la.Yo(c, {
      Ea: this.xI,
      ya: this.wI,
      scope: this
    });
  },
  vI: function () {
    C.k().qa.sa({
      msg: E.oa.Pu,
      timeout: 2000
    });
    this.Md();
    this.Oa.set("visible", !0);
    C.k().Ja.fireEvent("unknownconferenceadded", this.Oa);
    this.Ra.oh();
    C.Ca("");
  },
  uI: function () {
    C.k().qa.sa({
      msg: E.oa.Ou,
      timeout: 2000
    });
    C.Ca("");
  },
  xI: function () {
    C.k().qa.sa({
      msg: E.oa.Pu,
      timeout: 2000
    });
  },
  wI: function () {
    C.k().qa.sa({
      msg: E.oa.Ou,
      timeout: 2000
    });
  },
  Ia: function (c, n, l) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        this.ka[f].call(this, c, n, l);
        c.preventDefault();
        break;
      }
    }
  },
  Sj: function (c) {
    var h = [],
        f = [];
    Ext.iterate(c, function (e) {
      f.indexOf(parseInt(e.yb)) === -1 && (e.yb == C.k().fa.get("uin") ? h.push(E.lang.Bn) : h.push(this.getUserData(e.yb).get("ShowName")), f.push(parseInt(e.yb)));
    }, this);
    return E.lang.tq + h.join(", ");
  },
  getUserData: function (c) {
    if (C.k().fa.get("uin") == c) {
      return C.k().fa;
    }

    return this.Ha.xb(c).Hb();
  }
});