import React from 'react';

import Image from 'next/image';

import picture from '../assets/clock-min.jpg';

import { FaArrowRight } from 'react-icons/fa';

import { Cube } from './Utils/__index__';

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
    <div className='flex flex-col bg-white p-5 xl:p-36 w-full h-full'>
      <p className='font-bold text-4xl xl:text-7xl my-2 xl:my-5'>Our Blog</p>
      <div className='w-full xl:w-8/12 relative flex justify-center items-end bg-white'>
        <div className='hidden xl:block'>
          <Image src={picture} alt='MasterPesa' className='rounded-xl' />
          <div className='absolute z-40 -top-6 -right-20'>
            <Cube />
          </div>
          <div className='absolute z-40 -bottom-6 -left-20'>
            <Cube />
          </div>
        </div>

        <div className='relative xl:absolute bg-white right-0 xl:-right-72 rounded-xl px-10 py-5 xl:p-14 shadow-md w-fit space-y-6 -bottom-10 xl:-bottom-40'>
          <div className='hidden xl:absolute w-28 h-52 bg-purplee right-14 -top-28 rounded-l-full shadow-md rotate-45 z-10'></div>
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
      <div className='xl:mt-72 mt-32 px-10 xl:px-0 w-full xl:w-10/12'>
        <Data
          date='December 23, 2022'
          title={['How to Integrate', 'With WordPress and', 'Joomla']}
        />
        <hr className='xl:my-28 my-10 w-full' />
        <Data
          date='December 12, 2022'
          title={['What Is Web Design', 'and Development?']}
        />
        <hr className='xl:my-28 my-10 w-full' />
        <Data
          date='December 12, 2022'
          title={['5 Strategy Tips to', 'Accelerate Your', 'Business Growth']}
        />
      </div>
      <div className='w-10/12 flex flex-row justify-center items-center'>
        <div className='xl:my-28 my-10 flex flex-row justify-center items-center space-x-2 border-2 border-gray-800 bg-transparent w-fit py-4 px-10 rounded-full cursor-pointer'>
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
    <div className='grid grid-cols-1 xl:grid-cols-2'>
      <div className='flex flex-col space-y-8'>
        <p className='text-gray-600 font-medium text-base'>{date}</p>
        <div className='flex flex-col text-2xl xl:text-5xl font-bold text-gray-900 tracking-wide'>
          {title.map((val, index) => (
            <p key={index}>{val}</p>
          ))}
        </div>

        <div className='flex items-center space-x-2 border-b-2 border-gray-800 tracking-wide cursor-pointer w-fit'>
          <p className='font-bold text-gray-800 text-lg'>Learn More</p>
          <FaArrowRight className='w-5 h-5' />
        </div>
      </div>
      <div className='w-full hidden xl:flex justify-end items-center relative'>
        <div className='absolute z-40 -top-24 -right-36'>
          <Timer />
        </div>
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

const Timer = () => {
  return (
    <div className='hidden xl:flex flex-col space-y-2 mt-4 justify-center items-center w-2/6'>
      <div className='flex space-x-2'>
        <div className='w-full md:w-[80px] h-[80px] flex flex-row justify-center items-center rounded-bl-full rounded-t-full rounded-xl bg-yelleoww'></div>
        <div className='w-full md:w-[80px] h-[80px] flex flex-row justify-center items-center rounded-br-full rounded-t-full bg-transparent'></div>
      </div>
      <div className='flex space-x-2'>
        <div className='w-full md:w-[80px] h-[80px] flex flex-row justify-center items-center rounded-tl-full rounded-b-full rounded-xl bg-transparent'></div>
        <div className='w-full md:w-[80px] h-[80px] flex flex-row justify-center items-center rounded-tr-full rounded-b-full bg-yelleoww'></div>
      </div>
    </div>
  );
};
