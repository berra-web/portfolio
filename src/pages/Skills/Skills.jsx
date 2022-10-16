import React from 'react'
import './Skills.css';
import {Col, Row,Button } from 'react-bootstrap';
import {skills} from './SkillsData.js'; 
import Barbarian from './Barbarian/Barbarian';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';

export default function Skills() {

    const [header] = React.useState({
        subHeading: "SKILLS & EXPERTISE",
        text: `Here are the most common languages and how they are used`
      });

    return (
        <div className='skill-container'>
            <Row>
                <Col className='col-services'>
                  <h1 className="mainHeader">{header.subHeading}</h1>
                  <p className="mainContent">{header.text}</p>
                  <div className="commonBorder"></div>
                </Col>
            </Row>
            <Row className="row">
                {skills.map (item => {
                    return (
                    <Col xs={12} md={6} lg={4}  key={item.id}>
                        <div className="box">
                            <div className={`our-services ${item.variant}`}>
                                <div className="icon">{item.icon}</div>
                                <h4>{item.header}</h4>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </Col>
                    )
                })}
            </Row>
            <div>
                <Col className='col-services'>
                    <h1 className="mainHeader">My Stars</h1>
                    <div className="commonBorder"></div>
                </Col>
                <Col className='col-services'>
                    <Barbarian />
                </Col>
              <p><Nav.Link as={Link} to="/contact"><Button variant="info" className='service-button'>Get Starded</Button></Nav.Link></p>
            </div>
        </div>
    )
}
