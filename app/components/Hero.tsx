import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface HeroProps {
  userInput: (input: string) => void;
}

const Hero: React.FC<HeroProps> = ({ userInput }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    userInput(searchInput);
    scrollToSection();
  };

  const scrollToSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={heroRef} className="relative text-center">
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[65vh] relative">
        <Image
          src="/Images/Skyline.png"
          alt="hero-image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full opacity-65"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-800 font-bold tracking-tight mb-4 sm:mb-6 md:mb-8">
            Our Amazing Corporate Members
          </h2>
          <div className="mt-2 sm:mt-4 flex items-center justify-center w-full max-w-md">
            <div className="relative flex w-full">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search Corporate Member"
                className="bg-white p-2 sm:p-3 border rounded-l-full rounded-r-full w-full pr-12 shadow-sm"
              />
              <button
                onClick={handleButtonClick}
                className="absolute right-0 top-0 bottom-0 bg-purple-800 rounded-r-full px-3 sm:px-4 shadow-md cursor-pointer hover:bg-purple-700 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;