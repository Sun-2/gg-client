Ext.define(E.f.conference.Sk, {
  extend: C.f.Jb,
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
  constructor: function () {
    this.da = C.k().da;
    this.tpl = this.da.ma("conference-description");
    this.callParent(arguments);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
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
  destroy: function () {
    this.el.un("click", this.mb, this);
  },
  na: function () {
    this.el.on("click", this.mb, this);
    var c = this.el.select(".btn-description-change").first();
    c && (c.on("mouseenter", this.GI, this), c.on("mouseleave", this.HI, this));
    this.Gc();
  },
  GI: function () {
    this.$a.addCls("hover");
  },
  HI: function () {
    this.$a.removeCls("hover");
  },
  mb: function (c) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        this.ka[f].call(this, c);
        c.preventDefault();
        break;
      }
    }
  },
  hc: function (c) {
    if (c && (typeof this.wza === "undefined" || c.data.cid === this.Oa.data.cid && c.data.extdata.title != this.Oa.data.extdata.title)) {
      if (this.Oa = c, this.data = this.Oa.data, this.rendered) {
        this.data.extdata && typeof this.data.extdata.title !== "undefined" ? this.$a.Ce ? this.$l = this.Oa.data.extdata.title : this.$a.setText(this.data.extdata.title) : this.$a.setText("");
      }
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
    this.fireEvent("changestatus", this.Oa.get("uin"), c);
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
  }
});