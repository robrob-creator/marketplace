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
        <HeaderText text="Sign In" color="black" className="mt-10" />
        <Form>
          <InputField placeholder="Email" className="my-12" />
          <InputField placeholder="Password" className="my-6" type="password" />
          <div className="flex justify-between">
            <Checkbox label="Remember me?" />
            <a className="flex text-blue-700">forgot password?</a>
          </div>
          <div className="flex justify-between">
            <Button
              type="primary"
              text="Sign In"
              className="mt-8"
              onClick={() => {}}
            />
            <div className="flex mt-8">
              Not a member yet ? <a className="text-blue-700 ml-2"> Sign Up</a>
            </div>
          </div>
        </Form>
      </div>
    </Layout>
  );
}
