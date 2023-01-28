import React from 'react';
// import data
import { navData } from '../data';

const Nav = () => {
  return (
  <nav className='w-full h-full'>
    <ul className='h-full flex flex-col justify-center items-center gap-y-7'>
      {navData.map((item, i) => {
        return (
          <li key={i}>
            <a className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-300' href={item.href}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  </nav>
  );
};

export default Nav;
