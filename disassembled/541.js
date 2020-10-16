GGCommon.ra.kq = PROTO.Message("GGCommon.ProtocolDefs.Attachment", {
  Vya: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.fixed64;
    },
    id: 1
  },
  content: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.string;
    },
    id: 2
  }
});