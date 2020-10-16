Ext.define(C.core.Yb.lD, {
  extend: C.core.Yb.zn,
  name: "file-manager",
  id: "file-manager",
  prefix: "file_send",
  cq: m,
  zA: m,
  postMessage: pm,
  b3: m,
  pn: {},
  Me: {},
  Hi: {},
  yAa: {},
  constructor: function (c) {
    c = c || {};
    this.callParent([c]);
    this.Cfa();
    this.on("sendfileconfirm", this.sia, this);
  },
  types: {
    request: {
      SenderReceiverChange: "FILE_SENDER2_RECEIVER_CHANGE",
      Confirm: "FILE_SENDER2_TICKET_CONFIRM",
      Cancel: "FILE_SENDER2_TICKET_CANCEL"
    },
    response: {
      TicketError: "FILE_SENDER2_TICKET_ERROR",
      TicketCreated: "FILE_SENDER2_TICKET_CREATED",
      TicketStartUpload: "FILE_SENDER2_TICKET_START_UPLOAD",
      TicketUpdated: "FILE_SENDER2_TICKET_UPDATED",
      TicketCompleted: "FILE_SENDER2_TICKET_COMPLETED"
    }
  },
  Cfa: function () {
    var c = this.e4(),
        f = this;
    this.postMessage.bind([this.prefix, this.Hs("TicketCreated")].join("_"), function () {
      f.Jha.apply(f, arguments);
    }, c);
    this.postMessage.bind([this.prefix, this.Hs("TicketStartUpload")].join("_"), function () {
      f.Kha.apply(f, arguments);
    }, c);
    this.postMessage.bind([this.prefix, this.Hs("TicketUpdated")].join("_"), function () {
      f.Lha.apply(f, arguments);
    }, c);
    this.postMessage.bind([this.prefix, this.Hs("TicketCompleted")].join("_"), function () {
      f.Iha.apply(f, arguments);
    }, c);
    this.postMessage.bind([this.prefix, this.Hs("TicketError")].join("_"), function () {
      f.Aia.apply(f, arguments);
    }, c);
  },
  Jha: function (c) {
    C.k().Lc.fireEvent("showsendfileconfirm", c);
  },
  Kha: function (c) {
    var f = c.id;
    f && !this.Me[f] && (this.Me[f] = c, this.JA(this.Me[f]), this.pn[f] = function () {
      return setInterval(function () {
        this.JA(this.Me[f]);
      }.bind(this), 1000);
    }.call(this));
  },
  Lha: function (c) {
    var f = c.id;
    f && this.Me[f] && (this.Me[f] = c);
  },
  Iha: function (c) {
    var f = c.id;
    f && this.Me[f] && (this.Me[f] = c, clearInterval(this.pn[f]), delete this.pn[f], this.JA(this.Me[f]), this.bwa(this.Me[f]), delete this.Me[f]);
  },
  Aia: function (c) {
    var f = c.details.id;

    if (f && this.Me[f]) {
      clearInterval(this.pn[f]), delete this.pn[f], this.Me[f].error = c.err_type, this.JA(this.Me[f]);
    }
  },
  Ak: function (c) {
    this.b3 = c;
    this.Gra();
  },
  dK: function (c) {
    return this.types.request[c];
  },
  Hs: function (c) {
    return this.types.response[c];
  },
  e4: function () {
    if (this.cq && this.cq.src) {
      return this.cq.src.split("/").slice(0, 3).join("/");
    }
  },
  aN: function (c) {
    if (Ext.isElement(c)) {
      return this.cq = c, this.zA = c.contentWindow, this;
    } else {
      if (Ext.isString(c)) {
        if (c = Ext.get(c)) {
          this.cq = c.dom, this.zA = c.dom.contentWindow;
        }

        return this;
      } else {
        if (Ext.isObject(c) && c.dom) {
          return this.cq = c.dom, this.zA = c.dom.contentWindow, this;
        }
      }
    }
  },
  Gra: function () {
    this.post(this.dK("SenderReceiverChange"), {
      recipient: "" + this.b3
    });
  },
  TZ: function (c) {
    this.post(this.dK("Cancel"), {
      tid: c
    }, {
      Si: t(),
      sz: t()
    });
  },
  Uga: function (c) {
    this.post(this.dK("Confirm"), {
      tid: c
    }, {
      Si: t(),
      sz: t()
    });
  },
  post: function (c, h, f) {
    f = f || {
      Si: t(),
      pt: t()
    };
    this.postMessage({
      target: this.zA,
      type: [this.prefix, c].join("_"),
      data: h,
      error: f.pt,
      success: f.Si,
      origin: this.e4()
    });
  },
  JA: function (c) {
    var n = c.id || 0,
        l = c.recipient || 0,
        l = this.Z5(l);

    if (typeof this.Hi[l] === "undefined") {
      this.Hi[l] = Ext.create(E.stores.LC, {
        id: "EDiskFilesStore" + l
      });
      var f = C.k().Ja.hd().getItem(l);
      f.oja(this.Hi[l]);
      f.on("uploaderitemclose", this.Fia, this);
    }

    l = this.Hi[l];
    (n = l.getById(n)) ? n.t9(c) : l.add(c);
  },
  l7: function (c, f) {
    this.Hi[c].remove(f);
    this.Hi[c].getCount() == 0 && (Ext.StoreManager.unregister(this.Hi[c]), delete this.Hi[c], C.k().Ja.hd().getItem(c).Bra());
  },
  bwa: function (c) {
    var h = c.id || 0,
        f = c.recipient || 0,
        f = this.Z5(f);

    if (h = this.Hi[f].getById(h)) {
      c = c.url, E.ca.di.X3(c), Ext.Function.defer(function (l, o, n) {
        C.k().Ja.hd().getItem(l).sendMessage(o, !0);
        this.l7(l, n);
      }, 200, this, [f, c, h]);
    }
  },
  Fia: function (c) {
    var h = c.uin,
        c = c.record,
        f = c.getId();
    this.TZ(c.getId());
    clearInterval(this.pn[c.getId()]);
    delete this.pn[f];
    this.l7(h, c);
    delete this.Me[f];
  },
  Z5: function (c) {
    /conferenceID\//.test(c) && (c = Int64.u4(c.slice(13)));
    return c;
  },
  sia: function (c, f) {
    c ? this.Uga(f) : this.TZ(f);
  }
});