Ext.define(E.ea.mR, {
  extend: E.ea.pf,
  name: "ScrollBehavior",
  W2: {
    MOVE_SCROLL_TOP: function () {
      this.Fpa();
    },
    MOVE_SCROLL_TOP_APP: function () {
      this.Gpa();
    },
    MOVE_SCROLL_BY: function (c) {
      this.moveBy(c);
    }
  },
  constructor: function () {
    this.callParent(arguments);
  },
  onAdd: function () {
    this.callParent(arguments);
    this.$na();
  },
  $na: function () {
    try {
      var c = this;
      Ext.Object.each(this.W2, function (b) {
        this.Ic[b] = function (g) {
          try {
            return c.W2[b].call(c, g), {
              success: !0
            };
          } catch (e) {
            j(e);
          }
        };

        this.owner.bind(b, this.Ic[b]);
      }, this);
    } catch (f) {}
  },
  Fpa: function () {
    window.scrollTo(0, 0);
  },
  Gpa: function () {
    window.scrollTo(0, 111);
  },
  moveBy: function (c) {
    c != k && Ext.isNumeric(c) && window.scrollBy(0, c);
  }
});