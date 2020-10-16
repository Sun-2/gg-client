Ext.define(E.models.Ya, {
  extend: E.models.Xn,
  AL: !1,
  statics: {
    groups: {
      Og: 1,
      UCa: 2,
      tA: 3,
      aza: 4,
      yA: 5
    }
  },
  $p: {
    advert: "01",
    talk_to_me: "01",
    avail: "01",
    busy: "01",
    dnd: "01",
    conference: "01",
    invisible: "01",
    not_avail: "05",
    hidden: "05",
    blocked: "06",
    ignored: "06"
  },
  Tia: ["ShowName", "uin", "FlagFriend", "NoArchive", "FirstName", "LastName", "Email", "Phone", "MobilePhone", "HomePhone", "WwwAddress"],
  types: {
    contact: 1,
    dummycontact: 2,
    conference: 4,
    hugga: 8,
    anonymous: 16
  },
  oe: {
    dx: 1,
    games: 2,
    conference: 4,
    Kka: 16,
    rH: 32,
    Ry: 64
  },
  jx: {
    contact: 0,
    dummycontact: 0,
    conference: 0,
    hugga: 0,
    anonymous: 0
  },
  xz: "data",
  T8: {
    1: "profile/{0}",
    2: "contact/{0}",
    4: "conference-profile/{0}",
    8: "contact/{0}"
  },
  fields: [{
    name: "uin",
    type: "string",
    persist: !1
  }, {
    name: "type",
    type: "int",
    persist: !1,
    convert: function (c) {
      typeof c === "string" && (c = {
        user: E.models.Ya.prototype.types.contact
      }[c] || c);
      return typeof c === "string" ? E.models.Ya.prototype.types.contact : c;
    }
  }, {
    name: "ShowName",
    type: "string",
    persist: !1
  }, {
    name: "cid",
    type: "int",
    persist: !1
  }, {
    name: "gid",
    type: "int",
    persist: !1
  }, {
    name: "duplicated",
    type: "boolean",
    persist: !1
  }, {
    name: "visible",
    type: "boolean",
    persist: !1
  }, {
    name: "extdata",
    type: "auto",
    persist: !1
  }, {
    name: "protoInfo",
    type: "auto",
    persist: !1,
    convert: function (c) {
      c.status = typeof c.status === "undefined" ? "not_avail" : E.models.Ya.prototype.$p[c.status] ? c.status : "avail";
      return c;
    }
  }, {
    name: "sortInfo",
    type: "auto",
    persist: !1
  }, {
    name: "aliases",
    type: "auto",
    persist: !1,
    "default": m
  }, {
    name: "primaryUin",
    type: "auto",
    persist: !1,
    "default": m
  }, {
    name: "meta",
    type: "auto",
    persist: !1
  }],
  constructor: function (c, h) {
    var f = this.WL(c),
        c = Ext.Object.merge({}, c),
        c = Ext.Object.merge(c, f.data);
    c.meta = f.meta;
    c.uin = c.uin || 0;

    if (!c.type) {
      c.type = c.uin > 0 ? this.types.contact : this.types.dummycontact;
    }

    c.duplicated = c.duplicated || !1;
    c.gid = c.gid || 2;
    c.visible = c.visible === !1 ? !1 : !0;
    c.sortInfo = c.sortInfo || {};
    c.extdata = c.extdata || {};
    c.protoInfo = c.protoInfo || {};

    if (c.type === this.types.conference) {
      c.protoInfo.avatar = 1;
    }

    this.jx.contact = this.oe.dx | this.oe.games | this.oe.conference | this.oe.Kka | this.oe.rH | this.oe.Ry;
    this.jx.dummycontact = this.oe.Ry;
    this.jx.hugga = this.oe.Ry;
    this.callParent([c, h]);
  },
  c4: function (c) {
    if (!this.$p[c]) {
      return "05";
    }

    return this.$p[c];
  },
  Ola: function (c) {
    var f = typeof c.visible === "undefined" ? this.data.visible : c.visible,
        c = Ext.merge(c, this.data);
    return [!f | 0, this.Lla(c.gid), this.c4(c.protoInfo ? c.protoInfo.status : "not_avail"), c.ShowName, c.uin].join("-");
  },
  Hma: function (c) {
    var h = typeof c.duplicated === "undefined" ? this.data.duplicated : c.duplicated,
        f = typeof c.visible === "undefined" ? this.data.visible : c.visible,
        c = Ext.merge(c, this.data);
    return [!f | 0, h | 0, this.Mla(), this.ala(c), this.c4(c.protoInfo ? c.protoInfo.status : "not_avail"), c.ShowName, c.cid].join("-");
  },
  Lla: function (c) {
    return Ext.String.leftPad(c, 5, "0");
  },
  Mla: function () {
    if (this.get("gid") == 10004) {
      return 2;
    } else {
      if (this.get("gid") == 10003) {
        return 1;
      }
    }

    return 0;
  },
  ala: function (c) {
    if (c.extdata && c.extdata.gids) {
      if (Ext.Array.indexOf(c.extdata.gids, 3) !== -1) {
        return "0";
      }

      if (Ext.Array.indexOf(c.extdata.gids, 4) !== -1) {
        return "2";
      }
    }

    return "1";
  },
  cpa: function () {
    this.set("type", this.types.anonymous);
    this.get("cid") === 0 && this.set("ShowName", Ext.String.format(E.lang.VA, this.get("uin")));
    this.get("protoInfo").description = this.get("protoInfo").status === "not_avail" ? E.lang.qO : E.lang.UA;
  },
  Gva: function () {
    this.get("protoInfo").description = E.lang.UA;
  },
  set: function (c, h) {
    if (("extdata" === c || "protoInfo" === c) && Ext.isObject(h)) {
      this.data[c] = Ext.Object.merge(this.data[c] || {}, h), "protoInfo" === c && Ext.isObject(h) && h.anonymous && (this.xm() ? this.Gva() : this.cpa());
    } else {
      if (typeof c === "string" && this.get(c) === h) {
        return;
      }
    }

    this.xm() && c === "ShowName" && this.get("cid") === 0 && (h = Ext.String.format(E.lang.VA, this.get("uin")));

    if (!this.xm() || !(c === "type" && h === "user")) {
      this.data.sortInfo = this.data.sortInfo || {};

      if (typeof c !== "object") {
        this.get("type") == this.types.dummycontact && c === "uin" && this.set("type", this.types.contact);
        var f = {};
        f[c] = h;
        this.Zva(f);
        delete f;
      }

      this.callParent(arguments);
    }
  },
  Zva: function (c) {
    this.data = this.data || {
      sortInfo: {}
    };
    this.data.sortInfo.stars = this.Hma(c);
    this.data.sortInfo.groups = this.Ola(c);
  },
  Uj: function (c) {
    return this.data.sortInfo[c] || "";
  },
  getDisplayName: function () {
    var c = this.get("extdata").Hn + " " + this.get("extdata").Sn,
        f = this.get("ShowName");
    return f ? f : c ? c : this.get("uin");
  },
  Aoa: function () {
    return this.get("protoInfo").status == "invisible" || this.get("protoInfo").status == "not_avail" ? !1 : !0;
  },
  xh: function () {
    return this.get("type") === this.types.dummycontact ? Ext.String.format(this.T8[this.get("type")], this.get("cid")) : Ext.String.format(this.T8[this.get("type")], this.get("uin"));
  },
  rm: function () {
    var c = this.get("extdata").gids;
    return c && Ext.Array.indexOf(c, 1) !== -1 ? !0 : !1;
  },
  Js: function (c) {
    var f = this.get("extdata").gids;
    return f && Ext.Array.indexOf(f, c) !== -1 ? !0 : !1;
  },
  rCa: function () {
    return Ext.Array.contains(this.get("extdata").gids, 2);
  },
  Nla: function (c) {
    var h = {},
        f = this.get("extdata").gids;
    c && c.length && f && f.length ? f.indexOf(1) === -1 && c.indexOf(1) !== -1 ? (h.rl = [1], h.Xt = [], h.cm = f, h.cm = Ext.Array.remove(h.cm, 1) || []) : f.indexOf(1) !== -1 && c.indexOf(1) === -1 ? (h.rl = c, h.rl = Ext.Array.remove(h.rl, 1) || [], h.Xt = [], h.cm = [1]) : (h.rl = Ext.Array.difference(c, f), h.Xt = Ext.Array.intersect(c, f), h.cm = Ext.Array.difference(f, c)) : (h.rl = [], h.Xt = c, h.cm = []);
    return h;
  },
  kpa: function () {
    this.AL = !0;
  },
  WK: x("AL"),
  UN: function () {
    this.AL = !1;
  },
  jy: function () {
    return C.k().pg.getTime();
  },
  Mw: function (c) {
    var f = this.get("aliases"),
        f = f || [];
    -1 === Ext.Array.indexOf(f, c) && (f.push(c), this.set("aliases", f));
  },
  mta: function (c) {
    this.set("primaryUin", c);
  },
  bK: function () {
    return this.get("primaryUin");
  },
  nna: function (c) {
    if (m === this.get("aliases")) {
      return !1;
    }

    return Ext.Array.indexOf(this.get("aliases"), c) !== -1;
  },
  xCa: function () {
    return Ext.Array.indexOf(this.get("extdata").gids, this.statics().groups.yA) !== -1;
  },
  Eoa: function () {
    var c = this.stores[0];
    return this.get("gid") === c.proxy.reader.Es(this.statics().groups.yA);
  },
  Rg: function () {
    return this.get("type") === E.models.Ya.prototype.types.hugga;
  },
  xoa: function () {
    return this.get("type") === E.models.Ya.prototype.types.dummycontact;
  },
  f5: function () {
    return this.get("type") === E.models.Ya.prototype.types.contact && this.get("uin") && this.get("uin") != 0 && this.get("uin") != "";
  },
  zm: function () {
    return this.get("type") === E.models.Ya.prototype.types.conference;
  },
  $K: function () {
    return this.get("extdata") && typeof this.get("extdata").FlagFriend !== "undefined" && this.get("extdata").FlagFriend == 0;
  },
  xm: function () {
    return this.get("type") === E.models.Ya.prototype.types.anonymous;
  },
  WL: function (c) {
    var h = {},
        f = {};
    Ext.Object.each(c, function (e, g) {
      if (e === "extdata") {
        var w = this.WL(g);
        w.data.gids = g.gids;
        h.extdata = w.data;
        f = Ext.Object.merge(f, w.meta);
      } else {
        if (Ext.Array.indexOf(this.Tia, e) !== -1) {
          if (Ext.isArray(g)) {
            var u = [],
                o = [];
            Ext.Array.each(g, function (l) {
              u.push(l.value);
              o.push(l);
            });
            h[e] = u;
            f[e] = o;
          } else {
            h[e] = g.value, f[e] = g;
          }
        } else {
          h[e] = g;
        }
      }
    }, this);
    return {
      data: h,
      meta: f
    };
  },
  h9: function (c) {
    c = this.WL(c);
    delete this.data.meta;
    delete this.data.extdata.Email;
    delete this.data.extdata.Phone;
    delete this.data.extdata.HomePhone;
    delete this.data.extdata.MobilePhone;
    delete this.data.extdata.WwwAddress;
    delete this.data.extdata.NoArchive;
    delete this.data.extdata.FlagFriend;
    this.set("meta", c.meta);
    this.set(c.data);
  },
  Ff: function () {
    var c = this.get("extdata");

    if ("undefined" !== typeof c.Email && (c = c.Email, Ext.isArray(c) && c.length > 0)) {
      return c[0];
    }

    return m;
  },
  YJ: function () {
    var c = this.get("extdata");

    if ("undefined" !== typeof c.MobilePhone && (c = c.MobilePhone, Ext.isArray(c) && c.length > 0)) {
      return c[0];
    }

    return m;
  },
  km: function (c) {
    var f = !1;
    Ext.Object.each(this.types, function (e, b) {
      this.get("type") === b && (f = (this.jx[e] & c) === c);
    }, this);
    return f;
  }
});