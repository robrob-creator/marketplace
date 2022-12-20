import React from "react";
import {
  UserAvatar,
  Button,
  DottedMenuIcon,
  List,
  GroupIcon,
} from "project-isaac-components";

const MembersPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex  sm:py-8 sm:px-6  h-24 border-b bg-white border-gray-200">
        <div className="inline-flex space-x-5  ml-[20px] sm:ml-[4px] items-center justify-start">
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-gray-300 rounded-lg">
            <GroupIcon width="30" height="30" />
          </div>
          <p className="text-xl font-semibold ">Member</p>
        </div>
      </div>
      <div className="mt-[30px] mb-[20px] px-[27px] ">
        <p className="text-base font-bold">Pending invitations</p>
      </div>

      <div className=" mx-5 inline-flex items-center justify-between pl-[45px] pr-[27px] bg-white p-8 rounded-t-lg  border border-[#D9D9D9]">
        <p className="text-xl font-bold">Pending Invitations</p>
      </div>

      <div className="mx-[20px]">
        <List
          className="inline-flex    items-center justify-between  bg-white sm:px-[27px] px-[10px] py-[27px] border border-[#D9D9D9]"
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
                <div className="inline-flex items-center sm:gap-4 gap-2">
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
      <div className="mx-[20px]">
        <List
          className="inline-flex  items-center justify-between  bg-white sm:px-[27px] px-[10px] py-[27px] border border-[#D9D9D9]"
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
                <div className="inline-flex items-center sm:gap-4 gap-2">
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

      <div className="mt-10 mx-5 sm:inline-flex items-center justify-between px-5 sm:gap-0 gap-4 bg-white p-8 rounded-t-lg  border border-[#D9D9D9]">
        <p className="text-xl sm:pl-[25px] sm:pr-[27px] font-bold sm:mx-0 mx-[120px]">
          Members
        </p>
        <div className="sm:pr-[20px] sm:mx-0 mx-[20px] sm:mt-0 mt-5">
          <Button text="Invite member" />
        </div>
      </div>

      <div className="mx-[20px]">
        <List
          className="inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]"
          data={[
            {
              label: (
                <div className="inline-flex space-x-2.5 items-center justify-start">
                  <UserAvatar />
                  <div className="inline-flex flex-col space-y-1 items-start justify-start">
                    <p className="text-base font-semibold">Jun Mark Grills</p>
                    <p className="w-full text-sm text-gray-600">
                      email@gmail.com
                    </p>
                  </div>
                </div>
              ),
              value: (
                <div className="inline-flex items-center gap-4">
                  <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                    <p className="text-base font-medium text-right">Admin </p>
                  </div>
                  <DottedMenuIcon />
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="mx-[20px]">
        <List
          className="inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]"
          data={[
            {
              label: (
                <div className="inline-flex space-x-2.5 items-center justify-start">
                  <UserAvatar />
                  <div className="inline-flex flex-col space-y-1 items-start justify-start">
                    <p className="text-base font-semibold">Jun Mark Grills</p>
                    <p className="w-full text-sm text-gray-600">
                      email@gmail.com
                    </p>
                  </div>
                </div>
              ),
              value: (
                <div className="inline-flex items-center gap-4">
                  <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                    <p className="text-base font-medium text-right">Admin </p>
                  </div>
                  <DottedMenuIcon />
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="mx-[20px]">
        <List
          className="inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]"
          data={[
            {
              label: (
                <div className="inline-flex space-x-2.5 items-center justify-start">
                  <UserAvatar />
                  <div className="inline-flex flex-col space-y-1 items-start justify-start">
                    <p className="text-base font-semibold">Jun Mark Grills</p>
                    <p className="w-full text-sm text-gray-600">
                      email@gmail.com
                    </p>
                  </div>
                </div>
              ),
              value: (
                <div className="inline-flex items-center gap-4">
                  <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                    <p className="text-base font-medium text-right">Admin </p>
                  </div>
                  <DottedMenuIcon />
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="mx-[20px]">
        <List
          className="inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]"
          data={[
            {
              label: (
                <div className="inline-flex space-x-2.5 items-center justify-start">
                  <UserAvatar />
                  <div className="inline-flex flex-col space-y-1 items-start justify-start">
                    <p className="text-base font-semibold">Jun Mark Grills</p>
                    <p className="w-full text-sm text-gray-600">
                      email@gmail.com
                    </p>
                  </div>
                </div>
              ),
              value: (
                <div className="inline-flex items-center gap-4">
                  <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                    <p className="text-base font-medium text-right">Admin </p>
                  </div>
                  <DottedMenuIcon />
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="mx-[20px]">
        <List
          className="inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]"
          data={[
            {
              label: (
                <div className="inline-flex space-x-2.5 items-center justify-start">
                  <UserAvatar />
                  <div className="inline-flex flex-col space-y-1 items-start justify-start">
                    <p className="text-base font-semibold">Jun Mark Grills</p>
                    <p className="w-full text-sm text-gray-600">
                      email@gmail.com
                    </p>
                  </div>
                </div>
              ),
              value: (
                <div className="inline-flex items-center gap-4">
                  <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                    <p className="text-base font-medium text-right">Admin </p>
                  </div>
                  <DottedMenuIcon />
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MembersPage;
