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
  InputField,
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
                icon: <Puzzle />,
                name: "Back to Dashboard",
                notification: 34,
              },

              {
                icon: <CogIcon />,
                name: "User Settings",
                notification: 3,
                className: "border-t-2",
              },
              {
                icon: <Puzzle />,
                name: "Members",
                notification: 3,
                className: "border-t-2",
              },
            ]}
          />
        </div>

        {/* contents */}
        <div className="flex flex-col w-full">
          <div className="inline-flex space-x-5 items-center justify-start h-24 bg-white">
            <div className="flex items-center justify-center w-10  bg-gray-300 rounded-lg ml-10">
              <CogIcon className="w-3/4 h-3/4 rounded-lg" />
            </div>
            <p className="w-5/6 text-xl font-semibold">User settings</p>
          </div>

          <div className="inline-flex space-x-96 items-center justify-between px-5 bg-white mt-10 mx-5 p-8 rounded-lg">
            <div className="inline-flex flex-col space-y-2.5 items-start justify-center">
              <div className="inline-flex space-x-1 items-center justify-start">
                <CogIcon />
                <p className="text-base font-semibold">Account settings</p>
              </div>
              <p className="text-base text-gray-600">
                Change your organization name, company name, and more inside
                user settings.
              </p>
            </div>

            <Button>
              <Text text="Account setting" size="sm" />
              <ArrowRightIcon className="ml-5" color="white" />
            </Button>
          </div>
          <p className="mt-20 ml-5 text-base font-medium">
            Account information
          </p>

          <div className="w-full bg-white rounded-lg mx-5 mt-5 p-8 ">
            <div className="flex flex-1">
              <div className="inline-flex flex-col space-y-2.5  justify-start">
                <p className="text-base font-semibold">Organization name</p>
                <p className="text-base">
                  The organization name may only contain alphanumeric
                  characters, underscores, and single hyphens, and cannot begin
                  or end with a hyphen.
                </p>
                <InputField
                  className="w-[453px] mt-5"
                  size="sm"
                  onChange={() => {}}
                  placeholder="Organization name"
                />
                <p className="text-base font-semibold">Organization info</p>
              </div>
            </div>
            <div className="flex flex-1">
              <InputField
                className="w-[453px] mt-5"
                size="sm"
                onChange={() => {}}
                placeholder="Company name"
              />
              <InputField
                className="w-[453px] ml-5 mt-5"
                size="sm"
                onChange={() => {}}
                placeholder="Mobile number"
              />
            </div>
            <div className="flex flex-1">
              <InputField
                className="w-[453px] mt-5"
                size="sm"
                onChange={() => {}}
                placeholder="Landline"
              />
              <InputField
                className="w-[453px] ml-5 mt-5"
                size="sm"
                onChange={() => {}}
                placeholder="Country"
              />
            </div>
            <div className="flex flex-1">
              <InputField
                className="w-[453px] mt-5"
                size="sm"
                onChange={() => {}}
                placeholder="Language "
              />
              <InputField
                className="w-[453px] ml-5 mt-5"
                size="sm"
                onChange={() => {}}
                placeholder="Company size"
              />
            </div>
          </div>

          <div className="inline-flex justify-end bg-white rounded-lg mx-5 p-8 ">
            <Button text="Save" />
          </div>
          <div className="inline-flex space-x-96 items-center justify-between px-5 bg-white mt-10 mx-5 p-8 rounded-lg">
            <div className="inline-flex flex-col space-y-2.5 items-start justify-center">
              <div className="inline-flex space-x-1 items-center justify-start">
                <Puzzle />
                <p className="text-base font-semibold">Delete organization</p>
              </div>
              <p className="text-base text-gray-600">
                Deleting an organization will remove all associated information
                from our servers.
              </p>
            </div>

            <div className="flex items-center justify-start">
              <Button
                type="secondary"
                text="Delete Organization"
                className="py-2"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
