Ext.define(E.f.layout.va.hb.Tk, {
  extend: C.f.windows.cc,
  Ab: !0,
  width: 400,
  cls: "sr-app-window contacts-picker-window",
  Ul: m,
  pc: m,
  events: {
    gj: "BUTTON_ACTION"
  },
  Qe: m,
  Of: !1,
  Ef: !1,
  Fd: m,
  jc: 0,
  yg: m,
  Db: m,
  Xm: !0,
  Tg: m,
  Ug: !1,
  title: "",
  subtitle: "",
  label: "",
  buttons: m,
  fields: ["cid"],
  width: 258,
  Ye: m,
  constructor: function (c) {
    this.Ye = [];
    this.o4 = [];
    c = c || {};
    c.Qe = c.Qe || c.viewType || this.Qe;
    c.Of = c.Of || c.selfSelect || this.Of;
    c.Ke = c.Ke || c.lockSelfSelect || this.Ke;
    c.Ef = c.Ef || c.friendsOnly || this.Ef;
    c.Fd = c.Fd || c.allowedTypes || this.Fd;
    c.jc = c.jc || c.limitMax || this.jc;
    c.Tg = c.Tg || c.limitMaxMessage;
    c.yg = c.yg || c.selectedCids || this.yg;
    c.Db = c.Db || c.selectedUins || this.Db;
    c.Ug = c.Ug || c.lockSelected || this.Ug;
    c.gh = c.gh || c.selectContactFilters || this.gh;
    c.mg = c.mg || c.deselectContactFilters || this.mg;

    if (typeof c.selectionSummary != "undefined") {
      c.Xm = c.selectionSummary;
    }

    c.title = c.title || c.title || this.title;
    c.subtitle = c.subtitle || c.subtitle || this.subtitle;
    c.label = c.label || c.label || this.label;
    c.buttons = c.buttons || c.buttons || this.buttons;
    c.fields = c.fields || c.fields || this.fields;
    c.Gb = c.Gb || c.template || this.HJ(c);
    c.Ab = c.Ab || c.closeBtn || this.Ab;
    c.width = c.width || c.width || this.width;
    c.cls = c.cls || this.cls;
    this.buttons = Ext.clone(c.buttons);
    delete c.buttons;
    this.callParent([c]);
  },
  HJ: function (c) {
    var f = "";
    c.title && (f += '<div class="title">' + Ext.htmlEncode(c.title) + "</div>");
    c.subtitle && (f += '<div class="subtitle">' + Ext.htmlEncode(c.subtitle) + "</div>");
    c.label && (f += '<div class="label">' + Ext.htmlEncode(c.label) + "</div>");
    f += '<div class="contents"></div>';
    return f;
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent();
  },
  initItems: function () {
    if (this.Ul) {
      this.pc = Ext.create(E.f.layout.va.hb.yq, {
        renderTo: this.Ul,
        Qe: this.Qe,
        Of: !1,
        Ke: this.Ke,
        Ef: this.Ef,
        Fd: this.Fd,
        jc: this.jc,
        yg: this.yg,
        Db: this.Db,
        Tg: this.Tg,
        Ug: this.Ug,
        Xm: this.Xm,
        gh: this.gh,
        mg: this.mg
      }), this.pc.on("destroy", function () {
        this.destroy();
      }, this, {
        single: !0
      }), this.o3();
    }
  },
  destroy: function () {
    if (this.pc) {
      this.pc.un("selectionchange", this.hg, this), this.pc.destroy(), this.pc = m;
    }

    for (var c = 0, f = this.Ye.length; c < f; c++) {
      this.Ye[c] && (this.Ye[c].destroy(), delete this.Ye[c]);
    }

    this.un("afterrender", this.na, this);
    this.callParent();
  },
  o3: function () {
    if (!this.buttons || this.buttons.length == 0) {
      this.buttons = [{
        caption: "Wybierz",
        action: "submit"
      }, "cancel"];
    }

    var c = this;
    Ext.each(this.buttons, function (f) {
      var b = m,
          b = f == "cancel" ? Ext.create(C.f.yn, {
        cls: "btn-cancel",
        J8: !0,
        text: E.lang.qq,
        renderTo: this.Ul,
        handler: function (g) {
          c.Ko("cancel", g);
        }
      }) : Ext.create(C.f.yn, {
        disabled: f.disabled || !1,
        cls: "blue",
        Ofa: f.Ofa || m,
        text: f.caption || f.caption,
        renderTo: this.Ul,
        handler: function (e) {
          c.Ko(f.action, e);
        }
      });
      this.Ye.push(b);
      f.xp && f.xp > 0 && this.o4.push({
        OK: b,
        xp: f.xp
      });
    }, this);
  },
  na: function () {
    this.Ul = this.el.select(".contents").first();
    this.initItems();
    this.pc.on("selectionchange", this.hg, this);
  },
  Ko: function (c, n) {
    n.disable();

    if (c == "cancel") {
      this.fireEvent(this.events.gj, {
        action: c
      });
    } else {
      var l = [],
          f = this.pc.getSelectedRecords();
      Ext.each(f, function (g) {
        var h = {};
        Ext.each(this.fields, function (b) {
          h[b] = g.get(b);
        }, this);
        l.push(h);
      }, this);

      if (typeof c === "function") {
        if (c(l) === !1) {
          n.enable();
          return;
        }
      } else {
        this.fireEvent(this.events.gj, {
          action: c,
          data: l
        });
      }
    }

    this.destroy();
  },
  FI: function () {
    this.fireEvent(this.events.gj, {
      action: "cancel"
    });
    this.callParent(arguments);
  },
  hg: function () {
    var c = this.pc.hK(),
        f = Ext.Array.indexOf(c, "0") != -1 ? c.length : c.length + 1;
    Ext.Array.each(this.o4, function (e) {
      e.xp && f >= e.xp ? e.OK.enable() : e.OK.disable();
    });
  }
});