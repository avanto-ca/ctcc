'use client';
import React, { useEffect, useState } from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon, GlobeAltIcon, ClipboardIcon } from '@heroicons/react/solid';
import { WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon } from 'react-share';

interface LogoAndContactInfoProps {
    logo: string;
    type: string;
    Firstname: string;
    Lastname: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    Name: string;
}

const LogoAndContactInfo: React.FC<LogoAndContactInfoProps> = ({
    logo,
    Firstname,
    Lastname,
    address,
    phone,
    email,
    website,
    type,
    Name
}) => {
    const [fullUrl, setFullUrl] = useState('');

    useEffect(() => {
        const formattedName = `${Firstname}-${Lastname}`;
        const href = `/${type}/${encodeURIComponent(formattedName)}`;
        const baseUrl = window.location.origin;
        setFullUrl(`${baseUrl}${href}`);
    }, [Firstname, Lastname, type]);

    const handleCopyUrl = () => {
        navigator.clipboard.writeText(fullUrl);
        alert('URL copied to clipboard!');
    };

    return (
        <div className="mt-2 p-4 sm:p-6 w-full max-w-10xl bg-gradient-to-r from-black via-gray-500 to-black mb-8 shadow-2xl flex justify-center relative overflow-hidden">
            <div className="border-4 border-gray-300 bg-white shadow-lg p-4 flex flex-col lg:flex-row items-center lg:items-center w-full sm:w-4/5 md:w-3/5">
                <div className="flex justify-center items-center w-full lg:w-2/5 mb-4 lg:mb-0">
                    <div className="rounded-lg overflow-hidden w-full max-w-[150px] sm:max-w-none sm:w-full aspect-square sm:aspect-auto">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-full w-full object-contain sm:object-cover"
                        />
                    </div>
                </div>
                {/* Divider for small screens */}
                <div className="w-full border-b-2 border-black my-4 lg:hidden"></div>
                {/* Vertical divider for large screens */}
                <div className="hidden lg:block border-r-2 border-black h-full mx-4 lg:mx-8"></div>
                <div className="flex flex-col justify-start items-center lg:items-start w-full lg:w-2/3 text-gray-900 pl-0 lg:pl-4 lg:ml-4 md:ml-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 drop-shadow-lg text-center lg:text-left">
                        {Name}
                    </h1>
                    <div className="flex flex-col items-start w-full">
                        <div className="flex items-center mb-2 justify-start w-full">
                            <LocationMarkerIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-1 drop-shadow-lg flex-shrink-0" />
                            <p className="text-base sm:text-lg md:text-xl">{address}</p>
                        </div>
                        <div className="flex items-center mb-2 justify-start w-full">
                            <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-1 drop-shadow-lg flex-shrink-0" />
                            <p className="text-base sm:text-lg md:text-xl">
                                <a href={`tel:${phone}`} className="text-blue-700 hover:text-yellow-400 transition-colors duration-300">{phone}</a>
                            </p>
                        </div>
                        <div className="flex items-center mb-2 justify-start w-full">
                            <MailIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-1 drop-shadow-lg flex-shrink-0" />
                            <p className="text-base sm:text-lg md:text-xl break-all">
                                <a href={`mailto:${email}`} className="text-blue-700 hover:text-yellow-400 transition-colors duration-300">{email}</a>
                            </p>
                        </div>
                        <div className="flex items-center justify-start w-full">
                            <GlobeAltIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-1 drop-shadow-lg flex-shrink-0" />
                            <p className="text-base sm:text-lg md:text-xl break-all">
                                <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-yellow-400 transition-colors duration-300">{website}</a>
                            </p>
                        </div>
                        {/* Share Buttons */}
                        <div className="flex items-center mt-4 space-x-2">
                            <p className="text-base sm:text-lg md:text-xl font-semibold mr-2">Share this profile:</p>
                            {fullUrl && (
                                <>
                                    <WhatsappShareButton
                                        url={fullUrl}
                                        title={`Check out ${Name}`}
                                        className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-300"
                                    >
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                    <FacebookShareButton
                                        url={fullUrl}
                                        className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
                                    >
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <LinkedinShareButton
                                        url={fullUrl}
                                        className="p-2 bg-blue-800 rounded-full hover:bg-blue-900 transition-colors duration-300"
                                    >
                                        <LinkedinIcon size={32} round />
                                    </LinkedinShareButton>
                                    <TwitterShareButton
                                        url={fullUrl}
                                        className="p-2 bg-blue-400 rounded-full hover:bg-blue-500 transition-colors duration-300"
                                    >
                                        <TwitterIcon size={32} round />
                                    </TwitterShareButton>
                                    <button
                                        onClick={handleCopyUrl}
                                        className="p-2 bg-gray-600 rounded-full hover:bg-gray-700 transition-colors duration-300"
                                    >
                                        <ClipboardIcon className="h-8 w-8 text-white" style={{ height: 20, width: 20 }} />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoAndContactInfo;
