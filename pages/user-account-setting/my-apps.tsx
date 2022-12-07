import { useRouter } from "next/router";
import {
  BasicCard,
  Text,
  SideBar,
  CogIcon,
  GridIcon,
  Puzzle,
  Footer,
  UserAvatar,
  Dropdown,
  NavigationBar,
  DottedMenuIcon,
  AddCirlceIcon,
  CheckedIcon,
} from "project-isaac-components";
import { useState } from "react";
import {
  PasswordForm,
  EmailForm,
  ProfileForm,
} from "../../components/forms/editProfile";
import SideBarPanel from "../../components/navigation/sidebar";

type sideNavProps = {
  view: "profile" | "email" | "password";
};

export default function RegisterTwo({ view = "email" }: sideNavProps) {
  const [showForm, setShowForm] = useState(view);
  const router = useRouter();
  const rightElement = (
    <div className="inline-flex gap-5">
      <input
        className="w-[271px] h-[40px] border rounded-md p-3 border-[#D9D9D9]"
        placeholder="Search"
      />
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
                <p className="text-base font-medium text-gray-600">
                  Grills1031
                </p>
              </div>
              <div className="flex space-x-5 items-center  w-1/6 h-6">
                <CheckedIcon />
                <CogIcon />
              </div>
            </div>
            <div className="border-b border-[#D9D9D9] py-4">
              <p className="text-base font-medium text-gray-600">
                Organization
              </p>
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

  return (
    <div>
      <NavigationBar
        rightElements={rightElement}
        leftElements={<LeftElement />}
      />
      <div className="flex">
        <SideBarPanel activeKey="myApps" type="dashboard" />
        <div className="flex-auto bg-gray-100">
          <div
            className="flex items-center justify-start  pr-96 pt-5 pb-4 bg-white border border-gray-200 w-full"
            style={{ height: 75 }}
          >
            {/** 
          <div className="flex items-center justify-start w-full h-full">
            <ArrowLeft />
            <p className="text-2xl"></p>
          </div> */}
          </div>

          <div className="sm:py-8 sm:px-16 sm:mx-0 mx-8  md:w-[1170px]">
            <div className="inline-flex flex-col space-y-11 items-start justify-start w-full ">
              <Text color="black" fontStyle="medium">
                New installed
              </Text>
              <div className="flex flex-col space-y-12 items-start justify-start ">
                <div
                  className="flex flex-wrap gap-14 items-start justify-start "
                  onClick={() => router.push("/user-account-setting/metrics")}
                >
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col space-y-11 mt-14 items-start justify-start w-full ">
              <Text color="black" fontStyle="medium">
                New installed
              </Text>
              <div className="flex flex-col space-y-12 items-start justify-start  bg ">
                <div className="flex flex-wrap gap-14 items-start justify-start ">
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                  <BasicCard title="App Name" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
