Ext.define(E.f.layout.Ga.Zu, {
  BS: 32768,
  caller: !1,
  Qfa: m,
  mixins: {
    hra: C.core.mixins.hw,
    observable: Ext.util.Observable,
    ea: C.core.mixins.kb
  },
  ud: {
    of: "chat",
    Hc: "conference"
  },
  bEa: m,
  yj: m,
  Rt: {
    chat: function (c, p, o, n, f) {
      return this.ta.Rt(c, p, o, n, f);
    },
    conference: function (c, p, o, n, f) {
      return this.ta.pua(c, p, o, n, f);
    }
  },
  Vd: m,
  qI: {},
  TI: {},
  Osa: E.stores.yG,
  settings: {},
  la: m,
  ld: m,
  notifications: {},
  Mp: {},
  jo: !1,
  oz: m,
  zp: [],
  Ha: m,
  Jz: m,
  constructor: function (c) {
    c = c || {};
    this.callParent(arguments);
    this.mixins.hra.constructor.call(this, c);
    this.app = C.k() || {};
    this.ta = c.ta || this.app.ta;
    this.Vd = {};
    this.yj = [];
    this.ia = C.k().ia;
    this.la = Ext.getStore("ContactsStore");
    this.ld = Ext.getStore("InvitationsMineStore");
    this.Ha = c.w9 || Ext.getStore("UsersStore");
    this.oz = {};
    this.Jz = {};
    this.ta || j("Cannot initialize chatManager: comm is not given");
    this.settings = this.app.ob("chat");
    this.addEvents("chatadded", "chatremoved", "windowtitlechange", "windowtitleremove", "unknownconferenceadded", "windowfaviconchange", "windowfaviconrevert");
    this.mixins.ea.constructor.call(this, c);
    this.init();
  },
  init: function () {
    this.qI = {
      chatmessage: this.mha,
      chatforwardmessage: this.kha,
      conferenceforwardtext: this.vha,
      conferenceinvite: this.wha,
      conferencemembershipchanged: this.xha,
      conferencetext: this.yha,
      typing: this.QI,
      stoptyping: this.OI,
      callinvitation: this.Rfa,
      stopavcall: this.nua,
      forwardedmessagereadreceive: this.Tha,
      messageread: this.gia
    };
    this.TI = {
      sendmessage: this.NI,
      leavechat: this.JI,
      changestatus: this.jha,
      itemtyping: this.cia,
      chatitemnotify: this.aia,
      chatitemnoarchive: this.$ha,
      chatitemadded: this.Kl,
      chatitemremoved: this.Ll
    };
    this.mfa();
    this.ia.on("propagatechatchange", this.Po, this);
    this.on("unknownconferenceadded", this.Zr);
    this.on("searchcontactadded", this.Rl, this);
    this.la.on("silentupdate", this.Xr, this);
    this.ld.on("invitationexpired", this.Yha, this);
  },
  Rfa: function (c, h, f) {
    c = f.sender.slice(2, f.sender.length);
    c = String.fromCharCode.apply(m, c);
    h = Ext.create(E.f.layout.Ga.Gg.Zh);
    h.cs(f.data);
    h.isStarted() && (C.k().dza || C.k().ML({
      Db: [c],
      yc: h.uj,
      wx: h.wl,
      type: h.Mr,
      ix: "incoming"
    }));
  },
  nua: function (c, h, f) {
    c = Ext.create(E.f.layout.Ga.Gg.Zh);
    c.cs(f.data);
    c.isDestroyed() && C.k().vf.m_();
  },
  Tha: function (c) {
    for (var q in this.Mp) {
      if (this.Mp.hasOwnProperty(q)) {
        var p = this.Mp[q],
            o = p.findRecord("messageId", c.id, 0, !1, !0, !0);

        if (o) {
          var f, u;

          switch (c.type) {
            case 1:
              f = o.get("uin");
              u = this.ud.of;
              break;

            case 2:
              f = o.get("conferenceId"), u = this.ud.Hc;
          }

          p.sL(c.id, !1);
          this.Sm(u, f);
          break;
        }
      }
    }
  },
  Rl: function (c) {
    Ext.iterate(this.Vd, function (f, b) {
      b.Rl(c);
    }, this);
  },
  destroy: function () {
    Ext.iterate(this.Vd, function (c, f) {
      this.tra(f);
    }, this);
    this.iva();
    this.callParent(arguments);
    this.ia.un("propagatechatchange", this.Po, this);
    this.un("unknownconferenceadded", this.Zr);
    this.la.un("silentupdate", this.Xr, this);
  },
  vna: function () {
    Ext.get("chat-manager-menu").addCls("d-none");
  },
  Yha: function (c) {
    Ext.Array.each(this.hd().items.items, function (b) {
      b.Aa == c.get("recipient").id && b.Ie[b.Ie.length - 1] && b.Ie[b.Ie.length - 1].wm.destroy();
    }, this);
  },
  oEa: t(),
  mfa: function () {
    Ext.iterate(this.qI, function (c, f) {
      this.ta.on(c, f, this);
    }, this);
  },
  iva: function () {
    Ext.iterate(this.qI, function (c, f) {
      this.ta.un(c, f, this);
    }, this);
  },
  VAa: x("yj"),
  MJ: function (c) {
    return this.getRef(this.Ld(c)).item;
  },
  fea: function (c) {
    return this.Vd[c.name] ? !1 : (this.Vd[c.name] = c, c.qo(this.yj), this.nfa(c), c);
  },
  tra: function (c) {
    return this.Vd[c.name] ? (delete this.Vd[c.name], this.kva(c), c) : !1;
  },
  s4: function (c) {
    return typeof this.Vd[c] !== "undefined";
  },
  nfa: function (c) {
    Ext.iterate(this.TI, function (f, b) {
      c.on(f, b, this);
    }, this);
  },
  kva: function (c) {
    Ext.iterate(this.TI, function (f, b) {
      c.un(f, b, this);
    }, this);
  },
  Yl: function (c) {
    return this.Ld(c.Aa);
  },
  Zda: function (c, f) {
    f = f || !1;
    c.Hda = this.yj.length;
    this.yj.push(c);
    this.addRef(c);
    Ext.iterate(this.Vd, function (e, b) {
      f || b.qo(c);
    }, this);
    this.fireEvent("chatadded", this, c);
  },
  Ro: function (c, h, f) {
    f = f || !1;
    c = {
      type: c,
      Aa: h,
      Sa: this.By(c, h)
    };
    this.Zda(c, f);
    return c;
  },
  FDa: function (c) {
    Ext.iterate(this.Vd, t(), this);
    this.n7(c);
    this.yj.splice(c.Hda, 1);
    this.fireEvent("chatremoved", this, c);
    delete c;
  },
  cia: function (c, h, f) {
    c.type === "chat" && this.ta.wN(h, f);
  },
  OI: function (c, f) {
    Ext.iterate(this.Vd, function (e, g) {
      g.OI(f);
    }, this);
  },
  QI: function (c, f) {
    Ext.iterate(this.Vd, function (e, g) {
      g.QI(f);
    }, this);
  },
  Po: function (c, f) {
    Ext.iterate(this.Vd, function (e, g) {
      g.Po(f.textFormatting, !1, !1);
    }, this);
  },
  JJ: function (c) {
    var h = [];

    if (c.attachments.length) {
      for (var c = c.attachments, f = c.length; f--;) {
        h.push(c[f].content);
      }
    } else {
      h = m;
    }

    return h;
  },
  mha: function (c, q, p) {
    if (!p.Ag) {
      if ((c = this.Ha.xb(q).Hb().get("protoInfo")) && c.bot && c.botData && c.botData.Yma) {
        p.html = p.text;
      }

      var c = this.Ld(q),
          o = this.By(this.ud.of, q),
          f = parseInt(p.time),
          u = parseInt(p.sender, 10) === parseInt(this.app.fa.get("uin"), 10) ? E.models.xc.prototype.Bf.Ih : E.models.xc.prototype.Bf.DK,
          f = o.add({
        uin: p.sender,
        message: p.text,
        attachments: this.JJ(p),
        time: f ? f : parseInt(Date.now() / 1000),
        messageId: p.mid || p.mid,
        images: p.images,
        read: (p.$c & O.ij) === O.ij,
        direction: u,
        extraData: {
          cid: p.cid,
          mid: p.mid,
          originalMessage: p.originalMessage
        }
      });
      Ext.iterate(this.Vd, function (g, h) {
        h.Kra(p.sender);
      }, this);
      f.length && (p.$c & O.ij || this.Uw(this.ud.of, q, p.text), this.hea(q, p.time, p.text, o.nn()), (c = (c = this.getRef(c)) ? c.item : c) || (c = this.Ro(this.ud.of, q)), p.$c & O.ij || this.nk(q));
    }
  },
  o2: function (c) {
    var f = {
      uin: this.app.fa.get("uin"),
      time: parseInt(Date.now() / 1000),
      type: E.models.xc.prototype.types.message,
      direction: E.models.xc.prototype.Bf.Ih,
      extraData: {
        cid: 0,
        mid: 0
      }
    };
    return Ext.Object.merge(f, c);
  },
  NI: function (G, D, B, z, y) {
    try {
      var o = C.k().Pf.zd(),
          f = C.k().Pf.zd(),
          c = this.o2({
        message: B,
        uid: o,
        extraData: {
          originalMessage: {
            text: B
          }
        }
      }),
          L = Ext.create(E.models.xc, c);
      this.Rt[G.type].call(this, D, B, o, f, function (h, b, l) {
        h ? this.Fsa(h, L, G.Aa, y) : this.Gsa(l, L, G.Aa, z);
      }.bind(this));
    } catch (I) {
      y.fn.call(y.scope, B);
    }
  },
  Gsa: function (c, p, o, n) {
    o = this.MJ(o).Sa;
    c.cid && (c.cid = Ext.String.leftPad(c.cid.msw.toString(16), 8, "0") + Ext.String.leftPad(c.cid.lsw.toString(16), 8, "0"));
    c.mid && (c.mid = Ext.String.leftPad(c.mid.msw.toString(16), 8, "0") + Ext.String.leftPad(c.mid.lsw.toString(16), 8, "0"));
    var f = p.get("extraData");
    p.set({
      extraData: Ext.Object.merge(f, {
        cid: c.cid,
        mid: c.mid
      }),
      time: c.time,
      Ija: p.get("error") ? !1 : !0,
      attachments: this.JJ(c)
    });
    o.add(p);
    n.fn.call(n.scope, {
      message: p.get("message")
    });
  },
  Fsa: function (c, q, p, o) {
    var f = parseInt(Date.now() / 1000),
        u = this.MJ(p).Sa;

    switch (c) {
      case gg.aa.protocol.ba.iG:
        u.add(q, {
          uin: this.app.fa.get("uin"),
          message: q.get("message"),
          attachments: "",
          time: f,
          type: E.models.xc.prototype.types.a9,
          direction: E.models.xc.prototype.Bf.Ih,
          extraData: q.get("extraData")
        });
        break;

      case gg.aa.protocol.ba.cV:
        p = this.o2({
          uin: this.app.fa.get("uin"),
          message: "",
          attachments: "",
          time: f,
          type: E.models.xc.prototype.types.hZ,
          direction: E.models.xc.prototype.Bf.Ih,
          extraData: {
            cid: 0,
            mid: 0,
            ownerId: p
          }
        }), u.add(p);
    }

    o.fn.call(o.scope, {
      message: q.get("message")
    }, c);
  },
  wha: function (c, p, o) {
    c = (c = this.getRef(this.Ld(p))) ? c.item : c;

    if (!c) {
      for (var c = this.Ro(this.ud.Hc, p), p = 0, n = o.members.length, f = o.members[p]; p < n; p++, f = o.members[p]) {
        c.Sa.add({
          uin: f.yb,
          message: f.yb + " do\u0142\u0105czy\u0142\u201a do konferencji"
        });
      }
    }
  },
  xha: function (c, h, f) {
    f.members = f.members || f.changes;
    this.Iva(h, f.members);
  },
  yha: function (c, q, p) {
    c = this.Ld(q);

    if (!p.Ag) {
      var o = this.By(this.ud.Hc, q);

      if (o.add({
        uin: p.sender,
        message: p.text,
        attachments: this.JJ(p),
        time: p.time ? p.time : parseInt(Date.now() / 1000),
        messageId: p.mid || p.mid,
        conferenceId: q,
        read: (p.$c & O.ij) === O.ij,
        images: p.images,
        extraData: {
          cid: p.cid,
          mid: p.mid,
          originalMessage: p.originalMessage
        }
      }).length) {
        var f = Ext.StoreManager.lookup("ContactsStore").Ba(q),
            u = "";
        f && (u = f.get("ShowName"));
        p.$c & O.ij || this.Uw(this.ud.Hc, p.sender, p.text, q, u);
        this.bea(q, p.time, p.text, o.nn());
        (c = (c = this.getRef(c)) ? c.item : c) || this.Ro(this.ud.Hc, q);
        p.$c & O.ij || this.nk(q);
      }
    }
  },
  JI: function (c, h) {
    if (c.type === "conference") {
      var f = {};
      f.id = h;
      this.la.rp(f, {
        Ea: function () {
          C.k().qa.sa({
            msg: E.oa.PP,
            timeout: 2000
          });
        },
        ya: function () {
          C.k().qa.sa({
            msg: E.oa.OP,
            timeout: 2000
          });
        },
        scope: this
      });
    } else {
      j("Cannot leave: unknown item type: " + c.type);
    }
  },
  kha: function (c, p, o) {
    if (!o.Ag) {
      var c = this.getRef(this.Ld(p)),
          n = [];
      (c = c ? c.item : c) || (c = this.Ro(this.ud.of, p));

      if (o.attachments.length) {
        for (var p = o.attachments, f = p.length; f--;) {
          n.push(p[f].content);
        }
      } else {
        n = m;
      }

      c.Sa.add({
        uin: this.app.fa.get("uin"),
        message: o.text,
        attachments: n,
        images: o.images,
        messageId: o.mid,
        time: parseInt(Date.now() / 1000),
        direction: E.models.xc.prototype.Bf.Ih,
        extraData: {
          cid: o.cid,
          mid: o.mid,
          originalMessage: o.originalMessage
        }
      });
      c.Sa.z5();
    }
  },
  vha: function (c, p, o) {
    if (!o.Ag) {
      var c = this.getRef(this.Ld(p)),
          n = [];
      (c = c ? c.item : c) || (c = this.Ro(this.ud.Hc, p));

      if (typeof o.attachments !== "undefined" && o.attachments.length) {
        for (var p = o.attachments, f = p.length; f--;) {
          n.push(p[f].content);
        }
      } else {
        n = m;
      }

      c.Sa.add({
        uin: this.app.fa.get("uin"),
        message: o.text,
        attachments: n,
        images: o.images,
        messageId: o.mid,
        time: o.time ? o.time : parseInt(Date.now() / 1000),
        direction: E.models.xc.prototype.Bf.Ih,
        extraData: {
          cid: o.cid,
          mid: o.mid,
          originalMessage: o.originalMessage
        }
      });
      c.Sa.z5();
    }
  },
  nk: function (c) {
    C.k();
    c = "" + c || this.app.fa.get("uin");
    c != this.app.fa.get("uin") && C.k().Co("playOnMessage") && (this.Rj(c) || C.k().Cqa(1, 1));
  },
  mk: function (c) {
    var h = this.u7(c),
        f = this.getRef(this.Ld(c));
    (f = f ? f.item : f) || (f = this.Ro(h, c));
    this.Sm(h, c);
    return f;
  },
  Iva: function (c, h) {
    if (!h || !h.length) {
      return !1;
    }

    var f = this.getRef(this.Ld(c));
    (f = f ? f.item : f) && f.Sa.tea(h);
  },
  jha: function (c, f) {
    this.ta.Bj(c.Aa, {
      title: f
    });
  },
  isContainer: function () {
    return this.s4(E.f.layout.Ga.rd.zq.prototype.$className);
  },
  Oya: A(!0),
  hja: function (c) {
    return this.s4(c) ? this.Vd[c.prototype.$className] : (c = Ext.create(c, {}), this.fea(c), c);
  },
  hd: function () {
    return this.Vd[E.f.layout.Ga.rd.zq.prototype.$className] || m;
  },
  Xr: function (c, h) {
    var f = this.yj;
    Ext.each(h, function (g) {
      if (g.protoInfo && g.protoInfo.bot && g.protoInfo.botData && g.protoInfo.botData.G9) {
        var l = this.la.Ba(g.uin);
        l && l.WK() && (this.Asa(g.uin, g.protoInfo.botData.G9), l.UN());
      }

      Ext.each(f, function (o) {
        if (this.Ha.xb(o.Aa).Qs(g.uin) && g.protoInfo) {
          var o = Ext.query(".status" + o.Aa),
              n = m,
              b = m;
          Ext.each(o, function (p) {
            n = Ext.get(p);
            n.removeCls(["status-avail", "status-talk_to_me", "status-busy", "status-dnd", "status-not_avail", "status-advert", "status-invisible", "status-hidden"]);
            n.addCls("status-" + g.protoInfo.status);

            if (b = n.next(".descr", !0)) {
              b.innerHTML = C.ca.xa.wd(g.protoInfo.description, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]);
            }
          }, this);
        }
      }, this);
    }, this);
  },
  Zr: function (c) {
    if (this.hd()) {
      var f = this.hd().getRef(this.Ld(c.get("uin")));

      if (f = f ? f.item : f) {
        f.fireEvent("unknownconferenceadded");
        return;
      }
    }

    this.app.fc(c);
  },
  aia: function (c, h, f) {
    f ? this.zp.indexOf(h) != -1 && this.zp.splice(this.zp.indexOf(h), 1) : this.zp.indexOf(h) == -1 && this.zp.push(h);
  },
  Rj: function (c) {
    return this.zp.indexOf(c) != -1 ? !0 : !1;
  },
  $ha: function (c, h, f) {
    this.oz[h] = this.oz[h] || new Ext.util.DelayedTask();
    this.oz[h].delay(700, function (l, o, n) {
      (l = Ext.getStore("ContactsStore").Ba(o)) && l.get("extdata").NoArchive == n && (n ? this.la.Ba(o) && C.k().$m(o, !1) : this.la.Ba(o) && C.k().$m(o, !0));
    }, this, [c, h, f]);
  },
  By: function (c, f) {
    this.Mp[this.Ld(f)] || (this.Mp[this.Ld(f)] = Ext.create(this.Osa, {
      Aa: f,
      type: c
    }));
    return this.Mp[this.Ld(f)];
  },
  bla: function () {
    this.jo = !0;
  },
  fva: function () {
    this.jo = !1;
  },
  sCa: x("jo"),
  Uw: function (c, z, u, o, f) {
    var B = C.k().ia.ob("notifications"),
        y = B.showMessagePreview == 1 || B.showMessagePreview == "1" ? u : E.lang.zP,
        B = o || z;
    this.Sm(c, B);
    var w = this.Rj(B) ? !1 : !0;
    c == this.ud.Hc ? (u = {
      message_secure: !0,
      message: u,
      conferenceName: f,
      conferenceId: o
    }, o = "conference/message", f = "conference") : (u = {
      message_secure: !0,
      message: y
    }, o = "chat/message", f = "chat");
    y = C.k().Co("playOnMessage") ? !0 : !1;
    this.notifications[c + B] = Ext.getStore("NotificationsStore").rea({
      priority: 3,
      template: o,
      args: u,
      sender: {
        id: z,
        type: "user"
      },
      target: f,
      action: "open",
      subtype: "chat/message",
      muteSound: y,
      showOnTray: w
    });
  },
  Sm: function (c, f) {
    this.notifications[c + f] && (this.notifications[c + f].vg(), Ext.getStore("NotificationsStore").defer && Ext.getStore("NotificationsStore").remove(this.notifications[c + f]), delete this.notifications[c + f]);
  },
  hea: function (c, n, l, f) {
    Ext.getStore("ConversationsStore").xea(c, n, l, f);
  },
  bea: function (c, n, l, f) {
    Ext.getStore("ConversationsStore").wea(c, n, l, f);
  },
  Bsa: function (c, h) {
    Ext.getStore("ContactsStore").Ba(c);
    var f;
    f = this.mk(c);
    this.NI(f, f.Aa, h, {
      fn: t(),
      scope: this
    }, {
      fn: t(),
      scope: this
    });
  },
  XDa: function (c, h) {
    var f = this.mk(c);
    this.NI(f, f.Aa, h, {
      fn: t(),
      scope: this
    }, {
      fn: t(),
      scope: this
    });
    f.Sa.add({
      uin: f.Aa,
      message: h,
      time: parseInt(Date.now() / 1000)
    });
  },
  Asa: function (c, f) {
    C.k().Ja.Bsa(c, f);
  },
  i2: function () {
    var c = 0;
    Ext.iterate(this.Vd, function (f, b) {
      c += b.items.length;
    }, this);
    return c;
  },
  Kl: function () {
    this.fireEvent("chatitemadded", this);
  },
  Ll: function () {
    this.fireEvent("chatitemremoved", this);
  },
  Ld: function (c) {
    var f = this.Ha.xb(c).getId();
    return this.u7(c) + f;
  },
  u7: function (c) {
    return c.toString().length > 12 ? this.ud.Hc : this.ud.of;
  },
  gia: function (c) {
    var h = m,
        f = m;

    if (c.Hf) {
      f = c.Hf, h = this.ud.of;
    } else {
      if (c.conferenceId) {
        f = c.conferenceId, h = this.ud.Hc;
      }
    }

    h = this.By(h, f);
    this.Jz[f] && this.Jz[f].mid > c.mid ? this.B5(c, h) : (this.Jz[f] = c, this.B5(c, h, !0));
  },
  B5: function (c, n, l) {
    var f = n.findBy(function (b) {
      if ((b = b.data.extraData) && b.mid === c.mid) {
        return !0;
      }
    });

    if (f = n.getAt(f)) {
      n.suspendEvents(l), f.get("readTimestamp") || f.set("readTimestamp", c.xDa), n.resumeEvents();
    }
  }
});