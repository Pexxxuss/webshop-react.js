import './Personality.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from '../layout/MainHeader';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StaffOne from '../../mock/mock-images/Bartender1.jpg';
import StaffTwo from '../../mock/mock-images/Bartender2.jpg';
import StaffThree from '../../mock/mock-images/Bartender3.jpg';
import StaffFour from '../../mock/mock-images/Bartender4.jpg';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

function Personality() {
  return (
    <div className="personality-body">
      <MainHeader />
      <Container>
        <div className="personality-body-title">
          <h1>Welcome To Our Secret Chambers</h1>
          <h2>
            We Present To You Our Best Magicians Whose Magic You Enjoy Every Day
          </h2>
        </div>
        <div className="personality-staff">
          <Row className="first-row">
            <Col sm={3} className="first-col">
              <img src={StaffOne} alt="Bartender one"></img>
            </Col>
            <Col sm={3} className="second-col">
              <h2>Nikolic Stefan</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet. Est eligendi delectus eos nesciunt
                galisum qui neque internos. Et esse officia eos amet maxime et
                doloribus ipsam ad totam commodi. Ut porro ratione et voluptas
                cumque At placeat corrupti. Et libero quisquam non neque
                architecto.
              </p>
              <div className="personality-footer">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <AiFillInstagram
                      onMouseOver={({ target }) =>
                        (target.style.color = '#df6f0d')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = '#dba473')
                      }
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
                    onMouseOver={({ target }) =>
                      (target.style.color = '#df6f0d')
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = '#dba473')
                    }
                    style={{ color: '#dba473', fontSize: '35px' }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin
                    onMouseOver={({ target }) =>
                      (target.style.color = '#df6f0d')
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = '#dba473')
                    }
                    style={{ color: '#dba473', fontSize: '35px' }}
                  />
                </a>
              </div>
            </Col>
            <Col sm={3} className="third-col">
              <img src={StaffTwo} alt="Bartender Two"></img>
            </Col>
            <Col sm={3} className="fourth-col">
              <h2>Ivanovic Ivan</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet. Est eligendi delectus eos nesciunt
                galisum qui neque internos. Et esse officia eos amet maxime et
                doloribus ipsam ad totam commodi. Ut porro ratione et voluptas
                cumque At placeat corrupti. Et libero quisquam non neque
                architecto.
              </p>
              <div className="personality-footer">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <AiFillInstagram
                      onMouseOver={({ target }) =>
                        (target.style.color = '#df6f0d')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = '#dba473')
                      }
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
                    onMouseOver={({ target }) =>
                      (target.style.color = '#df6f0d')
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = '#dba473')
                    }
                    style={{ color: '#dba473', fontSize: '35px' }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin
                    onMouseOver={({ target }) =>
                      (target.style.color = '#df6f0d')
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = '#dba473')
                    }
                    style={{ color: '#dba473', fontSize: '35px' }}
                  />
                </a>
              </div>
            </Col>
          </Row>
          <Row className="second-row">
            <Col sm={3} className="first-col">
              <h2>Jeremy Lee</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet. Est eligendi delectus eos nesciunt
                galisum qui neque internos. Et esse officia eos amet maxime et
                doloribus ipsam ad totam commodi. Ut porro At placeat corrupti.
                Et libero quisquam non neque architecto.
              </p>
              <div className="personality-footer">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <AiFillInstagram
                      onMouseOver={({ target }) =>
                        (target.style.color = '#df6f0d')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = '#dba473')
                      }
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
                    onMouseOver={({ target }) =>
                      (target.style.color = '#df6f0d')
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = '#dba473')
                    }
                    style={{ color: '#dba473', fontSize: '35px' }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin
                    onMouseOver={({ target }) =>
                      (target.style.color = '#df6f0d')
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = '#dba473')
                    }
                    style={{ color: '#dba473', fontSize: '35px' }}
                  />
                </a>
              </div>
            </Col>
            <Col sm={3} className="second-col">
              <img src={StaffThree} alt="Bartender Three"></img>
            </Col>
            <Col sm={3} className="third-col">
              <h2>Sarah Voznacki</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet. Est eligendi delectus eos nesciunt
                galisum qui neque internos. Et esse officia eos amet maxime et
                doloribus ipsam ad totam commodi. Ut porro ratione et voluptas
                cumque At placeat corrupti. Et libero quisquam non neque
                architecto.
              </p>
              <div className="personality-footer">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <AiFillInstagram
                      onMouseOver={({ target }) =>
                        (target.style.color = '#df6f0d')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = '#dba473')
                      }
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
                    onMouseOver={({ target }) =>
                      (target.style.color = '#df6f0d')
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = '#dba473')
                    }
                    style={{ color: '#dba473', fontSize: '35px' }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin
                    onMouseOver={({ target }) =>
                      (target.style.color = '#df6f0d')
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = '#dba473')
                    }
                    style={{ color: '#dba473', fontSize: '35px' }}
                  />
                </a>
              </div>
            </Col>
            <Col sm={3} className="fourth-col">
              <img src={StaffFour} alt="Bartender Four"></img>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default Personality;
