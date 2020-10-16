Ext.define(E.stores.Lh.KQ, {
  extend: "Ext.data.reader.Json",
  alias: "reader.ggpl.contacts.json",
  groups: m,
  Ah: m,
  sA: {
    3: 3,
    5: 5
  },
  Oj: m,
  b2: {
    GGNumber: "uin"
  },
  Sia: ["Email", "Phone", "MobilePhone", "HomePhone"],
  wAa: function (c, h) {
    var f = [];
    Ext.each(c, function (e) {
      f = f.concat(this.Hka(e, h));
    }, this);
    return f;
  },
  extractData: function (c, h) {
    var f = [];
    Ext.each(c, function (e) {
      f = f.concat(this.extractValues(e));
    }, this);
    Ext.each(h, function (e) {
      f = f.concat(this.extractValues(e));
    }, this);
    return f;
  },
  Hka: function (c, n) {
    var l = [],
        f = m,
        f = this.b5(c);
    c.gids = Ext.Array.unique(c.gids || c.extdata.gids);
    f = this.wH(n, f, c);
    l.push(f);
    return l;
  },
  prepareData: function (c) {
    Ext.each(c.attributes, function (b) {
      Ext.Array.indexOf(this.Sia, b.type) !== -1 ? (typeof c[b.type] === "undefined" && (c[b.type] = []), c[b.type].push(b)) : typeof this.b2[b.type] !== "undefined" ? c[this.b2[b.type]] = {
        aid: b.aid,
        value: b.value
      } : c[b.type] = {
        aid: b.aid,
        value: b.value
      };
    }, this);
    delete c.attributes;
    return c;
  },
  extractValues: function (c) {
    var c = this.prepareData(c),
        p = [],
        o = m;
    this.Oj = {};
    var n = this.b5(c);
    c.gids = Ext.Array.unique(c.gids);
    var f = Ext.Array.indexOf(c.gids, 1);
    f != -1 ? (c.status = "ignored", o = this.wH(c.gids[f], n, c), this.Oj[c.uin + c.cid] ? o.duplicated = !0 : (this.Oj[c.uin + c.cid] = o, o.duplicated = !1), p.push(o)) : Ext.each(c.gids, function (b) {
      o = this.wH(b, n, c);
      this.Oj[c.uin + c.cid] ? o.duplicated = !0 : (this.Oj[c.uin + c.cid] = !0, o.duplicated = !1);
      p.push(o);
    }, this);
    Ext.Array.each(p, function (e, h) {
      e.duplicated = Ext.Array.contains(e.extdata.gids, 3) ? e.gid === 3 ? !1 : !0 : Ext.Array.contains(e.extdata.gids, 5) && p.length > 1 ? e.gid === 10003 ? !0 : !1 : h === 0 ? !1 : !0;
    }, this);
    this.Oj = {};
    return p;
  },
  wH: function (c, h, f) {
    h = {};
    c === 1 && (h.visible = !1);
    f.cid && (h.cid = f.cid);
    f.uin && (h.uin = f.uin);
    f.ShowName && (h.ShowName = f.ShowName);
    c && (h.gid = this.groups[c].gid);
    f.duplicated && (h.duplicated = f.duplicated);

    if (f.Hn || f.Sn || f.Email || f.HomePhone || f.MobilePhone || f.gids || f.uB || f.WwwAddress || f.FlagFriend || f.NoArchive) {
      h.extdata = {}, typeof f.NoArchive !== "undefined" ? f.NoArchive.value = parseInt(f.NoArchive.value, 10) : f.NoArchive = {
        value: 0
      }, h.extdata.NoArchive = f.NoArchive, c = "not_avail", f.status ? c = f.status : f.ConferenceID && (c = "conference"), h.protoInfo = {}, h.protoInfo = f.protoInfo || {
        status: c,
        friend: typeof f.FlagFriend !== "undefined" && f.FlagFriend.value === "1" ? 1 : 0
      }, typeof f.gids !== "undefined" && (h.extdata.gids = f.gids), typeof f.Hn !== "undefined" && (h.extdata.Hn = f.Hn), typeof f.Sn !== "undefined" && (h.extdata.Sn = f.Sn), typeof f.Email !== "undefined" && (h.extdata.Email = f.Email), typeof f.HomePhone !== "undefined" && (h.extdata.HomePhone = f.HomePhone), typeof f.MobilePhone !== "undefined" && (h.extdata.MobilePhone = f.MobilePhone), typeof f.Phone !== "undefined" && (h.extdata.Phone = f.Phone), typeof f.uB !== "undefined" && (h.extdata.uB = f.uB), typeof f.WwwAddress !== "undefined" && (h.extdata.WwwAddress = f.WwwAddress), typeof f.FlagFriend !== "undefined" && (h.extdata.FlagFriend = f.FlagFriend), typeof f.NoArchive !== "undefined" && (h.extdata.NoArchive = f.NoArchive);
    }

    if (f.ConferenceID) {
      h.uin = f.ConferenceID, h.type = E.models.Ya.prototype.types.conference;
    }

    f.ConferenceID && (h.ConferenceID = f.ConferenceID);

    if (f.hasUnknownGGAccount && this.ys(f.hasUnknownGGAccount) === "1") {
      h.type = f.uin && this.ys(f.uin) !== "" && this.ys(f.uin) !== "0" ? E.models.Ya.prototype.types.contact : E.models.Ya.prototype.types.hugga;
    } else {
      if (f.uin && this.ys(f.uin) !== "" && this.ys(f.uin) !== "0") {
        h.type = E.models.Ya.prototype.types.contact;
      }
    }

    return h;
  },
  b5: function (c) {
    return Ext.Array.contains(c.gids ? c.gids : c.extdata.gids, 3);
  },
  eta: function (c) {
    this.groups = {};
    this.Ah = [];
    this.dFa = [];
    this.nea(c);
    Ext.iterate(c, function (e) {
      typeof this.groups[e.gid] === "undefined" && this.Br(e);
    }, this);
    this.kn();
  },
  nea: function (c) {
    c.length && (Ext.iterate(c, function (e) {
      this.Es(e);
      typeof this.groups[e.gid] === "undefined" && this.Br(e);
    }, this), this.kn());
  },
  Br: function (c) {
    var f = this.Es(c);
    this.Ah.push({
      name: c.name,
      gid: c.gid
    });
    this.groups[c.gid] = {
      name: c.name,
      gid: f,
      type: c.type,
      expanded: c.expanded,
      Ap: c.gid
    };
  },
  Yfa: function (c) {
    this.groups[c.gid].name = c.name;
    this.groups[c.gid].expanded = c.expanded;
    Ext.Array.each(this.Ah, function (b) {
      if (b.gid === c.gid) {
        return b.name = c.name, !1;
      }
    }, this);
  },
  Eja: function (c) {
    c = ~~c;
    delete this.groups[c];
    Ext.Array.each(this.Ah, function (b) {
      if (b.gid === c) {
        return Ext.Array.remove(this.Ah, b), !1;
      }
    }, this);
  },
  kn: function () {
    this.Ah.sort(function (c, h) {
      var f = 0;
      c.gid === 1 ? f = 1 : h.gid === 1 ? f = -1 : c.gid === 4 ? f = 1 : h.gid === 4 ? f = -1 : c.gid === 5 ? f = 1 : h.gid === 5 ? f = -1 : c.gid === 2 ? f = 1 : h.gid === 2 ? f = -1 : c.gid === 3 ? f = -1 : h.gid === 3 ? f = 1 : c.gid !== h.gid && (f = c.gid > h.gid ? 1 : -1);
      return f;
    });
  },
  Es: function (c) {
    c = Ext.isObject(c) ? c.gid : c;

    if (c == "4") {
      return 10004;
    } else {
      if (c == "2") {
        return 10002;
      } else {
        if (c == "5") {
          return 10003;
        }
      }
    }

    return typeof this.sA[c] !== "undefined" ? this.sA[c] : c + 10;
  },
  Fs: function (c) {
    c = Ext.isObject(c) ? c.gid : c;

    if (c == "10004") {
      return 4;
    } else {
      if (c == "10002") {
        return 2;
      } else {
        if (c == "10003") {
          return 5;
        }
      }
    }

    return typeof this.sA[c] !== "undefined" ? this.sA[c] : c - 10;
  },
  ys: function (c) {
    return c.value;
  }
});