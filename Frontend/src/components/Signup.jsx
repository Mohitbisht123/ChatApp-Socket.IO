import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const Signup = () => {
    const [authUser,setAuthUser]=useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  // watch the password and confirm password fields
  const password = watch("password", "")
  const confirmPassword = watch("confirmPassword", "")

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match"
  }

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    }

    await axios.post("http://localhost:4002/user/signup", userInfo)
      .then((response) => {
        console.log("FULL RESPONSE:", response);
        console.log("DATA:", response.data);
        toast.success("signup successful");
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        console.log("ERROR:", error);
        if (error.response) {
          console.log("BACKEND ERROR:", error.response.data);
        }
        // ✅ FIXED LINE
        toast.error(error.response?.data?.error || "Signup failed");
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
          <h2 className="text-xl text-white font-bold">Signup</h2>
          <br />

          <div className="flex flex-col gap-5">
            {/* Fullname */}
            <input
              type="text"
              className="input validator"
              placeholder="Username"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}

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
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}

            {/* Confirm Password */}
            <input
              type="password"
              className="input validator"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: validatePasswordMatch,
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          {/* Text & Button */}
          <div className="flex justify-between">
            <p>
              Have an account?{" "}
              <Link to="/login" className="text-blue-500 underline cursor-pointer ml-1">
                Login
              </Link>
            </p>
            <input
              type="submit"
              value="Signup"
              className="text-white bg-green-500 px-2 py-1 cursor-pointer rounded-lg"
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup