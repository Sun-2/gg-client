E.api.eB = function () {
  var c = new E.api.qu();
  return {
    Ima: function (f, b) {
      f = f || {
        fn: t(),
        scope: this
      };
      b = b || {
        fn: t(),
        scope: this
      };
      c.kh("/api/ads/startAd", {
        success: function (e, h) {
          var l = {};
          e && typeof e.result !== "undefined" && (l = e.result);
          f.fn.call(f.scope, l, e, h);
        },
        failure: function (g, h) {
          b.fn.call(b.scope, g, g, h);
        }
      });
      return !0;
    }
  };
}();