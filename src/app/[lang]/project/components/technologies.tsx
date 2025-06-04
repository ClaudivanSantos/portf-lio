import Image from "next/image";
import { motion } from 'framer-motion'

interface ITechnologiesProps {
    title: string
    project: {
        tec1: string
        tec2: string
        tec3: string
    }
}

export default function Technologies({ title, project }: ITechnologiesProps) {

    
    return (
        <>
            <h1 className='mb-4 mt-10 text-2xl font-bold text-neutral-50'>
                {title}
            </h1>
            <div className='flex justify-center gap-7'>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        textShadow: '0px 0px 4px gray'
                    }}
                >
                    <Image
                        width={50}
                        height={50}
                        src={project.tec1}
                        alt='Tecnology 1'
                        className='m-2 w-16 rounded-lg bg-base-100 p-2'
                    />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        textShadow: '0px 0px 4px gray'
                    }}
                >
                    <Image
                        width={50}
                        height={50}
                        src={project.tec2}
                        alt='Tecnology 1'
                        className='m-2 w-16 rounded-lg bg-base-100 p-2'
                    />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        textShadow: '0px 0px 4px gray'
                    }}
                >
                    <Image
                        width={50}
                        height={50}
                        src={project.tec3}
                        alt='Tecnology 1'
                        className='m-2 w-16 rounded-lg bg-base-100 p-2'
                    />
                </motion.div>
            </div>
        </>
    )
}