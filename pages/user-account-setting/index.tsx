import { useRouter } from "next/router";
import {
  WhiteNavBar,
  Line,
  UserAvatar,
  Button,
} from "project-isaac-components";
import { SideBar } from "../../components/sidebar";
import { useState } from "react";
import {
  PasswordForm,
  EmailForm,
  ProfileForm,
} from "../../components/forms/editProfile";

type sideNavProps = {
  view: "profile" | "email" | "password";
};

export default function RegisterTwo({ view = "email" }: sideNavProps) {
  const [showForm, setShowForm] = useState(view);
  const router = useRouter();

  return (
    <div>
      <WhiteNavBar />
      <div className="flex">
        <SideBar />
        <div className="flex-auto sm:py-8 sm:px-16">
          <div className="inline-flex space-x-3.5 items-center justify-start mx-4 my-8">
            <UserAvatar className="w-10 h-full rounded-lg" />
            <p className="text-base font-semibold ">
              Jun Mark Grills / Account Settings
            </p>
          </div>
          <div className="flex flex-wrap ">
            <div className="flex flex-col space-y-5 items-start justify-start">
              <p
                className={`cursor-pointer text-sm ${
                  showForm == "profile"
                    ? "font-semibold text-blue-700"
                    : "text-gray-600"
                }`}
                onClick={() => setShowForm("profile")}
              >
                Edit Profile
              </p>
              <p
                className={`cursor-pointer text-sm ${
                  showForm == "email"
                    ? "font-semibold text-blue-700"
                    : "text-gray-600"
                }`}
                onClick={() => setShowForm("email")}
              >
                Email Address
              </p>
              <p
                className={`cursor-pointer text-sm ${
                  showForm == "password"
                    ? "font-semibold text-blue-700"
                    : "text-gray-600"
                }`}
                onClick={() => setShowForm("password")}
              >
                Password
              </p>
            </div>

            <Line height="2" className="sm:visible invisible" />
            {showForm == "email" ? (
              <EmailForm />
            ) : showForm == "password" ? (
              <PasswordForm />
            ) : (
              <ProfileForm />
            )}
          </div>
          <div className="flex flex-row-reverse sm:mt-16 sm:mx-34 mr-32">
            <Button
              type="primary"
              size="md"
              className="justify-self-end"
              onClick={() => {}}
              text="Save changes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
