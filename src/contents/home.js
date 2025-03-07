// home.js
import React,{useState,useRef,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OurProject from '../componts/OurProjects.jpg';

import Footer from '../componts/footer.js';

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
    
    },
    []);
    const [show, setShow] = useState(false);
    const [showbutton, setShowbutton] = useState(true);
    const nodeRef = useRef(null);
    const [titles, setTitles] = useState([
        
       {
        id: 1,
        title: 'Welcome to our company',
        content: 'We are a company that specializes in renewable energy. Our projects include solar, offshore wind, hydrogen, and hydraulic energy.',
        img: OurProject,

       }, {

            id: 2,
            title: 'Our Projects',
            content: 'We are a company that specializes in renewable energy. Our projects include solar, offshore wind, hydrogen, and hydraulic energy.',
            img: OurProject,
        },
        {
            id: 3,
            title: 'Our Technology',
            content: 'Our technology is the best in the industry. We use the latest advancements in renewable energy to provide our customers with the most efficient and cost-effective solutions.',
            img: technology,
        },
        {
            id: 4,
            title: 'Renewable Energy Market',
            content: 'The renewable energy market is growing rapidly, and we are at the forefront of this industry. Our business strategy and financial analysis are second to none.',
            img: market,
        },
        {
            id: 5,
            title: 'Careers',
            content: 'We are always looking for talented individuals to join our team. If you are passionate about renewable energy and want to make a difference in the world, we want to hear from you.',
            img: careers,
        },
        {
            id: 6,
            title: 'Contact',
            content: 'If you have any questions or would like to learn more about our company, please contact us. We are happy to help in any way we can.',
            img: contact,
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
