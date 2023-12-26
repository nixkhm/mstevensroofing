import { SocialIcon } from "react-social-icons";

const Socials = () => {
  return (
    <div
      className="flex
                    lg:flex-row
                    sticky 
                    top-0 
                    items-center 
                    justify-end 
                    p-1 
                    bg-black transition
                    flex-col
                    "
    >
      <div
        className="text-white
                       text-center 
                       font-bold p-2 
                       hover:text-black 
                       hover:bg-yellow-400 
                       rounded-full 
                       transition"
      >
        Office: 631-345-2539
      </div>
      <div
        className="text-white 
                        text-center 
                        font-bold p-2 
                        hover:text-black 
                        hover:bg-yellow-400 
                        rounded-full 
                        transition"
      >
        Cell: 631-662-1862
      </div>
      <div
        className="text-white 
                        text-center 
                        font-bold p-2 
                        hover:text-black 
                        hover:bg-yellow-400 
                        rounded-full 
                        transition"
      >
        mstevensroofing@optonline.net
      </div>
      <SocialIcon
        url="https://www.facebook.com/mstevensroofing"
        target="_blank"
        style={{ height: 50, width: 40, padding: 5 }}
        bgColor="transparent"
        className="hover:bg-blue-500 hover:text-white rounded-full bg-black"
      />
      <SocialIcon
        url="https://www.angi.com/companylist/us/ny/medford/m-stevens-roofing-co-inc-reviews-484988.htm#reviews-section"
        target="_blank"
        style={{ height: 50, width: 40, padding: 5, color: "#3b5998" }}
        bgColor="transparent"
        className="social-icon-hover bg-black rounded-full"
      />
    </div>
  );
};

export default Socials;
