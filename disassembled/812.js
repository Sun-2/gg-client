Ext.define(E.models.Ue, {
  extend: "Ext.data.Model",
  sh: {
    ba: "gg/pl:",
    Cy: "gg/conference:"
  },
  xz: "data",
  fields: [{
    name: "userRefs",
    type: "auto",
    persist: !1
  }, {
    name: "id",
    type: "string",
    persist: !1
  }, {
    name: "ids",
    type: "auto",
    persist: !1
  }],
  Ha: m,
  constructor: function (c, f) {
    this.callParent([c, f]);
    this.Ha = Ext.getStore("UsersStore");
    this.WM(c.userRefs);
  },
  h0: function (c, h, f) {
    this.fireEvent("datachanged", c, h, f);
  },
  getId: function () {
    (typeof this.get("id") == "undefined" || this.get("id") == "") && this.set("id", this.fla());
    return this.get("id");
  },
  fla: function () {
    if (typeof E.models.Ue.b9 == "undefined") {
      E.models.Ue.b9 = 0;
    }

    return ++E.models.Ue.b9;
  },
  Qs: function (c) {
    var h = this.get("userRefs"),
        f = !1,
        c = "" + c;
    Ext.Array.each(h, function (b) {
      if (b.get("uin") === c || b.bK() === c || b.nna(c)) {
        return f = !0, !1;
      }
    }, this);
    return f;
  },
  pna: function (c, f) {
    return this.get("ids")[f || "gg/pl:"] === c;
  },
  WBa: function (c) {
    return this.Qs(c, this.sh.ba);
  },
  Hb: function () {
    return this.yd(this.sh.ba);
  },
  qe: function () {
    return this.yd(this.sh.Cy);
  },
  yd: function (c) {
    var f = this.Gs();

    if (!f || 0 === f.length) {
      this.Ha.fM(this, this.get("ids")[c], c), f = this.Gs();
    }

    return f[0];
  },
  Gs: function () {
    return this.get("userRefs");
  },
  WM: function (c) {
    this.Gs() && this.Gs().length && !Ext.isEmpty(this.Hb()) && this.Hb().un("datachanged", this.h0, this);
    this.set("userRefs", c);
    this.Hb().on("datachanged", this.h0, this);
  },
  WK: function () {
    return this.Hb().WK();
  },
  UN: function () {
    this.Hb().UN();
  },
  jy: function () {
    return this.Hb().jy();
  },
  qp: function () {
    return Ext.getStore("UnknownContactsStore").refs[this.Hb().get("uin")] ? !0 : !1;
  },
  zm: function () {
    return this.Hb().zm();
  }
});