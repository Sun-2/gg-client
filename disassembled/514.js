GGCommon.ra.P$ = PROTO.Message("GGCommon.ProtocolDefs.CliConferenceCreateInvite", {
  ec: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 1
  },
  properties: {
    options: {},
    multiplicity: PROTO.repeated,
    type: function () {
      return GGCommon.ra.IQ;
    },
    id: 2
  },
  members: {
    options: {},
    multiplicity: PROTO.repeated,
    type: function () {
      return GGCommon.ra.zY;
    },
    id: 3
  }
});