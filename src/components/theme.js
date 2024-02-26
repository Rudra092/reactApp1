import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image1 from '../assets/images/image1.jpg';
import Card from 'react-bootstrap/Card';

export default function AppTheme(){
    return(
        <Container fluid style={{backgroundColor:'#ffffff'}}>
        <Row>
          <Col md={6}>
          <Image src={image1} className='theme-image' fluid />
          </Col>
          <Col md={6}>
          <Card className='theme-body'>
      <Card.Body>
        <Row>
          <Col md={12}><i class="fas fa-desktop" style={{backgroundColor:'#3852f9',color:'#ffffff', padding:'8px', borderRadius:'50px'}}></i> Theme Controls</Col>
        </Row>
        <Card.Title className='theme-title'>Deliver your message<br></br>in unique ways</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        </Card.Text>
        <a href='#'><strong>Give it a spin for free</strong></a>
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </Container>
    )
}