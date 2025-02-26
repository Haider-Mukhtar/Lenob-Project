import React from 'react'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'

const B2BPainPointsSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
      <MaxWidthWrapper>
      <LeftSideVerticalText text={"Pain Points"} className="bg-myLightGray -left-11" />
        <div className="w-full lg:w-[80%] justify-self-center px-2">
        <div className="mx-10 text-3xl md:text-5xl/20 text-myWhite text-center font-semibold "> 
        <HighlightedText text={"The Pain Points We Solve"} />
          </div>
          <div className='font-myFont text-xl md:text-3xl/12 text-myWhite'>
            <ul className='list-decimal list-inside'>
              <li className='font-bold mt-16'>
                Too Many Unqualified Leads
                <p className='font-normal'>Say goodbye to time-wasting prospects. Our strategies focus on intent-driven targeting that delivers leads ready to convert.</p>
              </li>
              <li className='font-bold mt-16'>    
                High Cost Per Lead
                <p className='font-normal'>With advanced bidding strategies and continuous optimization, we drive your CPL down while increasing ROI.</p>
              </li>
              <li className='font-bold mt-16'>
              Long Sales Cycles
                <p className='font-normal'>Our multi-channel nurture campaigns shorten your sales cycle, keeping leads warm and moving them closer to a decision.</p>
              </li>
            </ul>
          </div>
            </div>
      </MaxWidthWrapper>
        </div>
      </div>
    <div className="bg-myPrimary -skew-y-[2deg] h-20"></div>
  </div>
  )
}

export default B2BPainPointsSection