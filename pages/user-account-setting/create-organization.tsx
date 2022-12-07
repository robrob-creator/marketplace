import { Router, useRouter } from "next/router";
import {
  CogIcon,
  UserAvatar,
  NavigationBar,
  Dropdown,
  Footer,
  DottedMenuIcon,
  SearchCircleIcon,
  CheckedIcon,
  AddCirlceIcon,
} from "project-isaac-components";

import { useState } from "react";
import { CreateOrganizationForm } from "../../components/forms/createOrganizationForm";

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

export default function RegisterTwo() {
  return (
    <div className="bg-gray-100">
      <NavigationBar
        className="bg-white border-b border-gray-300"
        rightElements={rightElement}
        leftElements={<LeftElement />}
      />

      <CreateOrganizationForm />
      <Footer />
    </div>
  );
}
