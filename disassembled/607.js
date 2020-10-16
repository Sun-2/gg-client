function FABridge(c, f) {
  this.target = c;
  this.remoteTypeCache = {};
  this.remoteInstanceCache = {};
  this.remoteFunctionCache = {};
  this.localFunctionCache = {};
  this.bridgeID = FABridge.nextBridgeID++;
  this.name = f;
  this.nextLocalFuncID = 0;
  FABridge.instances[this.name] = this;
  FABridge.idMap[this.bridgeID] = this;
  return this;
}