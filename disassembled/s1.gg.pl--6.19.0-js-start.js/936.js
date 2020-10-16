Ext.define(E.controllers.profile.Fn, {
  extend: E.controllers.profile.vn,
  mode: m,
  execute: function (c) {
    this.yN();

    if (c.params[2] && c.params[2] == "add") {
      var p = Ext.getStore("UnknownContactsStore"),
          o = p.Ba(c.params[1]);
      this.Sd(p.Ba(c.params[1]), !1);
      this.mode = "add";
    } else {
      if (c.params[2] && c.params[2] == "accept-invitation") {
        var n = Ext.getStore("ContactsStore"),
            f = o = n.Ba(c.params[1]);
        this.mode = "accept-invitation";
        f ? this.Sd(f, !0) : (p = Ext.getStore("UnknownContactsStore"), o = p.Ba(c.params[1]), n.le({
          uin: c.params[1],
          ShowName: o.get("ShowName"),
          type: "contact"
        }, {
          Ea: function () {
            this.Sd(n.Ba(c.params[1]), !0);
          },
          ya: function () {
            this.Sd(p.Ba(c.params[1]), !1);
          },
          scope: this
        }));
      } else {
        this.mode = "edit";
        var o = this.la.findRecord("cid", c.params[1], 0, !1, !1, !0);
        o && this.Sd(o, !0);
      }
    }

    this.view.Mt(this.mode);
    C.k().fireEvent("profile:edit");
  },
  kd: function () {
    this.view = Ext.create(E.f.profile.contact.pC);
  }
});