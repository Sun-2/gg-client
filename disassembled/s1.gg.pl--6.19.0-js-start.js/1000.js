E.ca.hr = {
  uua: function (c) {
    var f = {
      "&lt;": "<",
      "&gt;": ">",
      "&amp;": "&"
    };
    return c.replace(/(\&[lg]t;)|(\&amp;)/g, function (e) {
      return f[e];
    });
  },
  tua: function (c) {
    return c.replace(/<img[^>]+name\s*=\s*['\"]([^'\"]+)['\"][^>]*>/gi, function (e, f) {
      return f;
    });
  },
  Cra: function (c) {
    return c.replace(/<br\s*\/?>/gi, "\n");
  }
};