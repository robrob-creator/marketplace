import { useRouter } from "next/router";
import {
  CogIcon,
  UserAvatar,
  NavigationBar,
  Button,
  Dropdown,
  Footer,
  DottedMenuIcon,
  SearchCircleIcon,
  List,
  AddCirlceIcon,
  CheckedIcon,
  GroupIcon,
} from "project-isaac-components";
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

export default function Members() {
  return (
    <div className="bg-gray-100">
      <NavigationBar
        className="bg-white border-b border-gray-300"
        rightElements={rightElement}
        leftElements={<LeftElement />}
      />
      <div className="flex">
        <div className="sm:block hidden">
          <SideBarPanel activeKey="members" type="userSettings" />
        </div>

        {/* contentd */}
        <div className="flex flex-col w-full">
          <div className="flex  sm:py-8 sm:px-6  h-24 border-b bg-white border-gray-200">
            <div className="inline-flex space-x-5 items-center justify-start">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-gray-300 rounded-lg">
                <GroupIcon width="30" height="30" />
              </div>
              <p className="text-xl font-semibold">Member</p>
            </div>
          </div>
          <div className="mt-[30px] mb-[20px] px-[27px] ">
            <p className="text-base font-bold">Pending invitations</p>
          </div>

          <div className=" mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-8 rounded-t-lg  border border-[#D9D9D9]">
            <p className="text-xl font-bold">Pending Invitations</p>
          </div>
          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex flex-col space-y-2.5 items-start justify-center">
                      <p className="text-base font-semibold">Email@gmail.com</p>
                      <p className="w-48 text-base text-gray-600">
                        Invitations has expired
                      </p>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>
          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  rounded-b-lg border border-[#D9D9D9]">
            <List
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
                    <div className="inline-flex items-center gap-4">
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
          <div className="mt-10 mx-5 inline-flex items-center justify-between px-5 sm:gap-0 gap-4 bg-white p-8 rounded-t-lg  border border-[#D9D9D9]">
            <p className="text-xl font-bold">Members</p>
            <Button text="Invite member" />
          </div>
          <div className="mx-5 inline-flex  items-center justify-between   bg-white px-[27px] py-[27px] border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>
          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mx-5 inline-flex space-x-96 items-center justify-between px-5 bg-white p-4  border border-[#D9D9D9]">
            <List
              data={[
                {
                  label: (
                    <div className="inline-flex space-x-2.5 items-center justify-start">
                      <UserAvatar />
                      <div className="inline-flex flex-col space-y-1 items-start justify-start">
                        <p className="text-base font-semibold">
                          Jun Mark Grills
                        </p>
                        <p className="w-full text-sm text-gray-600">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  ),
                  value: (
                    <div className="inline-flex items-center gap-4">
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 border rounded-md border-gray-300">
                        <p className="text-base font-medium text-right">
                          Admin{" "}
                        </p>
                      </div>
                      <DottedMenuIcon />
                    </div>
                  ),
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
