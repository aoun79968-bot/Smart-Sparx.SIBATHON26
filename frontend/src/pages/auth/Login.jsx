import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      alert("Login Failed!");
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Don't have account?{" "}
        <button onClick={() => navigate("/register")}>Register</button>
      </p>
    </div>
  );
}