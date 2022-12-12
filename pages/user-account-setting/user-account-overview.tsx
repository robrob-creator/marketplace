import { useRouter } from "next/router";
import {
  CogIcon,
  NavigationBar,
  Button,
  Footer,
  ArrowRightIcon,
  Text,
  List,
} from "project-isaac-components";
import SideBarPanel from "../../components/modules/navigation/sidebar";
import DashboardNav from "../../components/modules/navigation/dasboardNav";
interface LabelProps {
  label?: string;
}
interface ValueProps {
  value?: string;
}

export default function RegisterTwo() {
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      <DashboardNav />
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
