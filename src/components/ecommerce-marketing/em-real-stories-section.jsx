import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa6'

const EMRealStoriesSection = () => {
  return (
    <div className="py-16">
      <MaxWidthWrapper>
      <LeftSideVerticalText text={"Results"} className="bg-myPrimary -left-7" />
        <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-4 space-y-8">
          <div className="font-myFont text-3xl md:text-5xl/20 font-bold text-myBlack text-center">
          <HighlightedText text={"Success Stories"} />
          &nbsp;Real Brands, Real Results
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-10">
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard1 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">01</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl md:text-2xl font-bold text-myBlack mb-8">
                                Case Study: Fashion Retailer
                              </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Struggling to scale Facebook Ads profitably.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Implemented advanced audience segmentation and dynamic ad creatives.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    A&nbsp;<span className='font-bold'>500% increase</span>in ROAS and a&nbsp;<span className='font-bold'>200% boost</span>&nbsp;in sales within three months.
                                  </div>
                                  <div className="flex justify-center items-center gap-1 px-8 py-2 rounded-full text-myWhite bg-myBlack justify-self-start hover:scale-105 transition-transform duration-300 cursor-pointer group">
                                  <p className="font-myFont text-myWhite text-lg font-bold">Read more</p>
                                  <FiArrowUpRight className="size-6 group-hover:rotate-45 duration-300" />
                                </div>
              </div>
                              </div>
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard2 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">02</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl md:text-2xl font-bold text-myBlack mb-8">
                                Case Study: Beauty Brand
                              </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Low conversion rates on product pages.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Full CRO audit and implementation of high-converting designs.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    A&nbsp;<span className='font-bold'>3x increase</span>&nbsp;in conversion rate and a&nbsp;<span className='font-bold'>400%</span>&nbsp;revenue boost.
                </div>
                <div className="flex justify-center items-center gap-1 px-8 py-2 rounded-full text-myWhite bg-myBlack justify-self-start hover:scale-105 transition-transform duration-300 cursor-pointer group">
                                  <p className="font-myFont text-myWhite text-lg font-bold">Read more</p>
                                  <FiArrowUpRight className="size-6 group-hover:rotate-45 duration-300" />
                                </div>
                                </div>
                              </div>
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard3 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">03</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl md:text-2xl font-bold text-myBlack mb-8">
                                Case Study: Home Goods Store
                              </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    High cart abandonment rates.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Deployed a multi-channel abandoned cart recovery strategy.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    Recovered&nbsp;<span className='font-bold'>$50,000</span>&nbsp;in lost revenue within two months.
                </div>
                <div className="flex justify-center items-center gap-1 px-8 py-2 rounded-full text-myWhite bg-myBlack justify-self-start hover:scale-105 transition-transform duration-300 cursor-pointer group">
                                  <p className="font-myFont text-myWhite text-lg font-bold">Read more</p>
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
  )
}

export default EMRealStoriesSection