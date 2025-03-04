import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'
import BlueTick from '../../assets/img/blue-tick.png'
import { FaArrowRight } from 'react-icons/fa6'

const SEOAuditSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
          <MaxWidthWrapper className={"border-white"}>
          <LeftSideVerticalText text={"Free SEO Audit"} className="bg-myLightGray -left-14" />
            <div className="w-full lg:w-[50%] justify-self-center px-4 py-10 font-myFont">
            <div className="text-xl/8 md:text-4xl/14 text-myWhite text-center font-semibold mt-6"> 
            Your Free SEO Audit&nbsp;
            <HighlightedText text={"What to Expect 👀"} />
              </div>
              {[
                { heading: "Comprehensive Website Analysis",text: "We’ll dive deep into your site to uncover hidden issues holding you back." },
    { heading: "Competitive Landscape Evaluation", text: "Understand how you stack up against your competitors and where you can outperform them." },
    { heading: "Tailored Action Plan", text: "Get a step-by-step roadmap to boost your rankings, traffic, and revenue." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 font-myFont text-myWhite font-medium space-y-10 mt-10">
                  <img src={BlueTick} className="size-5 md:size-7 fill-myDarkPrimary flex-shrink-0 mt-2" />
                  <div>
                    <p className='font-bold text-lg/8 md:text-2xl/10'>{item.heading}</p>
                    <p className='text-lg/8 md:text-xl/10'>{item.text}</p>
                  </div>
                </div>
              ))}
                        <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6 rounded-xl cursor-pointer border-2 border-myPrimary mt-10 hover:bg-transparent group transition-colors duration-300">
                          <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl font-bold text-center">Claim your Free SEO Audit Session</p>
                          <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
                        </div>
              </div>
        </MaxWidthWrapper>
        </div>
      </div>
    <div className="bg-myPrimary -skew-y-[2deg] h-20"></div>
  </div>
  )
}

export default SEOAuditSection