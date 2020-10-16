sunrise.extend(gg.core.Cq.prototype, {
  li: m,
  Ka: function (c, f) {
    return gg.core.Wk.Ka(c, f, this.li);
  },
  Na: function (c) {
    return gg.core.Wk.Na(c, this.li);
  },
  trigger: function (c) {
    for (var h = [c], f = 1; f < arguments.length; h.push(arguments[f++])) {}

    return gg.core.Wk.trigger(c, h);
  },
  ignore: function (c, f) {
    return gg.core.Wk.ignore(c, typeof f != "undefined" ? f : !1);
  },
  mn: function (c) {
    return gg.core.Wk.mn(c);
  }
});