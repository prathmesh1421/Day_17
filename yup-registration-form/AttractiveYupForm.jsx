import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function AttractiveYupForm() {

  // ✅ Yup Schema
  const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  const onSubmit = (data) => {
    alert("Registered Successfully 🎉");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">

      <input
        placeholder="Full Name"
        {...register("name")}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        placeholder="Email"
        {...register("email")}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Register</button>

    </form>
  );
}

export default AttractiveYupForm;
