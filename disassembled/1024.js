Ext.define(E.f.windows.mU, {
  extend: "Ext.container.AbstractContainer",
  alias: "widget.participantView",
  cls: "participant-container",
  tpl: ea,
  constructor: function (c) {
    this.callParent(arguments);
    this.initConfig(c);
    this.data.uin = c.uin;
    this.data.participantName = c.participantName;
    this.data.audioId = c.audioId;
    this.data.videoId = c.videoId;
    this.data.isCameraOn = c.isCameraOn;
    this.data.isMicrophoneOn = c.isMicrophoneOn;
    this.id = c.id;
    this.yI = Ext.create("Ext.container.AbstractContainer", {
      itemId: "conference-participant-info",
      xtype: "component",
      cls: "conference-participant-info",
      items: {
        xtype: "component",
        autoEl: {
          tag: "p",
          html: c.participantName
        }
      }
    });
    this.add(this.yI);
    this.J5 = Ext.create("Ext.Component", {
      itemId: "mic",
      xtype: "component",
      cls: "conference-mute-mic-info-off",
      autoEl: {
        tag: "img",
        src: "images/video-mic.svg"
      }
    });
    this.yI.add(this.J5);
    this.TH = Ext.create("Ext.Component", {
      itemId: "camera",
      xtype: "component",
      cls: "conference-mute-camera-info-off",
      autoEl: {
        tag: "img",
        src: "images/video-camera.svg"
      }
    });
    this.yI.add(this.TH);
  },
  Bea: function () {
    var c = new Ext.core.DomHelper.createTemplate('<video preload="metadata" id={id} style="max-width: 100%;" class="conference-track" loop muted><source src="{src}"></video>'),
        f = this.getEl().down(".conference-track-container");
    c.append(f, {
      id: "testvideo",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }, !0).dom.autoplay = !0;
  },
  data: {
    id: "",
    uin: "",
    participantName: "",
    audioId: "noaudio",
    videoId: "novideo",
    isMicrophoneOn: !1,
    isCameraOn: !1
  },
  Xz: function (c) {
    var f = this.getEl().down(".conference-track-container");
    (this.data.Wc = c) ? (f.addCls("hide-conference-track-container"), this.TH.el.dom.src = "images/video-camera-off.svg") : (f.hasCls("hide-conference-track-container") && f.removeCls("hide-conference-track-container"), this.TH.el.dom.src = "images/video-camera.svg");
  },
  Yz: function (c) {
    this.data.tCa = c;
    this.J5.el.dom.src = c ? "images/video-mic-muted.svg" : "images/video-mic.svg";
  }
});