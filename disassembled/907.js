Ext.define(E.f.windows.WF, {
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
    this.Lb = c.Lb;
    this.da = c.da || C.k().da;
    this.vl = E.api.Ob;
    this.la = Ext.getStore("ContactsStore");
    this.fa = C.k().fa;
    var f = "",
        f = this.Mra();
    this.ka = {
      ".accepted-action": this.BI,
      ".close-invitation-action": this.tha
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
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.callParent();
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
  Mra: function () {
    var c = "";
    this.MK = this.da.ma("resolve-email-invitation-contact-wnd");

    try {
      c = this.MK.apply({
        buttons: [{
          label: "Akceptuj",
          params: {
            status: "accepted"
          }
        }, {
          label: "Zamknij",
          params: {
            status: "close-invitation"
          }
        }],
        sender: this.Lb.sender
      });
    } catch (f) {}

    return c;
  },
  BI: function () {
    this.vl.Xfa({
      uin: this.Lb.sender,
      Bh: this.Lb.Bh,
      data: {
        fm: this.Lb.fm,
        token: this.Lb.token,
        action: "joinIdentity"
      }
    }, {
      fn: function () {
        C.Ca("user-profile/" + this.Lb.sender + "/accept-invitation");
      },
      scope: this
    }, {
      fn: function (c) {
        C.k().qa.sa(E.api.Ob.tf(c) || {
          msg: E.oa.pD
        });
      },
      scope: this
    });
    this.Xa();
  },
  tha: function () {
    this.Xa();
  },
  Mc: A(m),
  As: function () {
    var c = this.getEl(),
        h = c.query(".user-avatar-static")[0],
        c = c.query(".showname")[0],
        f = [];
    f.push({
      uin: this.Lb.sender,
      zb: [{
        avatar: h,
        status: m,
        name: c,
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