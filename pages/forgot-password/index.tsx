import { useRouter } from "next/router";
import {
  ArrowLeft,
  HeaderText,
  Text,
  InputField,
  BlueIsaacLogo,
  Button,
  OutlinedForm,
  Form,
} from "project-isaac-components";

export default function ForgotPassword() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <BlueIsaacLogo className="mb-4 mt-16" />
      <OutlinedForm>
        <div
          className="inline-flex flex-col space-y-11 items-center justify-end"
          style={{ width: "402px", height: "323px" }}
        >
          <div className="flex flex-col space-y-1.5 items-center justify-start">
            <HeaderText color="black" text="Forgot password?" size="sm" />

            <Text
              size="sm"
              color="gray-500"
              text=" No worries, we’ll send you reset instructions."
            />
          </div>
          <div
            className="flex flex-col space-y-12 items-center min-w-min-96 justify-end"
            style={{ height: "146px" }}
          >
            <div className="flex flex-col items-start justify-center px-5 py-1 rounded-xl">
              <InputField
                className=""
                placeholder="Email"
                size="lg"
                style={{ width: "400px" }}
              />
            </div>

            <div
              className="relative"
              style={{ width: "400px", height: "40px" }}
            >
              <div className="relative" style={{ width: 400, height: 40 }}>
                <Button
                  text=" Reset password"
                  size="xl"
                  onClick={() => router.push("/forgot-password/check-email")}
                />
              </div>
            </div>
          </div>
          <div
            className="inline-flex space-x-2.5 items-center justify-start"
            onClick={() => router.push("/login")}
          >
            <ArrowLeft size="sm" />
            <Text size="sm" color="gray-700" text="  Back to sign in" />
          </div>
        </div>
      </OutlinedForm>
    </div>
  );
}
