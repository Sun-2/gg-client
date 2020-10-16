sunrise.extend(gg.core.ZY.prototype, {
  T5: {
    Chrome: 16,
    Firefox: 11,
    IE: 10,
    Safari: 6,
    Opera: 12.1
  },
  initialize: function (c) {
    var n = this,
        l = gg.core.zl.y9.split(".")[0] | 0;

    if (typeof this.T5[gg.core.zl.name] === "undefined" || l < this.T5[gg.core.zl.name]) {
      window.WEB_SOCKET_SWF_LOCATION = "/" + _VER + "/images/newws.swf?", window.WEB_SOCKET_FORCE_FLASH = !0, swfobject.getFlashPlayerVersion().major < 10 && j("no flash plugin for ws-flash"), initializeFlashSockets();
    }

    try {
      window.WEB_SOCKET_FORCE_FLASH ? (c += "/base64", this.Wb = new window.WebSocket(c)) : (c += "/binary", this.Wb = new (window.MozWebSocket || window.WebSocket)(c), this.Wb.binaryType = "arraybuffer");
    } catch (f) {
      j(f);
    }

    this.Wb.onerror = function () {
      n.onerror.apply(n.Wb, arguments);
    };

    this.Wb.onopen = function () {
      n.onopen.apply(n.Wb, arguments);
    };

    this.Wb.onclose = function () {
      n.onclose.apply(n.Wb, arguments);
    };

    this.Wb.onmessage = function (e) {
      var p;

      try {
        if (window.WEB_SOCKET_FORCE_FLASH) {
          p = gg.aa.protocol.ba.rj.IZ.decode(e.data);
        } else {
          var o = new Uint8Array(e.data);
          p = Array(o.length);

          for (e = 0; e < o.length; e++) {
            p[e] = String.fromCharCode(o[e]);
          }

          p = p.join("");
        }

        return n.onmessage.apply(n.Wb, [p]);
      } catch (u) {
        j(u);
      }
    };
  },
  send: function (c) {
    try {
      if (window.WEB_SOCKET_FORCE_FLASH) {
        this.Wb.send(gg.aa.protocol.ba.rj.IZ.encode(c));
      } else {
        for (var n = new Uint8Array(c.length), l = 0; l < c.length; l++) {
          n[l] = c.charCodeAt(l);
        }

        this.Wb.send(n.buffer);
      }

      gg.aa.core.he.EA("comm.sending");
    } catch (f) {}
  },
  close: function () {
    try {
      this.Wb.onerror = this.Wb.onmessage = this.Wb.onopen = this.Wb.onclose = t(), this.Wb.close(), this.Wb = m;
    } catch (c) {}
  },
  onerror: t(),
  onmessage: t(),
  onopen: t(),
  onclose: t()
});