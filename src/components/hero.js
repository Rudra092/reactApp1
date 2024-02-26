import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import image from '../assets/images/image.png';

export default function AppHero(){
return(
    <Container fluid>
      <Row>
        <Col md={6}>
        <Card className='hero-body'>
      <Card.Body>
        <Card.Title className='hero-title'>We enhance <br></br>visual, <br></br>display and <br></br>promote it</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        </Card.Text>
        <Button variant="light">GET STARTED NOW</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col md={6}>
        <Image src={image} fluid />
        </Col>
      </Row>
    </Container>
)
}