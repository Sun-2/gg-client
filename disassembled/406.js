Int64.prototype.abs = function () {
  return this.jb < 0 ? F(this) : this;
};