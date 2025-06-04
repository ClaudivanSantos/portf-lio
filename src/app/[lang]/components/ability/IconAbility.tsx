'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ILogoProps {
  src: string;
  onClick: () => void;
}

export const IconAbility: React.FC<ILogoProps> = ({ src, onClick }) => {

  return (
    <div className='flex'>
      <motion.div
        whileHover={{
          scale: 1.1,
          textShadow: '0px 0px 4px gray',
        }}
      >

        <Image className='p-2 m-2 cursor-pointer bg-base-100 rounded-lg ' src={src} alt='' height={80} width={80} onClick={onClick}/>
      </motion.div>
    </div>
  );
};