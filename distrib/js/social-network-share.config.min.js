var shareTemplates = [
  //https://www.webmarketing-conseil.fr/liste-reseaux-sociaux/
  // tumblr: {

  // },
  // viadeo: {

  // },
  // slack: {

  // },
  // meetup: {

  // },
  // instagram: {

  // },
  // flick: {

  // },
  // FacebookMoments: {

  // },


  {
    name: "twitter",
    label: "Tweet",
    tooltip: "Tweeter",
    class: "fa fa-twitter",
    shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
    shareIn: "popup"
  },

  {
    name: "facebook",
    label: "Like",
    tooltip: "Partager sur facebook",
    class: "fa fa-facebook",
    shareUrl: "https://facebook.com/sharer/sharer.php?u={url}"
  },

  {
    name: "googleplus",
    label: "+1",
    class: "fa fa-google",
    shareUrl: "https://plus.google.com/share?url={url}"
  },

  {
    name: "whatsapp",
    label: "WhatsApp",
    class: "fa fa-whatsapp",
    shareUrl: "whatsapp://send?text={url} {text}",
    shareIn: "newWindow"
  },

  {
    name: "linkedin",
    label: "Share",
    class: "fa fa-linkedin",
    shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}",
    shareIn: "newWindow"
  },

  {
    name: "pinterest",
    label: "Pin it",
    class: "fa fa-pinterest",
    shareUrl: "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}"
  },

  {
    name: "stumbleupon",
    label: "Share",
    class: "fa fa-stumbleupon",
    media: "",
    shareUrl: "http://www.stumbleupon.com/submit?url={url}&title={title}"
  },

  {
    name: "pocket",
    label: "Pocket",
    class: "fa fa-get-pocket",
    shareUrl: "https://getpocket.com/save?url={url}&title={title}"
  },

  {
    name: "viber",
    label: "Viber",
    class: "fa fa-volume-control-phone",
    shareUrl: "viber://forward?text={url} {text}",
    shareIn: "newWindow"
  },

  {
    name: "messenger",
    label: "Share",
    class: "fa fa-commenting",
    shareUrl: "fb-messenger://share?link={url}",
    shareIn: "newWindow"
  },

  {
    name: "slack",
    label: "Share",
    img: "css/slack.png",
    shareUrl: "slack?link={url}"
  },

  {
    name: "browser-messenger",
    label: "Share",
    class: "fa fa-commenting",
    appid: "",
    redirect: "",
    shareUrl: "https://www.facebook.com/dialog/send?app_id={appid}&link={url}&redirect_uri={redirect}",
    shareIn: "newWindow"
  },

  {
    name: "telegram",
    label: "Telegram",
    class: "fa fa-telegram",
    shareUrl: "tg://msg?text={url} {text}",
    shareIn: "newWindow"
  },

  {
    name: "vkontakte",
    label: "Like",
    class: "fa fa-vk",
    shareUrl: "https://vk.com/share.php?url={url}&title={title}&description={text}",
  },

  {
    name: "line",
    label: "LINE",
    class: "fa fa-comment",
    shareUrl: "http://line.me/R/msg/text/?{text} {url}"
  },

  {
    name: "email",
    label: "E-mail",
    tooltip: "Envoyer par mail",
    class: "fa fa-at",
    shareUrl: "mailto:{to}?subject={title}&body={url} {text}",
    shareIn: "newWindow"
  },

  {
    name: "rss",
    label: "RSS",
    class: "fa fa-rss",
    shareUrl: "/feeds/",
    shareIn: "currentWindow"
  },

  {
    name: "sms",
    label: "SMS",
    class: "fa fa-comments-o",
    shareUrl: "sms:{delimiter}body={text} {url}",
    delimiter: "?",
    shareIn: "newWindow"
  },

  {
    name: "reddit",
    label: "reddit",
    class: "fa fa-reddit",
    shareUrl: "",
    shareIn: "newWindow"
  }
];