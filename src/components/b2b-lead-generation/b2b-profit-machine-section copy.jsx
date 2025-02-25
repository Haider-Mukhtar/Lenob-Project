import React from 'react'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'

const B2BProfitMachineSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
      <MaxWidthWrapper>
      <LeftSideVerticalText text={"Profit Machine"} className="bg-myLightGray -left-15" />
        <div className="w-full lg:w-[70%] justify-self-center border border-red-600 px-2">
        <div className="mx-10 text-3xl md:text-5xl/20 text-myWhite text-center font-semibold "> 
                <HighlightedText text={"Ready to Turn Your eCommerce"} />
                &nbsp;Store into a Profit Machine?
          </div>
          <div className='font-myFont text-xl md:text-3xl/12 text-myWhite mt-10'>
            <p>
            It’s time to stop guessing and start scaling. Partner with Lenob.co and experience the difference of data-driven, results-oriented eCommerce marketing.
            </p>
          </div>
            </div>
      </MaxWidthWrapper>
        </div>
      </div>
    <div className="bg-myPrimary -skew-y-[2deg] h-20"></div>
  </div>
  )
}

export default B2BProfitMachineSection