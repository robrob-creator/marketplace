import { Footer } from "project-isaac-components";
import DashboardNav from "../../app/components/modules/navigation/dasboardNav";
import { CreateOrganizationForm } from "../../app/components/modules/forms/createOrganizationForm";

export default function RegisterTwo() {
  return (
    <div className="bg-gray-100">
      <DashboardNav />
      <CreateOrganizationForm />
      <Footer />
    </div>
  );
}
