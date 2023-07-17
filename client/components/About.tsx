import { PiProjectorScreenChart } from 'react-icons/pi'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { Link } from 'react-router-dom'

import resume from '../../public/Quinn-Gibson-Resume-2023.pdf'

const About = () => {
  return (
    <>
      <div className="header-links">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <p className="position-header-links">Resume</p>
        </a>
        <Link to="contact" className="contact">
          <p className="position-header-links">Contact</p>
        </Link>
      </div>

      <h1>QUINN GIBSON</h1>
      <h2>Full Stack Software Developer</h2>
      <div className="about-content">
        <p>
          Hey! My name is Quinn and I'm a full stack software developer. I got
          into technology in July 2021, completing a Certificate in IT
          Essentials before going on to do the first year of a Bachelor of
          Information and Communication Technology. During this time, I
          recognised my passions lie in software development. In May 2023, I
          moved to Auckland to complete the course at Dev Academy, gaining a
          Certificate in Applied Software Development.
        </p>
        <p>
          I was drawn towards software for it's ability to do good in the world,
          whether it be on a personal, social, or industry level. I love the
          endless opportunities that software brings, as my career goal is to
          work on meaningful projects with awesome people.
        </p>
      </div>
      <div className="links">
        <div className="projects">
          <Link to="projects" className="projects">
            <PiProjectorScreenChart />
            <p>Projects</p>
          </Link>
        </div>
        <div className="github">
          <a
            className="github"
            href="https://github.com/quinn-gibson"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
            <p>Github</p>
          </a>
        </div>
        <div className="linkedin">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/quinn-gibson-687863281/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default About
