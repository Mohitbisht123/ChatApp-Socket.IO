import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider"; // ✅ added
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {

  const [, setAuthUser] = useAuth(); // ✅ same pattern as signup

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    }

    axios.post("http://localhost:4002/user/login", userInfo, {
  withCredentials: true
})
      .then((response) => {
        console.log("FULL RESPONSE:", response);
        console.log("DATA:", response.data);
        toast.success("login successful");

        localStorage.setItem("ChatApp", JSON.stringify(response.data));

        setAuthUser(response.data); // ✅ EXACT same as signup
      })
      .catch((error) => {
        console.log("ERROR:", error);
        if (error.response) {
          console.log("BACKEND ERROR:", error.response.data);
        }
        toast.error(error.response?.data?.error || "Login failed");
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-white px-6 py-2 rounded-md space-y-3 w-96"
        >
          <h1 className="text-2xl text-center">
            Chat <span className="text-green-500 font-semibold">App</span>
          </h1>
          <h2 className="text-xl text-white font-bold">Login</h2>
          <br />

          {/* Email */}
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="Email"
              required
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-500 text-sm">
              This field is required
            </span>
          )}

          {/* Password */}
          <input
            type="password"
            className="input validator"
            placeholder="Password"
            required
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              This field is required
            </span>
          )}

          {/* Text & Button */}
          <div className="flex justify-between">
            <p>
              New user?{" "}
              <Link to="/signup" className="text-blue-500 underline cursor-pointer ml-1">
                Signup
              </Link>
            </p>
            <input
              type="submit"
              value="Login"
              className="text-white bg-green-500 px-2 py-1 cursor-pointer rounded-lg"
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;