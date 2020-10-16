Ext.define(E.Vg.Zc, {
  prepareData: function (c) {
    if (c.hasOwnProperty("releaseAt")) {
      c.relativeDate = E.ca.Cc.vy(c.releaseAt), c.fullDate = E.ca.Cc.Is(c.releaseAt);
    } else {
      if (c.hasOwnProperty("createdAt")) {
        c.relativeDate = E.ca.Cc.vy(c.createdAt), c.fullDate = E.ca.Cc.Is(c.createdAt);
      } else {
        if (c.hasOwnProperty("lastMessageTime")) {
          c.relativeDate = E.ca.Cc.vy(c.lastMessageTime), c.fullDate = E.ca.Cc.Is(c.lastMessageTime);
        }
      }
    }

    return c;
  }
});