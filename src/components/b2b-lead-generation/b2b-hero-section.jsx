import MaxWidthWrapper from "../max-width-wrapper"
import HighlightedText from "../ui/highlighted-text"

const B2BHeroSection = () => {
  return (
    <header className="bg-[url(/grid-hero-section.png)] bg-center bg-no-repeat pt-[72px] bg-myDarkBackground skew-y-3">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[80%] pt-24 justify-self-center -skew-y-3 px-2 pb-24">
          <div className="w-[95%] justify-self-center font-myFont text-3xl md:text-5xl/20 font-bold text-center text-myWhite">
            <HighlightedText text={"B2B Lead Generation"} />
            &nbsp;The Ultimate System for Consistent, High-Quality Leads That Drive Real Revenue Growth
        </div>
        <div className="font-myFont text-xl/8 md:text-2xl/10 text-center md:mx-12 text-myWhite font-bold mt-12">
        Turn your Ad Spend into a Flood of Qualified Leads for Your Sales Team
        </div>
        <div className="font-myFont text-xl/8 md:text-2xl/10 text-center md:mx-12 text-myWhite mt-4">
        We specialize in building and scaling predictable lead generation systems that turn Google, Meta, and LinkedIn ads into a pipeline of sales-ready prospects. Whether you’re a startups, enterprise, or niche industry, we deliver leads that convert.
        </div>
      </div>
      </MaxWidthWrapper>
      <div className="bg-myPrimary h-14"></div>
  </header>
  )
}

export default B2BHeroSection