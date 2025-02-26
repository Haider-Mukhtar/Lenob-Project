import MaxWidthWrapper from "../max-width-wrapper"
import HighlightedText from "../ui/highlighted-text"

const AHeroSection = () => {
  return (
    <header className="bg-[url(/grid-hero-section.png)] bg-center bg-no-repeat pt-[72px] bg-myDarkBackground skew-y-2">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[80%] py-32 space-y-12 justify-self-center -skew-y-2 px-2">
        <div className="font-myFont text-3xl md:text-5xl/20 font-bold text-center text-myWhite">
            <HighlightedText text={"About Us"} />
        </div>
      </div>
      </MaxWidthWrapper>
      <div className="bg-myPrimary h-14"></div>
  </header>
  )
}

export default AHeroSection