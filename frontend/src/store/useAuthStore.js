import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import {io} from 'socket.io-client'



const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigninUp: false,
    isLoggingIn: false,
    isUpdateProfile: false,
    onlineUsers: [],
    isCheckingAuth: true,
    socket: null,
    checkAuth: async () => {
        try {
          const res = await axiosInstance.get("/auth/check");
    
          set({ authUser: res.data });
          get().connectSocket();
        } catch (error) {
          console.log("Error in checkAuth:", error);
          set({ authUser: null });
        } finally {
          set({ isCheckingAuth: false });
        }
      },
    signup: async(data) => {
        set({isSigninUp: true})
        try {
            const res = await axiosInstance.post('/auth/signup', data)
            set({authUser: res.data})
            toast.success("Account Create Successfully")
            get().connectSocket()
        } catch (error) {
            toast.error(error.response.data.message)
            
        }
        finally{
            set({isSigninUp: false})
        }
    },
    login: async(data) => {
        set({isLoggingIn: true})
        try {
            const res = await axiosInstance.post('/auth/login', data)
            set({authUser: res.data})
            toast.success("Login Successfully")
            get().connectSocket()
          
        } catch (error) {
            toast.error(error.response.data.message)
            
        }
        finally{
            set({isLoggingIn: false})
        }
    },
    logout: async() => {
        try {
            await axiosInstance.post('/auth/logout')
            set({authUser: null})
            toast.success("Logout Successfully");
            get().disconnectSocket();
            
        } catch (error) {
            toast.error(error);
        }
    },
    updateProfile: async (data) => {
        set({isUpdateProfile: true})
        try {
              const res = await axiosInstance.put('/auth/update-profile', data)
              set({authUser: res.data})
              toast.success('Profile updated successfully')
        } catch (error) {
            console.log("error in update profile:", error);
      toast.error(error.response.data.message);
        }
        finally {
            set({ isUpdatingProfile: false });
          }
    },
    connectSocket: () => {
        const {authUser} = get()
        if(!authUser || get().socket?.connected) return
      const socket = io(BASE_URL, {
        query: {
            userId: authUser._id,
        },
      })
      socket.connect()
      set({socket: socket})
      socket.on('getOnlineUsers', (userIds) => {
       set({onlineUsers: userIds})
      })

    },
    disconnectSocket: () => {
        if(get().socket?.connected) get().socket.disconnect()

    }
}))