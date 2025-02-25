// Footer.js
import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <Navbar bg="light" variant="light" fixed="bottom">
            <Container>
                <Row className="w-100">
                    
                    <Col md={4} className="text-center my-auto">
                        <span className="text-muted">© 2024 Your Company</span>
                    </Col>
                    <Col md={4} className="text-center text-md-right my-auto">
                        <a href="#privacy" className="text-muted mx-2">Privacy Policy</a>
                        <a href="#terms" className="text-muted mx-2">Terms of Service</a>
                    </Col>
                    <Col md={4} className="text-center text-md-right my-auto">
                        <a href="#facebook" className="text-muted mx-2"><i className="fab fa-facebook"></i></a>
                        <a href="#twitter" className="text-muted mx-2"><i className="fab fa-twitter"></i></a>
                        <a href="#instagram" className="text-muted mx-2"><i className="fab fa-instagram"></i></a>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Footer;