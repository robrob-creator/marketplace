import { useRouter } from "next/router";
import {
  Layout,
  HeaderText,
  Form,
  InputField,
  Text,
  Checkbox,
  BlueIsaacLogo,
  Button,
} from "project-isaac-components";

export default function RegisterTwo() {
  const router = useRouter();
  return (
    <>
      <Layout>
        <div className="pb-36">
          <div className="sm:invisible flex flex-col justify-center items-center">
            <BlueIsaacLogo className="sm:h-0" />
          </div>
          <HeaderText
            text="Sign Up"
            color="black"
            fontStyle="font-medium"
            className="mt-10"
            size="lg"
          />
          <Form bordered={false}>
            <div className="sm:w-full w-96 grid sm:grid-cols-2 gap-2">
              <div>
                <InputField
                  placeholder="First Name"
                  type="text"
                  className="my-4"
                />
                <InputField
                  placeholder="Mobile Phone Number"
                  className="my-4"
                  type="tel"
                />
                <InputField
                  placeholder="Country"
                  type="text"
                  className="my-4"
                />
                <InputField
                  placeholder="City/Town"
                  type="text"
                  className="my14"
                />
              </div>
              <div>
                <InputField
                  placeholder="Last Name"
                  type="text"
                  className="my-4"
                />
                <InputField
                  placeholder="Company Name"
                  type="text"
                  className="my-4"
                />
                <InputField placeholder="Province/State" className="my-4" />
              </div>
            </div>
          </Form>
          <div
            className="inline-flex space-x-4 sm:w-128 w-96 items-center justify-end"
            style={{ height: 38 }}
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
          <div className="flex sm:flex-none flex-wrap align justify-between mt-16">
            <div className="w-48 ">
              <Button
                type="primary"
                text="SUBMIT"
                className="mt-8 "
                onClick={() => router.push("/")}
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
        </div>
      </Layout>
    </>
  );
}
