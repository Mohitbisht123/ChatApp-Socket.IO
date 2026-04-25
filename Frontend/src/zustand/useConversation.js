import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  messages: [],

  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),

  setMessages: (messages) =>
    set({ messages }),

  // ✅ FIXED (force new reference)
  addMessage: (message) =>
    set((state) => ({
      messages: [...(state.messages || []), message],
    })),
}));

export default useConversation;