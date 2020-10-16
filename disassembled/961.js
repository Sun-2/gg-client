Ext.define(C.core.ea.Yc, {
  extend: C.core.ea.Qk,
  constructor: function (c) {
    c = c || {};
    this.uc = c.uc || Ext.create(C.core.Yb.tu);
    this.Fk = c.Fk;
    this.uf = c.uf || [];
    this.sl = c.sl || [];
    this.tk = c.tk || [];
    this.Rm = c.Rm || [];
    this.callParent([c]);
  },
  onAdd: function () {
    this.callParent(arguments);

    if (typeof this.owner.Mc === "function") {
      this.Mc = function () {
        return this.owner.Mc(arguments);
      };
    }

    this.owner.fireEvent("behaviorready");
  },
  onRemove: function () {
    this.Ct();
    this.mM();
    this.callParent(arguments);
  },
  initEvents: function () {
    this.callParent(arguments);
    this.uf.push("afterrender");

    for (var c = 0, f = this.uf.length; c < f; c += 1) {
      this.owner.on(this.uf[c], this.Ar, this);
    }

    this.sl.push("addedavatars");
    c = 0;

    for (f = this.sl.length; c < f; c += 1) {
      this.owner.on(this.sl[c], this.J_, this);
    }

    this.tk.push("destroy");
    c = 0;

    for (f = this.tk.length; c < f; c += 1) {
      this.owner.on(this.tk[c], this.mM, this);
    }

    this.Rm.push("removedavatars");
    c = 0;

    for (f = this.Rm.length; c < f; c += 1) {
      this.owner.on(this.Rm[c], this.q1, this);
    }

    this.uc.on("changeavatar", this.D4, this);
    this.owner.on("incomingavatarchange", this.owner.vd, this.owner);
  },
  Ct: function () {
    this.callParent(arguments);
    this.uf.push("afterrender");

    for (var c = 0, f = this.uf.length; c < f; c += 1) {
      this.owner.un(this.uf[c], this.Ar, this);
    }

    this.sl.push("addedavatars");
    c = 0;

    for (f = this.sl.length; c < f; c += 1) {
      this.owner.un(this.sl[c], this.J_, this);
    }

    this.tk.push("destroy");
    c = 0;

    for (f = this.tk.length; c < f; c += 1) {
      this.owner.un(this.tk[c], this.mM, this);
    }

    this.Rm.push("removedavatars");
    c = 0;

    for (f = this.Rm.length; c < f; c += 1) {
      this.owner.un(this.Rm[c], this.q1, this);
    }

    this.uc.un("changeavatar", this.D4, this);
    this.owner.un("incomingavatarchange", this.owner.vd, this.owner);
  },
  D4: function (c) {
    this.owner.fireEvent("incomingavatarchange", {
      user: c.user,
      changes: c.changes
    });
  },
  J_: function (c) {
    this.uc.hM(this.owner, c.object, this.Fk);
  },
  Ar: function () {
    this.uc.hM(this.owner, this.Mc(), this.Fk);
  },
  mM: function () {
    this.uc = m;
  },
  q1: t(),
  Mc: function () {
    var c = this.owner.getEl(),
        f = c.query(".sr-user-avatar")[0],
        c = c.query(".sr-user-status")[0];
    this.uc.hM(this.owner, {
      uin: this.owner.MBa(),
      zb: [{
        avatar: f || m,
        status: c || m,
        size: 50
      }]
    });
  }
});