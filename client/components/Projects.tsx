import { Link } from 'react-router-dom'
import resume from '../../public/Quinn-Gibson-Resume-2023.pdf'

const Projects = () => (
  <>
    <div className="header-links">
      <Link to="/">
        <p className="position-header-links">Home</p>
      </Link>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <p className="position-header-links">Resume</p>
      </a>
      <Link to="/contact" className="contact">
        <p className="position-header-links">Contact</p>
      </Link>
    </div>

    <h1>Projects</h1>
    <p>
      These 3 projects were created during Friday Group Projects at Dev Academy.
      <br></br>
      In groups of 4, we would plan out something to build and have one day to
      do so before presenting at the end of the day.
      <br></br>
      These were all fun projects to work on as I was able to work
      collaboratively and implement the concepts I'd learnt that week.
    </p>

    <div className="love-project">
      <img src="../../images/love-calc.png" alt="" className="project-imgs" />
      <div className="project-content">
        <h2>Love Calculator</h2>
        <p>
          Whether you're curious about a crush, a new relationship, or simply
          intrigued by the dynamics between two individuals, Love Calculator has
          got you covered. Simply enter the names of two people, and within
          seconds, the app will generate a compatibility percentage accompanied
          by a short compatibility statement.
        </p>
        <p>Tech/tools used: TypeScript, React.js</p>
        <a
          href="https://github.com/quinn-gibson/Love-Calculator"
          target="_blank"
          rel="noreferrer"
        >
          <p>Github Link</p>
        </a>
      </div>
    </div>

    <div className="quiz-project">
      <img src="../../images/quiz.png" alt="" className="project-imgs" />
      <div className="project-content">
        <h2>Quiz Master</h2>
        <p>
          Created with passion by our team, this app combines the nostalgia of
          classic arcade games with the intellectual challenge of a true or
          false quiz. Dive into a captivating virtual arcade filled with vibrant
          graphics and retro sounds, where you'll put your knowledge to the
          test. Get one right? Move onto the next. Get one wrong? Game OVER!
        </p>
        <p>Tech/tools used: TypeScript, React.js, Redux, Express.js, API</p>

        <a
          href="https://github.com/quinn-gibson/Quiz-Master"
          target="_blank"
          rel="noreferrer"
        >
          <p>Github Link</p>
        </a>
      </div>
    </div>

    <div className="web-project">
      <img src="../../images/web-palette.png" alt="" className="project-imgs" />
      <div className="project-content">
        <h2>Website Colour Palette</h2>
        <p>
          Website Colour Palette is your ultimate companion for exploring a
          range of colours and their impact on website templates. With a dynamic
          playground and a user-friendly interface, experiment with various
          color combinations, observe their effects on different elements, and
          effortlessly find the perfect palette to capture the essence of your
          vision.
        </p>
        <p>Tech/tools used: JavaScript, Express.js</p>

        <a
          href="https://github.com/quinn-gibson/Website-Colour-Palette"
          target="_blank"
          rel="noreferrer"
        >
          <p>Github Link</p>
        </a>
      </div>
    </div>
  </>
)

export default Projects
