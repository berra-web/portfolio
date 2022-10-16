import React from 'react'
import {Container, Col, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import {Form, Button} from 'react-bootstrap'
import {GiCandlestickPhone, AiTwotoneMail, FaMapMarked} from "react-icons/all";
import './Contact.css';

const Mapp = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.9077176831913!2d17.943691516474697!3d59.38456701363404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e642ff89361%3A0x3c1ce34ce7662ca1!2sOxenstiernas%20all%C3%A9%2027%2C%20174%2064%20Sundbyberg!5e0!3m2!1sen!2sse!4v1665915058451!5m2!1sen!2sse";


export default function Contact() {
    
    function sendEmail(e) {
        e.preventDefault();
        
        
        emailjs.sendForm('service_5i5ojsr', 'template_m1qez1q', e.target, 'user_utL7JlTQ56I6rAIodGCaj') 
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        }

    return (
        <div className='contact'>
            <Container className='contact-form'>
                <Row>
                    <Col className='Col-1'>
                        <iframe src={Mapp}  loading="lazy" title='map'></iframe>
                    </Col>
                    <Col>
                        <Form onSubmit={sendEmail} className='form'>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control required type="text" placeholder="Name*" name="user_name"/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="name@example.com" name="user_email"/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={5} name="message" placeholder="Message..."/>
                            </Form.Group>
                            <Button variant="info" type="submit" className='btn'>Submit</Button>
                        </Form>
                        <div className='contact-cart'>
                            <label className='lable'>Phone</label>
                            <p className='contact-p'><GiCandlestickPhone className="Icons" />+46 73-675 55 51</p>
                            <label className='lable'>Email</label>
                            <p className='contact-p'><AiTwotoneMail className="Icons" />hbberra@gmail.com</p>
                            <label className='lable'>Adress</label>
                            <p className='contact-p'><FaMapMarked className="Icons" />Stockholm</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


















