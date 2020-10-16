GGCommon.ra.Xxa = PROTO.Message("GGCommon.ProtocolDefs.Pong", {
  time: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed32;
    },
    id: 1
  }
});