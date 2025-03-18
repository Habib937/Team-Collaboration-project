import React from "react";

const BlogPage = () => {
  return (
    <div className="py-10 bg-base-200">
    <div className="container mx-auto px-4">
      {/* Section Title */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">Effective Team Collaboration</h3>
        <p className="text-gray-500 mt-2">
          Discover the best strategies to enhance teamwork, improve 
          communication, and boost productivity in a collaborative work environment.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co.com/gFcQq0Hm/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working-1.jpg"
              alt="Team Collaboration"
              className="w-full h-64 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center">
              <span className="badge badge-primary text-white px-3 py-1">
                Teamwork
              </span>
              <span className="ml-2 text-sm text-gray-500">March 12, 2025</span>
            </div>
            <h5 className="card-title mt-2">
              How to Build a Strong Collaborative Culture
            </h5>
            <p className="text-gray-600">
              Learn the key elements that create a productive and positive teamwork environment...
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co.com/fVRsZLtN/pic-2-1.jpg"
              alt="Remote Teamwork"
              className="w-full h-64 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center">
              <span className="badge badge-primary text-white px-3 py-1">
                Remote Work
              </span>
              <span className="ml-2 text-sm text-gray-500">March 15, 2025</span>
            </div>
            <h5 className="card-title mt-2">
              Best Tools for Remote Team Collaboration
            </h5>
            <p className="text-gray-600">
              Explore the top collaboration tools that help remote teams stay connected and productive...
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co.com/4ZMvB37x/pic-3-1.jpg"
              alt="Communication"
              className="w-full h-64 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center">
              <span className="badge badge-primary text-white px-3 py-1">
                Communication
              </span>
              <span className="ml-2 text-sm text-gray-500">March 18, 2025</span>
            </div>
            <h5 className="card-title mt-2">
              Improving Communication in a Team Environment
            </h5>
            <p className="text-gray-600">
              Understand how clear communication can eliminate misunderstandings and improve teamwork...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BlogPage;
