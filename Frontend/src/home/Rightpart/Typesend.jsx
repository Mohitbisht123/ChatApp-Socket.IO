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
      <div className="flex space-x-2 h-[8vh] bg-gray-800 items-center">
        <div className="w-[70%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-700 rounded-xl outline-none px-4 py-3 w-full"
          />
        </div>

        <button type="submit" disabled={loading}>
          <IoMdSend className="text-3xl text-white" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;