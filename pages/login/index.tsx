import { useRouter } from "next/router";
import {
  Layout,
  HeaderText,
  Form,
  InputField,
  BlueIsaacLogo,
  Checkbox,
  Button,
} from "project-isaac-components";
import { ErrorProps } from "../../types";
import { useState } from "react";
import { isValidEmail } from "../api/common";
interface SignProps {
  email?: string;
  password?: string;
  error?: ErrorProps;
}

export default function Home({ email, password, error }: SignProps) {
  const [formData, setFormData] = useState({ email, password });
  const [errors, setErrors] = useState({ email: error, password: error });
  const router = useRouter();

  const handleSubmit = () => {
    if (!formData.email && !formData.password)
      return setErrors({
        password: { errorMessage: "Password required!", name: "password" },
        email: { errorMessage: "Email required !", name: "email" },
      });
    if (!formData.password)
      return setErrors({
        ...errors,
        password: { errorMessage: "Password required!", name: "password" },
      });
    if (!formData.email)
      return setErrors({
        ...errors,
        email: { errorMessage: "Email required !", name: "email" },
      });

    router.push("/user-account-setting/home");
  };

  const clearError = (name: string) => {
    if (name == "email")
      return setErrors({
        ...errors,
        email: {},
      });
    return setErrors({
      ...errors,
      password: {},
    });
  };

  console.log(errors);
  return (
    <Layout>
      <div>
        <div className="sm:invisible flex flex-col justify-center items-center">
          <BlueIsaacLogo className="sm:h-0" />
        </div>
        <HeaderText
          text="Sign In"
          fontStyle="medium"
          color="black"
          size="md"
          className="mt-10 sm:ml-0 ml-5 "
        />
        <div className="mx-5">
          <Form bordered={false}>
            <div className="sm:w-full w-96  gap-2">
              <InputField
                name="email"
                placeholder="Email"
                type="text"
                className="my-4"
                errorMessage={errors.email?.errorMessage}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (!isValidEmail(e.currentTarget.value))
                    return setErrors({
                      ...errors,
                      email: { errorMessage: "Email invalid !", name: "email" },
                    });
                  clearError("email");
                  setFormData({ ...formData, email: e.currentTarget.value });
                }}
              />
              <InputField
                placeholder="Password"
                className="my-6"
                type="password"
                name="password"
                errorMessage={errors.password?.errorMessage}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (!e.currentTarget.value) {
                    return setErrors({
                      ...errors,
                      password: {
                        errorMessage: "Password required!",
                        name: "password",
                      },
                    });
                  }
                  clearError("password");
                  setFormData({ ...formData, password: e.currentTarget.value });
                }}
              />
            </div>
          </Form>
          <div className="flex mt-10 justify-between sm:w-full w-80">
            <Checkbox label="Remember me?" />
            <a
              className="flex text-blue-700 cursor-pointer"
              onClick={() => router.push("/forgot-password")}
            >
              forgot password?
            </a>
          </div>
          <div className="flex flex-wrap items-center mt-16 sm:justify-between  justify-center">
            <Button
              type="primary"
              text="Sign In"
              className="mt-8"
              onClick={() => handleSubmit()}
            />
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
      </div>
    </Layout>
  );
}
