sunrise.extend(gg.aa.protocol.ba.QF, {
  binaryParser: new gg.aa.BinaryParser(!1),
  Zb: "",
  Ps: function (c) {
    return this.kna(c);
  },
  Dwa: function (c, f) {
    return gg.aa.protocol.ba.fi.uqa(typeof c != "undefined" ? c : "", typeof f != "undefined" ? f : "");
  },
  kna: function (c) {
    var p = [],
        o = {};
    this.Zb += c;

    try {
      for (o = this.fH(this.Zb); this.Zb.length >= o.size + U;) {
        var n = this.Gda(o, this.Zb.substring(U, o.size + U));
        n !== m && p.push(n);
        this.Zb = this.Zb.substring(o.size + U);
        this.Zb.length >= this.fH(this.Zb).size + U && (o = this.fH(this.Zb));
      }
    } catch (f) {
      this.Zb = "";
    }

    return p;
  },
  Os: function (c) {
    var n = "",
        l = "",
        f;

    for (f in c) {
      if (c.hasOwnProperty(f)) {
        n = gg.aa.protocol.ba.Kc.iy(f), l = gg.aa.protocol.ba.Kc.iy(c[f].value), n !== f && delete c[f], c[n].value = l;
      }
    }

    return c;
  },
  fH: function (c) {
    var f = m,
        f = this.binaryParser.Oc(c, {
      type: P.pa,
      size: P.pa
    });
    (f.size > gg.aa.protocol.ba.wba || f.size < 0) && j({
      msg: "packet.size > MAX_RECIEVE_PACKET_SIZE",
      size: f.size
    });
    return new gg.aa.protocol.ba.Ta(f.type, f.size);
  },
  aZ: function (c) {
    if (/<img name/.test(c.html)) {
      var z = [];

      if (c.Cb) {
        var u = c.Cb.slice(0, 3),
            o = {};
        o.type = u[0];
        o.length = u[2] * 256 + u[1];
        delete u;

        if (o.type === gg.aa.protocol.ba.Ec.Vaa) {
          u = 3;

          for (o = o.length + u; u < o;) {
            var f = c.Cb.slice(u, u + 3);
            u += 3;
            var B = {};
            B.EH = f[1] * 256 + f[0];
            B.type = f[2];
            delete f;

            if (B.type === gg.aa.protocol.ba.Ec.Maa) {
              f = c.Cb.slice(u, u + 10);
              u += 10;
              var y = {
                contents: ""
              };
              y.EH = B.EH;
              y.cf = f[5] * 16777216 + f[4] * 65536 + f[3] * 256 + f[2];
              y.A4 = f.slice(2, 6);
              y.Af = f[9] * 16777216 + f[8] * 65536 + f[7] * 256 + f[6];
              y.m2 = f.slice(6, 10);

              y.sc = "" + function (e) {
                for (; e.length < 8;) {
                  e = "0" + e;
                }

                return e;
              }(y.Af.toString(16)) + function (e) {
                for (; e.length < 8;) {
                  e = "0" + e;
                }

                return e;
              }(y.cf.toString(16));

              z.push(y);
              delete f;
              delete y;
            }
          }
        }
      } else {
        var w = [];
        c.html.replace(/\s+name="(([a-fA-F0-9]){16}[^"]*)"/g, function (g, h) {
          w.push(h);
          return g;
        });
        u = 0;

        for (o = w.length; u < o; u++) {
          y = {
            contents: ""
          }, y.Af = w[u].slice(0, 8), y.cf = w[u].slice(8), y.m2 = [parseInt(y.Af.slice(0, 2), 16), parseInt(y.Af.slice(2, 4), 16), parseInt(y.Af.slice(4, 6), 16), parseInt(y.Af.slice(6, 8), 16)].reverse(), y.A4 = [parseInt(y.cf.slice(0, 2), 16), parseInt(y.cf.slice(2, 4), 16), parseInt(y.cf.slice(4, 6), 16), parseInt(y.cf.slice(6, 8), 16)].reverse(), y.sc = w[u], y.Af = parseInt(y.Af, 16), y.cf = parseInt(y.cf, 16), z.push(y), delete y;
        }
      }

      c.Ag = !1;
      c.images = z;
      delete z;
    }

    return c;
  },
  Fda: function (c) {
    if (c.Cb && (c.Cb[0] === gg.aa.protocol.ba.Ec.eS || c.Cb[0] === gg.aa.protocol.ba.Ec.QD)) {
      var p = 1,
          o = c.Cb.slice(p, p + 8);
      p += 8;
      var n = {};
      n.cf = o[3] * 16777216 + o[2] * 65536 + o[1] * 256 + o[0];
      n.Af = o[7] * 16777216 + o[6] * 65536 + o[5] * 256 + o[4];
      var o = m,
          f;

      for (f in gg.aa.protocol.ba.ja.Bo) {
        gg.aa.protocol.ba.ja.Bo.hasOwnProperty(f) && (o = gg.aa.protocol.ba.ja.Bo[f], o.cf == n.cf && o.Af == n.Af && (o.contents += c.Cb && c.Cb[0] === gg.aa.protocol.ba.Ec.QD ? sunrise.vh(c.Cb.slice(p, c.Cb.length)) : sunrise.vh(c.Cb.slice(p + c.Cb.slice(p, c.Cb.length - 1).indexOf(0) + 1, c.Cb.length)), o.contents.length === o.cf && (gg.aa.protocol.ba.ja.Qa.trigger(R.HD, o), delete gg.aa.protocol.ba.ja.Bo[o.sc])));
      }
    }
  },
  Iw: function (c, n) {
    var l = m;

    switch (c) {
      case O.Qv:
        l = new GGCommon.ra.Wca();
        break;

      case O.JE:
        l = new GGCommon.ra.DQ();
        break;

      case O.VE:
        l = new GGCommon.ra.Yca();
        break;

      case O.Sq:
        l = new GGCommon.ra.DY();
        break;

      case O.Un:
        l = new GGCommon.ra.CY();
        break;

      case O.Kv:
        l = new GGCommon.ra.BQ();
        break;

      case O.Mv:
        l = new GGCommon.ra.EQ();
        break;

      case O.Vn:
        l = new GGCommon.ra.FY();
        break;

      case O.Tq:
        l = new GGCommon.ra.EY();
        break;

      case O.KE:
        l = new GGCommon.ra.FQ();
        break;

      case O.Rv:
        l = new GGCommon.ra.GY();
        break;

      case O.Uq:
        l = new GGCommon.ra.Xca();
        break;

      case O.Lv:
        l = new GGCommon.ra.CQ();
        break;

      case O.Pv:
        l = new GGCommon.ra.Tca();
        break;

      case O.Nv:
        l = new GGCommon.ra.Rca();
        break;

      case O.Qq:
        l = new GGCommon.ra.Sca();
        break;

      case O.LE:
        l = new GGCommon.ra.Qca();
        break;

      case O.UE:
        l = new GGCommon.ra.Vca();
        break;

      case O.WE:
        l = new GGCommon.ra.Zca();
        break;

      case O.TE:
        l = new GGCommon.ra.Uca();
        break;

      default:
        j("Unknown packet type: " + c);
    }

    var f = new PROTO.Base64Stream(new gg.aa.hj().encode(n));
    l.ParseFromStream(f);
    l = l.values_;

    switch (c) {
      case O.Qv:
        if (typeof l.mid === "undefined") {
          l.mid = 0;
        }

        if (typeof l.dk !== "undefined") {
          if (typeof l.dk.values_.dj !== "undefined") {
            l.OA = sunrise.vh(l.dk.values_.dj).substr(2);
          } else {
            if (typeof l.dk.values_.Gd !== "undefined") {
              l.vza = Int64.from32bitPair(l.dk.values_.Gd.msw, l.dk.values_.Gd.lsw).toString();
            }
          }
        }

        break;

      case O.Kv:
        if (typeof l.SN === "undefined") {
          l.SN = !0;
        }

        break;

      case O.Mv:
        l.Xg = sunrise.vh(l.Xg).substr(2);
        break;

      case O.Lv:
        if (typeof l.Gd !== "undefined") {
          l.Gd = l.Gd.toNumber();
        }

        break;

      case O.Uq:
        l.data = sunrise.vh(l.data);
        break;

      case O.Un:
        if (typeof l.mid === "undefined") {
          l.mid = 0;
        }

        break;

      case O.Vn:
        if (typeof l.mid === "undefined") {
          l.mid = 0;
        }

        l.sender = sunrise.vh(l.sender).substr(2);
        break;

      case O.Pv:
        if (typeof l.mid === "undefined") {
          l.mid = 0;
        }

        if (typeof l.cid === "undefined") {
          l.cid = 0;
        }

        if (typeof l.Aj !== "undefined") {
          l.Aj = l.Aj.toNumber();
        }

        l.sender = sunrise.vh(l.sender).substr(2);
        break;

      case O.Nv:
        if (typeof l.mid === "undefined") {
          l.mid = 0;
        }

        if (typeof l.cid === "undefined") {
          l.cid = 0;
        }

        if (typeof l.Aj !== "undefined") {
          l.Aj = l.Aj.toNumber();
        }

        break;

      case O.Tq:
        if (typeof l.mid === "undefined") {
          l.mid = 0;
        }

        l.Xg = sunrise.vh(l.Xg).substr(2);
        break;

      case O.Un:
        l.data = sunrise.Goa((l.data.split("app_event")[1] || "").replace("><![CDATA[", "").replace("]]></", ""));
        break;

      case O.Qq:
        if (typeof l.mid === "undefined") {
          l.mid = 0;
        }

        if (typeof l.cid === "undefined") {
          l.cid = 0;
        }

        l.conferenceID = Int64.from32bitPair(l.Gd.msw, l.Gd.lsw).toString();
        delete l.Gd;
        l.OA = sunrise.vh(l.OA).substr(2);
        l.P4 = sunrise.vh(l.P4).substr(2);
        break;

      case O.Sq:
        l.data = PROTO.decodeUTF8(l.data);
    }

    return l;
  },
  Gda: function (b, e) {
    var g = {};

    switch (b.type) {
      case O.Sq:
      case O.Un:
      case O.Kv:
      case O.JE:
      case O.Mv:
      case O.KE:
      case O.Rv:
      case O.Uq:
      case O.Lv:
      case O.Qq:
      case O.VE:
      case O.UE:
      case O.Qv:
      case O.WE:
      case O.TE:
        g = this.Iw(b.type, e);
        break;

      case O.LE:
        g = this.Iw(b.type, e);

        if (typeof g.settings !== "undefined") {
          var h = g.settings;
          g.settings = [];

          for (var l = 0, n = h.length; l < n; l++) {
            g.settings[l] = h[l].values_;
          }
        }

        break;

      case O.Qba:
      case O.Pv:
      case O.Nv:
        g = this.Iw(b.type, e);
        g = this.aZ(g);
        g.originalMessage = {
          html: g.html,
          text: g.text
        };

        if (typeof g.html !== "undefined" && g.html.charCodeAt(g.html.length - 1) === 0) {
          g.html = g.html.substr(0, g.html.length - 1);
        }

        if (typeof g.text !== "undefined" && g.text.charCodeAt(g.text.length - 1) === 0) {
          g.text = g.html.substr(0, g.text.length - 1);
        }

        if (typeof g.html == "undefined" && typeof g.text !== "undefined") {
          g.html = M(g.text).nl2br();
        } else {
          if (typeof g.text == "undefined" && typeof g.html !== "undefined") {
            g.text = g.html.stripTags();
          }
        }

        break;

      case O.Vn:
      case O.Tq:
        g = this.Iw(b.type, e);
        b.type === O.Vn && this.Fda(g);
        g.originalMessage = {
          html: g.html,
          text: g.text
        };
        (g.html == "" || g.text == "") && g.Cb && (g.Cb[0] === gg.aa.protocol.ba.Ec.Naa || gg.aa.protocol.ba.Ec.eS || g.Cb && g.Cb[0] === gg.aa.protocol.ba.Ec.QD) ? g.Ag = !0 : g = this.aZ(g);

        if (typeof g.html !== "undefined" && g.html.charCodeAt(g.html.length - 1) === 0) {
          g.html = g.html.substr(0, g.html.length - 1);
        }

        if (typeof g.text !== "undefined" && g.text.charCodeAt(g.text.length - 1) === 0) {
          g.text = g.html.substr(0, g.text.length - 1);
        }

        if (typeof g.html == "undefined" && typeof g.text !== "undefined") {
          g.html = M(g.text).nl2br();
        } else {
          if (typeof g.text == "undefined" && typeof g.html !== "undefined") {
            g.text = g.html.stripTags();
          }
        }

        break;

      case O.IS:
        g = this.binaryParser.Oc(e, {
          conferenceID: P.Rb
        });
        break;

      case O.TS:
        g = this.binaryParser.Oc(e, {
          YZ: P.kl,
          cM: P.pa
        });
        break;

      case O.US:
        g = this.binaryParser.Oc(e, {
          vsa: P.pa
        });
        break;

      case O.RS:
        g = this.binaryParser.Oc(e, {
          reason: P.pa
        });
        break;

      case O.SS:
        g.notifications = {};

        for (this.binaryParser.setBuffer(e); this.binaryParser.getPosition() < b.size;) {
          h = {
            description: ""
          };
          h.uin = this.binaryParser.read(P.lr);
          h.status = this.binaryParser.read(P.pa);
          h.Cf = !0;
          this.binaryParser.Ag(12);
          h.me = gg.aa.protocol.ba.me.K6(this.binaryParser.read(P.pa));
          h.description = this.binaryParser.read(P.Yf);

          if ((h.status & O.ci) == O.ci) {
            try {
              h.description = gg.aa.protocol.ba.Kc.iy(h.description);
            } catch (p) {}
          }

          h.isUserbar = (h.status & O.Qn) == O.Qn;
          h.status &= 255;
          g.notifications[h.uin] = h;
        }

        break;

      case O.OS:
        this.binaryParser.setBuffer(e);
        g = {
          description: ""
        };
        g.uin = this.binaryParser.read(P.lr);
        g.status = this.binaryParser.read(P.pa);
        this.binaryParser.Ag(12);
        g.me = gg.aa.protocol.ba.me.K6(this.binaryParser.read(P.pa));
        g.description = this.binaryParser.read(P.Yf);

        if ((g.status & O.ci) == O.ci) {
          try {
            g.description = gg.aa.protocol.ba.Kc.iy(g.description);
          } catch (q) {}
        }

        g.isUserbar = (g.status & O.Qn) == O.Qn;
        g.status &= 255;
        g.Cf = !1;
        break;

      case O.HS:
        this.binaryParser.setBuffer(e);
        g = {};
        g.H6 = this.binaryParser.read(P.pa);
        g.instances = [];

        if (g.H6) {
          for (h = 0; h < g.H6; h++) {
            n = {
              SK: this.binaryParser.read(P.pa),
              oe: this.binaryParser.read(P.pa),
              version: this.binaryParser.read(P.pa),
              x5: this.binaryParser.read(P.pa),
              T4: this.binaryParser.read([P.STRING, 8]),
              hwa: this.binaryParser.read(P.pa)
            }, n.WEa = this.binaryParser.read([P.STRING, n.hwa]), n.ewa = this.binaryParser.read(P.pa), n.userAgent = this.binaryParser.read([P.STRING, n.ewa]), g.instances.push(n);
          }
        }

        for (h = 0; h < g.instances.length; h++) {
          var n = g.instances[h],
              u = g.instances[h].SK;
          with (Math) {
            var l = floor(u / pow(256, 3)),
                w = floor(u % pow(256, 3) / pow(256, 2)),
                z = floor(u % pow(256, 3) % pow(256, 2) / pow(256, 1)),
                u = floor(u % pow(256, 3) % pow(256, 2) % pow(256, 1) / pow(256, 0));
          }
          n.SK = u + "." + z + "." + w + "." + l;
          g.instances[h].bpa = new Date(g.instances[h].x5 * 1000);
          g.instances[h].name = (g.instances[h].userAgent || "Gadu-Gadu").replace(/ client build[:]{0,1}/ig, "").replace(/vesperclient/i, "Poczta.gg.pl");
        }

        break;

      case O.GS:
        this.binaryParser.setBuffer(e);
        g = {};
        g.wZ = this.binaryParser.read(P.pa);

        if (g.wZ) {
          l = m;

          for (h = 0; h < g.wZ; h++) {
            for (var w = [], z = this.binaryParser.read(P.pa), u = 0, y = m, n = m; u < z; u++) {
              y = this.binaryParser.read(P.Qb), n = this.binaryParser.read(P.Qb), n = this.binaryParser.read([P.STRING, n]), y === 0 && (0 === u ? l = n : w.push(n));
            }

            if (l && w.length) {
              g.uo = g.uo || {}, g.uo[l] = w;
            }
          }
        }

        break;

      case O.NS:
        g = this.binaryParser.Oc(e, {
          status: P.pa,
          version: P.pa,
          format: P.pa,
          tza: P.pa
        });
        break;

      case O.JS:
        g = this.binaryParser.Oc(e, {
          conferenceID: P.Rb,
          seqNumber: P.pa
        });
        break;

      case O.ME:
        g = this.binaryParser.Oc(e, {
          dy: P.pa
        });
        break;

      case O.NE:
        g = this.binaryParser.Oc(e, {
          conferenceID: P.Rb,
          dy: P.pa,
          Ika: P.Qb
        });
        break;

      case O.Ov:
        g = this.binaryParser.Oc(e, {
          conferenceID: P.Rb,
          Y4: P.pa,
          infoVersion: P.pa,
          conferenceProperties: P.mj,
          members: P.ki
        });
        g.conferenceProperties = this.Os(g.conferenceProperties);
        break;

      case O.KS:
        g = this.binaryParser.Oc(e, {
          conferenceID: P.Rb,
          Y4: P.pa,
          lwa: P.ki
        });
        break;

      case O.RE:
        g = this.binaryParser.Oc(e, {
          conferenceID: P.Rb,
          infoVersionFrom: P.pa,
          infoVersionTo: P.pa,
          Koa: P.pa,
          Loa: P.pa
        });
        this.binaryParser.setBuffer(e.substring(24));
        h = this.binaryParser.read(P.pa);
        g.reason = this.binaryParser.read([P.STRING, h]);
        break;

      case O.SE:
        g = this.binaryParser.Oc(e, {
          conferenceID: P.Rb,
          f7: P.pa
        });
        break;

      case O.OE:
        g = this.binaryParser.Oc(e, {
          conferenceID: P.Rb,
          seqNumber: P.pa
        });
        break;

      case O.QE:
        g = this.binaryParser.Oc(e, {
          conferenceID: P.Rb
        });
        break;

      case O.PE:
        g = this.binaryParser.Oc(e, {
          conferenceID: P.Rb,
          seqNumber: P.pa,
          infoVersion: P.pa,
          conferenceProperties: P.mj,
          allMembers: P.ki
        });
        g.conferenceProperties = this.Os(g.conferenceProperties);
        break;

      case O.Rq:
        g = this.binaryParser.Oc(e, {
          conferenceID: P.Rb,
          conferenceProperties: P.mj
        });
        g.conferenceProperties = this.Os(g.conferenceProperties);
        break;

      case O.QS:
        this.binaryParser.setBuffer(e);
        n = this.binaryParser.read(P.pa) > 0;
        g = {};
        g.U2 = this.binaryParser.read(P.pa);
        g.te = [];

        if (g.U2) {
          for (h = 0; h < g.U2; h++) {
            l = {};
            l.uin = this.binaryParser.read(P.lr);
            l.Cf = n;
            l.yZ = this.binaryParser.read(P.pa);
            l.yo = [];

            if (l.yZ) {
              for (w = 0; w < l.yZ; w++) {
                z = {}, z.Rpa = this.binaryParser.read(P.pa), z.name = this.binaryParser.read([P.STRING, z.Rpa]), z.version = this.binaryParser.read(P.pa), z.rja = this.binaryParser.read(P.pa), z.data = this.binaryParser.read([P.STRING, z.rja]), l.yo.push(z);
              }
            }

            g.te.push(l);
          }
        }

        break;

      case O.LS:
        g = this.binaryParser.Oc(e, {
          version: P.pa
        });
    }

    return sunrise.extend(b, g);
  }
});