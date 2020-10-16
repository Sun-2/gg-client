Ext.define(E.f.windows.hC, {
  extend: E.f.layout.va.hb.Tk,
  conferenceId: m,
  la: m,
  Ha: m,
  constructor: function (c) {
    c = c || {};
    c.Fd = ["contact"];
    this.la = Ext.getStore("ContactsStore");
    this.Ha = Ext.getStore("UsersStore");
    this.label = E.lang.EP;
    c = this.Ina(c);
    c.Of = !0;
    c.Ke = !0;
    c.Db = c.Db || [];
    c.Db = c.Db.concat([C.k().fa.get("uin")]);
    c.conferenceId ? (c.title = this.Oa.get("ShowName"), this.buttons = [{
      caption: E.lang.yP,
      action: this.Mha.bind(this)
    }, "cancel"]) : (c.title = E.lang.XP, this.buttons = [{
      caption: E.lang.WP,
      disabled: !0,
      xp: 3,
      action: this.uia.bind(this)
    }, "cancel"]);
    this.callParent([c]);
  },
  initItems: function () {
    this.getEl().addCls("conference-edit-window");
    this.callParent();
  },
  Ina: function (c) {
    if (c.conferenceId && (this.Oa = this.Ha.De(c.conferenceId).qe())) {
      c.Db = [], Ext.each(this.Oa.get("extdata").members, function (b) {
        c.Db.push("" + b.yb);
      }, this), c.Ug = !0;
    }

    return c;
  },
  uia: function () {
    if (this.owa() === !1) {
      return !1;
    }

    this.Ha.hua(this.Iqa(), {
      Ea: function (c) {
        C.k().qa.sa({
          msg: E.oa.C$,
          timeout: 2000
        });
        c && C.k().fc(c);
      },
      ya: function () {
        C.k().qa.sa({
          msg: E.oa.B$
        });
      },
      scope: this
    });
  },
  Mha: function () {
    var c = Ext.Array.difference(this.pc.hK(), this.Db);

    if (c.length > 0) {
      for (var p = [], o = 0, n = c.length, f = c[o]; o < n; o++, f = c[o]) {
        p.push({
          yb: f,
          de: O.Qu | O.Su | O.Tu | O.Ru
        });
      }

      C.k().ta.Kr(this.conferenceId, p);
    }
  },
  owa: function () {
    var c = !0;
    this.pc.zy().length === 0 && (C.k().qa.sa({
      msg: E.oa.F$,
      timeout: 2000
    }), c = !1);
    return c;
  },
  Iqa: function () {
    for (var c = {
      members: [],
      name: ""
    }, p = this.pc.hK(), o = 0, n = p.length, f = p[o]; o < n; o++, f = p[o]) {
      C.k().fa.get("uin") != f && c.members.push({
        yb: f,
        de: O.Qu | O.Su | O.Tu | O.Ru
      });
    }

    return c;
  }
});