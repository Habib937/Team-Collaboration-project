import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";


const MainLayout = () => {
    const {theme} = useThemeStore()
    const {authUser, checkAuth,isCheckingAuth, onlineUsers} =  useAuthStore()
    
    useEffect(() => {
        checkAuth()
    }, [checkAuth])
  
    if(isCheckingAuth && !authUser) return (
        <div className="flex items-center justify-center h-screen">
            <Loader className="size-10 animate-spin"/>
        </div>
    )
    return (
        
        <div data-theme={theme}>
          <Navbar ></Navbar>
          <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;