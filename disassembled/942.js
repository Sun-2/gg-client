Ext.define(E.ea.XC, {
  extend: E.ea.pf,
  name: "ContactsAppBehavior",
  la: m,
  Oe: m,
  Y2: {
    GET_CONTACTS: function (c) {
      return this.x3(c);
    },
    GET_CONTACT: function (c) {
      return this.yd(c);
    }
  },
  constructor: function () {
    this.callParent(arguments);
    this.la = Ext.data.StoreManager.lookup("ContactsStore");
    this.Oe = Ext.data.StoreManager.lookup("UnknownContactsStore");
  },
  onAdd: function () {
    this.callParent(arguments);
    this.owner.events.contactssend || this.owner.addEvents("contactssend");
    this.boa();
  },
  onRemove: function () {
    this.callParent(arguments);
  },
  init: function () {
    this.callParent(arguments);
  },
  boa: function () {
    try {
      var c = this;
      Ext.Object.each(this.Y2, function (b) {
        this.Ic[b] = function (g) {
          try {
            return c.Y2[b].apply(c, [g]);
          } catch (e) {
            j(e);
          }
        };

        this.owner.bind(b, this.Ic[b]);
      }, this);
    } catch (f) {}
  },
  x3: function () {
    var c = {
      contacts: this.Qsa()
    };
    this.owner.fireEvent("contactssend");
    return c;
  },
  Qsa: function () {
    var c = [];
    this.la.each(function (b) {
      c.push({
        cid: b.data.cid,
        gid: b.data.gid,
        ShowName: b.data.ShowName,
        uin: b.data.uin,
        type: b.data.type,
        extdata: b.data.extdata,
        protoInfo: b.data.protoInfo
      });
    });
    return c;
  },
  yd: function (c) {
    return this.Psa(c);
  },
  Psa: function (c) {
    var f = m;
    return c == C.k().fa.get("uin") ? (f = C.k().fa, {
      label: f.get("ShowName") || f.get("nick") || f.get("label") || c,
      uin: c
    }) : this.la.Ba(c) ? (f = this.la.Ba(c), {
      label: f.getDisplayName(),
      uin: c
    }) : (f = this.Oe.Ba(c), f.on("datachanged", this.u1, this), {
      label: f.get("ShowName") || c,
      uin: c
    });
  },
  u1: function (c, f) {
    if (Ext.isString(f) && f === "ShowName" || Ext.isObject(f) && f.ShowName) {
      this.owner.post("GET_CONTACT", {
        label: c.getDisplayName(),
        uin: c.get("uin")
      }), c.un("datachanged", this.u1, this);
    }
  }
});