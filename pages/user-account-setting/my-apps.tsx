import { useRouter } from "next/router";
import { WhiteNavBar, BasicCard, Text } from "project-isaac-components";
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

          <div className="sm:py-8 sm:px-16 sm:mx-0 mx-8 ">
            <div className="inline-flex flex-col space-y-11 items-start justify-start w-full ">
              <Text color="black" fontStyle="medium">
                New installed
              </Text>
              <div className="flex flex-col space-y-12 items-start justify-start  bg ">
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
    </div>
  );
}
