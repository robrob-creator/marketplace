import React from "react";
import {
  Banner,
  NavigationBar,
  Tabs,
  Footer,
  Card,
} from "project-isaac-components";
export default function Homes() {
  return (
    <div>
      <NavigationBar />
      <Banner />
      <Tabs />
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
      <Footer />
    </div>
  );
}
