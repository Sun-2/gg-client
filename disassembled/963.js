Ext.define(E.Kd.Av, {
  extend: "Ext.Component",
  Le: m,
  ac: m,
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
  Uha: function (c) {
    this.fireEvent("gifselected", c);
  },
  bh: function () {
    this.ac = C.k().At.giphy;
    this.Le = this.ac.make({
      el: this.el.dom,
      props: {
        handleGifClicked: this.Uha.bind(this)
      }
    });
    this.Le.render();
  },
  Fga: function () {
    this.ac.store.dispatch(this.ac.operations.clearList());
  }
});