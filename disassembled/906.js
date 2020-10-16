Ext.define(E.f.windows.XF, {
  extend: C.f.windows.cc,
  da: m,
  Rea: m,
  ka: m,
  pz: m,
  mixins: {
    ea: C.core.mixins.kb
  },
  constructor: function (c) {
    c = c || {};
    this.ea = c.ea || [[C.core.ea.Yc, {
      uc: C.k().sd
    }]];
    this.da = c.da || C.k().da;
    this.Lb = c.Lb;
    this.type = c.type;
    this.vl = E.api.Ob;
    this.Ad = Ext.data.StoreManager.lookup("InvitationsTheirsStore");
    this.la = Ext.getStore("ContactsStore");
    this.fa = C.k().fa;
    this.pz = E.config.a6;
    var f = "";
    c.type == this.pz.Px && (f = this.Lra());
    this.ka = {
      ".accepted-action": this.BI,
      ".rejected-action": this.oia,
      ".hidden-action": this.Wha
    };
    this.callParent([{
      Gb: f,
      Ab: !0,
      cls: "resolve-invitation-wnd",
      buttons: c.buttons
    }]);
    this.mixins.ea.constructor.call(this, c);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  na: function () {
    this.el.on("click", function (c) {
      c.preventDefault();

      for (var f in this.ka) {
        if (m !== c.getTarget(f)) {
          this.ka[f].call(this, c);
          break;
        }
      }
    }, this);
    this.As();
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.callParent();
  },
  Lra: function () {
    var c = "";
    this.MK = this.da.ma("resolve-invitation-contact-wnd");
    var h = Ext.String.format(E.lang.Dq, eht(this.Lb.sender.label));

    try {
      c = this.MK.apply({
        msg: h,
        buttons: this.Lb.body.buttons,
        sender: this.Lb.sender
      });
    } catch (f) {}

    return c;
  },
  Lf: function () {
    C.k().ue.view.on("userprofileready", this.Ng, this);
    C.k().events.usercontrollercreated && C.k().un("usercontrollercreated", this.Lf, this);
  },
  Ng: function () {
    var c = C.k().ue;
    c.view.Uqa.dla = !0;
    C.k().ue.view.un("userprofileready", this.Ng, this);
    c.BJ();
  },
  BI: function () {
    var c = Ext.create(E.models.cl);
    c.set(this.Lb);

    if (this.type == this.pz.Px) {
      c = c.get("sender").id;
      C.Ca("user-profile/" + c + "/accept-invitation");

      if (C.k().ue) {
        this.Lf();
      } else {
        C.k().on("usercontrollercreated", this.Lf, this);
      }

      this.Xa();
    }

    this.Xa();
  },
  oia: function () {
    var c = Ext.create(E.models.cl);
    c.set(this.Lb);
    this.vl.Nm({
      Im: "user",
      Hm: this.fa.get("uin"),
      Ch: c,
      status: "rejected"
    }, {
      fn: t(),
      scope: this
    }, {
      fn: function (e) {
        C.k().qa.sa(E.api.Ob.tf(e) || {
          msg: E.oa.pD
        });
      },
      scope: this
    });
    this.Xa();
  },
  Wha: function () {
    var c = Ext.create(E.models.cl);
    c.set(this.Lb);
    this.vl.Nm({
      Im: "user",
      Hm: this.fa.get("uin"),
      Ch: c,
      status: "hidden"
    }, {
      fn: function () {
        this.Xa();
      },
      scope: this
    }, {
      fn: function (e) {
        C.k().qa.sa(E.api.Ob.tf(e) || {
          msg: E.oa.eE
        });
      },
      scope: this
    });
  },
  Mc: A(m),
  As: function () {
    var c = this.getEl().query(".user-avatar-static")[0],
        f = [];
    f.push({
      uin: this.Lb.sender.id,
      zb: [{
        avatar: c,
        status: m,
        size: 50
      }]
    });
    Ext.Function.defer(this.fireEvent, 100, this, ["addedavatars", {
      object: f
    }]);
  },
  vd: t(),
  Yla: function () {
    return this.Lb.id;
  }
});