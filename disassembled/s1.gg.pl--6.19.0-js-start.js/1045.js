Ext.define(E.f.layout.Ga.$B, {
  extend: C.f.Jb,
  cls: "chat-manager",
  i5: {
    chat: E.f.layout.Ga.jj,
    conference: E.f.layout.Ga.Xu
  },
  cL: m,
  mixins: {
    CDa: C.core.mixins.hw,
    ea: C.core.mixins.kb,
    ka: C.core.mixins.Td
  },
  ira: ["sendmessage", "leavechat", "changeavatar", "changestatus", "itemtyping"],
  activeItem: m,
  cI: m,
  Hg: m,
  la: m,
  Ha: m,
  RBa: m,
  mga: {
    emoticons: function (c, f) {
      this.qka(c, f);
    },
    giphy: function (c, f) {
      this.Wma(c, f);
    },
    settings: function (c) {
      this.Ata(c);
    }
  },
  H5: {
    emoticons: {
      nI: []
    },
    settings: {
      nI: []
    },
    giphy: {
      nI: []
    }
  },
  ka: {
    ".btn-spin-the-roulette": function () {
      C.k().A8();
    }
  },
  vL: 0,
  kc: m,
  icons: {
    usmiech: ":)",
    ostr: ":&gt;",
    kwadr: ":]",
    smutny2: ":(",
    yyyy: ":|",
    uoeee: "&lt;uoee&gt;",
    lol: "&lt;lol&gt;",
    rotfl: "&lt;rotfl&gt;",
    oczko: '";)"',
    jezyk: ":P",
    jezyk_oko: ";P",
    zacieszacz: "&lt;radocha&gt;",
    luzik: "&lt;luzik&gt;",
    figielek: "&lt;figielek&gt;",
    milczek: "&lt;milczek&gt;",
    stres: "&lt;stres&gt;",
    nerwus: "&lt;nerwus&gt;",
    zly: ":[",
    manga_usmiech: "^_^",
    zalamka: "&lt;za\u0142amka&gt;",
    wnerw: "&lt;wnerw&gt;",
    glupek: "&lt;g\u0142upek&gt;",
    mysli: "&lt;my\u015bli&gt;",
    okok: "&lt;okok&gt;",
    szok: "&lt;szok&gt;",
    wysmiewacz: "&lt;wy\u015bmiewacz&gt;",
    dokuczacz: "&lt;dokuczacz&gt;",
    oklasky: "&lt;brawo&gt;",
    hura: "&lt;hura&gt;",
    foch: "&lt;foch&gt;",
    cwaniak: "&lt;cwaniak&gt;",
    klotnia: "&lt;k\u0142\u00f3tnia&gt;",
    spadaj: "&lt;spadaj&gt;",
    dobani: "&lt;blee&gt;",
    paluszkiem: "&lt;nono&gt;",
    beczy: "&lt;beczy&gt;",
    kwiatek: "&lt;kwiatek&gt;",
    zawstydzony: "&lt;skromny&gt;",
    mniam: "&lt;mniam&gt;",
    hejka: "&lt;hejka&gt;",
    prosi: "&lt;prosi&gt;",
    tak: "&lt;tak&gt;",
    nie: "&lt;nie&gt;",
    bezradny: "&lt;bezradny&gt;",
    zmeczony: "&lt;zm\u0119czony&gt;",
    pocieszacz: "&lt;pocieszacz&gt;",
    buziak: "&lt;buziak&gt;",
    buzki: "&lt;bu\u017aki&gt;",
    plask: "&lt;plask&gt;",
    boisie: "&lt;boisi\u0119&gt;",
    zlezkawoku: "&lt;z\u0142ezk\u0105&gt;",
    papa: "&lt;papa&gt;",
    papa2: "&lt;papa2&gt;",
    krzyk: "&lt;krzyk&gt;",
    plotki: "&lt;plotki&gt;",
    muza: "&lt;muza&gt;",
    pies: "&lt;pies&gt;",
    kotek: "&lt;kot&gt;",
    zakupy: "&lt;zakupy&gt;",
    aparat: "&lt;fotka&gt;",
    w8: "&lt;w8&gt;",
    wesoly: ":))",
    smutny3: ":-(",
    mruga: ";))",
    zly2: "&lt;z\u0142y&gt;",
    z_jezorem: "&lt;z_j\u0119zorem&gt;",
    zniesmaczony: "&lt;zniesmaczony&gt;",
    niee: "nieee",
    tiaaa: "tiaaa",
    zdziwko: "&lt;zdziwiony&gt;",
    beksa: "&lt;beksa&gt;",
    haha: "&lt;haha&gt;",
    rotfl3: "&lt;rotfl3&gt;",
    wstydnis: "&lt;zawstydzony&gt;",
    "8p": "&lt;pokaza\u0142_j\u0119zyk&gt;",
    gafa: "&lt;gafa&gt;",
    zab: "&lt;z\u0105b&gt;",
    ziew: "&lt;ziewa2&gt;",
    prysznic: "&lt;prysznic&gt;",
    wanna: "&lt;wanna&gt;",
    wc: "&lt;wc&gt;",
    krecka_dostal: "&lt;urwanie g\u0142owy&gt;",
    hmmm: "&lt;my\u015bli2&gt;",
    puknijsie: "&lt;niedowiarek&gt;",
    olaboga: "&lt;olaboga&gt;",
    tort: "&lt;urodziny&gt;",
    bukiet: "&lt;bukiet&gt;",
    szampan: "&lt;winko&gt;",
    gool: "&lt;gool&gt;",
    cmok2: "&lt;cmok2&gt;",
    onajego: "&lt;onajego&gt;",
    buja_w_oblokach: "&lt;buja_w_ob\u0142okach&gt;",
    zakochany: "&lt;zakochany&gt;",
    pada: "&lt;leje&gt;",
    okularnik: "&lt;okularnik&gt;",
    snieg: "&lt;\u015bnieg&gt;",
    spioch: "&lt;\u015bpioch&gt;",
    je_pizze: "&lt;je_pizz\u0119&gt;",
    piwko2: "&lt;piwosz&gt;",
    drink: "&lt;drinkuje&gt;",
    obiad: "&lt;obiad&gt;",
    telefon2: "&lt;telefon2&gt;",
    gazeta: "&lt;czyta_gazet\u0119&gt;",
    chatownik: "&lt;chatownik&gt;",
    gra: "&lt;gra&gt;",
    bije: "&lt;bije&gt;",
    dresiarz: "&lt;dresik&gt;",
    dostal: "&lt;bij\u0105&gt;",
    palacz: "&lt;palacz&gt;",
    nonono: "&lt;nonono&gt;",
    brawa: "&lt;oklaski&gt;",
    heej: "&lt;heej&gt;",
    fuck: "&lt;spad\u00f3wa&gt;",
    dobani2: "&lt;do_bani&gt;",
    ok: "&lt;ok&gt;",
    lapka: "&lt;\u0142apka&gt;",
    serducho: "&lt;serducho&gt;",
    zegar: "&lt;zegar&gt;",
    jablko: "&lt;jab\u0142ko&gt;",
    kawa: "&lt;kawa&gt;",
    kwiatuszek: "&lt;kwiatuszek&gt;",
    prezent: "&lt;prezent&gt;",
    serce: "&lt;serce&gt;",
    milosc: "&lt;mi\u0142o\u015b\u0107&gt;",
    usta: "&lt;usta&gt;",
    usmiech: "&lt;weso\u0142y&gt;",
    smutny: "&lt;smutny&gt;",
    oczko: "&lt;mruga&gt;",
    zdenerwowany: "&lt;zdenerwowany&gt;",
    jezyk1: ":-P",
    jezyk2: ";-P",
    no: "&lt;no&gt;",
    yes: "&lt;yes&gt;",
    spox: "&lt;spox&gt;",
    wykrzyknik: "!!",
    pytajnik: "??",
    placze: ";-(",
    lol2: "&lt;lol2&gt;",
    zeby: ":-D",
    rotfl2: "&lt;rotfl2&gt;",
    wow: ":-O",
    wsciekly: "&lt;w\u015bciek\u0142y&gt;",
    zawstydzony: "&lt;wstydni\u015b&gt;",
    co_jest: "&lt;co_jest&gt;",
    chytry: ":-&gt;",
    spie: "&lt;ziewa&gt;",
    ysz: ":-|",
    krzywy: ":-]",
    kwasny: ":-/",
    roza: "&lt;r\u00f3\u017ca&gt;",
    piwo: "&lt;piwo&gt;",
    nie_powiem: "&lt;nie_powiem&gt;",
    soczek: "&lt;soczek&gt;",
    cmok: ":-*",
    calus: "&lt;ca\u0142us&gt;",
    oczy: "&lt;marzyciel&gt;",
    sciana: "&lt;\u015bciana&gt;",
    serduszka: "&lt;serduszka&gt;",
    przytul: "&lt;przytul&gt;",
    uscisk: "&lt;u\u015bcisk&gt;",
    glaszcze: "&lt;g\u0142aszcze&gt;",
    cfaniak: "&lt;cwaniak2&gt;",
    jem: "&lt;jem&gt;",
    hahaha: "&lt;hahaha&gt;",
    telefon: "&lt;telefon&gt;",
    halas: "&lt;ha\u0142as&gt;",
    pisze: "&lt;pisze&gt;",
    boks: "&lt;boks&gt;",
    faja: "&lt;faja&gt;",
    papapa: "&lt;papapa&gt;",
    "3m_sie": "&lt;3m_si\u0119&gt;",
    czas: "&lt;czas&gt;",
    cisza: "&lt;cisza&gt;",
    co: "&lt;co&gt;",
    czarodziej: "&lt;czarodziej&gt;",
    czytaj: "&lt;czytaj&gt;",
    diabelek: "]:-&gt;",
    glupek2: "&lt;idiota&gt;",
    jestem_z_glupkiem: "&lt;jestem_z_g\u0142upkiem&gt;",
    jupi: "&lt;jupi&gt;",
    list: "&lt;list&gt;",
    nauka: "&lt;nauka&gt;",
    paker: "&lt;paker&gt;",
    aniolek: "&lt;anio\u0142ek&gt;",
    peace: "&lt;peace&gt;",
    pomocy: "&lt;pomocy&gt;",
    boje_sie: "&lt;boj\u0119_si\u0119&gt;",
    serduszka2: "&lt;serduszka2&gt;",
    slonko: "&lt;s\u0142onko&gt;",
    spoko: "&lt;spoko&gt;",
    stop: "&lt;stop&gt;",
    tancze: "&lt;ta\u0144cz\u0119&gt;",
    tuptup: "&lt;tuptup&gt;",
    uczen: "&lt;ucze\u0144&gt;",
    usmiech2: ":-)",
    oczko2: ";-)"
  },
  Am: m,
  eL: m,
  constructor: function (c) {
    c = c || {};
    this.items = [];
    this.Am = [];
    this.eL = !1;
    this.da = c.da || C.k().da;
    this.html = this.da.Wa("chat-manager-empty");
    Ext.getBody().insertHtml("beforeEnd", this.da.Wa("chat-manager-menu"));
    this.callParent([c]);
    this.mixins.ka.constructor.call(this, {
      preventDefault: !1
    });
    this.name = this.$className;
    this.cL = {
      changestate: this.II,
      chatmenuclicked: this.lha,
      closechatmenu: this.p_,
      leavechat: this.JI,
      createconference: this.Bha,
      createvideoconference: this.Cha
    };
    this.Hg = {};
    this.ia = C.k().ia;
  },
  G3: function () {
    return this.el.child(".sr-chat-manager-empty");
  },
  HA: function () {
    this.el && (this.items.length > 0 ? this.G3().addCls("d-none") : this.G3().removeCls("d-none"));
  },
  initComponent: function () {
    this.callParent();
    this.fb();
    this.la = Ext.getStore("ContactsStore");
    this.Ha = Ext.getStore("UsersStore");
    Ext.fly(window).on("resize", this.rL, this);
  },
  fb: function () {
    this.on("afterrender", this.na, this);
    this.on("add", this.K_, this);
    this.on("sendmessage", this.E1, this);
    this.on("remove", this.R_, this);
    C.k().ia.on("preferenceschanged", this.OM, this);
  },
  eb: function () {
    this.un("add", this.K_, this);
    this.un("sendmessage", this.E1, this);
    this.un("afterrender", this.na, this);
    this.un("remove", this.R_, this);
    C.k().ia.un("preferenceschanged", this.OM, this);
    Ext.fly(window).un("resize", this.rL);
  },
  R_: function () {
    this.fireEvent("chatitemremoved", this);
    this.HA();
  },
  K_: function () {
    this.fireEvent("chatitemadded", this);
    this.HA();
  },
  E1: function () {
    this.fireEvent("hidepopup");
  },
  rL: function (c) {
    if ((c = c || this.activeItem) && c.el) {
      c = c.el.select(".footer").first().getOffsetsTo(document.body), this.cI.setStyle({
        left: c[0] + "px",
        top: c[1] - 22 + "px"
      });
    }
  },
  destroy: function () {
    Ext.isIE ? window.detachEvent("onmessage", this.Ix.bind(this)) : window.removeEventListener("message", this.Ix.bind(this));
    this.eb();
    this.callParent();
  },
  Yl: function (c) {
    this.HA();
    return C.k().Ja.Ld(c.Aa);
  },
  qo: function (c) {
    Ext.isArray(c) || (c = Array.prototype.slice.call(arguments, 0));

    for (var n = 0, l = c.length, f; n < l; n++) {
      f = this.kja(c[n]), this.addRef(f), Ext.isArray(this.items) ? this.items.push(f) : this.add(f), this.sfa(f), this.relayEvents(f, this.ira);
    }
  },
  GDa: t(),
  getItem: function (c) {
    return (c = this.getRef(C.k().Ja.Ld(c))) ? c.item : k;
  },
  sfa: function (c) {
    Ext.iterate(this.cL, function (f, b) {
      c.on(f, b, this);
    }, this);
  },
  ova: function (c) {
    Ext.iterate(this.cL, function (f, b) {
      c.un(f, b, this);
    }, this);
  },
  kja: function (c) {
    c = Ext.create(this.i5[c.type], {
      info: c
    });
    C.k().qea(c.Aa);
    c.on("destroy", this.p0, this);
    c.Sa.un("add", this.H_, this);
    return c;
  },
  II: function (c, h) {
    if (h) {
      this.activeItem = c, C.k().af.aN("file-manager-frame"), C.k().Lc.setOwner(c), c.info.type == "conference" ? C.k().af.Ak("conferenceID/" + c.Aa) : C.k().af.Ak(c.Aa);
    } else {
      for (var f in this.Hg) {
        this.Hg.hasOwnProperty(f) && this.Hg[f].addCls("d-none");
      }

      this.n_();
    }

    C.k().fireEvent("activechatitemset", c, h);
  },
  H_: function (c) {
    this.getItem(c.Aa) || this.qo({
      type: c.type,
      Aa: c.Aa,
      Sa: c
    });
  },
  p0: function (c) {
    c.Sa.on("add", this.H_, this);
    this.ova(c);
    this.n_();
    this.n7(c);
    C.k().Lc.FH(c) && (C.k().af.Ak(m), C.k().Lc.setOwner(m));
    this.Xpa();
    C.k().Mz(c.Aa);
  },
  Xpa: function () {
    this.items.each(function (c) {
      c.Xva();
    }, this);
  },
  Fya: function (c, f) {
    this.getItem(c).Rw(f);
  },
  HDa: function (c, f) {
    this.getItem(c).zra(f);
  },
  getActiveItem: x("activeItem"),
  Bja: function (c) {
    if (typeof c === "undefined" || c === this.activeItem) {
      this.activeItem = m;
    }
  },
  zJ: function (c) {
    var n, l;

    try {
      n = this.items.items;
    } catch (f) {
      n = [this.getActiveItem()];
    }

    Ext.Array.each(n, function (b) {
      if (b && c == b.Aa) {
        return l = b, !1;
      }
    }, this);
    return l || m;
  },
  lha: function (c, n, l, f) {
    this.D6(c, n, l, f);
  },
  QI: function (c) {
    var f = this.zJ(c.cM);
    f !== m && f.Mf && f.Bia(c);
  },
  OI: function (c) {
    var f = this.zJ(c.uin);
    f !== m && f.yia(c);
  },
  Rl: function (c) {
    this.getActiveItem() && c == this.getActiveItem().Aa && this.getActiveItem().Rl(c);
  },
  Po: function (c, h, f) {
    Ext.Array.each(this.items.items, function (b) {
      b.Po(c, h, f);
    }, this);
  },
  Kra: function (c) {
    c = this.zJ(c);
    c !== m && c.Mf && (c.v4(), c.Aka());
  },
  JZ: function (c) {
    for (var c = this.H5[c].nI, h = 0, f = c.length; h < f; h++) {
      this.q_(c[h]);
    }
  },
  p7: function (c, q) {
    var p = [],
        o = [],
        f = this.Ds("settings"),
        u = this.Ds("emoticons", !1);
    giphy = this.Ds("giphy", !1);
    q.length && Ext.each(q, function (e) {
      p.push(e);
      o.push(1);
    }, this);
    p.push(f, u, giphy);
    o.push(1, 1, 1, 0);
    this.ea = [[C.core.ea.sf, {
      fe: p,
      Ge: function (h) {
        h.hasCls("d-none") || (h.hasCls("emoticons-menu") && this.dsa(), h.hasCls("giphy-menu") && this.gp.Fga());
        h.addCls("d-none");
        var h = Ext.get("chat-manager-menu"),
            n = h.select(".chat-manager-item").elements.length,
            l = h.select(".chat-manager-item.d-none").elements.length;
        n === l && h.addCls("d-none");
      }.bind(this),
      ug: o
    }]];
    Ext.isIE ? window.attachEvent("onmessage", this.Ix.bind(this)) : window.addEventListener("message", this.Ix.bind(this), !1);
    this.mixins.ea.constructor.call(this);
    this.vL = 1;
  },
  Ix: function (c) {
    c && c.data == 8787 && (document.body.click ? document.body.click() : (c = document.createEvent("MouseEvents"), c.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, m), document.body.dispatchEvent(c)));
  },
  D6: function (c, q, p, o) {
    this.vL || this.p7(c);

    switch (q) {
      case "emoticons":
        this.Ds("emoticons").select(".emoticons-list").first().dom.innerHTML || this.createMenu("emoticons", !0);
        break;

      case "settings":
        this.createMenu("settings", !0);
        break;

      case "giphy":
        this.createMenu("giphy", !0);
    }

    var p = C.k().Ja.hd().getActiveItem(),
        f = Ext.get("chat-manager-menu"),
        u;

    if (["settings", "emoticons", "giphy"].indexOf(q) !== -1) {
      switch (q) {
        case "settings":
          u = f.child(".settings-menu");
          this.K4(p.Aa);
          this.J4(p.Aa);
          break;

        case "emoticons":
          u = f.child(".emoticons-menu");
          break;

        case "giphy":
          u = f.child(".giphy-menu");
      }

      u.removeCls("d-none");
      this.fireEvent("show", {
        event: o.event,
        target: o.event.target,
        el: u
      });
    }

    this.rL(c);
    f.removeCls("d-none");

    if (q === "emoticons") {
      u.dom.scrollTop = 0, this.o7(u);
    }
  },
  p_: function (c) {
    this.JZ(c);
    this.q_(c);
  },
  q_: function (c) {
    this.Ds(c).addCls("d-none");
    Ext.get("chat-manager-menu").addCls("d-none");
  },
  n_: function () {
    for (var c in this.H5) {
      this.JZ(c);
    }
  },
  Ds: function (c, f) {
    if (c == "settings") {
      return this.createMenu(c, f), this.Hg[c];
    }

    if (c === "giphy") {
      return this.createMenu(c, f), this.Hg[c];
    }

    if (this.Hg[c]) {
      return this.Hg[c];
    }

    this.createMenu(c, f);
    return this.Hg[c];
  },
  createMenu: function (c, f) {
    this.Hg[c] = this.cI.child("." + c + "-menu");
    this.mga[c].call(this, this.Hg[c], f);
  },
  na: function () {
    this.OM();
    this.HA();
    this.cI = Ext.get("chat-manager-menu");
    this.el.on("mouseenter", this.rh, this);
  },
  rh: function () {
    this.activeItem && (C.k().af.aN("file-manager-frame"), C.k().Lc.setOwner(this.activeItem), this.activeItem.info.type == "conference" ? C.k().af.Ak("conferenceID/" + this.activeItem.Aa) : C.k().af.Ak(this.activeItem.Aa));
  },
  JI: function (c) {
    c.destroy();
  },
  Wma: function (c, f) {
    if (f) {
      if (this.gp instanceof E.Kd.Av) {
        this.gp.un("gifselected", this.x0, this), this.gp.destroy(), this.gp = m;
      }

      this.gp = Ext.create(E.Kd.Av, {
        renderTo: c
      });
      this.gp.on("gifselected", this.x0, this);
    }

    return c;
  },
  x0: function (c) {
    this.getActiveItem().Dsa(c);
  },
  qka: function (c, w) {
    if (this.kc === m) {
      this.kc = Ext.create(E.stores.Qc, {
        id: C.k().fa.get("uin")
      });
    }

    var q = C.ca.Da.yh("/images/emoticons/"),
        o = [],
        f,
        y = "",
        u;

    for (u in this.icons) {
      f = this.icons[u] === m ? "<" + u + ">" : this.icons[u].replace("&gt;", ">").replace("&lt;", "<"), y = q + u + ".gif", o.push({
        src: y,
        title: f,
        name: u,
        id: u
      });
    }

    w || (o = []);
    q = this.da.Wa("chat-manager-emoticons-item", o);
    f = c.select(".emoticons-list").first();
    f.update(q);
    f.select(".emoticon-img").each(function (h, n, l) {
      h.dom.viewIndex = l;
    }, this);

    if (w) {
      f.on("click", function (n, h) {
        var b = Ext.get(h);
        b.hasCls("emoticon-img") && (this.getActiveItem().Vz(o[b.dom.viewIndex].id, o[b.dom.viewIndex].title), this.o7(c, o[b.dom.viewIndex].title));
      }, this);
    }

    q = m;
    return c;
  },
  Lqa: function (c) {
    c = this.E3(c);
    c !== m && (this.Am.unshift({
      src: C.ca.Da.yh("/images/emoticons/") + c.Animation,
      title: c.Code,
      name: c.Code,
      id: c.Code
    }), this.Am.splice(10));
  },
  o7: function (c, p) {
    var o = this.kc.get(E.stores.Qc.Hv, []),
        n = c.select(".last-emoticons-list").first();
    typeof p !== "undefined" && o.indexOf(p) === -1 && (o.unshift(p), o.splice(10));
    o.length > 0 ? n.removeCls("d-none") : n.addCls("d-none");
    this.Am = [];
    Ext.Array.each(o, function (e) {
      this.Lqa(e);
    }, this, !0);
    var f = this.da.Wa("chat-manager-emoticons-item", this.Am);
    n.innerHTML = "";
    n.update(f);

    if (!this.eL) {
      n.on("click", function (l, w) {
        var u = Ext.get(w);

        if (u.hasCls("emoticon-img")) {
          var q = this.E3(this.Am[u.dom.viewIndex].id).Animation.replace(".gif", "");
          this.getActiveItem().Vz(q, this.Am[u.dom.viewIndex].title);
        }
      }, this), this.eL = !0;
    }

    n.select(".emoticon-img").each(function (h, q, l) {
      h.dom.viewIndex = l;
    }, this);
    this.kc.set(E.stores.Qc.Hv, o);
    f = m;
  },
  dsa: function () {
    lastEmoticons = this.kc.get(E.stores.Qc.Hv, []);
    E.api.Pb.Zz(this.lja(lastEmoticons));
  },
  lja: function (c) {
    return {
      "slots[emoticons]": Ext.JSON.encode({
        recent_emoticons: c
      })
    };
  },
  K4: function (c) {
    var h = C.k().Ja,
        c = "" + c,
        f = Ext.get("chat-manager-menu");
    (f = Ext.get(f.select(".settings-menu .settings-mute").elements[0])) && (h.Rj(c) ? f.replaceCls("sr-chat-setting-on-btn", "sr-chat-setting-off-btn") : f.replaceCls("sr-chat-setting-off-btn", "sr-chat-setting-on-btn"));
  },
  J4: function (c) {
    var c = parseInt(c),
        f = Ext.get("chat-manager-menu");

    if (f = Ext.get(f.select(".settings-menu .settings-archive").elements[0])) {
      c = this.Ha.xb(c).Hb(), C.k().ia.vo.config.enabled == !1 || c.get("extdata") && c.get("extdata").NoArchive ? f.replaceCls("sr-chat-setting-on-btn", "sr-chat-setting-off-btn") : f.replaceCls("sr-chat-setting-off-btn", "sr-chat-setting-on-btn");
    }
  },
  Ata: function (c) {
    if (m === this.getActiveItem()) {
      return m;
    }

    var h = this.da.Wa(this.getActiveItem().cZ()),
        f = m;
    c.update(h);
    this.K4(this.getActiveItem().Aa);
    this.J4(this.getActiveItem().Aa);

    if (!c.hasCls("already-rendered")) {
      return c.on("click", function (e) {
        if (e.getTarget(".settings-btn") !== m && (f = Ext.get(e.getTarget(".settings-btn")))) {
          if (e.getTarget(".settings-archive") !== m && C.k().ia.vo.config.enabled == !1) {
            C.k().qa.sa({
              msg: E.oa.vu,
              timeout: 2000
            });
            return;
          }

          f.hasCls("sr-chat-setting-on-btn") ? f.replaceCls("sr-chat-setting-on-btn", "sr-chat-setting-off-btn") : f.replaceCls("sr-chat-setting-off-btn", "sr-chat-setting-on-btn");
        }

        e.getTarget(".settings-close-btn") !== m ? this.p_("settings") : e.getTarget(".settings-archive") !== m ? (e.preventDefault(), e = f.hasCls("sr-chat-setting-on-btn") ? !0 : !1, this.fireEvent("chatitemnoarchive", this, this.getActiveItem().Aa, e), this.getActiveItem().KA()) : e.getTarget(".settings-mute") !== m ? (e.preventDefault(), e = f.hasCls("sr-chat-setting-on-btn") ? !0 : !1, this.fireEvent("chatitemnotify", this, this.getActiveItem().Aa, e), this.getActiveItem().KA()) : e.getTarget(".settings-clear") !== m && (this.getActiveItem().clearAll(), this.fireEvent("hidepopup", this));
      }, this), c.addCls("already-rendered"), c;
    }
  },
  Bha: function (c) {
    C.k().af.Ak(m);
    C.k().Lc.setOwner(m);
    c.pb.get("type") == 4 ? C.k().Ti({
      conferenceId: c.pb.get("uin")
    }) : C.k().Ti({
      Db: [c.pb.get("uin")]
    });
  },
  Cha: function (c) {
    C.k().af.Ak(m);
    C.k().Lc.setOwner(m);
    var f = c.pb.get("uin");
    c.info.type === "conference" ? C.k().ML({
      Db: [f],
      members: c.members,
      itemId: c.id,
      type: c.info.type,
      ix: "outgoing"
    }) : this.uga(f) ? C.k().ML({
      Db: [f],
      members: c.members,
      itemId: c.id,
      type: c.info.type,
      ix: "outgoing"
    }) : alert(E.lang.zO);
  },
  uga: function (c) {
    return this.la.Ba(c) === m ? !1 : this.la.Ba(c).get("protoInfo").friend == 1 ? !0 : !1;
  },
  OM: function () {
    var c = C.k().ia.ob("chat").textFormatting,
        f = this.getEl().getAttribute("class");

    if (f) {
      f = f.replace(/size\-[1-9]/, ""), f = Ext.String.trim(f), this.getEl().dom.className = f + " size-" + c.size;
    }
  },
  E3: function (c) {
    for (var q = this.S2.length, p = m, o = 0; o < q; o++) {
      var f = this.S2[o];

      if (Ext.isArray(f.Code)) {
        for (var u = 0; u < f.Code.length; u++) {
          f.Code[u] === c && (p = {
            Code: f.Code[u],
            Animation: f.Animation
          });
        }
      } else {
        f.Code === c && (p = f);
      }

      if (p) {
        break;
      }
    }

    return p;
  },
  S2: [{
    Code: ":)",
    Animation: "usmiech.gif"
  }, {
    Code: ":>",
    Animation: "ostr.gif"
  }, {
    Code: ":]",
    Animation: "kwadr.gif"
  }, {
    Code: ":(",
    Animation: "smutny2.gif"
  }, {
    Code: ":|",
    Animation: "yyyy.gif"
  }, {
    Code: "<uoee>",
    Animation: "uoeee.gif"
  }, {
    Code: "<lol>",
    Animation: "lol.gif"
  }, {
    Code: "<rotfl>",
    Animation: "rotfl.gif"
  }, {
    Code: ";)",
    Animation: "oczko.gif"
  }, {
    Code: ":P",
    Animation: "jezyk.gif"
  }, {
    Code: ";P",
    Animation: "jezyk_oko.gif"
  }, {
    Code: "<radocha>",
    Animation: "zacieszacz.gif"
  }, {
    Code: "<luzik>",
    Animation: "luzik.gif"
  }, {
    Code: "<figielek>",
    Animation: "figielek.gif"
  }, {
    Code: "<milczek>",
    Animation: "milczek.gif"
  }, {
    Code: "<stres>",
    Animation: "stres.gif"
  }, {
    Code: "<nerwus>",
    Animation: "nerwus.gif"
  }, {
    Code: ":[",
    Animation: "zly.gif"
  }, {
    Code: ["^^", "^_^"],
    Animation: "manga_usmiech.gif"
  }, {
    Code: "<za\u0142amka>",
    Animation: "zalamka.gif"
  }, {
    Code: "<wnerw>",
    Animation: "wnerw.gif"
  }, {
    Code: "<g\u0142upek>",
    Animation: "glupek.gif"
  }, {
    Code: "<my\u015bli>",
    Animation: "mysli.gif"
  }, {
    Code: "<okok>",
    Animation: "okok.gif"
  }, {
    Code: "<szok>",
    Animation: "szok.gif"
  }, {
    Code: "<wy\u015bmiewacz>",
    Animation: "wysmiewacz.gif"
  }, {
    Code: "<dokuczacz>",
    Animation: "dokuczacz.gif"
  }, {
    Code: "<brawo>",
    Animation: "oklasky.gif"
  }, {
    Code: "<hura>",
    Animation: "hura.gif"
  }, {
    Code: "<foch>",
    Animation: "foch.gif"
  }, {
    Code: "<cwaniak>",
    Animation: "cwaniak.gif"
  }, {
    Code: "<k\u0142\u00f3tnia>",
    Animation: "klotnia.gif"
  }, {
    Code: "<spadaj>",
    Animation: "spadaj.gif"
  }, {
    Code: "<blee>",
    Animation: "dobani.gif"
  }, {
    Code: "<nono>",
    Animation: "paluszkiem.gif"
  }, {
    Code: "<beczy>",
    Animation: "beczy.gif"
  }, {
    Code: "<kwiatek>",
    Animation: "kwiatek.gif"
  }, {
    Code: "<skromny>",
    Animation: "zawstydzony.gif"
  }, {
    Code: "<mniam>",
    Animation: "mniam.gif"
  }, {
    Code: "<hejka>",
    Animation: "hejka.gif"
  }, {
    Code: "<prosi>",
    Animation: "prosi.gif"
  }, {
    Code: "<tak>",
    Animation: "tak.gif"
  }, {
    Code: "<nie>",
    Animation: "nie.gif"
  }, {
    Code: "<bezradny>",
    Animation: "bezradny.gif"
  }, {
    Code: "<zm\u0119czony>",
    Animation: "zmeczony.gif"
  }, {
    Code: "<pocieszacz>",
    Animation: "pocieszacz.gif"
  }, {
    Code: "<buziak>",
    Animation: "buziak.gif"
  }, {
    Code: "<bu\u017aki>",
    Animation: "buzki.gif"
  }, {
    Code: "<plask>",
    Animation: "plask.gif"
  }, {
    Code: "<boisi\u0119>",
    Animation: "boisie.gif"
  }, {
    Code: "<z\u0142ezk\u0105>",
    Animation: "zlezkawoku.gif"
  }, {
    Code: "<papa>",
    Animation: "papa.gif"
  }, {
    Code: "<papa2>",
    Animation: "papa2.gif"
  }, {
    Code: "<krzyk>",
    Animation: "krzyk.gif"
  }, {
    Code: "<plotki>",
    Animation: "plotki.gif"
  }, {
    Code: "<muza>",
    Animation: "muza.gif"
  }, {
    Code: "<pies>",
    Animation: "pies.gif"
  }, {
    Code: "<kot>",
    Animation: "kotek.gif"
  }, {
    Code: "<zakupy>",
    Animation: "zakupy.gif"
  }, {
    Code: "<fotka>",
    Animation: "aparat.gif"
  }, {
    Code: "<w8>",
    Animation: "w8.gif"
  }, {
    Code: ":))",
    Animation: "wesoly.gif"
  }, {
    Code: [":((", ":-("],
    Animation: "smutny3.gif"
  }, {
    Code: ";))",
    Animation: "mruga.gif"
  }, {
    Code: ["<z\u0142y>", "wrrrr!"],
    Animation: "zly2.gif"
  }, {
    Code: "<z_j\u0119zorem>",
    Animation: "z_jezorem.gif"
  }, {
    Code: "<zniesmaczony>",
    Animation: "zniesmaczony.gif"
  }, {
    Code: "nieee",
    Animation: "niee.gif"
  }, {
    Code: "tiaaa",
    Animation: "tiaaa.gif"
  }, {
    Code: "<zdziwiony>",
    Animation: "zdziwko.gif"
  }, {
    Code: "<beksa>",
    Animation: "beksa.gif"
  }, {
    Code: "<haha>",
    Animation: "haha.gif"
  }, {
    Code: "<rotfl3>",
    Animation: "rotfl3.gif"
  }, {
    Code: "<zawstydzony>",
    Animation: "wstydnis.gif"
  }, {
    Code: "<pokaza\u0142_j\u0119zyk>",
    Animation: "8p.gif"
  }, {
    Code: "<gafa>",
    Animation: "gafa.gif"
  }, {
    Code: "<z\u0105b>",
    Animation: "zab.gif"
  }, {
    Code: "<ziewa2>",
    Animation: "ziew.gif"
  }, {
    Code: "<prysznic>",
    Animation: "prysznic.gif"
  }, {
    Code: "<wanna>",
    Animation: "wanna.gif"
  }, {
    Code: "<wc>",
    Animation: "wc.gif"
  }, {
    Code: "<urwanie g\u0142owy>",
    Animation: "krecka_dostal.gif"
  }, {
    Code: "<my\u015bli2>",
    Animation: "hmmm.gif"
  }, {
    Code: "<niedowiarek>",
    Animation: "puknijsie.gif"
  }, {
    Code: "<olaboga>",
    Animation: "olaboga.gif"
  }, {
    Code: "<urodziny>",
    Animation: "tort.gif"
  }, {
    Code: "<bukiet>",
    Animation: "bukiet.gif"
  }, {
    Code: "<winko>",
    Animation: "szampan.gif"
  }, {
    Code: "<gool>",
    Animation: "gool.gif"
  }, {
    Code: "<cmok2>",
    Animation: "cmok2.gif"
  }, {
    Code: "<onajego>",
    Animation: "onajego.gif"
  }, {
    Code: "<buja_w_ob\u0142okach>",
    Animation: "buja_w_oblokach.gif"
  }, {
    Code: "<zakochany>",
    Animation: "zakochany.gif"
  }, {
    Code: "<leje>",
    Animation: "pada.gif"
  }, {
    Code: "<okularnik>",
    Animation: "okularnik.gif"
  }, {
    Code: "<\u015bnieg>",
    Animation: "snieg.gif"
  }, {
    Code: "<\u015bpioch>",
    Animation: "spioch.gif"
  }, {
    Code: "<je_pizz\u0119>",
    Animation: "je_pizze.gif"
  }, {
    Code: "<piwosz>",
    Animation: "piwko2.gif"
  }, {
    Code: "<drinkuje>",
    Animation: "drink.gif"
  }, {
    Code: "<obiad>",
    Animation: "obiad.gif"
  }, {
    Code: "<telefon2>",
    Animation: "telefon2.gif"
  }, {
    Code: "<czyta_gazet\u0119>",
    Animation: "gazeta.gif"
  }, {
    Code: "<chatownik>",
    Animation: "chatownik.gif"
  }, {
    Code: "<gra>",
    Animation: "gra.gif"
  }, {
    Code: "<bije>",
    Animation: "bije.gif"
  }, {
    Code: "<dresik>",
    Animation: "dresiarz.gif"
  }, {
    Code: "<bij\u0105>",
    Animation: "dostal.gif"
  }, {
    Code: "<palacz>",
    Animation: "palacz.gif"
  }, {
    Code: "<nonono>",
    Animation: "nonono.gif"
  }, {
    Code: "<oklaski>",
    Animation: "brawa.gif"
  }, {
    Code: "<heej>",
    Animation: "heej.gif"
  }, {
    Code: "<spad\u00f3wa>",
    Animation: "fuck.gif"
  }, {
    Code: "<do_bani>",
    Animation: "dobani2.gif"
  }, {
    Code: "<ok>",
    Animation: "ok.gif"
  }, {
    Code: "<\u0142apka>",
    Animation: "lapka.gif"
  }, {
    Code: "<serducho>",
    Animation: "serducho.gif"
  }, {
    Code: "<zegar>",
    Animation: "zegar.gif"
  }, {
    Code: "<jab\u0142ko>",
    Animation: "jablko.gif"
  }, {
    Code: "<kawa>",
    Animation: "kawa.gif"
  }, {
    Code: "<kwiatuszek>",
    Animation: "kwiatuszek.gif"
  }, {
    Code: "<prezent>",
    Animation: "prezent.gif"
  }, {
    Code: "<serce>",
    Animation: "serce.gif"
  }, {
    Code: "<mi\u0142o\u015b\u0107>",
    Animation: "milosc.gif"
  }, {
    Code: "<usta>",
    Animation: "usta.gif"
  }, {
    Code: "<weso\u0142y>",
    Animation: "usmiech.gif"
  }, {
    Code: "<smutny>",
    Animation: "smutny.gif"
  }, {
    Code: "<mruga>",
    Animation: "oczko.gif"
  }, {
    Code: "<zdenerwowany>",
    Animation: "zdenerwowany.gif"
  }, {
    Code: [":PP", ":-P", ":-PP"],
    Animation: "jezyk1.gif"
  }, {
    Code: [";PP", ";-P", ";-PP"],
    Animation: "jezyk2.gif"
  }, {
    Code: "<no>",
    Animation: "no.gif"
  }, {
    Code: "<yes>",
    Animation: "yes.gif"
  }, {
    Code: "<spox>",
    Animation: "spox.gif"
  }, {
    Code: "!!",
    Animation: "wykrzyknik.gif"
  }, {
    Code: "??",
    Animation: "pytajnik.gif"
  }, {
    Code: [";(", ";((", ";-(", ";-((", "<p\u0142acze>"],
    Animation: "placze.gif"
  }, {
    Code: "<lol2>",
    Animation: "lol2.gif"
  }, {
    Code: [":D", ":-D", ";D", ";-D"],
    Animation: "zeby.gif"
  }, {
    Code: "<rotfl2>",
    Animation: "rotfl2.gif"
  }, {
    Code: ["<wow>", ":O", ":-O", ";O", ";-O"],
    Animation: "wow.gif"
  }, {
    Code: "<w\u015bciek\u0142y>",
    Animation: "wsciekly.gif"
  }, {
    Code: "<wstydni\u015b>",
    Animation: "zawstydzony.gif"
  }, {
    Code: ["<co_jest?>", "<co_jest>"],
    Animation: "co_jest.gif"
  }, {
    Code: [";>", ":->", ";->"],
    Animation: "chytry.gif"
  }, {
    Code: ["<\u015bpi\u0119>", "<ziewa>"],
    Animation: "spie.gif"
  }, {
    Code: [";|", ":-|", ";-|", "<hmmm>"],
    Animation: "ysz.gif"
  }, {
    Code: [";]", ":-]", ";-]"],
    Animation: "krzywy.gif"
  }, {
    Code: [":/", ";/", ":-/", ";-/", "<kwa\u015bny>"],
    Animation: "kwasny.gif"
  }, {
    Code: "<r\u00f3\u017ca>",
    Animation: "roza.gif"
  }, {
    Code: "<piwo>",
    Animation: "piwo.gif"
  }, {
    Code: "<nie_powiem>",
    Animation: "nie_powiem.gif"
  }, {
    Code: "<soczek>",
    Animation: "soczek.gif"
  }, {
    Code: [":*", ":-*", ";*", ";-*", "<cmok>"],
    Animation: "cmok.gif"
  }, {
    Code: "<ca\u0142us>",
    Animation: "calus.gif"
  }, {
    Code: "<marzyciel>",
    Animation: "oczy.gif"
  }, {
    Code: "<\u015bciana>",
    Animation: "sciana.gif"
  }, {
    Code: "<serduszka>",
    Animation: "serduszka.gif"
  }, {
    Code: "<przytul>",
    Animation: "przytul.gif"
  }, {
    Code: "<u\u015bcisk>",
    Animation: "uscisk.gif"
  }, {
    Code: "<g\u0142aszcze>",
    Animation: "glaszcze.gif"
  }, {
    Code: "<cwaniak2>",
    Animation: "cfaniak.gif"
  }, {
    Code: "<jem>",
    Animation: "jem.gif"
  }, {
    Code: "<hahaha>",
    Animation: "hahaha.gif"
  }, {
    Code: "<telefon>",
    Animation: "telefon.gif"
  }, {
    Code: "<ha\u0142as>",
    Animation: "halas.gif"
  }, {
    Code: "<pisze>",
    Animation: "pisze.gif"
  }, {
    Code: "<boks>",
    Animation: "boks.gif"
  }, {
    Code: "<faja>",
    Animation: "faja.gif"
  }, {
    Code: "<papapa>",
    Animation: "papapa.gif"
  }, {
    Code: "<3m_si\u0119>",
    Animation: "3m_sie.gif"
  }, {
    Code: "<czas>",
    Animation: "czas.gif"
  }, {
    Code: "<cisza>",
    Animation: "cisza.gif"
  }, {
    Code: ["<co?>", "<co>"],
    Animation: "co.gif"
  }, {
    Code: "<czarodziej>",
    Animation: "czarodziej.gif"
  }, {
    Code: "<czytaj>",
    Animation: "czytaj.gif"
  }, {
    Code: "]:->",
    Animation: "diabelek.gif"
  }, {
    Code: "<idiota>",
    Animation: "glupek2.gif"
  }, {
    Code: "<jestem_z_g\u0142upkiem>",
    Animation: "jestem_z_glupkiem.gif"
  }, {
    Code: "<jupi>",
    Animation: "jupi.gif"
  }, {
    Code: "<list>",
    Animation: "list.gif"
  }, {
    Code: "<nauka>",
    Animation: "nauka.gif"
  }, {
    Code: "<paker>",
    Animation: "paker.gif"
  }, {
    Code: "<anio\u0142ek>",
    Animation: "aniolek.gif"
  }, {
    Code: "<peace>",
    Animation: "peace.gif"
  }, {
    Code: "<pomocy>",
    Animation: "pomocy.gif"
  }, {
    Code: "<boj\u0119_si\u0119>",
    Animation: "boje_sie.gif"
  }, {
    Code: "<serduszka2>",
    Animation: "serduszka2.gif"
  }, {
    Code: "<s\u0142onko>",
    Animation: "slonko.gif"
  }, {
    Code: "<spoko>",
    Animation: "spoko.gif"
  }, {
    Code: "<stop>",
    Animation: "stop.gif"
  }, {
    Code: "<ta\u0144cz\u0119>",
    Animation: "tancze.gif"
  }, {
    Code: "<tuptup>",
    Animation: "tuptup.gif"
  }, {
    Code: "<ucze\u0144>",
    Animation: "uczen.gif"
  }, {
    Code: [":-)", ":-))"],
    Animation: "usmiech2.gif"
  }, {
    Code: [";-)", ";-))"],
    Animation: "oczko2.gif"
  }, {
    Code: "<sex>",
    Animation: "sex.gif",
    Hidden: !0
  }, {
    Code: "<dupa>",
    Animation: "dupa.gif",
    Hidden: !0
  }, {
    Code: "<ganja>",
    Animation: "ganja.gif",
    Hidden: !0
  }, {
    Code: "<killer>",
    Animation: "killer.gif",
    Hidden: !0
  }, {
    Code: "<rzygi>",
    Animation: "rzygi.gif",
    Hidden: !0
  }, {
    Code: ["<u_mnie_dziala>", "<umniedziala>", "SOA#1"],
    Animation: "dziala.gif",
    Hidden: !0
  }]
});