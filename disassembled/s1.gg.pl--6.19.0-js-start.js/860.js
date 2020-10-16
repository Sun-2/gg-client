Ext.define(E.f.sb.AO, {
  extend: C.f.windows.cc,
  da: m,
  constructor: function (c) {
    c = c || {};
    this.Ab = c.Ab;
    this.app = C.k();
    this.fa = this.app.fa;
    this.callParent([{
      Gb: '<iframe  class="default-iframe"  src="' + this.Ki() + '" frameborder="0"></iframe>',
      Ab: this.Ab,
      cls: "account-confirm-container",
      Sb: c.Sb,
      buttons: [{
        selector: "div.cancel-no",
        fn: function () {
          this.Xa();
        },
        scope: this,
        Ib: !1
      }]
    }]);
  },
  initComponent: function () {
    this.callParent(arguments);
  },
  Ki: function () {
    return this.app.vma();
  },
  Ol: t()
});