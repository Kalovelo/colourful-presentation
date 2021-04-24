import { Field, Form, Formik, FormikValues } from "formik";
import { default as React, useRef } from "react";
import Button from "../button/button";
import "./contact.scss";
import { IContactProps, IFormFields } from "./interface";
const Contact: React.FC<IContactProps> = ({ setSnackbar }) => {
  const formFields: Array<IFormFields> = [
    {
      as: "input",
      name: "name",
      type: "name",
      label: "Όνομα",
      placeholder: "Το όνομα σου",
      validation: (value: string): string => (!value ? "Απαιτούμενο" : ""),
    },
    {
      as: "input",
      name: "email",
      type: "email",
      label: "Διεύθυνση mail",
      placeholder: "sample@mail.com",
      validation: (value: string): string => {
        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          return "Invalid Email Address";
        else if (!value) return "Απαιτούμενο";
        else return "";
      },
    },
    {
      as: "textarea",
      name: "message",
      type: "text",
      label: "Μήνημα",
      placeholder: "Το μήνυμα σου",
      validation: (value: string): string => (!value ? "Απαιτούμενο" : ""),
    },
  ];
  const fieldRefs = useRef<[HTMLDivElement] | [null]>([null]);
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const labelRefs = useRef<[HTMLLabelElement] | [null]>([null]);

  const encode = (data: FormikValues) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          "bot-field": "",
          "form-name": "contact",
        }}
        onSubmit={(values, actions) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ ...values }),
          })
            .catch(() => {
              setSnackbar("error");
            })
            .finally(() => {
              actions.resetForm();
              setSnackbar("success");
              actions.setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, touched, errors, isValid }) => (
          <Form
            name="contact"
            className="contactForm"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {formFields.map((field, index) => (
              <div
                className={`contactForm__field contactForm__field--${field.as}`}
                key={index}
              >
                <div className="contactForm__input-label-wrapper">
                  <label
                    ref={(el) => (labelRefs.current[index] = el)}
                    className="contactForm__label"
                  >
                    {field.label}
                  </label>
                  {touched[field.name] ? (
                    <span className="contactForm__label contactForm__label--error">
                      {errors[field.name]}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className={`contactForm__input-wrapper contactForm__input-wrapper--${field.as}`}
                >
                  <Field
                    innerRef={(el: HTMLDivElement) =>
                      (fieldRefs.current[index] = el)
                    }
                    className={`contactForm__input contactForm__input--${
                      field.as
                    }  ${
                      errors[field.name] && touched[field.name]
                        ? "contactForm__input--error"
                        : ""
                    }`}
                    as={field.as}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    validate={field.validation}
                  />
                </div>
              </div>
            ))}
            <Field type="hidden" name="form-name" />
            <Field type="hidden" name="bot-field" />
            <Button
              disabled={isSubmitting || !isValid}
              ref={submitRef}
              text="Αποστολή"
            />
          </Form>
        )}
      </Formik>
      <div style={{ position: "fixed" }}></div>
    </>
  );
};

export default Contact;
