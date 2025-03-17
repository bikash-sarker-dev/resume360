import React from 'react'

export const TemplateTab = ({title,  templates}) => {
   
  return (
    <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  pt-4'>
     {
         templates.map((template,idx)=> 
        <img key={idx} src={template.url} alt="" />)
     }
    </div>
   
  )
}
