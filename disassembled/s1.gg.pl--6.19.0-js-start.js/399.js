Int64.toHex = function (c) {
  return String("00000000" + c.toString(16)).slice(-8);
};