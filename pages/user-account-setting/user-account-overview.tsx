import { useRouter } from "next/router";
import {
  CogIcon,
  GridIcon,
  Puzzle,
  UserAvatar,
  SideBar,
  NavigationBar,
  Button,
  Dropdown,
  Footer,
  DottedMenuIcon,
  SearchCircleIcon,
  ArrowRightIcon,
  Text,
  List,
} from "project-isaac-components";

import { useState } from "react";
import {
  PasswordForm,
  EmailForm,
  ProfileForm,
} from "../../components/forms/editProfile";
const input = (
  <div className="rounded-md border-2 pr-2 border-[#D9D9D9] relative text-gray-600 focus-within:text-gray-400">
    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
      <button
        type="submit"
        className="p-1 focus:outline-none focus:shadow-outline"
      >
        <SearchCircleIcon />
      </button>
    </span>
    <input
      type="search"
      name="q"
      className="py-2 text-sm text-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
      placeholder="Search..."
    />
  </div>
);
const rightElement = (
  <div className="inline-flex gap-5">
    {" "}
    {input}{" "}
    <div className="my-auto cursor-pointer">
      <DottedMenuIcon />
    </div>
    <UserAvatar className="ml-5" />
  </div>
);
const leftElement = (
  <div className="inline-flex gap-1 font-semibold">
    <UserAvatar className="w-8" />
    <Dropdown children label="Grills092" />
  </div>
);
type sideNavProps = {
  view: "profile" | "email" | "password";
};

export default function RegisterTwo({ view = "profile" }: sideNavProps) {
  const [showForm, setShowForm] = useState(view);
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      <NavigationBar
        className="bg-white border-b border-gray-300"
        rightElements={rightElement}
        leftElements={leftElement}
      />
      <div className="flex">
        <div>
          <SideBar
            items={[
              {
                icon: <CogIcon />,
                name: "Home",
                notification: 28,
                handleClick: () => {
                  router.push("/user-account-setting/home");
                },
              },
              {
                icon: <GridIcon />,
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
                icon: <Puzzle />,
                name: "Account Settings",
                isActive: true,
                notification: 3,
                className: "border-t-2",
              },
            ]}
          />
        </div>

        {/* contentd */}
        <div className="flex flex-col w-full">
          <div className="flex  sm:py-8 sm:px-16  h-24 border-b bg-white border-gray-200">
            <div className="inline-flex space-x-5 items-center justify-start">
              <div className="flex items-center justify-center w-10 h-full bg-gray-300 rounded-lg">
                <CogIcon className="w-3/4 h-3/4 rounded-lg" />
              </div>
              <p className="w-5/6 text-xl font-semibold">Account Overview</p>
            </div>
          </div>

          <div className="mt-10 mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-8 rounded-lg">
            <div className="inline-flex flex-col space-y-2.5 items-start justify-center">
              <div className="inline-flex space-x-1 items-center justify-start">
                <CogIcon />
                <p className="text-base font-semibold">Organization settings</p>
              </div>
              <p className="text-base text-gray-600">
                Change your organization name, company name, and more inside
                user settings.
              </p>
            </div>
            <div className="flex items-center justify-start h-5">
              <Button
                size="xl"
                onClick={() =>
                  router.push("/user-account-setting/user-settings")
                }
              >
                <Text text="User Settings" size="sm" />
              </Button>
            </div>
          </div>

          <p className="mt-20 ml-5 text-base font-medium">
            Account information
          </p>

          <div className="mx-5 mt-5 p-3 bg-white rounded-lg ">
            <List
              data={[
                {
                  label: "Organization name",
                  value: "project moonshot",
                },
                {
                  label: "Company name",
                  value: "Project Moonshot Inc.",
                },
                {
                  label: "Company size",
                  value: "20-30 Employes",
                },
                {
                  label: "Country",
                  value: "Philippines",
                },
                {
                  label: "Mobile number",
                  value: "+63 936 5625 744",
                },
                {
                  label: "Landline",
                  value: "(088) 848 485",
                },
                {
                  label: "Members",
                  value: "0",
                  rightIcon: <ArrowRightIcon color="#3D50BA" />,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
