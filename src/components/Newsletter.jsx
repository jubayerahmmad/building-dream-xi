import bgShadow from "../assets/bg-shadow.png";
import PropTypes from "prop-types";
const Newsletter = ({ handleOnChange, handleSubscribe }) => {
  return (
    <div className="absolute left-1/2 -top-64 lg:-top-60 -translate-x-1/2 px-10 lg:px-0 container mx-auto">
      <div className="p-4 border-2 border-white rounded-3xl bg-transparent backdrop-blur-lg">
        <div className="container mx-auto rounded-3xl">
          <div
            style={{
              backgroundImage: `url(${bgShadow})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              zIndex: 1,
            }}
            className="flex flex-col items-center justify-center content-center rounded-xl p-8 lg:p-24 bg-white space-y-4"
          >
            <h1 className="text-xl lg:text-4xl text-black text-center font-bold">
              Subscribe to Our Newsletter
            </h1>
            <p className="text-gray-500 lg:text-xl text-center">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="lg:flex gap-2 mx-4 space-y-2 lg:space-y-0">
              <div>
                <input
                  className="border-2 px-2 py-1 lg:px-8 lg:py-2.5 rounded-xl"
                  onChange={handleOnChange}
                  type="email"
                  placeholder="Your Email"
                  autoComplete="on"
                />
              </div>
              <div>
                <button
                  onClick={handleSubscribe}
                  className="btn bg-[#E7FE29] btn-sm lg:btn-md rounded-xl text-md lg:text-xl font-bold w-full"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Newsletter.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleSubscribe: PropTypes.func.isRequired,
};

export default Newsletter;
