Ext.define(E.ea.pR, {
  extend: E.ea.pf,
  name: "WindowScrollAppBehavior",
  vca: 110,
  task: m,
  initEvents: function () {
    this.callParent(arguments);
    this.owner.on("enter", this.Pha, this);
    this.owner.on("leave", this.dia, this);
  },
  Pha: function () {
    this.xka();
  },
  dia: function () {
    this.I2();
  },
  xka: function () {
    var c = this.KJ();
    c && this.FK(c);
    Ext.EventManager.onWindowResize(this.s1, this);

    if (Ext.isIE) {
      Ext.EventManager.on(window, "scroll", this.LI, this);
    } else {
      Ext.get(window.document).on("scroll", this.LI, this);
    }
  },
  I2: function () {
    Ext.EventManager.removeResizeListener(this.LI, this);
    Ext.getBody().un("resize", this.s1, this);
  },
  LI: function () {
    this.task && this.task.cancel();
    this.task = new Ext.util.DelayedTask(function () {
      this.FK(this.KJ());
    }, this);
    this.task.delay(200);
  },
  s1: function () {
    this.FK(this.KJ());
  },
  KJ: function () {
    var c = Ext.getBody(),
        h = c.getScroll().top,
        f = c.getSize().height,
        c = c.getViewSize().height;
    return f > c && f <= h + c + this.vca;
  },
  onRemove: function () {
    this.callParent(arguments);
    this.I2();
  },
  FK: function (c) {
    c && (this.owner.post("WINDOW_SCROLLED_BOTTOM", c), this.owner.fireEvent("windowscrolledbottom", c));
  }
});