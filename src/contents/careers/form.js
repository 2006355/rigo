import React from 'react';
import { useLocation } from 'react-router-dom';
import { Col,Row,Form } from 'react-bootstrap';
import { useState } from 'react';
const FormPage = () => {
    
    const location = useLocation();
    console.log(location.state);
    const { job } = location.state || {};
    const [resume, setResume] = useState(null);
    const handleFileChange = (event) => {
        setResume(event.target.files[0]);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, including the resume file
        console.log('Form submitted:', { resume });
    };

    return (
        <div>
            <h1>Apply for {job?.title}</h1>
            <p>Location: {job?.location}</p>
            <p>Salary: {job?.salary}</p>
            <p>Details: {job?.details}</p>
            {/* Form fields go here */}
            
            <Form className="form mt-5">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCoverLetter">
                    <Form.Label>Cover Letter</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your cover letter" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridResume">
                    <Form.Label>Resume</Form.Label>
                  
                  
                        
                        <input type="file" className="form-control" onChange={handleFileChange} />
                    
                    
                </Form.Group>

                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>

        </div>
    );
};

export default FormPage;