"use client"
import Hero from '@/app/components/Hero'
import React, { useEffect, useState } from 'react'
import BrowseCategories from "./components/BrowseCategories";
import MemberSearch from './components/MemberInfo/MemberSearch';
import { Members } from './components/MemberInfo/Members';
import MemberCarousel from './components/MemberInfo/MemberCarousel';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
  }, [])

  return (
    <div>
      <Hero userInput={setSearchQuery} />
      <BrowseCategories />
      <MemberSearch searchQuery={searchQuery} members={Members} />
      {/* Carousel Code */}
      <footer style={{ backgroundColor: '#f5f5f5', padding: '20px 0', marginTop: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <h2 style={{ color: '#5a3d99', fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>
            Gallery
          </h2>
        </div>
        <div>
          <div style={{ padding: '0px', marginTop: '20px' }}>
            <MemberCarousel />
          </div>
        </div>
      </footer>
    </div>
  )
}
