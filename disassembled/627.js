FABridge.prototype = {
  root: function () {
    return this.deserialize(this.target.getRoot());
  },
  releaseASObjects: function () {
    return this.target.releaseASObjects();
  },
  releaseNamedASObject: function (c) {
    return typeof c != "object" ? !1 : this.target.releaseNamedASObject(c.fb_instance_id);
  },
  create: function (c) {
    return this.deserialize(this.target.create(c));
  },
  makeID: function (c) {
    return (this.bridgeID << 16) + c;
  },
  getPropertyFromAS: function (c, f) {
    if (FABridge.refCount > 0) {
      j(Error("You are trying to call recursively into the Flash Player which is not allowed. In most cases the JavaScript setTimeout function, can be used as a workaround."));
    } else {
      return FABridge.refCount++, retVal = this.target.getPropFromAS(c, f), retVal = this.handleError(retVal), FABridge.refCount--, retVal;
    }
  },
  setPropertyInAS: function (c, h, f) {
    if (FABridge.refCount > 0) {
      j(Error("You are trying to call recursively into the Flash Player which is not allowed. In most cases the JavaScript setTimeout function, can be used as a workaround."));
    } else {
      return FABridge.refCount++, retVal = this.target.setPropInAS(c, h, this.serialize(f)), retVal = this.handleError(retVal), FABridge.refCount--, retVal;
    }
  },
  callASFunction: function (c, f) {
    if (FABridge.refCount > 0) {
      j(Error("You are trying to call recursively into the Flash Player which is not allowed. In most cases the JavaScript setTimeout function, can be used as a workaround."));
    } else {
      return FABridge.refCount++, retVal = this.target.invokeASFunction(c, this.serialize(f)), retVal = this.handleError(retVal), FABridge.refCount--, retVal;
    }
  },
  callASMethod: function (c, h, f) {
    if (FABridge.refCount > 0) {
      j(Error("You are trying to call recursively into the Flash Player which is not allowed. In most cases the JavaScript setTimeout function, can be used as a workaround."));
    } else {
      return FABridge.refCount++, f = this.serialize(f), retVal = this.target.invokeASMethod(c, h, f), retVal = this.handleError(retVal), FABridge.refCount--, retVal;
    }
  },
  invokeLocalFunction: function (c, n) {
    var l,
        f = this.localFunctionCache[c];
    f != k && (l = this.serialize(f.apply(m, this.deserialize(n))));
    return l;
  },
  getTypeFromName: function (c) {
    return this.remoteTypeCache[c];
  },
  createProxy: function (c, h) {
    var f = this.getTypeFromName(h);
    instanceFactory.prototype = f;
    f = new instanceFactory(c);
    return this.remoteInstanceCache[c] = f;
  },
  getProxy: function (c) {
    return this.remoteInstanceCache[c];
  },
  addTypeDataToCache: function (c) {
    newType = new ASProxy(this, c.name);

    for (var h = c.accessors, f = 0; f < h.length; f++) {
      this.addPropertyToType(newType, h[f]);
    }

    c = c.methods;

    for (f = 0; f < c.length; f++) {
      FABridge.blockedMethods[c[f]] == k && this.addMethodToType(newType, c[f]);
    }

    return this.remoteTypeCache[newType.typeName] = newType;
  },
  addPropertyToType: function (c, n) {
    var l = n.charAt(0),
        f;
    l >= "a" && l <= "z" ? (f = "get" + l.toUpperCase() + n.substr(1), l = "set" + l.toUpperCase() + n.substr(1)) : (f = "get" + n, l = "set" + n);

    c[l] = function (e) {
      this.bridge.setPropertyInAS(this.fb_instance_id, n, e);
    };

    c[f] = function () {
      return this.bridge.deserialize(this.bridge.getPropertyFromAS(this.fb_instance_id, n));
    };
  },
  addMethodToType: function (c, f) {
    c[f] = function () {
      return this.bridge.deserialize(this.bridge.callASMethod(this.fb_instance_id, f, FABridge.argsToArray(arguments)));
    };
  },
  getFunctionProxy: function (c) {
    var f = this;
    this.remoteFunctionCache[c] == m && (this.remoteFunctionCache[c] = function () {
      f.callASFunction(c, FABridge.argsToArray(arguments));
    });
    return this.remoteFunctionCache[c];
  },
  getFunctionID: function (c) {
    if (c.__bridge_id__ == k) {
      c.__bridge_id__ = this.makeID(this.nextLocalFuncID++), this.localFunctionCache[c.__bridge_id__] = c;
    }

    return c.__bridge_id__;
  },
  serialize: function (c) {
    var h = {},
        f = typeof c;

    if (f == "number" || f == "string" || f == "boolean" || f == m || f == k) {
      h = c;
    } else {
      if (c instanceof Array) {
        h = [];

        for (f = 0; f < c.length; f++) {
          h[f] = this.serialize(c[f]);
        }
      } else {
        f == "function" ? (h.type = FABridge.TYPE_JSFUNCTION, h.value = this.getFunctionID(c)) : c instanceof ASProxy ? (h.type = FABridge.TYPE_ASINSTANCE, h.value = c.fb_instance_id) : (h.type = FABridge.TYPE_ANONYMOUS, h.value = c);
      }
    }

    return h;
  },
  deserialize: function (c) {
    var n,
        l = typeof c;

    if (l == "number" || l == "string" || l == "boolean" || c == m || c == k) {
      n = this.handleError(c);
    } else {
      if (c instanceof Array) {
        n = [];

        for (l = 0; l < c.length; l++) {
          n[l] = this.deserialize(c[l]);
        }
      } else {
        if (l == "object") {
          for (l = 0; l < c.newTypes.length; l++) {
            this.addTypeDataToCache(c.newTypes[l]);
          }

          for (var f in c.newRefs) {
            this.createProxy(f, c.newRefs[f]);
          }

          if (c.type == FABridge.TYPE_PRIMITIVE) {
            n = c.value;
          } else {
            if (c.type == FABridge.TYPE_ASFUNCTION) {
              n = this.getFunctionProxy(c.value);
            } else {
              if (c.type == FABridge.TYPE_ASINSTANCE) {
                n = this.getProxy(c.value);
              } else {
                if (c.type == FABridge.TYPE_ANONYMOUS) {
                  n = c.value;
                }
              }
            }
          }
        }
      }
    }

    return n;
  },
  addRef: function (c) {
    this.target.incRef(c.fb_instance_id);
  },
  release: function (c) {
    this.target.releaseRef(c.fb_instance_id);
  },
  handleError: function (c) {
    if (typeof c == "string" && c.indexOf("__FLASHERROR") == 0) {
      var f = c.split("||");
      FABridge.refCount > 0 && FABridge.refCount--;
      j(Error(f[1]));
    }

    return c;
  }
};