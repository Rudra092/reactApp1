import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AppSubscribe(){
    return(
        <Container fluid style={{backgroundColor:'#8a63f0'}}>
    <Card className='mt-4 mb-5' style={{border:'none', backgroundColor:'#8a63f0', color:'#ffffff'}}>
      <Card.Body className='subscribe-body'>
        <Card.Title className='subscribe-title'>The Top Notch Creative Theme.</Card.Title>
        <Card.Text className='subscribe-description'>
        We guarantee seamless navigation, no technical skills required
        </Card.Text>
      </Card.Body>
      <Form inline className='mt-3 mb-3' style={{marginLeft:'auto', marginRight:'auto', display:'block'}}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Your Name"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Enter your email"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="dark">SUBSCRIBE</Button>
          </Col>
        </Row>
      </Form>
      <Card.Text className='subscribe-description-1'>
        Signup to our newsletter and get the discount code!
        </Card.Text>
      </Card>
    </Container>
    )
}