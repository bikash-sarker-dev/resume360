import React from 'react';
import Contact from '../components/contact/Contact';
import ContactInfo from '../components/contact/ContactInfo';

const ContactPage = () => {
    return (
        <div className="container py-8 lg:pt-24 lg:pb-12">
            <ContactInfo></ContactInfo>
            <Contact></Contact>
            
        </div>
    );
};

export default ContactPage;