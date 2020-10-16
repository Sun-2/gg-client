Ext.define(E.f.windows.iw, {
  extend: C.f.windows.cc,
  eR: "accept-abuse",
  da: m,
  tpl: m,
  user: m,
  textarea: m,
  Jr: "sr-form-checkbox-checked",
  Dd: m,
  CM: !0,
  ka: {
    ".report-option": function (c) {
      var c = Ext.get(c.getTarget(".report-option")),
          f = c.getAttribute("data-report");
      this.N8(c.select("i").first(), f);
    },
    ".ignore": function (c) {
      this.N8(Ext.get(c.getTarget(".ignore")).select("i").first(), "ignore");
    }
  },
  constructor: function (c) {
    c = c || {};
    this.user = c.user;
    this.da = c.da || C.k().da;
    var f = this.tpl = c.tpl || C.k().da.Wa("report-abuse-window");
    this.Dd = {
      spam: !1,
      "vulgar-content": !1,
      "vulgar-avatar": !1,
      other: !1,
      ignore: !1
    };
    this.callParent([{
      Gb: f,
      Ab: !1,
      cls: "report-abuse-wnd",
      Sb: c.Sb,
      buttons: [{
        selector: "div.btn-save",
        fn: this.accept,
        scope: this,
        Ib: !1
      }, {
        selector: "div.btn-cancel",
        fn: t(),
        scope: this,
        Ib: !0
      }]
    }]);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.textarea.un("keyup", this.Pr, this);
    this.callParent();
  },
  na: function () {
    this.jf = Ext.get(this.el.select("div.btn-save").elements[0]);
    this.H2();
    this.el.on("click", function (c) {
      c.preventDefault();

      for (var f in this.ka) {
        if (m !== c.getTarget(f)) {
          this.ka[f].call(this, c);
          break;
        }
      }
    }, this);
    this.textarea = this.getEl().select(".other-message textarea").first();
    this.textarea.on("keyup", this.Pr, this);
  },
  Pr: function () {
    var c = Ext.String.trim(this.textarea.getValue()),
        f = this.getEl().select("span[data-report=other] i").first();
    c.length > 0 ? this.c_(f, "other") : this.Z8(f, "other");
  },
  N8: function (c, f) {
    typeof this.Dd[f] !== "undefined" && this.Dd[f] === !1 ? this.c_(c, f) : this.Z8(c, f);
  },
  c_: function (c, f) {
    c.addCls(this.Jr);
    this.Dd[f] = !0;
    this.uka();
  },
  Z8: function (c, f) {
    c.removeCls(this.Jr);
    this.Dd[f] = !1;
    this.Oea() || this.H2();
  },
  Oea: function () {
    var c = !1;
    Ext.Object.each(this.Dd, function (f, b) {
      if (b === !0) {
        return c = !0, !1;
      }
    });
    return c;
  },
  eqa: function () {
    return !this.Dd.spam && !this.Dd["vulgar-content"] && !this.Dd["vulgar-avatar"] && !this.Dd.other && this.Dd.ignore;
  },
  accept: function () {
    if (!this.CM) {
      var c = this.user.Hb().get("uin"),
          c = {
        fua: this.Dd.spam,
        vwa: this.Dd["vulgar-content"],
        uwa: this.Dd["vulgar-avatar"],
        other: this.Dd.other,
        pqa: this.getEl().select(".other-message textarea").first().getValue(),
        ignore: this.Dd.ignore,
        Rda: "" + c
      };
      E.api.nT.Dd(c);
      this.Dd.ignore === !0 && (c = {
        scope: this
      }, C.k().hq.ignore(this.user, c));
      C.k().o_(this.user.Hb().get("uin"));
      this.fireEvent(this.eR);
      this.eqa() || C.k().qa.sa({
        msg: E.oa.J9,
        timeout: 5000
      });
      this.Xa();
    }
  },
  uka: function () {
    this.jf.removeCls("disabled");
    this.CM = !1;
  },
  H2: function () {
    this.jf.addCls("disabled");
    this.CM = !0;
  }
});