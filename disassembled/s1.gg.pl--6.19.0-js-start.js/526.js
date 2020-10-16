GGCommon.ra.DQ = PROTO.Message("GGCommon.ProtocolDefs.CliLogin", {
  Cwa: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.string;
    },
    id: 1
  },
  dj: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.bytes;
    },
    id: 2
  },
  hash: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.bytes;
    },
    id: 3
  },
  qna: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 4
  },
  version: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed32;
    },
    id: 5
  },
  me: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed32;
    },
    id: 6
  },
  kwa: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.string;
    },
    id: 7
  },
  status: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed32;
    },
    id: 8
  },
  description: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 9
  },
  AEa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.bytes;
    },
    id: 10
  },
  hFa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.bytes;
    },
    id: 11
  },
  Dna: {
    options: {
      Zd: 0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 12
  },
  Jpa: {
    options: {
      Zd: 0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 13
  },
  FCa: {
    options: {
      Zd: 0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed32;
    },
    id: 14
  },
  GCa: {
    options: {
      Zd: 0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 15
  },
  tAa: {
    options: {
      Zd: 0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed32;
    },
    id: 16
  },
  uAa: {
    options: {
      Zd: 0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 17
  },
  ICa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 18
  },
  aDa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 19
  },
  $Ca: {
    options: {},
    multiplicity: PROTO.repeated,
    type: function () {
      return PROTO.string;
    },
    id: 20
  },
  KCa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 21
  },
  uDa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 22
  },
  vDa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 23
  },
  zwa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 24
  },
  zDa: {
    options: {
      Zd: 0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 25
  },
  qwa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed64;
    },
    id: 26
  },
  fza: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed64;
    },
    id: 27
  },
  Noa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed64;
    },
    id: 28
  },
  fCa: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 29
  },
  geolocation: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return GGCommon.ra.gba;
    },
    id: 30
  },
  language: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 33
  }
});