snakeGame = function () {
  var c = {
    TILE_SIZE: 30,
    INITIAL_LENGTH: 5,
    MOVE_INTERVAL: 120
  };
  c.GameArea = Z(X, {
    snake: m,
    foodTile: m,
    scoreDisplay: m,
    construct: function (p) {
      var o = p.getElement().getSize(),
          f = Math.floor((o.x - 30) / c.TILE_SIZE / 2) * c.TILE_SIZE * 2,
          b = Math.floor((o.y - 60) / c.TILE_SIZE / 2) * c.TILE_SIZE * 2,
          q = (o.x - f) / 2,
          o = (o.y - b) / 2;
      this.inherited("div", {
        "class": "game-area",
        styles: {
          position: "relative",
          borderLeftWidth: q,
          borderTopWidth: o,
          borderRightWidth: q,
          borderBottomWidth: o,
          width: f,
          height: b,
          left: 0,
          top: 0
        }
      });
      this.scoreDisplay = new Element("div", {
        "class": "score-display",
        styles: {
          position: "absolute",
          top: 5,
          left: q,
          zIndex: 100
        }
      });
      this.timeDisplay = new Element("div", {
        "class": "time-display",
        styles: {
          position: "absolute",
          top: 5,
          right: q,
          zIndex: 100
        },
        text: "00:00"
      });
      p.addChild(this.scoreDisplay);
      p.addChild(this.timeDisplay);
      p.addChild(this);
    },
    updateScore: function () {
      this.scoreDisplay.set("html", "Punkt\u00f3w: <b>" + this.getSnake().getScore() + "</b>, d\u0142ugo\u015b\u0107: <b>" + (this.getSnake().getTiles().length || c.INITIAL_LENGTH) + "</b>");
    },
    updateTime: function () {
      var e = this.getSnake().getAge(),
          f = Math.floor(e / 60);
      e -= f * 60;
      this.timeDisplay.set("text", (f < 10 ? "0" + f : f) + ":" + (e < 10 ? "0" + e : e));
    },
    addFoodTile: function () {
      this.removeFoodTile();
      var f = -1,
          b = -1;

      do {
        f = Math.floor(this.getWidth() * Math.random() / c.TILE_SIZE) * c.TILE_SIZE, b = Math.floor(this.getHeight() * Math.random() / c.TILE_SIZE) * c.TILE_SIZE, W(this.snake.getTiles(), function (e, g) {
          g.getLeft() == f && g.getTop() == b && (b = f = -1, this.stop());
        });
      } while (f == -1 && b == -1);

      this.foodTile = new c.FoodTile(f, b, this);
      this.addChild(this.foodTile);
    },
    removeFoodTile: function () {
      if (this.foodTile) {
        try {
          this.foodTile.destroy();
        } catch (e) {}
      }
    },
    destroy: function () {
      clearInterval(this.updateTimeInterval);
      this.inherited();
    }
  });
  c.FoodTile = Z(X, {
    left: m,
    top: m,
    destroyTimeout: m,
    timeLeft: m,
    gameArea: m,
    construct: function (o, n, f) {
      this.left = o;
      this.top = n;
      this.gameArea = f;
      var b = f.getSnake().getTiles()[0].getLeft(),
          f = f.getSnake().getTiles()[0].getTop();
      this.timeLeft = Math.round((Math.abs(o - b) + Math.abs(n - f)) / c.TILE_SIZE / (1000 / c.MOVE_INTERVAL)) + 10;
      this.inherited("div", {
        "class": "food-tile",
        styles: {
          position: "absolute",
          width: c.TILE_SIZE,
          height: c.TILE_SIZE,
          lineHeight: c.TILE_SIZE,
          textAlign: "center",
          left: o,
          top: n
        },
        text: this.timeLeft
      });
      this.countdown();
    },
    countdown: function () {
      var e = this;
      e.timeLeft >= 0 ? this.destroyTimeout = setTimeout(function () {
        e.timeLeft--;
        e.setText(e.timeLeft);
        e.countdown();
      }, 1000) : this.gameArea.addFoodTile();
    },
    destroy: function () {
      this.destroyTimeout && clearTimeout(this.destroyTimeout);
      this.inherited();
    }
  });
  c.Canvas = Z(X, {
    construct: function (e) {
      e = document.getElementById(e);
      this.inherited("div", {
        "class": "canvas",
        styles: {
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          zIndex: 100
        }
      });
      e.appendChild(this.render());
    }
  });
  c.Tile = Z(X, {
    previousTile: m,
    left: 0,
    top: 0,
    construct: function () {
      this.inherited("div", {
        "class": "snake-tile",
        styles: {
          position: "absolute"
        }
      });
      this.setWidth(c.TILE_SIZE);
      this.setHeight(c.TILE_SIZE);
    },
    setLeft: function (e) {
      this.movePreviousLeft();
      this.inherited(e);
      this.getElement().setStyles({
        left: e
      });
    },
    setTop: function (e) {
      this.movePreviousTop();
      this.inherited(e);
      this.getElement().setStyles({
        top: e
      });
    },
    movePreviousLeft: function () {
      this.previousTile && this.previousTile.setLeft(this.getLeft());
    },
    movePreviousTop: function () {
      this.previousTile && this.previousTile.setTop(this.getTop());
    }
  });
  c.Snake = Z({
    gameArea: m,
    tiles: [],
    score: 0,
    direction: {
      x: 1,
      y: 0,
      moved: !1
    },
    age: 0,
    construct: function (l) {
      this.gameArea = l;
      this.gameArea.setSnake(this);

      for (var f = 0; f < c.INITIAL_LENGTH; f++) {
        var b = new c.Tile();
        b.setLeft(c.TILE_SIZE * f);
        b.setTop(0);
        this.tiles[this.tiles.length - 1] && b.setPreviousTile(this.tiles[this.tiles.length - 1]);
        this.tiles.push(b);
        l.addChild(b);
        this.bindKeyboard();
      }

      this.tiles.reverse();
      this.gameArea.addFoodTile();
      this.gameArea.updateScore();
    },
    enlarge: function () {
      var l = new c.Tile(),
          f = this.tiles[this.tiles.length - 1];
      f && (l.setLeft(f.getLeft()), l.setTop(f.getTop()), f.setPreviousTile(l));
      this.tiles.push(l);
      var b = this;
      W(this.tiles, function (g, h) {
        h.getElement().setStyles({
          backgroundColor: "green"
        });
      });
      setTimeout(function () {
        W(b.tiles, function (g, h) {
          h.getElement().setStyles({
            backgroundColor: "red"
          });
        });
      }, 200);
      this.gameArea.addChild(l);
    },
    bindKeyboard: function () {
      var e = this;

      this.listener = function (f) {
        if (e.direction.moved) {
          var b = e.direction.moved = !1;

          switch ((f || window.event).keyCode) {
            case 40:
              b = !0;

              if (e.direction.y == -1) {
                return;
              }

              e.direction.y = 1;
              e.direction.x = 0;
              break;

            case 38:
              b = !0;

              if (e.direction.y == 1) {
                return;
              }

              e.direction.y = -1;
              e.direction.x = 0;
              break;

            case 37:
              b = !0;

              if (e.direction.x == 1) {
                return;
              }

              e.direction.x = -1;
              e.direction.y = 0;
              break;

            case 39:
              b = !0;

              if (e.direction.x == -1) {
                return;
              }

              e.direction.x = 1;
              e.direction.y = 0;
          }

          if (b) {
            f.stopPropagation && f.stopPropagation();
            f.preventDefault && f.preventDefault();

            if ("cancelBubble" in f) {
              f.cancelBubble = !0;
            }

            return !1;
          }
        }
      };

      document.body.attachEvent ? document.body.attachEvent("onkeydown", this.listener) : window.addEvent("keydown", this.listener);
    },
    start: function () {
      var b = this;
      this.moveTimeout = setTimeout(function () {
        b.move();
      }, c.MOVE_INTERVAL);

      if (!this.ageInterval) {
        this.ageInterval = setInterval(function () {
          b.age++;
          b.gameArea.updateTime();
        }, 1000);
      }
    },
    move: function () {
      var f = this.tiles[0].getLeft() + c.TILE_SIZE * this.direction.x,
          b = this.tiles[0].getTop() + c.TILE_SIZE * this.direction.y;

      if (!this.checkCollision(f, b)) {
        this.tiles[0].setLeft(f), this.tiles[0].setTop(b), this.checkFoodTile(f, b), this.start(), this.direction.moved = !0;
      }
    },
    destroy: function () {
      window.removeEvent("keydown", this.listener);
      clearInterval(this.ageInterval);
      var e = this;
      W(this.tiles, function (f, b) {
        clearTimeout(e.moveTimeout);
        b.destroy();
      });
    },
    checkFoodTile: function (l, f) {
      if (l == this.gameArea.getFoodTile().getLeft() && f == this.gameArea.getFoodTile().getTop()) {
        var b = this.gameArea.getFoodTile().getTimeLeft();
        this.score += b;
        b = new c.ScoreCloud(l, f, b);
        this.gameArea.addChild(b);
        b.appear();
        this.enlarge();
        this.gameArea.addFoodTile();
        this.gameArea.updateScore();
      }
    },
    checkCollision: function (l, f) {
      var b = !1;
      l < 0 || l + c.TILE_SIZE > this.gameArea.getWidth() || f < 0 || f + c.TILE_SIZE > this.gameArea.getHeight() ? b = !0 : W(this.tiles, function (e, g) {
        g.getLeft() == l && g.getTop() == f && (b = !0, this.stop());
      });
      b && (clearTimeout(this.moveTimeout), clearInterval(this.ageInterval), this.gameArea.removeFoodTile(), this.onCollision());
      return b;
    },
    onCollision: t()
  });
  c.ScoreCloud = Z(X, {
    left: 0,
    top: 0,
    construct: function (l, f, b) {
      this.inherited("div", {
        "class": "score-cloud",
        styles: {
          position: "absolute",
          left: l,
          top: f,
          width: c.TILE_SIZE,
          height: c.TILE_SIZE,
          lineHeight: c.TILE_SIZE,
          zIndex: 1000,
          textAlign: "center",
          webkitTransformOrigin: "center center",
          letterSpacing: -1
        },
        text: b
      });
      this.left = l;
      this.top = f;
    },
    appear: function () {
      var e = 10,
          q = 8 / e,
          o = 1 / e,
          f = 1,
          w = 1,
          u = this;

      (function () {
        e == 0 ? u.destroy() : (f += q, w -= o, u.getElement().setStyles({
          webkitTransform: "scale(" + f + ")",
          opacity: w
        }), e--, setTimeout(arguments.callee, 50));
      })();
    }
  });
  c.Game = Z({
    canvas: m,
    gameArea: m,
    snake: m,
    construct: function (b) {
      this.canvas = new c.Canvas(b);
      this.gameArea = new c.GameArea(this.canvas);
      this.snake = new c.Snake(this.gameArea);
      this.bindCollisionEvents();
    },
    destroy: function () {
      this.canvas.destroy();
      this.snake.destroy();
    },
    bindCollisionEvents: function () {
      var e = this;
      e.snake.onCollision.bind(function () {
        var f = e.snake.getAge(),
            b = Math.floor(f / 60);
        f -= b * 60;
        alert("Nast\u0105pi\u0142a kolizja! Koniec gry!\n\nPunkt\u00f3w: " + e.snake.getScore() + ", d\u0142ugo\u015b\u0107: " + e.snake.getTiles().length + ", czas: " + (b < 10 ? "0" + b : b) + ":" + (f < 10 ? "0" + f : f));
      });
    }
  });
  return c;
}();