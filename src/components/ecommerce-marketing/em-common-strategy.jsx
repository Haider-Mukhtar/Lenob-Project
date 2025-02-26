import React from 'react'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'

const EMCommonStrategy = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
      <MaxWidthWrapper>
      <LeftSideVerticalText text={"Game Changer"} className="bg-myLightGray -left-14" />
        <div className="w-full lg:w-[80%] justify-self-center px-2">
        <div className="mx-10 text-3xl md:text-5xl/20 text-myWhite text-center font-semibold "> 
        The Common&nbsp;
        <HighlightedText text={"Struggles eCommerce Owners Face"} />
          </div>
          <div className="font-myFont text-xl md:text-3xl md:mx-12 text-myWhite my-10">
          <span className='font-bold'>Facebook Ads are not just ads.</span> They’re your business’s front-row seat to billions of potential customers. Here’s how we make them work for you: 👉
          </div>
          <div className='font-myFont text-xl md:text-3xl text-myWhite'>
            <ul className='list-disc list-inside'>
              <li className='font-bold mt-16'>
                Struggle #1: Too Much Traffic, Not Enough Sales
                <p className='font-normal'>Driving traffic is only half the battle. What happens when your visitors leave without buying? At Lenob.co, we focus on conversion-first strategies that transform window shoppers into loyal buyers.</p>
              </li>
              <li className='font-bold mt-16'>
              Struggle #2: Skyrocketing Ad Costs
                <p className='font-normal'>Every click gets more expensive by the day. Without proper optimization, you’re burning through budgets with little to show for it. Our advanced ad strategies ensure you get maximum ROI from every dollar spent.</p>
              </li>
              <li className='font-bold mt-16'>
              Struggle #3: Fierce Competition
                <p className='font-normal'>Big brands with massive budgets are everywhere. We level the playing field with tailored, data-driven strategies that give your business the competitive edge.</p>
              </li>
              <li className='font-bold mt-16'>
              Struggle #4: Retaining Customers
                <p className='font-normal'>Acquiring a new customer is costly. Retaining one? Priceless. We build email and SMS strategies that keep your customers coming back for more.</p>
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

export default EMCommonStrategy