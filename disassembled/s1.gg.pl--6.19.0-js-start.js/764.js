Ext.define(C.core.controllers.QG, {
  extend: C.core.controllers.nc,
  eh: m,
  initConfig: {
    view: C.core.ju.tB
  },
  Zl: m,
  Bi: m,
  constructor: function (c) {
    Ext.isEmpty(c) && j("config cannot be empty");
    Ext.isEmpty(c.eh) && j("config.router cannot be empty");
    this.eh = c.eh;
    this.controllers = {};
    this.callParent(arguments);
  },
  execute: function (c) {
    this.callParent(arguments);
    var f = this.Bi = this.eh.Z3(c.token);
    this.Zl && this.Zl.rg();

    if (f) {
      this.Zl = this.Jma(f), this.Zl.Bi = f, this.Zl.execute({
        token: f.path,
        params: f.params,
        state: f.state
      });
    }
  },
  cp: x("Bi"),
  Jma: function (c) {
    (c === m || typeof c !== "object") && j("bad route object");
    this.controllers[c.name] ? this.Vda(this.controllers[c.name]) : (this.controllers[c.name] = Ext.create(c.Bb, {
      name: c.name
    }), this.controllers[c.name].Bi = c, this.controllers[c.name].init(), this.yea(this.controllers[c.name]));
    return this.controllers[c.name];
  },
  yea: function (c) {
    (this.zh() === m || typeof this.zh() !== "object") && j("cannot add to viewport: bad viewport");
    Ext.isEmpty(c.view) || this.zh().Yda(c.view);
  },
  Vda: function (c) {
    (this.zh() === m || typeof this.zh() !== "object") && j("cannot activate view: bad viewport");
    Ext.isEmpty(c.view) || this.zh().setActiveItem(c.view);
  },
  zh: x("view")
});