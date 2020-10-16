Ext.define(E.f.windows.bB, {
  extend: "Ext.window.Window",
  constrain: !0,
  dc: [],
  CZ: m,
  DZ: m,
  Coa: !1,
  L4: {
    iAa: !0,
    bAa: "mbocklcggfhnbahlnepmldehdhpjfcjp",
    aAa: !1,
    dAa: ["screen", "window"],
    cAa: "0.1",
    eAa: !0
  },
  constructor: function (c) {
    this.initConfig(c);
    this.callParent(arguments);
    this.C_ = {
      hosts: c.Dh.hosts,
      disableSimulcast: !0,
      bosh: c.Dh.bosh,
      channelLastN: c.Dh.channelLastN,
      websocket: c.Dh.websocket,
      openBridgeChannel: c.Dh.openBridgeChannel,
      p2p: c.Dh.p2p,
      useStunTurn: c.Dh.useStunTurn
    };
  },
  minimize: function () {
    if (this.jz) {
      this.width = this.lM, this.expand("", !0), this.setPagePosition(this.jM, this.kM), this.jz = !1, c = this.header.getEl().down(".x-tool-restore"), c.addCls("x-tool-minimize"), c.removeCls("x-tool-restore");
    } else {
      this.lM = this.width;
      this.jM = this.x;
      this.kM = this.y;
      this.collapse();
      this.jz = !0;
      var c = this.header.getEl().down(".x-tool-minimize");
      c.addCls("x-tool-restore");
      c.removeCls("x-tool-minimize");
    }
  },
  E5: function () {
    window.scroll({
      top: 0,
      left: 0,
      $ya: "smooth"
    });
  },
  uZ: function (c, h, f) {
    f < 0 && c.setPagePosition(h, 0);
    c.maximized === !0 && f > 0 && c.setPagePosition(h, 0);
  },
  ay: function (c, p, o, n, f) {
    if (f !== k) {
      p.CZ = f;
    }

    if (n !== k) {
      p.DZ = n;
    }

    return window.navigator.mediaDevices.enumerateDevices().then(function (g) {
      var e = m,
          g = g.some(function (h) {
        e = h.deviceId;
        return h.kind === "videoinput";
      });

      if (g === !1) {
        var b = p.WI(c, g, m, p, o, n, f);
      }

      g && (b = p.WI(c, g, e, p, o, n, f));
      return Promise.resolve(b);
    });
  },
  WI: function (c, z, u, o, f, B, y) {
    var w = m,
        w = m,
        w = c ? {
      devices: ["video"],
      cameraDeviceId: u
    } : z ? {
      devices: ["audio", "video"],
      cameraDeviceId: u
    } : {
      devices: ["audio"]
    };
    return w = JitsiMeetJS.createLocalTracks(w, !1).then(function (e) {
      o.nZ(e, B, y);
      o.nh(f);
      o.wna(o);
      return o.dc;
    })["catch"](function (h) {
      var n = h.gum.error,
          l = h.name,
          h = h.message;

      if (l === "gum.general" && n.name === "NotReadableError" && h === "Could not start video source") {
        return o.WI(!1, m, o, f, B, y), o.dc;
      }

      l === "gum.permission_denied" && o.nA({
        state: "prompt"
      }, o);
    });
  },
  nZ: function (c, h, f) {
    c.forEach(function (b) {
      b.getType() === "video" && (this.Pa.removeTrack(this.dc[1], m).then(function () {
        this.Pa.replaceTrack(m, b);
      }.bind(this))["catch"](function () {
        this.Pa.replaceTrack(m, b);
      }.bind(this)), b.attach(h), b.on(JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED, this.r6.bind(this, c, h, f)));
      b.getType() === "audio" && this.Pa.addTrack(b);
    }, this);
    this.dc !== m && this.Ara();
    this.dc = this.dc.concat(c);
  },
  NDa: function (c) {
    c.forEach(function (b) {
      b.getType() === "video" && b.off(JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED, this.r6.bind(this, c, attachedVideo, attachedAudio));
    }, this);
  },
  Ara: function () {
    this.dc = this.dc.filter(function (c) {
      return c.getType() === "audio";
    });
  },
  r6: function (c, n, l) {
    var f = this;

    if (l === k) {
      l = f.CZ;
    }

    if (n === k) {
      n = f.DZ;
    }

    c.forEach(function (e) {
      if (e.getType() === "video" && e.videoType === "desktop") {
        f.Wc = f.H9, f.ay(!0, f, f.Wc, n, l), f.JM(f), f.cN(f);
      }
    }, this);
  },
  JM: function (c) {
    var f = c.el.down("#change-video-state-button");
    c.Wc ? f.addCls("video-on-button") : f.addCls("video-off-button");
  },
  nh: function (c) {
    if (this.dc != m) {
      for (var f = 0; f < this.dc.length; f++) {
        this.dc[f].track.kind === "video" && (c ? this.dc[f].unmute() : this.dc[f].mute());
      }
    }
  },
  R5: function (c) {
    if (this.dc != m) {
      for (var f = 0; f < this.dc.length; f++) {
        this.dc[f].track.kind === "audio" && (c ? this.dc[f].mute() : this.dc[f].unmute());
      }
    }
  },
  wna: function (c) {
    c = c.el.down("#request-permissions-message");
    c !== m && c.removeCls("request-permissions-message-visible");
  },
  nA: function (c, h) {
    if (h.Coa === !1 && c.state === "prompt") {
      var f = h.el.down("#request-permissions-message");
      f.addCls("request-permissions-message-visible");
    }

    c.state === "denied" && (f = h.el.down("#request-permissions-message"), f.addCls("request-permissions-message-visible"));
  },
  a_: function (c) {
    window.navigator.mediaDevices.enumerateDevices().then(function (p) {
      var o = !1,
          f = !1,
          b = p.some(function (e) {
        e.label !== "" && (o = !0);
        return e.kind === "videoinput";
      }),
          p = p.some(function (e) {
        e.label !== "" && (f = !0);
        return e.kind === "audioinput";
      });

      if (b && !p && !o) {
        var q = {
          state: "prompt"
        };
        c.nA(q, c);
      }

      !b && p && !f && (q = {
        state: "prompt"
      }, c.nA(q, c));

      if (b && p && (!o || !f)) {
        q = {
          state: "prompt"
        }, c.nA(q, c);
      }
    });
  },
  Fta: function (c) {
    Ext.getCmp("video-conference-popup-window").getEl().down("#screen-share-button").addCls("red-share-screen-button");
    c.aL = !0;
  },
  cN: function (c) {
    Ext.getCmp("video-conference-popup-window").getEl().down("#screen-share-button").removeCls("red-share-screen-button");
    c.aL = !1;
  },
  f8: function (c, h) {
    var f = m;
    c.aL ? (c.cN(c), c.dc.some(function (e) {
      f = e;
      return e.videoType === "desktop";
    }), f.dispose()) : (c.Fta(c), c.H9 = c.Wc, c.dc.some(function (e) {
      f = e;
      return e.getType() === "video";
    }) ? f.dispose().then(function () {
      c.n2(c, h);
    }) : c.n2(c, h));
  },
  n2: function (c, f) {
    JitsiMeetJS.createLocalTracks({
      devices: ["desktop"]
    }).then(function (e) {
      c.nZ(e);
      c.Wc = !0;
      c.nh(c.Wc);
      e = Ext.getCmp("video-conference-popup-window").getEl().down("#change-video-state-button");
      e.removeCls("video-off-button");
      e.addCls("video-on-button");
      var e = c.Ae.SZ(c.uin),
          b = C.k().Pf.zd();
      c.Hsa(f, b, e);
    })["catch"](function (g) {
      g.name !== JitsiMeetJS.errors.track.SCREENSHARING_USER_CANCELED && (g.name === JitsiMeetJS.errors.track.SCREENSHARING_GENERIC_ERROR ? alert("B\u0142\u0105d udostepniania ekranu!") : g.name === JitsiMeetJS.errors.track.PERMISSION_DENIED && alert("Brak uprawnie\u0144 do udost\u0119pniania ekranu!"));
      c.cN(c);
      var g = Ext.getCmp("video-conference-popup-window").getEl().down("#localVideo").dom,
          b = Ext.getCmp("video-conference-popup-window").getEl().down("#localAudio").dom;
      c.ay(!0, c, c.Wc, g, b);
    });
  },
  m5: function (c) {
    c.Pa !== m && c.Pa.leave();

    if (c.dc !== m) {
      for (var f = 0; f < c.dc.length; f++) {
        c.dc[f].dispose();
      }
    }

    c.connection.disconnect();
    delete c.connection;
    delete c.Pa;
  },
  Jfa: function (c, f) {
    C.k().ta.on("chatmessage", function () {
      c.Nea(f, 1, 0.2);
    });
  },
  Nea: function (c, h, f) {
    this.OBa = Ext.create("Ext.fx.Anim", {
      target: c,
      duration: 1000,
      from: {
        opacity: h
      },
      to: {
        opacity: f
      },
      iterations: 6
    });
  },
  Hsa: function (c, h, f) {
    c.forEach(function (e) {
      C.k().ta.kf(e, h, f);
    });
  }
});