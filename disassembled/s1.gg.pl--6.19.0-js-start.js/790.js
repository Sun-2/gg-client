Ext.define(E.core.ab.jl, {
  extend: C.core.ab.jl,
  mm: function (c) {
    var f = c;
    c < 1024 ? f = [c, " B"].join("") : c < 1048576 ? f = [(c / 1024).toFixed(2), " kB"].join("") : c < 1073741824 ? f = [(c / 1024 / 1024).toFixed(2), " MB"].join("") : c < 1099511627776 && (f = [(c / 1024 / 1024 / 1024).toFixed(2), " GB"].join(""));
    return f;
  },
  LJ: function (c) {
    var f = Math.round(parseInt(c, 10) / 1000),
        c = Math.floor(f / 60);
    f -= c * 60;
    return " (czas trwania: " + c + ":" + (f < 10 ? "0" + f : f) + ")";
  },
  N4: function () {
    function c(T) {
      var N = 0,
          L = [],
          I = {},
          G = {},
          h = "",
          aa;

      for (aa in T) {
        if (T.hasOwnProperty(aa)) {
          var Y = T[aa];
          N++;
          var Q = Y.lastMessageTime || Y.releaseAt || Y.createdAt;

          if (I.hasOwnProperty(Y.groupDate)) {
            S = I[Y.groupDate];
          } else {
            var S = Y.groupDate,
                g = Ext.Date.clearTime(new Date(C.k().pg.getTime() * 1000)),
                S = Ext.Date.clearTime(Ext.Date.parse(Y.groupDate, "Ymd")),
                g = (g.getTime() - S.getTime()) / 86400 / 1000,
                S = Y.relativeDate ? g == 0 ? E.lang.kF : g == 1 ? E.lang.dT : g > 1 && g < 7 ? E.ca.Cc.L3(S) : E.ca.Cc.L3(S) + ", " + E.ca.Cc.M3(Q, !1) : g < 0 ? E.lang.kF : E.lang.jF;
            I[Y.groupDate] = S;
          }

          G.hasOwnProperty(S) || (G[S] = [], L.push({
            sort: Y.groupDate,
            name: S
          }));
          G[S].push(Y);
        }
      }

      L.sort(function (l, n) {
        if (l.sort > n.sort) {
          return -1;
        }

        if (l.sort == n.sort) {
          return 0;
        }

        return 1;
      });
      var T = 0,
          o;

      for (o in L) {
        if (L.hasOwnProperty(o)) {
          S = L[o].name;
          N = G[S];
          h += '<div class="notificationsGroupHeader ' + (T == 0 ? "first" : "") + '">' + S + "</div><ul>";

          for (aa in N) {
            if (N.hasOwnProperty(aa)) {
              Y = N[aa], (Q = Y.lastMessageTime ? Y.lastMessageTime : Y.releaseAt) && S != E.lang.jF && (Y.relativeDate = Ext.Date.format(new Date(Q * 1000), "G:i")), h += this.itemTpl.apply(Y);
            }
          }

          h += "</ul>";
          T++;
        }
      }

      return h;
    }

    var f = this;
    this.ha("chat-unread", new Ext.XTemplate('<tpl if="[this.gc(values)] &gt; 0"><li class="sr-start-unread-item odd-item chat-unread"><div class="item-label"><span class="unread-ico sr-textmode-btn-a"></span><strong>{[this.gc(values)]} ' + E.lang.RW + ': </strong><span class="item-names">{[this.gn(values)]}</span></div><div class="item-icons"><span class="fadein"></span><span class="icons">{[this.ga(values)]}</span></div></li></tpl>', {
      compiled: !0,
      gc: function (e) {
        return e.zi.length || "";
      },
      gn: function (g) {
        for (var n = "", h = 0; h < g.zi.length; h++) {
          n += g.zi[h].name || "", h < g.zi.length - 1 && (n += ", ");
        }

        return eht(n);
      },
      ga: function (g) {
        for (var o = "", h = g.zi.length > 2 ? 3 : g.zi.length, p = 0; p < h; p++) {
          o += '<img alt="" class="sr-user-unreaded-avatar" src="' + g.zi[p].avatar + '" />';
        }

        return o;
      }
    }));
    this.ha("message-unread", new Ext.XTemplate('<li class="sr-start-unread-item odd-item message-unread"><span class="unread-ico sr-env-btn-a left"></span><span class="item-label bold">{[this.gc(values)]} ' + E.lang.oP + ' :<tpl for="messages">{name} </tpl></span></li>', {
      compiled: !0,
      gc: function (e) {
        return e.tb.length || "13";
      }
    }));
    this.ha("unread-advert", new Ext.XTemplate('<li class="sr-start-unread-advert"><span class="unread-gg-ico status-avail left"></span><span class="item-label bold">' + E.lang.YO + "</span></li>", {
      compiled: !0
    }));
    this.ha("start-panel", new Ext.XTemplate('<div id="sr-start-unread"><ul id="sr-start-unread-list">{[this.chatUnread(values)]}{[this.unreadAdvert(values)]}</ul><a href="#latest" class="latest clear">' + Ext.String.format(E.lang.QW, "{[this.gc(values)]}") + '</a></div><div id="sr-start-advert-wrap"><div class="user-btns right"><a href="#latest" class="profile-close">' + E.lang.aw + '<i></i></a></div><div id="sr-start-advert"><iframe class="default-iframe" src="/adocean" border="0" frameborder="0"></iframe></div></div>', {
      compiled: !0,
      oga: this.ma("chat-unread"),
      chatUnread: function (e) {
        return this.oga.apply(e);
      },
      xpa: this.ma("message-unread"),
      messageUnread: function (e) {
        return this.xpa.apply(e);
      },
      Dva: this.ma("unread-advert"),
      unreadAdvert: function (e) {
        return this.Dva.apply(e);
      },
      gc: function (e) {
        return e.length || "0";
      }
    }));
    this.ha("avatar-widget", new Ext.XTemplate('{[this.getAvatar(values)]}<div class="sr-user-status-wrap"><div class="sr-user-status {[this.gS(values)]}"></div><i></i></div><div class="sr-user-change-status d-none"><div class="sr-user-change-top popup-arr-up"></div><ul class="sr-user-change-list">{[this.gSL(values)]}</ul></div><div class="sr-user-name">{[this.gN(values)]}</div><div class="sr-user-desc">{[this.dsc(values)]}</div><div class="clear"></div>', {
      compiled: !0,
      gSL: function (g) {
        var h = "";
        Ext.each(g.$p, function (e) {
          h += '<li class="status-li"><div class="status-' + e.name + ' status-el"></div>' + e.label + "</li>";
        }, this);
        return h;
      },
      gS: function (e) {
        return "status-" + e.data.data.status;
      },
      getAvatar: function (e) {
        return '<img alt="" src="' + C.k().zc({
          uin: e.data.data.uin,
          size: 50,
          avatar: e.data.data.avatar
        }) + '" class="sr-user-avatar" />';
      },
      gN: function (e) {
        return eha(e.data.fp());
      },
      dsc: function (e) {
        return C.ca.xa.wd(e.data.data.description, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]);
      }
    }));
    this.ha("live-search-widget", new Ext.XTemplate('<div class="search-widget"><input type="text" id="live-search-input" class="live-search-input"><div id="search-result-list" class="search-result-list hidden"></div></div>', {
      compiled: !0
    }));
    this.ha("live-search-result", new Ext.XTemplate('<ul class="result-ul">{live-search-result}</ul>', {
      compiled: !0
    }));
    this.ha("live-search-Application-header", new Ext.XTemplate('<li class="item-header">' + E.lang.$O + "</li>", {
      compiled: !0
    }));
    this.ha("live-search-Contact-header", new Ext.XTemplate('<li class="item-header">' + E.lang.aV + "</li>", {
      compiled: !0
    }));
    this.ha("live-search-Conference-header", new Ext.XTemplate('<li class="item-header">' + E.lang.dP + "</li>", {
      compiled: !0
    }));
    this.ha("live-search-result-items", new Ext.XTemplate('<tpl for="."><li class="item-body {[xindex  === 1 ? "first" : ""]} {[this.getFamily(values)]}"><div class="item-avatar left">{[this.getAvatar(values)]}</div><div class="item-status">{[this.gt(values)]}</div>{[this.getLink(values)]}</li></tpl>', {
      compiled: !0,
      getAvatar: function (g) {
        var h = g.family;

        if (h === "Contact" || h === "Conference") {
          return '<img alt="" src="' + C.k().zc({
            uin: g.id,
            size: 50,
            avatar: g.icon
          }) + '" class="avatar-img gg-corner-all" />';
        }

        if (h === "Application") {
          return '<img alt="" src="' + ehu(g.icon) + '" class="app-' + g.id + '" />';
        }
      },
      getLink: function (g) {
        var h = g.family;

        if (h === "Contact" || h === "Conference") {
          return '<div class="item-link contact uin-' + g.id + '">profil</div>';
        }

        if (h === "Application") {
          return '<div class="item-link application app-' + g.app_id + '">link</div>';
        }
      },
      getFamily: function (e) {
        return e.family == "Application" ? "item-fam-application" : "";
      },
      gt: function (e) {
        return eht(e.title);
      }
    }));
    this.ha("live-search-results", new Ext.XTemplate("{[this.dr(values)]}", {
      itemTpl: this.ma("live-search-result-items"),
      Wra: this.ma("live-search-result"),
      dr: function (g) {
        try {
          var o = {};
          Ext.each(g, function (e) {
            o[e.family] || (o[e.family] = []);
            o[e.family].push(e);
          }, this);
          var g = "",
              h;

          for (h in o) {
            g += C.k().da.ma("live-search-" + h + "-header").apply({}) + this.itemTpl.apply(o[h]);
          }

          return this.Wra.apply({
            "live-search-result": g
          });
        } catch (p) {}
      },
      compiled: !0
    }));
    this.ha("live-search-no-results", new Ext.Template('<div class="live-search-no-results">' + E.lang.wP + "</div>", {
      compiled: !0
    }));
    this.ha("notifications-header", new Ext.XTemplate('<span class="sr-notifications-title"><i></i>' + E.lang.hT + '</span><ul class="sr-notifications-header-tabs" class=""><li class="notifications-conversation-tab"><a href="#latest">' + E.lang.cT + '<span class="counter"></span></a></li><li class="notifications-all-tab"><a href="#notifications">' + E.lang.kT + '<span class="counter"></span></a></li><li class="notifications-invitation-tab"><a href="#invitation">' + E.lang.fT + '<span class="counter"></span></a></li></ul><div class="sr-notifications-menu"><a href="#" class="sr-notifications-btn sr-notifications-close-btn">' + E.lang.GB + '<i></i></a><tpl if="clearBtn"><a href="#" class="sr-notifications-btn sr-notifications-clear-btn">' + E.lang.cP + '<i></i></a><div id="sr-notifications-clear-dropdown"></div></tpl></div><div class="clear"></div>', {
      compiled: !0
    }));
    this.ha("notifications-dropdown", new Ext.XTemplate('<div class="sr-notifications-dropdown-top"></div><ul class="sr-notifications-dropdown-list"><tpl for="."><li class="item">{[this.rc(values)]}</li>', "</tpl></ul>", {
      compiled: !0,
      rc: function (e) {
        return eha(e.name);
      }
    }));
    this.ha("notification-list-item", new Ext.XTemplate('<li class="item-body <tpl if="highlight">highlight</tpl>">{[this.getTemplate(values)]}<span class="sr-notifications-close"></span><span class="sr-notifications-releaseat">{[this.getDate(values)]}</span></li>', {
      compiled: !0,
      getDate: function (e) {
        return e.relativeDate ? '<span class="relativeDate">' + eha(e.relativeDate) + '</span><span class="fullDate d-none">' + eha(e.fullDate) + "</span>" : '<span class="fullDate">' + eha(e.fullDate) + "</span>";
      },
      getTemplate: function (e) {
        return C.k().qz.O3(e);
      }
    }));
    this.ha("notification-list", new Ext.XTemplate('<ul><tpl for=".">{[this.rc(values)]}', "</tpl></ul>", {
      compiled: !0,
      itemTpl: this.ma("notification-list-item"),
      rc: function (e) {
        return this.itemTpl.apply(e);
      }
    }));
    this.ha("notifications-all-more", new Ext.XTemplate('<tpl if="showMore"><tpl if="preloader"><span class="sr-notifications-preloader"></span></tpl><tpl if="preloader == false"><span class="sr-notifications-show-more-btn">' + E.lang.mT + "</span></tpl></tpl>"));
    this.ha("notifications-widget-more", new Ext.XTemplate('<tpl if="showMore"><div class="sr-notifications-widget-more"><div class="sr-notifications-widget-more-counter">i {countMore} ' + E.lang.iT + '</div><div class="sr-notifications-widget-more-close">' + E.lang.bT + "</div></div></tpl>"));
    this.ha("notifications-widget-list", new Ext.XTemplate('<ul><tpl for="."><li class="item-body {[xindex  === 1 ? "first" : ""]}"><div class="sr-notifications-body">{[this.rc(values)]}</div><div class="sr-notifications-widget-close"></div><div class="clear"></div></li></tpl></ul>', {
      compiled: !0,
      rc: function (e) {
        return C.k().qz.O3(e);
      }
    }));
    this.ha("invitations-list-item", new Ext.XTemplate('<li class="item-body {[this.highlight(values)]}">{[this.getAvatar(values)]}<div class="user-info"><span class="sender showname">{[this.getName(values)]}</span><div class="buttons">{[this.getButtons(values)]}</div></div><div class="message">{[this.getBody(values)]}</div><div class="sr-notifications-releaseat">{[this.getDate(values)]}</div><div class="clear"></div></li>', {
      compiled: !0,
      getName: function (e) {
        if (e.sender.label) {
          return eha(e.sender.label);
        }

        return eha(e.sender.id);
      },
      getAvatar: function (e) {
        return '<img alt="" src="' + C.k().zc({
          uin: e.sender.id,
          size: 50,
          avatar: 1
        }) + '" class="sr-user-avatar left gg-corner-all" />';
      },
      getButtons: function (g) {
        var h = '<div class="uiBtn blue invitations-list-accept-invite"><label><input type="button" value="' + E.lang.Uu + '"></label></div>';
        g.status == "waiting" && (h += '<div class="uiBtn stripped invitations-list-hide-invite"><label><input type="button" value="' + E.lang.HB + '"></label></div>');
        return h;
      },
      getDate: function (e) {
        return e.relativeDate ? '<span class="relativeDate">' + eha(e.relativeDate) + '</span><span class="fullDate d-none">' + eha(e.fullDate) + "</span>" : '<span class="fullDate">' + eha(e.fullDate) + "</span>";
      },
      getBody: function (e) {
        return eha(e.body.message);
      },
      highlight: function (e) {
        return e.status == "waiting" ? "highlight" : "";
      }
    }));
    this.ha("invitations-list", new Ext.XTemplate('<ul class="invitations-list"><tpl for=".">{[this.rc(values)]}', "</tpl></ul>", {
      compiled: !0,
      itemTpl: this.ma("invitations-list-item"),
      rc: function (e) {
        return this.itemTpl.apply(e);
      }
    }));
    this.ha("invitations-hide-bar", new Ext.XTemplate("<span>{[this.getLabel(values)]}</span> <i></i>", {
      getLabel: function (e) {
        return e && typeof e.hidden !== "undefined" ? e.hidden ? E.lang.lF : E.lang.eT : E.lang.lF;
      },
      compiled: !0
    }));
    this.ha("peeks-list-item", new Ext.XTemplate('<li class="link-body">{[this.getAvatar(values)]}{[this.getUsers(values)]}<span class="">' + E.lang.Jwa + ":</span>{[this.getDetails(values)]}</li>", {
      compiled: !0,
      getAvatar: A(""),
      getUsers: A(""),
      getDetails: A("")
    }));
    this.ha("peeks-links-list", new Ext.XTemplate('<ul><tpl for=".">{[this.rc(values)]}', "</tpl></ul>", {
      compiled: !0,
      itemTpl: this.ma("peeks-list-item"),
      rc: function (e) {
        return this.itemTpl.apply(e);
      }
    }));
    this.ha("conversations-list-item", new Ext.XTemplate('<li class="item-body <tpl if="highlight">highlight</tpl>"><span class="sr-status sr-user-status status-{[this.getStatus(values)]}"><i class="new-message"></i></span><span class="name">{[this.getName(values)]}</span><span class="message">{[values.message]}</span>{[this.getUnreadCount(values)]}<span class="sr-notifications-close"></span><span class="sr-notifications-releaseat">{[this.getDate(values)]}</span></li>', {
      compiled: !0,
      getStatus: function (e) {
        if (e.interlocutorType == E.api.ub.ic.Nd.Hc) {
          return "conference";
        }

        if ((e = Ext.StoreManager.lookup("ContactsStore").Ba(e.interlocutorIDNumber)) && e.get("protoInfo") && e.get("protoInfo").status) {
          return eha(e.get("protoInfo").status);
        }

        return "stranger";
      },
      getName: function (g) {
        if (g.interlocutorType == E.api.ub.ic.Nd.Hc) {
          var g = Ext.StoreManager.lookup("UsersStore").De(g.interlocutorIDNumber).qe(),
              h = "";
          g && (h = eha(g.get("ShowName")));
          return h || E.lang.NB;
        }

        if (h = Ext.StoreManager.lookup("ContactsStore").Ba(g.interlocutorID)) {
          return eha(h.get("ShowName") || g.interlocutorID);
        }

        return eha(g.interlocutorID);
      },
      getDate: function (e) {
        return e.relativeDate ? '<span class="relativeDate">' + eha(e.relativeDate) + '</span><span class="fullDate d-none">' + eha(e.fullDate) + "</span>" : '<span class="fullDate">' + eha(e.fullDate) + "</span>";
      },
      getUnreadCount: function (e) {
        return e.unreadCount > 0 ? '<span class="counter">' + (e.unreadCount > 99 ? 99 : e.unreadCount) + "</span>" : "";
      }
    }));
    this.ha("conversations-list", new Ext.XTemplate('<div class="latestsConversations"><ul><tpl for=".">{[this.rc(values)]}</tpl></ul></div>', {
      compiled: !0,
      itemTpl: this.ma("conversations-list-item"),
      rc: function (e) {
        return this.itemTpl.apply(e);
      }
    }));
    this.ha("notification-list-group", new Ext.XTemplate('<div class="notificationsGroup">{[this.dg(values)]}', "</div>", {
      itemTpl: this.ma("notification-list-item"),
      dg: c
    }));
    this.ha("invitations-list-group", new Ext.XTemplate('<div class="notificationsGroup"><ul class="invitations-list">{[this.dg(values)]}</ul></div>', {
      itemTpl: this.ma("invitations-list-item"),
      dg: c
    }));
    this.ha("conversations-list-group", new Ext.XTemplate('<div class="notificationsGroup latestsConversations">{[this.dg(values)]}', "</div>", {
      itemTpl: this.ma("conversations-list-item"),
      dg: c
    }));
    this.ha("account", new Ext.XTemplate('<div class="account-widget-bottom"><ul class=""><li><a href="#" class="account-profile">{[this.gL(values)]} ({[eha(values["user"].get("uin"))]})</a></li><li><a href="#" class="account-aol">' + E.lang.UO + '</a></li><li><a href="#" class="account-settings">' + E.lang.XO + '</a></li><li><a href="#" class="account-ggwidget">' + E.lang.CP + '</a></li><li><a href="#" class="account-help">' + E.lang.VO + '</a></li><li><a href="#" id="logout-cl2" class="account-logout">' + E.lang.WO + "</a></li></ul></div>", {
      gL: function (e) {
        return eha(e.user.fp());
      },
      getAvatar: A('<img alt="" src="" class="sr-user-avatar"/>'),
      printEmail: function (e) {
        e = eha(e.user.get("email"));
        return e !== "" ? ", " + e : "";
      },
      compiled: !0
    }));
    this.ha("contact", new Ext.XTemplate('<div class="sr-status status-{[eha(this.gus(values))]} {[eha(this.customStatus(values))]}"></div><div class="sr-star star-{[this.gst(values)]}"></div>{[this.gav(values)]}<div class="sr-contact-name">{[eht(values.ShowName)]}<span></span></div>{[this.gvr(values)]}<div class="sr-contact-desc"><span class="sr-comment">{[this.dsc(values)]}</span></div>', {
      compiled: !0,
      gst: function (e) {
        return e.extdata.gids && Ext.Array.indexOf(e.extdata.gids, 3) !== -1 ? "act" : "inact";
      },
      gvr: A('<div class="camera"></div>'),
      cnt: function (g) {
        var h = "";

        if (g.protoInfo.description) {
          return h = g.protoInfo.statusComments == 0 || typeof g.protoInfo.statusComments === "undefined" ? "+" : g.protoInfo.statusComments > 99 ? "99+" : g.protoInfo.statusComments, '<span class="sr-comment-counter">' + h + "</span>";
        }

        return "";
      },
      dsc: function (g) {
        var h = document.createElement("span"),
            g = g.type == 4 ? g.extdata.title ? g.extdata.title : "" : g.protoInfo.description ? g.protoInfo.description : "";
        h.innerHTML = g ? C.ca.xa.wd(g, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]) : "";
        return h.innerHTML;
      },
      gav: function () {
        return '<img alt="" src="' + C.k().zc({
          size: 50,
          relative: !0
        }) + '" class="sr-user-avatar" />';
      },
      customStatus: function (e) {
        e = this.gus(e);
        return C.k().Wi(e);
      },
      gus: function (g) {
        var h;
        h = !(g.type === 4 || g.uin == C.k().fa.get("uin")) ? "stranger" : "not_avail";
        return eha(g.protoInfo.status || h);
      }
    }));
    this.ha("dummycontact", new Ext.XTemplate('<div class="sr-status"></div><div class="sr-star star-{[this.gst(values)]}"></div>{[this.gav(values)]}{[this.gic(values)]}<div class="sr-contact-name">{[eht(values.ShowName)]}</div><div class="sr-contact-data">{[this.gdt(values)]}</div>', {
      compiled: !0,
      gic: function (e) {
        if ("undefined" !== typeof e.extdata && "undefined" !== typeof e.extdata.Email && Ext.isArray(e.extdata.Email) && e.extdata.Email.length > 0) {
          return '<span class="ico contactslist-mail"></span>';
        }

        return '<span class="ico contactslist-phone"></span>';
      },
      gdt: function (g) {
        var o = [],
            h = m,
            p = m;
        "undefined" !== typeof g.extdata && "undefined" !== typeof g.extdata.MobilePhone && Ext.isArray(g.extdata.MobilePhone) && g.extdata.MobilePhone.length > 0 && (p = g.extdata && g.extdata.MobilePhone[0]);
        "undefined" !== typeof g.extdata && "undefined" !== typeof g.extdata.Email && Ext.isArray(g.extdata.Email) && g.extdata.Email.length > 0 && (h = g.extdata && g.extdata.Email[0]);
        p && o.push(p);
        h && o.push('<span class="data-email">' + h + "</span>");
        return o.join(",");
      },
      gst: function (e) {
        return e.extdata.gids && Ext.Array.indexOf(e.extdata.gids, 3) !== -1 ? "act" : "inact";
      },
      gav: function () {
        return '<img alt="" src="' + C.k().zc({
          size: 50
        }) + '" class="sr-user-avatar" />';
      }
    }));
    this.ha("contacts-list-tools", new Ext.XTemplate('<div id="sr-contact-list-panel"><a href="#" id="sr-btn-change-view" class="btn-views"></a><a href="#" class="btn-add"></a><div class="clear"></div></div><div id="sr-contact-add-sth" class="d-none"><ul id="sr-contact-add-list" class="menu"><li class="sr-contact-add-el sr-btn-add-contact"><a href="#">' + E.lang.Uu + '</a></li><li class="sr-contact-add-el sr-btn-add-group"><a href="#">' + E.lang.QB + '</a></li><li class="sr-contact-add-el sr-btn-add-conference"><a href="#">' + E.lang.gQ + '</a></li></ul><i id="sr-contact-add-bot" class="menu-arrow popup-arrow-down"></i></div><div id="sr-contact-list-views" class="d-none"><div id="sr-contact-list-tools" class="sr-contact-list-tools"><div id="sr-contact-view-types"><div class="sr-contact-view-types-opts"><a href="#" class="sr-contact-list-tool sr-btn-change-avatars-avatars-right"></a><a href="#" class="sr-contact-list-tool sr-btn-change-avatars-avatars-left"></a><a href="#" class="sr-contact-list-tool sr-btn-change-avatars-no-avatars active"></a></div><div class="clear"></div></div><div class="sr-contact-list-tool sr-btn-change-view sr-btn-change-view-groups"><i class="show-groups-checkbox"><i class="sr-form-checkbox"></i></i>' + E.lang.sV + '</div><div class="sr-contact-list-tool sr-btn-change-view sr-btn-change-view-descriptions"><i class="show-description-checkbox"><i class="sr-form-checkbox"></i></i>' + E.lang.rV + '</div><div class="sr-contact-list-tool sr-btn-change-view sr-btn-change-view-synchronized"><i class="show-synchronized-checkbox"><i class="sr-form-checkbox"></i></i>' + E.lang.tV + '</div></div><div id="sr-contact-list-bot" class="popup-arr-down"></div></div>', {
      compiled: !0
    }));
    this.ha("contacts-list-search", new Ext.Template('<div id="sr-contact-list-search">', '<input class="search-input" type="text" value="" /><a class="search-cancel-btn d-none" href="#"></a></div>', {
      compiled: !0
    }));
    this.ha("contactsGroup", new Ext.XTemplate('<div class="sr-contacts-group {[this.iV(values)]}"><div class="sr-contacts-group-title"><span class="sr-contacts-group-title-arrow"></span><span class="sr-contacts-group-name">{[eha(values.group)]}</span><span class="sr-contacts-group-counter">{counter}</span><span class="sr-contacts-group-edit">e</span></div><div class="sr-contacts-group-list {[this.iE(values)]}">{contacts}</div></div>', {
      compiled: !0,
      iV: function (g) {
        if (g.Yh) {
          var n = g.Yh.QK,
              h = g.Yh.visible,
              g = g.UK;

          if (n > 0 && h == 0) {
            return "d-none";
          }

          if (n == 0 && h == 0 && (g || typeof g == "undefined")) {
            return "d-none";
          }
        }

        return "";
      },
      iE: function (g) {
        if (g.Yh) {
          var h = g.Yh.visible;

          if (g.Yh.QK == 0 && h == 0) {
            return "d-none";
          }
        }

        return "";
      }
    }));
    this.ha("contactsListGroups", new Ext.XTemplate('<div class="clear"></div><div id="sr-contact-list-group-edit" class="d-none"><div id="sr-contact-list-group-opts" class="sr-contact-list-group-opts"><ul id="sr-contact-list-group-opts-list" class="menu"><li><a href="#" id="sr-contact-list-group-edit-link">' + E.lang.Wu + '</a></li><li><a href="#" id="sr-contact-list-group-delete-link">' + E.lang.RB + '</a></li></ul><i class="menu-arrow popup-arrow-down"></i></div></div><div id="sr-contact-list-container" class="sr-scrollbars">{[this.dg(values)]}</div>', {
      Gf: m,
      Rx: this.ma("contact"),
      rJ: 2,
      qJ: this.ma("dummycontact"),
      Yj: this.ma("contactsGroup"),
      store: m,
      dg: function (g) {
        try {
          var o = "",
              h = "";
          Ext.iterate(g, function (e, l) {
            e = e.replace("key", "");
            h = "";
            Ext.each(l.contacts, function (n, b) {
              h += n.type == this.rJ ? '<div id="x-' + e + "-" + +b + '" class="sr-contact dummycontact ' + (typeof n.Bc != "undefined" && n.Bc === !1 ? " d-none" : "") + ' ">' + this.qJ.apply(n) + "</div>" : '<div id="x-' + e + "-" + +b + '" class="sr-contact' + (n.protoInfo.friend === 1 ? " friend" : "") + " " + (n.protoInfo.description && n.protoInfo.description !== "" ? " show-description" : "") + (n.protoInfo.avatar && n.protoInfo.avatar !== "" ? " show-avatar" : "") + (n.type === 4 ? " conference show-description" : "") + (typeof n.Bc != "undefined" && n.Bc === !1 ? " d-none" : "") + ' ">' + this.Rx.apply(n) + "</div>";
            }, this);
            o += this.Yj.apply({
              group: l.Gf,
              contacts: h,
              counter: l.as.join("/"),
              Yh: l.Yh,
              UK: l.UK
            });
          }, this);
          return o;
        } catch (p) {}
      },
      compiled: !0
    }));
    this.ha("contactsListStars", new Ext.XTemplate('<div id="sr-contact-list-container" class="sr-scrollbars">{[this.dg(values)]}</div>', {
      Gf: m,
      Rx: this.ma("contact"),
      rJ: 2,
      qJ: this.ma("dummycontact"),
      dg: function (g) {
        try {
          var n = "";
          Ext.each(g, function (e, l) {
            if (e.duplicated) {
              return !1;
            }

            n += e.type == this.rJ ? '<div id="x-' + l + '" class="sr-contact dummycontact ' + (typeof e.Bc != "undefined" && e.Bc === !1 ? " d-none" : "") + ' ">' + this.qJ.apply(e) + "</div>" : '<div id="x-' + l + '" class="sr-contact' + (e.protoInfo.friend === 1 ? " friend" : "") + " " + (e.protoInfo.description && e.protoInfo.description !== "" ? " show-description" : "") + (e.type === 4 ? " conference show-description" : "") + (e.protoInfo.avatar && e.protoInfo.avatar !== "" ? " show-avatar" : "") + (typeof e.Bc != "undefined" && e.Bc === !1 ? " d-none" : "") + ' ">' + this.Rx.apply(e) + "</div>";
          }, this);
          return n;
        } catch (h) {}
      },
      compiled: !0
    }));
    this.ha("chat-manager-emoticons-item", new Ext.XTemplate('<tpl for="."><img alt="" src="{[eha(values.src)]}" title="{title}" class="emoticon-img"></tpl>', {
      compiled: !0
    }));
    this.ha("chat-accordion-item-footer", new Ext.Template('<div class="chat-submit-buttons"><a href="#" id="enter-btn-{uin}" class="enter-btn"><i></i></a><a href="#" id="send-btn-{uin}" class="send-btn">' + E.lang.FO + "</a></div>", {
      compiled: !0
    }));
    this.ha("chat-accordion-item-toolbar", new Ext.XTemplate('<span class="toolbar-left"><a href="#" class="emots-btn"><i></i></a><a href="#" class="file-upload-btn disabled"><i class="sr-chat-wnd-btn"></i></a><a href="#" class="giphy-btn">' + E.lang.CB + '</a></span><span class="toolbar-right"><a href="#" class="settings-btn"><i></i></a><a href="#" class="scroll-down-btn"><i></i></a></span>', {
      compiled: !0
    }));
    this.ha("bot-chat-accordion-item-toolbar", new Ext.Template('<span class="toolbar-left"><a href="#" class="emots-btn"><i></i></a><a href="#" class="file-upload-btn disabled"><i class="sr-chat-wnd-btn"></i></a></span><span class="toolbar-right"><a href="#" class="settings-btn"><i></i></a><a href="#" class="scroll-down-btn"><i></i></a></span>', {
      compiled: !0
    }));
    this.ha("chat-accordion-conference-item-toolbar", new Ext.Template('<span class="toolbar-left"><a href="#" class="emots-btn"><i></i></a><a href="#" class="file-upload-btn disabled"><i class="sr-chat-wnd-btn"></i></a><a href="#" class="giphy-btn">' + E.lang.CB + '</a></span><span class="toolbar-right"><a href="#" class="settings-btn"><i></i></a><a href="#" class="scroll-down-btn"><i></i></a></span>', {
      compiled: !0
    }));
    this.ha("chat-manager-settings-toolbar", new Ext.Template('<div class="chat-settings-menu"><div class="menu-header">' + E.lang.BB + '</div><ul class="menu-list menu"><li class="settings-item"><span>' + E.lang.QO + '</span><a href="#" class="settings-btn sr-chat-setting-on-btn settings-mute"></a></li><li class="settings-item"><span>' + E.lang.RO + '</span><a href="#" class="settings-btn sr-chat-setting-on-btn settings-archive"></a></li><li class="settings-item settings-clear"><span class="settings-clear clear-all">' + E.lang.AB + '</span></li></ul><i class="menu-arrow popup-arrow-down"></i></div>', {
      compiled: !0
    }));
    this.ha("conference-manager-settings-toolbar", new Ext.Template('<div class="conference-settings-menu chat-settings-menu"><div class="menu-header">' + E.lang.BB + '</div><ul class="menu-list menu"><li class="settings-item settings-clear"><span class="settings-clear clear-all">' + E.lang.AB + '</span></li></ul><i class="menu-arrow popup-arrow-down"></i></div>', {
      compiled: !0
    }));
    this.ha("chat-accordion-chat-buttons", new Ext.XTemplate("{[this.cacb(values)]}", {
      cacb: function () {
        return C.k().audioVideo.p2p_enabled ? '<div class="chat-actions"><a class="add-button"><i></i></a><a class="video-button"><i></i></a><a class="audio-button"><i></i></a></div>' : '<div class="chat-actions"><a class="add-button"><i></i></a></div>';
      },
      compiled: !0
    }));
    this.ha("chat-manager-empty", new Ext.Template('<div class="sr-chat-manager-empty"><div class="greeter">' + E.lang.IU + '</div><div class="buttons"><div class="btn-spin-the-roulette blue uiBtn wide"><label><input type="button" value="' + E.lang.cr + '"/></label></div></div></div>', {
      compiled: !0
    }));
    this.ha("chat-manager-menu", new Ext.Template('<div class="chat-manager-menu d-none" id="chat-manager-menu"><div class="chat-manager-item giphy-menu no-select d-none"></div><div class="chat-manager-item emoticons-menu no-select d-none"><div class="last-emoticons-list d-none"></div><div class="emoticons-list"></div></div><div class="chat-manager-item settings-menu no-select d-none"></div></div>', {
      compiled: !0
    }));
    this.ha("chat-text", new Ext.Template('<div contenteditable="true" id="chat-text"></div>', {
      compiled: !0
    }));
    this.ha("chat-accorion-item-opened-title", new Ext.XTemplate('<span class="user-status status-{[this.gs(values)]} status{uin}"></span><span class="nick">{[eha(this.gu(values).ShowName)]}</span>', {
      gs: function (e) {
        return eha(e.user.data.protoInfo.status || "not_avail");
      },
      gu: function (e) {
        return e.user.data;
      }
    }));
    this.ha("chat-accorion-item-opened-description", new Ext.XTemplate('<span class="descr">{[this.dsc(this.gu(values).protoInfo.description)]}</span>', {
      gu: function (e) {
        return e.user.data;
      },
      dsc: function (e) {
        return C.ca.xa.wd(e, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]);
      }
    }));
    this.ha("upload-item", new Ext.XTemplate('<div class="upload-item"><div class="upload-name-back">{[eht(values.file_name)]} ({[this.gT(values)]})</div><div class="upload-progress-bar" style="width: {[this.gP(values)]}%"><div class="upload-name">{[eht(values.file_name)]} ({[this.gT(values)]})</div></div><i class="upload-close"></i></div>', {
      gT: function (e) {
        return f.mm(e.file_size);
      },
      gP: function (e) {
        return ~~(e.file_send_size / e.file_size * 100);
      },
      compiled: !0
    }));
    this.ha("upload-item-error", new Ext.XTemplate('<div class="upload-item upload-item-error"><div class="upload-name-back">{[eht(values.file_name)]} ({[this.gT(values)]})</div><i class="upload-close"></i><div class="upload-error-msg">' + E.lang.LX + "</div></div>", {
      gT: function (e) {
        return f.mm(e.file_size);
      },
      compiled: !0
    }));
    this.ha("upload-items", new Ext.XTemplate('<tpl for=".">{[this.gA(values)]}</div></tpl>', {
      dwa: this.ma("upload-item"),
      cwa: this.ma("upload-item-error"),
      gA: function (e) {
        return e.error ? this.cwa.apply(e) : this.dwa.apply(e);
      },
      compiled: !0
    }));
    this.ha("chat-accordion-conference-buttons-audio-video", new Ext.Template('<div class="chat-actions"><a class="add-button"><i></i></a><a class="video-button"><i></i></a><a class="audio-button"><i></i></a></div>', {
      compiled: !0
    }));
    this.ha("chat-accordion-conference-buttons", new Ext.Template('<a class="add-button"><i></i></a>', {
      compiled: !0
    }));
    this.ha("chat-accordion-item-opened", new Ext.XTemplate('<div class="header"><div class="chat-btns"><a class="min-button"><i></i></a><a class="close-button"><i></i></a></div><div class="chat-data">{[this.ga(values)]}<div class="title"><span class="user-status {[this.gs(values)]} status{uin}"></span><span class="nick">{[eha(this.gu(values).ShowName)]}</span></div>{[this.dsc(values)]}{[this.gib(values)]}</div></div><div class="clear"></div><div class="dynamic-placeholder"></div><div class="messages-placeholder d-none"></div><div class="body normal"></div><div class="uploads-placeholder"></div><div class="indicator d-none"><a href="#" class="chat-indicator-counter-btn"><span class="chat-indicator-counter d-none">0</span></a></div><div class="footer"><div class="chat-toolbar">{[this.gt(values)]}</div><div class="chat-area"></div><div class="chat-submit-toolbar">{[this.gf(values)]}</div></div>', {
      EJ: this.ma("chat-accordion-item-footer"),
      Lfa: this.ma("bot-chat-accordion-item-toolbar"),
      Vua: this.ma("chat-accordion-item-toolbar"),
      kga: this.ma("chat-accordion-chat-buttons"),
      gs: function (g) {
        var h = "status-",
            g = g.user ? g.user.data ? !(g.user.data.type === 4 || g.uin == C.k().fa.get("uin")) ? eha(g.user.data.protoInfo.status || "stranger") : eha(g.user.data.protoInfo.status || "not_avail") : "stranger" : "stranger";
        h += g;
        (g = C.k().Wi(g)) && (h += " " + g);
        return h;
      },
      iN: function (e) {
        return eha(Ext.String.format(E.lang.zB, e.user.data.ShowName)) + "</span>";
      },
      ga: function (e) {
        return '<img alt="" src="' + C.k().zc({
          uin: e.uin,
          size: 50,
          avatar: e.avatar,
          user: e.user
        }) + '" class="sr-user-avatar left gg-corner-all" />';
      },
      gf: function (e) {
        return this.EJ.apply({
          uin: e.uin,
          Z4: e.user.data.protoInfo.bot || !1
        });
      },
      gt: function (e) {
        return e.user.data.protoInfo.bot ? this.Lfa.apply({}) : this.Vua.apply(e);
      },
      gib: function (g) {
        var h = g.user,
            g = h.data.protoInfo.bot || !1,
            h = h.km(h.oe.dx | h.oe.conference);
        return !g && h ? this.kga.apply({}) : "";
      },
      gu: function (e) {
        return e.user.data;
      },
      dsc: function (g) {
        var n = g.user.data.protoInfo.description,
            g = g.user.xm(),
            h = "description",
            n = C.ca.xa.wd(n, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]);
        h += g ? " anonymous-description" : "";
        return '<div class="' + h + '"><span class="descr">' + n + "</span></div>";
      },
      compiled: !0
    }));
    this.ha("chat-accordion-conference-item-opened", new Ext.XTemplate('<div class="header"><div class="chat-btns"><a class="min-button"><i></i></a><a class="close-button"><i></i></a></div><div class="chat-data"><div class="change-avatar-btn-ct">{[this.ga(values)]}</div><div class="title"><span class="user-status status-{[eha("conference")]} status{uin}"></span><span class="name">{[this.gsn(values)]}</span></div><div class="description conference"></div><div class="uiBtn small white conf-tbar-leave-btn"><label><i></i><input type="button" value="' + E.lang.MP + '"></label></div><div class="clear"></div><div class="conf-tbar"></div>{[this.gib(values)]}</div><div class="clear"></div></div><div class="clear"></div><div class="messages-placeholder d-none"></div><div class="body normal"></div><div class="uploads-placeholder"></div><div class="indicator no-select d-none"><span class="chat-indicator-counter d-none">0</span></div><div class="footer"><div class="chat-toolbar">{[this.gt(values)]}</div><div class="chat-area"></div><div class="chat-submit-toolbar">{[this.gf(values)]}</div></div>', {
      EJ: this.ma("chat-accordion-item-footer"),
      toolbar: this.Wa("chat-accordion-conference-item-toolbar"),
      iga: this.Wa("chat-accordion-conference-buttons"),
      jga: this.Wa("chat-accordion-conference-buttons-audio-video"),
      ga: function (g) {
        var n = g.user.get("visible") == !0 ? "" : "d-none",
            h = "";
        h += '<img alt="" src="' + C.k().zc({
          uin: g.uin,
          size: 50,
          type: "conference"
        }) + '" class="sr-user-avatar left gg-corner-all" />';
        h += '<div class="change-avatar-btn uiBtn white ' + n + '"><label><input type="button" value="' + E.lang.ew + '"></label></div>';
        return h;
      },
      gf: function (e) {
        return this.EJ.apply({
          uin: e.uin
        });
      },
      gt: x("toolbar"),
      gib: function () {
        return C.k().audioVideo.conference_enabled ? this.jga : this.iga;
      },
      gtt: function (e) {
        return eha(e.user.get("extdata").title || "");
      },
      gsn: function (e) {
        return eha(e.user.get("ShowName") || "");
      },
      compiled: !0
    }));
    this.ha("chat-accordion-item-closed", new Ext.XTemplate('<div class="chat-btns">{[this.gc(values)]}{[this.gt(values)]}<a class="close-btn"><i></i></a></div><div class="chat-data"><div class="user-status {[this.gus(values)]} status{[this.gu(values)]}"></div><div class="user-description description{uin}"><span class="nick">{[this.gusn(values)]}</span><span class="sentence"></span><div class="fadeout"></div></div></div>', {
      gu: function (e) {
        return eha(e.user.get("uin"));
      },
      gus: function (g) {
        var h = "status-",
            g = g.user ? g.user.data ? !(g.user.data.type === 4 || g.uin == C.k().fa.get("uin")) ? eha(g.user.data.protoInfo.status || "stranger") : eha(g.user.data.protoInfo.status || "not_avail") : "stranger" : "stranger";
        h += g;
        (g = C.k().Wi(g)) && (h += " " + g);
        return h;
      },
      gusn: function (e) {
        return eht(e.user.get("ShowName"));
      },
      gc: function (g) {
        var h = "";
        g.nb === "0" && (h = "d-none");
        return '<div class="d-none chat-counter left ' + h + '">' + eha(g.nb) + "</div>";
      },
      gt: function () {
        var e = "";
        C.k().ia.ob("chat").showDate == !0 && (e = '<div class="chat-timer left no-select"></div>');
        return e;
      },
      compiled: !0
    }));
    this.ha("chat-item", new Ext.XTemplate('<div class="closed-item"></div><div class="opened-item"></div>', {
      compiled: !0
    }));
    this.ha("chat-sentences-aol-link", new Ext.XTemplate('<div class="conversation-aol"><a href="" class="chat-aol-previous">' + E.lang.JO + '</a><a href="{[this.gA(values)]}" class="chat-aol-archive d-none">' + E.lang.GO + '</a><span class="chat-aol-previous-spinner d-none"><i></i>' + E.lang.HO + '</span><span class="chat-aol-previous-empty d-none">' + E.lang.IO + "</span></div>", {
      gA: function (e) {
        e = e.Msa.store;
        return e.type === "chat" ? "#aol/" + e.Aa + "/1" : "/#aol/" + e.Aa + "/2";
      },
      compiled: !0
    }));
    this.ha("chat-sentences-attachment-unknown", new Ext.XTemplate("{[this.gA(values)]}", {
      gA: function (e) {
        e = e.attachment;
        e = e.content || e.link || m;
        return '<a class="ml__extended-unknown" target="_blank" href="' + eha(C.ca.xa.Xe(e)) + '"><div class="ml__item-part-content"><div class="ml__extended-meta"><div class="ml__extended-meta-title">' + e + '</div><div class="ml__extended-meta-host">' + C.ca.xa.ce(e) + "</div></div></div></a>";
      },
      compiled: !0
    }));
    this.ha("chat-sentences-attachment-image", new Ext.XTemplate("{[this.gA(values)]}", {
      gA: function (g) {
        var n = g.attachment,
            h = n.content || n.link || m,
            g = (n = n.image || m) ? '<div class="ml__extended-image"><img src="' + E.ca.di.P3(n, g.id) + '"/></div>' : "";
        return '<div class="ml__item-part-content"><a class="ml__extended-image-attachment" target="_blank" href="' + eha(C.ca.xa.Xe(h)) + '">' + g + "</a></div>";
      },
      compiled: !0
    }));
    this.ha("chat-sentences-attachment-link", new Ext.XTemplate("{[this.gA(values)]}", {
      gA: function (g) {
        var w = g.attachment,
            h = w.image || m,
            y = w.title || m,
            u = w.type,
            o = w.content || w.link || m,
            w = '<div class="ml__extended-meta-description">' + (w.description || "") + "</div>",
            y = '<div class="ml__item-part-content"><a class="ml__extended-link" target="_blank" href="' + eha(C.ca.xa.Xe(o)) + '"><div class="ml__extended-link-content">' + (h ? '<div class="ml__extended-link-image"></div>' : "") + '<div class="ml__extended-meta">' + (y ? '<div class="ml__extended-meta-title">' + y + "</div>" : "") + w + '<div class="ml__extended-meta-host">' + C.ca.xa.ce(o) + "</div></div></div></a></div>";
        h && E.ca.di.bma(h, g.id, u);
        return y;
      },
      compiled: !0
    }));
    this.ha("chat-sentences-attachment-publink", new Ext.XTemplate("{[this.gA(values)]}", {
      gA: function (g) {
        var q = g.attachment,
            h = q.image || m,
            u = q.content || q.link || m,
            o = q.fileName || q.title || u || m,
            q = q.fileSize || m;
        return '<div class="ml__item-part-actions"><span class="ml__info ml__info--edisc"></span></div><div class="ml__item-part-content"><div class="ml__file-data-wrapper"><div class="ml__file-image">' + (h ? '<img alt="" src="' + C.ca.Da.Tla(h, 33, 33, g.id) + '"/>' : '<i class="sr-file-type-icon sr-file-type-icon-default"></i>') + '</div><div class="ml__file-meta"><div class="ml__file-meta-name">' + C.ca.xa.qc(u, eht(o)) + '</div><div class="ml__file-meta-size"><span class="publink-size">' + eht(q) + '</span></div></div></div><div class="ml__file-button-wrapper"><a class="uiBtn blue" role="button" target="_blank" href="' + eha(u) + '"><span>' + E.lang.yR + "</span></a></div></div>";
      },
      compiled: !0
    }));
    this.ha("chat-sentences-attachment-publink-image", new Ext.XTemplate("{[this.gA(values)]}", {
      gA: function (g) {
        var n = g.attachment,
            h = n.content || n.link || m,
            g = (n = n.image || m) ? '<div class="ml__extended-image"><img src="' + E.ca.di.P3(n, g.id) + '"/></div>' : "";
        return '<div class="ml__item-part-actions"><span class="ml__info ml__info--edisc"></span></div><div class="ml__item-part-content"><a class="ml__extended-image-attachment" target="_blank" href="' + eha(C.ca.xa.Xe(h)) + '">' + g + "</a></div>";
      },
      compiled: !0
    }));
    this.ha("chat-sentences-attachment-giphy-image", new Ext.XTemplate("{[this.gA(values)]}", {
      gA: function (g) {
        var n = g.attachment.link || m,
            g = g.attachment.image,
            g = '<img alt="" src="' + eha(g) + '"/>',
            h = "";
        n && (h += '<div class="ml__item-part-content"><a target="_blank" href="' + eha(n) + '">' + g + "</a><i></i></div>");
        return h;
      },
      compiled: !0
    }));
    this.ha("chat-sentences-attachment-giphy-mp4", new Ext.XTemplate("{[this.gA(values)]}", {
      gA: function (g) {
        var n = g.attachment.link || m,
            g = '<video style="border-radius: 6px 6px 0 0;" width="200" loop poster="' + g.attachment.gifStatic + '"><source src="' + g.attachment.gifMP4 + '" type="video/mp4" /></video>',
            h = "";
        n && (h += '<div class="ml__item-part-content"><a target="_blank" href="' + eha(n) + '">' + g + "</a><i></i></div>");
        return h;
      },
      compiled: !0
    }));
    this.ha("chat-sentences-list", new Ext.XTemplate('<ul class="item-conversation"><tpl for=".">{[this.buildMsg(values,xindex)]}</tpl></ul>', {
      Vza: m,
      Uza: "me",
      buildMsg: function (g, h) {
        switch (g.type) {
          case "notification":
          case "file":
            return g.message;

          default:
            return this.gB(g, h);
        }
      },
      gH: A(""),
      gB: function (g, z) {
        var h = this.gDiC(g),
            B = this.gCCN(g),
            y = this.gMEC(g),
            w = E.ca.Cc.ny(g.time, !0),
            o = E.ca.Cc.N3(g.time);
        return '<li class="ml__item ml__item--' + h + B + y + '">' + this.gDB(g, w) + '<div class="ml__item-wrapper">' + this.gAv(g) + '<div class="ml__item-userdata">' + this.gUN(g) + this.gT(g, o) + '</div><div title="' + w + '" class="ml__item-content">' + this.gMP(g, z, w) + "</div></div></li>";
      },
      gT: function (g, h) {
        if (C.k().ia.ob("chat").showDate == !0 && g.showTime) {
          return '<div class="ml__item-time">' + h + "</div>";
        }

        return "";
      },
      gAv: function (e) {
        return e.showUserData ? '<div class="ml__item-avatar"><img src="' + C.k().zc({
          uin: e.uin,
          size: 30
        }) + '" /></div>' : "";
      },
      gUN: function (g) {
        var n = g.user,
            h = n;

        if ("String" !== typeof usr && n && n.data && n.data.ShowName && n.data.ShowName != "") {
          h = n.data.ShowName;
        }

        h += "";
        return g.showUserData ? '<div class="ml__item-username">' + h + ", </div> " : "";
      },
      gDiC: function (e) {
        return e.direction === 1 ? "outgoing" : "incoming";
      },
      gCCN: function (e) {
        return e.continued === !0 ? " ml__item--continued" : "";
      },
      gDB: function (g, h) {
        return g.showDayDate ? '<div class="ml__daybreak">' + h + "</div>" : "";
      },
      gMEC: function (e) {
        return ["aclBilateralError", "undelivered"].indexOf(e.type) !== -1 ? " ml__item--error" : "";
      },
      gMP: function (g, z, h) {
        var B = "";

        if (g.insecure && g.insecure == !0) {
          B += '<div title="' + h + '" class="ml__item-part ml__item-part--insecure"><div class="ml__item-part-actions"><span class="ml__info ml__info--warning"></span></div><div class="ml__item-part-content">' + g.message + "</div></div>";
        } else {
          if (g.type === "aclBilateralError") {
            B += '<div title="' + h + '" class="ml__item-part ml__item-part--error"><div class="ml__item-part-content">' + E.lang.MO + ' <a href="#profile/' + g.extraData.ownerId + '">' + E.lang.OO + '</a><span class="ml__info ml__info--warning"></span>';
          } else {
            if (g.type === "undelivered") {
              B += '<div title="' + h + '" class="ml__item-part ml__item-part--error"><div class="ml__item-part-content">' + E.lang.nq + ' <a href="#" class="undeliv-msg-btn">' + E.lang.Pc + '</a><span class="ml__info ml__info--warning"></span>';
            } else {
              var y = {
                Ipa: g.message,
                Wea: g.attachments || m,
                time: g.time || m,
                sender: g.uin || m,
                user: g.user || m,
                messageId: g.messageId,
                images: g.images || []
              },
                  w = E.ca.di.uja(y);

              if (w && w.length) {
                var o = !1;
                Ext.Array.each(w, function (q, n) {
                  if (Ext.isEmpty(q.text.trim())) {
                    return !0;
                  }

                  var L = "",
                      p = q.attachment,
                      u = "ml__part-" + g.time + "-" + n + "-" + (Math.floor(Math.random() * 1000) + 0),
                      l = q.text;
                  Ext.Object.getSize(p) === 0 && (l = l.replace(/(^[^<]+)|(>[^<]+<)|(>[^<]+$)/g, function (e) {
                    return e.replace(/\ {2}/g, " &nbsp;");
                  }), w[n + 1] && w[n + 1].attachment && this.aLB(w[n + 1].attachment) && (o = !0, l += C.ca.xa.qc(w[n + 1].attachment.content)), L += '<div title="' + h + '" class="ml__item-part ml__item-part--text"><div class="ml__item-part-content">' + l.trim() + "</div></div>");

                  if (Ext.Object.getSize(p) > 0) {
                    this.aLB(p) && !o && (B += '<div title="' + h + '" class="ml__item-part ml__item-part--text"><div class="ml__item-part-content">' + C.ca.xa.qc(p.content) + "</div></div>");
                    var b = p.peeksed ? !1 : !0;
                    L += this.gA(q.attachment, u, y, b);
                    o = !1;
                  }

                  Ext.isEmpty(L) || (B += '<div id="' + u + '" title="' + h + '" class="ml__item-part' + (b ? " d-none" : "") + this.gEC(q) + '">' + L + "</div>");
                }, this);
              }
            }
          }
        }

        return B;
      },
      aLB: function (e) {
        if (["file", "image"].indexOf(e.attachmentType) !== -1 || e.formGifApi) {
          return !1;
        }

        return !0;
      },
      gEC: function (g) {
        if (g.attachment) {
          var h = ["ml__item-part--extended"];

          switch (!0) {
            case this.iPI(g.attachment):
              h.push("ml__item-part--publink-image");
              break;

            case this.iGI(g.attachment):
              h.push("ml__item-part--giphy-image");
              break;

            case this.iAL(g.attachment):
              h.push("ml__item-part--link");
              break;

            case this.iAI(g.attachment):
              h.push("ml__item-part--image");
              break;

            case this.iAU(g.attachment):
              h.push("ml__item-part--unknown");
              break;

            case this.iF(g.attachment):
              h.push("ml__item-part--publink-file");
          }

          return " " + h.join(" ");
        }

        return "";
      },
      Qoa: this.ma("chat-sentences-attachment-link"),
      Wqa: this.ma("chat-sentences-attachment-publink"),
      Vqa: this.ma("chat-sentences-attachment-publink-image"),
      Xma: this.ma("chat-sentences-attachment-giphy-mp4"),
      Vma: this.ma("chat-sentences-attachment-giphy-image"),
      Cna: this.ma("chat-sentences-attachment-image"),
      zva: this.ma("chat-sentences-attachment-unknown"),
      gA: function (g, w, h, y) {
        var u = g.content || g.link,
            o = g.content || g.link,
            y = y ? " d-none" : "";

        if (g.peeksed) {
          if (this.iPI(g)) {
            o = this.Vqa.apply({
              image: g.image,
              id: w,
              attachment: g,
              kp: y
            });
          } else {
            if (this.iGI(g)) {
              o = Ext.isDefined(g.gifMP4) ? this.Xma.apply({
                id: w,
                attachment: {
                  link: u,
                  gifStatic: g.gifStatic,
                  gifMP4: g.gifMP4
                },
                kp: y
              }) : this.Vma.apply({
                id: w,
                attachment: {
                  link: u,
                  image: g.image
                },
                kp: y
              });
            } else {
              switch (g.attachmentType) {
                case "file":
                  o = this.Wqa.apply({
                    attachment: g,
                    id: w,
                    kp: y
                  });
                  break;

                case "link":
                case "video":
                  o = this.Qoa.apply({
                    attachment: g,
                    id: w,
                    kp: y
                  });
                  break;

                case "image":
                  o = this.Cna.apply({
                    attachment: g,
                    id: w,
                    kp: y
                  });
                  break;

                default:
                  o = this.zva.apply({
                    attachment: g,
                    id: w,
                    kp: y
                  });
              }
            }
          }
        }

        !g.peeksed && E.ca.di.zqa(w, u, h);
        return o;
      },
      gID: function (e) {
        return e ? ' id="' + e + '"' : "";
      },
      gDC: function (e) {
        return e.direction === E.models.xc.prototype.Bf.Ih || e.Ija ? " delivered" : "";
      },
      gN: function (g, o) {
        if (C.k().fa.get("uin") === g.uin) {
          return E.lang.Bn + ":";
        }

        var h = g.user,
            p = h;

        if ("String" !== typeof h) {
          h && h.data && h.data.ShowName && h.data.ShowName != "" ? p = h.data.ShowName : h == C.k().fa.data.uin && (p = C.k().fa.fp());
        }

        p += "";
        return eha((o ? p.slice(0, 1) : p) + ":");
      },
      iPI: function (e) {
        return e.attachmentType === "file" && Ext.isDefined(e.ggdriveBinaryImage);
      },
      iGI: function (e) {
        return parseInt(e.fromGifApi, 10) === 1;
      },
      iAL: function (e) {
        return ["link", "video"].indexOf(e.attachmentType) !== -1;
      },
      iAI: function (e) {
        return e.attachmentType === "image";
      },
      iAU: function (e) {
        return e.attachmentType === "unknown";
      },
      iF: function (e) {
        return e.attachmentType === "file" && !Ext.isDefined(e.ggdriveBinaryImage);
      },
      compiled: !0
    }));
    this.ha("message-read-info", new Ext.XTemplate("", "{[this.gRT(values)]}", {
      gRT: function (e) {
        return e.direction === E.models.xc.prototype.Bf.Ih && e.readTimestamp ? E.lang.PO + " " + this.getTime(e.readTimestamp) : "";
      },
      getTime: function (g) {
        var h = E.ca.Cc.ny(g.time);
        return '<span class="span-item-time" title="' + E.ca.Cc.pla(g.time) + '">' + h + "</span>";
      },
      compiled: !0
    }));
    this.ha("chat-writing-marker", new Ext.XTemplate("", '<div class="writing-indicator d-none"><div class="writing-indicator__wrapper"><div class="writing-indicator__bubbles"><span></span><span></span><span></span></div></div></div>', {
      compiled: !0
    }));
    this.ha("empty-notification", new Ext.Template('<div class="sr-system-messages">&nbsp;</div>'), {
      compiled: !0
    });
    this.ha("notify-list-elem", new Ext.XTemplate('<li id="sr-system-messages-id-{id}" class="sr-system-messages-list-element sr-system-messages-type-{type}"><span class="sr-system-messages-date-x">{date}</span><span class="message-container">{msg}</span>{[this.gCB(values)]}</li>', {
      gCB: function (e) {
        return e.closable === !1 ? "" : '<span class="sr-system-messages-close"><i></i></span>';
      },
      compiled: !0
    }));
    this.ha("notify-container", new Ext.XTemplate('<div id="sr-system-messages-btn" class="sr-system-messages-btn"><span id="sr-system-messages-counter" class="sr-system-messages-counter hidden">{counter}</span><i></i></div><ul id="sr-system-messages-list" class="sr-system-messages-list"></ul>', {
      compiled: !0
    }));
    this.ha("conference-toolbar-button", new Ext.XTemplate('<div class="user-status status-{[this.gus(values)]} status{[this.gu(values)]}"></div><span class="name">{[this.gusn(values)]}</span>', {
      compiled: !0,
      gus: function (e) {
        return eht(e.status || e.protoInfo.status || "not_avail");
      },
      gusn: function (g) {
        var h = g.ShowName;

        if (g.uin == C.k().fa.get("uin")) {
          h = E.lang.Se;
        }

        return eha(h || g.nick || g.label || g.uin || "");
      },
      gu: function (e) {
        return eha(e.uin);
      }
    }));
    this.ha("chat-submenu-list", new Ext.XTemplate('<ul><tpl for=".">{[this.getBody(values)]}</li></tpl></ul>', {
      getBody: function (e) {
        return '<li class="list-item-body"><div class="user-status status-' + eha(e.status) + " status" + e.uin + ' left"></div><span class="list-item-nick">' + eha(e.ShowName) + "</span></li>";
      },
      compiled: !0
    }));
    this.ha("selected-contact-list", new Ext.XTemplate('<tpl for="."><div class="sr-contact"><div class="left sr-status status-{[eha(values.protoInfo.status)]}"></div><div class="left sr-contact-name">{[eht(values.ShowName)]}</div>{[this.gr(values)]}<div class="clear"></div></div></tpl>', {
      compiled: !0,
      gr: function (e) {
        return e.Ida ? "" : '<div class="remove">' + E.lang.kQ + "</div>";
      }
    }));
    this.ha("ignored-badge", new Ext.XTemplate('<div class="user-ignored"><span class="profile">' + E.lang.$T + "<i></i></span></div>", {
      compiled: !0
    }));
    this.ha("restricted-badge", new Ext.XTemplate('<div class="user-data-links user-restricted"><span class="profile">' + E.lang.aU + "<i></i></span></div>", {
      compiled: !0
    }));
    this.ha("user-data-links", new Ext.XTemplate('{[this.gO(values)]}<div class="user-btns left"><a href="#" class="profile-close">' + E.lang.aw + "<i></i></a></div>", {
      gO: function (e) {
        if (e.user !== k && e.user.zm() || e.anonymous && !e.Og || e.jka || e.hugga || e.S5 || e.Y5 && !e.x7 && !e.Og) {
          return '<div class="user-data-links left"><span class="user-data-links-opt-link">' + E.lang.bU + "<i></i></span></div>";
        }
      },
      compiled: !0
    }));
    this.ha("default-avatars-items-list", new Ext.XTemplate('<tpl for=".">{[this.gI(values)]}</tpl>', {
      gI: function (e) {
        return '<div class="item"><img alt="" src="' + e.data.src + '" class="item-image"></div>';
      },
      compiled: !0
    }));
    this.ha("default-avatars-list", new Ext.XTemplate('<div class="avatars-popup"><div class="preloader d-none"></div><div class="container"><div class="header"><div class="my-profile-change-avatar-device uiBtn blue"><label><input type="button" value="' + E.lang.dU + '"></label></div></div><div class="list"></div><div class="clear"></div><div class="footer"><div class="my-profile-delete-avatar uiBtn stripped wide"><label><input type="button" value="' + E.lang.eU + '"></label></div></div></div></div>', {
      compiled: !0
    }));
    this.ha("profile-header", new Ext.XTemplate('<div class="user-avatar-area">{[this.gA(values)]}</div><div class="user-data-toolset">{[this.gRB(values)]}{[this.gIB(values)]}{[this.gUL(values)]}</div><div class="user-data-top">{[this.gSN(values)]}</div><div class="user-data-bottom">{[this.gUDB(values)]}</div><div class="user-data-btns">{[this.gUB(values)]}</div><div class="more-profile-info d-none"><span class="show-name">{[this.gN(values)]}</span><span class="show-data address"><i></i>{[this.prepareAddress(values)]}</span>{[this.dataState(values,"phone", "phone")]}{[this.dataState(values,"email", "email")]}{[this.dataState(values,"wwwUrl", "homepage")]}{[this.dataState(values,"companyRegistryNumber", "company-id")]}{[this.dataState(values,"companyProfile", "company-profile")]}{[this.dataState(values,"companyIndustry", "company-branch")]}{[this.dataState(values,"about", "show-about")]}</div>', {
      z4: this.ma("ignored-badge"),
      Vra: this.ma("restricted-badge"),
      cu: this.ma("user-data-links"),
      dataState: function (g, o, h) {
        g = g.pub;

        if (g != m && g[o]._content) {
          if (o === "email") {
            return '<span class="show-data ' + h + '"><i></i><a href="mailto:' + eht(g[o]._content) + '">' + eht(g[o]._content) + "</a></span>";
          } else {
            if (o === "wwwUrl") {
              var p = eht(g[o]._content);
              /^((http|https):\/\/)/.test(p) || (p = "http://" + p);
              return '<span class="show-data ' + h + '"><i></i><a href="' + p + '" target="_blank">' + eht(g[o]._content) + "</a></span>";
            }
          }

          return '<span class="show-data ' + h + '"><i></i>' + eht(g[o]._content) + "</span>";
        }
      },
      prepareAddress: function (g) {
        var g = g.pub,
            h = "";
        g != m && (h += g.postcode._content ? eht(g.postcode._content) + " " : "", h += g.city._content ? eht(g.city._content) : "", h += g.street._content || g.country._content ? ", " : "", h += g.street._content ? eht(g.street._content) : "", h += g.country._content ? ", " : "", h += g.country._content ? eht(g.country._content) : "");
        return h;
      },
      gUB: A(""),
      gUL: function (e) {
        return this.cu.apply(e);
      },
      gSN: function (e) {
        return e.type == 2 ? '<span class="show-name"><i class="' + (e.user.Ff() === m ? "ico phone" : "ico email") + '"></i>' + this.gN(e) + "</span>" : e.type == 8 ? '<span class="show-name"><i class="handicaped ico ' + this.gUS(e) + '"></i>' + this.gN(e) + "</span>" : '<span class="show-name"><i class="profile-user-status ' + this.gUS(e) + '"></i>' + this.gN(e) + "</span>";
      },
      gN: function (g) {
        if (g.type === 0) {
          return eha(g.user.fp());
        } else {
          if (g.type === 1 || g.type === 2 || g.type === 8 || g.type === 16) {
            var h;
            g.user.get("uin") == C.k().fa.get("uin") && (h = g.type === 16 ? C.k().fa.get("ShowName") || C.k().fa.get("label") || C.k().fa.get("nick") : C.k().fa.get("label") || C.k().fa.get("nick") || C.k().fa.get("ShowName"));
            return eha(h || g.user.getDisplayName());
          } else {
            return g.user ? g.user.label && fht(eha(g.user.label._content)) ? eha(g.user.label._content) : eha(g.uin) : g.pub ? eha(g.pub._uin) : eha(g.uin);
          }
        }
      },
      gUS: function (g) {
        var h = "status-",
            g = g.user ? g.user.data ? !(g.user.data.type === 4 || g.uin == C.k().fa.get("uin")) ? eha(g.user.data.protoInfo.status || "stranger") : g.user.data.protoInfo ? eha(g.user.data.protoInfo.status || "not_avail") : eha(g.user.data.status || "not_avail") : "stranger" : "stranger";
        h += g;
        (g = C.k().Wi(g)) && (h += " " + g);
        return h;
      },
      gIB: function (g) {
        var h = '<div class="user-ignored-holder left ';
        h += g.Og === !0 ? '">' : ' d-none">';
        h += this.z4.apply(g);
        h += "</div>";
        return h;
      },
      gRB: function (g) {
        var h = '<div class="user-restricted-holder left';
        h += g.Y5 && g.x7 && !g.Og ? ' ">' : ' d-none">';
        h += this.Vra.apply(g);
        h += "</div>";
        return h;
      },
      gA: function (g) {
        var h = "";
        Ext.Object.getSize(g) && (g.ZH && g.uin == C.k().fa.get("uin") ? (h += '<div class="preloader d-none user-avatar-preloader-' + g.uin + '"></div>', h += '<img alt="" src="' + C.k().zc({
          uin: g.uin,
          size: 80
        }) + '" class="sr-user-avatar" />', h += '<div class="my-profile-change-avatar uiBtn white"><label><input type="button" value="' + E.lang.ew + '"></label></div>') : h += '<img alt="" src="' + C.k().zc({
          uin: g.uin,
          size: 80,
          user: g.user
        }) + '" class="sr-user-avatar" />');
        return h;
      },
      gUDBA: function (g, o, h, p) {
        (o = C.ca.Da.Zy(eha(o), h, p)) && g.push(o);
      },
      gUDB: function (G) {
        var B = [];

        if (!G.user || G.anonymous) {
          return "";
        }

        if (G.user && G.pub) {
          var y = G.user.get("extdata").gids || [];
          G.hA === !0 && (Ext.Array.indexOf(y, 3) != -1 ? B.push('<span class="show-star sr-star star-act disabled"></span>') : B.push('<span class="show-star sr-star star-inact disabled"></span>'));
          var o = G.pub.age && G.pub.age._content,
              h = o ? E.lang.IF[C.ca.Da.f4(o)] : "";
          this.gUDBA(B, G.pub.label._content, '<span class="show-meta">', "</span> ");
          this.gUDBA(B, o, ' <span class="show-meta">', " " + h + "</span>");
          this.gUDBA(B, G.pub.city._content, ' <span class="show-meta">', "</span>");
          this.gUDBA(B, G.uin, '<span class="show-meta">GG:', "</span>");

          if (eha(G.user.Ff()).length > 0) {
            var g = G.user.get("extdata").Email;
            Ext.Array.each(g, function (e) {
              this.gUDBA(B, e, '<span class="show-meta"><a style="color:inherit" href="mailto:' + eht(e) + '">', "</a></span>");
            }, this);
          }

          if (eha(G.user.YJ()).length > 0) {
            var L = G.user.get("extdata").MobilePhone;
            Ext.Array.each(L, function (e) {
              this.gUDBA(B, e, '<span class="show-meta">tel: ', "</span>");
            }, this);
          }

          "undefined" !== typeof G.user.get("extdata").WwwAddress && G.user.get("extdata").WwwAddress.length > 0 && B.push('<span class="show-link">' + C.ca.xa.qc(G.user.get("extdata").WwwAddress, m, m, [eha]) + "</span>");
        } else {
          if (G.user && G.type !== 0) {
            if (G.pub === m) {
              try {
                y = G.user.get("extdata").gids;
                G.hA === !0 && (Ext.Array.indexOf(y, 3) != -1 ? B.push('<span class="show-star sr-star star-act disabled"></span>') : B.push('<span class="show-star sr-star star-inact disabled"></span>'));
                G.user.get("extdata").Hn && G.user.get("extdata").Sn && this.gUDBA(B, G.user.get("extdata").Hn + " " + G.user.get("extdata").Sn, '<span class="show-meta">', "</span>");
                G.uin != 0 && this.gUDBA(B, G.user.get("uin"), '<span class="show-meta">GG:', "</span>");

                if (eha(G.user.Ff()).length > 0) {
                  g = G.user.get("extdata").Email, Ext.Array.each(g, function (e) {
                    this.gUDBA(B, e, '<span class="show-meta">', "</span>");
                  }, this);
                }

                if (eha(G.user.YJ()).length > 0) {
                  L = G.user.get("extdata").MobilePhone, Ext.Array.each(L, function (e) {
                    this.gUDBA(B, e, '<span class="show-meta">tel: ', "</span>");
                  }, this);
                }

                "undefined" !== typeof G.user.get("extdata").WwwAddress && G.user.get("extdata").WwwAddress.length > 0 && B.push('<span class="show-link">' + C.ca.xa.qc(G.user.get("extdata").WwwAddress, m, m, [eha]) + "</span>");
              } catch (I) {}
            } else {
              if (G.user._uin) {
                G.user.get = function (b) {
                  if (G.user[b]) {
                    return G.user[b]._content;
                  }

                  return m;
                };
              }

              try {
                h = (o = C.ca.Da.$ia(G.user.get("birth"))) ? E.lang.IF[C.ca.Da.f4(o)] : "", B.push('<span class="show-star sr-star star-inact disabled"></span>'), this.gUDBA(B, G.user.get("label"), '<span class="show-meta">', "</span>"), this.gUDBA(B, o, ' <span class="show-meta">', " ", +h + "</span>"), this.gUDBA(B, G.user.get("city"), ' <span class="show-meta">', "</span>"), G.uin != 0 && this.gUDBA(B, G.uin, '<span class="show-meta">GG:', "</span>"), eha(G.user.get("email")).length > 0 && this.gUDBA(B, G.user.get("email"), '<span class="show-meta">', "</span>"), eha(G.user.get("cellphone")).length > 0 && this.gUDBA(B, G.user.get("cellphone"), '<span class="show-meta">tel: ', "</span>"), "undefined" !== typeof G.user.get("extdata").WwwAddress && G.user.get("extdata").WwwAddress.length > 0 && B.push('<span class="show-link">' + C.ca.xa.qc(G.user.get("extdata").WwwAddress, m, m, [eha]) + "</span>");
              } catch (D) {
                B.push('<span class="show-meta">&nbsp;</span>');
              }
            }
          }
        }

        B.length > 0 && (B[B.length - 1] = B[B.length - 1].replace(/class="([^"]+)"/, function (l, n) {
          return 'class="' + n + ' last"';
        }));
        return B.join("");
      },
      compiled: !0
    }));
    this.ha("profile-buttons", new Ext.XTemplate("{[this.getButtons(values)]}", {
      getButtons: function (g) {
        var h = [];
        g.J2 && (g.jJ || g.$x || g.kJ || g.lJ ? h.push('<div class="uiBtn white talk-button left user-profile-gg"><label><input type="button" value="' + E.lang.LF + '"></label></div>') : h.push('<div class="uiBtn blue talk-button left user-profile-gg"><label><input type="button" value="' + E.lang.LF + '"></label></div>'));
        g.Yja && h.push('<div class="uiBtn blue talk-button left edit-button"><label><input type="button" value="' + E.lang.JF + '"></label></div>');
        g.Zja && h.push('<span class="button toggle-view-data"><i></i><label>' + E.lang.KF + "</label></span>");
        g.jJ && h.push('<div class="uiBtn green user-profile-add left"><label><input type="button" value="' + E.lang.wT + '"></label></div>');
        (g.kJ || g.lJ) && h.push('<span class="invitation-text"><span class="user-profile-invited">' + E.lang.TW + '</span><a class="uiBtn blue user-profile-accept-invite" role="button" href="#"><span>' + E.lang.FB + '</span></a><a class="uiBtn white user-profile-hide-invite" role="button" href="#"><span>' + E.lang.HB + "</span></a></span>");
        g.$x ? h.push('<a class="uiBtn green user-profile-invite left" role="button" href="#"><span class="">' + E.lang.CF + "</span></a>") : g.mJ && h.push('<a class="uiBtn disabled user-profile-invitation-sent left" role="button" href="#"><span class="">' + E.lang.fE + "</span></a>");
        g.ls && h.push('<a class="user-profile-message left" href="mailto:' + g.ls + '">' + E.lang.MF + "</a>");
        return h.join("");
      },
      compile: !0
    }));
    this.ha("email-profile-buttons", new Ext.XTemplate("{[this.getButtons(values)]}", {
      getButtons: function (g) {
        var h = [];
        g.$x ? h.push('<a class="uiBtn green user-profile-invite left" role="button" href="#"><span class="">' + E.lang.WT + "</span></a>") : g.K2 ? h.push('<a class="uiBtn green user-profile-invite left" role="button" href="#"><span class="">' + E.lang.CF + "</span></a>") : g.mJ && h.push('<a class="uiBtn disabled user-profile-invitation-sent left" role="button" href="#"><span class="">' + E.lang.fE + "</span></a>");
        g.ls && h.push('<a class="user-profile-message left" href="mailto:' + g.ls + '">' + E.lang.MF + "</a>");
        g.K2 && h.push('<div class="profile-header-popup"><span>' + E.lang.ZT + '</span><i class="arrow popup-arrow-up"></i></div>');
        return h.join("");
      },
      compile: !0
    }));
    this.ha("contact-header", new Ext.XTemplate('<div class="user-data-top left"><span class="show-name left">{[this.gN(values)]}</span><div class="user-data-toolset">{[this.gUL(values)]}</div></div>{[this.gSL(values)]}<div class="user-data-bottom left">{[this.gUDB(values)]}</div><div class="clear"></div>{[this.gCM(values)]}', {
      Jka: 3,
      z4: this.ma("ignored-badge"),
      cu: this.ma("user-data-links"),
      gUL: function (e) {
        return this.cu.apply(e);
      },
      gUDB: function (g) {
        var n = "",
            h = [];
        g.hA === !0 && (n += Ext.Array.indexOf(g.extdata.gids || [], this.Jka) != -1 ? '<span class="show-star sr-star star-act"></span>' : '<span class="show-star sr-star star-inact"></span>');
        "undefined" !== typeof g.extdata && "undefined" !== typeof g.extdata.MobilePhone && Ext.isArray(g.extdata.MobilePhone) && g.extdata.MobilePhone.length > 0 && h.push(C.ca.Da.Zy(eha(g.extdata.MobilePhone[0]), '<span class="show-meta">', "</span>"));
        "undefined" !== typeof g.extdata && "undefined" !== typeof g.extdata.Email && Ext.isArray(g.extdata.Email) && g.extdata.Email.length > 0 && h.push(C.ca.Da.Zy(eha(g.extdata.Email[0]), '<span class="show-meta data-email">', "</span>"));
        "undefined" !== typeof g.extdata.WwwAddress && g.extdata.WwwAddress.length > 0 && h.push('<span class="show-link">' + C.ca.xa.qc(g.extdata.WwwAddress, m, m, [eha]) + "</span>");
        return n;
      },
      gN: function (e) {
        return eha(e.ShowName);
      },
      gCM: function (e) {
        "undefined" !== typeof e.extdata && "undefined" !== typeof e.extdata.Email && Ext.isArray(e.extdata.Email);
        return "";
      },
      compiled: !0
    }));
    this.ha("profile-description", new Ext.XTemplate('<div id="profile-description-wrap">{[this.getDescription(values)]}</div>', {
      getDescription: function (g) {
        var n = "",
            h = document.createElement("span");
        h.innerHTML = g.user && g.user.get("protoInfo").description ? C.ca.xa.wd(g.user.get("protoInfo").description, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]) : "";
        n += '<div id="profile-description-description">';
        n += '<span class="description-big">' + h.innerHTML + "</span>";
        n += "</div>";
        return n;
      },
      compiled: !0
    }));
    this.ha("profile-last-messages", new Ext.XTemplate('<div class="clear"></div><div class="user-data-btns"></div>', {
      compiled: !0
    }));
    this.ha("aol-finished-av-call", new Ext.XTemplate("{[this.getFinishedCallContent(values)]}", {
      getFinishedCallContent: function (e) {
        var g = E.lang.xT;

        if (e.subtype == "video") {
          g = E.lang.yT;
        }

        g = '<span class="sr-call-rejected"></span><div class="call-message">' + g;
        parseInt(e.duration, 10) > 0 && (g += f.LJ(e.duration));
        g += '</div><div class="clear"></div>';
        return g;
      },
      compiled: !0
    }));
    this.ha("aol-missed-av-call", new Ext.XTemplate("{[this.getMissedCallContent(values)]}", {
      getMissedCallContent: function (e) {
        var g = E.lang.zT;

        if (e.subtype == "video") {
          g = E.lang.AT;
        }

        g = '<span class="sr-call-rejected"></span><div class="call-message">' + g;
        parseInt(e.duration, 10) > 0 && (g += f.LJ(e.duration));
        g += '</div><div class="clear"></div>';
        return g;
      },
      compiled: !0
    }));
    this.ha("aol-file-transfer-event", new Ext.XTemplate("{[this.getFileTransferContent(values)]}", {
      getFileTransferContent: function (e) {
        var n = "";

        switch (e.deliveryStatus) {
          case "delivered":
            var n = '<div class="file-msg-content"><i class="sr-file-type-icon sr-file-type-icon-default"></i><span class="sr-file-time"></span><div class="fileinfo" id="ext-gen1212"><div class="filename" id="ext-gen1211">',
                g = (e.fileUrl || "").replace(/^(drive:\/\/)(.*)$/, function (h, o, l) {
              return C.k().config.applications[C.k().lang || "pl"].filedownload.url + l + "?api_version=" + C.k().config.applications[C.k().lang || "pl"].filedownload.version;
            });
            n += '<a href="' + eha(g) + '" target="_blank">' + eht(e.fileName) + '</a></div><div class="filesize" id="ext-gen1210">(' + f.mm(e.fileSize) + ")</div></div></div>";
            break;

          case "canceled":
            n = '<div class="file-cancelled file-msg "><span class="fileupload-icon"></span>' + E.lang.bD + "</div>";
            n += "<span>" + e.fileName + " (" + f.mm(e.fileSize) + ")</span>";
            break;

          case "rejected":
            n = '<div class="file-rejected file-msg "><span class="fileupload-icon"></span>' + E.lang.cD + "</div>", n += "<span>" + e.fileName + " (" + f.mm(e.fileSize) + ")</span>";
        }

        return n;
      },
      compiled: !0
    }));
    this.ha("aol-conference-membership-change-event", new Ext.XTemplate("{[this.getMembershipMessageContent(values)]}", {
      getMembershipMessageContent: function (g) {
        var h = "";

        switch (parseInt(g.membershipChange, 10)) {
          case E.api.ub.ic.vx.wS:
            h = Ext.String.format(E.lang.DF, "<strong>" + eht(g.affectedUserName) + "</strong>");
            break;

          case E.api.ub.ic.vx.yS:
            h = Ext.String.format(E.lang.EF, "<strong>" + eht(g.affectedUserName) + "</strong>");
        }

        return h;
      },
      compiled: !0
    }));
    this.ha("aol-finished-easy-call-event", new Ext.XTemplate("{[this.getFinishedEasycallContent(values)]}", {
      getFinishedEasycallContent: function (e) {
        var g = '<span class="sr-call-rejected"></span><div class="call-message">' + E.lang.BT;
        parseInt(e.duration, 10) > 0 && (g += f.LJ(e.duration));
        g += '</div><div class="clear"></div>';
        return g;
      },
      compiled: !0
    }));
    this.ha("aol-missed-easy-call-event", new Ext.XTemplate("{[this.getMissedEasycallContent(values)]}", {
      getMissedEasycallContent: function () {
        var e = '<span class="sr-call-rejected"></span><div class="call-message">' + E.lang.DT;
        e += '</div><div class="clear"></div>';
        return e;
      },
      compiled: !0
    }));
    this.ha("aol-incoming-easy-call-event", new Ext.XTemplate("{[this.getIncomingEasycallContent(values)]}", {
      getIncomingEasycallContent: function (g) {
        var h = '<span class="sr-call-rejected"></span><div class="call-message">' + E.lang.CT;
        h += " " + (g.interlocutorPhone == "private" ? E.lang.ET : g.interlocutorPhone);
        h += '</div><div class="clear"></div>';
        return h;
      },
      compiled: !0
    }));
    this.ha("profile-last-messages-view", new Ext.XTemplate('<div class="profile-last-messages-content"><div class="last-messages-header">{[this.getLastMessagesButton(values)]}<span class="tab aol-archive btn">' + E.lang.FT + '</span></div><div class="conversation-list size-{[this.gfs(values)]}"><tpl for="."><div class="conversation-header {[xindex  === 1 ? "first" : ""]}">{[this.getTime(values)]}</div><div>{[this.getMessages(values)]}</div></tpl></div></div>', {
      compiled: !0,
      gBC: function (g) {
        for (var w = Ext.StoreManager.lookup("ContactsStore"), h = !1, y = 0; y < 1; y++) {
          var u = g[y].interlocutorID;

          try {
            h = w.Ba(u).rm();
          } catch (o) {}
        }

        return h ? "start-chat-ignored" : "";
      },
      gfs: function (e) {
        return e.fontSize;
      },
      getTime: function (e) {
        return E.ca.Cc.cK(e.beginTime, !0);
      },
      getMessages: function (aa) {
        for (var S = aa.messages, aa = "", Q = 0, N = [], L = {}, h = {}, ae = E.api.ub.ic.Eh, ac = 0; ac < S.length; ac++) {
          S[ac].conversation = S[ac].messageType < 3 ? !0 : !1;

          if (ac == 0 || S[ac - 1].my != S[ac].my || S[ac - 1].conversation != S[ac].conversation && S[ac - 1].messageType != S[ac].messageType || Q + 300000 < S[ac].sentTime) {
            L = {
              name: S[ac].name,
              Lpa: S[ac].my,
              Ksa: S[ac].senderID,
              cJ: [],
              Eh: S[ac].messageType,
              uEa: S[ac].signature
            }, N.push(L), Q = 0;
          }

          Q + 30000 < S[ac].sentTime && (h = {
            date: S[ac].sentTime,
            tb: []
          }, L.cJ.push(h));
          h.tb.push(S[ac]);
          Q = S[ac].sentTime;
        }

        for (ac = 0; ac < N.length; ac++) {
          L = !1;
          aa += '<table class="' + (N[ac].Lpa ? "my" : "") + '">';
          S = "";
          Q = 1;

          for (h = 0; h < N[ac].cJ.length; h++) {
            for (var T = N[ac].cJ[h], Y = "", g = "", o = 0; o < T.tb.length; o++) {
              Y += '<span class="message-row">';
              Q = T.tb[o].messageType;

              switch (T.tb[o].messageType) {
                case ae.DO:
                  Y += this.getFinishedCallContent(T.tb[o]);
                  L = !1;
                  break;

                case ae.EO:
                  Y += this.getMissedCallContent(T.tb[o]);
                  L = !1;
                  break;

                case ae.rR:
                  Y += this.getFileTransferContent(T.tb[o]);
                  L = !1;
                  g = "file-manager-chat-msg";
                  break;

                case ae.HE:
                  Y += this.getMembershipMessageContent(T.tb[o]);
                  L = !1;
                  break;

                case ae.Z$:
                  Y += this.getFinishedEasycallContent(T.tb[o]);
                  L = !1;
                  break;

                case ae.aaa:
                  Y += this.getMissedEasycallContent(T.tb[o]);
                  L = !1;
                  break;

                case ae.$$:
                  Y += this.getIncomingEasycallContent(T.tb[o]);
                  L = !1;
                  break;

                default:
                  if (T.tb[o].unknown) {
                    Q = "unknown", Y += "<span>" + E.lang.HT + "</span>", L = !1;
                  } else {
                    try {
                      var ad = Ext.String.htmlEncode(T.tb[o].content);
                      C.ca.Security.L6(ad);
                      ad = C.ca.xa.wd(ad);
                      Y += ad;
                      L = !1;
                    } catch (ab) {
                      L || (Y += '<span class="sec_warrn">' + nl2br(Ext.String.format(E.lang.dE, '<a href="mailto:' + E.lang.bE + '" >' + E.lang.cE + "</a>")) + "</span>"), L = !0;
                    }
                  }

              }

              Y += "</span>";
            }

            S += '<tr class="message-type-' + Q + " " + g + '"><td class="item-body ">' + Y + "</td>";
            S += '<td class="item-time" title="' + E.ca.Cc.Is(T.date) + '">' + E.ca.Cc.N3(T.date) + "</td>";
            S += "</tr>";
          }

          Q !== E.api.ub.ic.Eh.HE && (L = '<span class="sender-' + N[ac].Ksa + '">' + eht(N[ac].name) + "</span>", Q == 3 && (L += ' <span class="via-sms">' + E.lang.JT + eht(N[ac].signature ? " (" + N[ac].signature + ")" : "") + "</span>"), aa += '<tr class="item-header"><td class="item-showname">' + L + "</td><td></td></tr>");
          aa += S + "</tr>";
          aa += "</table>";
        }

        return aa;
      },
      getMembershipMessageContent: function (g) {
        var h = "";

        switch (parseInt(g.membershipChange, 10)) {
          case E.api.ub.ic.vx.wS:
            h = Ext.String.format(E.lang.DF, "<strong>" + eht(g.affectedUserName) + "</strong>");
            break;

          case E.api.ub.ic.vx.yS:
            h = Ext.String.format(E.lang.EF, "<strong>" + eht(g.affectedUserName) + "</strong>");
        }

        return h;
      },
      getFinishedEasycallContent: function (e) {
        return f.ma("aol-finished-easy-call-event").apply(e);
      },
      getMissedEasycallContent: function (e) {
        return f.ma("aol-missed-easy-call-event").apply(e);
      },
      getIncomingEasycallContent: function (e) {
        return f.ma("aol-incoming-easy-call-event").apply(e);
      },
      getFinishedCallContent: function (e) {
        return f.ma("aol-finished-av-call").apply(e);
      },
      getMissedCallContent: function (e) {
        return f.ma("aol-missed-av-call").apply(e);
      },
      getFileTransferContent: function (e) {
        return f.ma("aol-file-transfer-event").apply(e);
      },
      getLastMessagesButton: function () {
        return '<span class="aol-last-messages">' + E.lang.GT + "</span>";
      }
    }));
    this.ha("profile-aol-video", new Ext.XTemplate('<span class="thumbnail">{[this.gT(values)]}</span><span class="title">{[this.gA(values)]}</span>', {
      compiled: !0,
      gA: function (e) {
        return C.ca.xa.qc(e.content, e.title, m, [eha]);
      },
      gT: function (e) {
        return C.ca.xa.qc(e.content, '<img alt="" src="' + eha(e.thumbnail) + '" />');
      }
    }));
    this.ha("profile-aol-music", new Ext.XTemplate('<span class="thumbnail">{[this.gT(values)]}</span><span class="title">{[this.gA(values)]}</span>', {
      compiled: !0,
      gA: function (e) {
        return C.ca.xa.qc(e.content, e.title, m, [eha]);
      },
      gT: function (e) {
        return C.ca.xa.qc(e.content, '<img alt="" src="' + eha(e.thumbnail) + '" />');
      }
    }));
    this.ha("profile-aol-link", new Ext.XTemplate('<span class="thumbnail">{[this.gT(values)]}<span class="title">{[this.gA(values)]}</span>', {
      compiled: !0,
      gA: function (e) {
        return C.ca.xa.qc(e.content, e.title, m, [eha]);
      },
      gT: function (e) {
        return C.ca.xa.qc(e.content, '<img alt="" src="' + eha(e.thumbnail) + '" />');
      }
    }));
    this.ha("profile-aol-other", new Ext.XTemplate('{[this.gT(values)]}<span class="content">{[this.gA(values)]}</span>', {
      compiled: !0,
      gA: function (e) {
        return C.ca.xa.qc(e.content, e.title, m, [eha]);
      },
      gT: function (e) {
        return C.ca.xa.qc(e.content, '<span class="thumbnail empty"></span>');
      }
    }));
    this.ha("profile-aol-image", new Ext.XTemplate('<span class="thumbnail">{[this.gT(values)]}</span><span class="title">{[this.gA(values)]}</span>', {
      compiled: !0,
      gA: function (e) {
        return C.ca.xa.qc(e.url, e.title, m, [eha]);
      },
      gT: function (e) {
        return C.ca.xa.qc(e.url, '<img alt="" src="' + eha(e.thumbnail) + '" />');
      }
    }));
    this.ha("profile-last-messages-attachements", new Ext.XTemplate('<div class="attachements-list"><ul><tpl for="."><li class="list-item">{[this.gr(values)]}<span class="date">{[this.getTime(values)]}</span></li></tpl></ul></div>', {
      compiled: !0,
      videoTpl: this.ma("profile-aol-video"),
      musicTpl: this.ma("profile-aol-music"),
      linkTpl: this.ma("profile-aol-link"),
      otherTpl: this.ma("profile-aol-other"),
      imageTpl: this.ma("profile-aol-image"),
      gr: function (g) {
        var h = "";

        if (!this[g.attachmentType + "Tpl"]) {
          return h;
        }

        g.title = this.getTitle(g);
        g.content = this.getUrl(g);
        h += g.thumbnail ? this[g.attachmentType + "Tpl"].apply(g) : this.otherTpl.apply(g);
        return h;
      },
      getTime: function (e) {
        return E.ca.Cc.cK(e.sentTime);
      },
      getTitle: function (e) {
        return e.title || e.fileName || e.content;
      },
      getUrl: function (e) {
        return (e.content || "").replace(/^(drive:\/\/)(.*)$/, function (h, n, l) {
          return C.k().config.applications[C.k().lang || "pl"].filedownload.url + l + "?api_version=" + C.k().config.applications[C.k().lang || "pl"].filedownload.version;
        });
      }
    }));
    this.ha("contactsgroup-add-container", new Ext.Template('<div class="contactsgroup-add-name"><span class="contactsgroup-add-name-span">' + E.lang.iQ + '</span></div><div class="clear"></div><div class="contactsgroup-add-list-title">' + E.lang.cQ + '</div><div class="clear"></div><div class="contactsgroup-add-list"></div><div class="clear"></div><div class="contactsgroup-add-buttons"><div class="uiBtn blue"><label><input class="contactsgroup-add-ok-btn" type="button" value="' + E.lang.PB + '"></label></div><div class="uiBtn stripped"><label><input class="contactsgroup-add-cncl-btn" type="button" value="' + E.lang.bQ + '"></label></div></div></div>', {
      compiled: !0
    }));
    this.ha("search-result-contact", new Ext.XTemplate('<div class="clear"></div><tpl for="persons"><div class="search-result-contact-row {[xindex % 2 === 0 ? "even" : "odd"]}" ><div class="user-avatar-area left">{[this.gA(values)]}</div><div class="user-data-area left"><div class="sr-status status-{[this.getStatus(values)]} {[this.customStatus(values)]}"></div><div class="show-name">{[this.getName(values)]}</div><span class="show-data basic-data"><span class="usr-basic-data">{[this.gAg(values)]} {[eht(values.city)]}, GG: <span class="usr-uin">{uin}</span></span><span class="usr-company-profile">{[eht(values.companyProfile)]}</span><span class="usr-company-industry">{[eht(values.companyIndustry)]}</span></span><div class="description-info"><span class="usr-description">{[eht(values.statusDescription)]}</span></div><div class="more-info d-none"><span class="show-name">{[this.getName(values)]}</span><span class="show-data address"><i></i>{[this.prepareAddress(values)]}</span>{[this.dataState(values,"phone", "phone")]}{[this.dataState(values,"email", "email")]}{[this.dataState(values,"wwwUrl", "homepage")]}{[this.dataState(values,"companyRegistryNumber", "company-id")]}{[this.dataState(values,"companyProfile", "company-profile")]}{[this.dataState(values,"companyIndustry", "company-branch")]}{[this.dataState(values,"about", "show-about")]}</div></div><div class="user-data-actions left">{[this.startChat()]}{[this.contactListState(values)]}{[this.moreInfoState(values)]}</div><div class="clear"></div></div></tpl>{[this.shPager(values)]}<div class="clear"></div>', {
      shPager: function (e) {
        if (e.pA || e.mA) {
          return '<div class="toolbar-bottom right"><a href="#" class="' + (e.pA ? "" : "hidden ") + 'page-prev left"><i></i></a><a href="#" class="' + (e.mA ? "" : "hidden ") + 'page-next left"><i></i></a></div>';
        }
      },
      getName: function (e) {
        return e.label ? eht(e.label) : eht(e.uin);
      },
      gAg: function (e) {
        if (!e.isCompany) {
          return e.age ? e.age + " " + E.lang.sq : "";
        }
      },
      gA: function (e) {
        return '<img alt="" src="' + C.k().zc({
          uin: e.uin,
          size: 50
        }) + '" class="user-avatar" />';
      },
      getStatus: function (g) {
        var h = "";

        switch (g.status) {
          case "2":
            h = "avail";
            break;

          case "3":
            h = "busy";
            break;

          case "6":
          case "23":
            h = "talk_to_me";
            break;

          case "8":
          case "33":
            h = "dnd";
            break;

          case "ignored":
            h = "ignored";
            break;

          default:
            h = "not_avail";
        }

        return h;
      },
      customStatus: function (e) {
        e = this.getStatus(e);
        return C.k().Wi(e);
      },
      getDelimiter: function (e) {
        if (e.age && e.age != "" && e.city && e.city != "") {
          return "<span>,</span>";
        }
      },
      dataState: function (g, o, h) {
        if (g[o]) {
          if (o === "email") {
            return '<span class="show-data ' + h + '"><i></i><a href="mailto:' + eht(g[o]) + '">' + eht(g[o]) + "</a></span>";
          } else {
            if (o === "wwwUrl") {
              var p = eht(g[o]);
              /^((http|https):\/\/)/.test(p) || (p = "http://" + p);
              return '<span class="show-data ' + h + '"><i></i><a href="' + p + '" target="_blank">' + eht(g[o]) + "</a></span>";
            }
          }

          return '<span class="show-data ' + h + '"><i></i>' + eht(g[o]) + "</span>";
        }
      },
      prepareAddress: function (g) {
        var h = "";
        h += g.postcode ? eht(g.postcode) + " " : "";
        h += g.city ? eht(g.city) : "";
        h += g.street || g.country ? ", " : "";
        h += g.street ? eht(g.street) : "";
        h += g.country ? ", " : "";
        h += g.country ? eht(g.country) : "";
        return h;
      },
      contactListState: function (e) {
        if (e.ignored != !0 && e.exist != "true") {
          return '<span class="button add-contact"><i></i><label>' + E.lang.OR + "</label></span>";
        }
      },
      moreInfoState: function (e) {
        if (e.isCompany) {
          return '<span class="button toggle-view-data"><i></i><label>' + E.lang.hD + "</label></span>";
        }
      },
      startChat: function () {
        return '<span class="button start-chat"><i></i><span>' + E.lang.WR + "</span></span>";
      },
      compiled: !0
    }));
    this.ha("search-result-contact-noresult", new Ext.Template('<div class="noresult"><span class="msg">' + E.lang.NR + "</span></div>", {
      compiled: !0
    }));
    this.ha("search-add-contact", new Ext.Template('<div class="search-add-contact" style="padding: 10px; border: 1px dotted gray; background-color: yellow;"><span class="add-contact" style="float: right;">' + E.lang.$U + "</span></div>", {
      compiled: !0
    }));
    this.ha("my-profile-description", new Ext.XTemplate('<div class="description"></div><div class="description-buttons"><div class="last-descriptions"></div><div class="uiBtn btn-description-set {[values.editMode == false ? "d-none" : ""]}"><label><input type="button" value="' + E.lang.HF + '"></label></div><div class="uiBtn stripped btn-description-change {[values.editMode == true ? "d-none" : ""]}"><label><input type="button" value="' + E.lang.GF + '"></label></div><div class="uiBtn stripped gray btn-description-old {[values.oldDesc == false ? "d-none" : ""]}"><label><input type="button" value="' + E.lang.OT + '"></label></div><div class="uiBtn stripped gray btn-description-cancel {[values.editMode == false ? "d-none" : ""]}"><label><input type="button" value="' + E.lang.FF + '"></label></div></div>', {
      compiled: !0
    }));
    this.ha("my-profile-description-view", new Ext.XTemplate('<div class="my-profile-description-view-top"></div><div class="my-profile-description-view-list"><ul><tpl for="."><li class="item"><span class="item-body">{[this.rc(values)]}</span><span class="item-remove">' + E.lang.PT + "<i></i></span></li>", "</tpl></ul></div>", {
      compiled: !0,
      rc: function (e) {
        return eha(e.description).split("\n").join("<br />");
      }
    }));
    this.ha("base-window", new Ext.XTemplate('{[this.printCloseBtn(values)]}<div class="content">{[this.printTpl(values)]}</div>', {
      printTpl: function (e) {
        return e.Gb;
      },
      printCloseBtn: function (e) {
        if (e.Ab) {
          return '<div class="close">X</div>';
        }
      }
    }));
    this.ha("alert-window", new Ext.XTemplate('{[this.printTitle(values)]}{[this.printContent(values)]}<div class="sr-alert-buttons">{[this.printConfirmBtn(values)]}</div>', {
      printTitle: function (e) {
        if (e.title) {
          return "<h4>" + e.title + "</h4>";
        }
      },
      printContent: function (e) {
        return "<p>" + e.content + "</p>";
      },
      printConfirmBtn: function () {
        return '<a href="#" class="sr-blue-button sr-confirm-btn my-profile-button">' + E.lang.Eu + "</a>";
      },
      compiled: !0
    }));
    this.ha("window-cover", new Ext.Template('<div id="sr-window-cover"></div>', {
      compiled: !0
    }));
    this.ha("add-contact-invite-wnd", new Ext.XTemplate('<div class="title">' + E.lang.iD + '</div><div class="user-avatar-area">{[this.gav(values)]}</div><textarea class="message" id="invite-msg-{uin}" disabled="disabled">{[this.gm(values)]}</textarea><div class="btns">{[this.sab(values)]}<div class="uiBtn blue small right invite-action"><label><input type="button" value="' + E.lang.fD + '"></label></div></div>', {
      compiled: !0,
      gm: function (e) {
        return Ext.String.format(E.lang.Dq, fht(e.name || e.ShowName || e.uin));
      },
      sab: function (e) {
        return e.XK ? "" : '<div class="uiBtn stripped left add-action"><label><input type="button" value="' + E.lang.dD + '"></label></div>';
      },
      gav: function (e) {
        return e.uin ? '<img alt="" src="' + C.k().zc({
          uin: e.uin,
          size: 100
        }) + '" class="user-avatar-static" />' : '<img alt="" src="" class="user-avatar-static" />';
      }
    }));
    this.ha("add-contact-invite-wnd-noinvite", new Ext.XTemplate('<div class="title">' + E.lang.iD + '</div><div class="user-avatar-area">{[this.gav(values)]}</div><textarea class="message" id="invite-msg-{uin}">{[this.gm(values)]}</textarea><div class="btns">{[this.sab(values)]}<div class="uiBtn blue small right d-none invite-action"><label><input type="button" value="' + E.lang.fD + '"></label></div></div>', {
      compiled: !0,
      gm: function (e) {
        return Ext.String.format(E.lang.Dq, fht(e.name || e.ShowName || e.uin));
      },
      sab: function (e) {
        return e.XK ? "" : '<div class="uiBtn stripped left add-action"><label><input type="button" value="' + E.lang.dD + '"></label></div>';
      },
      gav: function (e) {
        return e.uin ? '<img alt="" src="' + C.k().zc({
          uin: e.uin,
          size: 100
        }) + '" class="user-avatar-static" />' : '<img alt="" src="" class="user-avatar-static" />';
      }
    }));
    this.ha("delete-group-wnd", new Ext.XTemplate('<div class="wnd-header"><h4>' + E.lang.fQ + '</h4></div><div class="wnd-body"><p>' + E.lang.dQ + "</p><p>" + E.lang.eQ + '</p><div class="wnd-group-list">{[values.groupList]}</div><div id="wnd-group-list"></div></div><div class="sr-alert-buttons"><div class="uiBtn blue"><label><input type="button" class="delete-action" value="' + E.lang.hP + '"></label></div><div class="uiBtn stripped"><label><input type="button" class="cancel-action" value="' + E.lang.qq + '"></label></div></div>', {
      compiled: !0
    }));
    this.ha("delete-contact-window", new Ext.XTemplate('<div class="title">' + E.lang.BP + '</div><div class="body normal">' + E.lang.LT + "<br/>" + E.lang.MT + '</div><div class="btns"><div class="uiBtn blue cancel-no"><label><input type="button" value="' + E.lang.Cn + '"></label></div><div class="uiBtn stripped cancel-yes"><label><input type="button" value="' + E.lang.Dn + '"></label></div></div>', {
      compiled: !0
    }));
    this.ha("forbid-access-window", new Ext.XTemplate('<div class="title">' + E.lang.vT + '</div><div class="body normal">' + Ext.String.format(E.lang.uT, "{[values.ShowName]}") + '</div><div class="btns"><div class="uiBtn blue cancel-yes"><label><input type="button" value="' + E.lang.aP + '"></label></div><div class="uiBtn stripped cancel-no"><label><input type="button" value="' + E.lang.qq + '"></label></div></div>', {
      compiled: !0
    }));
    this.ha("resolve-invitation-contact-wnd", new Ext.XTemplate('<div class="user-avatar-area left">{[this.gA(values)]}</div><div class="who"><h3>{[values.msg]}</h3></div><div class="btns">{[this.renderBtns(values)]}</div>', {
      compiled: !0,
      renderBtns: function (g) {
        var h = "";
        Ext.Array.each(g.buttons, function (e) {
          h += e.params.status == "hidden" ? '<div class="uiBtn stripped ' + e.params.status + '-action"><label><input type="button" value="' + e.label + '"></label></div>' : '<div class="uiBtn blue small ' + e.params.status + '-action"><label><input type="button" value="' + e.label + '"></label></div>';
        }, this);
        return h;
      },
      gA: function (e) {
        return '<img alt="" src="' + C.k().zc({
          uin: e.sender.id,
          size: 50
        }) + '" class="sr-user-avatar left gg-corner-all" />';
      }
    }));
    this.ha("resolve-email-invitation-contact-wnd", new Ext.XTemplate('<div class="user-avatar-area left">{[this.gA(values)]}</div><div class="who"><h3>{[this.gM(values)]}</h3></div><div class="btns">{[this.renderBtns(values)]}</div>', {
      compiled: !0,
      renderBtns: function (g) {
        var h = "";
        Ext.Array.each(g.buttons, function (e) {
          h += e.params.status == "hidden" ? '<div class="uiBtn stripped ' + e.params.status + '-action"><label><input type="button" value="' + e.label + '"></label></div>' : '<div class="uiBtn blue small ' + e.params.status + '-action"><label><input type="button" value="' + e.label + '"></label></div>';
        }, this);
        return h;
      },
      gA: function (e) {
        return '<img alt="" src="' + C.k().zc({
          uin: e.sender,
          size: 50
        }) + '" class="sr-user-avatar left gg-corner-all" />';
      },
      gM: function (e) {
        return Ext.String.format(E.lang.Dq, '<span class="showname">' + eht(e.sender) + "</span>");
      }
    }));
    this.ha("settings-menu-tpl", new Ext.XTemplate('<ul class="settings-tab-list"><div class="header">' + E.lang.MV + '<i></i></div><tpl for="."><li class="tab-{name} tab-item<tpl if="xindex==xcount"> last</tpl>"><div>{[this.gN(values)]}<i></i></div></li></tpl></ul>', {
      gN: function (e) {
        return eht(e.swa);
      },
      compiled: !0
    }));
    this.ha("settings-container", new Ext.XTemplate('<div id="settings-tabs" class="settings-tabs"></div><div id="settings-cards" class="settings-cards"><div class="settings-container-header user-data-top"><div class="user-btns right"><a href="#" class="settings-close">' + E.lang.GB + '<i></i></a></div></div><div class="settings-content"></div><div id="settings-buttons" class="settings-buttons d-none"><div class="btns-line privacy-save"><div class="uiBtn btn-save left"><label><input type="button" value="' + E.lang.lw + '"></label></div><div class="uiBtn stripped btn-restore left"><label><input type="button" value="' + E.lang.kG + '"></label></div></div></div></div>', {
      compiled: !0
    }));
    this.ha("checkBoxTpl", new Ext.XTemplate('<label><input {[this.gD(values)]} type="checkbox" class="settings-checkbox" value="{[this.gV(values)]}"{[this.gC(values)]}>{[this.gL(values)]}</label>', {
      gL: function (e) {
        return e.label;
      },
      gV: function (e) {
        return eha(e.value);
      },
      gC: function (e) {
        return e.value === "1" ? " checked" : "";
      },
      gD: function (e) {
        if (e.extraData && e.extraData.disabled) {
          return "disabled";
        }

        return "";
      },
      compiled: !0
    }));
    this.ha("selectTpl", new Ext.XTemplate('<label>{[this.gL(values)]}<select class="settings-select"><tpl for="form.options"><option value="{id}" {[values.id == parent.form.selected ? "selected" : ""]}>{label}</option></tpl></select></label>', {
      gL: function (e) {
        return eht(e.form.label);
      },
      compiled: !0
    }));
    this.ha("textareaTpl", new Ext.XTemplate('<textarea {[this.gML(values)]} {[this.gD(values)]} class="settings-textarea" id="settings-textarea-{[this.gN(values)]}">{[this.gT(values)]}</textarea>', {
      gT: function (e) {
        if (e.extraData.form.disabled === !0) {
          return "";
        }

        return eht(e.extraData.form.text);
      },
      gD: function (e) {
        return e.extraData.form.disabled ? "disabled" : "";
      },
      gN: function (e) {
        return eha(e.name);
      },
      gML: function (e) {
        if (e.extraData.form.mt) {
          return 'maxlength="' + e.extraData.form.mt + '"';
        }

        return "";
      },
      compiled: !0
    }));
    this.ha("settings-item-list", new Ext.XTemplate('<ul class="opts-list"><tpl for="."><li class="settings-item" id="{[this.gID(values)]}">{[this.rI(values)]}{[this.gST(values)]}</li></tpl></ul>', {
      gID: function (e) {
        return "item-" + eha(e.name);
      },
      chBI: function (e) {
        return this.yga.apply(e);
      },
      sI: function (e) {
        return this.I7.apply(e);
      },
      rI: function (g) {
        var h = "";

        if (!Ext.isDefined(g.extraData.showCheckbox) || g.extraData.showCheckbox === !0) {
          h += this.chBI(g);
        }

        if (Ext.isDefined(g.extraData.form)) {
          switch (g.extraData.form.type) {
            case "textarea":
              h += this.Jua.apply(g);
              break;

            case "select":
              h += this.I7.apply(g.extraData);
          }
        }

        return h;
      },
      gST: function (e) {
        if (e.extraData && e.extraData.Zi) {
          return '<a href="#" class="' + e.extraData.Zi.Vo + '">' + e.extraData.Zi.text + "</a>";
        }

        return "";
      },
      yga: this.ma("checkBoxTpl"),
      I7: this.ma("selectTpl"),
      Jua: this.ma("textareaTpl"),
      compiled: !0
    }));
    this.ha("instances-list-no-results", new Ext.XTemplate('<div class="instances-list-no-results">' + E.lang.RV + "</div>", {
      compiled: !0
    }));
    this.ha("instances-list", new Ext.XTemplate('<table><thead><tr><th class="session-name">' + E.lang.QV + '</th><th class="ip-address">' + E.lang.OV + '</th><th class="login-time">' + E.lang.UV + '</th></tr></thead><tbody><tpl for="."><tr class="session-item"><td><span class="label">{[this.gN(values)]}</span></td><td>({[values.ip]})</td><td>{[this.getTime(values)]}</td><td><span class="close-button"></span></td></tr></tpl></tbody></table>', {
      compiled: !0,
      gN: function (e) {
        return eht(e.name);
      },
      getTime: function (e) {
        return E.ca.Cc.cK(e.loginTime);
      }
    }));
    this.ha("settings-advanced-tab", new Ext.XTemplate('<div class="advanced-options"></div><div class="instances"><span>' + E.lang.PV + '</span><span class="no-instances">' + E.lang.SV + '</span><a href="#" class="instances-window">' + E.lang.TV + "</a></div>", {
      compiled: !0
    }));
    this.ha("settings-privacy-tab", new Ext.XTemplate('<div id="privacy-settings"><h2>' + E.lang.jG + '</h2><div class="privacy-options"></div><div class="settings-buttons-privacy"><div class="btns-line privacy-save"><div class="uiBtn btn-save left"><label><input type="button" value="' + E.lang.lw + '"></label></div><div class="uiBtn stripped btn-restore left"><label><input type="button" value="' + E.lang.kG + '"></label></div></div></div></div><div class="ignored-list"><h2>' + E.lang.gW + "</h2><p>" + E.lang.eW + '</p></div><div id="england-terms"><h2 class="extra-padding">' + E.lang.KV + '</h2><div class="england-options"></div><div class="settings-buttons-privacy"><div class="btns-line"><div class="uiBtn btn-save-england-terms left"><label><input type="button" value="' + E.lang.lw + '"></label></div></div></div><h2>' + E.lang.EV + "</h2><p>" + E.lang.HV + '</p><div class="settings-buttons-privacy"><div class="btns-line remove-account"><div class="uiBtn red btn-remove-account left"><label><input type="button" value="' + E.lang.JV + '"></label></div></div></div></div>', {
      compiled: !0
    }));
    this.ha("ignored-item-list", new Ext.XTemplate('<ul><tpl for="."><li class="ignored-item"><a href="{[this.gL(values)]}">{[this.gN(values)]}</a><div class="uiBtn stripped btn-unignore right"><label><input type="button" value="' + E.lang.hW + '"></label></div></li></tpl></ul>', {
      gN: function (e) {
        return eht(e.ShowName);
      },
      gL: function (e) {
        return "#profile/" + eha(e.uin);
      },
      compiled: !0
    }));
    this.ha("settings-myprofile-tab", new Ext.XTemplate('<div id="settings-myprofile-iframe-container"></div>', {
      compiled: !0
    }));
    this.ha("settings-notify-tab", new Ext.XTemplate("<h2>" + E.lang.XV + "</h2>", {
      compiled: !0
    }));
    this.ha("settings-ggwidget-tab", new Ext.XTemplate('<div id="settings-ggwidget-container"></div>', {
      compiled: !0
    }));
    this.ha("settings-instances-window", new Ext.XTemplate('<div class="body normal"></div>', {
      compiled: !0
    }));
    this.ha("settings-sounds-tab", new Ext.XTemplate('<div class="sound-volume-container"></div><div class="sound-motives"></div><div class="fonts-container"></div>', {
      compiled: !0
    }));
    this.ha("font-size-select", new Ext.XTemplate('<select class="font-size-list"><tpl for="fontSizes"><option {[values.id == parent.selectedSize ? "selected" : ""]} value="{id}">{name}</option></tpl></select>', {
      compiled: !0
    }));
    this.ha("font-settings", new Ext.XTemplate('<div class="size-settings"><h2>' + E.lang.hV + "</h2><label>" + E.lang.jV + "{[this.gSL(values)]}</label></div>", {
      gSL: function (e) {
        return this.xsa.apply(e);
      },
      xsa: this.ma("font-size-select"),
      compiled: !0
    }));
    this.ha("settings-clearaol-dialog-window", new Ext.XTemplate('<div class="title">' + E.lang.AV + '</div><div class="body normal">' + E.lang.yV + "<br/><br/>" + E.lang.zV + '</div><div class="btns"><div class="uiBtn blue cancel-no"><label><input type="button" value="' + E.lang.Cn + '"></label></div><div class="uiBtn stripped cancel-yes"><label><input type="button" value="' + E.lang.Dn + '"></label></div></div>', {
      compiled: !0
    }));
    this.ha("settings-notsaved-dialog-window", new Ext.XTemplate('<div class="title">' + E.lang.dW + '</div><div class="body normal">' + E.lang.cW + '</div><div class="btns"><div class="uiBtn blue cancel-yes"><label><input type="button" value="' + E.lang.Dn + '"></label></div><div class="uiBtn stripped cancel-no"><label><input type="button" value="' + E.lang.Cn + '"></label></div></div>', {
      compiled: !0
    }));
    this.ha("settings-dialog-window", new Ext.XTemplate('<div class="title">' + E.lang.kW + '</div><div class="body normal">' + E.lang.iW + "<br /><br />" + E.lang.jW + '</div><div class="btns"><div class="uiBtn blue cancel-no"><label><input type="button" value="' + E.lang.Cn + '"></label></div><div class="uiBtn stripped cancel-yes"><label><input type="button" value="' + E.lang.Dn + '"></label></div></div>', {
      compiled: !0
    }));
    this.ha("conference-member-menu", new Ext.Template('<div class="user-menu d-none"><div class="user-menu-arrow"></div><ul class="user-menu-list"><li class="chat">' + E.lang.QP + '</li><li class="call">' + E.lang.Mwa + '</li><li class="edit">' + E.lang.RP + "</li></ul></div>"));
    this.ha("conference-header", new Ext.XTemplate('<div class="user-avatar-area">{[this.gA(values)]}</div><div class="user-data-top"><div class="status-conference"></div><div class="conference-title"></div><div class="user-data-toolset">{[this.gUL(values)]}</div></div><div class="user-data-bottom"><span class="show-star sr-star{[this.gS(values)]}"></span><span class="members-label">' + E.lang.LB + '</span><div class="members-list"></div><div class="user-data-btns"></div></div>', {
      cu: this.ma("user-data-links"),
      gUL: function (e) {
        return this.cu.apply(e);
      },
      gA: function (g) {
        var o = "",
            h = m;
        g.user && (o = g.user.get("visible") ? "" : "d-none", h = g.user.get("avatar") || g.user.get("protoInfo") && g.user.get("protoInfo").avatar);
        var p = "";
        p += '<div class="preloader conference-avatar-preloader-' + g.uin + ' d-none"></div>';
        p += '<img alt="" src="' + C.k().zc({
          uin: g.uin,
          size: 80,
          type: "conference",
          avatar: h
        }) + '" class="sr-user-avatar" />';
        p += '<div class="conference-profile-change-avatar uiBtn white ' + o + '"><label><input type="button" value="' + E.lang.ew + '"></label></div>';
        return p;
      },
      gS: function (e) {
        return e.favorite ? " star-act" : " star-inact";
      },
      compiled: !0
    }));
    this.ha("conference-buttons", new Ext.XTemplate('<span class="btns-line"><div class="uiBtn blue talk-button"><label><input type="button" value="' + E.lang.IT + '"></label></div><a href="#" class="user-profile-icon user-profile-gg add-button"><i></i></a></span>', {
      compiled: !0
    }));
    this.ha("conference-description", new Ext.XTemplate('<div class="description"></div><div class="description-buttons"><div class="last-descriptions"></div><div class="uiBtn btn-description-set {[values.editMode == false ? "d-none" : ""]}"><label><input type="button" value="' + E.lang.HF + '"></label></div><div class="uiBtn stripped btn-description-change {[values.editMode == true ? "d-none" : ""]}"><label><input type="button" value="' + E.lang.GF + '"></label></div><div class="uiBtn stripped gray btn-description-cancel {[values.editMode == false ? "d-none" : ""]}"><label><input type="button" value="' + E.lang.FF + '"></label></div></div>', {
      compiled: !0
    }));
    this.ha("conference-show-members-list", new Ext.XTemplate('<ul><tpl for="."><li class="member member-{[this.gu(values)]} showname"><div class="user-status status-{[this.gus(values)]}" ></div><span class="username">{[this.gusn(values)]}</span></li></tpl><li class="btn-collapse">' + E.lang.NT + '</li></ul><div class="btn-show-more"></div>', {
      compiled: !0,
      gus: function (e) {
        return eht(e.status || e.protoInfo.status || "not_avail");
      },
      gusn: function (g) {
        var h = g.uin == C.k().fa.get("uin") ? E.lang.Se : g.ShowName;
        return eha(h || g.nick || g.label || g.uin || "");
      },
      gu: function (e) {
        return eha(e.uin);
      }
    }));
    this.ha("chat-conference-infobox-unknown-conference", new Ext.XTemplate('<div class="content"><span class="message">' + E.lang.YP + '</span><a href="#" class="conference-add">' + E.lang.MB + '</a><div class="close-msg-btn"><i></i></div></div>', {
      compiled: !0
    }));
    this.ha("chat-infobox-unknown-chat", new Ext.XTemplate('<div class="content chat-infobox-unknown-chat"><span class="message">' + E.lang.SO + '</span><a href="#" class="unknown-chat-add">' + E.lang.MB + '</a><div class="close-msg-btn"><i></i></div></div>', {
      compiled: !0
    }));
    this.ha("chat-infobox-unknown-contact", new Ext.XTemplate('<div class="content chat-infobox-unknown-contact"><div class="user-data"><p class="username"><a href="#profile/{[this.gUin(values)]}">{[this.gN(values)]}</a></p><p class="personal-data">{[this.gPD(values)]}</p></div><div class="user-actions"><div class="user-actions-wrapper"><div><div class="green uiBtn wide add-contact"><label><input type="button" value="' + E.lang.NY + '"></label></div><div class="red uiBtn report-abuse"><label><input type="button" value="' + E.lang.MY + '"></label></div></div><span class="invite-contact"><i><i class="sr-form-checkbox"></i></i>' + E.lang.LY + "</span></div></div></div>", {
      compiled: !0,
      gUin: function (e) {
        return eha(e.uin);
      },
      gN: function (e) {
        return eht(e.name) || e.uin;
      },
      gPD: function (g) {
        var h = [];
        g.age && h.push(eht(g.age));
        g.city && h.push(eht(g.city));
        g.street && h.push(eht(g.street));
        return h.join(", ");
      }
    }));
    this.ha("report-abuse-window", new Ext.XTemplate('<p class="header">' + E.lang.tU + '</p><ul><li><span data-report="spam" class="report-option"><i><i class="sr-form-checkbox"></i></i>' + E.lang.xU + '</span></li><li><span  data-report="vulgar-content" class="report-option"><i><i class="sr-form-checkbox"></i></i>' + E.lang.zU + '</span></li><li><span data-report="vulgar-avatar" class="report-option"><i><i class="sr-form-checkbox"></i></i>' + E.lang.yU + '</span></li><li><span data-report="other" class="report-option"><i><i class="sr-form-checkbox"></i></i>' + E.lang.wU + '</span></li><li class="other-message"><textarea rows="5" cols="45"></textarea></li></ul><div class="separator"></div><p><span class="ignore"><i><i class="sr-form-checkbox"></i></i>' + E.lang.uU + '</span></p><p class="ignore-description">' + E.lang.vU + '</p><div class="buttons"><div class="btn-save blue uiBtn"><label><input type="button" value="' + E.lang.FB + '"/></label></div><div class="btn-cancel uiBtn stripped"><label><input type="button" value="' + E.lang.qq + '"/></label></div></div>'));
    this.ha("edisc-send-file-confirm-window", new Ext.XTemplate('<div class="title">' + E.lang.sR + '</div><div class="body normal">{[this.gFN(values)]}</div><div class="buttons"><div class="uiBtn blue cancel-yes"><label><input type="button" value="' + E.lang.Dn + '"></label></div><div class="uiBtn stripped cancel-no"><label><input type="button" value="' + E.lang.Cn + '"></label></div></div>', {
      compiled: !0,
      gFN: function (e) {
        return e.filename;
      }
    }));
    this.ha("conference-edit-header", new Ext.XTemplate('<div class="conference-show-header"><div class="user-avatar-area left">{[this.ga(values)]}</div><div class="user-data-top left"><div class="conference-edit-title-input-ct"></div><div class="title uiBtn blue large"><label><input type="button" value="' + E.lang.IP + '"></label></div><div class="user-btns right"><a href="#" class="profile-close">' + E.lang.aw + '<i></i></a></div></div></div><div class="user-data-bottom left"><span class="show-star sr-star star-act d-none"></span><span class="members-label">' + E.lang.LB + '</span><div class="members-list"></div><div class="members-context-menu d-none"></div></div>', {
      compiled: !0,
      ga: function (e) {
        return '<img alt="" src="' + C.k().zc({
          uin: e.ConferenceID,
          size: 100
        }) + '" class="sr-user-avatar" />';
      }
    }));
    this.ha("file-manager-frame", new Ext.XTemplate('<iframe id="file-manager-frame" class="default-iframe" src="{address}" width="20" height="20" frameborder="0"></iframe>', {
      compiled: !0
    }));
    this.ha("file-rejected", new Ext.XTemplate('<div class="file-rejected file-msg "><span class="fileupload-icon"></span>' + E.lang.cD + "</div>", {
      compiled: !0
    }));
    this.ha("file-cancelled", new Ext.XTemplate('<div class="file-cancelled file-msg "><span class="fileupload-icon"></span>' + E.lang.bD + "</div>", {
      compiled: !0
    }));
    this.ha("file-uploaded", new Ext.XTemplate('<div class="file-uploaded file-msg"><span class="fileupload-icon"></span>' + E.lang.wR + "</div>", {
      compiled: !0
    }));
    this.ha("file-uploading", new Ext.XTemplate('<div class="file-uploading file-msg"><div class="uiBtn stripped cancel-file-button"><label><input type="button" value="Anuluj"></label></div><div >Przesy\u0142anie ({[this.gL(values)]} / {[this.gT(values)]})</div><div class="progressbar-external"><div style="width: {[this.gP(values)]}%" class="progressbar-internal"></div></div></div>', {
      gL: function (e) {
        return f.mm(e.file.loaded || 0);
      },
      gT: function (e) {
        return f.mm(e.file.file_size);
      },
      gP: function (e) {
        return e.file.file_size == 0 ? 100 : e.file.loaded > 0 && e.file.file_size > 0 ? ~~(e.file.loaded / e.file.file_size * 100) : 0;
      },
      compiled: !0
    }));
    this.ha("file-downloading", new Ext.XTemplate('<div class="uiBtn stripped cancel-file-button"><label><input type="button" value="Anuluj"></label></div><div class="file-downloading file-msg">' + E.lang.xR + "</div>", {
      compiled: !0
    }));
    this.ha("file-accepted", new Ext.XTemplate('<div class="file-accepted file-msg"><span class="fileupload-icon"></span>' + E.lang.vR + "</div>", {
      compiled: !0
    }));
    this.ha("file-error", new Ext.XTemplate('<div class="file-uploaded file-msg"><span class="fileupload-icon"></span>{error}</div>', {
      compiled: !0
    }));
    this.ha("sunrise-btn", new Ext.XTemplate('<div class="uiBtn {color} {cls}"><label><input type="button" value="{value}"></label></div>', {
      compiled: !0
    }));
    this.ha("sunrise-link", new Ext.XTemplate('<a class="uiBtn {color} {cls}" role="button" href="{link}"><span>{value}</span></a>', {
      compiled: !0
    }));
    this.ha("error-404-page", new Ext.XTemplate('<div style="margin-top: 150px;"><span class="error-info">' + E.lang.ZQ + "<br />" + E.lang.$Q + '</span></div><div style="margin-top: 50px; padding-bottom: 100px;"><a href="#" class="error-link error-page-link">' + E.lang.aR + "</a></div>", {
      compiled: !0
    }));
    this.ha("error-500", new Ext.XTemplate('<div class="error-wrapper"><div style="margin-top: 100px;"><span class="error-info">' + E.lang.bR + '</span></div><div style="margin-top: 50px; margin-bottom: 10px;"><span class="error-text">' + E.lang.dR + '</span> <a href="#" class="error-link start-snake">' + E.lang.cR + '</a> </div><div class="error-snake-container" id="error-snake-container"></div></div>', {
      compiled: !0
    }));
    this.ha("inline-edit-widget", new Ext.XTemplate('<p class="inline-edit-text">{[this.gTxt(values)]}</p>', {
      compiled: !0,
      gTxt: function (e) {
        return e.text;
      }
    }));
    this.ha("conference-name", new Ext.Template('<div class="uiBtn blue save-name"><label><input type="button" value="' + E.lang.lQ + '"></label></div>', {
      compiled: !0
    }));
    this.ha("chat-conference-description", new Ext.Template('<div class="uiBtn blue save-description"><label><input type="button" value="' + E.lang.xP + '"</label></div>', {
      compiled: !0
    }));
    this.ha("share-links-header", new Ext.XTemplate("{[this.gH(values)]}", {
      gH: function (e) {
        e.tm = e.tm || " " + E.lang.DW;
        return '<div class="share-links-header">' + e.tm + "</div>";
      },
      compiled: !0
    }));
    this.ha("share-links-resultlist-item", new Ext.XTemplate('<li id="share-link-{[this.gId(values)]}" class="share-links-resultlist-item {[this.gCC(values)]} {[this.gDS(values)]}"><span class="share-links-resultlist-item-wrapper"><span class="share-links-item-header"><span class="header-data"><i class="type-icon"></i><span class="sender nick-{[this.gFSU(values)]}">{[this.gFSN(values)]}</span></span></span><a {[this.gLC(values)]}><span class="share-links-item-content">{[this.gI(values)]}<span class="share-links-item-title">{[this.gT(values)]}</span>{[this.gD(values)]}</span></a></span></li>', {
      compiled: !0,
      gLC: function (g) {
        var h = "";
        h += C.ca.xa.pp(g.link) ? 'target="_self" ' : 'target="_blank" ';
        h += 'href="' + eht(g.link) + '" ';
        return h;
      },
      gFSN: function (e) {
        return eht(e.senders[0].name);
      },
      gFSU: function (e) {
        return eha(e.senders[0].id);
      },
      gCC: function (g) {
        var h = "";
        g.aj && (h += " thumbnail");
        return h;
      },
      gId: function (e) {
        return e.id;
      },
      gFC: function (e) {
        if (e > 0 && e / 1000 >= 1) {
          return Math.floor(e / 1000) + "k+";
        }

        return e;
      },
      gI: function (e) {
        if (e.aj) {
          if (Ext.isObject(e.aj) && e.aj["80x60"]) {
            return '<img class="share-links-item-thumbnail load-peeks" data-src="' + e.aj["80x60"] + '&rotate=auto">';
          } else {
            if (Ext.isString(e.aj)) {
              return '<img class="share-links-item-thumbnail load-peeks" data-src="' + e.aj + '&rotate=auto">';
            }
          }
        }

        return "";
      },
      gDS: function (e) {
        return eha(e.dataSourceType);
      },
      gT: function (e) {
        return C.ca.Dc.htmlText(e.title || e.link || e.content);
      },
      gD: function (e) {
        if (e.link !== "") {
          return e = C.ca.xa.ce(eht(e.link)), '<span class="share-links-item-domain">' + C.ca.Dc.htmlText(e) + "</span>";
        }

        return "";
      }
    }));
    this.ha("share-links-no-results", new Ext.XTemplate('<li class="no-results"><span>' + E.lang.FW + "<br />" + E.lang.GW + "</span></li>", {
      compiled: !0
    }));
    this.ha("share-links-resultlist", new Ext.XTemplate("{[this.dRL(values)]}", {
      itemTpl: this.ma("share-links-resultlist-item"),
      dRL: function (g) {
        for (var o = "", h = g.links.length, p = 0; p < h; p++) {
          o += this.itemTpl.apply(g.links[p]);
        }

        return o;
      },
      compiled: !0
    }));
    this.ha("share-links-widget", new Ext.XTemplate('{[this.renderHeader(values)]}<div class="share-links-resultlist-container">{[this.renderContent(values)]}</div><div class="share-links-footer"></div>', {
      rna: this.ma("share-links-header"),
      zf: this.ma("share-links-resultlist"),
      renderHeader: function (e) {
        return this.rna.apply(e);
      },
      renderContent: function (e) {
        return this.zf.apply(e);
      },
      compiled: !0
    }));
    this.ha("share-links-hover", new Ext.XTemplate('{[this.gH(values)]}<div class="hover-event {[this.gDS(values)]}"></div>', {
      gH: function (g) {
        var h = "";
        g.iA && (h += '<div class="hover-header"><div class="right-panel">' + this.gBtn(g) + "</div>" + this.gBP(g) + "</div>");
        return h;
      },
      gDS: function (e) {
        return e.dataSourceType;
      },
      gBtn: function (e) {
        return e.ZZ ? '<div class="uiBtn blue paste-to-chat"><label><input type="button" value=""><span>' + Ext.String.format(E.lang.HW, eht(e.ZZ.name)) + "</span></label></div>" : '<div class="uiBtn disabled paste-to-chat-disabled"><label><input type="button" value="' + E.lang.EW + '"></label></div>';
      },
      gBP: function (g) {
        var h = "";

        switch (g.dataSourceType) {
          case "aol":
            h += '<div class="sender-data"><i class="type-icon ' + g.dataSourceType + '"></i><span class="sender nick-' + g.sender.id + ' showname">' + eht(g.sender.label) + "</span></div>";
        }

        return h = h.length > 0 ? '<div class="left-panel">' + h + "</div>" : "";
      },
      compiled: !0
    }));
    this.ha("system-message", new Ext.Template('<span class="sr-system-messages-date-x">{time}</span><span class="message-container">{msg}</span><span class="sr-system-messages-close"><i></i></span>', {
      compiled: !0
    }));
    this.ha("lifestream-peeks", new Ext.XTemplate('<div class="lifestream-peeks {[this.gPC(values)]}">{[this.gCB(values)]}{[this.gI(values)]}<div class="peeks-content"><h2 class="peeks-title">{[this.cA(values)]}</h2><span class="peeks-host">{[this.gH(values)]}</span>{[this.gD(values)]}</div><div class="clear"></div></div>', {
      gT: function (e) {
        return e.title ? e.title : e.link;
      },
      gH: function (e) {
        return eht(e.host);
      },
      gD: function (e) {
        return e.description ? '<p class="peeks-description">' + eht(e.description) + "</p>" : "";
      },
      gL: function (e) {
        return e.link;
      },
      gI: function (g) {
        if (g.thumbnail) {
          var h = g.thumbnail.toString();
          g.type == "video" && (h.indexOf("fs=") !== -1 ? h = h.replace("fs=80x60", "fs=160x120") : h += "&fs=160x120");
          return h ? '<div class="peeks-photo"><img alt="" src="' + eha(h) + '"></div>' : "";
        }
      },
      gPC: function (g) {
        var h = "";
        g.thumbnail && (h += " thumb");
        h += " type-" + g.type;
        return h;
      },
      gCB: function (e) {
        return e.rza ? '<span class="close-button close-peeks"></span>' : "";
      },
      cA: function (e) {
        return C.ca.xa.qc(this.gL(e), this.gT(e), {
          title: this.gT(e)
        }, [eht]);
      },
      compiled: !0
    }));
    this.ha("lifestream-attachment-image", new Ext.XTemplate("{[this.gI(values)]}", {
      compiled: !0,
      gI: function (g) {
        try {
          var D = m,
              o = m;
          g.attachments[0].image && g.attachments[0].image[0] && (D = Ext.String.trim(g.attachments[0].image[0].link) ? g.attachments[0].image[0].link : m, o = Ext.String.trim(g.attachments[0].image[0].alt) ? g.attachments[0].image[0].alt : m);
          var G = '<div class="preview">',
              B = "";

          if (g.attachments[0].image && g.attachments[0].image[0]) {
            var z = o ? C.ca.Dc.Jy(g.attachments[0].image[0].alt) : "";

            if (Ext.isObject(g.attachments[0].image[0].src) && g.attachments[0].image[0].src["80x60"]) {
              var y = g.attachments[0].image[0].src["80x60"];
            } else {
              Ext.isString(g.attachments[0].image[0].src) && (y = g.attachments[0].image[0].src);
            }

            B += '<img class="share-links-item-thumbnail load-peeks" data-src="' + y + '" alt="' + z + '" />';
          }

          G += D ? C.ca.xa.qc(D, B) : B;
          G += "</div>";
          return G;
        } catch (h) {
          return "";
        }
      }
    }));
    this.ha("lifestream-attachment-photo", new Ext.XTemplate("{[this.gI(values)]}", {
      compiled: !0,
      gI: function (g) {
        try {
          var q = m,
              h = m;
          g.attachments[0].image && g.attachments[0].image[0] && (q = Ext.String.trim(g.attachments[0].image[0].link));
          g.attachments[0].image && g.attachments[0].image[0] && (h = Ext.String.trim(g.attachments[0].image[0].alt));
          var u = '<div class="preview">';
          u += q ? '<a target="_blank" href="' + eha(C.ca.xa.Xe(q)) + '">' : "";
          g.attachments[0].image && (Ext.isObject(g.attachments[0].image[0].src) && g.attachments[0].image[0].src["256x192"] ? u += '<img class="share-links-item-thumbnail load-peeks" data-src="' + g.attachments[0].image[0].src["256x192"] + '" ' + (h ? ' alt="' + C.ca.Dc.Jy(g.attachments[0].image[0].alt) + '"' : "") + "/>" : Ext.isString(g.attachments[0].image[0].src) && (u += '<img class="share-links-item-thumbnail load-peeks" data-src="' + g.attachments[0].image[0].src + '" ' + (h ? ' alt="' + C.ca.Dc.Jy(g.attachments[0].image[0].alt) : "") + '"/>'));
          u += q ? "</a>" : "";
          u += "</div>";
          return u;
        } catch (o) {
          return "";
        }
      }
    }));
    this.ha("lifestream-attachment-video", new Ext.XTemplate("{[this.gV(values)]}", {
      compiled: !0,
      gV: function (g) {
        try {
          var w = m,
              h = m;
          g.attachments[0].video && g.attachments[0].video[0] && (w = g.attachments[0].video[0].link || m);
          g.attachments[0].image && g.attachments[0].image[0] && (h = g.attachments[0].image[0].src["256x192"] || m);
          var g = '<div class="preview">',
              y = '<img alt="" class="preview-image load-peeks" data-src="' + eha(h) + '">',
              u = '<div class="btn-play-wrap"><i class="btn-play">' + E.lang.vE + "</i></div>";
          g += w ? C.ca.xa.qc(w, y + u) : y + u;
          g += "</div>";
          return g;
        } catch (o) {
          return "";
        }
      }
    }));
    this.ha("lifestream-attachment-text", new Ext.XTemplate("{[this.gT(values)]}", {
      compiled: !0,
      gT: function (g) {
        try {
          var z = g.family,
              h = g.attachments[0].text[0].title || m,
              B = g.attachments[0].text[0].link || m,
              y = g.attachments[0].text[0].body || m,
              w = g = "",
              w = B && z != "external" ? '<span class="domain">' + eht(C.ca.xa.ce(B)) + "</span>" : "";
          h && (g += B ? C.ca.xa.qc(B, h, {
            "class": "title"
          }, [eha]) : '<span class="title" title="' + eha(h) + '">');
          g += y ? '<span class="description">' + C.ca.xa.wd(y, m, m, [eht]) + "</span>" : "";
          g += w;
          return g;
        } catch (o) {
          return "";
        }
      }
    }));
    this.ha("lifestream-event-status-content", new Ext.XTemplate("{[this.gM(values)]}", {
      gM: function (e) {
        return e.message ? "<p>" + C.ca.xa.wd(e.message, m, m, [eht]) + "</p>" : "";
      },
      compiled: !0
    }));
    this.ha("lifestream-event-status", new Ext.XTemplate('<div class="event status"><div class="wrapper"><div class="container"><div class="content">{[this.gCon(values)]}</div></div></div></div>', {
      zf: this.ma("lifestream-event-status-content"),
      gCon: function (e) {
        return this.zf.apply(e);
      },
      gM: function (e) {
        return C.ca.xa.wd(e.message, m, m, [eht]);
      },
      compiled: !0
    }));
    this.ha("lifestream-event-link-content", new Ext.XTemplate('{[this.gM(values)]}<div class="media"><div class="peeks"><div class="essence">{[this.gI(values)]}<div class="content-data">{[this.gT(values)]}</div><div class="clear"></div></div></div></div>', {
      CK: this.ma("lifestream-attachment-image"),
      Fr: this.ma("lifestream-attachment-text"),
      zf: this.ma("lifestream-event-status-content"),
      gI: function (e) {
        return this.CK.apply(e);
      },
      gT: function (e) {
        return this.Fr.apply(e);
      },
      gM: function (e) {
        return this.zf.apply(e);
      },
      compiled: !0
    }));
    this.ha("lifestream-event-link", new Ext.XTemplate('<div class="event link"><div class="wrapper"><div class="container"><div class="content">{[this.gCon(values)]}</div></div></div></div>', {
      zf: this.ma("lifestream-event-link-content"),
      gCon: function (e) {
        return this.zf.apply(e);
      },
      compiled: !0
    }));
    this.ha("lifestream-event-video-content", new Ext.XTemplate('{[this.gM(values)]}<div class="media"><div class="peeks"><div class="essence">{[this.gV(values)]}<div class="content-data">{[this.gT(values)]}</div><div class="clear"></div></div></div></div>', {
      fu: this.ma("lifestream-attachment-video"),
      Fr: this.ma("lifestream-attachment-text"),
      zf: this.ma("lifestream-event-status-content"),
      gV: function (e) {
        return this.fu.apply(e);
      },
      gT: function (e) {
        return this.Fr.apply(e);
      },
      gM: function (e) {
        return this.zf.apply(e);
      },
      compiled: !0
    }));
    this.ha("lifestream-event-video", new Ext.XTemplate('<div class="event video"><div class="wrapper"><div class="container"><div class="content">{[this.gCon(values)]}</div></div></div></div>', {
      fu: this.ma("lifestream-attachment-video"),
      Fr: this.ma("lifestream-attachment-text"),
      zf: this.ma("lifestream-event-video-content"),
      gCon: function (e) {
        return this.zf.apply(e);
      },
      gV: function (e) {
        return this.fu.apply(e);
      },
      gT: function (e) {
        return this.Fr.apply(e);
      },
      compiled: !0
    }));
    this.ha("lifestream-event-photo-content", new Ext.XTemplate('<p>{[this.gM(values)]}</p><div class="media"><div class="peeks"><div class="essence">{[this.gIS(values)]}</div></div></div>', {
      QL: this.ma("lifestream-attachment-photo"),
      gM: function (e) {
        return C.ca.xa.wd(e.message, m, m, [eht]);
      },
      gIS: function (e) {
        return this.QL.apply(e);
      },
      compiled: !0
    }));
    this.ha("lifestream-event-photo", new Ext.XTemplate('<div class="event photo"><div class="wrapper"><div class="container"><div class="content">{[this.gCon(values)]}</div></div></div></div>', {
      zf: this.ma("lifestream-event-photo-content"),
      gCon: function (e) {
        return this.zf.apply(e);
      },
      gSL: function (e) {
        return eha(e.sender.label);
      },
      gT: function (e) {
        return eha(e.title);
      },
      compiled: !0
    }));
    this.ha("lifestream-generic-attachment-video", new Ext.XTemplate("{[this.gC(values)]}", {
      gC: function (g) {
        var n = g.link || m,
            g = '<div style="background-image:url(' + eha(g.src || m) + ')">',
            h = '<i class="btn-play">' + E.lang.vE + "</i>";
        g += n ? C.ca.xa.qc(n, h, {
          "class": "link"
        }) : h;
        g += "</div>";
        return g;
      },
      compiled: !0
    }));
    this.ha("lifestream-generic-attachment-image", new Ext.XTemplate("{[this.gC(values)]}", {
      gC: function (g) {
        var q = g.link || m,
            h = g.alt || "",
            u = "",
            o = "";
        o += '<img  src="' + g.src["80x60"] + '" width="80"';
        o += h ? ' alt="' + eha(h) + '"' : "";
        o += " />";
        u += q ? C.ca.xa.qc(q, o, {
          "class": "link"
        }) : o;
        return u;
      },
      compiled: !0
    }));
    this.ha("lifestream-generic-attachment-photo", new Ext.XTemplate("{[this.gC(values)]}", {
      gC: function (g) {
        var n = g.title || m,
            h = "";
        Ext.Object.each(g.src, function (e, l) {
          h += '<img  src="' + eha(C.ca.xa.Xe(l)) + '"';
          h += n ? ' alt="' + eha(n) + '"' : "";
          h += " />";
          return !1;
        });
        return h;
      },
      compiled: !0
    }));
    this.ha("lifestream-generic-attachment-text", new Ext.XTemplate("{[this.gC(values)]}", {
      gC: function (g) {
        var o = g.title || m,
            h = g.link || m,
            g = g.body || m,
            p = "";
        o && (p += h ? C.ca.xa.qc(h, o, {
          "class": "title",
          title: o
        }, [eha]) : '<span class="title" title="' + eha(o) + '">' + eht(o) + "</span>");
        p += g ? '<br /><span class="description">' + C.ca.xa.wd(g, m, m, [eht]) + "</span>" : "";
        return p;
      },
      compiled: !0
    }));
    this.ha("lifestream-event-generic", new Ext.XTemplate('<div class="event generic"><div class="wrapper"><div class="container"><div class="content">{[this.gM(values)]}{[this.gC(values)]}</div></div></div>', {
      fu: this.ma("lifestream-generic-attachment-video"),
      CK: this.ma("lifestream-generic-attachment-image"),
      Hua: this.ma("lifestream-generic-attachment-text"),
      QL: this.ma("lifestream-generic-attachment-photo"),
      gM: function (e) {
        return "<p>" + C.ca.xa.wd(e.message, m, m, [eht]) + "</p>";
      },
      gC: function (g) {
        var h = "";
        Ext.Array.each(g.attachments, function (e, l) {
          h += '<div class="group-' + l + '">';
          e.length && Ext.Array.each(e, function (n) {
            h += '<div class="attachment attachment-' + n.type + '">';

            switch (n.type) {
              case "video":
                h += this.fu.apply(n);
                break;

              case "image":
                h += this.CK.apply(n);
                break;

              case "text":
                h += this.Hua.apply(n);
                break;

              case "photo":
                h += this.QL.apply(n);
            }

            h += "</div>";
          }, this);
          h += "</div>";
          return !1;
        }, this);
        return h;
      },
      compiled: !0
    }));
    this.ha("refresh-session-window", new Ext.XTemplate('<iframe class="refresh-session-frame" src="/authorize/refresh" frameborder="0"></iframe>', {
      compiled: !0
    }));
    this.ha("GVC-desription-template", new Ext.XTemplate('<div class="gvc-description">' + E.lang.XT + "</div>", {
      compiled: !0
    }));
    this.ha("chat-item-aol-finished-av-call-wrapper", new Ext.XTemplate('<tr class="chat-tr item item-body notification"><th class="item-body-left hidden"></th><td class="item-body-message"><i></i><div class="msg-row">{msgView}</div>{[this.gCB(values)]}</td><td class="item-body-time"><span class="span-item-time">{msgTime}</span></td></tr>', {
      compiled: !0,
      gCB: function (e) {
        if (e.showCallButton) {
          return '<div class="uiBtn green ' + this.gcc(e) + '"></div>';
        }
      },
      gcc: function (e) {
        if (e.msgData.subtype) {
          switch (e.msgData.subtype) {
            case "audio":
            case "1":
              return "cll-audio";

            case "video":
            case "2":
              return "cll-video";
          }
        }

        return "";
      }
    }));
    this.ha("chat-item-aol-missed-av-call-wrapper", new Ext.XTemplate("{[this.getWrapper(values)]}", {
      getWrapper: function (e) {
        e.showCallButton = !0;
        return f.ma("chat-item-aol-finished-av-call-wrapper").apply(e);
      },
      compiled: !0
    }));
    this.ha("chat-item-aol-finished-easy-call-event-wrapper", new Ext.XTemplate("{[this.getWrapper(values)]}", {
      getWrapper: function (e) {
        e.showCallButton = !1;
        return f.ma("chat-item-aol-finished-av-call-wrapper").apply(e);
      },
      compiled: !0
    }));
    this.ha("chat-item-aol-conference-membership-change-event-wrapper", new Ext.XTemplate('<tr class="chat-tr item item-body message-type-7"><td class="item-body-text"><div class="msg-row">{msgView}</div></td><td class="item-body-time"><span class="span-item-time">{msgTime}</span></td></tr>', {
      compiled: !0
    }));
    this.ha("chat-item-aol-missed-easy-call-event-wrapper", new Ext.XTemplate("{[this.getWrapper(values)]}", {
      getWrapper: function (e) {
        e.showCallButton = !1;
        return f.ma("chat-item-aol-finished-av-call-wrapper").apply(e);
      },
      compiled: !0
    }));
    this.ha("chat-item-aol-incoming-easy-call-event-wrapper", new Ext.XTemplate("{[this.getWrapper(values)]}", {
      getWrapper: function (e) {
        e.showCallButton = !1;
        return f.ma("chat-item-aol-finished-av-call-wrapper").apply(e);
      },
      compiled: !0
    }));
    this.ha("chat-item-aol-file-transfer-event-wrapper", new Ext.XTemplate('<tr class="chat-tr item item-body file-manager-chat-msg"><td class="item-body-plug"></td><td class="item-body-message"><div class="msg-row">{msgView}</div></td><td class="item-body-time"><span class="span-item-time">{msgTime}</span></td></tr>', {
      compiled: !0
    }));
    this.ha("chat-item-aol-events", new Ext.XTemplate("{[this.getWrapper(values)]}", {
      getWrapper: function (e) {
        return f.ma("chat-item-" + e.Gb + "-wrapper").apply({
          msgView: this.getMsgView(e),
          msgTime: this.getMsgTime(e),
          msgData: e.message,
          template: e.Gb
        });
      },
      getMsgView: function (e) {
        return f.ma(e.Gb).apply(e.message);
      },
      getMsgTime: function (e) {
        return E.ca.Cc.ny(e.message.sentTime);
      },
      compiled: !0
    }));
    this.ha("confirmation-ignore-popup", new Ext.XTemplate('<div class="confirmation-header">Czy na pewno chcesz ignorowa\u0107 {[eht(values.label)]}?</div><div class="confirmation-body"></div><div class="confirmation-footer btns"><div class="confirm-btn"><div class="uiBtn blue"><label><input type="button" value="' + E.lang.nP + '"></label></div></div><div class="cancel-btn"><div class="uiBtn stripped"><label><input type="button" value="' + E.lang.rq + '"></label></div></div></div>', {
      compiled: !0
    }));
    this.ha("confirmation-enable-aol-popup", new Ext.XTemplate('<div class="confirmation-header">Czy na pewno chcesz w\u0142\u0105czy\u0107 zapisywanie do archiwum wiadomo\u015bci od {[eht(values.label)]}?</div><div class="confirmation-body"></div><div class="confirmation-footer btns"><div class="confirm-btn"><div class="uiBtn blue"><label><input type="button" value="' + E.lang.jP + '"></label></div></div><div class="cancel-btn"><div class="uiBtn stripped"><label><input type="button" value="' + E.lang.rq + '"></label></div></div></div>', {
      compiled: !0
    }));
    this.ha("confirmation-disable-aol-popup", new Ext.XTemplate('<div class="confirmation-header">Czy na pewno chcesz wy\u0142\u0105czy\u0107 zapisywanie do archiwum wiadomo\u015bci od {[eht(values.label)]}?</div><div class="confirmation-body"></div><div class="confirmation-footer btns"><div class="confirm-btn"><div class="uiBtn blue"><label><input type="button" value="' + E.lang.iP + '"></label></div></div><div class="cancel-btn"><div class="uiBtn stripped"><label><input type="button" value="' + E.lang.rq + '"></label></div></div></div>', {
      compiled: !0
    }));
    this.ha("confirmation-unignore-popup", new Ext.XTemplate('<div class="confirmation-header">Czy na pewno chcesz odignorowa\u0107 {[eht(values.label)]}?</div><div class="confirmation-body"></div><div class="confirmation-footer btns"><div class="confirm-btn"><div class="uiBtn blue"><label><input type="button" value="' + E.lang.AP + '"></label></div></div><div class="cancel-btn"><div class="uiBtn stripped"><label><input type="button" value="' + E.lang.rq + '"></label></div></div></div>', {
      compiled: !0
    }));
    this.ha("roulette-container", new Ext.XTemplate('<div class="roulette-panel ads"><div class="roulette-data" id="rouletteData"><div class="user-btns right"><a href="#" class="report-abuse">' + E.lang.VU + '</a></div><span class="roulette-container-title"><i></i>' + E.lang.gw + '</span><div class="roulette-spinner"><div><div class="roulette-avatar"></div></div><div><div class="roulette-spinner-1"></div></div><div><div class="roulette-spinner-2 idle"></div></div></div><div class="state-1"><p class="info">' + E.lang.MU + '</p></div><div class="state-2"><p class="info">' + E.lang.NU + '</p></div><div class="state-3 interlocutor"></div><div class="state-1 roulette-buttons"><div class="{[this.gSB(values)]} blue uiBtn wide"><label><input type="button" value="' + E.lang.cr + '"/></label></div></div><div class="state-2 roulette-buttons"><div class="btn-cancel stripped uiBtn wide"><label><input type="button" value="' + E.lang.EU + '"/></label></div></div><div class="state-3 roulette-buttons"><div class="btn-start-chat uiBtn wide"><label><input type="button" value="' + E.lang.FU + '"/></label></div><div class="{[this.gSBA(values)]} white uiBtn wide"><label><input type="button" value="' + E.lang.GU + '"/></label></div></br></br></div><div class="options-buttons"><div class="btn-see-how-you-are-seen stripped uiBtn wide"><label><input type="button" value="' + E.lang.HU + '"/></label></div><div class="btn-search-options stripped uiBtn wide"><label><input type="button" value="' + E.lang.TF + '"/></label></div></div><div class="clear"></div></div><div class="rmp-container d-none" id="rmpPlayer"><div class="rmp-remaining-time"></div><div class="rmp-content"><video class="rmp-video"></video></div><div class="rmp-actions"><a id="mute-audio-button" class="item" href="#"></a></div></div></div>', {
      gSB: function (e) {
        return e.btnSpin;
      },
      gSBA: function (e) {
        return e.btnSpinAgain;
      },
      compiled: !0
    }));
    this.ha("roulette-other-container", new Ext.XTemplate('<div class="roulette-others-panel"><span class="roulette-container-title"><i></i>' + E.lang.gw + '</span><div class="roulette-spinner"><div><div class="roulette-avatar"><img src="{avatarUrl}" class="roulette-user-avatar"></div></div><div class="btn-change-avatar blue uiBtn wide"><label><input type="button" value="' + E.lang.QU + '"/></label></div></div><div class="interlocutor"><p class="info">{[eht(values.label)]}</p><p class="aditionalInfo">{personalDataText}</p><p class="statusDescription">{statusDescription}</p></div><div class="roulette-buttons"><div class="btn-edit-profile uiBtn wide"><label><input type="button" value="' + E.lang.UF + '"/></label></div></br></br></div><div class="options-buttons"><div class="btn-back stripped uiBtn wide"><label><input type="button" value="' + E.lang.SF + '"/></label></div><div class="btn-search-options stripped uiBtn wide"><label><input type="button" value="' + E.lang.TF + '"/></label></div></div><div class="clear"></div></div>', {
      compiled: !0
    }));
    this.ha("roulette-container-additional-info", new Ext.XTemplate('<p class="info"><a href="#profile/{[eha(values.uin)]}">{[eht(values.label)]}</a></p><p class="aditionalInfo">{[this.gAI(values)]}</p><p class="statusDescription">{[this.gSD(values)]}</p>', {
      compiled: !0,
      gAI: function (g) {
        var o = g.age ? ("" + g.age).trim() : "",
            h = g.city ? g.city.trim() : "",
            g = [(g.gender === 1 ? E.lang.Cu : E.lang.Du).toLowerCase()],
            p = "";
        o !== "" && (o = C.ca.Dc.htmlText(o.trim()) + " " + C.ca.xa.aK(o, E.lang.Lu, E.lang.Ku, E.lang.sq), g.push(o));
        h !== "" && (p = "<br>" + C.ca.Dc.htmlText(h.trim()));
        return g.join(", ") + p;
      },
      gSD: function (e) {
        return e.H8 ? e.H8.trim() : "";
      }
    }));
    this.ha("roulette-search-options-container", new Ext.XTemplate('<div class="roulette-search-panel"><div class="roulette-search-options-panel"><span class="roulette-container-title"><i></i>' + E.lang.gw + '</span><div class="gender-selection"><p>' + E.lang.PU + '</p><ul><li><label><input type="radio" class="options-gender-radio" name="selection" value="female" /><img src="/images/sr-avatar-blank-female-80.png"><span>' + E.lang.KU + '</span></label></li><li><label><input type="radio" class="options-gender-radio" name="selection" value="male" /><img src="/images/sr-avatar-blank-male-80.png"><span>' + E.lang.LU + '</span></label></li><li><label><input type="radio" class="options-gender-radio" name="selection" checked value="any" /><img src="/images/sr-avatar-blank-conference-80.png"><span>' + E.lang.JU + '</span></label></li></ul></div></div><div class="roulette-search-options-panel panel-age"><div class="age-selection"></div><div class="roulette-buttons"><div class="{[this.gSBCN(values)]} blue uiBtn wide"><label><input type="button" value="' + E.lang.cr + '"/></label></div></div></div><div class="options-buttons"><div class="btn-back stripped uiBtn wide"><label><input type="button" value="' + E.lang.SF + '"/></label></div><div class="btn-edit-profile stripped uiBtn wide"><label><input type="button" value="' + E.lang.UF + '"/></label></div></div></div>', {
      gSBCN: function (e) {
        return e.btnSpin;
      },
      compiled: !0
    }));
    this.ha("drive-company-message", new Ext.XTemplate(E.lang.QQ, {
      compiled: !0
    }));
    this.ha("group-name", new Ext.XTemplate('<div class="group-form-text-field-input"><input placeholder="' + E.lang.aQ + '" {[this.gD(values)]} value="{[eha(values.value)]}" autocomplete="off" type="text" maxlength="255" id="group-name" /></div>', {
      gD: function (e) {
        if (typeof e.disabled !== "undefined" && e.disabled) {
          return "disabled";
        }

        return "";
      },
      compile: !0
    }));
    this.ha("contacts-picker-start-view", new Ext.XTemplate('<ul class="contacts-picker"><li class="d-none no-results"></li><tpl if="this.limitMax == 0"><li class="list-item friend select-all-stars">{[this.chbox()]}<div class="sr-star star-act"></div>', NaN + E.lang.KP + '</div></li></tpl><tpl for="."><li class="list-item contact{[this.dup(values.duplicated)]}{[this.friend(values, " friend", " disabled")]}{[this.favorite(values)]}"><tpl if="gid == 3"><div class="sr-star star-act"></div></tpl>{[this.chbox()]}<div class="sr-status status-{protoInfo.status} {[this.customStatus(values)]}"></div><div class="contact-name"><tpl if="gid == 0 && name == \'\'">' + E.lang.Se + '</tpl><tpl if="gid != 0 || name != \'\'">{[eht(values.ShowName)]}</tpl>{[this.friend(values, "<span class=not-friend-info>' + E.lang.OB + '</span>", "", true)]}</div></li></tpl></ul>', {
      dup: function (e) {
        return e ? " d-none" : "";
      },
      friend: function (g, o, h, p) {
        g = g.protoInfo.friend || g.type == 4;
        return p ? !g ? o : h : g ? o : h;
      },
      chbox: A('<i class="chbox"><i class="sr-form-checkbox"></i></i>'),
      favorite: function (e) {
        if (e.gid == 3) {
          return " favorite";
        }

        return "";
      },
      customStatus: function (e) {
        return C.k().Wi(e.protoInfo.status);
      },
      compiled: !0
    }));
    this.ha("contacts-picker-search-field", new Ext.XTemplate('<div class="contacts-picker-searchfield initial-text"><div class="contacts-picker-searchfield-input-wrapper"><input id="contacts-picker-searchfield-input" class="input-text" type="text" size="20" class="" autocomplete="off" placeholder="' + E.lang.TP + '"></div><div class="x-btn search-clear-filter-btn x-btn-default-small d-none"><label><input class="x-btn-inner" type="button" value="&nbsp;"></label></div></div>', {
      compile: !0
    }));
    this.ha("inline-edit-text", new Ext.XTemplate("{[this.gE(values)]}", {
      gE: function (g) {
        var h = [];
        g.maxLength && h.push('maxlength="' + eha(g.maxLength) + '"');
        g.rows && h.push('rows="' + eha(g.rows) + '"');
        g.width && h.push('style="width: ' + eha(g.width) + 'px;"');

        if (g.multiline) {
          return '<textarea class="input-text inline-edit-text-field" ' + h.join(" ") + "></textarea>";
        }

        return '<input class="input-text inline-edit-text-field" type="text" ' + h.join(" ") + "/>";
      },
      compile: !0
    }));
    this.ha("contact-form-text-field", new Ext.XTemplate('<div class="contact-form-text-field-container"><div class="contact-form-text-field-label"><label for="{[eha(values.id)]}">{[eht(values.labelText)]}</label></div><div class="contact-form-text-field-input"><input data-field-group="{[eha(values.fieldGroup)]}" data-field-validation-group="{[eha(values.validationGroup)]}" value="{[eha(values.value)]}" autocomplete="off" type="text" maxlength="{[eha(values.maxLength)]}" id="{[eha(values.id)]}" name="{[eha(values.id)]}" /></div>{[this.gM(values)]}<p class="contact-form-error-text"></p></div>', {
      gM: function (e) {
        if (e.multiple) {
          return '<div class="sr-add-field-btn stripped uiBtn"><label><input type="button" value="' + eha(e.multipleLabel) + '" role="button"></label></div>';
        }

        return "";
      },
      compile: !0
    }));
    this.ha("contact-form-edit-contact-email", new Ext.XTemplate("{[this.gC(values)]}", {
      Qg: this.ma("contact-form-text-field"),
      gC: function (e) {
        return this.Qg.apply({
          id: e.id,
          fieldGroup: e.fieldGroup,
          validationGroup: "email",
          multiple: e.multiple,
          multipleLabel: E.lang.Txa,
          labelText: E.lang.RT,
          maxLength: e.maxLength,
          value: e.value || ""
        });
      },
      compile: !0
    }));
    this.ha("contact-form-edit-contact-phone", new Ext.XTemplate("{[this.gC(values)]}", {
      Qg: this.ma("contact-form-text-field"),
      gC: function (e) {
        return this.Qg.apply({
          id: e.id,
          fieldGroup: e.fieldGroup,
          validationGroup: "mobile",
          multiple: e.multiple,
          multipleLabel: E.lang.cw,
          labelText: E.lang.dw,
          maxLength: e.maxLength,
          value: e.value || ""
        });
      },
      compile: !0
    }));
    this.ha("contact-form-edit-contact-mobilePhone", new Ext.XTemplate("{[this.gC(values)]}", {
      Qg: this.ma("contact-form-text-field"),
      gC: function (e) {
        return this.Qg.apply({
          id: e.id,
          fieldGroup: e.fieldGroup,
          validationGroup: "mobile",
          multiple: e.multiple,
          multipleLabel: E.lang.cw,
          labelText: E.lang.dw,
          maxLength: e.maxLength,
          value: e.value || ""
        });
      },
      compile: !0
    }));
    this.ha("contact-form-edit-contact-homePhone", new Ext.XTemplate("{[this.gC(values)]}", {
      Qg: this.ma("contact-form-text-field"),
      gC: function (e) {
        return this.Qg.apply({
          id: e.id,
          fieldGroup: e.fieldGroup,
          validationGroup: "mobile",
          multiple: e.multiple,
          multipleLabel: E.lang.cw,
          labelText: E.lang.dw,
          maxLength: e.maxLength,
          value: e.value || ""
        });
      },
      compile: !0
    }));
    this.ha("contact-form", new Ext.XTemplate('<div class="profile-contact-form"><div class="edit-form-title">{[this.gT(values)]}</div><div class="edit-form-message">' + E.lang.hU + '</div><div class="contact-form">{[this.gCF(values)]}</div><div class="form-buttons"><div class="btn-save uiBtn blue"><label><input type="button" value="' + E.lang.UT + '"></label></div><div class="btn-cancel uiBtn stripped"><label><input type="button" value="' + E.lang.QT + '"></label></div></div></div>', {
      Qg: this.ma("contact-form-text-field"),
      Q4: this.ma("contact-form-edit-contact-email"),
      noa: this.ma("contact-form-edit-contact-phone"),
      moa: this.ma("contact-form-edit-contact-homePhone"),
      R4: this.ma("contact-form-edit-contact-mobilePhone"),
      gT: function (e) {
        return e.mode === "add" ? E.lang.fU : E.lang.gU;
      },
      gVM: function (e) {
        return typeof e.multiple !== "undefined" ? e.multiple : !0;
      },
      gCF: function (g) {
        var n = new Date().getTime(),
            h = [];
        g.showGGNumberField === !0 && h.push(this.Qg.apply({
          id: "edit-contact-ggnumber",
          fieldGroup: "ggnumber",
          validationGroup: "ggnumber",
          multiple: !1,
          labelText: E.lang.JR,
          maxLength: g.maxLengthConfig.ggnumber,
          value: g.ggNumber || ""
        }));
        h.push(this.Qg.apply({
          id: "edit-contact-name",
          fieldGroup: "name",
          validationGroup: "name",
          multiple: !1,
          labelText: E.lang.TT,
          maxLength: g.maxLengthConfig.name,
          value: g.name || ""
        }));
        g.homePhones && Ext.Array.each(g.homePhones, function (b) {
          if (b.length === 0) {
            return !0;
          }

          h.push(this.moa.apply({
            maxLength: g.maxLengthConfig.mobile,
            id: "edit-contact-homePhone-" + n++,
            fieldGroup: "homePhone",
            validationGroup: "mobile",
            value: b,
            multiple: !1
          }));
        }, this);
        g.phones && Ext.Array.each(g.phones, function (b) {
          if (b.length === 0) {
            return !0;
          }

          h.push(this.noa.apply({
            maxLength: g.maxLengthConfig.mobile,
            id: "edit-contact-phone-" + n++,
            fieldGroup: "phone",
            validationGroup: "mobile",
            value: b,
            multiple: !1
          }));
        }, this);
        g.mobilePhones && Ext.Array.each(g.mobilePhones, function (b) {
          if (b.length === 0) {
            return !0;
          }

          h.push(this.R4.apply({
            maxLength: g.maxLengthConfig.mobile,
            id: "edit-contact-mobilePhone-" + n++,
            fieldGroup: "mobilePhone",
            validationGroup: "mobile",
            value: b,
            multiple: !1
          }));
        }, this);
        h.push(this.R4.apply({
          maxLength: g.maxLengthConfig.mobilePhone,
          id: "edit-contact-mobilePhone",
          fieldGroup: "mobilePhone",
          validationGroup: "mobile",
          multiple: this.gVM(g)
        }));
        g.emails && Ext.Array.each(g.emails, function (b) {
          if (b.length === 0) {
            return !0;
          }

          h.push(this.Q4.apply({
            maxLength: g.maxLengthConfig.email,
            id: "edit-contact-email-" + n++,
            fieldGroup: "email",
            validationGroup: "email",
            value: b,
            multiple: !1
          }));
        }, this);
        h.push(this.Q4.apply({
          maxLength: g.maxLengthConfig.email,
          id: "edit-contact-email",
          fieldGroup: "email",
          validationGroup: "email",
          multiple: this.gVM(g)
        }));
        h.push(this.Qg.apply({
          id: "edit-contact-siteUrl",
          fieldGroup: "siteUrl",
          validationGroup: "siteUrl",
          multiple: !1,
          labelText: E.lang.VT,
          maxLength: g.maxLengthConfig.siteUrl,
          value: g.siteUrl || ""
        }));
        return h.join("");
      },
      compile: !0
    }));
    this.ha("search-container", new Ext.XTemplate('<div id="search-unknown-user" class="search-unknown-user d-none">' + E.lang.bV + '</div><div id="search-form"><div id="search-form-panel" class="search-form-panel"><h1>' + E.lang.PR + '</h1><div class="search-form"><div class="search-form-input"><input id="search-all" class="input-text search-form-all" value="{[eha(values.value)]}" placeholder="' + E.lang.IR + '" autocomplete="off" type="text" name="all" /></div><div class="search-contact-next uiBtn blue"><label><input type="button" value="' + E.lang.bP + '"></label></div><div class="email-contact-invite uiBtn blue d-none"><label><input type="button" value="' + E.lang.MR + '"></label></div></div><div class="search-options"><div class="show-criteria collapsed"><span>' + E.lang.eD + '</span><i></i></div><div><span class="add-contact-manualy">' + E.lang.BR + '</span></div></div><div class="search-criteria-form collapsed"><div class="search-type"><div class="field-title">' + E.lang.FR + ':</div><label><input type="checkbox" name="type" id="search-type"></label></div><div class="search-age"><label class="field-title" for="search-age-from">' + E.lang.AR + ':</label><div class="age-from"><input id="search-age-from" class="input-text" value="{[eha(values.value)]}" placeholder="' + E.lang.GR + '" autocomplete="off" type="text" name="age-from" /></div><div class="age-to"><input id="search-age-to"  class="input-text" value="{[eha(values.value)]}" placeholder="' + E.lang.HR + '" autocomplete="off" type="text" name="age-to" /></div></div><div class="search-gender"><div class="field-title">' + E.lang.ST + ':</div><label><input class="radio-item" checked value="2" type="radio" name="gender" />' + E.lang.Du + '</label><label><input class="radio-item" value="1" type="radio" name="gender" />' + E.lang.Cu + '</label></div><div class="search-city"><label class="field-title" for="search-city">' + E.lang.CR + ':</label><input class="input-text" id="search-city" placeholder="' + E.lang.DR + '" type="text" name="city" /></div></div></div></div><div id="search-results"></div><div class="clear"></div><div class="roulette-search"><div class="greeter">' + E.lang.OU + '</div><div class="buttons"><div class="btn-spin-the-roulette blue uiBtn wide"><label><input type="button" value="' + E.lang.cr + '"/></label></div></div><div class="clear"></div></div>', {
      compile: !0
    }));
  }
});