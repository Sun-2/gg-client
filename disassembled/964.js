Ext.define(E.Kd.gG, {
  extend: "Ext.Component",
  Le: m,
  ac: m,
  Dr: m,
  constructor: function () {
    this.callParent(arguments);
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
  dha: function (c) {
    this.Dr = c;
    this.fireEvent("change");
  },
  bh: function () {
    this.ac = C.k().At.rouletteSlider;
    this.Le = this.ac.make({
      el: this.el.dom,
      props: {
        consumeAgeRangeChanged: this.dha.bind(this),
        ageRange: this.Dr,
        lang: this.kK()
      }
    });
    this.Le.render();
  },
  MAa: x("Dr"),
  kK: function () {
    return {
      ROULLETTE_AGE_RANGE: E.lang.WU,
      ROULETTE_AGE_RANGE_YEARS: E.lang.DU
    };
  }
});