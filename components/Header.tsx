import React from 'react';

import Image from 'next/image';

import {
  FaGoogle,
  FaCcVisa,
  FaTiktok,
  FaTwitter,
  FaFacebook,
  FaArrowRight,
  FaPinterestP,
  FaCcMastercard,
} from 'react-icons/fa';

import picture from '../assets/clock-min.jpg';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Header
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Header = (): JSX.Element => {
  return (
    <div className='w-full h-full md:mx-auto my-4 md:my-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-2 md:pl-36'>
        <div className='flex flex-col w-full py-5 space-y-4'>
          <div className='flex flex-col tracking-wide text-4xl md:text-7xl font-extrabold'>
            <div className='flex flex-row space-x-4'>
              <p>Drives</p>
              <div className='bg-yelleoww'>
                <span>Mobile</span>
              </div>
            </div>
            <p>Money</p>
            <p>Transactions</p>
          </div>
          <p className='text-base font-medium text-gray-500 tracking-normal py-10'>
            Choose MasterPesa as your personnal mobile wallet and
            <br />
            profite from all the benefits we have to offer by connecting your
            <br /> only one wallet to all mobile money wallets in Tanzania.
          </p>
          <div className='flex flex-row justify-center items-center space-x-4 bg-gray-900 cursor-pointer py-5 px-16 h-auto w-fit rounded-full'>
            <p className='text-white text-lg font-medium'>Get Started</p>
            <FaArrowRight className='text-white w-5 h-5' />
          </div>
          <div className='flex flex-row justify-start items-center space-x-4 text-3xl py-10 text-gray-700'>
            <FaGoogle className='cursor-pointer hover:text-gray-900' />
            <FaFacebook className='cursor-pointer hover:text-gray-900' />
            <FaTiktok className='cursor-pointer hover:text-gray-900' />
            <FaTwitter className='cursor-pointer hover:text-gray-900' />
            <FaCcMastercard className='cursor-pointer hover:text-gray-900' />
            <FaCcVisa className='cursor-pointer hover:text-gray-900' />
            <FaPinterestP className='cursor-pointer hover:text-gray-900' />
          </div>
        </div>
        <div className='hidden md:flex flex-col justify-center w-full h-full'>
          <Image
            src={picture}
            height={'2500px'}
            alt='masterpesa photo'
            className='rounded-l-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
