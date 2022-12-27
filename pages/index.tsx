import FormikListbox, { ListboxOption } from "components/FormikListbox";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import React from "react";

const positionOptions: ListboxOption<string>[] = [
  { label: "Software Engineer", value: "Software Engineer" },
  { label: "Frontend Developer", value: "Frontend Developer" },
  { label: "Backend Developer", value: "Backend Developer" },
];
const HomePage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">Formik Custom Dropdown</h1>
          <Formik
            onSubmit={(values) => console.log(values)}
            initialValues={{
              salary: "",
              position: "",
            }}
          >
            <Form className="flex flex-col items-stretch gap-2 w-full">
              <FormikListbox
                options={positionOptions}
                name="position"
                label="Position"
                placeholder="Select Position"
              />
              <button className="btn " type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
