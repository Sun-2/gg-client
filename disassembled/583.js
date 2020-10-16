GGCommon.ra.Yca = PROTO.Message("GGCommon.ProtocolDefs.SrvLoginOkGeneric", {
  cEa: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 1
  },
  sDa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.bytes;
    },
    id: 2
  },
  PBa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 3
  },
  time: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed32;
    },
    id: 4
  }
});