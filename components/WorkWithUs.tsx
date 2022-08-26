import React from 'react';

import Image from 'next/image';

import picture from '../assets/clock-min.jpg';

import { FaArrowRight } from 'react-icons/fa';

import { Square } from './Utils/__index__';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Work With Us
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const WorkWithUs = (): JSX.Element => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 py-40 bg-white'>
      <div className='w-full md:w-10/12 relative hidden md:flex items-center justify-center '>
        <Image src={picture} alt='work with us' className='rounded-r-xl' />
        <Square color='bg-yelleoww' />
      </div>
      <div className='flex flex-col justify-start items-start'>
        <p className='text-6xl font-bold'>Work With Us,</p>
        <p className='text-6xl font-bold'>Not For Us.</p>
        <p className='my-14 text-gray-500 text-lg font-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          <br />
          animi quo dolorem neque ducimus enim, repellat fugiat nemo corporis?
          <br />
          Libero laboriosam commodi esse laudantium earum, <br /> adipisci cum
          vitae inventore illum!
        </p>
        <div className='flex items-center space-x-2 border-b-2 border-gray-800 tracking-wide cursor-pointer'>
          <p className='font-bold text-gray-800 text-lg'>Learn More</p>
          <FaArrowRight className='w-5 h-5' />
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
