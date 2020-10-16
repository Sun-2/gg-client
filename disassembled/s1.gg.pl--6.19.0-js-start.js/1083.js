Ext.define(E.f.profile.contact.kv, {
  extend: E.f.profile.contact.lj,
  tka: !0,
  nf: "email-profile-buttons",
  mixins: {
    ea: C.core.mixins.kb
  },
  ka: {
    ".user-profile-invite": function () {
      this.RK();
    },
    ".user-profile-invitation-sent": function (c) {
      c.preventDefault();
    }
  },
  Pg: function (c, n, l, f) {
    c = c || this.record;
    n = n || this.Od;
    l = typeof l === "undefined" ? this.Bd : l;
    this.record = c;
    this.pub = n;
    this.Bd = l;
    this.Vs = f || !1;
    l = c.get("protoInfo");
    c.get("uin");
    this.fm = this.record.Ff() ? this.record.Ff() : m;
    this.cid = this.record.get("cid");
    this.data = {};
    n = n && n.properties && n.properties._content && !!n.properties._content.bot || l.bot || !1;
    l = c.Ff() || !1;
    f = this.Vs;
    c = c.Rg();
    this.data = {
      J2: !1,
      $x: !n && !f && !c && l,
      K2: !n && !f && c,
      jJ: !1,
      ls: l,
      kJ: !1,
      lJ: !1,
      mJ: f
    };
    this.el && this.tpl.overwrite(this.el, this.data);
  },
  RK: function () {
    E.api.Ob.Ym({
      type: "contacts",
      id: C.k().fa.data.uin,
      recipient: this.record.Rg() ? "user,cid:" + this.cid : "user,email:" + this.fm
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.vq,
          timeout: 1500
        });
      },
      scope: this
    }, {
      fn: function (c) {
        if ([400, 401, 403, 404, 500].indexOf(+c.status) !== -1) {
          this.Vs = !1, this.Pg(this.record, this.Od, this.Bd, !1);
        }

        C.k().qa.sa(E.api.Ob.tf(c) || {
          msg: E.oa.Nq
        });
      },
      scope: this
    });
    this.Vs = !0;
    this.Pg(this.record, this.Od, this.Bd, this.Vs);
  }
});