function H(L, G) {
  if (L.jb === 0) {
    return F(Int64(G));
  }

  G = Int64(G);

  if (G.jb === 0) {
    return L;
  }

  if (L.jb !== G.jb) {
    return G = F(G), L.add(G);
  }

  var D = L,
      B;
  L.jb < 0 && (B = D, D = new Int64(G.Ua, 1), G = new Int64(B.Ua, 1));
  var y = J(D, G);

  if (y === 0) {
    return Int64.ZERO;
  } else {
    y < 0 && (B = G, G = D, D = B);
  }

  D = D.Ua;
  B = G.Ua;
  var o = D.length,
      f = B.length,
      c = Array(o),
      Q = 0,
      N,
      I;

  for (N = 0; N < f; N++) {
    I = D[N] - Q - B[N], I < 0 ? (I += Int64.base, Q = 1) : Q = 0, c[N] = I;
  }

  for (N = f; N < o; N++) {
    I = D[N] - Q;

    if (I < 0) {
      I += Int64.base;
    } else {
      c[N++] = I;
      break;
    }

    c[N] = I;
  }

  for (; N < o; N++) {
    c[N] = D[N];
  }

  return new Int64(c, y);
}