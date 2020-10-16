String.prototype.nl2br = function () {
  return this.replace(/(\r\n)|\n|\r/mg, "<br />");
};