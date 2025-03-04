import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'
import { FaArrowRight } from 'react-icons/fa6'

const EMOwnerTrust = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
          <MaxWidthWrapper>
          <LeftSideVerticalText text={"Owner Trust"} className="bg-myLightGray -left-12" />
            <div className="w-full lg:w-[60%] justify-self-center px-2">
            <div className="text-xl/8 md:text-4xl/14 text-myWhite text-center font-semibold "> 
            <HighlightedText text={"The Lenob.co Difference:"} />
            &nbsp;Why eCommerce Owners Trust Us
              </div>
              <div className='font-myFont text-lg/8 md:text-xl/10 text-myWhite'>
              <ul className=''>
                <li className='font-bold mt-14'>
                We Don’t Just Deliver Clicks—We Deliver Sales
                  <p className='font-normal'>Most agencies stop at driving traffic. We take it further by focusing on conversions, ensuring every visitor adds value to your bottom line.</p>
                </li>
                <li className='font-bold mt-14'>
                Tailored Strategies for Every Business
                  <p className='font-normal'>No cookie-cutter solutions here. Whether you’re selling fashion, beauty, or electronics, we create custom campaigns designed to fit your niche.</p>
                </li>
                <li className='font-bold mt-14'>
                Transparent Communication, Always
                  <p className='font-normal'>Tired of vague reports and hidden fees? With Lenob.co, you’ll always know exactly what’s happening with your campaigns.</p>
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

export default EMOwnerTrust