Ext.define(E.services.KG, {
  m3: !1,
  EB: {
    "talks:load": {
      gemius: "pxYwOzbtbz3lzgzgSIqArMQ5TH4Wy3f3plGU3KHrDeX.d7"
    },
    "latest:load": {
      gemius: "p3aQ_zddf77l.p0vABngB3Xo.hgZcaNr6_tMHGETikH.w7"
    },
    "drive:load": {
      gemius: "pxYw2zbtb76.gK2Rd2B49cQ5.hgWy6NrpfrG33oQMlD.G7"
    },
    "drive:submenu:clickd": {
      gemius: "pxYw2zbtb76.gK2Rd2B49cQ5.hgWy6NrpfrG33oQMlD.G7"
    },
    "drive:folder:clicked": {
      gemius: "pxYw2zbtb76.gK2Rd2B49cQ5.hgWy6NrpfrG33oQMlD.G7"
    },
    "people:load": {
      gemius: "p3Y6QTddS43fUOPiT3O1xXXoXfcZcWOwIS6c7TQkuqz.67"
    },
    "people:search": {
      gemius: "p3Y6QTddS43fUOPiT3O1xXXoXfcZcWOwIS6c7TQkuqz.67"
    },
    "settings:load": {
      gemius: "pxaaoTbtW4_.IDnzvzBgPsQ5TBQWy3frRph0U6p6Taz.Z7"
    },
    "aol:load": {
      gemius: "pxY63zbtS9bfYIPWTvOlLqQ_7DRGvLimBjfKCNKmXQ7.J7"
    },
    "aol:internal:clicked": {
      gemius: "pxY63zbtS9bfYIPWTvOlLqQ_7DRGvLimBjfKCNKmXQ7.J7"
    },
    "chat:activate": {
      gemius: "pxaa.zbtW9hFeXS2EDQVt8SZ7MoWu7iaRphEhdK23Ur.V7"
    },
    "profile:load": {
      gemius: "16NAsqe1z6k112zKCKaAMcbiDosk10O5LFDf.45h21L.i7"
    },
    "profile:edit": {
      gemius: "16NAsqe1z6k112zKCKaAMcbiDosk10O5LFDf.45h21L.i7"
    },
    "roulette:load": {
      gemius: "ba07KU8G8Gk11E9E2YUI5OUCLSpRqU7vBLYgJldSbsH.g7"
    },
    "roulette:other:load": {
      gemius: "bac1jU9klbyQrSZyxTF9zMWnzZaBqo_iBKkdCDejGPH.n7"
    },
    "roulette:search_options:load": {}
  },
  constructor: function (c) {
    c = c || {};
    c.Mg || j(Error("Event bus required!"));
    this.Mg = c.Mg;
    this.initEvents();
  },
  initEvents: function () {
    var c = Ext.Object.getKeys(this.EB);
    this.Mg.addEvents.apply(this.Mg, c);

    for (var h = 0, f = c.length; h < f; h++) {
      this.Mg.on(c[h], function (e) {
        return function () {
          this.via(e);
        };
      }(c[h]), this);
    }
  },
  zna: function (c) {
    this.m3 ? typeof this.EB[c].gemius !== "undefined" && typeof gemius_hit !== "undefined" && gemius_hit(this.EB[c].gemius) : this.m3 = !0;
  },
  via: function (c) {
    this.zna(c);
  }
});