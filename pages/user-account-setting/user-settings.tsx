import DashboardLayout from "../../components/layouts/dashboard";
import UserSettingsPage from "../../components/templates/dashboard/userSettingsPage";

export default function UserSettings() {
  return (
    <DashboardLayout activeKey="userSettings" type="userSettings">
      <UserSettingsPage />
    </DashboardLayout>
  );
}
