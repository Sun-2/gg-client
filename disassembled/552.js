GGCommon.ra.W9 = PROTO.Message("GGCommon.ProtocolDefs.AccountSetting", {
  key: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.string;
    },
    id: 1
  },
  value: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.string;
    },
    id: 2
  },
  modified: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.bool;
    },
    id: 3
  }
});