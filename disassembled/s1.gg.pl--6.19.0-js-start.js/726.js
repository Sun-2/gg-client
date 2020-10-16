if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (c, w) {
    var q, o;
    this == m && j(new TypeError(" this is null or not defined"));
    var f = Object(this),
        y = f.length >>> 0;
    ({}).toString.call(c) != "[object Function]" && j(new TypeError(c + " is not a function"));
    w && (q = w);

    for (o = 0; o < y;) {
      var u;
      o in f && (u = f[o], c.call(q, u, o, f));
      o++;
    }
  };
}