import React from 'react';

import Image from 'next/image';

import picture from '../assets/clock-min.jpg';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Team
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Team = (): JSX.Element => {
  return (
    <div className='flex flex-row justify-end items-center'>
      <div className='w-full flex flex-col justify-center relative md:w-8/12 bg-yelleoww py-10 px-5 md:py-36 md:pl-64 space-y-14'>
        <div className='absolute -left-96 max-w-xl'>
          <Image src={picture} alt='MasterPesa' className='rounded-xl' />
        </div>
        <div className='text-5xl font-bold text-gray-900 space-y-2'>
          <p>The entire staff at Master Pesa</p>
          <p>has been phenomenal.</p>
          <p>They are quick with their</p>
          <p>replies and incredibly</p>
          <p>helpful.</p>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col space-y-2'>
            <p className='text-3xl text-gray-900 font-semibold'>
              Ntavigwa Bashombe
            </p>
            <p className='text-xl text-gray-600 font-normal'>
              Technology Director
            </p>
          </div>
          <div className='flex flex-row space-x-4 pr-52'>
            <div className='bg-transparent border-2 border-gray-900 w-fit flex justify-center items-center px-4 rounded-full cursor-pointer'>
              <AiOutlineLeft className='text-gray-900 w-9 h-9' />
            </div>
            <div className='bg-gray-900 w-fit flex justify-center items-center px-4 rounded-full cursor-pointer'>
              <AiOutlineRight className='text-white w-9 h-9' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
