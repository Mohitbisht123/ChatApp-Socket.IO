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
      <div className="h-[8vh] flex items-center justify-center bg-gray-800 text-white">
        No user selected
      </div>
    );
  }

  const isOnline = onlineUsers?.includes(selectedConversation._id);

  return (
    <div className="flex space-x-3 items-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300 px-4">
      
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-16 rounded-full">
          <img
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            alt="user"
          />
        </div>
      </div>

      <div>
        <h1 className="text-xl text-white">
          {selectedConversation.fullname}
        </h1>

        <span className="text-sm text-gray-300">
          {getonlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
};

export default Chatuser;