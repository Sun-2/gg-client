gg.core.zl = function (ak, aj) {
  var ai = "Unrecognized",
      ah = 0,
      ag = "Unrecognized",
      af = "",
      ae = "Unrecognized",
      ad = m,
      aa = m,
      T = m;

  try {
    for (var o = 0, Q = m, ab = m, ac = ak.length; ac; o++) {
      if (Q = ak[o], ad = Q.string, ab = Q.prop, aa = Q.ej, ad) {
        if (ad.indexOf(Q.Th) != -1) {
          ai = Q.identity;
          ae = Q.vendor;
          aa = Q.ej;
          break;
        }
      } else {
        if (ab) {
          ai = Q.identity;
          ae = Q.vendor;
          aa = Q.ej;
          break;
        }
      }
    }

    var Y = navigator.userAgent.match(aa);
    Y && Y.length && Y[1] && (ah = Y[1]);
    o = 0;
    ab = Q = m;

    for (ac = aj.length; ac; o++) {
      if (Q = aj[o], (ad = Q.string) && ad.indexOf(Q.Th) != -1) {
        var T = Q.FJ,
            ag = Q.identity,
            S = navigator.userAgent.match(T);
        S && S.length && (af = S[0]);
        break;
      }
    }
  } catch (f) {}

  var c = {
    "(": "[",
    ")": "]",
    ";": ","
  };
  return {
    name: ai,
    y9: ah,
    cca: ag,
    dca: af,
    vendor: ae,
    HAa: navigator.userAgent.replace(/[();]/g, function (e) {
      return c[e[0]] || "";
    })
  };
}([{
  string: navigator.userAgent,
  Th: "OPR",
  identity: "Opera",
  vendor: "Opera",
  ej: / OPR\/+([0-9\.]+)$/
}, {
  string: navigator.userAgent,
  Th: "Chrome",
  identity: "Chrome",
  vendor: "google",
  ej: /Chrome\/(.*) \w*/
}, {
  string: navigator.vendor,
  Th: "Apple",
  identity: "Safari",
  vendor: "Apple",
  ej: /Version\/(.*) \w*/
}, {
  prop: window.opera,
  identity: "Opera",
  vendor: "Opera",
  ej: / (?:Version|Opera)[\/ ]+(.*)$/
}, {
  string: navigator.userAgent,
  Th: "Firefox",
  identity: "Firefox",
  vendor: "Mozilla",
  ej: /Firefox\/(.*)$/
}, {
  string: navigator.userAgent,
  Th: "MSIE",
  identity: "IE",
  vendor: "Microsoft",
  ej: /MSIE ([^;]+);/
}, {
  string: navigator.userAgent,
  Th: "Trident",
  identity: "IE",
  vendor: "Microsoft",
  ej: /; rv:([0-9\.]+)/
}], [{
  string: navigator.platform,
  Th: "Win",
  identity: "Windows",
  FJ: /Windows NT [^;)]+/
}, {
  string: navigator.platform,
  Th: "Mac",
  identity: "OSX",
  FJ: /(?:Intel|PPC) Mac [^;)]+/
}, {
  string: navigator.platform,
  Th: "Linux",
  identity: "Linux",
  FJ: /Linux [^;)]+/
}]);