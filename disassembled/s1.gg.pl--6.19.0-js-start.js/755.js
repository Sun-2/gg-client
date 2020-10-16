Ext.define(C.f.yn, {
  extend: "Ext.button.Button",
  alias: "widget.sr-button",
  es: " uiBtn",
  renderTpl: '<tpl if="href"><a href="{href}" target="{target}"<tpl if="tabIndex"> tabIndex="{tabIndex}"</tpl> role="link"><span class="{baseCls}-inner">{text}</span></a></tpl><tpl if="!href"><label><tpl if="ico"><i class="{ico}"></i></tpl><input class="{baseCls}-inner" type="{type}" value="{text}" /></label></tpl>',
  constructor: function (c) {
    this.es = c.es != m ? c.es : this.es;
    c.cls += this.es;
    c.J8 && (c.cls += " stripped");
    c.disabled && (c.cls += " disabled");

    if (c.yK) {
      this.yK = c.yK;
    }

    this.callParent([c]);
  },
  getTemplateArgs: function () {
    var c = this.callParent();
    c.ico = this.yK || !1;
    return c;
  },
  onRender: function () {
    var c;
    Ext.applyIf(this.renderData, this.getTemplateArgs());
    Ext.applyIf(this.renderSelectors, {
      btnEl: this.href ? "a" : "input",
      btnWrap: "label",
      btnInnerEl: "." + this.baseCls + "-inner"
    });

    if (this.scale) {
      this.ui = this.ui + "-" + this.scale;
    }

    Ext.Component.prototype.onRender.apply(this, arguments);

    if (this.split && this.arrowTooltip) {
      this.arrowEl.dom[this.tooltipType] = this.arrowTooltip;
    }

    this.mon(this.btnEl, {
      scope: this,
      focus: this.onFocus,
      blur: this.onBlur
    });
    c = this.el;
    this.icon && this.setIcon(this.icon);
    this.iconCls && this.setIconCls(this.iconCls);
    this.tooltip && this.setTooltip(this.tooltip, !0);
    this.handleMouseEvents && (this.mon(c, {
      scope: this,
      mouseover: this.onMouseOver,
      mouseout: this.onMouseOut,
      mousedown: this.onMouseDown
    }), this.split && this.mon(c, {
      mousemove: this.onMouseMove,
      scope: this
    }));

    if (this.menu) {
      this.mon(this.menu, {
        scope: this,
        show: this.onMenuShow,
        hide: this.onMenuHide
      }), this.keyMap = Ext.create("Ext.util.KeyMap", this.el, {
        key: Ext.EventObject.DOWN,
        handler: this.onDownKey,
        scope: this
      });
    }

    this.repeat ? (c = Ext.create("Ext.util.ClickRepeater", c, Ext.isObject(this.repeat) ? this.repeat : {}), this.mon(c, "click", this.onRepeatClick, this)) : this.mon(c, this.clickEvent, this.onClick, this);
    Ext.ButtonToggleManager.register(this);
  },
  enable: function () {
    this.callParent(arguments);
    this.removeCls("disabled");
    return this;
  },
  disable: function () {
    this.callParent(arguments);
    this.addCls("disabled");
    return this;
  }
});