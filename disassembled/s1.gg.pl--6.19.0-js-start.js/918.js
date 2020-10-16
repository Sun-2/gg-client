Ext.define(E.controllers.oD, {
  extend: C.core.controllers.QG,
  avatar: m,
  ECa: m,
  fd: m,
  notifications: m,
  kA: m,
  od: m,
  sba: 30000,
  tba: 60000,
  constructor: function (c) {
    c = c || {};
    c.eh = Ext.create(C.k().config.eh);
    this.callParent(arguments);
  },
  init: function () {
    var c = Ext.data.StoreManager.lookup("ContactsStore"),
        f = Ext.data.StoreManager.lookup("InstancesStore");
    this.callParent(arguments);
    this.df = f;
    this.la = c;
    C.k().og.on("invitations/list", this.Wja, this);
    this.avatar = Ext.create(E.Kd.xn, {
      renderTo: "sr-avatar-widget",
      src: C.k().zc({
        uin: 16425,
        size: 50
      }),
      fa: C.k().fa,
      ta: C.k().ta
    });
    this.ff = C.k().ff;
    this.on("changeownerdata", this.avatar.kx, this.avatar);
    this.on("changeownerdata", this.ff.kx, this.ff);
    this.ia = C.k().ia;
    this.ta = C.k().ta;
    this.ta.on("cantconnect", function () {
      Ext.get("sr-subheader").removeCls("sr-preloader");
      Ext.get("sr-main").removeCls("sr-preloader");
      Ext.get("navbar-blocker").addCls("off");
    }, this);
    this.ta.on("connected", function () {
      Ext.get("navbar-blocker").addCls("off");
      Ext.select(".sr-preloader").removeCls("sr-preloader");
    }, this);
    this.fd = Ext.create(E.f.layout.gd.bb, {
      renderTo: "sr-webgg-contacts",
      la: c,
      Yd: !0,
      Id: !0,
      config: C.k().ob("contacts")
    });
    this.notifications = Ext.create(E.f.layout.va.Zc, {
      renderTo: "sr-notifications-widget"
    });
    this.fd.on("contactdblclicked", function (g, n) {
      try {
        this.fd && this.fd.Id && this.fd.Id.MI();
      } catch (h) {}

      n.get("type") === n.types.dummycontact || n.Rg() ? C.Ca("contact/" + n.get("cid")) : C.k().fc(n);
    }, this);
    this.fd.on("contactclicked", function (g, n) {
      var h = n.get("type");
      n.get("uin");
      C.k().fa.get("uin");
      h === n.types.contact || h === n.types.anonymous ? C.Ca("profile/" + n.get("uin"), {
        record: n
      }) : h === n.types.dummycontact || h === n.types.hugga ? C.Ca("contact/" + n.get("cid"), {
        record: n
      }) : h === n.types.conference && C.Ca("conference-profile/" + n.get("uin"), {
        record: n
      });
    }, this);
    this.fd.on("addgroup", function () {
      C.k().B6();
    }, this);
    this.fd.on("addconference", function () {
      C.k().Ti();
    }, this);
    this.fd.on("addcontact", function (g) {
      var g = Ext.getCmp("search-container"),
          o = Ext.fly("sr-contact-list-search").select(".search-input").first().getValue(),
          h = {
        JL: !1,
        GM: o,
        vCa: !0
      };

      if (C.ca.xa.op(o)) {
        var p = this.la.wh(0) || [];
        Ext.Array.each(p, function (e) {
          if (e !== !1 && e.Ff() == o) {
            return h.JL = !0, !1;
          }
        });
      } else {
        if (this.la.Ba(o)) {
          p = this.la.Ba(o), h.onlist = p !== m ? !0 : !1;
        }
      }

      g && (g.uM(1), h.JL || (g.$z(h.GM), g.aq(0)));
      h.JL ? C.Ca("search") : C.Ca("search", {
        contact: h
      });
    }, this);
    this.lfa();
    this.Afa();
    this.wfa();
  },
  execute: function (c) {
    this.callParent(arguments);
    gtag && this.Bi && gtag("event", "screen_view", {
      screen_name: "/" + this.Bi.name
    });

    if (this.od === m) {
      this.od = this.od || new Ext.util.TaskRunner(), this.kA = {
        run: this.Qta,
        scope: this,
        interval: this.sba
      }, this.od.start(this.kA);
    }

    this.Bi && C.k().Iy.add(c.token, this.Bi.name);
  },
  Qta: function () {
    if (!C.k().kN) {
      this.od.stop(this.kA), this.kA = this.od = m, Ext.defer(function () {
        C.k().Ww !== m && !C.k().qma("splash") && (C.k().UM("splash", !0), C.k().lqa());
      }, this.tba, this);
    }
  },
  Afa: function () {
    this.fd.on("viewchange", this.lia, this, this.fd);
  },
  wfa: function () {
    this.ia.on("propagateviewchange", this.mia, this);
  },
  lfa: function () {
    this.ta.on("instanceschange", this.Xha, this);
    this.ta.on("updateownerdata", this.Eia, this);
  },
  mia: function (c, p) {
    var o, n, f;
    f = p.contactView.showDescription == "0" === !0 ? "hide" : "show";
    p.listView.type == "groups" && (n = "groups");
    p.listView.type == "favorites" && (n = "stars");
    p.contactView.avatar == "right" && (o = "avatars-right");
    p.contactView.avatar == "left" && (o = "avatars-left");
    p.contactView.avatar == "none" && (o = "no-avatars");
    this.fd.xf(n);
    this.fd.$H(o);
    this.fd.Wfa(f);
    this.fd.Tua(p.listView.showSynced);
    this.fd.dga(p);
  },
  lia: function (c, p, o, n, f) {
    this.ia.lsa(p, o, n, f);
  },
  Xha: function (c, h) {
    var f = h.instances,
        h = [];
    Ext.Array.each(f, function (e) {
      h.push({
        instanceID: e.T4,
        loginDate: Ext.Date.format(e.bpa, "Y-m-d H:i"),
        loginTime: e.x5,
        ip: e.SK,
        name: e.name,
        userAgent: e.userAgent
      });
    }, this);
    this.df.removeAll();
    this.df.loadData(h);
  },
  Eia: function () {
    var c = {
      uin: this.fa.get("uin")
    };
    E.api.dl.uy(c, {
      fn: function (e) {
        e && (this.fa.set("label", e.result.users["0"].label._content), this.fa.set("labelSrc", e.result.users["0"].labelSrc._content), this.fireEvent("changeownerdata", this));
      },
      scope: this
    }, {
      fn: t(),
      scope: this
    });
  },
  kd: function () {
    if (!Ext.isEmpty(this.initConfig.view)) {
      this.view = Ext.create(this.initConfig.view, {
        renderTo: "sr-main-center"
      });
    }
  },
  ZDa: t(),
  Wja: function (c) {
    Ext.data.StoreManager.lookup("InvitationsMineStore").Uoa(c.content.items);
  }
});