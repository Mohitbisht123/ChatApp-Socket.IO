import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, setMessages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:4002/api/message/get/${selectedConversation._id}`,
          { withCredentials: true }
        );

        setMessages(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.log("Error in getting messages", error);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation, setMessages]);

  return { loading };
};

export default useGetMessage;