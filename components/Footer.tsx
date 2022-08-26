import React from 'react';
import {
  FaTwitter,
  FaCopyright,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from 'react-icons/fa';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Footer
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Footer = (): JSX.Element => {
  return (
    <div className='bg-gray-900 py-36 grid grid-cols-1 md:grid-cols-2 text-white overflow-y-hidden overflow-x-hidden'>
      <div className='flex flex-col justify-center items-center pl-36'>
        <p className='font-bold text-6xl'>Master Pesa Inc.</p>
        <div className='relative mt-24 w-full text-center flex justify-center items-center'>
          <p className='z-20 font-medium text-base absolute w-full top-0'>
            Drop us a line, and we'll get in touch.
          </p>
          <p className='z-50 font-bold text-5xl absolute w-full top-14'>
            info@masterpesa.com
          </p>
          <p className='z-50 font-bold text-5xl absolute w-full top-32'>
            Or Contact Us
          </p>
          <div className='w-52 h-52 rotate-45 bg-purplee shadow-md rounded-xl z-10'></div>
        </div>
        <div className='text-white mt-40'>
          <p className='flex justify-start items-center'>
            Copyright <FaCopyright className='mx-2' />
            {new Date().getFullYear()} MasterPesa. By using this site or any
            part of
          </p>
          <p>
            Master Pesa Inc., You're agreeing to our Terms of Service and
            Privacy Policy
          </p>
        </div>
      </div>
      <div className='flex relative'>
        <div className='flex flex-col space-y-4 h-full justify-center items-start'>
          <p className='cursor-pointer hover:text-white/70'>Services</p>
          <p className='cursor-pointer hover:text-white/70'>Work</p>
          <p className='cursor-pointer hover:text-white/70'>About</p>
          <p className='cursor-pointer hover:text-white/70'>Ressources</p>
        </div>
        <div className='w-3/4 h-3/4 bg-yelleoww rounded-t-full -rotate-45 absolute top-10 right-0 flex flex-row justify-center items-center'>
          <div className='rotate-45 flex flex-row justify-center items-center space-x-4 mt-5'>
            <Social icon={<FaFacebookF className='w-5 h-5' />} />
            <Social icon={<FaTwitter className='w-5 h-5' />} />
            <Social icon={<FaPinterestP className='w-5 h-5' />} />
            <Social icon={<FaInstagram className='w-5 h-5' />} />
            <Social icon={<FaLinkedinIn className='w-5 h-5' />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Social = ({ icon }: { icon: JSX.Element }): JSX.Element => {
  return (
    <div className='bg-black w-fit p-5 rounded-full cursor-pointer hover:text-white/70'>
      {icon}
    </div>
  );
};
