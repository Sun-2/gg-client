GGCommon.ra.Q$ = PROTO.Message("GGCommon.ProtocolDefs.CliMessageRead", {
  nt: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 1
  },
  mid: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed64;
    },
    id: 2
  },
  dk: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return GGCommon.ra.oE;
    },
    id: 5
  }
});