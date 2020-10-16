GGCommon.ra.oE = PROTO.Message("GGCommon.ProtocolDefs.Interlocutor", {
  type: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 1
  },
  dj: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.bytes;
    },
    id: 2
  },
  Gd: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed64;
    },
    id: 3
  },
  Bqa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 4
  }
});