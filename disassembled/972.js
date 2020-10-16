Ext.define(E.f.layout.va.wF, {
  extend: C.f.Jb,
  html: "&nbsp;",
  data: {},
  oJ: !1,
  lA: !1,
  $r: {
    ".sr-notifications-widget-more-close": function () {
      this.Gm.Nga();
      this.Hd();
    },
    ".sr-notifications-widget-more": function () {
      C.Ca("notifications");
    }
  },
  constructor: function () {
    this.callParent(arguments);
    this.on("afterrender", this.gb, this);
    this.store.on("datachanged", this.Hd, this);
    this.store.on("clear", this.Hd, this);
    this.Gm.on("itemadd", this.Mo, this);
    var c = this.store.data.length;
    this.lA = c > this.Vc.Be;
    this.data = {
      showMore: this.lA,
      countMore: c - this.Vc.Be
    };
    this.tpl = C.k().da.ma("notifications-widget-more");
  },
  gb: function () {
    this.el.on("click", this.Ia, this);
  },
  Hd: function () {
    var c = this.store.data.length,
        f = c > this.Vc.Be;
    this.tpl.overwrite(this.el, {
      showMore: f,
      countMore: c - this.Vc.Be
    });

    if (this.oJ || this.lA == !1 && f == !0) {
      this.oJ = !1, this.highlight();
    }

    this.lA = f;
  },
  Ia: function (c) {
    for (var f in this.$r) {
      if (c.getTarget(f)) {
        this.$r[f].call(this, c);
        break;
      }
    }
  },
  highlight: function () {
    var c = Ext.get(this.el.dom.firstChild);
    c.addCls("hover");
    setTimeout(function () {
      c.removeCls("hover");
    }, 5000);
  },
  Mo: function (c, f) {
    if (f >= this.Vc.Be) {
      this.oJ = !0;
    }
  },
  destroy: function () {
    this.un("afterrender", this.gb, this);
    this.el.un("click", this.Ia, this);
  }
});