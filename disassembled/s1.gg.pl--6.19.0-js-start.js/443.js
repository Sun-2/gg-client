String.prototype.OZ = function () {
  return this.replace(/<br>|<br \/>/gi, "\r\n");
};