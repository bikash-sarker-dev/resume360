import React from 'react'
import { useParams } from 'react-router'
import TemplateOne from '../components/DefaultTemplates/TemplateOne'
import { StepperForCustomTemplate } from '../components/CustomTemplate/StepperForCustomTemplate'
import { CustomTemplate1 } from '../components/CustomTemplate/CustomTemplates/CustomTemplate1'
import { useFormData } from '../components/CustomTemplate/FormDataProvider'
import { CustomeTemplate2 } from '../components/CustomTemplate/CustomTemplates/CustomeTemplate2'
import { CustomTemplate3 } from '../components/CustomTemplate/CustomTemplates/CustomTemplate3'

export const CustomTemplate = () => {
  const { id } = useParams()

 
  const templateComponents={
    CV3:<CustomTemplate1/>,
    resume2:<CustomeTemplate2></CustomeTemplate2>,
    CV5:<CustomTemplate3></CustomTemplate3>
  }

  return (
    <div className='py-24  container mx-auto'>
        <h1 className="text-4xl text-black text-center">
        CustomTemplate
        </h1>
        <div className='flex flex-row my-16 gap-4'>
            <div className='w-1/2  '>
                <StepperForCustomTemplate pageId={id}></StepperForCustomTemplate>
            </div>
            <div className=' w-1/2 '>
 
      {templateComponents[id] || <h1 className='text-center text-4xl Font-bold'>Not Available</h1>}
            </div>
        </div>
    </div>
  )
}
