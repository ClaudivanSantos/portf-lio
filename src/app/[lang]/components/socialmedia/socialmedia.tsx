'use client'
import {
  InstagramLogo,
  Envelope,
  LinkedinLogo,
  GithubLogo
} from '@phosphor-icons/react'
import IconP from './icon'
import 'animate.css/animate.min.css'
import { PageTypes } from '../../page'

export default function SocialMedia({ page }: PageTypes) {
  return (
    
      <div className='container mx-auto mt-10 flex flex-col items-center justify-center'>
        <h1 className='mb-4 text-2xl font-bold text-neutral-50'>
          {page.socialmedia.title}
        </h1>
        <div className='flex gap-8 lg:gap-16'>
          <IconP
            Icon={InstagramLogo}
            link='https://www.instagram.com/claudivan.dev/'
          />
          <IconP
            Icon={LinkedinLogo}
            link='https://www.linkedin.com/in/claudivansantos/'
          />
          <IconP Icon={Envelope} link='mailto:claudivansantos61@gmail.com/' />
          <IconP Icon={GithubLogo} link='https://github.com/ClaudivanSantos/' />
        </div>
      </div>
  )
}
