import { useRouter } from "next/router";
import {
  Layout,
  HeaderText,
  Form,
  InputField,
  Checkbox,
  Button,
} from "project-isaac-components";
import { ErrorProps } from "../types";
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

    router.push("/");
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
        <HeaderText text="Sign In" color="black" className="mt-10" />
        <Form>
          <InputField
            name="email"
            placeholder="Email"
            className="my-12"
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
        </Form>
        <div className="flex mt-10 justify-between">
          <Checkbox label="Remember me?" />
          <a
            className="flex text-blue-700 cursor-pointer"
            onClick={() => router.push("/forgot-password")}
          >
            forgot password?
          </a>
        </div>
        <div className="flex flex-wrap items-center mt-16 xl:justify-between ">
          <div className="w-48">
            <Button
              type="primary"
              text="Sign In"
              className="mt-8"
              onClick={() => handleSubmit()}
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
