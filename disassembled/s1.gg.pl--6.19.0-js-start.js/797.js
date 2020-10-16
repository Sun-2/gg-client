Ext.define(E.models.xc, {
  extend: "Ext.data.Model",
  BS: 32768,
  types: {
    message: "message",
    ZCa: "notification",
    a9: "undelivered",
    hZ: "aclBilateralError"
  },
  Bf: {
    Ih: 1,
    DK: 2
  },
  fields: [{
    name: "uin",
    type: "number"
  }, {
    name: "message",
    type: "string"
  }, {
    name: "user",
    type: "auto"
  }, {
    name: "type",
    type: "string",
    defaultValue: "message"
  }, {
    name: "parsed",
    type: "boolean",
    defaultValue: !1
  }, {
    name: "attachments",
    type: "auto"
  }, {
    name: "images",
    type: "auto"
  }, {
    name: "insecure",
    type: "boolean",
    defaultValue: !1
  }, {
    name: "messageId",
    type: "string"
  }, {
    name: "uid",
    type: "number"
  }, {
    name: "file_name",
    type: "string"
  }, {
    name: "file_frame",
    type: "string"
  }, {
    name: "time",
    type: "string"
  }, {
    name: "conferenceId",
    type: "string"
  }, {
    name: "read",
    type: "boolean",
    defaultValue: !1
  }, {
    name: "extraData",
    type: "auto",
    defaultValue: {}
  }, {
    name: "readTimestamp",
    type: "string"
  }, {
    name: "delivered",
    type: "boolean",
    defaultValue: !1
  }, {
    name: "direction",
    type: "number"
  }],
  constructor: function (c) {
    c.user = Ext.getStore("ContactsStore") && Ext.getStore("ContactsStore").Ba(c.uin) ? Ext.getStore("ContactsStore").Ba(c.uin) : c.uin;
    this.callParent(arguments);
    (typeof c.type === "undefined" || Ext.String.trim(c.type) === "") && this.set("type", this.types.message);

    if (c.type === this.types.message) {
      var n = c.message;
      c.images && (n = this.poa(c.images));
      var l = n;

      try {
        n = C.ca.Security.L6(M(n)), this.set("message", n);
      } catch (f) {
        this.set("insecure", !0), this.set("parsed", !0), this.set("attachments", m), f.name === "AmpersandNotEncodedError" ? this.set("message", Ext.String.format(E.lang.sS, '<a href="' + C.ca.Da.Pj() + '" >' + C.ca.Da.yla() + "</a>")) : this.set("message", Ext.String.format(E.lang.dE, '<a href="mailto:' + E.lang.bE + '" >' + E.lang.cE + "</a>")), this.get("extraData") && this.get("extraData").cid && this.get("extraData").mid && (n = this.get("extraData"), C.k().fa.get("uin") != c.uin && C.k().et.send({
          type: "incoming_text_message",
          rawMessage: n.originalMessage,
          transformedMessage: l,
          uin: C.k().fa.get("uin"),
          userAgent: navigator.userAgent || navigator.vendor,
          exception: f.name + ":" + f.message,
          messageId: n.mid,
          conversationId: n.cid
        }));
      }
    }
  },
  poa: function (c) {
    var p = this.data.message || "",
        c = c || m,
        o = [],
        n = 0,
        f = 0;
    c && c.length && Ext.each(c, function (l, h) {
      var g = h === c.length - 1,
          e = l.EH - f;
      p = p.slice(n);
      e = this.gma(p, e, g);
      e.kL.length && o.push(e.kL);
      var b = Ext.String.format("/image:{0}/", l.Af);

      if (Ext.isIE8 && l.cf > this.BS) {
        b = E.lang.NO;
      }

      o.push(b);
      g && e.z7 && o.push(e.z7);
      n = e.vqa;
      f += e.kL.length + 1;
    }, this);
    o.length && (p = o.join(""));
    return p;
  },
  gma: function (c, p, o) {
    var n = "",
        f = "";
    p > 0 && (n = c.slice(0, p));
    o && (f = c.slice(p + 1));
    return {
      vqa: p + 1,
      kL: n,
      z7: f
    };
  },
  YDa: t(),
  gpa: function () {
    this.data.read = !0;
  },
  QJ: function (c) {
    var f = this.get("extraData");

    if (!Ext.Object.getSize(f)) {
      return m;
    }

    return f[c] || m;
  },
  $J: function () {
    this.QJ("originalMessage");
    return this.QJ("originalMessage") ? this.QJ("originalMessage").text : m;
  }
});