(function () {
  function c(e, o) {
    var n = /click|dblclick|doubleclick|mouseenter|mouseleave|mousemove|mousedown|mouseup|mousewheel|keydown|keyup|keypress|scroll/,
        f = o.substr(2).toLowerCase();
    f.match(/scrolledbottom|scrolledtop|scrolledleft|scrolledright|scroll/) ? f = "scroll" : f == "doubleclick" && (f = "dblclick");
    !e._component.boundEvents[f] && f.match(n) && (e._component.boundEvents[f] = !0, f == "scroll" ? e.getElement().addEvent("scroll", function () {
      var b = {
        scrollTop: this.getScrollTop(),
        scrollHeight: this.getScrollHeight(),
        offsetHeight: this.offsetHeight,
        scrollLeft: this.getScrollLeft(),
        scrollWidth: this.getScrollWidth(),
        offsetWidth: this.offsetWidth,
        topReached: this.getScrollTop() === 0,
        bottomReached: this.getScrollTop() === this.getScrollHeight() - this.offsetHeight,
        leftReached: this.getScrollLeft() === 0,
        rightReached: this.getScrollLeft() === this.getScrollWidth() - this.offsetWidth
      };
      e.onScroll(b);

      if (b.bottomReached) {
        e.onScrolledBottom(b);
      }

      if (b.topReached) {
        e.onScrolledTop(b);
      }

      if (b.leftReached) {
        e.onScrolledLeft(b);
      }

      if (b.rightReached) {
        e.onScrolledRight(b);
      }
    }) : e.getElement().addEvent(f, function (b) {
      e[o](b);
    }));
  }

  X = Z({
    _component: {
      element: m,
      timeouts: [],
      intervals: [],
      boundEvents: {}
    },
    construct: function (l, f) {
      this._component.element = new Element(l, f);
      this._component.element._component = this;
      this.getElement().addClass("com");

      for (var b in this) {
        this[b] instanceof Function && b.substr(0, 2) == "on" && !this[b].toString().match(/^\s*function\s*\([^\)]*\)\s*\{\s*\}\s*$/) && c(this, b);
      }
    },
    configure: function (e) {
      if (e) {
        e.childs && this.setChilds(e.childs);

        for (var l in e) {
          if (e.hasOwnProperty(l) && l != "childs") {
            if (l.substr(0, 2) == "on" && e[l] instanceof Function) {
              this[l] instanceof Function ? (this[l].bind(e[l]), (l == "onClick" || l == "onDoubleClick") && !this.getElement().hasClass("clickable") && this.getElement().addClass("clickable")) : j("Component does not support event: " + l);
            } else {
              var f = "set" + l.substr(0, 1).toUpperCase() + l.substr(1);

              if (this[f] instanceof Function) {
                this[f](e[l], e);
              } else {
                this[l] = e[l];
              }
            }
          }
        }
      }
    },
    destroy: function () {
      if (!this._component.destroyed) {
        this.onDestroy();
        this._component.destroyed = !0;
        this.clearIntervals();
        this.clearTimeouts();

        for (var e in this) {
          !(e instanceof Function) && e != "_component" && delete this[e];
        }

        for (var l in this._component.boundEvents) {
          delete this._component.boundEvents[l];
        }

        this._component.boundEvents = {};
        e = this.getChilds();

        for (l in e) {
          (e[l] instanceof X || e[l] instanceof Element) && e[l].destroy(), delete e[l];
        }

        this.getElement().destroy();

        try {
          delete this._component.element._component, delete this._component.element;
        } catch (f) {}
      }
    },
    empty: function () {
      var e = this.getChilds(),
          f;

      for (f in e) {
        e[f] instanceof X && (e[f].destroy(), delete e[f]);
      }

      this.getElement().empty();
    },
    getDestroyed: function () {
      return this._component.destroyed || !1;
    },
    getElement: function () {
      if (!this._component.element) {
        return new Element("fake").dispose();
      }

      return this._component.element;
    },
    getParent: function () {
      return this.getElement().getParent()._component || m;
    },
    setParent: function (e) {
      e instanceof X && e.getElement().grab(this.getElement());
    },
    setChilds: function (e) {
      for (var f in e) {
        (e[f] instanceof X || e[f] instanceof Element || e[f].nodeType == 1) && this.addChild(e[f]);
      }
    },
    getChilds: function (e) {
      var o = this.getElement().getChildren(),
          n = [],
          f;

      for (f in o) {
        o[f]._component && o[f]._component instanceof X ? n.push(o[f]._component) : e && (o[f] instanceof Element || o[f].nodeType && o[f].nodeType == 1) && n.push(o[f]);
      }

      return n;
    },
    addChild: function (e) {
      e instanceof X ? this.getElement().grab(e.getElement()) : (e instanceof Element || e.nodeType && e.nodeType == 1) && this.getElement().grab(e);
    },
    render: function () {
      var e = this.getChilds(),
          f;

      for (f in e) {
        e[f] instanceof X && e[f].render();
      }

      return this.getElement();
    },
    enable: function () {
      if (this.getDisabled()) {
        this.onEnable();
        this.getElement().removeClass("disabled");
        var e = this.getChilds(),
            f;

        for (f in e) {
          e[f] instanceof X && e[f].setEnabled(!0);
        }
      }
    },
    disable: function () {
      if (!this.getDisabled()) {
        this.onDisable();
        this.getElement().addClass("disabled");
        var e = this.getChilds(),
            f;

        for (f in e) {
          e[f] instanceof X && e[f].setDisabled(!0);
        }
      }
    },
    getEnabled: function () {
      return !this.getElement().hasClass("disabled");
    },
    getDisabled: function () {
      return this.getElement().hasClass("disabled");
    },
    setEnabled: function (e) {
      this.setDisabled(!e);
    },
    setDisabled: function (e) {
      e ? this.disable() : this.enable();
    },
    getLocked: function () {
      return this.getElement().hasClass("locked");
    },
    lock: function () {
      if (!this.getLocked()) {
        this.getElement().addClass("locked");
        var e = this.getChilds(),
            f;

        for (f in e) {
          e[f] instanceof X && e[f].lock();
        }
      }
    },
    unlock: function () {
      if (this.getLocked()) {
        this.getElement().removeClass("locked");
        var e = this.getChilds(),
            f;

        for (f in e) {
          e[f] instanceof X && e[f].unlock();
        }
      }
    },
    setLocked: function (e) {
      e ? this.lock() : this.unlock();
    },
    setText: function (e) {
      this.getElement().set("text", e);
    },
    getText: function () {
      this.getElement().get("text");
    },
    setCssClass: function (e) {
      this.getElement().addClass(e);
    },
    setWidth: function (e) {
      this.getElement().setStyles({
        width: e
      });
    },
    getWidth: function () {
      return parseInt(this.getElement().getStyle("width"), 10);
    },
    setHeight: function (e) {
      this.getElement().setStyles({
        height: e
      });
    },
    getHeight: function () {
      return parseInt(this.getElement().getStyle("height"), 10);
    },
    setVisible: function (e) {
      e ? this.show() : this.hide();
    },
    getVisible: function () {
      return !this.getElement().hasClass("hidden");
    },
    hide: function () {
      this.getElement().hasClass("hidden") || (this.getElement().addClass("hidden"), this.onHide());
    },
    show: function () {
      this.getElement().hasClass("hidden") && (this.getElement().removeClass("hidden"), this.onShow());
    },
    setInterval: function (e, o) {
      var n = this,
          f = setInterval(function () {
        e.call(n, f);
      }, o);

      this._component.intervals.push(f);

      return f;
    },
    setTimeout: function (e, o) {
      var n = this,
          f = setTimeout(function () {
        e.call(n, f);
      }, o);

      this._component.timeouts.push(f);

      return f;
    },
    clearIntervals: function () {
      for (var e in this._component.intervals) {
        this._component.intervals.hasOwnProperty(e) && typeof this._component.intervals[e] == "number" && clearInterval(this._component.intervals[e]);
      }

      this._component.intervals = [];
    },
    clearTimeouts: function () {
      for (var e in this._component.timeouts) {
        this._component.timeouts.hasOwnProperty(e) && typeof this._component.timeouts[e] == "number" && clearTimeout(this._component.timeouts[e]);
      }

      this._component.timeouts = [];
    },
    onClick: t(),
    onDoubleClick: t(),
    onMouseEnter: t(),
    onMouseLeave: t(),
    onMouseMove: t(),
    onMouseDown: t(),
    onMouseUp: t(),
    onMouseWheel: t(),
    onKeyDown: t(),
    onKeyUp: t(),
    onKeyPress: t(),
    onScroll: t(),
    onScrolledBottom: t(),
    onScrolledTop: t(),
    onScrolledLeft: t(),
    onScrolledRight: t(),
    onShow: t(),
    onHide: t(),
    onDestroy: t(),
    onEnable: t(),
    onDisable: t()
  });
})();