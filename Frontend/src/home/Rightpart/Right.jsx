import React from 'react';
import Chatuser from './Chatuser';
import Messages from './Messages';
import Typesend from './Typesend';
import useConversation from '../../zustand/useConversation';
import { useAuth } from '../../context/AuthProvider.jsx';

const Right = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="flex flex-col h-full w-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="flex flex-col h-full w-full border border-white bg-slate-900 text-gray-300">
          <Chatuser />

          <div
            className="flex-1 overflow-y-auto no-scrollbar"
            style={{ maxHeight: "calc(92vh - 8vh)" }}
          >
            <Messages />
          </div>

          <Typesend />
        </div>
      )}
    </div>
  );
};

export default Right;

const NoChatSelected = () => {
  const { authUser } = useAuth();

  return (
    <div className="flex h-full items-center justify-center text-white">
      <h1>
        Welcome <span>{authUser?.fullname}</span>
        <br />
        No chat selected, please start conversation by selecting someone.
      </h1>
    </div>
  );
};