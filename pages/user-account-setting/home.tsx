import { Router, useRouter } from "next/router";
import {
  Line,
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
  WaveIcon,
  BulbIcon,
  StarIcon,
  FileIcon,
  BookIcon,
  ArrowDiagonal,
  InfoIcon,
  CheckedIcon,
  AddCirlceIcon,
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
      <div className="md:inline-flex">
        <div>
          <SideBar
            items={[
              {
                icon: <CogIcon />,
                name: "Home",
                isActive: true,
                notification: 28,
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
                notification: 3,
                className: "border-t-2",
                handleClick: () => {
                  router.push("/user-account-setting/user-account-overview");
                },
              },
            ]}
          />
        </div>

        {/* home contents */}

        <div className="flex flex-col sm:py-8 sm:px-16">
          <div className="inline-flex  space-x-5 justify-start">
            <div className="bg-gray-300 rounded-lg">
              <WaveIcon />
            </div>
            <p className="text-xl font-semibold">
              Hey Grills, Welcome to ISAAC!
            </p>
          </div>

          <div className="flex flex-col items-start justify-start px-12 py-8 bg-white border rounded-2xl border-gray-200 mt-10">
            <div className="flex flex-col space-y-8 items-start justify-start">
              <div className="inline-flex space-x-2.5 items-center justify-start">
                <BulbIcon />
                <p className="text-2xl font-semibold text-gray-500">Explore</p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex items-center justify-between  rounded-md w-full  bg-gray-100 cursor-pointer">
                  <div className="flex items-center">
                    <div className="inline-flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 p-3 rounded-md bg-gray-300">
                        <StarIcon />
                      </div>
                      <p className="text-base font-medium text-gray-500">
                        Try out Expo
                      </p>
                    </div>
                  </div>
                  <div className="px-3">
                    <ArrowDiagonal className="hover:scale-150" />
                  </div>
                </div>

                <div className="inline-flex space-x-96 items-center justify-between rounded-md w-full hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center ">
                    <div className="inline-flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 p-3  rounded-md">
                        <FileIcon />
                      </div>
                      <p className="text-base font-medium text-gray-500">
                        Explore APIs and guides with our docs
                      </p>
                    </div>
                  </div>
                  <div className="px-3">
                    <ArrowDiagonal className="hover:scale-150" />
                  </div>
                </div>

                <div className="inline-flex space-x-96 items-center justify-between  rounded-md w-full  hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center ">
                    <div className="inline-flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 p-3  rounded-md">
                        <Puzzle />
                      </div>
                      <p className="text-base font-medium text-gray-500">
                        Download our apps
                      </p>
                    </div>
                  </div>
                  <div className="px-3">
                    <ArrowDiagonal className="hover:scale-150" />
                  </div>
                </div>

                <div className="inline-flex space-x-96 items-center justify-between rounded-md w-full  hover:bg-gray-100 cursor-pointer ">
                  <div className="flex items-center ">
                    <div className="inline-flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 p-3  rounded-md">
                        <BookIcon />
                      </div>
                      <p className="text-base font-medium text-gray-500">
                        Learn about Expo Application Services
                      </p>
                    </div>
                  </div>
                  <div className="px-3">
                    <ArrowDiagonal className="hover:scale-150" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*            Join us section */}
          <div className="mt-10 inline-flex flex-col space-y-5 items-start justify-start p-12 bg-white border rounded-2xl border-gray-200">
            <div className="inline-flex space-x-2.5 items-center justify-start">
              <InfoIcon />
              <p className="w-2/3 text-2xl font-semibold text-gray-500">
                Join Us
              </p>
            </div>
            <p className="text-xl font-medium">
              New to Expo? Having a problem? Get help during our weekly office
              hours!
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 underline ml-2"
              >
                Read more
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
