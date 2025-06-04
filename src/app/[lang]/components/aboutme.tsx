'use client'
import Lottie from 'react-lottie'
import animationData from '../../assets/lotties/aboutMe.json'
import { PageTypes } from '../page'
import { Certificate } from '@phosphor-icons/react'
import pdf from '../../../../public/cv.pdf'
import Image from 'next/image'
import img from '../../../../public/me.png'

export default function AboutMe({ page }: PageTypes) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className='container mx-auto mt-10 items-center  text-center'>
      <h1 className='mb-4 text-2xl font-bold text-neutral-50 '>
        {page.about.title}
      </h1>
      <div className='flex flex-col items-center lg:flex-row'>
        <div className='flex flex-col items-center bg-secondaryLighter p-10 lg:w-2/5'>
          <p className=' mb-4 text-start text-neutral-50 md:ml-10 md:mr-10'>
            {page.about.description}
          </p>
        </div>

        <div className='lg:w-3/5 flex flex-col items-center'>
          <Image
            src={img}
            width={300}
            height={300}
            alt="logo"
            className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <a href={pdf} download="cv.pdf">
            <button className='btn btn-primary btn-outline mt-5 h-16'>
              <Certificate size={32} />Download CV
            </button>
          </a>

        </div>
      </div>
    </div>
  )
}
