import { useForm } from "react-hook-form";

function InstantErrorFeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onChange" // instant validation
  });

  const onSubmit = (data) => {
    alert("Form Submitted Successfully!");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* Email Field */}
      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email format"
            }
          })}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters required"
            }
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>

    </form>
  );
}

export default InstantErrorFeedbackForm;
