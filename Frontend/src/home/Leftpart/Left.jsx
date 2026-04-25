import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Left = () => {
  return <div className="w-[30%] border border-white bg-black text-gray-300">
    <Search/>
   <div className="flex-1 overflow-y-auto no-scrollbar"  style={{ minHeight: "calc(84vh - 10vh)" }}>
         <Users/>
       </div>
    <Logout/>
  </div>
}

export default Left
