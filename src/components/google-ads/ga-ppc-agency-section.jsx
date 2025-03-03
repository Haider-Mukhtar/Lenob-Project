import MaxWidthWrapper from "../max-width-wrapper"
import HighlightedText from "../ui/highlighted-text"
import SmallWhiteStar from "../../assets/img/stars/small-white-star.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoppingAdsBanner from "../../assets/img/shopping-ads-banner.png";
import DisplayAdsBanner from "../../assets/img/display-ads-banner.png";
import YoutubeAdsBanner from "../../assets/img/youtube-ads-banner.png";
import Marquee from "react-fast-marquee";
import { FaArrowRight } from "react-icons/fa6";
import LeftSideVerticalText from "../ui/left-side-vertical-text";

const GAPPCAgencySection = () => {
  return (
    <div className=" bg-myPrimary -skew-y-[2deg]">
      <div className=" bg-myDarkBackground skew-y-[2deg]">
        <MaxWidthWrapper>
        <LeftSideVerticalText text={"PPC Agency"} className="bg-myLightGray -left-11" />
          <div className="w-full lg:w-[70%] justify-self-center px-2 py-10 ">
            <div className="font-myFont w-full justify-self-center">
              {/*<img className="aspect-square justify-self-end" src={SmallWhiteStar} alt="Small-White-Star" />*/}
              <div className="text-xl/8 md:text-4xl/14 text-myWhite text-center font-semibold ">
                Work with the&nbsp;   
                <HighlightedText text={"best PPC Agency"} />
                &nbsp;and double your Revenues, not your budget
              </div>
              {/*<img className="aspect-square justify-self-start" src={SmallWhiteStar} alt="Small-White-Star" />*/}
            </div>
            <div className="mt-10 space-y-14">
              <div className="font-myFont text-myWhite flex gap-4 md:gap-12">
                <p className="font-extrabold text-4xl md:text-5xl">01</p>
                <div className="space-y-2">
                  <p className="font-bold text-lg/8 md:text-2xl/10">Certified Google Partners:</p>
                  <p className="text-lg md:text-xl">Our team comprises certified professionals with a proven track record in managing successful Google Ads campaigns across diverse industries.</p>
                </div>
              </div>
              <div className="font-myFont text-myWhite flex gap-4 md:gap-12">
                <p className="font-extrabold text-4xl md:text-5xl">02</p>
                <div className="space-y-2">
                  <p className="font-bold text-lg/8 md:text-2xl/10">Tailored Strategies:</p>
                  <p className="text-lg md:text-xl">We understand that every business is unique. Our bespoke campaigns are crafted to align with your specific goals and market dynamics.</p>
                </div>
              </div>
              <div className="font-myFont text-myWhite flex gap-4 md:gap-12">
                <p className="font-extrabold text-4xl md:text-5xl">03</p>
                <div className="space-y-2">
                  <p className="font-bold text-lg/8 md:text-2xl/10">Transparent Reporting:</p>
                  <p className="text-lg md:text-xl">Stay informed with clear and detailed performance reports, providing insights into your campaign's effectiveness and ROI.</p>
                </div>
              </div>
              <div className="font-myFont text-myWhite flex gap-4 md:gap-12">
                <p className="font-extrabold text-4xl md:text-5xl">04</p>
                <div className="space-y-2">
                  <p className="font-bold text-lg/8 md:text-2xl/10">Comprehensive Management:</p>
                  <p className="text-lg md:text-xl">From initial setup to continuous optimization, we handle all aspects of your Google Ads campaigns, allowing you to focus on your core business operations.</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Marquee pauseOnHover>
                      <div  className="bg-myLigtBackground m-3 p-6 rounded-4xl text-myWhite font-myFont drop-shadow-xl hover:scale-105 transition-transform duration-500">
                        <img className="object-cover rounded-2xl md:rounded-4xl h-40 md:h-60 w-full aspect-video" src={ShoppingAdsBanner} alt="image" /> 
                        <p className="text-lg md:text-2xl font-bold mt-6">Shopping  Ads</p>
                      </div>
                      <div  className="bg-myLigtBackground m-3 p-6 rounded-4xl text-myWhite font-myFont drop-shadow-xl hover:scale-105 transition-transform duration-500">
                        <img className="object-cover rounded-2xl md:rounded-4xl h-40 md:h-60 w-full aspect-video" src={DisplayAdsBanner} alt="image" /> 
                        <p className="text-lg md:text-2xl font-bold mt-6">Display Ads</p>
                      </div>
                      <div  className="bg-myLigtBackground m-3 p-6 rounded-4xl text-myWhite font-myFont drop-shadow-xl hover:scale-105 transition-transform duration-500">
                        <img className="object-cover rounded-2xl md:rounded-4xl w-full h-40 md:h-60 aspect-video" src={YoutubeAdsBanner} alt="image" /> 
                        <p className="text-lg md:text-2xl font-bold mt-6">Youtube  Ads</p>
                      </div>
              </Marquee>
            </div>
                        <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6 mt-10 rounded-xl cursor-pointer border-2 border-myPrimary hover:bg-transparent group transition-colors duration-300">
                          <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl text-center font-bold">Claim your Free 30 Min Consultation</p>
                          <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
                        </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default GAPPCAgencySection