import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import user from '../assets/images/user.jpg';

export default function AppTestimonials(){
    return(
        <Container fluid style={{backgroundColor:'#ffffff'}}>
        <Card style={{border:'none'}}>
      <Card.Body className='testimonials-body'>
        <Card.Title className='testimonials-title'>Testimonials</Card.Title>
        <Card.Text className='testimonials-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
      </Card.Body>
      </Card>

      <Carousel>
      <Carousel.Item style={{height:'140px'}}>
      <Image src={user} fluid style={{width:'60px', height:'60px', marginLeft:'320px'}}/>
        <Carousel.Caption style={{color:'#000000'}}>
          <h5><i>"Ut enim ad minim veniam, quis nostrud exercitation ullamco<br></br> laboris nisi ut aliquip ex ea commodo consequat."</i></h5>
          <p>John Roberts(CEO)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'140px'}}>
      <Image src={user} fluid style={{width:'60px', height:'60px', marginLeft:'320px'}}/>
        <Carousel.Caption style={{color:'#000000'}}>
        <h5><i>"Ut enim ad minim veniam, quis nostrud exercitation ullamco<br></br> laboris nisi ut aliquip ex ea commodo consequat."</i></h5>
        <p>John Roberts(CEO)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'140px'}}>
      <Image src={user} fluid style={{width:'60px', height:'60px', marginLeft:'320px'}}/>
        <Carousel.Caption style={{color:'#000000'}}>
        <h5><i>"Ut enim ad minim veniam, quis nostrud exercitation ullamco<br></br> laboris nisi ut aliquip ex ea commodo consequat."</i></h5>
        <p>John Roberts(CEO)</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </Container>
    )
}