import React from "react";
import { Form, InputField, Button, UserAvatar } from "project-isaac-components";

export function EmailForm() {
  return (
    <div className="flex lg:w-4/6">
      <Form className="lg:mx-8 lg:w-full h-96">
        <InputField placeholder="Email Address" size="lg" />
      </Form>
      <Button type="text" onClick={() => {}} text="Verify" />
    </div>
  );
}
export function PasswordForm() {
  return (
    <div className="flex md:w-4/6 lg:w-4/6">
      <div className="lg:mx-8 sm:w-full h-96">
        <div className="sm:w-full  w-96 ">
          <InputField placeholder="Old password" className="mb-8" size="lg" />
          <InputField placeholder="New password" className="mb-8" size="lg" />
          <InputField placeholder="Confirm password" size="lg" />
        </div>
      </div>
    </div>
  );
}
export function ProfileForm() {
  return (
    <div className="flex flex-wrap lg:w-4/6 ">
      <div className="lg:mx-8 sm:w-full h-96 ">
        <ProfileImageUp />
        <div className="sm:w-full w-96 grid sm:grid-cols-2 gap-2 ">
          <div>
            <InputField placeholder="First Name" className="mb-6" size="lg" />
            <InputField
              placeholder="Mobile Phone Number"
              className="mb-6"
              size="lg"
            />
            <InputField placeholder="Country" size="lg" className="mb-6" />
            <InputField placeholder="City/Town" size="lg" className="mb-6" />
          </div>
          <div>
            <InputField placeholder="Last Name" className="mb-6" size="lg" />
            <InputField placeholder="Company Name" className="mb-6" size="lg" />
            <InputField
              placeholder="Province/State"
              size="lg"
              className="mb-6"
            />
            <InputField placeholder="Language" size="lg" className="mb-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
function ProfileImageUp() {
  return (
    <div className="inline-flex w-full space-x-8 mb-8 items-center justify-start">
      <UserAvatar className="w-24 h-full rounded-full" />
      <div className="flex space-x-8 items-center justify-start">
        <div className="flex items-center justify-center w-48 px-5 py-2 bg-blue-700 rounded-lg">
          <p className="text-xs font-semibold leading-snug text-center text-gray-50">
            Upload new photo
          </p>
        </div>
        <div className="flex space-x-1.5 items-center justify-start">
          <img
            className="w-1/5 h-full rounded-lg"
            src="https://via.placeholder.com/24x24"
          />
          <p className="text-sm font-medium leading-tight text-gray-700">
            Delete avatar
          </p>
        </div>
      </div>
    </div>
  );
}
