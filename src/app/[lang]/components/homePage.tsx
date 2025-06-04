'use client'
import ScrollAnimation from 'react-animate-on-scroll'
import { PageTypes } from '../page'
import Hello from './hello/hello'
import AboutMe from './aboutme'
import Ability from './ability/abilities'
import Contact from './socialmedia/socialmedia'
import Interested from './Interested'
import Projects from './projects/projects'

export default function HomePage({ page }: PageTypes) {
  return (
    <>
      <div id='home'>
        <ScrollAnimation animateIn='fadeIn'>
          <Hello page={page} />
        </ScrollAnimation>
      </div>
      <div id='aboutMe'>
        <ScrollAnimation animateIn='fadeIn'>
          <AboutMe page={page} />
        </ScrollAnimation>
      </div>
      
      <div id='ability'>
        <ScrollAnimation animateIn='fadeIn'>
          <Ability />
        </ScrollAnimation>
      </div>
      <div id='project'>
        <ScrollAnimation animateIn='fadeIn'>
          <Projects page={page} />
        </ScrollAnimation>
      </div>
      
      <div id='contact'>
        <ScrollAnimation animateIn='fadeIn'>
          <Interested page={page} />
        </ScrollAnimation>
      </div>
      <div >
        <ScrollAnimation animateIn='fadeIn'>
          <Contact page={page} />
        </ScrollAnimation>
      </div>
    </>
  )
}
