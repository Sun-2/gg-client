Ext.define(E.core.events.HC, {
  la: m,
  Tl: m,
  SI: 200,
  Xh: [],
  fa: m,
  provider: m,
  za: m,
  Ad: m,
  ld: m,
  Z2: {
    81004: "mail/newmessages"
  },
  mixins: {
    observable: Ext.util.Observable
  },
  constructor: function () {
    this.addEvents("notifications/list", "notifications/new", "notifications/state", "notifications/cancel", "extapps/list/refresh", "invitations/state-change", "invitations/new", "invitations/list", "preferences/change", "av-chat/invitation", "av-chat/join", "av-chat/memberUpdate", "av-chat/memberLeave", "mail/new_mail", "edisc/scope_files_changed", "edisc/share_invitation_changed", "life/activity", "vegas/roulette_result");
  },
  Qha: function (c, h, f) {
    f.data && f.data.match(/^[^\{]*(.+\})[^\}]*$/m) && ((c = f.data.match(/^[^\{]*(.+\})[^\}]*$/m)[1]) ? (c = Ext.JSON.decode(c), f.Fka === 2 ? this.dispatch(f.gla, {
      content: c.content ? c.content : c
    }) : this.dispatch(c.type, c)) : this.dispatch(f.data.type, f.data));
  },
  init: function (c) {
    c = c || {};
    this.ta = c.ta || C.k().ta;
    this.Ad = Ext.data.StoreManager.lookup("InvitationsTheirsStore");
    this.ld = Ext.data.StoreManager.lookup("InvitationsMineStore");
    this.ta.on("event", this.Qha, this);
  },
  dispatch: function (c, f) {
    if (c = this.Z2[c] ? this.Z2[c] : c) {
      c in this.V2 && (f = this.V2[c].call(this, f)), c in this.events && this.fireEvent(c, f);
    }
  },
  V2: {
    "notifications/list": r(),
    "notifications/new": function (c) {
      for (var p = 0, o = c.content.items, n = 0, f = o.length; n < f; n++) {
        o[n].subtype == "invitations/contacts" && (p = 1);
      }

      p && this.Ad.S3();
      return c;
    },
    "invitations/new": function (c) {
      Ext.Array.each(c.content.items, function (e) {
        this.ld.add(e);
      }, this);
      return c;
    },
    "invitations/list": r(),
    "invitations/state-change": function (c) {
      var f = m;
      Ext.Array.each(c.content.items, function (e) {
        f = this.ld.findRecord("id", e.id);

        if (f !== m) {
          return f.data.additionalStatus = e.additionalStatus || "", f.set("status", e.status), !1;
        } else {
          if (f = this.Ad.findRecord("id", e.id), f !== m) {
            return f.set("status", e.status), !1;
          } else {
            f = this.Ad.add(e), f[0].set("status", e.status);
          }
        }
      }, this);
      return c;
    },
    "preferences/change": function () {
      this.ia = this.ia || C.k().ia;

      try {
        this.ia.Qea(m, {}, {
          fn: function (e) {
            this.mra(e);
            this.Tka();
          },
          scope: this.ia
        });
      } catch (c) {}
    },
    "mail/newmessages": r()
  }
});