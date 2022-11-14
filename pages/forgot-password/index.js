import { useRouter } from "next/router";
import {
  ArrowLeft,
  HeaderText,
  Text,
  InputField,
  BlueIsaacLogo,
  FullButton,
  OutlinedForm,
  Button,
} from "project-isaac-components";

export default function ForgotPassword() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <BlueIsaacLogo className="my-4" />
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
            className="flex flex-col space-y-12 items-center justify-end"
            style={{ width: "402px", height: "146px" }}
          >
            <div className="flex flex-col items-start justify-center px-5 py-1 rounded-xl">
              <InputField
                className=""
                placeholder="Email"
                style={{ width: "400px", height: "56px" }}
              />
            </div>
            <div
              className="relative"
              style={{ width: "400px", height: "40px" }}
            >
              <div className="relative" style={{ width: 400, height: 40 }}>
                <div
                  className="inline-flex items-center justify-center px-5 py-2 bg-blue-700 rounded-lg"
                  style={{ width: 400, height: 40 }}
                >
                  <p className="text-xs font-semibold leading-snug text-center text-gray-50">
                    Reset password
                  </p>
                </div>
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
