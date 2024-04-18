import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import React from 'react';

const Footer = () => {
    const myRef = React.useRef(null);

    return (
        <div ref={myRef} id="footer" className='pt-[8rem] pb-[4rem] bg-slate-800'>
            <div className='grid border-b-[1px] pb-[6rem] border-blue-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem]'>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-slate-300'>
                        <MapIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-blue-400' />
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-slate-300'>Address</h1>
                        <p className='text-[17px] w-[90%] text-white opacity-60'>7 rue du terroir de chaâlis villeron</p>
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-slate-300'>
                        <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-blue-400' />
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-slate-300'>Phone</h1>
                        <p className='text-[17px] w-[90%] text-white opacity-60'>06.83.98.97.79</p>
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-slate-300'>
                        <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-blue-400' />
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-slate-300'>Mail</h1>
                        <p className='text-[17px] w-[90%] text-white opacity-60'>elooembe@hotmail.fr</p>
                    </div>
                </div>
            </div>
            <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
                <div className='text-[16px] mb-[2rem] md:mb-0 text-white opacity-20'>
                    © 2021 All rights reserved. Designed by Edmond Loembe
                </div>
                <div className='flex items-center space-x-10'>
                    <a href="https://www.instagram.com/edmond_l.s" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='text-[24px] text-white' />
                    </a>
                    <a href="https://twitter.com/edmondloembe" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className='text-[24px] text-white' />
                    </a>
                    <a href="https://www.linkedin.com/in/edmond-loembe-24ba75206" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='text-[24px] text-white' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
