import React from 'react'
import {Col, Row } from 'react-bootstrap';
import './About.css';
import Pic from '../../assets/carousal/AB.jpg';
import Footer from '../../components/Footer/Footer';
import FooterBottom from '../../components/Footer/FooterBottom';
export default function About() {
    return (
        <div className='aboutContainer'>
            <div className='about-row'>
                <Row>
                    <div className="snip0016">
	                    <img className='sinp-img' src={Pic} alt="sample41"/>
	                    <div className="snip0017">
	                    	<h2>I am <span>Behrad</span></h2>
	                    	<p>professional Software Developer with long time experience in this field​</p>
	                    </div>			
                    </div>
                </Row>  
                <Row>
                    <Col className='about-col'>
                      <h1 className="about-h1">About Me</h1>
                      <div className="Border"></div>
                      <p className="about-p">
                      My name is <strong>Behrad</strong> I am a <strong>full stack developer</strong> with long time experience in this field​, who works with both the front and back ends of a website or application—meaning i can tackle projects that involve databases, building user-facing websites, or even work with clients during the planning phase of projects.
                      As a highly skilled and results-driven professional with over 7 + years of experience as Software developer and lead— combined with a dedication to product quality excellence—I possess a breadth of knowledge and expertise that will allow me to contribute toward the success of your company.
                      My background includes outstanding experience working with clients, discussions with BA , writing effect & performance centric code and ensure compliance with regulations. 
                      Full stack developer with hands-on experience in end to end software development and maintenance
                      Software development experience using the following technologies: Web API , MVC, Angular, HTML5, CSS, JavaScript, JSON, SOAP, REST, React, VueJS, .Net Framework, C#, Web Services, .NET Core, Micro services
                      </p>
                    </Col>
                </Row>  
            <div className='myFooter'>
            <Footer/>
            <FooterBottom/>
            </div>
            </div>
        </div>
    )
}


