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
      <div className='flex flex-col bg-yelleoww rounded-r-full justify-center items-start xl:pl-64 py-36 px-10 xl:px-0 space-y-10 w-full xl:w-4/6 z-10'>
        <div className='text-4xl xl:text-7xl text-gray-900 font-bold space-y-2'>
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
      <div className='hidden xl:flex flex-col space-y-2 mt-4 justify-center items-center w-2/6'>
        <div className='flex space-x-2'>
          <div className='w-full md:w-[200px] h-[200px] flex flex-row justify-center items-center rounded-bl-full rounded-t-full rounded-xl bg-purplee'></div>
          <div className='w-full md:w-[200px] h-[200px] flex flex-row justify-center items-center rounded-br-full rounded-t-full bg-yelleoww'></div>
        </div>
        <div className='flex space-x-2'>
          <div className='w-full md:w-[200px] h-[200px] flex flex-row justify-center items-center rounded-tl-full rounded-b-full rounded-xl bg-yelleoww'></div>
          <div className='w-full md:w-[200px] h-[200px] flex flex-row justify-center items-center rounded-tr-full rounded-b-full bg-purplee'></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
