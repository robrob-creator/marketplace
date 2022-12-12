import DashboardLayout from "../../app/components/layouts/dashboard";
import MembersPage from "../../app/components/templates/dashboard/membersPage";

export default function Members() {
  return (
    <DashboardLayout activeKey="members" type="userSettings">
      <MembersPage />
    </DashboardLayout>
  );
}
