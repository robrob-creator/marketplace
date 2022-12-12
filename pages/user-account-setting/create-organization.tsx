import { Footer } from "project-isaac-components";
import DashboardNav from "../../components/modules/navigation/dasboardNav";
import { CreateOrganizationForm } from "../../components/modules/forms/createOrganizationForm";

export default function RegisterTwo() {
  return (
    <div className="bg-gray-100">
      <DashboardNav />
      <CreateOrganizationForm />
      <Footer />
    </div>
  );
}
