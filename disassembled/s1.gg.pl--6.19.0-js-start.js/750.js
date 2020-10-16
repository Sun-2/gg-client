Ext.define(C.core.mixins.nU, {
  pm: pm,
  constructor: function (c) {
    this.callParent([c]);
  },
  destroy: t(),
  Ji: function () {
    return this.el.select("iframe").elements[0];
  },
  jm: function () {
    return (this.address || this.Ji().src).match(/^https?:\/\/[^\?#\/]+/)[0];
  },
  post: function (c, h, f) {
    f = f || {
      pt: t(),
      Si: t()
    };
    pm({
      target: this.view.Ji().contentWindow,
      type: [this.name, c].join("_"),
      data: h,
      error: f.pt,
      success: f.Si,
      origin: this.jm()
    });
  },
  bind: function (c, f) {
    this.pm.bind([this.name, c].join("_"), f, this.jm());
    this.fireEvent.apply(this, ["bind"].concat(arguments));
  },
  unbind: function (c, f) {
    this.pm.unbind([this.name, c].join("_"), f);
    this.fireEvent.apply(this, ["unbind"].concat(arguments));
  }
});