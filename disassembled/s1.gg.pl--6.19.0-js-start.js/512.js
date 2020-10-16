GGCommon.ra.IQ = PROTO.Message("GGCommon.ProtocolDefs.ConferencePropertiesAndPrivileges", {
  name: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.string;
    },
    id: 1
  },
  value: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.string;
    },
    id: 2
  },
  Hz: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.uint32;
    },
    id: 3
  }
});