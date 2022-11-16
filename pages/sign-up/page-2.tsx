import { useRouter } from "next/router";
import {
  Layout,
  HeaderText,
  Form,
  InputField,
  Text,
  Checkbox,
  Button,
} from "project-isaac-components";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <div>
        <HeaderText text="Sign Up" color="black" className="mt-10" size="lg" />
        <Form>
          <div className="w-full grid grid-cols-2 gap-2">
            <div>
              <InputField placeholder="First Name" className="my-14" />
              <InputField
                placeholder="Mobile Phone Number"
                className="my-10"
                type="tel"
              />
              <InputField placeholder="Country" className="my-14" />
              <InputField placeholder="City/Town" className="my-14" />
            </div>
            <div>
              <InputField placeholder="Last Name" className="my-14" />
              <InputField placeholder="Company Name" className="my-14" />
              <InputField placeholder="Province/State" className="my-10" />
            </div>
          </div>
          <div
            className="inline-flex space-x-4 items-center justify-end"
            style={{ width: 568, height: 38 }}
          >
            <div className="flex-1 h-full rounded">
              <Checkbox />
            </div>
            <Text color="black" size="sm">
              Creating an account means you’re okay with our{" "}
              <span className="text-blue-600">Terms of Service</span>, Privacy
              Policy, and our default{" "}
              <span className="text-blue-600">Notification Settings</span>.
            </Text>
          </div>
          <div className="flex justify-between mt-16">
            <div className="w-48">
              <Button
                type="primary"
                text="SUBMIT"
                className="mt-8 "
                onClick={() => router.push("sign-up/page-2")}
              />
            </div>
            <div className="flex mt-8">
              Already a member ?{" "}
              <a
                className="text-blue-700 ml-2 cursor-pointer"
                onClick={() => router.push("/login")}
              >
                {" "}
                Sign In
              </a>
            </div>
          </div>
        </Form>
      </div>
    </Layout>
  );
}
