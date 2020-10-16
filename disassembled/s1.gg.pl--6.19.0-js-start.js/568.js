GGCommon.ra.Uca = PROTO.Message("GGCommon.ProtocolDefs.SrvEndpointControl", {
  u8: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.bool;
    },
    id: 1
  },
  Aga: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.bool;
    },
    id: 2
  }
});