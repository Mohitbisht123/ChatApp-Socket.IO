import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/signup`,
        userInfo,
        {
          withCredentials: true,
        }
      );

      console.log("Signup Response:", response.data);

      toast.success("Signup successful");

      localStorage.setItem(
        "ChatApp",
        JSON.stringify(response.data.user)
      );

      setAuthUser(response.data.user);

    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.error || "Signup failed"
      );
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950">

      {/* LEFT: form, hugs left edge */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 lg:px-16 py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm space-y-5"
        >
          <div className="space-y-1 mb-2">
            <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-white">Create your account</h1>
            <p className="text-sm text-slate-400">Join the conversation — it takes a minute.</p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full bg-slate-800/60 border border-white/10 focus:border-violet-400 outline-none rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-red-400 text-xs mt-1 block">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-xs text-slate-400 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-slate-800/60 border border-white/10 focus:border-violet-400 outline-none rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-400 text-xs mt-1 block">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-xs text-slate-400 mb-1 block">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full bg-slate-800/60 border border-white/10 focus:border-violet-400 outline-none rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-400 text-xs mt-1 block">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-xs text-slate-400 mb-1 block">Confirm password</label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full bg-slate-800/60 border border-white/10 focus:border-violet-400 outline-none rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors"
                {...register("confirmPassword", {
                  required: true,
                  validate: validatePasswordMatch,
                })}
              />
              {errors.confirmPassword && (
                <span className="text-red-400 text-xs mt-1 block">{errors.confirmPassword.message}</span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-500 hover:bg-violet-400 text-white font-medium py-2.5 rounded-xl transition-colors cursor-pointer shadow-lg shadow-violet-500/20"
          >
            Create account
          </button>

          <p className="text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link to="/login" className="text-violet-400 hover:text-violet-300 font-medium">
              Log in
            </Link>
          </p>
        </form>
      </div>

      {/* RIGHT: chat mockup, hugs right edge, full height */}
      <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-violet-600 via-indigo-700 to-slate-900 items-center justify-center overflow-hidden px-12">

        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative w-full max-w-xs">

          <div className="absolute -top-6 -left-4 bg-white/95 rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2 z-10">
            <div className="relative w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-xs font-semibold text-violet-700">
              RK
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-800">Riya K.</p>
              <p className="text-[10px] text-emerald-600">Active now</p>
            </div>
          </div>

          <div className="bg-slate-950/80 backdrop-blur border border-white/10 rounded-2xl p-4 shadow-2xl mt-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-violet-500" />
              <div>
                <p className="text-sm font-medium text-white">Team Design</p>
                <p className="text-[11px] text-violet-300">4 members online</p>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-start">
                <div className="bg-white/10 text-slate-100 text-xs px-3 py-2 rounded-2xl rounded-bl-sm max-w-[80%]">
                  Loved the new mockup 🔥
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-violet-500 text-white text-xs px-3 py-2 rounded-2xl rounded-br-sm max-w-[80%]">
                  Thanks! Pushed the update just now
                </div>
              </div>
              <div className="flex justify-start items-center gap-1 pl-1 pt-1">
                <span className="w-1.5 h-1.5 bg-violet-300/70 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-violet-300/70 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-violet-300/70 rounded-full animate-bounce" />
              </div>
            </div>
          </div>

          <div className="flex -space-x-2 mt-5 ml-2">
            {["A", "M", "S", "J"].map((letter, i) => (
              <div
                key={i}
                className="relative w-8 h-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-violet-400 to-fuchsia-400 flex items-center justify-center text-[11px] font-semibold text-white"
              >
                {letter}
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-slate-900" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-white/10 flex items-center justify-center text-[10px] text-white/80">
              +6
            </div>
          </div>

          <p className="text-center text-white/70 text-xs mt-6">
            Real-time messaging, presence and typing indicators — built in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;