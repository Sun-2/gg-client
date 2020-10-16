sunrise.extend(gg.aa.protocol.ba.ja, {
  lo: new gg.aa.hi(),
  rr: {},
  zk: new gg.aa.zG(),
  We: m,
  ur: m,
  Ud: m,
  Ew: m,
  Hw: m,
  Bo: {},
  Xb: new gg.aa.protocol.ba.zw(),
  Fp: m,
  Eo: m,
  Oh: {},
  Nh: {},
  Qa: new gg.core.Cq(),
  Fi: {},
  connect: function (c, n, l, f) {
    this.Ew = l || this.Ew || [];
    this.ur = c || this.ur;
    this.Ud = n || this.Ud;
    this.Hw = f || this.Hw;

    if (!gg.aa.Eg.If()) {
      this.We = this.We || {
        uin: "",
        status: "",
        description: ""
      };
      this.Ud = n || {};
      this.Ud.description = "undefined" !== typeof this.Ud.description && m !== this.Ud.description ? this.Ud.description : this.We.description || "";
      this.Ud.status = this.Ud.status ? parseInt(this.Ud.status) : this.We.status || O.qf;
      this.ur = c ? c : this.We.uin;

      if (!this.Ud.status || this.Ud.status == O.UD || this.Ud.status == O.On) {
        this.Ud.status = O.qf;
      }

      if (this.ur) {
        this.We = {
          uin: parseInt(this.ur),
          status: this.Ud.status,
          description: this.Ud.description,
          isUserbar: this.Ud.isUserbar
        }, gg.aa.protocol.ba.Te.KL = function (e) {
          gg.aa.protocol.ba.QF.Ps(e).forEach(function (g) {
            gg.aa.protocol.ba.EventManager.Ps(g);
          });
        }, this.Ew.length ? (c = this.Ew.shift(), gg.aa.protocol.ba.Te.connect(c)) : (gg.aa.protocol.ba.Te.Bv = !0, gg.aa.protocol.ba.Te.connect());
      }
    }
  },
  Esa: function (c) {
    try {
      var h = this.We.status;
      h |= O.Lq;
      this.send(this.Xb.$R({
        uin: this.We.uin
      }, c, "pl", {
        status: h,
        description: this.We.description,
        isUserbar: this.We.isUserbar
      }, this.Hw, 0), !0);
    } catch (f) {
      gg.aa.protocol.ba.ja.Qa.trigger(R.bi);
    }
  },
  Jsa: function (c, n) {
    try {
      var l = this.We.status;
      l |= O.Lq;
      this.send(this.Xb.$R({
        uin: this.We.uin
      }, m, "pl", {
        status: l,
        description: this.We.description,
        isUserbar: this.We.isUserbar
      }, this.Hw, 0, c, n), !0);
    } catch (f) {
      gg.aa.protocol.ba.ja.Qa.trigger(R.bi);
    }
  },
  disconnect: function () {
    sunrise.clearCookie("[[sid_gg__0]]");
    this.G2();
    this.lo.clear();
    gg.aa.protocol.ba.Te.disconnect();
    gg.aa.core.he.EA("comm.sending");
    gg.aa.core.he.EA("comm.connected");
  },
  jna: function () {
    gg.aa.core.he.fk("comm.hooked") || this.Qa.Ka(R.tv, this.disconnect.bind(this));
    this.Uda();
    gg.aa.core.he.set("comm.connected");
    gg.aa.core.he.set("comm.hooked");
  },
  dna: function (c) {
    var h = [];
    typeof c !== "undefined" && (h = h.concat(c));
    c = [];

    if (h.length) {
      for (; h.length > gg.aa.protocol.ba.fS;) {
        var c = [],
            f = h.splice(0, gg.aa.protocol.ba.fS);
        c.push(this.Xb.Raa(f));
        this.send(c);
      }

      c = [];
      c.push(this.Xb.Saa(h));
    } else {
      c = [], c.push(this.Xb.Qaa());
    }

    this.send(c);
  },
  cga: function (c) {
    this.send(this.Xb.Xaa(c));
    gg.aa.protocol.ba.ja.Eo = setTimeout(function () {
      gg.aa.protocol.ba.ja.ut();
    }, gg.aa.protocol.ba.c$);
  },
  Zs: function (c) {
    this.send(this.Xb.Oaa(c));
  },
  sendMessage: function (c, q, p, o, f) {
    f = f || t();

    if (!gg.aa.core.he.fk("comm.connected")) {
      return f(gg.aa.protocol.ba.fr, c), gg.aa.protocol.ba.fr;
    }

    if (q.length > gg.aa.protocol.ba.MAX_MESSAGE_SIZE) {
      return f(gg.aa.protocol.ba.$n, c), gg.aa.protocol.ba.$n;
    }

    gg.aa.protocol.ba.ja.Oh[o] = {
      callback: f,
      timer: m,
      uin: c
    };
    gg.aa.protocol.ba.ja.Oh[o].timer = setTimeout(function () {
      this.callback(gg.aa.protocol.ba.iG, this.uin);
      gg.aa.protocol.ba.ja.ut();
    }.bind(gg.aa.protocol.ba.ja.Oh[o]), gg.aa.protocol.ba.dV);
    gg.aa.protocol.ba.ja.Fi[o] = {
      callback: f,
      timer: m,
      uin: c
    };
    gg.aa.protocol.ba.ja.Fi[o].timer = setTimeout(function () {
      delete gg.aa.protocol.ba.ja.Fi[o];
      gg.aa.protocol.ba.ja.ut();
    }.bind(gg.aa.protocol.ba.ja.Fi[o]), gg.aa.protocol.ba.baa);

    try {
      this.send(this.Xb.aS(c, {
        html: "",
        text: q
      }, o, p));
    } catch (u) {
      clearTimeout(gg.aa.protocol.ba.ja.Oh[o].timer), delete gg.aa.protocol.ba.ja.Oh[o];
    }

    return gg.aa.protocol.ba.CS;
  },
  Ula: function (c, n) {
    for (var l = 0, f = c.length; l < f; l++) {
      typeof this.Bo[c[l].sc] === "undefined" && (this.Bo[c[l].sc] = c[l], this.Fra(n, c[l]));
    }
  },
  Fra: function (c, h) {
    var f = [4],
        f = f.concat(h.A4),
        f = f.concat(h.m2);
    this.send(this.Xb.aS(c, {
      text: "",
      Cb: f
    }, gg.aa.protocol.ba.ja.zk.zd()));
  },
  oi: function (c, h) {
    var f;

    switch (c) {
      case R.Xk:
      case R.Yk:
        f = O.TA;
        break;

      case R.Kq:
      case R.vv:
        f = O.O9;
        break;

      case R.Kn:
        f = O.N9;
        break;

      case R.Zk:
      case R.In:
        f = O.oO;
        break;

      case R.Eq:
        f = O.L9;
        break;

      case R.OD:
        f = O.M9;
        break;

      default:
        j("Invalid event in Comm.ack");
    }

    this.send(this.Xb.vaa(f, h.ec));
  },
  iM: function (c, f) {
    this.send(this.Xb.uaa(c, f));
  },
  m7: function (c, f) {
    this.send(this.Xb.Kaa(c, f));
  },
  DDa: function (c) {
    for (var h = 0, f = c.length; h < f; h++) {
      this.iM(c[h], O.Mq);
    }
  },
  MDa: function (c) {
    for (var h = 0, f = c.length; h < f; h++) {
      this.m7(c[h], O.Mq);
    }
  },
  ut: function () {
    this.send(this.Xb.Taa());
    gg.aa.protocol.ba.ja.Fp = setTimeout(function () {
      gg.aa.protocol.ba.ja.Qa.trigger(R.$k);
    }, gg.aa.protocol.ba.hca);
  },
  Fqa: function () {
    this.send(this.Xb.Uaa());
  },
  U8: function (c, f) {
    this.send(this.Xb.Yaa(c, f));
  },
  send: function (c, n) {
    if (!n && !gg.aa.core.he.fk("comm.connected")) {
      return !1;
    }

    if (c instanceof Array) {
      for (var l = 0; l < c.length; l++) {
        this.lo.add(c[l]);
      }
    } else {
      typeof c != "undefined" && this.lo.add(c);
    }

    if (!this.lo.isEmpty() && !gg.aa.core.he.fk("comm.sending")) {
      var f = "";
      gg.aa.core.he.set("comm.sending");
      this.lo.get(!0).forEach(function (e) {
        e.length > gg.aa.protocol.ba.GE || (f.length + e.length < gg.aa.protocol.ba.GE ? f += e : gg.aa.protocol.ba.ja.lo.add(e));
      });
      gg.aa.protocol.ba.Te.send(f);
    } else {
      return !1;
    }

    return !0;
  },
  gZ: m,
  Uda: function () {
    this.G2();
    this.gZ = window.setInterval(function () {
      this.ut();
    }.bind(this), gg.aa.protocol.ba.fca);
  },
  G2: function () {
    this.Fp && window.clearInterval(this.Fp);
    this.Eo && window.clearInterval(this.Eo);
    window.clearInterval(this.gZ);
  },
  zI: function (c, q, p, o, f) {
    f = f || t();

    if (!gg.aa.core.he.fk("comm.connected")) {
      return f(gg.aa.protocol.ba.$n, c), gg.aa.protocol.ba.fr;
    }

    if (q.length > gg.aa.protocol.ba.uba) {
      return f(gg.aa.protocol.ba.$n, c), gg.aa.protocol.ba.$n;
    }

    gg.aa.protocol.ba.ja.Nh[o] = {
      callback: f,
      timer: m,
      Aj: c
    };
    gg.aa.protocol.ba.ja.Nh[o].timer = setTimeout(function () {
      this.callback(gg.aa.protocol.ba.fr, this.Aj);
      gg.aa.protocol.ba.ja.ut();
    }.bind(gg.aa.protocol.ba.ja.Nh[o]), gg.aa.protocol.ba.dV);

    try {
      this.send(this.Xb.Gaa(c, {
        html: "",
        text: q
      }, o, p));
    } catch (u) {
      clearTimeout(gg.aa.protocol.ba.ja.Nh[o].timer), delete gg.aa.protocol.ba.ja.Nh[o];
    }

    return gg.aa.protocol.ba.CS;
  },
  v_: function (c) {
    var f = gg.aa.protocol.ba.ja.zk.zd();
    this.send(this.Xb.yaa(c, f));
  },
  ux: function (c, h) {
    var f = gg.aa.protocol.ba.ja.zk.zd();
    this.send(this.Xb.waa(c, h, f));
  },
  y_: function (c, f) {
    this.send(this.Xb.Faa(c, f));
  },
  Jo: function (c) {
    var f = gg.aa.protocol.ba.ja.zk.zd();
    this.send(this.Xb.Daa(c, f));
  },
  z_: function (c) {
    this.send(this.Xb.Aaa(c));
  },
  u_: function (c, n) {
    if (typeof n === "object") {
      var l = [],
          f;

      for (f in n) {
        l.push(new gg.aa.BinaryParser.VG(n[f].yb, n[f].de));
      }

      this.send(this.Xb.xaa(c, l));
    }
  },
  Kr: function (c, n) {
    if (typeof n === "object") {
      var l = [],
          f;

      for (f in n) {
        l.push(new gg.aa.BinaryParser.VG(n[f].yb, n[f].de));
      }

      f = gg.aa.protocol.ba.ja.zk.zd();
      this.send(this.Xb.Baa(c, l, f));
    }
  },
  Bj: function (c, h) {
    if (typeof h === "object") {
      var f = gg.aa.protocol.ba.ja.zk.zd();
      this.send(this.Xb.Eaa(c, h, f));
    }
  },
  w_: function (c, n, l) {
    var f = gg.aa.protocol.ba.ja.zk.zd();
    this.send(this.Xb.Caa(c, n, l, f));
  },
  Io: function (c, h) {
    var f = gg.aa.protocol.ba.ja.zk.zd();
    this.send(this.Xb.zaa(c, h, f));
  },
  Lp: function (c, h, f) {
    this.send(this.Xb.Haa(h, c, f));
  },
  g4: function () {
    return gg.aa.protocol.ba.Te.g4();
  },
  yk: function (c) {
    this.send(this.Xb.Iaa(c));
  },
  kf: function (c, h, f) {
    this.send(gg.aa.protocol.ba.ja.Xb.Jaa(f, c, "undefined", h));
  }
});