import React from 'react';

const UserProject = () => {

    const projects = [
        {
          name: "Task Manager",
          title: "Task Management Web Application",
          liveLink: "https://your-live-link.com",
          clientRepo: "https://github.com/yourname/task-client",
          serverRepo: "https://github.com/yourname/task-server",
          features: [
            "User Authentication",
            "Real-time Updates",
            "Drag and Drop Tasks",
            "Responsive Design",
          ],
        },
        {
          name: "Blog Platform",
          title: "Modern Blogging Platform",
          liveLink: "https://your-blog-link.com",
          clientRepo: "https://github.com/yourname/blog-client",
          serverRepo: "https://github.com/yourname/blog-server",
          features: [
            "JWT Auth",
            "Markdown Editor",
            "Comment System",
            "SEO Friendly",
          ],
        },
      ];

      
    return (
        <section className="max-w-5xl xl:w-full mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
  
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-sm w-full rounded-xl p-6 mb-6 space-y-4 transition hover:shadow-md"
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">{project.name}</h3>
              <p className="text-gray-700">{project.title}</p>
            </div>
  
            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 bg-green-100 text-r-text rounded-full text-sm hover:bg-green-700 transition"
              >
                Live Site
              </a>
              <a
                href={project.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 bg-blue-100 text-r-text rounded-full text-sm hover:bg-blue-700 transition"
              >
                Client Repo
              </a>
              <a
                href={project.serverRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 bg-gray-100 text-r-text rounded-full text-sm hover:bg-gray-800 transition"
              >
                Server Repo
              </a>
            </div>
  
            <div className="flex flex-col gap-2 mt-3">
              {project.features.map((feature, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    );
};

export default UserProject;