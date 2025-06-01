import { useState } from 'react'
import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ViewPaste from './Components/ViewPaste'
import Pastes from './Components/Pastes'
import { useEffect } from 'react'
// import tailwindcss from '@tailwindcss/vite'

const router = createBrowserRouter(

  [
    {
      path: '/',
      element:
        <div>
            <Navbar/>
            <Home/>
        </div>
    },

    {
      path: '/pastes',
      element:
        <div>
          <Navbar />
          <Pastes />

        </div>
    },
    {
      path: '/pastes/:id',
      element:
        <div>
          <Navbar />
          <ViewPaste />

        </div>
    },
  ]
)
function App() {



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
