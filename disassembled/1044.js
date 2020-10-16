Ext.define(E.f.layout.Ga.XB, {
  extend: C.f.Jb,
  cls: "chat-conference-description",
  description: "",
  i6: "",
  tpl: m,
  data: {},
  ae: m,
  $a: m,
  settings: m,
  vb: m,
  ka: {
    ".save-description": function () {
      this.uk();
    }
  },
  constructor: function () {
    this.addEvents("newstatusadded");
    this.tpl = C.k().da.Wa("chat-conference-description");
    this.callParent(arguments);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.el.un("click", this.Ia, this);
  },
  setText: function (c) {
    this.description = c;
    this.$a.setText(c);
  },
  Ia: function (c, n, l) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        this.ka[f].call(this, c, n, l);
        c.preventDefault();
        break;
      }
    }
  },
  na: function () {
    this.el.on("click", this.Ia, this);
    this.jf = this.el.select(".save-description").first();
    this.Md();
    this.$a = Ext.create(E.f.layout.va.al, {
      cls: "conference-description-edit",
      ae: this.ae,
      maxLength: 127,
      multiline: !0,
      text: this.description,
      emptyText: E.lang.JP,
      Pi: 5,
      rows: 2,
      Dp: !0,
      renderTo: this.el,
      si: function () {
        this.cancelEdit(!0);
      },
      El: this.jn,
      Ei: this.uk,
      wi: this
    });
  },
  jn: function () {
    clearTimeout(this.vb);
    this.jf.removeCls("d-none");
  },
  Md: function () {
    this.jf.addCls("d-none");
  },
  cancelEdit: function (c) {
    clearTimeout(this.vb);

    if (c) {
      var f = this;
      this.vb = setTimeout(function () {
        f.Md();
        f.$a.close();
      }, 300);
    } else {
      this.Md(), this.$a.close();
    }
  },
  uk: function () {
    this.Zm();
    var c = this.$a.getText();
    this.Md();
    c !== this.i6 && (c.length > 127 && (c = c.substring(0, 127)), this.fireEvent("newstatusadded", this, c));
  },
  Ok: function (c) {
    this.i6 = c;
    this.$a.setText(c);
  },
  Zm: function () {
    this.$a.oh();
    this.vb = m;
    this.description = this.$a.getText();
  }
});