import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'
import Marquee from 'react-fast-marquee'

const EMTurnProblemsSection = () => {
  return (
    <div>
    <MaxWidthWrapper className={"border-white"}>
    <div className="w-full lg:w-[80%] justify-self-center px-4 py-10 font-myFont">
      <div className="text-xl/8 md:text-4xl/14 text-myBlack text-center font-semibold "> 
      How We&nbsp;
      <HighlightedText text={"Turn Problems Into Profits"} />
      </div>
      <div className="font-myFont text-lg/8 md:text-xl/10 text-center md:mx-12 text-myBlack my-10">
      At Lenob.co, we flip these challenges into opportunities for growth
      </div>
      <Marquee pauseOnHover >
      <div className="w-80 md:w-[400px] my-2 mx-2 h-[240px] rounded-4xl text-myBlack font-myFont overflow-hidden bg-myVeryLightGray hover:scale-105 transition-transform duration-300">
        <div className="px-8 py-6 space-y-4 text-myBlack">
        <div className="text-xl md:text-2xl font-extrabold text-myFAQBackground mb-8">
        01
      </div>
                <div className="text-lg md:text-xl font-bold text-myBlack mb-8">
                Hyper-Targeted Campaigns
      </div>
          <div className="text-lg">
          Reach your ideal customers where they spend the most time.
          </div>
        </div>
        </div>
        <div className="w-80 md:w-[400px] my-2 mx-2 h-[240px] rounded-4xl text-myBlack font-myFont overflow-hidden bg-myVeryLightGray hover:scale-105 transition-transform duration-300">
              <div className="px-8 py-6 space-y-4 text-myBlack">
              <div className="text-xl md:text-2xl font-extrabold text-myFAQBackground mb-8">
              02
            </div>
        <div className="text-lg md:text-xl font-bold text-myBlack mb-8">
        Data-Driven Decisions
      </div>
          <div className="text-lg">
          No guessing—only proven strategies that drive measurable results.
          </div>
        </div>
        </div>
        <div className="w-80 md:w-[400px] my-2 mx-2 h-[240px] rounded-4xl text-myBlack font-myFont overflow-hidden bg-myVeryLightGray hover:scale-105 transition-transform duration-300">
              <div className="px-8 py-6 space-y-4 text-myBlack">
              <div className="text-xl md:text-2xl font-extrabold text-myFAQBackground mb-8">
              03
            </div>
        <div className="text-lg md:text-xl font-bold text-myBlack mb-8">
        Conversion Optimization:
      </div>
          <div className="text-lg">
          Every click matters, and we ensure those clicks lead to sales.
          </div>
        </div>
        </div>
        </Marquee>
    </div>
</MaxWidthWrapper>
    </div>
  )
}

export default EMTurnProblemsSection