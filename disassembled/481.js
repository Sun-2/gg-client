gg.aa.protocol.ba.Kc.Mua = function (c) {
  var f = {
    261: "a",
    281: "e",
    347: "s",
    322: "l",
    380: "z",
    378: "z",
    263: "c",
    324: "n"
  };
  return c.toLowerCase().replace(/([\u0105\u0119\u015b\u0142\u017c\u017a\u0107\u0144])/g, function (e) {
    return f[e.charCodeAt(0)];
  });
};