import {Container, Col, Row } from 'react-bootstrap';
import Card from './Card';
import MediaLinks from './MediaLinks';
import MediaText from './MediaText';
import Resume from './Resume';


export default function Banner() {
    return (
    <Container fluid>
        <Row>
            <Col  className="header__content">
                <MediaLinks />
                <MediaText />
                <Resume/>
            </Col>
            <Col className="card__content">
                <Card/>
            </Col>
        </Row>
    </Container>
    )
}

