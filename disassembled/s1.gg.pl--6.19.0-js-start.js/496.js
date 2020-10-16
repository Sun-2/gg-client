sunrise.extend(gg.aa.hi.prototype, {
  Zb: {},
  length: 0,
  kea: function (c, f) {
    typeof this.Zb[c] == "undefined" && (this.Zb[c] = []);
    this.Zb[c][this.Zb[c].length] = f;
    this.length++;
  },
  add: function (c) {
    return this.kea(gg.aa.hi.$v, c);
  },
  Gla: function (c, h) {
    if (typeof this.Zb[c] == "undefined") {
      return m;
    }

    var f;

    if (typeof h != "undefined" && h) {
      return f = this.Zb[c], this.length -= f.length, this.k7(c), f;
    }

    f = this.Zb[c].shift();
    this.length--;
    this.Zb[c].length == 0 && this.k7(c);
    return f;
  },
  get: function (c) {
    return this.Gla(gg.aa.hi.$v, typeof c != "undefined");
  },
  k7: function (c) {
    delete this.Zb[c];
  },
  remove: function () {
    this.Zb[gg.aa.hi.$v].length > 0 && this.Zb[gg.aa.hi.$v].shift();
  },
  clear: function () {
    this.Zb = {};
    this.length = 0;
  },
  sAa: function (c) {
    return typeof this.Zb[c] != "undefined";
  },
  isEmpty: function () {
    return this.length == 0;
  }
});