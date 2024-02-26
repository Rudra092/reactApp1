import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon from '../assets/images/icon.png'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'

export default function AppServices(){
    return(
    <Container fluid style={{backgroundColor:'#ffffff'}}>
    <Card style={{border:'none'}}>
      <Card.Body className='services-body'>
        <Card.Title className='services-title'>Billey for Business</Card.Title>
        <Card.Text className='services-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
      </Card.Body>
      
      <Row>

        <Col md={3}>
        <Card className='services'>
      <Card.Img variant="top" className='service-icon' src={icon} />
      <Card.Body>
        <Card.Title className='services-title-1'>Print & Packaging</Card.Title>
        <Card.Text className='services-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>elit, sed do eiusmod 
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

        <Col md={3}>
        <Card className='services'>
      <Card.Img variant="top" className='service-icon' src={icon1} />
      <Card.Body>
        <Card.Title className='services-title-1'>Branding & Identity</Card.Title>
        <Card.Text className='services-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>elit, sed do eiusmod 
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

        <Col md={3}>
        <Card className='services'>
      <Card.Img variant="top" className='service-icon' src={icon2} />
      <Card.Body>
        <Card.Title className='services-title-1'>Design & Development</Card.Title>
        <Card.Text className='services-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>elit, sed do eiusmod 
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

        <Col md={3}>
        <Card className='services'>
      <Card.Img variant="top" className='service-icon' src={icon3} />
      <Card.Body>
        <Card.Title className='services-title-1'>Copy Writing</Card.Title>
        <Card.Text className='services-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>elit, sed do eiusmod 
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

      </Row> 
      <Button variant="outline-secondary" className='mt-4 mb-5' style={{display:'block',marginLeft:'auto',marginRight:'auto'}}>GET STARTED NOW</Button>
      </Card>
    </Container>
    )
}