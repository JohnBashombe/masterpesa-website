import React from 'react';

import Image from 'next/image';

import picture from '../assets/clock-min.jpg';

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
const Blog = (): JSX.Element => {
  return (
    <div className='flex flex-col bg-white p-36 w-full h-full'>
      <p className='font-bold text-7xl my-5'>Our Blog</p>
      <div className='w-full md:w-8/12 relative flex justify-center items-end bg-white'>
        <Image src={picture} alt='MasterPesa' className='rounded-xl' />
        <div className='absolute bg-white -right-72 rounded-xl p-14 shadow-md w-fit space-y-6 -bottom-40'>
          <div className='absolute w-28 h-52 bg-purplee right-14 -top-28 rounded-l-full shadow-md rotate-45 z-10'></div>
          <p className='text-gray-600 text-lg font-medium'>December 30, 2022</p>
          <div className='text-5xl font-bold text-gray-900'>
            <p>7 Best Business</p>
            <p>Ideas you can start</p>
            <p>with our platform</p>
          </div>
          <div className='font-medium text-gray-600'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              minus
            </p>
            <p>
              distinctio, delectus repudiandae eius, debitis eos vel reiciendis
            </p>
            <p>aliquam nostrum, nisi sapiente magnam illum natus laudantium</p>
            <p> necessitatibus. Enim, accusantium culpa?</p>
          </div>

          <div className='flex items-center space-x-2 border-b-2 border-gray-800 tracking-wide cursor-pointer w-fit'>
            <p className='font-bold text-gray-800 text-lg'>Learn More</p>
            <FaArrowRight className='w-5 h-5' />
          </div>
        </div>
      </div>
      <div className='mt-72 w-10/12'>
        <Data
          date='December 23, 2022'
          title={['How to Integrate', 'With WordPress and', 'Joomla']}
        />
        <hr className='my-28 w-full' />
        <Data
          date='December 12, 2022'
          title={['What Is Web Design', 'and Development?']}
        />
        <hr className='my-28 w-full' />
        <Data
          date='December 12, 2022'
          title={['5 Strategy Tips to', 'Accelerate Your', 'Business Growth']}
        />
      </div>
      <div className='w-10/12 flex flex-row justify-center items-center'>
        <div className='my-28 flex flex-row justify-center items-center space-x-2 border-2 border-gray-800 bg-transparent w-fit py-4 px-10 rounded-full cursor-pointer'>
          <p>View More</p>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Blog;

const Data = ({
  date,
  title,
}: {
  date: string;
  title: string[];
}): JSX.Element => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='flex flex-col space-y-8'>
        <p className='text-gray-600 font-medium text-base'>{date}</p>
        <div className='flex flex-col text-5xl font-bold text-gray-900 tracking-wide'>
          {title.map((val, index) => (
            <p key={index}>{val}</p>
          ))}
        </div>

        <div className='flex items-center space-x-2 border-b-2 border-gray-800 tracking-wide cursor-pointer w-fit'>
          <p className='font-bold text-gray-800 text-lg'>Learn More</p>
          <FaArrowRight className='w-5 h-5' />
        </div>
      </div>
      <div className='w-full flex justify-end items-center'>
        <Image
          src={picture}
          height={300}
          width={500}
          alt='MasterPesa'
          className='rounded-xl'
        />
      </div>
    </div>
  );
};
