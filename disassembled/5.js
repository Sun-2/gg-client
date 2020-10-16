function x(c) {
  return function () {
    return this[c];
  };
}