Ext.define(E.f.layout.Ga.bC, {
  extend: C.f.mq,
  itemSelector: "li.ml__item",
  user: m,
  name: "chat-sentences-list",
  cls: "chat-sentences-list",
  blockRefresh: !1,
  Wf: m,
  Pea: "chat-sentences-aol-link",
  bj: m,
  yva: E.f.layout.Ga.RY,
  AN: 300,
  disableSelection: !0,
  mixins: {
    ea: C.core.mixins.kb
  },
  ea: m,
  constructor: function (c) {
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd
    }]];
    c.tpl = c.tpl || C.k().da.ma("chat-sentences-list");
    this.user = c.user;
    this.callParent([c]);
    this.mixins.ea.constructor.call(this, c);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.store.suspendEvents();
    this.store.each(function (c) {
      c.set("parsed", !1);
    });
    this.store.resumeEvents();
    this.on("itemadd", this.Mo, this);
    this.on("afterrender", this.na, this);
    this.on("refresh", this.Kg, this);
    this.on("itemclick", this.mb, this);
    this.mixins.ea.constructor.call(this);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.un("itemclick", this.mb, this);
    this.bj && this.bj.un("destroy", this.V1, this);
    this.callParent(arguments);
  },
  na: function () {
    this.blockRefresh = !0;
  },
  Kg: function () {
    this.rM();
    this.L2();
    this.all.getCount() === 1 && this.fireEvent("itemadd", this.store.getRange(), 0, this.getNodes());
  },
  bufferRender: function (c, h) {
    var f = document.createElement("div");
    this.tpl.overwrite(f, this.collectData(c, h));
    return this.blockRefresh ? Ext.query(".ml__item", f) : Ext.query(this.getItemSelector(), f);
  },
  L2: function () {
    var c = this.user.Hb();
    this.user.qp() && !c.xm() && !this.user.zm() && E.api.dl.uy({
      uin: c.get("uin")
    }, {
      fn: function (b) {
        delete b.result.users[0].status;
        b = b.result.users[0];
        this.Wf = {
          uin: c.get("uin"),
          age: b.age._content,
          city: b.city._content,
          name: b.label._content,
          phone: b.phone._content,
          Bwa: b.wwwUrl._content,
          fm: b.email._content
        };
        this.bj = Ext.create(this.yva, {
          Wf: this.Wf,
          user: this.user
        });
        this.bj.render(this.getEl(), 0);
        this.bj.on("destroy", this.V1, this);
      },
      scope: this
    }, {
      fn: t(),
      scope: this
    });
  },
  V1: function () {
    this.bj = m;
  },
  rM: function () {
    var c = C.k().da.ma(this.Pea),
        f = this.getEl();
    f.query(".conversation-aol").length || (c.insertFirst(f, {
      Msa: this
    }), this.state && this.Ho());
  },
  Ho: function (c) {
    var q = this.getEl().child(".conversation-aol"),
        c = c || this.state,
        p = q.child(".chat-aol-previous").addCls("d-none"),
        o = q.child(".chat-aol-archive").addCls("d-none"),
        f = q.child(".chat-aol-previous-spinner").addCls("d-none"),
        u = q.child(".chat-aol-previous-empty").addCls("d-none");
    c === "new" ? p.removeCls("d-none") : c === "loader" ? f.removeCls("d-none") : c === "empty" ? u.removeCls("d-none") : c === "archive" ? o.removeCls("d-none") : c === "fail" && q.addCls("d-none");
    this.state = c;
  },
  doAdd: function (c, n, l) {
    var n = this.all.elements,
        f;

    if (l < this.all.getCount()) {
      this.all.item(l).insertSibling(c, "before", !0), n.splice.apply(n, [l, 0].concat(c));
    } else {
      this.all.last().insertSibling(c, "after", !0);

      if (this.blockRefresh) {
        for (f = c.length; f--;) {
          l = c[f], Ext.fly(l).hasCls("ml__item") || c.splice(f, 1);
        }
      }

      n.push.apply(n, c);
    }

    this.rM();
    this.Ho();
  },
  YL: function (c, n) {
    if (!Ext.isDefined(n)) {
      return !1;
    }

    var l = c.get("uin"),
        f = n.get("uin");
    return parseInt(l, 10) === parseInt(f, 10);
  },
  Y6: function (c, f) {
    return c.get("direction") !== f.get("direction");
  },
  sma: function (c) {
    return this.store.getAt(c);
  },
  jK: function (c, f) {
    return parseInt(c) - parseInt(f);
  },
  showTime: function (c, f) {
    if ([E.models.xc.prototype.types.hZ, E.models.xc.prototype.types.a9].indexOf(c.get("type")) !== -1) {
      return !1;
    }

    if (!f || !this.YL(c, f) || this.Y6(c, f)) {
      return !0;
    }

    if (this.jK(c.data.time, f.data.time) < this.AN) {
      return !1;
    }

    return !0;
  },
  OJ: function (c) {
    var c = Ext.Date.clearTime(new Date(parseInt(c) * 1000), !0),
        f = Ext.Date.clearTime(new Date(C.k().pg.getTime() * 1000));
    return Math.round((f.getTime() - c.getTime()) / 1000 / 86400);
  },
  showDayDate: function (c, n) {
    if (n) {
      var l = this.OJ(n.data.time),
          f = this.OJ(c.data.time);

      if (l === f) {
        return !1;
      }

      return !0;
    } else {
      if (this.OJ(c.data.time) > 0) {
        return !0;
      }

      return !1;
    }
  },
  Boa: function (c) {
    return c.get("direction") === E.models.xc.prototype.Bf.Ih;
  },
  showUserData: function (c, f) {
    if (this.Boa(c)) {
      return !1;
    }

    if (f && this.YL(c, f)) {
      if (this.jK(c.data.time, f.data.time) > this.AN || this.Y6(c, f)) {
        return !0;
      }

      return !1;
    }

    return !0;
  },
  woa: function (c, f) {
    if (f && this.YL(c, f)) {
      if (this.jK(c.data.time, f.data.time) > this.AN) {
        return !1;
      }

      return !0;
    }
  },
  cra: function (c) {
    var c = c.get("uin"),
        f = C.k().fa.get("uin");
    return parseInt(c) === parseInt(f);
  },
  pza: function (c) {
    return {
      file_name: c.data.file_name,
      file_size: c.data.file_size,
      message: c.data.message,
      conferenceId: c.data.conferenceId,
      attachments: c.data.attachments,
      uin: c.data.uin,
      user: c.data.user,
      time: c.data.time,
      type: c.data.type,
      parsed: c.data.parsed,
      insecure: c.data.insecure,
      messageId: c.data.messageId,
      images: c.data.images,
      ticketId: c.data.ticketId,
      extraData: c.data.extraData
    };
  },
  collectData: function (c, w) {
    for (var q = m, o = c.length, f = w, y = 0; y < o; y++) {
      q = c[y];

      if (!q.data.user) {
        if (this.cra(q.get("uin"))) {
          q.user = C.k().fa.get("uin");
        } else {
          var u = contactsStore.Ba(q.data.uin);
          q.user = u ? u : q.data.uin;
        }
      }

      o > 1 && (f = y);
      (u = this.sma(f - 1)) ? (q.data.showUserData = this.showUserData(q, u), q.data.showTime = this.showTime(q, u), q.data.continued = this.woa(q, u), q.data.showDayDate = this.showDayDate(q, u)) : (q.data.showUserData = this.showUserData(q, m), q.data.showTime = this.showTime(q, m), q.data.continued = !1, q.data.showDayDate = this.showDayDate(q, m));
    }

    q = [];
    y = 0;

    for (o = c.length; y < o; y++) {
      f = c[y], q[q.length] = this.prepareData(f.data, w + y, f);
    }

    return q;
  },
  qM: function () {
    this.bj && this.bj.destroy();
  },
  pH: function () {
    this.bj === m && this.L2();
  },
  mb: function (c, p, o, n, f) {
    f.getTarget(".undeliv-msg-btn") && ((c = p.$J()) || (c = p.get("message")), this.store.removeAt(n), this.store.removeAt(n - 1), this.fireEvent("messagetryagain", this, c));
  },
  Mo: function (c, h, f) {
    c.length && (c = c[0], c.get("direction") === E.models.xc.prototype.Bf.DK && this.Ena(f, c));
    E.ca.di.$ta(f[0]);
  },
  Mc: A(m),
  vd: t(),
  Ena: function (c, n) {
    var l = c[0].querySelector(".ml__item-avatar img"),
        f = c[0].querySelector(".ml__item-username");
    l && this.fireEvent("addedavatars", {
      object: [{
        zb: [{
          avatar: l,
          size: 30,
          name: f
        }],
        uin: n.get("uin")
      }]
    });
  }
});