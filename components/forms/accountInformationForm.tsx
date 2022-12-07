import React from "react";
import { InputField, Button } from "project-isaac-components";

export function AccountInformationForm() {
  return (
    <div className="flex flex-col">
      <div className=" bg-white rounded-t-lg  mx-5 mt-5 p-8 ">
        <div className="flex flex-1">
          <div className="inline-flex flex-col justify-start">
            <p className="text-base font-semibold">Organization name</p>
            <p className="font-normal">
              The organization name may only contain alphanumeric characters,
              underscores, and single hyphens, and cannot begin or end with a
              hyphen.
            </p>
            <InputField
              className="sm:w-[453px] mt-5"
              size="sm"
              onChange={() => {}}
              placeholder="Organization name"
            />
            <p className="text-base font-semibold mt-[50px]">
              Organization info
            </p>
          </div>
        </div>
        <div className="flex flex-1">
          <InputField
            className="w-[453px] mt-5"
            size="sm"
            onChange={() => {}}
            placeholder="Company name"
          />
          <InputField
            className="w-[453px] ml-5 mt-5"
            size="sm"
            onChange={() => {}}
            placeholder="Mobile number"
          />
        </div>
        <div className="flex flex-1">
          <InputField
            className="w-[453px] mt-5"
            size="sm"
            onChange={() => {}}
            placeholder="Landline"
          />
          <InputField
            className="w-[453px] ml-5 mt-5"
            size="sm"
            onChange={() => {}}
            placeholder="Country"
          />
        </div>
        <div className="flex flex-1">
          <InputField
            className="w-[453px] mt-5"
            size="sm"
            onChange={() => {}}
            placeholder="Language "
          />
          <InputField
            className="w-[453px] ml-5 mt-5"
            size="sm"
            onChange={() => {}}
            placeholder="Company size"
          />
        </div>
      </div>
      <div className="inline-flex justify-end bg-white border-t rounded-b-lg mx-5 p-8 ">
        <Button text="Save" className="" />
      </div>
    </div>
  );
}
