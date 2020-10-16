sunrise.extend(gg.aa.protocol.transport.ja.prototype, {
  li: m,
  Rc: m,
  mo: m,
  _url: m,
  bp: !1,
  aborted: !1,
  timedout: !1,
  sM: !1,
  Oz: 0,
  filter: m,
  data: m,
  ondata: m,
  ontimeout: m,
  onretry: m,
  onretrydelay: m,
  onerror: m,
  onfatalerror: m,
  oninitialization: m,
  onfinalization: m,
  ke: function (c) {
    var h = [];

    if (typeof this["on" + c] != "function") {
      return !1;
    }

    for (var f = 1; f < arguments.length; h.push(arguments[f++])) {}

    this["on" + c].apply(m, h);
    c == "finalization" && gg.aa.protocol.transport.ja.Nda(this.li);
    c == "fatalerror" && this.ke("finalization");
    return !0;
  },
  yda: function () {
    var c = this;

    if (this.Rc !== m) {
      try {
        delete this.Rc.onreadystatechange, this.Rc = m;
      } catch (f) {}
    }

    this.Rc = function () {
      if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
      }

      for (var n = ["MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp"], g = 0; g < n.length; g++) {
        try {
          return new ActiveXObject(n[g]);
        } catch (b) {}
      }

      c.ke("fatalerror");
      return m;
    }();

    if (this.Rc === m) {
      return !1;
    }
  },
  iH: function () {
    this.yda();
    this.ke("initialization");
  },
  dZ: function (c) {
    for (a in c) {
      typeof this[a] != "undefined" && (this[a] = c[a]);
    }
  },
  zya: m,
  eH: m,
  or: function () {
    window.clearTimeout(this.bZ);
    window.clearTimeout(this.eH);

    if (this.Rc === m || this.bp) {
      return !1;
    }

    this.Oz > 0 && this.ke("retry");
    this.Rc.abort();

    if (gg.aa.protocol.transport.ja.sid && gg.aa.protocol.transport.ja.sid != sunrise.lm("[[sid_gg__0]]")) {
      this.ke("fatalerror", {});
    } else {
      var b = this.data !== m ? this.data : "";
      b.length > 0 && this.filter !== m && typeof this.filter.encode == "function" && (b = this.filter.encode(b));
      var e = this._url;
      e += "?";
      e += new Date().getTime().toString();
      this.timedout = this.aborted = this.sM = this.mH = !1;

      try {
        this.Rc.open(this.mo == gg.aa.protocol.transport.ja.Iq ? "GET" : "POST", e, !0);
      } catch (g) {
        return this.ke("fatalerror", g), !1;
      }

      with (this.Rc) {
        typeof overrideMimeType == "function" && overrideMimeType("text/plain"), onreadystatechange = function () {
          typeof gg != "undefined" && this.Rc.readyState > 1 && (window.clearTimeout(this.bZ), this.Rc.readyState == 4 && this.Jda());
        }.bind(this), this.mo != gg.aa.protocol.transport.ja.Iq && setRequestHeader("Content-type", "application/x-www-form-urlencoded"), setTimeout(function () {
          send(b);
        }.bind(this.Rc), 0);
      }
      this.bZ = setTimeout(function () {
        this.Lda();
      }.bind(this), gg.aa.protocol.transport.ja.J$);
      this.eH = setTimeout(function () {
        this.Kda();
      }.bind(this), gg.aa.protocol.transport.ja.U$);
    }
  },
  Lda: function () {
    if (!this.bp) {
      this.timedout = this.aborted = !0, this.Rc.abort(), this.ke("timeout"), this.Oz++ == gg.aa.protocol.transport.ja.CU ? this.ke("fatalerror") : (this.ke("retrydelay"), setTimeout(function () {
        this.or();
      }.bind(this), gg.aa.protocol.transport.ja.tca));
    }
  },
  Kda: function () {
    if (!this.bp) {
      this.aborted = !0, this.sM = this.mo == gg.aa.protocol.transport.ja.Iq, this.Rc.abort();
    }
  },
  mH: !1,
  Jda: function () {
    window.clearTimeout(this.eH);

    if (!this.mH && !this.bp) {
      if (this.mH = !0, this.aborted && this.sM) {
        IE && this.iH(), this.or();
      } else {
        if (!this.aborted) {
          if (this.Rc.status != 200 && !this.timedout) {
            if (this.ke("error", this.Rc), this.Oz++ == gg.aa.protocol.transport.ja.CU) {
              this.bp = !0;
              this.ke("fatalerror", this.Rc);
              return;
            }
          } else {
            var c = this.Rc.responseText ? this.Rc.responseText.substring(1) : "";
            c.length > 0 && (this.filter !== m && typeof this.filter.decode == "function" && (c = this.filter.decode(c)), this.ke("data", c));
            this.Oz = 0;
          }
        }

        if (this.mo == gg.aa.protocol.transport.ja.Iq) {
          var h;

          try {
            h = this.Rc.status;
          } catch (f) {
            this.ke("finalization");
          }

          h === 200 ? !this.timedout && this.or() : this.ke("finalization");
        } else {
          this.ke("finalization");
        }
      }
    }
  },
  Oda: function (c) {
    this.dZ(c);
    this.mo = gg.aa.protocol.transport.ja.taa;
    this._url = gg.aa.protocol.transport.ja.zca;
    this.iH();
    this.or();
  },
  Mda: function (c) {
    this.dZ(c);
    this.mo = gg.aa.protocol.transport.ja.Iq;
    this._url = gg.aa.protocol.transport.ja.pca;
    this.iH();
    this.or();
  }
});