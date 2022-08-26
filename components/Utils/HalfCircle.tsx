import React from 'react';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary returns a half circle
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const HalfCircle = ({ color }: { color: string }) => {
  return (
    <div
      className={
        `absolute -rotate-45 w-24 h-48  -left-12 rounded-l-full ` + color
      }
    ></div>
  );
};

export default HalfCircle;
