function J(c, p) {
  if (c === p) {
    return 0;
  }

  if (!(p instanceof Int64)) {
    if (!isFinite(p)) {
      return isNaN(p) ? p : -1;
    }

    p = Int64(p);
  }

  if (c.jb === 0) {
    return p.jb !== 0 ? -1 : 0;
  }

  if (p.jb === 0) {
    return 1;
  }

  var o = c.Ua.length,
      n = p.Ua.length;

  if (o < n) {
    return -1;
  } else {
    if (o > n) {
      return 1;
    }
  }

  var n = c.Ua,
      f = p.Ua;

  for (o -= 1; o >= 0; o--) {
    if (n[o] !== f[o]) {
      return n[o] < f[o] ? -1 : 1;
    }
  }

  return 0;
}