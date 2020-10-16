Ext.define(C.core.ye.NF, {
  mixins: {
    observable: "Ext.util.Observable"
  },
  history: Ext.History,
  constructor: function (c) {
    Ext.apply(this, c);
    typeof this.HL !== "function" && j("onInit is not a function");
    (this.history === m || typeof this.history !== "object") && j("history is not an object");
    this.mixins.observable.constructor.call(this, c);
    this.addEvents("dispatch");
    this.history.init(this.koa, this);
    return this;
  },
  koa: function (c) {
    c.on("change", this.dispatch, this);
    this.HL(c.getToken());
  },
  dispatch: function (c) {
    this.fireEvent("dispatch", c || "");
  },
  HL: Ext.emptyFn,
  destroy: function () {
    this.history.hasListener("change") && this.history.un("change", this.dispatch, this);
  }
});