import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Route/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import AddCoffee from './Pages/Add Coffee/AddCoffee.jsx';
import UpdateCoffee from './Pages/UpdateCoffee/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addcoffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"/updatecoffee",
        element:<UpdateCoffee></UpdateCoffee>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
