Ext.define(C.core.controllers.nc, {
  mixins: {
    observable: "Ext.util.Observable"
  },
  name: m,
  view: m,
  models: {},
  stores: {},
  Bi: m,
  initConfig: {},
  constructor: function (c) {
    c = c || {};
    Ext.apply(this, c);
    this.mixins.observable.constructor.call(this, c);
  },
  kd: function () {
    if (!Ext.isEmpty(this.initConfig.view)) {
      this.view = Ext.create(this.initConfig.view);
    }
  },
  Una: function () {
    Ext.isEmpty(this.initConfig.models) || Ext.iterate(this.initConfig.models, function (c, f) {
      this.Tna(c, f);
    }, this);
  },
  Tna: function (c, f) {
    this.models[c] = Ext.create(f);
  },
  hoa: function () {
    Ext.isEmpty(this.initConfig.stores) || Ext.iterate(this.initConfig.stores, function (c, f) {
      this.JK(c, f);
    }, this);
  },
  JK: function (c, f) {
    this.stores[c] = Ext.create(f);
  },
  init: function (c) {
    if (c) {
      this.initConfig = c;
    }

    this.Una();
    this.hoa();
    this.kd();
  },
  execute: t(),
  rg: Ext.emptyFn,
  destroy: function () {
    Ext.isEmpty(this.view) || this.view.destroy();
    this.view = m;
  }
});