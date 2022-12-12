import DashboardLayout from "../../components/layouts/dashboard";
import MembersPage from "../../components/templates/membersPage";

export default function Members() {
  return (
    <DashboardLayout activeKey="members" type="userSettings">
      <MembersPage />
    </DashboardLayout>
  );
}
