'use client'
import LocaleSwitcher from './locale-switcher'
import Image from 'next/image'
import img from '../../../../../public/logo.png'
import { usePathname, useRouter } from 'next/navigation'
import Anchor from './anchor'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const path = pathname.substring(1, 3);
  
  return (
    <header className='flex justify-between p-5 w-[100%] p5 fixed top-0 z-10 bg-primaryDarker'>
      <Image
        className='cursor-pointer'
        src={img}
        width={150}
        height={500}
        alt="logo"
        onClick={() => router.push(`/${path}`)}
      />
      <div className='flex gap-1'>
      {pathname == '/pt' || pathname == '/en' ? <Anchor/> : ''}
      <LocaleSwitcher />
      </div>
     
    </header>
  )
}