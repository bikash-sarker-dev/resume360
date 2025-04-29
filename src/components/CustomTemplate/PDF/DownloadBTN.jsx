import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CustomTemplate2PDF } from './CustomTemplate2PDF';
import { useFormData } from '../FormDataProvider';
import { CustomTemplate1PDF } from './CustomTemplate1PDF';

export const DownloadBTN = ({pageId}) => {
    const {formData}=useFormData()
    const renderTemplate = () => {
        if (pageId === 'CV3') {
          return <CustomTemplate1PDF formData={formData} />;
        } else if (pageId === 'resume2') {
          return <CustomTemplate2PDF formData={formData} />;
        } else {
          return <CustomTemplate3PDF formData={formData} />;
        }
      };
  return (
    <div> <PDFDownloadLink
    document={renderTemplate()}
    fileName="custom-template.pdf"
    className="btn bg-r-secondary text-white py-2 px-4 rounded"
  >
    {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
  </PDFDownloadLink></div>
  )
}
