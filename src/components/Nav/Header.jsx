import React, { useEffect, useRef, useState } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import {FaReacteurope} from "react-icons/all";


export default function Header() {
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
      <div>
        <Navbar variant="dark" expand="md" fixed="top"
        style={{ transition: '1s ease',backgroundColor: navBackground ? '#626579' : '#1f2235'}}
        className="nav-theme justify-content-between">
          <div>
            <Navbar.Brand as={Link} to="/" className="logo"><FaReacteurope className="headerIcon-logo" />Portfolio</Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle'/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end">
                    <Nav.Link className='link' as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className='link' as={Link} to="/skills">Skills</Nav.Link>
                    <Nav.Link className='link' as={Link} to="/about">About</Nav.Link>
                    <Nav.Link className='link' as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link className='link' as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
          
    )
}
