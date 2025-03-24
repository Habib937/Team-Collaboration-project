import React from "react";

const BlogPage = () => {
  const blodCard = [
    {
      image:
        "https://i.ibb.co.com/gFcQq0Hm/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working-1.jpg",
      date: "March 12, 2025",
      title: "How to Build a Strong Collaborative Culture",
      discription:
        "Learn the key elements that create a productive and positive teamwork environment",
    },
    {
      image: "https://i.ibb.co.com/fVRsZLtN/pic-2-1.jpg",
      date: "March 15, 2025",
      title: "Best Tools for Remote Team Collaboration",
      discription:
        "  Explore the top collaboration tools that help remote teams stay connected and productive...",
    },
    {
      image: "https://i.ibb.co.com/4ZMvB37x/pic-3-1.jpg",
      date: "March 18, 2025",
      title: "Improving Communication in a Team Environment",
      discription:
        " Understand how clear communication can eliminate misunderstandings and improve teamwork...",
    },
  ];

  return (
    <div className="py-10 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold">Effective Team Collaboration</h3>
          <p className="text-gray-500 mt-2">
            Discover the best strategies to enhance teamwork, improve
            communication, and boost productivity in a collaborative work
            environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blodCard.map((blog, index) => (
            <div key={index} className="card bg-base-100 shadow-xl p-5">
              <figure>
                <img
                  src={blog.image}
                  alt="Team Collaboration"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center">
                  <span className="badge badge-primary text-white px-3 py-1">
                    Teamwork
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    {blog.date}
                  </span>
                </div>
                <h5 className="card-title mt-2">{blog.title}</h5>
                <p className="text-gray-600">{blog.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
