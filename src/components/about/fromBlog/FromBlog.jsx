

import React, { useEffect, useState } from 'react';

const FromBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/advice.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.advices);
      });
  }, []);

  return (
    <div className='container mx-auto py-16 px-4'>
      <h1 className='text-2xl font-bold mb-2'>From the Blog</h1>
      <p className='text-gray-600 mb-8'>Learn how to grow your business with our expert advice.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src={blog.image} alt={blog.title} className="w-full h-72 object-center grayscale" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 text-white ">
                <p className="text-sm">{blog.date} - {blog.name}</p>
                <h2 className="text-lg font-semibold truncate">{blog.title}</h2>
                <p className="text-sm truncate">{blog.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FromBlog;
