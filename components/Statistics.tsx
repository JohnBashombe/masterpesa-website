import React from 'react';

import {
  FaCommentAlt,
  FaDollarSign,
  FaPhoneVolume,
  FaFunnelDollar,
} from 'react-icons/fa';

import { IStatisticsProps } from '../interfaces/IStatistics';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Statistics
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Statistics = () => {
  return (
    <div className='w-full h-full bg-yelleoww p-10 xl:p-36'>
      <div className='grid grid-cols-2 gap-5 space-y-2 xl:space-y-5'>
        <Entry
          number={'700,000+'}
          description={'Mobile Money Transactions'}
          icon={<FaFunnelDollar className='w-8 h-8 text-white' />}
        />
        <Entry
          number={'2,000+'}
          description={'Partneship with Businesses'}
          icon={<FaPhoneVolume className='w-8 h-8 text-white -rotate-45' />}
        />
        <Entry
          number={'50,000+'}
          description={'E-commerce Transactions'}
          icon={<FaDollarSign className='w-8 h-8 text-white' />}
        />
        <Entry
          number={'7,500+'}
          description={'Client Testimonials'}
          icon={<FaCommentAlt className='w-8 h-8 text-white' />}
        />
      </div>
    </div>
  );
};

export default Statistics;

const Entry = ({
  icon,
  number,
  description,
}: IStatisticsProps): JSX.Element => {
  return (
    <div className='flex flex-col space-y-2 xl:space-y-5 justify-center items-center'>
      <div className='bg-gray-900 w-16 h-16 flex justify-center items-center rounded-full'>
        {icon}
      </div>
      <p className='text-3xl xl:text-8xl font-bold tracking-wider'>{number}</p>
      <p className='text-gray-600 text-base xl:text-xl font-medium'>
        {description}
      </p>
    </div>
  );
};
