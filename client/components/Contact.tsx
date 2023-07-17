import { Link } from 'react-router-dom'
import resume from '../../public/Quinn-Gibson-Resume-2023.pdf'

const Contact = () => (
  <>
    <div className="header-links">
      <Link to="/" className="home-button">
        <p className="position-header-links">Home</p>
      </Link>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <p className="position-header-links">Resume</p>
      </a>
      <Link to="/projects" className="projects">
        <p className="position-header-links">Projects</p>
      </Link>
    </div>
    <h1>Contact</h1>
    <p>*I'm currently based in Christchurch, New Zealand.</p>
    <div className="contact-info">
      <p>Cell Phone: 022-361-8680</p>
      <p>Email Address: quinngiibson@gmail.com</p>
      <p>
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/quinn-gibson-687863281/"
          target="_blank"
          rel="noreferrer"
        >
          Click Here
        </a>
      </p>
    </div>
  </>
)

export default Contact
