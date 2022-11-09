import {
  Layout,
  HeaderText,
  Form,
  InputField,
  Checkbox,
  Button,
} from "project-isaac-components";

export default function Home() {
  return (
    <Layout>
      <div>
        <HeaderText text="Sign Up" color="black" className="mt-10" />
        <Form>
          <InputField placeholder="Name" className="my-6" />
          <InputField
            placeholder="Email address"
            className="my-6"
            type="email"
          />
          <InputField placeholder="Password" className="my-6" type="password" />
          <InputField
            placeholder="Confirm password"
            className="my-6"
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
              Already a member ? <a className="text-blue-700 ml-2"> Sign In</a>
            </div>
          </div>
        </Form>
      </div>
    </Layout>
  );
}
