GGCommon.ra.Vca = PROTO.Message("GGCommon.ProtocolDefs.SrvError", {
  Cka: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 1
  },
  ec: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 2
  },
  nt: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 3
  },
  Kpa: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 4
  },
  lwa: {
    options: {},
    multiplicity: PROTO.repeated,
    type: function () {
      return PROTO.bytes;
    },
    id: 5
  },
  data: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.bytes;
    },
    id: 6
  }
});