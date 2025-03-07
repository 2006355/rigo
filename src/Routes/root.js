//react router dom to lay the the page
import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from '../componts/nav.js';
import Home from '../contents/home.js';

import Careers from '../contents/careers/careers.js';
import Form from '../contents/careers/form.js';

import '../componts/aninmation.css'
export default function Root(){
    
    return(
        
        
        
        <BrowserRouter>
            <>
            

                <Navbar />
                
                <Routes>
                    
                        <Route path="/" element={<Home />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path='/form' element = {<Form />} />
                    
                        
                    
                </Routes>
             {/*if the window at the top of the page is not the home page, the footer will be displayed*/}
      
            </>
        </BrowserRouter>
        
    )
}
