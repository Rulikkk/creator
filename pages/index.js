import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <img
          src="team-of-critters.svg"
          className="w-full max-w-xl"
          alt="Four one-eyed aliens playing"
        />

        <h2 className="p-3 my-8 text-lg font-bold bg-yellow-400 md:text-2xl">
          Nothing EVER works
        </h2>
      </div>
    </Layout>
  );
}

// export default IndexPage;
