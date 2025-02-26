import React from 'react'
import HighlightedText from '../ui/highlighted-text'
import MaxWidthWrapper from '../max-width-wrapper'
import FacebookPartner from '../../assets/img/fb-partner.png' 
import DotIcon from '../../assets/img/dot-icon.png'
import RightPath from '../../assets/img/right-path.png'
import LeftPath from '../../assets/img/left-path.png'
import { FaArrowRight } from "react-icons/fa6";
import LeftSideVerticalText from '../ui/left-side-vertical-text'

const FA6StepsSection = () => {
  return (
    <div className=" bg-myPrimary -skew-y-[2deg]">
      <div className=" bg-myDarkBackground skew-y-[2deg]">
        <MaxWidthWrapper className={"border-amber-300"}>
        <LeftSideVerticalText text={"6 Approach"} className="bg-myLightGray -left-11" />
          <div className="w-full lg:w-[80%] justify-self-center px-2 py-10 font-myFont">
            <div className="text-3xl md:text-5xl/20 text-myWhite text-center font-semibold "> 
              <HighlightedText text={"Our 6-Step Approach"} />
              &nbsp;to Facebook Ad Success
            </div>
            <div className='justify-self-center my-10'>
              <img className='object-cover h-36' src={FacebookPartner} alt='Facebook-partner-image' />
            </div>
            <p className="text-lg md:text-2xl text-myWhite text-center">Here's how we turn ordinary campaigns into extraordinary results:</p>
            {/*Desktop*/}
            <div className='text-myBlack font-myFont mt-10 hidden lg:block'>
              <div className='flex  justify-self-start'>
                <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                  <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                  <div className='text-lg md:text-3xl/12'>
                    <span className='font-bold'>Discover:</span>
                    &nbsp;We dig deep to understand your audience, goals, and industry.
                  </div>
                </div>
                <img className='mt-14 h-48' src={RightPath} />
              </div>
              <div className='flex justify-end'>
                <img className='mt-14 h-48' src={LeftPath} />
                <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                  <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                  <div className='text-lg md:text-3xl/12'>
                    <span className='font-bold'>Strategize:</span>
                    &nbsp;We craft a custom campaign plan tailored to your objectives.
                  </div>
                </div>
              </div>
              <div className='flex  justify-self-start'>
              <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <span className='font-bold'>Create:</span>
                  &nbsp;Our team designs eye-catching ads that resonate with your audience.
                </div>
              </div>
              <img className='mt-14 h-48' src={RightPath} />
              </div>
              <div className='flex justify-end'>
              <img className='mt-14 h-48' src={LeftPath} />
              <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <span className='font-bold'>Launch:</span>
                  &nbsp;We execute campaigns with precision and ensure smooth performance.
                </div>
              </div>
              </div>
              <div className='flex  justify-self-start'>
              <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <span className='font-bold'>Optimize:</span>
                  &nbsp;Daily tweaks to targeting, creative, and budget for maximum ROI.
                </div>
              </div>
              <img className='mt-14 h-48' src={RightPath} />
              </div>
              <div className='flex justify-end'>
                <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <span className='font-bold'>Report:</span>
                  &nbsp;Clear, actionable insights so you see exactly how your investment delivers results.
                </div>
              </div>
              </div>
            </div>
            {/*Mobile*/}
            <div className='text-myBlack font-myFont mt-10 space-y-4 block lg:hidden'>
              <div className='flex  justify-self-start'>
                <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                  <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                  <div className='text-lg md:text-3xl/12'>
                    <span className='font-bold'>Discover:</span>
                    &nbsp;We dig deep to understand your audience, goals, and industry.
                  </div>
                </div>
              </div>
              <div className='flex justify-end'>
                <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                  <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                  <div className='text-lg md:text-3xl/12'>
                    <span className='font-bold'>Strategize:</span>
                    &nbsp;We craft a custom campaign plan tailored to your objectives.
                  </div>
                </div>
              </div>
              <div className='flex  justify-self-start'>
              <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <span className='font-bold'>Create:</span>
                  &nbsp;Our team designs eye-catching ads that resonate with your audience.
                </div>
              </div>
              </div>
              <div className='flex justify-end'>
              <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <span className='font-bold'>Launch:</span>
                  &nbsp;We execute campaigns with precision and ensure smooth performance.
                </div>
              </div>
              </div>
              <div className='flex  justify-self-start'>
              <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <span className='font-bold'>Optimize:</span>
                  &nbsp;Daily tweaks to targeting, creative, and budget for maximum ROI.
                </div>
              </div>
              </div>
              <div className='flex justify-end'>
                <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <span className='font-bold'>Report:</span>
                  &nbsp;Clear, actionable insights so you see exactly how your investment delivers results.
                </div>
              </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6 mt-10 rounded-xl cursor-pointer border-2 border-myPrimary hover:bg-transparent group transition-colors duration-300">
                          <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl text-center font-bold">Claim your Free 30 Min Consultation</p>
                          <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
                        </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default FA6StepsSection