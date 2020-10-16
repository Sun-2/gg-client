function ba(D, B) {
  B = Int64(B);
  B.jb === 0 && j(Error("Divide by zero"));

  if (D.jb === 0) {
    return [Int64.ZERO, Int64.ZERO];
  }

  if (B.Ua.length === 1) {
    return ca(D, B.jb * B.Ua[0]);
  }

  switch (J(D, B)) {
    case 0:
      return [D.jb === B.jb ? Int64.ONE : Int64.WS, Int64.ZERO];

    case -1:
      return [Int64.ZERO, D];
  }

  var z = D.jb * B.jb,
      y = B.abs(),
      w = D.Ua.slice(),
      o = [],
      f,
      c = new Int64([], 1);

  for (c.jb = 1; w.length;) {
    if (c.Ua.unshift(w.pop()), c = new Int64(c.Ua, 1), J(c, B) < 0) {
      o.push(0);
    } else {
      if (c.jb === 0) {
        f = 0;
      } else {
        var G = c.Ua.length;
        f = y.Ua.length;
        G = c.Ua[G - 1] * Int64.base + c.Ua[G - 2];
        f = y.Ua[f - 1] * Int64.base + y.Ua[f - 2];
        c.Ua.length > y.Ua.length && (G = (G + 1) * Int64.base);
        f = Math.ceil(G / f);
      }

      do {
        G = da(y, f);

        if (J(G, c) <= 0) {
          break;
        }

        f--;
      } while (f);

      o.push(f);

      if (f) {
        f = H(c, G), c.Ua = f.Ua.slice();
      }
    }
  }

  return [new Int64(o.reverse(), z), new Int64(c.Ua, D.jb)];
}