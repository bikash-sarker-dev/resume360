import React from 'react'
import { useFormData } from '../FormDataProvider'

export const CustomeTemplate2 = () => {
    const {formData}=useFormData()
    console.log(formData);
    const {
        personalInfo: { fullName, jobTitle, phoneNumber, email, address,summary },
        education: { institution,cgpa, degree, fieldOfStudy, additionalInfo , startDate,endDate},
        experience: { companyName, position, duration, location, description },
        experience2: { companyName2, position2, duration2, location2, description2 },
        achievements: { achievementTitle,  startdate,enddate, organization, description: achievementDescription },
      } = formData;
  return (
    <div>
        <div className="my-6   bg-white">
      <div className="p-8">
      <h1 className="text-center text-3xl font-bold mb-2">{fullName || 'Emma Achern'}</h1>
      <h4 className="text-center text-xl font-semibold mb-4">{jobTitle || 'Chemist'}</h4>

        <div className="divider "></div>
        {/* Professional Summary */}
        <h3 className="text-xl font-semibold text-center mb-2 text-green-800">Professional Summary</h3>
      <p className="text-sm text-center mb-6">
      {summary || `Dedicated and detail-oriented chemist with extensive experience in analytical research, laboratory testing, and chemical synthesis. Skilled in utilizing advanced instrumentation and methodologies
       to conduct qualitative and quantitative analyses.`}
      </p>

    {/* Contact Info */}
    <div className="flex justify-center gap-6 mt-4 text-sm">
        <div className="flex flex-col items-center">
          <h4 className="text-green-800 font-semibold text-xs">Phone</h4>
          <span className="text-[10px]">{phoneNumber || '+1 (123) 456-7890'}</span>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-green-800 font-semibold text-xs">Email</h4>
          <span className="text-[10px]">{email || 'emma.achern@example.com'}</span>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-green-800 font-semibold text-xs">Address</h4>
          <span className="text-[10px]">{address || '123 Main St, New York, NY'}</span>
        </div>
      </div>

      {/* Education */}
      <div className="my-8">
        <h1 className="text-green-800 text-xl font-bold mb-2">Education</h1>
        <h2 className="text-base font-semibold">
        {fieldOfStudy || 'Bachelor of Science in Chemistry'} | {startDate || '2026'} From {endDate || '2030'}
        </h2>
        <p className="text-green-700 font-semibold">{institution || 'East State University, Valley City'}</p>
        <ul className="list-disc ml-5 text-sm mt-2">
        <li><strong>Additional Info:</strong> {additionalInfo || 'Organic Chemistry, Analytical Chemistry, Physical Chemistry, Biochemistry, Environmental Chemistry'}</li>
        <li><strong>CGPA:</strong> {cgpa || `3.8/4.0`}</li>
        
        </ul>
      </div>
    {/* Research Experience */}
    {/* <div className="my-8">
        <h1 className="text-green-800 text-xl font-bold mb-2">Research Experience</h1>
        <h2 className="text-base font-semibold">
          Research Assistant | 2028-2029
        </h2>
        <p className="text-green-700 font-semibold">Department of Chemistry, East State University</p>
        <ul className="list-disc ml-5 text-sm mt-2">
          <li><strong>Research Focus:</strong> Investigating the effects of environmental pollutants on soil composition</li>
          <li><strong>Key Responsibilities:</strong> Conducting experiments, analyzing data, and presenting findings</li>
          <li><strong>Publications:</strong> Co-author of a paper on "Chemical Impact of Heavy Metals on Soil Microorganisms"</li>
        </ul>
      </div> */}

        {/* Project Experience */}
        <div className="my-8">
        <h1 className="text-green-800 text-xl font-bold mb-2">Project Experience</h1>

        {/* Project 1 */}
        <h2 className="text-base font-semibold">{companyName ||`Fabrication of Miniature Chemical Reactor`} | {duration || `2028`}</h2>
        <p className="text-green-700 font-semibold">{position || `Department of Chemistry, East State University`}</p>
        {description ? (
  <p className="text-sm break-words overflow-hidden">{description}</p>
) : (
  <ul className="list-disc ml-5 text-sm mt-2 break-words overflow-hidden">
    <li><strong>Project Focus:</strong> Design and fabrication of a miniature chemical reactor for lab-scale reactions</li>
    <li><strong>Key Responsibilities:</strong> Developing the prototype, conducting experiments to test efficiency, and optimizing reactor performance</li>
    <li><strong>Technologies/Methods Used:</strong> CAD modeling, thermodynamic analysis, and material selection for reactor components</li>
  </ul>
)}


        {/* Project 2 */}
        <h2 className="text-base font-semibold mt-6">{companyName2 || `The Green Thumb Chemist`} | {duration2 || `2029`}</h2>
        <p className="text-green-700 font-semibold">{position2 || `Department of Chemistry, East State University`}</p>
        {description2 ? (
  <p className="text-sm break-words overflow-hidden">{description2}</p>
) : (
  <ul className="list-disc ml-5 text-sm mt-2 break-words overflow-hidden">
    <li><strong>Project Focus:</strong> Development of an eco-friendly chemical solution for plant growth and soil health improvement</li>
    <li><strong>Key Responsibilities:</strong> Synthesizing the chemical solution, testing its effects on different plant species, and analyzing soil samples</li>
    <li><strong>Technologies/Methods Used:</strong> Green chemistry techniques, soil pH analysis, plant growth tracking</li>
  </ul>
)}
      </div>

        {/* Awards */}
        <div className="my-8">
        <h1 className="text-green-800 text-xl font-bold mb-2">Notable Awards</h1>
        <ul className="list-disc ml-5 text-sm">
          <li>{achievementTitle|| `Dean's List`},{organization||`East State University`},
             {(startdate && startdate.split(`-`)[0])||`2026`}-  {(enddate && enddate.split(`-`)[0])||`2026`}</li>
          {/* <li>Gold Award, Chemistry Olympiad, 2027</li> */}
        </ul>
      </div>

        <div className="divider "></div>
      </div>
    </div>
    </div>
  )
}
