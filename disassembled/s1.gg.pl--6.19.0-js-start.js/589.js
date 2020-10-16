GGCommon.ra.Zca = PROTO.Message("GGCommon.ProtocolDefs.SrvWelcome", {
  vsa: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 1
  },
  JCa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 2
  }
});