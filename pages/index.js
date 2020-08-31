import Layout from "../components/layout";
import CreateButton from "../components/CreateButton";
// import { default as items } from "../data/items.json";

const items = [
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
    url:
      "javascript:(function(win%2Cname%2Cdesc)%7Bwin.open('https%3A%2F%2Ftrello.com%2Fen%2Fadd-card'%2B'%3Fsource%3D'%2Bwin.location.host%2B'%26mode%3Dpopup'%2B'%26url%3D'%2BencodeURIComponent(win.location.href)%2B(name%3F'%26name%3D'%2BencodeURIComponent(name)%3A'')%2B(desc%3F'%26desc%3D'%2BencodeURIComponent(desc)%3A'')%2C'add-trello-card'%2C'width%3D500%2Cheight%3D600%2Cleft%3D'%2B(win.screenX%2B(win.outerWidth-500)%2F2)%2B'%2Ctop%3D'%2B(win.screenY%2B(win.outerHeight-740)%2F2))%7D)(window%2Cdocument.title%2CgetSelection%3FgetSelection().toString()%3A'')",
    img:
      "https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.165/static/media/trello-logo-blue.8fe57621.svg",
    description: "New Trello Card",
  },
];

export default function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-row flex-wrap justify-start">
        {items.map((item) => (
          <CreateButton {...item} />
        ))}

        {/* <img
          src="team-of-critters.svg"
          className="w-full max-w-xl"
          alt="Four one-eyed aliens playing"
        />

        <h2 className="p-3 my-8 text-lg font-bold bg-yellow-400 md:text-2xl">
          fsd
        </h2>  */}
      </div>
    </Layout>
  );
}

// export default IndexPage;
