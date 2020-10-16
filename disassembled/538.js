GGCommon.ra.gba = PROTO.Message("GGCommon.ProtocolDefs.Geolocation", {
  latitude: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.Double;
    },
    id: 1
  },
  longitude: {
    options: {},
    multiplicity: PROTO.required,
    type: function () {
      return PROTO.Double;
    },
    id: 2
  }
});