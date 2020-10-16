sunrise.extend(gg.aa.core.ag, {
  _data: {},
  P: function (c) {
    typeof gg.aa.core.ag._data[c] == "undefined" && gg.aa.core.ag.init(c, 0);
    return gg.aa.core.ag._data[c] = gg.aa.core.ag._data[c] > 0 ? gg.aa.core.ag._data[c] - 1 : 0;
  },
  V: function (c) {
    typeof gg.aa.core.ag._data[c] == "undefined" && gg.aa.core.ag.init(c, 0);
    return gg.aa.core.ag._data[c] += 1;
  },
  init: function (c, f) {
    gg.aa.core.ag._data[c] = f;
  }
});