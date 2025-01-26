import MaxWidthWrapper from "./max-width-wrapper"
import HighlightedText from "./ui/highlighted-text"
import SmallGreenStar from "../assets/img/stars/small-green-star.svg"

const SuccessStoriesSection = () => {
  return (
    <div className="mt-10">
      <MaxWidthWrapper className={"border-amber-300"}>
        <div className="w-full lg:w-[90%] justify-self-center border border-red-600 px-2 py-10 ">
          <div className="pt-10 font-myFont w-full md:w-[70%] justify-self-center border border-amber-400">
            <img className="aspect-square justify-self-start" src={SmallGreenStar} alt="Small-White-Star" />
            <div className="text-2xl md:text-5xl text-myBlack text-center font-semibold ">
              <HighlightedText text={"Success"} />
              &nbsp;Stories of our loyal clients
            </div>
            <p className="text-myGrayText text-xl text-center mt-4">At Captens, we turn visions into victories—delivering growth so impactful, it leaves every client smiling from ear to ear!</p>
            <img className="aspect-square justify-self-end" src={SmallGreenStar} alt="Small-White-Star" />
          </div>
          <div>
            
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default SuccessStoriesSection