import DashboardLayout from "../../app/components/layouts/dashboard";
import UserSettingsPage from "../../app/components/templates/dashboard/userSettingsPage";

export default function UserSettings() {
  return (
    <DashboardLayout activeKey="userSettings" type="userSettings">
      <UserSettingsPage />
    </DashboardLayout>
  );
}
