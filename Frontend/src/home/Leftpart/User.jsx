import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === user._id;

  // ensure proper comparison
  const isOnline = onlineUsers?.includes(user._id?.toString());

  return (
    <div
      className={`duration-300 ${
        isSelected ? "bg-violet-500/15 border-l-2 border-violet-400" : "border-l-2 border-transparent"
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-6 py-3 hover:bg-white/5 duration-300 cursor-pointer">
        
        {/* Avatar with custom green dot */}
        <div className="relative">
          <img
            className="w-12 h-12 rounded-full ring-1 ring-white/10"
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            alt="user"
          />

          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950"></span>
          )}
        </div>

        {/* User info */}
        <div>
          <h1 className="font-semibold text-white">{user.fullname}</h1>
          <span className="text-sm text-slate-400">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default User;