Ext.define(C.f.ua.wa, {
  extend: "Ext.Component",
  e6: m,
  name: "system-messages",
  cls: "sr-system-messages",
  da: m,
  tb: m,
  I5: 1,
  $i: m,
  limit: 6,
  an: !1,
  nb: 0,
  Vpa: 0,
  B4: 30,
  locked: !1,
  constructor: function (c) {
    c = c || {};
    Ext.apply(this, c);
    this.da = this.da || C.k().da;
    this.tb = {};
    this.$i = {};
    this.callParent(arguments);
  },
  initComponent: function () {
    this.oAa = this.da.ma("empty-notification");
    this.Hpa = this.da.ma("notify-container");
    this.Q5 = this.da.ma("notify-list-elem");
    this.on("afterrender", this.gb, this);
  },
  gb: function () {
    this.e6 = this.Hpa.append(this.container, {
      nb: this.nb
    }, !0);
    this.container.on("click", function (c) {
      if (c.getTarget(".sr-system-messages-btn")) {
        c.stopEvent(), this.an = !0, this.FN();
      } else {
        if (c.getTarget(".sr-system-messages-btn-on")) {
          c.stopEvent(), this.an = !1, this.FN();
        } else {
          if (c.getTarget(".sr-system-messages-close")) {
            c.stopEvent(), this.Dt(c.getTarget(".sr-system-messages-list-element"));
          } else {
            if (c.getTarget(".external-link")) {
              return !0;
            }
          }
        }
      }
    }, this);
  },
  FN: function () {
    this.an ? (this.container.addCls("expanded"), Ext.get("sr-system-messages-btn").addCls("sr-system-messages-btn-on").removeCls("sr-system-messages-btn"), this.Rta()) : (this.container.removeCls("expanded"), Ext.get("sr-system-messages-btn").addCls("sr-system-messages-btn").removeCls("sr-system-messages-btn-on"), this.w4());
  },
  Rta: function () {
    var c = Ext.get("sr-system-messages-list").select("li").elements;
    Ext.Array.each(c, function (e, f) {
      if (f > 0) {
        e.className = e.className.replace(" hidden", "");
      }
    }, this);
  },
  w4: function () {
    var c = Ext.get("sr-system-messages-list").select("li").elements;
    Ext.Array.each(c, function (e, f) {
      m !== e && f > 0 && e.className.indexOf("hidden") === -1 && (e.className += " hidden");
    }, this);
  },
  R2: function () {
    if (this.nb > 1) {
      Ext.get("sr-system-messages-counter").removeCls("hidden"), Ext.get("sr-system-messages-btn").removeCls("hidden");
    } else {
      if (this.nb < 2) {
        Ext.get("sr-system-messages-counter").addCls("hidden"), Ext.get("sr-system-messages-btn").addCls("hidden"), this.an = !1, this.FN();
      }
    }

    this.nb === 0 ? this.container.addCls("hidden") : this.container.removeCls("hidden");
  },
  zga: function (c) {
    var c = c || this.limit,
        f = 0;
    Ext.Object.each(this.tb, function (e, b) {
      m !== b && (f >= c && b.type < this.B4 && m !== b && this.Dt(b.dom), f++);
    }, this);
    this.R2();
    this.Wh();
  },
  Sw: function (c, p) {
    c && c.type == 30 && this.fireEvent("errordisplay", this);
    var o = this.fma(),
        n = !1;
    Ext.Object.each(this.tb, function (g, b) {
      if (m !== b && b.id === c.id) {
        return n = !0, o = g, !1;
      }
    }, this);
    n ? (c.dom = this.tb[o].dom, this.tb[o] = c) : (this.tb[o] = c, this.nb++);
    this.Tea(o);
    this.nb > 1 && this.Cga();
    this.zga();

    if (p > 0 && c.type < 30 && this.nb === 1) {
      var f = new Ext.util.DelayedTask(this.Dt, this, [this.tb[o].dom]);
      f.delay(p);
      this.$i[c.id] = f;
    }

    return o;
  },
  Dt: function (c) {
    var f = c.C9;
    Ext.removeNode(c);
    this.tb[f] && this.$i[this.tb[f].id] && this.$i[this.tb[f].id].cancel();
    delete this.tb[f];
    Ext.get("sr-system-messages-list").select("li:first").removeCls("hidden");
    Ext.Object.each(this.tb, function (g, h) {
      if (m !== h) {
        h.dom.C9 = g;
      }
    }, this);
    this.nb--;
    this.Wh();
    this.R2();
  },
  ora: function () {
    Ext.Object.each(this.tb, function (c) {
      this.kI(c);
    }, this);
  },
  Tea: function (c) {
    var h = this.tb[c],
        f = new Date(),
        f = Ext.Date.format(f, "H:i");
    h.date = f;
    h.dom ? (this.Q5.insertAfter(h.dom, h, !0), Ext.getDom("sr-system-messages-list").removeChild(h.dom)) : this.Q5.insertFirst(this.e6, h, !0);
    Ext.Object.each(this.tb, function (l, o) {
      if (m !== o) {
        var n = Ext.getDom("sr-system-messages-id-" + o.id);
        n.C9 = l;
        this.tb[l].dom = n;
      }
    }, this);
    this.tb[c].R8 && (h = Ext.fly(this.tb[c].dom).select(".message-container").first()) && h.dom.appendChild(this.tb[c].R8.dom);
    this.afterShow(c);
    this.an || this.w4();
  },
  sa: function (c) {
    if (this.isLocked()) {
      return m;
    }

    typeof c !== "object" && j("Don't know what to display");
    this.Vpa > c.msg.type && j("This message is less than notificationLevel. It will not be displayed");
    c.Lua = c.Lua || 0;
    c.timeout = c.timeout || 0;
    c.timeout !== 0 && c.msg.type >= this.B4 && j("Important messages cannot disapear");
    var h = c.msg.text.replace("", "");
    typeof c.Yi === "string" && (h = C.ca.xa.Z6(h, c.Yi));

    if (c.mc) {
      var f = Ext.get(document.createElement("a"));
      f.on("click", function (b) {
        b.preventDefault();
        c.mc.fn.call(c.mc.scope);
        c.lock && this.yta();
        this.Dt(Ext.get("sr-system-messages-id-" + c.msg.id).dom);
      }, this);
      f.addCls("sr-system-messages-tryagain");
      f.dom.innerHTML = c.mc.text;
      f.dom.setAttribute("href", "#");
      c.mc.el = f;
    }

    c.lock && (this.setLocked(), this.ora());
    return this.Sw({
      type: c.msg.type,
      id: c.msg.id,
      msg: h,
      R8: c.mc ? c.mc.el : m
    }, c.timeout);
  },
  oza: function (c) {
    this.$i[c] && (this.$i[c].cancel(), delete this.$i[c]);
  },
  Cga: function () {
    Ext.Object.each(this.$i, function (c, f) {
      f.cancel();
      delete this.$i[c];
    }, this);
  },
  Wh: function () {
    Ext.get("sr-system-messages-counter").update(this.nb);
  },
  afterShow: function (c) {
    this.fireEvent("aftershow", this, c);
  },
  kI: function (c) {
    this.tb[c] && this.Dt(this.tb[c].dom);
  },
  fma: function () {
    var c = this.I5;
    this.I5 += 1;
    return c;
  },
  setLocked: function () {
    this.locked = !0;
  },
  yta: function () {
    this.locked = !1;
  },
  isLocked: x("locked")
});