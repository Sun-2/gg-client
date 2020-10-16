GGCommon.ra.GY = PROTO.Message("GGCommon.ProtocolDefs.SrvUserApp", {
  sender: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.bytes;
    },
    id: 1
  },
  flags: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 2
  },
  ec: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 3
  },
  data: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.bytes;
    },
    id: 4
  },
  sid: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed64;
    },
    id: 5
  }
});