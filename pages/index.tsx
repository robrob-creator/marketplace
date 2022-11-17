import React, { useState } from "react";
import NavigationPanel from "../components/navigation";
import { Banner, Tabs, Footer, Card } from "project-isaac-components";

import { useRouter } from "next/router";
import Head from "next/head";
export default function Homes() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState([
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ]);
  const redirect = () => {
    router.push("/product");
  };
  return (
    <div>
      <Head>Marketplace</Head>
      <NavigationPanel
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      {!authenticated && <Banner />}
      <Tabs />
      <div className="flex flex-wrap">
        {data.map((item, index) => {
          return (
            <div key="" onClick={() => redirect()}>
              <Card
                title="eCommerce"
                downloads="4k"
                imgUrl="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg"
                rating="4/5"
                platforms={[
                  { name: "Android", icon: "" },
                  { name: "Windows", icon: "" },
                ]}
                stacks={[{ name: "C#" }, { name: "Node" }]}
              />
            </div>
          );
        })}
      </div>
      <div
        className="grid justify-center mt-8 mb-14
      "
      >
        <div className="inline-flex space-x-20 items-center justify-center">
          <div className="flex items-center justify-center w-56 px-5 py-2 bg-blue-700 rounded-lg">
            <p className="text-xs font-semibold leading-snug text-center text-gray-50">
              Sign up to view more
            </p>
          </div>
          <p className="text-sm leading-tight">Already a member? Sign In</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
