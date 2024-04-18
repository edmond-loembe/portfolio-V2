import React from 'react';

interface Props {
    title: string;
    year: string;
}

const SkilsItem = ({ title, year }:Props) => {
    return (
        <div className='mb-[4rem] md:mb-[8rem]'>
            <span className='px-[2rem] text-blue-200 py-[0.9rem] font-bold text-[18px] border-[2px] border-blue-200'>
                {year}
            </span>
            <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
                {title}
            </h1>
            <p className='text-slate-300 font-normal w-[80%] text-[17px] opacity-80'>
            Au cours de mes trois années d'alternance chez Ayctor, j'ai eu l'opportunité d'immerger dans les technologies modernes. Dans cet environnement dynamique, j'ai été plongé dans des projets concrets où j'ai pu appliquer mes connaissances théoriques à des cas réels. Grâce à l'encadrement et aux défis stimulants proposés par l'équipe d'Ayctor, j'ai développé une solide expertise dans cette techno, acquérant ainsi une compréhension approfondie de ses principes et de ses applications pratiques.            </p>
        </div>
    );
}

export default SkilsItem;
