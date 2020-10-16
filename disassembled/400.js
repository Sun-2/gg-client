Int64.from32bitPair = function (c, f) {
  return [Int64.toHex(c), Int64.toHex(f)].join("");
};