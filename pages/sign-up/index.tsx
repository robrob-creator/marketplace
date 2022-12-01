import { useRouter } from "next/router";
import {
  Layout,
  HeaderText,
  Form,
  InputField,
  BlueIsaacLogo,
  Button,
} from "project-isaac-components";
import { useState } from "react";
import { userModel } from "../../models/userModel";

export default function SignUp() {
  const [formData, setFormData] = useState({});
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
          fontStyle="medium"
          className="mt-10"
          size="lg"
        />
        <div className="flex justify-center">
          <Form bordered={false}>
            <div className="sm:w-full w-80">
              <InputField
                placeholder="Name"
                className="my-4"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, name: e.currentTarget.value })
                }
              />
              <InputField
                placeholder="Email address"
                className="my-4"
                type="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email: e.currentTarget.value })
                }
              />
              <InputField
                placeholder="Password"
                className="my-4"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, password: e.currentTarget.value })
                }
              />
              <InputField
                placeholder="Confirm password"
                className="my-4"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.currentTarget.value,
                  })
                }
              />

              <div className="flex flex-wrap justify-between align sm:mt-32 items-center">
                <div className="sm:w-48">
                  <Button
                    type="primary"
                    text="NEXT"
                    className="mt-8 "
                    onClick={() =>
                      router.replace({
                        pathname: "/sign-up/second",
                        query: formData,
                      })
                    }
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
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
