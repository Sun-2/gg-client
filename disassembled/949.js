Ext.define(E.ea.lR, {
  extend: E.ea.pf,
  name: "GetScrollTopBehavior",
  eventName: "GET_SCROLL_TOP",
  constructor: function () {
    this.callParent(arguments);
  },
  onAdd: function () {
    this.callParent(arguments);
    this.Ona();
  },
  Ona: function () {
    try {
      var c = this,
          h;

      this.Ic[this.eventName] = function (e) {
        try {
          return h = c.cka(e), {
            success: !0,
            top: h.top,
            viewHeight: h.viewHeight
          };
        } catch (b) {
          j(b);
        }
      };

      this.owner.bind(this.eventName, this.Ic[this.eventName]);
    } catch (f) {}
  },
  cka: function () {
    var c = Ext.getBody();
    return {
      top: c.getScroll().top,
      viewHeight: c.getViewSize().height
    };
  }
});