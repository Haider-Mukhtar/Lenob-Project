import MaxWidthWrapper from "./max-width-wrapper"
import HighlightedText from "./ui/highlighted-text"
import SmallWhiteStar from "../assets/img/stars/small-white-star.svg";
import { stepsData } from "../lib/constants";

const StepsSection = () => {
  return (
    <div className=" bg-myPrimary -skew-y-3">
      <div className=" bg-myDarkBackground skew-y-3">
        <MaxWidthWrapper className={"border-amber-300"}>
          <div className="w-full lg:w-[90%] justify-self-center border border-red-600 px-2 py-10 ">
            {/*<img className="aspect-square justify-self-end" src={SmallWhiteStar} alt="Small-White-Star" />*/}
            <div className="text-3xl md:text-5xl/20 text-myWhite font-myFont font-semibold text-center">
              From Traffic to&nbsp;   
              <HighlightedText text={"Conversions"} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-12 md:gap-4">
              {
                stepsData.map((item) => (
                  <div key={item.id} className="flex flex-col items-center font-myFont space-y-4 md:space-y-6">
                    <img className="aspect-square" src={item.banner} alt="steps-image" />
                    <p className="text-2xl font-bold text-myYellowText text-center">{item.title}</p>
                    <p className="text-base text-myWhite text-center">{item.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default StepsSection