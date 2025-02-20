import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'

const ACoreValuesSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
        <MaxWidthWrapper className={"border-white"}>
            <div className="w-full lg:w-[70%] justify-self-center border border-red-600 px-2 space-y-8">
            <div className="text-3xl md:text-5xl/20 text-myBlack text-center font-semibold ">  
            <HighlightedText text={"What We Our Core Values"} />
              </div>
                <ul className='font-myFont text-myWhite font-bold text-xl/8 md:text-3xl/14 list-decimal list-inside'>
                  <li>
                  Transparency:&nbsp;
                  <span className='font-normal'>No fluff, no jargon—just clear, honest communication every step of the way.</span>
                  </li>
                  <li>
                  Innovation:&nbsp;
                  <span className='font-normal'>Staying ahead of trends to ensure your campaigns are always on the cutting edge.</span>
                  </li>
                  <li>
                  Commitment:&nbsp;
                  <span className='font-normal'>Your goals become ours. We don't succeed unless you do.</span>
                  </li>
                </ul>
            </div>
        </MaxWidthWrapper>
      </div>
    </div>
    </div>
  )
}

export default ACoreValuesSection