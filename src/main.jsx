import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

// the createBrowserRouter function accepts an array of objects
// each object represents a page(route)
// the path property represents the route and its name
// (e.g "/" is for the homepage and /"/login" represents the /login page)
// the element property represents the top-level component that is for the specific route
// e.g <App> component is for the homepage
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
