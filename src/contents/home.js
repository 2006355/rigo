// home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import OurProject from '../componts/Our Projects.jpg';
function Home() {
    return (
        <Container fluid className="vh-100 d-flex flex-column bg-blue">
            {/*create a title for the page using a video and cover the whole screen*/}
            <Row className="flex-grow-1 justify-content-center align-items-center title">
                <Col className="text-center">  
                    <h1>Our Projects</h1>
                </Col>
            </Row>
            <Row className="flex-display justify-content-center">
                <Col md={6} className="text-center bg-blue">
                    <p>
                        We are a renewable energy company that specializes in solar and offshore wind projects. 
                        We also have a hybrid energy division that focuses on hydrogen and hydraulic energy. 
                    </p>
                    <Button href="#ourProjects-nav-dropdown" variant="primary">Learn More</Button>
                </Col>
                <Col md={6} className='align-content-right'>
                    <img src={OurProject} alt="Our Projects" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
