import category from '../data/category';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BrowseCategories() {
    return (
        <div className='mt-16 px-2 max-w-7xl mx-auto'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-8'>Browse Categories</h1>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
                {category.map((item) => (
                    <Link key={item.id} href={`/${item.URL}`}>
                        <div
                            className='flex flex-col bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer w-full overflow-hidden'
                            style={{
                                aspectRatio: '1 / 1.25'
                            }}
                            title={item.name}
                        >
                            <div className='relative w-full h-1/2'>
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className='rounded-t-lg'
                                />
                            </div>
                            <div className='flex items-center justify-center h-1/2 p-2'>
                                <span className='text-center text-sm sm:text-base lg:text-lg'>{item.name}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
