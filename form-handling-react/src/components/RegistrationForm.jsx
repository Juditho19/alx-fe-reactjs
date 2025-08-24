import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  const validate = () => {
    const errs = {};
    if (!username.trim()) errs.username = "Username is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Email is invalid";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6) errs.password = "Password must be at least 6 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: false, success: "", error: "" });
    if (!validate()) return;

    try {
      setStatus((s) => ({ ...s, loading: true }));
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setStatus({ loading: false, success: `Registered! ID: ${data.id ?? "N/A"}`, error: "" });
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
    } catch (err) {
      setStatus({ loading: false, success: "", error: err.message || "Something went wrong" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: "2rem auto", display: "grid", gap: "0.75rem" }}>
      <h2>Controlled Registration Form</h2>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="jdoe"
      />
      {errors.username && <small style={{ color: "crimson" }}>{errors.username}</small>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="jdoe@example.com"
      />
      {errors.email && <small style={{ color: "crimson" }}>{errors.email}</small>}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
      />
      {errors.password && <small style={{ color: "crimson" }}>{errors.password}</small>}

      <button type="submit" disabled={status.loading}>
        {status.loading ? "Submitting…" : "Register"}
      </button>

      {status.success && <p style={{ color: "green" }}>{status.success}</p>}
      {status.error && <p style={{ color: "crimson" }}>{status.error}</p>}
    </form>
  );
}
