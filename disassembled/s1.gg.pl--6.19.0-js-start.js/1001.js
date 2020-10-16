E.ca.nB = function () {
  function c() {
    h = E.config.a6;
    f = {};

    f[h.Px] = function (e, l, o) {
      e = o.get("args");
      this.Ad = this.Ad || Ext.getStore("InvitationsTheirsStore");
      E.api.Ob.Xla({
        uin: C.k().fa.get("uin"),
        Bh: e.invitationId
      }, {
        fn: function (g) {
          g.result.invitations.length && Ext.create(E.f.windows.XF, {
            buttons: [],
            Lb: g.result.invitations[0],
            type: h.Px
          });
        },
        scope: this
      }, {
        fn: function () {
          C.k().qa.sa({
            msg: E.oa.lba
          });
        },
        scope: this
      });
    };

    f[h.Oia] = function (l, o, n) {
      C.Ca("profile/" + n.get("sender").id);
    };

    f[h.nga] = function (l, o, n) {
      l = n.get("sender").id;
      this.Ha = this.Ha || Ext.getStore("UsersStore");
      l = this.Ha.xb(l).Hb();
      C.k().fc(l);
    };

    f[h.Tga] = function (l, o, n) {
      l = n.get("args").conferenceId;
      this.Ha = this.Ha || Ext.getStore("UsersStore");
      l = this.Ha.xb(l).qe();
      C.k().fc(l);
    };

    f[h.ywa] = function (l, o, n) {
      C.Ca("shop/history/0/" + n.get("args").operationId);
    };

    f[h.xwa] = function (l, o, n) {
      C.Ca("shop/history/0/" + n.get("args").operationId);
    };

    f[h.Ria] = function (l, o, n) {
      l = n.get("args").cid;
      l !== k && C.Ca("contact/" + l);
    };
  }

  var h = {},
      f = m;
  return {
    jL: function (o, b, q, g) {
      !f && c();

      if (typeof f[b + ":" + q] === "function") {
        return f[b + ":" + q].call(this, b, q, g);
      }

      (o = g.get("args")) && o.uri && C.Ca(o.uri);
    }
  };
}();