import React from 'react';
import {
  FaArrowRight,
  FaListUl,
  FaSearch,
  FaTools,
  FaUserAstronaut,
} from 'react-icons/fa';

import { IService } from '../interfaces/IService';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary Company Services
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Service = (): JSX.Element => {
  return (
    <div className='bg-purplee py-36'>
      <div className='flex flex-col'>
        <div className='text-7xl font-bold text-white px-36 space-y-2'>
          <p>Full Service</p>
          <p>Digital Marketing</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-5 md:gap-14'>
          <AService
            title={['Research and', 'Discovery']}
            description={[
              'We will analyse direct and indirect',
              'competitor research. Research your',
              'audience and their mindset, Audit,',
              'your existing channels',
            ]}
            icon={<FaSearch className='text-white w-8 h-8' />}
            rounded={'right'}
          />
          <AService
            title={['Marketing', 'Strategy']}
            description={[
              'Setting goals, and KPIs to be able to',
              'measure success and ROI. Marketing',
              'strategy, using the findings from the',
              'digital audit.',
            ]}
            icon={<FaTools className='text-white w-8 h-8' />}
            rounded={'left'}
          />
          <AService
            title={['Project', 'Management']}
            description={[
              'Working closely with your in-house',
              'marketing team and/or agency',
              'Ensure the campaign is set up with',
              'your goals in mind',
            ]}
            icon={<FaListUl className='text-white w-8 h-8' />}
            rounded={'right'}
          />
          <AService
            title={['Consultant', 'Specialist']}
            description={[
              'We will train your staff and find',
              'the right agency for you and your',
              'needs. Flexible attention based on',
              'your needs',
            ]}
            icon={<FaUserAstronaut className='text-white w-8 h-8' />}
            rounded={'left'}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;

const AService = ({ icon, title, description, rounded }: IService) => {
  return (
    <div
      className={
        `bg-yelleoww px-36 py-20 space-y-8 ` +
        (rounded === 'left' ? ' rounded-l-2xl' : ' rounded-r-2xl')
      }
    >
      <div className='bg-gray-900 w-fit p-5 rounded-full'>{icon}</div>
      <div className='text-4xl font-bold'>
        {title.map((val, index) => (
          <p key={index}>{val}</p>
        ))}
      </div>
      <div className='text-gray-600 font-medium'>
        {description.map((val, index) => (
          <p key={index}>{val}</p>
        ))}
      </div>

      <div className='flex items-center space-x-2 border-b-2 border-gray-800 tracking-wide cursor-pointer w-fit'>
        <p className='font-bold text-gray-800 text-lg'>Learn More</p>
        <FaArrowRight className='w-5 h-5' />
      </div>
    </div>
  );
};