import { useRouter } from "next/router";
import {
  Layout,
  HeaderText,
  Form,
  InputField,
  Button,
} from "project-isaac-components";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <div>
        <HeaderText text="Sign Up" color="black" className="mt-10" size="lg" />
        <Form>
          <InputField placeholder="Name" className="my-14" />
          <InputField
            placeholder="Email address"
            className="my-14"
            type="email"
          />
          <InputField
            placeholder="Password"
            className="my-14"
            type="password"
          />
          <InputField
            placeholder="Confirm password"
            className="my-14"
            type="Confirm password"
          />

          <div className="flex justify-between mt-16">
            <Button
              type="primary"
              text="NEXT"
              className="mt-8"
              onClick={() => {}}
            />
            <div className="flex mt-8">
              Already a member ?{" "}
              <a
                className="text-blue-700 ml-2 cursor-pointer"
                onClick={() => router.push("login")}
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
