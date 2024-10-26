import footerLogo from "../assets/logo-footer.png";
import Newsletter from "./Newsletter";
import PropTypes from "prop-types";

const Footer = ({ handleOnChange, handleSubscribe }) => {
  return (
    <div className="relative">
      <Newsletter
        handleOnChange={handleOnChange}
        handleSubscribe={handleSubscribe}
      ></Newsletter>
      <footer className="bg-slate-900 text-white pt-12 lg:pt-40">
        <div className="lg:flex items-center justify-center p-4">
          <img src={footerLogo} alt="" />
        </div>
        <div className="lg:flex gap-4 space-y-4 p-6 lg:p-10  border-b-2 border-gray-500">
          <div className="lg:w-1/3">
            <h6 className="footer-title">About Us</h6>
            <p>
              Dream XI is the ultimate team builder for cricket enthusiasts. Our
              platform allows you to create your dream cricket team, manage
              player selections, and stay updated with the latest fixtures and
              schedules.
            </p>
          </div>
          <nav className="lg:w-1/3 lg:flex items-center justify-center">
            <div>
              <h6 className="footer-title">Company</h6>
              <ul>
                <li className="link link-hover">About us</li>
                <li className="link link-hover">Contact</li>
                <li className="link link-hover">Jobs</li>
                <li className="link link-hover">Press kit</li>
              </ul>
            </div>
          </nav>
          <form className="lg:w-1/3">
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-64">
              <div className="join">
                <input
                  onChange={handleOnChange}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered join-item text-black"
                />
                <button
                  onClick={handleSubscribe}
                  className="btn font-bold bg-[#E7FE29] join-item"
                >
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="text-center py-4">
          <h1>@2024 Dream XI All Rights Reserved.</h1>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleSubscribe: PropTypes.func.isRequired,
};

export default Footer;
