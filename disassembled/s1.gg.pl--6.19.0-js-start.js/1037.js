Ext.define(E.f.layout.Ga.ZE, {
  extend: C.f.pd,
  html: "&nbsp;",
  cls: "sr-message-area",
  BCa: m,
  sH: !1,
  aJ: !1,
  constructor: function (c) {
    c = c || {};
    this.data = {};
    this.owner = c.owner || m;
    this.renderTo = c.renderTo || m;
    this.da = C.k().da;
    this.callParent(arguments);
  },
  initComponent: function () {
    this.tpl = this.da.Wa("chat-text");
    this.a = new Date().getMilliseconds();
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  na: function () {
    this.fb();
  },
  fb: function () {
    this.jd().on("keyup", this.Tr, this);
    this.jd().on("keydown", this.N0, this);
    setTimeout(function () {
      this.No = this.No.bind(this);
      this.Oo = this.Oo.bind(this);
      Ext.isIE ? (this.jd(!0).attachEvent("ondrop", this.No), this.jd(!0).attachEvent("onpaste", this.Oo)) : (this.jd(!0).addEventListener("drop", this.No, !1), this.jd(!0).addEventListener("paste", this.Oo, !1));
    }.bind(this), 0);
  },
  eb: function () {
    this.jd().un("keyup", this.Tr, this);
    this.jd().un("keydown", this.N0, this);
    Ext.isIE ? (this.jd(!0).detachEvent("ondrop", this.No), this.jd(!0).detachEvent("onpaste", this.Oo)) : (this.jd(!0).removeEventListener("drop", this.No, !1), this.jd(!0).removeEventListener("paste", this.Oo, !1));
  },
  destroy: function () {
    this.eb();
    this.un("afterrender", this.na, this);
    this.callParent(arguments);
  },
  No: function (c) {
    c.preventDefault();
    return !1;
  },
  Oo: function (c) {
    this.jd().focus();
    this.lna(c);
  },
  jd: function (c) {
    return this.el.child("#chat-text", c || !1);
  },
  getSelection: function () {
    var c;
    window.getSelection ? c = window.getSelection() : document.selection && (c = document.selection.createRange());
    return c;
  },
  Y3: function (c) {
    if (c.getRangeAt) {
      return c.getRangeAt(0);
    } else {
      var f = document.createRange();
      f.setStart(c.anchorNode, c.anchorOffset);
      f.setEnd(c.focusNode, c.focusOffset);
      return f;
    }
  },
  O2: function (c) {
    this.roa(c);
  },
  setText: function (c) {
    this.O2(c);
  },
  lna: function (c) {
    c.preventDefault();
    this.O2(this.rla(c));
  },
  rla: function (c) {
    var c = c.clipboardData || window.clipboardData || document.dataTransfer,
        h = "";

    if (!c) {
      return h;
    }

    if (c.getData) {
      var f = c.getData("Text");
      f && f.length > 0 && (h = f);
    }

    if (c.types) {
      for (f = 0; f < c.types.length; f++) {
        c.types[f] === "text/plain" && (h = c.getData("text/plain"));
      }
    }

    return h;
  },
  Vz: function (c, n) {
    this.jd().focus();
    var l = document.createElement("div"),
        f = document.createElement("img");
    f.src = C.ca.Da.yh("/images/emoticons/" + c + ".gif");
    f.className = "emoticon";
    f.name = n;
    l.appendChild(f);
    this.ooa(l.innerHTML);
  },
  getText: function () {
    var c = this.jd(!0).innerHTML,
        c = E.ca.DC.unwrap(c, ["div", "p"]),
        c = E.ca.hr.Cra(c),
        c = E.ca.hr.uua(c);
    return c = E.ca.hr.tua(c);
  },
  Jga: function () {
    this.jd(!0).innerHTML = "";
    this.jd(!0).focus();
  },
  roa: function (c) {
    document.queryCommandSupported("insertText") ? document.execCommand("insertText", !1, c) : this.pZ(c);
  },
  ooa: function (c) {
    document.queryCommandSupported("insertHTML") ? document.execCommand("insertHTML", !1, c) : this.pZ(c, !0);
  },
  pZ: function (c, q) {
    var q = q || !1,
        p = this.getSelection(),
        o = this.Y3(p);
    o.deleteContents();
    var f = document.createElement("div");
    q ? f.innerHTML = c : f.textContent = c;
    var u = document.createDocumentFragment(),
        f = u.appendChild(f.firstChild);
    o.insertNode(u);
    f && (o = o.cloneRange(), o.setStartAfter(f), o.collapse(!0), p.removeAllRanges(), p.addRange(o));
  },
  focus: function () {
    this.jd().focus();
  },
  Tr: function (c) {
    if (c.getKey() == 18) {
      this.sH = !1;
    }

    if (c.getKey() == 17) {
      this.aJ = !1;
    }
  },
  N0: function (c) {
    if (c.getKey() == 18) {
      this.sH = !0;
    }

    if (c.getKey() == 17) {
      this.aJ = !0;
    }

    var f = c.getKey();
    !this.sH && this.aJ && (f === c.B || f === c.I || f === c.U) && c.preventDefault();
  }
});