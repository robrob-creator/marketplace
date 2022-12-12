import React from "react";
import { InputField, Button, Dropdown } from "project-isaac-components";

export function CreateOrganizationForm() {
  return (
    <div className="flex flex-col space-y-5 bg-[#F8F9FA] sm:px-[95px] w-full  py-10">
      <div className="inline-flex flex-col items-start sm:mx-auto  mt-[75px] sm:px-20 px-10 sm:w-3/4">
        <p className="text-3xl font-bold">Create an organization</p>
        <p className="text-base mt-[16px] sm:w-[654px]">
          Organizations allow you to collaborate on shared projects, assign
          members permissions, and share Application Services.
        </p>
      </div>
      <div className="bg-white rounded-lg sm:mx-auto sm:px-20 px-10 py-20 sm:w-3/4">
        <div className="inline-flex flex-col space-y-2.5">
          <p className="text-base font-semibold">Organization name</p>
          <p className="text-base">
            The organization name may only contain alphanumeric characters,
            underscores, and single hyphens, and cannot begin or end with a
            hyphen.
          </p>
        </div>
        <div className="sm:w-1/2 py-4">
          <InputField placeholder="Organization name" />
        </div>
        <p className="text-base font-semibold">Organization info</p>
        <div className="w-[100%] py-4 inline-flex gap-2 justify-between">
          <InputField className="sm:w-1/2" placeholder="Company name" />
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
          <InputField className="sm:w-1/3" placeholder="Mobile Number" />
        </div>
        <div className="sm:w-[100%] py-4 inline-flex gap-2">
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

        <div className="inline-flex w-full sm:justify-end sm:px-0 pl-10 mt-[48px]">
          <Button text="Create" />
        </div>
      </div>
    </div>
  );
}
