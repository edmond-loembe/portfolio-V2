import React from 'react';
import SkilsItem from './SkilsItem';
import SkilsLanguage from './SkilsLanguage';

const Skils = () => {
    const myRef = React.useRef(null);

    return (
        <div ref={myRef} id="skils" className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-slate-800'>
            <h1 className='heading'>
                Education & <span className='text-blue-400'>Skill</span>
            </h1>
            <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                <div>
                    <SkilsItem title="Développeur Laravel" year="2021 - 2024" />
                    <SkilsItem title="Développeur Vue.js" year="2021 - 2024"/>
                    <SkilsLanguage
                        skill1="Php"
                        skill2="Css"
                        skill3="Javascript"
                        level1="w-[91%]"
                        level2="w-[60%]"
                        level3="w-[40%]"
                    />
                </div>
                <div>
                    <SkilsItem title="Développeur Next.js" year="2023 - 2024" />
                    <SkilsItem title="Développeur Node.js" year="2023 - 2024"/>
                    <SkilsLanguage
                        skill1="React js"
                        skill2="Next js"
                        skill3="TypeScript"
                        level1="w-[70%]"
                        level2="w-[60%]"
                        level3="w-[40%]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Skils;
