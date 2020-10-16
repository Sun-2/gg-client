FABridge.addToUserTypes = function () {
  for (var c = 0; c < arguments.length; c++) {
    FABridge.userTypes[arguments[c]] = {
      typeName: arguments[c],
      enriched: !1
    };
  }
};