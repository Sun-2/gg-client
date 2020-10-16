Ext.define(E.services.WG, {
  la: m,
  constructor: function () {
    this.la = Ext.getStore("ContactsStore");
  },
  ignore: function (c) {
    var f = c.Hb().get("uin");
    C.k().o_(f);
    E.api.bb.gta(f, {
      fn: function () {
        try {
          C.k().qa.sa({
            msg: E.oa.uQ,
            timeout: 1500
          });
        } catch (e) {}
      },
      scope: this
    }, {
      fn: function () {
        try {
          C.k().qa.sa({
            msg: E.oa.VB,
            mc: {
              text: E.lang.Pc,
              fn: function () {
                this.ignore(c);
              },
              scope: this
            }
          });
        } catch (b) {}
      },
      scope: this
    });
  },
  mn: function (c) {
    E.api.bb.xta(c.Hb().get("uin"), {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.xQ,
          timeout: 1500
        });
      },
      scope: this
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.VB,
          mc: {
            text: E.lang.Pc,
            fn: function () {
              this.mn(c, params);
            },
            scope: this
          }
        });
      },
      scope: this
    });
  },
  restrict: function (c) {
    var h = c.yd().get("cid");
    this.la.ak(E.ca.gi.restrict([h]));
    var f = c.yd().get("meta").FlagFriend;
    f.value = 0;
    E.api.bb.FA({
      aidsToClear: [],
      attr: {
        FlagFriend: f
      },
      cid: h
    }, {
      fn: function (e) {
        E.api.bb.mi(e.result.version);
        this.la.rk(e.result.version);
      },
      scope: this
    }, {
      fn: function () {
        try {
          this.la.ak(E.ca.gi.Zt([h])), C.k().qa.sa({
            msg: E.oa.L$,
            mc: {
              text: E.lang.Pc,
              fn: function () {
                this.restrict(c);
              },
              scope: this
            }
          });
        } catch (b) {}
      },
      scope: this
    });
  },
  Zt: function (c) {
    var h = c.yd().get("cid");
    this.la.ak(E.ca.gi.Zt([h]));
    var f = c.yd().get("meta").FlagFriend;
    f.value = 1;
    E.api.bb.FA({
      aidsToClear: [],
      attr: {
        FlagFriend: f
      },
      cid: h
    }, {
      fn: function (e) {
        E.api.bb.mi(e.result.version);
        this.la.rk(e.result.version);
      },
      scope: this
    }, {
      fn: function () {
        try {
          this.la.ak(E.ca.gi.restrict([h])), C.k().qa.sa({
            msg: E.oa.O$,
            mc: {
              text: E.lang.Pc,
              fn: function () {
                this.Zt(c);
              },
              scope: this
            }
          });
        } catch (b) {}
      },
      scope: this
    });
  }
});