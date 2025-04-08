import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { generateDocx } from './generateDocx';
import { useContext } from 'react';
import { ResumeContext } from '../../../contextApi/resume-context/ResumeContext';


const ResumeDownload = () => {
    const { resumeData } = useContext(ResumeContext);
    return (
        <div className="flex gap-4 mt-4">
            <PDFDownloadLink
                document={<ResumePDF resumeData={resumeData} />}
                fileName={`${resumeData?.personalInfo?.fullName || 'resume'}.pdf`}
                className="self-start rounded-full bg-r-primary text-white py-2 px-6 transition duration-200"
            >
                {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
            </PDFDownloadLink>

            <button
                onClick={() => generateDocx(resumeData)}
                className="self-start rounded-full bg-r-primary text-white py-2 px-6 transition duration-200"
            >
                Download DOCX
            </button>
        </div>
    );
};

export default ResumeDownload;
