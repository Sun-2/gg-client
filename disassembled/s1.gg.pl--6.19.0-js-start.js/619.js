window.FABridge__bridgeInitialized = function (L) {
  var G = document.getElementsByTagName("object"),
      D = G.length,
      B = [];

  if (D > 0) {
    for (var y = 0; y < D; y++) {
      typeof G[y].SetVariable != "undefined" && (B[B.length] = G[y]);
    }
  }

  D = document.getElementsByTagName("embed");
  y = D.length;
  G = [];

  if (y > 0) {
    for (var o = 0; o < y; o++) {
      typeof D[o].SetVariable != "undefined" && (G[G.length] = D[o]);
    }
  }

  o = B.length;
  D = G.length;
  y = "bridgeName=" + L;

  if (o == 1 && !D || o == 1 && D == 1) {
    FABridge.attachBridge(B[0], L);
  } else {
    if (D == 1 && !o) {
      FABridge.attachBridge(G[0], L);
    } else {
      var f = !1;

      if (o > 1) {
        for (var c = 0; c < o; c++) {
          for (var Q = B[c].childNodes, N = 0; N < Q.length; N++) {
            var I = Q[N];

            if (I.nodeType == 1 && I.tagName.toLowerCase() == "param" && I.name.toLowerCase() == "flashvars" && I.value.indexOf(y) >= 0) {
              FABridge.attachBridge(B[c], L);
              f = !0;
              break;
            }
          }

          if (f) {
            break;
          }
        }
      }

      if (!f && D > 1) {
        for (B = 0; B < D; B++) {
          if (G[B].attributes.getNamedItem("flashVars").nodeValue.indexOf(y) >= 0) {
            FABridge.attachBridge(G[B], L);
            break;
          }
        }
      }
    }
  }

  return !0;
};