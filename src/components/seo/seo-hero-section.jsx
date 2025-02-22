import MaxWidthWrapper from "../max-width-wrapper"
import HighlightedText from "../ui/highlighted-text"

const SEOHeroSection = () => {
  return (
    <header className="bg-[url(/grid-hero-section.png)] bg-center bg-no-repeat pt-[72px] bg-myDarkBackground skew-y-3">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[80%] pt-24 space-y-12 justify-self-center border border-red-600 -skew-y-3 px-2 pb-24">
          <div className="font-myFont text-3xl md:text-5xl/20 font-bold text-center text-myWhite">
          Dominate Search Engines: Turn Every Click into a Loyal Customer and&nbsp;
            <HighlightedText text={"Transform Your Website into"} />
            &nbsp;a Revenue-Generating Machine
        </div>
        <div className="font-myFont text-xl md:text-3xl text-center md:mx-12 text-myWhite">
        SEO isn't just about rankings—it's about revenue. At Lenob.co, we turn your website into a lead-generating machine with strategies that drive traffic, build trust, and convert browsers into buyers.
        </div>
      </div>
      </MaxWidthWrapper>
      <div className="bg-myPrimary h-14"></div>
  </header>
  )
}

export default SEOHeroSection