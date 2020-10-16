Ext.define(E.f.windows.EC, {
  extend: C.f.windows.cc,
  da: m,
  la: m,
  api: m,
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.Fja = this.da.ma("delete-group-wnd");
    this.la = Ext.data.StoreManager.lookup("ContactsStore");
    this.api = E.api.bb;
    this.gid = c.gid;
    var n = this.la.getGroups(),
        l = '<select name="groups-list" id="groups-list">',
        f = [];
    this.TBa = [];
    this.Tpa = {};
    Ext.Object.each(n, function (g, h) {
      if (h.gid != 11 && h.Ap != this.gid) {
        this.Tpa[h.Ap] = h.gid, h.gid == 12 ? f.push('<option value="' + h.Ap + '" SELECTED>' + eha(h.name) + "</option>") : f.push('<option value="' + h.Ap + '">' + eha(h.name) + "</option>");
      }
    }, this);
    l += f.join("") + "</select>";
    this.callParent([{
      Gb: this.Fja.apply({
        groupList: l
      }),
      Ab: !0,
      cls: "delete-group-wnd",
      buttons: c.buttons
    }]);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  na: function () {
    this.el.on("click", this.Nha, this);
  },
  Nha: function (c) {
    var p = this.la.getGroups(),
        o = this.gid,
        n;

    for (n in p) {
      if (p[n].Ap == this.gid) {
        o = p[n].gid;
        break;
      }
    }

    c.preventDefault();

    if (c.getTarget(".delete-action") !== m) {
      var c = ~~Ext.getDom("groups-list").value,
          f = [],
          o = function (h, q) {
        var l = [];
        q.each(function (e) {
          e.data.type == 1 ? l.push(e.data.cid) : e.data.type == 4 && f.push(e.data.cid);
        }, h);
        return l;
      }(this, this.la.h4({
        gid: o
      }));

      this.api.Dja({
        gid: this.gid,
        Spa: c,
        Va: o,
        uza: f
      }, {
        fn: this.Eha,
        scope: this
      }, {
        fn: this.Fha,
        scope: this
      });
      this.Xa();
    } else {
      c.getTarget(".cancel-action") !== m && this.Xa();
    }
  },
  Eha: function () {
    C.k().qa.sa({
      msg: E.oa.dba,
      timeout: 2000
    });
    this.Xa();
  },
  Fha: function () {
    C.k().qa.sa({
      msg: E.oa.cba
    });
  }
});