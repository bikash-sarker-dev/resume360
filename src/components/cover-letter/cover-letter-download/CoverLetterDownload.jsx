import { PDFDownloadLink } from '@react-pdf/renderer';
import CoverLetterPDF from './CoverLetterPDF';
import { generateDocx } from './generateDocx';
import { useContext, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';

const CoverLetterDownload = () => {
    const { CoverLetterData } = useContext(CoverLetterContext);
    const axiosPublic = useAxiosPublic();
    const [isSaving, setIsSaving] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    // Theme color fetcher
    const getThemeColor = (variableName) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variableName)?.trim();
    };
    // Save Handler for Cover Letter
    const handleSave = async () => {
        setIsSaving(true);
        const primaryColor = getThemeColor('--color-r-primary');

        try {
            const dataToSave = CoverLetterData;  // Use only cover letter data
            const endpoint = '/cover-letter';  // Use endpoint for cover letter

            const response = await axiosPublic.post(endpoint, dataToSave);

            if (response.status === 200 || response.status === 201) {
                setIsSaved(true);
                Swal.fire({
                    icon: 'success',
                    title: 'Great job!',
                    text: 'Your cover letter has been saved. You can now download it in PDF or DOCX format!',
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
            console.error('Error saving:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: error.response?.data?.message || 'Unable to save. Please try again later.',
                confirmButtonColor: primaryColor,
            });
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="mt-6 p-6 flex flex-col justify-center">
            <p className="text-[--color-r-text] mb-4 text-center">
                Thank you for adding all your cover letter information. Please save your data first — then you’ll be able to download it.
            </p>

            <button
                onClick={handleSave}
                disabled={isSaving || isSaved}
                className="rounded-full bg-green-600 hover:bg-green-700 text-white py-2 px-6 transition duration-200 disabled:opacity-50"
            >
                {isSaving ? 'Saving...' : isSaved ? 'Cover Letter Saved' : 'Save Cover Letter'}
            </button>

            <div className="flex flex-wrap gap-4 mt-4 justify-center">
                {isSaved && (
                    <>
                        <PDFDownloadLink
                            document={<CoverLetterPDF coverLetterData={CoverLetterData} />}
                            fileName={`${CoverLetterData?.greeting || 'coverLetter'}.pdf`}
                            className="rounded-full bg-r-primary text-white py-2 px-6 transition duration-200"
                        >
                            {({ loading, error }) =>
                                loading ? 'Preparing PDF...' : error ? 'Error Generating PDF' : 'Download PDF'
                            }
                        </PDFDownloadLink>


                        <button
                            onClick={() => generateDocx(CoverLetterData)}
                            disabled={!isSaved}
                            className="rounded-full bg-r-primary text-white py-2 px-6 transition duration-200 disabled:opacity-50"
                        >
                            {isSaving ? 'Generating DOCX...' : 'Download DOCX'}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CoverLetterDownload;
