import React from 'react';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary returns a cube
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Cube = () => {
  return (
    <div>
      <div className='flex flex-row relative justify-center items-center'>
        <div className='w-14 h-14 bg-purplee rotate-45  rounded-bl-xl'></div>
        <div className='w-14 h-14 bg-yelleoww rotate-45 absolute -top-[60px] rounded-tl-xl'></div>
        <div className='w-14 h-14 bg-purplee rotate-45 ml-10 rounded-tr-xl'></div>
        <div className='w-14 h-14 bg-yelleoww rotate-45 absolute top-[60px] rounded-br-xl'></div>
      </div>
    </div>
  );
};

export default Cube;
