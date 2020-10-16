sunrise.extend(gg.aa.protocol.ba.rj, {
  timeout: 15000,
  BN: m,
  IZ: new gg.aa.hj(),
  Wb: m,
  name: m,
  send: function (c) {
    this.Wb.send(c);
  },
  connect: function (c) {
    c = "wss://" + c.server;
    this.Wb && this.Wb.close();
    this.Wb = new gg.core.ZY(c);
    var f = this;
    this.sx();
    this.BN = setTimeout(function () {
      f.disconnect();
      gg.aa.protocol.ba.ja.Qa.trigger(R.wv, {
        name: gg.aa.protocol.ba.rj.getName(),
        reason: "timeout"
      });
    }, this.timeout);
    this.Wb || j("no ws conn");
    this.name = "WebSocket" + (window.WEB_SOCKET_FORCE_FLASH ? "Flash" : "");

    this.Wb.onmessage = function (e) {
      gg.aa.protocol.ba.QF.Ps(e).forEach(function (g) {
        gg.aa.protocol.ba.EventManager.Ps(g);
      });
    };

    this.Wb.onopen = function () {
      f.sx();
    };

    this.Wb.onclose = function () {
      f.sx();
      gg.aa.Eg.If() ? gg.aa.protocol.ba.ja.Qa.trigger(R.MD) : gg.aa.protocol.ba.ja.Qa.trigger(R.wv, {
        name: gg.aa.protocol.ba.rj.getName(),
        reason: "close unexpectedly"
      });
    };

    this.Wb.onerror = function () {
      f.sx();
    };

    window.webSocketError = t();
  },
  disconnect: function () {
    this.Wb.close();
    this.Wb = m;
  },
  getName: x("name"),
  sx: function () {
    this.BN && clearTimeout(this.BN);
  }
});