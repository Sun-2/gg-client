Ext.define(E.stores.Ma.WC, {
  extend: C.stores.Store,
  model: E.models.Ma.Event,
  id: "LifeStreamEventsStore",
  loaded: !1,
  xAa: m,
  Cl: "",
  Aa: m,
  refs: {},
  Dua: m,
  HEa: {},
  aI: m,
  a3: ["photo", "video", "link"],
  constructor: function (c) {
    c = c || {};
    this.callParent(arguments);
    this.Cl = c.Cl || this.Cl || "mainChannel";
    this.Aa = c.Aa || this.Aa;
    this.Dua = new Ext.util.MixedCollection();
    this.aI = {
      aolChannel: {}
    };
    this.on("update", this.o0, this);
    this.on("add", this.yf, this);
    this.on("incomingevent", this.E0, this);
    this.on("remove", this.Qo, this);
  },
  destroy: function () {
    this.un("update", this.o0, this);
    this.un("add", this.yf, this);
    this.un("incomingevent", this.E0, this);
    this.un("remove", this.Qo, this);
    this.callParent();
  },
  nla: function (c) {
    if (typeof c === "undefined" || typeof this.refs[c] == "undefined") {
      return m;
    }

    return this.refs[c];
  },
  yf: function (c, f) {
    this.ZI(f);
  },
  E0: function (c, f) {
    this.ZI(f);
  },
  Qo: t(),
  o0: t(),
  Jqa: function (c, h) {
    var f = {
      all: []
    };
    Ext.each(c.events, function (e) {
      e.channels = [h];
      f.all.push(e);
    }, this);
    return f;
  },
  ena: function (c, h) {
    if (c.status == 0) {
      var f = this.Jqa(c, h);
      this.loaded = !0;
      Ext.each(f.all, function (g, l) {
        var o = this.nla(g.id);
        o ? this.Ova(g) : (o = this.add(g), this.ZI(o), o = Ext.isArray(o) ? o[0] : o);
        f.all[l] = o;
      }, this);
      return f.all;
    }

    return [];
  },
  ZI: function (c) {
    Ext.each(c, function (e) {
      this.refs[e.get("id")] = e;
      Ext.each(e.get("channels"), function (b) {
        this.aI[b][e.get("id")] = e;
      }, this);
    }, this);
  },
  Ova: function (c) {
    c = Ext.isArray(c) ? c : [c];
    Ext.each(c, function (e) {
      if (typeof this.refs[e.id] !== "undefined") {
        var f = this.refs[e.id].get("channels"),
            f = Ext.Array.merge(f, e.channels);
        this.refs[e.id].set("channels", f);
        Ext.each(f, function (b) {
          this.aI[b][e.id] = e;
        }, this);
      }
    }, this);
  },
  po: function (c) {
    var z = {
      events: [],
      status: 0
    };

    if (c.length) {
      for (var u = 0, o = c.length; u < o; u++) {
        var f = c[u];

        if (/^drive:\/\//.test(f.content) !== !0) {
          var B = f.attachmentType || f.type,
              y = this.a3.indexOf(B) !== -1 ? B : "link",
              y = {
            id: f.attachmentID || f.interlocutorID + "_" + f.sendTime,
            dataSourceType: "aol",
            family: y,
            owner: {
              id: f.senderID,
              label: "",
              type: "user"
            },
            sender: {
              id: f.senderID,
              label: "",
              type: "user"
            },
            source: "WWW",
            createdTime: f.sentTime || ~~(f.sendTime / 1000),
            attachments: [[{
              body: f.description,
              link: f.content,
              subtitle: f.title,
              title: f.title || f.content,
              type: "text"
            }]]
          };

          if (f.thumbnail) {
            var w = {
              alt: "",
              link: f.content
            };

            switch (B) {
              case "video":
                w.thumbnail = f.thumbnail;
                w.preview = f.thumbnail;
                w.type = B;
                y.attachments[0].push({
                  type: "image",
                  link: f.content,
                  alt: "",
                  src: {
                    "256x192": f.thumbnail.replace("fs=80x60", "fs=256x192")
                  }
                });
                break;

              case "image":
              case "file":
              case "link":
                w.thumbnail = f.thumbnail, w.src = f.thumbnail, w.type = "image";
            }

            y.attachments[0].push(w);
          }

          z.events.push(y);
        }
      }
    }

    return this.ena(z, "aolChannel");
  },
  Nz: function (c, h, f) {
    c = {
      uin: C.k().fa.get("uin"),
      maxAttachments: h.maxAttachments || this.uL
    };
    E.api.ub.Zla(c, {
      fn: function (e) {
        this.loaded = !0;
        e = this.po(e.result.attachments);
        f.fn.call(f.scope, e);
      },
      scope: this
    }, {
      fn: function () {
        this.loaded = !1;
      },
      scope: this
    });
  }
});