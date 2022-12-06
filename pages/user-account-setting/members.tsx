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
  GroupIcon,
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
                handleClick: () => {
                  router.push("/user-account-setting/home");
                },
              },

              {
                icon: <CogIcon />,
                name: "User Settings",
                notification: 3,
                className: "border-t-2",
                handleClick: () => {
                  router.push("/user-account-setting/user-settings");
                },
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
            ]}
          />
        </div>

        {/* contentd */}
        <div className="flex flex-col w-full">
          <div className="flex  sm:py-8 sm:px-6  h-24 border-b bg-white border-gray-200">
            <div className="inline-flex space-x-5 items-center justify-start">
              <div className="flex items-center justify-center w-10 h-full bg-gray-300 rounded-lg">
                <CogIcon className="w-3/4 h-3/4 rounded-lg" />
              </div>
              <p className="w-5/6 text-xl font-semibold">Member</p>
            </div>
          </div>
          <div className="ml-5 mt-5 ">
            <p className="text-base font-semibold">Pending invitations</p>
          </div>

          <div className="mt-10 mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-8 rounded-t-lg  border border-[#D9D9D9]">
            <p className="text-xl font-bold">Pending Invitations</p>
          </div>
          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex flex-col space-y-2.5 items-start justify-center">
                      <p className="text-base font-semibold">Email@gmail.com</p>
                      <p className="w-48 text-base text-gray-600">
                        Invitations has expired
                      </p>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>
          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  rounded-b-lg border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex flex-col space-y-2.5 items-start justify-center">
                      <p className="text-base font-semibold">Email@gmail.com</p>
                      <p className="w-48 text-sm text-gray-600">
                        Invitations has expired
                      </p>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Developer{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>
          <div className="mt-10 mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-8 rounded-t-lg  border border-[#D9D9D9]">
            <p className="text-xl font-bold">Members</p>
            <Button text="Invite member" />
          </div>
          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>
          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
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
