function initializeFlashSockets() {
  if (!window.WEB_SOCKET_FORCE_FLASH) {
    if (window.WebSocket) {
      return;
    } else {
      if (window.MozWebSocket) {
        window.WebSocket = MozWebSocket;
        return;
      }
    }
  }

  var c;
  c = window.WEB_SOCKET_LOGGER ? WEB_SOCKET_LOGGER : window.console && window.console.log && window.console.error ? window.console : {
    log: t(),
    error: t()
  };
  swfobject.getFlashPlayerVersion().major < 10 ? c.error("Flash Player >= 10.0.0 is required.") : (location.protocol == "file:" && c.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."), window.WebSocket = function (e, q, o, f, w) {
    var u = this;
    u.__id = WebSocket.__nextId++;
    WebSocket.__instances[u.__id] = u;
    u.readyState = WebSocket.CONNECTING;
    u.bufferedAmount = 0;
    u.__events = {};
    q ? typeof q == "string" && (q = [q]) : q = [];
    u.__createTask = setTimeout(function () {
      WebSocket.__addTask(function () {
        u.__createTask = m;

        WebSocket.__flash.create(u.__id, e, q, o || m, f || 0, w || m);
      });
    }, 0);
  }, WebSocket.prototype.send = function (e) {
    this.readyState == WebSocket.CONNECTING && j("INVALID_STATE_ERR: Web Socket connection has not been established");
    e = WebSocket.__flash.send(this.__id, encodeURIComponent(e));
    return e < 0 ? !0 : (this.bufferedAmount += e, !1);
  }, WebSocket.prototype.close = function () {
    if (this.__createTask) {
      clearTimeout(this.__createTask), this.__createTask = m, this.readyState = WebSocket.CLOSED;
    } else {
      if (!(this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING)) {
        this.readyState = WebSocket.CLOSING, WebSocket.__flash.close(this.__id);
      }
    }
  }, WebSocket.prototype.addEventListener = function (e, f) {
    e in this.__events || (this.__events[e] = []);

    this.__events[e].push(f);
  }, WebSocket.prototype.removeEventListener = function (e, o) {
    if (e in this.__events) {
      for (var n = this.__events[e], f = n.length - 1; f >= 0; --f) {
        if (n[f] === o) {
          n.splice(f, 1);
          break;
        }
      }
    }
  }, WebSocket.prototype.dispatchEvent = function (e) {
    for (var l = this.__events[e.type] || [], f = 0; f < l.length; ++f) {
      l[f](e);
    }

    (l = this["on" + e.type]) && l.apply(this, [e]);
  }, WebSocket.prototype.__handleEvent = function (e) {
    if ("readyState" in e) {
      this.readyState = e.readyState;
    }

    if ("protocol" in e) {
      this.protocol = e.protocol;
    }

    var f;
    e.type == "open" || e.type == "error" ? f = this.__createSimpleEvent(e.type) : e.type == "close" ? (f = this.__createSimpleEvent("close"), f.wasClean = e.wasClean ? !0 : !1, f.code = e.code, f.reason = e.reason) : e.type == "message" ? f = this.__createMessageEvent("message", decodeURIComponent(e.message)) : j("unknown event type: " + e.type);
    this.dispatchEvent(f);
  }, WebSocket.prototype.__createSimpleEvent = function (e) {
    if (document.createEvent && window.Event) {
      var f = document.createEvent("Event");
      f.initEvent(e, !1, !1);
      return f;
    } else {
      return {
        type: e,
        bubbles: !1,
        cancelable: !1
      };
    }
  }, WebSocket.prototype.__createMessageEvent = function (e, l) {
    if (document.createEvent && window.MessageEvent && !window.opera) {
      var f = document.createEvent("MessageEvent");
      f.initMessageEvent("message", !1, !1, l, m, m, window, m);
      return f;
    } else {
      return {
        type: e,
        data: l,
        bubbles: !1,
        cancelable: !1
      };
    }
  }, WebSocket.CONNECTING = 0, WebSocket.OPEN = 1, WebSocket.CLOSING = 2, WebSocket.CLOSED = 3, WebSocket.__initialized = !1, WebSocket.__flash = m, WebSocket.__instances = {}, WebSocket.__tasks = [], WebSocket.__nextId = 0, WebSocket.loadFlashPolicyFile = function (e) {
    WebSocket.__addTask(function () {
      WebSocket.__flash.loadManualPolicyFile(e);
    });
  }, WebSocket.__initialize = function () {
    if (!WebSocket.__initialized) {
      WebSocket.__initialized = !0;

      if (WebSocket.__swfLocation) {
        window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation;
      }

      if (window.WEB_SOCKET_SWF_LOCATION) {
        if (!window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR && !WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/) && WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/)) {
          var f = RegExp.$1;
          location.host != f && c.error("[WebSocket] You must host HTML and WebSocketMain.swf in the same host ('" + location.host + "' != '" + f + "'). See also 'How to host HTML file and SWF file in different domains' section in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;");
        }

        f = document.createElement("div");
        f.id = "webSocketContainer";
        f.style.position = "absolute";
        WebSocket.__isFlashLite() ? (f.style.left = "0px", f.style.top = "0px") : (f.style.left = "-100px", f.style.top = "-100px");
        var b = document.createElement("div");
        b.id = "webSocketFlash";
        f.appendChild(b);
        document.body.appendChild(f);
        swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", m, m, {
          hasPriority: !0,
          swliveconnect: !0,
          allowScriptAccess: "always"
        }, m, function (g) {
          g.success || c.error("[WebSocket] swfobject.embedSWF failed");
        });
      } else {
        c.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
      }
    }
  }, WebSocket.__onFlashInitialized = function () {
    setTimeout(function () {
      WebSocket.__flash = document.getElementById("webSocketFlash");

      WebSocket.__flash.setCallerUrl(location.href);

      WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);

      for (var e = 0; e < WebSocket.__tasks.length; ++e) {
        WebSocket.__tasks[e]();
      }

      WebSocket.__tasks = [];
    }, 0);
  }, WebSocket.__onFlashEvent = function () {
    setTimeout(function () {
      try {
        for (var l = WebSocket.__flash.receiveEvents(), f = 0; f < l.length; ++f) {
          WebSocket.__instances[l[f].webSocketId].__handleEvent(l[f]);
        }
      } catch (b) {
        c.error(b);
      }
    }, 0);
    return !0;
  }, WebSocket.__log = function (b) {
    c.log(decodeURIComponent(b));
  }, WebSocket.__error = function (b) {
    c.error(decodeURIComponent(b));
  }, WebSocket.__addTask = function (e) {
    WebSocket.__flash ? e() : WebSocket.__tasks.push(e);
  }, WebSocket.__isFlashLite = function () {
    if (!window.navigator || !window.navigator.mimeTypes) {
      return !1;
    }

    var e = window.navigator.mimeTypes["application/x-shockwave-flash"];

    if (!e || !e.enabledPlugin || !e.enabledPlugin.filename) {
      return !1;
    }

    return e.enabledPlugin.filename.match(/flashlite/i) ? !0 : !1;
  }, window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || swfobject.addDomLoadEvent(function () {
    WebSocket.__initialize();
  }));
}