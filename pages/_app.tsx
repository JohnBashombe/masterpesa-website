import React from 'react';
import '../styles/globals.css';

import {
  Blog,
  Info,
  Grow,
  Team,
  TopBar,
  Header,
  Footer,
  Service,
  Contact,
  PayingIt,
  Campaign,
  Statistics,
  WorkWithUs,
} from '../components/__index__';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the main app that imports our styles
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const App = (): JSX.Element => {
  return (
    <div className='w-full h-full bg-pinky'>
      <TopBar />
      <Header />
      <WorkWithUs />
      <Statistics />
      <Grow />
      <Service />
      <Info />
      <PayingIt />
      <Campaign />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
