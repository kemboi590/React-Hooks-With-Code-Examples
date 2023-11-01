import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  // yup validation
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(" Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("firstName")}
        />
        <p>{errors.firstName?.message}</p>

        <input type="text" placeholder="Last name" {...register("lastName")} />
        <p>{errors.lastName?.message}</p>

        <input type="text" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        {/* for paswsword */}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        <p>{errors.password?.message}</p>

        {/* confirm password */}
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
