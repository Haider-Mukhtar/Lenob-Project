import MaxWidthWrapper from "./max-width-wrapper";
import SmallWhiteStar from "../assets/img/stars/small-white-star.svg";
import HighlightedText from "./ui/highlighted-text";
import { FaArrowRight } from "react-icons/fa6";

const KickstartJourneySection = () => {
  return (
    <div>
      <div className="bg-myDarkBackground -skew-y-[2deg] mt-10">
        <div className="skew-y-[2deg] py-16">
          <MaxWidthWrapper className={"border-white"}>
            <div className="w-full lg:w-[90%] justify-self-center border border-red-600 px-2">
              {/*<img className="aspect-square justify-self-end" src={SmallWhiteStar} alt="Small-White-Star" />*/}
              <div className="grid grid-cols-1 xl:grid-cols-2 my-12 gap-10 xl:gap-0">
                <div className="flex justify-center items-center">
                  <div className="text-3xl md:text-5xl/20 text-myWhite text-center font-semibold">
                    <HighlightedText text={"Kickstart Your Journey"} />
                    &nbsp;to Unstoppable Growth!
                  </div>
                </div>
                <div className="text-myWhite font-myFont text-xl space-y-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-myPrimary p-2 md:p-3 rounded-full">
                      <FaArrowRight className="fill-myWhite size-8" />
                    </div>
                    <p>Partner with Lenob.co to leverage expertly crafted digital marketing strategies.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-myPrimary p-2 md:p-3 rounded-full">
                      <FaArrowRight className="fill-myWhite size-8" />
                    </div>
                    <p>Drive traffic and convert leads with targeted, results-driven solutions.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-myPrimary p-2 md:p-3 rounded-full">
                      <FaArrowRight className="fill-myWhite size-8" />
                    </div>
                    <p>Achieve impactful outcomes that contribute to your business success.</p>
                  </div>
                </div>
              </div>
              <p className="font-myFont text-xl md:text-3xl text-myWhite font-semibold w-full md:w-[80%] justify-self-center text-center">
                Schedule your free consultation today and let's create something extraordinary together!
              </p>
              <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6  rounded-xl cursor-pointer border-2 border-myPrimary mt-8 hover:bg-transparent group transition-colors duration-300">
              <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl font-bold">Book a Discovery Call</p>
              <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
            </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
      <div className="bg-myPrimary -skew-y-[2deg] h-20"></div>
    </div>
  )
}

export default KickstartJourneySection