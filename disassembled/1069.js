function Element(c, h) {
  var f = document.createElement(c);

  f.setOptions = function (g) {
    for (var l in g) {
      g.hasOwnProperty(l) && this.set(l, g[l]);
    }
  };

  f.destroy = function () {
    for (var l = this.getElementsByTagName("*"), o = 0, n = l.length; o < n; o++) {
      l[o].parentNode.removeChild(l[o]);
    }

    this.parentNode && this.parentNode.removeChild(this);
  };

  f.set = function (l, o) {
    var n = "set" + l.substr(0, 1).toUpperCase() + l.substr(1);

    if (typeof this[n] === "function") {
      this[n](o);
    } else {
      this[l] = o;
    }
  };

  f.setClass = v("className");

  f.setStyles = function (g) {
    var l = this;
    W(g, function (e, n) {
      l.setStyle(e, n);
    });
  };

  f.getStyle = function (e) {
    return this.currentStyle ? this.currentStyle[e] : document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(this, "")[e] : this.style[e];
  };

  f.setStyle = function (l, z) {
    if (l == "opacity") {
      var o = document.documentElement,
          y = o.style.filter != m,
          w = /alpha\(opacity=([\d.]+)\)/i;
      (o.style.opacity != m ? function (g, p) {
        g.style.opacity = p;
      } : y ? function (p, u) {
        if (!p.currentStyle || !p.currentStyle.hasLayout) {
          p.style.zoom = 1;
        }

        u *= 100;
        var u = Math.round(u < 0 ? 0 : u > 100 ? 100 : u),
            u = u == 100 ? "" : "alpha(opacity=" + u + ")",
            q = p.style.filter || p.getStyle("filter") || "";
        p.style.filter = w.test(q) ? q.replace(w, u) : q + u;
      } : function (g, p) {
        g.style.visibility = p > 0 ? "visible" : "hidden";
      })(this, parseFloat(z));
    } else {
      try {
        this.style[l] = typeof z === "number" && l != "zIndex" ? z + "px" : z;
      } catch (n) {}
    }
  };

  window.setEvents = f.setEvents = function (g) {
    var l = this;
    W(g, function (e, n) {
      l.addEvent(e, n);
    });
  };

  window.addEvent = f.addEvent = function (l, o, n) {
    if (this.addEventListener) {
      return this.addEventListener(l, o, n || !1);
    } else {
      if (this.attachEvent) {
        return this.attachEvent("on" + l, o);
      }
    }
  };

  window.removeEvent = f.removeEvent = function (l, o, n) {
    if (this.removeEventListener) {
      return this.removeEventListener(l, o, n || !1);
    } else {
      if (this.detachEvent) {
        return this.detachEvent("on" + l, o);
      }
    }
  };

  f.getChildren = x("childNodes");

  f.getSize = function () {
    return {
      x: this.offsetWidth,
      y: this.offsetHeight
    };
  };

  f.setText = function (e) {
    this.innerHTML = e = ("" + e).replace("<", "&lt;", "g").replace(">", "&gt;", "g").replace("&", "&amp;", "g");
  };

  f.setHtml = v("innerHTML");

  f.addClass = function (e) {
    this.hasClass(e) || (this.className += " " + e);
  };

  f.removeClass = function (e) {
    this.className = this.className.replace(RegExp("(^|s+)" + e + "(s+|$)", "g"), "");
  };

  f.hasClass = function (e) {
    return this.className.match(RegExp("(^|s+)" + e + "(s+|$)", "g"), "") ? !0 : !1;
  };

  f.grab = function (e) {
    this.appendChild(e);
  };

  f.setOptions(h);
  return f;
}