Ext.define(E.f.sb.mu, {
  extend: "Ext.Container",
  fg: !0,
  da: m,
  Ja: m,
  $g: m,
  ar: 1000,
  constructor: function () {
    this.callParent(arguments);
  },
  initComponent: function () {
    this.ot = "nonactive";
    this.data = {};
    this.IK();
    this.callParent(arguments);
    this.fb();
  },
  destroy: function () {
    this.eb();
    this.callParent();
  },
  fb: function () {
    this.on("afterrender", this.gb, this);
    this.Ja.on("chatitemadded", this.Kl, this);
    this.Ja.on("chatitemremoved", this.Ll, this);
  },
  eb: function () {
    this.un("afterrender", this.gb, this);
    this.Ja.un("chatitemadded", this.Kl, this);
    this.Ja.un("chatitemremoved", this.Ll, this);
  },
  gb: function () {
    this.Kt();
  },
  Kt: function () {
    this.rendered && (this.Ja.i2() == 0 || this.Sp === !1 ? Ext.get(this.el).addCls(this.ot) : Ext.get(this.el).removeCls(this.ot));
  },
  Ll: function () {
    this.reload();
  },
  Kl: function () {
    this.reload();
  },
  IK: function () {
    this.html = '<iframe id="iframe-' + this.id + '" style="overflow:auto;width:100%;height:100%;" class="default-iframe"  src=""></iframe>';
  },
  Ki: x("xe"),
  clear: function () {
    var c = this.Bs();

    if (c) {
      c.src = "";
    }
  },
  reload: function () {
    this.Kt();
    this.$g && this.$g.cancel();
    this.$g = new Ext.util.DelayedTask();
    this.$g.delay(this.ar, this.pJ, this);
  },
  pJ: function () {
    var c = this.Bs();

    if (c) {
      c.src = this.Ki();
    }
  },
  Bs: function () {
    return Ext.getDom("iframe-" + this.id);
  },
  Sp: function () {
    this.show();
  },
  tna: function () {
    this.hide();
  }
});