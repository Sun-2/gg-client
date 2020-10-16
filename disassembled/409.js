function ca(D, B) {
  var z,
      B = +B;
  B === 0 && j(Error("Divide by zero"));
  var y = D.jb * (B < 0 ? -1 : 1),
      B = Math.abs(B);
  (B < 1 || B >= Int64.base) && j(Error("Argument out of range"));

  if (D.jb === 0) {
    return [Int64.ZERO, Int64.ZERO];
  }

  if (B === 1 || B === -1) {
    return [y === 1 ? D.abs() : new Int64(D.Ua, y), Int64.ZERO];
  }

  if (D.Ua.length === 1) {
    var w = new Int64([D.Ua[0] / B | 0], 1);
    z = new Int64([D.Ua[0] % B | 0], 1);
    y < 0 && (w = F(w));
    D.jb < 0 && (z = F(z));
    return [w, z];
  }

  z = D.Ua.slice();

  for (var w = Array(z.length), o = 0, f = 0, c = 0, G; z.length;) {
    o = o * Int64.base + z[z.length - 1], o < B ? (w[c++] = 0, z.pop(), f = Int64.base * f + o) : (G = o === 0 ? 0 : o / B | 0, f = o - B * G, (w[c++] = G) ? (z.pop(), o = f) : z.pop());
  }

  z = new Int64([f], 1);
  D.jb < 0 && (z = F(z));
  return [new Int64(w.reverse(), y), z];
}