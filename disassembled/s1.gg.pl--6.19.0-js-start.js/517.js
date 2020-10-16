GGCommon.ra.CQ = PROTO.Message("GGCommon.ProtocolDefs.CliConferenceText", {
  $c: {
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
  text: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 5
  },
  html: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 6
  },
  Cb: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.bytes;
    },
    id: 7
  },
  Gd: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed64;
    },
    id: 10
  },
  uid: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint64;
    },
    id: 14
  }
});