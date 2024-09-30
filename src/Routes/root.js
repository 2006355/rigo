//react router dom to lay the the page
import { Outlet } from "react-router-dom";
import Navbar from '../react-bootstap_compontants/Navbar.js'
import Stack from 'react-bootstrap/Stack';


export default function Root(){
  
    return(
        <>
        
     
        <Navbar />
        
        
        
        
        
        
        <Outlet />
        
        </>
    )
}
