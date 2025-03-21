import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'

const EMHiddenCost = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
          <MaxWidthWrapper>
          <LeftSideVerticalText text={"Owner Trust"} className="bg-myLightGray -left-12" />
            <div className="w-full lg:w-[60%] justify-self-center px-2">
            <div className="text-xl/8 md:text-4xl/14 text-myWhite text-center font-semibold "> 
            <HighlightedText text={"The Hidden Costs"} />
            &nbsp;of Neglecting eCommerce Marketing
              </div>
              <p className='font-myFont text-lg/8 md:text-xl/10 text-myWhite font-bold mt-10 text-center'>
              Every day you’re not investing in marketing, you’re leaving money on the table. Here’s what’s at stake:
              </p>
              <div className='font-myFont text-lg/8 md:text-xl/10 text-myWhite'>
              <ul className='list-disc list-inside'>
                <li className='font-bold mt-8'>
                Lost Sales Opportunities:
                  <span className='font-normal'>Every visitor who doesn’t convert is revenue left on the table.</span>
                </li>
                <li className='font-bold mt-8'>
                Skyrocketing Ad Costs:
                  <p className='font-normal'>Without optimization, you’re burning money on ads that don’t deliver.</p>
                </li>
                <li className='font-bold mt-8'>
                Brand Obscurity:
                  <p className='font-normal'>If customers can’t find you, they’ll find your competitors.</p>
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

export default EMHiddenCost