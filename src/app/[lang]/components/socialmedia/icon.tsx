'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

interface IIconProps {
  Icon: any;
  link: string;
}

export default function IconP({ Icon, link }: IIconProps) {
  return (
    <div className='cursor-pointer'>
      <Link href={link} target='_blank'>
      <motion.div
      whileHover={{
        scale: 1.1,
        textShadow: '0px 0px 4px gray',
      }}
    >
      <Icon className="bg-base-100 rounded-lg p-1 m-2 cursor-pointer" size="50"/>
    </motion.div>
    </Link>
    </div>
  )
}


