Ext.define(E.core.log.EE, {
  address: m,
  data: m,
  forms: {},
  constructor: function (c) {
    c.address || j(Error("Address required!"));
    c.u2 || j(Error("CSRF token required!"));
    this.address = c.address;
    this.data = {};
    this.token = c.u2;
  },
  ija: function (c) {
    var n = Ext.get(document.createElement("form"));
    n.set({
      action: this.address,
      target: c,
      method: "post"
    });
    var l = Ext.get(document.createElement("input"));
    l.set({
      type: "hidden",
      name: "logData",
      value: this.data
    });
    var f = Ext.get(document.createElement("input"));
    f.set({
      type: "hidden",
      name: "csrf_token",
      value: this.token
    });
    n.appendChild(l);
    n.appendChild(f);
    Ext.getBody().appendChild(n);
    this.forms[c] = n;
  },
  jja: function (c) {
    var h = Ext.get(document.createElement("iframe"));
    h.set({
      name: c,
      width: 1,
      height: 1
    });
    Ext.getBody().appendChild(h);
    var f = this;

    h.dom.onerror = function () {
      h.destroy();
      f.forms[c].destroy();
    };

    h.dom.onload = function () {
      h.destroy();
      f.forms[c].destroy();
    };
  },
  zka: function () {
    this.data = JSON.stringify(this.data);
    this.data = new gg.aa.hj().encode(this.data);
  },
  getName: function () {
    return "logData-" + new Date().getTime();
  },
  send: function (c) {
    if (Ext.isObject(c)) {
      this.data = c;
    }

    c = this.getName();
    this.jja(c);
    this.zka();
    this.ija(c);
    this.forms[c].dom.submit();
  }
});