import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'
import LeftSideVerticalText from '../ui/left-side-vertical-text'

const FARealStoriesSection = () => {
  return (
    <div className="py-16">
      <MaxWidthWrapper>
      <LeftSideVerticalText text={"Results"} className="bg-myPrimary -left-7" />
        <div className="w-full lg:w-[80%] justify-self-center px-4 space-y-8">
          <div className="font-myFont text-xl/8 md:text-4xl/14 font-bold text-center text-myBlack">
            Real Stories.&nbsp;
            <HighlightedText text={"Real Results."} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard1 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">01</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl/8 md:text-2xl/10 font-bold text-myBlack mb-8">
                                E-Commerce Business: 6x ROAS in 90 Days 
                              </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Overspending with no conversions.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Created conversion-focused ads with a retargeting strategy.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    $250,000 in revenue with a 6x ROAS.
                                  </div>
                                </div>
                              </div>
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard2 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">02</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl/8 md:text-2xl/10 font-bold text-myBlack mb-8">
                                Fitness Studio: Doubling Class Bookings
                              </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Industry:</span>&nbsp;
                                    Apparel Ecommerce
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Struggling to attract local customers.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Designed geo-targeted lead generation ads with compelling offers.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    Doubled bookings and reduced cost per lead by 40%.
                                  </div>
                                </div>
                              </div>
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard3 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">03</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl/8 md:text-2xl/10 font-bold text-myBlack mb-8">
                                Tech Startup: Building Brand Awareness
                              </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Minimal visibility in a competitive niche.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Launched video ad campaigns to educate and engage.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    Increased brand recognition by 300% in 6 months.
                                  </div>
                                </div>
            </div>
            </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default FARealStoriesSection