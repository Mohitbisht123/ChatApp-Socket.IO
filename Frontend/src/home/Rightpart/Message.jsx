import React from "react";

const Message = ({ message }) => {
  if (!message) return null;

  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const myId = authUser?._id || authUser?.user?._id;

  const itsMe =
    message?.senderId?.toString() === myId?.toString();

  const createdAt = new Date(message.createdAt);

  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="p-4">
      <div className={`chat ${itsMe ? "chat-end" : "chat-start"}`}>
        <div
          className={`chat-bubble text-white ${
            itsMe ? "bg-blue-500" : ""
          }`}
        >
          {message.message}
        </div>

        <div className="chat-footer text-xs opacity-70">
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default Message;