import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import SectionHead from '../header/section-head/SectionHead';

const TermsAndConditions = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const navigate = useNavigate(); 

  const handleCheckboxChange = () => {
    setIsAccepted(!isAccepted);
  };

  const handleAccept = () => {
    if (isAccepted) {
      navigate('/register'); 
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6">
      <SectionHead title={"Terms and Conditions"}></SectionHead>
      <p className="text-lg text-r-text opacity-50 mb-4 text-center">Effective Date:3/27/2025</p>
      <div className="marquee-container">
  <marquee behavior="scroll" direction="left" className="text-red-600 font-bold">
    <strong>Important:</strong> Please read the Terms and Conditions carefully before using our service. Failure to comply with these terms may result in penalties, suspension, or termination of your access. Ensure that you fully understand and agree to all the terms to avoid any unpleasant situations or violations.
  </marquee>
</div>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">1. Acceptance of Terms</h3>
          <p>
            By accessing or using Resume360, you agree to abide by these Terms and Conditions. If you do not agree to these terms, you should not use our Service.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">2. Account Registration</h3>
          <p>
            To use certain features of the Service, you may be required to create an account. You agree to provide accurate and complete information during the registration process and to update your account details as necessary. You are responsible for maintaining the confidentiality of your account login credentials.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">3. Use of the Service</h3>
          <p>
            You agree to use our Service only for lawful purposes. You are prohibited from:
            <ul className="list-disc list-inside">
              <li>Using the Service to create, store, or share content that is unlawful, offensive, or violates the rights of others.</li>
              <li>Attempting to gain unauthorized access to any part of the Service or any systems or networks connected to the Service.</li>
            </ul>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">4. User Content</h3>
          <p>
            You retain ownership of the resume or other content you create using the Service, but you grant Resume360 a license to use, store, and display your content as part of providing the Service.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">5. Privacy and Data Protection</h3>
          <p>
            We respect your privacy. Our Privacy Policy governs how we collect, use, and protect your personal information. By using our Service, you agree to the terms of our Privacy Policy.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">6. Payment and Fees</h3>
          <p>
             Some features of the Service may require payment. By using these features, you agree to pay the applicable fees. Payment terms will be clearly outlined at the time of purchase.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">7. Restrictions</h3>
          <p>
            You may not:
            <ul className="list-disc list-inside">
              <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
              <li>Use the Service in any manner that could damage, disable, or impair the Service.</li>
            </ul>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">8. Termination</h3>
          <p>
            We may suspend or terminate your access to the Service at any time without notice for any violation of these Terms and Conditions or for any other reason we deem appropriate.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">9. Disclaimers and Limitation of Liability</h3>
          <p className='text-red-600'>
            The Service is provided "as is," and we make no warranties or representations regarding the accuracy, reliability, or completeness of the Service. To the fullest extent permitted by law, we disclaim all liability for any damages arising out of or in connection with your use of the Service.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">10. Indemnity</h3>
          <p>
            You agree to indemnify and hold harmless Resume360 and its affiliates, employees, and agents from any claims, damages, or expenses arising from your use of the Service or any breach of these Terms and Conditions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">11. Changes to Terms</h3>
          <p>
            We may update these Terms and Conditions from time to time. Any changes will be posted on this page, and the date of the most recent update will be indicated at the top of the page. Continued use of the Service after changes have been made constitutes your acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">12. Governing Law</h3>
          <p>
            These Terms and Conditions will be governed by and construed in accordance with the laws of Dhaka, Bangaldesh and New York, USA.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">13. Contact Information</h3>
          <p>If you have any questions about these Terms and Conditions, please contact us at <span className='text-blue-500'> Resume360@org.com</span>.</p>
        </div>
      </div>

      <div className="mt-6">
        <label className="label cursor-pointer">

        <input
            type="checkbox"
            className="checkbox"
            checked={isAccepted}
            onChange={handleCheckboxChange}
          />
          <span className="label-text">I agree to the Terms and Conditions</span>
        </label>
      </div>
      <button
        disabled={!isAccepted}
        className={`btn mt-4 ${isAccepted ? 'bg-r-accent mt-4 text-r-text hover:bg-r-primary hover:text-white' : 'btn-disabled'}`}
        onClick={handleAccept}>Accept
      </button>
    </div>
  );
};

export default TermsAndConditions;
