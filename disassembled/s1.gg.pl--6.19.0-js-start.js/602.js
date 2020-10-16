sunrise.extend(gg.aa.core.he, {
  _data: {},
  set: function (c) {
    this._data[c] = !0;
  },
  EA: function (c) {
    this._data[c] = !1;
  },
  fk: function (c) {
    if (typeof this._data[c] == "undefined") {
      return !1;
    }

    return this._data[c];
  }
});