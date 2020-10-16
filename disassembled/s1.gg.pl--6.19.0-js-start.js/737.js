C.ca.rS = {
  NBa: function () {
    var c = 0,
        f = 0;

    if (typeof window.innerWidth == "number") {
      c = window.innerWidth, f = window.innerHeight;
    } else {
      if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        c = document.documentElement.clientWidth, f = document.documentElement.clientHeight;
      } else {
        if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
          c = document.body.clientWidth, f = document.body.clientHeight;
        }
      }
    }

    return [c, f];
  },
  Xka: function (D, B) {
    if (!D) {
      return m;
    }

    if (!D.startContainer && (B || window).document.selection) {
      var z = function (p, L) {
        for (var I = m, u = -1, q = p.firstChild; q; q = q.nextSibling) {
          if (q.nodeType == 3) {
            var N = q.nodeValue;

            if (L.indexOf(N) == 0 && L != N) {
              L = L.substring(N.length);
            } else {
              I = q;
              u = L.length - 1;
              break;
            }
          }
        }

        return {
          X5: I,
          offset: u
        };
      },
          y = D.duplicate(),
          w = D.duplicate(),
          o = D.duplicate(),
          f = D.duplicate();

      y.collapse(!0);
      y.moveEnd("character", 1);
      w.collapse(!1);
      w.moveStart("character", -1);
      var c = y.parentElement(),
          G = w.parentElement();

      if (c instanceof HTMLInputElement || G instanceof HTMLInputElement) {
        return m;
      }

      o.moveToElementText(c);
      o.setEndPoint("EndToEnd", y);
      f.moveToElementText(G);
      f.setEndPoint("EndToEnd", w);
      y = f.text;
      o = z(c, o.text);
      z = z(G, y);
      D.startContainer = o.X5;
      D.startOffset = o.offset;
      D.endContainer = z.X5;
      D.endOffset = z.offset + 1;
    }

    return D;
  },
  Y3: function (c) {
    c = c || window;

    if (c.getSelection) {
      try {
        return c.getSelection().getRangeAt(0);
      } catch (f) {}
    } else {
      if (c.document.selection) {
        return this.Xka(c.document.selection.createRange(), c);
      }
    }

    return m;
  }
};