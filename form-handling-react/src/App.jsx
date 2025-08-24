import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikRegistrationForm from "./components/formikForm.js";

export default function App() {
  return (
    <div style={{ padding: "1.5rem", display: "grid", gap: "2rem" }}>
      <RegistrationForm />
      <hr />
      <FormikRegistrationForm />
    </div>
  );
}
