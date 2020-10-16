C.ca.fi = function (c, q) {
  function p(g) {
    var h = {
      "&nbsp;": "&#160;",
      "&iexcl;": "&#161;",
      "&cent;": "&#162;",
      "&pound;": "&#163;",
      "&curren;": "&#164;",
      "&yen;": "&#165;",
      "&brvbar;": "&#166;",
      "&sect;": "&#167;",
      "&uml;": "&#168;",
      "&copy;": "&#169;",
      "&ordf;": "&#170;",
      "&laquo;": "&#171;",
      "&not;": "&#172;",
      "&shy;": "&#173;",
      "&reg;": "&#174;",
      "&macr;": "&#175;",
      "&deg;": "&#176;",
      "&plusmn;": "&#177;",
      "&sup2;": "&#178;",
      "&sup3;": "&#179;",
      "&acute;": "&#180;",
      "&micro;": "&#181;",
      "&para;": "&#182;",
      "&middot;": "&#183;",
      "&cedil;": "&#184;",
      "&sup1;": "&#185;",
      "&ordm;": "&#186;",
      "&raquo;": "&#187;",
      "&frac14;": "&#188;",
      "&frac12;": "&#189;",
      "&frac34;": "&#190;",
      "&iquest;": "&#191;",
      "&Agrave;": "&#192;",
      "&Aacute;": "&#193;",
      "&Acirc;": "&#194;",
      "&Atilde;": "&#195;",
      "&Auml;": "&#196;",
      "&Aring;": "&#197;",
      "&AElig;": "&#198;",
      "&Ccedil;": "&#199;",
      "&Egrave;": "&#200;",
      "&Eacute;": "&#201;",
      "&Ecirc;": "&#202;",
      "&Euml;": "&#203;",
      "&Igrave;": "&#204;",
      "&Iacute;": "&#205;",
      "&Icirc;": "&#206;",
      "&Iuml;": "&#207;",
      "&ETH;": "&#208;",
      "&Ntilde;": "&#209;",
      "&Ograve;": "&#210;",
      "&Oacute;": "&#211;",
      "&Ocirc;": "&#212;",
      "&Otilde;": "&#213;",
      "&Ouml;": "&#214;",
      "&times;": "&#215;",
      "&Oslash;": "&#216;",
      "&Ugrave;": "&#217;",
      "&Uacute;": "&#218;",
      "&Ucirc;": "&#219;",
      "&Uuml;": "&#220;",
      "&Yacute;": "&#221;",
      "&THORN;": "&#222;",
      "&szlig;": "&#223;",
      "&agrave;": "&#224;",
      "&aacute;": "&#225;",
      "&acirc;": "&#226;",
      "&atilde;": "&#227;",
      "&auml;": "&#228;",
      "&aring;": "&#229;",
      "&aelig;": "&#230;",
      "&ccedil;": "&#231;",
      "&egrave;": "&#232;",
      "&eacute;": "&#233;",
      "&ecirc;": "&#234;",
      "&euml;": "&#235;",
      "&igrave;": "&#236;",
      "&iacute;": "&#237;",
      "&icirc;": "&#238;",
      "&iuml;": "&#239;",
      "&eth;": "&#240;",
      "&ntilde;": "&#241;",
      "&ograve;": "&#242;",
      "&oacute;": "&#243;",
      "&ocirc;": "&#244;",
      "&otilde;": "&#245;",
      "&ouml;": "&#246;",
      "&divide;": "&#247;",
      "&oslash;": "&#248;",
      "&ugrave;": "&#249;",
      "&uacute;": "&#250;",
      "&ucirc;": "&#251;",
      "&uuml;": "&#252;",
      "&yacute;": "&#253;",
      "&thorn;": "&#254;",
      "&yuml;": "&#255;",
      "&euro;": "&#8364;"
    };
    return g.replace(/&[a-zA-Z0-9]+;/g, function (e) {
      if (h[e]) {
        return h[e];
      }

      return e;
    });
  }

  function o(e) {
    return e.replace(/(^\s+)|(\s+$)/g, "");
  }

  function f(h) {
    for (var n = 0;;) {
      var l = h[n];

      if (!l) {
        break;
      }

      for (; l.firstChild;) {
        l.parentNode.insertBefore(l.firstChild, l);
      }

      l.parentNode.removeChild(l);
      l === h[n] && n++;
    }
  }

  var u;
  u = typeof [].indexOf !== "undefined" ? function (g, h) {
    return g.indexOf(h);
  } : function (h, n) {
    for (var l = 0, l = 0; l < h.length; ++l) {
      if (h[l] === n) {
        return l;
      }
    }

    return -1;
  };
  typeof c === "undefined" && (c = function (g) {
    var h = "<parseerror/>";
    window.DOMParser ? h = new DOMParser().parseFromString("<root>" + g + "</root>", "text/xml") : (h = new ActiveXObject("Microsoft.XMLDOM"), h.async = !1, h.preserveWhiteSpace = !0, h.loadXML("<root>" + g + "</root>"));
    return h;
  });
  typeof q === "undefined" && (q = function (g) {
    var h;
    typeof XMLSerializer !== "undefined" ? (h = new XMLSerializer().serializeToString(g), h = h.replace(/^<\?xml version="1\.0"\?>/, ""), h = h.substr(6, h.length - 13)) : typeof g.xml !== "undefined" ? (h = g.xml, h = h.substr(6, h.length - 15).replace(/\r\n/g, "\n")) : j(Error("Missing XMLSerializer method"));
    return h;
  });

  this.parse = function (ae) {
    var h = ["font-weight", "font-size", "font-style", "font-family", "text-decoration", "color", "background-color"],
        al = {
      "font-weight": r(),
      "font-size": function (e) {
        if (/^\d{1,2}pt$/.test(e)) {
          return !0;
        }

        if (e == "-1pt") {
          return !0;
        }

        if (/^\d{1,2}px$/.test(e) && e != "0px") {
          return !0;
        }

        return "9pt";
      },
      "font-style": r(),
      "font-family": function (w) {
        var z = w.split(/,/g),
            y = !1;

        if (w.charAt(0) == "'" && w.indexOf("'", 1) == w.length - 1) {
          return !0;
        }

        for (w = 0; w < z.length; ++w) {
          if (z[w].length < 1 || z[w].length > 30) {
            return "'MS Shell Dlg 2'";
          }

          if (z[w].charAt(0) == "'" && z[w].charAt(z[w].length - 1) == "'") {
            y = !0;
          } else {
            if (o(z[w]).indexOf(" ") != -1) {
              return "'MS Shell Dlg 2'";
            }
          }
        }

        if (!y) {
          return z[0] = "'" + z[0] + "'", z.join(",");
        }

        return !0;
      },
      "text-decoration": r(),
      color: function (e) {
        return /^#[0-9a-zA-Z]{6}$/.test(e);
      }
    };
    al["background-color"] = al.color;
    var aj = {
      div: ["style", "name"],
      span: ["style", "name"],
      b: [],
      i: [],
      u: [],
      br: [],
      font: ["style", "name"],
      img: ["name", "width", "height"],
      sup: [],
      sub: [],
      s: ["style", "name"]
    },
        ag = {
      width: function (e) {
        if (/^\d{1,4}$/.test(e)) {
          return !0;
        }

        return !1;
      },
      height: function (e) {
        if (/^\d{1,4}$/.test(e)) {
          return !0;
        }

        return !1;
      },
      href: function (w, B) {
        if (B.childNodes.length != 1 || B.childNodes[0].nodeType != 3) {
          return !1;
        }

        var z = w.match(/^mailto:(.+)$/);

        if (!z) {
          return !1;
        }

        var y = typeof B.textContent !== "undefined" ? B.textContent : B.text;

        if (z && z[1] !== y) {
          return !1;
        }

        return !0;
      },
      style: function (y, I, D) {
        var y = y.split(";"),
            B,
            G,
            z;
        G = 0;

        for (z = y.length; G < z; G++) {
          if (B = o(y[G]), B !== "") {
            B = B.split(":", 2);

            if (B.length !== 2) {
              return !1;
            }

            I = o(B[0].toLowerCase());
            B = o(B[1]);
            u(h, I) === -1 ? delete y[G] : typeof al[I] !== "undefined" && (B = al[I](B), B !== !0 && (B ? y[G] = I + ":" + B : delete y[G]));
          }
        }

        D.nodeValue = y.join("; ").replace(/;\s*;/g, ";").replace(/;\s+/g, "; ");
        D.nodeValue == "; " ? D.nodeValue = "" : D.nodeValue && /; ?$/.test(D.nodeValue) == !1 && (D.nodeValue += "; ");
        return !0;
      }
    },
        ae = ae.replace("<>", "&lt;&gt;").replace("</>", ""),
        ae = ae.replace(/<([^<> ]+)([^<>]*)>/g, function (w, D, B, z, y) {
      if (!D.match(/^[a-zA-Z\/]+$/)) {
        return "";
      }

      if (B.charAt(B.length - 1) !== "/" && D.charAt(0) !== "/" && D.charAt(D.length - 1) !== "/" && y.indexOf("</" + D + ">", z) === -1) {
        return "<" + D + B + "/>";
      }

      return w;
    }),
        ae = p(ae);

    try {
      var ah = c(ae);
      (!ah || !ah.documentElement || ah.getElementsByTagName("parsererror").length > 0) && j(Error("HTML syntax error"));
    } catch (g) {
      ae.match(/&(?![^&]*;)/) && j({
        name: "AmpersandNotEncodedError",
        xml: ah,
        error: g
      }), j({
        name: "HTMLSyntaxError",
        xml: ah,
        error: g
      });
    }

    var ae = ah.documentElement.getElementsByTagName("*"),
        n,
        ak = [],
        ai = 0;

    for (n = ae.length; ai < n; ai++) {
      var af = ae[ai],
          ad = af.tagName.toLowerCase();

      if (typeof aj[ad] === "undefined") {
        ak.push(af);
      } else {
        for (var ac = 0, l = af.attributes.length; ac < l; ac++) {
          var ab = af.attributes[ac],
              aa = ab.name.toLowerCase();

          if (u(aj[ad], aa) < 0) {
            ak.push(af);
            break;
          }

          try {
            if (typeof ag[aa] !== "undefined" && !ag[aa](ab.nodeValue, af, ab)) {
              ak.push(af);
              break;
            }
          } catch (b) {
            ak.push(af);
            break;
          }
        }
      }
    }

    f(ak);
    return ah;
  };

  this.stringify = function (e) {
    return q(e);
  };
};