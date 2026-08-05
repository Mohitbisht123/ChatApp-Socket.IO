import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../context/useSendMessage';

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    if (!message.trim()) return;

    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-2 h-[8vh] bg-slate-900 border-t border-white/10 items-center">
        <div className="w-[70%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-white/10 bg-slate-800/60 focus:border-violet-400 rounded-xl outline-none px-4 py-2.5 w-full text-white placeholder-slate-500 text-sm transition-colors"
          />
        </div>

        <button type="submit" disabled={loading}>
          <IoMdSend className="text-2xl text-violet-400 hover:text-violet-300 duration-300" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;