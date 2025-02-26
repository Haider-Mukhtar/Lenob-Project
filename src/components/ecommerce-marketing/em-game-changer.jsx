import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'
import { FaArrowRight } from 'react-icons/fa6'

const EMGameChanger = () => {
  return (
    <div>
    <MaxWidthWrapper className={"border-white"}>
        <div className="w-full lg:w-[80%] justify-self-center px-4 py-10 font-myFont">
        <div className="text-3xl md:text-5xl/20 text-myBlack text-center font-semibold "> 
        <HighlightedText text={"Our Game-Changing Approach"} />
        &nbsp;to eCommerce Success
          </div>
          <div className='font-myFont text-xl md:text-3xl text-myBlack'>
          <ul className='list-decimal list-inside'>
            <li className='font-bold mt-10'>
            Precision Advertising
              <p className='font-normal'>We use advanced audience segmentation to get your products in front of the right people at the right time. Think dynamic retargeting, lookalike audiences, and interest-based targeting that converts.</p>
            </li>
            <li className='font-bold mt-10'>
            High-Converting Landing Pages
              <p className='font-normal'>Your product pages aren’t just pages—they’re selling machines. We optimize your headlines, copy, visuals, and CTAs to ensure every visitor clicks “Add to Cart.”</p>
            </li>
            <li className='font-bold mt-10'>
            Email & SMS Mastery
              <p className='font-normal'>Nurture leads, recover abandoned carts, and build long-term loyalty. Our tailored email and SMS campaigns turn one-time buyers into repeat customers.</p>
            </li>
            <li className='font-bold mt-10'>
            Google Shopping Domination
              <p className='font-normal'>We optimize your product feeds, bidding strategies, and campaigns to dominate the shopping carousel and drive high-converting traffic.</p>
            </li>
            <li className='font-bold mt-10'>
            A/B Testing & Continuous Optimization
              <p className='font-normal'>We never settle. Every campaign is monitored, tested, and tweaked to ensure you’re getting the best possible results.</p>
            </li>
          </ul>
          </div>
                    <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6 rounded-xl cursor-pointer border-2 border-myPrimary mt-14 hover:bg-transparent group transition-colors duration-300">
                      <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl font-bold text-center">Claim your Free 30 Min Consultation</p>
                      <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
                    </div>
        </div>
      </MaxWidthWrapper>
      </div>
  )
}

export default EMGameChanger