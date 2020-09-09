const defaultPacks = [
  {
    name: "Basic",
    items: [
      {
        name: "Spreadsheet",
        url: "https://sheets.new",
        img:
          "https://drive-thirdparty.googleusercontent.com/128/type/application/vnd.google-apps.spreadsheet",
        description: "New Google Spreadsheet",
      },
      {
        name: "Document",
        url: "https://docs.new",
        img:
          "https://drive-thirdparty.googleusercontent.com/128/type/application/vnd.google-apps.document",
        description: "New Google Document",
      },
      {
        name: "Presentation",
        url: "https://slides.new",
        img:
          "https://drive-thirdparty.googleusercontent.com/128/type/application/vnd.google-apps.presentation",
        description: "New Google Presentation",
      },
      {
        name: "Trello Card",
        code: () => {
          function x(win, name, desc) {
            win.open(
              "https://trello.com/en/add-card" +
                "?source=" +
                win.location.host +
                "&mode=popup" +
                "&url=" +
                encodeURIComponent(win.location.href) +
                (name ? "&name=" + encodeURIComponent(name) : "") +
                (desc ? "&desc=" + encodeURIComponent(desc) : ""),
              "add-trello-card",
              "width=500,height=600,left=" +
                (win.screenX + (win.outerWidth - 500) / 2) +
                ",top=" +
                (win.screenY + (win.outerHeight - 740) / 2)
            );
          }
          x(
            window,
            document.title,
            getSelection ? getSelection().toString() : ""
          );
        },
        img:
          "https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.165/static/media/trello-logo-blue.8fe57621.svg",
        description: "New Trello Card",
      },
      {
        name: "Dropbox Paper",
        url: "https://paper.dropbox.com",
        img:
          "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/app-paper-ios@2x.png",
        description: "New Dropbox Paper Document",
      },
    ],
  },
  {
    name: "Social",
    items: [
      {
        name: "Tweet",
        url: "https://twitter.com/compose/tweet",
        img:
          "https://upload.wikimedia.org/wikipedia/en/9/9f/Twitter_bird_logo_2012.svg",
        description: "New Tweet",
        button: "Tweet",
      },
      {
        name: "Facebook",
        description: "New Facebook Post",
        url: "https://facebook.com/",
        img: "https://www.facebook.com/images/fb_icon_325x325.png",
      },
      {
        name: "VK",
        description: "New VKontakte Post",
        url: "https://m.vk.com/wall?act=add",
        img:
          "https://brand.vkforms.ru/static/media/logo_color_154.08f6e176.svg",
      },
      {
        name: "WhatsApp",
        description: "New WhatsApp message",
        url: "https://web.whatsapp.com",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg",
      },
      {
        name: "FB Messenger",
        description: "New FB message",
        url: "https://www.messenger.com/new",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/3/3b/Facebook_Messenger_logo.svg",
      },
      {
        name: "Instagram",
        description: "New Instagram message",
        url: "https://www.instagram.com/direct/new/",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png",
      },
    ],
  },
];

export default defaultPacks;
