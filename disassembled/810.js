Ext.define(E.models.Ma.Event, {
  extend: E.models.Xn,
  a3: {
    fya: "status",
    Sxa: "photo",
    XY: "video",
    Jxa: "link"
  },
  gga: {
    S9: "aolChannel"
  },
  A2: {
    ub: "aol"
  },
  xH: {
    NG: "text",
    iba: "image",
    XY: "video"
  },
  xz: "data",
  fields: [{
    name: "id",
    type: "string",
    persist: !1
  }, {
    name: "family",
    type: "string",
    persist: !1
  }, {
    name: "source",
    type: "string",
    persist: !1
  }, {
    name: "sender",
    type: "auto",
    persist: !1
  }, {
    name: "createdTime",
    type: "string",
    persist: !1
  }, {
    name: "updatedTime",
    type: "string",
    persist: !1
  }, {
    name: "attachments",
    type: "auto",
    persist: !1
  }, {
    name: "grouped",
    type: "string",
    persist: !1
  }, {
    name: "message",
    type: "string",
    persist: !1
  }, {
    name: "owner",
    type: "auto",
    persist: !1
  }, {
    name: "channels",
    type: "auto",
    persist: !1
  }, {
    name: "header",
    type: "auto",
    persist: !1
  }, {
    name: "dataSourceType",
    type: "string",
    persist: !1
  }],
  constructor: function (c, p) {
    c.dataSourceType = c.dataSourceType || "aol";
    c.attachments = c.attachments || [];
    c.channels = c.channels || [];
    c.flags = c.flags || {};
    c.flags = this.fpa(c.flags);

    for (var o = c.attachments.length - 1; o >= 0; o--) {
      for (var n = c.attachments[o], f = n.length - 1; f >= 0; f--) {
        if (typeof n[f].link != "undefined" && n[f].link !== m) {
          n[f].link = C.ca.xa.Xe(n[f].link);
        }
      }

      c.attachments[o] = n;
    }

    this.callParent([c, p]);
  },
  fpa: function (c) {
    var f = {};
    Ext.each(c, function (e) {
      f[e.name] = e.value;
    }, this);
    return f;
  },
  xh: function () {
    for (var c, w = this.get("attachments"), q = 0, o = w.length; q < o; q++) {
      for (var f = w[q], y = 0, u = f.length; y < u; y++) {
        if (c = f[y].link, typeof c != "undefined") {
          break;
        }
      }
    }

    return c;
  },
  mla: function () {
    for (var c = this.get("attachments"), n = [], l = 0; l < c.length; l++) {
      var f = {};
      Ext.each(c[l], function (e) {
        Ext.merge(f, e);
      }, this);
      f.type = this.get("family");
      this.get("params") && this.get("params")["@originEvent"] && (f.type = this.get("params")["@originEvent"].family);
      f.description = f.body;
      f.host = C.ca.xa.ce(f.link);

      switch (f.type) {
        case "video":
          f.thumbnail = f.preview;
          break;

        default:
          f.thumbnail = Ext.isObject(f.src) ? f.src["80x60"] : f.src;
      }

      n.push(f);
    }

    return n;
  }
});