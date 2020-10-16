Ext.define(E.ea.kR, {
  extend: E.ea.pf,
  name: "EventsRelayer",
  eventName: "TRIGGER_EVENT",
  events: [],
  iJ: m,
  constructor: function (c) {
    this.callParent(arguments);
    this.events = c.events || [];
    this.iJ = C.k().og;
    this.Mna();
  },
  destroy: function () {
    var c = this;
    Ext.each(this.events, function (b) {
      c.iJ.un(b, c.Ic[b], c);
    });
  },
  Mna: function () {
    var c = this;
    Ext.each(this.events, function (b) {
      c.Ic[b] = function () {
        var e = Array.prototype.slice.apply(arguments);
        e.unshift(b);
        c.relayEvent.apply(c, e);
      };

      c.iJ.on(b, c.Ic[b]);
    });
  },
  relayEvent: function (c, h) {
    try {
      this.owner.post(this.eventName, {
        event: c,
        content: h.content
      });
    } catch (f) {}
  }
});