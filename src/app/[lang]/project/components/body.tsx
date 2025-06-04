'use client'
import { GithubLogo, NavigationArrow } from '@phosphor-icons/react'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import { ProjectsArray } from '@/src/utils/array'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Lottie from 'react-lottie'
import animationData from '../../../assets/lotties/coffe.json'
import { PageTypes } from '../../page'
import Technologies from './technologies'

interface Projects {
  github: string
  img: string
  link: string
  name: string
  src: string
  tec1: string
  tec2: string
  tec3: string
  youtube?: string
  stack: string
  descpt: string
  descen: string
}

export default function Body({ page }: PageTypes) {
  const [projects, setProjects] = useState<Projects[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const pathname = usePathname()
  const pathParts = pathname.split('/')
  const lang = pathParts[1]
  const id = pathParts[pathParts.length - 1]
  function filterProject() {
    const newProject = ProjectsArray.filter(project => project.src === id)
    setProjects(newProject)
  }

  useEffect(() => {
    filterProject()
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='mt-32 flex justify-center text-center'>
      {projects.length !== 0 && !isLoading ? (
        projects.map(project => (
          <div key={project.src}>
            <h1 className='mb-4 text-2xl font-bold text-neutral-50'>
              {project.name}
            </h1>
            <div className='flex justify-center'>
              <Image
                src={project.img}
                alt='Project Image'
                width={project.stack == 'web' ? 500 : 250}
                height={500}
              />
            </div>

            <div className='mt-4 flex flex-col justify-center gap-5 lg:flex-row'>
              {project.link && (
                <Link href={project.github} target='_blank'>
                  <button className='text-transform: btn btn-primary capitalize'>
                    <GithubLogo />
                    {page.project.btngit}
                  </button>
                </Link>
              )}
              {project.link ? (
                <Link href={project.link} target='_blank'>
                  <button className='text-transform: btn btn-primary capitalize'>
                    <NavigationArrow size={20} />
                    {page.project.btnlink}
                  </button>
                </Link>
              ) : (
                ''
              )}
            </div>

            <div className='container mx-auto mt-10 flex flex-col'>
              <h1 className='mb-4 text-2xl font-bold text-neutral-50'>
                {page.project.description}
              </h1>
              <p className='container mx-auto'>
                {lang == 'pt' ? project.descpt : project.descen}
              </p>
            </div>

            <div className='mt-10 flex flex-col items-center'>
              <h1 className='mb-4 text-2xl font-bold text-neutral-50'>
                {page.project.video}
              </h1>

              <div className='flex w-[300px] sm:w-[450px] md:w-[550px] lg:w-[650px]'>
                {/*  @ts-ignore*/}
                <ReactPlayer url={project.youtube} controls className='w-8' />
              </div>
            </div>

            <Technologies project={project} title={page.project.technologies} />
          </div>
        ))
      ) : (
        <div className='h-[69vh]'>
          <Lottie options={defaultOptions} width={300} height={300} />
        </div>
      )}
    </div>
  )
}
