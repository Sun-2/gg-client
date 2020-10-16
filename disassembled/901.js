Ext.define(E.f.Tb.UC, {
  extend: C.f.Jb,
  html: "",
  constructor: function () {
    this.callParent(arguments);
  },
  initComponent: function () {
    this.callParent(arguments);
  },
  destroy: function () {
    this.un("afterrender", this.cDa);
  },
  Ph: function () {
    var c = [],
        f = "";

    switch (this.token) {
      case "404":
      case "404/page":
        f = C.k().da.Wa("error-404-page");
        break;

      case "500":
        f = C.k().da.Wa("error-500");
    }

    c.push({
      iFa: "container",
      html: f
    });
    return c;
  },
  Xea: function (c) {
    this.el.select(".start-snake").first().on("click", function (b) {
      b.preventDefault();
      c.snake.destroy();
      c.snake = new snakeGame.Snake(c.gameArea);
      c.bindCollisionEvents();
      c.snake.start();
    });
  }
});