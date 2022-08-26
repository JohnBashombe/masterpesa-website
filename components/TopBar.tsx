import React from 'react';

import { FaArrowRight } from 'react-icons/fa';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Top Bar
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const TopBar = (): JSX.Element => {
  return (
    <div className='w-full md:w-10/12 mx-auto h-full flex flex-row justify-between items-center py-10 text-gray-800'>
      <p className='font-extrabold text-3xl cursor-pointer'>Master Pesa Inc.</p>
      <div className='flex flex-row space-x-4 font-bold text-base'>
        <p className='cursor-pointer'>Services</p>
        <p className='cursor-pointer'>Work</p>
        <p className='cursor-pointer'>About</p>
        <p className='cursor-pointer'>Resources</p>
      </div>
      <div className='flex flex-row space-x-2 justify-center items-center'>
        <p className='font-medium text-base'>Get Started</p>
        <FaArrowRight className='w-5 h-5' />
      </div>
    </div>
  );
};

export default TopBar;
