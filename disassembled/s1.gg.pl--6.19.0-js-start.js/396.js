function Int64(c, f) {
  if (!(this instanceof Int64)) {
    if (c instanceof Int64) {
      return c;
    } else {
      if (typeof c === "undefined") {
        return Int64.ZERO;
      }
    }

    return Int64.parse(c);
  }

  this.Ua = c = c || [];
  this.jb = c.length ? f || 1 : 0;
}