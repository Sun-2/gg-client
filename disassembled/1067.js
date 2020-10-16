window.launchApp = function (aw, av, au, at, ar, aq, ao, an, ak, ai, af, ag, al, am, aj, ah, ae, ad, ab, c, o, f, ax, ap, ay, ac) {
  Ext.onReady(function () {
    (function (p, y) {
      try {
        var w = p.createElement(y),
            u = p.getElementsByTagName(y)[0],
            q = "http" + (location.protocol == "https:" ? "s" : "");
        w.async = "true";
        w.src = q + "://gg.hit.gemius.pl/xgemius.js";
        u.parentNode.insertBefore(w, u);
      } catch (z) {}
    })(document, "script");

    C.SM(Ext.create(E.ye.lB, {
      AS: 99,
      Kh: av,
      preferences: {
        config: at,
        aolConfig: aq.result,
        sounds: ag.sounds
      },
      PZ: ax,
      r_: ao,
      Vl: f,
      Pk: ae,
      HM: m,
      Ww: al,
      bI: am,
      q5: aj,
      y7: ah,
      Ni: ad,
      pg: m,
      qz: m,
      ey: ab,
      Qga: c,
      lang: ap,
      audioVideo: ac,
      onLaunch: function () {
        this.Kh = av;
        this.B8 = ai;
        this.Dh = ay;
        this.kc = Ext.create(E.stores.Qc, {
          id: av.uin
        });
        this.C2 = Ext.create(E.stores.qB, {});
        this.d8(an);
        Ext.Ajax.on("beforerequest", function (h, n) {
          if (n.method != "GET" && this.token) {
            if (typeof n.params == "string") {
              var l = Ext.Object.fromQueryString(n.params);
              l.csrf_token = this.token;
              n.params = Ext.Object.toQueryString(l);
            } else {
              if (!n.params) {
                n.params = {};
              }

              n.params.csrf_token = this.token;
            }
          }
        }, this);
        Ext.Ajax.on("requestexception", function (q, B, y) {
          var w = B.responseText;

          if (B.status == 403 && w) {
            try {
              var u = Ext.decode(B.responseText);
              u.result && u.result.status == 25 && C.k().qa.sa({
                msg: E.oa.tw,
                timeout: 0
              });
            } catch (D) {}
          } else {
            if (B.status == 401) {
              try {
                C.k().mqa(q, y);
              } catch (z) {}
            }
          }
        }, this);

        try {
          this.et = Ext.create(E.core.log.EE, {
            address: o,
            u2: this.token.csrf_token
          });
        } catch (b) {}

        Ext.create(E.stores.xF);
        Ext.create(E.stores.gv, {
          d2: ar.contactsListVersion
        }).Soa(au.contacts, au.groups || [], au.conferences || []);
        Ext.create(E.stores.UG);
        Ext.create(E.stores.sE);
        this.df = Ext.create(E.stores.nE);
        this.Ha = Ext.create(E.stores.XG);
        Ext.create(E.stores.BC);
        this.ff = Ext.create(E.f.layout.ff.mF, {
          renderTo: Ext.get("sr-navbar-wrapper"),
          contentEl: "sr-navbar"
        });
        this.qz = Ext.create(E.core.ab.yF, {
          ab: af.result,
          Ky: ai.notifications
        });
        Ext.create(E.stores.uE).S3();
        this.sd = Ext.create(C.core.Yb.tu, {
          Ci: [C.k().fa, Ext.data.StoreManager.lookup("ContactsStore"), Ext.data.StoreManager.lookup("UnknownContactsStore")]
        });
        this.Ja = Ext.create(E.f.layout.Ga.Zu, {
          Ha: this.Ha,
          ea: [[C.core.ea.bH, {
            fs: "GG"
          }]]
        });
        this.config = Ext.apply(this.config, aw);
        this.oo = Ext.create(E.services.dB, {
          Fl: this.ta,
          Ja: this.Ja
        });
        C.k().doa();
        Ext.create(E.services.fB, {
          Mg: this,
          kc: this.kc
        });
        Ext.create(E.services.KG, {
          Mg: this
        });
        this.hq = Ext.create(E.services.WG, {});

        this.HM = function (h) {
          function n(e) {
            Ext.Ajax.request({
              url: "/api/extendsession",
              method: "POST",
              params: {
                ttl: e.session.expires_in
              },
              success: function () {
                h.HM.q7(e);
              }
            });
          }

          var l = m;
          return {
            Aya: function () {
              return l;
            },
            q7: function (e) {
              l = Ext.Function.defer(function () {
                n(e);
              }, e.session.expires_in * 1000 - 300000, h);
            }
          };
        }(this);

        this.HM.q7({
          session: {
            expires_in: 21600
          }
        });

        this.pg = function () {
          var e = ak;
          return {
            getTime: function () {
              return e;
            },
            Kua: function () {
              setInterval(function () {
                e++;
              }, 1000);
            }
          };
        }(this);

        this.pg.Kua();
        this.Kna();
        this.Lc = Ext.create(E.f.layout.va.mD, {
          renderTo: Ext.getBody()
        });
        Ext.getBody().addCls(this.mma());
        this.Poa = Ext.create(E.stores.Ma.WC, {
          Aa: this.fa.get("uin")
        });
      },
      Kna: function () {
        function l(u, h) {
          var h = n(h),
              b = Ext.get(Ext.get(u).dom.parentNode);
          h ? (u.innerHTML = h, b.hasCls("counter") || b.addCls("counter")) : (u.innerHTML = "0", b.removeCls("counter"));
        }

        var q = Ext.getStore("NotificationsStore"),
            p = Ext.query("#sr-last-counter")[0],
            n = function (e) {
          e = parseInt(e, 10);
          return e > this.AS ? this.AS : e;
        }.bind(this);

        l(p, q.nb.get("_allnew"));

        (function (e, b) {
          q.nb.onChange(b, function (u, g) {
            l(e, g);
          });
        })(p, "_allnew");

        Ext.get(Ext.get(p).dom.parentNode).on("click", function (e) {
          e.preventDefault();
          n(q.nb.get("_allnew")) > 0 ? C.Ca("notifications") : C.Ca("latest");
        });
      }
    }));
    C.k().jL();
    Ext.QuickTips.init();
  });
};