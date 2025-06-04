'use client'
import animationData from '../../../assets/lotties/plane.json'
import { PageTypes } from '../../page'
import Lottie from 'react-lottie'
import img from '../../../../../public/purple-circle.png'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { Envelope } from '@phosphor-icons/react'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import BtnEmail from '../btnEmail'

export default function Message({ page }: PageTypes) {
  const isDesktop = useMediaQuery({ maxWidth: 1000 })
  const [email, setEmail] = useState('claudivansantos61@gmail.com')

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  function handleChangeMessageEmail() {
    setEmail(page.home.email)
  }

  function handleChangeMessageClick() {
    setEmail('claudivansantos61@gmail.com')
  }

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText('claudivansantos61@gmail.com').then(() => {
      toast.success(page.home.copy)
    })
  }

  return (
    <div className='lg:mb-28- container mx-auto items-center text-center lg:flex'>
      <div className='relative lg:w-3/5 mb-14 lg:mb-0'>
        <Image
          src={img}
          alt='circle'
          className='absolute inset-0 h-auto lg:w-[55%] w-[50%]'
        />
        <Lottie
          options={defaultOptions}
          width={isDesktop ? 300 : 500}
          height={isDesktop ? 300 : 500}
        />
      </div>
      <div className='text-center lg:w-2/5'>
        <p className='whitespace-pre-line text-lg text-neutral-50'>
          {page.home.message}
        </p>
        <BtnEmail page={page}/>
      </div>
    </div>
  )
}
