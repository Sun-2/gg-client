C.ca.Dc = {
  stringify: function (c) {
    if (typeof c !== "string") {
      if (typeof c === "undefined" || c === m) {
        return "";
      }

      c = c.toString();
    }

    return c;
  },
  Ana: function (c) {
    c = C.ca.Dc.stringify(c);
    c !== "" && (c = encodeURI(c).replace(/'/g, "%27"));
    return c;
  },
  Jy: function (c) {
    var c = C.ca.Dc.stringify(c),
        f = {
      "&": "&amp;",
      ">": "&gt;",
      "<": "&lt;",
      '"': "&quot;",
      "'": "&#x27;",
      "/": "&#x2F;"
    };
    return c = c.replace(/[&><"'\/]/g, function (e) {
      return f[e];
    });
  },
  htmlText: function (c) {
    var c = C.ca.Dc.stringify(c),
        f = {
      "&": "&amp;",
      ">": "&gt;",
      "<": "&lt;",
      '"': "&quot;",
      "'": "&#x27;"
    },
        c = c.replace(/[&><"']/g, function (e) {
      return f[e];
    });
    return c = c.replace(/ {2}/g, " &nbsp; ");
  },
  cla: function (c) {
    var c = C.ca.Dc.stringify(c),
        f = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#x2F;": "/",
      "&#x27;": "'"
    };
    return c = c.replace(/&[^;]+;/gi, function (e) {
      return typeof f[e] !== "undefined" ? f[e] : e;
    });
  },
  OZ: function (c) {
    return c.replace(/<br\s*\/?>/mg, "\n");
  },
  nl2br: function (c) {
    return c.replace(/(\r\n)|\n|\r/mg, "<br />");
  }
};