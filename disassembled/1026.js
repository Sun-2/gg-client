Ext.define(E.f.windows.YY, {
  extend: "Ext.container.AbstractContainer",
  alias: "widget.conferenceView",
  cls: "conference-video-container",
  id: "conference-video-container",
  Vy: !1,
  Yv: "grid-columns-1-participant",
  PG: "grid-columns-2-participants",
  yB: "grid-columns-participants-center",
  xB: "grid-columns-participants-5-center",
  rv: "grid-columns-4-participants",
  mw: "grid-columns-6-participants",
  MC: "grid-columns-8-participants",
  JW: "grid-columns-16-participants",
  Ys: !1,
  Vb: m,
  constructor: function (c) {
    this.callParent(arguments);
    this.initConfig(c);
    this.Vb = [];
  },
  xtype: "conferenceView",
  Sua: function (c, f) {
    f.Ys ? f.Nt(c) : f.PM();
  },
  Nt: function (c) {
    this.Ys = !0;
    this.el.addCls("grid-off");
    this.Vb.forEach(function (b) {
      b.id !== c && b.el.addCls("hide-participant");
    });
  },
  PM: function () {
    this.el.removeCls("grid-off");
    this.Vb.forEach(function (c) {
      c.el.hasCls("hide-participant") && c.el.removeCls("hide-participant");
    });
  },
  addParticipantToView: function (D, B, z, y, w, o, f, c) {
    var G = D === m ? this : D;
    c === m && (c = "participant" + this.Vb.length);
    D = Ext.create(E.f.windows.mU, {
      participantName: o,
      uin: f,
      videoId: y,
      audioId: w,
      isMicrophoneOn: z,
      isCameraOn: B,
      id: c,
      gridArea: "participant" + this.Vb.length
    });
    G.add(D);
    this.Vb.push(D);
    this.S7(G);
    this.Ys && D.addCls("hide-participant");
    G = this;
    D.getEl().on({
      click: function () {
        G.Ys = !G.Ys;
        G.Sua(c, G);
      }
    });
    return D;
  },
  getPariticipantViewById: function (c) {
    var f = m;
    this.Vb.forEach(function (b) {
      b.id === c && (f = b);
    });
    return f;
  },
  setConferenceContainerFullScreenStyle: function () {
    var c = this.el.hasCls("conference-video-container-full-screen");
    this.Vb.length !== 2 && (c || this.el.addCls("conference-video-container-full-screen"));
    this.Vb.length >= 6 && this.Vb.length <= 12 && this.el.removeCls("conference-video-container-full-screen");
  },
  removeConferenceContainerFullScreenStyle: function () {
    this.el.hasCls("conference-video-container-full-screen") && this.el.removeCls("conference-video-container-full-screen");
  },
  S7: function (c) {
    this.Vb.length == 0 && (this.zj(c), c.el.addCls(this.Yv));
    this.Vb.length === 1 && (this.zj(c), c.el.addCls(this.Yv));
    this.Vb.length === 2 && (this.zj(c), this.removeConferenceContainerFullScreenStyle(), c.el.addCls(this.PG), c.el.addCls(this.yB));
    this.Vb.length === 3 && (this.zj(c), this.Vb[2].addCls("participant-single-orphan"), this.Vy && this.setConferenceContainerFullScreenStyle(), c.el.addCls(this.rv));
    this.Vb.length === 4 && (this.zj(c), this.Vb.forEach(function (e) {
      e.el.hasCls("participant-two-orphans-last") && e.el.removeCls("participant-two-orphans-last");
      e.el.hasCls("participant-two-orphans-pre-last") && e.el.removeCls("participant-two-orphans-pre-last");
      e.el.hasCls("participant-single-orphan") && e.el.removeCls("participant-single-orphan");
    }), this.Vy && this.setConferenceContainerFullScreenStyle(), c.el.addCls(this.rv));

    if (this.Vb.length === 5) {
      this.zj(c);
      var f = this.Vb[3];
      f.addCls("participant-two-orphans-pre-last");
      f = this.Vb[4];
      f.addCls("participant-two-orphans-last");
      c.el.addCls(this.mw);
      c.el.addCls(this.xB);
    }

    this.Vb.length === 6 && (this.zj(c), c.el.addCls(this.mw), c.el.hasCls("conference-video-container-full-screen") && this.el.removeCls("conference-video-container-full-screen"), f = this.Vb[3], f.removeCls("participant-two-orphans-pre-last"), f = this.Vb[4], f.removeCls("participant-two-orphans-last"));
    this.Vb.length >= 7 && this.Vb.length <= 12 && (this.zj(c), c.el.addCls(this.MC), c.el.hasCls("conference-video-container-full-screen") && this.el.removeCls("conference-video-container-full-screen"));
    this.Vb.length >= 13 && this.Vb.length <= 16 && this.setConferenceContainerFullScreenStyle();
  },
  zj: function (c) {
    c.el.hasCls(this.Yv) && c.el.removeCls(this.Yv);
    c.el.hasCls(this.PG) && c.el.removeCls(this.PG);
    c.el.hasCls(this.rv) && c.el.removeCls(this.rv);
    c.el.hasCls(this.mw) && c.el.removeCls(this.mw);
    c.el.hasCls(this.MC) && c.el.removeCls(this.MC);
    c.el.hasCls(this.JW) && c.el.removeCls(this.JW);
    c.el.hasCls(this.yB) && c.el.removeCls(this.yB);
    c.el.hasCls(this.xB) && c.el.removeCls(this.xB);
  },
  removeParticipantFromView: function (c) {
    var c = this.getTestParticipantId(c),
        c = this.getTestParticipantId(c),
        f = this.getPariticipantViewById(c);
    this.Vb.splice(this.Vb.map(function (e) {
      return e.id;
    }).indexOf(c), 1);
    this.remove(f);
    this.S7(this);
  },
  getTestParticipantId: function (c) {
    c === m && (c = "participant" + (this.Vb.length - 1));
    return c;
  }
});