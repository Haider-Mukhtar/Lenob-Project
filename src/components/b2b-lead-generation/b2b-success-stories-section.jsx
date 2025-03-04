import React from 'react'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'
import { FaArrowRight } from 'react-icons/fa6'
import { FiArrowUpRight } from 'react-icons/fi'

const B2BSuccessStoriesSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
      <MaxWidthWrapper>
      <LeftSideVerticalText text={"Success Stories"} className="bg-myLightGray -left-17" />
        <div className="w-full lg:w-[80%] justify-self-center px-4 space-y-8">
          <div className="font-myFont text-xl/8 md:text-4xl/14 font-bold text-myWhite text-center">
          <HighlightedText text={"Success Stories"} />
          &nbsp;See the Results for Yourself
          </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-10">
                
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard1 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">01</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-lg md:text-2xl font-bold text-myBlack mb-8">
                                Case Study: SaaS Company
                              </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Low response rates from cold outreach.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Combined Google Ads with LinkedIn messaging campaigns.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    A&nbsp;<span className='font-bold'>400%</span>increase in qualified leads in just two months.
                                  </div>
                                  <div className="flex justify-center items-center gap-1 px-8 py-2 rounded-full text-myWhite bg-myBlack justify-self-start hover:scale-105 transition-transform duration-300 cursor-pointer mt-10 group">
                                  <p className="font-myFont text-myWhite text-lg font-semibold">Read more</p>
                                  <FiArrowUpRight className="size-6 group-hover:rotate-45 duration-300" />
                                </div>
              </div>
                </div>
                
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard2 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">02</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-lg md:text-2xl font-bold text-myBlack mb-8">
                                Case Study: Financial Services Firm
                              </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    High cost-per-lead on Meta.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Implemented advanced re-targeting and lookalike audiences.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    Cut CPL by&nbsp;<span className='font-bold'>35%</span>&nbsp;while doubling lead volume.
                    </div>
                    
                <div className="flex justify-center items-center gap-1 px-8 py-2 rounded-full text-myWhite bg-myBlack justify-self-start hover:scale-105 transition-transform duration-300 cursor-pointer mt-10 group">
                                  <p className="font-myFont text-myWhite text-lg font-semibold">Read more</p>
                                  <FiArrowUpRight className="size-6 group-hover:rotate-45 duration-300" />
                                </div>
                                </div>
                </div>
                
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard3 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">03</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-lg md:text-2xl font-bold text-myBlack mb-8">
                                Case Study: Manufacturing Brand
                              </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Difficulty breaking into new verticals.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Built a targeted Google Ads campaign and accompanying email sequence.
                                  </div>
                                  <div className="text-lg">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    <span className='font-bold'> $500,000</span>&nbsp;in new contracts generated within three months.
                </div>
                <div className="flex justify-center items-center gap-1 px-8 py-2 rounded-full text-myWhite bg-myBlack justify-self-start hover:scale-105 transition-transform duration-300 cursor-pointer mt-10 group">
                                  <p className="font-myFont text-myWhite text-lg font-semibold">Read more</p>
                                  <FiArrowUpRight className="size-6 group-hover:rotate-45 duration-300" />
                                </div>
                                </div>
                </div>
                
          </div>
          <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6 rounded-xl cursor-pointer border-2 border-myPrimary mt-14 hover:bg-transparent group transition-colors duration-300">
          <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl font-bold text-center">Claim your Free 30 Min Consultation</p>
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

export default B2BSuccessStoriesSection