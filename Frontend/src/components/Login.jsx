import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {

  const [, setAuthUser] = useAuth();

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

    axios.post(`${import.meta.env.VITE_API_URL}/user/login`, userInfo, {
      withCredentials: true
    })
      .then((response) => {
        console.log("FULL RESPONSE:", response);
        console.log("DATA:", response.data);
        toast.success("login successful");

        localStorage.setItem(
          "ChatApp",
          JSON.stringify(response.data.user)
        );

        setAuthUser(response.data.user);
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
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-slate-900/70 backdrop-blur-xl border border-white/10 shadow-2xl shadow-indigo-950/50 px-8 py-8 rounded-2xl space-y-5"
      >
        <div className="text-center space-y-1">
          <div className="mx-auto w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">
            Chat <span className="text-violet-400">App</span>
          </h1>
          <p className="text-sm text-slate-400">Welcome back, log in to continue</p>
        </div>

        <div className="space-y-3">
          <label className="flex items-center gap-2 bg-slate-800/60 border border-white/10 rounded-xl px-3.5 py-2.5 focus-within:border-violet-400 transition-colors">
            <svg className="h-4 w-4 text-slate-400 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-transparent outline-none text-white placeholder-slate-500 text-sm w-full"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-400 text-xs pl-1">This field is required</span>
          )}

          <label className="flex items-center gap-2 bg-slate-800/60 border border-white/10 rounded-xl px-3.5 py-2.5 focus-within:border-violet-400 transition-colors">
            <svg className="h-4 w-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <input
              type="password"
              placeholder="Password"
              required
              className="bg-transparent outline-none text-white placeholder-slate-500 text-sm w-full"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-400 text-xs pl-1">This field is required</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-violet-500 hover:bg-violet-400 text-white font-medium py-2.5 rounded-xl transition-colors cursor-pointer shadow-lg shadow-violet-500/20"
        >
          Login
        </button>

        <p className="text-center text-sm text-slate-400">
          New user?{" "}
          <Link to="/signup" className="text-violet-400 hover:text-violet-300 font-medium">
            Signup
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login;