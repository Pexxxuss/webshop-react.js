import './Customers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from '../layout/MainHeader';
import Customer from '../../mock/mock-images/Customers.jpg';
import Customer1 from '../../mock/mock-images/customer-1.jpg';
import Customer2 from '../../mock/mock-images/customer-2.jpg';
import Customer3 from '../../mock/mock-images/customer-3.jpg';
import Customer4 from '../../mock/mock-images/customer-4.jpg';
import Customer5 from '../../mock/mock-images/customer-5.jpg';
import Customer6 from '../../mock/mock-images/customer-6.jpg';
import Customer10 from '../../mock/mock-images/Customer10.jpg';
import Customer11 from '../../mock/mock-images/Customer11.jpg';
import Customer12 from '../../mock/mock-images/Customer12.jpg';
import Customer13 from '../../mock/mock-images/Customer13.jpg';
import Avatar1 from '../../mock/mock-images/Avatar1.jpg';
import Avatar2 from '../../mock/mock-images/Avatar2.jpg';
import Avatar3 from '../../mock/mock-images/Avatar3.jpg';
import Avatar4 from '../../mock/mock-images/Avatar4.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
function Customers() {
  return (
    <div>
      <div>
        <MainHeader />
        <div
          className="customers-background"
          style={{
            backgroundImage: `url(${Customer})`,
          }}
        >
          <h2>Perfect taste, Adorable moments, An unforgettable experience</h2>
          <div className="customers-header">
            <div className="customers-imgs">
              <img src={Customer1} alt="Customer" />
              <img src={Customer2} alt="Customer" />
              <img src={Customer3} alt="Customer" />
              <img src={Customer4} alt="Customer" />
              <img src={Customer5} alt="Customer" />
              <img src={Customer6} alt="Customer" />
            </div>
            <p class="customers-header-text">
              <span>100,000+</span> drinks sold over the last year!
            </p>
          </div>
        </div>
      </div>
      <section className="section-one">
        <Row className="customers-body">
          <h1>We Are Proud Of You!</h1>
          <Col md={6}>
            <div className="customers-carousel">
              <Carousel fade className="customers-body-carousel">
                <Carousel.Item>
                  <img
                    className="customers-body-img"
                    src={Customer10}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 style={{ color: 'white' }}>First slide label</h3>
                    <p style={{ color: 'white' }}>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="customers-body-img"
                    src={Customer11}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3 style={{ color: 'white' }}>Second slide label</h3>
                    <p style={{ color: 'white' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="customers-body-img"
                    src={Customer12}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3 style={{ color: 'white' }}>Third slide label</h3>
                    <p style={{ color: 'white' }}>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="customers-body-img"
                    src={Customer13}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3 style={{ color: 'white' }}>Fourth slide label</h3>
                    <p style={{ color: 'white' }}>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col md={6}>
            <div className="testimonials">
              <div className="testimonial">
                <img className="testimonial-img" src={Avatar1} alt="1" />
                <p className="testimonial-text">
                  Inexpensive, cold and great-tasting drinks, without even
                  having to order manually! It feels truly magical.
                </p>
                <p className="testimonial-name">&mdash; Dave Bryson</p>
              </div>
              <div className="testimonial">
                <img className="testimonial-img" src={Avatar2} alt="2" />
                <p className="testimonial-text">
                  Atmosphere in this bar is crazy good, bartender chooses the
                  right drink for me every time. It's amazing!
                </p>
                <p className="testimonial-name">&mdash; Ben Hadley</p>
              </div>

              <div className="testimonial">
                <img className="testimonial-img" src={Avatar3} alt="3" />
                <p className="testimonial-text">
                  Galious Bar best place i ever visited! I just started a
                  company, so this is the most relaxing place where we can spend
                  free time together!
                </p>
                <p className="testimonial-name">&mdash; Steve Miller</p>
              </div>
              <div className="testimonial">
                <img className="testimonial-img" src={Avatar4} alt="4" />
                <p className="testimonial-text">
                  My whole society every single one, comes here to celebrate
                  their birthdays, every single time we get one free drink from
                  bartender.
                </p>
                <p className="testimonial-name">&mdash; Hannah Smith</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
export default Customers;
