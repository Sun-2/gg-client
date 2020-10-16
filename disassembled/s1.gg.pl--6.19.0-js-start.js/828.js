Ext.define(E.stores.xG, {
  extend: C.stores.Store,
  model: E.models.Ya,
  Pd: m,
  constructor: function (c) {
    c = c || {};
    c.id = "SelectedContactsStore";
    this.callParent([c]);
  },
  removeAll: function () {
    this.callParent();
    this.Pd = m;
  },
  add: function (c, f) {
    c && !f && (Ext.isArray(c) || (c = [c]), c = this.Nka(c));
    this.callParent([c]);
  },
  remove: function (c, f) {
    c && !f && (Ext.isArray(c) || (c = [c]), c = this.d3(c));
    this.callParent([c]);
  },
  removeAt: function (c) {
    if (c) {
      var f = [this.getAt(c)],
          f = this.d3(f);

      if (f.length === 0) {
        return;
      }
    }

    this.callParent([c]);
  },
  setLocked: function (c, f) {
    f ? (this.Pd = this.Pd || {}, this.Pd[f] = c) : (this.Pd = this.Pd || {}, this.Pd.to_add = c, this.Pd.to_remove = c);
  },
  lEa: function (c) {
    this.setLocked(c, "to_add");
  },
  mEa: function (c) {
    this.setLocked(c, "to_remove");
  },
  SEa: function () {
    this.Pd = {};
    this.Pd.to_add = [];
    this.Pd.to_remove = [];
  },
  Nka: function (c) {
    return this.c3(c, "to_add");
  },
  d3: function (c) {
    return this.c3(c, "to_remove");
  },
  c3: function (c, h) {
    if (!this.Pd || !this.Pd[h] || !Ext.isArray(this.Pd[h])) {
      return c;
    }

    for (var f = c.length - 1; f >= 0; f--) {
      this.Pd[h].indexOf(c[f].get("uin")) !== -1 && c.splice(f, 1);
    }

    return c;
  },
  g5: function (c, f) {
    if (!this.Pd || !this.Pd[f]) {
      return !1;
    }

    if (this.Pd[f].indexOf(c.get("uin")) === -1) {
      return !1;
    }

    return !0;
  },
  Doa: function (c) {
    return this.g5(c, "to_add");
  },
  YK: function (c) {
    return this.g5(c, "to_remove");
  },
  Sza: function () {
    var c = 0;
    this.data.each(function (b) {
      this.YK(b) && c++;
    }, this);
    return c;
  }
});