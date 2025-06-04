'use client'
import { ProjectsArray } from '../../../../utils/array'
import { PageTypes } from '../../page'
import IconProject from './iconProjects'

export default function Projects({ page }: PageTypes) {
  const projectsWeb = ProjectsArray.filter(project => project.stack === 'web')
  const projectsMobile = ProjectsArray.filter(
    project => project.stack === 'mobile'
  )
  return (
    <div className='container mx-auto mt-10 flex flex-col items-center justify-center'>
      <h1 className='mt-6 text-2xl font-bold text-neutral-50'>
        {page.projects.titleweb}
      </h1>
      <div className='mt-7 flex flex-wrap justify-center gap-5'>
        {projectsWeb.map(project => (
          <IconProject
            key={project.src}
            img={project.img}
            link={project.link ? project.link : ''}
            name={project.name}
            github={project.github}
            src={project.src}
            size={300}
          />
        ))}
      </div>
      <h1 className='mt-10 text-2xl font-bold text-neutral-50'>
        {page.projects.titlemobile}
      </h1>
      <div className='mt-7 flex flex-wrap justify-center gap-5'>
        {projectsMobile.map(project => (
          <IconProject
            key={project.src}
            img={project.img}
            link={project.link ? project.link : ''}
            name={project.name}
            github={project.github}
            src={project.src}
            size={200}
          />
        ))}
      </div>
    </div>
  )
}
