import React, { useState } from "react";
import Login from "../../components/login/Login";

export default function LoginContainer() {
  const [values, setValues] = useState({ email: "", password: "" });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const hadleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    // setEmail(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Login
          htmlfor="email"
          label="email"
          type="email"
          id="email"
          name="email"
          value={values.email}
          hadleChange={hadleChange}
        />

        <Login
          htmlfor="password"
          label="password"
          type="password"
          id="password"
          name="password"
          value={values.password}
          hadleChange={hadleChange}
        />
        <button className="bg-red-600 rounded-l p-2 ">Submit</button>
      </form>
    </div>
  );
}
