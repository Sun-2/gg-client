Ext.define(E.controllers.profile.dv, {
  extend: E.controllers.profile.vn,
  QA: !1,
  W4: !1,
  kd: function () {
    this.view = Ext.create(E.f.profile.contact.fv, {});
    this.view.on("ready", this.Lia, this, {
      single: !0
    });
  },
  execute: function (c) {
    if (C.k().isReady()) {
      this.b_({
        Vm: c
      });
    } else {
      C.k().on("appready", this.b_, this, {
        Vm: c,
        single: !0
      });
    }

    this.callParent(arguments);
  },
  destroy: function () {
    C.k().un("appready", this.rEa, this);
    this.callParent();
  },
  C6: function () {
    this.W4 = !0;
    Ext.create(E.f.windows.WF, {
      buttons: [],
      Lb: this.Lb
    });
  },
  b_: function (c) {
    c = c.Vm;

    if (this.W4 === !1) {
      this.Lb = {};

      if (c.params.length === 5) {
        this.Lb = {
          sender: c.params[1],
          Bh: c.params[2].split(",", 2)[1],
          fm: c.params[3].split(",", 2)[1],
          token: c.params[4].split(",", 2)[1]
        };
      }

      if (Ext.Object.getSize(this.Lb) === 4 && this.Lb.sender != C.k().fa.get("uin")) {
        if (this.QA === !0) {
          this.C6();
        } else {
          this.view.on("ready", this.C6, this, {
            single: !0
          });
        }
      }
    }
  },
  Lia: function () {
    this.QA = !0;
  },
  Mx: function (c, f) {
    this.xd && this.xd.get("cid") == 0 && f.get("cid") > 0 && this.xd.get("protoInfo").friend === 0 && f.get("protoInfo").friend === 1 && this.Sd(f, !0);
  }
});