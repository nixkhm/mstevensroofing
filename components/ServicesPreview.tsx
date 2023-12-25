import Image from "next/image";
import commercial from "../public/images/commercial.png";
import remodeling from "../public/images/remodeling.png";
import residential from "../public/images/residential.png";

const ServicesPreview = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded-lg">
      <div className="flex-1 text-center lg:mb-0 mb-8  mt-10 p-4 rounded-lg ml-5 mr-5">
        <h1 className="text-4xl font-extrabold">Residential</h1>
        <p className="text-lg">
          Whether you have a leaky roof or you've recently been considering
          starting fresh with a new one, don't delay any longer! Call us and we
          will come to your home and give you a free estimate.
        </p>
        <Image src={residential} alt="Residential Service" />
      </div>

      <div className="flex-1 text-center lg:mb-0 mb-8  mt-10 p-4 rounded-lg">
        <h1 className="text-4xl font-extrabold">Commercial</h1>
        <p className="text-lg">
          As the leading installer of commercial roofing on Long Island, we
          service all types of businesses. All work is guaranteed, and we work
          in a professional and timely manner.
        </p>
        <Image src={commercial} alt="Commercial Service" />
      </div>

      <div className="flex-1 text-center mt-10 p-4 rounded-lg">
        <h1 className="text-4xl font-extrabold">Remodeling</h1>
        <p className="text-lg">
          If you are thinking about transforming your home, look no further than
          M. Stevens. We pride ourselves on our quality, professionalism, and
          speed. Call today!
        </p>
        <Image src={remodeling} alt="Remodeling Service" />
      </div>
    </div>
  );
};

export default ServicesPreview;
