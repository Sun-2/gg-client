Ext.define(E.f.popups.EG, {
  extend: C.f.ai,
  id: "ShareLinkPopup",
  $b: m,
  cls: "sr-menu-popup sr-share-link-hover",
  vK: !0,
  hideOnClick: !1,
  uK: !0,
  la: m,
  ADa: m,
  nl: m,
  BDa: m,
  Lya: m,
  mixins: {
    ea: C.core.mixins.kb
  },
  ea: m,
  ka: {
    ".paste-to-chat": function () {
      if (this.nl) {
        var c = this.$b.xh(),
            c = C.ca.xa.Et(decodeURIComponent(c));
        this.nl.sendMessage(c, !0);
        this.destroy();
      }
    }
  },
  constructor: function (c) {
    this.Gi = c.Gi || [];
    this.$b = this.Gi.length > 0 && typeof c.$b == "undefined" ? this.Gi[0] : c.$b;
    this.iA = c.iA || !0;
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd,
      uf: ["addedavatars"],
      Fk: !1
    }]];
    this.callParent(arguments);
  },
  initComponent: function () {
    this.mixins.ea.constructor.call(this);
    this.la = Ext.getStore("ContactsStore");
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  eb: function () {
    this.un("afterrender", this.na, this);
    this.getEl().un("click", this.Nr, this);
    this.event && this.event.un("redirect", this.Wr, this);
  },
  show: function () {
    this.callParent();
    var c = this.el.select(".hover-event").first();
    this.event = Ext.create(E.f.Ma.xE).createEvent({
      $b: this.$b,
      Gi: this.Gi || [],
      renderTo: c,
      dN: this,
      Rp: !1
    });
    this.event.on("redirect", this.Wr, this);
    this.Bl(!0);
    Ext.defer(function () {
      this.Bl(!0);
    }, 10, this);
    var c = this.$b.get("sender").id,
        h = this.getEl().query(".sender")[0],
        f = this.getEl().query(".user-avatar")[0];
    this.fireEvent("addedavatars", {
      object: {
        uin: c,
        zb: [{
          avatar: f,
          size: 30,
          name: h
        }]
      }
    });
  },
  Wr: function () {
    this.destroy();
  },
  na: function () {
    this.Eka() || this.getEl().addCls("non-thumbnail");
    this.getEl().on("click", this.Nr, this);
  },
  Nr: function (c, n, l) {
    c.preventDefault();

    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        this.ka[f].call(this, c, n, l);
        break;
      }
    }
  },
  To: function () {
    return C.k().da.Wa("share-links-hover", {
      ZZ: this.hla(),
      dataSourceType: this.$b.get("dataSourceType"),
      sender: this.yma(this.$b.get("sender")),
      customReceiversCount: this.$b.get("customReceiversCount") || 0,
      iA: this.iA
    });
  },
  hla: function () {
    var c = C.k().cp().name === "default" && C.k().Ja.hd();

    if (this.nl = c && c.getActiveItem() ? c.getActiveItem() : m) {
      return {
        uin: this.nl.Aa,
        name: this.nl.pb.get("ShowName") || this.nl.Aa
      };
    }

    return m;
  },
  destroy: function () {
    if (!this.wK) {
      var c = C.f.ai.Qka("RecipientsPopup");
      c && c.destroy();
      this.eb();
      this.event && this.event.destroy();
      this.callParent();
    }
  },
  yma: function (c) {
    if (c.label.length) {
      return c;
    }

    var f = C.k().fa.get("uin");

    if (c.id == f) {
      return c.label = E.lang.Se, c;
    }

    f = this.la.Ba(c.id);
    c.label = f ? f.get("ShowName") || f.get("nick") : c.id;
    return c;
  },
  fta: v("tK"),
  jEa: v("Ss"),
  Mc: A(m),
  vd: t(),
  Eka: function () {
    peeksData = this.$b.mla();

    for (var c = 0, f = peeksData.length; c < f; c++) {
      if (peeksData[c].thumbnail) {
        return !0;
      }
    }

    return !1;
  }
});