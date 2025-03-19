import React from "react";

const FAQ = () => {
  return <div>

{/* Features & Functionality Questions */}
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
{/* Account & Pricing Questions */}
<h3 className='text-xl font-bold my-4'>Account & Pricing FAQ</h3>
<div className="collapse collapse-plus bg-[rgb(134,171,223,0.2)] border border-[rgb(134,171,223)]">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Is the resume builder free to use?</div>
  <div className="collapse-content text-sm">We offer both free and premium plans. You can create and download a basic resume for free, while premium features like advanced templates, and grammer checker require a subscription.</div>
</div>
<div className="collapse collapse-plus bg-[rgb(134,171,223,0.2)] border border-[rgb(134,171,223)]">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">What formats can I download my resume in?</div>
  <div className="collapse-content text-sm">You can download your resume in PDF, DOCX, and TXT formats.</div>
</div>
<div className="collapse collapse-plus bg-[rgb(134,171,223,0.2)] border border-[rgb(134,171,223)]">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Do you store my resume on your servers?</div>
  <div className="collapse-content text-sm">We store your resume only if you have an account and choose to save it. Otherwise, we do not keep any personal data after you close the page.</div>
</div>
{/* Technical & Support Questions */}
<h3 className='text-xl font-bold my-4'>Technical & Support FAQ</h3>
<div className="collapse collapse-plus bg-[rgb(134,171,223,0.2)] border border-[rgb(134,171,223)]">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">My resume isn't downloading properly. What should I do?</div>
  <div className="collapse-content text-sm">Try clearing your browser cache, disabling ad blockers, or switching to a different browser. If the issue persists, contact our support team.</div>
</div>
<div className="collapse collapse-plus bg-[rgb(134,171,223,0.2)] border border-[rgb(134,171,223)]">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Can I access my resume from a different device?</div>
  <div className="collapse-content text-sm">Yes, if you have an account, you can log in from any device and access your saved resumes.</div>
</div>
<div className="collapse collapse-plus bg-[rgb(134,171,223,0.2)] border border-[rgb(134,171,223)]">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How can I contact customer support?</div>
  <div className="collapse-content text-sm">You can reach our support team via email available on our website.</div>
</div>

  </div>;
};

export default FAQ;