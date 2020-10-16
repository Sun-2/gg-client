Ext.define(E.Kd.aH, {
  extend: "Ext.Component",
  Le: m,
  ac: m,
  constructor: function (c) {
    c = c || {};
    this.callParent(arguments);
    this.volume = parseFloat(c.volume);
    this.Kf = parseFloat(c.Kf);
  },
  initComponent: function () {
    this.on("render", this.bh, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.un("render", this.bh, this);
    this.Le.destroy();
    this.callParent();
  },
  Mia: function (c) {
    c = this.Hla(c);

    if (c != this.Kf) {
      this.Kf = this.volume;
    }

    this.volume = c;

    if (this.timeout) {
      clearTimeout(this.timeout), this.timeout = m;
    }

    this.timeout = setTimeout(function () {
      this.fireEvent("setvolume", {
        volume: this.volume,
        Kf: this.Kf
      }, this);
    }.bind(this), 1500);
  },
  bh: function () {
    this.ac = C.k().At.volumeSlider;
    this.Le = this.ac.make({
      el: this.el.dom,
      props: {
        consumeVolumeChanged: this.Mia.bind(this),
        volume: this.Wla(this.volume),
        lang: this.kK()
      }
    });
    this.Le.render();
  },
  Wla: function (c) {
    return parseInt(c * 100);
  },
  Hla: function (c) {
    return c / 100;
  },
  kK: function () {
    return {
      SETTINGS_SOUNDS_VOLUME_LABEL: E.lang.zW,
      SETTINGS_SOUNDS_QUIET: E.lang.yW,
      SETTINGS_SOUNDS_LOUD: E.lang.uW
    };
  }
});