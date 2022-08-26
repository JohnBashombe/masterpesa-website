import React from 'react';

import Image from 'next/image';

import picture from '../assets/clock-min.jpg';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Blog
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Blog = () => {
  return (
    <div className='flex flex-col bg-white p-36'>
      <p className='font-bold text-7xl'>Our Blog</p>
      <div className='w-full md:w-8/12 relative flex justify-center items-center'>
        <Image src={picture} alt='MasterPesa' className='rounded-xl' />
        <div className='absolute bg-white -right-72 rounded-xl p-14 shadow-md w-fit'>
          <p>December 30, 2022</p>
          <div className='text-5xl font-bold text-gray-900'>
            <p>7 Best Call Recording</p>
            <p>Software Options for</p>
            <p>Your Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
