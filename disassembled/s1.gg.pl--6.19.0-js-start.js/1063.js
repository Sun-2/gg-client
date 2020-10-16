Ext.define(E.f.search.tG, {
  extend: C.f.Jb,
  cls: "search-container",
  id: "search-container",
  html: "&nbsp;",
  limit: 10,
  Ri: 0,
  ik: 0,
  lea: m,
  IW: ".show-criteria",
  $f: ".search-criteria-form",
  Bu: "collapsed",
  yca: ".search-form",
  wca: "#search-all",
  bxa: "edit-contact-ggnumber",
  axa: "edit-contact-email",
  yp: !1,
  constructor: function () {
    "undefined" === typeof this.Ri && j("nextOffset is not given");
    "undefined" === typeof this.limit && j("limit is not given");
    this.ka = {
      ".show-criteria": function (c) {
        c.preventDefault();
        this.HN();
      },
      ".search-contact-next": function () {
        var c = this.xs();
        C.ca.xa.op(c.toString()) ? this.nH() : this.aq(0);
      },
      ".page-prev": function (c) {
        c.preventDefault();
        this.rma();
      },
      ".page-next": function (c) {
        c.preventDefault();
        this.jma();
      },
      ".start-chat": function (c) {
        c.preventDefault();
        var f = this.list.getSelectionModel().selected.items[0];
        this.fireEvent("startchat", this, c.getTarget(m, m, !0), f);
        C.k().fc(f);
      },
      ".toggle-view-data": function (c) {
        c.preventDefault();
        var h = c.target.tagName.toLowerCase() === "span" ? c.target.parentElement.parentElement.children[1].children[4] : c.target.parentElement.parentElement.parentElement.children[1].children[4],
            f = m,
            f = c.target.tagName.toLowerCase() === "span" ? c.target.children[1] : c.target.tagName.toLowerCase() === "i" ? c.target.parentElement.children[1] : c.target;
        h.classList.toggle("d-none");
        f.innerText = h.classList.contains("d-none") ? E.lang.hD : E.lang.LR;
      },
      ".add-contact": function (c) {
        c.preventDefault();
        c = c.target.tagName.toLowerCase() === "span" ? c.target.parentElement.parentElement.children[1].children[2].children[0].children[0] : c.target.parentElement.parentElement.parentElement.children[1].children[2].children[0].children[0];
        this.fireEvent("redirectowner", {
          address: "user-profile/" + (Ext.isIE ? Ext.get(c).dom.innerText : Ext.get(c).dom.textContent) + "/add"
        });

        if (C.k().ue) {
          this.Lf();
        } else {
          C.k().on("usercontrollercreated", this.Lf, this);
        }
      },
      ".add-contact-manualy": function (c) {
        c.preventDefault();
        this.nH();
      },
      ".btn-spin-the-roulette": function () {
        C.k().A8();
      },
      ".email-contact-invite": function () {
        this.RK();
      },
      ".search-type": function (c) {
        var c = c.target,
            h = c.parentElement.parentElement.parentElement.children[1],
            f = c.parentElement.parentElement.parentElement.children[2];
        c.checked ? (h.classList.add("d-none"), f.classList.add("d-none")) : (h.classList.remove("d-none"), f.classList.remove("d-none"));
      }
    };
    this.da = C.k().da;
    this.tpl = this.da.ma("search-container");
    this.data = {};
    this.store = Ext.create(E.stores.wG);
    this.Ze = this.Ze || Ext.data.StoreManager.lookup("ContactsStore");
    this.callParent(arguments);
  },
  initComponent: function () {
    this.data = {};

    try {
      this.items = [this.wb = Ext.create(E.f.profile.contact.cv, {
        mode: "add",
        Fh: !0,
        i8: !0,
        multiple: !1,
        id: "search-contact-form"
      })];
    } catch (c) {}

    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.eb();
    this.un("afterrender", this.na, this);
    this.callParent(arguments);
  },
  fb: function () {
    this.on("afterrender", this.na, this);
    this.on("contactaddonsuccess", this.qh, this);
    this.on("contactaddonfailure", this.qh, this);
    this.on("contactinviteonsuccess", this.qh, this);
    this.on("contactinviteonfailure", this.qh, this);
    this.on("redirectowner", this.Wr, this);
    this.ky().on("keyup", this.Pr, this);
    this.Dfa();
    this.wb.on(this.wb.Bq, this.Yr, this);
    this.wb.on(this.wb.Aq, this.w0, this);
  },
  eb: function () {
    this.un("afterrender", this.na, this);
    this.un("contactaddonsuccess", this.qh, this);
    this.un("contactaddonfailure", this.qh, this);
    this.un("contactinviteonsuccess", this.qh, this);
    this.un("contactinviteonfailure", this.qh, this);
    this.un("redirectowner", this.Wr, this);
    this.ky().un("keyup", this.Pr, this);
    this.uva();
    this.wb.un(this.wb.Bq, this.Yr, this);
    this.wb.un(this.wb.Aq, this.w0, this);
  },
  Dfa: function () {
    Ext.Array.each(this.fK(), function (c) {
      c.on("keypress", this.Or, this);
    }, this);
  },
  uva: function () {
    Ext.Array.each(this.fK(), function (c) {
      c.un("keypress", this.Or, this);
    }, this);
  },
  w0: function () {
    this.uM(!1);
  },
  Si: function (c, h, f) {
    this.Zta(c, h, f);
  },
  sz: function () {
    this.win && this.win.Xa();
    C.k().qa.sa({
      msg: E.oa.h$
    });
  },
  o6: function () {
    this.wb.pe();
    this.fireEvent("searchcontactadded", this, this.xs());
    this.reset();
  },
  n6: function () {
    this.wb.pe();
    this.sz.call(this);
  },
  Lf: function () {
    C.k().ue.view.on("userprofileready", this.Ng, this);
    !C.k().ue && C.k().events.usercontrollercreated && C.k().un("usercontrollercreated", this.Lf, this);
  },
  Ng: function () {
    var c = C.k().ue;
    c.view.fireEvent("showaddform");
    C.k().ue.view.un("userprofileready", this.Ng, this);
    c.BJ();
  },
  na: function () {
    this.el.on("click", this.mb, this);
    this.fb();
  },
  Wr: function (c) {
    this.fireEvent("redirect", {
      Iea: c.address
    }, this);
  },
  Or: function (c) {
    c.keyCode === 13 && this.aq(0);
  },
  mb: function (c) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        this.ka[f].call(this, c);
        break;
      }
    }
  },
  Pr: function (c) {
    c = eha(c.target.value);
    C.ca.xa.op(c) ? this.k8() : this.Gy();
  },
  HN: function () {
    var c = Ext.get(this.el.query(this.IW)[0]),
        f = Ext.get(this.el.query(this.$f)[0]);
    c.toggleCls(this.Bu);
    f.toggleCls(this.Bu);
    f = E.lang.eD;

    if (!c.hasCls(this.Bu)) {
      f = E.lang.ER;
    }

    Ext.isIE ? c.query("span")[0].innerText = f : c.query("span")[0].textContent = f;
  },
  EM: function () {
    return Ext.get(this.el.query(this.IW)[0]).hasCls(this.Bu);
  },
  DN: function (c) {
    var f = Ext.get(this.el.select(".profile-contact-form").elements[0]);
    c === "hide" ? (f.addCls("d-none"), Ext.get(this.el.select(".noresult").elements[0]) && Ext.get(this.el.select(".noresult").elements[0]).removeCls("add"), this.lea = m) : f.removeCls("d-none");
  },
  IN: function (c) {
    c === "hide" ? Ext.get("search-form-panel").addCls("d-none") : Ext.get("search-form-panel").removeCls("d-none");
  },
  O8: function (c) {
    c === "hide" ? Ext.get("search-results").addCls("d-none") : Ext.get("search-results").removeCls("d-none");
  },
  nH: function () {
    this.IN("hide");
    this.DN("show");
    this.O8("hide");
    var c = eha(this.xs());
    C.ca.xa.op(c.toString()) ? this.wb.Ysa(c) : Ext.isNumeric(c) && this.wb.cta(c);
  },
  ata: function (c, h, f) {
    this.dp(c, h).dom.value = f;
  },
  dp: function (c, f) {
    return Ext.get(this.el.query(c + " " + f)[0]);
  },
  RJ: function (c, f) {
    return this.dp(c, f).dom.value;
  },
  xs: function () {
    return this.ky().dom.value;
  },
  ky: function () {
    return this.dp(this.yca, this.wca);
  },
  fK: function () {
    return [this.ky(), this.dp(this.$f, "#search-age-from"), this.dp(this.$f, "#search-age-to"), this.dp(this.$f, "#search-city")];
  },
  Qj: function () {
    var c = this.el.query(this.$f + " input[type=radio]"),
        f = "0";
    Ext.Array.each(c, function (e) {
      if (e.checked) {
        return f = e.value, !0;
      }
    });
    return f;
  },
  a5: function () {
    var c = this.el.query(this.$f + " input[type=checkbox]");
    return Array.isArray(c) && c.length && c[0].checked;
  },
  wma: function () {
    var c = {};
    c.Kea = this.RJ(this.$f, "#search-age-from");
    c.Lea = this.RJ(this.$f, "#search-age-to");
    c.gender = this.Qj(this.$f);
    c.sza = this.a5(this.$f);
    c.city = this.RJ(this.$f, "#search-city");
    return c;
  },
  $z: function (c) {
    c && (this.ata(".search-form", "#search-all", c), C.ca.xa.op(c.toString()) ? this.k8() : this.Gy());
  },
  aq: function (c) {
    var q,
        p = !1;
    q = {};
    this.ik = c;
    q.limit = this.limit;
    q.offset = c;
    c = Ext.String.trim(this.xs());

    if (this.EM()) {
      q.all = c, p = q.all != "" ? !0 : !1;
    } else {
      var o = this.wma();
      dAgeFrom = Ext.String.trim(o.Kea);
      dAgeTo = Ext.String.trim(o.Lea);
      dCity = Ext.String.trim(o.city);

      if (c != "") {
        q.all = c, p = !0;
      }

      if (dAgeFrom != "") {
        q.ageFrom = dAgeFrom, p = !0;
      }

      if (dAgeTo != "") {
        q.ageTo = dAgeTo, p = !0;
      }

      if (dCity != "") {
        q.city = dCity, p = !0;
      }

      this.a5() ? (q.properties = "company", p = !0) : q.gender = this.Qj();
    }

    if (q.all) {
      q.all.match(/^[1-9][0-9]{0,10}$/) ? q.uin = q.all : q.label = q.all, delete q.all;
    }

    q = {
      data: q
    };

    if (p === !0) {
      var f = {
        fn: this.Si,
        scope: this
      },
          u = {
        fn: this.sz,
        scope: this
      };
      E.api.hl.xma(q, {
        fn: function (g) {
          C.k().fireEvent("people:search");

          if (g.result.status === 0) {
            var h = g.result.users || [];
            this.Ri = g.result.nextOffset || 0;
            f.fn.call(f.scope, h, this.Ri, g.result.total);
          }
        },
        scope: this
      }, {
        fn: function () {
          u.fn.call(u.scope);
        },
        scope: this
      });
    }
  },
  Zta: function (c, q, p) {
    var o = [];
    Ext.get("search-results").addCls("search-results").removeCls("d-none");
    this.list && this.list.destroy();
    this.list = Ext.create(E.f.search.vG, {
      store: this.store,
      renderTo: "search-results",
      Ri: q,
      total: p,
      limit: this.limit,
      ik: this.ik
    });

    if (c.length > 0) {
      for (var f in c) {
        if (c[f].uin) {
          q = this.Ze.Ba(c[f].uin);
          p = !1;

          if (q && q.get("extdata") && q.get("extdata").gids) {
            var u = q.get("extdata").gids;
            Ext.Array.indexOf(u, 1) !== -1 && (p = !0);
          }

          u = "";
          u = q && q.rm() ? "ignored" : c[f].status;
          o.push({
            uin: c[f].uin,
            exist: this.Ze.Ba(c[f].uin) ? "true" : "false",
            label: c[f].label._content,
            ignored: p,
            age: c[f].age._content,
            country: c[f].country._content,
            city: c[f].city._content,
            postcode: c[f].postcode._content,
            street: c[f].street._content,
            wwwUrl: c[f].wwwUrl._content,
            phone: c[f].phone._content,
            isCompany: c[f].properties._content.company,
            companyName: c[f].companyName._content,
            companyRegistryNumber: c[f].companyRegistryNumber._content,
            companyProfile: c[f].companyProfile._content,
            companyIndustry: c[f].companyIndustry._content,
            gender: c[f].gender._content,
            about: c[f].about._content,
            email: c[f].email._content,
            statusDescription: c[f].statusDescription._content,
            status: u
          });
        }
      }
    }

    o.length > 0 ? this.store.loadData(o, !1) : this.store.loadData([], !1);
  },
  rma: function () {
    var c = 0;
    this.ik > 0 && (c = this.ik - this.limit, this.aq(c));
  },
  jma: function () {
    this.Ri > 0 && this.aq(this.Ri);
  },
  Kga: function () {
    var c = Ext.get("search-results");
    c.removeCls("search-results");
    c.dom.innerHTML = "";
  },
  uM: function (c) {
    this.DN("hide");
    this.IN("show");
    this.O8("show");
    this.wb.reset();
    c && (this.Kga(), this.EM() || this.HN(), this.j_());
  },
  k8: function () {
    Ext.get(this.el.query(".search-contact-next")[0]).addCls("d-none");
    Ext.get(this.el.query(".email-contact-invite")[0]).removeCls("d-none");
  },
  Gy: function () {
    Ext.get(this.el.query(".search-contact-next")[0]).removeCls("d-none");
    Ext.get(this.el.query(".email-contact-invite")[0]).addCls("d-none");
  },
  j_: function () {
    Ext.Array.each(this.fK(), function (c) {
      c.dom.value = "";
    });
    this.Jra();
  },
  Jra: function () {
    var c = this.el.query(this.$f + " input[type=radio]");
    Ext.Array.each(c, function (e) {
      e.checked = e.value === "2" ? !0 : !1;
    });
    return "0";
  },
  hp: function () {
    C.Ca(parseInt(this.record.get("uin"), 10) ? "profile/" + this.record.get("uin") : "contact/" + this.record.get("cid"));
  },
  yi: function () {
    this.wb.pe();
    this.win && this.win.un("deactivate", this.yi, this);
  },
  Yr: function (c) {
    var w = c.name[0],
        q = c.mobilePhone[0],
        o = c.email[0],
        f = c.siteUrl[0],
        y = {
      fn: this.o6,
      scope: this
    },
        u = {
      fn: this.n6,
      scope: this
    },
        c = Ext.create(E.models.Ya, {
      uin: {
        value: c.ggnumber[0]
      },
      ShowName: {
        value: w
      },
      extdata: {
        MobilePhone: [{
          value: q
        }],
        Email: [{
          value: o
        }],
        WwwAddress: {
          value: f
        }
      }
    }),
        w = {
      GGNumber: "",
      name: fht(w),
      Email: o,
      MobilePhone: q,
      WwwAddress: f,
      type: "contact"
    };
    this.sja(c, w, y, u);
  },
  sja: function (c, n, l, f) {
    parseInt(c.get("uin")) ? this.ffa(m, c, l, f) : this.gfa(n, l, f);
  },
  ffa: function (c, n, l, f) {
    this.Ze = this.Ze || Ext.data.StoreManager.lookup("ContactsStore");
    this.Ze.Ba(n.get("uin")) ? (C.k().qa.sa({
      msg: E.oa.rQ
    }), this.wb.pe()) : C.k().fa.get("uin") == n.get("uin") ? this.js(n) : (this.fireEvent("redirectowner", {
      address: "profile/" + n.get("uin")
    }), (this.win = Ext.create(E.f.windows.xq, {
      Sb: !0,
      record: n,
      l5: c,
      buttons: [{
        selector: ".add-action",
        fn: function () {
          this.win.zx(this, c, n, this.win.el.select("textarea.message").elements[0].value, l, f);
          this.wb.pe();
        },
        scope: this,
        Ib: !1
      }, {
        selector: ".invite-action",
        fn: function () {
          this.win.Ex(this, c, n, this.win.el.select("textarea.message").elements[0].value, l, f, "uin");
          this.wb.pe();
        },
        scope: this,
        Ib: !1
      }]
    })) && this.win.on("deactivate", this.yi, this));
  },
  gfa: function (c, h, f) {
    this.Ze.lZ(c, {
      Ea: function () {
        C.k().qa.sa({
          msg: E.oa.En,
          timeout: 2000
        });
        h.fn.call(h.scope);
      },
      ya: function () {
        f.fn.call(f.scope);
      },
      scope: this
    });
  },
  js: function (c) {
    var n = {
      fn: this.o6,
      scope: this
    },
        l = {
      fn: this.n6,
      scope: this
    },
        f = {
      uin: c.data.uin,
      ShowName: fht(c.data.name),
      Email: c.data.Email ? c.data.Email : "",
      MobilePhone: c.data.MobilePhone ? c.data.MobilePhone : "",
      WwwAddress: c.data.WwwAddress ? c.data.WwwAddress : "",
      type: c.data.type == 4 ? "conference" : "contact"
    };
    this.Ze.jea(f, {
      Ea: function () {
        C.k().qa.sa({
          msg: E.oa.En,
          timeout: 2000
        });
        C.k().ta.le(f.uin);
        n.fn.call(n.scope);
        this.qh();
        this.wb.pe();
      },
      ya: function () {
        C.k().qa.sa({
          msg: E.oa.uq,
          mc: {
            text: E.lang.Pc,
            fn: function () {
              this.js(c);
              this.wb.pe();
            },
            scope: this
          }
        });
        l.fn.call(l.scope);
        this.qh();
      },
      scope: this
    });
  },
  qh: function () {
    try {
      C.Ca(""), this.win && this.win.Xa();
    } catch (c) {}
  },
  reset: function () {
    this.Gy();
    this.list && this.list.destroy();
    this.EM() || this.HN();
    this.wb.reset();
    this.j_();
    this.DN("hide");
    this.IN("show");
  },
  Gea: function (c) {
    this.$z(c);
    this.JN("hide");
    this.nH();
  },
  JN: function (c) {
    c === "hide" ? Ext.get("search-unknown-user").addCls("d-none") : Ext.get("search-unknown-user").removeCls("d-none");
  },
  RK: function () {
    this.Gy();
    var c = eha(this.xs());
    E.api.Ob.Ym({
      type: "contacts",
      id: C.k().fa.data.uin,
      recipient: "user,email:" + c
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.vq,
          timeout: 1500
        });
        this.wb.pe();
      },
      scope: this
    }, {
      fn: function (e) {
        this.wb.pe();
        C.k().qa.sa(E.api.Ob.tf(e) || {
          msg: E.oa.Nq
        });
      },
      scope: this
    });
  }
});