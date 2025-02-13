import React from 'react';
import { Members } from '@/app/components/MemberInfo/Members';  // Adjust path as needed
import ContactCard from '@/app/components/MemberPage/ContactCard';
import LogoAndContactInfo from '@/app/components/MemberPage/LogoAndContactInfo';
import ServicesSection from '@/app/components/MemberPage/ServicesSection';
import AboutUsAndMapSection from '@/app/components/MemberPage/AboutUsAndMapSection';
import { IoCheckmarkCircle } from "react-icons/io5";  // Import the necessary icons
import Contact from '@/app/components/MemberPage/Contact';



const MemberPage: React.FC = () => {
    const memberId = '8'; // Manually set the ID here for each page

    const member = Members.find(m => m.id === memberId);

    if (!member) {
        return <div>Member not found</div>;
    }

    const { Firstname, Lastname, logo, address, phone, email, website, iframe, aboutus, sectionItem1, sectionItem2, sectionItem3, type } = member;
    // Create the services array based on available section items
    const services = [
        { icon: IoCheckmarkCircle, description: sectionItem1 },
        { icon: IoCheckmarkCircle, description: sectionItem2 },
        { icon: IoCheckmarkCircle, description: sectionItem3 }
    ].filter(service => service.description); // Filter out empty descriptions

    return (
        <div className="flex flex-col items-center w-full space-y-2">
            <LogoAndContactInfo
                logo={logo}
                Firstname={Firstname}
                Lastname={Lastname}
                address={address}
                phone={phone}
                email={email}
                website={website}
                type={type}
            />
            <AboutUsAndMapSection aboutus={aboutus} iframe={iframe} />
            <ServicesSection services={services} />
            <div className="w-full max-w-8xl bg-white rounded-lg shadow-xl">
                <Contact ccEmail={email} name={Firstname} /> {/* Pass email as ccEmail */}
            </div>
        </div>
    );
};

export default MemberPage;
