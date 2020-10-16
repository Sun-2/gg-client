FABridge.attachBridge = function (c, p) {
  var o = new FABridge(c, p);
  FABridge[p] = o;
  var n = FABridge.initCallbacks[p];

  if (n != m) {
    for (var f = 0; f < n.length; f++) {
      n[f].call(o);
    }

    delete FABridge.initCallbacks[p];
  }
};