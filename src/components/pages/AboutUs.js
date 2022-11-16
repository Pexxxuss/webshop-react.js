import Enterier from '../../mock/mock-images/Enterier.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from '../layout/MainHeader';
import './AboutUs.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AboutUs() {
  return (
    <div>
      <div
        className="about-us-background"
        style={{
          backgroundImage: `url(${Enterier})`,
        }}
      >
        <MainHeader />
      </div>
      <div className="about-us-text">
        <Container>
          <div>
            <h1>About Us</h1>
            <h2>
              The original party starters shaking up some magic across the
              Serbia! No matter the occasion we’ve got the tunes, cocktails and
              vibe to get you in the mood!
            </h2>
            <Row>
              <Col sm={5} className="leftcol">
                <p>
                  Lorem ipsum dolor sit amet. Sed fugit corrupti vel quisquam
                  quod aut excepturi necessitatibus et beatae numquam. Aut
                  quaerat unde est itaque odio et esse quibusdam? Eos voluptatem
                  velit aut unde similique ut eligendi dolor eum quis aliquam?
                  Ut quia accusamus qui placeat aliquid rem quos dolorum. Id
                  ipsa alias in blanditiis voluptatem ut aperiam consequatur sed
                  eius voluptatibus qui odit nihil ut galisum veniam. Cum
                  eveniet suscipit et dolorum necessitatibus cum possimus
                  internos At quae illum et harum internos est pariatur repellat
                  in ducimus laborum.
                </p>
                <hr />
                <p>
                  33 Quis aliquam ea reprehenderit molestias sit quia earum est
                  dolore voluptate qui eius velit hic unde architecto. Eos rerum
                  quas quo aliquid facere in corrupti tenetur quo quae mollitia
                  est eius harum.
                </p>
                <hr />
                <p>
                  Cum eveniet suscipit et dolorum necessitatibus cum possimus
                  internos At quae illum et harum internos est pariatur repellat
                  in ducimus laborum.
                </p>
              </Col>
              <Col sm={5} className="rightcol">
                <p>
                  Lorem ipsum dolor sit amet. Sed fugit corrupti vel quisquam
                  quod aut excepturi necessitatibus et beatae numquam. Ut quia
                  accusamus qui placeat aliquid rem quos dolorum. 33 Quis
                  aliquam ea reprehenderit molestias sit quia earum est dolore
                  voluptate qui eius velit hic unde architecto. Cum eveniet
                  suscipit et dolorum necessitatibus cum possimus internos At
                  quae illum et harum internos est pariatur repellat in ducimus
                  laborum.
                </p>
                <hr />
                <p>
                  Aut quaerat unde est itaque odio et esse quibusdam? Eos
                  voluptatem velit aut unde similique ut eligendi dolor eum quis
                  aliquam?
                </p>
                <hr />
                <p>
                  Eos rerum quas quo aliquid facere in corrupti tenetur quo quae
                  mollitia est eius harum. Id ipsa alias in blanditiis
                  voluptatem ut aperiam consequatur sed eius voluptatibus qui
                  odit nihil ut galisum veniam.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default AboutUs;
