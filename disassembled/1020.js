Ext.define(E.f.windows.Zv, {
  extend: E.f.windows.bB,
  itemId: "p2p-video-window",
  Jf: !1,
  Wc: !1,
  H9: !1,
  aL: !1,
  Yy: !1,
  config: m,
  q2: m,
  yc: m,
  wx: m,
  name: "nonmodal-window",
  id: "video-conference-popup-window",
  height: 345,
  width: 550,
  jM: m,
  kM: m,
  lM: m,
  connection: m,
  w9: m,
  html: '<div id="main-video-container"><div id="conference-title">' + E.lang.sO + '</div><div class="video-control-container"><div class="empty-left-div"></div><div class="video-control-buttons-container"><a id="mute-button" class="video-control-button"></a><a id="change-video-state-button" class="video-control-button"></a><a id="call-button" class="video-control-button call-button"></a><a id="screen-share-button" class="video-control-button share-screen-button"></a></div><div class="video-gg-logo-container"><a id="video-gg-logo" class="video-gg-logo"></a></div></div><div id="video-track-overlay" class="video-track-overlay"><img id="user-avatar" src=""/></div><div id="request-permissions-message" class="request-permissions-message-overlay"><div class="request-permissions-content"><div class="request-permissions-logo"><img src="/images/gg-logo2.png"></div><div class="request-permissions-text"><p class="request-permissions-header">GG prosi o pozwolenie na korzystanie z Twojego mikrofonu/kamery. Wybierz \u201eZezwalaj\u201d gdy przegl\u0105darka zapyta o pozwolenie, zamknij okno i od\u015bwie\u017c stron\u0119. Je\u017celi jednak zablokowa\u0142e\u015b dost\u0119p, to mo\u017cesz to zmieni\u0107 w ustawieniach przegl\u0105darki, klikaj\u0105c na k\u0142\u00f3dk\u0119 w pasku adresu. Po zmianie ustawie\u0144 od\u015bwie\u017c stron\u0119. </p></div></div></div><div id="local-tracks-container"><video autoplay="1" id="localVideo" style="max-width: 100%;" class="external-track" /><audio autoplay="1" id="localAudio" style="max-width: 100%;" class="external-track" /></div></div>',
  minimizable: !0,
  maximizable: !0,
  jz: !1,
  fixed: !0,
  shadow: !1,
  Ae: m,
  Cd: m,
  ta: m,
  uin: m,
  CH: m,
  tI: {
    openBridgeChannel: !0
  },
  X6: !1,
  VK: !1,
  ym: !1,
  Pa: m,
  hf: {},
  constrain: !0,
  listeners: {
    minimize: function (c, f) {
      c.minimize(window, f);
    },
    maximize: function (c, f) {
      c.E5(c, f);
    },
    show: function (c) {
      function f() {
        window.setTimeout(function () {
          if (c.Pa === m) {
            f();
          } else {
            c.a_(c);
            var e = Ext.getCmp("video-conference-popup-window").getEl().down("#localVideo").dom,
                b = Ext.getCmp("video-conference-popup-window").getEl().down("#localAudio").dom;
            c.ay(!1, c, c.Wc, e, b);
          }
        }, 500);
      }

      window.localStorage.setItem("window_lock", !0);
      f();
    },
    afterrender: function (c) {
      var z = this,
          u = c.getEl();
      this.QM();
      this.header.insert(0, {
        xtype: "panel",
        html: '<img class="gg-header-icon" src="/images/gg-logo2.png"/>'
      });
      C.k().ta.on("confirmcall", t());
      var o = u.down("#video-track-overlay");
      C.k().ta.on("cameraison", function (e, g, h) {
        Ext.create(E.f.layout.Ga.Gg.Zh).cs(h.data);
        u.down("#video-track-overlay") === m ? z.Yy = !0 : o.addCls("video-track-overlay-off");
      });
      C.k().ta.on("cameraisoff", function (e, g, h) {
        Ext.create(E.f.layout.Ga.Gg.Zh).cs(h.data);
        u.down("#video-track-overlay") === m ? z.Yy = !1 : o.removeCls("video-track-overlay-off");
      });
      z.Yy ? o.addCls("video-track-overlay-off") : o.removeCls("video-track-overlay-off");
      var f = u.down("#mute-button");
      z.Jf ? f.addCls("mute-on-button") : f.addCls("mute-off-button");
      f.on("click", function () {
        z.Jf = z.Jf != !0;
        z.R5(z.Jf);
        z.Jf ? (f.removeCls("mute-off-button"), f.addCls("mute-on-button")) : (f.removeCls("mute-on-button"), f.addCls("mute-off-button"));
      });
      u.down("#screen-share-button").on("click", function () {
        z.f8(z, [z.config.Db[0]]);
      });
      z.JM(z);
      var B = z.el.down("#change-video-state-button");
      B.on("click", function () {
        z.Wc = z.Wc != !0;
        z.nh(z.Wc);
        var e = C.k().Pf.zd(),
            n = z.config.Db[0];

        if (z.Wc) {
          B.removeCls("video-off-button");
          B.addCls("video-on-button");
          var l = z.Ae.SZ(z.uin);
        } else {
          B.removeCls("video-on-button"), B.addCls("video-off-button"), l = z.Ae.Sfa(z.uin);
        }

        C.k().ta.kf(n, e, l);
      });
      var y = u.down("#conference-title"),
          w = u.down("#call-button");
      w.on("click", function () {
        if (z.Cd || z.ym) {
          z.ss(), z.nh(!1), z.lI(z);
        }

        if (!z.Cd && !z.ym) {
          z.connection.connect();
          w.removeCls("green-call-button");
          z.ym = !0;
          var e = z.config.Db[0],
              n = z.Ha.xb(e).Hb().data.ShowName;
          y.dom.innerHTML = "Rozmowa z: " + n;
          var n = C.k().Pf.zd(),
              l = z.Ae.B_(z.config.yc);
          C.k().ta.kf(e, n, l);
          C.k().lf();
          Ext.Function.defer(function () {
            C.k().lf();
          }, 1000, z);
        }
      });
      this.Cd ? (c = z.Ha.xb(z.config.Db[0]).Hb().data.ShowName, y.dom.innerHTML = "Rozmowa z: " + c) : (c = z.Ha.xb(this.Db[0]).Hb().data.ShowName, y.dom.innerHTML = "Dzwoni: " + c, w.addCls("green-call-button"));
      c = u.down("#video-gg-logo");
      this.Jfa(z, c);
    },
    restore: function () {
      this.setSize(this.width - 1, this.height);
      this.doLayout();
    },
    beforedestroy: function (c) {
      c.ss();
      c.nh(!1);
      c.$ja(c);
      C.k().lf();
      c.m5(c);
      window.localStorage.setItem("window_lock", !1);
      Ext.getBody().hasCls("x-window-maximized-ct") && Ext.getBody().removeCls("x-window-maximized-ct");
    },
    move: function (c, n, l, f) {
      c.uZ(c, n, l, f);
    }
  },
  $ja: function (c) {
    for (var f = 0; f < c.dc.length; f++) {
      c.dc[f].dispose();
    }
  },
  QM: function () {
    this.center();
  },
  lta: v("X6"),
  Era: function (c) {
    Ext.Function.defer(function () {
      c.Pa.removeTrack(c.dc[1], m);
      c.Pa.replaceTrack(m, c.dc[1]);
    }, 5000, c);
  },
  uz: function (c) {
    if (!c.isLocal()) {
      var w = c.getParticipantId();
      this.hf[w] || (this.hf[w] = []);
      var q = this.hf[w].push(c),
          o = this.config.Db[0],
          f = w + c.getType() + q,
          y = Ext.getCmp("video-conference-popup-window").getEl().down("#main-video-container");

      if (c.getType() === "video") {
        var u = Ext.getCmp("video-conference-popup-window").getEl().down(".local-track-video");
        u !== m && u.destroy();
        y.insertHtml("beforeEnd", "<video autoplay='1' id='" + w + "video" + q + "' uin='" + o + "' class='local-track-video'/>");
      } else {
        u = Ext.getCmp("video-conference-popup-window").getEl().down(".local-track-audio"), u !== m && u.destroy(), y.insertHtml("beforeEnd", "<audio autoplay='1' id='" + w + "audio" + q + "' uin='" + o + "' class='local-track-audio'/>");
      }

      w = Ext.getCmp("video-conference-popup-window").getEl().down("#" + f).dom;
      c.attach(w);
      c.getType() === "audio" && C.k().lf();
    }
  },
  $pa: function () {
    this.VK = !0;
  },
  eDa: function (c) {
    if (this.hf[c]) {
      for (var n = this.hf[c], l = 0; l < n.length; l++) {
        var f = Ext.getCmp("video-conference-popup-window").getEl().down("#" + c + n[l].getType()).dom;
        n[l].detach(f);
      }
    }
  },
  vz: function (c, n) {
    if (n === "moderator") {
      var l = C.k().Pf.zd(),
          f = this.config.Db[0];
      this.Cd && (this.dL(this.Pa.participants), this.Pa.lock(this.Ae.wl), C.k().ta.kf(f, l, this.q2));
    }
  },
  dL: function (c) {
    for (var f in c) {
      this.Pa.kickParticipant(f);
    }
  },
  cqa: function (c) {
    this.hf[c] = [];
    this.Era(this);
  },
  constructor: function (c) {
    this.initConfig(c);
    this.uin = c.Kh.uin;
    this.yc = c.yc;
    this.callParent(arguments);
    this.Ha = c.Ha || Ext.getStore("UsersStore");
    this.itemId = c.itemId;
    this.Cd = typeof c.yc === "undefined";
    this.Jna();
  },
  Jna: function () {
    this.Ae = Ext.create(E.f.layout.Ga.Gg.Zh);
    this.Cd ? this.pN() : this.qN();
    JitsiMeetJS.init(this.L4);
    JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.ERROR);
    this.connection = new JitsiMeetJS.JitsiConnection(m, m, this.C_);
    this.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED, this.FL.bind(this));
    this.Cd && this.connection.connect();
  },
  FL: function () {
    this.Pa = this.connection.initJitsiConference(this.yc, Object.assign({}, this.tI, {
      VEa: !0,
      nick: this.uin
    }));
    this.Pa.on(JitsiMeetJS.events.conference.TRACK_ADDED, this.uz.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.CONFERENCE_JOINED, this.$pa.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.USER_JOINED, this.cqa.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.USER_ROLE_CHANGED, this.vz.bind(this));
    !this.Pa.isJoined() && this.Cd && this.Pa.join();
    !this.Pa.isJoined() && !this.Cd && this.Pa.join(this.wx);
  },
  pN: function () {
    this.q2 = this.Ae.p2("chat");
    this.yc = this.Ae.uj;
    C.k().I6();
  },
  ss: function () {
    if (!this.X6) {
      var c = C.k().Pf.zd(),
          h = this.config.Db[0],
          f = this.Ae.Pja(this.yc);
      C.k().ta.kf(h, c, f);
    }
  },
  qN: function () {
    C.k().E4();
  },
  lI: function (c) {
    c.close();
  },
  l_: function () {
    this.ss();
    C.k().lf();
    var c = this.config.Db[0];
    C.k().Ja.hd().getItem(c).sendMessage(E.lang.VS, !0);
    this.nh(!1);
    this.lI(this);
  },
  m_: function () {
    C.k().lf();
    this.nh(!1);
    this.lI(this);
    C.k().yz();
  }
});