import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import RootLayout from "./Layout/RootLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import UnAuthorizedHOC from "./HOCS/UnAuthorizedHOC";
import ProtectedHOC from "./HOCS/ProtectedHOC";
import NotFound from "./pages/NotFound";
import ScrollToTop from "react-scroll-to-top";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "login",
          element: (
            <UnAuthorizedHOC>
              <Login />
            </UnAuthorizedHOC>
          ),
        },
        {
          path: "register",
          element: (
            <UnAuthorizedHOC>
              <Register />
            </UnAuthorizedHOC>
          ),
        },
        {
          path: "tasks",
          element: (
            <ProtectedHOC>
              <Tasks />
            </ProtectedHOC>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <ScrollToTop smooth 
       component={"Up"}
       style={
      {
        color:"white",
        background:"#155dfc",
        fontSize:"20px"
      }
       }
      />

      <RouterProvider router={router} />
    </div>
  );
}
