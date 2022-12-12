import { Router, useRouter } from "next/router";
import {
  Puzzle,
  Footer,
  WaveIcon,
  BulbIcon,
  StarIcon,
  FileIcon,
  BookIcon,
  ArrowDiagonal,
  InfoIcon,
  List,
  Text,
} from "project-isaac-components";
import DashboardNav from "../../components/modules/navigation/dasboardNav";
import SideBarPanel from "../../components/modules/navigation/sidebar";
import { ListItemValue, ListItemLabel } from "../../components/elements/list";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <DashboardNav />
      <div className="sm:inline-flex">
        <div className="sm:block hidden">
          <SideBarPanel activeKey="home" type="dashboard" />
        </div>

        {/* home contents */}

        <div className="flex flex-col sm:py-8 py-12 sm:px-16">
          <div className="inline-flex  space-x-5 sm:justify-start justify-center items-center">
            <div className="bg-gray-300 rounded-lg">
              <WaveIcon />
            </div>

            <Text
              className="font-semibold text-xl"
              text="Hey Grills, Welcome to ISAAC!"
              color="black"
            />
          </div>

          <div className="flex flex-col  px-[50px] py-[30px] bg-white border rounded-2xl border-gray-200 mt-10">
            <div className="flex flex-col space-y-8 items-start justify-start">
              <div className="inline-flex space-x-2.5 items-center justify-start">
                <BulbIcon width="40" height="40" />
                <p className="text-xl font-semibold text-[#687782]">Explore</p>
              </div>
              <div className="flex flex-col w-full">
                <List
                  data={[
                    {
                      className:
                        "inline-flex  items-center justify-between  rounded-md  bg-gray-100 cursor-pointer px-[10px]",
                      label: (
                        <ListItemLabel
                          label="Try out expo"
                          icon=<StarIcon width="30px" height="30px" />
                        />
                      ),
                      value: (
                        <ListItemValue
                          icon=<ArrowDiagonal width="16px" height="20px" />
                        />
                      ),
                    },
                    {
                      className:
                        "inline-flex  items-center justify-between  rounded-md hover:bg-gray-100 cursor-pointer px-[10px]",
                      label: (
                        <ListItemLabel
                          label="Explore APIs and guides with our docs"
                          icon=<FileIcon width="30px" height="30px" />
                        />
                      ),
                      value: (
                        <ListItemValue
                          icon=<ArrowDiagonal width="16px" height="20px" />
                        />
                      ),
                    },
                    {
                      className:
                        "inline-flex  items-center justify-between  rounded-md hover:bg-gray-100 cursor-pointer px-[10px]",
                      label: (
                        <ListItemLabel
                          label="Download our apps"
                          icon=<Puzzle width="30px" height="30px" />
                        />
                      ),
                      value: (
                        <ListItemValue
                          icon=<ArrowDiagonal width="16px" height="20px" />
                        />
                      ),
                    },
                    {
                      className:
                        "inline-flex  items-center justify-between  rounded-md hover:bg-gray-100 cursor-pointer px-[10px]",
                      label: (
                        <ListItemLabel
                          label="Learn about expo"
                          icon=<BookIcon width="30px" height="30px" />
                        />
                      ),
                      value: (
                        <ListItemValue
                          icon=<ArrowDiagonal width="16px" height="20px" />
                        />
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          {/*            Join us section */}
          <JoinUsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const JoinUsSection = () => {
  return (
    <div className="mt-10 p-[50px] inline-flex flex-col gap-[20px] space-y-5 items-start justify-start bg-white border rounded-2xl border-gray-200">
      <div className="inline-flex gap-[10px] items-center justify-start">
        <InfoIcon width="40px" height="40px" />
        <p className="w-2/3 text-2xl font-semibold text-gray-500">Join Us</p>
      </div>
      <p className="sm:text-xl sm:font-medium text-sm">
        New to Expo? Having a problem? Get help during our weekly office hours!
        <a
          href="#"
          className="font-medium text-[#2843DE]  underline ml-2 text-xl"
        >
          Read more
        </a>
      </p>
    </div>
  );
};
