import React from 'react';

import Image from 'next/image';

import picture from '../assets/clock-min.jpg';

import { FaArrowRight } from 'react-icons/fa';
import { HalfCircle } from './Utils/__index__';

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
    <div className='w-full h-full py-36'>
      <div className='flex flex-col w-full h-full'>
        <div className='flex flex-col'>
          <div className='text-3xl ml-36 md:text-6xl text-gray-900 font-bold tracking-normal flex flex-col space-y-2'>
            <p>Grow with A the Digital</p> <p>Marketing Agency You</p>
            <p>Can Trust? </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col'>
              <div className='ml-36'>
                <p className='my-12 text-gray-600 text-base md:text-lg font-medium tracking-wide'>
                  Our digital marketing experts have put together thousands{' '}
                  <br />
                  of successful digital marketing compaigns for businesses{' '}
                  <br /> looking to increase leads, phone calls, transactions,
                  and <br /> qualified website traffic. They'll do the same for
                  you. <br /> Request a free strategy proposal and get a game
                  plan for <br /> elite revenue generation.
                </p>
                <div className='flex items-center space-x-2 border-b-2 border-gray-800 tracking-wide w-fit cursor-pointer'>
                  <p className='font-bold text-gray-800 text-lg'>Learn More</p>
                  <FaArrowRight className='w-5 h-5' />
                </div>
              </div>
              <div className='w-full md:w-10/12 mt-28'>
                <Image
                  src={picture}
                  alt={'Master Pesa Picture'}
                  className='rounded-r-xl'
                />
              </div>
            </div>
            <div className='flex flex-row justify-end items-start mt-10'>
              <div className='flex flex-row justify-start items-center w-full md:w-11/12 relative'>
                <Image
                  src={picture}
                  height={3000}
                  alt={'Master Pesa Picture'}
                  className='rounded-r-xl'
                />
                <HalfCircle color='bg-yelleoww' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grow;
