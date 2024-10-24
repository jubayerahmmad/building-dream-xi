import footerLogo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-900 text-white p-64 ">
        <div className="lg:flex items-center justify-center">
          <img src={footerLogo} alt="" />
        </div>
        <div className="lg:flex gap-4 space-y-4 p-10">
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
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-[#E7FE29] join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="divider"></div>
        <div className="text-center">
          <h1>@2024 Dream XI All Rights Reserved.</h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
