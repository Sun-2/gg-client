window.FABridge__invokeJSFunction = function (c) {
  var f = c[0],
      c = c.concat();
  c.shift();
  return FABridge.extractBridgeFromID(f).invokeLocalFunction(f, c);
};