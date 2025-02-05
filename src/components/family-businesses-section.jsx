import Slider from "react-slick";
import MaxWidthWrapper from "./max-width-wrapper"
import HighlightedText from "./ui/highlighted-text"
import { FaArrowRightLong } from "react-icons/fa6";
import { familyData } from "../lib/constants";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const FamilyBusinessesSection = () => {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
  
    var settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
  return (
    <div className="mt-10">
      <MaxWidthWrapper className={"border-amber-400"}>
        <div className="w-full lg:w-[90%] justify-self-center border border-red-500 px-2">
          <div className="py-10 lg:py-20 lg:flex justify-between items-end ">
            <div className="text-2xl md:text-5xl text-myBlack font-myFont font-semibold">
              Our&nbsp;
              <HighlightedText text={"Family Businesses"} />
              we have <br className="hidden md:block"/>helped Grow
            </div>
            <div className="justify-self-center flex justify-center items-center gap-4 px-8 py-4 rounded-full border-2 border-myBlack bg-transparent hover:bg-myPrimary transition-colors duration-300 cursor-pointer mt-6 lg:mt-0">
              <p className="text-myBlack font-myFont font-semibold">See More</p>
              <FaArrowRightLong className="size-5" />
            </div>
          </div>
          <div className="w-full">
            <Slider ref={slider => { sliderRef = slider; }} {...settings}>
              {
                familyData.map((item) => (
                  <div key={item.id} className="px-2 lg:px-4">
                    <div className={`${item.cardColor} rounded-4xl text-myWhite font-myFont overflow-hidden`}>
                      <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">0{item.id}</p>
                      <div className="px-8 py-4 space-y-4 text-myBlack">
                        <p className="text-xl md:text-3xl font-semibold">{item.title}</p>
                        <div className="text-lg md:text-xl">
                          <span className="font-semibold">Challenge:</span>&nbsp;
                          {item.challenge}
                        </div>
                        <div className="text-lg md:text-xl">
                          <span className="font-semibold">Solution:</span>&nbsp;
                          {item.solution}
                        </div>
                        <div className="text-lg md:text-xl">
                          <span className="font-semibold">Results:</span>&nbsp;
                          {item.results}
                        </div>
                        <div className="flex justify-center items-center gap-1 px-8 py-4 rounded-xl border-2 border-myPrimary bg-myPrimary justify-self-start hover:bg-transparent transition-colors duration-200 cursor-pointer">
                          <p className="font-myFont text-myBlack text-lg font-bold">Read more</p>
                          <FiArrowUpRight className="size-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 my-10">
            <div></div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-myDarkWhite px-3 py-1 rounded-full text-sm font-myFont font-semibold text-myGrayText">SEO</div>
              <div className="bg-myDarkWhite px-3 py-1 rounded-full text-sm font-myFont font-semibold text-myGrayText">CRO</div>
              <div className="bg-myDarkWhite px-3 py-1 rounded-full text-sm font-myFont font-semibold text-myGrayText">Insta Ads</div>
            </div>
            <div className="justify-self-center md:justify-self-end flex items-center  gap-10">
              <button onClick={previous} className="border-2 border-myBlack px-6 py-3 rounded-full bg-transparent hover:bg-myPrimary cursor-pointer transition-colors duration-200">
                <FaArrowLeft className="size-8" />
              </button>
              <button onClick={next} className="border-2 border-myPrimary px-6 py-3 rounded-full bg-myPrimary hover:bg-transparent cursor-pointer transition-colors duration-200 group">
                <FaArrowRight className="size-8 fill-myWhite group-hover:fill-myPrimary" />
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default FamilyBusinessesSection