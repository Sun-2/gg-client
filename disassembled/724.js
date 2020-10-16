if (!Function.prototype.bind) {
  Function.prototype.bind = function (c) {
    function q() {
      return u.apply(this instanceof p ? this : c || window, f.concat(o.call(arguments)));
    }

    function p() {}

    typeof this !== "function" && j(new TypeError("Function.prototype.bind - what is trying to be bound is not callable"));
    var o = Array.prototype.slice,
        f = o.call(arguments, 1),
        u = this;
    p.prototype = this.prototype;
    q.prototype = new p();
    return q;
  };
}