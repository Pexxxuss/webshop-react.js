import './ContactUs.css';
import Bullseye from '../../mock/mock-images/Bullseye.jpg';
import MainHeader from '../layout/MainHeader';
import Laptop from '../../mock/mock-images/Laptop.jpg';
function ContactUs() {
  return (
    <div>
      <div
        className="contact-background"
        style={{
          backgroundImage: `url(${Bullseye})`,
        }}
      >
        <MainHeader />
        <h1 className="contact-us-header">GIVE AS A SHOUT</h1>
      </div>
      <div className="contact-us-body">
        <h2 className="contact-us-body-h2">
          USE THE FORM BELOW TO DROP US AN E-MAIL <br /> OLD FASHIONED PHONE
          CALLS WORK TO {'>>'} <span>+381655566</span>
        </h2>
        <section classNem="section-cta" id="cta">
          <div className="container">
            <div className="cta">
              <div className="cta-text-box">
                <h2 className="heading-secondary">
                  Get your first drink for free!
                </h2>
                <p className="cta-text">
                  Tasty, cold and colorfull drinks are waiting for you. Enjoy
                  your time in our bar, dont forget to rate as, cheers And the
                  first dring is on us!
                </p>
                <form className="cta-form" action="#">
                  <div>
                    <label for="full-name">Full Name</label>
                    <input
                      id="full-name"
                      type="text"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label for="email">Email adress</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="me@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label for="select-where">Where did you her for us?</label>
                    <select id="select-where" required>
                      <option value="">Please choose one option:</option>
                      <option value="friends">Friends and family</option>
                      <option value="youtube">Youtube video</option>
                      <option value="podcast">Podcast</option>
                      <option value="ad">Facebook ad</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <button className="btn btn--form">Sign up now</button>
                </form>
              </div>
              <div
                className="cta-img-box"
                role="img"
                style={{
                  backgroundImage: `url(${Laptop})`,
                }}
              ></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default ContactUs;
