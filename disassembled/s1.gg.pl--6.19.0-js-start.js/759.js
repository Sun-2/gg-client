Ext.define(C.core.Yb.OF, {
  extend: C.core.Yb.zn,
  Uv: "notifications.muted.subtypes",
  Wq: "notifications.showMessagePreview",
  eF: "notifications.sounds.playOnAvailable",
  gF: "notifications.sounds.playOnMessage",
  hF: "notifications.sounds.playOnNotify",
  fF: "notifications.sounds.playOnError",
  dF: "notifications.sounds.playOnAVCall",
  fl: "notifications.sounds.soundSet",
  Zn: "selfstatus.login.status",
  ii: "selfstatus.login.txt",
  kw: "selfstatus.logout.txt",
  pj: "selfstatus.logout.enabled",
  er: "selfstatus.dndMode",
  pq: "chat.showEmots",
  oq: "chat.resolveLinks",
  xu: "chat.textFormatting.bold",
  yu: "chat.textFormatting.font-family",
  Au: "chat.textFormatting.size",
  zu: "chat.textFormatting.italic",
  Uk: "preferenceschanged",
  name: "pref-manager",
  id: "pref-manager",
  UL: 0,
  xj: [],
  vo: m,
  b6: m,
  zja: {
    preferences: {
      iapps: {
        chat: {
          resolveLinks: "1",
          showDate: "1",
          showEmots: "1",
          showTypingIndicator: "1",
          spellCheck: "1",
          strangerAllowedTo: {
            talk: "1"
          },
          textFormatting: {
            bold: "0",
            color: "#000000",
            "font-family": "arial",
            italic: "0",
            size: "3",
            underline: "0"
          }
        },
        contacts: {
          contactView: {
            avatar: "right",
            showDescription: "1",
            description: "short",
            showGift: "0"
          },
          listView: {
            type: "favorites",
            showSynced: "0"
          }
        },
        notifications: {
          sounds: {
            muteAll: "0",
            playOnAvailable: "0",
            playOnMessage: "1",
            playOnNotify: "1",
            playOnAVCall: "1",
            playOnAVChat: "1",
            playOnError: "1",
            playOnFileTransferEnd: "1",
            soundSet: "classic"
          },
          muted: {
            notInstalledExtApps: "0",
            subtypes: [],
            senders: []
          },
          showMessagePreview: "1",
          showWhenBusy: "1"
        },
        selfstatus: {
          away: {
            after: "120",
            enabled: "0",
            txt: "",
            status: "3"
          },
          logout: {
            after: "7200",
            enabled: "0",
            txt: ""
          },
          login: {
            status: "-1",
            txt: ""
          },
          dndMode: "0"
        }
      }
    }
  },
  constructor: function (c) {
    c = c || {};
    this.callParent([c]);
  },
  Zna: function (c) {
    c.config.preferences.iapps.chat.useTabs && delete c.config.preferences.iapps.chat.useTabs;
    this.UL = c.config.version;
    this.preferences = c.config;
    this.vo = c.aolConfig;
    this.xj = this.ob("notifications").muted && this.ob("notifications").muted.senders;
    this.b6 = this.XL(this.iK(), this.ob("notifications").muted && this.ob("notifications").muted.subtypes);
  },
  VM: function (c) {
    this.preferences = c;
    this.Ska();
  },
  Ska: function () {
    this.fireEvent("propagateviewchange", this, this.ob("contacts"));
    this.fireEvent("propagatechatchange", this, this.ob("chat"));
  },
  Tka: function () {
    this.fireEvent("propagatesettingsdefault", this);
  },
  Rka: function () {
    this.fireEvent("propagateaolchange", this, this.vo.config);
  },
  Bza: t(),
  nm: x("preferences"),
  JAa: function () {
    return this.vo.config;
  },
  K7: function (c) {
    this.vo.config.enabled = c;
  },
  ob: function (c) {
    return this.nm().preferences.iapps[c] ? this.nm().preferences.iapps[c] : k;
  },
  lsa: function (c, n, l, f) {
    this.G7 = this.G7 || new Ext.util.DelayedTask(this.msa, this, [c, n, l, f]);
    this.G7.delay(500, m, m, [c, n, l, f]);
  },
  msa: function (c, n, l, f) {
    this.apiSet(m, {
      contacts: {
        contactView: {
          avatar: n,
          showDescription: l,
          description: this.ob("contacts").contactView.description,
          showGift: "0"
        },
        listView: {
          type: c,
          showSynced: f
        }
      }
    });
  },
  UDa: function (c, f) {
    c = "" + c;
    c > 0 && (f == !1 ? this.xj.indexOf(c) != -1 && this.xj.splice(this.xj.indexOf(c), 1) : this.xj.indexOf(c) == -1 && this.xj.push(c), this.hsa());
  },
  hsa: function () {
    var c = this.ob("notifications");
    this.apiSet(m, {
      notifications: {
        sounds: {
          muteAll: c.sounds.muteAll,
          playOnAvailable: c.sounds.playOnAvailable,
          playOnMessage: c.sounds.playOnMessage,
          playOnNotify: c.sounds.playOnNotify,
          playOnAVCall: c.sounds.playOnAVCall,
          playOnAVChat: c.sounds.playOnAVChat,
          playOnError: c.sounds.playOnError,
          playOnFileTransferEnd: c.sounds.playOnFileTransferEnd,
          soundSet: c.sounds.soundSet
        },
        muted: {
          notInstalledExtApps: c.muted.notInstalledExtApps,
          subtypes: c.muted.subtypes,
          senders: this.xj
        }
      }
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.lG,
          timeout: 2000
        });
      },
      scope: this
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.lW
        });
      },
      scope: this
    });
  },
  Rj: function (c) {
    return this.xj.indexOf(c) !== -1 ? !0 : !1;
  },
  apiSet: function (c, n, l, f) {
    l = l || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    c = {
      data: Ext.encode([{
        id: {
          key: "iapps",
          value: "chat"
        },
        data: n.chat ? n.chat : this.ob("chat")
      }, {
        id: {
          key: "iapps",
          value: "contacts"
        },
        data: n.contacts ? n.contacts : this.ob("contacts")
      }, {
        id: {
          key: "iapps",
          value: "notifications"
        },
        data: n.notifications ? n.notifications : this.ob("notifications")
      }, {
        id: {
          key: "iapps",
          value: "selfstatus"
        },
        data: n.selfstatus ? n.selfstatus : this.ob("selfstatus")
      }])
    };
    E.api.Pb.Rz(c, l, f);
  },
  oua: function (c) {
    this.VM({
      preferences: {
        iapps: {
          chat: c.chat ? c.chat : this.ob("chat"),
          contacts: c.contacts ? c.contacts : this.ob("contacts"),
          notifications: c.notifications ? c.notifications : this.ob("notifications"),
          selfstatus: c.selfstatus ? c.selfstatus : this.ob("selfstatus")
        }
      },
      QDa: ""
    });
  },
  R9: function (c, n, l, f) {
    E.api.ub.Rsa(n, l, f);
  },
  Qea: function (c, n, l, f) {
    l = l || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    E.api.Pb.zma(n, l, f);
  },
  mra: function (c) {
    if (c.version > this.UL) {
      this.UL = c.version, this.b6 = this.XL(this.iK(), this.ob("notifications").muted.subtypes), this.oua({
        chat: c.preferences.iapps.chat,
        contacts: c.preferences.iapps.contacts,
        notifications: c.preferences.iapps.notifications,
        selfstatus: c.preferences.iapps.selfstatus
      }), this.fireEvent(this.Uk);
    }
  },
  iK: function () {
    return {
      "invitations/contacts": {
        value: "1",
        label: E.lang.ZV,
        items: ["invitations/contacts", "invitations/p2p-games", "gifts/*"]
      },
      "chat/message": {
        value: "1",
        label: E.lang.YV,
        items: ["chat/message", "invitations/audiovideo"]
      }
    };
  },
  XL: function (c, f) {
    f = f || [];
    Ext.Object.each(c, function (e, o) {
      for (var g = o.items[0], p = 0; p < f.length; p++) {
        if (g === f[p]) {
          o.value = "0";
        }
      }
    });
    return c;
  },
  ZJ: function () {
    return this.XL(this.iK(), this.ob("notifications").muted.subtypes);
  },
  VJ: function () {
    var c = this.ob("selfstatus").login;
    c.status |= 0;
    return c;
  },
  nCa: function (c) {
    return (this.ob("notifications").muted.senders || []).indexOf(c) == -1 ? !1 : !0;
  },
  xM: function (c) {
    Ext.isArray(c) || (c = [c]);
    c.forEach(function (e) {
      var f = this.sy(e);
      this.zg(e, f);
    }, this);
  },
  Ypa: function (c, h, f) {
    f = f.split(".");

    for (i = 0; i < f.length - 1; i++) {
      c = c[f[i]];
    }

    c[f[i]] = h;
  },
  f6: function (c, n) {
    for (var n = n.split("."), l = c, f = 0; f < n.length; f++) {
      l = l[n[f]];
    }

    return l;
  },
  Fb: function (c) {
    return this.f6(this.nm().preferences.iapps, c);
  },
  zg: function (c, f) {
    this.Ypa(this.nm().preferences.iapps, f, c);
  },
  sy: function (c) {
    return this.f6(this.zja.preferences.iapps, c);
  }
});