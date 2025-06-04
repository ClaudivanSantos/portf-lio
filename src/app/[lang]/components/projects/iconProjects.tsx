'use client'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export interface IProjectProps {
  src: string
  link: string
  name: string
  github: string
  img: string
  size: number
}

export default function IconProject(props: IProjectProps) {
  const router = useRouter()
  const pathName = usePathname()
  const path = pathName.substring(0, 3);

  const handleClick = (src: string) => {
    router.push(`${path}/project/${src}`)
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        textShadow: '0px 0px 4px gray'
      }}
    >
      <div className='flex flex-col items-center rounded-lg bg-base-100 text-center'>
        <h1 className='mt-2 text-lg font-bold text-neutral-50'>{props.name}</h1>
        <Image
          className='m-2 cursor-pointer p-2'
          src={props.img}
          alt={props.name}
          width={props.size}
          height={props.size}
          onClick={() => handleClick(props.src)}
        />
      </div>
    </motion.div>
  )
}
