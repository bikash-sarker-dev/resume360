import { useContext, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF'; // resume0
import CustomTemplate1PDF from '../../CustomTemplate/PDF/CustomTemplate1PDF'; // resume1
import CustomTemplate2PDF from '../../CustomTemplate/PDF/CustomTemplate2PDF'; // resume2
import { generateDocx } from './generateDocx';
import { ResumeContext } from '../../../contextApi/resume-context/ResumeContext';
import { AuthContext } from '../../../contextApi/AuthenticationContext';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from 'react-router';

const ResumeDownload = () => {
    const { resumeData } = useContext(ResumeContext);
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { templateId } = useParams(); // <- Get templateId from route
    const [isSaving, setIsSaving] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const getThemeColor = (variableName) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variableName)?.trim();
    };

    const handleSaveResume = async () => {
        if (!user) {
            navigate('/login');
            return;
        }

        setIsSaving(true);
        const primaryColor = getThemeColor('--color-r-primary');

        try {
            const response = await axiosPublic.post('/resume', resumeData);

            if (response.status === 200 || response.status === 201) {
                setIsSaved(true);
                Cookies.remove('resumeData');
                Swal.fire({
                    icon: 'success',
                    title: 'Great job!',
                    text: 'All your resume information has been saved. You can now download it in PDF or DOCX format!',
                    confirmButtonColor: primaryColor,
                });
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again.',
                    confirmButtonColor: primaryColor,
                });
            }
        } catch (error) {
            console.error('Error saving resume:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Unable to save resume. Please try again later.',
                confirmButtonColor: primaryColor,
            });
        } finally {
            setIsSaving(false);
        }
    };

    // Map templateId to PDF component
    const pdfTemplateMap = {
        resume0: ResumePDF,
        resume1: CustomTemplate1PDF,
        resume2: CustomTemplate2PDF,
    };

    const SelectedPDF = pdfTemplateMap[templateId];

    if (!SelectedPDF) {
        return (
            <div className="text-center text-red-600 mt-12 font-semibold">
                Invalid template selected. Please go back and choose a valid template.
            </div>
        );
    }

    return (
        <div className="mt-6 p-6 flex flex-col justify-center">
            <p className="text-[--color-r-text] mb-4 text-center">
                Thank you for adding all your resume information. Please save your data first — then you’ll be able to download it.
            </p>

            <button
                onClick={handleSaveResume}
                disabled={isSaving || isSaved}
                className="rounded-full bg-r-primary hover:bg-r-accent hover:text-black text-white py-2 px-6 transition duration-200 disabled:opacity-50"
            >
                {!user
                    ? 'Do login before saving'
                    : isSaving
                        ? 'Saving...'
                        : isSaved
                            ? 'Resume Saved'
                            : 'Save Resume'}
            </button>

            <div className="flex flex-wrap gap-4 mt-4 justify-center">
                <PDFDownloadLink
                    document={<SelectedPDF resumeData={resumeData} />}
                    fileName={`${resumeData?.personalInfo?.fullName || 'resume'}.pdf`}
                    className={`rounded-full bg-r-primary text-white py-2 px-6 transition duration-200 ${!isSaved ? 'opacity-50 pointer-events-none' : ''}`}
                >
                    {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
                </PDFDownloadLink>

                <button
                    onClick={() => generateDocx(resumeData)}
                    disabled={!isSaved}
                    className="rounded-full bg-r-primary text-white hover:bg-r-accent hover:text-black py-2 px-6 transition duration-200 disabled:opacity-50"
                >
                    Download DOCX
                </button>
            </div>
        </div>
    );
};

export default ResumeDownload;
