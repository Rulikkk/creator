const basic = [
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
      x(window, document.title, getSelection ? getSelection().toString() : "");
    },
    img:
      "https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.165/static/media/trello-logo-blue.8fe57621.svg",
    description: "New Trello Card",
  },
];

export default basic;
