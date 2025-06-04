'use client'
import { TypeAnimation } from 'react-type-animation'
import { PageTypes } from '../../page'
import Message from './message'
import { useMediaQuery } from 'react-responsive'

export default function Hello({ page }: PageTypes) {
  const isDesktop = useMediaQuery({ maxWidth: 1000 })
  const size = isDesktop ? '2em' : '3em'

  return (
    <div className='container mx-auto mt-32'>
      <div className='flex flex-col items-center text-center gap-2'>
        <div className='gap-4 lg:flex'>
          <h1 className='lg:text-5xl text-3xl font-bold text-neutral-50'>
            {page.home.hello}
          </h1>
          <h1 className='lg:text-5xl text-3xl font-bold text-greenLighter text-border-white'>
            {page.home.name}
          </h1>
        </div>
        <h1 className='lg:text-5xl text-3xl font-bold text-neutral-50'>
          {page.home.job}
        </h1>
        <div className='gap-4 lg:flex items-center'>


          <TypeAnimation
            sequence={[
              `${page.home.front}`,
              2000,
              `${page.home.back}`,
              2000,
              `${page.home.mobile}`,
              2000
            ]}
            style={{
              fontSize: size,
              color: '#fff',
              margin: 0,
              fontWeight: 'bold'
            }}
            wrapper='h3'
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
      <Message page={page} />
    </div>
  )
}
