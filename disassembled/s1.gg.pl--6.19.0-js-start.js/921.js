Ext.define(E.controllers.gl, {
  extend: E.controllers.nc,
  execute: function (c) {
    var n = {
      "foto/friends/(\\d+)$": "profile/$1",
      "foto/friends$": "profile",
      foto$: "profile",
      drive$: ""
    },
        c = c.params.join("/"),
        l;

    for (l in n) {
      var f = RegExp(l.replace("/", "\\/", "g"));

      if (n.hasOwnProperty(l) && c.match(f)) {
        C.Ca(c.replace(f, n[l]));
        break;
      }
    }
  }
});