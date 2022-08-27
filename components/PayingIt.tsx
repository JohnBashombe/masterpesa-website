import React from 'react';

import Image from 'next/image';

import { FaArrowRight } from 'react-icons/fa';

import picture from '../assets/clock-min.jpg';
import { HalfCircle, Cube } from './Utils/__index__';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Company Services
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const PayingIt = (): JSX.Element => {
  return (
    <div className='w-full h-full bg-yelleoww px-10 xl:px-0 py-10 xl:py-36'>
      <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className='xl:ml-36 flex flex-col xl:justify-start xl:items-start justify-center items-center space-y-10'>
          <p className='text-7xl font-bold text-gray-900'>Paying it forward</p>
          <div className='flex flex-col font-medium text-gray-600 text-lg'>
            <p>Through Masterpesa, we've partnered wth a different</p>
            <p>non-profit each yearm to help give back to others around the</p>
            <p>globe. We've built schools in Tanzania. Our goal is</p>
            <p>to directly improve the lives of 150,000 people across the</p>
            <p>world by 2024.</p>
          </div>

          <div className='flex items-center space-x-2 border-b-2 border-gray-800 tracking-wide cursor-pointer w-fit'>
            <p className='font-bold text-gray-800 text-lg'>Learn More</p>
            <FaArrowRight className='w-5 h-5' />
          </div>
        </div>
        <div className='relative hidden xl:flex justify-end items-center flex-col'>
          <Image
            src={picture}
            alt='MasterPesa Picture'
            className='rounded-l-xl'
          />
          <HalfCircle color='bg-purplee' />
          <div className='absolute z-40 -top-8 rotate-90'>
            <Cube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayingIt;
