import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:8000/userlist", {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      age: data.age,
    });
  };

  return (
    <div className="formwrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Firstname</label>
        <br />
        <input {...register("firstName")} />
        <br />
        <label>Lastname</label>
        <br />
        <input {...register("lastName")} />
        <br />
        <label>Email</label>
        <br />
        <input type="email" {...register("email")} />
        <br />
        <label>Age</label>
        <br />
        <input type="number" {...register("age")} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
