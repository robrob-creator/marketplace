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
  CheckedIcon,
  AddCirlceIcon,
} from "project-isaac-components";
import SideBarPanel from "../../components/navigation/sidebar";
import { useState } from "react";
import {
  PasswordForm,
  EmailForm,
  ProfileForm,
} from "../../components/forms/editProfile";

interface LabelProps {
  label?: string;
}
interface ValueProps {
  value?: string;
}

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
const LeftElement = () => {
  const router = useRouter();
  return (
    <div className="sm:inline-flex hidden gap-1 font-semibold ">
      <UserAvatar className="w-8" />
      <Dropdown label="Grills092">
        <div className="flex flex-col gap-8  w-[400px] h-[60px] p-[20px] rounded-t-lg bg-white border border-[#D9D9D9]   ">
          <p className="text-base font-medium text-[#5C5C5C] ">
            Personal account
          </p>
        </div>
        <div className="flex flex-col gap-8  w-[400px] p-[20px]  bg-white ">
          <div className="inline-flex justify-between items-center">
            <div className="flex space-x-2.5 w-28 h-full items-center">
              <UserAvatar />
              <p className="text-base font-medium text-[#5C5C5C]">Grills1031</p>
            </div>
            <div className="flex space-x-5 w-1/6 h-6">
              <CheckedIcon width="24px" height="24px" />
              <CogIcon width="24px" height="24px" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8  w-[400px] h-[60px] p-[20px]   bg-white ">
          <p className="text-base font-medium text-gray-600">Organization</p>
        </div>
        <div className="flex flex-col gap-8  w-[400px] p-[20px] rounded-b-slg bg-white drop-shadow-2xl border-t border-[#D9D9D9] ">
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
        leftElements={<LeftElement />}
      />
      <div className="flex">
        <div className="sm:block hidden">
          <SideBarPanel type="userSettings" activeKey="userSettings" />
        </div>

        {/* contentd */}
        <div className="flex flex-col w-full">
          <div className="flex  sm:py-8  sm:pl-6 pl-4  h-24 border-b bg-white border-gray-200">
            <div className="inline-flex items-center justify-start gap-4">
              <div className="flex items-center justify-center sm:w-10  w-[40px] h-[40px] bg-gray-300 rounded-lg">
                <CogIcon
                  width="30px"
                  height="30px"
                  className="w-3/4 h-3/4 rounded-lg"
                />
              </div>
              <p className="text-xl sm:font-semibold ">Account Overview</p>
            </div>
          </div>

          <div className="mt-10 mx-5 inline-flex sm:flex-row   items-center justify-between px-5 bg-white p-8 rounded-lg">
            <div className="inline-flex flex-col sm:items-start items-center justify-center gap-2">
              <div className="inline-flex space-x-1 items-center justify-start">
                <CogIcon />
                <p className="text-base font-semibold">Organization settings</p>
              </div>
              <p className="sm:text-base text-sm text-gray-600 leading-5">
                Change your organization name, company name, and more inside
                user settings.
              </p>
            </div>
            <div className="flex items-center justify-start h-5">
              <Button
                size="xl"
                onClick={() =>
                  router.push("/user-account-setting/user-settings")
                }
              >
                <Text text="User Settings" size="sm" />
              </Button>
            </div>
          </div>

          <p className="mt-[50px] ml-[24px] text-base font-medium">
            Account information
          </p>

          <div className="mx-5 mt-5 px-[27px] py-[15px] bg-white rounded-lg ">
            <List
              data={[
                {
                  label: <ListItemLabel label="Organization name" />,
                  value: <ListItemValue value="project moonshot" />,
                },
                {
                  label: <ListItemLabel label="Company name" />,
                  value: <ListItemValue value="Project Moonshot Inc." />,
                },
                {
                  label: <ListItemLabel label="Company size" />,
                  value: <ListItemValue value="20-30 Employes" />,
                },
                {
                  label: <ListItemLabel label="Country" />,
                  value: <ListItemValue value="Philippines" />,
                },
                {
                  label: <ListItemLabel label="Mobile number" />,
                  value: <ListItemValue value="+63 936 5625 744s" />,
                },
                {
                  label: <ListItemLabel label="Landline" />,
                  value: <ListItemValue value="(088) 848 485" />,
                },

                {
                  label: <ListItemLabel label="Members" />,
                  value: <ListItemValue value="0" />,
                  rightIcon: <ArrowRightIcon color="#3D50BA" />,
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

const ListItemLabel = ({ label }: LabelProps) => {
  return <p className="font-medium text-base leading-5"> {label} </p>;
};
const ListItemValue = ({ value }: ValueProps) => {
  return <p className="font-medium text-base leading-5">{value}</p>;
};
