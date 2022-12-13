import { useRouter } from "next/router";
import DashboardLayout from "../../components/layouts/dashboard";
import OverviewPage from "../../components/templates/dashboard/overviewPage";
export default function RegisterTwo() {
  const router = useRouter();

  return (
    <DashboardLayout type="userSettings" activeKey="userSettings">
      <OverviewPage />
    </DashboardLayout>
  );
}
