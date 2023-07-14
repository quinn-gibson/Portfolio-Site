import { Link } from 'react-router-dom'

const Projects = () => (
  <>
    <div className="header-links">
      <Link to="/">
        <p className="position-header-links">Home</p>
      </Link>
      <Link to="/resume" className="resume">
        <p className="position-header-links">Resume</p>
      </Link>
      <Link to="/contact" className="contact">
        <p className="position-header-links">Contact</p>
      </Link>
    </div>

    <h1>projects</h1>
  </>
)

export default Projects
