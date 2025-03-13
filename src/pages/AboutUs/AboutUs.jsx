import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">About TeamBridge</h1>
            <p className="text-lg text-center mb-8">TeamBridge is an advanced workspace solution designed to enhance team collaboration and productivity.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                    <p>We aim to streamline teamwork with real-time communication, task management, and seamless collaboration tools.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc pl-5">
                        <li>Real-Time Chat</li>
                        <li>Task Management</li>
                        <li>File Sharing</li>
                        <li>Live Updates</li>
                    </ul>
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-semibold mb-2 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
                        <img src="https://demo.com" alt="Mr. Habib" className="w-24 h-24 border-2 mx-auto rounded-full mb-3" />
                        <h3 className="text-lg font-semibold">Mr. Habib</h3>
                        <p className="text-sm text-gray-600">Frontend Developer</p>
                        <div className="flex justify-center mt-2 space-x-3">
                            <a href="#" className="text-blue-700" target="_blank">LinkedIn</a>
                            <a href="#" className="text-gray-800" target="_blank">GitHub</a>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
                        <img src="https://demo.com" alt="Mr. Mohyet" className="w-24 h-24 border-2 mx-auto rounded-full mb-3" />
                        <h3 className="text-lg font-semibold">Mr. Mohyet</h3>
                        <p className="text-sm text-gray-600">Frontend Developer</p>
                        <div className="flex justify-center mt-2 space-x-3">
                            <a href="#" className="text-blue-700" target="_blank">LinkedIn</a>
                            <a href="#" className="text-gray-800" target="_blank">GitHub</a>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
                        <img src="https://demo.com" alt="Mr. Shehab" className="w-24 h-24 border-2 mx-auto rounded-full mb-3" />
                        <h3 className="text-lg font-semibold">Mr. Shehab</h3>
                        <p className="text-sm text-gray-600">Frontend Developer</p>
                        <div className="flex justify-center mt-2 space-x-3">
                            <a href="#" className="text-blue-700" target="_blank">LinkedIn</a>
                            <a href="#" className="text-gray-800" target="_blank">GitHub</a>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
                        <img src="https://demo.com" alt="Mr. Saidur" className="w-24 h-24 border-2 mx-auto rounded-full mb-3" />
                        <h3 className="text-lg font-semibold">Mr. Saidur</h3>
                        <p className="text-sm text-gray-600">Frontend Developer</p>
                        <div className="flex justify-center mt-2 space-x-3">
                            <a href="#" className="text-blue-700" target="_blank">LinkedIn</a>
                            <a href="#" className="text-gray-800" target="_blank">GitHub</a>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
                        <img src="https://demo.com" alt="Mr. Auntim" className="w-24 h-24 border-2 mx-auto rounded-full mb-3" />
                        <h3 className="text-lg font-semibold">Mr. Auntim</h3>
                        <p className="text-sm text-gray-600">Frontend Developer</p>
                        <div className="flex justify-center mt-2 space-x-3">
                            <a href="#" className="text-blue-700" target="_blank">LinkedIn</a>
                            <a href="#" className="text-gray-800" target="_blank">GitHub</a>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
                        <img src="https://demo.com" alt="Mr. Aupu" className="w-24 h-24 border-2 mx-auto rounded-full mb-3" />
                        <h3 className="text-lg font-semibold">Mr. Aupu</h3>
                        <p className="text-sm text-gray-600">Frontend Developer</p>
                        <div className="flex justify-center mt-2 space-x-3">
                            <a href="#" className="text-blue-700" target="_blank">LinkedIn</a>
                            <a href="#" className="text-gray-800" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;