Ext.define(E.api.qu, {
  callbacks: m,
  cache: m,
  timeouts: m,
  yt: m,
  constructor: function () {
    this.callbacks = {
      success: {},
      failure: {}
    };
    this.cache = {};
    this.timeouts = {};
    this.yt = {};
  },
  defaults: {
    oI: 0,
    OH: 0
  },
  uh: function (c) {
    try {
      return Ext.decode(c);
    } catch (f) {}

    return m;
  },
  qk: function (c) {
    var f = {
      fn: t(),
      scope: this
    };
    typeof c === "function" ? f.fn = c : (f.fn = c && c.fn || f.fn, f.scope = c && c.scope || f.scope);
    return f;
  },
  qd: function (c, n) {
    var l = this.qk(n.success || n.success),
        f = this.qk(n.failure || n.failure);
    this.os({
      url: c,
      method: "POST",
      params: n.data || n.data,
      success: function (g, h) {
        l.fn.call(l.scope, this.uh(g.responseText), g, h);
      },
      failure: function (g, h) {
        f.fn.call(f.scope, this.uh(g.responseText), g, h);
      }
    });
  },
  DELETE: function (c, n) {
    var l = this.qk(n.success || n.success),
        f = this.qk(n.failure || n.failure);
    this.os({
      url: c,
      method: "POST",
      params: Ext.Object.merge(n.data || n.data || {}, {
        _method: "DELETE"
      }),
      success: function (g, h) {
        l.fn.call(l.scope, this.uh(g.responseText), g, h);
      },
      failure: function (g, h) {
        f.fn.call(f.scope, this.uh(g.responseText), g, h);
      }
    });
  },
  oca: function (c, n) {
    var l = this.qk(n.success || n.success),
        f = this.qk(n.failure || n.failure);
    this.os({
      url: c,
      method: "POST",
      params: Ext.Object.merge(n.data || n.data || {}, {
        _method: "PUT"
      }),
      success: function (g, h) {
        l.fn.call(l.scope, this.uh(g.responseText), g, h);
      },
      failure: function (g, h) {
        f.fn.call(f.scope, this.uh(g.responseText), g, h);
      }
    });
  },
  kh: function (c, q) {
    var p = this.qk(q.success || q.success),
        o = this.qk(q.failure || q.failure),
        f = q.oI || q.collectInterval || this.defaults.oI,
        u = q.OH || q.cacheTTL || this.defaults.OH;
    this.cache[c] && new Date().getTime() <= this.cache[c].expires ? p.fn.call(p.scope, this.uh(this.cache[c].data[0].responseText), this.cache[c].data[0], this.cache[c].data[1]) : f ? (this.yt[c] || (this.timeouts[c] && clearTimeout(this.timeouts[c]), this.timeouts[c] = setTimeout(function () {
      this.os({
        url: c,
        method: "GET",
        success: function (h, b) {
          this.yt[c] = !0;
          u && (this.cache[c] = {
            data: [h, b],
            expires: new Date().getTime() + u
          });
          this.A7(this.callbacks.success, c, h, b);
        },
        failure: function (h, b) {
          this.yt[c] = !0;
          this.A7(this.callbacks.failure, c, h, b);
        }
      });
    }.bind(this), f)), typeof this.callbacks.success[c] === "undefined" ? this.callbacks.success[c] = [p] : this.callbacks.success[c].push(p), typeof this.callbacks.failure[c] === "undefined" ? this.callbacks.failure[c] = [o] : this.callbacks.failure[c].push(o)) : this.os({
      url: c,
      method: "GET",
      success: function (g, b) {
        u && (this.cache[c] = {
          data: [g.responseText, b],
          expires: new Date().getTime() + u
        });
        p.fn.call(p.scope, this.uh(g.responseText), g, b);
      },
      failure: function (g, h) {
        o.fn.call(o.scope, this.uh(g.responseText), g, h);
      }
    });
  },
  A7: function (c, z, u, o) {
    for (var f = this.uh(u.responseText), B = 0; B < c[z].length; B++) {
      try {
        var y = c[z][B];
        y.fn.call(y.scope, f, u, o);
      } catch (w) {}
    }

    delete this.callbacks.success[z];
    delete this.callbacks.failure[z];
    delete this.yt[z];
  },
  os: function (c) {
    c.scope = this;
    Ext.Ajax.request(c);
  }
});