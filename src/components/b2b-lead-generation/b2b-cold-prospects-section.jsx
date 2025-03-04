import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'

const B2BColdProspectsSection = () => {
  return (
    <div className='py-10'>
    <MaxWidthWrapper>
    <LeftSideVerticalText text={"Leads"} className="bg-myPrimary -left-5" />
    <div className="w-full lg:w-[70%] justify-self-center px-2">
    <div className="mx-10 text-xl/8 md:text-4xl/14 text-myBlack text-center font-semibold "> 
            How&nbsp;
            <HighlightedText text={"We Turn Cold Prospects into Hot"} />
            &nbsp;Leads
      </div>
      <div className='font-myFont text-myBlack mt-10'>
            <div className='flex gap-6'>
              <div className='' >
                <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#A990DD] text-myWhite font-bold'>
                  1
                </div>
                <div className='bg-[#A990DD] w-1 h-full justify-self-center'></div>
              </div>
              <div>
              <p className='font-bold text-lg/8 md:text-2xl/10'>Discovery & Strategy:</p>
              <p className='text-lg/8 md:text-xl/10'>We dive deep into your business to define your ideal customer profile (ICP) and craft a winning strategy.</p>
              </div>
            </div>
            <div className='flex gap-6 mt-10'>
              <div className='' >
                <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#A990DD] text-myWhite font-bold'>
                  2
                </div>
                <div className='bg-[#A990DD] w-1 h-full justify-self-center'></div>
              </div>
              <div>
              <p className='font-bold text-lg/8 md:text-2xl/10'>Advanced Ad Targeting:</p>
              <p className='text-lg/8 md:text-xl/10'>Using the power of Google, Meta, and LinkedIn, we create hyper-targeted campaigns that reach the right people.</p>
              </div>
            </div>
            <div className='flex gap-6 mt-10'>
              <div className='' >
                <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#A990DD] text-myWhite font-bold'>
                  3
                </div>
                <div className='bg-[#A990DD] w-1 h-full justify-self-center'></div>
              </div>
              <div>
              <p className='font-bold text-lg/8 md:text-2xl/10'>Lead Nurturing Sequences:</p>
              <p className='text-lg/8 md:text-xl/10'>Through email and retargeting, we keep your leads engaged and guide them through the funnel.</p>
              </div>
            </div>
            <div className='flex gap-6 mt-10'>
              <div className='' >
                <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#A990DD] text-myWhite font-bold'>
                  4
                </div>
              </div>
              <div>
              <p className='font-bold text-lg/8 md:text-2xl/10'>A/B Testing & Optimization:</p>
              <p className='text-lg/8 md:text-xl/10'>We constantly refine your campaigns to ensure maximum efficiency and ROI.</p>
              </div>
            </div>
      </div>
        </div>
    </MaxWidthWrapper>
    </div>
  )
}

export default B2BColdProspectsSection