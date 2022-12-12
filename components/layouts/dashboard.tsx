import React, { useState } from "react";
import NavigationPanel from "../modules/navigation/navigation";
import { Banner, Tabs, Footer } from "project-isaac-components";
import DashBoardNav from "../modules/navigation/dasboardNav";
import SideBarPanel from "../modules/navigation/sidebar";
type LayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="bg-gray-100">
      <DashBoardNav />
      <div className="sm:inline-flex">
        <div className="sm:block hidden">
          <SideBarPanel activeKey="home" type="dashboard" />
        </div>

        <div className="flex flex-col sm:py-8 py-12 sm:px-16"> {children}</div>
      </div>
      <Footer />
    </div>
  );
}
