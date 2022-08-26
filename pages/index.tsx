import Head from 'next/head';
import React from 'react';

import App from './_app';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the home page
 * @returns {JSX.Element}: JSX Code for Home
 * @license MIT
 * @version 1.0.0
 */
const Home = (): JSX.Element => {
  return (
    <div className='w-full h-full'>
      <Head>
        <title>Master Pesa Tz</title>
        <meta name='mobile money wallet' content='Master Pesa Tz.' />
        {/* <link rel='icon' href='../assets/clock-min.jpg' /> */}
      </Head>
      <body className='w-full h-full'>
        <App />
      </body>
    </div>
  );
};

export default Home;
