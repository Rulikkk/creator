import localforge from "localforage";
import Head from "next/head";
import { useState, useEffect } from "react";
import CreateButton from "../components/CreateButton";
import Layout from "../components/layout";
import defaultPacks from "../data/defaultPacks.js";

const parsePack = (pack) => pack.items.map((x) => ({ label: pack.name, ...x }));

const getPacks = (setPacks) => {
  const items = [];
  console.log("getting packs...");
  localforge
    .iterate((pack) => items.push(...parsePack(pack)))
    .then(() => {
      console.log(items);

      // add default packs
      items.push(...defaultPacks.flatMap(parsePack));

      console.log(defaultPacks);

      setPacks(items);
    });
};

export default function IndexPage() {
  let [packs, setPacks] = useState([]);
  useEffect(() => getPacks(setPacks), []);
  return (
    <Layout>
      <Head>
        <title>💡 New — a place to create new stuff!</title>
      </Head>
      <div
        className="p-0 mx-auto my-0 text-left"
        id="trix"
        style={{ fontSize: 0 }}
      >
        {packs.map((item) => (
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
