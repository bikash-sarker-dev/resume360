import React from 'react';
import Marquee from 'react-fast-marquee';
import SectionHead from '../header/section-head/SectionHead';

const ContactInfo = () => {
    return (
        <div className="w-full mx-auto py-6">
            <div className="text-center space-y-4">
                <SectionHead title={"Need Assistance? "}></SectionHead>
                <h4 className="text-xl text-r-text opacity-50">
                Our Awesome Team is Here to Support You Feel Free to Reach Out!</h4>
                <Marquee speed={40} gradient={false} className=" py-2 rounded-lg shadow-lg">
                    <h2 className="text-lg sm:text-xl md:text-2xl text-r-text font-bold mt-1">
                        Our Support Team is Available 24/7 – We’re Always Ready to Help! For Urgent Assistance, Call Us at (347)-748-3331.
                    </h2>
                </Marquee>
            </div>
        </div>
    );
};

export default ContactInfo;


