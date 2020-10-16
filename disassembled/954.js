Ext.define(C.core.fh.sB, {
  Mh: m,
  Zp: m,
  W$: "default",
  constructor: function (c) {
    this.Zp = {};
    Ext.isEmpty(c) && j("config cannot be empty");
    Ext.isEmpty(c.Mh) ? j("config.routes cannot be empty") : this.W$ in c.Mh ? this.Mh = c.Mh || m : j("config.routes must contain default route");
    return this;
  },
  Z3: function (c) {
    if (typeof c === "undefined" || c === m) {
      c = "";
    }

    typeof c === "function" && j("bad token");
    var n = {
      name: "",
      Bb: m,
      path: ""
    },
        l;

    for (l in this.Mh) {
      var f = this.Mh[l].Mb;

      if (RegExp("^" + f + "(/(.+)?)?$", "gi").test(c)) {
        n.Bb = this.Mh[l].Bb;
        f = RegExp("^" + f + "(/)?", "gi");
        n.name = l;
        n.path = c.replace(f, "");
        n.params = c.match(f);

        if (!Ext.isEmpty(n.params) && Ext.isArray(n.params)) {
          n.params = n.params.pop().replace(/\/$/, "").split("/");
        }

        break;
      }
    }

    if (typeof n.Bb === "undefined") {
      j("controller type not found");
    } else {
      if (m === n.Bb) {
        C.vs("error/404/page");
        return;
      }
    }

    this.Zp[n.name] ? (n.state = this.Zp[n.name], this.Zp[n.name] = m, delete this.Zp[n.name]) : n.state = m;
    return n;
  },
  rta: function (c, f) {
    this.Zp[c] = f;
  }
});