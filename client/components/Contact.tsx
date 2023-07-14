import { Link } from 'react-router-dom'

const Contact = () => (
  <>
    <div className="header-links">
      <Link to="/" className="home-button">
        <p className="position-header-links">Home</p>
      </Link>
      <Link to="/resume" className="resume">
        <p className="position-header-links">Resume</p>
      </Link>
      <Link to="/projects" className="projects">
        <p className="position-header-links">Projects</p>
      </Link>
    </div>
    <h1>contact</h1>
  </>
)

export default Contact
