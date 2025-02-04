import MaxWidthWrapper from "./max-width-wrapper"
import HighlightedText from "./ui/highlighted-text"

const GAHeroSection = () => {
  return (
    <header className="bg-[url(/grid-hero-section.png)] bg-center bg-no-repeat pt-[72px] bg-myDarkBackground skew-y-3">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[80%] pt-14 space-y-12 justify-self-center border border-red-600 -skew-y-3 px-2 pb-20">
        <div className="font-myFont text-3xl md:text-6xl/26 font-bold text-center text-myWhite">
          <p>Where Strategy Meets Scale: How to Make your Google Ads More Predictable,&nbsp;</p>
          <HighlightedText text={"Scalable and Profitable"} />
        </div>
        <div className="font-myFont text-xl md:text-3xl text-center md:mx-12 text-myWhite">
          We transform your Google Ads Account into a lead generation machine delivering scalable, measurable, and highly profitable leads.
        </div>
      </div>
      </MaxWidthWrapper>
      <div className="bg-myPrimary h-14"></div>
  </header>
  )
}

export default GAHeroSection