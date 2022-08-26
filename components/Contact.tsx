import React from 'react';

import { FaArrowRight } from 'react-icons/fa';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Blog
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Contact = (): JSX.Element => {
  return (
    <div className='bg-purplee flex flex-row w-full z-30'>
      <div className='flex flex-col bg-yelleoww rounded-r-full justify-center items-start pl-64 py-36 space-y-10 w-full md:w-4/6 z-10'>
        <div className='text-7xl text-gray-900 font-bold space-y-2'>
          <p>Let's Work</p>
          <p>Something</p>
          <p>Together.</p>
        </div>
        <p className='font-medium text-gray-600 text-lg'>
          Discover how we can help your business grow
        </p>
        <div className='bg-black flex space-x-2 text-white justify-center items-center w-fit px-10 rounded-full font-bold py-5'>
          <p>Get Started</p>
          <FaArrowRight />
        </div>
      </div>
      <div className='flex flex-col space-y-1 mt-4 justify-center items-center w-2/6'>
        <div className='flex space-x-1'>
          <div className='w-full md:w-[200px] h-[200px] flex flex-row justify-center items-center rounded-tl-full  bg-white'>
            <p className='text-5xl font-bold text-yelleoww text-center rotate-45 pl-14'>
              Master
            </p>
          </div>
          <div className='w-full md:w-[200px] h-[200px] flex flex-row justify-center items-center rounded-tr-full  bg-white'>
            <p className='text-5xl font-bold text-purplee text-center -rotate-45 pr-14'>
              Pesa
            </p>
          </div>
        </div>
        <div className='w-full md:w-[405px] h-[200px] flex flex-row justify-center items-center rounded-b-full  bg-white'>
          <p className='text-5xl font-bold text-purplee text-center'>
            Tanzania
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
