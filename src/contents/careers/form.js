import React from 'react';
import { json, useLocation } from 'react-router-dom';
import { Col,Row,Form } from 'react-bootstrap';
import { useState } from 'react';
import { Email } from '@mui/icons-material';
const FormPage = () => {
    
    const location = useLocation();
    console.log(location.state);
    const { job } = location.state || {};
    const [applicant, setApplicant] = useState({
        name: 'h',
        email: '',
        coverLetter: '',
    
    });
    const [resume, setResume] = useState(null);
  
    
    const handleFileChange = (event) => {
        setResume(event.target.files[0]);
        console.log(event.target.files[0]);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setApplicant({ ...applicant, [name]: value });

    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', applicant.name);
        formData.append('email', applicant.email);
        formData.append('coverLetter', applicant.coverLetter);

        if (resume) {
            const reader = new FileReader();
            reader.onloadend = () => {
                formData.append('resume', reader.result);
                console.log('Form submitted:', Object.fromEntries(formData.entries()));
                //Handle form submission, including the resume file
                // Example: Send form data to a server
                 fetch('/api/upload', {
                     method: 'POST',
                    body: formData
                }).then(response => response.json())
                 .then(data => console.log(data))
                  .catch(error => console.error(error));
            };
            reader.readAsDataURL(resume);
        } else {
            console.log('Form submitted:', Object.fromEntries(formData.entries()));
            // Handle form submission without resume file
            // Example: Send form data to a server
            // fetch('/api/upload', {
            //     method: 'POST',
            //     body: formData
            // }).then(response => response.json())
            //   .then(data => console.log(data))
            //   .catch(error => console.error(error));
        }
    };

    return (
        <div>
            <h1>Apply for {job?.title}</h1>
            <p>Location: {job?.location}</p>
            <p>Salary: {job?.salary}</p>
            <p>Details: {job?.details}</p>
            {/* Form fields go here */}
            
            <Form className="form mt-5" onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={applicant.name} name="name" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" value={applicant.email} name="email" onChange={handleInputChange} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCoverLetter">
                    <Form.Label>Cover Letter</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your cover letter" value={applicant.coverLetter} name="coverLetter" onChange={handleInputChange} />
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