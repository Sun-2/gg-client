E.ca.DC = {
  Z9: ["p", "div"],
  unwrap: function (c, n) {
    var l = document.createElement("div");
    l.innerHTML = Ext.String.trim(c);
    var f = l.querySelectorAll(n.toString());
    Ext.Array.each(f, function (g) {
      var h = g.parentNode;

      for (this.Z9.indexOf(g.nodeName.toLowerCase()) !== -1 && h.insertBefore(document.createTextNode("\r\n"), g); g.firstChild;) {
        h.insertBefore(g.firstChild, g);
      }

      h.removeChild(g);
    }, this);
    return l.innerHTML;
  }
};