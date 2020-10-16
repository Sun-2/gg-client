sunrise.Ne = function (c) {
  for (var h = [], f = 0; f < c.length; f++) {
    h[f] = c.charCodeAt(f) & 255;
  }

  return h;
};