import { Col } from 'react-bootstrap';
  import { Link } from 'react-router-dom';
  import './Footer.css';
  import {
      FaFacebookF,
      FaLinkedin,
      FaInstagram,
      AiFillGithub,
      FaReacteurope,
      FaMapMarked,
      AiTwotoneMail,
      GiCandlestickPhone
    } from "react-icons/all";
    
export default function Footer() {


    return (
      <div className="footer">
        <div className="row-footer">
          <Col xs={12}>
            <div className="row">
              <Col xs={12} md={6} lg={3} className='col-title'>
                <div className="footer-title">Social</div>
                <p>
                <FaReacteurope className="headerIcon-logo" />
                </p>
                <div className="footer-social-links">
                <li>
                    <a className='banner-a' href="https://se.linkedin.com/in/behrad-hashemzadebalov-0692971b6" target="_blank" rel='opener noreferrer'>
                    <FaLinkedin className="headerIcon" />
                    </a>
                  </li>
                    <li>
                      <a className='banner-a' href="https://github.com/berra-web" target="_blank" rel="noopener noreferrer">
                      <AiFillGithub className="headerIcon" />
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
                </div>
              </Col>
              <Col xs={12} md={6} lg={3} className='col-title'>
                <div className="footer-title">
                  News & Info
                </div>
                <div className="footer-links">
                  <Link to="/skills">About React</Link>
                  <Link to="/skills">About JavaScript</Link>
                  <Link to="/skills">About Bootstrap</Link>
                  <Link to="/skills">About NodeJs</Link>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3} className='col-title'>
                <div className="footer-title">
                  Quick Links
                </div>
                <div className="footer-links">
                    <Link as={Link} to="/skills">Skills</Link>
                    <Link as={Link} to="/about">About</Link>
                    <Link as={Link} to="/projects">Projects</Link>
                    <Link as={Link} to="/contact">Contact</Link>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3} className='col-title'>
                <div className="footer-title">
                  Support
                </div>
                <div className="footer-links">
                  <Link to="/contact">Contact</Link>
                  <p className='footer-p'><GiCandlestickPhone className="Icons" />    +46 73-675 55 51</p>
                  <p className='footer-p'><AiTwotoneMail className="Icons" />hbberra@gmail.com</p>
                  <p className='footer-p'><FaMapMarked className="Icons" />Stockholm - Sweden</p>
                </div>
              </Col>
            </div>
          </Col>
        </div>
      </div>
    )
}

