Ext.define(C.core.mixins.sG, {
  vk: m,
  constructor: function (c) {
    this.Ht = c.selector;
    this.qr();

    if (c.refresh) {
      this.Sz = !0;
    }
  },
  qr: function () {
    if (this.Ht && this.Ht[0] == "#") {
      this.vk = Ext.get(this.Ht.slice(1));
    } else {
      if (this.Ht) {
        this.vk = Ext.get(Ext.get(this.Ht).elements[0]);
      }
    }
  },
  sta: function (c) {
    this.Sz && this.qr();
    this.scrollToTop = c !== m && typeof c === "object" ? Ext.get(c).getScroll().top : typeof c === "number" ? c : m;
  },
  Zua: function () {
    this.Sz && this.qr();
    this.scrollToTop !== m && this.vk !== m && this.vk.scrollTo("top", this.scrollToTop);
  },
  scrollToTop: function (c) {
    this.Sz && this.qr();
    this.scrollToTop !== m && this.vk !== m && this.vk.scrollTo("top", c);
  },
  VDa: function () {
    this.Sz && this.qr();
    this.scrollToTop !== m && this.vk.scrollTo("top", 0);
  }
});