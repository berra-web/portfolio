import {
    FaFacebookF,
    FaLinkedin,
    FaGithubSquare,
    FaInstagram,
  } from "react-icons/fa";
  
export default function MediaLinks() {
    return (
      <ul className="header__ul">
        <li>
          <a className='banner-a' href="https://se.linkedin.com/in/behrad-hashemzadebalov-0692971b6" target="_blank" rel='opener noreferrer'>
          <FaLinkedin className="headerIcon" />
          </a>
        </li>
        <li>
          <a className='banner-a' href="https://github.com/berra-web" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className="headerIcon" />
          </a>
        </li>
        <li>
          <a className='banner-a' href="https://www.facebook.com/behrad.hz" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="headerIcon" />
          </a>
        </li>
        <li>
          <a className='banner-a' href="https://www.instagram.com/berrabalov/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="headerIcon" />
          </a>
        </li>
      </ul>
    )
}
