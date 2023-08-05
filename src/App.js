import './index.css';
import Card from 'react-bootstrap/Card';
import { Col, Row, Form, Button, FormGroup, FormCheck } from 'react-bootstrap'; // Import FormCheck

import Pic from './images/signup-9.png';
import Horizontal from './components/Horizontal';
import SocialButtons from './components/SocialButtons';

function App() {
  return (
    <>
      <Card className='body-box mx-auto'>
        <Row className='mx-5'>
          <Col md={6}>
            <img className='img-style ' src={Pic} alt='pic' />
          </Col>
          <Col md={6} className='right-part'>
            <h5 className='main-heading m-2'>Join Edfling as a</h5>
            <Button className='first-button'>User</Button>{' '}
            <Button variant="outline-secondary">Instructor</Button>{' '}
            <Button variant="outline-secondary">TA</Button>{' '}

            <h4 className="m-3" style={{ fontWeight: 600, color: '#215D4F', textAlign: 'center' }}>Signup</h4>
            <div style={{ display: 'grid', placeItems: 'center' }}>
              <form>
                <FormGroup>
                  
                  <Form.Control className="m-2 form" type="email" placeholder="Enter your email address" />
                  <Form.Control className="m-2 form" type="password" placeholder="Enter your password" /> {/* Password input */}
                </FormGroup>
              </form>
              {/* Add the checkbox */}
              <FormCheck className="m-2 check-box" label="By signing up for Edfling course, you agree to our Terms of use and Privacy Policy" />
            </div>
            <Button className='login-button'>Signup</Button>
            <Horizontal text="or" />
            <SocialButtons />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default App;
