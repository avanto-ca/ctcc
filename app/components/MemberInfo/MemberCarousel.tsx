'use client'
import React from 'react';
import Slider from 'react-slick';
import CarouselCard from './CarouselCard'; // Import your MemberCard component
import { Members } from './Members'; // Import your members data

const MemberCarousel: React.FC = () => {
    const settings = {
        dots: false, // Disable dots
        infinite: true, // Enables infinite scrolling
        speed: 3000, // Faster transition speed for smoother movement
        slidesToShow: 3, // Number of cards to show at once
        slidesToScroll: 1, // Number of cards to scroll at once
        autoplay: true, // Enable auto sliding
        autoplaySpeed: 0, // 0 ms delay between slides for continuous movement
        cssEase: 'linear', // Linear transition for continuous movement
        pauseOnHover: false, // Disable pause on hover for mobile
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 1500, // Slightly faster speed for tablets
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.8, // Show part of the next slide for a continuous effect
                    slidesToScroll: 1,
                    speed: 1200, // Faster speed for mobile
                },
            },
        ],
    };

    return (
        <div style={{ marginBottom: '50px' }}>
            <Slider {...settings}>
                {Members.map((member, index) => (
                    <div key={index}>
                        <CarouselCard
                            logo={member.logo}
                            type={member.type} firstName={member.Firstname} lastName={member.Lastname} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MemberCarousel;
