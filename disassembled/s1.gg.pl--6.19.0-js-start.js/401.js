Int64.prototype.toString = function (c) {
  c = +c || 10;
  (c < 2 || c > 36) && j(Error("illegal radix " + c + "."));

  if (this.jb === 0) {
    return "0";
  }

  if (c === 10) {
    c = this.jb < 0 ? "-" : "";
    c += this.Ua[this.Ua.length - 1].toString();

    for (var q = this.Ua.length - 2; q >= 0; q--) {
      for (var p = this.Ua[q].toString(); p.length < Int64.DH;) {
        p = "0" + p;
      }

      c += p;
    }

    return c;
  } else {
    for (var q = Int64.Sja, c = Int64.small[c], p = this.jb, o = this.abs(), f = [], u; o.jb !== 0;) {
      u = ba(o, c), o = u[0], u = u[1], f.push(q[u.valueOf()]);
    }

    return (p < 0 ? "-" : "") + f.reverse().join("");
  }
};