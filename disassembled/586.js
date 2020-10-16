GGCommon.ra.FY = PROTO.Message("GGCommon.ProtocolDefs.SrvText", {
  sender: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.bytes;
    },
    id: 1
  },
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
  time: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed32;
    },
    id: 4
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
  sid: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed64;
    },
    id: 8
  },
  mid: {
    options: {
      Zd: 0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed64;
    },
    id: 9
  },
  cid: {
    options: {
      Zd: 0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed64;
    },
    id: 11
  },
  attachments: {
    options: {},
    multiplicity: PROTO.repeated,
    type: function () {
      return GGCommon.ra.kq;
    },
    id: 12
  }
});