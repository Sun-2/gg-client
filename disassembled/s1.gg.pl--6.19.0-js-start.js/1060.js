Ext.define(E.core.xi.vB, {
  documentElement: m,
  connected: !1,
  Lm: m,
  port: m,
  BM: m,
  constructor: function (c) {
    c = c || {};
    this.documentElement = c.documentElement || document.documentElement;
    this.fb();
  },
  fb: function () {
    this.documentElement.on("bramboConnect", this.nha.bind(this));
    this.documentElement.on("ffBramboConnectNew", this.Rha.bind(this));
    this.documentElement.on("ffBramboConnect", this.Sha.bind(this));
  },
  aB: {
    askForCredentials: function (c) {
      return new Promise(function (f, b) {
        C.k().ta.oma(c.userAgent, {
          fn: function (e) {
            f({
              token: e,
              login: "" + C.k().fa.get("uin")
            });
          }
        }, {
          fn: function () {
            b({
              apiError: !0
            });
          }
        });
      });
    }
  },
  nha: function () {
    if (!this.connected) {
      this.port = chrome.runtime.connect(C.k().PZ), this.connected = !0, this.port.onMessage.addListener(function (c) {
        this.Lm && this.Lm(c);
      }.bind(this)), this.port.onDisconnect.addListener(function () {
        this.connected = !1;
      }.bind(this)), this.BM = new JsonRpc({
        transport: {
          setReceiverMethod: v("Lm").bind(this),
          send: this.port.postMessage.bind(this.port)
        },
        apiSet: this.aB
      });
    }
  },
  Vka: function (c) {
    c = new CustomEvent("ffBramboFromPageMessage", {
      detail: c
    });
    document.documentElement.dispatchEvent(c);
  },
  hna: function (c) {
    c.detail && this.Lm(c.detail);
  },
  Rha: function () {
    if (!this.connected) {
      document.documentElement.addEventListener("ffBramboFromCSMessage", this.hna.bind(this), !1), this.connected = !0, this.BM = new JsonRpc({
        transport: {
          setReceiverMethod: v("Lm").bind(this),
          send: this.Vka.bind(this)
        },
        apiSet: this.aB
      }), setTimeout(function () {
        var c = new Event("ffBramboConnected");
        document.documentElement.dispatchEvent(c);
      }, 1);
    }
  },
  Wka: function (c) {
    var h = new Event("ffBramboUp"),
        f = document.documentElement.getAttribute("bramboUpBuffer");
    f ? f += "\n" : f = "";
    f += c;
    document.documentElement.setAttribute("bramboUpBuffer", f);
    document.documentElement.dispatchEvent(h);
  },
  ina: function () {
    var c = document.documentElement.getAttribute("bramboDownBuffer") || "";
    document.documentElement.removeAttribute("bramboDownBuffer");

    for (var c = c.split("\n"), h = 0; h < c.length; h++) {
      var f = c[h].trim();
      f && this.Lm(f);
    }
  },
  Sha: function () {
    if (!this.connected) {
      document.documentElement.addEventListener("ffBramboDown", this.ina.bind(this), !1);
      this.connected = !0;
      this.BM = new JsonRpc({
        transport: {
          setReceiverMethod: v("Lm").bind(this),
          send: this.Wka.bind(this)
        },
        apiSet: this.aB
      });
      var c = new Event("ffBramboConnected");
      document.documentElement.dispatchEvent(c);
    }
  }
});