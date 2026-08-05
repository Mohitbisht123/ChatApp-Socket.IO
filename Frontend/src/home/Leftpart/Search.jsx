import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUseres";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="h-[10vh] border-b border-white/10 bg-slate-950">
      <div className="px-6 py-4">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            <label className="border border-white/10 bg-slate-800/60 focus-within:border-violet-400 rounded-xl p-3 flex items-center gap-2 w-[80%] transition-colors">
              <input
                type="text"
                className="grow outline-none bg-transparent text-white placeholder-slate-500 text-sm"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>

            <button type="submit">
              <FaSearch className="text-lg text-violet-400 p-2 w-11 h-11 hover:bg-violet-500/10 rounded-full duration-300 box-content" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;