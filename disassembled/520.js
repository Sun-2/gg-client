GGCommon.ra.FQ = PROTO.Message("GGCommon.ProtocolDefs.CliUserApp", {
  Xg: {
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
    id: 3
  },
  ec: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 4
  },
  data: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.bytes;
    },
    id: 5
  },
  sid: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed64;
    },
    id: 6
  }
});