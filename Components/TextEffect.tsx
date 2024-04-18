import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Student',
        1500,
        'Web Developer',
        1500,
        'Designer',
        1500,
        'Programmer',
        1500,
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-blue-400 font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;
