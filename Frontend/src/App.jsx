import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from "./context/AuthProvider"
import { Route, Routes, Navigate } from "react-router-dom"
import {Toaster} from "react-hot-toast"
const App = () => {
  const [authUser] = useAuth()

  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/login"
        element={!authUser ? <Login /> : <Navigate to="/" />}
      />

      <Route
        path="/signup"
        element={!authUser ? <Signup /> : <Navigate to="/" />}
      />
    </Routes>
    <Toaster/>
    </>
  )
}

export default App