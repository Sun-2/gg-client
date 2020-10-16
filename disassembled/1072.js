function Z(c, q) {
  function p() {
    var g = arguments,
        h = this;
    this._$events = {};
    W(g.callee.definition, function (b) {
      g.callee.definition[b] instanceof Function && b.match(/^on[A-Z]+/) ? function (e, l) {
        h[l] = function () {
          if (e.apply(this, arguments) !== !1 && h._$events[l]) {
            for (var y = [this], w = 0; w < arguments.length; w++) {
              y.push(arguments[w]);
            }

            try {
              for (w = 0; w < h._$events[l].length; w++) {
                if (h._$events[l][w].apply(this, y) === !1) {
                  break;
                }
              }
            } catch (z) {}
          }
        };

        h[l].inherited = e.inherited;

        h[l].bind = function (n) {
          h._$events[l] ? h._$events[l].push(n) : h._$events[l] = [n];
        };

        h[l].unbind = function (n) {
          var w = [];
          W(h._$events[l], function (y) {
            n !== h._$events[l][y] && w.push(h._$events[l][y]);
          });
          h._$events[l] = w;
        };
      }(g.callee.definition[b], b) : h[b] = f(g.callee.definition[b]);
    });
    this.construct && !this.construct.disabled && this.construct.apply(this, arguments);
  }

  function o(e) {
    this.message = e;
    this.toString = x("message");
  }

  function f(h) {
    if (h instanceof Function) {
      return h;
    }

    if (h instanceof Object || h instanceof Array) {
      var n = h instanceof Array ? [] : {},
          l;

      for (l in h) {
        h.hasOwnProperty(l) && (n[l] = f(h[l]));
      }

      return n;
    }

    return h;
  }

  if (q) {
    c || j(new o("Superclass is not defined"));
  } else {
    var u = function () {
      var e = this;
      W(this._$events, function (b) {
        delete e._$events[b];
      });
      e._$events = {};
    },
        q = c,
        c = t();

    c.definition = {
      destroy: u
    };
    c.prototype.destroy = u;
  }

  if (c) {
    superPrototype = c.prototype;

    if (c.definition.construct) {
      c.definition.construct.disabled = !0;
    }

    p.prototype = new c();

    if (c.definition.construct) {
      c.definition.construct.disabled = !1;
    }

    W(superPrototype, function (e) {
      q[e] === k ? q[e] = superPrototype[e] : superPrototype[e] instanceof Function ? q[e] instanceof Function ? q[e].inherited = superPrototype[e] : j(new o(e + ": types mismatch - function expected, " + typeof q[e] + "given")) : typeof q[e] !== typeof superPrototype[e] && j(new o(e + ": types mismatch - " + typeof superPrototype[e] + " expected, " + typeof q[e] + " given"));
    });
  }

  W(q, function (e) {
    if (q.hasOwnProperty(e) && e != "inherited" && !(q[e] instanceof Function) && e.substr(0, 1) != "_") {
      var h = e.substr(0, 1).toUpperCase() + e.substr(1);

      (function (w, B, z) {
        function y() {
          return this[w];
        }

        function D(b) {
          this[w] = b;
        }

        if (q[B] === k) {
          q[B] = D;
        } else {
          if (q[B].inherited === k) {
            q[B].inherited = D;
          }
        }

        if (q[z] === k) {
          q[z] = y;
        } else {
          if (q[z].inherited === k) {
            q[z].inherited = y;
          }
        }
      })(e, "set" + h, "get" + h);
    }
  });

  q.inherited = function () {
    var e = arguments;

    if (e.callee.caller.inherited) {
      return e.callee.caller.inherited.apply(this, arguments);
    }
  };

  W(q, function (e) {
    p.prototype[e] = f(q[e]);
  });
  p.definition = q;
  return p;
}