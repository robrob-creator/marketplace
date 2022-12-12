import DashboardHomePage from "../../components/templates/dashboard/dashboardPage";
import DashboardLayout from "../../components/layouts/dashboard";

export default function Home() {
  return (
    <DashboardLayout activeKey="home" type="dashboard">
      <DashboardHomePage />
    </DashboardLayout>
  );
}
