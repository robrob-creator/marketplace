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
  List,
  Text,
  ChartIcon,
  HornIcon,
} from "project-isaac-components";
import SideBarPanel from "../../components/navigation/sidebar";
import { useState } from "react";
import {
  PasswordForm,
  EmailForm,
  ProfileForm,
} from "../../components/forms/editProfile";

interface LabelProps {
  label?: string;
  icon?: React.ReactNode;
}
interface ValueProps {
  label?: string;
  icon?: React.ReactNode;
}

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
      <DottedMenuIcon width="18px" height="4px" />
    </div>
    <UserAvatar className="ml-5" />
  </div>
);
const LeftElement = () => {
  const router = useRouter();
  return (
    <div className="sm:inline-flex hidden gap-1 font-semibold ">
      <UserAvatar className="w-8" />
      <Dropdown label="Grills092">
        <div className="flex flex-col gap-8  w-[400px] h-[60px] p-[20px] rounded-t-lg bg-white border border-[#D9D9D9]   ">
          <p className="text-base font-medium text-[#5C5C5C] ">
            Personal account
          </p>
        </div>
        <div className="flex flex-col gap-8  w-[400px] p-[20px]  bg-white ">
          <div className="inline-flex justify-between items-center">
            <div className="flex space-x-2.5 w-28 h-full items-center">
              <UserAvatar />
              <p className="text-base font-medium text-[#5C5C5C]">Grills1031</p>
            </div>
            <div className="flex space-x-5 w-1/6 h-6">
              <CheckedIcon width="24px" height="24px" />
              <CogIcon width="24px" height="24px" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8  w-[400px] h-[60px] p-[20px]   bg-white ">
          <p className="text-base font-medium text-gray-600">Organization</p>
        </div>
        <div className="flex flex-col gap-8  w-[400px] p-[20px] rounded-b-slg bg-white drop-shadow-2xl border-t border-[#D9D9D9] ">
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
  const router = useRouter();
  return (
    <div className="bg-gray-100">
      <NavigationBar
        className="bg-white border-b border-gray-300"
        rightElements={rightElement}
        leftElements={<LeftElement />}
      />
      <div className="md:inline-flex">
        <div className="sm:block hidden">
          <SideBarPanel activeKey="home" type="dashboard" />
        </div>

        {/* home contents */}

        <div className="flex flex-col sm:py-8 py-12 sm:px-16">
          <div className="inline-flex  space-x-5 sm:justify-start justify-center items-center ">
            <div className="bg-gray-300 rounded-lg">
              <WaveIcon />
            </div>

            <Text
              className="font-semibold text-xl"
              text="Hey Grills, Welcome to ISAAC!"
              color="black"
            />
          </div>

          <div className="flex xl:w-[1100px] flex-col  px-[50px] py-[30px] bg-white border rounded-2xl border-gray-200 mt-10">
            <div className="flex flex-col space-y-8 items-start justify-start">
              <div className="inline-flex space-x-2.5 items-center justify-start">
                <BulbIcon width="40" height="40" />
                <p className="text-xl font-semibold text-[#687782]">Explore</p>
              </div>
              <div className="flex flex-col w-full">
                <List
                  data={[
                    {
                      className:
                        "inline-flex  items-center justify-between  rounded-md  bg-gray-100 cursor-pointers px-[10px]",
                      label: (
                        <ListItemLabel
                          label="Try out expo"
                          icon=<StarIcon width="30px" height="30px" />
                        />
                      ),
                      value: (
                        <ListItemValue
                          icon=<ArrowDiagonal width="16px" height="20px" />
                        />
                      ),
                    },
                    {
                      className:
                        "inline-flex  items-center justify-between  rounded-md hover:bg-gray-100 cursor-pointers px-[10px]",
                      label: (
                        <ListItemLabel
                          label="Explore APIs and guides with our docs"
                          icon=<FileIcon width="30px" height="30px" />
                        />
                      ),
                      value: (
                        <ListItemValue
                          icon=<ArrowDiagonal width="16px" height="20px" />
                        />
                      ),
                    },
                    {
                      className:
                        "inline-flex  items-center justify-between  rounded-md hover:bg-gray-100 cursor-pointers px-[10px]",
                      label: (
                        <ListItemLabel
                          label="Download our apps"
                          icon=<Puzzle width="30px" height="30px" />
                        />
                      ),
                      value: (
                        <ListItemValue
                          icon=<ArrowDiagonal width="16px" height="20px" />
                        />
                      ),
                    },
                    {
                      className:
                        "inline-flex  items-center justify-between  rounded-md hover:bg-gray-100 cursor-pointers px-[10px]",
                      label: (
                        <ListItemLabel
                          label="Learn about expo"
                          icon=<BookIcon width="30px" height="30px" />
                        />
                      ),
                      value: (
                        <ListItemValue
                          icon=<ArrowDiagonal width="16px" height="20px" />
                        />
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          {/*            Join us section */}
          <div className="mt-10 p-[50px] inline-flex flex-col gap-[20px] space-y-5 items-start justify-start bg-white border rounded-2xl border-gray-200">
            <div className="inline-flex gap-[10px] items-center justify-start">
              <InfoIcon width="40px" height="40px" />
              <p className="w-2/3 text-2xl font-semibold text-gray-500">
                Join Us
              </p>
            </div>
            <p className="sm:text-xl sm:font-medium text-sm">
              New to Expo? Having a problem? Get help during our weekly office
              hours!
              <a
                href="#"
                className="font-medium text-[#2843DE]  underline ml-2 text-xl"
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

const ListItemLabel = ({ label, icon }: LabelProps) => {
  return (
    <div className="flex items-center">
      <div className="inline-flex items-center gap-6">
        <div className="flex items-center justify-center bg-[#D9D9D9] rounded-md h-[50px] w-[50px]">
          {icon}
        </div>
        <Text
          text={label}
          color="#687782"
          className="text-base font-medium text-gray-500"
        />
        {/* <p className="text-base font-medium text-gray-500">{label}</p> */}
      </div>
    </div>
  );
};

const ListItemValue = ({ label, icon }: ValueProps) => {
  return <div className="px-3">{icon}</div>;
};
