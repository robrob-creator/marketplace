import { useRouter } from "next/router";
import {
  Line,CogIcon,GridIcon,Puzzle,
  UserAvatar,SideBar,NavigationBar,
  Button,Dropdown,Footer,DottedMenuIcon
} from "project-isaac-components";

import { useState } from "react";
import {
  PasswordForm,
  EmailForm,
  ProfileForm,
} from "../../components/forms/editProfile";

const rightElement = <div className="inline-flex gap-5"><input className="w-[271px] h-[40px] border rounded-md p-3 border-[#D9D9D9]" placeholder="Search"/><div className="my-auto cursor-pointer"><DottedMenuIcon/></div><UserAvatar className="ml-5"/></div>
const centerElement = <div className="inline-flex gap-1 font-semibold"><UserAvatar/><Dropdown children label="Grills092"/></div>
type sideNavProps = {
  view: "profile" | "email" | "password";
};

export default function RegisterTwo({ view = "profile" }: sideNavProps) {
  const [showForm, setShowForm] = useState(view);
  const router = useRouter();

  return (
    <div>
    
      <NavigationBar rightElements={rightElement} centerElements={centerElement}  />
      <div className="flex">
 
   <div>
      <SideBar  items={[
    {
      icon: <CogIcon />,
      name: 'Home',
      notification: 28,
    },
    {
      icon: <GridIcon />,
      name: 'Analytics',
      notification:5
    },
    {
      icon: <Puzzle />,
      name: 'My Apps',
      notification: 12,
      handleClick: ()=>{router.push('/user-account-setting/my-apps')}
    },
    {
      icon: <Puzzle />,
      name: 'Account Settings',
      notification: 3,
      className:"border-t-5"
    }
  ]}/>








   </div>

    
    {/* user account contents */}

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
       <Footer/>
    </div>
  );
}
