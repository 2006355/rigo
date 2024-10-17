import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OurProject from './Our Projects.jpg';
import RenewableEnergy from './img/download.jpeg';
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant='underline'>
            <NavDropdown title="Our Projects" id="ourProjects-nav-dropdown">
              <span> 
                <img src={OurProject} alt="Our Projects" className="img-fluid" />
               
              </span>
              <NavDropdown.Item href="#action/3.2">Solor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Offshore wind</NavDropdown.Item>
              <NavDropdown title="Hybrid energy" id="hybridEnergy-nav-dropdown">
                
                <NavDropdown.Item href="#action/3.2">Hydrogen</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Hydraulic</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <Nav.Link href="#link">Our technology</Nav.Link>
            <NavDropdown title="Renewable energy Market" id="Renewable-nav-dropdown">
              <span>
                <img src={RenewableEnergy} alt="Renewable energy Market" className="img-fluid" />
              </span>
              <NavDropdown.Item href="#action/3.1">Business Strangic </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Financial analysis offshore</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#link">Careers</Nav.Link>
            <NavDropdown title = "Contact" >
              <span>
                <table>
                  <tr>
                    <td>Phone:</td>
                    <td>1234567890</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>jaadams12@outlook.com</td>

                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>1234 Main Street</td>
                  </tr>
                </table>
              </span>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;