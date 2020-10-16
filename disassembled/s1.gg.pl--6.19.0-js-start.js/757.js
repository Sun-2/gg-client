Ext.define(C.f.uu, {
  extend: C.f.ai,
  items: m,
  vp: m,
  DA: m,
  To: function () {
    this.vp = [];
    this.DA = Ext.get(document.createElement("ul"));
    this.DA.addCls("menu");

    for (var c = 0, p = this.items.length; c < p; c++) {
      var o = Ext.get(document.createElement("li")),
          n = this.items[c],
          f = this.s3(n.click);
      o.dom.innerHTML = n.text;
      o.on("click", f.fn, f.scope);
      n.cls && o.addCls(n.cls);
      this.vp.push(o);
      o.appendTo(this.DA);
    }

    return this.DA;
  },
  destroy: function () {
    if (this.items) {
      for (var c = 0, h = this.items.length; c < h; c++) {
        var f = this.s3(this.items[c].click);
        this.vp[c].un("click", f.fn, f.scope);
        this.vp[c].destroy();
        delete this.vp[c];
        delete this.items[c];
      }
    }

    this.vp = this.items = m;
    return this.callParent();
  },
  s3: function (c) {
    var h, f;
    typeof c === "object" ? (h = c.fn, f = c.scope) : h = c;
    return {
      fn: h,
      scope: f || this
    };
  }
});