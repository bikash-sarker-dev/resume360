import React from 'react'
import { useParams } from 'react-router'
import TemplateOne from '../components/DefaultTemplates/TemplateOne'
import { StepperForCustomTemplate } from '../components/CustomTemplate/StepperForCustomTemplate'
import { CustomTemplate1 } from '../components/CustomTemplate/CustomTemplates/CustomTemplate1'
import { useFormData } from '../components/CustomTemplate/FormDataProvider'

export const CustomTemplate = () => {
  
  return (
    <div className='py-24  container mx-auto'>
        <h1 className="text-4xl text-black text-center">
        CustomTemplate
        </h1>
        <div className='flex flex-row '>
            <div className='w-1/2  '>
                <StepperForCustomTemplate></StepperForCustomTemplate>
            </div>
            <div className=' w-1/2'>
         <CustomTemplate1/>
            </div>
        </div>
    </div>
  )
}
