import React from 'react';
import { Members } from '@/app/components/MemberInfo/Members';  // Adjust path as needed
import Contact from '@/app/components/MemberPage/Contact';
import LogoAndContactInfo from '@/app/components/MemberPage/LogoAndContactInfo';
import AboutUsAndMapSection from '@/app/components/MemberPage/AboutUsAndMapSection';
import ServicesSection from '@/app/components/MemberPage/ServicesSection';
import { FaChartLine, FaBusinessTime, FaBriefcase } from 'react-icons/fa';  // Import the necessary icons

const MemberPage: React.FC = () => {
    const memberId = '77'; // Manually set the ID here for each page

    const member = Members.find(m => m.id === memberId);

    if (!member) {
        return <div>Member not found</div>;
    }

    const { Firstname, Lastname, logo, address, phone, email, website, iframe, aboutus, sectionItem1, sectionItem2, sectionItem3, type } = member;

    // Create the services array based on available section items
    const services = [
        { icon: FaChartLine, description: sectionItem1 },
        { icon: FaBusinessTime, description: sectionItem2 },
        { icon: FaBriefcase, description: sectionItem3 }
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
