E.api.dl = function () {
  var c = {},
      f = new E.api.qu();

  c.uy = function (e, n, g) {
    f.kh("/api/katpub/persons/" + (e.uin || e.uin) + ".json", {
      success: n,
      failure: g,
      oI: 100,
      OH: 120000
    });
  };

  c.pDa = function (e, n, g) {
    f.qd("/api/katpub/persons/" + (e.uin || e.uin) + ".json", {
      success: n,
      failure: g,
      data: e.data
    });
  };

  c.tla = function (e, o) {
    for (var g = [], u = 0, q = e.length; u < q; u++) {
      g.push("uins[]=" + e[u]);
    }

    f.kh("/api/katpub/persons?" + g.join("&"), {
      success: o,
      failure: k
    });
  };

  return c;
}();