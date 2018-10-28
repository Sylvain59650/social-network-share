 # social-network-share
 

 <div style="display:inline">
    <a target="_blank" title="build" href="https://travis-ci.org/Sylvain59650/social-network-share"><img src="https://travis-ci.org/Sylvain59650/social-network-share.png?branch=master" /></a>
    <a target="_blank" title="version" href="https://www.npmjs.com/package/social-network-share"><img src="https://img.shields.io/npm/v/social-network-share.svg" /></a>
    <a target="_blank" title="package" href="https://github.com/Sylvain59650/social-network-share"><img src="https://img.shields.io/github/package-json/v/Sylvain59650/social-network-share.svg" /></a>
    <a target="_blank" title="dependencies" href="https://david-dm.org/Sylvain59650/social-network-share"><img src="https://img.shields.io/david/Sylvain59650/social-network-share.svg" /></a>
    <a target="_blank" title="dependencies graph" href="http://npm.anvaka.com/#/view/2d/social-network-share"><img src="https://img.shields.io/badge/dependencies-graph-blue.svg" /></a>
    <img src="https://img.shields.io/bundlephobia/min/social-network-share.svg" />
    <img src="https://img.shields.io/badge/eslint-ok-blue.svg" />
    <a href="https://codeclimate.com/github/Sylvain59650/social-network-share/maintainability"><img src="https://api.codeclimate.com/v1/badges/27fe03303bed55ca487b/maintainability" /></a>
    <a href="https://codeclimate.com/github/Sylvain59650/social-network-share/maintainability"><img src="https://api.codeclimate.com/v1/badges/f79aeed6bb1690a299cc/maintainability" /></a>
    <a target="_blank" title="tests" href="https://sylvain59650.github.io/social-network-share/"><img src="https://img.shields.io/badge/tests-passing-brightgreen.svg" /></a>
    <a target="_blank" title="downloads" href="https://www.jsdelivr.com/package/npm/social-network-share"><img src="https://data.jsdelivr.com/v1/package/npm/social-network-share/badge" /></a>
    <a target="_blank" title="cdn" href="https://cdn.jsdelivr.net/npm/social-network-share/distrib/social-network-share.min.js"><img src="https://img.shields.io/badge/cdn-jsdeliv-black.svg" /></a>
    <img src="https://img.shields.io/npm/l/social-network-share.svg" />
    <img src="https://hits.dwyl.com/Sylvain59650/social-network-share.svg" />
  </div>
 
 <div class="Note" style="color:orange;font-style:italic">
 
The lastest version of this document is available on [Github > social-network-share](https://github.com/Sylvain59650/social-network-share/blob/master/README.md)
</div>




```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="node_modules/social-network-share/distrib/fa/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="node_modules/social-network-share/distrib/css/socials-core.css" />
    <link rel="stylesheet" type="text/css" href="node_modules/social-network-share/distrib/social-network-share-classic.css" />
    <script src="node_modules/social-network-share/distrib/social-network-share.config.min.js"></script>
    <script src="node_modules/social-network-share/distrib/social-network-share.min.js"></script>
    <script>
</head>
<body>
    <div id="socials-container"></div>
    <script>
      var config = {
        containerId: "socials-container",
        collapsable: false,
        showLabel: false,
        minWidthWithLabel: "65px",
        shareIn: "popup",
        shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "email", "stumbleupon", "whatsapp", "telegram", "line", "viber", "pocket", "messenger", "browser-messenger", "vkontakte", "rss", "sms", "reddit"]
      };
      var socialShares = new socials.Share(config);
    </script>
    </script>
</body>
</html>
```
# Usage
  <a href="https://sylvain59650.github.io/social-network-share/">API &amp; DEMO</a>