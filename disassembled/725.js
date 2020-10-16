if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (c) {
    (this === k || this === m) && j(new TypeError());
    var n = Object(this),
        l = n.length >>> 0;

    if (l === 0) {
      return -1;
    }

    var f = 0;
    arguments.length > 0 && (f = Number(arguments[1]), f !== f ? f = 0 : f !== 0 && f !== Infinity && f !== -Infinity && (f = (f > 0 || -1) * Math.floor(Math.abs(f))));

    if (f >= l) {
      return -1;
    }

    for (f = f >= 0 ? f : Math.max(l - Math.abs(f), 0); f < l; f++) {
      if (f in n && n[f] === c) {
        return f;
      }
    }

    return -1;
  };
}