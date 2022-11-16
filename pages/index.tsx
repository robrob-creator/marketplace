import React from "react";
import NavigationPanel from "../components/navigation";
import { Banner, Tabs, Footer, Card } from "project-isaac-components";

import { useRouter } from "next/router";
import Head from "next/head";
export default function Homes() {
  const router = useRouter();
  return (
    <div>
      <Head>Marketplace</Head>
      <NavigationPanel />
      <Banner />
      <Tabs />
      <Card
        title="eCommerce"
        downloads="4k"
        imgUrl=""
        rating="4/5"
        platforms={[
          { name: "Android", icon: "" },
          { name: "Windows", icon: "" },
        ]}
        stacks={[{ name: "C#" }, { name: "Node" }]}
      />
      <Card
        title="eCommerce"
        downloads="4k"
        rating="4/5"
        platforms={[
          { name: "Android", icon: "" },
          { name: "Windows", icon: "" },
        ]}
        stacks={[{ name: "C#" }, { name: "Node" }]}
      />
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
