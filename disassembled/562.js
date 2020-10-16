GGCommon.ra.Sca = PROTO.Message("GGCommon.ProtocolDefs.SrvConferenceMembership", {
  mid: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed64;
    },
    id: 9
  },
  Gd: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed64;
    },
    id: 10
  },
  cid: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed64;
    },
    id: 11
  },
  OA: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.bytes;
    },
    id: 1
  },
  P4: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.bytes;
    },
    id: 2
  },
  fga: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed32;
    },
    id: 3
  },
  time: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed32;
    },
    id: 4
  },
  de: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed32;
    },
    id: 5
  },
  version: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 6
  },
  ec: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 7
  }
});