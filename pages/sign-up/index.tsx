import { useRouter } from "next/router";
import {
  Layout,
  HeaderText,
  Form,
  InputField,
  BlueIsaacLogo,
  Button,
} from "project-isaac-components";

export default function SignUp() {
  const router = useRouter();
  return (
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
          <InputField placeholder="Name" className="my-4" />
          <InputField
            placeholder="Email address"
            className="my-4"
            type="email"
          />
          <InputField placeholder="Password" className="my-4" type="password" />
          <InputField
            placeholder="Confirm password"
            className="my-4"
            type="password"
          />

          <div className="flex flex-wrap justify-between align sm:mt-32 items-center">
            <div className="sm:w-48">
              <Button
                type="primary"
                text="NEXT"
                className="mt-8 "
                onClick={() => router.replace("/sign-up/second")}
              />
            </div>
            <div className="flex text-center mt-8">
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
