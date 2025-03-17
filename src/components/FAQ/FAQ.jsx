import React from "react";

const FAQ = () => {
  return <div>
    <h3 className='text-xl font-bold my-4'>Features & Functionality FAQ</h3>
<div className="collapse collapse-plus bg-[rgb(134,171,223,0.2)] border border-[rgb(134,171,223)]">
<input type="radio" name="my-accordion-3" defaultChecked />
<div className="collapse-title font-semibold">What types of resume templates do you offer?</div>
<div className="collapse-content text-sm">We offer a variety of templates, including modern, professional, creative, and minimalist styles to suit different industries and job positions.</div>
</div>
<div className="collapse collapse-plus bg-[rgb(134,171,223,0.2)] border border-[rgb(134,171,223)]">
<input type="radio" name="my-accordion-3" />
<div className="collapse-title font-semibold">Can I customize my resume?</div>
<div className="collapse-content text-sm">Yes! You can change the layout, font, colors, and sections to match your personal style and professional needs.</div>
</div>
<div className="collapse collapse-plus bg-[rgb(134,171,223,0.2)] border border-[rgb(134,171,223)]">
<input type="radio" name="my-accordion-3" />
<div className="collapse-title font-semibold">Can I add my own sections to the resume?</div>
<div className="collapse-content text-sm">Yes! You can add custom sections like "Projects," "Certifications," "Languages," or any other relevant details to personalize your resume.</div>
</div>
<div className="collapse collapse-plus bg-[rgb(134,171,223,0.2)] border border-[rgb(134,171,223)]">
<input type="radio" name="my-accordion-3" />
<div className="collapse-title font-semibold">Can I preview my resume before downloading it?</div>
<div className="collapse-content text-sm">Absolutely! Our resume builder allows you to preview your resume in real-time before downloading the final version.</div>
</div>

  </div>;
};

export default FAQ;