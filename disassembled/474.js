gg.aa.protocol.ba.Kc = function (c, p) {
  var c = typeof c == "undefined" ? "" : c,
      p = typeof p != "undefined" ? p : gg.aa.protocol.ba.SG,
      o = [185, 261, 165, 260, 234, 281, 202, 280, 243, 243, 211, 211, 156, 347, 140, 346, 179, 322, 163, 321, 191, 380, 175, 379, 159, 378, 143, 377, 230, 263, 198, 262, 241, 324, 209, 323];

  if (p == gg.aa.protocol.ba.SG) {
    for (var n = 0; n < o.length; n += 2) {
      var f = RegExp(String.fromCharCode(o[n]), "g"),
          c = c.replace(f, String.fromCharCode(o[n + 1]));
    }

    return c;
  }

  for (n = 0; n < o.length; n += 2) {
    f = RegExp(String.fromCharCode(o[n + 1]), "g"), c = c.replace(f, String.fromCharCode(o[n]));
  }

  return c = c.replace(/[^\x00-\xff]/g, " ");
};