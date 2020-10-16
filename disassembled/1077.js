Ext.define(E.f.profile.nu, {
  extend: E.f.profile.$h,
  cls: "d-none",
  LA: !1,
  componentCls: "profile-messages-wrapper",
  constructor: function () {
    this.ul = Ext.create(E.stores.ZA);
    this.Fg = Ext.create(E.stores.XA);
    this.callParent(arguments);
  },
  initComponent: function () {
    this.items = [this.Sc = Ext.create(E.f.layout.va.Sc.iB, {
      la: Ext.getStore("ContactsStore"),
      ul: this.ul,
      Fg: this.Fg,
      Hf: m,
      Nd: this.Dv
    })];
    this.callParent(arguments);
  },
  destroy: function () {
    this.callParent(arguments);
  },
  Sd: function (c) {
    if (!this.record || c.get("uin") != this.record.get("uin")) {
      this.LA = !1;
    }

    return this.callParent(arguments);
  },
  disable: function () {
    this.el.addCls("d-none");
    this.disabled = !0;
  },
  enable: function () {
    this.el.removeCls("d-none");
    this.disabled = !1;
  },
  hc: function (c) {
    var c = c.get("uin"),
        h = C.k().fa.get("uin"),
        f = this.R3(c);

    if (!(this.LA || parseInt(f, 16) == 0)) {
      this.disable(), this.LA = !0, this.Sc.i9(f, c), this.ul.removeAll(), this.Fg.removeAll(), E.api.ub.kd({
        uin: h
      }, {
        fn: function () {
          E.api.ub.U3({
            uin: h,
            interlocutorType: this.Dv,
            interlocutorID: f,
            minCount: 20,
            maxCount: 20,
            stripHtml: !0
          }, {
            fn: function (e) {
              this.ul.add(e.result.conversations);
              e.result.conversations.length > 0 ? (this.enable(), E.api.ub.lla({
                uin: h,
                interlocutorType: this.Dv,
                interlocutorID: f,
                attachmentTypes: "video,music,link,other,image",
                offset: 0,
                limit: 3
              }, {
                fn: function (g) {
                  this.Fg.add(g.result.attachments);
                },
                scope: this
              })) : this.disable();
            },
            scope: this
          }, {
            fn: function () {
              this.LA = !1;
              this.disable();
              this.ready();
            },
            scope: this
          });
        },
        scope: this
      });
    }
  },
  Zg: t()
});