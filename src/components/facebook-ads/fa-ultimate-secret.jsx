import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'

const FAUltimateSecret = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
          <MaxWidthWrapper className={"border-white"}>
            <LeftSideVerticalText text={"Ultimate Secret"} className="bg-myLightGray -left-16" />
            <div className="w-full lg:w-[80%] justify-self-center px-4 py-10 font-myFont">
              <div className="text-3xl md:text-5xl/20 text-myWhite text-center font-semibold "> 
              Why Facebook Ads Should Be Your&nbsp;
              <HighlightedText text={"Ultimate Secret"} />
              &nbsp;Weapon
              </div>
              <div className="font-myFont text-xl md:text-3xl text-center md:mx-12 text-myWhite my-10">
              <span className='font-bold'>Facebook Ads are not just ads.</span> They’re your business’s front-row seat to billions of potential customers. Here’s how we make them work for you: 👉
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myGrowthCard1 hover:scale-105 transition-transform duration-300">
                <div className="px-8 py-6 space-y-4 text-myWhite">
                <div className="text-xl md:text-2xl font-bold text-myWhite mb-8">
                Stop Scrolling and Start Selling 
              </div>
                  <div className="text-lg md:text-xl">
                  With dynamic ad formats like carousels, video, and lead forms, we help you create content that stops thumbs in their tracks. Whether it’s driving traffic or direct sales, every campaign is built to convert.
                  </div>
                </div>
                </div>
                <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myGrowthCard2 hover:scale-105 transition-transform duration-300">
                <div className="px-8 py-6 space-y-4 text-myWhite">
                <div className="text-xl md:text-2xl font-bold text-myWhite mb-8">
                Engage with Precision 
              </div>
                  <div className="text-lg md:text-xl">
                  Why waste budget on the wrong audience? Using advanced targeting, we deliver ads directly to those most likely to take action. From custom audiences to lookalike campaigns, we ensure every dollar is spent wisely.
                  </div>
                </div>
                </div>
                <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myGrowthCard3 hover:scale-105 transition-transform duration-300">
                <div className="px-8 py-6 space-y-4 text-myWhite">
                <div className="text-xl md:text-2xl font-bold text-myWhite mb-8">
                Build Relationships That Drive Loyalty
              </div>
                  <div className="text-lg md:text-xl">
                  Facebook is about connection, not just conversion. By creating engaging, value-driven ads, we help build trust and long-term relationships with your audience.
                  </div>
                </div>
              </div>
</div>
            </div>
        </MaxWidthWrapper>
        </div>
      </div>
    <div className="bg-myPrimary -skew-y-[2deg] h-20"></div>
  </div>
  )
}

export default FAUltimateSecret