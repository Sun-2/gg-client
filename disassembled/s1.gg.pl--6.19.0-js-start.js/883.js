Ext.define(E.f.notifications.qF, {
  extend: C.f.Jb,
  html: "&nbsp;",
  data: {},
  cls: "sr-notifications-bottom-bar",
  $r: {
    ".sr-notifications-close": function () {
      this.Hd();
    },
    ".sr-notifications-show-more-btn": function () {
      this.store.ct();
      this.Hd();
    }
  },
  constructor: function () {
    this.callParent(arguments);
    this.on("afterrender", this.gb, this);
    this.store.on("datachanged", this.Hd, this);
    this.tpl = C.k().da.ma("notifications-all-more");
  },
  gb: function () {
    this.el.on("click", this.Ia, this);
    this.store.on("loading", this.loading, this);
  },
  Hd: function () {
    this.tpl.overwrite(this.el, {
      showMore: this.store.getCount() > 0,
      preloader: !1
    });
  },
  loading: function () {
    this.tpl.overwrite(this.el, {
      showMore: !0,
      preloader: !0
    });
  },
  Ia: function (c) {
    for (var f in this.$r) {
      if (c.getTarget(f)) {
        this.$r[f].call(this, c);
        break;
      }
    }
  },
  destroy: function () {
    this.un("afterrender", this.gb, this);
    this.el.un("click", this.Ia, this);
    this.store.un("loading", this.loading, this);
  }
});