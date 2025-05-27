
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";



const PrivateRoute = ({children}) => {
    const {isCheckingAuth, authUser} = useAuthStore()
    const location = useLocation()
    if(isCheckingAuth && !authUser) return (
        <div className="flex items-center justify-center h-screen">
            <Loader className="size-10 animate-spin"/>
        </div>
    )
    if(authUser){
        return children
    }
    
    return (
        <Navigate state={location.pathname} to = '/login'></Navigate>
    );
};

export default PrivateRoute;