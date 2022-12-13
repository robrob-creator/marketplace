import React, { useState } from "react";
import NavigationPanel from "../modules/navigation/navigation";
import { Banner, Tabs, Footer } from "project-isaac-components";
import DashBoardNav from "../modules/navigation/dasboardNav";
import SideBarPanel from "../modules/navigation/sidebar";

type LayoutProps = {
  type: "userSettings" | "dashboard";
  activeKey: string;
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
  activeKey,
  type = "dashboard",
}: LayoutProps) {
  return (
    <div className="bg-gray-100">
      <DashBoardNav />
      <div className="flex">
        <div className="sm:block hidden">
          <SideBarPanel activeKey={activeKey} type={type} />
        </div>

        {children}
      </div>
      <Footer />
    </div>
  );
}
