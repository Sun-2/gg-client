sunrise.vh = function (c) {
  for (var h = "", f = 0; f < c.length; ++f) {
    h += String.fromCharCode(c[f]);
  }

  return h;
};