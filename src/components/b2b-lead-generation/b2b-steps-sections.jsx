import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'
import { b2bStepsData } from '../../lib/constants'
import { FaArrowRight } from 'react-icons/fa6'

const B2BStepsSections = () => {
  return (
    <div className='py-10'>
      <MaxWidthWrapper className={"border-amber-300"}>
    <LeftSideVerticalText text={"Lenob.co Difference"} className="bg-myPrimary -left-22" />
      <div className="w-full lg:w-[90%] justify-self-center border border-red-600 px-2 py-10 ">
        {/*<img className="aspect-square justify-self-end" src={SmallWhiteStar} alt="Small-White-Star" />*/}
        <div className="text-3xl md:text-5xl/20 text-myBlack font-myFont font-semibold text-center">
          The&nbsp;   
            <HighlightedText text={"Lenob.co Difference"} />
            &nbsp;: Why We’re Your Best Partner
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-12 md:gap-4">
          {
            b2bStepsData.map((item) => (
              <div key={item.id} className="flex flex-col items-center font-myFont space-y-4 md:space-y-6">
                <img className="aspect-square" src={item.banner} alt="steps-image" />
                <p className="text-2xl font-bold text-myYellowText text-center">{item.title}</p>
                <p className="text-base text-myBlack text-center">{item.description}</p>
              </div>
            ))
          }
          </div>
                    <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6 rounded-xl cursor-pointer border-2 border-myPrimary mt-10 hover:bg-transparent group transition-colors duration-300">
                      <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl font-bold text-center">Claim your Free 30 Min Consultation</p>
                      <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
                    </div>
      </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default B2BStepsSections