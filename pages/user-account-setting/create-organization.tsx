import { Footer } from "project-isaac-components";
import DashboardNav from "../../components/navigation/dasboardNav";
import { CreateOrganizationForm } from "../../components/forms/createOrganizationForm";

export default function RegisterTwo() {
  return (
    <div className="bg-gray-100">
      <DashboardNav />
      <CreateOrganizationForm />
      <Footer />
    </div>
  );
}
