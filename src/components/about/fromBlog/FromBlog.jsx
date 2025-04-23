

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

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
      <h1 className='text-3xl font-bold mb-4'>From the Blog</h1>
      <p className='text-gray-600 mb-10 text-lg'>Learn how to grow your business with our expert advice.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative overflow-hidden">
              
              <motion.img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <div className="absolute bottom-0 left-0 right-0  bg-r-card bg-opacity-60 text-r-info p-4 h-40">
                <p className="text-sm">{blog.date} - {blog.name}</p>
                <h2 className="text-lg font-semibold">{blog.title}</h2>
                <p className="text-sm">{blog.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FromBlog;




