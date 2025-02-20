import MaxWidthWrapper from "./max-width-wrapper" 
import HighlightedText from "./ui/highlighted-text"
import SmallWhiteStar from "../assets/img/stars/small-white-star.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { provenExpertise } from "../lib/constants";


const ProvenExpertiseSection = () => {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    <div className=" bg-myPrimary -skew-y-3">
      <div className=" bg-myDarkBackground skew-y-3">
        <MaxWidthWrapper className={"border-amber-300"}>
          <div className="w-full lg:w-[90%] justify-self-center border border-red-600 px-2 py-10 ">
            <div className="w-full lg:w-[80%] py-2 justify-self-center border border-yellow-300">
              {/*<img className="aspect-square" src={SmallWhiteStar} alt="Small-White-Star" />*/}
              <div className="text-3xl md:text-5xl/20 text-myWhite font-myFont font-semibold text-center">
                Grow Smarter, Faster, and Stronger with&nbsp;
                <HighlightedText text={"Our Proven Expertise"} />
              </div>
              {/*<img className="aspect-square justify-self-end" src={SmallWhiteStar} alt="Small-White-Star" />*/}
            </div>
            <div className="flex flex-row  justify-center items-center">
              <button onClick={previous} className="bg-myPrimary hidden lg:flex w-14 h-14 aspect-square border-2 group border-myPrimary hover:bg-transparent items-center justify-center rounded-full cursor-pointer transition-all duration-300">
                <FaArrowLeft  className="size-8 fill-myWhite group-hover:fill-myPrimary" />
              </button>
              <div className="w-full md:w-[93%]">
                <Slider ref={slider => { sliderRef = slider; }} {...settings}>
                  {
                    provenExpertise.map((item) => (
                      <div key={item.id} className="px-2 lg:px-4 py-6">
                        <div  className="bg-myLigtBackground p-6 lg:p-12 rounded-4xl text-myWhite font-myFont drop-shadow-xl">
                          <p className="text-4xl md:text-5xl font-bold font-myNumberFont text-myGrayText">0{item.id}</p>
                          <img className="object-cover rounded-4xl mt-4 md:mt-8 h-80 justify-self-center" src={item.banner} alt="image" /> 
                          <p className="text-2xl md:text-3xl font-bold mt-6 md:mt-8">{item.title}</p>
                          <p className="text-lg md:text-xl mt-3">{item.description}</p>
                        </div>
                      </div>
                    ))
                  }
                </Slider>
              </div>
              <button onClick={next} className="bg-myPrimary hidden lg:flex w-14 h-14 aspect-square border-2 group border-myPrimary hover:bg-transparent items-center justify-center rounded-full cursor-pointer transition-all duration-300">
                <FaArrowRight className="size-8 fill-myWhite group-hover:fill-myPrimary" />
              </button>
            </div>
            <div className="flex lg:hidden justify-center items-center gap-10">
              <button onClick={previous} className="bg-myPrimary flex w-14 h-14 aspect-square border-2 group border-myPrimary hover:bg-transparent items-center justify-center rounded-full cursor-pointer transition-all duration-300">
                <FaArrowLeft  className="size-8 fill-myWhite group-hover:fill-myPrimary" />
              </button>
              <button onClick={next} className="bg-myPrimary flex w-14 h-14 aspect-square border-2 group border-myPrimary hover:bg-transparent items-center justify-center rounded-full cursor-pointer transition-all duration-300">
                <FaArrowRight className="size-8 fill-myWhite group-hover:fill-myPrimary" />
              </button>
            </div>
            <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6 rounded-xl cursor-pointer border-2 border-myPrimary mt-4 hover:bg-transparent group transition-colors duration-300">
              <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl font-bold">Get a Free Audit Report</p>
              <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default ProvenExpertiseSection