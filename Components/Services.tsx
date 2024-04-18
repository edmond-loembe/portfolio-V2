import { CodeBracketSquareIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';
import { SiCyberdefenders } from "react-icons/si";
import React from 'react';

const Services = () => {
    const myRef = React.useRef(null);

    return (
        <div ref={myRef} id="services" className='bg-slate-900 pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            <p className='heading'>
                My <span className='text-blue-400'>Services</span>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
                <div data-aos="fade-right">
                    <div className='bg-green-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            Back end
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Expert en développement backend avec une maîtrise avancée de PHP, offrant des solutions robustes et évolutives pour répondre aux besoins de votre application.
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                    <div className='bg-blue-400 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            front end
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Spécialiste du développement frontend, je maîtrise CSS, React et Vue.js pour créer des interfaces utilisateur élégantes, réactives et intuitives.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="500">
                    <div className='bg-slate-500 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <SiCyberdefenders className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            cyber security
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            En formation dans le domaine de la cybersécurité, j'apprend à développer mes compétences pour protéger efficacement les systèmes informatiques.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
