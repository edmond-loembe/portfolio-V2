import { Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {

    const myRef = React.useRef(null);

    const handleScroll = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div className='w-[100%] fixed z-[100000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                Edmond
                <span className='text-blue-400'>Loembe</span>
            </h1>
            <div className='nav-link'><a onClick={() => handleScroll('hero')}>HOME</a></div>
            <div className='nav-link'><a onClick={() => handleScroll('about')}>ABOUT</a></div>
            <div className='nav-link'><a onClick={() => handleScroll('services')}>SERVICES</a></div>
            <div className='nav-link'><a onClick={() => handleScroll('skils')}>SKILLS</a></div>
            <div className='nav-link'><a onClick={() => handleScroll('projects')}>PROJECTS</a></div>
            <div className='nav-link'><a onClick={() => handleScroll('footer')}>CONTACT</a></div>
            <div onClick={openNav}>
                <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-blue-300' />
            </div>
        </div>
    </div>
  );
}
export default Nav;
