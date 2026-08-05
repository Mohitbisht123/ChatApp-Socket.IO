import React, { useRef, useEffect } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage";
import Loading from "../../components/Loading.jsx";
import useConversation from "../../zustand/useConversation";
import useGetSocketMessage from "../../context/useGetSocketMessage.js";

const Messages = () => {
  const { loading } = useGetMessage();

  useGetSocketMessage();

  const { messages, selectedConversation } = useConversation();

  const lastMsgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  const safeMessages = Array.isArray(messages) ? messages : [];

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar bg-slate-900">
      {loading ? (
        <Loading />
      ) : (
        safeMessages.map((message, index, arr) => (
          <div
            key={message._id || index}
            ref={index === arr.length - 1 ? lastMsgRef : null}
          >
            <Message message={message} />
          </div>
        ))
      )}

      {!loading && selectedConversation && safeMessages.length === 0 && (
        <p className="text-center mt-[20%] text-slate-500 text-sm">
          Say Hi to start the conversation 👋
        </p>
      )}
    </div>
  );
};

export default Messages;