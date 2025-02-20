import HighlightedText from "./ui/highlighted-text"
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { testimonialsData } from "../lib/constants";
import SmallWhiteStar from "../assets/img/stars/small-white-star.svg";

const TestimonialsSection = () => {
  return (
    <div>
      <div className="bg-myDarkBackground -skew-y-3 mt-10">
        <div className="skew-y-3 py-10">

            <div className="w-full justify-self-center border border-red-500 px-2">
              <div className="pt-10 font-myFont w-full md:w-[80%] lg:[70%] justify-self-center border border-amber-400">
              {/*<img className="aspect-square justify-self-end" src={SmallWhiteStar} alt="Small-White-Star" />*/}
                <div className="text-3xl md:text-5xl/20 text-myWhite text-center font-semibold ">
                  <HighlightedText text={"Testimonials"} />
                  &nbsp;that Speak to Our Results
                </div>
                <p className="text-myGrayText text-xl text-center mt-4">Read through our testimonials to see why our clients love working with us and <br /> how we can help you achieve your business goals</p>
                {/*<img className="aspect-square justify-self-start" src={SmallWhiteStar} alt="Small-White-Star" />*/}
              </div>
              <Marquee pauseOnHover>
                {
                  testimonialsData.map((item) => (
                    <div key={item.id} className="bg-myLigtBackground p-6 md:p-8 space-y-4 rounded-4xl w-80 md:w-[600px] mx-4 drop-shadow-lg hover:scale-105 duration-500 transition-transform my-10">
                      <div className="md:flex justify-between items-center space-y-3 md:space-y-0">
                        <div className="flex items-center gap-2">
                          <img className="aspect-square rounded-full h-16" src={item.clientImage} alt="Client-Image" />
                          <div className="font-myFont">
                            <p className="text-xl text-myWhite font-semibold">{item.clientName}</p>
                              <p className="text-base text-myGrayText">{item.clientDetail}</p>
                          </div>
                        </div>
                        <div className="flex gap-6 justify-self-end">
                          <div className="flex gap-1">
                            {[...Array(item.stars)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className="size-5 fill-myPrimary"
                              />
                            ))}
                          </div>  
                          <FaQuoteLeft className="size-12 hidden md:block fill-myPrimary" />
                        </div>
                      </div>
                      <p className="font-myFont font-semibold text-myWhite text-xl text-center md:text-start">{item.title}</p>
                      <p className="font-myFont text-myWhite text-base line-clamp-5 text-center md:text-start">{item.description}</p>
                    </div>
                  ))
                }
                </Marquee>
            </div>

        </div>
      </div>
      <div className="bg-myPrimary -skew-y-3 h-20"></div>
    </div>
  )
}

export default TestimonialsSection