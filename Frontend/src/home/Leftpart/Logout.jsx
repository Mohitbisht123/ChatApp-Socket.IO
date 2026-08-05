import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const [, setAuthUser] = useAuth();

  const handleLogout = async () => {
    setLoading(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/user/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      localStorage.removeItem("ChatApp");

      setAuthUser(null);

      toast.success("Logged out successfully");

    } catch (error) {
      console.log("Error in Logout:", error);
      toast.error("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[10vh] flex items-center border-t border-white/10 bg-slate-950">
      <BiLogOutCircle
        className="text-4xl text-violet-400 hover:bg-violet-500/10 duration-300 cursor-pointer rounded-full p-2 ml-4"
        onClick={handleLogout}
      />
    </div>
  );
};

export default Logout;