/* global qs qsi shareTemplates */

"use strict";

function isFunction(obj) { return typeof obj === "function" }


var getOrApply = function(value, context, args2) {
  if (isFunction(value)) {
    return value.apply(context, [args2]);
  }
  return value;
};

const showLabelMinWidth = 640;
const containerClass = "socials";
const shareClass = "social";
const shareLinkClass = "social-link";
const shareLogoClass = "social-logo";
const shareLabelClass = "social-label";


export class Share {
  constructor(config) {
    this.btns = null;
    window.on("resize", this.onWindowResize);
    this.update(config);
  }


  showLabel(screenWidth) {
    return (screenWidth > showLabelMinWidth);
  }


  onWindowResize() {
    if (isFunction(this.showLabel)) {
      window.clearTimeout(this._resizeTimer);
      this._resizeTimer = window.setTimeout(this.render, 200);
    }
  }


  getShare(shareName) {
    var shares = this.config.shares.filter(x => x.name === shareName);
    if (shares != null && shares.length > 0) {
      return shares[0];
    }
    return null;
  }


  update(config) {
    this.config = Object.assign({ events: [], shareIn: "popup", collapsable: false }, config);
    this.container = qsi(this.config.containerId);
    this.container.addClass(containerClass);
    this.config.shares = this.config.shares.map(function(shareConfig) {
      if (typeof shareConfig === "string") {
        shareConfig = { name: shareConfig };
      }
      var found = shareTemplates.filter(function(item) { return item.name === shareConfig.name });
      if (!found) {
        throw Error("Share '" + shareConfig.name + "' is not found");
      }
      return found[0];
    });
    this.render();
  }


  render() {
    this._clear();
    this._showLabel = getOrApply(this.showLabel, this, screen.width);

    this.btns = newElement("span");
    this.container.beforeEnd(this.btns);
    if (this.config.collapsable) {
      this.container.afterBegin(this.createCollapseButton());
    }
    this._renderShareButtons();
  }



  _renderShareButtons() {
    var ctx = this;
    this.config.shares.forEach(function(share) {
      ctx._renderShare(share);
    })
  }


  _renderShare(share) {
    var btn = null;
    if (isFunction(share.renderer)) {
      btn = newElement("p", { class: shareClass }, share.renderer());
    } else {
      btn = this.createButton(share);
    }
    this.btns.beforeEnd(btn);
    btn.addClass(share.name);
  }


  createButton(share) {
    return this.createButtonLink(share);
  }

  createCollapseButton() {
    var ctx = this;
    var btn = newElement("a", { href: "#", class: shareLinkClass }, "", {
      click: function() {
        ctx.btns.toggleVisible();
      }
    });
    btn.addClass("collapsable");
    this.btns.on("click", function() { ctx.btns.toggleVisible(); });
    btn.beforeEnd(newElement("img", { class: shareLogoClass + " collapse" }));
    return btn;
  }

  getDescriptionToShare() {
    var text = "";
    var meta = qs("meta[name='description']");
    if (meta !== null) {
      text = meta.attr("content");
    }
    return text;
  }

  getTitleToShare() {
    var text = "";
    var title = qs("title");
    if (title !== null) {
      text = title.text || "";
    }
    return text;
  }

  onShareClick(share) {
    var shareTarget = share.shareIn || this.config.shareIn;
    share.url = window.location.href;
    share.title = this.getTitleToShare();
    share.text = this.getDescriptionToShare();
    var shareUrl = this._getShareUrl(share);
    if (shareTarget === "popup") {
      window.open(shareUrl, null,
        "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
    } else if (shareTarget === "newWindow") {
      window.open(shareUrl);
    } else if (shareTarget === "currentWindow") {
      document.location.href = shareUrl;
    }
  }

  createButtonLink(share) {
    var ctx = this;
    var link = newElement("a", { href: "#", class: shareLinkClass, title: share.tooltip || "" }, "", { click: function() { ctx.onShareClick(share); } });
    link.beforeEnd(this.createButtonLogo(share));
    if (this.config.showLabel && this._showLabel) {
      link.beforeEnd(this.createButtonLabel(share));
      if (this.config.minWidthWithLabel) {
        link.css({ "min-width": this.config.minWidthWithLabel });
      }
    }
    if (this.config.events !== null) {
      this.config.events.forEach(function(event, handler) {
        if (isFunction(handler)) {
          link.on(event, share);
        }
      });
    }
    return link;
  }

  _getShareUrl(share) {
    return share.shareUrl.replace(/(&?[a-zA-Z0-9]+=)?{([a-zA-Z0-9]+)}/g, function(match, key, field) {
      var value = share[field] || "";
      return value ? (key || "") + window.encodeURIComponent(value) : "";
    });
  }

  createButtonLogo(share) {
    var icon = null;
    if (share.img != null) {
      icon = newElement("img", { src: share.img });
    } else {
      icon = newElement("i", { class: share.class });
    }
    icon.addClass(shareLogoClass);
    return icon;
  }

  createButtonLabel(share) {
    return newElement("span", { class: shareLabelClass }, share.label);
  }




  _clear() {
    window.clearTimeout(this._resizeTimer);
    this.container.html("");
  }

  destroy() {
    this._clear();
    window.off("resize", this.onWindowResize);
    this.container
      .removeClass(containerClass);
  }
}