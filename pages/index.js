import Layout from "../components/layout";
import CreateButton from "../components/CreateButton";
import basic from "../data/basic.js";

export default function IndexPage() {
  return (
    <Layout>
      <div
        className="p-0 mx-auto my-0 text-left"
        id="trix"
        style={{ fontSize: 0 }}
      >
        {basic.map((item) => (
          <CreateButton key={item.name} {...item} />
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
