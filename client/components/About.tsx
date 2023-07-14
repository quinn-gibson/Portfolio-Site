import { PiProjectorScreenChart } from 'react-icons/pi'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const About = () => {
  return (
    <>
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
          <PiProjectorScreenChart />
          <p>Projects</p>
        </div>
        <div className="github">
          <SiGithub />
          <p>Github</p>
        </div>
        <div className="linkedin">
          <SiLinkedin />
          <p>Linkedin</p>
        </div>
      </div>
    </>
  )
}

export default About
