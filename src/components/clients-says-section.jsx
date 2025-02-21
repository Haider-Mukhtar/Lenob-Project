import SmallWhiteStar from "../assets/img/stars/small-white-star.svg";
import { gaTestimonialData } from "../lib/constants";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import MaxWidthWrapper from "./max-width-wrapper";
import HighlightedText from "./ui/highlighted-text";
import LeftSideVerticalText from "./ui/left-side-vertical-text";

const ClientsSaysSection = () => {
  return (
    <div>
    <div className="bg-myDarkBackground -skew-y-3 mt-10">
      <div className="skew-y-3 py-16">
          <MaxWidthWrapper className={"border-white"}>
          <LeftSideVerticalText text={"Our Clients"} className="bg-myLightGray -left-12" />
            <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2">
              <div className="font-myFont w-full justify-self-center border border-amber-400">
                {/*<img className="aspect-square justify-self-end" src={SmallWhiteStar} alt="Small-White-Star" />*/}
                <div className="text-3xl md:text-5xl/20 text-myWhite text-center font-semibold ">
                  What&nbsp;   
                  <HighlightedText text={"Our Clients"} />
                  &nbsp;Say about Us
                </div>
                <p className="text-myGrayText text-xl text-center mt-10">At Lenob, we turn visions into victories—delivering growth so impactful, it leaves <br className="hidden lg:block"/> every client smiling from ear to ear!</p>
                {/*<img className="aspect-square justify-self-start" src={SmallWhiteStar} alt="Small-White-Star" />*/}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-10">
                {
                  gaTestimonialData.map((item) => (
                    <div key={item.id}>
                      {
                        item.videoCard === false ?
                          <div className="bg-myWhite p-6 rounded-2xl font-myFont text-myBlack h-full hover:scale-105 transition-transform duration-300">
                            <p className="text-base md:text-lg font-bold">{item.heading}</p>
                            <p className="text-sm md:text-base mt-6">{item.text}</p>
                          </div>
                          :
                          <div className="rounded-2xl font-myFont bg-myPrimary h-full overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="bg-gray-500 w-full relative">
                              <video
                                className="aspect-video h-full w-full"
                                muted
                                autoPlay
                              >
                                <source
                                  src="https://docs.material-tailwind.com/demo.mp4"
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                              <div className="font-myFont text-myWhite bg-myWhite/30 text-right pr-6 absolute bottom-0 right-0 left-0 py-2">
                                <p className="text-base font-bold">{item.name}</p>
                                <p className="text-xs">{item.title}</p>
                                <div className="flex items-center gap-0.5 justify-self-end mt-1">
                                {[...Array(item.rating)].map((_, i) => (
                                  <FaStar 
                                  key={i} 
                                  className="size-5 fill-yellow-500"
                                  />
                                ))}
                                </div>
                              </div>
                            </div>
                            <p className="p-6 text-myWhite text-base md:text-lg font-bold">{item.heading}</p>
                          </div>
                      }
                    </div>
                  ))
                }
              </div>
              <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6 mt-8 rounded-xl cursor-pointer border-2 border-myPrimary hover:bg-transparent group transition-colors duration-300">
                                        <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl font-bold">Get your Free Google Ads Audit</p>
                                        <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
                                      </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
      <div className="bg-myPrimary -skew-y-3 h-20"></div>
      </div>
  )
}

export default ClientsSaysSection