import { useState } from "react";
import axios from "axios";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, addMessage } = useConversation();

  const sendMessage = async (message) => {
    if (!selectedConversation?._id) return;

    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:4002/api/message/send/${selectedConversation._id}`,
        { message },
        { withCredentials: true }
      );

      addMessage(res.data); // ✅ correct
    } catch (error) {
      console.log("Error in sending message", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;