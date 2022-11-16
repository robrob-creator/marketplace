import { useRouter } from "next/router";
import {
  ArrowLeft,
  HeaderText,
  Text,
  InputField,
  BlueIsaacLogo,
  Form,
  Button,
  OutlinedForm,
} from "project-isaac-components";

export default function ForgotPassword() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <BlueIsaacLogo className="mb-4 mt-16" />
      <OutlinedForm>
        <div className="inline-flex flex-col space-y-16 items-center justify-end flex-1 h-full">
          <div className="flex flex-col space-y-1.5 items-center justify-start bg-white">
            <HeaderText text="Check your email" color="black" size="sm" />
            <Text size="sm" color="gray-500" className="text-center">
              We sent a password reset link to
              <br />
              grill.moonshot@gmail.com
            </Text>
          </div>
          <Text size="sm" className="text-center" color="black">
            Didn’t receive the email? Click to resend
          </Text>
          <div
            className="inline-flex space-x-2.5 items-center justify-start bg-white cursor-pointer"
            onClick={() => router.push("/login")}
          >
            <ArrowLeft />
            <Text size="sm" color="gray-700" text="  Back to sign in" />
          </div>
        </div>
      </OutlinedForm>
    </div>
  );
}
