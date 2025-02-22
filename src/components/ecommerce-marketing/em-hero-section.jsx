import MaxWidthWrapper from "../max-width-wrapper"
import HighlightedText from "../ui/highlighted-text"

const EMHeroSection = () => {
  return (
    <header className="bg-[url(/grid-hero-section.png)] bg-center bg-no-repeat pt-[72px] bg-myDarkBackground skew-y-3">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[80%] pt-24 space-y-12 justify-self-center border border-red-600 -skew-y-3 px-2 pb-24">
          <div className="font-myFont text-3xl md:text-5xl/20 font-bold text-center text-myWhite">
          From Clicks to Loyal Customers: Scale Your eCommerce&nbsp;
            <HighlightedText text={"Business 5X in 90 Days"} />
            &nbsp;and Turn Traffic Into Repeat Buyers
        </div>
        <div className="font-myFont text-xl md:text-3xl text-center md:mx-12 text-myWhite">
        Your eCommerce store deserves more than just traffic—it deserves transformation. Take your online store to new heights with proven strategies that deliver traffic, skyrocket sales, and build lasting customer loyalty.
        </div>
      </div>
      </MaxWidthWrapper>
      <div className="bg-myPrimary h-14"></div>
  </header>
  )
}

export default EMHeroSection