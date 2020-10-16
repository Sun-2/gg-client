GGCommon.ra.CY = PROTO.Message("GGCommon.ProtocolDefs.SrvAck", {
  xr: {
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
  time: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed32;
    },
    id: 3
  },
  mid: {
    options: {
      Zd: 0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed64;
    },
    id: 4
  },
  cid: {
    options: {
      Zd: 0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.fixed64;
    },
    id: 5
  },
  attachments: {
    options: {},
    multiplicity: PROTO.repeated,
    type: function () {
      return GGCommon.ra.kq;
    },
    id: 6
  },
  $c: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.uint32;
    },
    id: 7
  }
});