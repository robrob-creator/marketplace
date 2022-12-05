import { useRouter } from "next/router";
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

          <div
            className="flex flex-col items-start justify-start px-12 py-8 bg-white border rounded-2xl border-gray-200 mt-10"
            style={{ width: "1388px", height: "530px" }}
          >
            <div
              className="flex flex-col space-y-8 items-start justify-start"
              style={{ width: "1292.36px", height: "470px" }}
            >
              <div className="inline-flex space-x-2.5 items-center justify-start">
                <BulbIcon />
                <p className="text-2xl font-semibold text-gray-500">Explore</p>
              </div>
              <div
                className="flex flex-col items-start justify-start"
                style={{ width: "1292.36px", height: "400px" }}
              >
                <div
                  className="inline-flex space-x-96 items-center justify-between px-2.5 rounded-md  bg-gray-100 "
                  style={{ width: "1292.36px", height: "100px" }}
                >
                  <div className="flex items-center ">
                    <div className="inline-flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-full p-3 rounded-md bg-gray-300">
                        <StarIcon />
                      </div>
                      <p className="text-base font-medium text-gray-500">
                        Try out Expo
                      </p>
                    </div>
                  </div>
                  <div className="px-3">
                    <ArrowDiagonal />
                  </div>
                </div>

                <div
                  className="inline-flex space-x-96 items-center justify-between px-2.5 rounded-md "
                  style={{ width: "1292.36px", height: "100px" }}
                >
                  <div className="flex items-center ">
                    <div className="inline-flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-full p-3  rounded-md">
                        <FileIcon />
                      </div>
                      <p className="text-base font-medium text-gray-500">
                        Explore APIs and guides with our docs
                      </p>
                    </div>
                  </div>
                  <div className="px-3">
                    <ArrowDiagonal />
                  </div>
                </div>

                <div
                  className="inline-flex space-x-96 items-center justify-between px-2 rounded-md "
                  style={{ width: "1292.36px", height: "100px" }}
                >
                  <div className="flex items-center ">
                    <div className="inline-flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-full p-3  rounded-md">
                        <Puzzle />
                      </div>
                      <p className="text-base font-medium text-gray-500">
                        Download our apps
                      </p>
                    </div>
                  </div>
                  <div className="px-3">
                    <ArrowDiagonal />
                  </div>
                </div>

                <div
                  className="inline-flex space-x-96 items-center justify-between px-2.5 rounded-md "
                  style={{ width: "1292.36px", height: "100px" }}
                >
                  <div className="flex items-center ">
                    <div className="inline-flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-full p-3  rounded-md">
                        <BookIcon />
                      </div>
                      <p className="text-base font-medium text-gray-500">
                        Learn about Expo Application Services
                      </p>
                    </div>
                  </div>
                  <div className="px-3">
                    <ArrowDiagonal />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*            Join us section */}
          <div
            className="mt-10 inline-flex flex-col space-y-5 items-start justify-start p-12 bg-white border rounded-2xl border-gray-200"
            style={{ width: "1388px", height: "184px" }}
          >
            <div className="inline-flex space-x-2.5 items-center justify-start">
              <InfoIcon />
              <p className="w-2/3 text-2xl font-semibold text-gray-500">
                Join Us
              </p>
            </div>
            <p className="text-xl font-medium">
              New to Expo? Having a problem? Get help during our weekly office
              hours! Sign up here.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
