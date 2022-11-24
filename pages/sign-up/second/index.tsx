import { GetServerSideProps } from "next";
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
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { createUser } from "../../../services/customerAcount";

export default function RegisterTwo(props: any) {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  useEffect(() => {
    setFormData({ ...props.data });
  }, [props.data]);

  return (
    <>
      <Layout>
        <div>
          <div className="sm:invisible flex flex-col justify-center items-center">
            <BlueIsaacLogo className="sm:h-0" />
          </div>
          <HeaderText
            text="Sign Up"
            color="black"
            fontStyle="medium"
            className="mt-10 sm:ml-0 ml-4"
            size="lg"
          />
          <div className="pb-36 sm:block grid place-items-center">
            <Form bordered={false}>
              <div className="sm:w-full w-90 grid sm:grid-cols-2 gap-2">
                <div>
                  <InputField
                    placeholder="First Name"
                    type="text"
                    className="my-4"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.currentTarget.value,
                      })
                    }
                  />
                  <div className="w-36">
                    <PhoneInput
                      placeholder="Mobile Phone Number"
                      value="63"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mobileNumber: e,
                        })
                      }
                      buttonStyle={{
                        width: 80,
                        height: 56,
                        marginLeft: 12,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 5,
                        paddingBottom: 5,
                        backgroundColor: "rgba(239.31, 240.16, 246.50, 1)",
                        borderRadius: 12,
                        display: "inline-flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        position: "absolute",
                      }}
                      inputStyle={{
                        width: 188,
                        height: 56,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 5,
                        paddingBottom: 5,
                        backgroundColor: "rgba(239.31, 240.16, 246.50, 1)",
                        borderRadius: 12,
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                    />
                  </div>

                  <InputField
                    placeholder="Country"
                    type="text"
                    className="my-4"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        country: e.currentTarget.value,
                      })
                    }
                  />
                  <InputField
                    placeholder="City/Town"
                    type="text"
                    className="my14"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        city: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div>
                  <InputField
                    placeholder="Last Name"
                    type="text"
                    className="my-4"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lastName: e.currentTarget.value,
                      })
                    }
                  />
                  <InputField
                    placeholder="Company Name"
                    type="text"
                    className="my-4"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companyName: e.currentTarget.value,
                      })
                    }
                  />
                  <InputField
                    placeholder="Province/State"
                    className="my-4"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        state: e.currentTarget.value,
                      })
                    }
                  />
                </div>
              </div>
            </Form>
            <div className="sm:w-128">
              <div
                className="inline-flex space-x-4 sm:w-full w-82 mt-12 items-center justify-end"
                style={{ height: 38 }}
              >
                <div className="flex-1 h-full rounded">
                  <Checkbox />
                </div>
                <Text color="black" size="sm">
                  Creating an account means you’re okay with our{" "}
                  <span className="text-blue-600">Terms of Service</span>,
                  Privacy Policy, and our default{" "}
                  <span className="text-blue-600">Notification Settings</span>.
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-none flex-wrap align justify-between mt-16">
              <div className="w-48 ">
                <Button
                  type="primary"
                  text="SUBMIT"
                  className="mt-8 "
                  onClick={() => createUser({ ...formData })}
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
        </div>
      </Layout>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  let data = context.query;

  return {
    props: { data }, // will be passed to the page component as props
  };
};
