import { useForm, type SubmitHandler } from "react-hook-form";
import type { UserInterface, LoginInterface } from "../../types/userTypes";
import Label from "../atoms/Label";
import { toast } from "react-toastify";

export default function LoginForm({ onLogin }: LoginInterface) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserInterface>();

  const onSubmit: SubmitHandler<UserInterface> = (value) => {
    const hardCodeUser = {
      username: "admin",
      password: "admin123",
    };

    if (
      value.username === hardCodeUser.username &&
      value.password === hardCodeUser.password
    ) {
      onLogin();
      toast.success("Login success", {
        position: "top-right",
        autoClose: 2200,
      });
      reset();
    } else {
      toast.error("Incorrect username or password!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

        <div className="mb-5">
          <Label title="Username" />
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: "Username wajib diisi" })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mb-2">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-5">
          <Label title="Password" />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password wajib diisi" })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-2">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-br from-gray-950 via-gray-600 to-gray-950 text-white font-semibold py-2 rounded-md transition-all duration-200 cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
