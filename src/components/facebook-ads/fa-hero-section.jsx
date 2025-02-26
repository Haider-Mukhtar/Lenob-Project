import MaxWidthWrapper from "../max-width-wrapper"
import HighlightedText from "../ui/highlighted-text"

const FAHeroSection = () => {
  return (
    <header className="bg-[url(/grid-hero-section.png)] bg-center bg-no-repeat pt-[72px] bg-myDarkBackground skew-y-3">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[80%] pt-24 space-y-12 justify-self-center -skew-y-3 px-2 pb-24">
        <div className="font-myFont text-3xl md:text-5xl/20 font-bold text-center text-myWhite">
            <HighlightedText text={"How to Flood Your Business"} />
            &nbsp;with Customers, Clients, and Sales Using Facebook Ads That Actually Work!
        </div>
        <div className="font-myFont text-xl md:text-3xl text-center md:mx-12 text-myWhite">
          With 2.6 billion people logging into Facebook monthly, your next big customer is just a click away! Tap into this goldmine of eager buyers ready to spend on your products or services!
        </div>
      </div>
      </MaxWidthWrapper>
      <div className="bg-myPrimary h-14"></div>
  </header>
  )
}

export default FAHeroSection