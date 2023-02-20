import { useState } from 'react'
import {createHashRouter, RouterProvider} from "react-router-dom"
import './App.css'
import SetAvatar from './Components/SetAvatar'
import Chat from './Pages/Chat'
import Login from './Pages/Login'
import Register from "./Pages/Register"

const router = createHashRouter([
  {
    path: '/',
    element: <Chat />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/reg',
    element: <Register />
  },
  {
    path: '/setAvatar',
    element: <SetAvatar />
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
