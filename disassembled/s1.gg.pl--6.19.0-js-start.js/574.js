GGCommon.ra.DY = PROTO.Message("GGCommon.ProtocolDefs.SrvEvent", {
  Fka: {
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
  data: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.bytes;
    },
    id: 3
  },
  gla: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 4
  },
  rAa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint64;
    },
    id: 5
  }
});