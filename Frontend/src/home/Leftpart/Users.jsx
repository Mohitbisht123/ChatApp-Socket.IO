import React from 'react'
import User from './User';
import useGetAllUsers from '../../context/useGetAllUseres';

const Users = () => {
  const [allUsers,loading]=useGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      <h1 className="px-6 py-2 mx-2 mt-2 text-white font-semibold bg-slate-800/60 rounded-lg text-sm">Messages</h1>
      <div 
  className="py-2 flex-1 overflow-y-auto no-scrollbar"
  style={{ maxHeight: "calc(84vh - 10vh)" }}
>
        {allUsers.map((user,index)=>(
          <User key={index} user={user}/>
        ))}
      </div>
    </div>
  );
}

export default Users