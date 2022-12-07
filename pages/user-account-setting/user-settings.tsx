import { useRouter } from "next/router";
import {
  CogIcon,
  Puzzle,
  UserAvatar,
  NavigationBar,
  Button,
  Dropdown,
  Footer,
  DottedMenuIcon,
  SearchCircleIcon,
  CheckedIcon,
  AddCirlceIcon,
  Text,
} from "project-isaac-components";
import { AccountInformationForm } from "../../components/forms/accountInformationForm";
import SideBarPanel from "../../components/navigation/sidebar";
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

export default function UserSettings() {
  return (
    <div className="bg-gray-100 ">
      <NavigationBar
        className="bg-white border-b border-gray-300"
        rightElements={rightElement}
        leftElements={<LeftElement />}
      />
      <div className="flex">
        <div className="sm:block hidden">
          <SideBarPanel type="userSettings" activeKey="userSettings" />
        </div>

        {/* contents */}
        <div className="inline-flex flex-col  bg-gray-100 box-border">
          <div className="inline-flex items-center justify-start h-[80px] bg-white w-full">
            <div className="flex items-center justify-center w-[40px] h-[40px]  bg-gray-300 rounded-lg ml-10">
              <CogIcon width="30" height="30" />
            </div>
            <p className="w-5/6 text-xl font-semibold ml-[20px]">
              User settings
            </p>
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
                Deleting an organization will remove all associated information
                from our servers.
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
      </div>
      <Footer />
    </div>
  );
}
