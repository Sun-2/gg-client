Ext.define(E.controllers.Sv, {
  extend: E.controllers.nc,
  name: "default",
  Gh: "contacts",
  initConfig: {
    view: E.f.sb.YE
  },
  Ha: m,
  execute: function (c) {
    this.callParent(arguments);
    C.k().mf(C.k().config.ab.ph);
    Ext.isObject(c.state) && typeof c.state.record !== "undefined" ? this.fc(c.state.record) : c.state && c.state.fc ? this.fc.apply(this, c.state.fc) : C.k().fireEvent("talks:load");
    C.k().Lc.show();
    var n = Ext.getStore("NotificationsStore"),
        l = this.view.Fo.getActiveItem();
    n.bJ(this.DL, this);
    n.Ow(this.DL, this);
    C.k().Ja.fva();
    l && l.Je && l.bM();
    this.Ha = Ext.getStore("UsersStore");

    if (!this.Moa) {
      C.k().Rra(), this.Moa = !0;
    }

    var f = this.view.Fo.getActiveItem();
    f && (f.type === E.f.layout.Ga.Zu.prototype.ud.Hc && f.Tm(), setTimeout(function () {
      f.jt();
    }, 500));
  },
  rg: function () {
    this.view.Bga();
    var c = this.view.Fo.getActiveItem();

    if (c && c.Je) {
      !c.Nb.Joa && (c.Nb.uN = 0);
    }

    this.callParent();
    C.k().Lc.hide();
    C.k().Ja.bla();
    C.k().Ja.vna();
    Ext.getStore("NotificationsStore").oM(this.DL, this);
  },
  fc: function (L, G, D, B) {
    if (L) {
      L instanceof Array || (L = [L]);

      for (var y = 0, o = L.length; y < o; y++) {
        var f = L[y];
        this.Ha || Ext.getStore("UsersStore");
        var c = C.k().Ja.hd(),
            Q = !1,
            N = m,
            I = c.getItem(f.get("uin"));
        C.k().Ja.mk(f.get("uin"));

        if (!I && (I = C.k().Ja.MJ(f.get("uin")), c.getItem(f.get("uin")) || c.qo(I), f && f.get("protoInfo") && f.get("protoInfo").bot && f.get("protoInfo").botData && f.get("protoInfo").botData.FZ)) {
          Q = !0, N = f.get("protoInfo").botData.FZ;
        }

        I = c.getItem(f.get("uin"));
        D && (I.expand(), C.k().fireEvent("chat:activate"));
        !B && !Q ? G && I.W7(G) : (G = N || G) && I.sendMessage(G);
      }
    }
  },
  DL: function (c, h) {
    if (h.get("subtype") == "chat/av") {
      var f = C.k().Ja.hd();
      f && f.getItem(h.get("sender").id) && h.set("showOnTray", !1);
    }

    if (h.get("subtype") == "chat/message") {
      return !1;
    }
  }
});