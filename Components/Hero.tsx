import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon, EyeIcon } from '@heroicons/react/20/solid';

const Hero = () => {
    const myRef = React.useRef(null);

    return (
    <div ref={myRef} id="hero" className="h-[88vh] bg-slate-900 mt-[10vh] bg-cover bg-center">
        <Particle/>
        <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
            <div className='z-[10000]'>
                <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                    HI, I'M <span className='text-blue-400'>Edmond</span>
                </h1>
                <TextEffect/>
                <p className='mt-[1.5rem] text-[18px] text-slate-300 overflow-auto max-h-[300px]'>
                    Je suis Edmond Loembe. Ma mosaïque identitaire se compose des riches nuances de la Franco-Congolité, une fusion moderne de cultures et d'héritages.
                    Les aléas du destin m'ont conduit vers des rivages lointains, où les arômes exotiques du monde embaument l'air. De la Tunisie à la Guadeloupe pour n'en citer que deux, ces terres m'ont révélé leurs secrets, leurs récits façonnés par les soubresauts de l'Histoire. Chaque rue, chaque plage, chaque recoin était une symphonie vibrante, une source d'inspiration inépuisable pour mon âme en quête de découvertes.
                    Mon éducation, résolument moderne, a débuté dans l'autonomie. Dès mes premières années, j'ai tracé mon propre chemin, sous le regard bienveillant de mes parents. cultivant en moi la soif de connaissance et le désir de rencontres enrichissantes. Ainsi, je porte en moi cette capacité à apprendre, peu importe le lieu.
                </p>
                <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                    <a href="/images/CV Edmond Loembe.pdf" download className='px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase
                        bg-blue-600 text-black flex items-center space-x-2'>
                        <p>Download Cv</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                    </a>
                    <a href="/images/CV Edmond Loembe.pdf" target="_blank" className='px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase
                        bg-blue-600 text-black flex items-center space-x-2'>
                        <EyeIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                        <p>
                            Watch the Cv
                        </p>
                    </a>
                </div>
            </div>
            <div className='w-[500px] hidden bg-blue-400 relative lg:flex items-center rounded-full h-[500px]'>
                <Image
                    src="/images/moi_ia.jpg"
                    alt="user"
                    layout="fill"
                    className="object-cover rounded-full"
                />
            </div>
        </div>
    </div>
    );
}
export default Hero;
