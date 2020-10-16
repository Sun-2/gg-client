Ext.define(C.models.Bw, {
  extend: C.models.Model,
  $p: {
    advert: "01",
    talk_to_me: "01",
    avail: "01",
    busy: "01",
    dnd: "01",
    not_avail: "05",
    blocked: "06"
  },
  fields: [{
    name: "uin",
    type: "int"
  }, {
    name: "ShowName",
    type: "string"
  }, {
    name: "cid",
    type: "int"
  }, {
    name: "gids",
    type: "auto"
  }, {
    name: "gid",
    type: "int"
  }, {
    name: "MobilePhone",
    type: "string"
  }, {
    name: "HomePhone",
    type: "string"
  }, {
    name: "Email",
    type: "string"
  }, {
    name: "friend",
    type: "int"
  }, {
    name: "GroupName",
    type: "string"
  }, {
    name: "status",
    type: "string"
  }, {
    name: "description",
    type: "string"
  }, {
    name: "isUserbar",
    type: "boolean"
  }, {
    name: "avatar",
    type: "string"
  }, {
    name: "groupsSorter",
    type: "string"
  }, {
    name: "starsSorter",
    type: "string"
  }, {
    name: "duplicated",
    type: "boolean"
  }, {
    name: "favorite",
    type: "boolean"
  }, {
    name: "statusComments",
    type: "int"
  }, {
    name: "about",
    type: "string"
  }, {
    name: "birth",
    type: "string"
  }, {
    name: "cellphone",
    type: "string"
  }, {
    name: "city",
    type: "string"
  }, {
    name: "district",
    type: "string"
  }, {
    name: "education",
    type: "string"
  }, {
    name: "adultcontent",
    type: "string"
  }, {
    name: "gender",
    type: "int"
  }, {
    name: "homeTown",
    type: "string"
  }, {
    name: "maidenName",
    type: "string"
  }, {
    name: "mailing",
    type: "string"
  }, {
    name: "movies",
    type: "string"
  }, {
    name: "music",
    type: "string"
  }, {
    name: "name",
    type: "string"
  }, {
    name: "label",
    type: "string"
  }, {
    name: "labelSrc",
    type: "string"
  }, {
    name: "surname",
    type: "string"
  }, {
    name: "nick",
    type: "string"
  }, {
    name: "other",
    type: "string"
  }, {
    name: "pets",
    type: "string"
  }, {
    name: "phone",
    type: "string"
  }, {
    name: "postcode",
    type: "string"
  }, {
    name: "privacy",
    type: "string"
  }, {
    name: "profession",
    type: "string"
  }, {
    name: "province",
    type: "string"
  }, {
    name: "wwwUrl",
    type: "string"
  }, {
    name: "aliasEmail",
    type: "string"
  }, {
    name: "gvcWalletValue",
    type: "int"
  }, {
    name: "statusDescription",
    type: "string"
  }],
  constructor: function (c, f) {
    c.gid = c.gid || 2;
    c.status = c.status || "not_avail";
    c.isUserbar = c.isUserbar || !1;
    c.duplicated = c.duplicated || !1;
    c.favorite = c.favorite || !1;
    c.statusComments = c.statusComments || 0;
    c.avatar = c.avatar || 0;
    c.type = 1;
    this.addEvents("silentupdate", "aclsettingschanged");
    this.callParent([c, f]);
  },
  init: function () {
    this.on("datachanged", this.Ek, this);
  },
  Ek: function (c, f) {
    this.fireEvent("silentupdate", m, [{
      uin: f.uin || this.data.uin,
      avatar: f.avatar,
      status: f.status,
      type: 1
    }]);
  },
  Ba: function () {
    return this;
  },
  getDisplayName: function () {
    var c = this.get("name") + " " + this.get("surname"),
        f = this.get("label");
    return f ? f : c ? c : this.get("uin");
  },
  fp: function () {
    return !this.get("label") || this.get("label") == "" ? this.getDisplayName() : this.get("label");
  },
  get: function (c) {
    if ("protoInfo" === c) {
      return {
        bot: !1,
        friend: 0,
        status: this.get("status"),
        description: this.get("description")
      };
    } else {
      if ("extdata" === c) {
        return {
          gids: this.get("gids"),
          FirstName: this.get("name"),
          LastName: this.get("surname"),
          MobilePhone: this.get("MobilePhone"),
          Email: this.get("Email")
        };
      }
    }

    return this.callParent(arguments);
  },
  Js: function (c) {
    var f = this.get("extdata").gids;
    return f && Ext.Array.indexOf(f, c) !== -1 ? !0 : !1;
  },
  set: function (c, h) {
    var f = m,
        f = Ext.isObject(c) ? Ext.clone(this.data) : Ext.isObject(this.data[c]) ? Ext.clone(this.data[c]) : this.data[c];
    this.callParent(arguments);
    this.editing || this.fireEvent("datachanged", this, c, h, f);
    this.tN(c, h, f);
  },
  rm: A(!1),
  bK: function () {
    return this.get("uin");
  },
  Ff: A(m),
  YJ: A(m),
  km: A(!0),
  zm: A(!1),
  Qj: function () {
    return this.get("gender") === 1 ? 1 : 2;
  }
});