import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Header from './components/header/header'

import { Poppins } from 'next/font/google'
import Footer from './components/footer'
const poppins = Poppins({
  weight: ['700', '100', '300', '200', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'claudivan.dev',
  description: 'Esse é meu portfólio onde você poderá ver meus projetos'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} className='bg-gradient-to-b from-primaryDarker to-background'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
        ></link>
      </head>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
