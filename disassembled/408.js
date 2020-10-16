function da(c, z) {
  if (z === 0 || c.jb === 0) {
    return Int64.ZERO;
  }

  if (z === 1) {
    return c;
  }

  var u;

  if (c.Ua.length === 1) {
    u = c.Ua[0] * z;

    if (u >= Int64.base) {
      return new Int64([u % Int64.base | 0, u / Int64.base | 0], 1);
    }

    return new Int64([u], 1);
  }

  if (z === 2) {
    return c.add(c);
  }

  if (K(c)) {
    return new Int64([z], 1);
  }

  var o = c.Ua,
      f = o.length;
  u = f + 1;

  for (var B = Array(u), y = 0; y < u; y++) {
    B[y] = 0;
  }

  for (var w = y = 0; w < f; w++) {
    u = z * o[w] + y, y = u / Int64.base | 0, B[w] = u % Int64.base | 0;
  }

  y && (B[w] = y % Int64.base);
  return new Int64(B, 1);
}