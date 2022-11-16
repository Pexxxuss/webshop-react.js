import './Welcome.css';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import Background from '../images/Background.jpg';
import MainHeader from '../layout/MainHeader';
function Welcome() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <MainHeader />
      <Container>
        <div className="content">
          <h2 sm={12}>
            Have you ever tried the taste of a real magic potion according to
            the recipe of ancient galas, click below and
          </h2>
          <NavLink to="/products" className="button">
            Try It Now
          </NavLink>
        </div>
        <Row className="mainfooter">
          <Col sm={6} className="leftfooter">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <AiFillInstagram
                  onMouseOver={({ target }) => (target.style.color = '#df6f0d')}
                  onMouseOut={({ target }) => (target.style.color = '#dba473')}
                  style={{ color: '#dba473', fontSize: '42px' }}
                />
              </span>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook
                onMouseOver={({ target }) => (target.style.color = '#df6f0d')}
                onMouseOut={({ target }) => (target.style.color = '#dba473')}
                style={{ color: '#dba473', fontSize: '35px' }}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin
                onMouseOver={({ target }) => (target.style.color = '#df6f0d')}
                onMouseOut={({ target }) => (target.style.color = '#dba473')}
                style={{ color: '#dba473', fontSize: '35px' }}
              />
            </a>
          </Col>
          <Col sm={6} className="rightfooter">
            <a
              href="https://www.google.com/maps/place/Babi%C4%8Dkog+Odreda,+Leskovac/@42.9980424,21.9462445,17z/data=!3m1!4b1!4m5!3m4!1s0x47559d4de9e9d105:0x29603078a9f6fcf9!8m2!3d42.9980385!4d21.9484332"
              target="_blank"
              rel="noreferrer"
            >
              <CiLocationOn style={{ color: '#dba473', fontSize: '45px' }} />
              <span>Leskovac, Babickog Odreda</span>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Welcome;
