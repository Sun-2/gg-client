Ext.define(E.models.rf, {
  extend: E.models.Xn,
  fields: [{
    name: "id",
    type: "string"
  }, {
    name: "to",
    type: "string"
  }, {
    name: "priority",
    type: "int"
  }, {
    name: "expiresAt",
    type: "string"
  }, {
    name: "subtype",
    type: "string"
  }, {
    name: "target",
    type: "string"
  }, {
    name: "template",
    type: "string"
  }, {
    name: "args",
    type: "auto"
  }, {
    name: "state",
    type: "string"
  }, {
    name: "appType",
    type: "int"
  }, {
    name: "appName",
    type: "string"
  }, {
    name: "action",
    type: "string"
  }, {
    name: "releaseAt",
    type: "string"
  }, {
    name: "sender",
    type: "auto"
  }, {
    name: "showOnTray",
    type: "boolean"
  }, {
    name: "local",
    type: "boolean",
    defaultValue: !1
  }, {
    name: "groupDate",
    type: "int",
    defaultValue: 19700101
  }, {
    name: "highlight",
    type: "boolean",
    defaultValue: !1
  }, {
    name: "viewed",
    type: "boolean",
    defaultValue: !1
  }],
  constructor: function () {
    this.callParent(arguments);

    if (this.get("releaseAt")) {
      var c = new Date(this.get("releaseAt") * 1000);
      this.set("groupDate", parseInt(Ext.Date.format(c, "Ymd")));
    }
  },
  Op: function (c, h) {
    var h = typeof h == "undefined" ? !0 : h,
        f = this.get("state");

    if (f === "NS_RELEASED" && c == "NS_POSTPONED" || f === "NS_RELEASED" && c == "NS_READ" || f === "NS_RELEASED" && c == "NS_DELETED" || f === "NS_POSTPONED" && c == "NS_READ" || f === "NS_POSTPONED" && c == "NS_DELETED" || f === "" && c == "NS_READ" || f === "" && c == "NS_DELETED") {
      return this.set("state", c), h && !this.isLocal() && E.api.Zc.Bk({
        id: this.getId(),
        state: c
      }), !0;
    }

    return !1;
  },
  lN: function (c, f) {
    this.beginEdit();
    this.set(c, f);
    this.endEdit(!0);
  },
  ms: function () {
    E.ca.nB.jL(this.get("subtype"), this.get("target"), this.get("action"), this) ? this.Op("NS_POSTPONED") : (this.Op("NS_READ"), this.vg());
  },
  isLocal: function () {
    return this.get("local");
  },
  set: function (c, f) {
    this.hfa(c, this.get(c), f);
    this.callParent(arguments);
  },
  hfa: function (c, h, f) {
    this.callStore("beforeEdit", [c, h, f]);
  },
  statics: {
    t_: function (c, f) {
      if (c.get("releaseAt") < f.get("releaseAt")) {
        return 1;
      } else {
        if (c.get("releaseAt") > f.get("releaseAt")) {
          return -1;
        }
      }

      return 0;
    },
    compare: function (c, n) {
      var l = c.get("priority"),
          f = n.get("priority");

      if (l == f) {
        if (c.get("releaseAt") < n.get("releaseAt")) {
          return 1;
        } else {
          if (c.get("releaseAt") > n.get("releaseAt")) {
            return -1;
          }
        }

        return 0;
      }

      return l > f ? 1 : -1;
    }
  }
});