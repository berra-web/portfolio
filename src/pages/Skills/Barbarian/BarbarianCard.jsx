import React from 'react'
import CardImage from './CardImage'
import CardItem from './CardItem'
import {
    Container,
    Col,
    Row
  } from 'react-bootstrap';

export default function BarbarianCard({hero}) {
    return (
        <Container className="clash-card barbarian" fluid>    
            <Row>
                <Col className='pb'><CardImage src={hero.img} name={hero.name}/></Col>
                <Col><CardItem type='clash-card__level clash-card__level--barbarian'>{hero.level}</CardItem></Col>
            </Row>
            <CardItem type='clash-card__unit-name'>{hero.name}</CardItem>
            <CardItem type='clash-card__unit-description'>{hero.description}</CardItem>
        </Container>
    )
}
