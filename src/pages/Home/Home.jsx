import Banner from './Banner';
import './Home.css';
import Services from './MyService';
import Pic from '../../assets/carousal/px.jpg';
import {Container, Row, Button} from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import FooterBottom from '../../components/Footer/FooterBottom';
import {GoCreditCard, GiGalleon, MdWeb, FaNetworkWired} from "react-icons/all";
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';


export default function Home() {
    return (
        <Container className='homeContainer' fluid>
            <Banner />
            <Services />
            <Row className='home-row'>
                <div className="snip0016">
	                <img className='sinp-img' src={Pic} alt="sample41"/>
	                <div className="snip0017">  
	                	<h6>CREATE YOUR ONLINE<span>PORTFOLIO</span>WEBSITE</h6>
	                	<p className='p-response'><GiGalleon className="Icons" />Tell your story and show your work with beautiful responsive galleries</p>
	                	<p className='p-response'><GoCreditCard className="Icons" />Sell your amazing art with ease. We take no commission or fees</p>
	                	<p className='p-response'><MdWeb className="Icons" />Let people follow your journey with a blog that fills with stunning images</p>
	                	<p className='p-response'><FaNetworkWired className="Icons" />Every professional website starts with a domain name. We provide you with one for free.</p>
	                	<p><Nav.Link className='Info' as={Link} to="/contact"><Button variant="info" className='image-button'>Get Starded</Button></Nav.Link></p>
	                </div>			
                </div>
            </Row> 
            <Footer/>
            <FooterBottom/>
        </Container>  
    )
}
