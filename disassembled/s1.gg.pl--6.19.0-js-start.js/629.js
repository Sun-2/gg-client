ASProxy.prototype = {
  get: function (c) {
    return this.bridge.deserialize(this.bridge.getPropertyFromAS(this.fb_instance_id, c));
  },
  set: function (c, f) {
    this.bridge.setPropertyInAS(this.fb_instance_id, c, f);
  },
  call: function (c, f) {
    this.bridge.callASMethod(this.fb_instance_id, c, f);
  },
  addRef: function () {
    this.bridge.addRef(this);
  },
  release: function () {
    this.bridge.release(this);
  }
};