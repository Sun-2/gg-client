Ext.define(E.stores.Qc, {
  id: m,
  statics: {
    Pq: "LAST_CHATS",
    DB: "CLEAN_LOGOUT",
    PW: "START_AD_TIME",
    Hv: "LAST_EMOTICONS",
    rU: "REMAINING_COUNTER_SPIN"
  },
  constructor: function (c) {
    Ext.apply(this, c);
    this.storage = window.localStorage;
    this.id || j(Error("LocalPreferencesStore requires id option to be set"));
  },
  set: function (c, f) {
    return this.storage && this.storage.setItem(this.TJ(c), Ext.encode(f));
  },
  remove: function (c) {
    return this.storage && this.storage.removeItem(this.TJ(c));
  },
  get: function (c, n) {
    if (!this.storage) {
      return n;
    }

    try {
      var l = this.storage.getItem(this.TJ(c));
      return typeof l === "undefined" || l === m ? n : Ext.decode(l);
    } catch (f) {
      return n;
    }
  },
  TJ: function (c) {
    return this.id + c;
  }
});