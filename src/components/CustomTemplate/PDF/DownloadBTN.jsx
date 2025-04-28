import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CustomTemplate2PDF } from './CustomTemplate2PDF';
import { useFormData } from '../FormDataProvider';

export const DownloadBTN = () => {
    const {formData}=useFormData()
  return (
    <div> <PDFDownloadLink
    document={<CustomTemplate2PDF formData={formData} />}
    fileName="custom-template.pdf"
    className="btn bg-r-secondary text-white py-2 px-4 rounded"
  >
    {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
  </PDFDownloadLink></div>
  )
}
