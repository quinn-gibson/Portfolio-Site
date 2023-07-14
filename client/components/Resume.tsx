import { Link } from 'react-router-dom'

const Resume = () => (
  <>
    <div className="header-links">
      <Link to="/">
        <p className="position-header-links">Home</p>
      </Link>
      <Link to="/contact" className="contact">
        <p className="position-header-links">Contact</p>
      </Link>
      <Link to="/projects" className="projects">
        <p className="position-header-links">Projects</p>
      </Link>
    </div>
    <h1>Resume</h1>
  </>
)

export default Resume
