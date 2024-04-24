import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:Props) => {

    const handleScroll = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}>
            <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
                <div onClick={closeNav}  className='nav-link-mobile'><a onClick={() => handleScroll('hero')}>HOME</a></div>
                <div onClick={closeNav}  className='nav-link-mobile'><a onClick={() => handleScroll('about')}>ABOUT</a></div>
                <div onClick={closeNav}  className='nav-link-mobile'><a onClick={() => handleScroll('services')}>SERVICES</a></div>
                <div onClick={closeNav}  className='nav-link-mobile'><a onClick={() => handleScroll('skils')}>SKILLS</a></div>
                <div onClick={closeNav}  className='nav-link-mobile'><a onClick={() => handleScroll('projects')}>PROJECTS</a></div>
                <div onClick={closeNav}  className='nav-link-mobile'><a onClick={() => handleScroll('footer')}>CONTACT</a></div>
            </div>
            <div onClick={closeNav} className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-blue-400'>
                <XMarkIcon/>
            </div>
        </div>
    );
}
export default MobileNav;
