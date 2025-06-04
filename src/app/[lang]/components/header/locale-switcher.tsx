'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'
import { Translate } from '@phosphor-icons/react'
import ReactCountryFlag from 'react-country-flag'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const path = pathName.substring(1, 3);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='dropdown dropdown-end '>
      <label tabIndex={0} className='btn m-1 bg-background'>
        <Translate size={15} />
      </label>
      <ul
        tabIndex={0}
        className='menu dropdown-content rounded-box z-[1] flex w-28 gap-2 bg-background shadow'
      >
        {i18n.locales.map(locale => {
          return (
            <div className='flex rounded-lg p-2 hover:bg-primaryDarker' key={locale} >
              <Link
                className={`flex content-center items-center text-center ${locale === path ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                href={redirectedPathName(locale)}
              >
                <ReactCountryFlag
                  className='mr-1'
                  countryCode={locale == 'pt' ? 'BR' : 'US'}
                  svg
                />
                {locale == 'pt' ? 'Português' : 'English'}
              </Link>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
