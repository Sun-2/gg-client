Ext.define(E.f.profile.contact.cv, {
  extend: C.f.pd,
  componentCls: "contact-form",
  name: "contact-form",
  id: "contact-form",
  mixins: {
    ka: C.core.mixins.Td
  },
  xJ: {
    name: 128,
    siteUrl: 255,
    mobile: 32,
    email: 32,
    ggnumber: 20
  },
  cda: "ggnumber",
  dda: "mobile",
  bda: "email",
  Uma: /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/,
  Apa: /^(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})$/,
  aua: /^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?(?:(?:[-\w]+\.)+(?:[a-z]{2,6}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)?$/,
  oka: /^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+/=?^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/,
  ks: !1,
  errors: !1,
  Df: m,
  qv: ".contact-form-text-field-container",
  haa: ".contact-form-text-field-input",
  XR: ".contact-form-text-field-input input",
  kD: ".contact-form-error-text",
  jD: "contact-form-errors",
  gaa: ".contact-form",
  Bq: "contact-form-submit",
  Aq: "contact-forrm-cancel",
  pS: "data-field-group",
  SY: "data-field-validation-group",
  Xba: "edit-contact-{0}-{1}",
  Y$: "contact-form-edit-contact-{0}",
  Fh: !1,
  ka: {
    ".sr-add-field-btn": function (c, f) {
      this.pea(c, f);
    },
    ".btn-save": function () {
      this.ks || this.submit();
    },
    ".btn-cancel": function () {
      this.ks || this.cancel();
    }
  },
  mode: m,
  constructor: function (c) {
    c = c || {};
    this.data = {
      maxLengthConfig: this.xJ
    };

    if (typeof c.Fh !== "undefined") {
      this.Fh = c.Fh;
    }

    if (typeof c.i8 !== "undefined") {
      this.data.showGGNumberField = c.i8;
    }

    if (typeof c.mK !== "undefined") {
      this.mK = c.mK, this.data.ggNumber = this.mK;
    }

    if (typeof c.multiple !== "undefined") {
      this.multiple = c.multiple, this.data.multiple = this.multiple;
    }

    if (typeof c.mode !== "undefined") {
      this.mode = c.mode, this.data.mode = this.mode;
    }

    this.tpl = C.k().da.ma("contact-form");
    this.jO = {
      ggnumber: {
        required: !0,
        text: E.lang.KR,
        re: this.Uma
      },
      mobile: {
        text: E.lang.SR,
        re: this.Apa
      },
      email: {
        text: E.lang.QR,
        re: this.oka
      },
      siteUrl: {
        text: E.lang.VR,
        re: this.aua
      },
      name: {
        required: !0
      },
      oneOfFieldRequired: {
        fields: [this.cda, this.bda, this.dda],
        text: E.lang.TR
      }
    };
    this.Fh && Ext.Array.each(this.jO.oneOfFieldRequired.fields, function (e) {
      this.jO[e].required = !0;
    }, this);
    this.Df = {};
    this.callParent(arguments);
    this.mixins.ka.constructor.call(this, {});
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  na: function () {
    this.fb();
  },
  fb: function () {
    this.GH();
  },
  eb: function () {
    this.X8();
  },
  GH: function () {
    this.X8();
    var c = this.Cs();
    Ext.Array.each(c, function (e) {
      Ext.get(this.ty(e)).on("focus", this.F0, this);
    }, this);
  },
  X8: function () {
    var c = this.Cs();
    Ext.Array.each(c, function (e) {
      Ext.get(this.ty(e)).un("focus", this.F0, this);
    }, this);
  },
  F0: function (c, f) {
    this.ox(f);
  },
  destroy: function () {
    this.eb();
    this.callParent();
  },
  hc: function (c) {
    this.tpl.overwrite(this.el, {
      name: c.get("ShowName"),
      showGGNumberField: c.get("uin") && c.get("uin") === "0",
      homePhones: c.get("extdata").HomePhone || [],
      mobilePhones: c.get("extdata").MobilePhone,
      phones: c.get("extdata").Phone || [],
      emails: c.get("extdata").Email,
      siteUrl: c.get("extdata").WwwAddress,
      maxLengthConfig: this.xJ,
      mode: this.mode
    });
    this.GH();
  },
  Xj: function (c) {
    return this.jO[c];
  },
  pea: function (c, w) {
    var q = Ext.get(w),
        o = q.parent(this.qv),
        f = o.child(this.haa),
        y = f.child("input").dom.getAttribute(this.pS),
        f = f.child("input").dom.getAttribute(this.SY),
        u = Ext.String.format(this.Y$, y),
        y = C.k().da.Wa(u, {
      id: Ext.String.format(this.Xba, y, new Date().getTime()),
      fieldGroup: y,
      multiple: !0,
      validationGroup: f
    });
    q.remove();
    o.insertSibling(y, "after");
    this.GH();
  },
  submit: function () {
    this.Tja();
    this.h_();
    this.Kla();
    this.errors ? this.$sa() : this.fireEvent(this.Bq, this.xla());
  },
  cancel: function () {
    this.fireEvent(this.Aq);
  },
  validate: function (c) {
    var c = this.Df.fields[c.id],
        p = c.kO,
        o = c.value.length && typeof this.Xj(p).re !== "undefined" && c.value.match(this.Xj(p).re) === m,
        n = c.value.length > this.xJ[p],
        f = this.Xj(p).required && !c.value.length;

    switch (!0) {
      case f:
        this.Fh && this.Xj("oneOfFieldRequired").fields.indexOf(p) !== -1 ? c.errors.dqa = !0 : this.errors = c.errors.required = !0;
        break;

      case o && n:
      case n:
        this.errors = c.errors.mt = !0;
        break;

      case o:
        this.errors = c.errors.format = !0;
    }

    if (this.Fh && this.Xj("oneOfFieldRequired").fields.indexOf(p) !== -1 && !f) {
      this.Df.IL = !0;
    }
  },
  pwa: function () {
    if (this.Fh && !this.Df.IL) {
      this.errors = !0;
    }
  },
  VBa: x("errors"),
  $sa: function () {
    var c = !1;
    Ext.Object.each(this.Df.fields, function (o, n) {
      if (Ext.Object.getSize(n.errors) > 0) {
        var f = Ext.get(this.el.query("#" + o)[0]).parent(this.qv),
            b = "";

        if (this.Fh && !this.Df.IL && this.Xj("oneOfFieldRequired").fields.indexOf(n.kO) !== -1) {
          c || (c = !0, f.addCls(this.jD), this.MM(f.child(this.kD).dom, this.Xj("oneOfFieldRequired").text));
        } else {
          if (this.Fh && n.errors.dqa) {
            return !0;
          } else {
            if (n.errors.required) {
              b = E.lang.UR;
            }

            if (n.errors.format) {
              b = this.Xj(n.kO).text;
            }

            if (n.errors.mt) {
              b = E.lang.RR;
            }

            f.addCls(this.jD);
            this.MM(f.child(this.kD).dom, b);
          }
        }
      }
    }, this);
    this.pe();
  },
  h_: function () {
    var c = this.Cs();
    this.errors = !1;
    Ext.Array.each(c, function (e) {
      this.ox(Ext.get(e).query(this.XR)[0]);
    }, this);
  },
  ox: function (c) {
    var c = Ext.get(c),
        f = c.parent(this.qv);
    f.removeCls(this.jD);
    this.MM(f.query(this.kD)[0], "");
    c = c.dom.id;

    if (this.Df.fields && this.Df.fields[c]) {
      this.Df.fields[c].errors = {};
    }
  },
  Cs: function () {
    return this.el.query(this.gaa + " " + this.qv);
  },
  Kla: function () {
    var c = this.Cs();
    this.Df = {
      fields: {},
      IL: !1
    };
    Ext.Array.each(c, function (e) {
      var e = this.ty(e),
          o = e.getAttribute(this.pS),
          n = e.getAttribute(this.SY),
          f = Ext.String.trim(e.value);
      this.Df.fields[e.id] = {
        value: f,
        errors: {},
        group: o,
        kO: n
      };
      this.validate(e);
    }, this);
    this.pwa();
  },
  xla: function () {
    var c = {};
    Ext.Object.each(this.Df.fields, function (f, b) {
      c[b.group] || (c[b.group] = []);
      c[b.group].push(b.value);
    }, this);
    return c;
  },
  reset: function () {
    this.errors = !1;
    this.Df = {};
    var c = this.Cs();
    Ext.Array.each(c, function (e) {
      this.ty(e).value = "";
    }, this);
    this.h_();
  },
  ty: function (c) {
    return Ext.get(c).query(this.XR)[0];
  },
  cta: function (c) {
    this.Q7("#edit-contact-ggnumber", c);
  },
  Ysa: function (c) {
    this.Q7("#edit-contact-email", c);
  },
  Q7: function (c, h) {
    var f = this.el.query(c);

    if (f && f.length && typeof f[0].value !== "undefined") {
      f[0].value = h;
    }
  },
  Tja: function () {
    this.ks = !0;
  },
  pe: function () {
    this.ks = !1;
  },
  cza: x("ks"),
  Mt: function (c) {
    this.mode = c === "add" ? "add" : "edit";
  },
  MM: function (c, f) {
    Ext.isIE ? c.innerText = f : c.textContent = f;
  }
});