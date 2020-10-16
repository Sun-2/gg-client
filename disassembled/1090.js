Ext.define(E.f.profile.conference.Sk, {
  extend: E.f.profile.$h,
  tpl: "conference-description",
  cls: "conference-description",
  $a: m,
  data: {},
  $l: m,
  vb: m,
  ka: {
    ".btn-description-change": function () {
      this.$a.Mj();
      this.Gc();
    },
    ".btn-description-set": function () {
      this.uk();
      this.Gc();
    },
    ".btn-description-cancel": function () {
      this.cancelEdit();
    }
  },
  initComponent: function () {
    this.items = [this.$a = Ext.create(E.f.layout.va.al, {
      cls: "conference-desc",
      multiline: !0,
      ae: 700,
      Dp: !0,
      emptyText: E.lang.KB,
      maxLength: 127,
      El: this.Gc,
      Ei: this.ps,
      si: function () {
        this.Cj(!0);
      },
      wi: this
    })];
    this.callParent(arguments);
  },
  na: function () {
    this.Gc();
    this.callParent(arguments);
  },
  hc: function (c) {
    c = c.get("extdata") && c.get("extdata").title;

    if (this.rendered) {
      c ? this.$a.Ce ? this.$l = c : this.$a.setText(c) : this.$a.setText("");
    }
  },
  Gc: function () {
    this.$a && this.$a.Ce ? (this.el.select(".btn-description-change").first().addCls("d-none"), this.el.select(".btn-description-set").first().removeCls("d-none"), this.el.select(".btn-description-cancel").first().removeCls("d-none")) : (this.el.select(".btn-description-change").first().removeCls("d-none"), this.el.select(".btn-description-set").first().addCls("d-none"), this.el.select(".btn-description-cancel").first().addCls("d-none"));
  },
  uk: function () {
    clearTimeout(this.vb);
    this.$a.oh();
    var c = Ext.String.trim(this.$a.getText());
    c.length > 127 && (c = c.substring(0, 127));
    C.k().ta.Bj(this.record.get("uin"), {
      title: c
    });
  },
  ps: function () {
    clearTimeout(this.vb);
    this.vb = m;
    this.uk();
    this.Gc();
  },
  cancelEdit: function () {
    this.$l != this.$a.getText() && this.$a.setText(this.$l);
    clearTimeout(this.vb);
    this.$a.close();
    this.Gc();
  },
  Cj: function (c) {
    clearTimeout(this.vb);
    this.vb = m;

    if (c) {
      var f = this;
      this.vb = setTimeout(function () {
        f.cancelEdit();
      }, 700);
    } else {
      f.cancelEdit();
    }
  },
  Zg: t()
});