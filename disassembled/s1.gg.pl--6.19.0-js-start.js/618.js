FABridge.addInitializationCallback = function (c, h) {
  var f = FABridge.instances[c];
  f != k ? h.call(f) : (f = FABridge.initCallbacks[c], f == m && (FABridge.initCallbacks[c] = f = []), f.push(h));
};