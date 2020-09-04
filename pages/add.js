import { useEffect, useState } from "react";
import Router from "next/router";
import localforage from "localforage";
import Layout from "../components/layout";

function AddPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const val = document.location.hash.substr(1); // remove first #
    try {
      const pack = JSON.parse(decodeURIComponent(val));
      localforage.setItem(pack.name, pack);
      setData(pack);
      setTimeout(() => {
        Router.push("/");
      }, 2000);
    } catch {}
  }, []);

  return (
    <Layout>
      {data ? (
        <>
          <p>Adding pack</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : (
        <p>Unreadable pack...</p>
      )}
    </Layout>
  );
}

export default AddPage;
