import { Router, useRouter } from "next/router";
import {
  CogIcon,
  UserAvatar,
  NavigationBar,
  Button,
  Dropdown,
  Footer,
  DottedMenuIcon,
  SearchCircleIcon,
  CheckedIcon,
  AddCirlceIcon,
  ArrowStrokeDown,
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
const LeftElement = () => {
  const router = useRouter();
  return (
    <div className="inline-flex gap-1 font-semibold">
      <UserAvatar className="w-8" />
      <Dropdown label="Grills092">
        <div className="flex flex-col gap-8  w-[400px] p-5 rounded-lg bg-white drop-shadow-2xl">
          <div className="border-b border-[#D9D9D9] py-4">
            <p className="text-base font-medium text-gray-600 ">
              Personal account
            </p>
          </div>
          <div className="inline-flex justify-between items-center">
            <div className="flex space-x-2.5 w-28 h-full">
              <UserAvatar />
              <p className="text-base font-medium text-gray-600">Grills1031</p>
            </div>
            <div className="flex space-x-5 items-center  w-1/6 h-6">
              <CheckedIcon />
              <CogIcon />
            </div>
          </div>
          <div className="border-b border-[#D9D9D9] py-4">
            <p className="text-base font-medium text-gray-600">Organization</p>
          </div>
          <div
            className="inline-flex gap-4 items-center cursor-pointer"
            onClick={() =>
              router.push("/user-account-setting/create-organization")
            }
          >
            <AddCirlceIcon />
            <p className="text-base font-medium text-gray-600">
              Create Organiztion
            </p>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};
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
        leftElements={<LeftElement />}
      />

      <div className="flex flex-col space-y-5 bg-[#F8F9FA] w-full  py-10">
        <div className="inline-flex flex-col items-start mx-auto  px-20 w-3/4">
          <p className="text-3xl font-bold">Create an organization</p>
          <p className="text-base">
            Organizations allow you to collaborate on shared projects, assign
            members permissions, and share Application Services.
          </p>
        </div>
        <div className="bg-white rounded-lg mx-auto px-20 py-20 w-3/4">
          <div className="inline-flex flex-col space-y-2.5">
            <p className="text-base font-semibold">Organization name</p>
            <p className="text-base">
              The organization name may only contain alphanumeric characters,
              underscores, and single hyphens, and cannot begin or end with a
              hyphen.
            </p>
          </div>
          <div className="w-1/2 py-4">
            <InputField placeholder="Organization name" />
          </div>
          <p className="text-base font-semibold">Organization info</p>
          <div className="w-[100%] py-4 inline-flex gap-2 justify-between">
            <InputField className="w-1/2" placeholder="Company name" />
            <div className="inline-flex flex-col items-start px-5 py-2.5 bg-gray-100 rounded-xl h-[64px] border-2">
              <div className="flex  py-1.5 rounded-2xl gap-4">
                <p className="text-base tracking-wider leading-normal text-gray-500">
                  +63
                </p>
                <Dropdown>
                  {" "}
                  <p>Philippines</p> <p>US</p> <p>Britain</p>{" "}
                </Dropdown>
              </div>
            </div>
            <InputField className="w-1/3" placeholder="Mobile Number" />
          </div>
          <div className="w-[100%] py-4 inline-flex gap-2">
            <InputField className="w-1/2" placeholder="Landline" />
            <div className="inline-flex flex-col items-start px-5 py-2.5 bg-gray-100 rounded-xl w-1/2 h-[64px] border-2">
              <div className="flex  py-1.5 rounded-2xl gap-4">
                <p className="text-base tracking-wider leading-normal text-gray-500">
                  Country
                </p>
                <Dropdown>
                  {" "}
                  <p>Philippines</p> <p>US</p> <p>Britain</p>{" "}
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="w-[100%] py-4 inline-flex gap-2">
            <div className="inline-flex flex-col items-start px-5 py-2.5 bg-gray-100 rounded-xl w-1/2 h-[64px] border-2">
              <div className="flex  py-1.5 rounded-2xl gap-4">
                <p className="text-base tracking-wider leading-normal text-gray-500">
                  Language
                </p>
                <Dropdown>
                  {" "}
                  <p>English</p> <p>French</p> <p>Uk</p>{" "}
                </Dropdown>
              </div>
            </div>
            <InputField className="w-1/2" placeholder="Company size" />
          </div>

          <div className="inline-flex w-full justify-end">
            <Button text="Create" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
