Ext.define(E.f.windows.$u, {
  extend: E.f.windows.bB,
  itemId: "conference-video-window",
  Tya: !1,
  Jf: !1,
  Wc: !1,
  Yy: !1,
  config: m,
  Pz: m,
  yc: m,
  wx: m,
  name: "nonmodal-window",
  id: "video-conference-popup-window",
  height: 500,
  width: 780,
  minHeight: 500,
  minWidth: 780,
  jM: m,
  kM: m,
  lM: m,
  connection: m,
  w9: m,
  minimizable: !0,
  maximizable: !0,
  jz: !1,
  layout: "fit",
  shadow: !1,
  autoScroll: !1,
  Ae: m,
  Cd: m,
  ta: m,
  uin: m,
  nJ: m,
  CH: m,
  tI: {
    openBridgeChannel: !0
  },
  VK: !1,
  ym: !1,
  Pa: m,
  members: [],
  Ux: [],
  hf: [],
  Xc: m,
  constructor: function (c) {
    this.initConfig(c);
    this.Aea(c);
    this.uin = c.Kh.uin;
    this.nJ = C.k().fa.fp();
    this.members = this.members.concat(c.x_);
    this.yc = c.yc;
    this.callParent(arguments);
    this.Ha = c.Ha || Ext.getStore("UsersStore");
    this.itemId = c.itemId;
    this.la = Ext.getStore("ContactsStore");
    var h = Ext.create("Ext.container.Container", {
      cls: "request-permissions-message-overlay",
      id: "request-permissions-message",
      html: '<div class="request-permissions-content"><div class="request-permissions-logo"><img src="/images/gg-logo2.png"></div><div class="request-permissions-text"><p class="request-permissions-header">' + E.lang.wO + "</p></div>"
    }),
        f = Ext.create("Ext.container.Container", {
      layout: "fit",
      cls: "conference-video-wrapper"
    });
    this.add(f);
    this.Xc = Ext.create(E.f.windows.YY, {
      autoHeight: !0
    });
    f.add(this.Xc);
    f.add(h);
    this.Cd = typeof c.yc === "undefined";
    this.Ae = Ext.create(E.f.layout.Ga.Gg.Zh);
    this.Cd ? this.pN() : this.qN();
    JitsiMeetJS.init(this.L4);
    JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.DEBUG);
    this.connection = new JitsiMeetJS.JitsiConnection(m, m, this.C_);
    this.Cd && this.connection.connect();
  },
  FL: function () {
    this.Pa = this.connection.initJitsiConference(this.yc, this.tI);
    this.Pa.setDisplayName(this.nJ);
    this.Pa.on(JitsiMeetJS.events.conference.TRACK_ADDED, this.uz.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.TRACK_REMOVED, this.w6.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.CONFERENCE_JOINED, this.k6.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.CONFERENCE_LEFT, this.l6.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.USER_LEFT, this.y6.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.USER_JOINED, this.x6.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.USER_STATUS_CHANGED, this.z6.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.TRACK_MUTE_CHANGED, this.v6.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.CONNECTION_STATS, this.q6.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.TRACK_AUDIO_LEVEL_CHANGED, this.u6.bind(this));
    this.Pa.on(JitsiMeetJS.events.conference.USER_ROLE_CHANGED, this.vz.bind(this));
    !this.Pa.isJoined() && this.Cd && this.Pa.join();
    !this.Pa.isJoined() && !this.Cd && this.Pa.join(this.wx);
    this.a_(this);
    this.sea();
  },
  z6: t(),
  v6: function (c) {
    var f = this.Xc.getPariticipantViewById(c.ownerEndpointId);
    f !== m && (c.type === "video" && f.Xz(c.muted), c.type === "audio" && f.Yz(c.muted));
  },
  q6: t(),
  u6: t(),
  listeners: {
    minimize: function (c, f) {
      this.minimize(c, f);
    },
    beforeclose: t(),
    afterrender: function (c) {
      var q = this,
          c = c.getEl();
      window.localStorage.setItem("window_lock", !0);
      q.gea(q);
      q.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED, q.FL.bind(q));
      this.QM();
      var p = c.down("#mute-button");
      q.Jf ? p.addCls("mute-on-button") : p.addCls("mute-off-button");
      p.on("click", function () {
        var e = q.Xc.getPariticipantViewById(q.uin);
        q.Jf = q.Jf != !0;
        q.R5(q.Jf);
        q.Jf ? (p.removeCls("mute-off-button"), p.addCls("mute-on-button")) : (p.removeCls("mute-on-button"), p.addCls("mute-off-button"));
        e.Yz(q.Jf);
      });
      q.JM(q);
      var o = q.el.down("#change-video-state-button");
      o.on("click", function () {
        var e = q.Xc.getPariticipantViewById(q.uin);
        q.Wc = q.Wc != !0;
        q.nh(q.Wc);
        q.Wc ? (o.removeCls("video-off-button"), o.addCls("video-on-button")) : (o.removeCls("video-on-button"), o.addCls("video-off-button"));
        e.Xz(!q.Wc);
      });
      var f = c.down("#call-button");
      f.on("click", function () {
        if (q.Cd || q.ym) {
          q.ss(), q.nh(!1), q.close();
        }

        if (!q.Cd && !q.ym) {
          q.connection.connect();
          f.removeCls("green-call-button");
          q.ym = !0;
          var e = q.config.Db[0],
              n = '<div class="conference-title-conference"><img class="gg-header-icon" src="/images/gg-logo2.png"/>Rozmowa z: ' + q.Ha.xb(e).Hb().data.ShowName + "</div>";
          q.setTitle(n);
          var n = C.k().Pf.zd(),
              l = q.Ae.B_(q.config.yc);
          C.k().ta.kf(e, n, l);
          C.k().lf();
        }
      });

      if (this.Cd) {
        var u = q.Ha.xb(q.config.Db[0]).Hb().data.ShowName;
        this.setTitle('<div class="conference-title-conference"><img class="gg-header-icon" src="/images/gg-logo2.png"/>' + u + "</div>");
      } else {
        u = q.Ha.xb(this.Db[0]).Hb().data.ShowName, this.setTitle('<div class="conference-title-conference"><img class="gg-header-icon" src="/images/gg-logo2.png"/>Konferencja z: ' + u + "</div>"), f.addCls("green-call-button");
      }

      c.down("#add-participant-button").on("click", function () {
        C.k().Ti({
          conferenceId: q.Db[0]
        });
      });
      c.down("#screen-share-button").on("click", function () {
        var e = Object.keys(q.members);
        q.f8(q, e);
      });
      C.k().ta.on("conferencemembershipchanged", function (e, n, l) {
        if (n === q.Db[0] && (e = l.gwa.yb, n = q.la.Ba(e.toString()).get("protoInfo").status, (n === "not_avail" || n === "dnd") && q.Ux.push(e), n === "avail" || n === "talk_to_me" || n === "busy")) {
          q.members[e] = !0, n = C.k().Pf.zd(), C.k().ta.kf(e.toString(), n, q.Pz);
        }
      });
      q.la.on("silentupdate", function (e, h) {
        Ext.each(h, function (l) {
          if (q.Ux.includes(l.uin)) {
            var n = q.la.Ba(l.uin.toString()).get("protoInfo").status;

            if (n === "avail" || n === "talk_to_me" || n === "busy") {
              n = q.Ux.indexOf(l.uin), q.Ux.splice(n, 1), q.members[l.uin] = !0, new Ext.util.DelayedTask(function () {
                var b = C.k().Pf.zd();
                C.k().ta.kf(l.uin.toString(), b, q.Pz);
              }).delay(2000);
            }
          }
        });
      });
    },
    beforedestroy: function (c) {
      window.localStorage.setItem("window_lock", !1);
      this.Pa.off(JitsiMeetJS.events.conference.TRACK_ADDED, this.uz.bind(this));
      this.Pa.off(JitsiMeetJS.events.conference.TRACK_REMOVED, this.w6.bind(this));
      this.Pa.off(JitsiMeetJS.events.conference.CONFERENCE_JOINED, this.k6.bind(this));
      this.Pa.off(JitsiMeetJS.events.conference.CONFERENCE_LEFT, this.l6.bind(this));
      this.Pa.off(JitsiMeetJS.events.conference.USER_LEFT, this.y6.bind(this));
      this.Pa.off(JitsiMeetJS.events.conference.USER_JOINED, this.x6.bind(this));
      this.Pa.off(JitsiMeetJS.events.conference.USER_STATUS_CHANGED, this.z6.bind(this));
      this.Pa.off(JitsiMeetJS.events.conference.TRACK_MUTE_CHANGED, this.v6.bind(this));
      this.Pa.off(JitsiMeetJS.events.conference.CONNECTION_STATS, this.q6.bind(this));
      this.Pa.off(JitsiMeetJS.events.conference.TRACK_AUDIO_LEVEL_CHANGED, this.u6.bind(this));
      this.Pa.off(JitsiMeetJS.events.conference.USER_ROLE_CHANGED, this.vz.bind(this));
      c.Xc.destroy();
      C.k().lf();
      c.m5(c);
      C.k().yz();
      Ext.getBody().hasCls("x-window-maximized-ct") && Ext.getBody().removeCls("x-window-maximized-ct");
    },
    restore: function () {
      this.setSize(this.width - 1, this.height);
      this.doLayout();
    },
    afterlayout: function (c) {
      Ext.getBody().getViewSize();
      c.Xc.doLayout();
    },
    restore: function (c) {
      c.setWidth(window.width + 1);
      c.Xc.Vy = !1;
      c.Xc.removeConferenceContainerFullScreenStyle();
    },
    maximize: function (c, f) {
      c.Xc.Vy = !0;
      c.Xc.setConferenceContainerFullScreenStyle();
      c.E5(window, f);
    },
    move: function (c, n, l, f) {
      c.uZ(c, n, l, f);
    },
    show: t()
  },
  sea: function () {
    var c = this.Xc.addParticipantToView(m, this.Wc, this.Jf, "localVideo", "localAudio", this.nJ, this.uin, this.uin),
        q = c.config.audioId,
        p = c.config.videoId,
        o = Ext.getCmp(this.uin).getEl().down(".conference-track-container"),
        f = "<video autoplay='1' id='" + p + "' style='max-width: 100%' class='conference-track video-track'/>";
    o.insertHtml("afterBegin", "<audio autoplay='1' id='" + q + "' class='conference-track audio-track'/>");
    o.insertHtml("afterBegin", f);
    var p = Ext.getCmp("video-conference-popup-window").getEl().down("#" + p).dom,
        q = Ext.getCmp("video-conference-popup-window").getEl().down("#" + q).dom,
        u = this;
    this.ay(!1, this, this.Wc, p, q).then(function (b) {
      b.forEach(function (g) {
        u.jta(c, g);
      });
    })["catch"](t());
  },
  jta: function (c, f) {
    f.track.kind === "audio" && c.Yz(f.isMuted());
    f.track.kind === "video" && c.Xz(f.isMuted());
  },
  gea: function (c) {
    var f = Ext.create("Ext.container.Container", {
      cls: "video-control-container",
      html: '<div class="empty-left-div"></div><div class="video-control-buttons-container"><a id="mute-button" title=' + E.lang.uO + ' class="video-control-button"></a><a id="change-video-state-button" title=' + E.lang.tO + ' class="video-control-button"></a><a id="call-button" title=' + E.lang.rO + ' class="video-control-button call-button"></a><a id="add-participant-button" title=' + E.lang.vO + ' class="video-control-button add-participant-button"></a><a id="screen-share-button" title=' + E.lang.xO + ' class="video-control-button share-screen-button"></a></div><div class="empty-left-div"></div>'
    });
    c.add(f);
    Ext.getCmp("conference-video-container").getEl().insertHtml("beforeEnd", '<div id="conference-title"></div>');
  },
  QM: function () {
    this.center();
  },
  w6: function (c) {
    var h = c.getId(),
        f = this.hf[c.ownerEndpointId];
    f !== k && f.forEach(function (b) {
      b.stream.id === h && c.videoType === "desktop" && this.Xc.PM();
    }, this);
  },
  uz: function (c) {
    if (!c.isLocal()) {
      var p = c.getParticipantId();
      this.hf[p] || (this.hf[p] = []);
      var o = this.hf[p].push(c),
          o = p + c.getType() + o,
          n = this.Xc.getPariticipantViewById(p),
          f = Ext.getCmp(p).getEl().down(".conference-track-container");
      c.videoType === "desktop" && this.Nt("desktop", n);
      c.getType() === "video" ? (c.addEventListener(JitsiMeetJS.events.track.TRACK_VIDEOTYPE_CHANGED, function (e) {
        e === "desktop" && this.Nt(e, n);
      }.bind(this)), p = Ext.getCmp(p).getEl().down(".video-track"), p !== m && p.destroy(), n.Xz(c.isMuted()), p = "<video autoplay='1' id='" + o + "' style='max-width: 100%' class='conference-track video-track'/>") : (p = Ext.getCmp(p).getEl().down(".audio-track"), p !== m && p.destroy(), n.Yz(c.isMuted()), p = "<audio autoplay='1' id='" + o + "' class='conference-track audio-track'/>");
      f.insertHtml("beforeEnd", p);
      o = Ext.getCmp("conference-video-container").getEl().down("#" + o).dom;
      c.attach(o);
      c.getType() === "audio" && C.k().lf();
    }
  },
  Nt: function (c, f) {
    c === "desktop" && (this.Xc.PM(), this.Xc.Nt(f.id));
  },
  k6: function () {
    this.VK = !0;
  },
  y6: function (c) {
    if (this.hf[c]) {
      var f = this.hf[c];
      this.Xc.getPariticipantViewById(c);
      f.forEach(function (e) {
        e.detach();
      });
      this.Xc.removeParticipantFromView(c);
    }
  },
  l6: t(),
  vz: function (c, h) {
    if (h === "moderator" && this.Cd) {
      this.dL(this.Pa.participants);
      this.Pa.lock(this.Ae.wl);
      var f = Object.keys(this.members);
      Ext.Array.each(f, function (g) {
        if (g !== this.uin) {
          var l = C.k().Pf.zd();
          C.k().ta.kf(g, l, this.Pz);
        }
      }, this);
    }
  },
  dL: function (c) {
    for (var f in c) {
      this.Pa.kickParticipant(f);
    }
  },
  x6: function (c, f) {
    this.hf[c] = [];
    this.Xc.addParticipantToView(m, !1, !1, "noVideoId", "noAudioId", f._displayName, this.uin, f._id);
  },
  pN: function () {
    this.Pz = this.Ae.p2("conference");
    this.yc = this.Ae.uj;
    C.k().I6();
  },
  ss: function () {
    C.k().lf();
  },
  qN: function () {
    C.k().E4();
  },
  l_: t(),
  $Da: function (c) {
    Object.keys(c).forEach(function (e) {
      C.k().Ja.hd().getItem(e).sendMessage(E.lang.LP, !0);
    });
  },
  m_: function () {
    C.k().lf();
    this.nh(!1);
  },
  Aea: function (c) {
    if (c.Dh.environment === "test") {
      this.tbar = [{
        xtype: "button",
        text: "Dodaj uzytkownika (test)",
        handler: function () {
          this.ownerCt.ownerCt.Xc.addParticipantToView(m, !0, !0, 111, 111, "marcin", this.uin, m).Bea();
        }
      }, {
        xtype: "button",
        text: "Usu\u0144 u\u017cytkownika (test)",
        handler: function () {
          this.ownerCt.ownerCt.Xc.removeParticipantFromView(m);
        }
      }];
    }
  }
});