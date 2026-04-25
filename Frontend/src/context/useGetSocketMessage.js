import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import sound from "../assets/notification.mp3";

const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { addMessage, selectedConversation } = useConversation();

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      console.log("📩 Received:", newMessage);

      // ✅ only add if message belongs to current chat
      if (
        selectedConversation &&
        (newMessage.senderId === selectedConversation._id ||
         newMessage.receiverId === selectedConversation._id)
      ) {
        addMessage(newMessage);
      }

      // ✅ play sound ONLY when message arrives
      const notification = new Audio(sound);
      notification.play().catch(() => {});
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, addMessage, selectedConversation]);
};

export default useGetSocketMessage;