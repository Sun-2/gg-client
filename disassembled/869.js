Ext.define(E.f.sb.$G, {
  extend: "Ext.Container",
  cls: "main-video-advert-container",
  id: m,
  params: m,
  Xf: m,
  PA: m,
  events: ["adloaded", "addurationchange", "adclick", "adimpression", "adstarted", "adtagloaded", "adpaused", "adresumed", "adtagstartloading", "adfollowingredirect", "advolumemuted", "advolumechanged", "adcomplete", "adskipped", "adskippablestatechanged", "adfirstquartile", "admidpoint", "adthirdquartile", "aderror", "addestroyed"],
  interval: m,
  constructor: function (c) {
    c = c || {};
    this.id = c.id || "";
    this.PA = c.PA || "";
    this.params = {
      Mya: 7000,
      Tza: 10000,
      Nya: !0,
      PCa: 4,
      vEa: E.lang.UY,
      wEa: E.lang.VY,
      IEa: E.lang.WY,
      qAa: !0,
      eFa: {
        width: c.width || 100,
        height: c.height || 100,
        bFa: "normal",
        $za: 500
      }
    };
    this.app = C.k();
    this.app.eu = this;
    this.callParent(arguments);
  },
  initComponent: function () {
    this.callParent(arguments);
  },
  destroy: function () {
    this.callParent();
  },
  Pqa: function () {
    this.Xf = new RmpVast(this.id, this.params);
    this.Gfa();
    this.kfa();
  },
  Gfa: function () {
    for (var c = 0, f = this.events.length; c < f; c++) {
      this.Xf.container.addEventListener(this.events[c], this.Jia.bind(this, this));
    }
  },
  kfa: function () {
    for (var c = this.Xf.container.children[2].children, f = 0; f < c.length; f++) {
      c[f].addEventListener("click", this.iha.bind(this, this, c[f].id));
    }
  },
  Jia: function (c, h) {
    if (h && h.type) {
      var f = h.type;

      if (f === "adstarted") {
        c.interval = setInterval(function () {
          var b = c.Xf.getAdRemainingTime() != -1 ? c.Xf.getAdRemainingTime() : c.Xf.vpaidCreative.getAdRemainingTime();
          h.target.children[0].innerHTML = Ext.String.format(E.lang.TY, b.toFixed());
        }, 1000), c.Xf.setMute(!0), h.target.children[2].children[0].classList.add("mute-sound-off-button"), h.target.children[2].children[0].classList.remove("mute-sound-on-button"), h.target.parentElement.children[0].classList.add("d-none"), h.target.classList.remove("d-none");
      }

      if (f === "adclick") {
        c.Xf.stopAds(), clearInterval(c.interval), h.target.children[0].innerHTML = "", h.target.classList.add("d-none"), h.target.parentElement.children[0].classList.remove("d-none");
      }

      if (f === "adcomplete") {
        clearInterval(c.interval), h.target.children[0].innerHTML = "", h.target.classList.add("d-none"), h.target.parentElement.children[0].classList.remove("d-none");
      }
    }
  },
  iha: function (c, h, f) {
    f.preventDefault();
    h === "mute-audio-button" && (c.Xf.getMute() ? (c.Xf.setMute(!1), f.target.classList.add("mute-sound-on-button"), f.target.classList.remove("mute-sound-off-button")) : (c.Xf.setMute(!0), f.target.classList.add("mute-sound-off-button"), f.target.classList.remove("mute-sound-on-button")));
  },
  Voa: function () {
    this.Xf.loadAds(this.PA);
  }
});