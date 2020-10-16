Ext.define(E.f.layout.Ga.jj, {
  extend: C.f.Jb,
  Je: !1,
  dA: m,
  Mf: m,
  Xd: m,
  Nc: m,
  nf: "chat-item",
  mI: "null",
  LL: m,
  Nsa: m,
  Oga: ".closed-item",
  fqa: ".opened-item",
  Yka: ".footer",
  pb: m,
  Ck: m,
  Qh: m,
  H4: m,
  ACa: m,
  Ny: m,
  Ut: 0,
  fL: 0,
  wwa: 4,
  Isa: 2000,
  ku: !1,
  dz: 0,
  MA: m,
  mixins: {
    ea: C.core.mixins.kb
  },
  BL: ["changestate", "leavechat", "chatmenuclicked", "changestatus", "showinfo", "positionchanged", "uploaderitemclose"],
  EK: {
    RG: 1
  },
  zb: {
    lu: 1,
    daa: 2,
    TO: 3
  },
  Sl: {
    contact: 1,
    dummycontact: 2,
    conference: 4,
    anonymous: 16
  },
  Ie: m,
  G4: {},
  ka: {
    ".ml__info--edisc": function () {
      Ext.create(E.f.windows.QC);
    },
    ".unknown-chat-close-btn.close-btn": function () {
      this.px();
    },
    ".min-button": function () {
      this.collapse();
      C.k().Lc.hide();
    },
    ".unknown-chat-add": function () {
      this.Dia();
    },
    ".emots-btn": function (c) {
      this.hqa(c);
    },
    ".giphy-btn": function (c) {
      this.jqa(c);
    },
    ".close-button": function () {
      this.destroy();
    },
    ".close-btn": function (c) {
      this.ka[".close-button"].call(this, c);
    },
    ".close-msg-btn": function (c) {
      c.getTarget(".chat-infobox-unknown-chat") && this.px();
    },
    ".closed-item": function (c) {
      if (c.getTarget(".close-button")) {
        this.ka[".close-button"](c);
      } else {
        C.k().fc(this.pb, m, !0);
      }
    },
    ".send-btn": function (c) {
      if (this.gk(c)) {
        var c = this.getMessage(),
            f = c.length;

        if (f === 0) {
          f = Ext.String.trim(c.replace(/<.*?>/g, "")).length;
        }

        c && f && this.sendMessage(c);
      }
    },
    ".scroll-down-btn": function () {
      this.wg();
    },
    ".chat-indicator-counter": function () {
      this.wg();
    },
    ".add-button": function () {
      this.fireEvent("createconference", this);
    },
    ".video-button": function () {
      this.fireEvent("createvideoconference", this);
    },
    ".audio-button": function () {
      this.fireEvent("createvideoconference", this);
    },
    ".enter-btn": function () {
      this.ax = !this.ax;
      this.VZ();
    },
    ".settings-btn": function (c) {
      this.nqa(c);
    }
  },
  fa: m,
  Nb: m,
  oc: m,
  lga: E.f.layout.Ga.bC,
  Di: m,
  ax: !0,
  Qp: m,
  eA: m,
  Dm: m,
  autoScroll: !1,
  Wm: m,
  RCa: !1,
  Ad: m,
  ld: m,
  constructor: function (c) {
    c = c || {};
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd,
      uf: ["addedavatars"],
      Fk: !0
    }]];
    this.da = c.da || C.k().da;
    this.ia = C.k().ia;
    this.fa = c.fa || C.k().fa;
    this.tpl = c.tpl || this.da.ma(this.nf);
    var f = c.info;
    this.Aa = f.Aa;
    this.type = f.type;
    this.Sa = f.Sa;
    this.Ad = c.Ad || Ext.getStore("InvitationsTheirsStore");
    this.ld = c.ld || Ext.getStore("InvitationsMineStore");
    this.callParent([c]);
    this.mixins.ea.constructor.call(this);
    this.addEvents.apply(this, this.BL);
    this.la = c.la || Ext.getStore("ContactsStore");
    this.Ha = c.Ha || Ext.getStore("UsersStore");
    this.Oe = c.Oe || Ext.getStore("UnknownContactsStore");
    this.la.on("updateindicator", this.Pva, this);
    this.Ie = [];
    this.scrollTop = 0;
    C.k().on("appfocus", this.Ox, this);
  },
  initComponent: function () {
    this.la = this.la || Ext.getStore("ContactsStore");
    this.callParent(arguments);
    this.on("afterrender", this.na, this);
    this.la.on("add", this.F_, this);
    this.la.on("remove", this.m1, this);
    this.MZ();
  },
  destroy: function () {
    C.k().c9({
      type: "chat",
      uin: this.Aa
    });
    this.Je = !1;
    typeof this.oc !== "undefined" && this.oc !== m && (this.oc.un("itemadd", this.cj, this), this.oc.destroy());
    this.el.un("click", this.Ia, this);
    this.un("afterrender", this.na, this);
    this.un("changestate", this.X_, this);
    this.Y8();
    this.Wt();
    clearInterval(this.Wm);
    delete this.Wm;
    this.Mf && this.rva();
    this.Nb && this.Nb.destroy();
    typeof this.Di !== "undefined" && this.Di !== m && this.Di.un("scroll", this.A1, this);
    C.k().un("appfocus", this.Ox, this);
    this.la.un("add", this.F_, this);
    this.la.un("remove", this.m1, this);
    clearTimeout(this.Ut);
    C.k().Ja.hd().Bja(this);
    this.callParent(arguments);
  },
  Ox: function () {
    this.jt();
  },
  F_: function (c, n) {
    var l = this.Aa,
        f = n[0];

    if (f.get("uin") == l) {
      if (this.Mf) {
        if (n[0].get("type") === this.Sl.conference) {
          f.get("extdata").members = this.pb.get("extdata").members;
          this.pb = f;

          if (this.Ra) {
            Ext.get(this.Mf).select(".conference-name").remove(), this.Ra = m;
          }

          this.pb.on("datachanged", this.Ej, this);
          this.Ej(this.pb, "ShowName", this.pb.get("ShowName"));
        }

        this.qM();
      }

      C.k().Lc.show();
    }
  },
  m1: function (c, f) {
    f.get("type") != this.Sl.conference && f.get("uin") == this.Aa && this.Mf && this.pH();
  },
  qM: function () {
    this.oc && this.oc.qM();
  },
  pH: function () {
    this.oc.pH();
  },
  Pva: t(),
  oja: function (c) {
    this.MA = Ext.create(E.f.qs.nD, {
      store: c,
      renderTo: this.getEl().query(".uploads-placeholder")[0]
    });
    this.MA.on("actioncloseitem", this.Gia, this);
  },
  Bra: function () {
    this.MA.destroy();
    this.MA = m;
  },
  Gia: function (c) {
    this.fireEvent("uploaderitemclose", {
      uin: this.Aa,
      record: c.record
    });
  },
  Mc: function () {
    return this.zs(this.zb.TO);
  },
  zs: function (c, z, u) {
    var z = z || this.Aa,
        c = c || this.zb.lu,
        u = u || !1,
        o = [];

    if (c === this.zb.lu || c === this.zb.daa) {
      var f = this.getEl().query(".opened-item .sr-user-avatar")[0],
          B = this.getEl().query(".opened-item .descr")[0],
          y = this.getEl().query(".opened-item .user-status")[0],
          w = this.getEl().query(".opened-item .nick")[0];
      o.push({
        uin: z,
        zb: [{
          avatar: f,
          Xx: B,
          status: y,
          size: 50,
          name: w
        }]
      });
    }

    if (c === this.zb.lu || c === this.zb.TO) {
      c = this.getEl().query(".closed-item .user-status")[0], f = this.getEl().query(".closed-item .nick")[0], o.push({
        uin: z,
        zb: [{
          status: c,
          name: f
        }]
      });
    }

    if (u) {
      Ext.Function.defer(this.fireEvent, 300, this, ["addedavatars", {
        object: o
      }]);
    } else {
      return o;
    }
  },
  vd: t(),
  Dia: function () {
    C.Ca("user-profile/" + this.Aa + "/add");

    if (C.k().ue) {
      this.Lf();
    } else {
      C.k().on("usercontrollercreated", this.Lf, this);
    }
  },
  Lf: function () {
    C.k().ue.view.on("userprofileready", this.Ng, this);
    C.k().events.usercontrollercreated && C.k().un("usercontrollercreated", this.Lf, this);
  },
  Ng: function () {
    var c = C.k().ue;
    c.view.fireEvent("showaddform");

    try {
      C.k().ue.view.un("userprofileready", this.Ng, this);
    } catch (f) {}

    c.BJ();
  },
  Rl: function () {
    this.px();
  },
  getUserData: function (c) {
    if (C.k().fa.get("uin") == c) {
      return C.k().fa;
    }

    return this.Ha.xb(c).Hb();
  },
  wy: function (c) {
    if (this.pb) {
      return this.pb;
    }

    this.pb = this.Ha.xb(this.Aa).yd(c) ? this.Ha.xb(this.Aa).yd(c) : Ext.create(E.models.Ya, {
      Qxa: {
        value: c
      },
      ShowName: {
        value: c
      }
    });
    this.pb.on("datachanged", this.Ej, this);
    return this.pb;
  },
  na: function () {
    this.el.on("click", this.Ia, this);
    this.on("changestate", this.X_, this);
    this.Xd = this.el.child(this.Oga);
    this.Nc = this.el.child(this.fqa);
    this.nja();
  },
  X_: function () {
    this.nAa = m;
  },
  nja: function () {
    if (this.dA) {
      return this.dA;
    }

    var c = this.da.ma(this.mI),
        n = this.Sa.last(),
        l,
        f;
    n && (l = n.get("time"), f = Ext.String.htmlEncode(n.$J()));
    this.dA = c.overwrite(this.Xd, {
      uin: this.Aa,
      user: this.wy(this.Aa),
      nb: 0,
      tpa: {
        time: l || m,
        message: f || m
      }
    });
    this.Qp = this.Xd.select(".chat-counter").first();
    this.eA = this.Xd.select(".sentence").first();
    this.fN = this.Xd.select(".chat-timer").first();
    this.cj();
    return this.dA;
  },
  YI: function () {
    if (this.Mf) {
      return this.Mf;
    }

    var c = this.da.ma(this.LL),
        q = this.wy(this.Aa);
    this.Mf = c.overwrite(this.Nc, {
      uin: this.Aa,
      user: q,
      nb: 0,
      tpa: {}
    });
    this.fz = this.fz || this.Nc.select(".indicator").first();
    this.Dm = this.Dm || this.fz.select(".chat-indicator-counter").first();
    this.fja();
    this.Nb = Ext.create(E.f.layout.Ga.ZE, {
      owner: this,
      Wya: !0
    });
    this.Nb.on("afterrender", this.xfa, this);
    this.Nb.render(this.Nc.select(".chat-area").first());
    this.t2();
    this.aja();
    this.DJ = this.Nc.child(this.Yka);
    this.VZ();

    try {
      var p = this.Nc.select(".chat-data .title").first(),
          o = this.Ha.xb(this.Aa).Hb(),
          f;

      switch (o ? o.get("type") : this.Sl.contact) {
        case this.Sl.contact:
        case this.Sl.anonymous:
          f = "profile/" + this.Aa;
          break;

        case this.Sl.dummycontact:
          f = "contact/" + this.Aa;
          break;

        case this.Sl.conference:
          f = "conference-profile/" + this.Aa;
      }

      Ext.get(p).on("click", function () {
        C.Ca(f);
      }, this);
      this.KA();
    } catch (u) {}

    return this.Mf;
  },
  aja: function () {
    this.oc.rM();
    this.oc.state = "new";
  },
  s5: function () {
    var c = this.Sa,
        z = c.getCount() - 1,
        u = this.type === "chat" ? E.api.ub.ic.Nd.of : E.api.ub.ic.Nd.Hc,
        o,
        f,
        B,
        y,
        w;
    o = this.Aa;

    w = function () {
      this.oc.Ho("fail");
      C.k().qa.sa({
        msg: E.oa.ow,
        timeout: 3000
      });
    };

    E.api.ub.kd({
      uin: C.k().fa.get("uin")
    }, {
      fn: function () {
        E.api.ub.U3({
          uin: C.k().fa.get("uin"),
          interlocutorType: u,
          interlocutorID: o,
          minCount: z + 10,
          maxCount: z + 10,
          getAttachments: !0,
          stripHtml: !0
        }, {
          fn: function (b) {
            b = b.result;
            b.conversations.length > 0 ? (c.removeAll(), f = b.conversations, y = {}, b.attachments.length && Ext.Array.each(b.attachments, function (e) {
              y[e.ggMessageID] || (y[e.ggMessageID] = []);
              y[e.ggMessageID].push(e);
            }), Ext.Array.each(f.reverse(), function (g) {
              B = g.messages;
              Ext.Array.each(B, function (D) {
                if (D.messageType) {
                  D.sentTime.length < 11 && (D.sentTime *= 1000);
                  var q = {
                    uin: D.senderID,
                    i4: D.ggMessageID,
                    message: D.content,
                    time: D.sentTime,
                    attachments: y[D.ggMessageID] || m
                  };
                  q.direction = parseInt(D.senderID) === C.k().fa.get("uin") ? E.models.xc.prototype.Bf.Ih : E.models.xc.prototype.Bf.DK;

                  if (D.messageType >= 4) {
                    if (D.messageType == 7) {
                      var p = D.affectedUser,
                          n = Ext.StoreManager.lookup("ContactsStore").Ba(p);
                      n && (p = n.get("ShowName"));
                      D.affectedUserName = p;
                    }

                    D = this.wpa(D);
                    q.extraData = {};
                    q.extraData.view = D.view;
                    q.type = D.type;
                  }

                  c.add(q);
                }
              }, this);
            }, this), this.oc.Ho("archive")) : this.oc.Ho("empty");
          },
          scope: this
        }, {
          fn: w,
          scope: this
        });
      },
      scope: this
    }, {
      fn: w,
      scope: this
    });
  },
  t2: function () {
    if (this.sn) {
      this.Nc.select(".body").first().appendChild(this.sn);
    } else {
      var c = this.wy(this.Aa);
      this.sn = C.k().da.ma("chat-writing-marker").append(this.Nc.select(".body").first(), {
        user: c,
        uin: this.Aa
      });
      this.sn = Ext.get(this.sn);
    }
  },
  px: function () {
    this.ep() && (this.ep().update(""), this.ep().addCls("d-none"));
  },
  Ia: function (c) {
    c.getTarget(".chat-aol-previous") && (c.preventDefault(), this.oc.Ho("loader"), this.s5());

    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        c.preventDefault();
        this.ka[f].call(this, c);
        break;
      }
    }
  },
  collapse: function () {
    if (this.Je) {
      this.o9();

      if (this.Nb && !this.Nb.Joa) {
        this.Nb.uN = 0;
      }

      this.el.replaceCls("expanded", "collapsed");
      this.Je = !1;
      this.fireEvent("changestate", this, this.Je);
    }
  },
  expand: function () {
    this.YI();
    this.Je = !0;
    (!this.Sa.nn() > 0 || this.Xs || !this.DM()) && this.Tz();
    this.getBody().scrollTo("top", 0);
    this.getBody().scroll("b", this.scrollTop);
    this.autoScroll && this.wg();
    C.k().Ja.Sm(this.type, this.Aa);
    this.el.replaceCls("collapsed", "expanded");
    this.fireEvent("changestate", this, this.Je);
    this.zs(this.zb.lu, this.Aa, !0);
    this.Xs == !0 ? (this.wg(), this.ku = !1) : this.getBody().dom.scrollHeight > this.getBody().getHeight() == !0 && this.getBody().dom.scrollTop == 0 == !0 && !this.ku && (this.wg(), Ext.Function.defer(this.wg, 2, this, []));
    this.bM();
    this.Je && (C.k().jra(), C.k().kra(), C.k().lra());
    Ext.Function.defer(this.jt, 500, this, []);
    Ext.Function.defer(function () {
      (Ext.Element.getViewportHeight() < this.el.dom.offsetTop + this.el.getHeight() || Ext.fly(document.body).getScroll().top > this.el.dom.offsetTop) && window.scrollTo(0, this.el.dom.offsetTop + 100);
      this.Nb && this.Nb.focus();
    }, 100, this);
  },
  bM: function () {
    var c = this.Nb.getEl() ? this.Nb.getEl().dom : m,
        n,
        l;

    if (c && c.contentWindow) {
      if (Ext.isIE) {
        (l = function () {
          c.contentDocument.readyState != "complete" ? setTimeout(l, 100) : c.contentDocument.body.focus();
        })();
      } else {
        if (c.contentDocument.body.focus(), !Ext.isWebKit && (c.contentWindow.focus(), (n = c.contentWindow.getSelection()) && n.rangeCount)) {
          var f = c.contentDocument.createRange();
          f.setStart(n.focusNode, n.focusNode.textContent.length);
          f.setEnd(n.focusNode, n.focusNode.textContent.length);
          n.removeAllRanges();
          n.addRange(f);
        }
      }

      if (!this.Nb.uN) {
        this.Nb.BZ(), this.Nb.uN = 1;
      }
    }
  },
  fja: function () {
    var c = this.getBody();
    this.oc = Ext.create(this.lga, {
      user: this.Ha.xb(this.Aa),
      renderTo: c,
      store: this.Sa,
      tpl: this.Nsa,
      listeners: {
        refresh: {
          fn: this.cj,
          scope: this
        }
      }
    });
    this.Sa.un("add", this.cj, this);
    this.oc.on("itemadd", this.cj, this);
    this.oc.on("messagetryagain", this.S0, this);
    return this.oc;
  },
  Wt: function () {
    this.oc && this.oc.un("messagetryagain", this.S0, this);
  },
  MZ: function () {
    this.Sa.on("add", this.g1, this);
    this.Sa.on("add", this.cj, this);
    this.Sa.on("messageread", this.cj, this);
  },
  Y8: function () {
    this.Sa.un("add", this.g1, this);
    this.Sa.un("add", this.cj, this);
    this.Sa.un("messageread", this.cj, this);
  },
  g1: function () {
    C.k().Ja.jo || this.Je && this.psa();
  },
  o9: function () {
    if (this.eA) {
      var c = this.Sa.last();

      if (c) {
        var f = Ext.String.htmlEncode(c.$J()),
            c = c.get("time");
        this.eA.update(f);
        f = C.k().ia.ob("chat");
        this.fN && (f.showDate == !0 ? this.fN.update(E.ca.Cc.ny(c)) : this.fN.update(""));
      } else {
        this.eA.update("");
      }
    }
  },
  cj: function () {
    this.jt();
    var c = this.Sa.nn();
    Ext.getStore("ConversationsStore").lpa(this.Sa.Aa, c);

    if (c > 0) {
      this.tL();
      var h = this.Sa.Aa,
          f = this.Ha.xb(this.Sa.Aa);
      f && (h = f.Hb().get("ShowName"));
      C.k().Ja.Rj(this.Sa.Aa) || (h = {
        type: "chat",
        uin: this.Sa.Aa,
        title: Ext.String.format(E.lang.zB, h)
      }, C.k().wta(h));
      c = c > 99 ? E.lang.zQ : c;
      this.Qp && (this.Qp.update(c), this.Qp.removeCls("d-none"));
      this.Dm && (this.Dm.update(c), this.Dm.removeCls("d-none"), this.fz.removeCls("d-none"));
    } else {
      this.D5(), C.k().c9({
        type: "chat",
        uin: this.Sa.Aa
      }), this.Dm && (this.Dm.addCls("d-none"), this.fz.addCls("d-none")), this.Qp && this.Qp.addCls("d-none");
    }

    this.o9();
  },
  psa: function () {
    Ext.isWebKit && this.getBody().dom.scrollHeight - this.getBody().getHeight() == -2 && (this.getBody().scroll("b", this.oc.el.dom.scrollHeight + 2), Ext.Function.defer(this.osa, 4, this, []));
    !this.DM() && this.getBody().dom.scrollTop == 0 == !0 ? (this.getBody().scroll("b", this.oc.el.dom.scrollHeight + 100), C.k().Ja.jo || this.Tz()) : this.Xs == !0 ? (this.wg(), Ext.Function.defer(this.wg, 2, this, []), this.Tz()) : this.DM() && this.getBody().dom.scrollTop == 0 == !0 && !this.ku && (this.wg(), this.Tz());
  },
  Tz: function () {
    var c = this,
        f = 0;
    this.Wm && clearInterval(c.Wm);
    this.Wm = setInterval(function () {
      c.$Z() || c.wg();
      f++;

      if (!c.Xs || f > 25) {
        clearInterval(c.Wm), c.Wm = m;
      }
    }, 200);
  },
  scrollToTop: function () {
    this.getBody().scroll("t", 0);
    this.autoScroll = !0;
  },
  osa: function () {
    this.getBody().scroll("b", this.oc.el.dom.scrollHeight);
  },
  wg: function () {
    this.ku = !0;
    this.getBody().scroll("b", this.oc.el.dom.scrollHeight);
  },
  nsa: function () {
    this.getBody().scrollTo("top", 0);
    this.getBody().scroll("b", this.scrollTop);
  },
  getBody: function () {
    if (!this.Di && (this.Di = this.el.select(".body").first())) {
      this.Di.on("scroll", this.A1, this);
    }

    return this.Di;
  },
  A1: function () {
    this.ku = !0;
    this.scrollTop = this.getBody().getScroll().top;
    this.autoScroll = this.getBody().getScroll().top + this.getBody().getHeight() >= this.getBody().dom.scrollHeight;
    this.Xs = this.$Z();
    this.Zia();
    this.Sa.nn() && this.jt();
  },
  isVisible: function () {
    return this.Je && C.k().rn && this.el.isVisible(!0);
  },
  Zia: function () {
    bodyHeight = this.getBody().getHeight();
    scrollTop = this.getBody().getScroll().top;
    var c = this.oc.getEl().select(".ml__item-part--giphy-image video"),
        f = {
      top: scrollTop,
      bottom: scrollTop + bodyHeight
    };
    c.each(function (e) {
      var n = e.getOffsetsTo(this.getBody())[1] + e.getHeight() + scrollTop,
          g = e.getOffsetsTo(this.getBody())[1] + scrollTop;
      n < f.top || g > f.bottom ? e.dom.paused || e.dom.pause() : e.dom.paused && e.dom.play();
    }, this);
  },
  jt: function () {
    if (this.isVisible()) {
      for (var c, w = this.getBody().getHeight(), q = this.getBody().getScroll().top, o = 0; o < this.Sa.Uf.length; o++) {
        var f = this.Sa.Uf[o],
            y = this.oc.getNode(this.Sa.findRecord("messageId", f, 0, !1, !0, !0));

        if (y) {
          var u = {
            top: q,
            bottom: q + w
          },
              y = Ext.get(y),
              y = y.getOffsetsTo(this.getBody())[1] + y.getHeight() + q;
          y > u.top && y <= u.bottom && (c = f);
        }
      }

      c && this.Sa.sL(c);
    }
  },
  getMessage: function () {
    return this.Nb.getText();
  },
  i_: function () {
    this.Nb && this.Nb.Jga();
  },
  xfa: function () {
    this.Nb.jd().on("keydown", this.N_, this);
  },
  rva: function () {
    this.Nb.jd().un("keydown", this.N_, this);
  },
  N_: function (c) {
    if (c.keyCode === 13 && !c.shiftKey) {
      if (this.ax === !0) {
        c.stopEvent();
        c.preventDefault();
        var c = this.getMessage(),
            f = c.length;

        if (f === 0) {
          f = Ext.String.trim(c.replace(/<.*?>/g, "")).length;
        }

        if (!c || !f) {
          return;
        } else {
          this.sendMessage(c);
        }
      } else {
        if (Ext.isIE) {
          return c = this.Nb.getEl().dom.contentDocument.selection.createRange(), c.pasteHTML("<br> "), c.moveStart("character", 0), c.moveEnd("character", 0), c.select(), !1;
        }
      }
    }

    this.Uka();
  },
  S0: function (c, f) {
    this.sendMessage(f);
  },
  sendMessage: function (c, n) {
    this.vpa({
      message: c
    }, n);
    var l = {
      fn: t(),
      scope: this
    },
        f = {
      fn: function (h, b) {
        this.upa(c, b, !0);
      },
      scope: this
    };
    "" !== c && (this.YI(), this.fireEvent("sendmessage", this, this.Aa, c, l, f), this.Nb.focus());
  },
  vpa: function (c, f) {
    !f && this.i_();
    this.fL = 0;
    this.wg();
  },
  upa: function (c, n, l) {
    !l && this.i_();

    if (n !== gg.aa.protocol.ba.iG) {
      var l = C.k().qa,
          f = "";

      switch (n) {
        case gg.aa.protocol.ba.$n:
          f = E.oa.wu;
          break;

        case gg.aa.protocol.ba.fr:
          f = E.oa.nq;
      }

      f && l.sa({
        msg: f,
        timeout: 2000
      });
      this.W7(c);
      this.Nb.focus();
    }
  },
  Uka: function () {
    var c = this.ia.ob("chat").showTypingIndicator;

    if ((c == 1 || c == "1") && this.la.Ba(this.Aa) && this.la.Ba(this.Aa).get("type") == 1 && this.la.Ba(this.Aa).get("protoInfo").friend == 1) {
      var f = this,
          c = this.Nb.getText().length;

      if (c > 0 && !this.Ut) {
        this.fireEvent("itemtyping", this, this.Aa, c), this.Ut = setInterval(function () {
          f.Xua();
        }, this.Isa);
      }
    }
  },
  Xua: function () {
    var c = this.Nb.getText().length;

    if (this.fL - c !== 0) {
      this.fireEvent("itemtyping", this, this.Aa, c), this.fL = c;
    }
  },
  BA: function (c) {
    var f = this.getBody();
    this.sn && (c == "show" && (this.sn.removeCls("d-none"), f.addCls("writing")), c == "hide" && (this.sn.addCls("d-none"), f.removeCls("writing")));
  },
  Mta: function () {
    this.t2();
    this.BA("show");
  },
  v4: function () {
    this.BA("hide");
  },
  $Z: function () {
    var c = this.el.select(".messages-placeholder").first(),
        f = 0;
    c && (f = c.getHeight());
    return 2 + this.getBody().dom.scrollHeight - this.getBody().getHeight() - f <= this.getBody().getScroll().top ? !0 : !1;
  },
  DM: function () {
    return this.getBody().dom.scrollHeight > this.getBody().getHeight();
  },
  p5: function (c) {
    this.Ny ? this.Mta(c) : this.v4();
    this.Xs == !0 && this.wg();
  },
  CCa: function () {
    this.Sa.nn() > 0 ? this.qEa() : this.aCa();
  },
  Bia: function (c) {
    var h = c.cM;

    if (C.k().ob("chat").showTypingIndicator == "1") {
      if (this.la.Ba(h) && this.la.Ba(h).get("type") == 1 && this.la.Ba(h).get("protoInfo").friend == 1) {
        if (c = c.YZ, c == 0) {
          this.tJ();
        } else {
          clearInterval(this.MN);
          this.Ny = new Date().getTime();
          h = c - this.dz;
          this.dz = c;
          this.p5(h);
          var f = this;
          this.MN = setInterval(function () {
            f.Yua();
          }, 1000);
        }
      }
    } else {
      this.tJ();
    }
  },
  yia: function () {
    this.wM();
    this.BA("hide");
  },
  Yua: function () {
    var c = new Date().getTime();
    Math.abs(c - this.Ny) / 1000 > this.wwa && this.tJ();
  },
  tJ: function () {
    clearInterval(this.MN);
    this.wM();
    this.p5();
    this.dz = 0;
  },
  Aka: function () {
    this.dz = 0;
    this.getBody().dom.scrollHeight <= this.getBody().getHeight() && this.getBody().dom.scrollTop == 0 && (C.k().Ja.jo || this.BA("hide"));
    clearInterval(this.MN);
    this.wM();
  },
  wM: function () {
    clearInterval(this.Ut);
    this.Ut = 0;
    this.Ny = m;
  },
  VZ: function () {
    this.ax === !0 ? this.I3().addCls("active") : this.I3().removeCls("active");
  },
  I3: function () {
    return this.mAa || this.Nc.select(".enter-btn").first();
  },
  tBa: x("Nc"),
  FBa: x("Xd"),
  hqa: function (c) {
    Ext.get("chat-manager-menu").child(".emoticons-menu").hasCls("d-none") && this.fireEvent("chatmenuclicked", this, "emoticons", this.el.dom.offsetTop + this.DJ.dom.offsetTop, {
      event: c
    });
  },
  nqa: function (c) {
    Ext.get("chat-manager-menu").child(".settings-menu").hasCls("d-none") && this.fireEvent("chatmenuclicked", this, "settings", this.el.dom.offsetTop + this.DJ.dom.offsetTop, {
      event: c
    });
  },
  jqa: function (c) {
    Ext.get("chat-manager-menu").child(".giphy-menu").hasCls("d-none") && this.fireEvent("chatmenuclicked", this, "giphy", this.el.dom.offsetTop + this.DJ.dom.offsetTop, {
      event: c
    });
  },
  Vz: function (c, f) {
    this.Nb.Vz(c, f);
  },
  Dsa: function (c) {
    this.sendMessage(c, !0);
  },
  clearAll: function () {
    this.Sa.removeAll();
  },
  Ej: function (c, h, f) {
    ("ShowName" === h || h.ShowName) && this.q9();
    h === "protoInfo" && c.xm() && (this.Ok(f.description), this.Nva(), this.una(), C.k().Lc.hide(), this.px(), C.k().Lc.show());
    this.KA();
  },
  Po: function (c) {
    try {
      this.Nb.tDa(c, !1);
    } catch (f) {}
  },
  q9: function () {
    var c;
    this.Ck = this.Ck || this.Xd.select(".nick").first();
    this.Qh = this.Qh || this.Nc.select(".title .nick").first();
    this.bn = this.bn || this.Nc.select(".indicator .label").first();
    c = eht(this.pb.get("ShowName"));
    this.Ck && this.Ck.update(c);
    this.Qh && this.Qh.update(c);
    this.bn && this.bn.update(c);
  },
  Ok: function (c) {
    var f = this.Nc.select(".description .descr").first();
    f && f.update(eht(c));
  },
  Nva: function () {
    var c = this.Nc.select(".description").first();
    c && c.addCls("anonymous-description");
  },
  ep: function () {
    return this.H4 = this.H4 || this.Nc.select(".messages-placeholder").first();
  },
  T3: function (c, h) {
    var f = Ext.create(this.G4[c], Ext.apply({
      renderTo: this.ep(),
      tg: this
    }, h));
    return {
      type: c,
      wm: f
    };
  },
  Nta: function (c, p) {
    p = p || {};

    if (this.Ie.length) {
      try {
        this.Ie[this.Ie.length - 1].wm.destroy();
      } catch (o) {}
    }

    try {
      var n = this.T3(c, p);
      this.Ie.push(n);
      n.wm.show();
    } catch (f) {
      this.Ie[this.Ie.length] && this.Ie[this.Ie.length].wm.show();
    }
  },
  bCa: function (c) {
    Ext.Array.each(this.Ie, function (f, b) {
      if (f.type === c) {
        return f.wm.destroy(), this.Ie.splice(b, 1), !1;
      }
    }, this);
  },
  W7: function (c) {
    this.Nb.setText(c);
  },
  cCa: t(),
  sEa: t(),
  EEa: function (c) {
    this.Di.replaceCls(c == "short" ? "normal" : "short", c);
    C.k().fireEvent("elementpositionchanged", this);
  },
  KA: function () {
    this.n9();
  },
  n9: function () {
    var c = this.Nc.select(".settings-btn").first();

    if (!c) {
      return !1;
    }

    var f = !1,
        f = C.k().ia.Rj(this.Aa) ? !0 : !1;
    f || (f = this.wy(this.Aa), f = f.get("extdata") && f.get("extdata").NoArchive ? !0 : !1);
    f ? c.addCls("hl") : c.removeCls("hl");
  },
  Xva: function () {
    this.fireEvent("positionchanged", this);
  },
  wpa: function (c) {
    var f = "";

    switch (parseInt(c.messageType, 10)) {
      case 4:
        f = "aol-finished-av-call";
        break;

      case 5:
        f = "aol-missed-av-call";
        break;

      case 6:
        f = "aol-file-transfer-event";
        break;

      case 7:
        f = "aol-conference-membership-change-event";
        break;

      case 8:
        f = "aol-finished-easy-call-event";
        break;

      case 9:
        f = "aol-missed-easy-call-event";
        break;

      case 11:
        f = "aol-incoming-easy-call-event";
    }

    return {
      view: this.da.Wa("chat-item-aol-events", {
        Gb: f,
        message: c
      }),
      type: f
    };
  },
  una: function () {
    var c = this.Nc.select(".chat-actions").first();
    c && c.setVisibilityMode(Ext.Element.DISPLAY).hide();
  },
  gk: function (c) {
    (c = c.browserEvent.isTrusted) || this.Jt();
    return c;
  },
  Jt: function () {
    C.k().et.send({
      type: "Untrusted event send message",
      uin: C.k().fa.get("uin"),
      userAgent: navigator.userAgent || navigator.vendor
    });
  }
});