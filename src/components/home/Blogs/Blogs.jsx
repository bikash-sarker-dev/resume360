import React, { useEffect, useState } from 'react'
import SectionHead from '../../header/section-head/SectionHead'


export const Blogs = () => {
const [Blogs,setBlogs]=useState([])
        useEffect(
          ()=>{
            fetch('/blogs.json')
            .then(res=>res.json())
            .then(data=>{
                setBlogs(data.blogs)
                 
            })
    
          },[]
        )
  return (
    <div className='container mx-auto py-16'>
        <div className='text-center mb-6'>
     
 
   <SectionHead title={"Latest Insights & Career Tips"} 
   subTitle={`Stay updated with expert advice on resume writing, job searching, and career growth. 
    Explore trending topics to boost your professional journey`}/>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-8'>
            {
                Blogs.map(blog=><div key={blog.id} className="card bg-base-100 shadow-sm">
                    <figure className='hover:scale-102 transition-transform duration-300 ease-in-out'>
                      <img className='h-[250px] object-cover w-full'
                        src={blog.thumbnail}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body flex flex-col justify-between space-y-2">
                      <h2 className="card-title ">{blog.title}</h2>
                      <p>{blog.description}</p>
                      <div className="card-actions ">
                      <div className="w-12 h-12  rounded-full mr-1">
      <img className='h-full w-full object-cover rounded-full' src={blog.authorAvatar} />
    </div>
                        <div>
                            <p className='font-semibold'>{blog.author}</p>
                            <p className=' font-semibold text-gray-500'>{blog.date}</p>
                        </div>
                        
                      </div>
                    </div>
                  
                  </div>)
            }
        </div>
    </div>
  )
}
