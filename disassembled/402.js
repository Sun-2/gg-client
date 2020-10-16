Int64.prototype.add = function (c) {
  if (this.jb === 0) {
    return Int64(c);
  }

  c = Int64(c);

  if (c.jb === 0) {
    return this;
  }

  if (this.jb !== c.jb) {
    return c = F(c), H(this, c);
  }

  for (var z = this.Ua, c = c.Ua, u = z.length, o = c.length, f = Array(Math.max(u, o) + 1), B = Math.min(u, o), y = 0, w = 0; w < B; w++) {
    y = z[w] + c[w] + y, f[w] = y % Int64.base, y = y / Int64.base | 0;
  }

  o > u && (z = c, u = o);

  for (w = B; y && w < u; w++) {
    y = z[w] + y, f[w] = y % Int64.base, y = y / Int64.base | 0;
  }

  for (y && (f[w] = y); w < u; w++) {
    f[w] = z[w];
  }

  typeof f[w] === "undefined" && f.pop();
  return new Int64(f, this.jb);
};