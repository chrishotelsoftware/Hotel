import React from 'react';
import '../App.css';
import './Services.css';
import { Card,Row,Col } from 'react-bootstrap';


function Service() {
  return (
    <>
    <div className='head'>
    <h1>Services</h1>
    <div className='services_container'>
    <Row classname="d-flex p-2">
      <Col>
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="/images/s1.png" />
      <Card.Body>
        <Card.Title>POOL</Card.Title>
        <Card.Text>
          Some quick example 
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="/images/s2.png" />
      <Card.Body>
        <Card.Title>BREAK FAST</Card.Title>
        <Card.Text>
          Some quick example 
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="/images/s3.png" />
      <Card.Body>
        <Card.Title>WIFI</Card.Title>
        <Card.Text>
          Some quick example 
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="/images/s4.png" />
      <Card.Body>
        <Card.Title>LAUNDARY</Card.Title>
        <Card.Text>
          Some quick example 
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="/images/s5.jpg" />
      <Card.Body>
        <Card.Title>GYM</Card.Title>
        <Card.Text>
          Some quick example 
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    
    </Row>
    </div>
    </div>
    </>
  );
}

export default Service;
