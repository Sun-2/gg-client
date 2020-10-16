Ext.define(E.f.app.$C, {
  extend: E.f.app.mB,
  c8: function (c) {
    typeof c !== "string" && j("src must be a string");
    var f = c.split("?"),
        c = f.shift(),
        f = f.join("?"),
        c = [c, f].join("?"),
        c = c.replace(/\?\s*$/, ""),
        f = this.Ji();
    c[c.length - 1] === "#" && (c = c.substr(0, c.length - 1));

    if (f.src !== c) {
      f.src = c;
    }
  }
});