'use client'
import Image from 'next/image';
import img from '../../../../public/logo.png'

export default function Footer() {

    return (
        <div className='container mx-auto flex justify-center items-center flex-col mt-5'>
            <Image
                src={img}
                width={150}
                height={500}
                alt="logo"
            />
            <p className='text-neutral-50  mb-4'>Claudivan Developer - Copyright © 2023</p>
        </div>
    )
}
