'use client'
import { useMediaQuery } from 'react-responsive'
import { Envelope } from '@phosphor-icons/react'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { PageTypes } from '../page'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function BtnEmail({ page }: PageTypes) {
  const isDesktop = useMediaQuery({ maxWidth: 1000 })
  const [email, setEmail] = useState('contato@claudivan.dev.br')

  function handleChangeMessageEmail() {
    if (!isDesktop) {
      setEmail(page.home.email)
    }
  }

  function handleChangeMessageClick() {
    if (!isDesktop) {
      setEmail('contato@claudivan.dev.br')
    }
  }

  const handleCopyClipboard = () => {
    setEmail(page.home.copy)
   
      setTimeout(() => {
        setEmail('contato@claudivan.dev.br')
      }, 2000)
    
  }

  return (
    <>
      <Toaster
        position='bottom-left'
        reverseOrder={false}
        containerStyle={{
          position: 'relative'
        }}
      />
      <CopyToClipboard text='contato@claudivan.dev.br'>
        <button
          className='btn btn-primary btn-outline mt-5 h-16 w-full lowercase lg:h-24'
          onMouseLeave={handleChangeMessageClick}
          onMouseEnter={handleChangeMessageEmail}
          onClick={handleCopyClipboard}
        >
          <Envelope size={20} />
          {email}
        </button>
      </CopyToClipboard>
    </>
  )
}
