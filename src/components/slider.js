import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/images/logo.jpg';
import logo1 from '../assets/images/logo1.jpg';
import logo2 from '../assets/images/logo2.jpg';
import logo3 from '../assets/images/logo3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppSlider(){
    return(
        <Container fluid className='mt-3' style={{backgroundColor:'#ffffff', borderBottom:'1px solid #eeeeee'}}>
        <Carousel className='slider'>
      <Carousel.Item>
            <Row>
            <Col md={3}>
            <img src={logo} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo1} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo2} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo3} style={{borderRadius:5}} alt=""/>
            </Col>
            </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row>
            <Col md={3}>
            <img src={logo} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo1} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo2} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo3} style={{borderRadius:5}} alt=""/>
            </Col>
            </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row>
            <Col md={3}>
            <img src={logo} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo1} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo2} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo3} style={{borderRadius:5}} alt=""/>
            </Col>
            </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row>
            <Col md={3}>
            <img src={logo} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo1} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo2} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo3} style={{borderRadius:5}} alt=""/>
            </Col>
            </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row>
            <Col md={3}>
            <img src={logo} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo1} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo2} style={{borderRadius:5}} alt=""/>
            </Col>
            <Col md={3}>
            <img src={logo3} style={{borderRadius:5}} alt=""/>
            </Col>
            </Row>
      </Carousel.Item>
    </Carousel>
    </Container>
    )
}