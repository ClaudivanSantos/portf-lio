import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import dynamic from 'next/dynamic'

export interface PageTypes {
  page: {
    home: {
      hello: string
      name: string
      job: string
      front: string
      back: string
      mobile: string
      contact: string
      message: string
      email: string
      copy: string
    }
    about: {
      title: string
      description: string
    }
    interested: {
      title: string
      description: string
    }
    projects: {
      titleweb: string
      titlemobile: string
    }
    contact: {
      title: string
    }
    socialmedia: {
      title: string
    }
    project: {
      btngit: string
      btnlink: string
      description: string
      video: string
      technologies: string
    }
  }
}

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  const HomePage = dynamic(() => import('./components/homePage'), {
    ssr: false,
  })

  return (
    <div>
       <HomePage page={page}/>
    </div>
  )
}
