import React from "react";
import { Button, CogIcon, Text, Puzzle } from "project-isaac-components";
import { AccountInformationForm } from "../../modules/forms/accountInformationForm";

const UserSettingsPage = () => {
  return (
    <div className="inline-flex flex-col  bg-gray-100 box-border w-full">
      <div className="inline-flex items-center justify-start h-[80px] bg-white">
        <div className="flex items-center justify-center w-[40px] h-[40px]  bg-gray-300 rounded-lg ml-10">
          <CogIcon width="30" height="30" />
        </div>
        <p className="w-5/6 text-xl font-semibold ml-[20px]">User settings</p>
      </div>

      <div className="inline-flex  items-center justify-between px-5 bg-white mt-10 mx-5 p-8 rounded-lg h-[125px]  ">
        <div className="inline-flex flex-col gap-[10px] items-start justify-center">
          <div className="inline-flex space-x-1 items-center justify-start">
            <CogIcon width="30" height="30" />
            <p className="text-base font-semibold ">Account settings</p>
          </div>
          <Text
            className="text-base"
            color="gray-600"
            text="Change your organization name, company name, and more inside user settings."
          />
        </div>

        <Button>
          <Text text="Account setting" size="sm" />
        </Button>
      </div>
      <p className="mt-[50px] ml-[24px] text-base font-medium">
        Account information
      </p>

      <AccountInformationForm />
      <div className="inline-flex items-center sm:justify-between px-5 mt-10 mx-5 p-8 rounded-lg bg-white">
        <div className="inline-flex flex-col space-y-2.5 items-start justify-center">
          <div className="inline-flex space-x-1 items-center justify-start">
            <Puzzle />
            <p className="text-base font-semibold">Delete organization</p>
          </div>
          <p className="text-base text-gray-600">
            Deleting an organization will remove all associated information from
            our servers.
          </p>
        </div>

        <div className="flex items-center justify-start pr-[20px] pl-[27px]">
          <Button
            size="sm"
            type="danger"
            text="Delete Organization"
            className="p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;
