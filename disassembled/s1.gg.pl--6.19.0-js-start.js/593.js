sunrise.extend(gg.aa.protocol.ba.zw.prototype, {
  binaryParser: new gg.aa.BinaryParser(!1),
  Ve: function (c, h) {
    var f = new PROTO.Base64Stream();
    h.SerializeToStream(f);
    f = f.getString();
    f = new gg.aa.hj().decode(f);
    return this.binaryParser.pack({
      type: [c, P.pa],
      size: [f.length, P.pa]
    }) + f;
  },
  Os: function (c) {
    var n = {},
        l;

    for (l in c) {
      if (c.hasOwnProperty(l)) {
        try {
          n[gg.aa.protocol.ba.Kc.CN(l)] = gg.aa.protocol.ba.Kc.CN(c[l]);
        } catch (f) {}
      }
    }

    return n;
  },
  Haa: function (c, q, p) {
    var o = new GGCommon.ra.Q$();
    o.nt = c;

    if (typeof q === "string") {
      var f = q.substr(0, Math.floor(q.length / 2)),
          q = q.substr(f.length),
          q = PROTO.I64.from32pair(parseInt(f, 16), parseInt(q, 16));
    }

    o.mid = q;
    var u = new GGCommon.ra.oE();
    u.type = c;
    c == 1 ? (p = sunrise.Ne("\0" + String.fromCharCode((p + "").length) + p + ""), u.dj = p) : (f = p.substr(0, Math.floor(p.length / 2)), q = p.substr(f.length), u.Gd = PROTO.I64.from32pair(parseInt(f, 16), parseInt(q, 16)));
    o.dk = u;
    return this.Ve(O.Kba, o);
  },
  vaa: function (c, n, l) {
    var f = new GGCommon.ra.BQ();
    f.xr = c;
    f.ec = n;

    if (typeof l != "undefined") {
      f.SN = l;
    }

    return this.Ve(O.Kv, f);
  },
  lxa: function (c) {
    var f = new GGCommon.ra.CY();
    f.xr = c;
    f.ec = Math.floor(Math.random() * 10000);
    return this.Ve(O.Un, f);
  },
  aS: function (c, p, o, n) {
    var f = new GGCommon.ra.EQ();
    f.Xg = sunrise.Ne("\0" + String.fromCharCode((c + "").length) + c + "");
    f.$c = 4;
    f.ec = o;
    f.uid = PROTO.I64.fromNumber(n);

    if (typeof p.text != "undefined") {
      f.text = p.text;
    }

    if (typeof p.html != "undefined") {
      f.html = p.html;
    }

    if (typeof p.Cb != "undefined") {
      f.Cb = p.Cb;
    }

    return this.Ve(O.Mv, f);
  },
  zxa: function (c, h) {
    var f = new GGCommon.ra.FY();
    f.sender = sunrise.Ne(c + "");
    f.$c = 0;
    f.ec = Math.floor(Math.random() * 10000);
    f.time = 0;

    if (typeof h.text != "undefined") {
      f.text = h.text;
    }

    if (typeof h.html != "undefined") {
      f.html = h.html;
    }

    if (typeof h.Cb != "undefined") {
      f.Yra = sunrise.Ne(h.Cb);
    }

    return this.Ve(O.Vn, f);
  },
  xxa: function (c, h) {
    var f = new GGCommon.ra.EY();
    f.Xg = sunrise.Ne(c + "");
    f.$c = 0;
    f.ec = Math.floor(Math.random() * 10000);
    f.time = 0;

    if (typeof h.text != "undefined") {
      f.text = h.text;
    }

    if (typeof h.html != "undefined") {
      f.html = h.html;
    }

    if (typeof h.Cb != "undefined") {
      f.Yra = sunrise.Ne(h.Cb);
    }

    return this.Ve(O.Tq, f);
  },
  wxa: function (c, h) {
    var f = new GGCommon.ra.DY();
    f.type = c;
    f.data = h;
    f.ec = Math.floor(Math.random() * 10000);
    return this.Ve(O.Sq, f);
  },
  Axa: function (c, h) {
    var f = new GGCommon.ra.GY();
    f.Xg = sunrise.Ne(c + "");
    f.flags = 0;
    f.data = sunrise.Ne(h + "");
    f.ec = Math.floor(Math.random() * 10000);
    return this.Ve(O.Rv, f);
  },
  yxa: function (c) {
    var f = new GGCommon.ra.Xca();
    f.flags = 0;
    f.data = sunrise.Ne(c + "");
    f.ec = Math.floor(Math.random() * 10000);
    return this.Ve(O.Uq, f);
  },
  Jaa: function (c, p, o, n) {
    var f = new GGCommon.ra.FQ();
    f.flags = 1;
    f.ec = n;
    typeof p === "undefined" && typeof o === "undefined" && j("Either receiver or conference must be given in GG_CLI_USER_APP_GENERIC");

    if (typeof p != "undefined") {
      f.Xg = sunrise.Ne("\0" + String.fromCharCode((p + "").length) + p + "");
    }

    if (typeof o != "undefined") {
      f.conference = o;
    }

    f.data = sunrise.Ne(c + "");
    return this.Ve(O.KE, f);
  },
  $R: function (aa, S, Q, N, L, I, G, f) {
    var I = typeof I != "undefined" ? I : 0,
        ac = typeof N.status != "undefined" ? N.status : O.qf,
        ab = typeof N.description != "undefined" ? N.description : "",
        T = gg.aa.protocol.ba.me.t3(N);
    N.isUserbar && (ac |= O.Qn);
    ab && (ac |= O.ci);
    var N = gg.aa.Da.qla(),
        Y = O.tda | O.kda | O.sda | O.nda | O.lda | O.jda | O.gda | O.rda | O.mda | O.fda | O.pda | O.qda | O.hda | O.oda | O.eda | O.ida,
        c = O.uda | O.vda,
        o = new GGCommon.ra.DQ();
    o.Cwa = Q;
    typeof aa.uin != "undefined" ? o.dj = sunrise.Ne("\0" + String.fromCharCode((aa.uin + "").length) + aa.uin + "") : typeof aa.alias != "undefined" ? o.dj = sunrise.Ne("\u0001" + String.fromCharCode((aa.alias + "").length) + aa.alias + "") : j("Either uin or alias must be given in GG_CLI_LOGIN_GENERIC");

    if (G) {
      o.zwa = G;
    } else {
      if (S) {
        o.hash = sunrise.Ne(S);
      }
    }

    o.qna = O.Paa;
    o.qwa = PROTO.I64.from32pair(c, Y);
    o.me = T;
    o.kwa = N;
    o.status = ac;
    o.description = ab;
    o.Dna = I;
    o.Jpa = 191;

    if (f) {
      o.Noa = PROTO.I64.from32pair(parseInt(f.substring(0, 8), 16), parseInt(f.substring(8), 16));
    }

    o.language = L;
    return this.Ve(O.JE, o);
  },
  mxa: function (c) {
    return this.binaryParser.pack({
      type: [O.ME, P.pa],
      size: [4, P.pa],
      dy: [c, P.pa]
    });
  },
  nxa: function (c, h, f) {
    return this.binaryParser.pack({
      type: [O.NE, P.pa],
      size: [13, P.pa],
      conferenceID: [c, P.Rb],
      dy: [h, P.pa],
      Ika: [f, P.Qb]
    });
  },
  rxa: function (c, q, p, o, f, u) {
    return this.binaryParser.pack({
      type: [O.RE, P.pa],
      size: [28 + u.length, P.pa],
      conferenceID: [c, P.Rb],
      infoVersionFrom: [q, P.pa],
      infoVersionTo: [p, P.pa],
      Koa: [o, P.pa],
      Loa: [f, P.pa],
      reason: [u, P.Yf]
    });
  },
  uxa: function (c, f) {
    return this.binaryParser.pack({
      type: [O.SE, P.pa],
      size: [12, P.pa],
      conferenceID: [c, P.Rb],
      f7: [f, P.pa]
    });
  },
  oxa: function (c) {
    return this.binaryParser.pack({
      type: [O.OE, P.pa],
      size: [12, P.pa],
      conferenceID: [c, P.Rb],
      seqNumber: [Math.floor(Math.random() * 10000), P.pa]
    });
  },
  qxa: function (c) {
    return this.binaryParser.pack({
      type: [O.QE, P.pa],
      size: [8, P.pa],
      conferenceID: [c, P.Rb]
    });
  },
  Aaa: function (c) {
    return this.binaryParser.pack({
      type: [O.Cba, P.pa],
      size: [12, P.pa],
      conferenceID: [c, P.Rb],
      seqNumber: [Math.floor(Math.random() * 10000), P.pa]
    });
  },
  xaa: function (c, f) {
    f = this.binaryParser.pack({
      Hz: [f, P.ki]
    });
    return this.binaryParser.pack({
      type: [O.zba, P.pa],
      size: [12 + f.length, P.pa],
      conferenceID: [c, P.Rb],
      seqNumber: [Math.floor(Math.random() * 10000), P.pa]
    }) + f;
  },
  pxa: function (c, n, l, f) {
    l = this.binaryParser.pack({
      conferenceProperties: [l, P.mj]
    });
    f = this.binaryParser.pack({
      allMembers: [f, P.ki]
    });
    return this.binaryParser.pack({
      type: [O.PE, P.pa],
      size: [16 + l.length + f.length, P.pa],
      conferenceID: [c, P.Rb],
      seqNumber: [Math.floor(Math.random() * 10000), P.pa],
      infoVersion: [n, P.pa]
    }) + l + f;
  },
  txa: function (c, h) {
    var f = this.binaryParser.pack({
      conferenceProperties: [h, P.mj]
    });
    return this.binaryParser.pack({
      type: [O.Rq, P.pa],
      size: [8 + f.length, P.pa],
      conferenceID: [c, P.Rb]
    }) + f;
  },
  sxa: function (c, n, l, f) {
    f = this.binaryParser.pack({
      conferenceProperties: [f, P.ki]
    });
    return this.binaryParser.pack({
      type: [O.Qq, P.pa],
      size: [16 + f.length, P.pa],
      conferenceID: [c, P.Rb],
      infoVersionFrom: [n, P.pa],
      infoVersionTo: [l, P.pa]
    }) + f;
  },
  Xaa: function (c) {
    var p = gg.aa.protocol.ba.me.t3(c),
        o = c.status,
        n = c.description,
        f = c.isUserbar;
    c.me && (p |= c.me);
    return typeof n === "undefined" || "" === n ? this.binaryParser.pack({
      type: [O.DS, P.pa],
      size: [12, P.pa],
      status: [o, P.pa],
      me: [p, P.pa],
      description: ["", P.Yf]
    }) : (f && (o |= O.Qn), o |= O.ci, m === n ? (o |= O.Rn, n = "") : n += "", n = gg.aa.protocol.ba.Kc.CN(n), this.binaryParser.pack({
      type: [O.DS, P.pa],
      size: [12 + n.length, P.pa],
      status: [o, P.pa],
      me: [p, P.pa],
      description: [n, P.Yf]
    }));
  },
  Taa: function () {
    return this.binaryParser.pack({
      type: [O.ES, P.pa],
      size: [0, P.pa]
    });
  },
  Uaa: function () {
    return this.binaryParser.pack({
      type: [O.FS, P.pa],
      size: [0, P.pa]
    });
  },
  vxa: function () {
    return this.binaryParser.pack({
      type: [O.PS, P.pa],
      size: [0, P.pa]
    });
  },
  Yaa: function (c, f) {
    return this.binaryParser.pack({
      type: [O.Oba, P.pa],
      size: [6, P.pa],
      YZ: [f, P.kl],
      cM: [c, P.pa]
    });
  },
  uaa: function (c, f) {
    f = typeof f != "undefined" ? f : O.YD | O.XD;
    return this.binaryParser.pack({
      type: [O.xba, P.pa],
      size: [3 + (c + "").length, P.pa],
      ht: [0, P.Qb],
      ft: [(c + "").length, P.Qb],
      login: [c + "", P.STRING],
      flags: [f, P.Qb]
    });
  },
  Kaa: function (c, f) {
    f = typeof f != "undefined" ? f : O.YD | O.XD;
    return this.binaryParser.pack({
      type: [O.Iba, P.pa],
      size: [3 + (c + "").length, P.pa],
      ht: [0, P.Qb],
      ft: [(c + "").length, P.Qb],
      login: [c + "", P.STRING],
      flags: [f, P.Qb]
    });
  },
  Raa: function (c) {
    var f = "";
    c.forEach(function (e) {
      e !== m && (f += this.binaryParser.pack(typeof e == "object" ? {
        ht: [0, P.Qb],
        ft: [(e.uin + "").length, P.Qb],
        login: [e.uin + "", P.STRING],
        flags: [e.type, P.Qb]
      } : {
        ht: [0, P.Qb],
        ft: [(e + "").length, P.Qb],
        login: [e + "", P.STRING],
        flags: [O.Mq, P.Qb]
      }));
    }.bind(this));
    return this.binaryParser.pack({
      type: [O.Mba, P.pa],
      size: [f.length, P.pa]
    }) + f;
  },
  Saa: function (c) {
    var f = "";
    c.forEach(function (e) {
      e !== m && (f += this.binaryParser.pack(typeof e == "object" ? {
        ht: [0, P.Qb],
        ft: [(e.uin + "").length, P.Qb],
        login: [e.uin + "", P.STRING],
        flags: [e.type, P.Qb]
      } : {
        ht: [0, P.Qb],
        ft: [(e + "").length, P.Qb],
        login: [e + "", P.STRING],
        flags: [O.Mq, P.Qb]
      }));
    }.bind(this));
    return this.binaryParser.pack({
      type: [O.Nba, P.pa],
      size: [f.length, P.pa]
    }) + f;
  },
  Qaa: function () {
    return this.binaryParser.pack({
      type: [O.Lba, P.pa],
      size: [0, P.pa]
    });
  },
  Oaa: function (c) {
    return this.binaryParser.pack({
      type: [O.Jba, P.pa],
      size: [8, P.pa],
      T4: [c, P.STRING]
    });
  },
  Gaa: function (c, p, o, n) {
    var f = new GGCommon.ra.CQ();
    f.$c = 4;
    f.ec = o;
    f.Gd = PROTO.I64.fromNumber(c);
    f.uid = PROTO.I64.fromNumber(n);

    if (typeof p.text != "undefined") {
      f.text = p.text;
    }

    if (typeof p.html != "undefined") {
      f.html = p.html;
    }

    if (typeof p.Cb != "undefined") {
      f.Cb = sunrise.Ne(p.Cb);
    }

    return this.Ve(O.Lv, f);
  },
  yaa: function (c, f) {
    return this.binaryParser.pack({
      type: [O.Aba, P.pa],
      size: [12, P.pa],
      conferenceID: [c, P.Rb],
      seqNumber: [f, P.pa]
    });
  },
  waa: function (c, h, f) {
    return this.binaryParser.pack({
      type: [O.yba, P.pa],
      size: [16, P.pa],
      conferenceID: [c, P.Rb],
      seqNumber: [f, P.pa],
      infoVersion: [h, P.pa]
    });
  },
  Faa: function (c, f) {
    return this.binaryParser.pack({
      type: [O.Hba, P.pa],
      size: [12, P.pa],
      conferenceID: [c, P.Rb],
      f7: [f, P.pa]
    });
  },
  Daa: function (c, f) {
    return this.binaryParser.pack({
      type: [O.Fba, P.pa],
      size: [12, P.pa],
      conferenceID: [c, P.Rb],
      seqNumber: [f, P.pa]
    });
  },
  Baa: function (c, h, f) {
    h = this.binaryParser.pack({
      $Ea: [h, P.ki]
    });
    gg.aa.protocol.ba.ja.rr[f] = O.Ov;
    return this.binaryParser.pack({
      type: [O.Dba, P.pa],
      size: [12 + h.length, P.pa],
      conferenceID: [c, P.Rb],
      seqNumber: [f, P.pa]
    }) + h;
  },
  Caa: function (c, n, l, f) {
    return this.binaryParser.pack({
      type: [O.Eba, P.pa],
      size: [16 + (l + "").length, P.pa],
      conferenceID: [c, P.Rb],
      seqNumber: [f, P.pa],
      yb: [n, P.pa],
      reason: [l, P.Yf]
    });
  },
  Eaa: function (c, q, p) {
    var o = gg.aa.protocol.ba.ja.rr,
        f = [],
        q = this.Os(q),
        u;

    for (u in q) {
      q.hasOwnProperty(u) && f.push({
        key: u,
        value: q[u],
        de: 2
      });
    }

    o[p] = O.Rq;
    q = this.binaryParser.pack({
      conferenceProperties: [f, P.mj]
    });
    return this.binaryParser.pack({
      type: [O.Gba, P.pa],
      size: [12 + q.length, P.pa],
      conferenceID: [c, P.Rb],
      seqNumber: [p, P.pa]
    }) + q;
  },
  Iaa: function (c) {
    var f = new GGCommon.ra.R$();

    if (typeof c != "undefined") {
      f.reason = c;
    }

    return this.Ve(O.Pba, f);
  },
  zaa: function (c, p, o) {
    var n = new GGCommon.ra.P$();
    n.ec = o;

    for (var f in c) {
      if (c.hasOwnProperty(f)) {
        o = new GGCommon.ra.IQ(), o.name = f, o.value = c[f], o.Hz = O.Qu | O.Su | O.Tu | O.Ru, n.properties.push(o);
      }
    }

    for (f = 0; f < p.length; f++) {
      c = new GGCommon.ra.zY(), c.dj = p[f].yb, c.Hz = p[f].de, n.members.push(c);
    }

    return this.Ve(O.Bba, n);
  }
});