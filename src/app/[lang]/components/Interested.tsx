'use client'
import Lottie from 'react-lottie'
import animationData from '../../assets/lotties/coding.json'
import { PageTypes } from '../page'
import BtnEmail from './btnEmail'

export default function Interested({ page }: PageTypes) {
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
        {page.interested.title}
      </h1>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='flex flex-col items-center bg-secondaryLighter p-10 lg:w-2/5'>
          <p className=' mb-4  text-start text-neutral-50 md:ml-10 md:mr-10'>
            {page.interested.description}
          </p>
        </div>

        <div className='lg:w-2/5'>
          <Lottie options={defaultOptions} width={300} height={300} />
          <BtnEmail page={page} />
        </div>
      </div>
    </div>
  )
}
