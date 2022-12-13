import React, { useState } from "react";
import NavigationPanel from "../modules/navigation/navigation";
import { Banner, Tabs, Footer } from "project-isaac-components";

type LayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: LayoutProps) {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div>
      <NavigationPanel
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      {!authenticated && <Banner />}
      <Tabs />
      {children}
      <Footer />
    </div>
  );
}
