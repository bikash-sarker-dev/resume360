import React from 'react'
import { useParams } from 'react-router'
import TemplateOne from '../components/DefaultTemplates/TemplateOne'
import { StepperForCustomTemplate } from '../components/CustomTemplate/StepperForCustomTemplate'
import { CustomTemplate1 } from '../components/CustomTemplate/CustomTemplates/CustomTemplate1'
import { useFormData } from '../components/CustomTemplate/FormDataProvider'
import { CustomeTemplate2 } from '../components/CustomTemplate/CustomTemplates/CustomeTemplate2'

export const CustomTemplate = () => {
  const { id } = useParams()

  console.log(id);
  const templateComponents={
    CV3:<CustomTemplate1/>,
    resume2:<CustomeTemplate2></CustomeTemplate2>
  }

  return (
    <div className='py-24  container mx-auto'>
        <h1 className="text-4xl text-black text-center">
        CustomTemplate
        </h1>
        <div className='flex flex-row my-16'>
            <div className='w-1/2  '>
                <StepperForCustomTemplate></StepperForCustomTemplate>
            </div>
            <div className=' w-1/2'>
      {/* {id==="CV3" &&   <CustomTemplate1/>}
      {id==="resume2" &&   <CustomTemplate1/>} */}
      {templateComponents[id] || <h1 className='text-center text-4xl Font-bold'>Not Available</h1>}
            </div>
        </div>
    </div>
  )
}
