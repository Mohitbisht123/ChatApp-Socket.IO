import React from "react";

const Message = ({ message }) => {
  if (!message) return null;

  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
const myId = authUser?._id;

  const itsMe =
    message?.senderId?.toString() === myId?.toString();

  const createdAt = new Date(message.createdAt);

  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="px-4 py-1.5">
      <div className={`flex flex-col ${itsMe ? "items-end" : "items-start"}`}>
        <div
          className={`text-sm px-3.5 py-2 rounded-2xl max-w-[70%] ${
            itsMe
              ? "bg-violet-500 text-white rounded-br-sm"
              : "bg-slate-800 text-slate-100 rounded-bl-sm"
          }`}
        >
          {message.message}
        </div>

        <div className="text-[11px] text-slate-500 mt-1 px-1">
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default Message;