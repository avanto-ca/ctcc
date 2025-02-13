import React from 'react';

interface AboutUsAndMapSectionProps {
    aboutus: string;
    iframe: string;
}

// Function to convert plain text with URLs into HTML with clickable links
const formatAboutUsText = (text: string) => {
    const urlPattern = /https?:\/\/[^\s]+/g;
    const parts = text.split(urlPattern);

    // Split text by URLs and intersperse the URLs as <a> tags
    return parts.map((part, index) => (
        <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
                <a href={text.match(urlPattern)![index]} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {text.match(urlPattern)![index]}
                </a>
            )}
        </React.Fragment>
    ));
};

const AboutUsAndMapSection: React.FC<AboutUsAndMapSectionProps> = ({ aboutus, iframe }) => {
    return (
        <div className="w-full max-w-8xl p-4 bg-white mb-8 shadow-lg rounded-lg">
            <h1 className="text-justify text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ml-4 sm:ml-8 md:ml-20">
                About Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 ml-4 sm:ml-8 md:ml-20 max-w-8xl mt-4 bg-white">
                <div>
                    {formatAboutUsText(aboutus)}
                </div>
                <div className="flex justify-center items-center mb-8">
                    <iframe
                        src={iframe}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="max-w-full md:w-[600px] md:h-[450px]"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default AboutUsAndMapSection;
