import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'

const EMProfitMachine = () => {
  return (
    <div className='py-10'>
    <MaxWidthWrapper>
      <LeftSideVerticalText text={"Profit Machine"} className="bg-myLightGray -left-14" />
        <div className="w-full lg:w-[70%] justify-self-center px-2 py-10">
        <div className="mx-10 text-3xl md:text-5xl/20 text-myBlack text-center font-semibold "> 
        <HighlightedText text={"Ready to Turn Your eCommerce "} />
        &nbsp;Store into a Profit Machine?
          </div>
          <div className='my-10'>
            <p className='font-myFont text-myBlack font-semibold text-lg/8 md:text-3xl/10 text-center'>
It’s time to stop guessing and start scaling. Partner with Lenob.co and experience the difference of data-driven, results-oriented eCommerce marketing.
            </p>
          </div>
        </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default EMProfitMachine