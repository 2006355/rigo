import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../App.css";


const Careers = () => {
    const [state, setState] = useState({
        projects: 20,
        vacancies: 5,
        jobList: [
            {
                title: 'Project Manager',
                location: 'London',
                salary: '£50,000 - £70,000',
                details: 'We are looking for a project manager to manage our projects in London. The ideal candidate should have at least 5 years of experience in project management.',
            },
            {
                title: 'Software Engineer',
                location: 'Manchester',
                salary: '£40,000 - £60,000',
                details: 'We are looking for a software engineer to work on our new project in Manchester. The ideal candidate should have at least 3 years of experience in software development.',
                
            },
            {
                title: 'Civil Engineer',
                location: 'Birmingham',
                salary: '£45,000 - £65,000',
                details: 'We are looking for a civil engineer to work on our new project in Birmingham. The ideal candidate should have at least 5 years of experience in civil engineering.',
            },
            {
                title: 'Electrical Engineer',
                location: 'London',
                salary: '£40,000 - £60,000',
                details: 'We are looking for an electrical engineer to work on our new project in London. The ideal candidate should have at least 3 years of experience in electrical engineering.',
            },
            {
                title: 'Mechanical Engineer',
                location: 'Manchester',
                salary: '£45,000 - £65,000',
                details: 'We are looking for a mechanical engineer to work on our new project in Manchester. The ideal candidate should have at least 5 years of experience in mechanical engineering.',
            },
        ],
    });

    const { projects, vacancies, jobList } = state;
    const navigate = useNavigate();

    return (
        <div>
            <div className="content">
                <div className="image-container">
                    <span className='Header'>WHY WORK WITH US</span>
                </div>
                <div className="container">
                    <h2>Facts and Figures</h2>
                    <div className="facts">
                        <div className="fact">
                            <span className="highlight">{projects}</span>
                            <br /> Number of projects
                        </div>
                        <div className="fact">
                            <span className="highlight">{vacancies}</span>
                            <br /> Number of vacancies
                        </div>
                    </div>
                    <div className="vacancies">
                        <h3>Current Vacancies</h3>
                        {jobList.map((job, index) => (
                            <div className="job" key={index}>
                                <h4 className='jobTitle'>{job.title}</h4>
                                <p className='job-loc'>{job.location}</p>
                                <p className='job-sal'>{job.salary}</p>
                                <i
                                    className="bi bi-arrow-right"
                                    onClick={() => navigate("/form", { state: { job } })}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Apply
                                </i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
