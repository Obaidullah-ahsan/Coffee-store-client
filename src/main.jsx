import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Route/Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import AddCoffee from "./Pages/Add Coffee/AddCoffee.jsx";
import UpdateCoffee from "./Pages/UpdateCoffee/UpdateCoffee.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Signin from "./Pages/Signin/Signin.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./Components/Users/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=> fetch('http://localhost:5000/user')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
