import MaxWidthWrapper from "../max-width-wrapper"
import HighlightedText from "../ui/highlighted-text"

const PHeroSection = () => {
  return (
    <header className="bg-[url(/grid-hero-section.png)] bg-center bg-no-repeat pt-[72px] bg-myDarkBackground skew-y-3">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[80%] pt-14 space-y-12 justify-self-center border border-red-600 -skew-y-3 px-2 pb-20">
        <div className="font-myFont text-3xl md:text-6xl/26 font-bold text-center text-myWhite">
            <HighlightedText text={"Privacy"} />
        </div>
      </div>
      </MaxWidthWrapper>
      <div className="bg-myPrimary h-14"></div>
  </header>
  )
}

export default PHeroSection