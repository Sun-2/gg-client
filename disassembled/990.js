Ext.define(E.f.layout.gd.sC, {
  extend: C.f.pd,
  tpl: m,
  data: {},
  mixins: {
    ea: C.core.mixins.kb
  },
  ea: m,
  D9: {
    "sr-btn-change-view-groups": "groups",
    "sr-btn-change-view-stars": "stars",
    "sr-btn-change-avatars-no-avatars": "avatars-none",
    "sr-btn-change-avatars-avatars-left": "avatars-left",
    "sr-btn-change-avatars-avatars-right": "avatars-right"
  },
  sZ: {
    "sr-btn-add-contact": "addcontact",
    "sr-btn-add-group": "addgroup",
    "sr-btn-add-conference": "addconference"
  },
  k_: {
    ".btn-views": function (c, h) {
      var f = Ext.get("sr-contact-list-views");
      m !== f && f.hasCls("d-none") && (Ext.get(h).addCls("active"), f.removeCls("d-none"), this.fireEvent("show", {
        event: c,
        target: h,
        el: f
      }));
    },
    ".sr-btn-change-view-groups": function (c, f) {
      this.Rua(f, !0);
    },
    ".sr-btn-change-avatars-no-avatars": function () {
      this.Dg("sr-btn-change-avatars-no-avatars", !0);
    },
    ".sr-btn-change-avatars-avatars-left": function () {
      this.Dg("sr-btn-change-avatars-avatars-left", !0);
    },
    ".sr-btn-change-avatars-avatars-right": function () {
      this.Dg("sr-btn-change-avatars-avatars-right", !0);
    },
    ".sr-btn-change-view-descriptions": function (c, f) {
      this.Qua(f, !0);
    },
    ".sr-btn-change-view-synchronized": function (c, f) {
      this.Uua(f, !0);
    },
    ".btn-add": function (c, h) {
      var f = Ext.get("sr-contact-add-sth");
      m !== f && f.hasCls("d-none") && (Ext.get(h).addCls("active"), f.removeCls("d-none"), this.fireEvent("show", {
        event: c,
        target: h,
        el: f
      }));
    },
    ".sr-contact-add-el": function (c, h) {
      for (var f in this.sZ) {
        if (h.hasCls(f)) {
          return this.Fva(f), f;
        }
      }

      return m;
    }
  },
  constructor: function (c) {
    this.config = c;
    this.callParent([c]);
    this.tpl = C.k().da.ma("contacts-list-tools");
    this.addEvents("viewchange", "addcontact", "addgroup", "addconference");
  },
  initComponent: function () {
    this.callParent();
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.el && this.el.un("click", this.Ia, this);
    this.un("afterrender", this.na, this);
    this.callParent();
  },
  na: function (c) {
    c.el.on("click", this.Ia, this);
    this.ea = [[C.core.ea.sf, {
      fe: [Ext.get("sr-contact-add-sth"), Ext.get("sr-contact-list-views")],
      Ge: function (e) {
        var f;
        (f = e.dom && e.dom.id === "sr-contact-add-sth" ? Ext.get(e.parent().query(".btn-add")) : Ext.get(e.parent().query(".btn-views"))) && f.removeCls("active");
        e.addCls("d-none");
      },
      ug: [0, 1]
    }]];
    this.mixins.ea.constructor.call(this, {});
    this.Dta();
  },
  Dta: function () {
    this.view = this.config.view || "stars";
    this.we = this.config.we || "avatars-right";
    this.showDescription = this.config.Xo;
    this.Wp = this.getEl().select(".show-groups-checkbox").elements[0];
    this.Up = this.getEl().select(".show-description-checkbox").elements[0];
    this.Xp = this.getEl().select(".show-synchronized-checkbox").elements[0];
    this.Qw = Ext.get("sr-contact-add-sth").select(".sr-btn-add-group");
    this.e8();
    this.Cta();
    this.view == "stars" && (this.bA(!1), this.dq(!1));
    this.view == "groups" && (this.bA(!0), this.dq(!0));
    this.we == "avatars-none" && this.Dg("sr-btn-change-avatars-no-avatars", !1);
    this.we == "avatars-left" && this.Dg("sr-btn-change-avatars-avatars-left", !1);
    this.we == "avatars-right" && this.Dg("sr-btn-change-avatars-avatars-right", !1);
  },
  Ia: function (c, n) {
    if (c.getTarget(".radio") && n.checked == !0) {
      n.checked = !1;
    }

    c.preventDefault();

    for (var l in this.k_) {
      var f = c.getTarget(l, m, !0);

      if (m !== f) {
        return this.k_[l].call(this, c, f), !1;
      }
    }
  },
  xf: function (c, f) {
    this.D9["sr-btn-change-view-" + c] && this.Dg("sr-btn-change-view-" + c, f);
  },
  $H: function (c, f) {
    this.D9["sr-btn-change-avatars-" + c] && this.Dg("sr-btn-change-avatars-" + c, f);
  },
  bA: function (c) {
    c === !0 ? Ext.get(this.Wp).addCls("sr-form-checkbox-checked") : Ext.get(this.Wp).removeCls("sr-form-checkbox-checked");
  },
  e8: function () {
    this.showDescription == "1" ? Ext.get(this.Up).addCls("sr-form-checkbox-checked") : Ext.get(this.Up).removeCls("sr-form-checkbox-checked");
  },
  Cta: function () {
    var c = Ext.get(this.Xp);
    this.Wta == "1" ? c.addCls("sr-form-checkbox-checked") : c.removeCls("sr-form-checkbox-checked");
  },
  Ala: function () {
    return Ext.get(this.Up).hasCls("sr-form-checkbox-checked") === !0 ? "1" : "0";
  },
  Pla: function () {
    return Ext.get(this.Wp).hasCls("sr-form-checkbox-checked") === !0 ? "groups" : "favorites";
  },
  r3: function () {
    if (Ext.select(".sr-contact-list-tool.active") && Ext.select(".sr-contact-list-tool.active").elements[0]) {
      var c = Ext.get(Ext.select(".sr-contact-list-tool.active").elements[0]);

      if (c.hasCls("sr-btn-change-avatars-avatars-right")) {
        return "right";
      }

      if (c.hasCls("sr-btn-change-avatars-avatars-left")) {
        return "left";
      }

      if (c.hasCls("sr-btn-change-avatars-no-avatars")) {
        return "none";
      }
    }
  },
  Lma: function () {
    return this.Xp ? Ext.get(this.Xp).hasCls("sr-form-checkbox-checked") === !0 ? "1" : "0" : "0";
  },
  Qua: function () {
    Ext.get(this.Up).hasCls("sr-form-checkbox-checked") ? Ext.get(this.Up).removeCls("sr-form-checkbox-checked") : Ext.get(this.Up).addCls("sr-form-checkbox-checked");
    this.Dg("sr-btn-change-view-descriptions", !0);
  },
  Uua: function (c, f) {
    Ext.get(this.Xp).hasCls("sr-form-checkbox-checked") ? Ext.get(this.Xp).removeCls("sr-form-checkbox-checked") : Ext.get(this.Xp).addCls("sr-form-checkbox-checked");
    this.Dg("sr-btn-change-view-synchronized", f);
  },
  Rua: function (c, f) {
    Ext.get(this.Wp).hasCls("sr-form-checkbox-checked") ? (Ext.get(this.Wp).removeCls("sr-form-checkbox-checked"), this.Dg("sr-btn-change-view-stars", f)) : (Ext.get(this.Wp).addCls("sr-form-checkbox-checked"), this.Dg("sr-btn-change-view-groups", f));
  },
  Dg: function (c, q) {
    q = q || !1;
    c == "sr-btn-change-view-groups" && this.dq(!0);
    c == "sr-btn-change-view-stars" && this.dq(!1);
    Ext.select(".sr-contact-list-tool.active").elements[0] && Ext.select("#sr-contact-view-types ." + c).elements[0] && (Ext.get(Ext.select(".sr-contact-list-tool.active").elements[0]).removeCls("active"), Ext.get(Ext.select("#sr-contact-view-types ." + c).elements[0]).addCls("active"), Ext.select("#sr-btn-change-view").removeCls("list-view-left list-view-right list-view-none").addCls("list-view-" + this.r3()));

    if (q) {
      var p = this.Ala(),
          o = this.Pla(),
          f = this.r3(),
          u = this.Lma();
      this.fireEvent("viewchange", this, o, f, p, u);
    }
  },
  ega: function (c) {
    c.contactView.showDescription == "1" ? this.showDescription = "1" : this.showDescription = "0";
    this.e8();
    c.listView.type == "favorites" ? (this.bA(!1), this.dq(!1)) : (this.bA(!0), this.dq(!0));
  },
  LEa: function () {
    this.getEl().select(".btn-views").toggleCls("active");
    this.getEl().child("#sr-contact-list-views").toggleCls("active");
  },
  dq: function (c) {
    c ? (Ext.get("sr-contact-add-sth").addCls("groups"), this.Qw.hasCls("d-none").elements[0].className.indexOf("d-none") !== -1 && (this.Qw.removeCls("d-none"), Ext.get("sr-contact-add-sth").getStyle("top"))) : (Ext.get("sr-contact-add-sth").removeCls("groups"), this.Qw.elements[0].className.indexOf("d-none") === -1 && (this.Qw.addCls("d-none"), Ext.get("sr-contact-add-sth").getStyle("top")));
  },
  Fva: function (c) {
    var h = this.getEl().select(".btn-add"),
        f = this.getEl().child("#sr-contact-add-sth");
    h.toggleCls("active");
    f.toggleCls("d-none");
    this.fireEvent(this.sZ[c], this);
  }
});