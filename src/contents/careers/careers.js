import React, { useState, useEffect } from 'react';
import "../../App.css";

import careersimg from './careers-content.jpg';
import { use } from 'react';
const Careers = () => {
    useEffect(() => {
        const arrowIcons = document.querySelectorAll('i.bi-arrow-right');

        arrowIcons.forEach(icon => {
            const handleMouseOver = () => {
                icon.classList.remove('bi-arrow-right');
                icon.innerHTML = '<a href="/form">Apply</a>';
            };

            const handleMouseOut = () => {
                icon.classList.add('bi-arrow-right');
                icon.innerHTML = ''; // Clear the inner HTML
            };

            icon.addEventListener('mouseover', handleMouseOver);
            icon.addEventListener('mouseout', handleMouseOut);

            // Cleanup function to remove event listeners
            return () => {
                icon.removeEventListener('mouseover', handleMouseOver);
                icon.removeEventListener('mouseout', handleMouseOut);
            };
        });
    }, []); // Empty dependency array ensures this runs once after the initial render


  const [state, setState] = useState({
    projects: 20,
    vacancies: 5,
    jobList: [
        {
            title:'Project Manager',
            location: 'London',
            salary: '£50,000 - £70,000',
        },
        {
            title:'Software Engineer',
            location: 'Manchester',
            salary: '£40,000 - £60,000',
        },
        {
            title:'Civil Engineer',
            location: 'Birmingham',
            salary: '£45,000 - £65,000',
        },
        {
            title:'Electrical Engineer',
            location: 'London',
            salary: '£40,000 - £60,000',
        },
        {
            title:'Mechanical Engineer',
            location: 'Manchester',
            salary: '£45,000 - £65,000',
        },
    
    ],
  });
  const { projects, vacancies, jobList } = state;
  return (
    <body>

      
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
         
          {jobList.map((jobList, index) => (
            <div className="job" key={index}>
              <h4 className='jobTitle'>{jobList.title}</h4>
              <p className= 'job-loc'>{jobList.location}</p>
              <p className='job-sal'>{jobList.salary}</p>
              <a href ="/form">
              <i class="bi bi-arrow-right"> </i>
              </a>
              
            </div>
          ))}
        
      
        


        </div>
      </div>
    </div>
    </body>
    
  );
};

export default Careers;
