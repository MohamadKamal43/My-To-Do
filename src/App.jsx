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
       viewBox="0 0 384 512"
        svgPath="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
      color="blue"
      />

      <RouterProvider router={router} />
    </div>
  );
}
