import React from "react";

const UserLink = () => {
  const socialLinks = [
    {
      platform: "Portfolio",
      link: "http://localhost:5173/add-information",
    },
    {
      platform: "LinkedIn",
      link: "http://localhost:5173/add-information",
    },
    {
      platform: "GitHub",
      link: "http://localhost:5173/add-information",
    },
  ];
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Social Links
      </h2>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-100 text-blue-700 border border-blue-300 rounded-full hover:bg-blue-200 transition text-sm font-medium"
          >
            {item.platform}
          </a>
        ))}
      </div>
    </section>
  );
};

export default UserLink;
