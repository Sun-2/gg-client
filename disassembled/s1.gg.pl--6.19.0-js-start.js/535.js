GGCommon.ra.R$ = PROTO.Message("GGCommon.ProtocolDefs.CliUserAction", {
  reason: {
    options: {},
    multiplicity: PROTO.optional,
    type: function () {
      return PROTO.string;
    },
    id: 1
  }
});