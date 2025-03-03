import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'
import LeftSideVerticalText from '../ui/left-side-vertical-text'

const ACoreValuesSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
          <MaxWidthWrapper>
            <LeftSideVerticalText text={"Core Values"} className="bg-myLightGray -left-12" />
            <div className="w-full lg:w-[70%] justify-self-center px-2 space-y-8">
            <div className="text-xl/8 md:text-4xl/14 text-myBlack text-center font-semibold ">  
            <HighlightedText text={"What We Our Core Values"} />
              </div>
                <ul className='font-myFont text-myWhite font-bold text-lg/8 md:text-xl/10 list-decimal list-inside'>
                  <li>
                  Transparency:&nbsp;
                  <p className='font-normal'>No fluff, no jargon—just clear, honest communication every step of the way.</p>
                  </li>
                  <li>
                  Innovation:&nbsp;
                  <p className='font-normal'>Staying ahead of trends to ensure your campaigns are always on the cutting edge.</p>
                  </li>
                  <li>
                  Commitment:&nbsp;
                  <p className='font-normal'>Your goals become ours. We don't succeed unless you do.</p>
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