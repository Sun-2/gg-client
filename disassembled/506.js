GGCommon.ra.BQ = PROTO.Message("GGCommon.ProtocolDefs.CliAck", {
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
  SN: {
    options: {
      Zd: !0
    },
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.bool;
    },
    id: 3
  }
});