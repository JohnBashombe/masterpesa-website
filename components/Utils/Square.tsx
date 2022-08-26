import React from 'react';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary returns a square rotated at 45 degrees
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const Square = ({ color }: { color: string }) => {
  return (
    <div
      className={
        `w-20 h-20 md:w-32 md:h-32 rounded-lg rotate-45 absolute -bottom-16 shadow ` +
        color
      }
    ></div>
  );
};

export default Square;
