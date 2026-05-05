import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    alert("Form Submitted ✅");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* Name */}
      <input
        placeholder="Name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      {/* Email */}
      <input
        placeholder="Email"
        {...register("email", {
          required: "Email is required"
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Minimum 6 characters"
          }
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      {/* Submit */}
      <button type="submit">Submit</button>

    </form>
  );
}

export default RegisterForm;
