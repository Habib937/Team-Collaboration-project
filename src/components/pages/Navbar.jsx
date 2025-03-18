import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
                    <Link className="hover:text-gray-500 text-xl font-semibold">
                        Contact
                    </Link>
                </div>

                return (
                <nav className="bg-gradient-to-r from-pink-300 to-purple-600 text-white p-4 shadow-md">
                    <div className="container mx-auto flex justify-between items-center">

                        <Link to="/" className="text-2xl font-bold">
                            TeamCollab
                        </Link>

                        <div className=" md:flex space-x-6">
                            <Link className="hover:text-gray-500  text-xl font-semibold">Dashboard</Link>
                            <Link className="hover:text-gray-500 text-xl font-semibold">Projects</Link>
                            <Link className="hover:text-gray-500 text-xl font-semibold">Contact</Link>
                        </div>

                        <div className=" md:flex space-x-4">
                            <input type="text" placeholder='Search' className='px-4 py-2 border border-white rounded-full' />
                            <button className="bg-white text-blue-600 px-4 py-2 rounded text-sm font-semibold">Login</button>
                        </div>

                    </div>


                </nav>
                )
                <div className=" md:flex space-x-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 border border-white rounded-full"
                    />
                    <Link to={"/login"}>
                        <button className="bg-white text-blue-600 px-4 py-2 rounded text-sm font-semibold">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
