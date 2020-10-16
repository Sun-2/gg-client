Ext.define(E.f.layout.va.mD, {
  extend: C.f.An,
  ea: m,
  name: "file-manager-container",
  cls: "file-manager-container",
  id: "file-manager-container",
  tpl: m,
  owner: m,
  da: m,
  notifications: m,
  data: {
    address: m
  },
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    var f = Ext.String.format("{0}//{1}", document.location.protocol, document.location.host);
    this.data.address = Ext.String.format(C.k().config.applications[C.k().lang || "pl"].fileupload, f);
    this.kAa = {};
    this.callParent(arguments);
  },
  initComponent: function () {
    this.tpl = C.k().da.ma("file-manager-frame");
    this.callParent(arguments);
    this.on("afterrender", this.na, this);
    C.k().on("elementpositionchanged", this.show, this);
    Ext.fly(window).on("resize", this.show, this);
  },
  fb: function () {
    this.on("showsendfileconfirm", this.p8, this);
  },
  eb: function () {
    this.un("showsendfileconfirm", this.p8, this);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.eb();
    C.k().un("elementpositionchanged", this.show, this);
    Ext.fly(window).un("resize", this.show, this);
  },
  na: function () {
    this.fb();
    C.k().af.aN("file-manager-frame");
    this.hide();
  },
  FH: function (c) {
    return c == this.owner;
  },
  getEl: function () {
    return Ext.get("file-manager-container");
  },
  hide: function () {
    var c = this.getEl();
    c.setStyle("left", "-1000px");
    c.setStyle("top", "0px");
    return this;
  },
  show: function () {
    if (C.k().be !== m && !(C.k().be.Zl instanceof E.controllers.Sv)) {
      return this.hide(), !1;
    }

    this.hide();
    Ext.defer(function () {
      if (this.owner && this.owner.Je) {
        var c = this.getEl(),
            f = this.owner.el.select(".chat-toolbar .file-upload-btn").first();

        if (f !== m && (f.removeCls("disabled"), f = f.getOffsetsTo(document.body), f[0] !== 0 && f[1] !== 0)) {
          return c.setStyle("left", f[0] + "px"), c.setStyle("top", f[1] + "px"), !0;
        }
      }

      this.hide();
      return !1;
    }, 100, this);
  },
  setOwner: function (c) {
    this.owner = c;
    return this;
  },
  p8: function (c) {
    this.win = Ext.create(E.f.windows.RC, {
      tpl: C.k().da.Wa("edisc-send-file-confirm-window", {
        filename: c.fileName
      }),
      buttons: [{
        selector: "div.cancel-no",
        fn: function () {
          this.win.Xa();
          C.k().af.fireEvent("sendfileconfirm", !1, c.id);
        },
        scope: this,
        Ib: !1
      }, {
        selector: "div.cancel-yes",
        fn: function () {
          this.win.Xa();
          C.k().af.fireEvent("sendfileconfirm", !0, c.id);
        },
        scope: this,
        Ib: !1
      }]
    });
  }
});