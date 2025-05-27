import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import PrivateRoute from "./PrivateRoute";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: '/',
            element: <PrivateRoute><HomePage/></PrivateRoute>,
        },
        {
            path: '/signup',
            element: <SignupPage/>,
        },
        {
            path: '/login',
            element: <LoginPage/>
        },
        {
            path: '/profile',
            element:<PrivateRoute> <ProfilePage/></PrivateRoute>,
        },
        {
            path: '/settings',
            element: <SettingsPage/>
        }
      ]
    },
  ]);
  export default router