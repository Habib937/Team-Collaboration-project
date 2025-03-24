import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function Navbar() {
  const { signOuts, user } = useAuth();
  const navigate = useNavigate();

  const handleSingOut = async () => {
    try {
      await signOuts();
      navigate("/login");
    } catch (error) {
      console.log("Error with singout", error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-pink-300 to-purple-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          TeamCollab
        </Link>

        <div className=" md:flex space-x-6">
          <Link className="hover:text-gray-500  text-xl font-semibold">
            Dashboard
          </Link>
          <Link
            to={"/blogPage"}
            className="hover:text-gray-500 text-xl font-semibold"
          >
            Blogs
          </Link>
          <Link
            to={"/aboutus"}
            className="hover:text-gray-500 text-xl font-semibold"
          >
            About Us
          </Link>
        </div>

        <div className=" md:flex space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-white rounded-full"
          />
          {user ? (
            <button
              onClick={handleSingOut}
              className="bg-white text-blue-600 px-4 py-2 rounded text-sm font-semibold"
            >
              logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="bg-white text-blue-600 px-4 py-2 rounded text-sm font-semibold">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
