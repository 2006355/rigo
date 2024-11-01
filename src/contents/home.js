// home.js
import React,{useState,useRef,useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import OurProject from '../componts/OurProjects.jpg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Footer from '../componts/footer.js';
import { height } from '@mui/system';
import technology from './technology/tech.jpg'
import careers from './careers/carees.jpg'
import contact from './careers/envelope.svg'
import market from './careers/bank.svg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../componts/aninmation.css'
function Home() {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
            content: "At the heart of our mission to create a sustainable energy future is a commitment to pioneering technology. Our advanced solutions in solar, wind, energy storage, and smart grid management are designed to make renewable energy more efficient, accessible, and reliable. Through continuous innovation, we are empowering industries, cities, and individuals to embrace clean energy with confidence.",
            img: technology
        },
        {
            id: 4,
            title: "Renewable energy Market",
            content: "From solar and wind power to advanced battery storage and sustainable fuel technologies, our portfolio encompasses a range of solutions designed to transform how the world produces and consumes energy. By integrating renewable resources into traditional power infrastructures,/n we’re helping industries and communities transition to clean energy in a seamless, scalable way.",
            img: market
        },  
        {
            id: 5,
            title: "Careers",
            content: "Join our team and be part of a global movement towards sustainable energy./n At our company, we believe in fostering a culture of innovation, collaboration, and growth. We offer exciting career opportunities in various fields, including engineering, project management, research and development, and more. Our employees are our greatest asset, and we are committed to providing a supportive and inclusive work environment where everyone can thrive. If you are passionate about renewable energy and want to make a positive impact on the world, we invite you to explore our current job openings and apply today.",
            img: careers
        },
        {
            id: 6,
            title: "Contact",
            content: "We are a renewable energy company that specializes in solar and offshore wind projects. We also have a hybrid energy division that focuses on hydrogen and hydraulic energy.",
            img: contact
        }
    ]);
    return (
        <Container>
        {titles.map((title) => (
            <Row key={title.id} className='my-4'>
                {title.id === 1 ? (
                    <Col style={{ backgroundImage: `url(${OurProject})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px', textAlign:'center' }}>
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
          {showFooter && <Footer />}
        </Container>    
    );
}

export default Home;
