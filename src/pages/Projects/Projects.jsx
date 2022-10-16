import React from 'react'
import {Project} from './ProjecData.js';
import {Container, Col, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';


import './Project.css';
export default function Projects() {
    return (
            <Container className='Projects-container' fluid>
                <Row>
                <Col className='col-services'>
                  <h1 className="mainHeader">SELECTED CLIENTS</h1>
                  <p className="mainContent">SELECTED CLIENTS CUSTOMIZABLE AND TRULY UNIQUE</p>
                  <div className="commonBorder"></div>
                </Col>
            </Row>
            <Row className="row">
                {Project.map (item => {
                    return (
                    <Col  key={item.id}>
                        <div className="box">
                            <img src={item.Photo} alt="" className='png'/>
                        </div>
                    </Col>
                    )
                })}
            </Row>
                  <p className="mainContent">AN ONLINE PORTFOLIO
                   MADE FOR CREATIVES
                   WITH ALL THE TOOLS A PROFESSIONAL NEEDS
                   </p>
                  <div className="Border"></div>
            <p><Nav.Link as={Link} to="/contact"><Button variant="info" className='service-button'>Get Starded</Button></Nav.Link></p>
        </Container>
    )
}

