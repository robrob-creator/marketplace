import React, { useState } from "react";
import NavigationPanel from "../components/navigation/navigation";
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
    "1",
    "1",
  ]);
  const redirect = () => {
    router.push("/product");
  };
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <div>
      <Head>Marketplace</Head>
      <NavigationPanel
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      {!authenticated && <Banner />}
      <Tabs />
      <div className="lg:grid lg:grid-cols-4  flex flex-wrap  ml-4 gap-4 lg:place-items-center justify-center mx-auto">
        {data.map((item, index) => {
          return (
            <div key="" onClick={() => redirect()}>
              <Card
                title="eCommerce"
                className="mb-4"
                downloads="4k"
                rating="4.5"
                stacks={[{ name: "Android" }]}
                platforms={[
                  { name: "Android", icon: "hr" },
                  { name: "Windows", icon: "hr" },
                ]}
                imgUrl="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg"
              />
            </div>
          );
        })}
      </div>
      <div
        className="grid justify-center mt-8 mb-14
      "
      >
        <div className="sm:inline-flex  block sm:space-x-20 items-center justify-center">
          <div className="flex items-center justify-center sm:w-56 w-full h-8 px-5 py-2 bg-blue-700 rounded-lg">
            <p className="text-xs font-semibold leading-snug text-center text-gray-50">
              Sign up to view more
            </p>
          </div>
          <p className="text-sm text-center leading-tight">
            Already a member? Sign In
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
