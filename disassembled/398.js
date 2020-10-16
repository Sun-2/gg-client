Int64.u4 = function (c) {
  if (Int64.bs[c]) {
    return Int64.bs[c];
  }

  var n = Math.ceil(c.length / 2),
      l = c.substr(0, n),
      f = c.substr(n, c.length);
  f.length < n && (f = "0" + f);
  n = Int64.from32bitPair(parseInt(l, 16), parseInt(f, 16)).toString();
  Int64.bs[c] = n;
  Int64.bs[n] = c;
  return Int64.bs[c];
};