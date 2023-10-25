import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './screens/Home.tsx'
import Profile from './screens/Profile.tsx'
import Followers from './screens/Followers.tsx'
import Following from './screens/Following.tsx'
import Repositories from './screens/Repositories.tsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: ':profile',
        element: <Profile />,
        // children: 
      },
      {
        path: ':profile/followers',
        element: <Followers />
      },
      {
        path: ':profile/following',
        element: <Following />
      },
      {
        path: ':profile/repositories',
        element: <Repositories />

      }
    ],
  },


])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)
