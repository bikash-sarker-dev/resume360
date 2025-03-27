import React from 'react';
import Marquee from 'react-fast-marquee';

const ContactInfo = () => {
    return (
        <div className="container mx-auto py-16 px-4 md:px-8">
            <div className="text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-r-text font-bold mt-1">
                    Need Assistance? Our Awesome Team is Here to Support You – Feel Free to Reach Out!
                </h2>
                <h4 className="text-lg sm:text-xl md:text-2xl text-r-text opacity-70">
                    We're Just a Message Away – Let Us Help You!
                </h4>
                
                <Marquee speed={40} gradient={false} className=" py-4 rounded-lg shadow-lg">
                    <h2 className="text-lg sm:text-xl md:text-2xl text-r-text font-bold mt-1">
                        Our Support Team is Available 24/7 – We’re Always Ready to Help! For Urgent Assistance, Call Us at (347)-748-3331.
                    </h2>
                </Marquee>
            </div>
        </div>
    );
};

export default ContactInfo;


