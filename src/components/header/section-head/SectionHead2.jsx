import React from "react";

const SectionHead2 = ({ subTitle, title }) => {
    return (
        <>

            <h2 className='font-bold text-4xl text-r-text'>{title}</h2>
            <p className="text-r-text">{subTitle}</p>

        </>
    );
};

export default SectionHead2;
