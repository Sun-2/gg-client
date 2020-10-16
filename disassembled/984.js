Ext.define(E.f.layout.va.hb.vC, {
  extend: C.f.ai,
  title: m,
  Jh: m,
  Q6: m,
  Ye: m,
  hideOnClick: !1,
  events: {
    gj: "BUTTON_ACTION"
  },
  constructor: function (c) {
    this.Jh = c || {};
    this.Ye = [];
    this.callParent([c]);
  },
  To: function () {
    this.el.addCls("contactspicker-popup");
    var c = this.Jh || {},
        n = Ext.get(document.createElement("div"));

    if (this.title) {
      var l = Ext.get(document.createElement("div"));
      l.addCls("title");
      l.appendTo(n);
      l.dom.innerHTML = eht(this.title);
    }

    l = Ext.get(document.createElement("div"));
    l.addCls("contents");
    l.appendTo(n);
    c.renderTo = l;
    this.pc = new E.f.layout.va.hb.yq(c);
    this.pc.La.on("selectionchange", this.Bl, this);
    var f = this;
    Ext.each(c.buttons, function (e) {
      e == "cancel" ? this.Ye.push(Ext.create(C.f.yn, {
        cls: "btn-cancel",
        J8: !0,
        text: "Anuluj",
        renderTo: n,
        handler: function (g) {
          f.Ko("cancel", g);
        }
      })) : this.Ye.push(Ext.create(C.f.yn, {
        cls: "blue",
        text: e.caption || e.caption,
        renderTo: n,
        handler: function (b) {
          f.Ko(e.action, b);
        }
      }));
    }, this);
    return n;
  },
  Ko: function (c, n) {
    n.disable();

    if (c == "cancel") {
      this.fireEvent(this.events.gj, {
        action: c
      });
    } else {
      var l = [],
          f = this.pc.getSelectedRecords();
      Ext.each(f, function (g) {
        var h = {};
        Ext.each(this.fields, function (b) {
          h[b] = g.get(b);
        }, this);
        l.push(h);
      }, this);

      if (typeof c === "function") {
        if (c(l) === !1) {
          n.enable();
          return;
        }
      } else {
        this.fireEvent(this.events.gj, {
          action: c,
          data: l
        });
      }
    }

    this.destroy();
  },
  show: function () {
    this.callParent();
    this.pc.xg.setWidth(this.pc.el.getWidth() - 10);
  },
  destroy: function () {
    if (this.pc) {
      this.pc.destroy(), this.pc = m;
    }

    for (var c = 0, f = this.Ye.length; c < f; c++) {
      this.Ye[c] && (this.Ye[c].destroy(), delete this.Ye[c]);
    }

    this.callParent();
  }
});