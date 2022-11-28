import { useRouter } from "next/router";
import { CogIcon, GridIcon, Puzzle } from "project-isaac-components";

export const SideBar = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="inline-flex items-start justify-start w-60">
      <div className="inline-flex flex-col items-start justify-start flex-1 py-8 bg-white h-screen border border-gray-200">
        <div className="inline-flex  items-center justify-between w-full h-20 px-5 py-10 rounded-full">
          <div
            className="flex space-x-2.5 items-center justify-start px-2.5 py-1 rounded-full cursor-pointer"
            onClick={() => router.push("/user-account-setting")}
          >
            <CogIcon />
            <p className="text-xs text-gray-600 w-full sm:inline-block hidden">
              Account Settings
            </p>
          </div>
          <div className="inline-flex flex-col items-center justify-center w-7 h-4 bg-indigo-700 rounded-full">
            <p className="text-xs font-medium text-center text-white">34</p>
          </div>
        </div>
        <div className="inline-flex space-x-2.5 items-center justify-between w-full h-20 px-5 py-10">
          <div className="flex space-x-2.5 items-center justify-start w-3/4 px-2.5 py-1 rounded-full cursor-pointer">
            <GridIcon />
            <p className="text-xs text-gray-600 sm:inline-block hidden">
              Dashboards
            </p>
          </div>
          <div className="inline-flex flex-col items-center justify-center w-7 h-4 bg-indigo-700 rounded-full">
            <p className="text-xs font-medium text-center text-white">34</p>
          </div>
        </div>
        <div className="inline-flex space-x-2.5 items-center justify-between w-full h-20 px-5 py-10">
          <div
            className="inline-flex space-x-2.5 items-center justify-start py-1 sm:pl-2.5 sm:pr-14 pr-4 pl-2 bg-blue-100 rounded-full cursor-pointer"
            onClick={() => router.push("/user-account-setting/my-apps")}
          >
            <Puzzle />
            <p className="text-xs font-semibold text-blue-700 w-full sm:inline-block hidden">
              My Apps
            </p>
          </div>
          <div className="inline-flex flex-col items-center justify-center w-7 h-4 bg-indigo-700 rounded-full">
            <p className="text-xs font-medium text-center text-white">34</p>
          </div>
        </div>
      </div>
    </div>
  );
};
