import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'

const B2BFrameworkSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
          <MaxWidthWrapper className={"border-white"}>
            <LeftSideVerticalText text={"B2B Lead Generation"} className="bg-myLightGray -left-21" />
            <div className="w-full lg:w-[80%] justify-self-center px-4 py-10 font-myFont">
              <div className="text-xl/8 md:text-4xl/14 text-myWhite text-center font-semibold "> 
              Our Proven&nbsp;
              <HighlightedText text={"B2B Lead Generation"} />
              &nbsp;Framework
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
                
              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myLigtBackground hover:scale-105 transition-transform duration-300">
                <div className="px-8 py-6 space-y-4 text-myWhite">
                <div className="text-xl md:text-2xl font-bold text-myGrayText mb-8">
                01
              </div>
                <div className="text-lg md:text-2xl font-bold text-myWhite mb-8">
                Google Ads for B2B: Be Found When They’re Searching
              </div>
                  <div className="text-lg">
                  When decision-makers are searching for solutions, your business needs to show up. We craft high-intent Google Ads campaigns that:
                    </div>
                    <ul className='text-lg list-disc list-inside'>
                      <li>Target high-value search terms.</li>
                      <li>Leverage advanced bidding strategies.</li>
                      <li>Optimize for clicks that convert into meetings.</li>
                    </ul>
                </div>
                </div>

                <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myLigtBackground hover:scale-105 transition-transform duration-300">
                  <div className="px-8 py-6 space-y-4 text-myWhite">
                  <div className="text-xl md:text-2xl font-bold text-myGrayText mb-8">
                  02
                </div>
                <div className="text-lg md:text-2xl font-bold text-myWhite mb-8">
                Meta Ads: Engage Decision-Makers Where They Scroll
              </div>
                  <div className="text-lg">
                  Executives are on social media more than you think. With precision targeting and attention-grabbing creatives, our Meta campaigns
                    </div>
                    <ul className='text-lg list-disc list-inside'>
                      <li>Build trust through retargeting.</li>
                      <li>Educate and nurture leads over time.</li>
                      <li>Turn casual scrollers into serious buyers.</li>
                    </ul>
                </div>
                </div>

                <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myLigtBackground hover:scale-105 transition-transform duration-300">
                  <div className="px-8 py-6 space-y-4 text-myWhite">
                  <div className="text-xl md:text-2xl font-bold text-myGrayText mb-8">
                  03
                </div>
                <div className="text-lg md:text-2xl font-bold text-myWhite mb-8">
                LinkedIn Ads: Your Gateway to Decision-Makers
              </div>
                  <div className="text-lg">
                  LinkedIn is the goldmine for B2B lead generation. We connect you directly with CEOs, Directors, and Procurement Heads through
                    </div>
                    <ul className='text-lg list-disc list-inside'>
                      <li>Laser-focused targeting by job title, industry, and company size.</li>
                      <li>Personalized InMail campaigns that get responses.</li>
                      <li>Sponsored posts designed to educate and convert.</li>
                    </ul>
                </div>
                </div>
                
</div>
            </div>
        </MaxWidthWrapper>
        </div>
      </div>
    <div className="bg-myPrimary -skew-y-[2deg] h-20"></div>
  </div>
  )
}

export default B2BFrameworkSection