import React, { useState } from 'react';
import Arrow from './Arrow';
import BarbarianCard from './BarbarianCard';
import './Barbarian.css';
import {
    FaReact,
    DiJavascript,
    IoLogoNodejs,
    SiWebpack,
    BsBootstrapFill
  } from "react-icons/all";
  import {Col,Row} from 'react-bootstrap';
 
  

export default function Barbarian() {
    const [heroes] = useState([
        {
            id: 1,
            name: "React",
            description: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces",
            img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png",
            level : <FaReact className="FaReact" />
        }, 
        {
            id: 2,
            name: "Javascript",
            description: "JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS",
            img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard.png",
            level : <DiJavascript className="DiJavascript" />
        },
        {
            id: 3,
            name: "Nodejs",
            description: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment",
            img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png",
            level : <IoLogoNodejs className="IoLogoNodejs" />
        }, 
        {
            id: 4,
            name: "Webpack",
            description: "Webpack is a static module bundler for modern JavaScript applications.",
            img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png",
            level : <SiWebpack className="SiWebpack" />
        },
        {
            id: 5,
            name: "Bootstrap",
            description: "Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.",
            img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png",
            level : <BsBootstrapFill className="BsBootstrapFill" />
        }
    ])
    const [courser, setCourser] = useState(0);
    


    function handleNext() {
        const current = courser + 1 < heroes.length ? courser + 1 : 0;
         setCourser(current);
    }

    function handlePrev() {
        const current = courser -1 < 0 ? (heroes.length -1) : courser -1;
        
        setCourser(current);
    }


    return (
    <div className="slide-container">
        <div className="wrapper">
            {heroes.length &&
            <>
            <Row>
            <BarbarianCard hero={heroes[courser]}/>
            </Row>
            <Row>
            <Col><Arrow direction='prev' handleClick={handlePrev}/></Col>
            <Col><Arrow direction='next'handleClick={handleNext}/></Col>
            </Row> 
            </>
            }
        </div>
    </div> 
    )
}
