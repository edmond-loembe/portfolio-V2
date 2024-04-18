import React from "react";
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const About = () => {
    const myRef = React.useRef(null);

    return (
        <div ref={myRef} id="about" className="bg-slate-800 pb-[3rem] pt-[4rem] md:pt-[8rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
                <div>
                    <h1 className="text-[20px] font-bold uppercase text-blue-400 mb-[1rem]">
                        ABOUT ME
                    </h1>
                    <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize
                        mb-[3rem] font-bold text-white">
                        Learning <span className="text-blue-400">Vision</span>
                    </h2>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        {/* <span className="w-[100px] hidden md:block h-[5px] bg-blue-400 rounded-sm"></span> */}
                        <p className="text-[19px] text-slate-300 w-[80%]">
                        Actuellement, je suis inscrit en Master 2 spécialisé en Cybersécurité à Epitech, dans le cadre d'une formation MSC. Après l'obtention de mon diplôme de développeur web au niveau Bac+2, j'ai suivi une phase pré-MSC qui m'a permis d'obtenir l'équivalent d'une licence. Par la suite, j'ai intégré le programme MSC 1 puis MSC 2, avec une spécialisation en cybersécurité.
                        </p>
                    </div>
                    <a href="/images/CV Edmond Loembe.pdf" download className='w-60 px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase
                        bg-blue-600 text-black flex items-center space-x-2 '>
                        <p>Download Cv</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                    </a>
                </div>
                <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                    <Image
                        src="/images/moi_ia4.PNG"
                        alt="user"
                        layout="fill"
                        objectFit="contain"
                        className="relative z-[11] w-[100%] h-[100%] object-contain rounded-[10px]"
                    />
                    <div className="absolute w-[100%] h-[100%] z-[10] bg-[#0A5DAE] top-[-2rem] right-[-2rem] rounded-[10px]">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
