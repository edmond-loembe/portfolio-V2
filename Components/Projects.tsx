import React from 'react';
import Image from 'next/image';

const Projects = () => {
    const myRef = React.useRef(null);

    return (
        <div ref={myRef} id="projects" className='bg-slate-900 pt-[4rem] md:pt-[8rem] pb-[1rem]'>
            <h1 className='heading'>
                My <span className='text-blue-400'>Projects</span>
            </h1>
            <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
                <div data-aos="fade-up">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/delegatio.png"
                            alt="delegatio"
                            layout="fill"
                            className='object-contain'
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/quintesens.png"
                            alt="quintesens"
                            layout="fill"
                            className='object-contain'
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/coaching.png"
                            alt="coaching"
                            layout="fill"
                            className='object-contain'
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="900">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/portfolio.png"
                            alt="portfolio"
                            layout="fill"
                            className='object-contain'
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="1200">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/boad.png"
                            alt="boad"
                            layout="fill"
                            className='object-contain'
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="1600">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/valumen.png"
                            alt="valumen"
                            layout="fill"
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
