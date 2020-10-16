Int64.parse = function (c, z) {
  function u(e) {
    e = e.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/, "e");
    return e.replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/, function (q, N, I, G, D) {
      var D = +D,
          Q = D < 0,
          L = I.length + D,
          q = (Q ? I : G).length,
          D = (D = Math.abs(D)) >= q ? D - q + Q : 0,
          q = Array(D + 1).join("0");
      I += G;
      return (N || "") + (Q ? I = q + I : I += q).substr(0, L += Q ? q.length : 0) + (L < I.length ? "." + I.substr(L) : "");
    });
  }

  c = c.toString();

  if (typeof z === "undefined" || +z === 10) {
    c = u(c);
  }

  var o = /^([+\-]?)(0[xXcCbB])?([0-9A-Za-z]*)(?:\.\d*)?$/.exec(c);

  if (o) {
    var f = o[1] || "+",
        B = o[2] || "",
        o = o[3] || "";
    typeof z === "undefined" ? z = B === "0x" || B === "0X" ? 16 : B === "0c" || B === "0C" ? 8 : B === "0b" || B === "0B" ? 2 : 10 : (z < 2 || z > 36) && j(Error("Illegal radix " + z + "."));
    z = +z;
    Int64.Xqa[z].test(o) || j(Error("Bad digit for radix " + z));
    o = o.replace(/^0+/, "").split("");

    if (o.length === 0) {
      return Int64.ZERO;
    }

    f = f === "-" ? -1 : 1;

    if (z == 10) {
      for (B = []; o.length >= Int64.DH;) {
        B.push(parseInt(o.splice(o.length - Int64.DH, o.length).join(""), 10));
      }

      o.length && B.push(parseInt(o.join(""), 10));
      return new Int64(B, f);
    }

    if (z === Int64.base) {
      return new Int64(o.map(Number).reverse(), f);
    }

    for (var B = Int64.ZERO, z = Int64.small[z], y = Int64.small, w = 0; w < o.length; w++) {
      B = B.multiply(z).add(y[parseInt(o[w], 36)]);
    }

    return new Int64(B.Ua, f);
  } else {
    j(Error("Invalid Int64 format: " + c));
  }
};