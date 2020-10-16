sunrise.extend(gg.aa.protocol.ba.fi, {
  RF: "\\x01",
  qU: "\u0001",
  oU: "\\x02",
  pU: "\u0002",
  Laa: "<",
  exa: ">",
  uqa: function (c, f) {
    c = c.replace(/</g, this.qU).replace(/>/g, this.pU);
    c = this.Cda(c, f);
    return this.wqa(c, this.RF, this.oU);
  },
  mDa: function (c) {
    c = c.replace(/^[\xa0]+/g, "").replace(/</g, "\u0001").replace(/>/g, "\u0002").stripTags().replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/\x01/g, "<").replace(/\x02/g, ">");
    return c = this.Dda(gg.aa.protocol.ba.Kc.St(c));
  },
  wqa: function (c, f) {
    f = typeof f != "undefined" ? f : this.Laa;
    f == this.RF && (c = c.replace(RegExp(this.RF + "|" + this.oU + "|&", "g"), function (e) {
      switch (e) {
        case gg.aa.protocol.ba.fi.qU:
          return "&lt;";

        case gg.aa.protocol.ba.fi.pU:
          return "&gt;";

        case "&":
          return "&amp;";
      }
    }));
    return sunrise.nl2br(this.Bda(c, "&lt;", "&gt;"));
  },
  Bya: function () {
    return M(s);
  },
  Cda: function (c, z) {
    c = typeof c == "undefined" ? "" : c;

    if (z.length == 0) {
      return c;
    }

    var u = new gg.aa.BinaryParser();
    u.setBuffer(z);

    for (var o = "", f = 0; u.Ufa(3);) {
      var B = u.read(P.kl),
          y = u.read(P.Qb);
      y & gg.aa.protocol.ba.Ec.bS && (o += "font-weight:bold;");
      y & gg.aa.protocol.ba.Ec.cS && (o += "font-style:italic;");
      y & gg.aa.protocol.ba.Ec.dS && (o += "text-decoration:underline;");

      if (y & gg.aa.protocol.ba.Ec.yv) {
        for (var y = [], w = 0; w < 3; y.push(u.read(P.Qb)), w++) {}

        o += "color:rgb(" + y.join(",") + ");";
      }

      o = '<span style="' + o + '">';
      f > 0 && (o = "</span>" + o);

      if ((a = c.substring(B + f)) != "") {
        c = c.substring(0, B + f) + o + a, f += o.length;
      }

      o = "";
    }

    f > 0 && (c += "</span>");
    return c;
  },
  Dda: function (Q) {
    function I(e) {
      return [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)];
    }

    var G = Q.replace(/<\/?(((b|u|i|)>)|(font[^>]*))>?/gi, "");

    if (G.length > gg.aa.protocol.ba.MAX_MESSAGE_SIZE) {
      return [G.substr(0, gg.aa.protocol.ba.MAX_MESSAGE_SIZE), "\u0002\0\0"];
    }

    for (var D = RegExp("<(/?(b>|u>|i>|font[^>]*))>?", "gi"), B = {
      B: gg.aa.protocol.ba.Ec.bS,
      U: gg.aa.protocol.ba.Ec.dS,
      I: gg.aa.protocol.ba.Ec.cS,
      F: gg.aa.protocol.ba.Ec.yv
    }, o, f = {}, c, T = d = 0, S = 0, L; (o = D.exec(Q)) !== m;) {
      S = o.index - d, o[1].charAt(0) == "/" ? (L = o[1].charAt(1).toUpperCase(), T ^= B[L]) : (L = o[1].charAt(0).toUpperCase(), T |= B[L], L == "F" && (c = I(o[1].substr(o[1].indexOf("#") + 1, 6)))), T & gg.aa.protocol.ba.Ec.yv || (T |= gg.aa.protocol.ba.Ec.yv, c = [0, 0, 0]), f[S] = [T, c], d += o[0].length;
    }

    Q = new gg.aa.BinaryParser();
    result2 = "";

    for (var N in f) {
      result2 += Q.pack({
        position: [N, P.kl],
        font: [f[N][0], P.Qb],
        r: [f[N][1][0], P.Qb],
        g: [f[N][1][1], P.Qb],
        b: [f[N][1][2], P.Qb]
      });
    }

    result2 = [G, "\u0002" + Q.pack({
      size: [result2.length, P.kl]
    }) + result2];

    if (result2.length > gg.aa.protocol.ba.GE) {
      return [G, "\u0002\0\0"];
    }

    return result2;
  },
  Bda: function (c, n, l) {
    c = c.replace(RegExp(n + "([\\S_ ]+?)" + l, "ig"), function (g, h) {
      h = gg.aa.protocol.ba.Kc.Mua(h).replace(/\s/g, "_");

      if (typeof gg.aa.protocol.ba.TQ[h] == "undefined" || gg.aa.protocol.ba.TQ[h] !== m) {
        return g;
      }

      return '<img src="/images/emoticons/' + h + '.gif" alt="' + h + '" title="' + h + '" />';
    });
    c = c.replace(RegExp("((file|gopher|news|nntp|telnet|http|ftp|https|ftps|sftp)://)", "gi"), "\0$2\0");
    c = c.replace(/(&[a-z]+;)([dop\(\)\[\]]{1}|(&gt;))/gi, "$1\0$2");

    try {
      for (n = 0; n < gg.aa.protocol.ba.NC.length; n += 2) {
        c = c.replace(RegExp(gg.aa.protocol.ba.NC[n], "ig"), '<img src="/images/emoticons/' + gg.aa.protocol.ba.NC[n + 1] + '.gif" />');
      }
    } catch (f) {}

    c = c.replace(/(&[a-z]+;)\x00([dop\(\)\[\]]{1}|(&gt;))/gi, "$1$2");
    c = c.replace(/\x00(.*)\x00/g, "$1://");
    return c.toString();
  }
});