// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  let { loginSetup, googleSign } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  let handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    try {
      await loginSetup(email, password);
      navigate(from);
    } catch (error) {
      console.log("Login Error", error);
    }
  };
  let handleGoogle = async () => {
    try {
      await googleSign();

      alert("Google sing in successfull");
    } catch (error) {
      console.log("Error in Google Sing In", error);
    }
  };
  return (
    <div className="flex min-h-screen ">
      <div className="m-auto bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl">
        <motion.div
          className="w-full md:w-3/5 p-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-left font-bold">
            <span className="text-purple-500">Team</span>Bridge
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-purple-500 mb-2">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-purple-500 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <motion.button
                className=" border-gray-200  p-3 mx-1   transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              ></motion.button>
            </div>
            <p className="text-[#000000] opacity-70 my-3 text-center">
              or use your email account
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
                <HiOutlineMail className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
                <RiLockPasswordLine className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <motion.button
                type="submit"
                className="border-2 border-purple-500 text-purple-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-purple-500 hover:text-white transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </form>
            <div className="ml-44 mt-10">
              <button
                onClick={handleGoogle}
                className="border-2 border-purple-500 text-purple-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-purple-500 hover:text-white transition duration-300 "
              >
                {" "}
                GoogleSign{" "}
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-2/5 bg-purple-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            Fill up personal information and start journey with us.
          </p>
          {/* <Link to="/register"> */}
          <Link to={"/registration"}>
            <motion.button
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </Link>

          {/* </Link> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
