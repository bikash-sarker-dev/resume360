import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { generateDocx } from './generateDocx';
import { useContext, useState } from 'react';
import { ResumeContext } from '../../../contextApi/resume-context/ResumeContext';
import useAxiosPublic from '../../../hooks/useAxiosPublic'; // adjust path as needed

const ResumeDownload = () => {
    const { resumeData } = useContext(ResumeContext);
    const axiosPublic = useAxiosPublic();
    const [isSaving, setIsSaving] = useState(false);
    const [saveStatus, setSaveStatus] = useState('');

    const handleSaveResume = async () => {
        setIsSaving(true);
        setSaveStatus('');

        try {
            const response = await axiosPublic.post('/resume', resumeData);

            if (response.status === 200 || response.status === 201) {
                setSaveStatus('✅ Resume saved successfully!');
            } else {
                setSaveStatus('⚠️ Failed to save resume.');
            }
        } catch (error) {
            console.error('Error saving resume:', error);
            setSaveStatus('❌ Error saving resume.');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-4 flex-wrap">
                <PDFDownloadLink
                    document={<ResumePDF resumeData={resumeData} />}
                    fileName={`${resumeData?.personalInfo?.fullName || 'resume'}.pdf`}
                    className="rounded-full bg-r-primary text-white py-2 px-6 transition duration-200"
                >
                    {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
                </PDFDownloadLink>

                <button
                    onClick={() => generateDocx(resumeData)}
                    className="rounded-full bg-r-primary text-white py-2 px-6 transition duration-200"
                >
                    Download DOCX
                </button>

                <button
                    onClick={handleSaveResume}
                    disabled={isSaving}
                    className="rounded-full bg-green-600 text-white py-2 px-6 transition duration-200 disabled:opacity-50"
                >
                    {isSaving ? 'Saving...' : 'Save Resume'}
                </button>
            </div>

            {saveStatus && (
                <p className="text-sm text-gray-700">{saveStatus}</p>
            )}
        </div>
    );
};

export default ResumeDownload;
