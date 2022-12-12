import DashboardHomePage from "../../app/components/templates/dashboard/dashboardPage";
import DashboardLayout from "../../app/components/layouts/dashboard";

export default function Home() {
  return (
    <DashboardLayout activeKey="home" type="dashboard">
      <DashboardHomePage />
    </DashboardLayout>
  );
}
