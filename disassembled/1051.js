Ext.define(E.f.layout.Ga.rd.zq, {
  extend: E.f.layout.Ga.$B,
  i5: {
    chat: E.f.layout.Ga.rd.WB,
    conference: E.f.layout.Ga.rd.dC
  },
  fa: m,
  caller: !1,
  Qfa: m,
  toa: m,
  ld: m,
  Ad: m,
  jza: {},
  constructor: function (c) {
    c = c || {};
    this.callParent([c]);
    this.fa = C.k().fa;
    this.ld = Ext.data.StoreManager.lookup("InvitationsMineStore");
    this.Ad = Ext.data.StoreManager.lookup("InvitationsTheirsStore");
    this.toa = E.api.Ob;
  },
  p0: function (c) {
    var f = this.getActiveItem();
    c === f && this.II(c);
    Ext.isIE && this.items.each(function (b) {
      c !== b && b && b.Nb && (b.Nb.RDa(), b.bM());
    }, this);
    C.k().fireEvent("elementpositionchanged", this.tg);
    this.callParent(arguments);
  },
  II: function (c, f) {
    this.callParent(arguments);
    f && this.items.each(function (b) {
      c !== b && b.collapse();
    }, this);
    C.k().Lc.FH(c) && (f ? C.k().Lc.show() : C.k().Lc.hide());
  },
  D6: function (c) {
    this.vL || this.p7(c, []);
    this.callParent(arguments);
  },
  Tsa: function (c, f) {
    f = f || this.getActiveItem();
    f.Tsa(c);
  }
});