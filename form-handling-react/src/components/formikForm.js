import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().trim().min(3, "Must be at least 3 characters").required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Must be at least 6 characters").required("Password is required"),
});

export default function FormikRegistrationForm() {
  const initialValues = { username: "", email: "", password: "" };

  const onSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus({ success: "", error: "" });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setStatus({ success: `Registered! ID: ${data.id ?? "N/A"}`, error: "" });
      resetForm();
    } catch (err) {
      setStatus({ success: "", error: err.message || "Something went wrong" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      {({ isSubmitting, status }) => (
        <Form style={{ maxWidth: 420, margin: "2rem auto", display: "grid", gap: "0.75rem" }}>
          <h2>Formik Registration Form</h2>

          <label htmlFor="username">Username</label>
          <Field id="username" name="username" placeholder="jdoe" />
          <ErrorMessage name="username" component="small" style={{ color: "crimson" }} />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" placeholder="jdoe@example.com" />
          <ErrorMessage name="email" component="small" style={{ color: "crimson" }} />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" placeholder="••••••••" />
          <ErrorMessage name="password" component="small" style={{ color: "crimson" }} />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting…" : "Register"}
          </button>

          {status?.success && <p style={{ color: "green" }}>{status.success}</p>}
          {status?.error && <p style={{ color: "crimson" }}>{status.error}</p>}
        </Form>
      )}
    </Formik>
  );
}
