import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Chatuser = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const getonlineUsersStatus = (userId) => {
    return onlineUsers?.includes(userId) ? "online" : "offline";
  };

  if (!selectedConversation) {
    return (
      <div className="h-[8vh] flex items-center justify-center bg-slate-900 border-b border-white/10 text-slate-400">
        No user selected
      </div>
    );
  }

  const isOnline = onlineUsers?.includes(selectedConversation._id);

  return (
    <div className="flex space-x-3 items-center h-[8vh] bg-slate-900 border-b border-white/10 hover:bg-slate-800/60 duration-300 px-4">
      
      <div className="relative">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-white/10">
          <img
            className="w-full h-full object-cover"
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            alt="user"
          />
        </div>
        {isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900"></span>
        )}
      </div>

      <div>
        <h1 className="text-base font-medium text-white">
          {selectedConversation.fullname}
        </h1>

        <span className={`text-xs ${isOnline ? "text-emerald-400" : "text-slate-500"}`}>
          {getonlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
};

export default Chatuser;