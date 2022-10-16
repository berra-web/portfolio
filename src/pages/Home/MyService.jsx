import React from 'react';
import {Container,Col,Row, Button} from "react-bootstrap";
import {service} from './ServiceData.js';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import './Home.css';

export default function Servise() {


  const [header] = React.useState({
    subHeading: "SERVICES",
    text: `Web Designing, Web Development, Mobile Apps Development, Domain and Hosting , Payment Gateway Solutions`
  });
  
  
  
  return (
      <Container className='service-row' fluid>
        <Row>
          <Col className='col-services'>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </Col>
        </Row>
        <Row >
          {service.map((info) => (
            <Col xs={12} md={6} lg={4} key={info.id}>
              <div className="services__box">
                {info.icon}
                <div className="services__box-header">{info.heading}</div>
                <div className="services__box-p">{info.text}</div>
              </div>
            </Col>
          ))}
        </Row>     
        <Nav.Link  as={Link} to="/skills"><Button variant="info" className='service-button'>More Info</Button></Nav.Link> 
      </Container>
    )
}