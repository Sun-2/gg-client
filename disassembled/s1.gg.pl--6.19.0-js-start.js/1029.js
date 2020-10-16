Ext.define(E.f.windows.ZD, {
  extend: E.f.layout.va.hb.Tk,
  Gf: m,
  gid: m,
  la: m,
  old: m,
  label: E.lang.$P,
  constructor: function (c) {
    c.title = c.gid ? E.lang.Wu : E.lang.QB;
    this.la = Ext.getStore("ContactsStore");
    this.Fd = ["contact", "dummycontact", "conference"];
    this.Ef = !1;
    this.mg = [function () {
      var e = this;
      return function (b) {
        return e.gid == 4 && b.get("protoInfo").bot ? !1 : !0;
      };
    }.call(this)];
    this.buttons = [{
      caption: E.lang.PB,
      action: this.qia.bind(this)
    }, "cancel"];
    this.callParent([c]);
  },
  initItems: function () {
    this.getEl().addCls("group-edit-window");
    this.Qna();
    this.Pna();
    this.callParent();
  },
  Pna: function () {
    if (this.gid) {
      var c = this.la.getGroups(),
          h = this.gid,
          f;

      for (f in c) {
        if (c[f].Ap == this.gid) {
          this.Gf.Rf(c[f].name);
          h = c[f].gid;
          break;
        }
      }

      this.old = {
        Va: [],
        gg: []
      };
      this.yg = [];
      Ext.each(this.la.h4({
        gid: h
      }).getRange(), function (g) {
        var l = g.get("cid");
        this.yg.push(l);
        g.get("type") == 4 ? this.old.gg.push(l) : this.old.Va.push(l);
      }, this);
    }
  },
  Qna: function () {
    var c = this.el.select(".title").first();
    this.LN = Ext.create(C.f.Jb, {
      layout: "anchor",
      renderTo: c,
      cls: "top-container",
      items: [this.Gf = Ext.create(E.f.windows.GroupName, {
        disabled: this.gid == E.models.Ya.groups.yA ? !0 : !1
      })]
    });
  },
  qia: function () {
    if (!this.Gf.validate()) {
      return !1;
    }

    var c = this.pc.zy(),
        h = this.pc.Ay("type"),
        f = {
      name: this.Gf.getValue(),
      Va: [],
      gg: []
    };
    Ext.each(c, function (e, g) {
      h[g] == 4 ? f.gg.push(e) : f.Va.push(e);
    }, this);
    this.gid ? (f.gid = this.gid, f.g6 = this.old.Va, f.h6 = this.old.gg, this.bsa(f)) : this.fsa(f);
  },
  fsa: function (c) {
    var f = this;
    this.la.Br(c, {
      Ea: function () {
        C.Ca("");
        C.k().qa.sa({
          msg: E.oa.bba,
          timeout: 2000
        });
        f.destroy();
      },
      ya: function () {
        C.k().qa.sa({
          msg: E.oa.aba
        });
      },
      scope: this
    });
  },
  bsa: function (c) {
    E.api.bb.lka(c, {
      fn: function () {
        C.Ca("");
        C.k().qa.sa({
          msg: E.oa.fba,
          timeout: 2000
        });
        this.destroy();
      },
      scope: this
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.eba
        });
      },
      scope: this
    });
  },
  destroy: function () {
    if (this.Gf) {
      this.Gf.destroy(), this.Gf = m;
    }

    if (this.LN) {
      this.LN.destroy(), this.LN = m;
    }

    this.callParent();
  }
});