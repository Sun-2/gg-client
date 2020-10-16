sunrise.extend(gg.aa.protocol.ba.Ta.prototype, {
  size: 0,
  type: 0,
  t7: function () {
    var c = this.eventName;

    switch (this.type) {
      case O.Sba:
        c += "/" + (typeof this.Yg == "undefined" ? this.uin : this.Yg.sort());
        break;

      case O.Waa:
      case O.qf:
        c += "/" + this.uin;
        break;

      default:
        c = c || R.saa;
    }

    return c;
  }
});