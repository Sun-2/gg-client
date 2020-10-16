function W(c, h) {
  this.stopped = !1;

  this.stop = function () {
    this.stopped = !0;
  };

  for (var f in c) {
    if (c.hasOwnProperty(f) && (h.apply(this, [f, c[f]]), this.stopped)) {
      this.stopped = !1;
      break;
    }
  }
}