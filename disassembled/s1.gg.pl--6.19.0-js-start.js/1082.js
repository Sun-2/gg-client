Ext.define(E.f.profile.contact.lj, {
  extend: C.f.Jb,
  tka: !0,
  nf: "profile-buttons",
  mixins: {
    ea: C.core.mixins.kb
  },
  ka: {
    ".user-profile-gg": function () {
      C.k().fc(this.record);
    },
    ".user-profile-add": function () {
      C.Ca("user-profile/" + this.record.get("uin") + "/add");
    },
    ".user-profile-accept-invite": function () {
      C.Ca("user-profile/" + this.record.get("uin") + "/accept-invitation");
    },
    ".user-profile-hide-invite": function () {
      E.api.Ob.Nm({
        Im: "user",
        Hm: C.k().fa.get("uin"),
        Ch: this.Lb,
        status: "hidden"
      }, {
        fn: function () {
          C.k().qa.sa({
            msg: E.oa.uS,
            timeout: 2000
          });
          this.Lb.set("status", "hidden");
          this.Ad.fireEvent("datachanged");
        },
        scope: this
      }, {
        fn: function (c) {
          C.k().qa.sa(E.api.Ob.tf(c) || {
            msg: E.oa.eE
          });
        },
        scope: this
      });
    },
    ".user-profile-invite": function (c) {
      this.la = this.la || Ext.getStore("ContactsStore");
      var w = this.record.get("uin"),
          q = this.Od,
          o = c.getTarget(".user-profile-invite"),
          f;

      try {
        f = q.label._content || q.name._content + " " + q.surname._content, f.length > 0 && this.la.Ba(w) && (f = this.la.Ba(w).get("ShowName"));
      } catch (y) {
        f = w;
      }

      var u = {
        data: {
          uin: w,
          name: f,
          CH: m,
          XK: !0
        }
      };
      u.data.name === " " && (u.data.name = this.record.get("uin"));
      this.Bd ? this.win = Ext.create(E.f.windows.xq, {
        record: u,
        l5: o,
        buttons: [{
          selector: ".invite-action",
          fn: function () {
            this.win.Ex(this, o, u, eha(this.win.el.select("textarea.message").elements[0].value));
            var b = c.getTarget(".user-profile-invite") || m;
            b && Ext.get(b).addCls("d-none");
          },
          scope: this,
          Ib: !1
        }]
      }) : C.Ca("user-profile/" + this.record.get("uin") + "/add");
    },
    ".user-profile-invitation-sent": function (c) {
      c.preventDefault();
    },
    ".toggle-view-data": function (c) {
      c.preventDefault();
      var h = c.target.tagName.toLowerCase() === "span" ? c.target.parentElement.parentElement.parentElement.children[5] : c.target.parentElement.parentElement.parentElement.parentElement.children[5],
          f = m,
          f = c.target.tagName.toLowerCase() === "span" ? c.target.children[1] : c.target.tagName.toLowerCase() === "i" ? c.target.parentElement.children[1] : c.target;
      h.classList.toggle("d-none");
      f.innerText = h.classList.contains("d-none") ? E.lang.KF : E.lang.YT;
    },
    ".edit-button": function (c) {
      c.preventDefault();
      C.Ca("settings/profile");
    }
  },
  constructor: function (c) {
    this.gza = c;
    this.ld = Ext.data.StoreManager.lookup("InvitationsMineStore");
    this.Ad = Ext.data.StoreManager.lookup("InvitationsTheirsStore");
    this.ld.on("datachanged", this.Dx, this);
    this.Ad.on("datachanged", this.Dx, this);
    this.callParent(arguments);
  },
  initComponent: function () {
    this.tpl = C.k().da.ma(this.nf);
    this.on("afterrender", this.gb, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.ld.un("datachanged", this.Dx, this);
    this.Ad.un("datachanged", this.Dx, this);
    this.el.un("click", this.Ia, this);
    this.callParent(arguments);
  },
  Dx: function () {
    this.Pg(this.record, this.Od, this.Bd, this.Vs);
  },
  gb: function () {
    this.el.on("click", this.Ia, this);
  },
  Ia: function (c) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        c.preventDefault();
        this.ka[f].call(this, c);
        break;
      }
    }
  },
  SJ: function (c) {
    var f = {
      c5: !1,
      e5: !1,
      t4: !1,
      d5: !1
    };
    this.ld.Yg && typeof this.ld.Yg[c] !== "undefined" && Ext.Array.each(this.ld.Yg[c], function (e) {
      if (e.get("subtype") == "invite2contacts") {
        f.c5 = !0;

        if (e.get("status") == "waiting") {
          f.e5 = !0;
        }

        return !1;
      }
    }, this);

    if (this.Ad.senders && typeof this.Ad.senders[c] !== "undefined" && (c = this.Ad.sla(c), m !== c)) {
      if (c.get("status") == "waiting") {
        f.t4 = !0;
      } else {
        if (c.get("status") == "hidden") {
          f.d5 = !0;
        }
      }

      this.Lb = c;
    }

    return f;
  },
  Pg: function (ac, Y, T) {
    if (Ext.Object.getKeys(Y).length !== 0) {
      ac = ac || this.record;
      Y = Y || this.Od;
      T = typeof T === "undefined" ? this.Bd : T;
      this.record = ac;
      this.pub = Y;
      this.Bd = T;
      this.Lb = m;
      var S = ac.get("protoInfo"),
          Q = this.SJ(ac.get("uin"));
      this.data = {};
      var N = this.ek(ac),
          L = ac.Js(1),
          f = S && S.friend == 1,
          ag = S && S.status == "blocked",
          S = Y && Y.properties && Y.properties._content && !!Y.properties._content.bot || S.bot || !1,
          Y = Y && Y.properties && Y.properties._content && !!Y.properties._content.company,
          ae = ac.get("uin") > 0,
          L = L || ag,
          ag = Q.c5,
          aa = Q.e5,
          ab = Q.t4,
          Q = Q.d5,
          c = !!C.k().fa.get("aliasEmail"),
          o = ac.Ff() || !1,
          af = !S && !f || S;
      !N && ac.km(ac.oe.dx);
      !N && ac.km(ac.oe.games);
      var ad = !N && ac.km(ac.oe.rH),
          ac = !N && ac.km(ac.oe.Ry);
      this.data = {
        J2: !L && ae && !N,
        $x: !L && !S && !f && !ag && !aa && !ab && !Q && T && ae && ac,
        jJ: !L && !T && !ab && !Q && af && ad,
        ls: !L && !ab && !Q && c && o,
        kJ: !L && !T && ab,
        lJ: !L && !T && Q,
        mJ: !L && !f && ag && aa,
        jAa: !L && !ab && !Q && !S && ae,
        Zja: !S && Y,
        Yja: Y && N
      };
      this.el && this.tpl.overwrite(this.el, this.data);
    }
  },
  ek: function (c) {
    return (c = c || this.record) && c.get("uin") == C.k().fa.get("uin");
  }
});