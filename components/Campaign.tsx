import React from 'react';

import Image from 'next/image';

import picture from '../assets/clock-min.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { Square } from './Utils/__index__';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Campaign
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Campaign = (): JSX.Element => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 py-52'>
      <div className='w-full md:w-10/12 relative flex justify-center'>
        <Image src={picture} alt='MasterPesa' className='rounded-r-xl' />
        <Square color='bg-purplee' />
      </div>
      <div className='flex flex-col space-y-10'>
        <div className='text-gray-800 text-3xl md:text-7xl font-bold'>
          <p>Our Technology</p>
          <p>Powering Our</p>
          <p>Campaigns</p>
        </div>
        <div className='text-gray-600 font-medium space-y-1 text-lg'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia
          </p>
          <p>
            eaque soluta, cum enim ratione quod vero facere magnam ad id maiores
          </p>
          <p>
            incidunt quos delectus reiciendis quaerat natus perferendis esse.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia
          </p>
          <p>
            eaque soluta, cum enim ratione quod vero facere magnam ad id maiores
          </p>
        </div>

        <div className='flex items-center space-x-2 border-b-2 border-gray-800 tracking-wide cursor-pointer w-fit'>
          <p className='font-bold text-gray-800 text-lg'>Learn More</p>
          <FaArrowRight className='w-5 h-5' />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
