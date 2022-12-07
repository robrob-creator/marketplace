"use client";
import React, { Dispatch, SetStateAction } from "react";
import { SideBar, Puzzle, CogIcon, ArrowLeft } from "project-isaac-components";
import { useRouter } from "next/router";

type Type = { type: "userSettings" | "dashboard" };

export default function SideBarPanel({ type }: Type) {
  const router = useRouter();

  const userSettings = [
    {
      icon: <ArrowLeft />,
      name: "Back to Dashboard",
      notification: 34,
      handleClick: () => {
        router.push("/user-account-setting/home");
      },
    },
    {
      icon: <CogIcon />,
      name: "User Settings",
      notification: 3,
      className: "border-t-2",
      isActive: true,
    },
    {
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
      icon: <CogIcon />,
      name: "Home",
      isActive: true,
      notification: 28,
    },
    {
      icon: <Puzzle />,
      name: "Analytics",
      notification: 5,
    },
    {
      icon: <Puzzle />,
      name: "My Apps",
      notification: 12,
      handleClick: () => {
        router.push("/user-account-setting/my-apps");
      },
    },
    {
      icon: <CogIcon />,
      name: "Account Settings",
      notification: 3,
      className: "border-t-2",
      handleClick: () => {
        router.push("/user-account-setting/user-account-overview");
      },
    },
  ];
  return <SideBar items={type == "userSettings" ? userSettings : DashBoard} />;
}
