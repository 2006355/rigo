// home.js
import React,{useState,useRef} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import OurProject from '../componts/OurProjects.jpg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Footer from '../componts/footer.js';
import { height } from '@mui/system';

function Home() {

    const [show, setShow] = useState(false);
    const [showbutton, setShowbutton] = useState(true);
    const nodeRef = useRef(null);
    const [titles, setTitles] = useState([
        {
            id: 1,
            title: "welcome to our company",
            content:"Floating offshore windfarm Beyond the Horizon",
            img: "OurProjects.jpg"
        },
        {
            id: 2,
            title: "Our Projects",
            content: "We are a renewable energy company that specializes in solar and offshore wind projects. We also have a hybrid energy division that focuses on hydrogen and hydraulic energy.",
            img: OurProject
        },
        {
            id: 3,
            title: "Our Technology",
            content: "We are a renewable energy company that specializes in solar and offshore wind projects. We also have a hybrid energy division that focuses on hydrogen and hydraulic energy."
        },
        {
            id: 4,
            title: "Renewable energy Market",
            content: "We are a renewable energy company that specializes in solar and offshore wind projects. We also have a hybrid energy division that focuses on hydrogen and hydraulic energy."
        },
        {
            id: 5,
            title: "Careers",
            content: "We are a renewable energy company that specializes in solar and offshore wind projects. We also have a hybrid energy division that focuses on hydrogen and hydraulic energy."
        },
        {
            id: 6,
            title: "Contact",
            content: "We are a renewable energy company that specializes in solar and offshore wind projects. We also have a hybrid energy division that focuses on hydrogen and hydraulic energy."
        }
    ]);
    return (
        <Container>
        {titles.map((title) => (
            <Row key={title.id} className='my-4'>
                {title.id === 1 ? (
                    <Col style={{ backgroundImage: `url(${OurProject})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                       <h1>{title.title}</h1>
                          <p>{title.content}</p> 
                    </Col>
            ) : title.id % 2 === 0 ? (
            //if id is even then show the media on the right side
            <>
                <Col>
                    <h1>{title.title}</h1>
                    <p>{title.content}</p>
                </Col>
                <Col>
                    <img src={title.img} alt={title.title} className="img-fluid"/>
                </Col>
            </>
            ) : (
            //</>if id is odd then show the media on the left side
            <>
                <Col>
                    <img src={title.img} alt={title.title} className='img-fluid'/>
                </Col>
                <Col>
                    <h1>{title.title}</h1>
                    <p>{title.content}</p>
                </Col>
            </>
            )
        }     
            </Row>
        ))}
  
          {/*faded the foother  in */}
            
        </Container>    
    );
}

export default Home;
