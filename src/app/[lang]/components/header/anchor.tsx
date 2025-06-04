'use client'
import { List } from '@phosphor-icons/react'
import { usePathname } from 'next/navigation'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useMediaQuery } from 'react-responsive'

export default function Anchor() {
  const pathname = usePathname()
  const isDesktop = useMediaQuery({ maxWidth: 1000 })

  return (
    <>
      {!isDesktop ? (
        <div className='flex flex-row gap-1'>
          <button>
            <AnchorLink
              offset='200'
              href='#home'
              className='rounded-lg p-2 font-light text-neutral-50 hover:bg-primary'
            >
              {pathname == '/pt' ? 'Inicio' : 'Home'}
            </AnchorLink>
          </button>

          <button>
            <AnchorLink
              offset='200'
              href='#aboutMe'
              className='rounded-lg p-2 font-light text-neutral-50 hover:bg-primary'
            >
              {pathname == '/pt' ? 'Sobre mim' : 'About me'}
            </AnchorLink>
          </button>

          <button>
            <AnchorLink
              offset='200'
              href='#ability'
              className='rounded-lg p-2 font-light text-neutral-50 hover:bg-primary'
            >
              {pathname == '/pt' ? 'Habilidades' : 'Abilities'}
            </AnchorLink>
          </button>
          <button>
            <AnchorLink
              offset='200'
              href='#project'
              className='rounded-lg p-2 font-light text-neutral-50 hover:bg-primary'
            >
              {pathname == '/pt' ? 'Projetos' : 'Projects'}
            </AnchorLink>
          </button>
          <button>
            <AnchorLink
              offset='200'
              href='#contact'
              className='rounded-lg p-2 font-light text-neutral-50 hover:bg-primary'
            >
              {pathname == '/pt' ? 'Contato' : 'Contact'}
            </AnchorLink>
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
