/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine, RiImageAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex min-h-screen ">
      <div className="m-auto bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row-reverse w-full max-w-4xl">
        <motion.div
          className="w-full md:w-3/5 p-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-left font-bold">
            <span className="text-purple-500">Team</span>Bridge
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-purple-500 mb-2">
              Create an Account
            </h2>
            <div className="border-2 w-10 border-purple-500 inline-block mb-2"></div>
            <div className="flex justify-center my-2"></div>
            <form className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
                <HiOutlineUser className="text-gray-400 m-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  required
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
                <HiOutlineMail className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  required
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
                <RiLockPasswordLine className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  required
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
                <RiImageAddLine className="text-gray-400 m-2" />
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="border-2 border-purple-500 text-purple-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-purple-500 hover:text-white transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </form>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-2/5 bg-purple-500 text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            If you already have an account, please sign in.
          </p>
          <Link to="/login">
            <motion.button
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
