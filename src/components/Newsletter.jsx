import banner from "../assets/banner-main.png";
import bgShadow from "../assets/bg-shadow.png";
const Newsletter = () => {
  return (
    <div>
      <div className="container mx-auto p-4 lg:p-0 z-10 ring-offset-8 ring-offset-red ring-2 ring-black rounded-xl">
        <div
          style={{
            backgroundImage: `url(${bgShadow})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex: 1,
          }}
          className="flex flex-col items-center justify-center content-center rounded-xl p-8 lg:p-24 bg-white space-y-4"
        >
          <img src={banner} alt="" />
          <h1 className="text-xl lg:text-4xl text-white text-center font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-gray-500 lg:text-xl">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="btn bg-[#E7FE29] ring-offset-8 ring-offset-black ring-1 ring-[#E7FE29] rounded-xl text-xl font-bold">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
