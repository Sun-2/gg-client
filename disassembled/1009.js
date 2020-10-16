Ext.define(E.f.Ma.yE, {
  extend: E.f.Ma.Zf,
  ka: Ext.applyIf({
    ".link": function (c, h) {
      c.preventDefault();

      if (h.parentNode && h.parentNode.nodeName.toLowerCase() === "a") {
        var f = h.parentNode.attributes;
        f && f.href && f.href.value && C.k().sg(f.href.value, this);
      }
    }
  }, E.f.Ma.Zf.prototype.ka),
  constructor: function (c) {
    c.nf = "lifestream-event-generic";
    this.callParent([c]);
  },
  prepareData: function () {
    return this.$b.data;
  }
});