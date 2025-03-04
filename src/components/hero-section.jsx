import MaxWidthWrapper from "./max-width-wrapper"
import HighlightedText from "./ui/highlighted-text"

const HeroSection = () => {
  return (
    <header className="bg-[url(/grid-hero-section.png)] bg-center bg-no-repeat pt-[72px] bg-myDarkBackground skew-y-2">
      <MaxWidthWrapper>
        <div className="w-full lg:w-[80%] pt-14 space-y-12 justify-self-center -skew-y-2 px-2 pb-40">
          <div className="font-myFont text-3xl md:text-5xl/20 font-bold text-center text-myWhite">
            <HighlightedText text={"A Game Changing"} />
            &nbsp;<span>Transformation</span>
            <p>with Meta and Google Ads</p>
          </div>
          <div className="font-myFont text-xl/8 md:text-2xl/10 text-center md:mx-12 text-myWhite">
            We helped a single mom in her 40s, turning her hair care business, to reach&nbsp;
            <span className="text-red-500 underline">$1M</span>
            &nbsp;in annual revenue with targeted Meta and Google Ads.
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
            <div className="bg-myPrimary border-2 border-myPrimary cursor-pointer text-lg md:text-2xl font-myFont font-semibold px-10 py-4 rounded-xl text-myWhite text-center hover:bg-transparent hover:text-myPrimary transition-all duration-300">
              Get a Free Audit Report
            </div>
            <div className="bg-transparent border-2 border-myPrimary cursor-pointer text-lg md:text-2xl font-myFont font-semibold px-10 py-4 rounded-xl text-myPrimary text-center hover:bg-myPrimary hover:text-myWhite transition-all duration-300">
              Schedule an ice Breaker
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default HeroSection;