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
                className="btn"
            >
                {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
            </PDFDownloadLink>

            <button
                onClick={() => generateDocx(resumeData)}
                className="btn bg-blue-500 text-white rounded px-4 py-2"
            >
                Download DOCX
            </button>
        </div>
    );
};

export default ResumeDownload;
