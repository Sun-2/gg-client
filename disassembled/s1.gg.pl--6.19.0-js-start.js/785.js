Ext.define(E.core.xi.cC, {
  Ha: m,
  la: m,
  Tl: m,
  SI: 200,
  Xh: [],
  Jc: {},
  fa: m,
  provider: m,
  za: m,
  xx: m,
  Pk: m,
  timeout: 0,
  UI: !1,
  Do: m,
  iL: m,
  hL: m,
  tx: m,
  DP: 60000,
  oba: "lscp",
  Bm: m,
  mixins: {
    observable: Ext.util.Observable,
    ea: C.core.mixins.kb
  },
  constructor: function (c) {
    c = c || {};
    this.ea = [[C.core.ea.oj, {}]];
    this.mixins.observable.constructor.call(this, c);
    this.mixins.ea.constructor.call(this, c);
    this.addEvents("connecting", "connected", "cantconnect", "logout", "disconnected", "reconnecting", "chatmessage", "chatforwardmessage", "conferencecreated", "conferencecreationfailed", "conferencemembershipchangeready", "conferencemembershipchanged", "conferenceinvite", "conferenceforwardinvite", "conferenceinvitecancel", "conferencetext", "conferenceforwardtext", "conferencereject", "conferenceclosed", "conferencepropertieschanged", "conferenceforwardleft", "conferencefullinfo", "conferenceerror", "conferencekicked", "typing", "conferencepropertieschangedfail", "instanceschange", "conferenceinvitefail", "forwardedmessagereadreceive", "cleanchatwindows", "soundnotifications", "messageread", "callinvitation");
    this.xx = c.config || this.xx;
    this.Pk = c.Pk;
    this.za = c.za || gg.aa.Eg;
    this.provider = c.provider || Ext.state.Manager.getProvider();

    if (c.C4) {
      this.DP = c.C4;
    }
  },
  init: function (c) {
    (!c || !c.fa) && j(Error("cannot initialise: bad userProfile"));
    this.fa = c.fa;
    (!c || !c.la) && j(Error("cannot initialise: bad contactsStore"));
    this.la = c.la;
    this.Oe = Ext.StoreManager.lookup("UnknownContactsStore");
    this.Ha = Ext.StoreManager.lookup("UsersStore");
    this.V7(this.d4());
    this.fa.on("datachanged", function (g, h) {
      h === "status" ? this.V7(this.fa.get(h)) : h === "description" && "not_avail" !== this.fa.get("status") && this.ita(this.fa.get(h));
    }, this);

    try {
      var n = this.fa.get("uin"),
          l = this.dma();
      timer.Wga = new Date();
      this.connect(n, l.status, l.description, c.lang);
      this.Py();
      this.on("connected", this.zha, this);
    } catch (f) {
      return !1;
    }
  },
  zha: function () {
    this.e9(new Date());

    if (this.Do !== m) {
      C.k().qa.kI(this.Do), this.Do = m;
    }
  },
  If: function () {
    return this.za.If();
  },
  Vw: function (c, q) {
    var p = [];

    if (c.images && c.images.length) {
      for (var o = 0, f = c.images.length; o < f; o++) {
        var u = c.images[o];
        typeof this.Jc[u.sc] === "undefined" && (this.Jc[u.sc] = {}, p.push(Ext.clone(u)));
        this.Jc[u.sc][c.mid] = c;
      }

      gg.aa.protocol.ba.ja.Ula(p, q);
    }
  },
  uha: function (c) {
    for (var p in this.Jc[c.sc]) {
      if (this.Jc[c.sc].hasOwnProperty(p)) {
        for (var o = [], n = 0, f = this.Jc[c.sc][p].images.length; n < f; n++) {
          c.sc === this.Jc[c.sc][p].images[n].sc && (this.Jc[c.sc][p].images[n].contents = c.contents);
        }

        n = 0;

        for (f = this.Jc[c.sc][p].images.length; n < f; n++) {
          this.Jc[c.sc][p].images[n].cf === this.Jc[c.sc][p].images[n].contents.length && o.push(this.Jc[c.sc][p].images[n].sc);
        }

        if (o.length === this.Jc[c.sc][p].images.length) {
          switch (this.Jc[c.sc][p].eventName) {
            case R.Xk:
              this.B0(this.Jc[c.sc][p]);
              Ext.each(o, function (e) {
                delete this.Jc[e];
              }, this);
              break;

            case R.Yk:
              this.A0(this.Jc[c.sc][p]);
              Ext.each(o, function (e) {
                delete this.Jc[e];
              }, this);
              break;

            case R.Zk:
              this.D0(this.Jc[c.sc][p]);
              Ext.each(o, function (e) {
                delete this.Jc[e];
              }, this);
              break;

            case R.In:
              this.C0(this.Jc[c.sc][p]), Ext.each(o, function (e) {
                delete this.Jc[e];
              }, this);
          }
        }
      }
    }
  },
  D0: function (c, h) {
    if (c.html) {
      c.html = c.html.replace("font-family:'MS Shell Dlg 2';", "");
    }

    c = this.Iz(c);
    this.Gt(c.mid);

    if (h && c.Ag === !1) {
      this.Vw(c, c.sender);
    } else {
      var f = {
        conferenceId: c.Gd.toNumber(),
        sender: c.sender,
        html: c.html,
        text: c.text,
        time: c.time,
        attachments: c.attachments,
        mid: c.mid,
        cid: c.cid,
        $c: c.$c,
        images: c.images,
        originalMessage: c.originalMessage
      };
      this.fireEvent("conferencetext", this, f.conferenceId, f);
    }
  },
  C0: function (c, h) {
    if (c.html) {
      c.html = c.html.replace("font-family:'MS Shell Dlg 2';", "");
    }

    c = this.Iz(c);
    this.Gt(c.mid);

    if (h && c.Ag === !1) {
      this.Vw(c, C.k().fa.get("uin"));
    } else {
      var f = {
        conferenceId: c.Gd.toNumber(),
        sender: c.sender,
        html: c.html,
        text: c.text,
        time: c.time,
        attachments: c.attachments,
        mid: c.mid,
        cid: c.cid,
        $c: c.$c,
        images: c.images,
        originalMessage: c.originalMessage
      };
      this.fireEvent("conferenceforwardtext", this, f.conferenceId, f);
    }
  },
  B0: function (c, f) {
    if (c.html) {
      c.html = c.html.replace("font-family:'MS Shell Dlg 2';", "");
    }

    c = this.Iz(c);
    this.Gt(c.mid);
    f && c.Ag === !1 ? this.Vw(c, c.sender) : this.fireEvent("chatmessage", this, c.sender, c);
  },
  A0: function (c, f) {
    if (c.html) {
      c.html = c.html.replace("font-family:'MS Shell Dlg 2';", "");
    }

    c = this.Iz(c);
    this.Gt(c.mid);
    f && c.Ag === !1 ? this.Vw(c, C.k().fa.get("uin")) : this.fireEvent("chatforwardmessage", this, c.Xg, c);
  },
  Oha: function (c) {
    typeof c.u8 !== "undefined" && this.fireEvent("soundnotifications", this, c.u8);
    c.Aga === !0 && this.fireEvent("cleanchatwindows", this);
  },
  Py: function () {
    gg.aa.Oq.Ka();
    var c = this;
    this.za.Ka(R.Jn, function () {
      c.fireEvent("logout", c);
    });
    this.za.Ka(R.$k, function () {
      c.Vx();
      c.fireEvent("disconnected", c);
      c.la && c.la.KM(!1);
      c.CI();
    });
    this.za.Ka(R.bi, function () {
      c.Vx();
      c.fireEvent("cantconnect", c);
      c.CI();
    });
    this.za.Ka(R.LD, t());
    this.za.Ka(R.tv, t());
    this.za.Ka(R.JD, function (f, b) {
      c.fireEvent("typing", c, b);
    });
    this.za.Ka(R.xv, function (f, b) {
      c.mna(f, b);
    });
    this.za.Ka(R.Gq, function () {
      c.fireEvent("connected", c);
      c.vN();
    });
    this.za.Ka(R.Jq, function (l, f) {
      if (f.uin === c.fa.get("uin")) {
        f.uin = "" + f.uin, c.awa(c.qm(f.uin, f));
      }

      var b = {};
      f.notifications ? Ext.iterate(f.notifications, function (n, h) {
        b[n] = b[n] ? Ext.Object.merge(b[n], c.qm(n, h)) : c.qm(n, h);
      }) : b[f.uin] = b[f.uin] ? Ext.Object.merge(b[f.uin], c.qm(f.uin, f)) : c.qm(f.uin, f);
      c.d9(b);
      f.uin !== c.fa.get("uin") && (f.status == 21 || f.status == 1 || f.status == 15) && c.fireEvent("stoptyping", c, f);
    });
    this.za.Ka(R.FD, function (o, n) {
      var f = {},
          b = [];
      Ext.each(n.te, function (D) {
        D.uin == C.k().fa.get("uin") && Ext.Array.filter(D.yo, function (e) {
          if (D.Cf === !0 && e.name !== "ggaccount") {
            return !0;
          }

          e.name === "pubdir" && E.api.dl.uy({
            uin: D.uin
          }, {
            fn: function (u) {
              if (u.result.status == 0) {
                var u = u.result.users["0"],
                    y = {},
                    w;

                for (w in u) {
                  "" + w === "type" ? y["" + w] = E.models.Ya.prototype.types.contact : Ext.isObject(u["" + w]) && (y["" + w] = u["" + w]._content);
                }

                C.k().fa.set(y);
              }

              C.k().qa.sa({
                msg: E.oa.Zba,
                timeout: 2000
              });
            },
            scope: this
          }, {
            fn: function () {
              C.k().qa.sa({
                msg: E.oa.Yba,
                mc: {
                  text: "Spr\u00f3buj ponownie",
                  fn: this.CEa,
                  scope: this
                }
              });
            },
            scope: this
          });

          if (e.name === "avatar") {
            var q = "da_" + e.data;
            C.k().fa.set("avatar", q);
          }

          e.name === "ggaccount" && (q = Ext.JSON.decode(e.data), q.gvcWalletValue && C.k().fa.set("gvcWalletValue", q.gvcWalletValue));
          e.name === "ggaccount" && (e = Ext.JSON.decode(e.data)) && C.k().fa.set("gvcWalletValue", e.gvcWalletValue || 0);
        });
        D.uin = "" + D.uin;
        D.Cf !== !0 && b.push(D.uin);
        var p = Ext.Array.filter(D.yo, function (e) {
          return e.name === "StatusComments";
        }).pop(),
            B = Ext.Array.filter(D.yo, function (e) {
          return e.name == "avatar";
        }).pop() || !1,
            l = Ext.Array.filter(D.yo, function (e) {
          return e.name == "bot";
        }).pop() || !1,
            h = Ext.Array.filter(D.yo, function (e) {
          return e.name == "botCaps";
        }).pop() || !1;

        if (B || p || l || h) {
          if (p) {
            var G = p.data.split(",")[0];
          }

          l && (l = l.data === "1");

          if (h) {
            var h = Ext.JSON.decode(h.data),
                I = {
              G9: h.welcomeMsg || m,
              FZ: h.autoMsg || m,
              Yma: h.graphical || 0
            };
          }

          f[D.uin] = f[D.uin] ? Ext.Object.merge(f[D.uin], c.qm(D.uin, {
            avatar: B.data,
            statusComments: G,
            Cf: D.Cf,
            bot: l,
            botData: I
          })) : f[D.uin] = c.qm(D.uin, {
            avatar: B.data,
            statusComments: G,
            Cf: D.Cf,
            bot: l,
            botData: I
          });
        }
      });
      c.M7(!0);
      c.d9(f);
    });
    this.za.Ka(R.Xk, function (f, b) {
      c.B0(b, !0);
    });
    this.za.Ka(R.Kq, function (l, f) {
      var b = Ext.create(E.f.layout.Ga.Gg.Zh);
      b.cs(f.data);
      b.Go === "startavcall" ? c.fireEvent("callinvitation", this, f.sender, f) : c.fireEvent(b.Go, this, f.sender, f);
    });
    this.za.Ka(R.Hq, function (f, b) {
      c.fireEvent("chatmessageack", c, b.sender, b);
    });
    this.za.Ka(R.Yk, function (f, b) {
      c.A0(b, !0);
    });
    this.za.Ka(R.sD, function (f, b) {
      c.fireEvent("conferencecreated", c, {
        conferenceID: b.conferenceID,
        seqNumber: b.seqNumber
      });
    });
    this.za.Ka(R.tD, function () {
      c.fireEvent("conferencecreationfailed", c);
    });
    this.za.Ka(R.Eq, function (f, b) {
      c.on("conferencemembershipchangeready", function () {
        var y = {
          yb: parseInt(b.OA),
          de: b.de
        },
            g = {
          conferenceId: b.conferenceID,
          gwa: y
        };

        try {
          var z = c.Ha.De(b.conferenceID).qe();
        } catch (w) {
          return;
        }

        var o = z.get("extdata") || {};

        if (typeof o.members === "undefined") {
          o.members = [];
        }

        var h = -1;
        Ext.each(o.members, function (e, l) {
          e.yb == y.yb && (h = l);
        });
        b.fga == O.D$ ? h > -1 && o.members.splice(h, 1) : h > -1 ? o.members[h].de = y.de : o.members.push(y);
        c.Ha.WN(b.conferenceID, {
          extdata: o,
          ShowName: z.get("ShowName") || c.Sj(o.members)
        });
        c.fireEvent("conferencemembershipchanged", c, g.conferenceId, g);
      }, c, {
        single: !0
      });
      c.fireEvent("conferencemembershipchangeready");
    });
    this.za.Ka(R.yD, function (l, f) {
      var b = {
        conferenceId: f.conferenceID,
        infoVersion: f.infoVersion,
        jCa: f.Y4,
        members: f.members
      };
      c.fireEvent("conferenceinvite", c, b.conferenceId, b);
    });
    this.za.Ka(R.vD, function () {
      c.fireEvent("conferenceforwardinvite", c);
    });
    this.za.Ka(R.zD, function () {
      c.fireEvent("conferenceinvitecancel", c);
    });
    this.za.Ka(R.Zk, function (f, b) {
      c.D0(b, !0);
    });
    this.za.Ka(R.In, function (f, b) {
      c.C0(b, !0);
    });
    this.za.Ka(R.CD, function () {
      c.fireEvent("conferencereject", c);
    });
    this.za.Ka(R.rD, function (f, b) {
      c.fireEvent("conferenceclosed", c, b);
    });
    this.za.Ka(R.BD, function (p, o) {
      for (var f = {}, b = 0, q = o.conferenceProperties.length; b < q; b++) {
        f[o.conferenceProperties[b].key] = o.conferenceProperties[b].value;
      }

      c.Ha.WN(o.conferenceID, {
        extdata: f
      });
      c.fireEvent("conferencepropertieschanged", c, o);
    });
    this.za.Ka(R.wD, function () {
      c.fireEvent("conferenceforwardleft", c);
    });
    this.za.Ka(R.xD, function (u, o) {
      if ("undefined" === typeof o.conferenceID || "0000000000000000" === o.conferenceID) {
        return c.fireEvent("conferencefullinfoloaded", c), !1;
      }

      for (var f = {
        conferenceId: o.conferenceID,
        infoVersion: o.infoVersion,
        members: o.allMembers,
        conferenceProperties: o.conferenceProperties,
        seqNumber: o.seqNumber
      }, b = {
        members: f.members
      }, w = 0, q = f.conferenceProperties.length; w < q; w++) {
        b[f.conferenceProperties[w].key] = f.conferenceProperties[w].value;
      }

      w = c.Ha.De(f.conferenceId);
      q = w.qe();
      c.Ha.WN(o.conferenceID, {
        extdata: b,
        ShowName: w.qp() ? c.Sj(f.members) : q.get("ShowName"),
        protoInfo: {
          status: "conference"
        }
      });
      b = {
        uin: f.conferenceId,
        ShowName: w.qp() ? c.Sj(f.members) : q.get("ShowName"),
        type: E.models.Ya.prototype.types.conference,
        extdata: b,
        protoInfo: {
          status: "conference"
        }
      };

      if (w.qp()) {
        b.visible = !1;
      }

      q = {};
      q[f.conferenceId] = b;
      c.g9(q, !0);
      c.fireEvent("conferencefullinfo", c, f.conferenceId, f, w.get("visible"));
    });
    this.za.Ka(R.uD, function (o, n) {
      var f = gg.aa.protocol.ba.ja.rr,
          b = n.dy;
      "undefined" !== typeof f[b] && (f[b] == O.Rq ? c.fireEvent("conferencepropertieschangedfail", c) : f[b] == O.Ov && c.fireEvent("conferenceinvitefail", c));
      c.fireEvent("conferenceerror", c);
    });
    this.za.Ka(R.AD, function () {
      c.fireEvent("conferencekicked", c);
    });
    this.za.Ka(R.Kn, function (f, b) {
      c.fireEvent("event", c, f, b);
    });
    this.za.Ka(R.DD, function (f, b) {
      c.la.Fe(b.version);
    });
    this.za.Ka(R.qD, function (f, b) {
      c.fireEvent("instanceschange", c, b);
    });
    this.za.Ka(R.ND, function (e, f) {
      Ext.each(f.settings, function (g) {
        switch (g.key) {
          case "aol_enabled":
            g.value == "1" ? C.k().ia.K7(!0) : C.k().ia.K7(!1);
            C.k().ia.Rka();
            break;

          case "state":
            C.k().Zga(g.value);
            break;

          case "recent_emoticons":
            g.value && g.value.length > 0 && C.k().csa(g.value);
            break;

          case "england_migrated":
            g = parseInt(g.value, 10);
            C.k().Jta(g);
            break;

          case "terms_profiling_england":
            g.modified === !1 && C.k().Kta();
        }
      }, this);
    });
    this.za.Ka(R.GD, function (l, f) {
      var b = {
        id: f.mid.toString().replace(/^0x0*/, ""),
        type: f.nt
      };
      c.fireEvent("forwardedmessagereadreceive", b);
    });
    this.za.Ka(R.Fq, function () {
      c.Vx();
      c.Pm();
    });
    this.za.Ka(R.HD, function (f, b) {
      c.uha(b);
    });
    this.za.Ka(R.uv, function (f, b) {
      c.kia(b);
    });
    this.za.Ka(R.sv, function (f, b) {
      c.la.Ns(b.uo);
      c.Oe.Ns(b.uo);
    });
    this.za.Ka(R.sv, function (f, b) {
      c.la.Ns(b.uo);
      c.Oe.Ns(b.uo);
    });
    this.za.Ka(R.ED, function (f, b) {
      c.Oha(b, !0);
    });
  },
  Vx: function () {
    this.za.Na(R.Jn);
    this.za.Na(R.$k);
    this.za.Na(R.bi);
    this.za.Na(R.LD);
    this.za.Na(R.tv);
    this.za.Na(R.JD);
    this.za.Na(R.xv);
    this.za.Na(R.Gq);
    this.za.Na(R.Jq);
    this.za.Na(R.FD);
    this.za.Na(R.Xk);
    this.za.Na(R.Hq);
    this.za.Na(R.Yk);
    this.za.Na(R.sD);
    this.za.Na(R.tD);
    this.za.Na(R.Eq);
    this.za.Na(R.yD);
    this.za.Na(R.vD);
    this.za.Na(R.zD);
    this.za.Na(R.Zk);
    this.za.Na(R.In);
    this.za.Na(R.CD);
    this.za.Na(R.rD);
    this.za.Na(R.BD);
    this.za.Na(R.wD);
    this.za.Na(R.xD);
    this.za.Na(R.uD);
    this.za.Na(R.AD);
    this.za.Na(R.Kn);
    this.za.Na(R.DD);
    this.za.Na(R.qD);
    this.za.Na(R.ND);
    this.za.Na(R.GD);
    this.za.Na(R.Fq);
    this.za.Na(R.HD);
    this.za.Na(R.uv);
    this.za.Na(R.sv);
    this.za.Na(R.ED);
    this.za.Na(R.cxa);
    gg.aa.Oq.Na();
  },
  connect: function (c, n, l, f) {
    this.fireEvent("connecting", this);
    this.za.connect(c, {
      status: n,
      description: l || ""
    }, m, m, this.xx, f);
  },
  disconnect: function () {
    this.Do && C.k().qa.kI(this.Do);
    this.Vx();
    this.za.disconnect();
    this.Ze.KM(!1);
    this.fireEvent("disconnected", this);
  },
  Zs: function (c) {
    this.za.Zs(c);
  },
  Mza: t(),
  Jza: t(),
  vN: function () {
    var c = this.ula();
    C.k().Usa(c);
    this.Csa(c);
  },
  Csa: function (c) {
    this.za.vN(c);
  },
  wN: function (c, f) {
    this.za.wN(c, f);
  },
  Rt: function (c, q, p, o, f) {
    var u = Ext.Function.bind(function (h, n, l) {
      h === m && this.Gt(l.mid.toString());
      f(h, n, l);
    }, this);
    return this.za.Rt(c, q, p, o, u);
  },
  pua: function (c, p, o, n, f) {
    return this.za.zI(c, p, o, n, f);
  },
  Mk: function (c, n, l, f) {
    n && C.k().setCookie(this.oba, n);
    c = c || this.fa.data.status;

    if (typeof n === "undefined") {
      n = this.fa.data.description;
    }

    this.za.Mk(gg.aa.Da.rN(c), n, l || !1, f || 0);
  },
  K8: function (c) {
    this.Mk(c, m);
  },
  qua: function (c) {
    this.Mk(m, c);
  },
  Iga: function () {
    this.za.Mk(gg.aa.Da.rN(this.fa.data.status), "", !1);
  },
  le: function (c) {
    this.za.le(c);
  },
  ula: function () {
    var c = [],
        n = m,
        l = m,
        f = 0;
    this.Ha.$ka();
    this.Ha.each(function (b) {
      var g = b.yd().get("uin"),
          e = {
        0: b.yd()
      };

      if (!b.qp()) {
        return !0;
      }

      if (g !== "" && g !== "0" && e[0].get("type") === E.models.Ya.prototype.types.contact) {
        f++;

        if (f > E.config.mpa) {
          return !1;
        }

        b = 0;
        n = e[0].get("extdata");
        l = e[0].get("protoInfo");
        b = n && n.gids && Ext.Array.indexOf(n.gids, 1) !== -1 ? O.Mq : l.friend > 0 ? O.YD : O.XD;
        n.NoArchive && (b |= O.$aa);
        b != 0 && c.push({
          uin: g,
          type: b
        });
        l = n = m;
      }
    });
    return c;
  },
  mna: function () {
    this.timeout = 0;
    this.Rma({
      fn: function (c) {
        try {
          Ext.getStore("NotificationsStore").O7(!0);

          if (!C.k().kc.get(E.stores.Qc.DB, !0)) {
            this.Bm = this.Bm || m;
          }

          this.Jsa(c, this.Bm);
        } catch (f) {
          gg.aa.protocol.ba.ja.Qa.trigger(R.bi);
        }
      },
      scope: V
    }, {
      fn: function (c) {
        try {
          var h = Ext.decode(c.responseText);

          if (h.location) {
            window.location = h.location;
          }
        } catch (f) {}

        gg.aa.protocol.ba.ja.Qa.trigger(R.bi);
      }
    });
  },
  Io: function (c, p) {
    function o() {}

    function n() {}

    var f = this,
        o = function (e, h) {
      f.un("conferencecreationfailed", n);
      p.success(h);
    },
        n = function () {
      f.un("conferencecreated", o);
      p.failure();
    };

    this.on("conferencecreated", o, this, {
      single: !0
    });
    this.on("conferencecreationfailed", n, this, {
      single: !0
    });
    this.za.Io({
      name: c.name
    }, c.members);
    Ext.defer(function () {
      f.fireEvent("conferencecreationfailed", this);
    }, 3000, this);
  },
  Kr: function (c, f) {
    this.za.Kr(c, f);
  },
  ux: function (c, f) {
    this.za.ux(c, f);
  },
  Jo: function (c, h) {
    h = h || !1;
    gg.aa.protocol.ba.ja.Jo(c);

    if (h) {
      var f = this.Ha.De(params.conferenceID).qe();
      f && f.get("visible") && E.api.bb.Cja({
        uin: f.get("uin"),
        cid: f.get("cid")
      });
    }
  },
  Bj: function (c, f) {
    this.za.Bj(c, f);
  },
  d9: function (c) {
    var f = [];
    Ext.iterate(c, function (e, n) {
      if (this.la.Ba(e) && n.Cf == !1) {
        var g = this.la.Ba(e).get("protoInfo").status;
        (g == "invisible" || g == "not_avail") && n.protoInfo.status && n.protoInfo.status !== "invisible" && n.protoInfo.status !== "not_avail" && f.push(n);
      }
    }, this);
    f.length > 0 && this.la.nk(f);
    delete f;
    this.g9(c, !0);
  },
  g9: function (c, f) {
    if (this.Tl) {
      clearTimeout(this.Tl), this.Tl = m;
    }

    this.Xh = this.Xh.concat(Ext.Object.getValues(c));
    f ? this.Tl = Ext.Function.defer(this.P2, this.SI, this, [f]) : this.Tl = Ext.Function.defer(this.P2, this.SI, this);
  },
  P2: function (c) {
    if (this.Xh && this.Xh.length) {
      for (var n = {
        n5: [],
        TN: []
      }, l = 0, f = this.Xh.length; l < f; l++) {
        this.la.Ba(this.Xh[l].uin) ? n.n5.push(this.Xh[l]) : n.TN.push(this.Xh[l]);
      }

      this.la.Ek(n.n5, c);
      this.UI && (this.M7(!1), this.la.KM(!0));
      n.TN.length && this.Oe.Ek(n.TN, c);
    }

    this.Xh = [];
    this.Tl = m;
  },
  awa: function (c) {
    this.fa.set({
      description: c.protoInfo.description,
      isUserbar: c.protoInfo.isUserbar,
      status: c.protoInfo.status
    });
  },
  UEa: function (c) {
    var f = C.k().fa.get("uin");
    Ext.Array.each(c, function (e) {
      e == f && this.fireEvent("updateownerdata", this);
    }, this);
  },
  Sj: function (c) {
    var h = [],
        f = [];
    Ext.iterate(c, function (e) {
      f.indexOf(parseInt(e.yb)) === -1 && (e.yb == C.k().fa.get("uin") ? h.push(E.lang.Bn) : h.push(this.getUserData(e.yb).get("ShowName")), f.push(parseInt(e.yb)));
    }, this);
    return E.lang.tq + h.join(", ");
  },
  getUserData: function (c) {
    var f = m;
    return f = this.la.Ba(c) ? this.la.Ba(c) : C.k().fa.get("uin") == c ? C.k().fa : Ext.create(E.models.Ya, {
      uin: {
        value: c
      },
      ShowName: {
        value: c
      },
      protoInfo: {
        status: "not_avail"
      }
    });
  },
  qm: function (c, h) {
    var f = {
      extdata: {},
      protoInfo: {},
      Cf: !1
    },
        h = h || {};
    f.uin = c;
    typeof h.description !== "undefined" && (f.protoInfo.description = h.description);
    typeof h.isUserbar !== "undefined" && (f.protoInfo.isUserbar = h.isUserbar);
    typeof h.status !== "undefined" && (f.protoInfo.status = gg.aa.Da.G8(h.status));
    typeof h.avatar !== "undefined" && (f.protoInfo.avatar = h.avatar);
    typeof h.bot !== "undefined" && (f.protoInfo.bot = h.bot);
    typeof h.botData !== "undefined" && (f.protoInfo.botData = h.botData);
    typeof h.statusComments !== "undefined" && (f.protoInfo.statusComments = h.statusComments);
    typeof h.Cf !== "undefined" && (f.Cf = h.Cf);

    if (h.me) {
      f.protoInfo.friend = 0;
    }

    Ext.Object.each(h.me, function (g, l) {
      if (g == "CAPS_BILATERAL_ACQUAINTANCE") {
        f.protoInfo.friend = l === !0 ? 1 : 0;
      } else {
        if (g == "CAPS_ANONYMOUS_USER") {
          f.protoInfo.anonymous = 1;
        }
      }
    }, this);
    return f;
  },
  CI: function () {
    Ext.Function.defer(function () {
      var c = C.k().qa,
          f = m;
      C.k().qa.on("aftershow", this.bha, this, {
        single: !0
      });
      f = Ext.clone(E.oa.m$);
      f.text = Ext.String.format(f.text, '<span class="reconnect-counter"></span>');
      this.Do = c.sa({
        msg: f,
        mc: {
          text: E.lang.Pc,
          fn: function () {
            if (this.task && this.eK()) {
              this.eK().stop(this.task), this.task = m;
            }

            this.Pm();
          },
          scope: this
        }
      });
    }, 1000, this);
  },
  bha: function (c, q) {
    this.timeout ? this.timeout >= 160 ? this.timeout = 240 : this.timeout *= 2 : this.timeout = 5;
    var p = c.tb[q],
        o = Ext.Element(p.dom).select(".reconnect-counter"),
        f = this.eK(),
        u = this.timeout;

    if (this.task) {
      f.stop(this.task), this.task = m;
    }

    this.task = {
      run: function () {
        u == 0 ? (o.update("0"), f.stop(this.task), this.Pm()) : o.update(u);
        --u;
      },
      scope: this,
      interval: 1000
    };
    p.id == 414 && f.start(this.task);
  },
  eK: function () {
    if (!this.runner) {
      this.runner = new Ext.util.TaskRunner();
    }

    return this.runner;
  },
  Pm: function () {
    if (!this.If()) {
      timer.Pm = !0;
      timer.Wga = new Date();
      var c = this.fa.get("uin"),
          q = m,
          p = m;
      m === this.tx || new Date().getTime() - this.tx <= this.DP ? (q = this.iL, p = this.hL) : (q = this.d4(), p = this.zla());
      var o = {
        status: q,
        description: p || "",
        isUserbar: this.fa.get("isUserbar"),
        avatar: this.fa.get("avatar")
      };
      o.status = "not_avail" === o.status || !o.status ? O.WD : gg.aa.Da.rN(o.status);
      o.status |= O.Lq;
      o.status |= "undefined" === typeof p || m === p ? O.Rn : O.ci;
      this.fireEvent("reconnecting", this);
      var f = f || {
        fn: function (b) {
          this.za.connect(c, o, m, m, b.servers);
          this.Py();
        },
        scope: this
      },
          u = u || {
        fn: function () {
          this.CI();
          this.fireEvent("cantconnect", this);
        },
        scope: this
      };
      this.ola(f, u);
    }
  },
  ola: function (c, f) {
    Ext.Ajax.request({
      url: "/api/appmsg",
      method: "GET",
      success: function (o, g) {
        var b = m;

        try {
          b = Ext.decode(o.responseText), b = b.result;
        } catch (p) {
          b = m;
        }

        c.fn.call(c.scope, b, o, g);
      },
      failure: function (e, o) {
        var g = m;

        try {
          g = Ext.decode(e.responseText);
        } catch (p) {}

        f.fn.call(f.scope, g, e, o);
      },
      scope: this
    });
  },
  Oua: function (c) {
    return gg.aa.protocol.ba.Kc.St(c);
  },
  Nua: function (c) {
    return gg.aa.protocol.ba.Kc.AA(c);
  },
  dma: function () {
    var c = {},
        f = C.k().ia.VJ();

    if ([-1, O.qf, O.Ln, O.Nn, O.Pn, O.Mn].indexOf(f.status) === -1) {
      f.status = O.qf;
    }

    if (typeof f.txt === "undefined" || f.txt == "" || !f.txt) {
      c.description = "", c.status = f.status > 0 ? f.status | O.Lq | O.Rn : O.WD | O.Rn;
    } else {
      if (c.description = f.txt, f.status > 0) {
        switch (f.status) {
          case O.qf:
          case O.zv:
            c.status = O.qf;
            break;

          case O.Ln:
          case O.RD:
            c.status = O.Ln;
            break;

          case O.Nn:
          case O.TD:
            c.status = O.Nn;
            break;

          case O.Pn:
          case O.VD:
            c.status = O.Pn;
            break;

          case O.Mn:
          case O.SD:
            c.status = O.Mn;
            break;

          default:
            c.status = O.qf;
        }

        c.status = c.status | O.ci | O.Lq;
      } else {
        c.status = O.WD;
      }
    }

    return c;
  },
  Iz: function (c) {
    if (c.cid && c.cid.msw) {
      c.cid = Ext.String.leftPad(c.cid.msw.toString(16), 8, "0") + Ext.String.leftPad(c.cid.lsw.toString(16), 8, "0");
    }

    if (c.mid && c.mid.msw) {
      c.mid = Ext.String.leftPad(c.mid.msw.toString(16), 8, "0") + Ext.String.leftPad(c.mid.lsw.toString(16), 8, "0");
    }

    return c;
  },
  Gt: function (c) {
    if (c && (c.substring(0, 2) == "0x" && (c = c.substring(2)), this.Bm = this.Bm || "0", this.Bm.localeCompare(c) == -1)) {
      this.Bm = c;
    }
  },
  logout: function () {
    try {
      if ((C.k().ob("selfstatus").logout.enabled ? C.k().ob("selfstatus").logout.enabled : "0") == "1") {
        var c = C.k().ob("selfstatus").logout.txt;
        Ext.data.StoreManager.lookup("InstancesStore").getCount() === 0 ? (this.za.Mk(O.On | O.ci, c), this.disconnect(), C.k().fa.set("status", "not_avail"), C.k().fa.set("description", c)) : (this.za.Mk(O.On | O.Rn), this.disconnect(), C.k().fa.set("status", "not_avail"));
      } else {
        this.za.Mk(O.On | O.Rn), this.disconnect(), C.k().fa.set("status", "not_avail");
      }
    } catch (f) {}
  },
  qBa: function (c) {
    c = Ext.Object.getKey(gg.aa.protocol.ba.ja.rr, c);
    this.Hja(c);
    return c;
  },
  Hja: function (c) {
    delete gg.aa.protocol.ba.ja.rr[c];
  },
  Lp: function (c, h, f) {
    this.za.Lp(c, h, f);
  },
  oma: function (c, h, f) {
    h = h || {};
    h.fn = h.fn || t();
    h.scope = h.scope || this;
    f = f || {};
    f.fn = f.fn || t();
    f.scope = f.scope || this;
    Ext.Ajax.request({
      url: "/api/wmessage/persistent",
      method: C.ca.Da.methods.qd,
      params: {
        userAgent: c
      },
      disableCaching: !1,
      success: function (e) {
        try {
          var g = Ext.decode(e.responseText);
          g.w || j("No w");
          g.w.length < 2 && j("W to short");
          h.fn.call(h.scope, g.w);
        } catch (o) {
          f.fn.call(f.scope);
        }
      },
      failure: function (g) {
        try {
          var l = Ext.decode(g.responseText);

          if (l.location) {
            window.location = l.location;
          }
        } catch (o) {}

        f.fn.call(f.scope);
      },
      scope: this
    });
  },
  Rma: function (c, h) {
    c = c || {};
    c.fn = c.fn || t();
    c.scope = c.scope || this;
    h = h || {};
    h.fn = h.fn || t();
    h.scope = h.scope || this;

    if (this.Pk) {
      var f = this.Pk;
      this.Pk = m;
      c.fn.call(c.scope, f);
    } else {
      this.Ira(c, h);
    }
  },
  Ira: function (c, f) {
    c = c || {};
    c.fn = c.fn || t();
    c.scope = c.scope || this;
    f = f || {};
    f.fn = f.fn || t();
    f.scope = f.scope || this;
    Ext.Ajax.request({
      url: "/api/wmessage",
      method: C.ca.Da.methods.qd,
      disableCaching: !1,
      success: function (n) {
        try {
          var e = Ext.decode(n.responseText);
          e.w || j("No w");
          e.w.length < 2 && j("W to short");
          c.fn.call(c.scope, e.w);
        } catch (b) {
          f.fn.call(f.scope);
        }
      },
      failure: function (e) {
        try {
          var n = Ext.decode(e.responseText);

          if (n.location) {
            window.location = n.location;
          }
        } catch (g) {}

        f.fn.call(f.scope);
      },
      scope: this
    });
  },
  V7: function (c) {
    if (c !== "not_avail") {
      this.iL = c;
    }
  },
  pBa: x("iL"),
  ita: v("hL"),
  oBa: x("hL"),
  d4: function () {
    var c = C.k().ia.VJ(),
        f = "not_avail";
    c.status && (f = gg.aa.Da.G8(c.status));
    return f;
  },
  zla: function () {
    var c = C.k().ia.VJ(),
        f = m;
    c.txt && (f = c.txt);
    return f;
  },
  kia: function () {
    this.e9(new Date());
  },
  e9: function (c) {
    return this.tx = c.getTime() || c;
  },
  XAa: x("tx"),
  bBa: x("UI"),
  M7: function (c) {
    this.UI = !!c;
  },
  yk: function (c) {
    this.za.yk(c);
  },
  kf: function (c, h, f) {
    this.za.kf(c, h, f);
  }
});