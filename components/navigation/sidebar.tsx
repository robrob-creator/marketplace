"use client";
import React, { Dispatch, SetStateAction } from "react";
import { SideBar, Puzzle, CogIcon, ArrowLeft } from "project-isaac-components";
import { useRouter } from "next/router";

type Type = { type: "userSettings" | "dashboard"; activeKey: string };

export default function SideBarPanel({ type, activeKey }: Type) {
  const router = useRouter();

  const userSettings = [
    {
      key: "backtoDashboard",
      icon: <ArrowLeft />,
      name: "Back to Dashboard",
      notification: 34,
      handleClick: () => {
        router.push("/user-account-setting/home");
      },
    },
    {
      key: "userSettings",
      icon: <CogIcon />,
      name: "User Settings",
      notification: 3,
      className: "border-t-2",
      isActive: true,
    },
    {
      key: "member",
      icon: <Puzzle />,
      name: "Members",
      notification: 3,
      className: "border-t-2",
      handleClick: () => {
        router.push("/user-account-setting/members");
      },
    },
  ];
  const DashBoard = [
    {
      key: "home",
      icon: <CogIcon />,
      name: "Home",
      isActive: true,
      notification: 28,
    },
    {
      key: "analytics",
      icon: <Puzzle />,
      name: "Analytics",
      notification: 5,
    },
    {
      key: "myapps",
      icon: <Puzzle />,
      name: "My Apps",
      notification: 12,
      handleClick: () => {
        router.push("/user-account-setting/my-apps");
      },
    },
    {
      key: "accountSettings",
      icon: <CogIcon />,
      name: "Account Settings",
      notification: 3,
      className: "border-t-2",
      handleClick: () => {
        router.push("/user-account-setting/user-account-overview");
      },
    },
  ];
  return (
    <SideBar
      activeKey={activeKey}
      items={type == "userSettings" ? userSettings : DashBoard}
    />
  );
}
