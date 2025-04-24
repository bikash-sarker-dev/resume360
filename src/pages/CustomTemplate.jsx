import React from 'react'
import { useParams } from 'react-router'
import TemplateOne from '../components/DefaultTemplates/TemplateOne'
import { StepperForCustomTemplate } from '../components/CustomTemplate/StepperForCustomTemplate'
import { CustomTemplate1 } from '../components/CustomTemplate/CustomTemplates/CustomTemplate1'

export const CustomTemplate = () => {
   
  return (
    <div className='py-24  container mx-auto'>
        <h1 className="text-4xl text-black text-center">
        CustomTemplate
        </h1>
        <div className='flex flex-row bg-amber-300'>
            <div className='w-1/2 bg-red-500 '>
                <StepperForCustomTemplate></StepperForCustomTemplate>
            </div>
            <div className='bg-red-800'>
         <CustomTemplate1/>
            </div>
        </div>
    </div>
  )
}
