//react router dom to lay the the page
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from '../componts/nav.js';
import Home from '../contents/home.js';
import Footer from '../componts/footer.js';
function footer (){

    console.log("no footer")
}
export default function root(){
  
    return(
        
        
        
        <BrowserRouter>
            <>
            

                <Navbar />
                
                <Routes>
                    
                        <Route path="/" element={<Home />} />
                    
                        
                    
                </Routes>
             {/*if the window at the top of the page is not the home page, the footer will be displayed*/}
             
              {footer()}
            </>
        </BrowserRouter>
        
    )
}
