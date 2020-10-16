Int64.prototype.multiply = function (Q) {
  if (this.jb === 0) {
    return Int64.ZERO;
  }

  Q = Int64(Q);

  if (Q.jb === 0) {
    return Int64.ZERO;
  }

  if (K(this)) {
    if (this.jb < 0) {
      return F(Q);
    }

    return Q;
  }

  if (K(Q)) {
    if (Q.jb < 0) {
      return F(this);
    }

    return this;
  }

  if (this === Q) {
    if (this.jb === 0) {
      Q = Int64.ZERO;
    } else {
      if (K(this)) {
        Q = Int64.ONE;
      } else {
        var Q = this.Ua,
            I = Q.length,
            G = Array(I + I + 1),
            D,
            B,
            o,
            f;

        for (f = 0; f < I; f++) {
          o = f * 2, D = Q[f] * Q[f], B = D / Int64.base | 0, G[o] = D % Int64.base, G[o + 1] = B;
        }

        for (f = 0; f < I; f++) {
          B = 0;
          o = f * 2 + 1;

          for (var c = f + 1; c < I; c++, o++) {
            D = Q[c] * Q[f] * 2 + G[o] + B, B = D / Int64.base | 0, G[o] = D % Int64.base;
          }

          o = I + f;
          D = B + G[o];
          B = D / Int64.base | 0;
          G[o] = D % Int64.base;
          G[o + 1] += B;
        }

        Q = new Int64(G, 1);
      }
    }

    return Q;
  }

  G = this.Ua.length >= Q.Ua.length;
  I = (G ? this : Q).Ua;
  G = (G ? Q : this).Ua;
  B = I.length;
  o = G.length;
  c = B + o;
  f = Array(c);

  for (D = 0; D < c; D++) {
    f[D] = 0;
  }

  for (D = 0; D < o; D++) {
    for (var c = 0, T = G[D], S = B + D, L, N = D; N < S; N++) {
      L = f[N] + T * I[N - D] + c, c = L / Int64.base | 0, f[N] = L % Int64.base | 0;
    }

    c && (L = f[N] + c, f[N] = L % Int64.base);
  }

  return new Int64(f, this.jb * Q.jb);
};