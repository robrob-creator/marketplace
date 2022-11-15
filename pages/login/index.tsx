import { useRouter } from "next/router";
import {
  Layout,
  HeaderText,
  Form,
  InputField,
  Checkbox,
  Button,
} from "project-isaac-components";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <div>
        <HeaderText text="Sign In" color="black" className="mt-10" />
        <Form>
          <InputField placeholder="Email" className="my-12" />
          <InputField placeholder="Password" className="my-6" type="password" />
        </Form>
        <div className="flex mt-10 justify-between">
          <Checkbox label="Remember me?" />
          <a className="flex text-blue-700 cursor-pointer">forgot password?</a>
        </div>
        <div className="flex items-center mt-16 justify-between ">
          <div className="w-48">
            <Button
              type="primary"
              text="Sign In"
              className="mt-8"
              onClick={() => {}}
            />
          </div>
          <div className="flex mt-8">
            Not a member yet ?{" "}
            <a
              className="text-blue-700 ml-2 cursor-pointer"
              onClick={() => router.push("/sign-up")}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
