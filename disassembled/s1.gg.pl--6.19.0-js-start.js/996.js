Ext.define(E.f.layout.va.Sc.kB, {
  extend: "Ext.view.View",
  itemSelector: "li.item",
  cls: "profile-last-messages-view",
  data: m,
  Pza: m,
  uin: m,
  ia: m,
  mixins: {
    ea: C.core.mixins.kb
  },
  ka: {
    ".aol-archive": function (c) {
      c.preventDefault();
      this.Nd == E.api.ub.ic.Nd.Hc ? C.Ca("aol/" + this.Hf + "/2") : C.Ca("aol/" + this.Hf + "/1");
    }
  },
  constructor: function () {
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd
    }]];
    this.da = C.k().da;
    this.ia = C.k().ia;
    this.zb = [];
    this.addEvents();
    this.on("afterrender", this.gb, this);
    this.callParent(arguments);
  },
  initComponent: function () {
    this.mixins.ea.constructor.call(this);
    this.tpl = this.da.ma("profile-last-messages-view");
    this.on("afterrender", this.gb, this);
    this.Mpa = C.k().fa.get("uin");
    this.Npa = E.lang.Se;
    this.on("refresh", this.Q_, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.mixins.ea.destroy.call(this);
    this.un("afterrender", this.gb, this);
    this.el && this.el.un("click", this.ed, this);
    this.un("refresh", this.Q_, this);
    this.callParent(arguments);
  },
  gb: function () {
    this.el.on("click", this.ed, this);
    this.cva && this.addCls("twoColumn");
  },
  Q_: function () {
    var c = [],
        f = this.store.getRange();
    Ext.each(f, function (b) {
      b = b.get("messages");
      Ext.Array.each(b, function (l) {
        if (l.senderType == 1) {
          var h = l.senderID,
              l = this.getEl().query(".sender-" + h);
          Ext.Array.each(l, function (g) {
            c.push({
              uin: h,
              zb: [{
                name: g
              }]
            });
          });
        }
      }, this);
    }, this);
    this.fireEvent("addedavatars", {
      object: c
    });
  },
  ed: function (c) {
    for (var f in this.ka) {
      if (c.getTarget(f)) {
        this.ka[f].call(this, c);
        break;
      }
    }
  },
  collectData: function () {
    var c = this.callParent(arguments),
        f = C.k().ia.ob("chat").textFormatting;
    c.fontSize = f.size;
    return c;
  },
  prepareData: function (c, q, p) {
    p && Ext.apply(c, p.getAssociatedData());
    q = [];
    p = [E.api.ub.ic.Eh.NG, E.api.ub.ic.Eh.Eca, E.api.ub.ic.Eh.H$, E.api.ub.ic.Eh.HE, E.api.ub.ic.Eh.DO, E.api.ub.ic.Eh.EO, E.api.ub.ic.Eh.rR];

    if (c.messages && c.messages.length > 0) {
      for (var o = 0; o < c.messages.length; o++) {
        Ext.Array.indexOf(p, c.messages[o].messageType) === -1 && (c.messages[o].unknown = !0);

        if (typeof c.messages[o].affectedUser === "undefined") {
          if (c.messages[o].senderID == this.Mpa) {
            c.messages[o].my = !0, c.messages[o].name = this.Npa;
          } else {
            c.messages[o].my = !1;

            if (c.messages[o].senderType && c.messages[o].senderType == 2) {
              f = E.lang.ZP;
            } else {
              var f = c.messages[o].senderID,
                  u = Ext.StoreManager.lookup("ContactsStore").Ba(f);
              u && (f = u.get("ShowName"));
            }

            c.messages[o].name = f;
          }
        } else {
          f = c.messages[o].affectedUser, (u = Ext.StoreManager.lookup("ContactsStore").Ba(f)) && (f = u.get("ShowName")), c.messages[o].affectedUserName = f;
        }

        q.push(c.messages[o]);
      }
    }

    c.messages = q;
    return c;
  },
  S8: function () {
    this.el && this.el.dom ? this.addCls("twoColumn") : this.cva = !0;
  },
  vd: t(),
  Mc: A(m)
});