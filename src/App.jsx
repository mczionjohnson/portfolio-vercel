import "./styles.css"
import pic from "./pic.jpg"

export default function App() {
  return <>
    <div className="nav-bar">
    <ul className="ul">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Projects</a>
      <a href="">Resume</a>
     
    </ul>
    </div>
    <div className="name-card">
    <h2 className="name-card-text"> Zion Johnson</h2>
    <img src={pic} className="imgWrapper" alt="pic" />
    <h3 className="name-card-text"> Software Engineer</h3>
    </div>
    <div className="about-me-lg">
      <div className="about-me-sm">
        <h2 className="about-me-header">About me</h2>
        <p className="about-me-text">I am lorem ipsum :)</p>
      </div>
    </div>
    <h2 className="project-header">Projects</h2>
    <div className="project-wrapper">
      <div className="project-card">
        <h4>Penguin Library</h4>
        <p>a book library</p>
      <a className="card-link" href="https://github.com/mczionjohnson/Penguin-Book-Library">
        <i className="fa fa-github-square fa-2x"></i>
      </a>

      <a className='card-link' href="https://github.com/mczionjohnson/Penguin-Book-Library">
        <i className="fa fa-link fa-2x"></i>
      </a>
      </div>
      <div className='project-card'>
        <h4>Penguin Library</h4>
        <p>
        <span className="span span-text-rest">REST API</span>
        <span className="span span-text-mongo">Node-JS</span>
        </p>
        <br />
        <p>a book library</p>
      <a className='card-link' href="#">
        <i className="fa fa-github-square fa-2x"></i>
      </a>

      <a className='card-link' href="#">
        <i className="fa fa-link fa-2x"></i>
      </a>
      </div>
      </div>
    <div className="footer-wrapper">
      <h2 className="footer-text">Reach me</h2>
      <a className="footer-link" href="https://github.com/mczionjohnson">
        <i className="fa fa-github-square fa-2x"></i>
      </a>

        <a className="footer-mail" target="_blank" href="mailto:mczionjohnson@gmail.com">
            mczionjohnson@gmail.com
        </a>

        <a className="footer-link" target="_blank" href="https://www.linkedin.com/in/the-zion-johnson/">
            <i className="fa fa-linkedin fa-2x"></i>
        </a>

        <a className="footer-link" target="_blank" href="https://twitter.com/thezionjohnson">
            <i className="fa fa-twitter fa-2x"></i>
        </a>

      </div>
 
  </>
    
}