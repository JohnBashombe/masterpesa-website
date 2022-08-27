import React from 'react';

import Image from 'next/image';

import picture from '../assets/clock-min.jpg';

import { FaArrowRight } from 'react-icons/fa';
import { HalfCircle, Cube } from './Utils/__index__';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Grow Your Business
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Grow = (): JSX.Element => {
  return (
    <div className='w-full h-full py-10 px-10 xl:px-0 xl:py-36'>
      <div className='flex flex-col w-full h-full'>
        <div className='flex flex-col justify-center items-center xl:justify-start xl:items-start'>
          <div className='text-4xl xl:ml-36 xl:text-6xl text-gray-900 font-bold tracking-normal flex flex-col space-y-2'>
            <p>Grow with the Payment</p> <p>Online Platform You</p>
            <p>Can Trust? </p>
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2'>
            <div className='flex flex-col'>
              <div className='xl:ml-36'>
                <p className='my-12 text-gray-600 text-base md:text-lg font-medium tracking-wide'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                  <br />
                  Repudiandae temporibus distinctio quo earum et soluta sed ad{' '}
                  <br />
                  aliquam aut laborum saepe pariatur rerum illo non accusantium,{' '}
                  <br />
                  modi ea ipsum cum.
                </p>
                <div className='flex items-center space-x-2 border-b-2 border-gray-800 tracking-wide w-fit cursor-pointer'>
                  <p className='font-bold text-gray-800 text-lg'>Learn More</p>
                  <FaArrowRight className='w-5 h-5' />
                </div>
              </div>
              <div className='hidden xl:w-10/12 mt-28 relative xl:flex justify-center items-center'>
                <Image
                  src={picture}
                  alt={'Master Pesa Picture'}
                  className='rounded-r-xl'
                />
                <div className='absolute z-40 -top-8'>
                  <Cube />
                </div>
              </div>
            </div>
            <div className='hidden xl:flex flex-row justify-end items-start mt-10'>
              <div className='flex flex-row justify-start items-end w-full md:w-11/12 relative'>
                <Image
                  src={picture}
                  height={2500}
                  alt={'Master Pesa Picture'}
                  className='rounded-r-xl'
                />
                <HalfCircle color='bg-yelleoww' />
                <div className='absolute z-40 -top-5 -left-[75px]'>
                  <Cube />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grow;
